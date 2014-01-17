Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
    //@see http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.grid.Panel-cfg-stateId
    expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7)) //7 days from now
}));

Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
    showDelay: 0
});

Ext.grid.RowEditor.prototype.cancelBtnText = _("ยกเลิก");
Ext.grid.RowEditor.prototype.saveBtnText = _("บันทึก");

Ext.apply(JP, {

    stk_cls_label: function(id) {
        if (!id) return '-';

        if (id == 5) return _('ราคาต้นทุน');

        return JP.CDATA.cls[id];
    },

    isYes: function(val) {
        return (val === 1 || val === '1' || val === 'y' || val === 'Y');
    },

    filter: function(key, value, operator) {
        return new Ext.util.Filter({
            id: key,
            property: key,
            value: value,
            operator: operator
        });
    },
    Money: function(v, format) {
        var $v = Ext.util.Format.number(v, format || '0,0.00');
        return JP.money($v);
    },
    TODO: function(obj, msg) {
        var txt = _('ข้อมูลนี้ยังไม่สมบูรณ์อยู่ระหว่างการดำเนินการ');

        if (msg) txt += '<br><b>ข้อมูลเบื้องต้น</b>: ' + msg;

        var err = (function() {
            try {
                throw Error('')
            } catch (err) {
                return err;
            }
        })();
        var file = err.stack.split("\n")[4];
        var line = file.split(':')[2];

        txt += Ext.String.format('<div class="src"><b>Source</b>: {0} <b>Line</b>: {1} <span class="file"><b>File</b>: {2}</span></div>', obj.$className, line, file);

        Ext.Msg.show({
            title: '[TODO] อยู่ระหว่างการจัดทำ!',
            msg: txt,
            modal: false,
            cls: 'x-todo-msg',
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    },
    GHT: function(text, sub_text, tip) {
        return '<span' + (tip ? ' title="' + tip + '"' : '') + '>' + text + '<span class="descr">' + (sub_text || '&#160') + '</span>' + '</span>';
    },
    /**
     * @param ico
     * @return {String}
     * @deprecated use icon
     */
    ICO: function(ico) {
        return 'ico-' + ico;
    },
    /**
     * @param {String} ico
     * @param {String} scale
     * @return {String}
     * @deprecated use icon
     */
    ico: function(ico, scale) {
        return JP.format('{0} ico-' + ico, scale || '');
    },

    tool: function(ico) {
        return 'x-tool-img x-tool-' + ico;
    },

    /**
     * bootstrap icon
     *
     * @param {String} ico
     * @param {String} scale
     * @return {String}
     */
    icon: function(ico, scale) {
        if (scale)
            return JP.format('icon-scale-{0} icon-{1}', scale, ico);

        return JP.format('icon-{0}', ico);
    },

    iconText: function(ico, text) {
        return php.sprintf('<i class="icon-%s"></i>%s', ico, text ? text : '');
    },

    /**
     * override html button
     */
    btn: function(btn) {
        btn.setLoading = function(state) {
            var span = $('span', btn),
                icon = $('i', btn);

            if (!icon.data('cls'))
                icon.data('cls', icon.attr('class'));

            if (!span.data('txt'))
                span.data('txt', span.html());

            if (state && state !== true)
                span.html(state);

            if (state === false)
                span.html(span.data('txt'));

            icon.attr('class', state ? JP.icon('spin animate-spin') : icon.data('cls'));
            $(btn).attr('disabled', state);
        }

        //btn.show = $(btn).show;
        //btn.hide = $(btn).hide;

        return btn;
    },

    emptyMsg: function(title, msg) {
        return php.sprintf('<div class="x-empty x-empty-box">' + '<div class="x-empty-title">%s</div>' + '<div class="x-empty-body">%s</div>' + '</div>', _(title), _(msg));
    },

    Mask: function() {
        return JP.Loading;
    },

    KeyClean: function(str) {
        return str.replace(/[^a-zA-Z0-9]+/g, '');
    },

    THDate: function(value, format) {
        var dt = Ext.Date.format(value, 'd/m/Y');

        var dts = dt.split('/');
        var Y = parseInt(dts[2]);
        var Month = /M/.test(format) ? _('m' + dts[1]) : _('m_' + dts[1]);
        var Year = ' ' + (/Y/.test(format) ? (Y + 543) : (Y - 2000 + 43));

        /*if(Y == JP.Year){
         Year = '';
         }*/

        if (/h:i/i.test(format)) {
            return php.sprintf('%s %s%s %s:%s', dts[0], Month, Year, Ext.Date.format(value, 'H'), Ext.Date.format(value, 'i'));
        }

        return php.sprintf('%s %s%s', dts[0], Month, Year);
    },
    /**
     * render thai date
     *
     * @see        Ext.grid.column.Column-cfg-renderer
     */
    THDateRender: function(value, metaData, record, rowIndex, colIndex, store, view) {
        if (!value) return '';

        var column = this.headerCt.getHeaderAtIndex(colIndex);
        var format = column.format || 'd/m/Y';

        return JP.THDate(value, format);
    },

    Ext: {
        ApplyItemToOwner: function(chd, owct) {
            if (owct.scope) owct = owct.scope;
            if (owct.__proto__) owct = owct.__proto__;

            chd.items.each(function(it, i) {
                if (it.itemId) this[it.itemId] = it;
                //if contrain menus, deep with recerievetion
                if (it.menu) JP.Ext.ApplyItemToOwner(it.menu, this);
                //if contrain childs, deep with recerievetion
                if (it.items) JP.Ext.ApplyItemToOwner(it, this);
            }, owct);
        },

        RemoveWhenVer: function(v, ref) {
            if (Ext.Version.compare(Ext.versions.extjs.version, v) != -1) {
                cs.warn(php.sprintf('REMOVE ME!! This bug has fixed by %s.', v));

                if (ref) cs.log(ref);
            }
        }
    },

    store: function(config) {
        return Ext.widget('jp-store-common', config);
    }
});

/**
 * TODO when failure fire some app must reset element like BTN is still disabled to enable
 * @var {function} ExtFormFailure ext form failure callback
 * @deprecated
 */
var ExtFormFailure = function(form, action) {
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

Ext.override(Ext.data.proxy.Server, {
    encodeFilters: function(filters) {
        var min = [],
            length = filters.length,
            i = 0;


        for (; i < length; i++) {
            min[i] = {
                property: filters[i].property,
                operator: filters[i].operator,
                value   : filters[i].value
            };
        }
        return this.applyEncoding(min);
    }
});

Ext.define('Ext.AbstractComponent', {
    override: 'Ext.AbstractComponent',

    // http://docs.sencha.com/extjs/4.2.1/#!/api/Ext.AbstractComponent-method-on
    one: function(eventName, fn, scope, options) {
        return this.on(eventName, fn, scope, Ext.apply({
            single: true
        }, (options || {})));
    }
});

Ext.define('Ext.toolbar.Paging', {
    override: 'Ext.toolbar.Paging',
    //extend: 'Ext.toolbar.Paging',
    //alias: 'widget.xpagingtoolbar',

    border: true,
    displayInfo: true,
    displayMsg: 'รายการที่ {0} - {1} จาก {2}',
    emptyMsg: "ไม่มีข้อมูล",
    dock: 'bottom',

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
            }, {
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
            me.beforePageText, {
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
            }, {
                xtype: 'tbtext',
                itemId: 'afterTextItem',
                text: Ext.String.format(me.afterPageText, 1)
            },
            '-', {
                itemId: 'next',
                tooltip: me.nextText,
                overflowText: me.nextText,
                cls: Ext.baseCSSPrefix + 'btn-tool',
                iconCls: 'icon-right-dir-1',
                disabled: true,
                handler: me.moveNext,
                scope: me
            }, {
                itemId: 'last',
                tooltip: me.lastText,
                overflowText: me.lastText,
                cls: Ext.baseCSSPrefix + 'btn-tool',
                iconCls: 'icon-to-end',
                disabled: true,
                handler: me.moveLast,
                scope: me
            },
            '-', {
                itemId: 'refresh',
                tooltip: me.refreshText,
                overflowText: me.refreshText,
                cls: Ext.baseCSSPrefix + 'btn-tool',
                iconCls: 'icon-spin3',
                handler: me.doRefresh,
                scope: me
            }
        ];
    }
});

/**
 * Override Ext.menu
 */
Ext.define('Ext.menu.Menu', {
    override: 'Ext.menu.Menu',

    /**
     * add offsets config
     * Number[x, y]
     */
    offsets: [0, 4],

    /*
     * disabled default shadow
     * use css shadow inteadof
     */
    shadow: false,

    // override the method
    showBy: function(cmp, pos, off) {
        var me = this, undef;

        if(off == undef)
            off = this.offsets;

        me.callParent([cmp, pos, off]);

        if (!me.hidden) {
            // show may have been vetoed
            me.setVerticalPosition();
        }

        return me;
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
        '<tpl if="plain">', '{text}', '<tpl else>', '<a id="{id}-itemEl" class="' + Ext.baseCSSPrefix + 'menu-item-link ' + Ext.baseCSSPrefix + 'menu-xitem-link" href="{href}" <tpl if="hrefTarget">target="{hrefTarget}"</tpl> hidefocus="true" unselectable="on">', '<span id="{id}-textEl" class="' + Ext.baseCSSPrefix + 'menu-item-text" <tpl if="arrowCls">style="margin-right: 17px;"</tpl> >{text}</span>', '<img id="{id}-arrowEl" src="{blank}" class="{arrowCls}" />', '</a>', '</tpl>'
    ]
});

Ext.define('JP.Ext.toolbar.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.jp-toolbar',

    /*
     * @cfg topOwner
     * owner of toolbar you want apply item to
     * Default: ownerCt of toolbar
     */
    afterRender: function() {
        this.callParent(arguments);

        var topOwner = this.scope || this.topOwner || this.ownerCt;
        JP.Ext.ApplyItemToOwner(this, topOwner);
    }
});

