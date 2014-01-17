/*Ext.onReady(function(){
	Ext.getBody().addCls('ext-ex');
});*/
Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
	showDelay: 0
});

Ext.apply(JP, {
	// todo set decimal
	money: function(num, decimal){
		var undef;

		num = php.number_format(num, decimal === undef ? 2 : decimal);

		if(num.substr(-3) == '.00'){
			num = num.substr(0,num.length-3);
			// @note this's bug (?) when grid-column change HTML render take error
			//num = num + '<span class="e-num-00">.00</span>';
		}

		return num;
	},
	Money: function(v,format){
		var $v = Ext.util.Format.number(v,format || '0,0.00');
		return JP.money($v);
	},
	TODO: function(obj,msg){
		var txt = 'ข้อมูลนี้ยังไม่สมบูรณ์อยู่ระหว่างการดำเนินการ';

		if(msg) txt += '<br><b>ข้อมูลเบื้องต้น</b>: ' + msg;

		var err		= (function(){try { throw Error('') } catch(err) { return err; }})();
		var file	= err.stack.split("\n")[4];
		var line	= file.split(':')[2];

		txt += Ext.String.format('<div class="src"><b>Source</b>: {0} <b>Line</b>: {1} <span class="file"><b>File</b>: {2}</span></div>', obj.$className,line,file);

		Ext.Msg.show({
			title:'[TODO] อยู่ระหว่างการจัดทำ!',
			msg: txt,
			modal: false,
			cls: 'x-todo-msg',
			icon: Ext.Msg.INFO,
			buttons: Ext.Msg.OK
		});
	},
	GHT: function(text, sub_text, tip){
		return '<span'
			+ (tip ? ' title="'+ tip +'"' : '')
			+ '>'
			+ text
			+ '<span class="descr">'
			+ (sub_text || '&#160')
			+ '</span>'
			+ '</span>'
		;
	},
	/**
	 * @param ico
	 * @return {String}
	 * @deprecated use icon
	 */
	ICO: function(ico){
		return 'ico-' + ico;
	},
	/**
	 * @param {String} ico
	 * @param {String} scale
	 * @return {String}
	 * @deprecated use icon
	 */
	ico: function(ico, scale){
		return JP.format('{0} ico-' + ico, scale || '');
	},

	tool: function(ico){
		return 'ico-tool-' + ico;
	},

	/**
	 * bootstrap icon
	 *
	 * @param {String} ico
	 * @param {String} scale
	 * @return {String}
	 */
	icon: function(ico, scale){
		if(scale)
			return JP.format('icon-scale-{0} icon-{1}', scale, ico);

		return JP.format('icon-{0}', ico);
	},

	iconText: function(ico, text){
		return php.sprintf('<i class="icon-%s"></i>%s', ico, text);
	},

	Mask: function(){
		return JP.Loading;
	},

	KeyClean: function(str){
		return str.replace(/[^a-zA-Z0-9]+/g,'');
	},

	THDate: function(value, format){
		var dt		= Ext.Date.format(value, (format || 'd/m/y'));

		var dts		= dt.split('/');
		var y		= parseInt(dts[2]);
		var Y 		= ((y < 1000) ? (y + 2000) : y);
		var Month 	= _('m_' + dts[1]);
		var Year 	= ' ' + ((y < 1000) ? (y+43) : (y+543));

		if(Y == JP.Year){
			Year = '';
		}

		if(/h:i/i.test(format)){
			return php.sprintf('%s %s%s %s:%s', dts[0], Month, Year, Ext.Date.format(value,'H'), Ext.Date.format(value,'i'));
		}

		return php.sprintf('%s %s%s', dts[0], Month, Year);
	},
	/**
	 * render thai date
	 *
	 * @see		Ext.grid.column.Column-cfg-renderer
     */
	THDateRender: function(value, metaData, record, rowIndex, colIndex, store, view){
		if(!value) return '';

		var column 	= this.headerCt.getHeaderAtIndex(colIndex);
		var format	= column.format || 'd/m/Y';

		return JP.THDate(value, format);
	},

	Ext: {
		ApplyItemToOwner: function(chd, owct){
			if(owct.scope) owct = owct.scope;

			chd.items.each(function(it, i){
				if(it.itemId) this[it.itemId] = it;
				//if contrain menus, deep with recerievetion
				if(it.menu) JP.Ext.ApplyItemToOwner(it.menu, this);
				//if contrain childs, deep with recerievetion
				if(it.items) JP.Ext.ApplyItemToOwner(it, this);
			}, owct);
		},

		RemoveWhenVer: function(v, ref){
			if(Ext.Version.compare(Ext.versions.extjs.version, v) != -1){
				cs.warn(php.sprintf('REMOVE ME!! This bug has fixed by %s.', v));

				if(ref) cs.log(ref);
			}
		}
	}
});

