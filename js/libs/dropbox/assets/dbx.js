/**
 * -----------------------------------
 * Jpx Dropbox - core script
 * v1.0
 *
 * Copyright 2013, nukboon@gmail.com
 * -----------------------------------
 * 
 * @package Jpx_Dropbox
 * @version 1.0
 * @author nukboon@gmail.com
 * @copyright (c) 2013 nukboon@gmail.com
 * 
 **/

!function($){

	/**
	 * @var {string} jpx_path base path of dbx app
	 */
	var jpx_path,

		/**
		 * @var {undefine} undef shorthand to compare typeof undefine
		 */
		undef,

		/**
		 * @var {function} undef_fn shorthand to assign function type variable
		 */
		undef_fn = function(){},

		/**
		 * @var {object} cs shorthand to window.console
		 */
		cs = window['console']
	;
	
	/**
	 * @var jpx_body_overflow define original body overflow, we needs to disable body scroll on dialog open
	 */
	var jpx_body_overflow = $('body').css('overflow');

	/**
	 * @var {string} jpx_img base64 blank image (gif)
	 */
	var jpx_img = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

	/**
	 * @var {function} jpx_url shorthand function get dbx path with param:
	 *							- {string} path to append to base path
	 */
	var jpx_url = function(path){return jpx_path + path}

	/**
	 * @var {function} _
	 * convert locale string
	 * in the feature.
	 */
	var _ = function(str){
		return str;
	}

	/**
	 * @var {object} options_default default options
	 */
	var options_default = {
		// url to this dbx app
		url: undef,

		// start folder
		url_start: undef,

		// auto load on init
		autoload: true,

		// jquery dialog option (only event: open,close move to events option)
		dialog: {
			width: 840,
			height: 550,
			autoOpen: true,
			modal: true,
			draggable: true,
			resizable: true,
			title: 'Choose Image',
		},

		// options for custom some plupload
		uploader: {
			file_size: '5mb',
			file_exts: 'jpeg,jpg,gif,png'
		},

		events: {
			/**
			 * on choose item
			 *
			 * @param {string} url dropbox public file url
			 * @param {object jQuery} item current item selected
			 * @param {object jQuery} scope this dbx container
			 * @param {object Event} e this event object
			 */
			choose: undef_fn,

			/**
			 * jquery open dialog event
			 */
			open: undef_fn,
			
			/**
			 * jquery close dialog event
			 */
			close: undef_fn
		}
	};


	var Dropbox = function (options){
		jpx_path = options.url;

		var me = this;
		
		this.options = {
			dialog: options_default.dialog,
			uploader: options_default.uploader,
			events: options_default.events
		};

		$.extend(this.options.dialog, options.dialog || {});
		$.extend(this.options.uploader, options.uploader || {});
		$.extend(this.options.events, options.events || {});

		this.loading(true);
		this.loaded = false;
		this.start_url = jpx_path + (options.url_start || '/');

		if(this.options.autoload === true && this.options.dialog.autoOpen !== false)
			this.load(me.start_url);

		$.extend(this.options.dialog, {
			open: function(e){
				if(me.loaded === false)
					me.load(me.start_url);

				if(me.options.events.open)
					me.options.events.open.call(me, this, e);

				// disable body scroll
				$('body').css('overflow', 'hidden');
			},

			close: function(e){
				if(me.options.events.close)
					me.options.events.close.call(me, this, e);

				// enable body scroll
				$('body').css('overflow', jpx_body_overflow);
			},

			resize: function(e, ui){
				me.calculate_screen_size(ui.size);
			}
		});

		this.scope = $('<div class="jpx-dropbox"></div>')
			.appendTo('body')
			.dialog(this.options.dialog)
		;

		this.scope
			.append('<div class="jpx-loading"><div class="jpx-spinner"></div></div>')
			.closest('.ui-dialog')
			.addClass('jpx jpx-dialog')
		;
		
	}

	Dropbox.prototype = {
		constructor: Dropbox,

		/**
		 * open dialog
		 *
		 * @return void
		 */
		open: function(){
			this.scope.dialog('open');
		},

		/**
		 * close dialog
		 *
		 * @return void
		 */
		close: function(){
			this.scope.dialog('close');
		},

		/**
		 * autoload library and then load dropbox
		 *
		 * @param {string} url path to dbx
		 */
		load: function(url){
			this.reload(url);
		},

		/**
		 * reload current path
		 *
		 * @param {string} url path to reload (default: current path)
		 *
		 * @return void
		 */
		reload: function(url){
			var me = this;

			//this.scope.empty();
			this.loading(true);

			url = url || jpx_path;

			$.get(url, function(res){
				var loading_el = $('.jpx-loading', me.scope);

				me.scope.html(res);
				me.scope.append(loading_el);
				me.init(me.scope);
				me.loading(false);
				me.loaded = true;

				if(me.scope.hasClass('jpx-view-thumb')){
					$('.jpx-btn-group button', me.scope).removeClass('active');
					$('.jpx-btn-thumb', me.scope).addClass('active');
				}
			})
		},

		/**
		 * loading indicator
		 *
		 * @param {boolean} state indicator status
		 *
		 * @return void
		 */
		loading: function(state){

			var loading = $('.jpx-loading');

			loading.css('background-color', $('.jpx-list', this.scope).length ? 'rgba(255,255,255, .5)' : '#fff');

			if(state === true){
				loading.css('display', 'block');
			}else{
				loading.fadeOut(400);
			}
		},

		/**
		 * shorthand to disabled jquery element
		 *
		 * @param {string|object jQuery} el string selector or jQuery object
		 * @param {boolean} state state to take this element
		 *
		 * @return {object jQuery} target element
		 */
		disable: function(el, state){
			if(typeof el === 'string')
				el = $(el);

			return el.attr('disabled', state);
		},

		/**
		 * handler of jpx.itemselectionchange
		 * update toolbar button state
		 *
		 * @param {boolean} dis disable/enable state
		 *
		 * @return void
		 */
		update_toolbar: function(dis){
			this.disable('.jpx-btn-rename', dis);
			this.disable('.jpx-btn-delete', dis);

			var itm = $('.jpx-item-selected', this.scope);
			this.disable('.jpx-btn-choose', true);
			this.disable('.jpx-btn-getlink', true);
			this.disable('.jpx-btn-preview', true);

			if(itm.length){
				var isFolder = itm.data('type') === 'folder';
				var isImage  = itm.data('img') === 'yes';
				this.disable('.jpx-btn-choose', !isImage);
				this.disable('.jpx-btn-getlink', isFolder || !isImage);
				this.disable('.jpx-btn-preview', !isImage);
			}

		},

		/**
		 * handler of take photo button
		 * open camera dialog
		 *
		 * @param {object jQuery} btn take photo button
		 * @param {object jQuery} uploader scope of upload dialog
		 *
		 * @return void
		 */
		open_camera: function(btn, uploader){
			var snaper	= $('.jpx-snaper', this.scope),
				message = '',
				vid 	= {video: true},
				vid_stream = null
			;

			// one time create dialog element
			if(!snaper.length){
				snaper = $('<div class="jpx-snaper">'
						+ '<div class="jpx-message"><h3></h3><div class="jpx-message-body"></div></div>'
						+ '<div class="jpx-video"><video width="640" height="480" autoplay="autoplay"></video></div>'
						+ '<canvas class="jpx-canvas" width="640" height="480" style="display:none"></canvas>'
						+ '<div class="jpx-snaper-buttons">'
							+ '<button class="jpx-btn jpx-btn-ok jpx-btn-snap"><span>'+ _('Snap Photo') +'</span></button>'
							+ '<button class="jpx-btn jpx-btn-ok jpx-btn-select"><span>'+ _('Use this photo') +'</span></button>'
							+ '<button class="jpx-btn jpx-btn-snap-clear"><span>'+ _('Clear Photo') +'</span></button>'
						+ '</div>'
					+ '</div>')
					.appendTo(this.scope);

				snaper
					.dialog({
						title: _('Take Photo'),
						width: 640,
						modal: false,
						close: function(){
							cs.log('close');
							vid_stop();
						},
						open: function(){
							vid_start();
						}
					})
					.closest('.ui-dialog')
					.addClass('jpx jpx-dialog-snaper')
				;
			}

			var btn_snap 	= $('.jpx-btn-snap', snaper),
				btn_clear	= $('.jpx-btn-snap-clear', snaper).hide(),
				btn_select	= $('.jpx-btn-select', snaper).hide(),
				buttons		= $('.jpx-snaper-buttons', snaper).hide().get(0),
				message		= $('.jpx-message', snaper).get(0),
				video_div 	= $('.jpx-video', snaper).get(0),
				video 		= $('video', video_div).get(0),
				canvas 		= $('.jpx-canvas', snaper).get(0)
			;

			// state message for user
			message.msg = function(msg, err){
				var h3 = $('h3', this);
				var bd = $('div', this);

				if(err == 0){
					h3.text(_(msg));
					bd.html(_('To take photo you must allow your camera before.'));

				}else if(err == 3){
					h3.text(_(msg));
					bd.html('https://support.google.com/chrome/answer/2693767?p=ib_access_cam_mic&rd=1');

				}else{
					h3.text(_(msg));
					bd.html('')
				}
			}

			message.msg('Allow your camera.', 0);

			btn_snap.on('click', function(){
				vid_snap();
			});

			btn_clear.on('click', function(){
				cs.log('clear click');

				$(video_div).show();
				$(canvas).hide();
				$(message).hide();
				$(buttons).show();

				btn_snap.show();
				btn_clear.hide();
				btn_select.hide();
			});

			btn_select.on('click', function(){
				cs.log('select click');

				var img = new mOxie.Image();
				img.onload = function(){
					this.name = this.uid + '.png';
					uploader.plupload('getUploader').addFile(new plupload.File(this));
					snaper.dialog('close');
				};

				img.load(canvas_image(canvas).src);

			});

			/**
			 * convert canvas to image object (img)
			 *
			 * @param {object canvasHTML} canvas tag
			 */
			function canvas_image(canvas) {
				var image = new Image();
				image.src = canvas.toDataURL("image/png");
				return image;
			}

			/**
			 * no stream error callback
			 */
			function no_stream() {
				message.msg('Access to camera was denied!', 3);
			}

			/**
			 * get stream
			 *
			 * @param {object} stream active streaming
			 */
			function get_stream(stream) {
				vid_stream = stream;

				btn_snap.show();
				btn_clear.hide();
				btn_select.hide();

				video.onerror = function() {
					cs.log('video error');
					if(video) stop();
				};

				stream.onended = no_stream;

				if(window.webkitURL)
					video.src = window.webkitURL.createObjectURL(stream);

				else if(video.mozSrcObject !== undefined) {//FF18a
					video.mozSrcObject = stream;
					video.play();

				} else if(navigator.mozGetUserMedia){//FF16a, 17a
					video.src = stream;
					video.play();

				} else if(window.URL)
					video.src = window.URL.createObjectURL(stream);

				else
					video.src = stream;

				$(video_div).show();
				$(canvas).hide();
				$(message).hide();
				$(buttons).show();
			}

			/**
			 * start video stream
			 */
			function vid_start() {

				if((typeof window === 'undefined') || (typeof navigator === 'undefined'))
					message.msg('This page needs a web browser to open.', 1);

				else {
					if(navigator.getUserMedia)
						navigator.getUserMedia(vid, get_stream, no_stream);

					else if (navigator.oGetUserMedia)
						navigator.oGetUserMedia(vid, get_stream, no_stream);

					else if (navigator.mozGetUserMedia)
						navigator.mozGetUserMedia(vid, get_stream, no_stream);

					else if (navigator.webkitGetUserMedia)
						navigator.webkitGetUserMedia(vid, get_stream, no_stream);

					else if (navigator.msGetUserMedia)
						navigator.msGetUserMedia({video:true, audio:false}, get_stream, no_stream);

					else message.msg('getUserMedia() not available from your web browser!', 2);
				}
			}

			/**
			 * stop video stream
			 */
			function vid_stop() {
				if(vid_stream) {
					if(vid_stream.stop)
						vid_stream.stop();

					else if(vid_stream.msStop)
						vid_stream.msStop();

					vid_stream.onended = null;
					vid_stream = null;
				}

				if(video){
					video.onerror = null;

					if(video.pause)
						video.pause();

					if (video.mozSrcObject)
						video.mozSrcObject = null;

					video.src = "";
				}
			}

			/**
			 * snap video
			 */
			function vid_snap(){
				btn_snap.hide();
				btn_clear.show();
				btn_select.show();

				$(video_div).hide();
				$(canvas).fadeIn();
				$(message).hide();
				$(buttons).show();

				canvas.width  = video.videoWidth;
				canvas.height = video.videoHeight;
				canvas.getContext('2d').drawImage(video, 0, 0, 640, 480);
			}


		},

		/**
		 * create image/link preview panel
		 *
		 * @param {function} cb callback function fire when we get link form dropbox with params:
		 *						- {object jQuery} preview dialog scope
		 *						- {string} url link form dropbox
		 *						- {object jQuery} current item selected
		 *
		 * @param {object jQuery} itm current item selected
		 * @param {string} loading_text loading indicator text (default: Loading Preview ...)
		 *
		 * @return void
		 */
		create_preview_panel: function(cb, itm, loading_text){
			var prv = $('.jpx-prv');

			if(prv.length) prv.remove();

			prv = $('<div class="jpx jpx-prv jpx-prv-loading jpx-animated jpx-bounce-in">'
					+ '<div class="jpx-prv-header">'
						+ '<button type="buton" class="jpx-btn"><span>✕</span></button>'
						+ '<img/>'
						+ '<div class="jpx-prv-meta">'
							+ '<span class="jpx-prv-label"/>'
							+ '<span class="jpx-prv-state">'
								+ '<span class="jpx-spinner"/>' + (loading_text ? loading_text : 'Loading Preview ...')
							+ '</span>'
							+ '<span class="jpx-prv-dt">'
								+ '<b>size:</b><span class="jpx-size"></span>'
								+ '<b>kind:</b><span class="jpx-kind"></span>'
								+ '<br><b>modified:</b><span class="jpx-modified"></span>'
							+ '</span>'
						+ '</div>'
					+ '</div>'
					+ '<div class="jpx-prv-viewer"/>'
				+ '</div>').appendTo('body');

			var img = $('img', prv);
			var lbl = $('.jpx-prv-label', prv);
			var mta = $('.jpx-prv-meta', prv);
			var itm = itm || $('.jpx-item-selected', this.scope);

			var href = $('img', itm).data('original');

			if(!href) // retrive new item this case when new uploaded
				href = $('.jpx-item-selected', this.scope).data('original');

			var name = href.split('/').pop();

			lbl.text(name);
			img.css('background-image', "url('" + href + "')");

			prv.show();

			// waiting for css animation end
			setTimeout(function() {
				prv.removeClass('jpx-bounce-in');
			}, 350);

			$('button', prv).on('click', function(){

				prv.addClass('jpx-bounce-out');

				// waiting for css animation end
				setTimeout(function() {
					prv.remove();
				}, 300);
			});

			var me = this;
			this.get_link(itm, function(url){
				if(!url){
					alert("Can't show preview in this time.");
					return;
				}

				$('.jpx-size', prv).text($('.jpx-size', itm).text());
				$('.jpx-kind', prv).text($('.jpx-kind', itm).text());
				$('.jpx-modified', prv).text($('.jpx-modified', itm).text());

				cb.call(me, prv, url, itm);
			});

		},

		/**
		 * get item link from dropbox
		 *
		 * @param {object jQuery} itm current item selected
		 * @param {function} cb callback function when get the link from dropbox with params:
		 *						- {string} dropbox item link
		 *
		 * @return void
		 */
		get_link: function(itm, cb){
			var me = this;

			if(itm.data('link')){
				cb.call(me, itm.data('link'));
			}else{
				$.get(jpx_url('/link' + itm.data('path')), function(res){
					itm.data('link', res);
					cb.call(me, res);
				});
			}
		},

		/**
		 * display image/link preview with auto calculate size
		 *
		 * @param {object jQuery} prv current preview dialog scope
		 * @param {string} url dropbox url link
		 *
		 * @return void
		 */
		display_preview: function(prv, url){
			var im = new Image();

			im.src = url;
			im.onload = function(){
				var header = $('.jpx-prv-header', prv);
				var viewer = $('.jpx-prv-viewer', prv)
								.append(im)
								.append('<span class="jpx-file-link"><b>link:</b>'
									+ '<a href="'+ url +'"  title="go to - '+ url +'" target="_new">' + url + '</a>'
									+ '</span>'
								)
							;

				prv.removeClass('jpx-prv-loading').addClass('jpx-prv-full');

				var win = {};

				win.width = $(window).innerWidth()-50;
				win.height = $(window).innerHeight()-50;

				var min_width  = im.width 	< win.width  ? im.width  : win.width;
				var min_height = im.height < win.height ? im.height : win.height;


				var pd1 = parseInt(viewer.css('padding-left')) + parseInt(viewer.css('padding-right'));
				var pd2 = parseInt(viewer.css('padding-top')) + parseInt(viewer.css('padding-bottom'));
				var lnk = $('.jpx-file-link', viewer).outerHeight();
				var hd = header.outerHeight(true) + lnk;

				var w = im.width;
				var h = im.height;

				if(w > min_width)
					w = min_width;

				if(h > min_height)
					h = min_height;

				// set viewer padding if not smalling
				if(w >= (win.width-pd1))
					w = w - pd1;
				if(h >= (win.height-pd2-hd))
					h = h - pd2 - hd;

				var $im = $(im);

				if($im.width() > w){
					$im.width(w);
					$im.height('auto');
				}

				if($im.height() > h){
					$im.height(h);
					$im.width('auto');
				}

				w = $im.width()  + pd1;
				h = $im.height() + pd2 + hd;

				if(w < 400)
					w = 400;

				prv.css({
					width: w,
					height: h,
					'margin-left': (-(w/2)) + 'px',
					'margin-top': (-(h/2)) + 'px'
				}).addClass('jpx-bounce-in');

				//viewer.height(h - hd + lnk);
			}
		},

		calculate_screen_size: function(ui_size){
			var scope = this.scope,
				w = 'outerWidth'
			;

			if(scope.hasClass('jpx-view-thumb')){
				$('.jpx-name', scope).css('width', 'auto');
				return;
			}

			ui_size = ui_size || {
				width:  scope.outerWidth(),
				height: scope.outerHeight()
			};

			// cal item name width
			//var item = $('.jpx-item', this.scope).get(0);
			var img  = $('img', scope);
			var name = $('.jpx-name', scope);
			var kine = $('.jpx-kind', scope);
			var size = $('.jpx-size', scope);
			var modified = $('.jpx-modified', scope);

			var width  = ui_size.width - ((img[w]() + kine[w]() + size[w]() + modified[w]()) + 30); // 30 padding of kine,size,mod.. pading
			name.width(width);
		},

		/**
		 * initial content on load/reload
		 *
		 * @param {object jQuery} scope jquery scope of current main dialog
		 *
		 * @return void
		 */
		init: function(scope){
			var me = this;

			var path    = $('.jpx-path', scope);
			var lists   = $('.jpx-lists', scope);
			var folders = $('.jpx-folders', scope);
			var files   = $('.jpx-files', scope);
			var rename  = $('<input type="text" required="required">');
			var uploader= $('<div class="jpx-uploader"></div>').appendTo(scope);

			this.calculate_screen_size();

			// init lazy load
			$('.jpx-lazy', lists).lazyload({
				container: lists,
				threshold : 500,
				spindelay: 2000
			}).update();

			$('.jpx-modified', lists).humane_dates();

			lists
				.on('jpx-viewchange', function(e, type){
					$(this).closest('.jpx-dropbox').toggleClass('jpx-view-thumb', type === 'thumb');
					// trigger scroll to update lazyload
					lists.scrollTop(1);
					me.calculate_screen_size();
				})

				.on('jpx.itemselectechange', function(e, item, opt){

					var cls = 'jpx-item-selected';
					var slt = true;

					if(opt === 'click' && item.hasClass(cls) && !item.hasClass('jpx-item-active')){
						item.removeClass(cls);
						slt = false;
					}else{
						$('.' + cls, this).removeClass(cls);
						item.addClass(cls);

						if(opt !== 'click' || item.hasClass('jpx-item-active')) // select by add new btn
							slt = false;
					}

					lists.trigger('jpx.selectchange', [item, slt]);
				})

				.on('jpx.selectchange', function(e, item, state){
					me.update_toolbar(!state);
				})

				.on('jpx.foldersaved', '.jpx-label', function(e, res, input, li){
					var label = $(this);

					if(res && res.error){
						alert(res.msg.error);
						input.attr('disabled', false).show().focus().select().addClass('jpx-input-error');
						return;
					}

					li.fadeOut(function(){
						li.remove();
					});

					if(!res) return;

					if(res.meta){
						var href = 'href="' + jpx_url(res.meta.path) + '"';
						var itm = $('<li class="jpx-item" data-type="folder" data-img="no">'
									+ '<img src="' + jpx_img + '" data-' + href + '>'
									+ '<span class="jpx-name">'
										+ '<a ' + href + ' class="jpx-label">' + res.name + '</a>'
									+ '</span>'
									+ '<span class="jpx-kind">folder</span>'
									+ '<span class="jpx-size">--</span>'
									+ '<span class="jpx-modified" title="'+ res.meta.modified +'">' + res.meta.modified + '</span>'
								+ '</li>')
							.hide().appendTo(folders).hide().fadeIn()
						;

						$('.jpx-modified', itm).humane_dates();

						lists.trigger('jpx.itemselectechange', [itm, 'click']);
					}else{
						// empty res but not error mean duplicated name
						// nothing to do
					}
				})
				.on('jpx.rename', '.jpx-label', function(){
					if(!confirm('To rename file/folder may take an existing link to lost. Do you want to continue?')) return;

					var itm = $(this).closest('.jpx-item');
					rename.trigger('append', [this, itm.data('type')]);
					//lists.trigger('jpx.itemselected', [itm]);
				})
				.on('click', '.jpx-item', function(e){
					if($(e.target).hasClass('jpx-lazy') && $(this).hasClass('jpx-item-selected'))
						return false;

					lists.trigger('jpx.itemselectechange', [$(this), 'click']);
				})
			;

			folders
				.on('dblclick', '.jpx-item', function(){
					me.reload(jpx_url($(this).data('path')));
				})
				.on('click', 'a.jpx-label', function(e){
					e.preventDefault();

					if(!$(e.target).hasClass('jpx-label'))
						return;

					me.reload($(this).attr('href'));
				})
				.on('click', 'img', function(e){
					me.reload($(this).data('href'));
				})
			;

			files
				.on('jpx.uploaded', function(e, res){

					var li = $('<li class="jpx-item" data-type="file" data-path="' + res.meta.path + '" data-img="yes">'
						+ '<img class="jpx-lazy" src="' + jpx_img + '" data-original="' + jpx_url('/tmb' + res.meta.path) + '">'
						+ '<span class="jpx-name">'
							+ '<span class="jpx-label">' + res.name + '</span>'
						+ '</span>'
						+ '<span class="jpx-kind">' + res.meta.mime_type + '</span>'
						+ '<span class="jpx-size">' + res.meta.size + '</span>'
						+ '<span class="jpx-modified" title="'+ res.meta.modified +'">' + res.meta.modified + '</span>'
						+ '</li>'
					).hide();

					$('.jpx-modified', li).humane_dates();
					$('.jpx-lazy', li).css('background-image', "url('"+ jpx_url('/tmb' + res.meta.path) +"')");

					var img = $('img', li).bind('load', function(){
						spin.fadeOut(2000, function(){
							spin.remove();
						});
					});

					var spin = $('<div class="jpx-spinner"/>').appendTo(this)
						.css({
							position: 'absolute',
							width: img.outerWidth(true),
							height: img.outerHeight(true)
		            	});

		            li.prependTo(this).fadeIn();
				})
				.on('click', '.jpx-lazy', function(e){
					me.create_preview_panel(function(prv, url){
						me.display_preview(prv, url);

					}, $(this).closest('.jpx-item'));
				})
			;

			rename
				.on('blur', function(){
					var _rename = $(this).clone(true);
					$(this).closest('.jpx-label')
						.text($(this).data('origin_text'))
						.closest('.jpx-name').removeClass('jpx-renaming')
					;
					rename = _rename;

					me.update_toolbar(false);
				})

				.on('save', function(){
					var me   = $(this);
					var data = $(this).data();
					var text = $.trim($(this).val());
					var label = $(this).closest('.jpx-label');
					// clone before lost by label.text(xx)
					var input = $(this).clone(true);

					rename = input.removeClass('jpx-input-error');

					// nothing change
					if(text == data['origin_name']){
						$(this).trigger('saved', [null, label]);
					}else if(text === ''){
						alert('กรุณาระบุชื่อที่ต้องการเปลี่ยน');
						$(this).focus();
					}else{

						var dt = {
							origin: data['origin_text'],
							name: data['origin_ext'] ? text + '.' + data['origin_ext'] : text,
							path: path.data('path')
						};

						label.text('Saving...');
					
						$.post(jpx_url('/rename'), dt, function(res){
							input.trigger('saved', [res, label]);
						});
					}
				})
				.on('keydown', function(e){
					if(e.which == 13 || e.which == 9) // enter or tab
						$(this).trigger('save');

					if(e.which == 27) // escape 
						$(this).trigger('blur');// normal blur bug of many browser
				})
				.on('saved', function(e, res, label){
					var data = $(this).data();
					var text = data.origin_text;

					if(res && res.error){
						alert(res.msg.error);

						label.text(data.origin_name);

						$(this)
							.addClass('jpx-input-error')
							.trigger('append', label, data.origin_type)
						;
						return;
					}

					if(res) text = res.name;

					label.text(text);
					label.closest('.jpx-name').removeClass('jpx-renaming');
					var item = label.closest('.jpx-item')
						// update new path
						.data('path', res.meta.path)
						// clear older link
						.data('link', null)
					;

					// update original to new file name
					$('img', item).data('original', jpx_url('/tmb' + res.meta.path));


					me.update_toolbar(false);

				})
				.on('append', function(e, label, type){
					var origin  = $(label).text();
					var name    = origin;
					var ext     = null;

					if(type == 'file'){
						ext = origin.split('.').pop();
						name = origin.replace(/\.[^.]+$/,'');
					}

					$(label).text('');

					$(this)
						.appendTo(label)
						.data('origin_text', origin)
						.data('origin_name', name)
						.data('origin_ext', ext)
						.data('origin_type', type)
						.val(name)
						.show()
						// [bug] auto focus trigger blur on window
						//.focus()
					;

					$(label).closest('.jpx-name').addClass('jpx-renaming');

					me.update_toolbar(true);
				})
			;

			$('.jpx-btn-choose', scope).on('click', function(){
				if(!me.options.events.choose) return;

				var item = $('.jpx-item-selected', me.scope);

				if(!item.length){
					alert(_('Please select once of you want to choose.'));
					return;
				}

				if(item.data('link')){
					me.options.events.choose.call(me, item.data('link'), item, me.scope);
					return;
				}

				var btn = $(this).attr('disabled', true);
				$('span', btn).text(_('waiting...'));

				me.get_link(item, function(url){

					me.options.events.choose.call(me, url, item, me.scope);
					
					btn.attr('disabled', false);
					$('span', btn).text(_('Choose'));
				})

			});

			$('.jpx-btn-preview', scope).on('click', function(){
				var item = $('.jpx-item-selected', me.scope);

				if(!item.length){
					alert(_('Please select once of you want to preview.'));
					return;
				}

				me.create_preview_panel(function(prv, url){
					me.display_preview(prv, url);

				}, item);
			});

			$('.jpx-btn-getlink', scope).on('click', function(){
				var item = $('.jpx-item-selected', me.scope);

				if(!item.length){
					alert(_('Please select once of you want to get the link.'));
					return;
				}

				me.create_preview_panel(function(prv, url, itm){
					var viewer = $('.jpx-prv-viewer', prv)
						.append('<textarea readonly="readonly" />')
					;

					prv.removeClass('jpx-prv-loading').addClass('jpx-prv-full jpx-panel-getlink');

					$('textarea', viewer).val(url)
						.on('focus', function(){
							$(this).select();
						})
						.on('mouseup', function(e){
							e.preventDefault();
						})
					;

					$('button', prv).on('click', function(){

						prv.addClass('jpx-bounce-out');

						// todo check animate support
						setTimeout(function() {
							prv.remove();
						}, 300);
					});

				}, item, 'Geting image link...');

			})

			$('.jpx-btn-thumb, .jpx-btn-list', scope).on('click', function(){
				var pt = $(this).parent();
				
				$('.active', pt).removeClass('active');
				$(this).addClass('active');

				lists.trigger('jpx-viewchange', [$(this).hasClass('jpx-btn-thumb') ? 'thumb' : 'list']);
			});

			$('.jpx-btn-refresh', scope).on('click', function(){
				me.reload(path.data('url'));
			});

			$('.jpx-btn-back', scope).on('click', function(){
				me.reload($(this).data('url'));
			});

			$('.jpx-btn-rename', scope).on('click', function(e){
				var item = $('.jpx-item-selected', me.scope);

				if(!item.length){
					alert('Please select once of you want to rename.');
					return;
				}

				$('.jpx-label', item).trigger('jpx.rename');
			});

			$('.jpx-btn-delete', scope).on('click', function(e){
				var item = $('.jpx-item-selected', me.scope);

				if(!item.length){
					alert('Please select once of you want to delete.');
					return;
				}

				if(!confirm('To delete file/folder may take your existing link to lost. Do you want to continue?')) return;

				var label = $('.jpx-label', item);
				var text = label.text();
				label.text('Deleting...');

				$.post(jpx_url('/delete'), {path: item.data('path')}, function(res){

					if(res.error){
						label.text(text);
						alert(res.msg.error);
						return;
					}

					item.fadeOut(function(){
						$(this).remove();
						me.update_toolbar(true);
					});

				});
			});

			$('.jpx-btn-add-file', scope).click(function(){
				$(get_uploader()).dialog('open');
			});

			$('.jpx-btn-add-folder', scope).click(function(){

				var li = $('<li class="jpx-item jpx-item-active" data-type="folder">' +
					'<img src="' + jpx_img + '">' +
					'<span class="jpx-name"><span class="jpx-label">' +
						'<input type="text" required="required">' +
						'<span class="jpx-saving">Saving...<span>' +
					'</span></span>' +
					'</li>').appendTo(folders);

				var saving = $('.jpx-saving', li).hide();

				lists.trigger('jpx.itemselectechange', [li]);

				var label = $('.jpx-label', li);

				var ip = $('input', label).on('save', function(){
					var val = $.trim($(this).val());
					var pth = path.data('path');

					if(val === ''){
						alert('Enter you folder name.');
						$(this).val('');
						return;
					}else{
						saving.show();
						$(this).hide();
						$.post(jpx_url('/folder/save'), {path: pth, name: val}, function(res){
							saving.hide();
							label.trigger('jpx.foldersaved', [res, ip, li]);
						});
					}
				})
				.on('keydown', function(e){
					if(e.which == 13 || e.which == 9) // enter or tab
						$(this).trigger('save');

					if(e.which == 27) // escape force cancel
						$(this).trigger('jpx.blur');
				})
				// normal blur (default form dom) cannot pass own params
				.on('jpx.blur', function(){
					li.remove();
				})
				.on('blur', function(e){
					if($.trim($(this).val()) === ''){
						li.remove();
					}
				})
				.focus();
			});

			$('.jpx-path-name', scope)
				.on('click', function(){
					$(this).toggleClass('selected', !$(this).hasClass('selected'));
				})
				.on('click', 'li a', function(e){
					e.preventDefault();
					me.reload($(this).attr('href'));
				})
			;

			var _uploader = false;
			var get_uploader = function(){
				if(_uploader) return uploader;

				_uploader = true;
				uploader = $('.jpx-uploader', scope)

					.plupload({
						// General settings
						runtimes : 'html5',
						url : jpx_url('/upload'),
						max_file_size : me.options.uploader.file_size || '5mb',
						unique_names : false,

						multipart_params: {
							path: path.data('path')
						},

						// Resize images on clientside if we can
						resize : {quality : 100},

						// Specify what files to browse for
						filters : [
							{title : 'Files', extensions : me.options.uploader.file_exts || 'jpeg,jpg,gif,png'}
						],

						// Rename files by clicking on their titles
						rename: false,
						
						// Sort files
						sortable: true,

						// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
						dragdrop: true,

						// Views to activate
						views: {
							list: true,
							thumbs: true, // Show thumbs
							active: 'list'
						},

						init: {
							StateChanged: function(up) {
								var btns = $('.plupload_add,.plupload_start,.plupload_snap', uploader);
								// hide ui button when uploading
								btns.css('display', up.state == plupload.STARTED ? 'none' : 'inline-block');
							},

							FileUploaded: function(up, file, info){
								var res = $.parseJSON(info.response);
								files.trigger('jpx.uploaded', [res])
							},

							Error: function(up, args) {
								cs.log(arguments);
							}
						}
					})

					.dialog({
						title: 'Uploade files',
						autoOpen: false,
						modal: false,
						width: 550,

						close: function(){
							uploader.plupload('getUploader').splice();
							$('.plupload_filelist_content', uploader).empty();
						},
						
						open: function(){
							var plupload_snap = $('.plupload_snap', this);

							if(!plupload_snap.length){
								plupload_snap = $('<a class="plupload_button plupload_snap">' + _('Take Photo') + '</a>')
									.insertBefore('.plupload_start', this)
									.jpxbutton({
										icons: { primary: 'ui-icon-camera' }
									})
									.on('click', function(){
										me.open_camera(this, uploader);
									})
								;

								$('.plupload_filelist_footer .plupload_button', uploader).addClass('jpx-btn');
								$('.plupload_view_switch .plupload_button', uploader).addClass('jpx-btn-x');
								$('[for="plupload_view_list"]', uploader).addClass('ui-state-active');
							}
						}
					})
				;

				uploader
					.closest('.ui-dialog')
					.addClass('jpx jpx-dialog-uploader')
				;

				return uploader;
			}
		}
	}

	window['JpxDropbox'] = Dropbox;

}(jQuery);