Ext.define('Ext.button.Button', {
    override: 'Ext.button.Button',
    oldIconCls: null,

    enableSelection: null, // Boolean|Number|Function|Object{ nums: Number, fn: Function }
    _enableSelection: {
        type: null,
        nums: null,
        fn: null,
        isEnable: function (btn, records) {
            if (records.length && btn.isDisabled())
                return true;
            else if (!records.length && !btn.isDisabled())
                return false;
            return null;
        },
        isEnableByNums: function (btn, records) {
            if (records.length == this.nums && btn.isDisabled())
                return true;
            else if (records.length != this.nums && !btn.isDisabled())
                return false;
            return null;
        },
        isEnableByFn: function (btn, sm, records, eOpts) {
            return this.fn.call(btn, sm, records, eOpts);
        }
    },

    initComponent: function () {
        var me = this;

        me.callParent(arguments);

        if (!me.enableSelection) return;

        me.on('afterrender', function () {
            var panel = me.up('panel');

            if (!(panel instanceof Ext.grid.Panel)) return;

            if (Ext.isNumber(me.enableSelection) && me.enableSelection > 0) {
                me._enableSelection.type = 1;
                me._enableSelection.nums = me.enableSelection;
            } else if (Ext.isFunction(me.enableSelection)) {
                me._enableSelection.type = 2;
                me._enableSelection.fn = me.enableSelection;
            } else if (Ext.isObject(me.enableSelection)) {
                if (Ext.isNumber(me.enableSelection.nums) && me.enableSelection.nums > 0)
                    me._enableSelection.nums = me.enableSelection.nums;
                if (Ext.isFunction(me.enableSelection.fn))
                    me._enableSelection.fn = me.enableSelection.fn;

                if (me._enableSelection.nums && me._enableSelection.fn)
                    me._enableSelection.type = 3;
                else if (me._enableSelection.nums)
                    me._enableSelection.type = 1;
                else if (me._enableSelection.fn)
                    me._enableSelection.type = 2;
            }

            me.setDisabled(true);
            panel.on('selectionchange', me.onGridSelectionChange(), me);
        });
    },

    // private
    onGridSelectionChange: function () {
        var me = this;
        var es = me._enableSelection;

        switch (es.type) {
            case 1:
                return function (sm, records, eOpts) {
                    if ((isEnableByNums = es.isEnableByNums(me, records)) != null)
                        me.setDisabled(isEnableByNums ? false : true);
                };
            case 2:
                return function (sm, records, eOpts) {
                    if ((isEnable = es.isEnable(me, records)) != null
                        && (isEnableByFn = es.isEnableByFn(me, records)) != null)
                            me.setDisabled(isEnable && isEnableByFn ? false : true);
                };
            case 3:
                return function (sm, records, eOpts) {
                    if ((isEnableByNums = es.isEnableByNums(me, records)) != null
                        && (isEnableByFn = es.isEnableByFn(me, sm, records, eOpts)) != null)
                            me.setDisabled(isEnableByNums && isEnableByFn ? false : true);
                };
            default:
                return function (sm, records, eOpts) {
                    if ((isEnable = es.isEnable(me, records)) != null)
                        me.setDisabled(isEnable ? false : true);
                };
        }
    },

    setLoading: function(toggle, scope, delayCheck) {
        var undef;

        // disable/enable mask
        JP.setMask(!toggle);

        var loading = function(btn)
        {
            btn.oldIconCls = btn.iconCls;
            btn.setIconCls(JP.icon('spin animate-spin'));
        };

        this.setDisabled(!!toggle);

        if (toggle) {

            loading(this);

            if(typeof toggle == 'function') {
                Ext.Function.defer(toggle, delayCheck ? 200 : 0, scope || this, [this]);
            }

        } else {
            this.setIconCls(this.oldIconCls);
        }
    },

    loading: function(toggle)
    {
        this.setLoading(toggle);
    }
});

Ext.define('Ext.dom.Element', {
    override: 'Ext.dom.Element',
    setDisabled: function(t) {
        if (t) {
            this.set({
                'disabled': 'disabled'
            });
        } else {
            this.dom.removeAttribute('disabled');
        }
    }
});

Ext.define('JP.Ext.form.field.Combo', {
    extend: 'Ext.form.field.ComboBox',
    displayField: 'text',
    valueField: 'value',
    alias: 'widget.jp-combo',

    /**
     * @cfg loadValue
     *
     * auto set value on loaded
     * this feature added for remote data when we call setValue before store loaded
     *
     * @NOTE if we use forceSelection: true we don't need to use this config, but some time we want to
     *         use forceSelection: true and then the loadValue is to be need
     *
     * @see http://www.sencha.com/forum/showthread.php?264525-Combobox.setValue-TODO
     */
    loadValue: true,
    loadValue_: null,

    expandOnFocus: false,

    initComponent: function() {
        this.callParent(arguments);

        if (this.loadValue && this.store) {
            this.getStore().on('load', function() {
                this.setValue(this.loadValue_);
            }, this);
        }

        if (this.expandOnFocus) {
            this.on('focus', function() {
                this.expand();
            }, this);
        }
    },

    setValue: function(value, doSelect) {
        this.loadValue_ = value;
        this.callParent(arguments);
    }
});