/**
 * @var {function} ExtFormFailure ext form failure callback
 * @deprecated
 */
var ExtFormFailure = function (form, action) {
	Ext.Msg.setIcon(Ext.MessageBox.ERROR);
	switch (action.failureType) {
		case Ext.form.Action.CLIENT_INVALID:
			Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
			break;
		case Ext.form.Action.CONNECT_FAILURE:
			Ext.Msg.alert('Failure', 'Ajax communication failed');
			break;
		case Ext.form.Action.SERVER_INVALID:
			Ext.Msg.alert('Failure', action.result.msg || 'An error has occurred. try agian later.');
	}
};

/**
 *
 * @see http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.Model-static-method-load
 * @see http://www.sencha.com/forum/showthread.php?152511
 */
/*Ext.define("JP.Ext.data.Model", {
  extend: "Ext.data.Model",
  statics: {
    load: function(id, config){
      config = Ext.apply({}, config);

      var params={};
      params[this.prototype.idProperty] = id; // bug fix

      config = Ext.applyIf(config, {
          action: 'read',
          params: params
      });

      var operation  = Ext.create('Ext.data.Operation', config),
          scope      = config.scope || this,
          record     = null,
          callback;

      callback = function(operation) {
          if (operation.wasSuccessful()) {
              record = operation.getRecords()[0];
              Ext.callback(config.success, scope, [record, operation]);
          } else {
              Ext.callback(config.failure, scope, [record, operation]);
          }
          Ext.callback(config.callback, scope, [record, operation]);
      };

      this.proxy.read(operation, callback, this);
    }
  }
});*/

Ext.define('Ext.grid.column.XButton', {
    extend: 'Ext.grid.column.Action',
    alias: ['widget.xbuttoncolumn'],
    alternateClassName: 'Ext.grid.XButtonColumn',
    labelText: '',
    defaultRenderer: function(v, meta, record, rowIdx, colIdx, store, view){
        var me = this,
            prefix = Ext.baseCSSPrefix,
            scope = me.origScope || me,
            items = me.items,
            len = items.length,
            i = 0,
            item, ret, disabled, tooltip;

        // Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
        // Assign a new variable here, since if we modify "v" it will also modify the arguments collection, meaning
        // we will pass an incorrect value to getClass/getTip
        ret = Ext.isFunction(me.origRenderer) ? me.origRenderer.apply(scope, arguments) || '' : '';

        meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
        for (; i < len; i++) {
            item = items[i];

            disabled = item.disabled || (item.isDisabled ? item.isDisabled.call(item.scope || scope, view, rowIdx, colIdx, item, record) : false);
            tooltip = disabled ? null : (item.tooltip || (item.getTip ? item.getTip.apply(item.scope || scope, arguments) : null));

            // Only process the item action setup once.
            if (!item.hasActionConfiguration) {

                // Apply our documented default to all items
                item.stopSelection = me.stopSelection;
                item.disable = Ext.Function.bind(me.disableAction, me, [i], 0);
                item.enable = Ext.Function.bind(me.enableAction, me, [i], 0);
                item.hasActionConfiguration = true;
            }

            ret += '<button type="button" class="btn btn-x"><i class="' + prefix + 'action-col-icon ' + prefix + 'action-col-' + String(i) + ' ' + (disabled ? prefix + 'item-disabled' : ' ') +
                ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope || scope, arguments) : (item.iconCls || me.iconCls || '')) + '"' +
                (tooltip ? ' data-qtip="' + tooltip + '"' : '') + ' ></i></button>';
        }
        return ret;
    }
});