!function($){
	/*
	 * Javascript Humane Dates
	 * Copyright (c) 2008 Dean Landolt (deanlandolt.com)
	 * Re-write by Zach Leatherman (zachleat.com)
	 * 
	 * Adopted from the John Resig's pretty.js
	 * at http://ejohn.org/blog/javascript-pretty-date
	 * and henrah's proposed modification 
	 * at http://ejohn.org/blog/javascript-pretty-date/#comment-297458
	 * 
	 * Licensed under the MIT license.
	 */

	function humane_date(date_str){
		var time_formats = [
			[60, 'just now'],
			[90, '1 minute'], // 60*1.5
			[3600, 'minutes', 60], // 60*60, 60
			[5400, '1 hour'], // 60*60*1.5
			[86400, 'hours', 3600], // 60*60*24, 60*60
			[129600, '1 day'], // 60*60*24*1.5
			[604800, 'days', 86400], // 60*60*24*7, 60*60*24
			[907200, '1 week'], // 60*60*24*7*1.5
			[2628000, 'weeks', 604800], // 60*60*24*(365/12), 60*60*24*7
			[3942000, '1 month'], // 60*60*24*(365/12)*1.5
			[31536000, 'months', 2628000], // 60*60*24*365, 60*60*24*(365/12)
			[47304000, '1 year'], // 60*60*24*365*1.5
			[3153600000, 'years', 31536000], // 60*60*24*365*100, 60*60*24*365
			[4730400000, '1 century'], // 60*60*24*365*100*1.5
		];

		var time = ('' + date_str).replace(/-/g,"/").replace(/[TZ]/g," "),
			dt = new Date,
			//seconds = ((dt - new Date(time) + (dt.getTimezoneOffset() * 60000)) / 1000),
			// modified dont add timezone it's converted by jpx_time
			seconds = ((dt - new Date(time)) / 1000),
			token = ' ago',
			i = 0,
			format;

		if (seconds < 0) {
			seconds = Math.abs(seconds);
			token = '';
		}

		while (format = time_formats[i++]) {
			if (seconds < format[0]) {
				if (format.length == 2) {
					return format[1] + (i > 1 ? token : ''); // Conditional so we don't return Just Now Ago
				} else {
					return Math.round(seconds / format[2]) + ' ' + format[1] + (i > 1 ? token : '');
				}
			}
		}

		// overflow for centuries
		if(seconds > 4730400000)
			return Math.round(seconds / 4730400000) + ' centuries' + token;

		return date_str;
	};

	if(typeof jQuery != 'undefined') {
		jQuery.fn.humane_dates = function(){
			return this.each(function(){
				var date = humane_date(this.title);
				if(date && jQuery(this).text() != date) // don't modify the dom if we don't have to
					jQuery(this).text(date);
			});
		};
	}
}(jQuery);