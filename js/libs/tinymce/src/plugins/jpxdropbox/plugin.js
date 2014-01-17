tinymce.PluginManager.add('jpxdropbox', function(editor) {
	var undef,cs = console;

	var that = this;
			
	var jpx_default_settings = {
		url: tinymce.PluginManager.urls.jpxdropbox + '/dbx/index.php',
		url_start: '/',

		dialog: {
			autoOpen: false
		}
	};

	$.extend(jpx_default_settings, editor.settings.jpxdropbox || {});

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

	var win_open = editor.windowManager.open;

	editor.windowManager.open = function(args) {
		var win = win_open.call(editor.windowManager, args);

		var setup_ui = function(ctrl){
			var ui_ct  = $('#' + ctrl._id);
			var ui_inp = $('#' + ctrl._id + '-inp');
			var ui_btn = $('<div class="mce-btn">'
							+ '<button role="presentation" type="button" hidefocus tabindex="-1">dropbox</button>'
							+ '</div>'
						);

			ui_btn
				.insertAfter(ui_inp)
				.css({
					'position': 'absolute',
					'right': '0',
					'border-left': '1px solid #c5c5c5'
				})
			;

			if(ui_ct.hasClass('mce-has-open'))
				ui_btn.css({
					'border-radius': '0',
					'right': '33px'
				});

			$('button', ui_btn).css({
				'width': '30px',
				'display': 'inline-block',
				'text-indent': '-1000px',
				'background': 'url("'+ tinymce.PluginManager.urls.jpxdropbox +'/cloud-add-20.png") center center no-repeat'
			});

			ui_ct.css({
				'position': 'relative'
			});

			ui_btn.on('click', function(){
				if(JpxDropbox.instance == undef){
					if(jpx_default_settings.events === undef)
						jpx_default_settings.events = {};

					jpx_default_settings.events = {
						choose: function(url){
							this.ui_inp.val(url);
							this.close();
						}
					};

					JpxDropbox.instance = new JpxDropbox(jpx_default_settings);
				}

				JpxDropbox.instance.open();
				JpxDropbox.instance.ui_inp = ui_inp; // update new tiny dialog rendered ui
			});
		};

		if(args.title == 'Edit image'){
			win.find('*').each(function(ctrl) {
				if(ctrl.type == 'filepicker') {
					setup_ui(ctrl);
					return false;
				}
			});
		}

		return win;
	}
});