Ext.define('Ext.toolbar.Paging', {
    override: 'Ext.toolbar.Paging',
    //extend: 'Ext.toolbar.Paging',
    //alias: 'widget.xpagingtoolbar',
    /**
     * Gets the standard paging items in the toolbar
     * @private
     */
    getPagingItems: function() {
        var me = this;

        return [{
            itemId: 'first',
            tooltip: me.firstText,
            overflowText: me.firstText,
            cls: Ext.baseCSSPrefix + 'btn-tool',
            iconCls: 'icon-to-start',
            disabled: true,
            handler: me.moveFirst,
            scope: me
        },{
            itemId: 'prev',
            tooltip: me.prevText,
            overflowText: me.prevText,
            cls: Ext.baseCSSPrefix + 'btn-tool',
            iconCls: 'icon-left-dir-1',
            disabled: true,
            handler: me.movePrevious,
            scope: me
        },
        '-',
        me.beforePageText,
        {
            xtype: 'numberfield',
            itemId: 'inputItem',
            name: 'inputItem',
            cls: Ext.baseCSSPrefix + 'tbar-page-number',
            allowDecimals: false,
            minValue: 1,
            hideTrigger: true,
            enableKeyEvents: true,
            keyNavEnabled: false,
            selectOnFocus: true,
            submitValue: false,
            // mark it as not a field so the form will not catch it when getting fields
            isFormField: false,
            width: me.inputItemWidth,
            margins: '-1 2 3 2',
            listeners: {
                scope: me,
                keydown: me.onPagingKeyDown,
                blur: me.onPagingBlur
            }
        },{
            xtype: 'tbtext',
            itemId: 'afterTextItem',
            text: Ext.String.format(me.afterPageText, 1)
        },
        '-',
        {
            itemId: 'next',
            tooltip: me.nextText,
            overflowText: me.nextText,
            cls: Ext.baseCSSPrefix + 'btn-tool',
            iconCls: 'icon-right-dir-1',
            disabled: true,
            handler: me.moveNext,
            scope: me
        },{
            itemId: 'last',
            tooltip: me.lastText,
            overflowText: me.lastText,
            cls: Ext.baseCSSPrefix + 'btn-tool',
            iconCls: 'icon-to-end',
            disabled: true,
            handler: me.moveLast,
            scope: me
        },
        '-',
        {
            itemId: 'refresh',
            tooltip: me.refreshText,
            overflowText: me.refreshText,
            cls: Ext.baseCSSPrefix + 'btn-tool',
            iconCls: 'icon-spin3',
            handler: me.doRefresh,
            scope: me
        }];
    }
});
/**
 * custom item menu with no icon img
 * our icon-?:before not support on img tag that standard of ext icon tag
 * this class remove img icon tag and when we use it must config text: JP.iconText('iconkey', 'text') if want to use icon
 *
 * @note in menu (parent of menu-item) may config showSeparator: false
 */
Ext.define('Ext.menu.xItem', {
    extend: 'Ext.menu.Item',
    alias: 'widget.xmenuitem',
    renderTpl: [
        '<tpl if="plain">',
            '{text}',
        '<tpl else>',
            '<a id="{id}-itemEl" class="' + Ext.baseCSSPrefix + 'menu-item-link ' + Ext.baseCSSPrefix + 'menu-xitem-link" href="{href}" <tpl if="hrefTarget">target="{hrefTarget}"</tpl> hidefocus="true" unselectable="on">',
                '<span id="{id}-textEl" class="' + Ext.baseCSSPrefix + 'menu-item-text" <tpl if="arrowCls">style="margin-right: 17px;"</tpl> >{text}</span>',
                '<img id="{id}-arrowEl" src="{blank}" class="{arrowCls}" />',
            '</a>',
        '</tpl>'
    ]
});

