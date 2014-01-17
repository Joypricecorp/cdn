/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 |	COPY RIGHT BY :) JoyPrice Corporation CO.,LTD. 				 |
 + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

!function($){
	$.expr[':'].Contains = function(li, i , m){
		return ($(li).data('value') || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	};

	$.fn.liFilters = function(option){
		var $list = option.list;

		$(this)
	      .change( function(){
	        var filter = $(this).val();

	        if(filter){
	          $matches = $list.find('li:Contains(' + filter + ')');
	          $('li', $list).not($matches).hide();
	          $matches.show();
	             
	        } else {
	          $list.find("li").show();
	        }
	        return false;
	      })
	    .keyup( function(){
	        $(this).change();
	    });

	    return this;
	};

	

}(window.jQuery);

!function($) {
	$.fn.gridtable = function(options){

		var tbl     = $(this),
			tbody   = $('tbody', tbl),
			height  = $('colgroup', tbl).data('height'),
			cols    = $('col', tbl)
		;

		options = $.extend({
			thead: true,
			tbody: true,
			tfoot: true
		}, (options || {}));

		var setcol = function(trs, col){
			var tr = 0;
			for(;tr < trs.length; tr++) {
				var tds = $(col, trs[tr]);
				var i = 0, j = 0;
				for(;i < tds.length; i++){
					var w = $(cols[j]).width();
					var td = $(tds[i]);
					var cn = php.intval(td.attr('colspan'));

					if(cn){
						var n = 0;
						w = 0;
						for(;n < cn; n++){
							w += $(cols[n]).width();
						}
						j =+ n;
					}else{
						j++;
					}

					if(w) td.css('width', w + 'px');
				}
			}
		};

		tbody.height(height);

		if(options.thead !== false)
			setcol($('thead > tr', tbl), 'th');

		if(options.tbody !== false)
			setcol($('tbody > tr', tbl), 'td');

		if(options.tfoot !== false)
			setcol($('tfoot > tr', tbl), 'td');

		tbl.addClass('table-grid');
	};
}(window.jQuery);

if(window.Modernizr){
	(function($) {

		$.fn.replaceholder = function(options) {
			var $placeholder;

			(this.length > 0) ? $this = $(this) : $this = $('input[placeholder]');

			return $this.each(function() {
				settings = jQuery.extend(options);
				var $placeholder = $(this);
				if ($placeholder.length > 0) {
					var attrPh = $placeholder.attr('placeholder');
					$placeholder.attr('value', attrPh);
					$placeholder.bind('focus', function() {
						var $this = $(this);
						if($this.val() === attrPh)
							$this.val('').removeClass('placeholder');
					}).bind('blur', function() {
						var $this = $(this);
						if($this.val() === '')
							$this.val(attrPh).addClass('placeholder');
					});
				}
			});
		};

	})(jQuery);

	jQuery(function($){
	  $(function(){
	    if (!Modernizr.input.placeholder) { $("input[placeholder], textarea[placeholder]").replaceholder() }
	  })
	});
}

!function($){
	$.fn.center = function(){
		this.css({
			'position':'absolute',
			'left':'50%',
			'top':'50%'
		});

		this.css({
			'margin-left': -this.width() / 2 + 'px',
			'margin-top': -this.height() / 2 + 'px'
		});

		this.attr('data-jquery-center', 'true');

		// @TODO REMOVE RELATED BY DOM RESIZE PLUGIN!
		/*if(!this.data('jquery-resize-plugin')){
			this.data('jquery-resize-plugin', true);
			this.bind('resize.jquery-center-plugin', function(e){
				$(e.target).center();
			});
		}*/

		return this;
	};

	/*$(window).bind('resize.data-jqiery-center', function(){
	 $('[data-jquery-center="true"]').center();
	 });*/
}(window.jQuery);
/**
 * $.parseParams - parse query string paramaters into an object.
 * @todo conside to change to jquery-parsequery
 * @see https://github.com/rapportive-oss/jquery-parsequery
 */
!function($){
	var re = /([^&=]+)=?([^&]*)/g;
	var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
	var decode = function(str){return decodeURIComponent( str.replace(decodeRE, " ") );};
	$.parseParams = function(query){
	    var params = {}, e;
	    while ( e = re.exec(query) ){ 
	        var k = decode( e[1] ), v = decode( e[2] );
	        if (k.substring(k.length - 2) === '[]'){
	            k = k.substring(0, k.length - 2);
	            (params[k] || (params[k] = [])).push(v);
	        }
	        else params[k] = v;
	    }
	    return params;
	};
}(window.jQuery);

/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * @TODO REMOVE
 */
/*(function($, h, c){
	var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j + "-special-event", b = "delay", f = "throttleWindow";
	e[b] = 250;
	e[f] = true;
	$.event.special[j] = {setup: function(){
		if (!e[f] && this[k]){
			return false
		}
		var l = $(this);
		a = a.add(l);
		$.data(this, d, {w:l.width(), h:l.height()});
		if (a.length === 1){
			g()
		}
	}, teardown: function(){
		if (!e[f] && this[k]){
			return false
		}
		var l = $(this);
		a = a.not(l);
		l.removeData(d);
		if (!a.length){
			clearTimeout(i)
		}
	}, add: function(l){
		if (!e[f] && this[k]){
			return false
		}
		var n;

		function m(s, o, p){
			var q = $(this), r = $.data(this, d);
			r.w = o !== c ? o : q.width();
			r.h = p !== c ? p : q.height();
			n.apply(this, arguments)
		}

		if ($.isFunction(l)){
			n = l;
			return m
		} else {
			n = l.handler;
			l.handler = m
		}
	}};
	function g(){
		i = h[k](function(){
			a.each(function(){
				var n = $(this), m = n.width(), l = n.height(), o = $.data(this, d);
				if (m !== o.w || l !== o.h){
					n.trigger(j, [o.w = m, o.h = l])
				}
			});
			g()
		}, e[b])
	}
})(jQuery, this);*/

!function($){
	$.fn.numeric = function(decimal, callback){
		decimal = decimal || ".";
		callback = typeof callback === "function" ? callback : function(){
		};
		this.keypress(function(e){
			var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
			// allow enter/return key (only when in an input box)
			if (key === 13 && this.nodeName.toLowerCase() === "input"){
				return true;
			} else if (key === 13){
				return false;
			}
			var allow = false;
			// allow Ctrl+A
			if ((e.ctrlKey && key === 97 /* firefox */ ) || (e.ctrlKey && key === 65) /* opera */) return true;
			// allow Ctrl+X (cut)
			if ((e.ctrlKey && key === 120 /* firefox */ ) || (e.ctrlKey && key === 88) /* opera */) return true;
			// allow Ctrl+C (copy)
			if ((e.ctrlKey && key === 99 /* firefox */ ) || (e.ctrlKey && key === 67) /* opera */) return true;
			// allow Ctrl+Z (undo)
			if ((e.ctrlKey && key === 122 /* firefox */ ) || (e.ctrlKey && key === 90) /* opera */) return true;
			// allow or deny Ctrl+V (paste), Shift+Ins
			if ((e.ctrlKey && key === 118 /* firefox */ ) || (e.ctrlKey && key === 86) /* opera */ || (e.shiftKey && key === 45)) return true;
			// if a number was not pressed
			if (key < 48 || key > 57){ /* '-' only allowed at start */
				if (key === 45 && this.value.length === 0) return true;
				/* only one decimal separator allowed */
				if (key === decimal.charCodeAt(0) && this.value.indexOf(decimal) !== -1){
					allow = false;
				}
				// check for other keys that have special purposes
				if (key !== 8 /* backspace */ && key !== 9 /* tab */ && key !== 13 /* enter */ && key !== 35 /* end */ && key !== 36 /* home */ && key !== 37 /* left */ && key !== 39 /* right */ && key !== 46 /* del */){
					allow = false;
				} else {
					// for detecting special keys (listed above)
					// IE does not support 'charCode' and ignores them in keypress anyway
					if (typeof e.charCode !== "undefined"){
						// special keys have 'keyCode' and 'which' the same (e.g. backspace)
						if (e.keyCode === e.which && e.which !== 0){
							allow = true;
						}
						// or keyCode !== 0 and 'charCode'/'which' = 0
						else if (e.keyCode !== 0 && e.charCode === 0 && e.which === 0){
							allow = true;
						}
					}
				}
				// if key pressed is the decimal and it is not already in the field
				if (key === decimal.charCodeAt(0) && this.value.indexOf(decimal) === -1){
					allow = true;
				}
			} else {
				allow = true;
			}
			return allow;
		}).blur(function(){
				var val = $(this).val();
				if (val !== ""){
					var re = new RegExp("^\\d+$|\\d*" + decimal + "\\d+");
					if (!re.exec(val)){
						callback.apply(this);
					}
				}
			});
		return this;
	};
}(window.jQuery);

!function($){

	// @todo get data is set form data-api
	$.fn.xdata = function(path){
		var xpath = 'data-';
		if (path !== '*' && path !== '' && path){
			xpath += path + '-';
		}

		var data = {};
		var attr = this[0].attributes;

		for (var key in attr){
			if (!isNaN(key)){
				if (attr[key].name.substr(0, xpath.length) == xpath){
					var value = attr[key].value;

					if (/true|false/i.test(value)){
						value = (value.toLowerCase() === 'true');
					}

					if (JP.isNumber(value)) value = JP.toInt(value);

					var nodes = attr[key].name.replace(xpath, '').split('-');

					if (nodes.length > 1){
						var dt = data;
						for (var i = 0; i < (nodes.length - 1); i++){
							var node = nodes[i];
							dt = dt[node] ? dt[node] : (dt[node] = {});
						}
						dt[nodes[i]] = value;
					} else {
						data[nodes[0]] = value;
					}
				}
			}
		}

		return data;
	};

}(window.jQuery);

!function($){
	var EL = function(name){
		return $('#' + name, G.me).length ? $('#' + name, G.me) : $('[name="' + name + '"]', G.me);
	};

	var G, Form = function(element, options){

		this.me			= element[0];
		this.$me 		= $(this.me);
		this.form 		= JFormBasic(this.me);
		this.options 	= $.extend({}, $.fn.form.defaults, options);

		G = this;

		this.init();

		if(this.options.focus){
			// @todo check jquery selector like .,# now assume the name
			EL(this.options.focus).focus();
		} else {
			$('input,select,textarea', this.me).each(function(i, el){
		        if(el.tabIndex == 0){
		        	$(el).focus();
		        	return false;
		        }
		    });
		}

		this.$me.data('validate-callback', FormValidateCallback);

		

		if (G.options.isSearch){
			G.initsearch();
		}

		if (G.options.submit){
			G.$me.on('submit.jform', function(){
				if(typeof G.options.submit == 'function'){
					G.options.submit.call(G.me, G);
				} else {
					G.submit(G.options.submit);
				}
			});
		}

		$('[data-validate-typing]', this.me).each(function(i, el){
			$(el).keyup(function(e){
				JIsValidFields(G.me, {
					fields:$(this),
					error_type:'custom',
					error_css:G.options.error_css_el,
					onresult:FieldValidateCallback,
					preventFormCallback:true
				});
			});
		});

		$('[data-validate-onchange]', this.me).each(function(i, el){
			$(el).change(function(){
				JIsValidFields(G.me, {
					fields:$(this),
					error_type:'custom',
					error_css:G.options.error_css_el,
					onresult:FieldValidateCallback,
					preventFormCallback:true
				});
			});
		});
	};

	var FieldValidateCallback = function(res, form){
		var name = $(this).attr('name')
			;

		// clear invalid message
		if (!res.error && !res.v_error){
			$('.invalid', $(this).parent('.item')).fadeOut('fast', function(){
				$(this).remove();
			});
		} else {
			display_el_error(this);
		}

	};

	var FormValidateCallback = function(){

		if(G.options.error_msg_show !== false || G.options.error_msg_alert === true){
			var error_els_display = function(error_els){
				$.each(error_els, function(i, el){
					display_el_error(el);
				});
			};

			$('.form-msg', this).remove();

			var invalids = $('.invalid', this),
				error_els = $(this).data('error_els')
				;

			if (invalids.length){
				invalids.fadeOut('fast', function(){
					$(this).remove();
					error_els_display(error_els);
				});
			} else {
				error_els_display(error_els);
			}
		}

	};

	var display_el_error = function(el){
		var $el = $(el);
		var result = $el.data('validate-error-result');
		var ct = $el.parents('.field');
		var tg = $('.invalid', ct);

		if (!tg.length)
			tg = $('<div class="invalid alert alert-error"></div>')
				.appendTo($('.item', ct))
				.data('el-anme', $el.attr('name'))
			;

		tg.fadeIn(20, function(){
			$(this).html('<button type="button" class="close" data-dismiss="alert">×</button>' + result.error_msg);
		});
	};

	Form.prototype = {
		constructor: Form,

		init: function(){
			cs.log('fn.form.init');

			var me = this;
			// init search field
			var field_search = $('[type="search"]', this.me);
			if(field_search.length){
				var itm_owner = field_search.parent('.item');
				var btn_clear = $('.clear-search', itm_owner);
				var clear_search = function(input){
					var val = $(input).change().val();
					btn_clear.css('display', val ? 'block' : 'none');
				};

				field_search.keyup(function(){
					clear_search(this);

					if(me.options.onsearch_typing)
						me.options.onsearch_typing.call(me, this);
				});

				btn_clear.click(function(){
					field_search.val('');
					clear_search(field_search.get(0));

					if(me.options.onsearch_clear)
						me.options.onsearch_clear.call(me, btn_clear, field_search);
				});
			}

			if(this.options.geo){
				this.options.geo.scope = this.me;

				var pvn = $(php.sprintf('[name="%s"]', this.options.geo.options.pvn.name), this.me);
				if(pvn.length && !$('option', pvn).length)
					this.options.geo.pvn();
			}
		},

		isvalid: function(){

			return JIsValidFields(this.me, {
				error_type: this.options.error_msg_alert ? 'alert' : 'custom',
				error_css: this.options.error_css_el
			});

		},

		/**
		 * apply new data to this form
		 *
		 * @param {object} data the raw data to matching this field
		 * @param {boolean} reset reset this form before
		 */
		apply: function(data, reset){
			// reset before
			if(reset !== false) this.reset();

			if(this.options.geo)
				this.options.geo.apply(data);

			for (var i in data){
				var el = EL(i);

				if (!el.length) continue;

				var t = null;

				try {
					t = el.attr('type').toLowerCase();
				} catch (e){ /*continue if textarea (not type)*/
				}

				// fire change event
				if (t == 'radio' || t == 'checkbox'){
					$('[name=' + i + '][value=' + data[i] + ']', this.me).attr('checked', 'checked').change();
				} else {
					el.val(data[i]).change();
				}
			}

			return this.$me;
		},

		field: function(name){
			return this.form.el(name);
		},
		
		reset: function(){
			this.me.reset();
			return this;
		},
		
		clear: function(){
			$('input[type=text],input[type=hidden],input[type=password],textarea,select', this.me).val('').removeClass(this.options.error_css_el).change();
			$('input[type=checkbox],input[type=radio]', this.me).attr('checked', false).removeClass(this.options.error_css_el).change();

			return this.$me;
		},

		/**
		 * get/set/retrive form data
		 *
		 * @param {String|Boolean} key
		 *							- string type of key and undefined of val return form data of key
		 *							- string type of key and NOT undefined of val mean set data of key of this form
		 *							- otherwise of this retrive data serializeArray
		 * @param {Mixed} val
		 *
		 * @return Mixed
		 */
		data: function(key, val){
			if(typeof key == 'string' && typeof val != 'undefined'){
				return this.form.val(key, val);
			}

			if(typeof key == 'string' && typeof val == 'undefined'){
				return this.form.val(key);
			}

			return this.form.data();
		},

		display: {

			init: function(valid){
				
				G.$me[valid ? 'removeClass' : 'addClass']('invalid');
				G.$me[valid ? 'addClass' : 'removeClass']('valid');

				// @note by our UI .modal-header, .box-form-header not exist in the same form.
				var md = $('.modal-header, .box-form-header', G.me),
					tg = md.length ? md : $('.title', G.me),
					mt = 'insertAfter'
				;

				if (!tg.length){
					tg = G.$me;
					mt = 'prependTo';
				}

				var el = $('.form-msg', G.me);
				if (el.length) el.remove();

				return {
					tg:tg, mt:mt, el:el
				}
			},

			invalid: function(msg){
				var init = this.init(false);

				if (typeof msg === 'object'){
					init.el = $(
						JP.format('<div class="invalid form-msg alert alert-error alert-block">'
							+ '<button type="button" class="close" data-dismiss="alert">×</button>'
							+ '<h4>{0}</h4><p>{1}</p>'
							+ '</div>', msg.title, msg.body)
					);
				} else {
					init.el = $(
						'<div class="invalid form-msg alert alert-error">'
							+ '<button type="button" class="close" data-dismiss="alert">×</button>'
							+ msg
							+ '</div>'
					);
				}

				init.el[init.mt](init.tg).fadeIn('fast');
			},

			valid: function(msg){
				var init = this.init(true);

				if (typeof msg === 'object'){
					init.el = $(
						JP.format('<div class="valid form-msg alert alert-success alert-block">'
							+ '<button type="button" class="close" data-dismiss="alert">×</button>'
							+ '<h4>{0}</h4><p>{1}</p>'
							+ '</div>', msg.title, msg.body)
					);
				} else {
					init.el = $(
						'<div class="valid form-msg alert alert-success">'
							+ '<button type="button" class="close" data-dismiss="alert">×</button>'
							+ msg
							+ '</div>'
					);
				}

				init.el[init.mt](init.tg).fadeIn('fast');
			}
		},

		submit: function(action, callback, prepare, _confirm){
			var me = this,id,vd = false;

			if (typeof action === 'object'){
				prepare = action.prepare;
				callback = action.callback;
				_confirm = action.confirm;
				vd = action.validate;
				action = action.url;
				// if you pace form id PK in side submit option (prevent you lost)
				id = action.id;
			}

			var dt = this.data();

			if(prepare)
				if(prepare.call(this, dt) === false){
					this.form.enable();
					return false;
				}else{
					// make sure data has override
					dt = this.data();
				}

			if (vd !== false && !this.isvalid()){
				var error_els = this.$me.data('error_els');
				if(G.options.on_form_invalid)
					G.options.on_form_invalid.call(G, error_els);

				JP.DEV && cs.log(error_els);
				throw ("This form is not valid.");
			}

			if(!php.empty(_confirm)){
				if(typeof _confirm == 'string' && !confirm(_confirm)){
					// enable the fields
					this.form.enable();
					return false;
				}

				if(typeof _confirm == 'function' && _confirm.call(this, dt) === false){
					this.form.enable();
					return false;
				}
			}

			dt.push({name:'X-JP-Request-OOPS', value:this.options.oops});

			var btnSubmit = $('[type="submit"]', me.me);
			if(btnSubmit.length && php.empty(btnSubmit.data('loading-text')))
				btnSubmit.data('loading-text', '...');

			// todo change to better way to check bootstrap exist
			var bootstrap = $.fn.button.Constructor;

			if(btnSubmit.length && bootstrap) btnSubmit.button('loading');

			me.form.disable();
			$[G.options.method](action, dt, function(res){
				me.form.enable();

				if(btnSubmit.length && bootstrap) btnSubmit.button('reset');

				var id = id || me.options.submit.id;
				if(id){
					// res.data support compatible mode (joyfix)
					var form_pk = /^[a-z]/i.test(id) ? ('#' + id) : id;
					$(form_pk, me.me).val(res[id] || res['id'] || res.data[id] || '');
				}

				if (me.options.oops === true && res.error && res.msg){
					me.display.invalid({
						title:'Oops!', body:res.msg
					});
				}

				if (me.options.oops === true && res.error === false && res.msg){
					me.display.valid({
						title:'Success!', body:res.msg
					});
				}

				if (callback) callback.call(me, res);
			});
		},

		_change_search: function(){
			var legend_label,
					options = [],
					val = $.trim($('.search-value', G.me).val())
				;

				$('.search-option:checked', G.me).each(function(i, el){
					var v = $(el).val();
					options.push(v);
					legend_label = $(el).data('title');

					if(v == 'all') return false;
				});

				var ll = $('.search-legend .search-label', G.me);

				if(options.length){
					G.$me.data('search-options', function(){
						var opts = {};
						for(var i=0; i<options.length;i++){
							opts[options[i]] = val;
						}
						return opts;
					}());

					if(options.length > 1) legend_label = options.length;

					if(!ll.length){
						ll = $('<span class="search-label badge"/>').appendTo($('.search-legend', G.me));
					}

					ll.text(legend_label);

				} else {
					ll.remove();
					G.$me.data('search-options', val ? {all: val} : null);
				}
		},

		/** @todo comment **/
		initsearch: function(){
			G.$me
			.on('keyup', '.search-value', function(){
				$('.search-clear', G.me).css('display', $.trim($(this).val()) ? 'block' : 'none');

				if($.trim($(this).val()).length >= (G.options.isSearch.minChar || 3) && G.options.isSearch.typing){
					G._change_search();
					G.$me.trigger('submit.jform');
				}
			})
			.on('click', '.search-clear', function(){
				G.$me.data('search-options', null);
				$('.search-value', G.me).val('');
				$('.search-legend .search-label', G.me).remove();
				$('.search-option:checked', G.me).attr('checked', null);
				G.$me.trigger('submit.jform');
			})
			.on('change', '.search-option', function(){
				G._change_search();

				if($.trim($('.search-value', G.me).val()))
					G.$me.trigger('submit.jform');
			})
			;
		}
	};

	/**
	 *
	 * @param option
	 * @param value
	 * @return {*}
	 */
	$.fn.form = function(option, value){
		var $this = $(this),
			data = $this.data('form'),
			options = typeof option === 'object' && option;

		if (!data) $this.data('form', (data = new Form(this, options)));
		if (typeof option === 'string'){
			var args = [],i=0;
			for(;i<arguments.length;i++){
				if(i==0) continue;
				args.push(arguments[i]);
			}

			return data[option].apply(G, args);
		}

		return $this;

	};

	$.fn.form.defaults = {
		method: 'post',
		error_css: 'error',
		error_css_el: 'invalid_field',
		error_msg_show: true,
		// show error msg with alert? // todo now not workig fixme
		error_msg_alert: false,
		focus: null,
		oops: true,
		submit: null,
		// advance search
		isSearch: false,
		// mini search
		onsearch_clear: null,
		onsearch_typing: null,
		// JGeo location [additional]
		geo: null,

		on_form_invalid: null
	};

	$.fn.form.Constructor = Form;

}(window.jQuery);

var JIsValidFields = function(form, options){
	if (typeof form === 'string'){
		if (/^[a-z]/i.test(form)) form = '#' + form;
		form = $(form)[0];
	}

	var fields = options.fields || $('input,textarea,select', form).not(':disabled');

	options = $.extend({
		error_msg:'Please enter required field.',
		error_css:'invalid_field',
		error_type:'alert',
		onresult:null,
		preventFormCallback:false
	}, options);

	// hard error
	var has_error = false;
	// fire alert
	var runtime_alert = options.error_type === 'alert';

	var validate = function(el){

		var $el = $(el);

		var error = false;

		// get validate config via field data attr (data-valid-xx="val")
		// @todo exception required xdata plugin
		var xdata = $el.xdata('validate') || {};

		/** @var {string} validator type */
		var type = xdata.type;

		if(!type && $el.prop('tagName').toLowerCase() == 'select'){
			type = 'select';
		}

		var is_required = xdata.required || (/require/.test($el.attr('class')) || $el.attr('required'));
		/**
		 * exit if no required and validate
		 */
		if (!is_required && !type) return true;

		// error message
		var error_msg = (xdata.error && xdata.error.empty) || $el.attr('title') || options.error_msg;

		// validator invalid
		var error_v = false;
		var error_v_msg = '';

		// field value
		var val = $.trim($el.val());
		var opt = {};

		switch (type){
			case 'number' || 'int' || 'integer':
				if (!JP.isNumber(val)) error_v = true;
				break;

			case 'username':

				var len = ((xdata.option && xdata.option.length) || 3);
				var ereq = new RegExp('^[a-zA-Z0-9_@\.]{' + len + ',20}$');
				if (!ereq.test(val)){
					error_v_msg = (
						(xdata.error && xdata.error.msg)
							|| ("User must contain there are a-z,A-Z,0-9 and length " + len + " characters.")
						);
					error_v = true;
					break;
				}

				break;
			case 'password':

				opt = xdata.option;

				var err = xdata.error;
				var plen = ((opt && opt.length) || 4);

				if (!val || val.length < plen){
					error_v_msg = (err && err.msg_length) || ("Password must contain more than " + plen + " characters.");
					error_v = true;
					break;
				}

				cs.log('password: @todo accept regura specail char like: []-{}');
				val = $el.val(); // not trim
				var req = /[^a-z0-9_.,-]/i;
				if (req.test(val) || / /.test(val)){
					error_v_msg = (err && err.msg) || ("Password must contain there are a-z,A-Z,0-9 and spacial characters.");
					error_v = true;
					break;
				}

				break;
			case 'vpassword':
				if (val !== $('[name=' + xdata.with + ']').val()){
					error_msg = (xdata.error && xdata.error.msg) || ("New password and confirm password don't match");
					error = true;
				}
				break;
			case 'radio':
				var checked = false;
				var rn = el.attr('name');
				$('[name=' + rn + ']', form).each(function(i, r){
					if ($(r).is(':checked')){
						checked = true;
						return false;
					}
				});

				if (!checked){
					val = null;
				}

				break;
			case 'select':
				error_v = false;
				if (php.empty(val)){
					val = null;
				}
				break;
			case 'email':
			case 'e-mail':
			case 'mail':
				if (!val.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
					error_v_msg = (xdata.error && xdata.error.msg) || ("An e-mail format don't match.");
					error_v = true;
				}
				break;
			case 'file' || 'type':

				var fopt = xdata.option;

				if (val && fopt.type){
					if (!validateFileType(val, fopt.type)){
						error_v_msg = (xdata.error.msg) || ("Not allow this file type.");
						error_v = true;
					}
				}
				break;
		}

		var empty = (!val || val === '');

		error = (empty && is_required || error);

		if (!error && !empty && error_v){
			error = true;
			error_msg = error_v_msg;
		}

		$el[error ? 'addClass' : 'removeClass'](options.error_css);

		//error = (is_required && error_v);
		var results = {
			empty:empty,
			error:error,
			error_msg:error_msg,
			v_error:error_v,
			v_error_msg:error_v_msg
		};

		$el.data('validate-error-result', results);

		if (options.onresult) options.onresult.call(el, results, form);

		if (runtime_alert && error){
			alert(error_msg);
			return false;
		}

		return !error;

	};

	var error_els = $(form).data('error_els') || {};
	fields.each(function(i, el){
		var $valid = validate(el),
			name = $(el).attr('id') || $(el).attr('name')
			;

		if (!$valid && runtime_alert) return false;

		if (!$valid) has_error = true;

		if (!$valid) error_els[name] = el;
		// delete me form error list if valid
		if ($valid && error_els[name]) delete error_els[name];
	});

	if ($(form).data('validate-callback') && options.preventFormCallback !== true)
		$(form).data('error_els', error_els).data('validate-callback').call(form);

	return !has_error;
};

/**
 * validate file type
 *
 * @param {string} file file name
 * @param {string} extptt requra pattern like gif,png or gif|png
 * @return {Boolean}
 */
var validateFileType = function(file, extptt){
	var f = file.split('.');
	var ext = f[f.length - 1];

	var ptt = new RegExp('(' + extptt.replace(/ /, '').replace(/,/, '|') + ')', 'i');
	return ptt.test(ext);
};

var JLoadingStatus = function(txt){
	"use strict";

	var mask, _c, me = this;
	this._cnn = -1;

	return {
		show: function(txt){
			//cs.trace();
			if ($('.rc').length){
				_c = $('.rc');
			} else {
				_c = $('<div class="rc">' + '<span class="rc-txt"><i class="icon-loading animate-spin"></i><span class="rc-msg">' + (txt ? txt : 'Loading...') + '</span></span></div>');
				$(document.body).append(_c);
			}
			if (me._cnn === -1) me._cnn = 0;
			
			me._cnn++;
			if (JP.mask === true){
				_c.addClass('rc-mask').height($(window).height());
				if (txt && txt !== true) $('.rc-txt').text(txt);
				_c.addClass('active');
				$(document.body).addClass('rc-show');
				$(document.body).addClass('jp-loading-mask');
			}

			JP.conn.show();
			$(document.body).addClass('jp-loading');

			//cs.log('start');
			//cs.trace();
		},
		hide: function(){
			//cs.trace();
			if (me._cnn === -1) return;
			
			me._cnn--;
			if (me._cnn < 1){
				me._cnn = -1;
				_c.removeClass('rc-mask').height('100%');
				_c.removeClass('active');
				$(document.body).removeClass('rc-show');
				$(document.body).removeClass('jp-loading');
				$(document.body).removeClass('jp-loading-mask');
				JP.conn.hide();

				//cs.log('stop');
				//cs.trace();
			}
		}
	};
};

var JLoading = JLoadingStatus;

var JFormBasic = function(form){

	if(typeof form === 'string'){
		if (/^[a-z]/i.test('form')) form = '#' + form;
		form = $(form);
	}

	if(form instanceof Element)
		form = $(form);

	var _init = function(){
		JP.DEV && cs.log('init form layout ...');

		$('.numberic,.numeric,input[type=number]').numeric();

		// set field contrainer interactive with focus/blur
		$("input[type!='checkbox'],input[type!='radio'],textarea,select", form).focus(function(){
			if (this.type.toLowerCase() === 'radio' || this.type.toLowerCase() === 'checkbox') return;
			$(this).parents('.field').addClass('focus');
		});

		$("input[type!='checkbox'],input[type!='radio'],textarea,select", form).blur(function(){
			if (this.type.toLowerCase() === 'radio' || this.type.toLowerCase() === 'checkbox') return;
			$(this).parents('.field').removeClass('focus');
		});

		//field contrainers
		$('.fields', form).each(function(i, t){
			var el = $(t);
			var wlabel = JP.toInt(el.data('label-width'));
			var wfield = JP.toInt(el.data('field-width'));

			if (wlabel){
				//align sample hint and buttons with end label width
				$('.buttons', el).css('padding-left', (wlabel + 5) + 'px');
				//set label width
				$('label:not(.btn)', el).css('width', wlabel + 'px');
			}
			if (wfield){
				$(".item", el).each(function(index, element){
					//if (element.type.toLowerCase() === 'radio' || element.type.toLowerCase() === 'checkbox') return;
					if ($(element).parent('field').data('width') === 'fasle') return;
					if (!$(element).hasClass('auto')) $(element).css('width', wfield + 'px');
				});
			}
		});
	};

	_init();

	return {

		init: _init,
		
		el: function(fieldname){
			return $('#' + fieldname, form).length 
				 ? $('#' + fieldname, form) 
				 : $('[name=' + fieldname + ']', form);
		},

		isEmpty: function(fieldname){
			var el 	= this.el(fieldname);
			var val = $.trim(el.val());
			var placeholder = el.attr('placeholder') || 'undefined';

			return(!val || val === '' || val === 0 || val === '0' || val === placeholder);
		},

		val: function(fieldname, val){
			return $.trim(this.el(fieldname).val(typeof val != 'undefined' && val));
		},

		data: function(key, val){
			
			if(key && typeof val != 'undefined'){
				return this.form.val(key, val);
			}

			if(key && typeof val == 'undefined'){
				return this.form.val(key);
			}

			return form.serializeArray();
		},
		
		/**
		 * @deprecated
		 */
		working: function(){
			JP.DEV && cs.warn('[DEPRECATED] use data() then disable() intread of this.');

			var data = form.serializeArray();
			this.disable();
			return data;
		},

		/**
		 * @deprecated
		 */
		end: function(){
			JP.DEV && cs.warn('[DEPRECATED] use enable() intread of this.');

			this.enable();
		},

		enable: function(){
			setTimeout(function(){
				$('input,select,textarea,button', form).each(function(i, el){
					if(!$(this).data('origin-disabled')){
						$(this).attr('disabled', false);

						if($(this).data('ckeditor'))
						$(this).data('ckeditor').setReadOnly(false);

						if($(this).data('tinymce'))
							$(this).data('tinymce').getBody().setAttribute('contenteditable', true);
					}
				});
			}, 100);
		},

		disable: function(){
			/* make sure field not disabled befor submit fixed for chrome bug */
			setTimeout(function(){
				$('input,select,textarea,button', form).each(function(){
					if($(this).is(':disabled')) $(this).data('origin-disabled', true);
					$(this).attr('disabled', true);

					if($(this).data('ckeditor'))
						$(this).data('ckeditor').setReadOnly(true);

					if($(this).data('tinymce'))
						$(this).data('tinymce').getBody().setAttribute('contenteditable', false);
				});
			}, 100);
		}
	}
};

var JCardSwitch = function(dir, el1, el2){
	if (dir === 'next'){
		$(el1).css('position', 'absolute').css('top', '0')
			//.css('width',$(el1).width())
			.hide("slide", {
				direction:'left'
			}, function(){
				$(this).css('position', 'inherit');
			});
		$(el2).show("slide", {
			direction:'right'
		});
		return;
	}
	$(el2).css('position', 'absolute').css('top', '0')
		//.css('width',$(el2).width())
		.hide("slide", {
			direction:'right'
		}, function(){
			$(this).css('position', 'inherit');
		});
	$(el1).show("slide", {
		direction:'left'
	});
};
/**
 * @descr add jp-click for fire when click
 */
var JDD = function(){
	$(document).delegate('.jp-dde', 'mouseenter click', function(e){
		var dde = $(this);
		var dd = dde.parent('.jp-dd');
		var key = '';
		if (dde.hasClass('jp-click') && e.type !== 'click'){
			return;
		}
		$.each(dde.attr('class').split(' '), function(i, v){
			if (/jp-dde-/.test(v)){
				key = v.replace(/jp-dde-/, '');
				return false;
			}
			return true;
		});
		var ddl = $('.jp-ddl-' + key);
		if (e.type === 'click'){
			if (dde.hasClass('clicked')){
				dde.removeClass('clicked');
				dde.removeClass('active');
				ddl.removeClass('active');
				return;
			}
			dde.addClass('clicked');
		}
		//auto find offset to show popup
		var xw = $(window).width();
		var xl = dde.offset().left;
		if (xl > (xw / 2)){
			ddl.css('right', dd.outerWidth() - dde.outerWidth());
			ddl.addClass('jp-right');
		}
		dde.addClass('active');
		ddl.addClass('active');
		ddl.parent('dl').unbind('mouseleave').bind('mouseleave', function(){
			if (dde.hasClass('clicked')) return;
			dde.removeClass('active');
			ddl.removeClass('active');
		});
		//prevent multiple binding
		if (!$(document).data('dde')){
			$(document).data('dde', true);
			$(document).bind('click', function(e){
				if ($(e.target).parents('.jp-dde').length /* || $(e.target).parents('.jp-ddl').length*/){
					return;
				}
				$('.jp-dde').removeClass('clicked').removeClass('active');
				$('.jp-ddl').removeClass('active');
			});
		}
	});
};
/**
 * @version    1.0
 * @author    BOON
 *
 * @name    JListActions
 * @descr    init data-grid actions
 *            - set name acb for checkall checkbox
 *            - set name cb or cb[] for single  cbeckbox
 *            - set css tcb to td that clicked selecte
 *
 * @data
 *        data-removebtn            [selector]    remove all button
 *        data-rembtn                [selector]    single remove button (in each row)
 *        data-removeurl            [string]    url to send remove post-back
 *        data-removecallback        [string]    a callback function when removed (must outside any function <global fn>)
 *
 * @param {string} List JQuery selector string of taget list
 *
 */
var JListActions = function(List){
	List.el.delegate('.list-grid', 'mouseenter', function(){
		var me = $(this),
			scope = List.scope || $('body');

		//prevent multiple delegate
		if (me.data('init')) return;
		me.data('init', true);

		var xdt = me.xdata('*');

		if (xdt.remove){
			var remurl = xdt.remove.url,
				remcallback = xdt.remove.callback,
				remmsg = xdt.remove.msg || ('Are you sure to delte?'),
				remmsgempty = xdt.remove.msgempty,
				$btnRemove = $(xdt.remove.btns, scope),
				$btnRem = $(xdt.remove.btn, scope)
				;
		}

		if (xdt.desc){
			var $desc = $(xdt.desc.target, scope),
				descBtnSL = xdt.desc.btn,
				$descBtn = $(descBtnSL, scope),
				descBtnHide = xdt.desc.btnhide,
				descurl = xdt.desc.url
				;
		}

		if (xdt.state){
			var stateurl = xdt.state.url,
				$stateBtn = $(xdt.state.btn, scope),
				statecallback = xdt.state.callback
				;
		}

		var cba = $(":checkbox[name=acb]", me),
			cbt = $(".tcb", me),
			cb = $(":checkbox[name^=cb]", me),
			cbKed = [];

		//init cb checkall
		if (cba.length){
			cba
				//(A)
				.change(function(){
					cbKed = $(':checkbox[name^=cb]:checked', me);
					cba.attr('checked', cbKed.length > 1);
					$btnRemove.attr('disabled', !$(this).is(':checked'));
				}).click(function(){
					cb.attr('checked', !cb.is(':checked'));
					cb.change(/*->B*/);
				});

			//init cb single click
			//(B)
			cb.change(function(){
				if ($(this).is(':checked')){
					$(this).parents('.row').addClass('selected');
				} else {
					$(this).parents('.row').removeClass('selected');
				}
				cba.change(/*->A*/);
			});

			//init cb td targeted click
			cbt.click(function(){
				var tr = $(this).parent('.row');
				if (tr.has(':checkbox[name^=cb]')){
					var x = $(':checkbox[name^=cb]', tr);
					x.attr('checked', !x.is(':checked'));
					x.change(/*->B*/);
				}
			});
		}

		//init get detail
		if ($descBtn && $descBtn.length && $desc.length && descurl){
			// set desc property to use in List
			List.desc = $desc;

			$descBtn.click(function(e){
				//if click out off side
				if (!$(e.target).parents(descBtnSL).length && !(this === e.target)) return;
				var dH = $desc.data('height');
				var me = $(this);
				var loadDesc = function(reView){
					var tr = me.parents('.row');
					var id = me.attr('value') || tr.data('id');
					$('.row', tr.parents('.list-grid-body')).removeClass('selected');
					tr.addClass('selected');

					List.mask();
					$.get(JP.raw(descurl), {id:id}, function(res){
						List.unmask();

						var html = $(res);
						if (reView) resetView();
						$desc.html(html);
						$(descBtnHide, html).click(function(){
							closeView(tr);
						});
					});
				};

				var resetView = function(){
					$desc.animate({
						'height': dH
					}, 100).addClass('active');
				};

				var closeView = function(tr){
					$desc.animate({
						'height':0
					}, 100, function(){
						$(this).removeClass('active');
						if (tr) tr.removeClass('selected');
					});
				};

				loadDesc(!$desc.hasClass('active'));
			});
		}

		// init state-set callback
		if (statecallback){
			if (!/\./.test(statecallback) && window[statecallback]){
				statecallback = window[statecallback];
			} else {
				statecallback = JP.ns(statecallback);
			}
		}

		/**
		 * state button configure
		 *
		 * <code>
		 *     <button
		 *            value="[value]" set value
		 *            data-id="[id]"                    set value by data-id (this same value attr)
		 *            data-statesend="[true/false]"     1,y,yes = true
		 *            data-css-no="css-state-off"     default bn-off
		 *            data-css
		 *     >
		 *     </button>
		 * </code>
		 */
		if ($stateBtn && $stateBtn.length){
			$stateBtn.click(function(e){

				var me = $(this),
					tr = $(this).parents('.row');

				var dt = {
					id:me.attr('value') || me.data('id') || tr.data('id'),
					state:me.data('statesend')
				};

				// suport radio state button set
				if (me.data('radio')){
					var radios = $('input[type="radio"]', me);
					if (radios.data('bind-change')) return;

					radios.data('bind-change', true).change(function(){
						var radio0 = $('input[value="0"]', me),
							radio1 = $('input[value="1"]', me),
							label0 = $('label[for="' + radio0.attr('id') + '"]', me),
							label1 = $('label[for="' + radio1.attr('id') + '"]', me),
							css_on = me.data('css-yes'),
							css_off = me.data('css-no')
							;

						label1[radio1.is(':checked') ? 'addClass' : 'removeClass'](css_on);
						label0[radio0.is(':checked') ? 'addClass' : 'removeClass'](css_off);

						dt.id = me.data('id');
						dt.state = $(':checked', me).val();

						// now set state to disabled
						$('input,button', tr).attr('disabled', true);

						List.mask();
						$.post(JP.json(stateurl), dt, function(res){
							List.unmask();

							$('input,button', tr).attr('disabled', false);

							// if error reset to previous
							if (res.error || res.success === false){
								label1[radio1.is(':checked') ? 'removeClass' : 'addClass'](css_on);
								label0[radio0.is(':checked') ? 'removeClass' : 'addClass'](css_off);
								label1[radio1.is(':checked') ? 'removeClass' : 'addClass']('active');
								label0[radio0.is(':checked') ? 'removeClass' : 'addClass']('active');

								if (JP.toInt(dt.state)){
									radio0.attr('checked', 'checked');
								} else {
									radio1.attr('checked', 'checked');
								}
							}

							if (statecallback) statecallback.call(this, res, me);
						});
					});

					return;
				}

				// now set state to disabled
				$('input,button', tr).attr('disabled', true);
				var stateYes = (dt.state === '1' || dt.state === 1 || dt.state === 'y' || dt.state === 'yes');

				List.mask();
				$.post(JP.json(stateurl), dt, function(res){
					List.unmask();

					$('input,button', tr).attr('disabled', false);

					if (!res.error && res.success !== false){

						me.removeClass(stateYes ? me.data('css-off') || 'btn-off' : me.data('css-on') || 'btn-on').addClass(stateYes ? me.data('css-on') || 'btn-on' : me.data('css-off') || 'btn-off');

						// switch current state
						me.data('statesend', stateYes ? (me.data('stateoff') || 0) : (me.data('stateon') || 1));

						// update state text
						var statText = (stateYes ? (me.data('text-on') || 'ปกติ') : (me.data('text-off') || 'ระงับ'));

						// update tooltip
						// @note can't update via me.data('original-title','xx') i don't know why?
						me.attr('data-original-title', statText);

						// support bootstrap button
						if (me.find('[class*="icon-"]').length){
							me.html('<i class="icon-' + (stateYes ? me.data('icon-on') || 'ok' : me.data('icon-off') || 'remove') + '"></i>' + '<span>' + statText + '</span>');
						} else {
							me.html('<span>' + statText + '</span>');
						}
					}

					if (statecallback) statecallback.call(this, res, me);
				});
			});
		}

		//init single remove post-back
		//TODO check callback object scope should be! (now window)
		if ($btnRem && $btnRem.length){
			$btnRem.click(function(){

				//init callback
				if (remcallback){
					if (!/\./.test(remcallback) && window[remcallback]){
						remcallback = window[remcallback];
					} else {
						remcallback = JP.ns(remcallback);
					}
				}

				if (confirm(remmsg)){
					//uncheck other
					cb.attr('checked', false);
					cb.change();
					//check only tageted
					var tr = $(this).parents('.row').addClass('selected');
					var cked = $(':checkbox[name^=cb]', tr).attr('checked', true).val();

					//away send array to server
					var id = cked || $(this).attr('value') || $(this).data('value') || $(this).data('id') || tr.data('id');

					if (!id){
						alert('No data id to sending.');
						return false;
					}

					$('input,button,.btn', tr).attr('disabled', true).addClass('disabled');

					List.mask();
					$.post(JP.json(remurl), {id:id}, function(res){
						List.unmask();

						if (res.error || res.success === false){
							$('input,button,.btn', tr).attr('disabled', false).removeClass('disabled');
							;
						} else {
							tr.fadeOut();
						}
						if (remcallback) remcallback.call(this, res, me);
					});
				}
			});
		}

		//init multiple remove post-back
		if ($btnRemove && $btnRemove.length){
			$btnRemove.click(function(){
				if (!cb.is(':checked')){
					alert(remmsgempty || 'Please select any record is you want to delete.');
				}

				if (confirm(remmsg)){
					var ids = [];
					$.each(cbKed, function(i, v){
						ids[i] = $(v).val();
					});

					if (!ids.length){
						alert('No data id to sending.');
						return false;
					}

					var trs = cbKed.parents('.row');
					$('input,button,.btn', trs).attr('disabled', true).addClass('disabled');
					$btnRemove.attr('disabled', true);

					List.mask();
					$.post(JP.json(remurl), {id:ids}, function(res){
						List.unmask();

						if (res.error || res.success === false){
							$('input,button,.btn', trs).attr('disabled', false).removeClass('disabled');
							$btnRemove.attr('disabled', false);
						} else {
							cba.attr('checked', false);
							trs.fadeOut();
						}
						if (remcallback) remcallback.call(this, res, me);
					});
				}
			});
		}
	});
};
/**
 * @version    1.0
 * @author    BOON
 * @note use http://layout.jquery-dev.net/demos.cfm
 *
 * @name    JList
 *    Simple data-grid list
 *
 * @param    {string|jQuery} selector - JQuery selector string of taget list or JQuery Object Element
 * @param    {object} options - Options for:
 *              + auto  {bool}    true for auto load list (Default true)
 *                + scope {object} jquery object to scope this list
 *                + data  {object} defined data to pass to query params
 *
 */
var JList = function(selector, options){
	return new (function(list, options){
		options = options || {};

		var ME = this,
			url = list.data('url'),
			params = list.xdata('param'),
			calHeight = function(list){
				var ghd  = $('.list-grid-hd', list),
					gbd  = $('.list-grid-body', list)
				;
				// detect scollbar of list-body (if has)
				ghd.css('padding-right', gbd.width() - gbd.find('table').width());
			};

		var deleglate = function(scope){
			var empty = scope.find('.list-empty');
			if (empty.length) return;

			// set grid bn-x and actions baar tooltip
			var bnx = $('.btn, .list-actions .btn', scope);
			bnx.each(function(i, el){
				if (!$(el).attr('title')){
					$(el).attr('title', $(el).find('span').text());
				}

				if ($(el).attr('title')){
					$(el).tooltip({html: true, container: 'body'});
				}
			});

			if (ME.desc){
				if (ME.desc && ME.desc.hasClass('active')){
					var h = ME.el.height() + ME.desc.height();
					
					ME.desc.animate({
						'height':0
					}, 100, function(){
						$(this).removeClass('active');
					});

					ME.reload();
				}
			}

			var bd = $('.list-grid-body', scope),
				cl = bd.find('colgroup').clone(true, true),
				hd = bd.find('thead').clone(true, true),
				tg = $('<div class="list-grid-hd"><table></table></div>');

			// append new header
			if(cl.length)
			cl.appendTo(tg.find('table'));
			hd.appendTo(tg.find('table'));
			tg.insertBefore(bd, scope);

			// init nav bar
			var nav = $('.list-grid-nav', scope);
			calHeight(scope);
			$('.no,.back,.next,.reload', nav).tooltip({container: 'body'});

			var navno = $('.no', nav);
			var maxno = JP.toInt(navno.attr('max'));

			$('.next', nav).click(function(){
				var v = JP.toInt(navno.val());
				if (v >= maxno) return;
				navno[0].stepUp(1);
				$(navno).change();
			});

			$('.back', nav).click(function(){
				var v = JP.toInt(navno.val());
				if (v < 1) return;
				navno[0].stepDown(1);
				$(navno).change();
			});

			$(navno).bind('click change', function(){
				var o = data.start || 0,
				// TODO PageSize Where come from?
					PageSize = data.limit || JP.PageSize;

				data.start = PageSize * ($(this).val() - 1);
				if (o === data.start) return;

				_load();
			});

			var meta = JP.toJson($('.params', nav).val());
			ME.meta = meta;

			//build-in reload tool
			$('.reload', nav).click(function(){
				_load(meta.params);
			});
		};

		//create list content
		list.append('<div class="list-content" id="list-content-' + (++JP.gen_id) + '"></div>');

		var list_content = $('.list-content', list);
		//create mask element
		list.append('<div class="list-mask"><div class="list-mask-text"><i class="icon-loading animate-spin"></i><span>กำลังโหลดข้อมูล..</span></div></div>');

		var mask = $('.list-mask', list);
		$(window).resize(function(){
			calHeight(list);
		});

		var data = options.data || {},
			me = this,
			_mask = function(){
				//flag default ajax spin loading...
				JP.setMask(false);
				mask.addClass('active');
			},
			_unmask = function(){
				//flag ajax spin to default
				JP.setMask(true);
				mask.removeClass('active');
			}
		;

		if(!php.empty(params)) $.extend(data,params);

		//retrive data
		var _load = function(dt){
			// make sure tooltips are destroyed
			$('.tooltip').remove();
			_mask();
			$.get(JP.raw(url), (dt || data), function(res){
				var list_body = $('.list-body', list_content);

				if(list_body.length){
					list_body.replaceWith(res);
				} else {
					list_content.html(res);
				}
				//options callback
				if (options.callback) options.callback.call(me, res);
				deleglate(list);
				_unmask();
			});
		};

		if (options.auto !== false) _load();

		/* APIs */
		$.extend(this, {
			// load count
			trsId: 0,
			scope:options.scope ? $(options.scope) : $(document.body),

			ID: function(el){
				return $(el).attr('value') || $(el).parents('.row').data('id');
			},
			el:list,

			mask:_mask,

			unmask:_unmask,

			/**
			 * load data
			 *
			 * @param   {object} dt - data to pass to remote                 *
			 * @return  {void}
			 */
			load: function(dt){
				if (dt){
					data = $.extend(data, dt);
				} else {
					data = options.data;
				}

				if(!data.start)
					data.start = 0;
				
				_load();
				this.trsId++;
			},

			reload: function(){
				this.load(data);
			}
		});

		//set actions delegate
		JListActions(this);
	})($(selector), options);
};

/**
 * JPage
 *
 * @param config
 * @return {Object}
 * @constructor
 */
var JPage = function(config){
	config = $.extend({
		listeners:null
	}, config);

	//flag to puse this JPage run; <e.g. login page don't run JPage>
	var working = true;

	// init jpage
	$(window).bind('hashchange', function(){
		if (!working) return;
		_loadPage();
	});

	/**
	 * parse valid id
	 *
	 * @param {string} id
	 * @return {string} parsed id
	 */
	var parseId = function(id){
		return id.replace(/[^A-Za-z0-9]/g, '');
	};

	var genId = function(id, params){
		params = params ? $.param(params) : '';
		return parseId(id + params);
	}

	var lookupId = function(){
		return parseId(getUri());
	};

	/**
	 * get location hash (#xxxx)
	 *
	 * @param {string|null} d uri string (default window.location.href)
	 * @return {String} hash key
	 */
	var getHash = function(d){
		d = d || window.location.href;
		var c = d.indexOf("#");
		return c >= 0 ? d.substr(c + 1).replace(/\?.+/, '') : null;
	};

	/**
	 * get hash params (uri query this mean any thing after ?)
	 *
	 * @return {object|null} uri params
	 */
	var getHashParams = function(){
		var d = window.location.href,
			c = d.indexOf("#"),
			e = d.substr(c + 1);
		if (!/\?/.test(e)) return null;
		return c >= 0 ? $.parseParams(e.replace(/.+\?/, '')) : null;
	};

	/**
	 * set location.hash by specify page id
	 * this is will bind page params into uri query param (if has)
	 *
	 * @param {string} id formated page id
	 * @return void
	 *
	 * @event hashchange fire window.event.hashcange
	 */
	var setHash = function(uri){
		try {
			if (getUri() == uri){
				$(window).hashchange();
				return;
			}
			window.location.hash = uri;
		} catch (e){
			cs.log(e.getMessage())
			cs.log(e);
		}
	};

	/**
	 * get current uri
	 *
	 * @param {string} url get from url (default get form window.location.hash)
	 * @return {string} uri
	 */
	var getUri = function(url){

		if (url){
			var c = url.indexOf("#");
			return c >= 0 ? url.substr(c + 1) : url;
		}

		return window.location.hash.replace('#', '');
	};

	/**
	 * parse uri into page configuration object
	 *
	 * @param {string} uri hash uri
	 * @return {object} page config
	 */
	var parseUri = function(uri){
		uri = uri.split('?');
		return {
			id: uri[0].toLowerCase(),
			params:uri[1] ? $.parseParams(uri[1]) : null
		}
	};

	/**
	 * get page object (jquery object)
	 *
	 * @param id formated page id
	 * @return {*|jQuery|HTMLElement}
	 */
	var page = function(id){
		return $('#page-' + id);
	};

	/**
	 * store events server
	 *
	 * @type {Object}
	 */
	var events = {};

	/**
	 * fire event
	 */
	var trigger = function(){
		var evt = arguments[0],
			args = Array.prototype.slice.call(arguments, 1);
		if (events[evt] && events[evt].length){
			$.each(events[evt], function(){
				this.fn.apply(this.scope, args);
			});
		}
	};

	var _clearCache = function(id){
		api.pages[id].loaded = false;
		page(id).remove();
		delete api._cb[id];
	};

	var _clearDuplicate = function(cfg){
		var pages = $('[data-page-set="' + cfg.href + '"]');

		if (pages.length && pages.data('id') !== cfg.id){
			pages.remove();

			for (var key in api.pages){
				if (api.pages[key]['href'] === cfg.href){
					api.pages[key].loaded = false;
					delete api._cb[key];
				}
			}
		}

	};

	/**
	 * check many things before load page
	 *
	 * @private
	 */
	var _prepare_myload = function(page_id){
		var page_cfg = api.pages[page_id];

		if (page_cfg.loaded && page_cfg.cache === false){
			_clearCache(page_id);
		}

		if (page_cfg.duplicate === false){
			_clearDuplicate(page_cfg);
		}
	};

	var _set_page_NS = function(str){
		if(php.empty(str)) return;

		str = str.toLowerCase();

		if(/#/.test(str))
			str = str.split('#')[1];

		if(/\?/.test(str))
			str = str.split('?')[0];

		JP.ns('JP.pages.' + str);
	};

	/**
	 * start load page
	 *
	 * @private
	 * @note transition with CSS3 smooth than jQuery Slide (don't care IE)
	 * @todo check next/back on browser to finde direction of slide
	 */
	var _loadPage = function(){
		var page_id = lookupId(),
			page_cfg = api.pages[page_id];

		if (!page_cfg){
			api.load(parseUri(getUri()));
			return;
		}

		_prepare_myload(page_id);

		if (page_cfg.loaded){
			//existing page
			api.page = page(page_cfg.id);
			
			// prevoise page
			api.active
				// cancel hiding to show for transition
				.removeClass('hiding')
				.removeClass('active')
				.css('left', '-100%')
			;
			
			// unhide me before trig to smooth by showing			
			api.page.removeClass('hiding');
			// delay for beatifull
			setTimeout(function(){
				api.page
					.addClass('active')
					.css('left', '0')
				;

				// set active inside time delay prevent object overided
				api.active = api.page;
			}, 5);
			
			api.callCb(page_cfg.id);

			trigger('load', api.page, page_cfg, api);
		} else {
			/**
			 * load new page
			 */

			// create namespace for page remember that all namespaces are lowercase
			// e.g. #users => JP.pages.users, #users.edit?id=1 => JP.pages.users.edit
			if (page_cfg.origin) _set_page_NS(page_cfg.origin);

			// start load new page
			$.get(JP.raw(page_cfg.href), page_cfg.params, function(res){

				var err_code = null;
				if (/page-error/.test(res)){
					err_code = res.match(/data-error="(.*)"/)[1];
					page_cfg.id = 'error-' + err_code;
				}

				if (err_code && page(page_cfg.id).length){
					api.page = page(page_cfg.id);
				} else {
					api.page = $('<div class="page active" id="page-' + page_cfg.id + '"></div>');
					api.page.data('id', page_cfg.id);
					api.page.attr('data-page-set', page_cfg.href);
					api.page.html(res).appendTo(api.scope());
				}

				api.page.on(JP.css3.events.transition.end, function(){
					// send me to right side for slide in right
					!$(this).hasClass('active') && $(this).addClass('hiding').css('left', '100%');
				});
				
				setTimeout(function(){
					if (api.active){
						api.active.removeClass('active').css('left', '-100%');
					}

					// delay for beatifull
					setTimeout(function(){
						api.page.css('left', '0');
					}, 5);

					// set active page
					api.active = api.page;
				}, 300);

				//flag existing page
				page_cfg.loaded = true;
				

				trigger('init', api.page, page_cfg, api);

				//fire init script
				api.callFn(page_cfg.id);

				trigger('load', api.page, page_cfg, api);

				// collapes breadcrumb
				JBreadcrumb.hide($('.jp-breadcrumb', api.page));
			});
		}
	};

	// public APIs
	var api = { /** @var jQuery object current actived page */
		active:null,

		/** @var jQuery object new page is loaed */
		page:null,

		/** @var array store id all loaed pages */
		pages:{},

		/** @var store init functions all loaded page */
		_fn:{},
		_cb:{},

		isHas: function(xid){

			if ((typeof xid).toLowerCase() !== 'object'){
				xid = parseUri(getUri(xid));
			}

			var id = genId(xid.id, xid.params);
			return this.pages[id];
		},

		/** @var  */
		on: function(e, fn, scope){
			if (!events[e]) events[e] = [];
			events[e][events[e].length] = {
				fn:fn,
				scope:scope
			};
		},

		scope: function(){
			return $(JP.layout.page.el);
		},

		initLink: function(a){
			var href = $(a).attr('href');
			var nlink = /\/\//.test(href);

			if (!nlink && /#/.test(href)) href = JP.base + '/' + href;
			if (JP.layout.isNPage){
				JP.conn.show();
				self.location.href = href;
			} else {
				if(nlink){
					JP.conn.show();
					self.location.href = href;
				}else{
					this.load(href);
				}
			}
		},
		/**
		 * get formated page id
		 *
		 * @param {string} d hash id or url
		 * @return {string} formated page id
		 */
		getPageID: function(d){
			var xid = parseUri(getUri(d));
			return genId(xid.id, xid.params);
		},

		getUri:getUri,

		/**
		 * set callback function on each page to fire after everything loaded
		 * and call evertime when page loaded (new load and load again)
		 * this callable on target page
		 *
		 * @param {function} fn
		 */
		callback: function(fn){
			this._cb[this.page.data('id')] = fn;
			return this;
		},

		/**
		 * fire callback function
		 *
		 * @param {string} id formated page id
		 * @callback
		 *         - object page config
		 *         - jQuery page object
		 */
		callCb: function(id){
			var fn = this._cb[id];
			if (fn) fn.call(this, this.page, this.pages[id]);
		},

		/**
		 * set script to initial each page call once time when first page load
		 * this api call in target page
		 *     <code>
		 *         <script type="text/javascript">
		 *             JPage.init(function(){
			 * 	            // code to init the page
			 * 	        });
		 *        </script>
		 *    </code>
		 * @param {function} fn init function
		 */
		init: function(fn){
			this._fn[this.page.data('id')] = fn;
			return this;
		},

		/**
		 * fire init function
		 *
		 * @param id
		 * @callback
		 *         - jQuery object page
		 *         - object page config
		 */
		callFn: function(id){
			var fn = this._fn[id];
			if (fn) fn.call(this, this.page, this.pages[id]);
			this._fn = {};
			// clear
			this.callCb(id);
		},

		/**
		 * set working page, what's page can active by JPage
		 * isNPage like login page do not set hash
		 *
		 * @param f
		 */
		working: function(f){
			working = f;
		},

		/**
		 * @todo improve this's have bug when /login#xxxx
		 * @param hash
		 */
		startup: function(hash){

			this.working(!JP.layout.isNPage && !$('body').hasClass('login'));

			if(!working) return;

			var uri = getUri();

			if (uri){
				this.load(uri);
			} else {
				this.load(hash);
			}
		},

		/**
		 * remove page
		 *
		 * @param {string} hash id
		 */
		remove: function(hash){
			_clearCache(this.getPageID(hash));
		},

		/**
		 * reload the page
		 *
		 * @param {string} hash id
		 */
		reload: function(hash){
			this.remove(hash);
			this.load(hash);
		},

		/**
		 * load page and force slide back
		 *
		 * @param {string} hash id
		 */
		back: function(hash){
			this.load(hash, 'back');
		},

		/**
		 * load page
		 *
		 * @param {mixed} xid string hash id or object page configuration
		 *    <pre>
		 *        xid.id        {string}    hash id or formated page id
		 *                                if you pass formated id you must set xid.href
		 *                                by default if not set xid.href it's will use xid.id (hash id)
		 *                                and parse hash id into formated page id
		 *        xid.href    {string}
		 *        xid.params    {object}    page params you want to send to server
		 *        xid.cache    {bool}        force to load new page away (default true)
		 *        xid.dir        {string}    page slide direction 'next|back'
		 *    </pre>
		 *
		 * @param {string} dir page slide direction 'next|back'
		 */
		load: function(xid, dir){

			if(JP.DEV && (dir || xid.dir)) cs.warn('[DEPRECATED] remove direction slide.');

			// if hash same page nothing to do
			if ((typeof xid).toLowerCase() !== 'object'){
				if (getUri(xid) === getUri() && !php.empty(this.pages)) return;
			}

			var cfg = this.isHas(xid);

			if (cfg && cfg.cache !== false){
				setHash(cfg.uri);
				return;
			}

			var pageCfg = {
				// unique page id
				id:null,
				// href with out query params
				href:null,
				// href with query param (full uri)
				uri:null,

				// page slide direction
				// @deprecated slide in right only
				dir:'next',
				// query params
				params:null,
				// cache or new load every time hashchange
				cache:true,
				// can duplicate page set or no
				// some page like edit page is a same page but differnct data
				// in page like this some javascript conflit when load many page
				// set duplicate to false to clear duplicate page
				// don't care this if you working on unique page
				duplicate:false,
				// page loaded state
				loaded:false,
				// orginal id befor any parsed
				origin:null
			};

			if ((typeof xid).toLowerCase() === 'object'){
				$.extend(pageCfg, {
					id:xid.id,
					href:xid.href || xid.id,
					dir:xid.dir || 'next',
					params:xid.params,
					cache:xid.cache,
					unique:xid.unique,
					origin:xid.id
				});
			} else {
				cfg = parseUri(getUri(xid));
				$.extend(pageCfg, {
					id:cfg.id,
					href:cfg.id,
					params:cfg.params,
					dir:dir || 'next',
					origin:xid
				});
			}

			$.extend(pageCfg, {
				id:genId(pageCfg.id, pageCfg.params),
				uri:pageCfg.href + (pageCfg.params ? ('?' + $.param(pageCfg.params)) : '')
			});

			if (!pageCfg.params) pageCfg.params = {};

			this.pages[pageCfg.id] = pageCfg;
			setHash(pageCfg.uri);
		}
	};

	if (config.listeners){
		var scope = config.listeners.scope || null;
		for (var e in config.listeners){
			if (e === 'scope') continue;
			api.on(e, config.listeners[e], scope);
		}
	}

	$(function(){
		if(getHash()) api.startup(getHash());
	});

	return api;
};
/**
 * @descr Asset Helper
 * @TODO #1 comment me!
 * @TODO #2 check existing prevent multiple load
 * @TODO #3 load by syncronous
 * @see onload,onreadystatechange
 */

function AssetsCALL(assets){
	//if (!assets.js.length) cs.error('Assets not found!');

	if (assets.cb && typeof assets.cb === 'string'){
		if (!/\./.test(assets.cb) && window[assets.cb]){
			assets.cb = window[assets.cb];
		} else {
			assets.cb = JP.ns(assets.cb);
		}
	}

	// check exiting if we loaded this asset now just invoke callback
	if (assets.ns && typeof assets.ns === 'string'){
		if (!/\./.test(assets.ns) && window[assets.ns]){
			assets.ns = window[assets.ns];
		} else {
			assets.ns = JP.ns(assets.ns);
		}

		if (!php.empty(assets.ns)){
			if (assets.cb) assets.cb.call(this);
			delete assets.ns;
			return true;
		}
	}

	var LOAD_CSS = function(file){
		$('<link>').attr({
			rel:'stylesheet',
			type:'text/css',
			href:file,
			onload: function(){
				if (F_CSS === L_CSS){
					if (LOAD_CB) LOAD_CB.call(this);
				} else {
					LOAD_CSS(assets.css[F_CSS++]);
				}
			}
		}).appendTo('head');
	};

	var LOAD_JS = function(){
		$.getScript(assets.js[F_JS++], function(){
			if (F_JS === L_JS){
				if (assets.cb){
					if(typeof assets.cb == 'object'){
						$.each(assets.cb, function(i,v){JP.ns(v).call(window)})
					}else{
						assets.cb.call(this);
					}
				}
			} else {
				LOAD_JS();
			}
		});
	};

	var LOAD_CB = null,
		L_CSS, F_CSS, L_JS, F_JS;
	if (assets.js && assets.css){
		L_CSS = assets.css.length;
		F_CSS = 0;
		L_JS = assets.js.length;
		F_JS = 0;
		LOAD_CB = LOAD_JS;
		LOAD_CSS(assets.css[F_CSS++]);
		return;
	}

	if (assets.js){
		L_JS = assets.js.length;
		F_JS = 0;
		LOAD_JS();
		return;
	}

	if (assets.css){
		L_CSS = assets.css.length;
		F_CSS = 0;
		LOAD_CB = assets.cb;
		LOAD_CSS();
	}
}
/*
 * @name	JGeo
 *			geo ajax call utility	
 *
 * @param	{object} options
 *						- scope		[object/string]	scope of selector
 *						- auto		[bool]		auto call immediately.
 *
 *						- pvn		[string]	select list tag name/id
 *							- name		[string]	select list tag name/id
 *							- attr		[object]	select list attributies
 *							- selected	[int]		current selected value
 *							- ct		[string]	jquery selector of contrainer el
 *
 *						- amp
 *							- pvn		[int]		pvn id
 *							- name		[string]	select list tag name/id
 *							- attr		[object]	select list attributies
 *							- selected	[int]		current selected value
 *							- ct		[string]	jquery selector of contrainer el
 *
 *						- dst
 *							- amp		[int]		amp id
 *							- name		[string]	select list tag name/id
 *							- attr		[object]	select list attributies
 *							- selected	[int]		current selected value
 *							- ct		[string]	jquery selector of contrainer el
 *
 * @note 	if you are using fn.form plugin
 * 			you can config fn.form.options.geo with JGeo instance
 *
 */
var JGeo = function(options){
	var scope = $(options.scope || document.body);
	var auto = options.auto !== false;
	var pvn = options.pvn;
	var amp = options.amp;
	var dst = options.dst;
	var api = {
		options: options,
		scope: scope,
		clear: function(){
			$('select option', $(amp.ct, api.scope)).remove();
			$('select option', $(dst.ct, api.scope)).remove();
		},

		/**
		 * apply new data eg. when we open form to edit
		 */
		apply: function(r){
			if(r[dst.name])
			dst.selected = r[dst.name];

			if(r[amp.name])
			amp.selected = r[amp.name];

			if(r[pvn.name])
			pvn.selected = r[pvn.name];
		},

		/**
		 *    get apmphurs
		 *
		 */
		pvn: function(){
			var me = this;
			var ct = $(pvn.ct, api.scope);
			//delete pvn.ct;
			ct.html('<em class="sl-loading"><i class="icon-loading"></i><span>Loading...</span></em>');

			JP.setMask(false);
			$.get(JP.raw('sl_provinces'), pvn, function(r){
			JP.setMask(true);

				var x = $(r);
				ct.html('').append(x);
				x.change(function(){
					$.extend(amp, {
						pvn:$(this).val()
					});
					me.amp();
				});
				if (pvn.selected){
					x.val(pvn.selected);
					x.change();
				}
			});
		},
		amp: function(){
			var me = this;
			var ct = $(amp.ct, api.scope);
			ct.html('<em class="sl-loading"><i class="icon-loading"></i><span>Loading...</span></em>');

			/// @TODO #1 consider to check amp if 0, just clear option(s)
			JP.setMask(false);
			$.get(JP.raw('sl_amphurs'), amp, function(r){
			JP.setMask(true);

				var x = $(r);
				ct.html('').append(x);
				x.change(function(){
					$.extend(dst, {
						amp: $(this).val()
					});
					me.dst();
				});

				if (amp.selected){
					x.val(amp.selected);
				}

				x.change();
			});
		},

		// @TODO refto #1
		dst: function(){
			var ct = $(dst.ct, api.scope);

			if($('select option', ct).length && !JP.toInt(dst.amp)){
				$('select option', ct).remove();
				return;
			}

			ct.html('<em class="sl-loading"><i class="icon-loading"></i><span>Loading...</span></em>');

			JP.setMask(false);
			$.get(JP.raw('sl_districts'), dst, function(r){
			JP.setMask(true);

				var x = $(r);
				ct.html('').append(x);
				if (dst.selected){
					x.val(dst.selected);
					x.change();
				}
			});
		}
	};

	if (auto) api.pvn();
	return api;
};

/**
 * @descr    slide up-down breadcrumb
 * @api        - hide    @param scope of el
 *             - run    @param scope of el
 */
var JBreadcrumb = (function(){
	return {
		hide: function(breadcrumb){
			var a = $(breadcrumb);
			var b = $('div', a);
			var c = $('ul', a);
			var d = $('li:last-child', a);
			
			if (!b.data('width')){
				b.data('width', b.outerWidth());
				b.data('width-x', d.outerWidth());
				//b.data('width-l', b.outerWidth() - (d.outerWidth() + JP.toInt(d.css('margin-right'))));
				b.data('width-l', d.outerWidth());
				b.width(b.outerWidth());
			}

			a.addClass('xhidden');
			b.animate({
				width:b.data('width-x') + 'px'
			});

			c.animate({
				left: ((b.data('width') - b.data('width-l') - JP.toInt(d.css('margin-right'))) * -1) + 'px'
			});
		},
		show: function(breadcrumb){
			var a = $(breadcrumb);
			var b = $('div', a);
			var c = $('ul', a);
			if (!a.hasClass('xhidden')) return;
			a.removeClass('xhidden');
			b.animate({
				width:b.data('width') + 'px'
			});
			c.animate({
				left:'0px'
			});
		},
		run: function(){
			var x = this;
			var s = $(document)
				.on('mouseenter', '.jp-breadcrumb', function(){
					x.show(this);
				}).on('mouseleave', '.jp-breadcrumb', function(){
					x.hide(this);
				}).on('click', '.jp-breadcrumb li:last a', function(e){
				//for touch device
				e.preventDefault();
				if ($(this).hasClass('xhidden')){
					x.show(s);
				} else {
					x.hide(s);
				}
			});
		}
	};
})();

$.ui.dialog.prototype._older_create = $.ui.dialog.prototype._create; // use for call older method in override
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {

  _create: function()
  {
    $.ui.dialog.prototype._older_create.apply(this, arguments);
    this._init_aminimate();
  },

  _init_aminimate: function()
  {
  	var that = this;
  	this._inInitAnimated = true;

	var dlg = this.element;
	var d = this.uiDialog;

	d.addClass('animatedf BounceIn')
		.on(JP.css3.events.animate.end, function() {
			if(d.data('state') == 'close'){
				dlg.dialog('close');
				that._trigger('closed');
			} else {
				that._trigger('opened');
			}
		});

	dlg.on('dialogbeforeclose', function(event, ui) {
		var state = d.data('state');
		d.removeClass('BounceIn').addClass('BounceOut');
		d.data('state', 'close');
		return state == 'close';
	});

	dlg.on('dialogclose', function() {
		d.removeClass('BounceOut');
		d.data('state', 'closed');
	});

	dlg.on('dialogbeforeopen', function() {
		d.addClass('BounceIn');
	});
  },

  open: function()
  {
	var that = this;
	if ( this._isOpen ) {
		if ( this._moveToTop() ) {
			this._focusTabbable();
		}
		return;
	}

	this._isOpen = true;
	this.opener = $( this.document[0].activeElement );

	this._size();
	this._position();
	this._createOverlay();
	this._moveToTop( null, true );

	this._trigger("beforeopen");

	this._show( this.uiDialog, this.options.show, function() {
		that._focusTabbable();
		that._trigger("focus");
	});

	this._trigger("open");
  }

}));
/*
 * Accordion PLUGIN DEFINITION
 * This style is inspired from bootstrap
 * @link http://twitter.github.com/bootstrap
 * ---------------------------
 */
!
	function($){
		var Collapse = function(element, options){
			this.$element = $(element);
			// $owner hack for my rule!
			this.$owner = $(element).parent('li');
			this.options = $.extend({}, $.fn.collapse.defaults, options);
			if (this.options.parent){
				this.$parent = $(this.options.parent)
			}
			this.options.toggle && this.toggle()
		};

		Collapse.prototype = {
			constructor:Collapse,
			show: function(){
				var actives = this.$parent && this.$parent.find('.in');
				if (actives && actives.length){
					actives.collapse('hide');
					actives.data('collapse', null);
				}

				this.$owner.addClass('active');
				this.$element.addClass('in');

				if($('.JBTN_ToggleMenu').length
					&& $(JP.layout.container.el).hasClass('collapsed')
					// && this.menuexpand // TODO now this condition make normal click exp/collapse menu not work
				) $('.JBTN_ToggleMenu').data('EventClick')();

				if (this.options.transition){
					var el = this.$element;
					if(el.data('height')){
						el.css('height', el.data('height'));
					}else{
						setTimeout(function(){
							el.data('height', el.outerHeight());
						}, 350);
					}
				}
			},
			hide: function(){
				$('>.active', this.$parent).removeClass('active');
				this.$element.removeClass('in');
				if (this.options.transition) this.$element.css('height', 0);
			},
			toggle: function(){
				this[this.$element.hasClass('in') ? 'hide' : 'show']()
			}
		};

		/* COLLAPSIBLE PLUGIN DEFINITION
		 * ============================== */
		$.fn.collapse = function(option){
			return this.each(function(){
				var $this = $(this),
					data = $this.data('collapse'),
					options = typeof option === 'object' && option;
				if (!data) $this.data('collapse', (data = new Collapse(this, options)));
				if (typeof option === 'string') data[option]()
			})
		};

		$.fn.collapse.defaults = {
			toggle:true,
			transition:true
		};

		$.fn.collapse.Constructor = Collapse;
		/* ACCORDION
		 * This is follow by jQuery plugin best practice
		 *
		 * @link http://docs.jquery.com/Plugins/Authoring
		 * @author Liverbool
		 * ================================================== */
		var methods = {

			init: function(options){
				return this.each(function(){
					var me = this;
					$(this).on('click.jaccordion.data-api', '.jp-accordion-title > a', function(e){
						e.preventDefault();
						methods.fireme(this, me, options);
					})
				})
			},

			menuexpand: function(flag){
				Collapse.prototype.menuexpand = flag;
				return this;
			},

			fireme: function(a, me, options){
				var $this = $(a),
					target = $this.next('ul'),
					option = $(target).data('collapse') ? 'toggle' : $.extend({
						parent:$(me)
					}, $.fn.jaccordion.defaults, $this.data(), options || {});

				JP.DEV && cs.log('[TODO] when set menu.expand = false a normal clicking in menu not expand fix it.');
				//cs.trace();

				if (target.length){
					$(target).collapse(option);
					// setup clicked link
					$(target).on('click.jaccordion.link-api', 'a', function(e){
						e.preventDefault();
						JPage.initLink(this);
						$('li li.active', me).removeClass('active');
						$(this).parent('li').addClass('active');
					});
					// ^if(target.length)
				} else {
					if ($(me).find('.in').length) $(me).find('.in').data('collapse').hide();
					$this.parent('li').addClass('active');
					JPage.load($this.attr('href'));
				}
			},

			reset: function(el){
				$('.active', el).removeClass('active');
				$('.in', el).height(0);
				$('.in', el).removeClass('in');
			},

			setactive: function(key){
				var me = this,
					has = false
				;

				if(!key){
					methods.reset(this);
					$(JP.layout.container.el).addClass('collapsed');
					return;
				}

				$('a', this).each(function(){
					if (JPage.getPageID(this.href) === key){
						has = true;
						if ($(this).parent('.jp-accordion-title').length){
							$(this).parent('li').addClass('active');
						} else {
							var pt = $(this).parents('.jp-accordion-title');
							if (!pt.hasClass('active')) methods.fireme(pt.find('> a'), me);

							pt.find('.active').removeClass('active');
							$(this).parent('li').addClass('active');

						}

						return false;
					}
					return true;
				});

				if(!has) methods.reset(this);
			}
		};

		$.fn.jaccordion = function(method){
			// Method calling logic
			if (methods[method]){
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method){
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.jaccordion');
				return false;
			}
		};

		$.fn.jaccordion.defaults = {
			toggle:true,
			transition:true
		};

		/* AUTO CALL
		 * ==================== */
		$(function(){
			$('.jp-accordion').jaccordion();
		});
	}(window.jQuery);
!function($){
	$(function(){
		$('body').on('change.data-toggle-custumcss', '[data-toggle="buttons-radio"] input', function(){
			var pt = $(this).parent('.btn-group'),
				css_yes = pt.data('css-yes'),
				css_no = pt.data('css-no'),
				checked = $(this).is(':checked'),
				label = $('label[for="' + $(this).attr('id') + '"]', pt),
				label2 = $('label:not([for="' + $(this).attr('id') + '"])', pt)
			;

			$('.btn', pt)
				.removeClass(css_yes)
				.removeClass(css_no)
			;

			label.toggleClass(pt.data('css-' + label.data('value')), checked).toggleClass('active', checked);
			label2.removeClass('active');
		});
	});
}(window.jQuery);

if($.fn.modal){
	cs.debug('bootstrap detected');
	/*
	 * BOOTSTRAP EXTENDs
	 */

	$.extend($.fn.button.defaults, {
		loadingText: '<i class="icon-xloading animate-spin"></i><b>Loading...</b>'
	});
	/**
	 * apply options.animate: {
	 *		show: 'bounceIn',
	 *		hide: 'bounceOut'
	 * }
	 * @NOTE use 'animationend webkitAnimationEnd' intread of setTimeout to call en transition
	 */

	$.extend($.fn.modal.Constructor.prototype, {
		show: function(){
			$.extend(this.options, {
					animate: {
			 		show: 'BounceIn',
			 		hide: 'BounceOut'
				}
			});

	        var that = this
	          , e = $.Event('show')
	          , transition = $.support.transition && that.options.animate

	        if(that.$element.center().hasClass('x-modal')){
	        	that.$element.addClass('active');
	        	that.setBodyHeight();
	        }


	        if(transition){
	        	this.$element.removeClass('fade animatedf ' + that.options.animate.hide);
	        	this.$element.addClass('animated ' + that.options.animate.show);
	        }

	        this.$element.trigger(e)

	        if (this.isShown || e.isDefaultPrevented()) return

	        this.isShown = true

	        this.escape()

	        this.backdrop(function(){
	          var transition = $.support.transition && that.options.animate

	          if (!that.$element.parent().length){
	            that.$element.appendTo(document.body) //don't move modals dom position
	          }

	          that.$element.show()

	          if (transition){
	            that.$element[0].offsetWidth // force reflow
	          }

	          that.$element
	            .addClass('in')
	            .attr('aria-hidden', false)

	          that.enforceFocus()

	          transition ?
	            that.$element.one(JP.css3.events.animate.end, function(){ that.$element.focus().trigger('shown') }) :
	            that.$element.focus().trigger('shown')

	        })
	    },

	    hide: function(e){
	        e && e.preventDefault()

	        var  that = this
	        	, transition = $.support.transition && that.options.animate

	        if(transition){
	        	that.$element.removeClass('animated ' + that.options.animate.show);
	        	that.$element.addClass('animatedf ' + that.options.animate.hide);
	    	}

	        e = $.Event('hide')

	        this.$element.trigger(e)

	        if (!this.isShown || e.isDefaultPrevented()) return

	        this.isShown = false

	        this.escape()

	        $(document).off('focusin.modal')

	        this.$element
	          .removeClass('in')
	          .attr('aria-hidden', true)

	        transition ?
	          this.hideWithTransition() :
	          this.hideModal()
	      },

	    hideWithTransition: function(){
	        var that = this
	          , animEnd = JP.css3.events.animate.end
	          , duration = JP.toFloat(this.$element.css('animation-duration'))
	          , timeout = setTimeout(function(){
	              that.$element.off(animEnd)
	              that.hideModal()
	            }, duration ? (duration*1000) : 500)

	        this.$element.one(animEnd, function(){
	          clearTimeout(timeout)
	          that.hideModal()
	        })
	    },

	    hideModal: function(){
	        var that = this
	        this.$element.hide()
	        this.backdrop(function(){
	          that.removeBackdrop()
	          that.$element.trigger('hidden')

	          if(that.$element.hasClass('active')){
		        	that.$element.addClass('active')
		        }
	        })
	    },

	    setBodyHeight: function(){
	    	// @note set body height in style-height to support child element height 100%;
	        $('.modal-body', this.$element).height($('.modal-body', this.$element).height());
	    },

	    setTitle: function(text){
	    	var el = $('.modal-header h3', this.$element);

	    	if(!el.length)
	    		el = $('.modal-header .title', this.$element);

	    	if(!el.length) return null;

	    	el.html(text);
	    },

	    setWidth: function(n){
	    	this.$element.width(n).center();
	    },

	    setHeight: function(n){
	    	this.$element.height(n).center();
	    	this.setBodyHeight();
	    },

	    setSize: function(w, h){
	    	this.setWidth(w);
	    	this.setHeight(h);
	    }

	});

	cs.log('[TODO] Thank you bootstrap small project large bug.')
	cs.log('[TODO] extend bootstrap api to set modal-header title');
}