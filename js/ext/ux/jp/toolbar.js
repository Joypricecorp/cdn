Ext.define('Ext.ux.jp.toolbar', {
	extend: 'Ext.container.Container',
	alias: 'widget.ux-jptoolbar',

	baseCls: 'sec-bar',
	border: true,
	border: '0 0 1 0',

	defaultDock: 'right',

	layout: {
		type: 'hbox',
		align: 'stretch'
    },

	constructor: function (config) {
		var items 	= config.items,
			lefts 	= [],
			centers	= [],
			rights 	= []
		;

		Ext.each(items, function(itm){

			if(!itm.xtype)
				itm.xtype = 'button';

			if(itm.xtype == 'button'){
				if(config.defaults)
					Ext.apply(itm, config.defaults);
				
				this._ApplyDefaults(itm);
			}

			if(!itm.dock)
				itm.dock = this.defaultDock;

			switch(itm.dock){
				case 'left':
					lefts.push(itm);
				break;

				case 'right':
					rights.push(itm);
				break;

				case 'center':
					centers.push(itm);
				break;
			}

			delete itm.dock;

		}, this);

		delete config.defaults;

		config.items = [];

		config.items.push({
				flex: 1,
				xtype: 'container',
				cls: 'ux-jptoolbar-left',
				layout: {
					type: 'hbox',
					pack: 'start'
				}
			});

		config.items.push({
				flex: 1,
				xtype: 'container',
				cls: 'ux-jptoolbar-center',
				layout: {
					type: 'hbox',
					pack: 'center'
				}
			});

		config.items.push({
				flex: 1,
				xtype: 'container',
				cls: 'ux-jptoolbar-right',
				layout: {
					type: 'hbox',
					pack: 'end'
				}
			});

		if(lefts.length)
			config.items[0].items = lefts;

		if(centers.length)
			config.items[1].items = centers;			

		if(rights.length)
			config.items[2].items = rights;
			
		this.callParent(arguments);
	},

	_ApplyDefaults: function(c) {
        if (!Ext.isString(c)) {
            var d = {scale: 'medium'};
            if (c.events) {
                Ext.applyIf(c.initialConfig, d);
                Ext.apply(c, d);
            } else {
                Ext.applyIf(c, d);
            }
        }
        return c;
    },

	/*
	 * @cfg topOwner
	 * owner of toolbar you want apply item to
	 * Default: ownerCt of toolbar
	 */
	afterRender: function(){
		this.callParent(arguments);

		var topOwner = this.topOwner || this.ownerCt;
		JP.Ext.ApplyItemToOwner(this, topOwner);
	}
});

Ext.define('JP.Ext.toolbar.Listbar', {
	extend: 'JP.Ext.toolbar.Toolbar',
	alias: 'widget.jp-listbar',
	height: 35,
	border: false,
	padding: '0 10 0 10',
});

Ext.define('Ext.ux.jp.title', {
	extend: 'Ext.Component',
	alias: 'widget.jp-title',
	cls: 'jp-title'
});

Ext.define('Ext.ux.jp.breadcrumb', {
	extend: 'Ext.Component',
	alias: 'widget.jp-breadcrumb',
	baseCls: '',
	initComponent: function () {

		if(!this.html){
			// if use data config with data-format
			/**
			 *	data: [
			 *		{title: 'Dashborad', id: 'dashborad', text: 'Dashborad'},
			 *		{title: 'Applications', id: 'applications', text: 'Applications'},
			 *		{title: 'สาขาของคุณ', id: 'branchs', text: 'สาขาของคุณ'}
			 * ];
			 */
			this.tpl = new Ext.XTemplate(
				'<div class="jp-breadcrumb">',
					'<div>',
						'<ul>',
							'<tpl for=".">',
								'<li title="{title}"><a href="#{id}">{text}</a></li>',
							'</tpl>',
						'</ul>',
					'</div>',
				'</div>'
			);
		}

		this.callParent(arguments);
	}
});