Ext.define('JP.Ext.toolbar.Toolbar',{
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.jp-toolbar',
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

Ext.define('Ext.button.Button', {
	override: 'Ext.button.Button',
	oldIconCls: null,
	setLoading: function(toggle, disabled){
		var undef;

		// disable/enable mask
		JP.setMask(!toggle);

		if(toggle){
			this.oldIconCls = this.iconCls;
			this.setIconCls(JP.icon('xloading animate-spin'));
		}else{
			this.setIconCls(this.oldIconCls);
		}

		if(disabled != undef)
			this.setDisabled(disabled);
	}
});

Ext.define('Ext.dom.Element', {
    override: 'Ext.dom.Element',
    setDisabled: function(t){
    	if(t){
    		this.set({'disabled':'disabled'});
    	} else {
    		this.dom.removeAttribute('disabled');
    	}
    }
});

Ext.define('JP.Ext.form.field.ComboBox',{
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.jp-combobox',
	/**
	 * @cfg loadValue
	 * auto set value on loaded
	 * this feature added for remote data when we call setValue before store loaded
	 */
	loadValue: true,
	loadValue_: null,
	initComponent: function(){
		this.callParent(arguments);
		if(this.loadValue && this.store){
			this.getStore().on('load', function(){
				this.setValue(this.loadValue_);
			}, this);
		}
	},
	setValue: function(value, doSelect) {
		this.loadValue_ = value;
		return this.callParent(arguments);
	}
});


Ext.define('Ext.panel.Panel', {
    override: 'Ext.panel.Panel',
    setLoading : function(load, targetEl) {
    	JP.setMask(!load);

    	if(load == true) load = {
    		floating: {
				shadow: false
			}
    	};

        return this.callParent([load, targetEl]);
    }
});

Ext.define('Ext.grid.column.THDate', {
    extend: 'Ext.grid.column.Date',
    alias: ['widget.datecolumn-th'],
    requires: ['Ext.Date'],
    alternateClassName: 'Ext.grid.THDateColumn',

    /**
     * @cfg {String} format
     * A formatting string as used by {@link Ext.Date#format} to format a Date for this Column.
     * This defaults to the default date from {@link Ext.Date#defaultFormat} which itself my be overridden
     * in a locale file.
     */
	format: 'd/m/Y',
    initComponent: function(){
        var me = this;

        if (!me.format) {
            me.format = Ext.Date.defaultFormat;
        }

        me.renderer = JP.THDateRender
        me.callParent(arguments);
    }
});

Ext.define('Ext.grid.column.Money', {
    extend: 'Ext.grid.column.Column',
    alias: ['widget.moneycolumn'],
	//requires: ['Ext.util.Format'],
    alternateClassName: 'Ext.grid.MoneyColumn',

    //<locale>
    /**
     * @cfg {String} format
     * A formatting string as used by {@link Ext.util.Format#number} to format a numeric value for this Column.
     */
    format : '0,000.00',
    //</locale>

    align: 'right',

    /**
     * @cfg renderer
     * @hide
     */
    /**
     * @cfg scope
     * @hide
     */

    defaultRenderer: function(value){
        //return JP.money(Ext.util.Format.number(value, this.format));
        return JP.money(value || 0, 2);
    }
});

Ext.define('Ext.data.myStore', {
	extend: 'Ext.data.Store',
	alias: 'proxy.mystore',
	lastOptions: null,
	constructor: function(){

		Ext.apply(this,{
			reload: function(options){
				this.removeAll();
				this.commitChanges();
				this.load(options === null ? null : Ext.apply(this.lastOptions || {},options));
			}
		});

		this.callParent(arguments);

	},
	load: function(options){
		this.lastOptions = options;
		return this.callParent([options]);
	}
});
//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.data.Store [alias:jp-store] instead of Ext.data.Store/Ext.data.myStore');
//</debug>
// @todo merge mystore and jp-store
Ext.define('JP.Ext.data.Store', {
	extend: 'Ext.data.myStore',
	alias: 'proxy.jp-store'
});

Ext.define('Ext.data.combo.Store', {
	extend: 'JP.Ext.data.Store',
	alias: 'widget.combostore',
	fields: [{name: 'text'},{name: 'value',type: 'int'}],
	root: 'rows',
	autoLoad: false,
	remoteFilter: true,
	pageSize: 1000,
	url: null,
	constructor: function(){

		Ext.apply(this,{
			proxy: {
				type: 'jp-ajax',
				reader: {
					type: 'json',
					root: this.root
				}
			}
		});

		this.callParent(arguments);

		if(this.url)
		this.proxy.url = this.url;
	}
});

/**
 * array common store
 *
 * @how to
 *
 */
Ext.define('Ext.data.common.Store', {
	extend: 'Ext.data.Store',
	alias: 'widget.commonstore',

	/*
	 * @cfg valueForceInt
	 * force value into int by no re-config fields
	 */
	valueForceInt: false,
	constructor: function(){

		if(this.valueForceInt){
			this.fields = [{name: 'text'},{name: 'value',type: 'int'}];
		} else {
			this.fields = ['text', 'value'];
		}

		this.callParent(arguments);
	}
});

Ext.define('Ext.data.property.converter',{
	detectType: function(dt) {
		var me = this;

		switch (dt.type) {
			case 'date':
				dt.value = Ext.Date.parse(dt.value, 'Y-m-d');
			break;

			case 'combo':
				dt.renderer = function(val, meta, rec) {
					return me.findDataLabel(rec,val);
				};

				dt.config = Ext.apply(dt.config || {}, {
					store: Ext.create('Ext.data.common.Store',{
						data: dt.data
					})
				});
			break;

			case 'multiselect':
				dt.renderer = function(val, meta, rec) {
					var vals = [];
					Ext.each(val, function(it, i) {
						vals[i] = this.findDataLabel(rec, it);
					},me);

					return vals.join(',');
				};

				dt.config = Ext.apply(dt.config || {}, {
					store: Ext.create('Ext.data.common.Store',{
						data: dt.data
					})
				});
			break;
		}

		//return dt;
	},
	findDataLabel: function(rec, val) {
		if(!val) return;
		var r = rec.data.config.store.findRecord('value',val);
		return r.get('text');
	}
});

Ext.define('Ext.data.property.Store', {
	extend: 'Ext.data.Store',
	alias: 'proxy.propstore',
	constructor: function(){
		Ext.apply(this,{
			fields: [{
				name: 'label',
				type: 'string',
				convert: function(v,r){
					Ext.create('Ext.data.property.converter').detectType(r.data);
					return v;
				}
			},{
				name: 'name',
				type: 'string'
			},{
				name: 'type',
				type: 'string'
			},{
				name: 'value'
			},{
				name: 'group',
				type: 'int'
			},{
				name: 'groupText',
				type: 'string'
			},{
				name: 'required',
				type: 'boolean'
			},{
				name: 'config',
				type: 'auto'
			},{
				name: 'renderer',
				type: 'auto'
			},{
				name: 'data',
				type: 'auto'
			}],
			groupField: 'groupText'
		});
		this.callParent(arguments);
	},
	loadSourceFromRaw: function(res){
		this.loadData(this.getEditorDataSource(res));
	},
	getEditorDataSource: function(res) {
		var source = [];
		Ext.each(res, function(it, i) {
			it = this.detectType(it);
			source[i] = it;
		},this);
		return source;
	},
	detectType: function(it) {
		var me = this;
		switch (it.type) {
			case 'date':
				it.value = Ext.Date.parse(it.value, 'Y-m-d');
				break;
			case 'combo':
				it.renderer = function(val, meta, rec) {
					return me.findDataLabel(rec,val);
				};
				Ext.apply(it.config = {}, {
					store: Ext.create('Ext.data.common.Store',{
						data: it.data
					})
				});
			break;
			case 'multiselect':
				it.renderer = function(val, meta, rec) {

					var vals = [];
					Ext.each(val, function(it, i) {
						vals[i] = this.findDataLabel(rec, it);
					},me);
					return vals.join(',');
				};
				cs.log(it);
				Ext.apply(it.config = {}, {
					store: Ext.create('Ext.data.common.Store',{
						data: it.data
					})
				});
			break;
		}
		return it;
	},
	findDataLabel: function(rec, val) {
		if(!val) return;
		var r = rec.data.config.store.findRecord('value',val);
		cs.log(r);
		return r.get('text');
	}
});

/*auto handle server response*/
Ext.define('Ext.data.proxy.myAjax', {
	extend: 'Ext.data.proxy.Ajax',
	alias: 'proxy.myajax',
	constructor: function(){

		Ext.apply(this,{
			reader: {
				messageProperty: 'msg',
				type: 'json',
				root: 'rows'
			},
			writer: {
				type: 'json',
				writeAllFields: false,
				root: 'rows'
			}
		});

		this.callParent(arguments);

		this.on('metachange', function(proxy, meta){
			cs.log(meta)
		});

		this.on('exception',function(proxy,response,operation,eOpts){
			if(JP.Loading) JP.Loading.hide();
			cs.trace();
			cs.log(proxy);
			cs.log(response);
			cs.log(operation);
			cs.log(eOpts);
			try{
				var res = Ext.decode(response.responseText);
			}catch(e){
				/**
				 * Response and Force user reload page.
				 */
				cs.log(e);
				alert('Exception from proxy! Please check your connection.');
				var msg = php.sprintf('%s<textarea class="x-msg-descr" style="min-height:150px;">' +
					'%s\n\nclass: %s, method: %s</textarea>',
					'<b style="margin-bottom:5px;">ERROR! Trying to decode response. Please reload the page.</b>',e.message,e.sourceClass,e.sourceMethod);
				Ext.Msg.show({
					title:'เกิดความผิดพลาดขึ้น!',
					msg: msg,
					icon: Ext.Msg.ERROR,
					closable: JP.DEV
				});

				return;
			}
			if(res && res.msg){
				var msg = res.msg;
				if(res.msg && res.dmsg){
					msg = res.msg + php.sprintf('<textarea class="x-msg-descr">%s\n\naction: %s</textarea>',res.dmsg,operation.action);
				}
				Ext.Msg.show({
					title:'เกิดความผิดพลาดขึ้น!',
					msg: msg,
					icon: Ext.Msg.ERROR,
					buttons: Ext.Msg.OK
				});
			}else{
				console.warn(res);
			}
		},this);
	}
});

//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.data.proxy.Ajax [alias:jp-ajax] instead of Ext.data.proxy.myAjax [alias:myajax]');
//</debug>
Ext.define('JP.Ext.data.proxy.Ajax', {
	extend: 'Ext.data.proxy.myAjax',
	alias: 'proxy.jp-ajax'
});

Ext.define('Ext.form.field.Filter', {
	extend: 'Ext.form.field.Trigger',
	alias: 'widget.filterfield',
	initComponent: function(){
		var me = this;
		me.onoff = function(on){
			var css = 'x-filter-';
			if(on){
				this.addCls(css + 'on');
				this.removeCls(css + 'off');
			}else{
				this.addCls(css + 'off');
				this.removeCls(css + 'on');
			}
		};
		Ext.apply(this,{
			listeners: {
				scope: me.handler.scope,
				specialkey: function(a, b) {
					if (b.keyCode === Ext.EventObject.ENTER) {
						var L = a.getValue().length > 0;
						//a.setHideTrigger(!L);
						me.onoff(L);
					}
				}
			},
			onTriggerClick: function() {
				this.reset();
				this.focus();
				me.handler.scope.fireEvent(me.handler.event, "");
				//this.setHideTrigger(true);
				me.onoff(false);
			}
		});
		this.callParent(arguments);
	}
});

//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.tree.Panel [alias:jp-tree] instead of Ext.tree.Panel');
//</debug>
Ext.define('JP.Ext.tree.Panel', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.jp-tree',
	viewConfig: {
		loadMask: {
			shadow: false
		},
		emptyText: '<div class="empty-text">ไม่มีข้อมูล....</div>'
	}
});

//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.grid.Panel [alias: jp-grid] instead of Ext.grid.Panel');
//</debug>
Ext.define('JP.Ext.grid.Panel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.jp-grid',
	/**
	 * @cfg {string} grid header multiple line
	 */
	cls: 'e-grid-mh',
	columnLines: true,
	border: true,
	viewConfig: {
		loadMask: {
			floating: {
				shadow: false
			}
		},
		// show empty text immediately
		deferEmptyText: false,
		emptyText: '<div class="empty-text">ไม่มีข้อมูล...</div>'
	},

	initComponent: function(){

		// disabled loadmask shadow
		if(this.viewConfig && this.viewConfig.loadMask){
			this.viewConfig.loadMask = {
				floating: {
					shadow: false
				}
			}
		}

		this.callParent(arguments);
	},

	getColumnByDataIndex: function(dataIndex) {
		var gridColumns = this.headerCt.getGridColumns();
		for (var i = 0; i < gridColumns.length; i++) {
			if (gridColumns[i].dataIndex == dataIndex) {
				return i;
			}
		}
	}
});

