
// ฝากไว้ มาเขียนด้วย
var LiveTimer: {
		restart: function(b) {
			this.serverTime = b;
			this.localStartTime = new Date().getTime() / 1000;
			this.updateTimeStamps()
		},

		updateTimeStamps: function() {
			JQ.LiveTimer.timestamps = $(".time", document.body);
			JQ.LiveTimer.startLoop(0)
		},

		addTimeStamps: function(e) {
			if(!e || !JQ.LiveTimer.timestamps) {
				return
			}
			var f = $(".time", e);
			for(var d = 0; d < f.length; ++d) {
				JQ.LiveTimer.timestamps.push(f[d])
			}
			JQ.LiveTimer.startLoop(0)
		},

		startLoop: function(b) {
			this.stop();
			this.timeout = setTimeout(function() {
				JQ.LiveTimer.loop()
			}, b)
		},

		stop: function() {
			clearTimeout(this.timeout)
		},

		loop: function() {
			var f = Math.floor(new Date().getTime() / 1000 - JQ.LiveTimer.localStartTime);
			var e = -1;
			JQ.LiveTimer.timestamps.each(function(a, b) {
				var c = +new Date($(b).attr("title")) / 1000;
				var g = JQ.LiveTimer.renderRelativeTime(JQ.LiveTimer.serverTime + f, c);
				if(g.text) {
					$(b).text(g.text)
				} else {
					$(b).text(new Date($(b).attr("title")).toLocaleString())
				}
				if(g.next != -1 && (g.next < e || e == -1)) {
					e = g.next
				}
			});
			if(e != -1) {
				var d = Math.max(20000, e * 1000);
				JQ.LiveTimer.timeout = setTimeout(function() {
					JQ.LiveTimer.loop()
				}, d)
			}
		},

		renderRelativeTime: function(l, k) {
			var j = {
				text: "",
				next: -1
			};
			if(l - k > (12 * 3600) || (new Date(l * 1000).getDay() != new Date(k * 1000).getDay())) {
				return j
			}
			var i = l - k,
				g = Math.floor(i / 60),
				h = Math.floor(g / 60);
			if(g < 1) {
				j.text = "a few seconds ago";
				j.next = 60 - i % 60;
				return j
			}
			if(h < 1) {
				if(g == 1) {
					j.text = "about a minute ago"
				} else {
					j.text = "{0} minutes ago".format(g)
				}
				j.next = 60 - i % 60;
				return j
			}
			if(h != 11) {
				j.next = 3600 - i % 3600
			}
			if(h == 1) {
				j.text = "about an hour ago";
				return j
			}
			j.text = "{0} hours ago".format(h);
			return j
		}
	}







	TaskRunner: function(e) {
		e = e || 10;
		var f = [],
			a = [],
			b = 0,
			g = false,
			d = function() {
				g = false;
				clearInterval(b);
				b = 0
			},
			h = function() {
				if(!g) {
					g = true;
					b = setInterval(i, e)
				}
			},
			c = function(j) {
				a.push(j);
				if(j.onStop) {
					j.onStop.apply(j.scope || j)
				}
			},
			i = function() {
				var l = a.length,
					n = new Date().getTime();
				if(l > 0) {
					for(var q = 0; q < l; q++) {
						f.remove(a[q])
					}
					a = [];
					if(f.length < 1) {
						d();
						return
					}
				}
				for(var q = 0, p, k, m, j = f.length; q < j; ++q) {
					p = f[q];
					k = n - p.taskRunTime;
					if(p.interval <= k) {
						m = p.run.apply(p.scope || p, p.args || [++p.taskRunCount]);
						p.taskRunTime = n;
						if(m === false || p.taskRunCount === p.repeat) {
							c(p);
							return
						}
					}
					if(p.duration && p.duration <= (n - p.taskStartTime)) {
						c(p)
					}
				}
			};
		this.start = function(j) {
			f.push(j);
			j.taskStartTime = new Date().getTime();
			j.taskRunTime = 0;
			j.taskRunCount = 0;
			h();
			return j
		};
		this.stop = function(j) {
			c(j);
			return j
		};
		this.stopAll = function() {
			d();
			for(var k = 0, j = f.length; k < j; k++) {
				if(f[k].onStop) {
					f[k].onStop()
				}
			}
			f = [];
			a = []
		}
	},
	,