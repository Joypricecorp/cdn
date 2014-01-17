/**
 *   ComboFieldBox
 */
 Ext.define('Ext.ux.ComboFieldBox',
    {extend : 'Ext.form.field.ComboBox', 
	alias : 'widget.combofieldbox', 
	requires: ['Ext.ux.ComboView'],
	multiSelect: true,
	/**
 	 * @cfg
	 * maximum height for inputEl. 
	 */
	maxHeight: 150,
	/**
	 * @cfg
	 * name of field used for description/tooltip
	 */
	descField: null,
	/**
	 * @cfg
	 * config object passed to the view 
	 * viewCfg: {},
	 */
	/**
	 * @cfg {String} iconClsField
	 * The underlying iconCls field name to bind to this ComboBox.
	 * iconClsField: '',
	 */
	/**
	 * @cfg {Boolean} createNewOnEnter
	 * When forceSelection is false, new records can be created by the user. This configuration
	 * option has no effect if forceSelection is true, which is the default.
	 */
	createNewOnEnter: false,
	/**
	 * @cfg {Boolean} forceSelection
	 * override parent config. If force selection is set to false and    
	 */
	forceSelection: true, 
	/**
	 * @cfg {Boolean} selectOnTab
	 * Whether the Tab key should select the currently highlighted item.
	 */
	selectOnTab : false,
	/**
	 * @cfg {String} trigger1Cls
	 * css class for the first trigger. To have just one trigger acting like in usual combo, set trigger1Cls to null. First trigger clears all values
	 */
	trigger1Cls	: Ext.baseCSSPrefix + 'form-clear-trigger',
	/**
	 * @cfg {String} trigger2Cls
	 * css class for the second trigger. To have just one trigger, set trigger1Cls to null.
	 */
	trigger2Cls	: Ext.baseCSSPrefix + 'form-combo-trigger',
	
	/**
	 * @cfg {String} listIconCls
	 * css class to use when an iconClsField is set. This class is injected into getInnerTpl method when constructing the comboBox boundList
	 */
    listIconCls : 'x-boundlist-icon',
    fieldSubTpl: [
        '<div class="{hiddenDataCls}" role="presentation"></div>',
        '<div id="{id}"',
            '<tpl if="readOnly"> readonly="readonly"</tpl>',
            '<tpl if="disabled"> disabled="disabled"</tpl>',
            '<tpl if="tabIdx"> tabIndex="{tabIdx}"</tpl>',
            '<tpl if="name"> name="{name}"</tpl>',
            '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
            '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
            '<tpl if="size"> size="{size}"</tpl>',
            'class="{fieldCls} {typeCls} x-boxselect" autocomplete="off" />',
        '</div>',
    {
        compiled: true,
        disableFormats: true
    }
    ],
    getSubTplData: function () {
        var me = this,
            fieldStyle = me.getFieldStyle(),
            ret = me.callParent(arguments);
        ret.fieldStyle = (fieldStyle || '') + ';overflow:auto;height:'+ (me.height ? (me.height + 'px;') : 'auto;') + (me.maxHeight ? ('max-height:' + me.maxHeight + 'px;') : '');
        delete me.height; //need to delete height for the correct component height to be recalculated on layout. 
        return ret;
    },
    alignPicker: function () {
        var me = this,
            picker = me.getPicker(),
            w =  me.triggerWidth;  
        me.callParent(arguments);
        if (me.isExpanded && me.matchFieldWidth) {
            picker.setWidth(me.bodyEl.getWidth() -  (me.trigger2Cls ? (2 * w) : w));
        }
    },
    initComponent: function () {
        var me = this;
        if(!me.trigger1Cls) {
        	me.onTrigger1Click = null;
        	me.trigger2Cls = null;
        }
        me.getValueStore();
        me.listConfig = Ext.apply(me.listConfig || {}, {selModel: {mode: 'SIMPLE', enableKeyNav: false}});
        if(me.iconClsField || me.descField) {Ext.apply(me.listConfig, {getInnerTpl: function(displayField) {
						return '<div data-qtip="{' +me.descField +'}" class="'+ ((me.iconClsField && me.listIconCls) ? me.listIconCls :'') +' {'+me.iconClsField + '}">{' + me.displayField +'}</div>';
						}
					})
				};
        me.callParent(arguments);
    },
    onTrigger1Click : function() {
    	var me = this;
    	me.setValue("");
		me.collapse();
    },
    setValueStore: function(store) {
        this.valueStore = store;
    },
    getValueStore: function() {
        var me = this;
         return me.valueStore || (me.valueStore = me.createValueStore());
    },
    createValueStore: function() {
        return this.valueStore = new Ext.data.Store({
                    model: this.store.model
            });
    },
    /**
    * get all field values from value store and re-set combobox values
    */
    setStoreValues: function() {
        var me = this, 
            st = me.getValueStore();
        me.setValue(st.data.extractValues(me.valueField || st.valueField, 'data'));
        me.syncSelection();   
    },
    getValueModels: function () {
        return this.valueModels || [];
    },
    afterSetValue: function (action){
        var me = this;
        me.valueStore.removeAll();
		me.valueStore.add(me.getValueModels());
		if (me.isExpanded) {
			me.alignPicker();
		}
		me.syncSelection();
	   	me.updateLayout();
	},
    setValue: function (value, action) {
        var me = this,
        	picker = me.getPicker(),
        	oldPr = picker.preserveScrollOnRefresh;
        if(me.tempValue) {
			value = Ext.Array.unique(value.concat(me.tempValue))
        	var val = me.store.data.extractValues(me.valueField, 'data');
			if(me.typeAhead && (me.store.getCount() == 1)) {
				value.push(me.store.getAt(0).get(me.valueField));
				me._needCollapse = true;
			}
			me.store.data.addAll(Ext.Array.filter(me.valueStore.data.items, function(i) {return (val.indexOf(i.data[me.valueField]) < 0)}))
			picker.preserveScrollOnRefresh = true;
			picker.refresh();
        	picker.preserveScrollOnRefresh = oldPr;
        }
        me.callParent([value, false]);
        me.afterSetValue(action)
    },
    getRawValue: function () {
        return Ext.value(this.rawValue, '');
    },
    doRawQuery: function() {
     	var me = this,
			qe;
     	if(me.view && me.typeAhead && (qe = me.view.inputEl.getValue())) {
	    	me.tempValue = me.value;
	    	this.doQuery(qe, false, true);
	        delete me.tempValue;
			if(me._needCollapse){
				me.collapse();
		        delete me._needCollapse;				
			}
	        else {
				me.onExpand();
				me._preventClear = true;
				me.view.inputEl.focus();
				me.view.inputEl.dom.value=qe;
				delete me._preventClear;
	        }
		}
    },
    onBlur: function() {
    	var me = this;
    	me.view.inputEl.dom.value ='';
    	if(me.view.emptyEl) {me.view.emptyEl.show()}
    }, 
    onFocus: function() {
    	var me = this,
    		view = me.view;
    	me.callParent(arguments);
    	if(me._preventClear != true) {
	    	me.store.clearFilter();
    		me.picker.refresh();
    	}
    	if(view.emptyEl) {
	    	view.emptyEl.setVisibilityMode(Ext.dom.AbstractElement.DISPLAY)
    		view.emptyEl.hide()
    	}
    	me.view.focus();
    },
    buildKeyNav: function() {
    	 var me = this,
            selectOnTab = me.selectOnTab,
            picker = me.getPicker();
		return  new Ext.view.BoundListKeyNav(picker.el, {
                boundList: picker,
                forceKeyDown: true,
                tab: function(e) {
                    if (selectOnTab || me.typeAhead) {
                        this.selectHighlighted(e);
                        me.triggerBlur();		
                    }
                   else {
                    	me.onTriggerClick()
					}
					return true
                }, 
                esc: function(e) {
                	me.onTriggerClick()
                }
            });
    },
	onExpand: function() {
        var me = this,
            keyNav = me.listKeyNav,
            selectOnTab = me.selectOnTab,
            picker = me.getPicker();
        // Handle BoundList navigation from the input field. Insert a tab listener specially to enable selectOnTab.
        if(!keyNav){   keyNav = me.listKeyNav = me.buildKeyNav()}
        // While list is expanded, stop tab monitoring from Ext.form.field.Trigger so it doesn't short-circuit selectOnTab
         if (selectOnTab) {
          me.ignoreMonitorTab = true;
        }
	
        Ext.defer(keyNav.enable, 1, keyNav); //wait a bit so it doesn't react to the down arrow opening the picker
        picker.focus();
        picker.highlightItem(picker.getNode(0));
    },
    onCollapse: function() {
    	var me = this;
    	me.callParent(arguments);
    	me.view.focus();
    },
    createRecord: function(rawValue) {
   		var me= this, rec = {};
		rec[me.valueField] = rawValue;
		rec[me.displayField] = rawValue;
		return rec
    },
    afterComponentLayout : function() {
        var me = this;
        me.callParent(arguments);
        if (!me.view) {
        	var selectBoxOnTab = me.selectBoxOnTab,
        	move= function(index){
        		var nav = this,
                boundList = nav.boundList,
                allItems = boundList.all,
                oldItem = boundList.highlightedItem,
                oldItemIdx = oldItem ? boundList.indexOf(oldItem) : -1,
                newItemIdx = oldItemIdx < allItems.getCount() - 1 ? oldItemIdx + index : 0; //wraps around
            	nav.highlightAt(newItemIdx);
	        	me.view.focus()
            }, 
            del = function(e) {
            	console.info('del');
            	if(me.readOnly || me.disabled || !me.editable) {return}
            	var nav = this,
                boundList = nav.boundList,
                item = boundList.highlightedItem,
                index;
                if(item) {
	                index = boundList.indexOf(item)
	                me.getValueStore().remove(boundList.getRecord(item))       
					me.setStoreValues();
	                nav.highlightAt(index);
	                me.view.focus()
                }
                return true;
            };
            me.view = new Ext.ux.ComboView(Ext.apply({
                store: me.valueStore,
                emptyText: me.emptyText || '',
                field: me,
                renderTo: me.inputEl
            }, me.viewCfg));
           var boxKeyNav=  me.boxKeyNav = new Ext.view.BoundListKeyNav(me.view.el, {
                boundList: me.view,
                forceKeyDown: true,
                down : function(e) {
                	if(me.isExpanded && me.view.inputEl.getValue()) {return me.picker.focus()}
                	me.onTriggerClick();
                },
                right: function(e) {	
                	move.call(this, 1)
                },
                left: function(e) {
                	move.call(this, -1)
                },
                enter: function(e) {
                	if(me.readOnly || me.disabled || !me.editable) {return}
					if (me.multiSelect && me.createNewOnEnter == true && e.getKey() == e.ENTER  && (rawValue = e.target.value) && (!Ext.isEmpty(rawValue))) {
						 rec = me.store.findExact(me.valueField, rawValue);
						 if(rec < 0) {
							rec= me.store.add(me.createRecord(rawValue))
						 }
						 me.getValueStore().add(rec)       
						 me.setStoreValues()
					}
					me.view.focus()
                },
                tab: function(e) {
                	if(me.isExpanded && e.target.value){
						me.picker.focus()                	
                	}
                	return true
                },
                del:del,
                space: del
            });
            Ext.defer(boxKeyNav.enable, 1, boxKeyNav);
        }
    },
    onDestroy: function() {
        var me = this;
        if(me.view) {Ext.destroy(me.view, me.boxKeyNav)}
        me.callParent(arguments);
    }
});