//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.panel.Panel [alias:jp-panel] instead of Ext.panel.Panel');
//</debug>
Ext.define('JP.Ext.panel.Panel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jp-panel'
});

Ext.define('JP.Viewport.Panel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jp-viewport',
	widthContrainer: 'container',
	flex: 1,

	afterFirstLayout: function() {
        var me = this;
		cs.log('init main layout ...');

		//hide for app.js line #4
		JP.Loading.hide();
		JP.layout.on('reset.ext-panel', function(layout){
			me.fireResize(layout.page);
		});

        me.callParent(arguments);
        me.fireResize(JP.layout.page);
    },

    fireResize : function(page){
        // In IE we can get resize events that have our current size, so we ignore them
        // to avoid the useless layout...
	    // @todo some time calculate size is wrong if offset scrollbar showen fixMe
		this.setSize(page.width || 'auto', page.height || 'auto');
    }
});

/**
 * @desc	combo with New... item
 *			when you want to add <New...> item for some combo
 *			for user select to add new something...
 */
Ext.define('Ext.form.NComboBox', {
	extend: 'Ext.form.ComboBox',
	alias: 'widget.ncombo',
	displayField: 'text',
	valueField: 'value',
	tpl : Ext.create('Ext.XTemplate',
		'<ul>',
			'<tpl for=".">',
				'<tpl if="value">',
					'<li role="option" class="x-boundlist-item">{text}</li>',
				'<tpl else>',
					'<li role="option" class="x-boundlist-item x-boundlist-item-new">{text}</li>',
				'</tpl>',
			'</tpl>',
		'</ul>'
	)
});

