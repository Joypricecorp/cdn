// @http://www.sencha.com/forum/showthread.php?260683
delete Ext.tip.Tip.prototype.minWidth;  //for Chrome

if (Ext.isIE10) {
    Ext.supports.Direct2DBug = true;
}

/**
 * @http://www.sencha.com/forum/showthread.php?264529-4.2.1-Ext.grid.RowEditor-onFieldChanged()-No-Longer-Called
 */
Ext.override(Ext.grid.RowEditor, {

  addFieldsForColumn: function(column, initial) {
    var me = this,
        i,
        length, field;

    if (Ext.isArray(column)) {
        for (i = 0, length = column.length; i < length; i++) {
            me.addFieldsForColumn(column[i], initial);
        }
        return;
    }

    if (column.getEditor) {

      field = column.getEditor(null, {
          xtype: 'displayfield',
          getModelData: function() {
              return null;
          }
      });

      if (column.align === 'right') {
          field.fieldStyle = 'text-align:right';
      }

      if (column.xtype === 'actioncolumn') {
          field.fieldCls += ' ' + Ext.baseCSSPrefix + 'form-action-col-field';
      }

      if (me.isVisible() && me.context) {
          if (field.is('displayfield')) {
              me.renderColumnData(field, me.context.record, column);
          } else {
              field.suspendEvents();
              field.setValue(me.context.record.get(column.dataIndex));
              field.resumeEvents();
          }
      }

      if (column.hidden) {
          me.onColumnHide(column);
      } else if (column.rendered && !initial) {
          me.onColumnShow(column);
      }

      // -- start edit
      me.mon(field, 'change', me.onFieldChange, me);
      // -- end edit
    }
  }
});

/**
 * x-mask not resize with owner resized
 *
 * @todo this 's bug fixed for mask resize
 * please monitor this issue on sencha forum
 *
 * @link http://www.sencha.com/forum/showthread.php?203590
 */
Ext.override(Ext.LoadMask, {
	hideMode: 'display',
	sizeMask: function() {
		var me = this, target;
		if (me.rendered /*&& me.isVisible()*/) {
			me.center();
			target = me.getMaskTarget();
			//me.getMaskEl().show().setSize(target.getSize()).alignTo(target, 'tl-tl');
			var el = me.getMaskEl().setSize(target.getSize());
			if(el)
				el.alignTo(target, 'tl-tl');
		}
	}
});

/**
 * form reset bug
 *
 * @todo update to 4.1.3 to fixed by version
 */
if(Ext.Version.compare(Ext.versions.extjs.version, '4.1.3') == -1){
	Ext.define('Ext.form.Basic', {
		override: 'Ext.form.Basic',
		reset: function(resetRecord) {
			Ext.suspendLayouts();

			var me     = this,
				fields = me.getFields().items,
				f,
				fLen   = fields.length;

			for (f = 0; f < fLen; f++) {
				fields[f].reset();
			}

			Ext.resumeLayouts(true);

			if (resetRecord === true) {
				delete me._record;
			}
			return me;
		}
	});
}

/**
 * form submit bug
 *
 * @todo update to 4.1.2 to fixed by version
 * @link http://www.sencha.com/forum/showthread.php?228970
 */
if(Ext.Version.compare(Ext.versions.extjs.version, '4.1.2') == -1){
	Ext.define('Ext.form.SubmitFix', {
		override: 'Ext.ZIndexManager',

		register : function(comp) {
			var me = this,
				compAfterHide = comp.afterHide;

			if (comp.zIndexManager) {
				comp.zIndexManager.unregister(comp);
			}
			comp.zIndexManager = me;

			me.list[comp.id] = comp;
			me.zIndexStack.push(comp);

			// Hook into Component's afterHide processing
			comp.afterHide = function() {
				compAfterHide.apply(comp, arguments);
				me.onComponentHide(comp);
			};
		},

		/**
		 * Unregisters a {@link Ext.Component} from this ZIndexManager. This should not
		 * need to be called. Components are automatically unregistered upon destruction.
		 * See {@link #register}.
		 * @param {Ext.Component} comp The Component to unregister.
		 */
		unregister : function(comp) {
			var me = this,
				list = me.list;

			delete comp.zIndexManager;
			if (list && list[comp.id]) {
				delete list[comp.id];

				// Relinquish control of Component's afterHide processing
				delete comp.afterHide;
				Ext.Array.remove(me.zIndexStack, comp);

				// Destruction requires that the topmost visible floater be activated. Same as hiding.
				me._activateLast();
			}
		}
	});
}