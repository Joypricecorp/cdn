/*!
 ╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋
  ╋   ツ Joyprice Corporation Ltd.       ╋
  ┃    Copyright (c) 2012 - 2013        ┃
  ╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋
  ┃ Joyprice Javascript Core            ┃
  ┃ @package JP                         ┃
 ╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋
 */

// defind shorthand console
var cs = console;
var cd = cs.log;

// define phpjs
var php = window.PHPJS;

// don't use object as array
// @see https://github.com/kvz/phpjs/issues/110
php.ini_set('phpjs.objectsAsArrays', 0);

// define `aprintf` to accept array in first argument
php.aprintf = function()
{
    if(php.is_array(arguments[0]))
        arguments[0] = arguments[0].join('');

    return php.sprintf.apply(null, arguments);
};

// add string sprintf
String.prototype.sprintf = function ()
{
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.toString());
    return php.sprintf.apply(null, args);
};

String.prototype.format = function(){
    var b = this;

    if(arguments.length!=0){
        for(var a = 0; a < arguments.length; a++){
            var c = new RegExp("\\{"+a+"\\}","gm");
            b = b.replace(c, arguments[a]);
        }
    }
    return b
};

// define JP global object
var JP = {
    DEV: false,

    /**
     * @deprecated use JP.DEV
     */
    DEBUG: false,

    USER: {},
    version: '1.0',
    gen_id: 0,
    id: function (key)
    {
        if(key)
            return key.toLowerCase().replace( /[^a-z0-9]/g , '');

        return 'jp-' + (++JP.gen_id);
    },
    mask: true,

    emptyFn: function ()
    {
    },

    // default ajax indicator
    ShowLoadingAjaxStart: true,
    Loading: null,

    css3: {
        animate: {
            start: {
                'WebkitAnimation': 'webkitAnimationStart',
                'MozAnimation': 'animationstart',
                'OAnimation': 'oAnimationStart',
                'msAnimation': 'MSAnimationStart',
                'animation': 'animationstart'
            },
            end: {
                'WebkitAnimation': 'webkitAnimationEnd',
                'MozAnimation': 'animationend',
                'OAnimation': 'oAnimationEnd',
                'msAnimation': 'MSAnimationEnd',
                'animation': 'animationend'
            }
        },

        transition: {
            start: {
                'WebkitTransition': 'webkitTransitionStart',
                'MozTransition': 'transitionstart',
                'OTransition': 'oTransitionStart',
                'msTransition': 'MSTransitionStart',
                'transition': 'transitionstart'
            },
            end: {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            }
        },

        events: {}
    },

    win: {
        width: '100%',
        height: '100%',
        fireresize: function ()
        {
            var undef;
            if (typeof Ext != typeof undef)
                Ext.EventManager.fireResize();

            if (typeof jQuery != typeof undef)
                jQuery(window).trigger('resize');
        }
    },

    pages: { /* scope for all page script */},

    layout: {
        events: {},
        on: function (evn, fn)
        {
            var name = evn;
            var namespace;

            // @TODO add namespace for check exists event (eventname.namespace)
            if (/\./.test(evn)) {
                evn = evn.split('.');
                name = evn[0];
                namespace = evn[1];
            }

            if (!JP.layout.events[name])
                JP.layout.events[name] = [];

            JP.layout.events[name].push(fn);
        },
        fire: function (evn, args)
        {
            var events = JP.layout.events[evn];

            if (events) {
                for (var name in events) {
                    events[name].call(this, args);
                }
            }

        },
        menu: {
            expand: true,
            init: function ()
            {
                if (Modernizr.csstransitions) {
                    $('body').on(JP.css3.events.transition.end[Modernizr.prefixed('transition')], '.jp-page-menu', function ()
                    {
                        JP.win.fireresize();
                    });
                }
            },
            show: function ()
            {
                $(JP.layout.container.el)
                    [$('.page.active .panel-slide').length ? 'addClass' : 'removeClass']('has-panel-slide').removeClass('collapsed');
                $('.JBTN_ToggleMenu').addClass('active');
            },
            hide: function ()
            {
                $(JP.layout.container.el)
                    [$('.page.active .panel-slide').length ? 'addClass' : 'removeClass']('has-panel-slide').addClass('collapsed');
                $('.JBTN_ToggleMenu').removeClass('active');
            }
        },
        container: {
            el: '.jp-container',
            height: '100%'
        },
        page: {
            el: '.jp-page-view',
            height: '100%'
        },
        viewstate: {
            el: '.viewstate',
            height: '100%'
        },
        // Normal page
        isNPage: false
    },

    toJson: function (str)
    {
        return $.parseJSON(str || null);
    },

    toInt: function (str)
    {
        return parseInt(str, null);
    },

    toFloat: function ()
    {
        return parseFloat(str);
    },

    format: function ()
    {
        var b = arguments[0];
        if (arguments.length != 0) {
            for (var a = 0; a < arguments.length; a++) {
                var c = new RegExp("\\{" + a + "\\}", "gm");
                b = b.replace(c, arguments[a + 1])
            }
        }
        return b
    },

    isNumber: function (n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    setMask: function (t)
    {
        JP.mask = t;
    },

    /**
     * @desc    build uri
     *
     * @param    {string}            m        component path
     * @param    {object|string}        format    A Magic param with:
     *                                    [string]    render type
     *                                    [object]    shift a params forword
     *
     * @param    {object|string}        params    query uri to send to server
     *
     * @return    {string}    uri
     */
    uri: function (m, format, params)
    {
        if (typeof format == 'object') {
            params = format;
            format = null;
        }

        if (params) {

            // is dev no cache
            //if(JP.DEV) params._dc = new Date().getTime();

            params = '?' + $.param(params);
        }

        format = format || 'raw';
        return JP.url_base + '/' + m.toLowerCase() + '/format/' + format + (params || '');
    },

    json: function (m, params)
    {
        return JP.uri(m, 'json', params);
    },

    raw: function (m, params)
    {
        return JP.uri(m, 'raw', params);
    },

    rawhtml: function (m, params)
    {
        return JP.uri(m, 'rawhtml', params);
    },

    js: function (m, params)
    {
        return JP.uri(m, 'js', params);
    },

    res: {
        url: function(path, format, params)
        {
            if (typeof format == 'object') {
                params = format;
                format = null;
            }

            if (php.empty(params)) {
                params = {};
            }

            format = format || 'raw';
            params['_format'] = format;
            params = '?' + $.param(params);

            return mg.base + path.toLowerCase() + params;
        },

        json: function(path, params)
        {
            return JP.res.url(path, 'json', params);
        },

        jsonp: function(path, params)
        {
            return JP.res.url(path, 'jsonp', params);
        },

        raw: function(path, params)
        {
            return JP.res.url(path, 'raw', params);
        },

        rawhtml: function(path, params)
        {
            return JP.res.url(path, 'rawhtml', params);
        }
    },

    Locale: {
        _: function (str)
        {
            return str;
        }
    },

    conn: {
        show: function ()
        {
            //cs.trace();
            $('.top-actions .conn').addClass('loading');
        },
        hide: function ()
        {
            //cs.trace();
            $('.top-actions .conn').removeClass('loading');
        }
    },

    count: function(obj)
    {
        if(php.is_object(obj))
            return Object.keys(obj).length;

        return obj.length;
    },

    diff: function(p1, p2, objASarr)
    {
        // convert all to Object type
        if(objASarr) {
            if(php.gettype(p1) == 'array')
                p1 = php.get_object_vars(p1);

            if(php.gettype(p2) == 'array')
                p2 = php.get_object_vars(p2);
        }

        if(php.gettype(p1) != php.gettype(p2))
            return true;

        if(JP.count(p1) != JP.count(p2))
            return true;

        return !!JP.count(php.array_diff_assoc(p1, p2));
    },

    geo_ptxt: function (type, pvn)
    {
        var ret, pvn = parseInt(pvn);

        switch (strtolower(type)) {
            case 'pvn':
                ret = pvn != 9 ? 'จ.' : '';
                break;
            case 'dst':
                ret = pvn != 9 ? 'ต.' : 'แขวง';
                break;

            default:
                ret = pvn != 9 ? 'อ.' : 'เขต';
                break;
        }

        return ret;
    },

    BchLogo: function (id)
    {
        return JP.url_bch_logo + id + '.png';
    },

    getUserPhoto: function (id)
    {
        var max_group = 1000;
        var folder = parseInt(id);
        if (folder < max_group) folder = 1;
        folder = Math.ceil(folder / max_group);
        return JP.url_user_photo + folder + '/' + id + '.png';
    },

    CDATA: {
        init: function(data)
        {
            JP.CDATA = data;
        },

        /**
         * @desc    append new data to CDATA on fly
         *
         * @param    {string}    key        key of new data
         * @param    {mixed}        data    new data
         *
         * @return    {mixed} new data
         */
        append: function (key, data)
        {
            var tmp;
            if (/\./.test(key)) {
                tmp = Ext.apply(JP.ns('CDATA.' + key), data);
            } else {
                tmp = JP.CDATA[key] = data;
            }
            return tmp;
        },

        /**
         * get CDATA by specify key
         */
        get: function (key)
        {
            return JP.CDATA[key];
        },

        set: function (key, val)
        {
            JP.CDATA[key] = val;
        },

        Date: {

            Days: [].concat(
                ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            ),

            Months: ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11','12'],

            Year: function(y, def)
            {
                y = php.intval(y);

                if(php.empty(y))
                    return def ? def : null;

                // @todo check locale
                if(y.length == 2)
                    return y + 43;

                return y + 543;
            },

            Month: function(m, long)
            {
                m = php.intval(m);

                if(php.empty(m))
                    return '';

                var lc = JP.No(m, 2);

                if(long === false){
                    lc = 'm_' + lc;
                } else {
                    lc = 'm' + lc;
                }

                return LC[lc];
            }
        }
    },

    /* namespace manager (form extjs)*/
    namespaceParseCache: {},
    enableNamespaceParseCache: true,
    namespaceRewrites: [
        {
            from: 'JP.',
            to: function ()
            {
                return JP
            }
        },
        {
            from: 'window.',
            to: function ()
            {
                return window
            }
        }
    ],

    parseNamespace: function (namespace)
    {
        //<debug error>
        if (typeof namespace != 'string') {
            throw new Error("[Invalid] namespace, must be a string");
        }
        //</debug>
        var cache = this.namespaceParseCache, parts, rewrites, root, name, rewrite, from, to, i, ln;

        if (this.enableNamespaceParseCache) {
            if (cache.hasOwnProperty(namespace)) {
                return cache[namespace];
            }
        }

        parts = [];
        rewrites = this.namespaceRewrites;
        root = window;
        name = namespace;

        for (i = 0, ln = rewrites.length; i < ln; i++) {
            rewrite = rewrites[i];
            from = rewrite.from;
            to = rewrite.to();

            if (name === from || name.substring(0, from.length) === from) {
                name = name.substring(from.length);

                if (typeof to != 'string') {
                    root = to;
                } else {
                    parts = parts.concat(to.split('.'));
                }

                break;
            }
        }

        parts.push(root);

        parts = parts.concat(name.split('.'));

        if (this.enableNamespaceParseCache) {
            cache[namespace] = parts;
        }

        return parts;
    },

    /**
     * create namespace
     */
    _ns: function ()
    {
        var root = window, parts, part, i, j, ln, subLn;

        for (i = 0, ln = arguments.length; i < ln; i++) {
            parts = this.parseNamespace(arguments[i]);

            for (j = 0, subLn = parts.length; j < subLn; j++) {
                part = parts[j];

                if (typeof part != 'string') {
                    root = part;
                } else {
                    if (!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }
        }

        return root;
    },

    /**
     * create and get ns
     *
     * @param {string} ns string for namespace abc or abc.def
     * @param {boolean} isJP optional flag for force root to JP if not to false, if false root is window
     * @optional {mixed} 3th parametor if you want to define default of empty namespace, otherwise return empty object
     *
     * @return {mixed}
     */
    ns: function (ns, isJP)
    {
        if (ns.toLowerCase() === 'window' && isJP === false)
            return window;

        if (typeof ns === 'string') {
            // support all case of jp
            var hasjp = ns.substring(0, 3).toLowerCase() === 'jp.';
            if (hasjp) {
                ns = 'JP.' + ns.substring(3);
            }
            ns = JP._ns(!hasjp && isJP !== false ? ('JP.' + ns) : ns);
        }

        return (!ns.length && arguments.length === 3) ? arguments[2] : ns;
    },

    No: function (n, len)
    {
        var re = '-', undef;

        if (len == undef) len = 3;

        if (!php.empty(n)) {
            n = n.toString();

            if (n.length >= len) {
                re = n;
            } else {
                re = php.substr(php.str_repeat('0', len) + n, Math.abs(len) * -1);
            }
        }

        return re;
    },

    coder: function (key, no, bch)
    {
        var codes = {
            'branch': 'JP', // √
            'bch': 'JP', // √
            'customer': 'A',
            'cus': 'A',
            'B': 'B',
            'cat': 'C', // √
            'date': 'D', // √
            'rtn': 'E', // √ customer return product item
            'F': 'F',
            'G': 'G',
            'H': 'H',
            'ski': 'I', // √
            'J': 'J',
            'K': 'K',
            'L': 'L',
            'month': 'M', // √
            'N': 'N',
            'order': 'O', // √
            'product': 'P', // √
            'pro': 'P', // √
            'Q': 'Q',
            'gr': 'R', // √
            'po': 'S', // √
            'trf': 'T', // √
            'transfer': 'T', // √
            'sku': 'U', // √
            'V': 'V',
            'W': 'W',
            'X': 'X',
            'year': 'Y', // √
            'Z': 'K'
        };

        key = key.toLowerCase();

        if (php.empty(codes[key]) || php.empty(no)) return null;

        var add_bch = '';
        if (!php.empty(bch))
            add_bch = codes['branch'] + bch;

        return add_bch + codes[key] + JP.No(no);
    },

    apply: function (o, c, defaults)
    {
        if (typeof o == 'string')
            o = JP.ns(o);

        if(defaults)
            o = JP.apply(defaults, o);

        if (o && c && typeof c == 'object') {
            for (var p in c) {
                o[p] = c[p];
            }
        }

        return o;
    },

    /**
     * assets impoter
     *
     * ex #1
     * assets(path, [callback], [namespace])
     *
     * ex #2
     * assets(path[], [callback], [namespace])
     *
     * ex #3
     * assets({
     *    fs: path | path[],
     *  [cb: 'string' | fn,]
     *  [ns: 'string' | object]
     * }, [complete], [namespace])
     *
     * ex #3-1 can be array
     * assets([{...},{...}] [complete], [namespace])
     *
     * ex #4
     * assets({
     *    fs: {
     *        js: path | path[], |
     *        css: path | path[]
     *    },
     *  [cb: 'string' | fn,]
     *  [ns: 'string' | object]
     * }, [complete], [namespace])
     *
     * ex #4-1 can be array
     * assets([{...},{...}] [complete], [namespace])
     *
     * ex #5
     * assets({
     *    js: path | path[],
     *    css: path | path[],
     *    [cb: 'string' | fn,],
     *    [ns: 'string' | object]
     * }, [complete], [namespace])
     *
     * ex #5-1
     * assets([{...},{...}] [complete], [namespace])
     *
     * and #6 any file can
     * js: {url: 'path', [ns: 'namespace'], [cb: 'callback']}
     *
     * ### note ###
     *    1.  if your namespace typeof function you must call yourself in callback function if you want
     *        sample this case like we use PHP_JS in namespace it return crass not object
     *
     *    2.    each jpx.assets call will download assets by ordering by default
     *        if you wan want to parallel download just sepatate call jpx.assets
     *
     *
     * ### TEST CASE ###
     * @todo new example me

     JP.assets('file.js');
     JP.assets('file.css');
     JP.assets(['file1.js','file2.js']);
     JP.assets(['file.js','file.css']);
     // fs
     JP.assets({fs: 'file.js'});
     JP.assets({fs: 'file.css'});
     // js/css
     JP.assets({js: 'file.js',css: 'file.css'});
     JP.assets({js: ['file1.js','file2.js'],css: 'file.css'});
     JP.assets({js: ['file1.js','file2.js'],css: ['file1.css','file2.css']});
     // fs -> js/css
     JP.assets({fs: {js: 'file1.js', css: 'file1.css'}});
     JP.assets({fs: {js: ['file1.js','file2.js'], css: ['file1.css','file2.css']}});
     JP.assets([
     {fs: {js: ['file1.js','file2.js'], css: ['file1.css','file2.css']}},
     {fs: {js: ['file1.js','file2.js'], css: ['file1.css','file2.css']}}
     ]);

     */
    asset_cache: true,

    /**
     * @param {object|array|string} assets list
     *            - object:    fs: list of files
     *                        cb: function callback for each file
     *                        ns: namespace of each file
     *
     * @param {sgring|object} complete namespace
     * @param {string|callable} complete callback (each callback for each file must config inside cb of assets param)
     * @param {boolean} load cache file? default by asset_cache
     *
     * @todo add individule file callback and namespace
     */
    assets: function (assets, namespace, callback, cache, timeout)
    {
        var _assets, complete, undef;

        _assets = [];
        cache = cache || this.asset_cache;
        jpx_done_NSs = window['jpx_done_NSs'] || {};
        complete = {
            callback: callback,
            namespace: namespace
        };

        // full format
        /*
         [{
         fs: {
         js: [
         {url: 'path1' [,cb: callback1-if-not-use-global-callback] [,ns: namespace1-if-not-use-globack-namespace]},
         {url: 'path2' [,cb: callback2-if-not-use-global-callback] [,ns: namespace2-if-not-use-globack-namespace++]}
         ],
         css: [
         {url: 'path1' [,cb: callback1-if-not-use-global-callback] [,ns: namespace1-if-not-use-globack-namespace]},
         {url: 'path2' [,cb: callback2-if-not-use-global-callback] [,ns: namespace2-if-not-use-globack-namespace++]}
         ]
         },
         cb: 'global-callback',
         ns: 'global-namespace'
         },{
         fs: ...
         }]
         */

        // make file to format: [{url: 'path' [,cb: 'xx'] [,ns: 'xx']},{...}]
        function make_file(as, type)
        {
            var files = type ? as['fs'][type] : as['fs'];

            if (typeof files === 'string')
                files = [files];

            var i = 0;
            var fs = [];

            for (; i < files.length; i++) {
                var f = files[i];
                var cb = ns = undef;

                if (typeof f === 'object') {
                    cb = f.cb;
                    ns = f.ns;
                    f = f.url;
                }

                fs[i] = {
                    url: f,
                    cb: cb || as['cb'],
                    ns: ns || (as['ns'] ? (i ? as['ns'] + i : as['ns']) : undef),
                }

            }

            if (!type) {
                var i = 0;
                var f = {
                    css: [],
                    js: []
                };

                for (; i < fs.length; i++) {
                    if (is_css(fs[i].url)) {
                        f['css'][f['css'].length] = fs[i];
                    } else {
                        f['js'][f['js'].length] = fs[i];
                    }
                }

                fs = f;
            }

            return fs;
        }

        function make_files(as)
        {
            var fs = {};
            var af = as['fs'];

            if (af) {
                if (af['js'])
                    fs['js'] = make_file(as, 'js');

                if (af['css'])
                    fs['css'] = make_file(as, 'css');

                if (!af['js'] && !af['css'])
                    fs = make_file(as);
            }

            return fs;
        }

        function do_case1_1(asset)
        {
            var fs = asset['fs'];

            // CASE #1-1-1
            if (fs) {
                cs.log('CASE #1-1-1');
                fs = make_files(asset);

            } else {
                cs.log('CASE #1-1-2')
                /*
                 * CASE #1-1-2
                 * if no fs that mean you have one choice is:
                 {
                 [ js: string|array|{url:xx [,cb:xx] [,ns:xx]} ]
                 [ ,css: string|array|{url:xx [,cb:xx] [,ns:xx]} ],
                 [ ,cb: xx ]
                 [ ,ns: xx ]
                 }
                 */
                fs = {
                    'js': make_file(asset, 'js'),
                    'css': make_file(asset, 'css')
                };
            }

            asset = {
                files: fs,
                callback: asset['cb'],
                namespace: asset['ns']
            };

            return asset;
        }

        // if array []
        // CASE #1
        if (typeof assets === 'object' && assets.length) {
            cs.log('CASE: #1');
            // if [{},{}]
            // CASE #1-1
            if (typeof assets[0] === 'object') {
                cs.log('CASE: #1-1')
                var i = 0;
                for (; i < assets.length; i++) {
                    _assets[i] = do_case1_1(assets[i]);
                }

                // ['xx','xx']
                // CASE #1-2
            } else {
                cs.log('CASE: #1-2')
                _assets = [
                    {
                        files: make_file({'fs': assets}),
                        // if come in this format use only complete callback
                        callback: callback,
                        namespace: namespace
                    }
                ];
            }

            // if {}
            // CASE #2 this seem case #1-1
        } else if (typeof assets === 'object') {
            cs.log('CASE #2')
            _assets = [do_case1_1(assets)];

            // if string
            // CASE #3
        } else {
            cs.log('CASE: #3')
            _assets = [
                {
                    files: make_file({'fs': assets}),
                    callback: callback,
                    namespace: namespace
                }
            ];
        }

        function is_css(file)
        {
            if (typeof file === 'object')
                file = file.url;

            return file.split('.').pop().substr(0, 3).toLowerCase() === 'css';
        }

        function file_ns(str)
        {
            return str.replace(/[^0-9a-z]/ig, '');
        }

        function file_cache(file)
        {
            if (cache)
                return file;

            return file + (/\?/.test(file) ? '&' : '?') + '__t=' + new Date().getTime();
        }

        function file_min(file)
        {
            return file.replace(JP.DEV ? '*' : '*min.', '');
        }

        function file_mc(file)
        {
            return file_cache(file_min(file));
        }

        function tag_callback(callback)
        {
            // on IE
            if (this.readyState) {
                this.onreadystatechange = function ()
                {
                    if (this.readyState == "loaded" || this.readyState == "complete") {
                        this.onreadystatechange = null;
                        _callback(callback).call(this);
                    }
                }
            } else {
                this.onload = function ()
                {
                    _callback(callback).call(this);
                }
            }
        }

        function _callback(context)
        {
            if (!context) return JP.emptyFn;
            return typeof context == 'string' ? JP.ns(context, false) : context;
        }

        // todo move to JP.script to load single file
        function load_script(file, callback, namespace, timeout, complete)
        {
            var script, url, scope, scope_complete;

            url = file.url;

            if (namespace)
                scope = JP.ns(namespace, false, undef);

            if (complete && complete.namespace)
                scope_complete = JP.ns(complete.namespace, false, undef);

            function callback_fire()
            {
                cs.log('loaded-script:' + this.src);

                // flag loaded
                jpx_done_NSs[file_ns(this.url)] = this;

                /**
                 * both callbacks pass params
                 *
                 * @param {object|null} scope by your namespace
                 * @param {string} namespace key
                 * @param {string} file url
                 *
                 * @scope {HTMLScriptTag} this
                 */

                if (callback)
                    _callback(callback).call(this, scope, file);

                if (complete && complete.callback) {
                    /**
                     * this set timeout to make sure complete is a final call
                     * when all script loaded complete will fire before load_script recursive finish
                     */
                    setTimeout(function ()
                    {
                        _callback(complete.callback).call(this, scope_complete, complete.namespace, file);
                    }, 10);
                }
            }

            // todo set timeout
            // default error timeout to 10sec - modify to alter
            //timeout = timeout | 1e4;
            if ((scope || scope_complete) || jpx_done_NSs[file_ns(url)]) {
                // if asset loaded just fire callback
                script = jpx_done_NSs[file_ns(url)];
                callback_fire.call(script);
            } else {

                /**
                 * @note unlike img object script/style don't when you set src immediately
                 *         there are load when appended to page (body/head)
                 */
                script = document.createElement("script")
                script.type = "text/javascript";

                // set cross platform readystate
                script.callback = tag_callback;

                // add readystate callback
                script.callback(callback_fire);

                script.src = file_mc(url);
                script.url = url;
                document.body.appendChild(script);
                cs.log('call-script:' + script.src);
            }

            //return script;
        }

        function load_scripts(files, callback, namespace, timeout)
        {
            var i = 0;
            var len = files.length;

            function load(files)
            {
                var file = files[i];
                var _cb = _ns = undef;

                _cb = file.cb || callback;
                _ns = file.ns || namespace;

                if (i < len - 1) {

                    load_script(file, function (scope, f)
                    {
                        i++;

                        // fire callback for each file
                        if (f.cb) {
                            _callback(f.cb).call(this, scope, f);
                        }

                        load(files);
                    }, _ns, timeout);

                } else {
                    load_script(file, _cb, _ns, timeout, complete);
                }
            }

            load(files);
        }

        // reparate download style and callback when finish all
        // @todo move to JP.style to load single file
        function load_style(file, callback, timeout)
        {
            var style, url;

            url = file.url;

            function callback_css()
            {
                cs.log('loaded-style:' + this.href);

                // flag loaded
                jpx_done_NSs[file_ns(this.url)] = this;

                /**
                 * the callback of style loaded pass params
                 *
                 * @param {string} file url
                 *
                 * @scope {HTMLStyleTag} this
                 */
                if (callback)
                    _callback(callback).call(this, file);
            }

            if (jpx_done_NSs[file_ns(url)]) {
                // if asset loaded just fire callback
                style = jpx_done_NSs[file_ns(url)];
                callback_css.call(style);
            } else {

                style = document.createElement("link")
                style.type = "text/css";
                style.rel = "stylesheet";
                style.callback = tag_callback;
                style.href = file_mc(url);
                style.url = url;

                // add readystate callback
                style.callback(callback_css);

                document.body.appendChild(style);

                cs.log('call-style:' + style.href);
            }

            return style;
        }

        function load_styles(asset, callback, timeout, complete)
        {
            var files = asset['files']['css'];
            var i = 0;
            var len = files.length;
            var count = {
                total: len,
                n: 0
            };

            for (; i < len; i++) {
                var file = files[i];

                load_style(file, function (f)
                {
                    count.n++;

                    if (f.cb)
                        _callback(f.cb).call(this, f);

                    if (count.n == count.total) {
                        _callback(complete).call(this, asset);
                    }

                }, timeout);
            }
        }

        var n = 0;

        for (; n < _assets.length; n++) {
            var asset = _assets[n];
            var js = asset['files']['js'];
            var css = asset['files']['css'];

            if (css && css.length) {
                load_styles(asset, asset.callback, 1e4, function (ast)
                {
                    var js = ast['files']['js'];
                    if (js) load_scripts(js, ast.callback, ast.namespace, 1e4);
                });
            } else {
                if (js && js.length) load_scripts(js, asset.callback, asset.namespace, 1e4);
            }
        }

    },

    // import asset by key like JP::import
    import: function (libs, namespace, callback, ordering)
    {
        var undef;

        // if []
        if (typeof libs === 'string') {
            libs = [libs];
        }

        var i = 0;
        var assets = [];

        for (; i < libs.length; i++) {
            assets[i] = {};
            var lib = libs[i];
            var ns = cb = undef;

            lib = lib.split('::');
            if (lib.length === 2) {
                ns = lib[0];
                lib = lib[1];
            } else {
                lib = lib[0];
            }

            lib = lib.split(':');
            if (lib.length === 2) {
                cb = lib[1];
            }

            lib = lib[0];

            assets[i] = {
                pt: lib,
                fs: JP.ns(lib),
                ns: ns,
                cb: cb
            };
        }

        // todo improve me to better detection.
        if (!assets[0]['fs'].length) {
            throw ('can not found the libs.');
        }

        if (namespace === true || callback === true || ordering === true) {
            // merge all asset to queue
            var files = [];
            var i = 0;

            function make_file(files, ast, type)
            {
                var fs = ast['fs'];

                if (!fs) return files;

                // if []
                var file = type ? fs[type] : fs;
                if (typeof file === 'string')
                    file = [file];

                var i = 0;
                for (; i < file.length; i++) {
                    var f = file[i];

                    f = {
                        url: f,
                        ns: ast['ns'] ? (i ? ast['ns'] + i : ast['ns']) : undef,
                        cb: ast['cb']
                    };

                    files.push(f);
                }

                return files;
            }

            for (; i < assets.length; i++) {
                var ast = assets[i];

                if (ast['fs']['js'] && ast['fs']['css']) {
                    files = make_file(files, ast, 'js');
                    files = make_file(files, ast, 'css');

                } else if (ast['fs']['js']) {
                    files = make_file(files, ast, 'js');

                } else if (ast['fs']['css']) {
                    files = make_file(files, ast, 'css');

                } else {
                    files = make_file(files, ast);
                }
            }

            if (namespace === true)
                namespace = undef;

            if (callback === true)
                callback = undef;

            assets = {
                fs: files,
                ns: namespace,
                callback: callback
            };
        }

        cs.log(assets);
        JP.assets(assets, namespace, callback);
    },

    // libraries config (apply by ::cdata)
    libs: {},

    // todo set decimal
    money: function (num, decimal, ret)
    {
        var undef;

        num = php.number_format(num, decimal === undef ? 2 : decimal);

        if ((decimal === undef || !decimal) && num.substr(-3) == '.00') {
            num = num.substr(0, num.length - 3);
            // @note this's bug (?) when grid-column change HTML render take error
            //num = num + '<span class="e-num-00">.00</span>';
        }

        return num ? num : 0;
    },

    number: function(v, format){
        return Ext.util.Format.number(v, format || '0,000');
    },

    percent: function(part, whole, returnDecimal)
    {
        part = php.floatval(part);
        whole = php.floatval(whole);

        if(php.empty(part) || php.empty(whole))
            return 0;

        // decimal to integer
        if(part < 0)
            part = part * 100;

        result = part / whole;

        if(php.empty(returnDecimal))
            result = result * 100;

        // return 2 decimal if has
        return result % 1 ? result.toFixed(2) : result;
    },

    percentOf: function(percent, total, returnDecimal)
    {
        percent = php.floatval(percent);
        total = php.floatval(total);

        if(php.empty(percent) || php.empty(total))
            return 0;

        result = percent * (total / 100);

        if(!php.empty(returnDecimal))
            result = result / 100;

        // return 2 decimal if has
        return result % 1 ? result.toFixed(2) : result;
    },

    /**
     * @todo translate fn
     */
    _: function(v)
    {
        return v;
    },

    alert: function(v)
    {
        alert(_(v));
    },

    confirm: function(v)
    {
        return confirm(_(v));
    }
};

if (!JP.libs.length);
JP.libs = {"utils": {"jp": "http:\/\/cdn.joyprice.com\/js\/utils\/jp.*min.js", "php": "http:\/\/cdn.joyprice.com\/js\/utils\/php.compact.min.js", "modernizr": "http:\/\/cdn.joyprice.com\/js\/utils\/modernizr.min.js", "yepnope": "http:\/\/cdn.joyprice.com\/js\/utils\/yepnope.min.js"}, "mustache": "http:\/\/cdn.joyprice.com\/js\/libs\/mustache.js\/mustache.min.js", "jquery": {"171": "jquery\/1.7.1\/jquery.min.js", "172": "jquery\/1.7.2\/jquery.min.js", "182": "jquery\/1.8.2\/jquery.*min.js", "183": "http:\/\/cdn.joyprice.com\/js\/jquery\/jquery-1.8.3.min.js", "191": "http:\/\/cdn.joyprice.com\/js\/jquery\/jquery-1.9.1.min.js", "200": ["http:\/\/cdn.joyprice.com\/js\/jquery\/jquery-2.0.0.min.js", "http:\/\/cdn.joyprice.com\/js\/jquery\/jquery-migrate-1.2.1.*min.js"], "latest": "http:\/\/code.jquery.com\/jquery-latest.*min.js", "ui": {"1815": {"js": "jquery\/UI\/1.8.15\/js\/jquery-ui-1.8.15.custom.min.js"}, "1820": {"js": "jquery\/UI\/1.8.20\/js\/jquery-ui-1.8.20.custom.min.js"}, "190": {"js": "jquery\/UI\/1.9.0\/js\/jquery-ui-1.9.0.custom.min.js"}, "192": "http:\/\/cdn.joyprice.com\/js\/jquery\/jquery-ui-1.9.2.min.js", "aristo": {"css": "http:\/\/cdn.joyprice.com\/js\/jquery\/ui\/Aristo\/Aristo.css"}}, "jp": "http:\/\/cdn.joyprice.com\/js\/jquery\/jquery.jp.*min.js", "plugins": {"chosen": {"css": "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/chosen\/chosen.css", "js": ["http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/chosen\/chosen.jquery.min.js", "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/chosen\/chosen.jquery.ajax.min.js"]}, "hotkey": "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/hotkey.js", "tiny": "jquery.plugins\/tiny_mce345\/jquery.tinymce.js", "iphone-checkbox": {"js": "jquery.plugins\/iphone-checkboxs\/script.js", "css": "jquery.plugins\/iphone-checkboxs\/styles.css"}, "tipsy": {"js": "jquery.plugins\/tipsy\/src\/javascripts\/jquery.tipsy.js", "css": "jquery.plugins\/tipsy\/src\/stylesheets\/tipsy.css"}, "hashchange": "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/ba\/jquery.ba-hashchange.min.js", "bbq": "jquery.plugins\/ba\/jquery.ba-bbq.min.js", "history": "jquery.plugins\/jquery.history.min.js", "lazyload": "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/jquery.lazyload.min.js", "plupload": {"js": ["http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/plupload\/js\/plupload.js", "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/plupload\/js\/plupload.html5.js", "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/plupload\/js\/jquery.ui.plupload\/jquery.ui.plupload.js"], "css": "http:\/\/cdn.joyprice.com\/js\/jquery\/plugins\/plupload\/js\/jquery.ui.plupload\/css\/jquery.ui.plupload.css"}, "isotope": "jquery.plugins\/jquery.isotope.min.js", "dialogr": {"js": "jquery.plugins\/jquery.dialogr.v.2.1\/js\/ui.dialogr.js", "css": "jquery.plugins\/jquery.dialogr.v.2.1\/css\/jquery.dialogr.css"}}}, "ext": {"410": {"js": ["ext\/4.1.0\/ext-all-debug.js", "ext\/4.1.0\/locale\/ext-lang-th.js", "ext.ux\/ext.extends.410.js"], "css": ["ext\/4.1.0\/resources\/css\/ext-all-gray.css", "css\/ext4-ext.css"]}, "411": {"js": ["ext\/4.1.1\/ext-all-dev.js", "ext\/4.1.1\/bug-fixed.js", "ext\/4.1.1\/locale\/ext-lang-th.js", "ext.ux\/ext.extends.410.js"], "css": ["ext\/4.1.1\/resources\/css\/ext-all-gray.css"], "neptune": {"js": "ext\/4.1.1\/ext-neptune.js", "css": "ext\/4.1.1\/resources\/css\/ext-neptune.css"}}, "411a": {"js": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.1.1a\/ext-all-dev.js", "http:\/\/cdn.joyprice.com\/js\/ext\/bug-fixed.js", "http:\/\/cdn.joyprice.com\/js\/ext\/extended.js"], "css": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.1.1a\/resources\/css\/ext-all-gray.css"]}, "420": {"js": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.2.0\/ext-all-dev.js", "http:\/\/cdn.joyprice.com\/js\/ext\/bug-fixed.js", "http:\/\/cdn.joyprice.com\/js\/ext\/extended-42.js"], "css": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.2.0\/resources\/css\/ext-all-gray.css"]}, "421": {"js": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.2.1\/ext-all-dev.js", "http:\/\/cdn.joyprice.com\/js\/ext\/bug-fixed.js", "http:\/\/cdn.joyprice.com\/js\/ext\/extended-42.js"], "css": ["http:\/\/cdn.joyprice.com\/js\/ext\/4.2.1\/resources\/css\/ext-all-gray.css"]}, "ux": {"boxselect": {"js": "ext.ux\/4.0.7\/BoxSelect.js", "css": "ext.ux\/4.0.7\/BoxSelect.css"}, "combobox": {"js": ["http:\/\/cdn.joyprice.com\/js\/ext\/ux\/form\/combo\/ComboView.js", "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/form\/combo\/ComboFieldBox.js"], "css": "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/form\/combo\/ComboFieldBox.css"}, "switchbuttonsegment": {"js": ["http:\/\/cdn.joyprice.com\/js\/ext\/ux\/harry\/container\/ButtonSegment.js", "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/harry\/container\/SwitchButtonSegment.js"], "css": "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/harry\/container\/ButtonSegment.css"}, "toggleslide": {"js": "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/harry\/toggleslide\/ToggleSlide.js", "css": "http:\/\/cdn.joyprice.com\/js\/ext\/ux\/harry\/toggleslide\/css\/style.css"}}}, "asset": {"sac": "assets\/sac.js", "local": "assets\/lc.js"}, "cometchat": {"js": "http:\/\/chat.joyprice.net\/cometchat\/cometchatjs.php", "css": "http:\/\/chat.joyprice.net\/cometchat\/cometchatcss.php"}, "template": {"raw": "http:\/\/cdn.joyprice.com\/css\/themes\/thm-raw.css", "desk": {"css": ["http:\/\/cdn.joyprice.com\/css\/themes\/desk\/reset.css", "http:\/\/cdn.joyprice.com\/css\/themes\/desk\/default.css"], "default": {"css": "themes\/desk\/thm-def.css", "login": "themes\/desk\/thm-def-login.css", "stock": "themes\/desk\/thm-def-stock.css"}, "modern": {"css": "http:\/\/cdn.joyprice.com\/css\/themes\/desk\/thm-modern.css", "login": "http:\/\/cdn.joyprice.com\/css\/themes\/desk\/thm-modern-login.css", "stock": "http:\/\/cdn.joyprice.com\/css\/themes\/desk\/thm-modern-stock.css"}}}, "bootstrap": {"211": {"js": "libs\/bootstrap\/2.1.1\/js\/bootstrap.*min.js", "css": ["libs\/bootstrap\/2.1.1\/css\/bootstrap.*min.css"]}, "221": {"js": "libs\/bootstrap\/2.2.1\/js\/bootstrap.*min.js", "css": ["libs\/bootstrap\/2.2.1\/css\/bootstrap.*min.css"]}, "222": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.2.2\/js\/bootstrap.*min.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.2.2\/css\/bootstrap.*min.css"}, "230": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.0\/js\/bootstrap.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.0\/css\/bootstrap.*min.css", "noicons": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.0\/noicons\/js\/bootstrap.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.0\/noicons\/css\/bootstrap.*min.css"}}, "231": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.1\/js\/bootstrap.*min.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.1\/css\/bootstrap.*min.css", "noicons": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.1\/noicons\/js\/bootstrap.*min.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.1\/noicons\/css\/bootstrap.*min.css"}}, "232": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.2\/js\/bootstrap.min.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.2\/css\/bootstrap.min.css", "noicons": {"js": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.2\/noicons\/js\/bootstrap.min.js", "css": "http:\/\/cdn.joyprice.com\/js\/libs\/bootstrap\/2.3.2\/noicons\/css\/bootstrap.min.css"}}}, "html5shiv": {"js": "http:\/\/html5shim.googlecode.com\/svn\/trunk\/html5.js"}, "font-icon": {"css": ["http:\/\/cdn.joyprice.com\/css\/fontello\/css\/fontello.css", "http:\/\/cdn.joyprice.com\/css\/fontello\/css\/fontello-final.css"]}};

if (window.Modernizr)
    JP.apply('css3.events', {
        animate: {
            start: JP.css3.animate.start[Modernizr.prefixed('animation')],
            end: JP.css3.animate.end[Modernizr.prefixed('animation')]
        },

        transition: {
            start: JP.css3.transition.start[Modernizr.prefixed('transition')],
            end: JP.css3.transition.end[Modernizr.prefixed('transition')]
        }
    });

JP.DEV = /^dev\./.test(window.location.hostname);

// jp alias in lowercass
var mg = jp = JP;
mg.base = '/sf/web/app_dev.php/'; // TODO dynamic set