/**
 * @TODO create thai date
 */
Ext.define('Ext.form.field.Date.TH', {
	extend:'Ext.form.field.Date',
    alias: 'widget.datefield-th',
    initComponent : function(){
    	this.year_pos = this.format.search(/y/i);
    	this.callParent();
    },

    //to set
    valueToRaw: function(value) {
        return this.formatDate(this.parseDate(value));
    },

    //to get
    rawToValue: function(rawValue) {
        return this.parseDate(rawValue) || rawValue || null;
    }
});

Ext.define('JP.Ext.grid.plugin.RowEditing', {
	extend: 'Ext.grid.plugin.RowEditing',
	alias: 'plugin.jp-rowedit',
	showBtns: true,
	focusColIdx: 2,
	removePhantomsOnCancel: true,
	init: function(grid) {
		var me = this;
		me.addEvents('canceledit');
		me.callParent(arguments);
		grid.addEvents('canceledit');
		grid.relayEvents(me, [ 'canceledit' ]);

		me.on('edit', function(editor, context)
		{
			delete context.record._blank;
		});
    },

    // private
    getEditor: function() {
	    var me = this;

	    if (!me.editor) {
		    me.editor = me.initEditor();
		}

        if(this.showBtns == false)
        	me.editor.getFloatingButtons().hide();

        return me.editor;
    },

     // private
    initEditor: function() {
        var me       = this,
            grid     = me.grid,
            view     = me.view,
            headerCt = grid.headerCt,
            btns     = ['saveBtnText', 'cancelBtnText', 'errorsText', 'dirtyText'],
            b,
            bLen     = btns.length,
            cfg      = {
                autoCancel: me.autoCancel,
                errorSummary: me.errorSummary,
                fields: headerCt.getGridColumns(),
                hidden: true,
                view: view,
                // keep a reference..
                editingPlugin: me,
                renderTo: view.el,
                focusContextCell: me.focusContextCell,
                onViewRefresh: me.onViewRefresh
            },
            item;

        for (b = 0; b < bLen; b++) {
            item = btns[b];

            if (Ext.isDefined(me[item])) {
                cfg[item] = me[item];
            }
        }

        return Ext.create('Ext.grid.RowEditor', cfg);
    },

    onViewRefresh: function(view) {
        var me = this,
            viewDom = view.el.dom,
            context = me.context,
            idx;

        viewDom.appendChild(me.el.dom);

        // Recover our row node after a view refresh
        if (context && (idx = context.store.indexOf(context.record)) >= 0) {
            context.row = view.getNode(idx);
            me.reposition();
            if (me.tooltip && me.tooltip.isVisible()) {
                me.tooltip.setTarget(context.row);
            }

           // BOON (not test in multi column editor!)
           // auto focus when next startEdit row
 	       context.column.getEditor().focus();

        } else {
            me.editingPlugin.cancelEdit();
        }

    },

    // mo for auto focus when move row by specialkey/cell-click
    focusContextCell: function() {
    	var a 		= typeof this.editingPlugin.focusColIdx == 'number';
    	var b 		= this.editingPlugin.focusColIdx;
        var field 	= this.getEditor(a ? b : this.context.colIdx);

        if (field && field.focus) {
            field.focus();
        }
    },

    /**
	 * add a record and start edit it
	 *
	 * @param {Object} data Data to initialize the Model's fields with
	 * @param {Number} position The position where the record will added. -1
	 *            will be added record at last position.
	 */
	startAdd: function(data, position)
	{
		var me = this;

		var record = me.grid.store.model.create(data);
		record._blank = true;

		position = (position && position != -1 && parseInt(position + 1) <= parseInt(me.grid.store.getCount())) ? position
				: (position == -1) ? parseInt(me.grid.store.getCount()) : 0;

		var autoSync = me.grid.store.autoSync;
		me.grid.store.autoSync = false;
		me.grid.store.insert(position, record);
		me.grid.store.autoSync = autoSync;
		me.startEdit(position, 0);

        if (me.editor.floatingButtons && me.editor.form.isValid())
		{
            me.editor.floatingButtons.child('#update').setDisabled(false);
        }
	},

	startEditByClick: function()
	{
		var me = this;

		if(!me.editing || me.clicksToMoveEditor === me.clicksToEdit)
		{
			if(me.context && me.context.record._blank)
				me.cancelEdit();

			me.callParent(arguments);
		}
	},

	moveEditorByClick: function()
	{
        var me = this;
        if(me.editing)
        {
        	if(me.context && me.context.record._blank)
        		me.cancelEdit();

        	me.editing = false;
			me.superclass.onCellClick.apply(me, arguments);
        }
    },

	cancelEdit: function()
	{
		var me = this;
		if(me.editing)
		{
			me.getEditor().cancelEdit();
			me.callParent(arguments);
			me.fireEvent('canceledit', me.context);

			if(me.removePhantomsOnCancel)
			{
				if(me.context.record._blank && me.context.record.store)
				{
					me.context.store.remove(me.context.record);
				}
				else
				{
					me.context.record.reject();
				}
			}
		}
	}
});