Ext.define('JP.Ext.form.field.ComboBox', {
    extend: 'JP.Ext.form.field.Combo',
    displayField: 'def_text',
    valueField: 'def_value',
    alias: 'widget.jp-combobox'
});

/**
 * combo with New... item
 * when you want to add `New...` item for some combo
 * for user select to add new something...
 */
Ext.define('JP.Ext.form.field.NComboBox', {
    extend: 'JP.Ext.form.field.ComboBox',
    alias: 'widget.ncombo',
    displayField: 'text',
    valueField: 'value',
    tpl: Ext.create('Ext.XTemplate', '<ul>', '<tpl for=".">', '<tpl if="value">', '<li role="option" class="x-boundlist-item">{text}</li>', '<tpl else>', '<li role="option" class="x-boundlist-item x-boundlist-item-new">{text}</li>', '</tpl>', '</tpl>', '</ul>')
});

Ext.define('Ext.panel.Panel', {
    override: 'Ext.panel.Panel',
    setLoading: function(load, targetEl) {
        JP.setMask(!load);

        if (load == true) load = {
            floating: {
                shadow: false
            }
        };

        return this.callParent([load, targetEl]);
    }
});

Ext.define('JP.Ext.panel.Panel.Detail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.panel-detail',

    hideCollapseTool: true,
    collapsed: true,
    collapsible: false,
    titleCollapse: false,
    floatable: false,
    animCollapse: false,

    autoScroll: true,

    header: false,
    border: true,

    initComponent: function() {

        this.callParent(arguments);

        this.on('beforeexpand', function(p) {
            p.splitter.show();
            p.show();
        });

        this.on('collapse', function(p) {
            p.splitter.hide();
            p.hide();
        });
    }
});

Ext.define('Ext.picker.Date', {
    override: 'Ext.picker.Date',
    shadow: false
});

Ext.define('Ext.form.field.Date', {
    override: 'Ext.form.field.Date',
    pickerOffset: [0, 3]
});

Ext.define('JP.Ext.data.model.Factory', {
    alias: 'widget.jp-model-factory',

    constructor: function(config)
    {
        if(config.url) {
            Ext.Ajax.request({
                url: config.url,
                async: false, // Use syncronize to garuntee finish load before use, Not too bad solution for now.
                success: function(res)
                {
                    var res = Ext.decode(res.responseText);

                    config.fields = Ext.Array.merge(config.fields||[], res.rows||(res||[]));
                }
            });
        }

        var name = config.name;

        delete config.url;
        delete config.name;

        Ext.define(name, Ext.apply({
            extend: 'Ext.data.Model'
        }, config));
    }
})

Ext.define('JP.Ext.data.Store', {
    extend: 'Ext.data.Store',
    alias: 'proxy.jp-store',
    pageSize: JP.PageSize
});

Ext.define('Ext.data.combo.Store', {
    extend: 'JP.Ext.data.Store',
    alias: ['widget.combostore', 'widget.jp-store-combo'],
    fields: [{
        name: 'text'
    }, {
        name: 'value',
        type: 'int'
    },{
        name: 'def_text'
    }, {
        name: 'def_value',
        type: 'int'
    }],
    appendFields: null,

    autoLoad: false,
    /**
     * Don't use this for remoteFilter: true
     */
    remoteFilter: false,
    pageSize: 100,
    url: null,

    constructor: function(config) {

        if (config.appendFields)
            this.fields = php.array_merge(this.fields, config.appendFields);

        Ext.apply(config, {
            proxy: {
                type: 'jp-ajax',
                url: config.url,
                reader: {
                    type: 'json',
                    root: 'rows'
                }
            }
        });

        this.callParent(arguments);
    }
});

/**
 * array common store
 *
 */
Ext.define('Ext.data.common.Store', {
    extend: 'JP.Ext.data.Store',
    alias: ['widget.commonstore', 'widget.jp-store-common'],

    remoteSort: false,
    remoteFilter: true,
    autoLoad: false,

    pageSize: 100,

    /*
     * @cfg valueForceInt
     * force value into int by no re-config fields
     */
    valueForceInt: true,
    constructor: function(config) {

        if (config.valueForceInt) {
            config.fields = [{
                name: 'text'
            }, {
                name: 'value',
                type: 'int'
            }, {
                name: 'def_text'
            }, {
                name: 'def_value',
                type: 'int'
            }];
        } else {
            config.fields = ['text', 'value', 'def_text', 'def_value'];
        }

        if (config.appendFields)
            config.fields = php.array_merge(config.fields, config.appendFields);

        if(config.url)
            Ext.apply(config, {
                proxy: {
                    type: 'jp-ajax',
                    url: config.url,
                    reader: {
                        type: 'json',
                        root: 'rows'
                    }
                }
            });

        // if data format: {key: value, key: value}
        if (Ext.isObject(config.data)) {
            config.remoteFilter = false;
            var data = config.data;
            config.data = [];

            for (var key in data) {
                config.data.push({
                    value: key,
                    text: data[key],
                    def_value: key,
                    def_text: data[key]
                    // TODO: appendFields
                });
            }
        }

        // support array [[key, value]]
        if (Ext.isArray(config.data)) {
            config.remoteFilter = false;
            var data = config.data;
            config.data = [];

            for(var i=0;i<data.length;i++) {
                config.data.push({
                    value: data[i][0],
                    text: data[i][1],
                    def_value: data[i][0],
                    def_text: data[i][1]
                    // TODO: appendFields
                });
            }
        }

        this.callParent(arguments);
    }
});

Ext.define('Ext.data.property.converter', {
    detectType: function(dt) {
        var me = this;

        switch (dt.type) {
            case 'date':
                dt.value = Ext.Date.parse(dt.value, 'Y-m-d');
                break;

            case 'combo':
                dt.renderer = function(val, meta, rec) {
                    return me.findDataLabel(rec, val);
                };

                dt.config = Ext.apply(dt.config || {}, {
                    store: Ext.create('Ext.data.common.Store', {
                        data: dt.data
                    })
                });
                break;

            case 'multiselect':
                dt.renderer = function(val, meta, rec) {
                    var vals = [];
                    Ext.each(val, function(it, i) {
                        vals[i] = this.findDataLabel(rec, it);
                    }, me);

                    return vals.join(',');
                };

                dt.config = Ext.apply(dt.config || {}, {
                    store: Ext.create('Ext.data.common.Store', {
                        data: dt.data
                    })
                });
                break;
        }

        //return dt;
    },

    findDataLabel: function(rec, val) {
        if (!val) return;
        var r = rec.data.config.store.findRecord('value', val);
        return r.get('text');
    }
});

