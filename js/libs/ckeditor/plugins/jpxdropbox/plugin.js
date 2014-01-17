/*
 * Jpx Dropbox - CKEditor plugin for dropbox images manager. 
 * This plugin can be used to chooses and manage from your dropbox account. 
 *
 * @author liverbool
 * @contact nukboon@gmail.com
 * @copyright 2013 liverbool
 *
 */

(function() {
	var cs = console;

	CKEDITOR.plugins.add( 'jpxdropbox', { 
		init: function( editor ) {
			var that = this;
			
			var jpx_default_settings = {
				url: that.path + 'dbx/index.php',
				url_start: '/',

				dialog: {
					autoOpen: false
				}
			};

			$.extend(jpx_default_settings, editor.config.jpxdropbox || {});

			// load assets
			var path  = jpx_default_settings.url.replace('index.php', '');
			var $body = $('body');

			// csses
			$body.append('<link rel="stylesheet" href="' + path + 'assets/lib/plupload2/js/jquery.ui.plupload/css/jquery.ui.plupload.css" type="text/css">');
			$body.append('<link rel="stylesheet" href="' + path + 'assets/dbx.min.css" type="text/css" media="all">');
			
			// scripts
			$body.append('<script src="' + path + 'assets/lib/jquery.lazyload.jp.min.js" type="text/javascript"><\/script>');
			$body.append('<script src="' + path + 'assets/lib/plupload2/js/plupload.full.min.js" type="text/javascript"><\/script>');
			$body.append('<script src="' + path + 'assets/lib/plupload2/js/jquery.ui.plupload/jquery.ui.plupload.min.js" type="text/javascript"><\/script>');
			$body.append('<script src="' + path + 'assets/dbx.min.js" type="text/javascript"><\/script>');

			CKEDITOR.on('dialogDefinition', function (e) {
				var me		= this,
					dialog	= e.data.definition.dialog,
					undef
				;

			    dialog.on('show', function () {
			    	var el    = this.getContentElement('info', 'txtUrl');
			    	var uict  = $('#' + el.domId).addClass('jpx-ck-add-ct');
			    	var inp   = $('#' + el._.inputId);
			    	var inpct = inp.parent('.cke_dialog_ui_input_text');
			        var btn   = $('.jpx-ck-add', inpct);

			        if(!btn.length){
			        	btn = $('<a class="jpx-ck-add cke_dialog_ui_button"><span class="cke_dialog_ui_button">dropbox</span></a>').insertBefore(inp);
			        	btn.on('click', function(){
			        		if(JpxDropbox.instance == undef){
								if(jpx_default_settings.events === undef)
									jpx_default_settings.events = {};

								jpx_default_settings.events = {
									choose: function(url){
										el.setValue(url);
										el.focus();
										this.close();
									}
								};

								JpxDropbox.instance = new JpxDropbox(jpx_default_settings);
							}

							JpxDropbox.instance.open();

			        	});

			        	btn.css({
			        		'right': '0',
			        		'padding': '4px 0',
			        		'position': 'absolute',
							'border-top-left-radius': '0',
							'border-bottom-left-radius': '0'
			        	});
			        	
						$('span', btn).css({
							'display': 'inline-block',
							'text-indent': '-1000px',
							'background': 'url("'+ that.path +'cloud-add-20.png") center center no-repeat'
						});
						
						inpct.css({
							'position': 'relative'
						});

						inp.css({
							'padding-right': btn.outerWidth()
						});
			        }

			    });
			});
		}
	})

})();