/**
 * extends base controller
 */
Ext.define('JP.Ext.app.Controller', {
	extend: 'Ext.app.Controller',

	/**
	 * get main application
	 */
	app: function() {
		return this.application;
	},

	/**
	 * get anathor controller
	 */
	ctrl: function(name, cb){
		var ctrl = this.app().controllers.get(name);

		if(ctrl) {
			if(cb) cb.call(this, ctrl);
			return ctrl;
		}

		// load new ctrl on fly and init it.
		// setTimeout prevent lack of browser syscronyce (smooth clicking)
		JP.Loading.show();
		// make sure hide all floating menu (Hacking)
		$('.x-menu').css('visibility', 'hidden');
		var ths = this;
		setTimeout(function(){
			var _ctrl = ths.app().getController(name);

			if (!_ctrl._initialized)
				_ctrl.init(ths.app());

			if(cb) cb.call(ths, _ctrl);
			JP.Loading.hide();
		}, 100);
	},

	/**
	 * call anatohr control handler
	 *
	 * @param {string}  name controller selector string
	 * @param {string}  ent event name
	 * @param {array}   args argurament
	 * @param {string}  cb callback
	 * @param {object}  scope of callback
	 *
	 * @deprecated use ctrl inteadof this
	 */
	anthdr: function(name, ent, args, cb, scope){
		// first require
		var _ctrl = this.ctrl(name, function(ctrl){
			ctrl[ent].apply(ctrl, args);
			if(cb) cb.call(scope || ctrl);
		});

		// class loaded
		if(_ctrl){
			_ctrl[ent].apply(_ctrl, args);
			if(cb) cb.call(scope || _ctrl);
		}
	}
});

/** ENHANCE AJAX **/
Ext.Ajax.on('requestcomplete', function(conn, response, options, eOpts){
	JP.Loading.hide();
	if(JP.DEV){
		if(/jdebug-console/i.test(response.responseText)){
			var res = Ext.decode(response.responseText);
			JConsoleLog.update(res['jdebug-console']);
		}
	}

	$('.x-grid-view.x-grid-view-loading').removeClass('x-grid-view-loading');
});

Ext.Ajax.on('beforerequest', function(conn){
	JP.setMask(false);
	JP.Loading.show();

	// @TODO conside to use anather way
	var x = $('.x-grid-view .empty-text');
	if(x.length)
		x.parent('.x-grid-view').addClass('x-grid-view-loading');
});