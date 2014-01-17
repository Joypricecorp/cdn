cs.warn('[DEPRECATED] remove xcolumn when use 4.2.0 use xbuttoncolumn inteadof its inherite from actioncolumn.');

Ext.define('Ext.ux.grid.column.xcolumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.xcolumn',

	constructor: function(config) {
		var me  = this;
		var cfg = Ext.apply({
			align: 'center',
			hideable: false,
			groupable: false,
			sortable: false,
			menuDisabled: true,
			handlerTarget: null
		}, config);

		me.callParent([cfg]);

		me.renderer = function(value, meta, record, rowIdx, colIdx, store, view) {

			var ret	= '',
				src	= me.renderer.caller,
				id 	= Ext.id()
			;

			if (src.$owner && src.$owner.xtype == 'headercontainer') {
				ret = (Ext.isFunction(cfg.renderer) ? cfg.renderer.apply(cfg.scope || me, arguments) || '' : '');
			}

			Ext.defer(function() {
				var el = Ext.get(id);

				// after column render callback
				if (el && cfg.defer) {
					var tg = cfg.handlerTarget && el.select(cfg.handlerTarget).elements.length ? el.select(cfg.handlerTarget).elements[0] : el;
					cfg.defer.call(this, el, tg, {
						value: value,
						meta: meta,
						record: record,
						rowIdx: rowIdx,
						colIdx: colIdx,
						store: store,
						view: view
					});
				}
				if (el && cfg.handler) {
					var tg = cfg.handlerTarget && el.select(cfg.handlerTarget).elements.length ? el.select(cfg.handlerTarget) : el;

					tg.on('click', function(e, t, eOpts) {
						/**
						 * handler([Ext.dom.Element],[Event],[Target],[Coloumn.Renderer.Params])
						 */
						cfg.handler.call(this, el, e, t, {
							value: value,
							meta: meta,
							record: record,
							rowIdx: rowIdx,
							colIdx: colIdx,
							store: store,
							view: view
						})
					}, cfg.scope || this);
				}
			}, 1, this);

			return JP.format('<div id="{0}">{1}</div>', id, ret);
		};
	}
});