Ext.define('Ext.data.property.Store', {
    extend: 'Ext.data.Store',
    alias: 'proxy.propstore',
    constructor: function() {
        Ext.apply(this, {
            fields: [{
                name: 'label',
                type: 'string',
                convert: function(v, r) {
                    Ext.create('Ext.data.property.converter').detectType(r.data);
                    return v;
                }
            }, {
                name: 'name',
                type: 'string'
            }, {
                name: 'type',
                type: 'string'
            }, {
                name: 'value'
            }, {
                name: 'group',
                type: 'int'
            }, {
                name: 'groupText',
                type: 'string'
            }, {
                name: 'required',
                type: 'boolean'
            }, {
                name: 'config',
                type: 'auto'
            }, {
                name: 'renderer',
                type: 'auto'
            }, {
                name: 'data',
                type: 'auto'
            }],
            groupField: 'groupText'
        });
        this.callParent(arguments);
    },
    loadSourceFromRaw: function(res) {
        this.loadData(this.getEditorDataSource(res));
    },
    getEditorDataSource: function(res) {
        var source = [];
        Ext.each(res, function(it, i) {
            it = this.detectType(it);
            source[i] = it;
        }, this);
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
                    return me.findDataLabel(rec, val);
                };
                Ext.apply(it.config = {}, {
                    store: Ext.create('Ext.data.common.Store', {
                        data: it.data
                    })
                });
                break;
            case 'multiselect':
                it.renderer = function(val, meta, rec) {

                    var vals = [];
                    Ext.each(val, function(it, i) {
                        vals[i] = this.findDataLabel(rec, it);
                    }, me);
                    return vals.join(',');
                };
                cs.log(it);
                Ext.apply(it.config = {}, {
                    store: Ext.create('Ext.data.common.Store', {
                        data: it.data
                    })
                });
                break;
        }
        return it;
    },
    findDataLabel: function(rec, val) {
        if (!val) return;
        var r = rec.data.config.store.findRecord('value', val);
        cs.log(r);
        return r.get('text');
    }
});

