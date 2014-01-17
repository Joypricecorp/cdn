/**
 * @class Ext.app.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.ux.Portal.Column', {
    extend: 'Ext.container.Container',
    alias: 'widget.ux-portal-column',

    requires: [
        'Ext.layout.container.Anchor',
        'Ext.ux.Portal.Portlet'
    ],

    layout: 'anchor',
    defaultType: 'ux-portal-portlet',
    cls: 'x-portal-column'

    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
});