/*auto handle server response*/
Ext.define('JP.Ext.data.proxy.Ajax', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.jp-ajax',
    constructor: function() {

        Ext.apply(this, {
            reader: {
                messageProperty: 'msg',
                totalProperty: 'total',
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

        this.on('metachange', function(proxy, meta) {
            cs.log(meta)
        });

        this.on('exception', function(proxy, response, operation, eOpts) {
            if (JP.Loading) JP.Loading.hide();
            cs.log(proxy);
            cs.log(response);
            cs.log(operation);
            cs.log(eOpts);
            try {
                var res = Ext.decode(response.responseText);
            } catch (e) {
                /**
                 * Response and Force user reload page.
                 */
                cs.log(e);
                alert('Exception from proxy! Please check your connection.');
                var msg = php.sprintf('%s<textarea class="x-msg-descr" style="min-height:150px;">' + '%s\n\nclass: %s, method: %s</textarea>', '<b style="margin-bottom:5px;">ERROR! Trying to decode response. Please reload the page.</b>', e.message, e.sourceClass, e.sourceMethod);
                Ext.Msg.show({
                    title: 'เกิดความผิดพลาดขึ้น!',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    closable: JP.DEV
                });

                return;
            }
            if (res && res.msg) {
                var msg = res.msg;
                if (res.msg && res.dmsg) {
                    msg = res.msg + php.sprintf('<textarea class="x-msg-descr">%s\n\naction: %s</textarea>', res.dmsg, operation.action);
                }
                Ext.Msg.show({
                    title: 'เกิดความผิดพลาดขึ้น!',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            } else {
                console.warn(res);
            }
        }, this);
    }
});

Ext.define('Ext.form.field.Filter', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.filterfield',
    initComponent: function() {
        var me = this;
        me.onoff = function(on) {
            var css = 'x-filter-';
            if (on) {
                this.addCls(css + 'on');
                this.removeCls(css + 'off');
            } else {
                this.addCls(css + 'off');
                this.removeCls(css + 'on');
            }
        };
        Ext.apply(this, {
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

    defViewConfig: {
        loadMask: {
            floating: {
                shadow: false
            }
        },
        deferEmptyText: false,
        emptyText: '<div class="empty-text">ไม่มีข้อมูล...</div>',
        preserveScrollOnRefresh: true,
        trackOver: false,
        stripeRows: false
    },

    selModel: {
        type: 'rowmodel',
        allowDeselect: true
    },

    reselectOnReload: true,

    PrevIdxs: null,
    PrevPage: null,
    PrevCount: null,

    // indicate when user manual define selection
    _prevIdx: null,

    constructor: function(config) {

        // disabled loadmask shadow
        this.viewConfig = Ext.apply(this.defViewConfig, this.viewConfig);
        this.callParent(arguments);

        // only reload
        if (this.reselectOnReload) {
            this.store.on('beforeload', function(store) {
                this.PrevPage = store.currentPage;
                this.PrevIdxs = this.getSelectionIndexs();
                this.getSelectionModel().deselectAll();
            }, this);

            this.store.on('load', function(store, rs) {

                if (this._prevIdx) {
                    var idx = store.getById(this._prevIdx);
                    if (idx)
                        idx = [idx.index];

                    this.PrevIdxs = idx;
                    this.PrevPage = 1;
                    this._prevIdx = null;
                }

                // TODO check filter too.
                if (this.PrevIdxs && this.PrevPage == store.currentPage) {
                    var _rs = this.getRecordByIdxs(this.PrevIdxs);
                    if (_rs.length) this.getSelectionModel().select(_rs);
                }
            }, this);
        }
    },

    /**
     * set pre-id
     *
     * @param {array} ids record id
     */
    setPrevIdx: function(id) {
        this._prevIdx = id;
    },

    getColumnByDataIndex: function(dataIndex) {
        var gridColumns = this.headerCt.getGridColumns();
        for (var i = 0; i < gridColumns.length; i++) {
            if (gridColumns[i].dataIndex == dataIndex) {
                return i;
            }
        }
    },

    getSelectionIndexs: function() {
        var rs = this.getSelectionModel().getSelection();
        var Idxs = null;

        if (rs.length) {
            Idxs = [];
            Ext.each(rs, function(r, i) {
                Idxs[i] = r.index;
            });
        }

        return Idxs;
    },

    /**
     * retrive updated records by new load
     */
    getRecordByIdxs: function(idxs) {
        var rs = [],
            i = 0;

        for (; i < idxs.length; i++) {
            var r = this.store.getAt(idxs[i]);
            if (r) rs.push(r);
        }

        return rs;
    },

    getSelected: function() {
        return this.getSelectionModel().getLastSelected();
    },

    hasSelection: function() {
        return this.getSelectionModel().hasSelection();
    },

    filter: function(ft) {
        this.getStore().filter(ft);
    },

    clearFilter: function(suppressEvent) {
        this.getStore().clearFilter(suppressEvent);
    },

    reload: function(cb) {
        this.getStore().removeAll();
        this.getStore().reload(cb || null);
    },

    each: function(callback, scope, includeRoot) {

        var n = 0;
        var each = function(node) {

            if (!node) return;

            if (callback.call(scope || this, node, n) === false)
                return false;

            n++;

            var child = node.childNodes;
            var len = child.length;
            var i = 0;

            if (!len) return;

            for (; i < len; i++) {
                if (each(child[i]) === false)
                    return false;
            }

            return;
        };

        each(includeRoot == true ? this.getStore().getRootNode() : this.getStore().getRootNode().getChildAt(0));

    }
});

//<debug>
cs.warn('[DEPRECATED] extend JP.Ext.grid.Panel [alias: jp-grid] instead of Ext.grid.Panel');
//</debug>
Ext.define('JP.Ext.grid.Panel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jp-grid',
    layout: 'fit',
    cls: 'x-panel-rounded',
    columnLines: true,
    border: true,
    stateful: true,

    selModel: {
        type: 'rowmodel',
        allowDeselect: true
    },

    /**
     * @var {bool} reselectOnReload to remember selections on reload
     * @deprecated use rememberSelection intead of.
     */
    reselectOnReload: true,

    /**
     * @var {bool} reselectOnReload to remember selections on reload
     */
    rememberSelection: true,

    PrevIdxs: null,
    PrevPage: null,

    // indicate when user manual define selection
    _prevIdx: null,

    // indicate don't reselect like when reload after remove record
    _clearRememberSelection: false,

    constructor: function(config)
    {
        this.callParent(arguments);

        // TODO remove me when remove reselectOnReload
        this.rememberSelection = this.reselectOnReload;

        // only reload
        if (this.rememberSelection) {
            this.store.on('beforeload', function(store) {
                if (this._clearRememberSelection) {
                    this.PrevIdxs = null;
                    this._clearRememberSelection = false;
                } else {
                    this.PrevPage = store.currentPage;
                    this.PrevIdxs = this.getSelectionIndexs();
                    this.getSelectionModel().deselectAll();
                }
            }, this);

            this.store.on('load', function(store, rs) {

                if (this._prevIdx) {
                    var idx = store.getById(this._prevIdx);
                    if (idx)
                        idx = [idx.index];

                    this.PrevIdxs = idx;
                    this.PrevPage = 1;
                    this._prevIdx = null;
                }

                if (this.PrevIdxs && this.PrevPage == store.currentPage) {
                    var rs = this.getRecordByIdxs(this.PrevIdxs);
                    if (rs.length) this.getSelectionModel().select(rs);
                }
            }, this);

            // TODO test me imprement by not testing
            this.store.on('filterchange', function() {
                this.PrevIdxs = null;
            }, this);
        }
    },

    initComponent: function()
    {
        var defViewConfig = {
            loadMask: {
                floating: {
                    shadow: false
                }
            },
            deferEmptyText: false,
            emptyText: '<div class="empty-text">ไม่มีข้อมูล...</div>',
            trackOver: false,
            stripeRows: false
        };

        // disabled loadmask shadow
        this.viewConfig = this.viewConfig
            ? Ext.apply(defViewConfig, this.viewConfig)
            : defViewConfig
        ;

        this.callParent(arguments);
    },

    /**
     * set pre-id
     *
     * @param {array} ids record id
     */
    setPrevIdx: function(id) {
        this._prevIdx = id;
    },

    getColumnByDataIndex: function(dataIndex) {
        var gridColumns = this.headerCt.getGridColumns();
        for (var i = 0; i < gridColumns.length; i++) {
            if (gridColumns[i].dataIndex == dataIndex) {
                return i;
            }
        }
    },

    getSelectionIds: function() {
        if (!this.getSelected()) return null;

        var rs = this.getSelectionModel().getSelection();
        var Ids = [];

        if (rs.length) {
            Ext.each(rs, function(r) {
                if (r.idProperty)
                    Ids.push(r.get(r.idProperty));
            });
        }

        return Ids.length ? Ids : null;
    },

    getSelectionIndexs: function() {
        var rs = this.getSelectionModel().getSelection();
        var Idxs = null;

        if (rs.length) {
            Idxs = [];
            Ext.each(rs, function(r, i) {
                Idxs[i] = r.index;
            });
        }

        return Idxs;
    },

    /**
     * retrive updated records by new load
     */
    getRecordByIdxs: function(idxs) {
        var rs = [],
            i = 0;

        for (; i < idxs.length; i++) {
            var r = this.store.getAt(idxs[i]);
            if (r) rs.push(r);
        }

        return rs;
    },

    deselect: function(rs, suppressEvent) {
        this.getSelectionModel().deselect(rs, suppressEvent);
    },

    deselectAll: function(suppressEvent) {
        this.getSelectionModel().deselectAll(suppressEvent);
        return this;
    },

    select: function(rs, keepExisting, suppressEvent) {
        this.getSelectionModel().select(rs, keepExisting, suppressEvent);
    },

    selectById: function(id) {
        var r = this.store.getById(id);
        if (r) {
            this.getSelectionModel().select([r]);
        }
    },

    getById: function(id) {
        return this.store.getById(id);;
    },

    getSelected: function() {
        return this.getSelectionModel().getLastSelected();
    },

    getSelection: function() {
        return this.getSelectionModel().getSelection();
    },

    hasSelection: function() {
        return this.getSelectionModel().hasSelection();
    },

    filter: function(ft) {
        this.getStore().filter(ft);
    },

    clearFilter: function(suppressEvent) {
        this.getStore().clearFilter(suppressEvent);
    },

    /**
     * rereload store with current all filters/last params
     *
     * @params {mixed}
     *            - fn to callback
     *            - object to options of store.load {@see Ext.data.Store.load}
     *            - true to clear remember selection
     *
     * @return void
     */
    reload: function(cb) {
        if (cb === true || (cb && cb.clearRememberSelection))
            this._clearRememberSelection = true;

        if (typeof cb == 'function')
            cb = {
                callback: cb
            };

        this.getStore().reload(cb || null);
    },

    /**
     * load first page (reset all filter)
     */
    newload: function(cb, index) {

        var callback = function(records, operation, success) {

            if (typeof index == 'number') {
                var rs = this.getRecordByIdxs([index]);
                if (rs.length) this.getSelectionModel().select(rs);
            }

            if (cb)
                cb.call(this, records, operation, success);
        };

        //this.getStore().removeAll();
        this.getStore().loadPage(1, {
            scope: this,
            callback: callback
        });

    }
});

Ext.define('Ext.grid.column.XButton', {
    extend: 'Ext.grid.column.Action',
    alias: ['widget.xbuttoncolumn'],
    alternateClassName: 'Ext.grid.XButtonColumn',
    labelText: '',
    defaultRenderer: function(v, meta, record, rowIdx, colIdx, store, view) {
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

            ret += '<button type="button" class="btn btn-x"><i class="'
                + prefix
                + 'action-col-icon '
                + prefix
                + 'action-col-'
                + String(i)
                + ' '
                + (disabled ? prefix + 'item-disabled' : ' ')
                + ' '
                + (
                    Ext.isFunction(item.getClass)
                        ? item.getClass.apply(item.scope || scope, arguments)
                        : (item.iconCls || me.iconCls || '')
                )
                + '"'
                + (tooltip ? ' data-qtip="' + tooltip + '"' : '')
                + ' ></i></button>';
        }
        return ret;
    }
});


Ext.define('Ext.grid.column.Button', {
    extend: 'Ext.grid.column.Action',
    alias: ['widget.buttoncolumn'],
    alternateClassName: 'Ext.grid.ButtonColumn',
    labelText: '',
    defaultRenderer: function(v, meta, record, rowIdx, colIdx, store, view) {
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

            var iconCls = Ext.isFunction(item.getClass)
                        ? item.getClass.apply(item.scope || scope, arguments)
                        : (item.iconCls || me.iconCls || '');

            ret += '<button type="button" class="button '
                + (disabled ? prefix + 'item-disabled' : '')
                + '"'
                + (tooltip ? ' data-qtip="' + tooltip + '"' : '')
                + '>'
                + (iconCls ? '<i class="'  + iconCls + '"></i>' : '')
                + (item.text ? '<span>'  + item.text + '</span>' : '')
                + '</button>';
        }

        return ret;
    }
});

Ext.define('XX-JP.Ext.grid.plugin.RowEditing', {
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
        grid.relayEvents(me, ['canceledit']);

        me.on('edit', function(editor, context) {
            delete context.record._blank;
        });
    },

    // private
    getEditor: function() {
        var me = this;

        if (!me.editor) {
            me.editor = me.initEditor();
        }

        if (this.showBtns === false)
            me.editor.getFloatingButtons().hide();

        return me.editor;
    },

    // private
    initEditor: function() {
        var me = this,
            grid = me.grid,
            view = me.view,
            headerCt = grid.headerCt,
            btns = ['saveBtnText', 'cancelBtnText', 'errorsText', 'dirtyText'],
            b, bLen = btns.length,
            cfg = {
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
            }, item;

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
        var a = typeof this.editingPlugin.focusColIdx == 'number';
        var b = this.editingPlugin.focusColIdx;
        var field = this.getEditor(a ? b : this.context.colIdx);

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
    startAdd: function(data, position) {
        var me = this;

        var record = me.grid.store.model.create(data);
        record._blank = true;

        position = (position && position != -1 && parseInt(position + 1) <= parseInt(me.grid.store.getCount())) ? position : (position == -1) ? parseInt(me.grid.store.getCount()) : 0;

        var autoSync = me.grid.store.autoSync;
        me.grid.store.autoSync = false;
        me.grid.store.insert(position, record);
        me.grid.store.autoSync = autoSync;
        me.startEdit(position, 0);

        if (me.editor.floatingButtons && me.editor.form.isValid()) {
            me.editor.floatingButtons.child('#update').setDisabled(false);
        }
    },

    startEditByClick: function() {
        var me = this;

        if (!me.editing || me.clicksToMoveEditor === me.clicksToEdit) {
            if (me.context && me.context.record._blank)
                me.cancelEdit();

            me.callParent(arguments);
        }
    },

    moveEditorByClick: function() {
        var me = this;
        if (me.editing) {
            if (me.context && me.context.record._blank)
                me.cancelEdit();

            me.editing = false;
            me.superclass.onCellClick.apply(me, arguments);
        }
    },

    cancelEdit: function() {
        var me = this;
        if (me.editing) {
            me.getEditor().cancelEdit();
            me.callParent(arguments);
            me.fireEvent('canceledit', me.context);

            if (me.removePhantomsOnCancel) {
                if (me.context.record._blank && me.context.record.store) {
                    me.context.store.remove(me.context.record);
                } else {
                    me.context.record.reject();
                }
            }
        }
    }
});

Ext.define('JP.Ext.grid.plugin.RowEditing', {
    extend: 'Ext.grid.plugin.RowEditing',
    alias: 'plugin.jp-rowedit',

    showBtns: true,
    focusColIdx: 0,
    removePhantom: true,

    constructor: function() {
        var me = this;

        me.callParent(arguments);

        if (!me.clicksToMoveEditor) {
            me.clicksToMoveEditor = me.clicksToEdit;
        }

        me.autoCancel = !!me.autoCancel;

        this.on('beforeedit', function(){
            var field = this.editor.items.getAt(this.focusColIdx);

            if (field && field.focus) {
                // layzy defer for every thing ready
                Ext.defer(function(){
                    field.focus();
                }, 10);
            }
        }, this);

        if(this.removePhantom)
            this.on('canceledit', function(ed, context){
                if(context.record.phantom)
                    context.store.remove(context.record);
            }, this);
    },

    // @private
    getEditor: function() {
        var me = this;

        if (!me.editor) {
            me.editor = me.initEditor();
        }

        if (this.showBtns === false)
            me.editor.getFloatingButtons().hide();

        return me.editor;
    }
});

/**
 * Support Doctrine Date Type value
 * @override Ext.data.Types.DATE.convert
 * @singleton
 */
Ext.data.Types.DATE.convert = function(v)
{
    var df = this.dateReadFormat || this.dateFormat,
        parsed;

    if (!v) {
        return null;
    }
    // instanceof check ~10 times faster than Ext.isDate. Values here will not be cross-document objects
    if (v instanceof Date) {
        return v;
    }
    // to support Doctrine date type value
    if (typeof v == 'object' && v.date) {
        v = v.date;
    }
    if (df) {
        return Ext.Date.parse(v, df);
    }

    parsed = Date.parse(v);
    return parsed ? new Date(parsed) : null;
};

Ext.define('Ext.grid.column.Date', {
    override: 'Ext.grid.column.Date',

    // Support to Doctrine hydaration
    defaultRenderer: function(value){

        if(value && typeof value == 'object' && value.date)
            value = value.date;

        return Ext.util.Format.date(value, this.format);
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
    format: 'd/m/y',
    initComponent: function() {
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
    format: '0,000.00',
    //</locale>

    /**
     * decimal 0 that mean if not decimal will remove .00
     * but if have not remove
     */
    decimal: 2,

    align: 'right',

    /**
     * @cfg renderer
     * @hide
     */
    /**
     * @cfg scope
     * @hide
     */

    defaultRenderer: function(value) {
        //return JP.money(Ext.util.Format.number(value, this.format));
        return JP.money(value || 0, this.decimal);
    }
});

Ext.define('Ext.grid.RowNumberer', {
    override: 'Ext.grid.RowNumberer',
    align: 'center',
    // private
    renderer: function(value, metaData, record, rowIdx, colIdx, store) {
        var rowspan = this.rowspan;
        if (rowspan) {
            metaData.tdAttr = 'rowspan="' + rowspan + '"';
        }

        metaData.tdCls = Ext.baseCSSPrefix + 'grid-cell-special';

        var column = this.headerCt.getHeaderAtIndex(colIdx);
        /**
         * @note store.store use in some time grid have "Ext.grid.feature.Grouping"
         */
        var page = column.getPageData(store.store || store);

        return rowIdx + page.fromRecord;
    },

    // @private
    getPageData: function(store) {
        var totalCount = store.getTotalCount();

        return {
            total: totalCount,
            currentPage: store.currentPage,
            pageCount: Math.ceil(totalCount / store.pageSize),
            fromRecord: ((store.currentPage - 1) * store.pageSize) + 1,
            toRecord: Math.min(store.currentPage * store.pageSize, totalCount)

        };
    }
});

Ext.define('JP.Ext.grid.feature.GroupingSummary', {
    extend: 'Ext.grid.feature.GroupingSummary',
    alias: 'feature.jp-groupingsummary',

    hideSummaryCollapse: true,
    constructor: function() {
        this.callParent(arguments);

        if (this.hideSummaryCollapse) {
            this.on('groupcollapse', function() {
                this.toggleSummaryRow(false);
                this.grid.getView().refresh();
            }, this);

            this.on('groupexpand', function() {
                this.toggleSummaryRow(true);
                this.grid.getView().refresh();
            }, this);
        }
    }
});

Ext.define('Ext.form.Basic', {
    override: 'Ext.form.Basic',

    /**
     * @var boolean isInsert insert model indicator
     *                         to use this you must config pk field by add isPk: true to field config
     *                         and return pk field name with value form server like: {pk_field_name: 1}
     */
    isInsert: true,

    _pkField: null,

    constructor: function() {
        this.callParent(arguments);

        this.on('beforeaction', function(f, action) {
            this.isInsert = this._isInsert();
        }, this);

        this.on('actioncomplete', function(f, action) {
            this.updatePk(action);
        }, this);
    },

    _isInsert: function() {
        var ret = false;
        var hasPk = null;
        var me = this;

        this.getFields().each(function(f) {
            if (f.isPk) {
                hasPk = true;
            }

            if (f.isPk == true && php.empty(f.getValue())) {
                ret = true;
                return false;
            }
        });

        if (!hasPk)
            cs.warn('Can not found PK to config it just: isPk: true on some field.');

        return ret;
    },

    getPkField: function() {
        if (this._pkField)
            return this._pkField;

        this.getFields().each(function(f) {
            if (f.isPk) {
                this._pkField = f;
                return false;
            }
        }, this);

        return this._pkField;
    },

    updatePk: function(action) {
        var res = action.result;

        this.setPkValue(null);

        if (this.getPkField() && res[this.getPkField().getName()])
            this.setPkValue(res[this.getPkField().getName()]);
    },

    // @note not support composit keys
    setPkValue: function(v) {
        var hasPk = false;
        this.getFields().each(function(f) {
            if (f.isPk) {
                hasPk = true;
                f.setValue(v);
                return false;
            }
        });

        if (hasPk)
            return v;

        cs.warn('Can not found PK to config it just: isPk: true on some field.');
        return null;
    },

    getPkValue: function() {
        return this.getPkField() ? this.getPkField().getValue() : null;
    },

    getFieldValue: function(name) {
        return this.findField(name).getValue();
    },

    setFieldValue: function(name, val) {
        this.findField(name).setValue(val);

        return this;
    },

    hasField: function(name) {
        return !!this.findField(name);
    }
});

Ext.define('Ext.form.Panel', {
    override: 'Ext.form.Panel',

    getField: function(name) {
        return this.getForm().findField(name);
    },

    hasField: function(name) {
        return this.getForm().hasField(name);
    },

    getFieldValue: function(name) {
        return this.getField(name).getValue();
    },

    setFieldValue: function(name, val) {
        this.getField(name).setValue(val);

        return this;
    },

    setPkValue: function(v) {
        this.getForm().setPkValue(v);
    },

    getPkValue: function() {
        return this.getForm().getPkValue();
    },

    failure: function(form, action) {
        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                break;

            case Ext.form.action.Action.CONNECT_FAILURE:
                Ext.Msg.alert('Failure', 'Ajax communication failed');
                break;

            case Ext.form.action.Action.SERVER_INVALID:
                Ext.Msg.alert('Failure', action.result.msg);
        }
    },

    submit: function(options) {
        options = Ext.apply({
            failure: this.failure
        }, options);
        this.form.submit(options);
    },
});

Ext.define('JP.Ext.window.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.jp-window',

    // use with showOver
    rememberResize: true,
    _shown: false,
    // to use css shadow like jquery dialog
    shadow: false,
    /*shadow: 'frame',
    shadowOffset: 12,*/

    // to add css animate (css3 bonce)
    hideMode: 'display',
    // don't ghost if use css3 animate
    ghost: false,

    // custom config
    state: 'null',

    layout: 'fit',
    maximizable: true,
    minimizable: true,
    border: false,

    // custom config for fix bug when close on maximize
    // this case catch if window contains grid
    hideMaximizeClose: false,

    minWidth: 200,

    constructor: function() {
        this.callParent(arguments);

        this.addEvents(
            /**
             * @event hidden
             * Fires after the window has been hidden on finish css anitmation
             * @param {Ext.window.Window} this
             */
            'hidden',

            /**
             * @event shown
             * Fires after the window has been shown on finish css anitmation
             * @param {Ext.window.Window} this
             */
            'shown'
        );

        this.on('afterrender', function() {

            var el = this.getEl();
            el.addCls('animatedf BounceIn');
            el.on(JP.css3.events.animate.end, function() {
                if (this.state == 'close') {
                    this.hide();
                    this.fireEvent('hidden', this);
                } else {

                    if (this._showOver && (!this._shown || !this.rememberResize))
                        this.setBox(this._showOver.getBox());

                    this.fireEvent('shown', this);
                    this._shown = true;
                }
            }, this);
        }, this);

        this.on('beforehide', function() {
            var el = this.getEl();
            var state = this.state;

            el.removeCls('BounceIn');
            el.addCls('BounceOut');

            this.state = 'close';
            return state == 'close';
        }, this);

        this.on('hide', function() {
            var el = this.getEl();

            el.addCls('BounceIn');
            el.removeCls('BounceOut');

            this.state = 'closed';
        });

        this.on('maximize', function() {
            this.maxHeightMaximize();
            // @note so mush hard to maintain hide it!
            if (this.tools.minimize) this.tools.minimize.hide();
        });

        this.on('minimize', function() {
            var me = this;
            var ts = this.tools;


            if (ts.refresh) ts.refresh.hide();

            if (ts.minimize) ts.minimize.hide();

            // FIX bug when close on maximize mode
            // of window contains grid
            if(this.hideMaximizeClose && ts.close)
                ts.close.hide();

            me.collapse(null, false);

            if (!me.hasSavedRestore) {
                me.restoreSize = me.getSize();
                me.restorePos = me.getPosition(true);
                me.hasSavedRestore = true;
            }

            me.minimized = true;

            me.setWidth(250);

            //me.removeCls(Ext.baseCSSPrefix + 'window-maximized');
            //me.container.removeCls(Ext.baseCSSPrefix + 'window-maximized-ct');

        });

        this.on('collapse', function() {
            var ts = this.tools;

            if (ts.restore) ts.restore.show();
        });

        this.on('resotre', function() {
            var ts = this.tools;

            // FIX bug when close on maximize mode
            // of window contains grid
            if(this.hideMaximizeClose && ts.close)
                ts.close.show();
        })
    },

    // @magic call by panel initTools()
    addTools: function() {
        this.callParent();

        // maximizable add restore by core
        if (!this.maximizable && this.minimizable) {
            this.addTool({
                type: 'restore',
                handler: Ext.Function.bind(this.restore, this, []),
                hidden: true
            });
        }
    },

    showOver: function(cp) {
        this._showOver = cp;
        this.show();
    },

    restore: function(animate) {

        var me = this,
            tools = me.tools,
            header = me.header,
            newBox = me.restoreSize,
            changed;

        if (tools.minimize) {
            tools.minimize.show();
            changed = true;
        }

        this.callParent(arguments);

        if (me.minimized) {
            me.hasSavedRestore = null;

            // Manipulate visibility of header tools if there is a header
            if (header) {
                header.suspendLayouts();
                if (tools.restore) {
                    tools.restore.hide();
                    changed = true;
                }
                if (me.collapseTool) {
                    me.collapseTool.show();
                    changed = true;
                }
                if (tools.refresh) {
                    tools.refresh.show();
                    changed = true;
                }
                me.resumeHeaderLayout(changed);
            }

            me.minimized = false;

            // Restore the position/sizing
            newBox.x = me.restorePos[0];
            newBox.y = me.restorePos[1];
            me.setBox(newBox, animate = (animate || !! me.animateTarget) ? {
                callback: function() {
                    me.el.enableShadow(true);
                    me.center();
                    me.fireEvent('restore', me);
                }
            } : null);

            // Unset old position/sizing
            me.restorePos = me.restoreSize = null;

            // Allow users to drag and drop again
            if (me.dd) {
                me.dd.enable();
                if (header) {
                    header.addCls(header.indicateDragCls)
                }
            }

            if (me.resizer) {
                me.resizer.enable();
            }

            me.syncMonitorWindowResize();

            if (!animate) {
                me.el.enableShadow(true);
                me.fireEvent('restore', me);
            }

            me.expand(false);
        }

        return me;
    },

    /**
     * FIX maxHeight break maximize
     * @see http://stackoverflow.com/questions/19011963/extjs-how-to-ignore-maxheight-when-maximize-the-window
     */
    maxHeightMaximize: function () {
        if(this.maxInternal) {
            return;
        }

        if(this.maximized) {
            this.oldMaxHeight   = this.maxHeight;
            this.maxHeight      = undefined;
            this.maxInternal    = true;
            this.restore();
            this.maximize();
            this.maxInternal    = false;
        }else{
            this.maxHeight = this.oldMaxHeight;
        }
    }

});

Ext.define('JP.Ext.window.Dialog', {
    extend: 'JP.Ext.window.Window',
    alias: 'widget.jp-dialog',
    closeAction: 'hide',
    padding: '15',
    buttonAlign: 'right',
    // custom add close button this will ingnore when use `buttons` config
    closeButton: true,
    minimizable: false,
    modal: true,

    initComponent: function(config) {
        var undef;

        // check to add close button
        if(this.buttons == undef && this.closeButton) {
            Ext.apply(this, {
                buttons: [{
                    scope: this,
                    text: _('ปิด'),
                    scale: 'medium',
                    handler: function()
                    {
                        this.hide();
                    }
                }]
            });
        }

        this.callParent(arguments);
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
    //widthContrainer: 'container',
    heightControl: null,
    flex: 1,

    afterFirstLayout: function() {
        var me = this;
        cs.log('init main layout ...');

        //hide for app.js line #4
        if (JP.Loading)
            JP.Loading.hide();

        JP.layout.on('reset.ext-panel', function(layout) {
            me.fireResize(me.heightControl || layout.page);
        });

        me.callParent(arguments);
        me.fireResize(this.heightControl || JP.layout.page);
    },

    fireResize: function(page) {
        // In IE we can get resize events that have our current size, so we ignore them
        // to avoid the useless layout...
        // @todo some time calculate size is wrong if offset scrollbar showen fixMe
        this.setSize(page.width || 'auto', page.height || 'auto');
    }
});

/**
 * @TODO create thai date
 */
Ext.define('Ext.form.field.Date.TH', {
    extend: 'Ext.form.field.Date',
    alias: 'widget.datefield-th',
    initComponent: function() {
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

/**
 * Override Class name convention to support Modular.
 * eg. Package:Class.path.Name
 */
Ext.app.Controller.getFullName = function(name, kind, namespace) {
    var shortName = name,
        sep, absoluteName;

    // BOON: start added
    if ((sep = name.indexOf(':')) > 0) {
        namespace   = namespace + '.' + name.substring(0, sep);
        name        = name.substring(sep + 1);
    }
    // BOON: end

    if ((sep = name.indexOf('@')) > 0) {
        // The unambiguous syntax is Model@Name.space (or "space.Model@Name")
        // which contains both the short name ("Model" or "space.Model") and
        // the full name (Name.space.Model).
        //
        shortName    = name.substring(0, sep); // "Model"
        absoluteName = name.substring(sep + 1) + '.' + shortName; //  ex: "Name.space.Model"
    }
    // Deciding if a class name must be qualified:
    //
    // 1 - if the name doesn't contain a dot, we must qualify it
    //
    // 2 - the name may be a qualified name of a known class, but:
    //
    // 2.1 - in runtime, the loader may not know the class - specially in
    //       production - so we must check the class manager
    //
    // 2.2 - in build time, the class manager may not know the class, but
    //       the loader does, so we check the second one (the loader check
    //       assures it's really a class, and not a namespace, so we can
    //       have 'Books.controller.Books', and requesting a controller
    //       called Books will not be underqualified)
    //
    else if (name.indexOf('.') > 0 && (Ext.ClassManager.isCreated(name) ||
        Ext.Loader.isAClassNameWithAKnownPrefix(name))) {
        absoluteName = name;
    }
    else {
        if (!namespace) {
            Ext.log.warn("Cannot find namespace for " + kind + " " + name + ", " +
                "assuming it is fully qualified class name");
        }

        if (namespace) {
            absoluteName = namespace + '.' + kind + '.' + name;
            shortName    = name;
        }
        else {
            absoluteName = name;
        }
    }

    return {
        absoluteName: absoluteName,
        shortName:    shortName
    };
};

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
    ctrl: function(name, cb) {
        var ctrl = this.app().controllers.get(name);

        if (ctrl) {
            if (cb) cb.call(this, ctrl);
            return ctrl;
        }

        // load new ctrl on fly and init it.
        // setTimeout prevent lack of browser syscronyce (smooth clicking)
        JP.Loading.show();
        // make sure hide all floating menu (Hacking)
        $('.x-menu').css('visibility', 'hidden');
        var ths = this;
        setTimeout(function() {
            var _ctrl = ths.app().getController(name);

            if (!_ctrl._initialized)
                _ctrl.init(ths.app());

            if (cb) cb.call(ths, _ctrl);
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
    anthdr: function(name, ent, args, cb, scope) {
        // first require
        var _ctrl = this.ctrl(name, function(ctrl) {
            ctrl[ent].apply(ctrl, args);
            if (cb) cb.call(scope || ctrl);
        });

        // class loaded
        if (_ctrl) {
            _ctrl[ent].apply(_ctrl, args);
            if (cb) cb.call(scope || _ctrl);
        }
    }
});

Ext.define('JP.Ext.grid.feature.Summary', {

    /* Begin Definitions */
    // can't added more config don't try to apply new config!!

    extend: 'Ext.grid.feature.Summary',

    alias: 'feature.jp-summary',
    showSummaryRow: true,

    // Synchronize column widths in the docked summary Component
    onColumnHeaderLayout: function() {
        var view = this.view,
            columns = view.headerCt.getVisibleGridColumns(),
            column,
            len = columns.length,
            i,
            summaryEl = this.summaryBar.el,
            el;

        for (i = 0; i < len; i++) {
            column = columns[i];

            // BOON bug fixed with flex column and set width throuths defaults.width
            if (column.flex) column.width = null;

            el = summaryEl.down(view.getCellSelector(column));
            if (el) {
                if (column.hidden) {
                    el.setDisplayed(false);
                } else {
                    el.setDisplayed(true);
                    el.setWidth(column.width || (column.lastBox ? column.lastBox.width : 100));
                }
            }
        }
    }
});

/** ENHANCE AJAX **/
Ext.Ajax.on('requestcomplete', function(conn, response, options, eOpts) {
    JP.Loading.hide();
    if (JP.DEV) {
        if (/jdebug-console/i.test(response.responseText)) {
            var res = Ext.decode(response.responseText);
            JConsoleLog.update(res['jdebug-console']);
        }
    }

    $('.x-grid-view.x-grid-view-loading').removeClass('x-grid-view-loading');
});

Ext.Ajax.on('beforerequest', function(conn) {
    JP.setMask(false);
    JP.Loading.show();

    // @TODO conside to use anather way
    var x = $('.x-grid-view .empty-text');
    if (x.length)
        x.parent('.x-grid-view').addClass('x-grid-view-loading');
});