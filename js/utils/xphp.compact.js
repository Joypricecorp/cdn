/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 3.26
 * php.js is copyright 2011 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
 * Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
 * Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
 * Rafał Kukawski (http://blog.kukawski.pl), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
 * Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
 * L. Rodrigues (http://www.jsfromhell.com), Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
 * Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny
 * Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
 * (http://webdevhobo.blogspot.com/), marrtins, GeekFG
 * (http://geekfg.blogspot.com), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
 * gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
 * Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin
 * (http://www.erlenwiese.de/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Chris, Mirek Slugen, saulius, Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
 * Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
 * Ariede (http://caioariede.com), Robin, Kankrelune
 * (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
 * (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
 * Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
 * David, Aman Gupta, Michael White, Public Domain
 * (http://www.json.org/json2.js), Steven Levithan
 * (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
 * Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
 * Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
 * (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
 * Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
 * Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
 * (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
 * (http://javascript.crockford.com), madipta, Slawomir Kaniecki,
 * ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
 * Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
 * Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
 * josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
 * Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
 * Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
 * (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Olivier Louvignes
 * (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
 * Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
 * vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
 * Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
 * (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
 * B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
 * Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
 * Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
 * (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
 * Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
 * Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
 * sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, Arnout Kazemier
 * (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
 * FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
 * daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan
 * W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
 * (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
 * Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
 * (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt
 * Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
 * Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
 * (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), setcookie, Michael, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
 * http://hacks.bluesmoon.info/strftime/strftime.js, Ben
 * (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
 * meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
 * (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
 * Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
 * Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
 * Bryan
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// jslint.com configuration options. See: http://wiki.github.com/kvz/phpjs/jslint-options
/* global window */
/* jslint adsafe: false, bitwise: false, browser: false, cap: false, css: false, debug: false, devel: false, eqeqeq: true, evil: false, forin: false, fragment: false, immed: true, indent: 4, laxbreak: false, maxerr: 100, maxlen: 80, newcap: true, nomen: false, on: true, onevar: false, passfail: false, plusplus: false, regexp: false, rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true, white: false, widget: false */
(function() {
    if(typeof(this.PHP_JS) === "undefined"){ 
        // This references at top of namespace allows PHP_JS class to
        // be included directly inside an object (unusual use)
        var PHP_JS = function(cfgObj) {
            if(!(this instanceof PHP_JS)) {
                // Allow invokation without "new"
                return new PHP_JS(cfgObj);
            }
            // Allow user to pass in window, e.g., if in context
            // without access to window but need to pass in, like
            // a Mozilla JavaScript module
            this.window = cfgObj && cfgObj.window ? cfgObj.window : window;

            // Allow user to pass in object representing initial ini values
            this.php_js = {};
            this.php_js.ini = {};
            if (cfgObj) {
                for (var ini in cfgObj.ini) {
                    this.php_js.ini[ini] = {};
                    this.php_js.ini[ini].local_value = cfgObj.ini[ini]; // changeable by ini_set()
                    this.php_js.ini[ini].global_value = cfgObj.ini[ini]; // usable by ini_restore()
                }
            }
        };
    }
    // Private static holder across all instances; we usually use
    // instance variables, but this is necessary for a very few
    // like require_once()/include_once()
    var php_js_shared = {};

    PHP_JS.prototype = {
        constructor: PHP_JS,
        _phpjs_shared_bc: function () {
            // !No description available for _phpjs_shared_bc. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/_phpjs_shared_bc
            // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: _phpjs_shared_bc();
            // *     returns 1: {}
            /**
             * BC Math Library for Javascript
             * Ported from the PHP5 bcmath extension source code,
             * which uses the libbcmath package...
             *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
             *    Copyright (C) 2000 Philip A. Nelson
             *     The Free Software Foundation, Inc.
             *     59 Temple Place, Suite 330
             *     Boston, MA 02111-1307 USA.
             *      e-mail:  philnelson@acm.org
             *     us-mail:  Philip A. Nelson
             *               Computer Science Department, 9062
             *               Western Washington University
             *               Bellingham, WA 98226-9062
             *
             * bcmath-js homepage:
             *
             * This code is covered under the LGPL licence, and can be used however you want :)
             * Be kind and share any decent code changes.
             */
            /**
             * Binary Calculator (BC) Arbitrary Precision Mathematics Lib v0.10  (LGPL)
             * Copy of libbcmath included in PHP5 src
             *
             * Note: this is just the shared library file and does not include the php-style functions.
             *       use bcmath{-min}.js for functions like bcadd, bcsub etc.
             *
             * Feel free to use how-ever you want, just email any bug-fixes/improvements to the sourceforge project:
             *
             *
             * Ported from the PHP5 bcmath extension source code,
             * which uses the libbcmath package...
             *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
             *    Copyright (C) 2000 Philip A. Nelson
             *     The Free Software Foundation, Inc.
             *     59 Temple Place, Suite 330
             *     Boston, MA 02111-1307 USA.
             *      e-mail:  philnelson@acm.org
             *     us-mail:  Philip A. Nelson
             *               Computer Science Department, 9062
             *               Western Washington University
             *               Bellingham, WA 98226-9062
             */
        
            var libbcmath = {
                PLUS: '+',
                MINUS: '-',
                BASE: 10,
                // must be 10 (for now)
                scale: 0,
                // default scale
                /**
                 * Basic number structure
                 */
                bc_num: function () {
                    this.n_sign = null; // sign
                    this.n_len = null; /* (int) The number of digits before the decimal point. */
                    this.n_scale = null; /* (int) The number of digits after the decimal point. */
                    //this.n_refs = null; /* (int) The number of pointers to this number. */
                    //this.n_text = null; /* ?? Linked list for available list. */
                    this.n_value = null; /* array as value, where 1.23 = [1,2,3] */
                    this.toString = function () {
                        var r, tmp;
                        tmp = this.n_value.join('');
        
                        // add minus sign (if applicable) then add the integer part
                        r = ((this.n_sign == libbcmath.PLUS) ? '' : this.n_sign) + tmp.substr(0, this.n_len);
        
                        // if decimal places, add a . and the decimal part
                        if (this.n_scale > 0) {
                            r += '.' + tmp.substr(this.n_len, this.n_scale);
                        }
                        return r;
                    };
                },
        
                /**
                 * Base add function
                 *
                 //  Here is the full add routine that takes care of negative numbers.
                 //  N1 is added to N2 and the result placed into RESULT.  SCALE_MIN
                 //  is the minimum scale for the result.
                 *
                 * @param {bc_num} n1
                 * @param {bc_num} n2
                 * @param {int} scale_min
                 * @return bc_num
                 */
                bc_add: function (n1, n2, scale_min) {
                    var sum, cmp_res, res_scale;
        
                    if (n1.n_sign === n2.n_sign) {
                        sum = libbcmath._bc_do_add(n1, n2, scale_min);
                        sum.n_sign = n1.n_sign;
                    } else { /* subtraction must be done. */
                        cmp_res = libbcmath._bc_do_compare(n1, n2, false, false); /* Compare magnitudes. */
                        switch (cmp_res) {
                        case -1:
                            /* n1 is less than n2, subtract n1 from n2. */
                            sum = libbcmath._bc_do_sub(n2, n1, scale_min);
                            sum.n_sign = n2.n_sign;
                            break;
        
                        case 0:
                            /* They are equal! return zero with the correct scale! */
                            res_scale = libbcmath.MAX(scale_min, libbcmath.MAX(n1.n_scale, n2.n_scale));
                            sum = libbcmath.bc_new_num(1, res_scale);
                            libbcmath.memset(sum.n_value, 0, 0, res_scale + 1);
                            break;
        
                        case 1:
                            /* n2 is less than n1, subtract n2 from n1. */
                            sum = libbcmath._bc_do_sub(n1, n2, scale_min);
                            sum.n_sign = n1.n_sign;
                        }
                    }
                    return sum;
                },
        
                /**
                 * This is the "user callable" routine to compare numbers N1 and N2.
                 * @param {bc_num} n1
                 * @param {bc_num} n2
                 * @return int -1, 0, 1  (n1 < n2, ==, n1 > n2)
                 */
                bc_compare: function (n1, n2) {
                    return libbcmath._bc_do_compare(n1, n2, true, false);
                },
        
                _one_mult: function (num, n_ptr, size, digit, result, r_ptr) {
                    var carry, value; // int
                    var nptr, rptr; // int pointers
                    if (digit === 0) {
                        libbcmath.memset(result, 0, 0, size); //memset (result, 0, size);
                    } else {
                        if (digit == 1) {
                            libbcmath.memcpy(result, r_ptr, num, n_ptr, size); //memcpy (result, num, size);
                        } else { /*  Initialize */
                            nptr = n_ptr + size - 1; //nptr = (unsigned char *) (num+size-1);
                            rptr = r_ptr + size - 1; //rptr = (unsigned char *) (result+size-1);
                            carry = 0;
        
                            while (size-- > 0) {
                                value = num[nptr--] * digit + carry; //value = *nptr-- * digit + carry;
                                //result[rptr--] = libbcmath.cint(value % libbcmath.BASE); // @CHECK cint //*rptr-- = value % BASE;
                                result[rptr--] = value % libbcmath.BASE; // @CHECK cint //*rptr-- = value % BASE;
                                //carry = libbcmath.cint(value / libbcmath.BASE);   // @CHECK cint //carry = value / BASE;
                                carry = Math.floor(value / libbcmath.BASE); // @CHECK cint //carry = value / BASE;
                            }
        
                            if (carry !== 0) {
                                result[rptr] = carry;
                            }
                        }
                    }
                },
        
                bc_divide: function (n1, n2, scale) {
                    var quot; // bc_num return
                    var qval; // bc_num
                    var num1, num2; // string
                    var ptr1, ptr2, n2ptr, qptr; // int pointers
                    var scale1, val; // int
                    var len1, len2, scale2, qdigits, extra, count; // int
                    var qdig, qguess, borrow, carry; // int
                    var mval; // string
                    var zero; // char
                    var norm; // int
                    var ptrs; // return object from one_mul
                    /* Test for divide by zero. (return failure) */
                    if (libbcmath.bc_is_zero(n2)) {
                        return -1;
                    }
        
                    /* Test for zero divide by anything (return zero) */
                    if (libbcmath.bc_is_zero(n1)) {
                        return libbcmath.bc_new_num(1, scale);
                    }
        
        /* Test for n1 equals n2 (return 1 as n1 nor n2 are zero)
            if (libbcmath.bc_compare(n1, n2, libbcmath.MAX(n1.n_scale, n2.n_scale)) === 0) {
                quot=libbcmath.bc_new_num(1, scale);
                quot.n_value[0] = 1;
                return quot;
            }
            */
        
                    /* Test for divide by 1.  If it is we must truncate. */
                    // todo: check where scale > 0 too.. can't see why not (ie bc_is_zero - add bc_is_one function)
                    if (n2.n_scale === 0) {
                        if (n2.n_len === 1 && n2.n_value[0] === 1) {
                            qval = libbcmath.bc_new_num(n1.n_len, scale); //qval = bc_new_num (n1->n_len, scale);
                            qval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
                            libbcmath.memset(qval.n_value, n1.n_len, 0, scale); //memset (&qval->n_value[n1->n_len],0,scale);
                            libbcmath.memcpy(qval.n_value, 0, n1.n_value, 0, n1.n_len + libbcmath.MIN(n1.n_scale, scale)); //memcpy (qval->n_value, n1->n_value, n1->n_len + MIN(n1->n_scale,scale));
                            // can we return here? not in c src, but can't see why-not.
                            // return qval;
                        }
                    }
        
        /* Set up the divide.  Move the decimal point on n1 by n2's scale.
             Remember, zeros on the end of num2 are wasted effort for dividing. */
                    scale2 = n2.n_scale; //scale2 = n2->n_scale;
                    n2ptr = n2.n_len + scale2 - 1; //n2ptr = (unsigned char *) n2.n_value+n2.n_len+scale2-1;
                    while ((scale2 > 0) && (n2.n_value[n2ptr--] === 0)) {
                        scale2--;
                    }
        
                    len1 = n1.n_len + scale2;
                    scale1 = n1.n_scale - scale2;
                    if (scale1 < scale) {
                        extra = scale - scale1;
                    } else {
                        extra = 0;
                    }
        
                    num1 = libbcmath.safe_emalloc(1, n1.n_len + n1.n_scale, extra + 2); //num1 = (unsigned char *) safe_emalloc (1, n1.n_len+n1.n_scale, extra+2);
                    if (num1 === null) {
                        libbcmath.bc_out_of_memory();
                    }
                    libbcmath.memset(num1, 0, 0, n1.n_len + n1.n_scale + extra + 2); //memset (num1, 0, n1->n_len+n1->n_scale+extra+2);
                    libbcmath.memcpy(num1, 1, n1.n_value, 0, n1.n_len + n1.n_scale); //memcpy (num1+1, n1.n_value, n1.n_len+n1.n_scale);
                    len2 = n2.n_len + scale2; // len2 = n2->n_len + scale2;
                    num2 = libbcmath.safe_emalloc(1, len2, 1); //num2 = (unsigned char *) safe_emalloc (1, len2, 1);
                    if (num2 === null) {
                        libbcmath.bc_out_of_memory();
                    }
                    libbcmath.memcpy(num2, 0, n2.n_value, 0, len2); //memcpy (num2, n2.n_value, len2);
                    num2[len2] = 0; // *(num2+len2) = 0;
                    n2ptr = 0; //n2ptr = num2;
                    while (num2[n2ptr] === 0) { // while (*n2ptr == 0)
                        n2ptr++;
                        len2--;
                    }
        
                    /* Calculate the number of quotient digits. */
                    if (len2 > len1 + scale) {
                        qdigits = scale + 1;
                        zero = true;
                    } else {
                        zero = false;
                        if (len2 > len1) {
                            qdigits = scale + 1; /* One for the zero integer part. */
                        } else {
                            qdigits = len1 - len2 + scale + 1;
                        }
                    }
        
                    /* Allocate and zero the storage for the quotient. */
                    qval = libbcmath.bc_new_num(qdigits - scale, scale); //qval = bc_new_num (qdigits-scale,scale);
                    libbcmath.memset(qval.n_value, 0, 0, qdigits); //memset (qval->n_value, 0, qdigits);
                    /* Allocate storage for the temporary storage mval. */
                    mval = libbcmath.safe_emalloc(1, len2, 1); //mval = (unsigned char *) safe_emalloc (1, len2, 1);
                    if (mval === null) {
                        libbcmath.bc_out_of_memory();
                    }
        
                    /* Now for the full divide algorithm. */
                    if (!zero) { /* Normalize */
                        //norm = libbcmath.cint(10 / (libbcmath.cint(n2.n_value[n2ptr]) + 1)); //norm =  10 / ((int)*n2ptr + 1);
                        norm = Math.floor(10 / (n2.n_value[n2ptr] + 1)); //norm =  10 / ((int)*n2ptr + 1);
                        if (norm != 1) {
                            libbcmath._one_mult(num1, 0, len1 + scale1 + extra + 1, norm, num1, 0); //libbcmath._one_mult(num1, len1+scale1+extra+1, norm, num1);
                            libbcmath._one_mult(n2.n_value, n2ptr, len2, norm, n2.n_value, n2ptr); //libbcmath._one_mult(n2ptr, len2, norm, n2ptr);
                            // @CHECK Is the pointer affected by the call? if so, maybe need to adjust points on return?
                        }
        
                        /* Initialize divide loop. */
                        qdig = 0;
                        if (len2 > len1) {
                            qptr = len2 - len1; //qptr = (unsigned char *) qval.n_value+len2-len1;
                        } else {
                            qptr = 0; //qptr = (unsigned char *) qval.n_value;
                        }
        
                        /* Loop */
                        while (qdig <= len1 + scale - len2) { /* Calculate the quotient digit guess. */
                            if (n2.n_value[n2ptr] == num1[qdig]) {
                                qguess = 9;
                            } else {
                                qguess = Math.floor((num1[qdig] * 10 + num1[qdig + 1]) / n2.n_value[n2ptr]);
                            } /* Test qguess. */
        
                            if (n2.n_value[n2ptr + 1] * qguess > (num1[qdig] * 10 + num1[qdig + 1] - n2.n_value[n2ptr] * qguess) * 10 + num1[qdig + 2]) { //if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2]) {
                                qguess--; /* And again. */
                                if (n2.n_value[n2ptr + 1] * qguess > (num1[qdig] * 10 + num1[qdig + 1] - n2.n_value[n2ptr] * qguess) * 10 + num1[qdig + 2]) { //if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2])
                                    qguess--;
                                }
                            }
        
                            /* Multiply and subtract. */
                            borrow = 0;
                            if (qguess !== 0) {
                                mval[0] = 0; //*mval = 0; // @CHECK is this to fix ptr2 < 0?
                                libbcmath._one_mult(n2.n_value, n2ptr, len2, qguess, mval, 1); //_one_mult (n2ptr, len2, qguess, mval+1); // @CHECK
                                ptr1 = qdig + len2; //(unsigned char *) num1+qdig+len2;
                                ptr2 = len2; //(unsigned char *) mval+len2;
                                // @CHECK: Does a negative pointer return null?
                                //         ptr2 can be < 0 here as ptr1 = len2, thus count < len2+1 will always fail ?
                                for (count = 0; count < len2 + 1; count++) {
                                    if (ptr2 < 0) {
                                        //val = libbcmath.cint(num1[ptr1]) - 0 - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                        val = num1[ptr1] - 0 - borrow; //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                    } else {
                                        //val = libbcmath.cint(num1[ptr1]) - libbcmath.cint(mval[ptr2--]) - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                        val = num1[ptr1] - mval[ptr2--] - borrow; //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                    }
                                    if (val < 0) {
                                        val += 10;
                                        borrow = 1;
                                    } else {
                                        borrow = 0;
                                    }
                                    num1[ptr1--] = val;
                                }
                            }
        
                            /* Test for negative result. */
                            if (borrow == 1) {
                                qguess--;
                                ptr1 = qdig + len2; //(unsigned char *) num1+qdig+len2;
                                ptr2 = len2 - 1; //(unsigned char *) n2ptr+len2-1;
                                carry = 0;
                                for (count = 0; count < len2; count++) {
                                    if (ptr2 < 0) {
                                        //val = libbcmath.cint(num1[ptr1]) + 0 + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                        val = num1[ptr1] + 0 + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                    } else {
                                        //val = libbcmath.cint(num1[ptr1]) + libbcmath.cint(n2.n_value[ptr2--]) + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                        val = num1[ptr1] + n2.n_value[ptr2--] + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                    }
                                    if (val > 9) {
                                        val -= 10;
                                        carry = 1;
                                    } else {
                                        carry = 0;
                                    }
                                    num1[ptr1--] = val; //*ptr1-- = val;
                                }
                                if (carry == 1) {
                                    //num1[ptr1] = libbcmath.cint((num1[ptr1] + 1) % 10);  // *ptr1 = (*ptr1 + 1) % 10; // @CHECK
                                    num1[ptr1] = (num1[ptr1] + 1) % 10; // *ptr1 = (*ptr1 + 1) % 10; // @CHECK
                                }
                            }
        
                            /* We now know the quotient digit. */
                            qval.n_value[qptr++] = qguess; //*qptr++ =  qguess;
                            qdig++;
                        }
                    }
        
                    /* Clean up and return the number. */
                    qval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
                    if (libbcmath.bc_is_zero(qval)) {
                        qval.n_sign = libbcmath.PLUS;
                    }
                    libbcmath._bc_rm_leading_zeros(qval);
        
                    return qval;
        
                    //return 0;    /* Everything is OK. */
                },
        
        
        
                MUL_BASE_DIGITS: 80,
                MUL_SMALL_DIGITS: (this.MUL_BASE_DIGITS / 4),
                //#define MUL_SMALL_DIGITS mul_base_digits/4
        
        /* The multiply routine.  N2 times N1 is put int PROD with the scale of
           the result being MIN(N2 scale+N1 scale, MAX (SCALE, N2 scale, N1 scale)).
           */
                /**
                 * @param n1 bc_num
                 * @param n2 bc_num
                 * @param scale [int] optional
                 */
                bc_multiply: function (n1, n2, scale) {
                    var pval; // bc_num
                    var len1, len2; // int
                    var full_scale, prod_scale; // int
                    // Initialize things.
                    len1 = n1.n_len + n1.n_scale;
                    len2 = n2.n_len + n2.n_scale;
                    full_scale = n1.n_scale + n2.n_scale;
                    prod_scale = libbcmath.MIN(full_scale, libbcmath.MAX(scale, libbcmath.MAX(n1.n_scale, n2.n_scale)));
        
                    //pval = libbcmath.bc_init_num(); // allow pass by ref
                    // Do the multiply
                    pval = libbcmath._bc_rec_mul(n1, len1, n2, len2, full_scale);
        
                    // Assign to prod and clean up the number.
                    pval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
                    //pval.n_value = pval.n_ptr; // @FIX
                    pval.n_len = len2 + len1 + 1 - full_scale;
                    pval.n_scale = prod_scale;
                    libbcmath._bc_rm_leading_zeros(pval);
                    if (libbcmath.bc_is_zero(pval)) {
                        pval.n_sign = libbcmath.PLUS;
                    }
                    //bc_free_num (prod);
                    return pval;
                },
        
                new_sub_num: function (length, scale, value) {
                    var temp = new libbcmath.bc_num();
                    temp.n_sign = libbcmath.PLUS;
                    temp.n_len = length;
                    temp.n_scale = scale;
                    temp.n_value = value;
                    return temp;
                },
        
                _bc_simp_mul: function (n1, n1len, n2, n2len, full_scale) {
                    var prod; // bc_num
                    var n1ptr, n2ptr, pvptr; // char *n1ptr, *n2ptr, *pvptr;
                    var n1end, n2end; //char *n1end, *n2end;        /* To the end of n1 and n2. */
                    var indx, sum, prodlen; //int indx, sum, prodlen;
                    prodlen = n1len + n2len + 1;
        
                    prod = libbcmath.bc_new_num(prodlen, 0);
        
                    n1end = n1len - 1; //(char *) (n1->n_value + n1len - 1);
                    n2end = n2len - 1; //(char *) (n2->n_value + n2len - 1);
                    pvptr = prodlen - 1; //(char *) ((*prod)->n_value + prodlen - 1);
                    sum = 0;
        
                    // Here is the loop...
                    for (indx = 0; indx < prodlen - 1; indx++) {
                        n1ptr = n1end - libbcmath.MAX(0, indx - n2len + 1); //(char *) (n1end - MAX(0, indx-n2len+1));
                        n2ptr = n2end - libbcmath.MIN(indx, n2len - 1); //(char *) (n2end - MIN(indx, n2len-1));
                        while ((n1ptr >= 0) && (n2ptr <= n2end)) {
                            sum += n1.n_value[n1ptr--] * n2.n_value[n2ptr++]; //sum += *n1ptr-- * *n2ptr++;
                        }
                        prod.n_value[pvptr--] = Math.floor(sum % libbcmath.BASE); //*pvptr-- = sum % BASE;
                        sum = Math.floor(sum / libbcmath.BASE); //sum = sum / BASE;
                    }
                    prod.n_value[pvptr] = sum; //*pvptr = sum;
                    return prod;
                },
        
        
        /* A special adder/subtractor for the recursive divide and conquer
                   multiply algorithm.  Note: if sub is called, accum must
                   be larger that what is being subtracted.  Also, accum and val
                   must have n_scale = 0.  (e.g. they must look like integers. *) */
                _bc_shift_addsub: function (accum, val, shift, sub) {
                    var accp, valp; //signed char *accp, *valp;
                    var count, carry; //int  count, carry;
                    count = val.n_len;
                    if (val.n_value[0] === 0) {
                        count--;
                    }
        
                    //assert (accum->n_len+accum->n_scale >= shift+count);
                    if (accum.n_len + accum.n_scale < shift + count) {
                        throw new Error("len + scale < shift + count"); // ?? I think that's what assert does :)
                    }
        
        
                    // Set up pointers and others
                    accp = accum.n_len + accum.n_scale - shift - 1; // (signed char *)(accum->n_value + accum->n_len + accum->n_scale - shift - 1);
                    valp = val.n_len = 1; //(signed char *)(val->n_value + val->n_len - 1);
                    carry = 0;
                    if (sub) {
                        // Subtraction, carry is really borrow.
                        while (count--) {
                            accum.n_value[accp] -= val.n_value[valp--] + carry; //*accp -= *valp-- + carry;
                            if (accum.n_value[accp] < 0) { //if (*accp < 0)
                                carry = 1;
                                accum.n_value[accp--] += libbcmath.BASE; //*accp-- += BASE;
                            } else {
                                carry = 0;
                                accp--;
                            }
                        }
                        while (carry) {
                            accum.n_value[accp] -= carry; //*accp -= carry;
                            if (accum.n_value[accp] < 0) { //if (*accp < 0)
                                accum.n_value[accp--] += libbcmath.BASE; //    *accp-- += BASE;
                            } else {
                                carry = 0;
                            }
                        }
                    } else {
                        // Addition
                        while (count--) {
                            accum.n_value[accp] += val.n_value[valp--] + carry; //*accp += *valp-- + carry;
                            if (accum.n_value[accp] > (libbcmath.BASE - 1)) { //if (*accp > (BASE-1))
                                carry = 1;
                                accum.n_value[accp--] -= libbcmath.BASE; //*accp-- -= BASE;
                            } else {
                                carry = 0;
                                accp--;
                            }
                        }
                        while (carry) {
                            accum.n_value[accp] += carry; //*accp += carry;
                            if (accum.n_value[accp] > (libbcmath.BASE - 1)) { //if (*accp > (BASE-1))
                                accum.n_value[accp--] -= libbcmath.BASE; //*accp-- -= BASE;
                            } else {
                                carry = 0;
                            }
                        }
                    }
                    return true; // accum is the pass-by-reference return
                },
        
        /* Recursive divide and conquer multiply algorithm.
                   Based on
                   Let u = u0 + u1*(b^n)
                   Let v = v0 + v1*(b^n)
                   Then uv = (B^2n+B^n)*u1*v1 + B^n*(u1-u0)*(v0-v1) + (B^n+1)*u0*v0
        
                   B is the base of storage, number of digits in u1,u0 close to equal.
                */
                _bc_rec_mul: function (u, ulen, v, vlen, full_scale) {
                    var prod; // @return
                    var u0, u1, v0, v1; //bc_num
                    var u0len, v0len; //int
                    var m1, m2, m3, d1, d2; //bc_num
                    var n, prodlen, m1zero; // int
                    var d1len, d2len; // int
                    // Base case?
                    if ((ulen + vlen) < libbcmath.MUL_BASE_DIGITS || ulen < libbcmath.MUL_SMALL_DIGITS || vlen < libbcmath.MUL_SMALL_DIGITS) {
                        return libbcmath._bc_simp_mul(u, ulen, v, vlen, full_scale);
                    }
        
                    // Calculate n -- the u and v split point in digits.
                    n = Math.floor((libbcmath.MAX(ulen, vlen) + 1) / 2);
        
                    // Split u and v.
                    if (ulen < n) {
                        u1 = libbcmath.bc_init_num(); //u1 = bc_copy_num (BCG(_zero_));
                        u0 = libbcmath.new_sub_num(ulen, 0, u.n_value);
                    } else {
                        u1 = libbcmath.new_sub_num(ulen - n, 0, u.n_value);
                        u0 = libbcmath.new_sub_num(n, 0, u.n_value + ulen - n);
                    }
                    if (vlen < n) {
                        v1 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
                        v0 = libbcmath.new_sub_num(vlen, 0, v.n_value);
                    } else {
                        v1 = libbcmath.new_sub_num(vlen - n, 0, v.n_value);
                        v0 = libbcmath.new_sub_num(n, 0, v.n_value + vlen - n);
                    }
                    libbcmath._bc_rm_leading_zeros(u1);
                    libbcmath._bc_rm_leading_zeros(u0);
                    u0len = u0.n_len;
                    libbcmath._bc_rm_leading_zeros(v1);
                    libbcmath._bc_rm_leading_zeros(v0);
                    v0len = v0.n_len;
        
                    m1zero = libbcmath.bc_is_zero(u1) || libbcmath.bc_is_zero(v1);
        
                    // Calculate sub results ...
                    d1 = libbcmath.bc_init_num(); // needed?
                    d2 = libbcmath.bc_init_num(); // needed?
                    d1 = libbcmath.bc_sub(u1, u0, 0);
                    d1len = d1.n_len;
        
                    d2 = libbcmath.bc_sub(v0, v1, 0);
                    d2len = d2.n_len;
        
                    // Do recursive multiplies and shifted adds.
                    if (m1zero) {
                        m1 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
                    } else {
                        //m1 = libbcmath.bc_init_num(); //allow pass-by-ref
                        m1 = libbcmath._bc_rec_mul(u1, u1.n_len, v1, v1.n_len, 0);
                    }
                    if (libbcmath.bc_is_zero(d1) || libbcmath.bc_is_zero(d2)) {
                        m2 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
                    } else {
                        //m2 = libbcmath.bc_init_num(); //allow pass-by-ref
                        m2 = libbcmath._bc_rec_mul(d1, d1len, d2, d2len, 0);
                    }
        
                    if (libbcmath.bc_is_zero(u0) || libbcmath.bc_is_zero(v0)) {
                        m3 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
                    } else {
                        //m3 = libbcmath.bc_init_num(); //allow pass-by-ref
                        m3 = libbcmath._bc_rec_mul(u0, u0.n_len, v0, v0.n_len, 0);
                    }
        
                    // Initialize product
                    prodlen = ulen + vlen + 1;
                    prod = libbcmath.bc_new_num(prodlen, 0);
        
                    if (!m1zero) {
                        libbcmath._bc_shift_addsub(prod, m1, 2 * n, 0);
                        libbcmath._bc_shift_addsub(prod, m1, n, 0);
                    }
                    libbcmath._bc_shift_addsub(prod, m3, n, 0);
                    libbcmath._bc_shift_addsub(prod, m3, 0, 0);
                    libbcmath._bc_shift_addsub(prod, m2, n, d1.n_sign != d2.n_sign);
        
                    return prod;
                    // Now clean up!
                    //bc_free_num (&u1);
                    //bc_free_num (&u0);
                    //bc_free_num (&v1);
                    //bc_free_num (&m1);
                    //bc_free_num (&v0);
                    //bc_free_num (&m2);
                    //bc_free_num (&m3);
                    //bc_free_num (&d1);
                    //bc_free_num (&d2);
                },
        
        
                /**
                 * 
                 * @param {bc_num} n1
                 * @param {bc_num} n2
                 * @param {boolean} use_sign
                 * @param {boolean} ignore_last
                 * @return -1, 0, 1 (see bc_compare)
                 */
                _bc_do_compare: function (n1, n2, use_sign, ignore_last) {
                    var n1ptr, n2ptr; // int
                    var count; // int
                    /* First, compare signs. */
                    if (use_sign && (n1.n_sign != n2.n_sign)) {
                        if (n1.n_sign == libbcmath.PLUS) {
                            return (1); /* Positive N1 > Negative N2 */
                        } else {
                            return (-1); /* Negative N1 < Positive N1 */
                        }
                    }
        
                    /* Now compare the magnitude. */
                    if (n1.n_len != n2.n_len) {
                        if (n1.n_len > n2.n_len) { /* Magnitude of n1 > n2. */
                            if (!use_sign || (n1.n_sign == libbcmath.PLUS)) {
                                return (1);
                            } else {
                                return (-1);
                            }
                        } else { /* Magnitude of n1 < n2. */
                            if (!use_sign || (n1.n_sign == libbcmath.PLUS)) {
                                return (-1);
                            } else {
                                return (1);
                            }
                        }
                    }
        
        /* If we get here, they have the same number of integer digits.
               check the integer part and the equal length part of the fraction. */
                    count = n1.n_len + Math.min(n1.n_scale, n2.n_scale);
                    n1ptr = 0;
                    n2ptr = 0;
        
                    while ((count > 0) && (n1.n_value[n1ptr] == n2.n_value[n2ptr])) {
                        n1ptr++;
                        n2ptr++;
                        count--;
                    }
        
                    if (ignore_last && (count == 1) && (n1.n_scale == n2.n_scale)) {
                        return (0);
                    }
        
                    if (count !== 0) {
                        if (n1.n_value[n1ptr] > n2.n_value[n2ptr]) { /* Magnitude of n1 > n2. */
                            if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                return (1);
                            } else {
                                return (-1);
                            }
                        } else { /* Magnitude of n1 < n2. */
                            if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                return (-1);
                            } else {
                                return (1);
                            }
                        }
                    }
        
                    /* They are equal up to the last part of the equal part of the fraction. */
                    if (n1.n_scale != n2.n_scale) {
                        if (n1.n_scale > n2.n_scale) {
                            for (count = (n1.n_scale - n2.n_scale); count > 0; count--) {
                                if (n1.n_value[n1ptr++] !== 0) { /* Magnitude of n1 > n2. */
                                    if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                        return (1);
                                    } else {
                                        return (-1);
                                    }
                                }
                            }
                        } else {
                            for (count = (n2.n_scale - n1.n_scale); count > 0; count--) {
                                if (n2.n_value[n2ptr++] !== 0) { /* Magnitude of n1 < n2. */
                                    if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                        return (-1);
                                    } else {
                                        return (1);
                                    }
                                }
                            }
                        }
                    }
        
                    /* They must be equal! */
                    return (0);
                },
        
        
        
        /* Here is the full subtract routine that takes care of negative numbers.
           N2 is subtracted from N1 and the result placed in RESULT.  SCALE_MIN
           is the minimum scale for the result. */
                bc_sub: function (n1, n2, scale_min) {
                    var diff; // bc_num
                    var cmp_res, res_scale; //int
                    if (n1.n_sign != n2.n_sign) {
                        diff = libbcmath._bc_do_add(n1, n2, scale_min);
                        diff.n_sign = n1.n_sign;
                    } else { /* subtraction must be done. */
                        /* Compare magnitudes. */
                        cmp_res = libbcmath._bc_do_compare(n1, n2, false, false);
                        switch (cmp_res) {
                        case -1:
                            /* n1 is less than n2, subtract n1 from n2. */
                            diff = libbcmath._bc_do_sub(n2, n1, scale_min);
                            diff.n_sign = (n2.n_sign == libbcmath.PLUS ? libbcmath.MINUS : libbcmath.PLUS);
                            break;
                        case 0:
                            /* They are equal! return zero! */
                            res_scale = libbcmath.MAX(scale_min, libbcmath.MAX(n1.n_scale, n2.n_scale));
                            diff = libbcmath.bc_new_num(1, res_scale);
                            libbcmath.memset(diff.n_value, 0, 0, res_scale + 1);
                            break;
                        case 1:
                            /* n2 is less than n1, subtract n2 from n1. */
                            diff = libbcmath._bc_do_sub(n1, n2, scale_min);
                            diff.n_sign = n1.n_sign;
                            break;
                        }
                    }
        
                    /* Clean up and return. */
                    //bc_free_num (result);
                    //*result = diff;
                    return diff;
                },
        
        
                _bc_do_add: function (n1, n2, scale_min) {
                    var sum; // bc_num
                    var sum_scale, sum_digits; // int
                    var n1ptr, n2ptr, sumptr; // int
                    var carry, n1bytes, n2bytes; // int
                    var tmp; // int
        
                    // Prepare sum.
                    sum_scale = libbcmath.MAX(n1.n_scale, n2.n_scale);
                    sum_digits = libbcmath.MAX(n1.n_len, n2.n_len) + 1;
                    sum = libbcmath.bc_new_num(sum_digits, libbcmath.MAX(sum_scale, scale_min));
        
        
        /* Not needed?
                if (scale_min > sum_scale) {
                    sumptr = (char *) (sum->n_value + sum_scale + sum_digits);
                    for (count = scale_min - sum_scale; count > 0; count--) {
                        *sumptr++ = 0;
                    }
                }
                */
        
                    // Start with the fraction part.  Initialize the pointers.
                    n1bytes = n1.n_scale;
                    n2bytes = n2.n_scale;
                    n1ptr = (n1.n_len + n1bytes - 1);
                    n2ptr = (n2.n_len + n2bytes - 1);
                    sumptr = (sum_scale + sum_digits - 1);
        
                    // Add the fraction part.  First copy the longer fraction (ie when adding 1.2345 to 1 we know .2345 is correct already) .
                    if (n1bytes != n2bytes) {
                        if (n1bytes > n2bytes) {
                            // n1 has more dp then n2
                            while (n1bytes > n2bytes) {
                                sum.n_value[sumptr--] = n1.n_value[n1ptr--];
                                // *sumptr-- = *n1ptr--;
                                n1bytes--;
                            }
                        } else {
                            // n2 has more dp then n1
                            while (n2bytes > n1bytes) {
                                sum.n_value[sumptr--] = n2.n_value[n2ptr--];
                                // *sumptr-- = *n2ptr--;
                                n2bytes--;
                            }
                        }
                    }
        
                    // Now add the remaining fraction part and equal size integer parts.
                    n1bytes += n1.n_len;
                    n2bytes += n2.n_len;
                    carry = 0;
                    while ((n1bytes > 0) && (n2bytes > 0)) {
        
                        // add the two numbers together
                        tmp = n1.n_value[n1ptr--] + n2.n_value[n2ptr--] + carry;
                        // *sumptr = *n1ptr-- + *n2ptr-- + carry;
                        // check if they are >= 10 (impossible to be more then 18)
                        if (tmp >= libbcmath.BASE) {
                            carry = 1;
                            tmp -= libbcmath.BASE; // yep, subtract 10, add a carry
                        } else {
                            carry = 0;
                        }
                        sum.n_value[sumptr] = tmp;
                        sumptr--;
                        n1bytes--;
                        n2bytes--;
                    }
        
                    // Now add carry the [rest of the] longer integer part.
                    if (n1bytes === 0) {
                        // n2 is a bigger number then n1
                        while (n2bytes-- > 0) {
                            tmp = n2.n_value[n2ptr--] + carry;
                            // *sumptr = *n2ptr-- + carry;
                            if (tmp >= libbcmath.BASE) {
                                carry = 1;
                                tmp -= libbcmath.BASE;
                            } else {
                                carry = 0;
                            }
                            sum.n_value[sumptr--] = tmp;
                        }
                    } else {
                        // n1 is bigger then n2..
                        while (n1bytes-- > 0) {
                            tmp = n1.n_value[n1ptr--] + carry;
                            // *sumptr = *n1ptr-- + carry;
                            if (tmp >= libbcmath.BASE) {
                                carry = 1;
                                tmp -= libbcmath.BASE;
                            } else {
                                carry = 0;
                            }
                            sum.n_value[sumptr--] = tmp;
                        }
                    }
        
                    // Set final carry.
                    if (carry == 1) {
                        sum.n_value[sumptr] += 1;
                        // *sumptr += 1;
                    }
        
                    // Adjust sum and return.
                    libbcmath._bc_rm_leading_zeros(sum);
                    return sum;
                },
        
                /**
                 * Perform a subtraction
                 *
                 // Perform subtraction: N2 is subtracted from N1 and the value is
                 //  returned.  The signs of N1 and N2 are ignored.  Also, N1 is
                 //  assumed to be larger than N2.  SCALE_MIN is the minimum scale
                 //  of the result.
                 *
                 * Basic school maths says to subtract 2 numbers..
                 * 1. make them the same length, the decimal places, and the integer part
                 * 2. start from the right and subtract the two numbers from each other
                 * 3. if the sum of the 2 numbers < 0, carry -1 to the next set and add 10 (ie 18 > carry 1 becomes 8). thus 0.9 + 0.9 = 1.8
                 *
                 * @param {bc_num} n1
                 * @param {bc_num} n2
                 * @param {int} scale_min
                 * @return bc_num
                 */
                _bc_do_sub: function (n1, n2, scale_min) {
                    var diff; //bc_num
                    var diff_scale, diff_len; // int
                    var min_scale, min_len; // int
                    var n1ptr, n2ptr, diffptr; // int
                    var borrow, count, val; // int
                    // Allocate temporary storage.
                    diff_len = libbcmath.MAX(n1.n_len, n2.n_len);
                    diff_scale = libbcmath.MAX(n1.n_scale, n2.n_scale);
                    min_len = libbcmath.MIN(n1.n_len, n2.n_len);
                    min_scale = libbcmath.MIN(n1.n_scale, n2.n_scale);
                    diff = libbcmath.bc_new_num(diff_len, libbcmath.MAX(diff_scale, scale_min));
        
        /* Not needed?
                // Zero extra digits made by scale_min.
                if (scale_min > diff_scale) {
                    diffptr = (char *) (diff->n_value + diff_len + diff_scale);
                    for (count = scale_min - diff_scale; count > 0; count--) {
                        *diffptr++ = 0;
                    }
                }
                */
        
                    // Initialize the subtract.
                    n1ptr = (n1.n_len + n1.n_scale - 1);
                    n2ptr = (n2.n_len + n2.n_scale - 1);
                    diffptr = (diff_len + diff_scale - 1);
        
                    // Subtract the numbers.
                    borrow = 0;
        
                    // Take care of the longer scaled number.
                    if (n1.n_scale != min_scale) {
                        // n1 has the longer scale
                        for (count = n1.n_scale - min_scale; count > 0; count--) {
                            diff.n_value[diffptr--] = n1.n_value[n1ptr--];
                            // *diffptr-- = *n1ptr--;
                        }
                    } else {
                        // n2 has the longer scale
                        for (count = n2.n_scale - min_scale; count > 0; count--) {
                            val = 0 - n2.n_value[n2ptr--] - borrow;
                            //val = - *n2ptr-- - borrow;
                            if (val < 0) {
                                val += libbcmath.BASE;
                                borrow = 1;
                            } else {
                                borrow = 0;
                                diff.n_value[diffptr--] = val;
                                //*diffptr-- = val;
                            }
                        }
                    }
        
                    // Now do the equal length scale and integer parts.
                    for (count = 0; count < min_len + min_scale; count++) {
                        val = n1.n_value[n1ptr--] - n2.n_value[n2ptr--] - borrow;
                        //val = *n1ptr-- - *n2ptr-- - borrow;
                        if (val < 0) {
                            val += libbcmath.BASE;
                            borrow = 1;
                        } else {
                            borrow = 0;
                        }
                        diff.n_value[diffptr--] = val;
                        //*diffptr-- = val;
                    }
        
                    // If n1 has more digits then n2, we now do that subtract.
                    if (diff_len != min_len) {
                        for (count = diff_len - min_len; count > 0; count--) {
                            val = n1.n_value[n1ptr--] - borrow;
                            // val = *n1ptr-- - borrow;
                            if (val < 0) {
                                val += libbcmath.BASE;
                                borrow = 1;
                            } else {
                                borrow = 0;
                            }
                            diff.n_value[diffptr--] = val;
                        }
                    }
        
                    // Clean up and return.
                    libbcmath._bc_rm_leading_zeros(diff);
                    return diff;
                },
        
                /**
                 * 
                 * @param {int} length
                 * @param {int} scale
                 * @return bc_num
                 */
                bc_new_num: function (length, scale) {
                    var temp; // bc_num
                    temp = new libbcmath.bc_num();
                    temp.n_sign = libbcmath.PLUS;
                    temp.n_len = length;
                    temp.n_scale = scale;
                    temp.n_value = libbcmath.safe_emalloc(1, length + scale, 0);
                    libbcmath.memset(temp.n_value, 0, 0, length + scale);
                    return temp;
                },
        
                safe_emalloc: function (size, len, extra) {
                    return Array((size * len) + extra);
                },
        
                /**
                 * Create a new number
                 */
                bc_init_num: function () {
                    return new libbcmath.bc_new_num(1, 0);
        
                },
        
                _bc_rm_leading_zeros: function (num) { /* We can move n_value to point to the first non zero digit! */
                    while ((num.n_value[0] === 0) && (num.n_len > 1)) {
                        num.n_value.shift();
                        num.n_len--;
                    }
                },
        
                /**
                 * Convert to bc_num detecting scale
                 */
                php_str2num: function (str) {
                    var p;
                    p = str.indexOf('.');
                    if (p == -1) {
                        return libbcmath.bc_str2num(str, 0);
                    } else {
                        return libbcmath.bc_str2num(str, (str.length - p));
                    }
        
                },
        
                CH_VAL: function (c) {
                    return c - '0'; //??
                },
        
                BCD_CHAR: function (d) {
                    return d + '0'; // ??
                },
        
                isdigit: function (c) {
                    return (isNaN(parseInt(c, 10)) ? false : true);
                },
        
                bc_str2num: function (str_in, scale) {
                    var str, num, ptr, digits, strscale, zero_int, nptr;
                    // remove any non-expected characters
                    /* Check for valid number and count digits. */
        
                    str = str_in.split(''); // convert to array
                    ptr = 0; // str
                    digits = 0;
                    strscale = 0;
                    zero_int = false;
                    if ((str[ptr] === '+') || (str[ptr] === '-')) {
                        ptr++; /* Sign */
                    }
                    while (str[ptr] === '0') {
                        ptr++; /* Skip leading zeros. */
                    }
                    //while (libbcmath.isdigit(str[ptr])) {
                    while ((str[ptr]) % 1 === 0) { //libbcmath.isdigit(str[ptr])) {
                        ptr++;
                        digits++; /* digits */
                    }
        
                    if (str[ptr] === '.') {
                        ptr++; /* decimal point */
                    }
                    //while (libbcmath.isdigit(str[ptr])) {
                    while ((str[ptr]) % 1 === 0) { //libbcmath.isdigit(str[ptr])) {
                        ptr++;
                        strscale++; /* digits */
                    }
        
                    if ((str[ptr]) || (digits + strscale === 0)) {
                        // invalid number, return 0
                        return libbcmath.bc_init_num();
                        //*num = bc_copy_num (BCG(_zero_));
                    }
        
                    /* Adjust numbers and allocate storage and initialize fields. */
                    strscale = libbcmath.MIN(strscale, scale);
                    if (digits === 0) {
                        zero_int = true;
                        digits = 1;
                    }
        
                    num = libbcmath.bc_new_num(digits, strscale);
        
                    /* Build the whole number. */
                    ptr = 0; // str
                    if (str[ptr] === '-') {
                        num.n_sign = libbcmath.MINUS;
                        //(*num)->n_sign = MINUS;
                        ptr++;
                    } else {
                        num.n_sign = libbcmath.PLUS;
                        //(*num)->n_sign = PLUS;
                        if (str[ptr] === '+') {
                            ptr++;
                        }
                    }
                    while (str[ptr] === '0') {
                        ptr++; /* Skip leading zeros. */
                    }
        
                    nptr = 0; //(*num)->n_value;
                    if (zero_int) {
                        num.n_value[nptr++] = 0;
                        digits = 0;
                    }
                    for (; digits > 0; digits--) {
                        num.n_value[nptr++] = libbcmath.CH_VAL(str[ptr++]);
                        //*nptr++ = CH_VAL(*ptr++);
                    }
        
                    /* Build the fractional part. */
                    if (strscale > 0) {
                        ptr++; /* skip the decimal point! */
                        for (; strscale > 0; strscale--) {
                            num.n_value[nptr++] = libbcmath.CH_VAL(str[ptr++]);
                        }
                    }
        
                    return num;
                },
        
                cint: function (v) {
                    if (typeof(v) == 'undefined') {
                        v = 0;
                    }
                    var x = parseInt(v, 10);
                    if (isNaN(x)) {
                        x = 0;
                    }
                    return x;
                },
        
                /**
                 * Basic min function
                 * @param {int} a
                 * @param {int} b
                 */
                MIN: function (a, b) {
                    return ((a > b) ? b : a);
                },
        
                /**
                 * Basic max function
                 * @param {int} a
                 * @param {int} b
                 */
                MAX: function (a, b) {
                    return ((a > b) ? a : b);
                },
        
                /**
                 * Basic odd function
                 * @param {int} a
                 */
                ODD: function (a) {
                    return (a & 1);
                },
        
                /**
                 * replicate c function
                 * @param {array} r     return (by reference)
                 * @param {int} ptr
                 * @param {string} chr    char to fill
                 * @param {int} len       length to fill
                 */
                memset: function (r, ptr, chr, len) {
                    var i;
                    for (i = 0; i < len; i++) {
                        r[ptr + i] = chr;
                    }
                },
        
                /**
                 * Replacement c function
                 * Obviously can't work like c does, so we've added an "offset" param so you could do memcpy(dest+1, src, len) as memcpy(dest, 1, src, len)
                 * Also only works on arrays
                 */
                memcpy: function (dest, ptr, src, srcptr, len) {
                    var i;
                    for (i = 0; i < len; i++) {
                        dest[ptr + i] = src[srcptr + i];
                    }
                    return true;
                },
        
        
                /**
                 * Determine if the number specified is zero or not
                 * @param {bc_num} num    number to check
                 * @return boolean      true when zero, false when not zero.
                 */
                bc_is_zero: function (num) {
                    var count; // int
                    var nptr; // int
                    /* Quick check. */
                    //if (num == BCG(_zero_)) return TRUE;
                    /* Initialize */
                    count = num.n_len + num.n_scale;
                    nptr = 0; //num->n_value;
                    /* The check */
                    while ((count > 0) && (num.n_value[nptr++] === 0)) {
                        count--;
                    }
        
                    if (count !== 0) {
                        return false;
                    } else {
                        return true;
                    }
                },
        
                bc_out_of_memory: function () {
                    throw new Error("(BC) Out of memory");
                }
            };
            return libbcmath;
        }
        ,
        abs: function (mixed_number) {
            // Return the absolute value of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/abs
            // +   original by: Waldo Malqui Silva
            // +   improved by: Karol Kowalski
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // *     example 1: $P.abs(4.2);
            // *     returns 1: 4.2
            // *     example 2: $P.abs(-4.2);
            // *     returns 2: 4.2
            // *     example 3: $P.abs(-5);
            // *     returns 3: 5
            // *     example 4: $P.abs('_argos');
            // *     returns 4: 0
            return Math.abs(mixed_number) || 0;
        }
        ,
        acos: function (arg) {
            // Return the arc cosine of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/acos
            // +   original by: Onno Marsman
            // *     example 1: $P.acos(0.3);
            // *     returns 1: 1.2661036727794992
            return Math.acos(arg);
        }
        ,
        acosh: function (arg) {
            // Returns the inverse hyperbolic cosine of the number, i.e. the value whose hyperbolic cosine is number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/acosh
            // +   original by: Onno Marsman
            // *     example 1: $P.acosh(8723321.4);
            // *     returns 1: 16.674657798418625
            return Math.log(arg + Math.sqrt(arg * arg - 1));
        }
        ,
        addcslashes: function (str, charlist) {
            // Escapes all chars mentioned in charlist with backslash. It creates octal representations if asked to backslash characters with 8th bit set or with ASCII<32 (except '\n', '\r', '\t' etc...)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/addcslashes
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %  note 1: We show double backslashes in the return value example code below because a JavaScript string will not
            // %  note 1: render them as backslashes otherwise
            // *     example 1: $P.addcslashes('foo[ ]', 'A..z'); // Escape all ASCII within capital A to lower z range, including square brackets
            // *     returns 1: "\\f\\o\\o\\[ \\]"
            // *     example 2: $P.addcslashes("zoo['.']", 'z..A'); // Only escape z, period, and A here since not a lower-to-higher range
            // *     returns 2: "\\zoo['\\.']"
            // *     example 3: $P.addcslashes("@a\u0000\u0010\u00A9", "\0..\37!@\177..\377") == '\\@a\\000\\020\\302\\251'); // Escape as octals those specified and less than 32 (0x20) or greater than 126 (0x7E), but not otherwise
            // *     returns 3: true
            // *     example 4: $P.addcslashes("\u0020\u007E", "\40..\175") == '\\ ~'); // Those between 32 (0x20 or 040) and 126 (0x7E or 0176) decimal value will be backslashed if specified (not octalized)
            // *     returns 4: true
            // *     example 5: $P.addcslashes("\r\u0007\n", '\0..\37'); // Recognize C escape sequences if specified
            // *     returns 5: "\\r\\a\\n"
            // *     example 6: $P.addcslashes("\r\u0007\n", '\0'); // Do not recognize C escape sequences if not specified
            // *     returns 7: "\r\u0007\n"
            var target = '',
                chrs = [],
                i = 0,
                j = 0,
                c = '',
                next = '',
                rangeBegin = '',
                rangeEnd = '',
                chr = '',
                begin = 0,
                end = 0,
                octalLength = 0,
                postOctalPos = 0,
                cca = 0,
                escHexGrp = [],
                encoded = '',
                percentHex = /%([\dA-Fa-f]+)/g;
            var _pad = function (n, c) {
                if ((n = n + '').length < c) {
                    return new Array(++c - n.length).join('0') + n;
                }
                return n;
            };
        
            for (i = 0; i < charlist.length; i++) {
                c = charlist.charAt(i);
                next = charlist.charAt(i + 1);
                if (c === '\\' && next && (/\d/).test(next)) { // Octal
                    rangeBegin = charlist.slice(i + 1).match(/^\d+/)[0];
                    octalLength = rangeBegin.length;
                    postOctalPos = i + octalLength + 1;
                    if (charlist.charAt(postOctalPos) + charlist.charAt(postOctalPos + 1) === '..') { // Octal begins range
                        begin = rangeBegin.charCodeAt(0);
                        if ((/\\\d/).test(charlist.charAt(postOctalPos + 2) + charlist.charAt(postOctalPos + 3))) { // Range ends with octal
                            rangeEnd = charlist.slice(postOctalPos + 3).match(/^\d+/)[0];
                            i += 1; // Skip range end backslash
                        } else if (charlist.charAt(postOctalPos + 2)) { // Range ends with character
                            rangeEnd = charlist.charAt(postOctalPos + 2);
                        } else {
                            throw 'Range with no end point';
                        }
                        end = rangeEnd.charCodeAt(0);
                        if (end > begin) { // Treat as a range
                            for (j = begin; j <= end; j++) {
                                chrs.push(String.fromCharCode(j));
                            }
                        } else { // Supposed to treat period, begin and end as individual characters only, not a range
                            chrs.push('.', rangeBegin, rangeEnd);
                        }
                        i += rangeEnd.length + 2; // Skip dots and range end (already skipped range end backslash if present)
                    } else { // Octal is by itself
                        chr = String.fromCharCode(parseInt(rangeBegin, 8));
                        chrs.push(chr);
                    }
                    i += octalLength; // Skip range begin
                } else if (next + charlist.charAt(i + 2) === '..') { // Character begins range
                    rangeBegin = c;
                    begin = rangeBegin.charCodeAt(0);
                    if ((/\\\d/).test(charlist.charAt(i + 3) + charlist.charAt(i + 4))) { // Range ends with octal
                        rangeEnd = charlist.slice(i + 4).match(/^\d+/)[0];
                        i += 1; // Skip range end backslash
                    } else if (charlist.charAt(i + 3)) { // Range ends with character
                        rangeEnd = charlist.charAt(i + 3);
                    } else {
                        throw 'Range with no end point';
                    }
                    end = rangeEnd.charCodeAt(0);
                    if (end > begin) { // Treat as a range
                        for (j = begin; j <= end; j++) {
                            chrs.push(String.fromCharCode(j));
                        }
                    } else { // Supposed to treat period, begin and end as individual characters only, not a range
                        chrs.push('.', rangeBegin, rangeEnd);
                    }
                    i += rangeEnd.length + 2; // Skip dots and range end (already skipped range end backslash if present)
                } else { // Character is by itself
                    chrs.push(c);
                }
            }
        
            for (i = 0; i < str.length; i++) {
                c = str.charAt(i);
                if (chrs.indexOf(c) !== -1) {
                    target += '\\';
                    cca = c.charCodeAt(0);
                    if (cca < 32 || cca > 126) { // Needs special escaping
                        switch (c) {
                        case '\n':
                            target += 'n';
                            break;
                        case '\t':
                            target += 't';
                            break;
                        case '\u000D':
                            target += 'r';
                            break;
                        case '\u0007':
                            target += 'a';
                            break;
                        case '\v':
                            target += 'v';
                            break;
                        case '\b':
                            target += 'b';
                            break;
                        case '\f':
                            target += 'f';
                            break;
                        default:
                            //target += _pad(cca.toString(8), 3);break; // Sufficient for UTF-16
                            encoded = encodeURIComponent(c);
        
                            // 3-length-padded UTF-8 octets
                            if ((escHexGrp = percentHex.exec(encoded)) !== null) {
                                target += _pad(parseInt(escHexGrp[1], 16).toString(8), 3); // already added a slash above
                            }
                            while ((escHexGrp = percentHex.exec(encoded)) !== null) {
                                target += '\\' + _pad(parseInt(escHexGrp[1], 16).toString(8), 3);
                            }
                            break;
                        }
                    } else { // Perform regular backslashed escaping
                        target += c;
                    }
                } else { // Just add the character unescaped
                    target += c;
                }
            }
            return target;
        }
        ,
        addslashes: function (str) {
            // Escapes single quote, double quotes and backslash characters in a string with backslashes  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/addslashes
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   improved by: marrtins
            // +   improved by: Nate
            // +   improved by: Onno Marsman
            // +   input by: Denny Wardhana
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Oskar Larsson Högfeldt (http://oskar-lh.name/)
            // *     example 1: $P.addslashes("kevin's birthday");
            // *     returns 1: 'kevin\'s birthday'
            return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
        }
        ,
        array: function () {
            // !No description available for array. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array
            // +   original by: d3x
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array('Kevin', 'van', 'Zonneveld');
            // *     returns 1: ['Kevin', 'van', 'Zonneveld']
            // *     example 2: $P.ini_set('phpjs.return_phpjs_arrays', 'on');
            // *     example 2: $P.var arr = array({0:2}, {a:41}, {2:3}).change_key_case('CASE_UPPER').keys();
            // *     returns 1: [0,'A',2]
            
            var mainArgs = arguments, p = this.php_js = this.php_js || {},
                _indexOf = function (value, from, strict) {
                    for (var i = (from || 0), nonstrict = !strict, length=this.length; i < length; i++) {
                        if (this[i] === value || (nonstrict && this[i] == value)) {
                            return i;
                        }
                    }
                    return -1;
                };
            // BEGIN REDUNDANT
            if (!p.Relator) {
                p.Relator = function () {// Used this functional class for giving privacy to the class we are creating
                    // Code adapted from http://www.devpro.it/code/192.html
                    // Relator explained at http://webreflection.blogspot.com/2008/07/javascript-relator-object-aka.html
                    // Its use as privacy technique described at http://webreflection.blogspot.com/2008/10/new-relator-object-plus-unshared.html
                    // 1) At top of closure, put: var __ = Relator.$();
                    // 2) In constructor, put: var _ = __.constructor(this);
                    // 3) At top of each prototype method, put: var _ = __.method(this);
                    // 4) Use like:  _.privateVar = 5;
                    function _indexOf (value) {
                        for (var i = 0, length=this.length; i < length; i++) {
                            if (this[i] === value) {
                                return i;
                            }
                        }
                        return -1;
                    }
                    function Relator () {
                        var Stack = [], Array = [];
                        if (!Stack.indexOf) {
                            Stack.indexOf = _indexOf;
                        }
                        return {
                            // create a new relator
                            $ : function () {
                                return Relator();
                            },
                            constructor : function (that) {
                                var i = Stack.indexOf(that);
                                ~i ? Array[i] : Array[Stack.push(that) - 1] = {};
                                this.method(that).that = that;
                                return this.method(that);
                            },
                            method : function (that) {
                                return Array[Stack.indexOf(that)];
                            }
                        };
                    }
                    return Relator();
                }();
            }
            // END REDUNDANT
            
            if (p && p.ini && p.ini['phpjs.return_phpjs_arrays'].local_value.toLowerCase() === 'on') {    
                if (!p.PHPJS_Array) {
                    // We keep this Relator outside the class in case adding prototype methods below
                    // Prototype methods added elsewhere can also use this ArrayRelator to share these "pseudo-global mostly-private" variables
                    var __ = p.ArrayRelator = p.ArrayRelator || p.Relator.$();
                    // We could instead allow arguments of {key:XX, value:YY} but even more cumbersome to write
                    p.PHPJS_Array = function PHPJS_Array () {
                        var _ = __.constructor(this), args = arguments;
                        args = (args.length === 1 && args[0] && typeof args[0] === 'object' && 
                                args[0].length && !args[0].propertyIsEnumerable('length')) ? args[0] : args; // If first and only arg is an array, use that (Don't depend on this)
                        if (!_.objectChain) {
                            _.objectChain = args;
                            _.object = {};
                            _.keys = [];
                            _.values = [];
                        }
                        for (var i=0, argl = args.length; i < argl; i++) {
                            for (var p in args[i]) {
                                // Allow for access by key; use of private members to store sequence allows these to be iterated via for...in (but for read-only use, with hasOwnProperty or function filtering to avoid prototype methods, and per ES, potentially out of order)
                                this[p] = _.object[p] = args[i][p];
                                // Allow for easier access by prototype methods
                                _.keys[_.keys.length] = p;
                                _.values[_.values.length] = args[i][p];
                                break;
                            }
                        }
                    };
                    var e = p.PHPJS_Array.prototype, that = this;
                    e.change_key_case = function (cs) {var _ = __.method(this);
                        var case_fn = (!cs || cs === 'CASE_LOWER') ? 'toLowerCase' : 'toUpperCase';
                        for (var i=0, kl = _.keys.length; i < kl; i++) {
                            var oldkey = _.keys[i],
                                newkey = _.keys[i] = _.keys[i][case_fn]();
                            this[newkey] = _.object[newkey] = _.objectChain[i][newkey] = _.values[i]; // Fix: should we make a deep copy?
                            this[oldkey] = _.object[oldkey] = _.objectChain[i][oldkey] = null; // Break reference before deleting
                            delete this[oldkey];
                            delete _.object[oldkey];
                            delete _.objectChain[i][oldkey];
                        }
                        return this;
                    };
                    // Here we'll return actual arrays since most logical and practical for these functions to do this
                    e.keys = function (search_value, argStrict) {var _ = __.method(this);
                        var pos, search = typeof search_value !== 'undefined',
                            tmp_arr = [],
                            strict = !!argStrict;
                        if (!search) {
                            return _.keys;
                        }
                        while ((pos = _indexOf(_.values, pos, strict)) !== -1) {
                            tmp_arr[tmp_arr.length] = _.keys[pos];
                        }
                        return tmp_arr;
                    };
                    e.values = function () {var _ = __.method(this);
                        return _.values;
                    };
                    // Return non-object, non-array values, since most sensible
                    e.search = function (needle, argStrict) {var _ = __.method(this);
                        var strict = !!argStrict, haystack = _.values, i, vl, val;
                        if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
                            if (!strict) { // Let's consider case sensitive searches as strict
                                var flags = 'i' + (needle.global ? 'g' : '') +
                                            (needle.multiline ? 'm' : '') +
                                            (needle.sticky ? 'y' : ''); // sticky is FF only
                                needle = new RegExp(needle.source, flags);
                            }
                            for (i=0, vl = haystack.length; i < vl; i++) {
                                val = haystack[i];
                                if (needle.test(val)) {
                                    return _.keys[i];
                                }
                            }
                            return false;
                        }
                        for (i=0, vl = haystack.length; i < vl; i++) {
                            val = haystack[i];
                            if ((strict && val === needle) || (!strict && val == needle)) {
                                return _.keys[i];
                            }
                        }
                        return false;
                    };
                    // Experimental functions
                    e.foreach = function (handler) {var _ = __.method(this);
                        for (var i = 0, kl = _.keys.length; i < kl; i++) {
                            if (handler.length === 1) {
                                handler(_.values[i]); // only pass the value
                            }
                            else {
                                handler(_.keys[i], _.values[i]);
                            }                    
                        }
                        return this;
                    };
                    e.list = function () {var _ = __.method(this);
                        for (var i = 0, argl = arguments.length; i < argl; i++) {
                            var key = _.keys[i];
                            if (key && key.length === parseInt(key).toString().length && // Key represents an int
                                parseInt(key) < argl) { // Key does not exceed arguments
                                that.window[arguments[key]] = _.values[key];
                            }
                        }
                        return this;
                    };
                    // Parallel functionality and naming of built-in JavaScript array methods
                    e.forEach = function (handler) {var _ = __.method(this);
                        for (var i = 0, kl = _.keys.length; i < kl; i++) {
                            handler(_.values[i], _.keys[i], this);
                        }
                        return this;
                    };
                    // Our own custom convenience functions
                    e.$object = function () {var _ = __.method(this);
                        return _.object;
                    };
                    e.$objectChain = function () {var _ = __.method(this);
                        return _.objectChain;
                    };
                }
                function PHPJS_Array() {}
                PHPJS_Array.prototype = p.PHPJS_Array.prototype;
                var arrInst = new PHPJS_Array();
                p.PHPJS_Array.apply(arrInst, mainArgs);
                return arrInst;
            }
            return Array.prototype.slice.call(mainArgs);
        }
        ,
        array_change_key_case: function (array, cs) {
            // Retuns an array with all string keys lowercased [or uppercased]  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_change_key_case
            // +   original by: Ates Goral (http://magnetiq.com)
            // +   improved by: marrtins
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_change_key_case(42);
            // *     returns 1: false
            // *     example 2: $P.array_change_key_case([ 3, 5 ]);
            // *     returns 2: {0: 3, 1: 5}
            // *     example 3: $P.array_change_key_case({ FuBaR: 42 });
            // *     returns 3: {"fubar": 42}
            // *     example 4: $P.array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER');
            // *     returns 4: {"fubar": 42}
            // *     example 5: $P.array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER');
            // *     returns 5: {"FUBAR": 42}
            // *     example 6: $P.array_change_key_case({ FuBaR: 42 }, 2);
            // *     returns 6: {"FUBAR": 42}
            var case_fn, key, tmp_ar = {};
        
            if (Object.prototype.toString.call(array) === '[object Array]') {
                return array;
            }
            if (array && typeof array === 'object' && array.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
                return array.change_key_case(cs);
            }
            if (array && typeof array === 'object' ) {
                case_fn = (!cs || cs === 'CASE_LOWER') ? 'toLowerCase' : 'toUpperCase';
                for (key in array) {
                    tmp_ar[key[case_fn]()] = array[key];
                }
                return tmp_ar;
            }
            return false;
        }
        ,
        array_chunk: function (input, size, preserve_keys) {
            // Split array into chunks  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_chunk
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Important note: Per the ECMAScript specification, objects may not always iterate in a predictable order
            // *     example 1: $P.array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
            // *     returns 1: [['Kevin', 'van'], ['Zonneveld']]
            // *     example 2: $P.array_chunk(['Kevin', 'van', 'Zonneveld'], 2, true);
            // *     returns 2: [{0:'Kevin', 1:'van'}, {2: 'Zonneveld'}]
            // *     example 3: $P.array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2);
            // *     returns 3: [['Kevin', 'van'], ['Zonneveld']]
            // *     example 4: $P.array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2, true);
            // *     returns 4: [{1: 'Kevin', 2: 'van'}, {3: 'Zonneveld'}]
            
            var x, p = '', i = 0, c = -1, l = input.length || 0, n = [];
            
            if (size < 1) {
                return null;
            }
        
            if (Object.prototype.toString.call(input) === '[object Array]') {
                if (preserve_keys) {
                    while (i < l) {
                        (x = i % size) ? n[c][i] = input[i] : n[++c] = {}, n[c][i] = input[i];
                        i++;
                    }
                }
                else {
                    while (i < l) {
                        (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
                        i++;
                    }
                }
            }
            else {
                if (preserve_keys) {
                    for (p in input) {
                        if (input.hasOwnProperty(p)) {
                            (x = i % size) ? n[c][p] = input[p] : n[++c] = {}, n[c][p] = input[p];
                            i++;
                        }
                    }
                }
                else {
                    for (p in input) {
                        if (input.hasOwnProperty(p)) {
                            (x = i % size) ? n[c][x] = input[p] : n[++c] = [input[p]];
                            i++;
                        }
                    }
                }
            }
            return n;
        }
        ,
        array_combine: function (keys, values) {
            // Creates an array by using the elements of the first parameter as keys and the elements of the second as the corresponding values  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_combine
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_combine([0,1,2], ['kevin','van','zonneveld']);
            // *     returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}
            var new_array = {},
                keycount = keys && keys.length,
                i = 0;
        
            // input sanitation
            if (typeof keys !== 'object' || typeof values !== 'object' || // Only accept arrays or array-like objects
            typeof keycount !== 'number' || typeof values.length !== 'number' || !keycount) { // Require arrays to have a count
                return false;
            }
        
            // number of elements does not match
            if (keycount != values.length) {
                return false;
            }
        
            for (i = 0; i < keycount; i++) {
                new_array[keys[i]] = values[i];
            }
        
            return new_array;
        }
        ,
        array_count_values: function (array) {
            // Return the value as key and the frequency of that value in input as value  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_count_values
            // +   original by: Ates Goral (http://magnetiq.com)
            // + namespaced by: Michael White (http://getsprink.com)
            // +      input by: sankai
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   input by: Shingo
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
            // *     returns 1: {3:2, 5:1, "foo":2, "bar":1}
            // *     example 2: $P.array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
            // *     returns 2: {3:2, 5:1, "foo":2, "bar":1}
            // *     example 3: $P.array_count_values([ true, 4.2, 42, "fubar" ]);
            // *     returns 3: {42:1, "fubar":1}
            var tmp_arr = {},
                key = '',
                t = '';
        
            var __getType = function (obj) {
                // Objects are php associative arrays.
                var t = typeof obj;
                t = t.toLowerCase();
                if (t === "object") {
                    t = "array";
                }
                return t;
            };
        
            var __countValue = function (value) {
                switch (typeof(value)) {
                case "number":
                    if (Math.floor(value) !== value) {
                        return;
                    }
                    // Fall-through
                case "string":
                    if (value in this && this.hasOwnProperty(value)) {
                        ++this[value];
                    } else {
                        this[value] = 1;
                    }
                }
            };
        
            t = __getType(array);
            if (t === 'array') {
                for (key in array) {
                    if (array.hasOwnProperty(key)) {
                        __countValue.call(tmp_arr, array[key]);
                    }
                }
            }
            return tmp_arr;
        }
        ,
        array_diff: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_diff
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sanjoy Roy
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
            // *     returns 1: {0:'Kevin'}
            var retArr = {},
                argl = arguments.length,
                k1 = '',
                i = 1,
                k = '',
                arr = {};
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1]) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_diff_assoc: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_diff_assoc
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: 0m3r
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'});
            // *     returns 1: {1: 'van', 2: 'Zonneveld'}
            var retArr = {},
                argl = arguments.length,
                k1 = '',
                i = 1,
                k = '',
                arr = {};
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1] && k === k1) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_diff_key: function (arr1) {
            // Returns the entries of arr1 that have keys which are not present in any of the others arguments. This function is like array_diff() but works on the keys instead of the values. The associativity is preserved.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_diff_key
            // +   original by: Ates Goral (http://magnetiq.com)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // +    input by: Everlasto
            // *     example 1: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
            // *     returns 1: {"green":2, "blue":3, "white":4}
            // *     example 2: $P.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
            // *     returns 2: {"green":2, "blue":3, "white":4}
            var argl = arguments.length,
                retArr = {},
                k1 = '',
                i = 1,
                k = '',
                arr = {};
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (k === k1) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_diff_uassoc: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Elements are compared by user supplied function.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_diff_uassoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_diff_uassoc($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
            // *     returns 1: {b: 'brown', c: 'blue', 0: 'red'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                cb = arguments[arglm1],
                arr = {},
                i = 1,
                k1 = '',
                k = '';
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1] && cb(k, k1) === 0) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_diff_ukey: function (arr1) {
            // Returns the entries of arr1 that have keys which are not present in any of the others arguments. User supplied function is used for comparing the keys. This function is like array_udiff() but works on the keys instead of the values. The associativity is preserved.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_diff_ukey
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {blue: 1, red: 2, green: 3, purple: 4}
            // *     example 1: $array2 = {green: 5, blue: 6, yellow: 7, cyan: 8}
            // *     example 1: $P.array_diff_ukey($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
            // *     returns 1: {red: 2, purple: 4}
            var retArr = {},
                arglm1 = arguments.length - 1,
                cb = arguments[arglm1],
                arr = {},
                i = 1,
                k1 = '',
                k = '';
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb(k, k1) === 0) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_fill: function (start_index, num, mixed_val) {
            // Create an array containing num elements starting with index start_key each initialized to val  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_fill
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Waldo Malqui Silva
            // *     example 1: $P.array_fill(5, 6, 'banana');
            // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }
            var key, tmp_arr = {};
        
            if (!isNaN(start_index) && !isNaN(num)) {
                for (key = 0; key < num; key++) {
                    tmp_arr[(key + start_index)] = mixed_val;
                }
            }
        
            return tmp_arr;
        }
        ,
        array_fill_keys: function (keys, value) {
            // Create an array using the elements of the first parameter as keys each initialized to val  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_fill_keys
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.keys = {'a': 'foo', 2: 5, 3: 10, 4: 'bar'}
            // *     example 1: $P.array_fill_keys(keys, 'banana')
            // *     returns 1: {"foo": "banana", 5: "banana", 10: "banana", "bar": "banana"}
            var retObj = {},
                key = '';
        
            for (key in keys) {
                retObj[keys[key]] = value;
            }
        
            return retObj;
        }
        ,
        array_filter: function (arr, func) {
            // Filters elements from the array via the callback.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_filter
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Takes a function as an argument, not a function's name
            // *     example 1: $P.var odd = function (num) {return (num & 1);}; 
            // *     example 1: $P.array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
            // *     returns 1: {"a": 1, "c": 3, "e": 5}
            // *     example 2: $P.var even = function (num) {return (!(num & 1));}
            // *     example 2: $P.array_filter([6, 7, 8, 9, 10, 11, 12], even);
            // *     returns 2: {0: 6, 2: 8, 4: 10, 6: 12} 
            var retObj = {},
                k;
        
            for (k in arr) {
                if (func(arr[k])) {
                    retObj[k] = arr[k];
                }
            }
        
            return retObj;
        }
        ,
        array_flip: function (trans) {
            // Return array with key <-> value flipped  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_flip
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      improved by: Pier Paolo Ramon (http://www.mastersoup.com/)
            // *     example 1: $P.array_flip( {a: 1, b: 1, c: 2} );
            // *     returns 1: {1: 'b', 2: 'c'}
            var key, tmp_ar = {};
        
            for (key in trans) {
                if (!trans.hasOwnProperty(key)) {continue;}
                tmp_ar[trans[key]] = key;
            }
        
            return tmp_ar;
        }
        ,
        array_intersect: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_intersect
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: These only output associative arrays (would need to be
            // %        note 1: all numeric and counting from zero to be numeric)
            // *     example 1: $array1 = {'a' : 'green', 0:'red', 1: 'blue'};
            // *     example 1: $array2 = {'b' : 'green', 0:'yellow', 1:'red'};
            // *     example 1: $array3 = ['green', 'red'];
            // *     example 1: $result = array_intersect($array1, $array2, $array3);
            // *     returns 1: {0: 'red', a: 'green'}
            var retArr = {},
                argl = arguments.length,
                arglm1 = argl - 1,
                k1 = '',
                arr = {},
                i = 0,
                k = '';
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1]) {
                            if (i === arglm1) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_intersect_assoc: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_intersect_assoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: These only output associative arrays (would need to be
            // %        note 1: all numeric and counting from zero to be numeric)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_intersect_assoc($array1, $array2)
            // *     returns 1: {a: 'green'}
            var retArr = {},
                argl = arguments.length,
                arglm1 = argl - 1,
                k1 = '',
                arr = {},
                i = 0,
                k = '';
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1] && k === k1) {
                            if (i === arglm1) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_intersect_key: function (arr1) {
            // Returns the entries of arr1 that have keys which are present in all the other arguments. Kind of equivalent to array_diff(array_keys($arr1), array_keys($arr2)[,array_keys(...)]). Equivalent of array_intersect_assoc() but does not do compare of the data.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_intersect_key
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: These only output associative arrays (would need to be
            // %        note 1: all numeric and counting from zero to be numeric)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_intersect_key($array1, $array2)
            // *     returns 1: {0: 'red', a: 'green'}
            var retArr = {},
                argl = arguments.length,
                arglm1 = argl - 1,
                k1 = '',
                arr = {},
                i = 0,
                k = '';
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < argl; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (k === k1) {
                            if (i === arglm1) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_intersect_uassoc: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check and they are compared by using an user-supplied callback.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_intersect_uassoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_intersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {b: 'brown'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 1,
                cb = arguments[arglm1],
                k1 = '',
                i = 1,
                arr = {},
                k = '';
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (arr[k] === arr1[k1] && cb(k, k1) === 0) {
                            if (i === arglm2) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_intersect_ukey: function (arr1) {
            // Returns the entries of arr1 that have keys which are present in all the other arguments. Kind of equivalent to array_diff(array_keys($arr1), array_keys($arr2)[,array_keys(...)]). The comparison of the keys is performed by a user supplied function. Equivalent of array_intersect_uassoc() but does not do compare of the data.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_intersect_ukey
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {blue: 1, red: 2, green: 3, purple: 4}
            // *     example 1: $array2 = {green: 5, blue: 6, yellow: 7, cyan: 8}
            // *     example 1: $P.array_intersect_ukey ($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
            // *     returns 1: {blue: 1, green: 3}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 1,
                cb = arguments[arglm1],
                k1 = '',
                i = 1,
                arr = {},
                k = '';
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb(k, k1) === 0) {
                            if (i === arglm2) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_key_exists: function (key, search) {
            // Checks if the given key or index exists in the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_key_exists
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
            // *     example 1: $P.array_key_exists('kevin', {'kevin': 'van Zonneveld'});
            // *     returns 1: true
            // input sanitation
            if (!search || (search.constructor !== Array && search.constructor !== Object)) {
                return false;
            }
        
            return key in search;
        }
        ,
        array_keys: function (input, search_value, argStrict) {
            // Return just the keys from the input array, optionally only for the specified search_value  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_keys
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: jd
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   input by: P
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
            // *     returns 1: {0: 'firstname', 1: 'surname'}
            var search = typeof search_value !== 'undefined',
                tmp_arr = [],
                strict = !!argStrict,
                include = true,
                key = '';
        
            if (input && typeof input === 'object' && input.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
                return input.keys(search_value, argStrict);
            }
        
            for (key in input) {
                if (input.hasOwnProperty(key)) {
                    include = true;
                    if (search) {
                        if (strict && input[key] !== search_value) {
                            include = false;
                        }
                        else if (input[key] != search_value) {
                            include = false;
                        }
                    }
        
                    if (include) {
                        tmp_arr[tmp_arr.length] = key;
                    }
                }
            }
        
            return tmp_arr;
        }
        ,
        array_map: function (callback) {
            // Applies the callback to the elements in given arrays.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_map
            // +   original by: Andrea Giammarchi (http://webreflection.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Takes a function as an argument, not a function's name
            // %        note 2: If the callback is a string, it can only work if the function name is in the global context
            // *     example 1: $P.array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] );
            // *     returns 1: [ 1, 8, 27, 64, 125 ]
            var argc = arguments.length,
                argv = arguments;
            var j = argv[1].length,
                i = 0,
                k = 1,
                m = 0;
            var tmp = [],
                tmp_ar = [];
        
            while (i < j) {
                while (k < argc) {
                    tmp[m++] = argv[k++][i];
                }
        
                m = 0;
                k = 1;
        
                if (callback) {
                    if (typeof callback === 'string') {
                        callback = this.window[callback];
                    }
                    tmp_ar[i++] = callback.apply(null, tmp);
                } else {
                    tmp_ar[i++] = tmp;
                }
        
                tmp = [];
            }
        
            return tmp_ar;
        }
        ,
        array_merge: function () {
            // Merges elements from passed arrays into one array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_merge
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Nate
            // +   input by: josh
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.arr1 = {"color": "red", 0: 2, 1: 4}
            // *     example 1: $P.arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
            // *     example 1: $P.array_merge(arr1, arr2)
            // *     returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
            // *     example 2: $P.arr1 = []
            // *     example 2: $P.arr2 = {1: "data"}
            // *     example 2: $P.array_merge(arr1, arr2)
            // *     returns 2: {0: "data"}
            var args = Array.prototype.slice.call(arguments),
                argl = args.length,
                arg,
                retObj = {},
                k = '', 
                argil = 0,
                j = 0,
                i = 0,
                ct = 0,
                toStr = Object.prototype.toString,
                retArr = true;
        
            for (i = 0; i < argl; i++) {
                if (toStr.call(args[i]) !== '[object Array]') {
                    retArr = false;
                    break;
                }
            }
        
            if (retArr) {
                retArr = [];
                for (i = 0; i < argl; i++) {
                    retArr = retArr.concat(args[i]);
                }
                return retArr;
            }
        
            for (i = 0, ct = 0; i < argl; i++) {
                arg = args[i];
                if (toStr.call(arg) === '[object Array]') {
                    for (j = 0, argil = arg.length; j < argil; j++) {
                        retObj[ct++] = arg[j];
                    }
                }
                else {
                    for (k in arg) {
                        if (arg.hasOwnProperty(k)) {
                            if (parseInt(k, 10) + '' === k) {
                                retObj[ct++] = arg[k];
                            }
                            else {
                                retObj[k] = arg[k];
                            }
                        }
                    }
                }
            }
            return retObj;
        }
        ,
        array_merge_recursive: function (arr1, arr2) {
            // Recursively merges elements from passed arrays into one array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_merge_recursive
            // +   original by: Subhasis Deb
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: array_merge
            // *     example 1: $P.arr1 = {'color': {'favourite': 'read'}, 0: 5}
            // *     example 1: $P.arr2 = {0: 10, 'color': {'favorite': 'green', 0: 'blue'}}
            // *     example 1: $P.array_merge_recursive(arr1, arr2)
            // *     returns 1: {'color': {'favorite': {0: 'red', 1: 'green'}, 0: 'blue'}, 1: 5, 1: 10}
            var idx = '';
        
            if (arr1 && Object.prototype.toString.call(arr1) === '[object Array]' && 
                arr2 && Object.prototype.toString.call(arr2) === '[object Array]') {
                for (idx in arr2) {
                    arr1.push(arr2[idx]);
                }
            } else if ((arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object))) {
                for (idx in arr2) {
                    if (idx in arr1) {
                        if (typeof arr1[idx] == 'object' && typeof arr2 == 'object') {
                            arr1[idx] = this.array_merge(arr1[idx], arr2[idx]);
                        } else {
                            arr1[idx] = arr2[idx];
                        }
                    } else {
                        arr1[idx] = arr2[idx];
                    }
                }
            }
        
            return arr1;
        }
        ,
        array_multisort: function (arr) {
            // +   original by: Theriault
            // *     example 1: $P.array_multisort([1, 2, 1, 2, 1, 2], [1, 2, 3, 4, 5, 6]);
            // *     returns 1: true
            // *     example 2: $P.characters = {A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward'};
            // *     example 2: $P.jobs = {A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight'};
            // *     example 2: $P.array_multisort(characters, 'SORT_DESC', 'SORT_STRING', jobs, 'SORT_ASC', 'SORT_STRING');
            // *     returns 2: true
            // *     results 2: characters == {D: 'Terra', C: 'Sabin', B: 'Locke', E: 'Edward', A: 'Edward'};
            // *     results 2: jobs == {D: 'Mage', C: 'Monk', B: 'Thief', E: 'Knight', A: 'Warrior'};
            // *     example 3: $P.lastnames = [ 'Carter','Adams','Monroe','Tyler','Madison','Kennedy','Adams'];
            // *     example 3: $P.firstnames = ['James', 'John' ,'James', 'John', 'James',  'John',   'John'];
            // *     example 3: $P.president = [ 39,      6,      5,       10,     4,       35,        2    ];
            // *     example 3: $P.array_multisort(firstnames, 'SORT_DESC', 'SORT_STRING', lastnames, 'SORT_ASC', 'SORT_STRING', president, 'SORT_NUMERIC');
            // *     returns 3: true
            // *     results 3: firstnames == ['John', 'John', 'John',   'John', 'James', 'James',  'James'];
            // *     results 3: lastnames ==  ['Adams','Adams','Kennedy','Tyler','Carter','Madison','Monroe'];
            // *     results 3: president ==  [2,      6,      35,       10,     39,       4,       5];
            // Fix: this function must be fixed like asort(), etc., to return a (shallow) copy by default, since IE does not support!
            // VARIABLE DESCRIPTIONS
            //
            // flags: Translation table for sort arguments. Each argument turns on certain bits in the flag byte through addition.
            //        bits:    HGFE DCBA
            //        bit A: Only turned on if SORT_NUMERIC was an argument.
            //        bit B: Only turned on if SORT_STRING was an argument.
            //        bit C: Reserved bit for SORT_ASC; not turned on.
            //        bit D: Only turned on if SORT_DESC was an argument.
            //        bit E: Turned on if either SORT_REGULAR, SORT_NUMERIC, or SORT_STRING was an argument. If already turned on, function would return FALSE like in PHP.
            //        bit F: Turned on if either SORT_ASC or SORT_DESC was an argument. If already turned on, function would return FALSE like in PHP.
            //        bit G and H: (Unused)
            //
            // sortFlag: Holds sort flag byte of every array argument.
            //
            // sortArrs: Holds the values of array arguments.
            //
            // sortKeys: Holds the keys of object arguments.
            //
            // nLastSort: Holds a copy of the current lastSort so that the lastSort is not destroyed
            //
            // nLastSort: Holds a copy of the current lastSort so that the lastSort is not destroyed
            //
            // args: Holds pointer to arguments for reassignment
            //
            // lastSort: Holds the last Javascript sort pattern to duplicate the sort for the last sortComponent.
            //
            // lastSorts: Holds the lastSort for each sortComponent to duplicate the sort of each component on each array.
            //
            // tmpArray: Holds a copy of the last sortComponent's array elements to reiterate over the array
            //
            // elIndex: Holds the index of the last sortComponent's array elements to reiterate over the array
            //
            // sortDuplicator: Function for duplicating previous sort.
            //
            // sortRegularASC: Function for sorting regular, ascending.
            //
            // sortRegularDESC: Function for sorting regular, descending.
            //
            // thingsToSort: Holds a bit that indicates which indexes in the arrays can be sorted. Updated after every array is sorted.
            var argl = arguments.length,
                sal = 0,
                flags = {
                    'SORT_REGULAR': 16,
                    'SORT_NUMERIC': 17,
                    'SORT_STRING': 18,
                    'SORT_ASC': 32,
                    'SORT_DESC': 40
                },
                sortArrs = [
                    []
                ],
                sortFlag = [0],
                sortKeys = [
                    []
                ],
                g = 0,
                i = 0,
                j = 0,
                k = '',
                l = 0,
                thingsToSort = [],
                vkey = 0,
                zlast = null,
                args = arguments,
                nLastSort = [],
                lastSort = [],
                lastSorts = [],
                tmpArray = [],
                elIndex = 0,
                sortDuplicator = function (a, b) {
                    return nLastSort.shift();
                },
                sortFunctions = [
                    [function (a, b) {
                        lastSort.push(a > b ? 1 : (a < b ? -1 : 0));
                        return a > b ? 1 : (a < b ? -1 : 0);
                    }, function (a, b) {
                        lastSort.push(b > a ? 1 : (b < a ? -1 : 0));
                        return b > a ? 1 : (b < a ? -1 : 0);
                    }],
                    [function (a, b) {
                        lastSort.push(a - b);
                        return a - b;
                    }, function (a, b) {
                        lastSort.push(b - a);
                        return b - a;
                    }],
                    [function (a, b) {
                        lastSort.push((a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0));
                        return (a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0);
                    }, function (a, b) {
                        lastSort.push((b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0));
                        return (b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0);
                    }]
                ];
        
            // Store first argument into sortArrs and sortKeys if an Object.
            // First Argument should be either a Javascript Array or an Object, otherwise function would return FALSE like in PHP
            if (Object.prototype.toString.call(arr) === '[object Array]') {
                sortArrs[0] = arr;
            }
            else if (arr && typeof arr === 'object') {
                for (i in arr) {
                    if (arr.hasOwnProperty(i)) {
                        sortKeys[0].push(i);
                        sortArrs[0].push(arr[i]);
                    }
                }
            }
            else {
                return false;
            }
        
        
            // arrMainLength: Holds the length of the first array. All other arrays must be of equal length, otherwise function would return FALSE like in PHP
            //
            // sortComponents: Holds 2 indexes per every section of the array that can be sorted. As this is the start, the whole array can be sorted.
            var arrMainLength = sortArrs[0].length,
                sortComponents = [0, arrMainLength];
        
            // Loop through all other arguments, checking lengths and sort flags of arrays and adding them to the above variables.
            for (j = 1; j < argl; j++) {
                if (Object.prototype.toString.call(arguments[j]) === '[object Array]') {
                    sortArrs[j] = arguments[j];
                    sortFlag[j] = 0;
                    if (arguments[j].length !== arrMainLength) {
                        return false;
                    }
                } else if (arguments[j] && typeof arguments[j] === 'object') {
                    sortKeys[j] = [];
                    sortArrs[j] = [];
                    sortFlag[j] = 0;
                    for (i in arguments[j]) {
                        if (arguments[j].hasOwnProperty(i)) {
                            sortKeys[j].push(i);
                            sortArrs[j].push(arguments[j][i]);
                        }
                    }
                    if (sortArrs[j].length !== arrMainLength) {
                        return false;
                    }
                } else if (typeof arguments[j] === 'string') {
                    var lFlag = sortFlag.pop();
                    if (typeof flags[arguments[j]] === 'undefined' || ((((flags[arguments[j]]) >>> 4) & (lFlag >>> 4)) > 0)) { // Keep extra parentheses around latter flags check to avoid minimization leading to CDATA closer
                        return false;
                    }
                    sortFlag.push(lFlag + flags[arguments[j]]);
                } else {
                    return false;
                }
            }
        
        
            for (i = 0; i !== arrMainLength; i++) {
                thingsToSort.push(true);
            }
        
            // Sort all the arrays....
            for (i in sortArrs) {
                if (sortArrs.hasOwnProperty(i)) {
                    lastSorts = [];
                    tmpArray = [];
                    elIndex = 0;
                    nLastSort = [];
                    lastSort = [];
        
                    // If ther are no sortComponents, then no more sorting is neeeded. Copy the array back to the argument.
                    if (sortComponents.length === 0) {
                        if (Object.prototype.toString.call(arguments[i]) === '[object Array]') {
                            args[i] = sortArrs[i];
                        } else {
                            for (k in arguments[i]) {
                                if (arguments[i].hasOwnProperty(k)) {
                                    delete arguments[i][k];
                                }
                            }
                            sal = sortArrs[i].length;
                            for (j = 0, vkey = 0; j < sal; j++) {
                                vkey = sortKeys[i][j];
                                args[i][vkey] = sortArrs[i][j];
                            }
                        }
                        delete sortArrs[i];
                        delete sortKeys[i];
                        continue;
                    }
        
                    // Sort function for sorting. Either sorts asc or desc, regular/string or numeric.
                    var sFunction = sortFunctions[(sortFlag[i] & 3)][((sortFlag[i] & 8) > 0) ? 1 : 0];
        
                    // Sort current array.
                    for (l = 0; l !== sortComponents.length; l += 2) {
                        tmpArray = sortArrs[i].slice(sortComponents[l], sortComponents[l + 1] + 1);
                        tmpArray.sort(sFunction);
                        lastSorts[l] = [].concat(lastSort); // Is there a better way to copy an array in Javascript?
                        elIndex = sortComponents[l];
                        for (g in tmpArray) {
                            if (tmpArray.hasOwnProperty(g)) {
                                sortArrs[i][elIndex] = tmpArray[g];
                                elIndex++;
                            }
                        }
                    }
        
                    // Duplicate the sorting of the current array on future arrays.
                    sFunction = sortDuplicator;
                    for (j in sortArrs) {
                        if (sortArrs.hasOwnProperty(j)) {
                            if (sortArrs[j] === sortArrs[i]) {
                                continue;
                            }
                            for (l = 0; l !== sortComponents.length; l += 2) {
                                tmpArray = sortArrs[j].slice(sortComponents[l], sortComponents[l + 1] + 1);
                                nLastSort = [].concat(lastSorts[l]); // alert(l + ':' + nLastSort);
                                tmpArray.sort(sFunction);
                                elIndex = sortComponents[l];
                                for (g in tmpArray) {
                                    if (tmpArray.hasOwnProperty(g)) {
                                        sortArrs[j][elIndex] = tmpArray[g];
                                        elIndex++;
                                    }
                                }
                            }
                        }
                    }
        
                    // Duplicate the sorting of the current array on array keys
                    for (j in sortKeys) {
                        if (sortKeys.hasOwnProperty(j)) {
                            for (l = 0; l !== sortComponents.length; l += 2) {
                                tmpArray = sortKeys[j].slice(sortComponents[l], sortComponents[l + 1] + 1);
                                nLastSort = [].concat(lastSorts[l]);
                                tmpArray.sort(sFunction);
                                elIndex = sortComponents[l];
                                for (g in tmpArray) {
                                    if (tmpArray.hasOwnProperty(g)) {
                                        sortKeys[j][elIndex] = tmpArray[g];
                                        elIndex++;
                                    }
                                }
                            }
                        }
                    }
        
                    // Generate the next sortComponents
                    zlast = null;
                    sortComponents = [];
                    for (j in sortArrs[i]) {
                        if (sortArrs[i].hasOwnProperty(j)) {
                            if (!thingsToSort[j]) {
                                if ((sortComponents.length & 1)) {
                                    sortComponents.push(j - 1);
                                }
                                zlast = null;
                                continue;
                            }
                            if (!(sortComponents.length & 1)) {
                                if (zlast !== null) {
                                    if (sortArrs[i][j] === zlast) {
                                        sortComponents.push(j - 1);
                                    } else {
                                        thingsToSort[j] = false;
                                    }
                                }
                                zlast = sortArrs[i][j];
                            } else {
                                if (sortArrs[i][j] !== zlast) {
                                    sortComponents.push(j - 1);
                                    zlast = sortArrs[i][j];
                                }
                            }
                        }
                    }
        
                    if (sortComponents.length & 1) {
                        sortComponents.push(j);
                    }
                    if (Object.prototype.toString.call(arguments[i]) === '[object Array]') {
                        args[i] = sortArrs[i];
                    } 
                    else {
                        for (j in arguments[i]) {
                            if (arguments[i].hasOwnProperty(j)) {
                                delete arguments[i][j];
                            }
                        }
                        
                        sal = sortArrs[i].length;
                        for (j = 0, vkey = 0; j < sal; j++) {
                            vkey = sortKeys[i][j];
                            args[i][vkey] = sortArrs[i][j];
                        }
        
                    }
                    delete sortArrs[i];
                    delete sortKeys[i];
                }
            }
            return true;
        }
        ,
        array_pad: function (input, pad_size, pad_value) {
            // Returns a copy of input array padded with pad_value to size pad_size  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_pad
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_pad([ 7, 8, 9 ], 2, 'a');
            // *     returns 1: [ 7, 8, 9]
            // *     example 2: $P.array_pad([ 7, 8, 9 ], 5, 'a');
            // *     returns 2: [ 7, 8, 9, 'a', 'a']
            // *     example 3: $P.array_pad([ 7, 8, 9 ], 5, 2);
            // *     returns 3: [ 7, 8, 9, 2, 2]
            // *     example 4: $P.array_pad([ 7, 8, 9 ], -5, 'a');
            // *     returns 4: [ 'a', 'a', 7, 8, 9 ]
            var pad = [],
                newArray = [],
                newLength, 
                diff = 0,
                i = 0;
        
            if (Object.prototype.toString.call(input) === '[object Array]' && !isNaN(pad_size)) {
                newLength = ((pad_size < 0) ? (pad_size * -1) : pad_size);
                diff = newLength - input.length;
                
                if (diff > 0) {
                    for (i = 0; i < diff; i++) {
                        newArray[i] = pad_value;
                    }
                    pad = ((pad_size < 0) ? newArray.concat(input) : input.concat(newArray));
                } else {
                    pad = input;
                }
            }
        
            return pad;
        }
        ,
        array_pop: function (inputArr) {
            // Pops an element off the end of the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_pop
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Theriault
            // %        note 1: While IE (and other browsers) support iterating an object's
            // %        note 1: own properties in order, if one attempts to add back properties
            // %        note 1: in IE, they may end up in their former position due to their position
            // %        note 1: being retained. So use of this function with "associative arrays"
            // %        note 1: (objects) may lead to unexpected behavior in an IE environment if
            // %        note 1: you add back properties with the same keys that you removed
            // *     example 1: $P.array_pop([0,1,2]);
            // *     returns 1: 2
            // *     example 2: $P.data = {firstName: 'Kevin', surName: 'van Zonneveld'};
            // *     example 2: $P.lastElem = array_pop(data);
            // *     returns 2: 'van Zonneveld'
            // *     results 2: data == {firstName: 'Kevin'}
            var key = '',
                lastKey = '';
        
            if (inputArr.hasOwnProperty('length')) {
                // Indexed
                if (!inputArr.length) {
                    // Done popping, are we?
                    return null;
                }
                return inputArr.pop();
            } else {
                // Associative
                for (key in inputArr) {
                    if (inputArr.hasOwnProperty(key)) {
                        lastKey = key;
                    }
                }
                if (lastKey) {
                    var tmp = inputArr[lastKey];
                    delete(inputArr[lastKey]);
                    return tmp;
                } else {
                    return null;
                }
            }
        }
        ,
        array_product: function (input) {
            // Returns the product of the array entries  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_product
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_product([ 2, 4, 6, 8 ]);
            // *     returns 1: 384
            var idx = 0,
                product = 1,
                il = 0;
        
            if (Object.prototype.toString.call(input) !== '[object Array]') {
                return null;
            }
        
            il = input.length;
            while (idx < il) {
                product *= (!isNaN(input[idx]) ? input[idx] : 0);
                idx++;
            }
            return product;
        }
        ,
        array_push: function (inputArr) {
            // Pushes elements onto the end of the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_push
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Note also that IE retains information about property position even
            // %        note 1: after being supposedly deleted, so if you delete properties and then
            // %        note 1: add back properties with the same keys (including numeric) that had
            // %        note 1: been deleted, the order will be as before; thus, this function is not
            // %        note 1: really recommended with associative arrays (objects) in IE environments
            // *     example 1: $P.array_push(['kevin','van'], 'zonneveld');
            // *     returns 1: 3
            var i = 0,
                pr = '',
                argv = arguments,
                argc = argv.length,
                allDigits = /^\d$/,
                size = 0,
                highestIdx = 0,
                len = 0;
            if (inputArr.hasOwnProperty('length')) {
                for (i = 1; i < argc; i++) {
                    inputArr[inputArr.length] = argv[i];
                }
                return inputArr.length;
            }
        
            // Associative (object)
            for (pr in inputArr) {
                if (inputArr.hasOwnProperty(pr)) {
                    ++len;
                    if (pr.search(allDigits) !== -1) {
                        size = parseInt(pr, 10);
                        highestIdx = size > highestIdx ? size : highestIdx;
                    }
                }
            }
            for (i = 1; i < argc; i++) {
                inputArr[++highestIdx] = argv[i];
            }
            return len + i - 1;
        }
        ,
        array_rand: function (input, num_req) {
            // Return key/keys for random entry/entries in the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_rand
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.array_rand( ['Kevin'], 1 );
            // *     returns 1: 0
            var indexes = [];
            var ticks = num_req || 1;
            var checkDuplicate = function (input, value) {
                var exist = false,
                    index = 0,
                    il = input.length;
                while (index < il) {
                    if (input[index] === value) {
                        exist = true;
                        break;
                    }
                    index++;
                }
                return exist;
            };
        
            if (Object.prototype.toString.call(input) === '[object Array]' && ticks <= input.length) {
                while (true) {
                    var rand = Math.floor((Math.random() * input.length));
                    if (indexes.length === ticks) {
                        break;
                    }
                    if (!checkDuplicate(indexes, rand)) {
                        indexes.push(rand);
                    }
                }
            } else {
                indexes = null;
            }
        
            return ((ticks == 1) ? indexes.join() : indexes);
        }
        ,
        array_reduce: function (a_input, callback) {
            // Iteratively reduce the array to a single value via the callback.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_reduce
            // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
            // %        note 1: Takes a function as an argument, not a function's name
            // *     example 1: $P.array_reduce([1, 2, 3, 4, 5], function (v, w){v += w;return v;});
            // *     returns 1: 15
            var lon = a_input.length;
            var res = 0,
                i = 0;
            var tmp = [];
        
        
            for (i = 0; i < lon; i += 2) {
                tmp[0] = a_input[i];
                if (a_input[(i + 1)]) {
                    tmp[1] = a_input[(i + 1)];
                } else {
                    tmp[1] = 0;
                }
                res += callback.apply(null, tmp);
                tmp = [];
            }
        
            return res;
        }
        ,
        array_replace: function (arr) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"});
            // *     returns 1: {0: 'grape', 1: 'banana', 2: 'apple', 3: 'raspberry', 4: 'cherry'}
            
            var retObj = {},
                i = 0,
                p = '',
                argl = arguments.length;
            
            if (argl < 2) {
                throw new Error('There should be at least 2 arguments passed to array_replace()');
            }
        
            // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
            for (p in arr) {
                retObj[p] = arr[p];
            }
        
            for (i = 1; i < argl; i++) {
                for (p in arguments[i]) {
                    retObj[p] = arguments[i][p];
                }
            }
            return retObj;
        }
        ,
        array_replace_recursive: function (arr) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_replace_recursive({'citrus' : ["orange"], 'berries' : ["blackberry", "raspberry"]}, {'citrus' : ['pineapple'], 'berries' : ['blueberry']});
            // *     returns 1: {citrus : ['pineapple'], berries : ['blueberry', 'raspberry']}
            var retObj = {},
                i = 0,
                p = '',
                argl = arguments.length;
            
            if (argl < 2) {
                throw new Error('There should be at least 2 arguments passed to array_replace_recursive()');
            }
        
            // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
            for (p in arr) {
                retObj[p] = arr[p];
            }
        
            for (i = 1; i < argl; i++) {
                for (p in arguments[i]) {
                    if (retObj[p] && typeof retObj[p] === 'object') {
                        retObj[p] = this.array_replace_recursive(retObj[p], arguments[i][p]);
                    } else {
                        retObj[p] = arguments[i][p];
                    }
                }
            }
            return retObj;
        }
        ,
        array_reverse: function (array, preserve_keys) {
            // Return input as a new array with the order of the entries reversed  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_reverse
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Karol Kowalski
            // *     example 1: $P.array_reverse( [ 'php', '4.0', ['green', 'red'] ], true);
            // *     returns 1: { 2: ['green', 'red'], 1: 4, 0: 'php'}
            var isArray = Object.prototype.toString.call(array) === "[object Array]",
                tmp_arr = preserve_keys ? {} : [],
                key;
                
            if (isArray && !preserve_keys) {
                return array.slice(0).reverse();
            }
        
            if (preserve_keys) {
                var keys = [];
                for (key in array) {
                    // if (array.hasOwnProperty(key)) {
                    keys.push(key);
                    // }
                }
                
                var i = keys.length;
                while (i--) {
                    key = keys[i];
                    // FIXME: don't rely on browsers keeping keys in insertion order
                    // it's implementation specific
                    // eg. the result will differ from expected in Google Chrome
                    tmp_arr[key] = array[key];
                }
            } else {
                for (key in array) {
                    // if (array.hasOwnProperty(key)) {
                    tmp_arr.unshift(array[key]);
                    // }
                }
            }
        
            return tmp_arr;
        }
        ,
        array_search: function (needle, haystack, argStrict) {
            // Searches the array for a given value and returns the corresponding key if successful  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_search
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
            // *     returns 1: 'surname'
            // *     example 2: $P.ini_set('phpjs.return_phpjs_arrays', 'on');
            // *     example 2: $P.var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
            // *     example 2: $P.var key = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
            // *     returns 2: '3'
            var strict = !!argStrict,
                key = '';
            
            if (haystack && typeof haystack === 'object' && haystack.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
                return haystack.search(needle, argStrict);
            }
            if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
                if (!strict) { // Let's consider case sensitive searches as strict
                    var flags = 'i' + (needle.global ? 'g' : '') +
                                (needle.multiline ? 'm' : '') +
                                (needle.sticky ? 'y' : ''); // sticky is FF only
                    needle = new RegExp(needle.source, flags);
                }
                for (key in haystack) {
                    if (needle.test(haystack[key])) {
                        return key;
                    }
                }
                return false;
            }
        
            for (key in haystack) {
                if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
                    return key;
                }
            }
        
            return false;
        }
        ,
        array_shift: function (inputArr) {
            // Pops an element off the beginning of the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_shift
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Martijn Wieringa
            // %        note 1: Currently does not handle objects
            // *     example 1: $P.array_shift(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin'
            var props = false,
                shift = undefined,
                pr = '',
                allDigits = /^\d$/,
                int_ct = -1,
                _checkToUpIndices = function (arr, ct, key) {
                    // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
                    // increment all subsequent (skipping current key, since we need its value below) until find unused)
                    if (arr[ct] !== undefined) {
                        var tmp = ct;
                        ct += 1;
                        if (ct === key) {
                            ct += 1;
                        }
                        ct = _checkToUpIndices(arr, ct, key);
                        arr[ct] = arr[tmp];
                        delete arr[tmp];
                    }
                    return ct;
                };
        
        
            if (inputArr.length === 0) {
                return null;
            }
            if (inputArr.length > 0) {
                return inputArr.shift();
            }
        
        /*
            UNFINISHED FOR HANDLING OBJECTS
            for (pr in inputArr) {
                if (inputArr.hasOwnProperty(pr)) {
                    props = true;
                    shift = inputArr[pr];
                    delete inputArr[pr];
                    break;
                }
            }
            for (pr in inputArr) {
                if (inputArr.hasOwnProperty(pr)) {
                    if (pr.search(allDigits) !== -1) {
                        int_ct += 1;
                        if (parseInt(pr, 10) === int_ct) { // Key is already numbered ok, so don't need to change key for value
                            continue;
                        }
                        _checkToUpIndices(inputArr, int_ct, pr);
                        arr[int_ct] = arr[pr];
                        delete arr[pr];
                    }
                }
            }
            if (!props) {
                return null;
            }
            return shift;
            */
        }
        ,
        array_slice: function (arr, offst, lgth, preserve_keys) {
            // Returns elements specified by offset and length  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_slice
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: is_int
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %          note: Relies on is_int because !isNaN accepts floats 
            // *     example 1: $P.array_slice(["a", "b", "c", "d", "e"], 2, -1);
            // *     returns 1: {0: 'c', 1: 'd'}
            // *     example 2: $P.array_slice(["a", "b", "c", "d", "e"], 2, -1, true);
            // *     returns 2: {2: 'c', 3: 'd'}
        /*
            if ('callee' in arr && 'length' in arr) {
                arr = Array.prototype.slice.call(arr);
            }
            */
        
            var key = '';
        
            if (Object.prototype.toString.call(arr) !== '[object Array]' || 
                (preserve_keys && offst !== 0)) { // Assoc. array as input or if required as output
                var lgt = 0,
                    newAssoc = {};
                for (key in arr) {
                    //if (key !== 'length') {
                    lgt += 1;
                    newAssoc[key] = arr[key];
                    //}
                }
                arr = newAssoc;
        
                offst = (offst < 0) ? lgt + offst : offst;
                lgth = lgth === undefined ? lgt : (lgth < 0) ? lgt + lgth - offst : lgth;
        
                var assoc = {};
                var start = false,
                    it = -1,
                    arrlgth = 0,
                    no_pk_idx = 0;
                for (key in arr) {
                    ++it;
                    if (arrlgth >= lgth) {
                        break;
                    }
                    if (it == offst) {
                        start = true;
                    }
                    if (!start) {
                        continue;
                    }++arrlgth;
                    if (this.is_int(key) && !preserve_keys) {
                        assoc[no_pk_idx++] = arr[key];
                    } else {
                        assoc[key] = arr[key];
                    }
                }
                //assoc.length = arrlgth; // Make as array-like object (though length will not be dynamic)
                return assoc;
            }
        
            if (lgth === undefined) {
                return arr.slice(offst);
            } else if (lgth >= 0) {
                return arr.slice(offst, offst + lgth);
            } else {
                return arr.slice(offst, lgth);
            }
        }
        ,
        array_splice: function (arr, offst, lgth, replacement) {
            // Removes the elements designated by offset and length and replace them with supplied array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_splice
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Theriault
            // %        note 1: Order does get shifted in associative array input with numeric indices,
            // %        note 1: since PHP behavior doesn't preserve keys, but I understand order is
            // %        note 1: not reliable anyways
            // %        note 2: Note also that IE retains information about property position even
            // %        note 2: after being supposedly deleted, so use of this function may produce
            // %        note 2: unexpected results in IE if you later attempt to add back properties
            // %        note 2: with the same keys that had been deleted
            // -    depends on: is_int
            // *     example 1: $P.input = {4: "red", 'abc': "green", 2: "blue", 'dud': "yellow"};
            // *     example 1: $P.array_splice(input, 2);
            // *     returns 1: {0: "blue", 'dud': "yellow"}
            // *     results 1: input == {'abc':"green", 0:"red"}
            // *     example 2: $P.input = ["red", "green", "blue", "yellow"];
            // *     example 2: $P.array_splice(input, 3, 0, "purple");
            // *     returns 2: []
            // *     results 2: input == ["red", "green", "blue", "purple", "yellow"]
            // *     example 3: $P.input = ["red", "green", "blue", "yellow"]
            // *     example 3: $P.array_splice(input, -1, 1, ["black", "maroon"]);
            // *     returns 3: ["yellow"]
            // *     results 3: input == ["red", "green", "blue", "black", "maroon"]
            var _checkToUpIndices = function (arr, ct, key) {
                // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
                // increment all subsequent (skipping current key, since we need its value below) until find unused)
                if (arr[ct] !== undefined) {
                    var tmp = ct;
                    ct += 1;
                    if (ct === key) {
                        ct += 1;
                    }
                    ct = _checkToUpIndices(arr, ct, key);
                    arr[ct] = arr[tmp];
                    delete arr[tmp];
                }
                return ct;
            };
        
            if (replacement && typeof replacement !== 'object') {
                replacement = [replacement];
            }
            if (lgth === undefined) {
                lgth = offst >= 0 ? arr.length - offst : -offst;
            } else if (lgth < 0) {
                lgth = (offst >= 0 ? arr.length - offst : -offst) + lgth;
            }
        
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
        /*if (arr.length !== undefined) { // Deal with array-like objects as input
                delete arr.length;
                }*/
                var lgt = 0,
                    ct = -1,
                    rmvd = [],
                    rmvdObj = {},
                    repl_ct = -1,
                    int_ct = -1;
                var returnArr = true,
                    rmvd_ct = 0,
                    rmvd_lgth = 0,
                    key = '';
                // rmvdObj.length = 0;
                for (key in arr) { // Can do arr.__count__ in some browsers
                    lgt += 1;
                }
                offst = (offst >= 0) ? offst : lgt + offst;
                for (key in arr) {
                    ct += 1;
                    if (ct < offst) {
                        if (this.is_int(key)) {
                            int_ct += 1;
                            if (parseInt(key, 10) === int_ct) { // Key is already numbered ok, so don't need to change key for value
                                continue;
                            }
                            _checkToUpIndices(arr, int_ct, key); // Deal with situation, e.g.,
                            // if encounter index 4 and try to set it to 0, but 0 exists later in loop
                            arr[int_ct] = arr[key];
                            delete arr[key];
                        }
                        continue;
                    }
                    if (returnArr && this.is_int(key)) {
                        rmvd.push(arr[key]);
                        rmvdObj[rmvd_ct++] = arr[key]; // PHP starts over here too
                    } else {
                        rmvdObj[key] = arr[key];
                        returnArr = false;
                    }
                    rmvd_lgth += 1;
                    // rmvdObj.length += 1;
                    if (replacement && replacement[++repl_ct]) {
                        arr[key] = replacement[repl_ct];
                    } else {
                        delete arr[key];
                    }
                }
                // arr.length = lgt - rmvd_lgth + (replacement ? replacement.length : 0); // Make (back) into an array-like object
                return returnArr ? rmvd : rmvdObj;
            }
        
            if (replacement) {
                replacement.unshift(offst, lgth);
                return Array.prototype.splice.apply(arr, replacement);
            }
            return arr.splice(offst, lgth);
        }
        ,
        array_sum: function (array) {
            // Returns the sum of the array entries  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_sum
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nate
            // +   bugfixed by: Gilbert
            // *     example 1: $P.array_sum([4, 9, 182.6]);
            // *     returns 1: 195.6
            // *     example 2: $P.total = []; index = 0.1; for (y=0; y < 12; y++){total[y] = y + index;}
            // *     example 2: $P.array_sum(total);
            // *     returns 2: 67.2
            var key, sum = 0;
        
            // input sanitation
            if (typeof array !== 'object') {
                return null;
            }
        
            for (key in array) {
                //tester_print_r(typeof sum);
                sum += (array[key] * 1);
            }
        
            return sum;
        }
        ,
        array_udiff: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments. Elements are compared by user supplied function.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_udiff
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_udiff($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {c: 'blue'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                cb = arguments[arglm1],
                arr = '',
                i = 1,
                k1 = '',
                k = '';
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb(arr[k], arr1[k1]) === 0) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_udiff_assoc: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Entries are compared by user supplied function.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_udiff_assoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_udiff_assoc({0: 'kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {1: 'van', 2: 'Zonneveld'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                cb = arguments[arglm1],
                arr = {},
                i = 1,
                k1 = '',
                k = '';
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb(arr[k], arr1[k1]) === 0 && k === k1) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_udiff_uassoc: function (arr1) {
            // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Keys and elements are compared by user supplied functions.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_udiff_uassoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_udiff_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {0: 'red', c: 'blue'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 1,
                cb = arguments[arglm1],
                cb0 = arguments[arglm2],
                k1 = '',
                i = 1,
                k = '',
                arr = {};
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
            cb0 = (typeof cb0 === 'string') ? this.window[cb0] : (Object.prototype.toString.call(cb0) === '[object Array]') ? this.window[cb0[0]][cb0[1]] : cb0;
        
            arr1keys: for (k1 in arr1) {
                for (i = 1; i < arglm2; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb0(arr[k], arr1[k1]) === 0 && cb(k, k1) === 0) {
                            // If it reaches here, it was found in at least one array, so try next value
                            continue arr1keys;
                        }
                    }
                    retArr[k1] = arr1[k1];
                }
            }
        
            return retArr;
        }
        ,
        array_uintersect: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments. Data is compared by using an user-supplied callback.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_uintersect
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_uintersect($array1, $array2, function( f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {a: 'green', b: 'brown', 0: 'red'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 1,
                cb = arguments[argm1],
                k1 = '',
                i = 1,
                arr = {},
                k = '';
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb(arr[k], arr1[k1]) === 0) {
                            if (i === arglm2) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_uintersect_assoc: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check. Data is compared by using an user-supplied callback.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_uintersect_assoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_uintersect_assoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {a: 'green', b: 'brown'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 2,
                cb = arguments[arglm1],
                k1 = '',
                i = 1,
                arr = {},
                k = '';
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < arglm1; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (k === k1 && cb(arr[k], arr1[k1]) === 0) {
                            if (i === arglm2) {
                                retArr[k1] = arr1[k1];
                            }
                            // If the innermost loop always leads at least once to an equal value, continue the loop until done
                            continue arrs;
                        }
                    }
                    // If it reaches here, it wasn't found in at least one array, so try next value
                    continue arr1keys;
                }
            }
        
            return retArr;
        }
        ,
        array_uintersect_uassoc: function (arr1) {
            // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check. Both data and keys are compared by using user-supplied callbacks.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_uintersect_uassoc
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
            // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
            // *     example 1: $P.array_uintersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
            // *     returns 1: {a: 'green', b: 'brown'}
            var retArr = {},
                arglm1 = arguments.length - 1,
                arglm2 = arglm1 - 1,
                cb = arguments[arglm1],
                cb0 = arguments[arglm2],
                k1 = '',
                i = 1,
                k = '',
                arr = {};
        
            cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;
            cb0 = (typeof cb0 === 'string') ? this.window[cb0] : (Object.prototype.toString.call(cb0) === '[object Array]') ? this.window[cb0[0]][cb0[1]] : cb0;
        
            arr1keys: for (k1 in arr1) {
                arrs: for (i = 1; i < arglm2; i++) {
                    arr = arguments[i];
                    for (k in arr) {
                        if (cb0(arr[k], arr1[k1]) === 0 && cb(k, k1) === 0) {
                            if (i === arguments.length - 3) {
                                retArr[k1] = arr1[k1];
                            }
                            continue arrs; // If the innermost loop always leads at least once to an equal value, continue the loop until done
                        }
                    }
                    continue arr1keys; // If it reaches here, it wasn't found in at least one array, so try next value
                }
            }
        
            return retArr;
        }
        ,
        array_unique: function (inputArr) {
            // Removes duplicate values from array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_unique
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +      input by: duncan
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nate
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Michael Grier
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: The second argument, sort_flags is not implemented;
            // %          note 1: also should be sorted (asort?) first according to docs
            // *     example 1: $P.array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
            // *     returns 1: {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
            // *     example 2: $P.array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
            // *     returns 2: {a: 'green', 0: 'red', 1: 'blue'}
            var key = '',
                tmp_arr2 = {},
                val = '';
        
            var __array_search = function (needle, haystack) {
                var fkey = '';
                for (fkey in haystack) {
                    if (haystack.hasOwnProperty(fkey)) {
                        if ((haystack[fkey] + '') === (needle + '')) {
                            return fkey;
                        }
                    }
                }
                return false;
            };
        
            for (key in inputArr) {
                if (inputArr.hasOwnProperty(key)) {
                    val = inputArr[key];
                    if (false === __array_search(val, tmp_arr2)) {
                        tmp_arr2[key] = val;
                    }
                }
            }
        
            return tmp_arr2;
        }
        ,
        array_unshift: function (array) {
            // Pushes elements onto the beginning of the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_unshift
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Martijn Wieringa
            // +   improved by: jmweb
            // %        note 1: Currently does not handle objects
            // *     example 1: $P.array_unshift(['van', 'Zonneveld'], 'Kevin');
            // *     returns 1: 3
            var i = arguments.length;
        
            while (--i !== 0) {
                arguments[0].unshift(arguments[i]);
            }
        
            return arguments[0].length;
        }
        ,
        array_values: function (input) {
            // Return just the values from the input array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_values
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} );
            // *     returns 1: {0: 'Kevin', 1: 'van Zonneveld'}
            var tmp_arr = [],
                key = '';
        
            if (input && typeof input === 'object' && input.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
                return input.values();
            }
        
            for (key in input) {
                tmp_arr[tmp_arr.length] = input[key];
            }
        
            return tmp_arr;
        }
        ,
        array_walk: function (array, funcname, userdata) {
            // Apply a user function to every member of an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_walk
            // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
            // *     example 1: $P.array_walk ({'a':'b'}, 'void', 'userdata');
            // *     returns 1: true
            // *     example 2: $P.array_walk ('a', 'void', 'userdata');
            // *     returns 2: false
            var key;
        
            if (typeof array !== 'object' || array === null) {
                return false;
            }
        
            for (key in array) {
                if (typeof(userdata) !== 'undefined') {
                    eval(funcname + '( array [key] , key , userdata  )');
                } else {
                    eval(funcname + '(  userdata ) ');
                }
            }
        
            return true;
        }
        ,
        array_walk_recursive: function (array, funcname, userdata) {
            // Apply a user function recursively to every member of an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/array_walk_recursive
            // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
            // *     example 1: $P.array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata');
            // *     returns 1: true
            // *     example 2: $P.array_walk_recursive ('a', 'void', 'userdata');
            // *     returns 2: false
            var key;
        
            if (typeof array != 'object') {
                return false;
            }
        
            for (key in array) {
                if (typeof array[key] == 'object') {
                    return this.array_walk_recursive(array[key], funcname, userdata);
                }
        
                if (typeof(userdata) != 'undefined') {
                    eval(funcname + '( array [key] , key , userdata  )');
                } else {
                    eval(funcname + '(  userdata ) ');
                }
            }
        
            return true;
        }
        ,
        arsort: function (inputArr, sort_flags) {
            // Sort an array in reverse order and maintain index association  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/arsort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
            // %        note 1: integrated into all of these functions by adapting the code at
            // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
            // %        note 2: The examples are correct, this is a new way
            // %        note 2: Credits to: http://javascript.internet.com/math-related/bubble-sort.html
            // %        note 3: This function deviates from PHP in returning a copy of the array instead
            // %        note 3: of acting by reference and returning true; this was necessary because
            // %        note 3: IE does not allow deleting and re-adding of properties without caching
            // %        note 3: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 3: get the PHP behavior, but use this only if you are in an environment
            // %        note 3: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 3: property deletion is supported. Note that we intend to implement the PHP
            // %        note 3: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 3: is by reference in PHP anyways
            // %        note 4: Since JS objects' keys are always strings, and (the
            // %        note 4: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 4: if the content is a numeric string, we treat the
            // %        note 4: "original type" as numeric.
            // -    depends on: i18n_loc_get_default
            // *     example 1: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.data = arsort(data);
            // *     returns 1: data == {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 2: $P.arsort(data);
            // *     results 2: data == {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
            // *     returns 2: true
            var valArr = [], valArrLen = 0,
                k, i, ret, sorter, that = this,
                strictForIn = false,
                populateArr = {};
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(b, a);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return (a - b);
                };
                break;
            case 'SORT_REGULAR':
                // compare items normally (don't change types)
            default:
                sorter = function (b, a) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
        
            // Get key and value arrays
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push([k, inputArr[k]]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            valArr.sort(function (a, b) {
                return sorter(a[1], b[1]);
            });
         
            // Repopulate the old array
            for (i = 0, valArrLen = valArr.length; i < valArrLen; i++) {
                populateArr[valArr[i][0]] = valArr[i][1];
            }
        
            return strictForIn || populateArr;
        }
        ,
        asin: function (arg) {
            // Returns the arc sine of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/asin
            // +   original by: Onno Marsman
            // *     example 1: $P.asin(0.3);
            // *     returns 1: 0.3046926540153975
            return Math.asin(arg);
        }
        ,
        asinh: function (arg) {
            // Returns the inverse hyperbolic sine of the number, i.e. the value whose hyperbolic sine is number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/asinh
            // +   original by: Onno Marsman
            // *     example 1: $P.asinh(8723321.4);
            // *     returns 1: 16.67465779841863
            return Math.log(arg + Math.sqrt(arg * arg + 1));
        }
        ,
        asort: function (inputArr, sort_flags) {
            // Sort an array and maintain index association  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/asort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   input by: paulo kuong
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Adam Wallner (http://web2.bitbaro.hu/)
            // +   improved by: Theriault
            // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
            // %        note 1: integrated into all of these functions by adapting the code at
            // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
            // %        note 2: The examples are correct, this is a new way
            // %        note 2: Credits to: http://javascript.internet.com/math-related/bubble-sort.html
            // %        note 3: This function deviates from PHP in returning a copy of the array instead
            // %        note 3: of acting by reference and returning true; this was necessary because
            // %        note 3: IE does not allow deleting and re-adding of properties without caching
            // %        note 3: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 3: get the PHP behavior, but use this only if you are in an environment
            // %        note 3: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 3: property deletion is supported. Note that we intend to implement the PHP
            // %        note 3: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 3: is by reference in PHP anyways
            // %        note 4: Since JS objects' keys are always strings, and (the
            // %        note 4: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 4: if the content is a numeric string, we treat the
            // %        note 4: "original type" as numeric.
            // -    depends on: strnatcmp
            // -    depends on: i18n_loc_get_default
            // *     example 1: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.data = asort(data);
            // *     results 1: data == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
            // *     returns 1: true
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 2: $P.asort(data);
            // *     results 2: data == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
            // *     returns 2: true
            var valArr = [], valArrLen = 0,
                k, i, ret, sorter, that = this,
                strictForIn = false,
                populateArr = {};
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(a, b);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return (a - b);
                };
                break;
            case 'SORT_REGULAR':
                // compare items normally (don't change types)
            default:
                sorter = function (a, b) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            // Get key and value arrays
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push([k, inputArr[k]]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            
            valArr.sort(function (a, b) {
                return sorter(a[1], b[1]);
            });
        
            // Repopulate the old array
            for (i = 0, valArrLen = valArr.length; i < valArrLen; i++) {
                populateArr[valArr[i][0]] = valArr[i][1];
            }
        
            return strictForIn || populateArr;
        }
        ,
        assert: function (assertion) {
            // Checks if assertion is false  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/assert
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: Do not pass untrusted user input to assert() in string form (you can test it beforehand though)
            // %          note 2: Does not provide perfect arguments to the assertion callback, as far as file location or line number
            // *     example 1: $P.assert('false === true');
            // *     returns 1: false
            var result = false,
                callback, retVal, err = undefined;
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            this.php_js.assert_values = this.php_js.assert_values || {};
            // END REDUNDANT
        
            var getOption = function (value) {
                if (this.php_js.assert_values[value]) {
                    return this.php_js.assert_values[value];
                }
                if (this.php_js.ini[value]) {
                    return this.php_js.ini[value].local_value;
                }
                switch (value) {
                case 'assert.active':
                    return 1;
                case 'assert.warning':
                    // Don't need this now
                    //return 1;
                    throw 'We have not yet implemented warnings in JavaScript (assert())';
                case 'assert.bail':
                    return 0;
                case 'assert.quiet_eval':
                    return 0;
                case 'assert.callback':
                    return null;
                default:
                    throw 'There was some problem';
                }
            };
        
            if (!getOption('assert.active')) {
                return false; // is this correct? should callbacks still execute? Should still bail if on?
            }
        
            try { // Less overhead to use string when assertion checking is off, allows message of exact code to callback
                result = typeof assertion === 'string' ? eval(assertion) : assertion;
            } catch (e) {
                if (!getOption('assert.quiet_eval')) {
                    throw e;
                }
                err = e;
                result = false;
            }
            retVal = result !== false; // return false if false, otherwise, return true
            if (retVal === false) {
                if (getOption('assert.bail')) { // Todo: Will the function bail before a callback or after?
                    throw 'Assertion bailed'; // No way to bail without throwing an exception (and there are no "warnings" in JavaScript for us to throw)
                }
                callback = getOption('assert.callback');
                if (typeof callback === 'string') {
                    callback = this.window[callback];
                }
                // Not perfect for file location (might also use __FILE__()) or line number
                callback(this.window.location.href, err && err.lineNumber, (typeof assertion === 'string' ? assertion : '')); // From the docs, what does this mean?: "the third argument will contain the expression that failed (if any - literal values such as 1 or "two" will not be passed via this argument)"
            }
            return retVal;
        }
        ,
        assert_options: function (what, value) {
            // Set/get the various assert flags  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/assert_options
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.assert_options('ASSERT_CALLBACK');
            // *     returns 1: null
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            this.php_js.assert_values = this.php_js.assert_values || {};
            // END REDUNDANT
        
            var ini, dflt;
            switch (what) {
            case 'ASSERT_ACTIVE':
                ini = 'assert.active';
                dflt = 1;
                break;
            case 'ASSERT_WARNING':
                ini = 'assert.warning';
                dflt = 1;
                throw 'We have not yet implemented warnings for us to throw in JavaScript (assert_options())';
            case 'ASSERT_BAIL':
                ini = 'assert.bail';
                dflt = 0;
                break;
            case 'ASSERT_QUIET_EVAL':
                ini = 'assert.quiet_eval';
                dflt = 0;
                break;
            case 'ASSERT_CALLBACK':
                ini = 'assert.callback';
                dflt = null;
                break;
            default:
                throw 'Improper type for assert_options()';
            }
            // I presume this is to be the most recent value, instead of the default value
            var originalValue = this.php_js.assert_values[ini] || (this.php_js.ini[ini] && this.php_js.ini[ini].local_value) || dflt;
        
            if (value) {
                this.php_js.assert_values[ini] = value; // We use 'ini' instead of 'what' as key to be more convenient for assert() to test for current value
            }
            return originalValue;
        }
        ,
        atan: function (arg) {
            // Returns the arc tangent of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/atan
            // +   original by: Onno Marsman
            // *     example 1: $P.atan(8723321.4);
            // *     returns 1: 1.5707962121596615
            return Math.atan(arg);
        }
        ,
        atan2: function (y, x) {
            // Returns the arc tangent of y/x, with the resulting quadrant determined by the signs of y and x  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/atan2
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.atan2(1, 1);
            // *     returns 1: 0.7853981633974483
            return Math.atan2(y, x);
        }
        ,
        atanh: function (arg) {
            // Returns the inverse hyperbolic tangent of the number, i.e. the value whose hyperbolic tangent is number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/atanh
            // +   original by: Onno Marsman
            // *     example 1: $P.atanh(0.3);
            // *     returns 1: 0.3095196042031118
            return 0.5 * Math.log((1 + arg) / (1 - arg));
        }
        ,
        base64_decode: function (data) {
            // Decodes string using MIME base64 algorithm  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/base64_decode
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Thunder.m
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: utf8_decode
            // *     example 1: $P.base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
            // *     returns 1: 'Kevin van Zonneveld'
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['btoa'] == 'function') {
            //    return btoa(data);
            //}
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                dec = "",
                tmp_arr = [];
        
            if (!data) {
                return data;
            }
        
            data += '';
        
            do { // unpack four hexets into three octets using index points in b64
                h1 = b64.indexOf(data.charAt(i++));
                h2 = b64.indexOf(data.charAt(i++));
                h3 = b64.indexOf(data.charAt(i++));
                h4 = b64.indexOf(data.charAt(i++));
        
                bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        
                o1 = bits >> 16 & 0xff;
                o2 = bits >> 8 & 0xff;
                o3 = bits & 0xff;
        
                if (h3 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1);
                } else if (h4 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2);
                } else {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                }
            } while (i < data.length);
        
            dec = tmp_arr.join('');
            dec = this.utf8_decode(dec);
        
            return dec;
        }
        ,
        base64_encode: function (data) {
            // Encodes string using MIME base64 algorithm  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/base64_encode
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Bayron Guevara
            // +   improved by: Thunder.m
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Rafał Kukawski (http://kukawski.pl)
            // -    depends on: utf8_encode
            // *     example 1: $P.base64_encode('Kevin van Zonneveld');
            // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['atob'] == 'function') {
            //    return atob(data);
            //}
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                enc = "",
                tmp_arr = [];
        
            if (!data) {
                return data;
            }
        
            data = this.utf8_encode(data + '');
        
            do { // pack three octets into four hexets
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);
        
                bits = o1 << 16 | o2 << 8 | o3;
        
                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;
        
                // use hexets to index into b64, and append result to encoded string
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < data.length);
        
            enc = tmp_arr.join('');
            
            var r = data.length % 3;
            
            return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
        }
        ,
        base_convert: function (number, frombase, tobase) {
            // Converts a number in a string from any base <= 36 to any base <= 36  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/base_convert
            // +   original by: Philippe Baumann
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // *     example 1: $P.base_convert('A37334', 16, 2);
            // *     returns 1: '101000110111001100110100'
            return parseInt(number + '', frombase | 0).toString(tobase | 0);
        }
        ,
        basename: function (path, suffix) {
            // Returns the filename component of the path  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/basename
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ash Searle (http://hexmen.com/blog/)
            // +   improved by: Lincoln Ramsay
            // +   improved by: djmix
            // *     example 1: $P.basename('/www/site/home.htm', '.htm');
            // *     returns 1: 'home'
            // *     example 2: $P.basename('ecra.php?p=1');
            // *     returns 2: 'ecra.php?p=1'
            var b = path.replace(/^.*[\/\\]/g, '');
        
            if (typeof(suffix) == 'string' && b.substr(b.length - suffix.length) == suffix) {
                b = b.substr(0, b.length - suffix.length);
            }
        
            return b;
        }
        ,
        ceil: function (value) {
            // Returns the next highest integer value of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ceil
            // +   original by: Onno Marsman
            // *     example 1: $P.ceil(8723321.4);
            // *     returns 1: 8723322
            return Math.ceil(value);
        }
        ,
        checkdate: function (m, d, y) {
            // Returns true(1) if it is a valid date in gregorian calendar  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/checkdate
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Pyerre
            // +   improved by: Theriault
            // *     example 1: $P.checkdate(12, 31, 2000);
            // *     returns 1: true
            // *     example 2: $P.checkdate(2, 29, 2001);
            // *     returns 2: false
            // *     example 3: $P.checkdate(3, 31, 2008);
            // *     returns 3: true
            // *     example 4: $P.checkdate(1, 390, 2000);
            // *     returns 4: false
            return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
        }
        ,
        chop: function (str, charlist) {
            // !No description available for chop. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/chop
            // +   original by: Paulo Freitas
            // -    depends on: rtrim
            // *     example 1: $P.rtrim('    Kevin van Zonneveld    ');
            // *     returns 1: '    Kevin van Zonneveld'
            return this.rtrim(str, charlist);
        }
        ,
        chr: function (codePt) {
            // Converts a codepoint number to a character  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/chr
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.chr(75);
            // *     returns 1: 'K'
            // *     example 1: $P.chr(65536) === '\uD800\uDC00';
            // *     returns 1: true
            if (codePt > 0xFFFF) { // Create a four-byte string (length 2) since this code point is high
                //   enough for the UTF-16 encoding (JavaScript internal use), to
                //   require representation with two surrogates (reserved non-characters
                //   used for building other characters; the first is "high" and the next "low")
                codePt -= 0x10000;
                return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
            }
            return String.fromCharCode(codePt);
        }
        ,
        chunk_split: function (body, chunklen, end) {
            // Returns split line  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/chunk_split
            // +   original by: Paulo Freitas
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Theriault
            // *     example 1: $P.chunk_split('Hello world!', 1, '*');
            // *     returns 1: 'H*e*l*l*o* *w*o*r*l*d*!*'
            // *     example 2: $P.chunk_split('Hello world!', 10, '*');
            // *     returns 2: 'Hello worl*d!*'
            chunklen = parseInt(chunklen, 10) || 76;
            end = end || '\r\n';
        
            if (chunklen < 1) {
                return false;
            }
        
            return body.match(new RegExp(".{0," + chunklen + "}", "g")).join(end);
        }
        ,
        class_alias: function (clss, alias, autoload) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: This function is not documented and only available in PHP source
            // *     example 1: $P.function someFunc () {}
            // *     example 1: $P.class_alias('someFunc', 'olFunc');
            // *     returns 1: true
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
            if (autoload && typeof this.window.__autoload === 'function') {
                this.window.__autoload(clss);
            }
            if (typeof clss === 'string') {
                clss = this.window[clss];
            }
            if (typeof clss === 'undefined') {
                throw "Class '" + getFuncName(clss) + "' not found";
                return false; // Return false until replace throw with error triggering
            }
            if (typeof clss !== 'function') {
                throw 'First argument of class_alias() must be a name of user defined class';
                return false;
            }
            if (typeof this.window[alias] === 'function') {
                throw 'Cannot redeclare class ' + alias;
                return false;
            }
        
            this.window[alias] = clss;
            return true;
        }
        ,
        class_exists: function (cls) {
            // Checks if the class exists  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/class_exists
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function class_a() {this.meth1 = function () {return true;}};
            // *     example 1: $P.var instance_a = new class_a();
            // *     example 1: $P.class_exists('class_a');
            // *     returns 1: true
            var i = '';
            cls = this.window[cls]; // Note: will prevent inner classes
            if (typeof cls !== 'function') {
                return false;
            }
        
            for (i in cls.prototype) {
                return true;
            }
            for (i in cls) { // If static members exist, then consider a "class"
                if (i !== 'prototype') {
                    return true;
                }
            }
            if (cls.toSource && cls.toSource().match(/this\./)) {
                // Hackish and non-standard but can probably detect if setting
                // a property (we don't want to test by instantiating as that
                // may have side-effects)
                return true;
            }
        
            return false;
        }
        ,
        compact: function () {
            // Creates a hash containing variables and their values  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/compact
            // +   original by: Waldo Malqui Silva
            // +    tweaked by: Jack
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.var1 = 'Kevin'; var2 = 'van'; var3 = 'Zonneveld';  
            // *     example 1: $P.compact('var1', 'var2', 'var3');
            // *     returns 1: {'var1': 'Kevin', 'var2': 'van', 'var3': 'Zonneveld'}    
            var matrix = {},
                that = this;
        
            var process = function (value) {
                var i = 0,
                    l = value.length,
                    key_value = '';
                for (i = 0; i < l; i++) {
                    key_value = value[i];
                    if (Object.prototype.toString.call(key_value) === '[object Array]') {
                        process(key_value);
                    } else {
                        if (typeof that.window[key_value] !== 'undefined') {
                            matrix[key_value] = that.window[key_value];
                        }
                    }
                }
                return true;
            };
        
            process(arguments);
            return matrix;
        }
        ,
        convert_uuencode: function (str) {
            // uuencode a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/convert_uuencode
            // +   original by: Ole Vrijenhoek
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   reimplemented by: Ole Vrijenhoek
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: is_scalar
            // *     example 1: $P.convert_uuencode("test\ntext text\r\n");
            // *     returns 1: '0=&5S=`IT97AT('1E>'0-"@``'
            // shortcut
            var chr = function (c) {
                return String.fromCharCode(c);
            };
        
            if (!str || str == "") {
                return chr(0);
            } else if (!this.is_scalar(str)) {
                return false;
            }
        
            var c = 0,
                u = 0,
                i = 0,
                a = 0;
            var encoded = "",
                tmp1 = "",
                tmp2 = "",
                bytes = {};
        
            // divide string into chunks of 45 characters
            var chunk = function () {
                bytes = str.substr(u, 45);
                for (i in bytes) {
                    bytes[i] = bytes[i].charCodeAt(0);
                }
                if (bytes.length != 0) {
                    return bytes.length;
                } else {
                    return 0;
                }
            };
        
            while (chunk() !== 0) {
                c = chunk();
                u += 45;
        
                // New line encoded data starts with number of bytes encoded.
                encoded += chr(c + 32);
        
                // Convert each char in bytes[] to a byte
                for (i in bytes) {
                    tmp1 = bytes[i].charCodeAt(0).toString(2);
                    while (tmp1.length < 8) {
                        tmp1 = "0" + tmp1;
                    }
                    tmp2 += tmp1;
                }
        
                while (tmp2.length % 6) {
                    tmp2 = tmp2 + "0";
                }
        
                for (i = 0; i <= (tmp2.length / 6) - 1; i++) {
                    tmp1 = tmp2.substr(a, 6);
                    if (tmp1 == "000000") {
                        encoded += chr(96);
                    } else {
                        encoded += chr(parseInt(tmp1, 2) + 32);
                    }
                    a += 6;
                }
                a = 0;
                tmp2 = "";
                encoded += "\n";
            }
        
            // Add termination characters
            encoded += chr(96) + "\n";
        
            return encoded;
        }
        ,
        cos: function (arg) {
            // Returns the cosine of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/cos
            // +   original by: Onno Marsman
            // *     example 1: $P.cos(8723321.4);
            // *     returns 1: -0.18127180117607017
            return Math.cos(arg);
        }
        ,
        cosh: function (arg) {
            // Returns the hyperbolic cosine of the number, defined as (exp(number) + exp(-number))/2  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/cosh
            // +   original by: Onno Marsman
            // *     example 1: $P.cosh(-0.18127180117607017);
            // *     returns 1: 1.0164747716114113
            return (Math.exp(arg) + Math.exp(-arg)) / 2;
        }
        ,
        count: function (mixed_var, mode) {
            // Count the number of elements in a variable (usually an array)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/count
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Waldo Malqui Silva
            // +   bugfixed by: Soren Hansen
            // +      input by: merabi
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Olivier Louvignes (http://mg-crea.com/)
            // *     example 1: $P.count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
            // *     returns 1: 6
            // *     example 2: $P.count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
            // *     returns 2: 6
            var key, cnt = 0;
        
            if (mixed_var === null || typeof mixed_var === 'undefined') {
                return 0;
            } else if (mixed_var.constructor !== Array && mixed_var.constructor !== Object) {
                return 1;
            }
        
            if (mode === 'COUNT_RECURSIVE') {
                mode = 1;
            }
            if (mode != 1) {
                mode = 0;
            }
        
            for (key in mixed_var) {
                if (mixed_var.hasOwnProperty(key)) {
                    cnt++;
                    if (mode == 1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object)) {
                        cnt += this.count(mixed_var[key], 1);
                    }
                }
            }
        
            return cnt;
        }
        ,
        current: function (arr) {
            // Return the element currently pointed to by the internal array pointer  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/current
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.transport = ['foot', 'bike', 'car', 'plane'];
            // *     example 1: $P.current(transport); 
            // *     returns 1: 'foot'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            var cursor = pointers[arrpos + 1];
            if (Object.prototype.toString.call(arr) === '[object Array]') {
                return arr[cursor] || false;
            }
            var ct = 0;
            for (var k in arr) {
                if (ct === cursor) {
                    return arr[k];
                }
                ct++;
            }
            return false; // Empty
        }
        ,
        date: function (format, timestamp) {
            // Format a local date/time  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/date
            // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +      parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: MeEtc (http://yass.meetcweb.com)
            // +   improved by: Brad Touesnard
            // +   improved by: Tim Wiel
            // +   improved by: Bryan Elliott
            //
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: David Randall
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +  derived from: gettimeofday
            // +      input by: majak
            // +   bugfixed by: majak
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +   improved by: Thomas Beaucourt (http://www.webapp.fr)
            // +   improved by: JT
            // +   improved by: Theriault
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // +   bugfixed by: omid (http://phpjs.org/functions/380:380#comment_137122)
            // +      input by: Martin
            // +      input by: Alex Wilson
            // %        note 1: Uses global: php_js to store the default timezone
            // %        note 2: Although the function potentially allows timezone info (see notes), it currently does not set
            // %        note 2: per a timezone specified by date_default_timezone_set(). Implementers might use
            // %        note 2: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
            // %        note 2: in order to adjust the dates in this function (or our other date functions!) accordingly
            // *     example 1: $P.date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
            // *     returns 1: '09:09:40 m is month'
            // *     example 2: $P.date('F j, Y, g:i a', 1062462400);
            // *     returns 2: 'September 2, 2003, 2:26 am'
            // *     example 3: $P.date('Y W o', 1062462400);
            // *     returns 3: '2003 36 2003'
            // *     example 4: x = date('Y m d', (new Date()).getTime()/1000); 
            // *     example 4: (x+'').length == 10 // 2009 01 09
            // *     returns 4: true
            // *     example 5: $P.date('W', 1104534000);
            // *     returns 5: '53'
            // *     example 6: $P.date('B t', 1104534000);
            // *     returns 6: '999 31'
            // *     example 7: $P.date('W U', 1293750000.82); // 2010-12-31
            // *     returns 7: '52 1293750000'
            // *     example 8: $P.date('W', 1293836400); // 2011-01-01
            // *     returns 8: '52'
            // *     example 9: $P.date('W Y-m-d', 1293974054); // 2011-01-02
            // *     returns 9: '52 2011-01-02'
            var that = this,
                jsdate, f, formatChr = /\\?([a-z])/gi,
                formatChrCb,
                // Keep this here (works, but for code commented-out
                // below for file size reasons)
                //, tal= [],
                _pad = function (n, c) {
                    if ((n = n + '').length < c) {
                        return new Array((++c) - n.length).join('0') + n;
                    }
                    return n;
                },
                txt_words = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            formatChrCb = function (t, s) {
                return f[t] ? f[t]() : s;
            };
            f = {
                // Day
                d: function () { // Day of month w/leading 0; 01..31
                    return _pad(f.j(), 2);
                },
                D: function () { // Shorthand day name; Mon...Sun
                    return f.l().slice(0, 3);
                },
                j: function () { // Day of month; 1..31
                    return jsdate.getDate();
                },
                l: function () { // Full day name; Monday...Sunday
                    return txt_words[f.w()] + 'day';
                },
                N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
                    return f.w() || 7;
                },
                S: function () { // Ordinal suffix for day of month; st, nd, rd, th
                    var j = f.j();
                    return j > 4 && j < 21 ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[j % 10] || 'th';
                },
                w: function () { // Day of week; 0[Sun]..6[Sat]
                    return jsdate.getDay();
                },
                z: function () { // Day of year; 0..365
                    var a = new Date(f.Y(), f.n() - 1, f.j()),
                        b = new Date(f.Y(), 0, 1);
                    return Math.round((a - b) / 864e5) + 1;
                },
        
                // Week
                W: function () { // ISO-8601 week number
                    var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3),
                        b = new Date(a.getFullYear(), 0, 4);
                    return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
                },
        
                // Month
                F: function () { // Full month name; January...December
                    return txt_words[6 + f.n()];
                },
                m: function () { // Month w/leading 0; 01...12
                    return _pad(f.n(), 2);
                },
                M: function () { // Shorthand month name; Jan...Dec
                    return f.F().slice(0, 3);
                },
                n: function () { // Month; 1...12
                    return jsdate.getMonth() + 1;
                },
                t: function () { // Days in month; 28...31
                    return (new Date(f.Y(), f.n(), 0)).getDate();
                },
        
                // Year
                L: function () { // Is leap year?; 0 or 1
                    return new Date(f.Y(), 1, 29).getMonth() === 1 | 0;
                },
                o: function () { // ISO-8601 year
                    var n = f.n(),
                        W = f.W(),
                        Y = f.Y();
                    return Y + (n === 12 && W < 9 ? -1 : n === 1 && W > 9);
                },
                Y: function () { // Full year; e.g. 1980...2010
                    return jsdate.getFullYear();
                },
                y: function () { // Last two digits of year; 00...99
                    return (f.Y() + "").slice(-2);
                },
        
                // Time
                a: function () { // am or pm
                    return jsdate.getHours() > 11 ? "pm" : "am";
                },
                A: function () { // AM or PM
                    return f.a().toUpperCase();
                },
                B: function () { // Swatch Internet time; 000..999
                    var H = jsdate.getUTCHours() * 36e2,
                        // Hours
                        i = jsdate.getUTCMinutes() * 60,
                        // Minutes
                        s = jsdate.getUTCSeconds(); // Seconds
                    return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
                },
                g: function () { // 12-Hours; 1..12
                    return f.G() % 12 || 12;
                },
                G: function () { // 24-Hours; 0..23
                    return jsdate.getHours();
                },
                h: function () { // 12-Hours w/leading 0; 01..12
                    return _pad(f.g(), 2);
                },
                H: function () { // 24-Hours w/leading 0; 00..23
                    return _pad(f.G(), 2);
                },
                i: function () { // Minutes w/leading 0; 00..59
                    return _pad(jsdate.getMinutes(), 2);
                },
                s: function () { // Seconds w/leading 0; 00..59
                    return _pad(jsdate.getSeconds(), 2);
                },
                u: function () { // Microseconds; 000000-999000
                    return _pad(jsdate.getMilliseconds() * 1000, 6);
                },
        
                // Timezone
                e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
                    // The following works, but requires inclusion of the very large
                    // timezone_abbreviations_list() function.
        /*              return this.date_default_timezone_get();
        */
                    throw 'Not supported (see source code of date() for timezone on how to add support)';
                },
                I: function () { // DST observed?; 0 or 1
                    // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
                    // If they are not equal, then DST is observed.
                    var a = new Date(f.Y(), 0),
                        // Jan 1
                        c = Date.UTC(f.Y(), 0),
                        // Jan 1 UTC
                        b = new Date(f.Y(), 6),
                        // Jul 1
                        d = Date.UTC(f.Y(), 6); // Jul 1 UTC
                    return 0 + ((a - c) !== (b - d));
                },
                O: function () { // Difference to GMT in hour format; e.g. +0200
                    var tzo = jsdate.getTimezoneOffset(),
                        a = Math.abs(tzo);
                    return (tzo > 0 ? "-" : "+") + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                P: function () { // Difference to GMT w/colon; e.g. +02:00
                    var O = f.O();
                    return (O.substr(0, 3) + ":" + O.substr(3, 2));
                },
                T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
                    // The following works, but requires inclusion of the very
                    // large timezone_abbreviations_list() function.
        /*              var abbr = '', i = 0, os = 0, default = 0;
                    if (!tal.length) {
                        tal = that.timezone_abbreviations_list();
                    }
                    if (that.php_js && that.php_js.default_timezone) {
                        default = that.php_js.default_timezone;
                        for (abbr in tal) {
                            for (i=0; i < tal[abbr].length; i++) {
                                if (tal[abbr][i].timezone_id === default) {
                                    return abbr.toUpperCase();
                                }
                            }
                        }
                    }
                    for (abbr in tal) {
                        for (i = 0; i < tal[abbr].length; i++) {
                            os = -jsdate.getTimezoneOffset() * 60;
                            if (tal[abbr][i].offset === os) {
                                return abbr.toUpperCase();
                            }
                        }
                    }
        */
                    return 'UTC';
                },
                Z: function () { // Timezone offset in seconds (-43200...50400)
                    return -jsdate.getTimezoneOffset() * 60;
                },
        
                // Full Date/Time
                c: function () { // ISO-8601 date.
                    return 'Y-m-d\\Th:i:sP'.replace(formatChr, formatChrCb);
                },
                r: function () { // RFC 2822
                    return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
                },
                U: function () { // Seconds since UNIX epoch
                    return jsdate.getTime() / 1000 | 0;
                }
            };
            this.date = function (format, timestamp) {
                that = this;
                jsdate = ((typeof timestamp === 'undefined') ? new Date() : // Not provided
                (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
                );
                return format.replace(formatChr, formatChrCb);
            };
            return this.date(format, timestamp);
        }
        ,
        date_default_timezone_get: function () {
            // !No description available for date_default_timezone_get. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/date_default_timezone_get
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: timezone_abbreviations_list
            // %        note 1: Uses global: php_js to store the default timezone
            // *     example 1: $P.date_default_timezone_get();
            // *     returns 1: 'unknown'
            var tal = {},
                abbr = '',
                i = 0,
                curr_offset = -(new Date()).getTimezoneOffset() * 60;
        
            if (this.php_js) {
                if (this.php_js.default_timezone) { // set by date_default_timezone_set
                    return this.php_js.default_timezone;
                }
                if (this.php_js.ENV && this.php_js.ENV.TZ) { // getenv
                    return this.php_js.ENV.TZ;
                }
                if (this.php_js.ini && this.php_js.ini['date.timezone']) { // e.g., if set by ini_set()
                    return this.php_js.ini['date.timezone'].local_value ? this.php_js.ini['date.timezone'].local_value : this.php_js.ini['date.timezone'].global_value;
                }
            }
            // Get from system
            tal = this.timezone_abbreviations_list();
            for (abbr in tal) {
                for (i = 0; i < tal[abbr].length; i++) {
                    if (tal[abbr][i].offset === curr_offset) {
                        return tal[abbr][i].timezone_id;
                    }
                }
            }
            return 'UTC';
        }
        ,
        date_default_timezone_set: function (tz) {
            // Sets the default timezone used by all date/time functions in a script  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/date_default_timezone_set
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: timezone_abbreviations_list
            // %        note 1: Uses global: php_js to store the default timezone
            // *     example 1: $P.date_default_timezone_set('unknown');
            // *     returns 1: 'unknown'
            var tal = {},
                abbr = '',
                i = 0;
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            // END REDUNDANT
            // PHP verifies that the timezone is valid and also sets this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST if so
            tal = this.timezone_abbreviations_list();
            for (abbr in tal) {
                for (i = 0; i < tal[abbr].length; i++) {
                    if (tal[abbr][i].timezone_id === tz) {
                        this.php_js.default_timezone = tz;
                        return true;
                    }
                }
            }
            return false;
        }
        ,
        date_parse: function (date) {
            // Returns associative array with detailed info about given date  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/date_parse
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: strtotime
            // *     example 1: $P.date_parse('2006-12-12 10:00:00.5');
            // *     returns 1: {year : 2006, month: 12, day: 12, hour: 10, minute: 0, second: 0, fraction: 0.5, warning_count: 0, warnings: [], error_count: 0, errors: [], is_localtime: false}
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            // END REDUNDANT
        
            var warningsOffset = this.php_js.warnings ? this.php_js.warnings.length : null;
            var errorsOffset = this.php_js.errors ? this.php_js.errors.length : null;
        
            try {
                var ts = this.strtotime(date);
            } finally {
                if (!ts) {
                    return false;
                }
            }
        
            var dt = new Date(ts * 1000);
        
            var retObj = { // Grab any new warnings or errors added (not implemented yet in strtotime()); throwing warnings, notices, or errors could also be easily monitored by using 'watch' on this.php_js.latestWarning, etc. and/or calling any defined error handlers
                warning_count: warningsOffset !== null ? this.php_js.warnings.slice(warningsOffset).length : 0,
                warnings: warningsOffset !== null ? this.php_js.warnings.slice(warningsOffset) : [],
                error_count: errorsOffset !== null ? this.php_js.errors.slice(errorsOffset).length : 0,
                errors: errorsOffset !== null ? this.php_js.errors.slice(errorsOffset) : []
            };
            retObj.year = dt.getFullYear();
            retObj.month = dt.getMonth() + 1;
            retObj.day = dt.getDate();
            retObj.hour = dt.getHours();
            retObj.minute = dt.getMinutes();
            retObj.second = dt.getSeconds();
            retObj.fraction = parseFloat('0.' + dt.getMilliseconds());
            retObj.is_localtime = dt.getTimezoneOffset !== 0;
        
            return retObj;
        }
        ,
        deaggregate: function (obj, class_name) {
            // !No description available for deaggregate. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/deaggregate
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.var A = function () {};
            // *     example 1: A.prop = 5;
            // *     example 1: A.prototype.someMethod = function () {};
            // *     example 1: $P.var b = {};
            // *     example 1: $P.aggregate(b, 'A');
            // *     example 1: $P.deaggregate(b, 'A');
            // *     returns 1: undefined
            var p = '',
                idx = -1,
                pos = -1,
                i = 0,
                indexOf = function (value) {
                    for (var i = 0, length = this.length; i < length; i++) {
                        if (this[i] === value) {
                            return i;
                        }
                    }
                    return -1;
                },
                getFuncName = function (fn) {
                    var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                    if (!name) {
                        return '(Anonymous)';
                    }
                    return name[1];
                };
        
            if (!this.php_js || !this.php_js.aggregateRecords || !this.php_js.aggregateKeys || !this.php_js.aggregateClasses) {
                return;
            }
        
            if (!this.php_js.aggregateKeys.indexOf) {
                this.php_js.aggregateKeys.indexOf = indexOf;
            }
            idx = this.php_js.aggregateKeys.indexOf(obj);
            if (idx === -1) {
                return;
            }
        
            if (class_name) {
                if (typeof class_name === 'string') { // PHP behavior
                    class_name = this.window[class_name];
                }
                if (!this.php_js.aggregateClasses[idx].indexOf) {
                    this.php_js.aggregateClasses[idx].indexOf = indexOf;
                }
                pos = this.php_js.aggregateClasses[idx].indexOf(getFuncName(class_name));
                if (pos !== -1) {
                    for (p in this.php_js.aggregateRecords[idx][pos]) {
                        delete obj[p];
                    }
                    this.php_js.aggregateClasses[idx].splice(pos, 1);
                    this.php_js.aggregateRecords[idx].splice(pos, 1);
                }
            } else {
                for (i = 0; i < this.php_js.aggregateClasses[idx].length; i++) {
                    for (p in this.php_js.aggregateRecords[idx][i]) {
                        delete obj[p];
                    }
                }
                this.php_js.aggregateClasses.splice(idx, 1);
                this.php_js.aggregateRecords.splice(idx, 1);
            }
        }
        ,
        decbin: function (number) {
            // Returns a string containing a binary representation of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/decbin
            // +   original by: Enrique Gonzalez
            // +   bugfixed by: Onno Marsman
            // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
            // +   input by: pilus
            // +   input by: nord_ua
            // *     example 1: $P.decbin(12);
            // *     returns 1: '1100'
            // *     example 2: $P.decbin(26);
            // *     returns 2: '11010'
            // *     example 3: $P.decbin('26');
            // *     returns 3: '11010'
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1;
            }
            return parseInt(number, 10).toString(2);
        }
        ,
        dechex: function (number) {
            // Returns a string containing a hexadecimal representation of the given number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/dechex
            // +   original by: Philippe Baumann
            // +   bugfixed by: Onno Marsman
            // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
            // +   input by: pilus
            // *     example 1: $P.dechex(10);
            // *     returns 1: 'a'
            // *     example 2: $P.dechex(47);
            // *     returns 2: '2f'
            // *     example 3: $P.dechex(-1415723993);
            // *     returns 3: 'ab9dc427'
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1;
            }
            return parseInt(number, 10).toString(16);
        }
        ,
        decoct: function (number) {
            // Returns a string containing an octal representation of the given number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/decoct
            // +   original by: Enrique Gonzalez
            // +   bugfixed by: Onno Marsman
            // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
            // +   input by: pilus
            // *     example 1: $P.decoct(15);
            // *     returns 1: '17'
            // *     example 2: $P.decoct(264); 
            // *     returns 2: '410'
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1;
            }
            return parseInt(number, 10).toString(8);
        }
        ,
        deg2rad: function (angle) {
            // Converts the number in degrees to the radian equivalent  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/deg2rad
            // +   original by: Enrique Gonzalez
            // *     example 1: $P.deg2rad(45);
            // *     returns 1: 0.7853981633974483
            return (angle / 180) * Math.PI;
        }
        ,
        dirname: function (path) {
            // Returns the directory name component of the path  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/dirname
            // +   original by: Ozh
            // +   improved by: XoraX (http://www.xorax.info)
            // *     example 1: $P.dirname('/etc/passwd');
            // *     returns 1: '/etc'
            // *     example 2: $P.dirname('c:/Temp/x');
            // *     returns 2: 'c:/Temp'
            // *     example 3: $P.dirname('/dir/test/');
            // *     returns 3: '/dir'
            return path.replace(/\\/g, '/').replace(/\/[^\/]*\/?$/, '');
        }
        ,
        doubleval: function (mixed_var) {
            // !No description available for doubleval. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/doubleval
            // +   original by: Brett Zamir (http://brett-zamir.me)
            //  -   depends on: floatval
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.doubleval(186);
            // *     returns 1: 186.00
            return this.floatval(mixed_var);
        }
        ,
        each: function (arr) {
            // Return the currently pointed key..value pair in the passed array, and advance the pointer to the next element  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/each
            // +   original by: Ates Goral (http://magnetiq.com) 
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.each({a: "apple", b: "balloon"});
            // *     returns 1: {0: "a", 1: "apple", key: "a", value: "apple"}
            //  Will return a 4-item object unless a class property 'returnArrayOnly'
            //  is set to true on this function if want to only receive a two-item
            //  numerically-indexed array (for the sake of array destructuring in
            //  JavaScript 1.7+ (similar to list() in PHP, but as PHP does it automatically
            //  in that context and JavaScript cannot, we needed something to allow that option)
            //  See https://developer.mozilla.org/en/New_in_JavaScript_1.7#Destructuring_assignment
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            var cursor = pointers[arrpos + 1];
            var pos = 0;
        
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                var ct = 0;
                for (var k in arr) {
                    if (ct === cursor) {
                        pointers[arrpos + 1] += 1;
                        if (each.returnArrayOnly) {
                            return [k, arr[k]];
                        } else {
                            return {
                                1: arr[k],
                                value: arr[k],
                                0: k,
                                key: k
                            };
                        }
                    }
                    ct++;
                }
                return false; // Empty
            }
            if (arr.length === 0 || cursor === arr.length) {
                return false;
            }
            pos = cursor;
            pointers[arrpos + 1] += 1;
            if (each.returnArrayOnly) {
                return [pos, arr[pos]];
            } else {
                return {
                    1: arr[pos],
                    value: arr[pos],
                    0: pos,
                    key: pos
                };
            }
        }
        ,
        echo: function () {
            // !No description available for echo. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/echo
            // +   original by: Philip Peterson
            // +   improved by: echo is bad
            // +   improved by: Nate
            // +    revised by: Der Simon (http://innerdom.sourceforge.net/)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Eugene Bulkin (http://doubleaw.com/)
            // +   input by: JB
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: EdorFaus
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: If browsers start to support DOM Level 3 Load and Save (parsing/serializing),
            // %        note 1: we wouldn't need any such long code (even most of the code below). See
            // %        note 1: link below for a cross-browser implementation in JavaScript. HTML5 might
            // %        note 1: possibly support DOMParser, but that is not presently a standard.
            // %        note 2: Although innerHTML is widely used and may become standard as of HTML5, it is also not ideal for
            // %        note 2: use with a temporary holder before appending to the DOM (as is our last resort below),
            // %        note 2: since it may not work in an XML context
            // %        note 3: Using innerHTML to directly add to the BODY is very dangerous because it will
            // %        note 3: break all pre-existing references to HTMLElements.
            // *     example 1: $P.echo('<div><p>abc</p><p>abc</p></div>');
            // *     returns 1: undefined
            // Fix: This function really needs to allow non-XHTML input (unless in true XHTML mode) as in jQuery
            var arg = '',
                argc = arguments.length,
                argv = arguments,
                i = 0,
                holder, win = this.window,
                d = win.document,
                ns_xhtml = 'http://www.w3.org/1999/xhtml',
                ns_xul = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'; // If we're in a XUL context
            var stringToDOM = function (str, parent, ns, container) {
                var extraNSs = '';
                if (ns === ns_xul) {
                    extraNSs = ' xmlns:html="' + ns_xhtml + '"';
                }
                var stringContainer = '<' + container + ' xmlns="' + ns + '"' + extraNSs + '>' + str + '</' + container + '>';
                var dils = win.DOMImplementationLS,
                    dp = win.DOMParser,
                    ax = win.ActiveXObject;
                if (dils && dils.createLSInput && dils.createLSParser) {
                    // Follows the DOM 3 Load and Save standard, but not
                    // implemented in browsers at present; HTML5 is to standardize on innerHTML, but not for XML (though
                    // possibly will also standardize with DOMParser); in the meantime, to ensure fullest browser support, could
                    // attach http://svn2.assembla.com/svn/brettz9/DOMToString/DOM3.js (see http://svn2.assembla.com/svn/brettz9/DOMToString/DOM3.xhtml for a simple test file)
                    var lsInput = dils.createLSInput();
                    // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
                    lsInput.stringData = stringContainer;
                    var lsParser = dils.createLSParser(1, null); // synchronous, no schema type
                    return lsParser.parse(lsInput).firstChild;
                } else if (dp) {
                    // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
                    try {
                        var fc = new dp().parseFromString(stringContainer, 'text/xml');
                        if (fc && fc.documentElement && fc.documentElement.localName !== 'parsererror' && fc.documentElement.namespaceURI !== 'http://www.mozilla.org/newlayout/xml/parsererror.xml') {
                            return fc.documentElement.firstChild;
                        }
                        // If there's a parsing error, we just continue on
                    } catch (e) {
                        // If there's a parsing error, we just continue on
                    }
                } else if (ax) { // We don't bother with a holder in Explorer as it doesn't support namespaces
                    var axo = new ax('MSXML2.DOMDocument');
                    axo.loadXML(str);
                    return axo.documentElement;
                }
        /*else if (win.XMLHttpRequest) { // Supposed to work in older Safari
                    var req = new win.XMLHttpRequest;
                    req.open('GET', 'data:application/xml;charset=utf-8,'+encodeURIComponent(str), false);
                    if (req.overrideMimeType) {
                        req.overrideMimeType('application/xml');
                    }
                    req.send(null);
                    return req.responseXML;
                }*/
                // Document fragment did not work with innerHTML, so we create a temporary element holder
                // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
                //if (d.createElementNS && (d.contentType && d.contentType !== 'text/html')) { // Don't create namespaced elements if we're being served as HTML (currently only Mozilla supports this detection in true XHTML-supporting browsers, but Safari and Opera should work with the above DOMParser anyways, and IE doesn't support createElementNS anyways)
                if (d.createElementNS && // Browser supports the method
                (d.documentElement.namespaceURI || // We can use if the document is using a namespace
                d.documentElement.nodeName.toLowerCase() !== 'html' || // We know it's not HTML4 or less, if the tag is not HTML (even if the root namespace is null)
                (d.contentType && d.contentType !== 'text/html') // We know it's not regular HTML4 or less if this is Mozilla (only browser supporting the attribute) and the content type is something other than text/html; other HTML5 roots (like svg) still have a namespace
                )) { // Don't create namespaced elements if we're being served as HTML (currently only Mozilla supports this detection in true XHTML-supporting browsers, but Safari and Opera should work with the above DOMParser anyways, and IE doesn't support createElementNS anyways); last test is for the sake of being in a pure XML document
                    holder = d.createElementNS(ns, container);
                } else {
                    holder = d.createElement(container); // Document fragment did not work with innerHTML
                }
                holder.innerHTML = str;
                while (holder.firstChild) {
                    parent.appendChild(holder.firstChild);
                }
                return false;
                // throw 'Your browser does not support DOM parsing as required by echo()';
            };
        
        
            var ieFix = function (node) {
                if (node.nodeType === 1) {
                    var newNode = d.createElement(node.nodeName);
                    var i, len;
                    if (node.attributes && node.attributes.length > 0) {
                        for (i = 0, len = node.attributes.length; i < len; i++) {
                            newNode.setAttribute(node.attributes[i].nodeName, node.getAttribute(node.attributes[i].nodeName));
                        }
                    }
                    if (node.childNodes && node.childNodes.length > 0) {
                        for (i = 0, len = node.childNodes.length; i < len; i++) {
                            newNode.appendChild(ieFix(node.childNodes[i]));
                        }
                    }
                    return newNode;
                } else {
                    return d.createTextNode(node.nodeValue);
                }
            };
        
            var replacer = function (s, m1, m2) {
                // We assume for now that embedded variables do not have dollar sign; to add a dollar sign, you currently must use {$$var} (We might change this, however.)
                // Doesn't cover all cases yet: see http://php.net/manual/en/language.types.string.php#language.types.string.syntax.double
                if (m1 !== '\\') {
                    return m1 + eval(m2);
                } else {
                    return s;
                }
            };
        
            this.php_js = this.php_js || {};
            var phpjs = this.php_js,
                ini = phpjs.ini,
                obs = phpjs.obs;
            for (i = 0; i < argc; i++) {
                arg = argv[i];
                if (ini && ini['phpjs.echo_embedded_vars']) {
                    arg = arg.replace(/(.?)\{?\$(\w*?\}|\w*)/g, replacer);
                }
        
                if (!phpjs.flushing && obs && obs.length) { // If flushing we output, but otherwise presence of a buffer means caching output
                    obs[obs.length - 1].buffer += arg;
                    continue;
                }
        
                if (d.appendChild) {
                    if (d.body) {
                        if (win.navigator.appName === 'Microsoft Internet Explorer') { // We unfortunately cannot use feature detection, since this is an IE bug with cloneNode nodes being appended
                            d.body.appendChild(stringToDOM(ieFix(arg)));
                        } else {
                            var unappendedLeft = stringToDOM(arg, d.body, ns_xhtml, 'div').cloneNode(true); // We will not actually append the div tag (just using for providing XHTML namespace by default)
                            if (unappendedLeft) {
                                d.body.appendChild(unappendedLeft);
                            }
                        }
                    } else {
                        d.documentElement.appendChild(stringToDOM(arg, d.documentElement, ns_xul, 'description')); // We will not actually append the description tag (just using for providing XUL namespace by default)
                    }
                } else if (d.write) {
                    d.write(arg);
                }
        /* else { // This could recurse if we ever add print!
                    print(arg);
                }*/
            }
        }
        ,
        empty: function (mixed_var) {
            // !No description available for empty. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/empty
            // +   original by: Philippe Baumann
            // +      input by: Onno Marsman
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: LH
            // +   improved by: Onno Marsman
            // +   improved by: Francesco
            // +   improved by: Marc Jansen
            // +   input by: Stoyan Kyosev (http://www.svest.org/)
            // *     example 1: $P.empty(null);
            // *     returns 1: true
            // *     example 2: $P.empty(undefined);
            // *     returns 2: true
            // *     example 3: $P.empty([]);
            // *     returns 3: true
            // *     example 4: $P.empty({});
            // *     returns 4: true
            // *     example 5: $P.empty({'aFunc' : function () { alert('humpty'); } });
            // *     returns 5: false
            var key;
        
            if (mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null || mixed_var === false || typeof mixed_var === 'undefined') {
                return true;
            }
        
            if (typeof mixed_var == 'object') {
                for (key in mixed_var) {
                    return false;
                }
                return true;
            }
        
            return false;
        }
        ,
        end: function (arr) {
            // Advances array argument's internal pointer to the last element and return it  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/end
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Legaev Andrey
            // +    revised by: J A R
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            // *     returns 1: 'Zonneveld'
            // *     example 2: $P.end(['Kevin', 'van', 'Zonneveld']);
            // *     returns 2: 'Zonneveld'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                var ct = 0;
                for (var k in arr) {
                    ct++;
                    var val = arr[k];
                }
                if (ct === 0) {
                    return false; // Empty
                }
                pointers[arrpos + 1] = ct - 1;
                return val;
            }
            if (arr.length === 0) {
                return false;
            }
            pointers[arrpos + 1] = arr.length - 1;
            return arr[pointers[arrpos + 1]];
        }
        ,
        escapeshellarg: function (arg) {
            // Quote and escape an argument for use in a shell command  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/escapeshellarg
            // +   original by: Felix Geisendoerfer (http://www.debuggable.com/felix)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.escapeshellarg("kevin's birthday");
            // *     returns 1: "'kevin\'s birthday'"
            var ret = '';
        
            ret = arg.replace(/[^\\]'/g, function (m, i, s) {
                return m.slice(0, 1) + '\\\'';
            });
        
            return "'" + ret + "'";
        }
        ,
        exp: function (arg) {
            // Returns e raised to the power of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/exp
            // +   original by: Onno Marsman
            // *     example 1: $P.exp(0.3);
            // *     returns 1: 1.3498588075760032
            return Math.exp(arg);
        }
        ,
        explode: function (delimiter, string, limit) {
            // Splits a string on string separator and return array of components. If limit is positive only limit number of components is returned. If limit is negative all components except the last abs(limit) are returned.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/explode
            // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: kenneth
            // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: d3x
            // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.explode(' ', 'Kevin van Zonneveld');
            // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
            // *     example 2: $P.explode('=', 'a=bc=d', 2);
            // *     returns 2: ['a', 'bc=d']
            var emptyArray = {
                0: ''
            };
        
            // third argument is not required
            if (arguments.length < 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') {
                return null;
            }
        
            if (delimiter === '' || delimiter === false || delimiter === null) {
                return false;
            }
        
            if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') {
                return emptyArray;
            }
        
            if (delimiter === true) {
                delimiter = '1';
            }
        
            if (!limit) {
                return string.toString().split(delimiter.toString());
            }
            // support for limit argument
            var splitted = string.toString().split(delimiter.toString());
            var partA = splitted.splice(0, limit - 1);
            var partB = splitted.join(delimiter.toString());
            partA.push(partB);
            return partA;
        }
        ,
        expm1: function (x) {
            // Returns exp(number) - 1, computed in a way that accurate even when the value of number is close to zero  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/expm1
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: Precision 'n' can be adjusted as desired
            // *     example 1: $P.expm1(1e-15);
            // *     returns 1: 1.0000000000000007e-15
            var ret = 0,
                n = 50; // degree of precision
            var factorial = function factorial(n) {
                if ((n === 0) || (n === 1)) {
                    return 1;
                } else {
                    var result = (n * factorial(n - 1));
                    return result;
                }
            };
            for (var i = 1; i < n; i++) {
                ret += Math.pow(x, i) / factorial(i);
            }
            return ret;
        }
        ,
        extract: function (arr, type, prefix) {
            // Imports variables into symbol table from an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/extract
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Only works by extracting into global context (whether called in the global scope or
            // %        note 1: within a function); also, the EXTR_REFS flag I believe can't be made to work
            // *     example 1: $P.size = 'large';
            // *     example 1: $P.var_array = {'color' : 'blue', 'size' : 'medium', 'shape' : 'sphere'};
            // *     example 1: $P.extract(var_array, 'EXTR_PREFIX_SAME', 'wddx');
            // *     example 1: $P.color+'-'+size+'-'+shape+'-'+wddx_size;
            // *     returns 1: 'blue-large-sphere-medium'
            if (Object.prototype.toString.call(arr) === '[object Array]' && 
                (type !== 'EXTR_PREFIX_ALL' && type !== 'EXTR_PREFIX_INVALID')) {
                return 0;
            }
            var targetObj = this.window;
            if (this.php_js && this.php_js.ini && this.php_js.ini['phpjs.extractTargetObj'] && this.php_js.ini['phpjs.extractTargetObj'].local_value) { // Allow designated object to be used instead of window
                targetObj = this.php_js.ini['phpjs.extractTargetObj'].local_value;
            }
            var chng = 0;
        
            for (var i in arr) {
                var validIdent = /^[_a-zA-Z$][\w|$]*$/; // TODO: Refine regexp to allow JS 1.5+ Unicode identifiers
                var prefixed = prefix + '_' + i;
                try {
                    switch (type) {
                    case 'EXTR_PREFIX_SAME' || 2:
                        if (targetObj[i] !== undefined) {
                            if (prefixed.match(validIdent) !== null) {
                                targetObj[prefixed] = arr[i];
                                ++chng;
                            }
                        } else {
                            targetObj[i] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_SKIP' || 1:
                        if (targetObj[i] === undefined) {
                            targetObj[i] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_PREFIX_ALL' || 3:
                        if (prefixed.match(validIdent) !== null) {
                            targetObj[prefixed] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_PREFIX_INVALID' || 4:
                        if (i.match(validIdent) !== null) {
                            if (prefixed.match(validIdent) !== null) {
                                targetObj[prefixed] = arr[i];
                                ++chng;
                            }
                        } else {
                            targetObj[i] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_IF_EXISTS' || 6:
                        if (targetObj[i] !== undefined) {
                            targetObj[i] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_PREFIX_IF_EXISTS' || 5:
                        if (targetObj[i] !== undefined && prefixed.match(validIdent) !== null) {
                            targetObj[prefixed] = arr[i];
                            ++chng;
                        }
                        break;
                    case 'EXTR_REFS' || 256:
                        throw 'The EXTR_REFS type will not work in JavaScript';
                    case 'EXTR_OVERWRITE' || 0:
                        // Fall-through
                    default:
                        targetObj[i] = arr[i];
                        ++chng;
                        break;
                    }
                } catch (e) { // Just won't increment for problem assignments
                }
            }
            return chng;
        }
        ,
        floatval: function (mixed_var) {
            // +   original by: Michael White (http://getsprink.com)
            // %        note 1: The native parseFloat() method of JavaScript returns NaN when it encounters a string before an int or float value.
            // *     example 1: $P.floatval('150.03_page-section');
            // *     returns 1: 150.03
            // *     example 2: $P.floatval('page: 3');
            // *     returns 2: 0
            // *     example 2: $P.floatval('-50 + 8');
            // *     returns 2: -50
            return (parseFloat(mixed_var) || 0);
        }
        ,
        floor: function (value) {
            // Returns the next lowest integer value from the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/floor
            // +   original by: Onno Marsman
            // *     example 1: $P.floor(8723321.4);
            // *     returns 1: 8723321
            return Math.floor(value);
        }
        ,
        func_get_arg: function (num) {
            // Get the $arg_num'th argument that was passed to the function  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/func_get_arg
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: May not work in all JS implementations
            // *     example 1: $P.function tmp_a() {return func_get_arg(1);}
            // *     example 1: $P.tmp_a('a', 'b');
            // *     returns 1: 'a'
            if (!arguments.callee.caller) {
                try {
                    throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
                    //return false;
                } catch (e) {
                    return false;
                }
            }
        
            if (num > arguments.callee.caller.arguments.length - 1) {
                try {
                    throw new Error('Argument number is greater than the number of arguments actually passed');
                    //return false;
                } catch (e2) {
                    return false;
                }
            }
        
            return arguments.callee.caller.arguments[num];
        }
        ,
        func_get_args: function () {
            // !No description available for func_get_args. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/func_get_args
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: May not work in all JS implementations
            // *     example 1: $P.function tmp_a () {return func_get_args();}
            // *     example 1: $P.tmp_a('a', 'b');
            // *     returns 1: ['a', 'b']
            if (!arguments.callee.caller) {
                try {
                    throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
                    // return false;
                } catch (e) {
                    return false;
                }
            }
        
            return Array.prototype.slice.call(arguments.callee.caller.arguments);
        }
        ,
        func_num_args: function () {
            // Get the number of arguments that were passed to the function  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/func_num_args
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: May not work in all JS implementations
            // *     example 1: $P.function tmp_a () {return func_num_args();}
            // *     example 1: $P.tmp_a('a', 'b');
            // *     returns 1: 2
            if (!arguments.callee.caller) {
                try {
                    throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
                    //return false;
                } catch (e) {
                    return false;
                }
            }
        
            return arguments.callee.caller.arguments.length;
        }
        ,
        function_exists: function (func_name) {
            // Checks if the function exists  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/function_exists
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Steve Clay
            // +   improved by: Legaev Andrey
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function_exists('isFinite');
            // *     returns 1: true
            if (typeof func_name === 'string') {
                func_name = this.window[func_name];
            }
            return typeof func_name === 'function';
        }
        ,
        get_cfg_var: function (varname) {
            // Get the value of a PHP configuration option  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/get_cfg_var
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: The ini values must be set within an ini file
            // *     example 1: $P.get_cfg_var('date.timezone');
            // *     returns 1: 'Asia/Hong_Kong'
            if (this.php_js && this.php_js.ini && this.php_js.ini[varname].global_value !== undefined) {
                if (this.php_js.ini[varname].global_value === null) {
                    return '';
                }
                return this.php_js.ini[varname].global_value;
            }
            return '';
        }
        ,
        get_class: function (obj) {
            // Retrieves the class name  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/get_class
            // +   original by: Ates Goral (http://magnetiq.com)
            // +   improved by: David James
            // *     example 1: $P.get_class(new (function MyClass() {}));
            // *     returns 1: "MyClass"
            // *     example 2: $P.get_class({});
            // *     returns 2: "Object"
            // *     example 3: $P.get_class([]);
            // *     returns 3: false
            // *     example 4: $P.get_class(42);
            // *     returns 4: false
            // *     example 5: $P.get_class(window);
            // *     returns 5: false
            // *     example 6: $P.get_class(function MyFunction() {});
            // *     returns 6: false
            if (obj && typeof obj === 'object' && 
                Object.prototype.toString.call(obj) !== '[object Array]' && obj.constructor && obj != this.window) {
                var arr = obj.constructor.toString().match(/function\s*(\w+)/);
        
                if (arr && arr.length == 2) {
                    return arr[1];
                }
            }
        
            return false;
        }
        ,
        get_class_methods: function (name) {
            // Returns an array of method names for class or class instance.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/get_class_methods
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function Myclass () {this.privMethod = function (){}}
            // *     example 1: Myclass.classMethod = function () {}
            // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
            // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
            // *     example 1: $P.get_class_methods('MyClass')
            // *     returns 1: {}
            var constructor, retArr = {},
                method = '';
        
            if (typeof name === 'function') {
                constructor = name;
            } else if (typeof name === 'string') {
                constructor = this.window[name];
            } else if (typeof name === 'object') {
                constructor = name;
                for (method in constructor.constructor) { // Get class methods of object's constructor
                    if (typeof constructor.constructor[method] === 'function') {
                        retArr[method] = constructor.constructor[method];
                    }
                }
                // return retArr; // Uncomment to behave as "class" is usually defined in JavaScript convention (and see comment below)
            }
            for (method in constructor) {
                if (typeof constructor[method] === 'function') {
                    retArr[method] = constructor[method];
                }
            }
            // Comment out this block to behave as "class" is usually defined in JavaScript convention (and see comment above)
            for (method in constructor.prototype) {
                if (typeof constructor.prototype[method] === 'function') {
                    retArr[method] = constructor.prototype[method];
                }
            }
        
            return retArr;
        }
        ,
        get_class_vars: function (name) {
            // Returns an array of default properties of the class.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/get_class_vars
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function Myclass(){privMethod = function (){};}
            // *     example 1: Myclass.classMethod = function () {}
            // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
            // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
            // *     example 1: $P.get_class_vars('MyClass')
            // *     returns 1: {}
            var constructor, retArr = {},
                prop = '';
        
            if (typeof name === 'function') {
                constructor = name;
            } else if (typeof name === 'string') {
                constructor = this.window[name];
            }
        
            for (prop in constructor) {
                if (typeof constructor[prop] !== 'function' && prop !== 'prototype') {
                    retArr[prop] = constructor[prop];
                }
            }
            // Comment out this block to behave as "class" is usually defined in JavaScript convention
            if (constructor.prototype) {
                for (prop in constructor.prototype) {
                    if (typeof constructor.prototype[prop] !== 'function') {
                        retArr[prop] = constructor.prototype[prop];
                    }
                }
            }
        
            return retArr;
        }
        ,
        get_object_vars: function (obj) {
            // Returns an array of object properties  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/get_object_vars
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function Myclass () {this.privMethod = function (){}}
            // *     example 1: Myclass.classMethod = function () {}
            // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
            // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
            // *     example 1: $P.get_object_vars('MyClass')
            // *     returns 1: {}
            var retArr = {},
                prop = '';
        
            for (prop in obj) {
                if (typeof obj[prop] !== 'function' && prop !== 'prototype') {
                    retArr[prop] = obj[prop];
                }
            }
            for (prop in obj.prototype) {
                if (typeof obj.prototype[prop] !== 'function') {
                    retArr[prop] = obj.prototype[prop];
                }
            }
        
            return retArr;
        }
        ,
        getdate: function (timestamp) {
            // Get date/time information  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/getdate
            // +   original by: Paulo Freitas
            // +   input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.getdate(1055901520);
            // *     returns 1: {'seconds': 40, 'minutes': 58, 'hours': 21, 'mday': 17, 'wday': 2, 'mon': 6, 'year': 2003, 'yday': 167, 'weekday': 'Tuesday', 'month': 'June', '0': 1055901520}
            var _w = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
            var _m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var d = ((typeof(timestamp) == 'undefined') ? new Date() : // Not provided
            (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
            );
            var w = d.getDay();
            var m = d.getMonth();
            var y = d.getFullYear();
            var r = {};
        
            r.seconds = d.getSeconds();
            r.minutes = d.getMinutes();
            r.hours = d.getHours();
            r.mday = d.getDate();
            r.wday = w;
            r.mon = m + 1;
            r.year = y;
            r.yday = Math.floor((d - (new Date(y, 0, 1))) / 86400000);
            r.weekday = _w[w] + 'day';
            r.month = _m[m];
            r['0'] = parseInt(d.getTime() / 1000, 10);
        
            return r;
        }
        ,
        getlastmod: function () {
            // Get time of last page modification  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/getlastmod
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Will not work on browsers which don't support document.lastModified
            // *     example 1: $P.getlastmod();
            // *     returns 1: 1237610043
            return new Date(this.window.document.lastModified).getTime() / 1000;
        }
        ,
        getrandmax: function () {
            // Returns the maximum value a random number can have  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/getrandmax
            // +   original by: Onno Marsman
            // *     example 1: $P.getrandmax();
            // *     returns 1: 2147483647
            return 2147483647;
        }
        ,
        gettimeofday: function (return_float) {
            // Returns the current time as array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gettimeofday
            // + original by: Brett Zamir (http://brett-zamir.me)
            // +      derived from: Josh Fraser (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/)
            // +         parts by: Breaking Par Consulting Inc (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7)
            // +  revised by: Theriault
            // *   example 1: $P.gettimeofday();
            // *   returns 1: {sec: 12, usec: 153000, minuteswest: -480, dsttime: 0}
            // *   example 1: $P.gettimeofday(true);
            // *   returns 1: 1238748978.49
            var t = new Date(),
                y = 0;
        
            if (return_float) {
                return t.getTime() / 1000;
            }
        
            y = t.getFullYear(); // Store current year.
            return {
                sec: t.getUTCSeconds(),
                usec: t.getUTCMilliseconds() * 1000,
                minuteswest: t.getTimezoneOffset(),
                // Compare Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC to see if DST is observed.
                dsttime: 0 + (((new Date(y, 0)) - Date.UTC(y, 0)) !== ((new Date(y, 6)) - Date.UTC(y, 6)))
            };
        }
        ,
        gettype: function (mixed_var) {
            // Returns the type of the variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gettype
            // +   original by: Paulo Freitas
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Douglas Crockford (http://javascript.crockford.com)
            // +   input by: KELAN
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: is_float
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.gettype(1);
            // *     returns 1: 'integer'
            // *     example 2: $P.gettype(undefined);
            // *     returns 2: 'undefined'
            // *     example 3: $P.gettype({0: 'Kevin van Zonneveld'});
            // *     returns 3: 'array'
            // *     example 4: $P.gettype('foo');
            // *     returns 4: 'string'
            // *     example 5: $P.gettype({0: function () {return false;}});
            // *     returns 5: 'array'
            var s = typeof mixed_var,
                name;
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
            if (s === 'object') {
                if (mixed_var !== null) { // From: http://javascript.crockford.com/remedial.html
                    if (typeof mixed_var.length === 'number' && !(mixed_var.propertyIsEnumerable('length')) && typeof mixed_var.splice === 'function') {
                        s = 'array';
                    } else if (mixed_var.constructor && getFuncName(mixed_var.constructor)) {
                        name = getFuncName(mixed_var.constructor);
                        if (name === 'Date') {
                            s = 'date'; // not in PHP
                        } else if (name === 'RegExp') {
                            s = 'regexp'; // not in PHP
                        } else if (name === 'PHPJS_Resource') { // Check against our own resource constructor
                            s = 'resource';
                        }
                    }
                } else {
                    s = 'null';
                }
            } else if (s === 'number') {
                s = this.is_float(mixed_var) ? 'double' : 'integer';
            }
            return s;
        }
        ,
        gmdate: function (format, timestamp) {
            // Format a GMT date/time  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gmdate
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: date
            // *     example 1: $P.gmdate('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400); // Return will depend on your timezone
            // *     returns 1: '07:09:40 m is month'
            var dt = typeof timestamp === 'undefined' ? new Date() : // Not provided
                    typeof timestamp === 'object' ? new Date(timestamp) : // Javascript Date()
                    new Date(timestamp * 1000); // UNIX timestamp (auto-convert to int)
            timestamp = Date.parse(dt.toUTCString().slice(0, -4)) / 1000;
            return this.date(format, timestamp);
        }
        ,
        gmmktime: function () {
            // Get UNIX timestamp for a GMT date  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gmmktime
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   derived from: mktime
            // *     example 1: $P.gmmktime(14, 10, 2, 2, 1, 2008);
            // *     returns 1: 1201875002
            // *     example 2: $P.gmmktime(0, 0, -1, 1, 1, 1970);
            // *     returns 2: -1
            var d = new Date(),
                r = arguments,
                i = 0,
                e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];
        
            for (i = 0; i < e.length; i++) {
                if (typeof r[i] === 'undefined') {
                    r[i] = d['getUTC' + e[i]]();
                    r[i] += (i === 3); // +1 to fix JS months.
                } else {
                    r[i] = parseInt(r[i], 10);
                    if (isNaN(r[i])) {
                        return false;
                    }
                }
            }
        
            // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
            r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);
        
            // Set year, month (-1 to fix JS months), and date.
            // !This must come before the call to setHours!
            d.setUTCFullYear(r[5], r[3] - 1, r[4]);
        
            // Set hours, minutes, and seconds.
            d.setUTCHours(r[0], r[1], r[2]);
        
            // Divide milliseconds by 1000 to return seconds and drop decimal.
            // Add 1 second if negative or it'll be off from PHP by 1 second.
            return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
        }
        ,
        gmstrftime: function (format, timestamp) {
            // Format a GMT/UCT time/date according to locale settings  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gmstrftime
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: strftime
            // *     example 1: $P.gmstrftime("%A", 1062462400);
            // *     returns 1: 'Tuesday'
            var dt = ((typeof(timestamp) == 'undefined') ? new Date() : // Not provided
            (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
            );
            timestamp = Date.parse(dt.toUTCString().slice(0, -4)) / 1000;
            return this.strftime(format, timestamp);
        }
        ,
        gopher_parsedir: function (dirent) {
            // !No description available for gopher_parsedir. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/gopher_parsedir
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.var entry = gopher_parsedir('0All about my gopher site.\t/allabout.txt\tgopher.example.com\t70\u000d\u000a');
            // *     example 1: $P.entry.title;
            // *     returns 1: 'All about my gopher site.'
        /* Types
            * 0 = plain text file
            * 1 = directory menu listing
            * 2 = CSO search query
            * 3 = error message
            * 4 = BinHex encoded text file
            * 5 = binary archive file
            * 6 = UUEncoded text file
            * 7 = search engine query
            * 8 = telnet session pointer
            * 9 = binary file
            * g = Graphics file format, primarily a GIF file
            * h = HTML file
            * i = informational message
            * s = Audio file format, primarily a WAV file
            */
        
            var entryPattern = /^(.)(.*?)\t(.*?)\t(.*?)\t(.*?)\u000d\u000a$/;
            var entry = dirent.match(entryPattern);
        
            if (entry === null) {
                throw 'Could not parse the directory entry';
                // return false;
            }
        
            var type = entry[1];
            switch (type) {
            case 'i':
                type = 255; // GOPHER_INFO
                break;
            case '1':
                type = 1; // GOPHER_DIRECTORY
                break;
            case '0':
                type = 0; // GOPHER_DOCUMENT
                break;
            case '4':
                type = 4; // GOPHER_BINHEX
                break;
            case '5':
                type = 5; // GOPHER_DOSBINARY
                break;
            case '6':
                type = 6; // GOPHER_UUENCODED
                break;
            case '9':
                type = 9; // GOPHER_BINARY
                break;
            case 'h':
                type = 254; // GOPHER_HTTP
                break;
            default:
                return {
                    type: -1,
                    data: dirent
                }; // GOPHER_UNKNOWN
            }
            return {
                type: type,
                title: entry[2],
                path: entry[3],
                host: entry[4],
                port: entry[5]
            };
        }
        ,
        hexdec: function (hex_string) {
            // Returns the decimal equivalent of the hexadecimal number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/hexdec
            // +   original by: Philippe Baumann
            // *     example 1: $P.hexdec('that');
            // *     returns 1: 10
            // *     example 2: $P.hexdec('a0');
            // *     returns 2: 160
            hex_string = (hex_string + '').replace(/[^a-f0-9]/gi, '');
            return parseInt(hex_string, 16);
        }
        ,
        html_entity_decode: function (string, quote_style) {
            // Convert all HTML entities to their applicable characters  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/html_entity_decode
            // +   original by: john (http://www.jd-tech.net)
            // +      input by: ger
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: marc andreu
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Ratheous
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Nick Kolosov (http://sammy.ru)
            // +   bugfixed by: Fox
            // -    depends on: get_html_translation_table
            // *     example 1: $P.html_entity_decode('Kevin &amp; van Zonneveld');
            // *     returns 1: 'Kevin & van Zonneveld'
            // *     example 2: $P.html_entity_decode('&amp;lt;');
            // *     returns 2: '&lt;'
            var hash_map = {},
                symbol = '',
                tmp_str = '',
                entity = '';
            tmp_str = string.toString();
        
            if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
                return false;
            }
        
            // fix &amp; problem
            // http://phpjs.org/functions/get_html_translation_table:416#comment_97660
            delete(hash_map['&']);
            hash_map['&'] = '&amp;';
        
            for (symbol in hash_map) {
                entity = hash_map[symbol];
                tmp_str = tmp_str.split(entity).join(symbol);
            }
            tmp_str = tmp_str.split('&#039;').join("'");
        
            return tmp_str;
        }
        ,
        htmlentities: function (string, quote_style, charset, double_encode) {
            // Convert all applicable characters to HTML entities  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/htmlentities
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: nobbler
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Ratheous
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // +   improved by: Dj (http://phpjs.org/functions/htmlentities:425#comment_134018)
            // -    depends on: get_html_translation_table
            // *     example 1: $P.htmlentities('Kevin & van Zonneveld');
            // *     returns 1: 'Kevin &amp; van Zonneveld'
            // *     example 2: $P.htmlentities("foo'bar","ENT_QUOTES");
            // *     returns 2: 'foo&#039;bar'
            var hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style),
                symbol = '';
            string = string == null ? '' : string + '';
        
            if (!hash_map) {
                return false;
            }
            
            if (quote_style && quote_style === 'ENT_QUOTES') {
                hash_map["'"] = '&#039;';
            }
            
            if (!!double_encode || double_encode == null) {
                for (symbol in hash_map) {
                    if (hash_map.hasOwnProperty(symbol)) {
                        string = string.split(symbol).join(hash_map[symbol]);
                    }
                }
            } else {
                string = string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g, function (ignore, text, entity) {
                    for (symbol in hash_map) {
                        if (hash_map.hasOwnProperty(symbol)) {
                            text = text.split(symbol).join(hash_map[symbol]);
                        }
                    }
                    
                    return text + entity;
                });
            }
        
            return string;
        }
        ,
        htmlspecialchars: function (string, quote_style, charset, double_encode) {
            // Convert special characters to HTML entities  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/htmlspecialchars
            // +   original by: Mirek Slugen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Nathan
            // +   bugfixed by: Arno
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Ratheous
            // +      input by: Mailfaker (http://www.weedem.fr/)
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +      input by: felix
            // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: charset argument not supported
            // *     example 1: $P.htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
            // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
            // *     example 2: $P.htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
            // *     returns 2: 'ab"c&#039;d'
            // *     example 3: $P.htmlspecialchars("my "&entity;" is still here", null, null, false);
            // *     returns 3: 'my &quot;&entity;&quot; is still here'
            var optTemp = 0,
                i = 0,
                noquotes = false;
            if (typeof quote_style === 'undefined' || quote_style === null) {
                quote_style = 2;
            }
            string = string.toString();
            if (double_encode !== false) { // Put this first to avoid double-encoding
                string = string.replace(/&/g, '&amp;');
            }
            string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
            var OPTS = {
                'ENT_NOQUOTES': 0,
                'ENT_HTML_QUOTE_SINGLE': 1,
                'ENT_HTML_QUOTE_DOUBLE': 2,
                'ENT_COMPAT': 2,
                'ENT_QUOTES': 3,
                'ENT_IGNORE': 4
            };
            if (quote_style === 0) {
                noquotes = true;
            }
            if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
                quote_style = [].concat(quote_style);
                for (i = 0; i < quote_style.length; i++) {
                    // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
                    if (OPTS[quote_style[i]] === 0) {
                        noquotes = true;
                    }
                    else if (OPTS[quote_style[i]]) {
                        optTemp = optTemp | OPTS[quote_style[i]];
                    }
                }
                quote_style = optTemp;
            }
            if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
                string = string.replace(/'/g, '&#039;');
            }
            if (!noquotes) {
                string = string.replace(/"/g, '&quot;');
            }
        
            return string;
        }
        ,
        htmlspecialchars_decode: function (string, quote_style) {
            // Convert special HTML entities back to characters  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/htmlspecialchars_decode
            // +   original by: Mirek Slugen
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Mateusz "loonquawl" Zalega
            // +      input by: ReverseSyntax
            // +      input by: Slawomir Kaniecki
            // +      input by: Scott Cariss
            // +      input by: Francois
            // +   bugfixed by: Onno Marsman
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Ratheous
            // +      input by: Mailfaker (http://www.weedem.fr/)
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
            // *     returns 1: '<p>this -> &quot;</p>'
            // *     example 2: $P.htmlspecialchars_decode("&amp;quot;");
            // *     returns 2: '&quot;'
            var optTemp = 0,
                i = 0,
                noquotes = false;
            if (typeof quote_style === 'undefined') {
                quote_style = 2;
            }
            string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            var OPTS = {
                'ENT_NOQUOTES': 0,
                'ENT_HTML_QUOTE_SINGLE': 1,
                'ENT_HTML_QUOTE_DOUBLE': 2,
                'ENT_COMPAT': 2,
                'ENT_QUOTES': 3,
                'ENT_IGNORE': 4
            };
            if (quote_style === 0) {
                noquotes = true;
            }
            if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
                quote_style = [].concat(quote_style);
                for (i = 0; i < quote_style.length; i++) {
                    // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                    if (OPTS[quote_style[i]] === 0) {
                        noquotes = true;
                    } else if (OPTS[quote_style[i]]) {
                        optTemp = optTemp | OPTS[quote_style[i]];
                    }
                }
                quote_style = optTemp;
            }
            if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
                string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
                // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
            }
            if (!noquotes) {
                string = string.replace(/&quot;/g, '"');
            }
            // Put this in last place to avoid escape being double-decoded
            string = string.replace(/&amp;/g, '&');
        
            return string;
        }
        ,
        http_build_query: function (formdata, numeric_prefix, arg_separator) {
            // Generates a form-encoded query string from an associative array or object.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/http_build_query
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   improved by: Michael White (http://getsprink.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +    revised by: stag019
            // +   input by: Dreamer
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: urlencode
            // *     example 1: $P.http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
            // *     returns 1: 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
            // *     example 2: $P.http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
            // *     returns 2: 'php=hypertext+processor&myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&cow=milk'
            var value, key, tmp = [],
                that = this;
        
            var _http_build_query_helper = function (key, val, arg_separator) {
                var k, tmp = [];
                if (val === true) {
                    val = "1";
                } else if (val === false) {
                    val = "0";
                }
                if (val !== null && typeof(val) === "object") {
                    for (k in val) {
                        if (val[k] !== null) {
                            tmp.push(_http_build_query_helper(key + "[" + k + "]", val[k], arg_separator));
                        }
                    }
                    return tmp.join(arg_separator);
                } else if (typeof(val) !== "function") {
                    return that.urlencode(key) + "=" + that.urlencode(val);
                } else {
                    throw new Error('There was an error processing for http_build_query().');
                }
            };
        
            if (!arg_separator) {
                arg_separator = "&";
            }
            for (key in formdata) {
                value = formdata[key];
                if (numeric_prefix && !isNaN(key)) {
                    key = String(numeric_prefix) + key;
                }
                tmp.push(_http_build_query_helper(key, value, arg_separator));
            }
        
            return tmp.join(arg_separator);
        }
        ,
        hypot: function (x, y) {
            // Returns sqrt(num1*num1 + num2*num2)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/hypot
            // +   original by: Onno Marsman
            // *     example 1: $P.hypot(3, 4);
            // *     returns 1: 5
            // *     example 2: $P.hypot([], 'a');
            // *     returns 2: 0
            return Math.sqrt(x * x + y * y) || 0;
        }
        ,
        i18n_loc_get_default: function () {
            // !No description available for i18n_loc_get_default. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/i18n_loc_get_default
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: Renamed in PHP6 from locale_get_default(). Not listed yet at php.net
            // %          note 2: List of locales at http://demo.icu-project.org/icu-bin/locexp
            // %          note 3: To be usable with sort() if it is passed the SORT_LOCALE_STRING sorting flag: http://php.net/manual/en/function.sort.php
            // -    depends on: i18n_loc_set_default
            // *     example 1: $P.i18n_loc_get_default();
            // *     returns 1: 'en_US_POSIX'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            // END REDUNDANT
            return this.php_js.i18nLocale || (i18n_loc_set_default('en_US_POSIX'), 'en_US_POSIX'); // Ensure defaults are set up
        }
        ,
        i18n_loc_set_default: function (name) {
            // !No description available for i18n_loc_set_default. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/i18n_loc_set_default
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: Renamed in PHP6 from locale_set_default(). Not listed yet at php.net
            // %          note 2: List of locales at http://demo.icu-project.org/icu-bin/locexp (use for implementing other locales here)
            // %          note 3: To be usable with sort() if it is passed the SORT_LOCALE_STRING sorting flag: http://php.net/manual/en/function.sort.php
            // *     example 1: $P.i18n_loc_set_default('pt_PT');
            // *     returns 1: true
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            // END REDUNDANT
        
            this.php_js.i18nLocales = {
                en_US_POSIX: {
                    sorting: function (str1, str2) { // Fix: This one taken from strcmp, but need for other locales; we don't use localeCompare since its locale is not settable
                        return (str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1);
                    }
                }
            };
        
            this.php_js.i18nLocale = name;
            return true;
        }
        ,
        idate: function (format, timestamp) {
            // Format a local time/date as integer  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/idate
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +  derived from: date
            // +  derived from: gettimeofday
            // *     example 1: $P.idate('y');
            // *     returns 1: 9
            if (format === undefined) {
                throw 'idate() expects at least 1 parameter, 0 given';
            }
            if (!format.length || format.length > 1) {
                throw 'idate format is one char';
            }
        
            // Fix: Need to allow date_default_timezone_set() (check for this.php_js.default_timezone and use)
            var date = ((typeof timestamp === 'undefined') ? new Date() : // Not provided
            (timestamp instanceof Date) ? new Date(timestamp) : // Javascript Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
            ),
                a;
        
            switch (format) {
            case 'B':
                return Math.floor(((date.getUTCHours() * 36e2) + (date.getUTCMinutes() * 60) + date.getUTCSeconds() + 36e2) / 86.4) % 1e3;
            case 'd':
                return date.getDate();
            case 'h':
                return date.getHours() % 12 || 12;
            case 'H':
                return date.getHours();
            case 'i':
                return date.getMinutes();
            case 'I':
                // capital 'i'
                // Logic derived from getimeofday().
                // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
                // If they are not equal, then DST is observed.
                a = date.getFullYear();
                return 0 + (((new Date(a, 0)) - Date.UTC(a, 0)) !== ((new Date(a, 6)) - Date.UTC(a, 6)));
            case 'L':
                a = date.getFullYear();
                return (!(a & 3) && (a % 1e2 || !(a % 4e2))) ? 1 : 0;
            case 'm':
                return date.getMonth() + 1;
            case 's':
                return date.getSeconds();
            case 't':
                return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
            case 'U':
                return Math.round(date.getTime() / 1000);
            case 'w':
                return date.getDay();
            case 'W':
                a = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() || 7) + 3);
                return 1 + Math.round((a - (new Date(a.getFullYear(), 0, 4))) / 864e5 / 7);
            case 'y':
                return parseInt((date.getFullYear() + '').slice(2), 10); // This function returns an integer, unlike date()
            case 'Y':
                return date.getFullYear();
            case 'z':
                return Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 864e5);
            case 'Z':
                return -date.getTimezoneOffset() * 60;
            default:
                throw 'Unrecognized date format token';
            }
        }
        ,
        implode: function (glue, pieces) {
            // Joins array elements placing glue string between items and return one string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/implode
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Waldo Malqui Silva
            // +   improved by: Itsacon (http://www.itsacon.net/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.implode(' ', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin van Zonneveld'
            // *     example 2: $P.implode(' ', {first:'Kevin', last: 'van Zonneveld'});
            // *     returns 2: 'Kevin van Zonneveld'
            var i = '',
                retVal = '',
                tGlue = '';
            if (arguments.length === 1) {
                pieces = glue;
                glue = '';
            }
            if (typeof(pieces) === 'object') {
                if (Object.prototype.toString.call(pieces) === '[object Array]') {
                    return pieces.join(glue);
                } 
                for (i in pieces) {
                    retVal += tGlue + pieces[i];
                    tGlue = glue;
                }
                return retVal;
            }
            return pieces;
        }
        ,
        import_request_variables: function (types, prefix) {
            // Import GET/POST/Cookie variables into the global scope  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/import_request_variables
            // +      original by: Jalal Berrami
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // + improved by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: IMPORTANT: You must sanitize user variables passed in via URL in JavaScript as in PHP,
            // %          note 1: especially if you want to use any of these variables in an eval()-like function (not recommended)!
            // *        example 1: $P.document.cookie = 'snack=yummy';
            // *        example 1: $P.import_request_variables('gc', 'pr_');
            // *        results 1: pr_snack == 'yummy'
            var i = 0,
                current = '',
                url = '',
                vars = '',
                arrayBracketPos = -1,
                arrName = '',
                win = this.window,
                requestObj = this.window,
                getObj = false,
                cookieObj = false;
            prefix = prefix || '';
        
            var that = this;
            var _ini_get = function (ini) {
                if (that.php_js && that.php_js.ini && that.php_js.ini[ini] && that.php_js.ini[ini].local_value) { // Allow designated object to be used instead of window
                    return that.php_js.ini[ini].local_value;
                }
                return false;
            };
        
            requestObj = _ini_get('phpjs.requestVarsObj') || requestObj;
            if (/g/i.test(types)) { // GET
                getObj = _ini_get('phpjs.getVarsObj') || getObj;
                for (i = 0, url = win.location.href, vars = url.substring(url.lastIndexOf('?') + 1, url.length).split('&'); i < vars.length; i++) {
                    current = vars[i].split('=');
                    current[1] = decodeURIComponent(current[1]);
                    arrayBracketPos = current[0].indexOf('[');
                    if (arrayBracketPos !== -1) {
                        arrName = current[0].substring(0, arrayBracketPos);
                        arrName = decodeURIComponent(arrName);
                        if (!requestObj[prefix + arrName]) {
                            requestObj[prefix + arrName] = [];
                        }
                        requestObj[prefix + arrName].push(current[1] || null);
                        if (getObj) {
                            if (!getObj[prefix + arrName]) {
                                getObj[prefix + arrName] = [];
                            }
                            getObj[prefix + arrName].push(current[1] || null);
                        }
                    } else {
                        current[0] = decodeURIComponent(current[0]);
                        requestObj[prefix + current[0]] = current[1] || null;
                        if (getObj) {
                            getObj[prefix + current[0]] = current[1] || null;
                        }
                    }
                }
            }
            if (/c/i.test(types)) { // COOKIE
                cookieObj = _ini_get('phpjs.cookieVarsObj') || cookieObj;
                for (i = 0, vars = win.document.cookie.split("&"); i < vars.length; i++) {
                    current = vars[i].split("=");
                    requestObj[prefix + current[0]] = current[1].split(";")[0] || null;
                    if (cookieObj) {
                        cookieObj[prefix + current[0]] = current[1].split(";")[0] || null;
                    }
                }
            }
        }
        ,
        in_array: function (needle, haystack, argStrict) {
            // Checks if the given value exists in the array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/in_array
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: vlado houba
            // +   input by: Billy
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.in_array('van', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            // *     example 2: $P.in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
            // *     returns 2: false
            // *     example 3: $P.in_array(1, ['1', '2', '3']);
            // *     returns 3: true
            // *     example 3: $P.in_array(1, ['1', '2', '3'], false);
            // *     returns 3: true
            // *     example 4: $P.in_array(1, ['1', '2', '3'], true);
            // *     returns 4: false
            var key = '',
                strict = !! argStrict;
        
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) {
                        return true;
                    }
                }
            } else {
                for (key in haystack) {
                    if (haystack[key] == needle) {
                        return true;
                    }
                }
            }
        
            return false;
        }
        ,
        intval: function (mixed_var, base) {
            // Get the integer value of a variable using the optional base for the conversion  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/intval
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: stensi
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   input by: Matteo
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Rafał Kukawski (http://kukawski.pl)
            // *     example 1: $P.intval('Kevin van Zonneveld');
            // *     returns 1: 0
            // *     example 2: $P.intval(4.2);
            // *     returns 2: 4
            // *     example 3: $P.intval(42, 8);
            // *     returns 3: 42
            // *     example 4: $P.intval('09');
            // *     returns 4: 9
            // *     example 5: $P.intval('1e', 16);
            // *     returns 5: 30
            var tmp;
        
            var type = typeof(mixed_var);
        
            if (type === 'boolean') {
                return +mixed_var;
            } else if (type === 'string') {
                tmp = parseInt(mixed_var, base || 10);
                return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;
            } else if (type === 'number' && isFinite(mixed_var)) {
                return mixed_var | 0;
            } else {
                return 0;
            }
        }
        ,
        ip2long: function (IP) {
            // Converts a string containing an (IPv4) Internet Protocol dotted address into a proper address  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ip2long
            // +   original by: Waldo Malqui Silva
            // +   improved by: Victor
            // +    revised by: fearphage (http://http/my.opera.com/fearphage/)
            // +    revised by: Theriault
            // *     example 1: $P.ip2long('192.0.34.166');
            // *     returns 1: 3221234342
            // *     example 2: $P.ip2long('0.0xABCDEF');
            // *     returns 2: 11259375
            // *     example 3: $P.ip2long('255.255.255.256');
            // *     returns 3: false
            var i = 0;
            // PHP allows decimal, octal, and hexadecimal IP components.
            // PHP allows between 1 (e.g. 127) to 4 (e.g 127.0.0.1) components.
            IP = IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i); // Verify IP format.
            if (!IP) {
                return false; // Invalid format.
            }
            // Reuse IP variable for component counter.
            IP[0] = 0;
            for (i = 1; i < 5; i += 1) {
                IP[0] += !! ((IP[i] || '').length);
                IP[i] = parseInt(IP[i]) || 0;
            }
            // Continue to use IP for overflow values.
            // PHP does not allow any component to overflow.
            IP.push(256, 256, 256, 256);
            // Recalculate overflow of last component supplied to make up for missing components.
            IP[4 + IP[0]] *= Math.pow(256, 4 - IP[0]);
            if (IP[1] >= IP[5] || IP[2] >= IP[6] || IP[3] >= IP[7] || IP[4] >= IP[8]) {
                return false;
            }
            return IP[1] * (IP[0] === 1 || 16777216) + IP[2] * (IP[0] <= 2 || 65536) + IP[3] * (IP[0] <= 3 || 256) + IP[4] * 1;
        }
        ,
        is_array: function (mixed_var) {
            // Returns true if variable is an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_array
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   bugfixed by: Cord
            // +   bugfixed by: Manish
            // +   improved by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Nathan Sepulveda
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: In php.js, javascript objects are like php associative arrays, thus JavaScript objects will also
            // %        note 1: return true in this function (except for objects which inherit properties, being thus used as objects),
            // %        note 1: unless you do ini_set('phpjs.objectsAsArrays', 0), in which case only genuine JavaScript arrays
            // %        note 1: will return true
            // *     example 1: $P.is_array(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: true
            // *     example 2: $P.is_array('Kevin van Zonneveld');
            // *     returns 2: false
            // *     example 3: $P.is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            // *     returns 3: true
            // *     example 4: $P.is_array(function tmp_a(){this.name = 'Kevin'});
            // *     returns 4: false
            var ini,
                _getFuncName = function (fn) {
                    var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                    if (!name) {
                        return '(Anonymous)';
                    }
                    return name[1];
                },
                _isArray = function (mixed_var) {
                    // return Object.prototype.toString.call(mixed_var) === '[object Array]';
                    // The above works, but let's do the even more stringent approach: (since Object.prototype.toString could be overridden)
                    // Null, Not an object, no length property so couldn't be an Array (or String)
                    if (!mixed_var || typeof mixed_var !== 'object' || typeof mixed_var.length !== 'number') {
                        return false;
                    }
                    var len = mixed_var.length;
                    mixed_var[mixed_var.length] = 'bogus';
                    // The only way I can think of to get around this (or where there would be trouble) would be to have an object defined 
                    // with a custom "length" getter which changed behavior on each call (or a setter to mess up the following below) or a custom 
                    // setter for numeric properties, but even that would need to listen for specific indexes; but there should be no false negatives 
                    // and such a false positive would need to rely on later JavaScript innovations like __defineSetter__
                    if (len !== mixed_var.length) { // We know it's an array since length auto-changed with the addition of a 
                    // numeric property at its length end, so safely get rid of our bogus element
                        mixed_var.length -= 1;
                        return true;
                    }
                    // Get rid of the property we added onto a non-array object; only possible 
                    // side-effect is if the user adds back the property later, it will iterate 
                    // this property in the older order placement in IE (an order which should not 
                    // be depended on anyways)
                    delete mixed_var[mixed_var.length];
                    return false;
                };
        
            if (!mixed_var || typeof mixed_var !== 'object') {
                return false;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            
            ini = this.php_js.ini['phpjs.objectsAsArrays'];
        
            return _isArray(mixed_var) ||
                // Allow returning true unless user has called
                // ini_set('phpjs.objectsAsArrays', 0) to disallow objects as arrays
                ((!ini || ( // if it's not set to 0 and it's not 'off', check for objects as arrays
                (parseInt(ini.local_value, 10) !== 0 && (!ini.local_value.toLowerCase || ini.local_value.toLowerCase() !== 'off')))
                ) && (
                Object.prototype.toString.call(mixed_var) === '[object Object]' && _getFuncName(mixed_var.constructor) === 'Object' // Most likely a literal and intended as assoc. array
                ));
        }
        ,
        is_binary: function (vr) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.is_binary('This could be binary as far as JavaScript knows...');
            // *     returns 1: true
            return typeof vr === 'string'; // If it is a string of any kind, it could be binary
        }
        ,
        is_bool: function (mixed_var) {
            // Returns true if variable is a boolean  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_bool
            // +   original by: Onno Marsman
            // *     example 1: $P.is_bool(false);
            // *     returns 1: true
            // *     example 2: $P.is_bool(0);
            // *     returns 2: false
            return (typeof mixed_var === 'boolean');
        }
        ,
        is_buffer: function (vr) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.is_buffer('This could be binary or a regular string as far as JavaScript knows...');
            // *     returns 1: true
            return typeof vr === 'string';
        }
        ,
        is_callable: function (v, syntax_only, callable_name) {
            // Returns true if var is callable.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_callable
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: The variable callable_name cannot work as a string variable passed by reference as in PHP (since JavaScript does not support passing strings by reference), but instead will take the name of a global variable and set that instead
            // %        note 2: When used on an object, depends on a constructor property being kept on the object prototype
            // *     example 1: $P.is_callable('is_callable');
            // *     returns 1: true
            // *     example 2: $P.is_callable('bogusFunction', true);
            // *     returns 2:true // gives true because does not do strict checking
            // *     example 3: $P.function SomeClass () {}
            // *     example 3: SomeClass.prototype.someMethod = function (){};
            // *     example 3: $P.var testObj = new SomeClass();
            // *     example 3: $P.is_callable([testObj, 'someMethod'], true, 'myVar');
            // *     example 3: $P.alert(myVar); // 'SomeClass::someMethod'
            var name = '',
                obj = {},
                method = '';
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
            if (typeof v === 'string') {
                obj = this.window;
                method = v;
                name = v;
            }
            else if (Object.prototype.toString.call(v) === '[object Array]' && 
                        v.length === 2 && typeof v[0] === 'object' && typeof v[1] === 'string') {
                obj = v[0];
                method = v[1];
                name = (obj.constructor && getFuncName(obj.constructor)) + '::' + method;
            }
            else {
                return false;
            }
            if (syntax_only || typeof obj[method] === 'function') {
                if (callable_name) {
                    this.window[callable_name] = name;
                }
                return true;
            }
            return false;
        }
        ,
        is_double: function (mixed_var) {
            // !No description available for is_double. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_double
            // +   original by: Paulo Freitas
            //  -   depends on: is_float
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_double(186.31);
            // *     returns 1: true
            return this.is_float(mixed_var);
        }
        ,
        is_finite: function (val) {
            // Returns whether argument is finite  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_finite
            // +   original by: Onno Marsman
            // *     example 1: $P.is_finite(Infinity);
            // *     returns 1: false
            // *     example 2: $P.is_finite(-Infinity);
            // *     returns 2: false
            // *     example 3: $P.is_finite(0);
            // *     returns 3: true
            var warningType = '';
        
            if (val === Infinity || val === -Infinity) {
                return false;
            }
        
            //Some warnings for maximum PHP compatibility
            if (typeof val == 'object') {
                warningType = (Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object');
            } else if (typeof val == 'string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: is_finite() expects parameter 1 to be double, ' + warningType + ' given');
            }
        
            return true;
        }
        ,
        is_float: function (mixed_var) {
            // Returns true if variable is float point  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_float
            // +   original by: Paulo Freitas
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_float(186.31);
            // *     returns 1: true
            return +mixed_var === mixed_var && !!(mixed_var % 1);
        }
        ,
        is_infinite: function (val) {
            // Returns whether argument is infinite  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_infinite
            // +   original by: Onno Marsman
            // *     example 1: $P.is_infinite(Infinity);
            // *     returns 1: true
            // *     example 2: $P.is_infinite(-Infinity);
            // *     returns 2: true
            // *     example 3: $P.is_infinite(0);
            // *     returns 3: false
            var warningType = '';
        
            if (val === Infinity || val === -Infinity) {
                return true;
            }
        
            //Some warnings for maximum PHP compatibility
            if (typeof val == 'object') {
                warningType = (Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object');
            } else if (typeof val == 'string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: is_infinite() expects parameter 1 to be double, ' + warningType + ' given');
            }
        
            return false;
        }
        ,
        is_int: function (mixed_var) {
            // !No description available for is_int. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_int
            // +   original by: Alex
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Matt Bradley
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_int(23)
            // *     returns 1: true
            // *     example 2: $P.is_int('23')
            // *     returns 2: false
            // *     example 3: $P.is_int(23.5)
            // *     returns 3: false
            // *     example 4: $P.is_int(true)
            // *     returns 4: false
            return mixed_var === ~~mixed_var;
        }
        ,
        is_integer: function (mixed_var) {
            // !No description available for is_integer. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_integer
            // +   original by: Paulo Freitas
            //  -   depends on: is_int
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_integer(186.31);
            // *     returns 1: false
            // *     example 2: $P.is_integer(12);
            // *     returns 2: true
            return this.is_int(mixed_var);
        }
        ,
        is_long: function (mixed_var) {
            // Returns true if variable is a long (integer)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_long
            // +   original by: Paulo Freitas
            //  -   depends on: is_float
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_long(186.31);
            // *     returns 1: true
            return this.is_float(mixed_var);
        }
        ,
        is_nan: function (val) {
            // Returns whether argument is not a number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_nan
            // +   original by: Onno Marsman
            // +      input by: Robin
            // *     example 1: $P.is_nan(NaN);
            // *     returns 1: true
            // *     example 2: $P.is_nan(0);
            // *     returns 2: false
            var warningType = '';
        
            if (typeof val == 'number' && isNaN(val)) {
                return true;
            }
        
            //Some errors for maximum PHP compatibility
            if (typeof val == 'object') {
                warningType = (Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object');
            }
            else if (typeof val == 'string' && !val.match(/^[\+\-]?\d/)) {
                //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
                warningType = 'string';
            }
            if (warningType) {
                throw new Error('Warning: is_nan() expects parameter 1 to be double, ' + warningType + ' given');
            }
        
            return false;
        }
        ,
        is_null: function (mixed_var) {
            // Returns true if variable is null  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_null
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.is_null('23');
            // *     returns 1: false
            // *     example 2: $P.is_null(null);
            // *     returns 2: true
            return (mixed_var === null);
        }
        ,
        is_numeric: function (mixed_var) {
            // Returns true if value is a number or a numeric string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_numeric
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: David
            // +   improved by: taith
            // +   bugfixed by: Tim de Koning
            // +   bugfixed by: WebDevHobo (http://webdevhobo.blogspot.com/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.is_numeric(186.31);
            // *     returns 1: true
            // *     example 2: $P.is_numeric('Kevin van Zonneveld');
            // *     returns 2: false
            // *     example 3: $P.is_numeric('+186.31e2');
            // *     returns 3: true
            // *     example 4: $P.is_numeric('');
            // *     returns 4: false
            // *     example 4: $P.is_numeric([]);
            // *     returns 4: false
            return (typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);
        }
        ,
        is_object: function (mixed_var) {
            // Returns true if variable is an object  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_object
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Legaev Andrey
            // +   improved by: Michael White (http://getsprink.com)
            // *     example 1: $P.is_object('23');
            // *     returns 1: false
            // *     example 2: $P.is_object({foo: 'bar'});
            // *     returns 2: true
            // *     example 3: $P.is_object(null);
            // *     returns 3: false
            if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
                return false;
            }
            return mixed_var !== null && typeof mixed_var == 'object';
        }
        ,
        is_real: function (mixed_var) {
            // !No description available for is_real. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_real
            // +   original by: Brett Zamir (http://brett-zamir.me)
            //  -   depends on: is_float
            // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
            // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
            // *     example 1: $P.is_double(186.31);
            // *     returns 1: true
            return this.is_float(mixed_var);
        }
        ,
        is_resource: function (handle) {
            // Returns true if variable is a resource  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_resource
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Luis Salazar (http://www.freaky-media.com/)
            // *     example 1: $P.is_resource('a');
            // *     returns 1: false
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
            return !(!handle || typeof handle !== 'object' || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource');
        }
        ,
        is_scalar: function (mixed_var) {
            // Returns true if value is a scalar  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_scalar
            // +   original by: Paulo Freitas
            // *     example 1: $P.is_scalar(186.31);
            // *     returns 1: true
            // *     example 2: $P.is_scalar({0: 'Kevin van Zonneveld'});
            // *     returns 2: false
            return (/boolean|number|string/).test(typeof mixed_var);
        }
        ,
        is_string: function (mixed_var) {
            // Returns true if variable is a Unicode or binary string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/is_string
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.is_string('23');
            // *     returns 1: true
            // *     example 2: $P.is_string(23.5);
            // *     returns 2: false
            return (typeof(mixed_var) == 'string');
        }
        ,
        is_unicode: function (vr) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Almost all strings in JavaScript should be Unicode
            // *     example 1: $P.is_unicode('We the peoples of the United Nations...!');
            // *     returns 1: true
            if (typeof vr !== 'string') {
                return false;
            }
        
            // If surrogates occur outside of high-low pairs, then this is not Unicode
            var arr = [],
                any = '([\s\S])',
                highSurrogate = '[\uD800-\uDBFF]',
                lowSurrogate = '[\uDC00-\uDFFF]',
                highSurrogateBeforeAny = new RegExp(highSurrogate + any, 'g'),
                lowSurrogateAfterAny = new RegExp(any + lowSurrogate, 'g'),
                singleLowSurrogate = new RegExp('^' + lowSurrogate + '$'),
                singleHighSurrogate = new RegExp('^' + highSurrogate + '$');
        
            while ((arr = highSurrogateBeforeAny.exec(vr)) !== null) {
                if (!arr[1] || !arr[1].match(singleLowSurrogate)) { // If high not followed by low surrogate
                    return false;
                }
            }
            while ((arr = lowSurrogateAfterAny.exec(vr)) !== null) {
                if (!arr[1] || !arr[1].match(singleHighSurrogate)) { // If low not preceded by high surrogate
                    return false;
                }
            }
            return true;
        }
        ,
        isset: function () {
            // !No description available for isset. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/isset
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: FremyCompany
            // +   improved by: Onno Marsman
            // +   improved by: Rafał Kukawski
            // *     example 1: $P.isset( undefined, true);
            // *     returns 1: false
            // *     example 2: $P.isset( 'Kevin van Zonneveld' );
            // *     returns 2: true
            var a = arguments,
                l = a.length,
                i = 0,
                undef;
        
            if (l === 0) {
                throw new Error('Empty isset');
            }
        
            while (i !== l) {
                if (a[i] === undef || a[i] === null) {
                    return false;
                }
                i++;
            }
            return true;
        }
        ,
        join: function (glue, pieces) {
            // An alias for implode  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/join
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: implode
            // *     example 1: $P.join(' ', ['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'Kevin van Zonneveld'
            return this.implode(glue, pieces);
        }
        ,
        json_decode: function (str_json) {
            // Decodes the JSON representation into a PHP value  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/json_decode
            // +      original by: Public Domain (http://www.json.org/json2.js)
            // + reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      improved by: T.J. Leahy
            // +      improved by: Michael White
            // *        example 1: $P.json_decode('[\n    "e",\n    {\n    "pluribus": "unum"\n}\n]');
            // *        returns 1: ['e', {pluribus: 'unum'}]
        /*
                http://www.JSON.org/json2.js
                2008-11-19
                Public Domain.
                NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
                See http://www.JSON.org/js.html
            */
        
            var json = this.window.JSON;
            if (typeof json === 'object' && typeof json.parse === 'function') {
                try {
                    return json.parse(str_json);
                } catch (err) {
                    if (!(err instanceof SyntaxError)) {
                        throw new Error('Unexpected error type in json_decode()');
                    }
                    this.php_js = this.php_js || {};
                    this.php_js.last_error_json = 4; // usable by json_last_error()
                    return null;
                }
            }
        
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var j;
            var text = str_json;
        
            // Parsing happens in four stages. In the first stage, we replace certain
            // Unicode characters with escape sequences. JavaScript handles many characters
            // incorrectly, either silently deleting them, or treating them as line endings.
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
        
            // In the second stage, we run the text against regular expressions that look
            // for non-JSON patterns. We are especially concerned with '()' and 'new'
            // because they can cause invocation, and '=' because it can cause mutation.
            // But just to be safe, we want to reject all unexpected forms.
            // We split the second stage into 4 regexp operations in order to work around
            // crippling inefficiencies in IE's and Safari's regexp engines. First we
            // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
            // replace all simple value tokens with ']' characters. Third, we delete all
            // open brackets that follow a colon or comma or that begin the text. Finally,
            // we look to see that the remaining characters are only whitespace or ']' or
            // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
            if ((/^[\],:{}\s]*$/).
            test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        
                // In the third stage we use the eval function to compile the text into a
                // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                // in JavaScript: it can begin a block or an object literal. We wrap the text
                // in parens to eliminate the ambiguity.
                j = eval('(' + text + ')');
        
                return j;
            }
        
            this.php_js = this.php_js || {};
            this.php_js.last_error_json = 4; // usable by json_last_error()
            return null;
        }
        ,
        json_encode: function (mixed_val) {
            // Returns the JSON representation of a value  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/json_encode
            // +      original by: Public Domain (http://www.json.org/json2.js)
            // + reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      improved by: Michael White
            // +      input by: felix
            // +      bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *        example 1: $P.json_encode(['e', {pluribus: 'unum'}]);
            // *        returns 1: '[\n    "e",\n    {\n    "pluribus": "unum"\n}\n]'
        /*
                http://www.JSON.org/json2.js
                2008-11-19
                Public Domain.
                NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
                See http://www.JSON.org/js.html
            */
            var retVal, json = this.window.JSON;
            try {
                if (typeof json === 'object' && typeof json.stringify === 'function') {
                    retVal = json.stringify(mixed_val); // Errors will not be caught here if our own equivalent to resource
                    //  (an instance of PHPJS_Resource) is used
                    if (retVal === undefined) {
                        throw new SyntaxError('json_encode');
                    }
                    return retVal;
                }
        
                var value = mixed_val;
        
                var quote = function (string) {
                    var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                    var meta = { // table of character substitutions
                        '\b': '\\b',
                        '\t': '\\t',
                        '\n': '\\n',
                        '\f': '\\f',
                        '\r': '\\r',
                        '"': '\\"',
                        '\\': '\\\\'
                    };
        
                    escapable.lastIndex = 0;
                    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                        var c = meta[a];
                        return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    }) + '"' : '"' + string + '"';
                };
        
                var str = function (key, holder) {
                    var gap = '';
                    var indent = '    ';
                    var i = 0; // The loop counter.
                    var k = ''; // The member key.
                    var v = ''; // The member value.
                    var length = 0;
                    var mind = gap;
                    var partial = [];
                    var value = holder[key];
        
                    // If the value has a toJSON method, call it to obtain a replacement value.
                    if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                        value = value.toJSON(key);
                    }
        
                    // What happens next depends on the value's type.
                    switch (typeof value) {
                    case 'string':
                        return quote(value);
        
                    case 'number':
                        // JSON numbers must be finite. Encode non-finite numbers as null.
                        return isFinite(value) ? String(value) : 'null';
        
                    case 'boolean':
                    case 'null':
                        // If the value is a boolean or null, convert it to a string. Note:
                        // typeof null does not produce 'null'. The case is included here in
                        // the remote chance that this gets fixed someday.
                        return String(value);
        
                    case 'object':
                        // If the type is 'object', we might be dealing with an object or an array or
                        // null.
                        // Due to a specification blunder in ECMAScript, typeof null is 'object',
                        // so watch out for that case.
                        if (!value) {
                            return 'null';
                        }
                        if ((this.PHPJS_Resource && value instanceof this.PHPJS_Resource) || (window.PHPJS_Resource && value instanceof window.PHPJS_Resource)) {
                            throw new SyntaxError('json_encode');
                        }
        
                        // Make an array to hold the partial results of stringifying this object value.
                        gap += indent;
                        partial = [];
        
                        // Is the value an array?
                        if (Object.prototype.toString.apply(value) === '[object Array]') {
                            // The value is an array. Stringify every element. Use null as a placeholder
                            // for non-JSON values.
                            length = value.length;
                            for (i = 0; i < length; i += 1) {
                                partial[i] = str(i, value) || 'null';
                            }
        
                            // Join all of the elements together, separated with commas, and wrap them in
                            // brackets.
                            v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                            gap = mind;
                            return v;
                        }
        
                        // Iterate through all of the keys in the object.
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
        
                        // Join all of the member texts together, separated with commas,
                        // and wrap them in braces.
                        v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                        gap = mind;
                        return v;
                    case 'undefined':
                        // Fall-through
                    case 'function':
                        // Fall-through
                    default:
                        throw new SyntaxError('json_encode');
                    }
                };
        
                // Make a fake root object containing our value under the key of ''.
                // Return the result of stringifying the value.
                return str('', {
                    '': value
                });
        
            } catch (err) { // Todo: ensure error handling above throws a SyntaxError in all cases where it could
                // (i.e., when the JSON global is not available and there is an error)
                if (!(err instanceof SyntaxError)) {
                    throw new Error('Unexpected error type in json_encode()');
                }
                this.php_js = this.php_js || {};
                this.php_js.last_error_json = 4; // usable by json_last_error()
                return null;
            }
        }
        ,
        json_last_error: function () {
            // !No description available for json_last_error. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/json_last_error
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.json_last_error();
            // *     returns 1: 0
        /*
            JSON_ERROR_NONE = 0
            JSON_ERROR_DEPTH = 1 // max depth limit to be removed per PHP comments in json.c (not possible in JS?)
            JSON_ERROR_STATE_MISMATCH = 2 // internal use? also not documented
            JSON_ERROR_CTRL_CHAR = 3 // [\u0000-\u0008\u000B-\u000C\u000E-\u001F] if used directly within json_decode(),
                                                                          // but JSON functions auto-escape these, so error not possible in JavaScript
            JSON_ERROR_SYNTAX = 4
            */
            return this.php_js && this.php_js.last_error_json ? this.php_js.last_error_json : 0;
        }
        ,
        key: function (arr) {
            // Return the key of the element currently pointed to by the internal array pointer  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/key
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Riddler (http://www.frontierwebdev.com/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.array = {fruit1: 'apple', 'fruit2': 'orange'}
            // *     example 1: $P.key(array);
            // *     returns 1: 'fruit1'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
        
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var cursor = pointers[pointers.indexOf(arr) + 1];
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                var ct = 0;
                for (var k in arr) {
                    if (ct === cursor) {
                        return k;
                    }
                    ct++;
                }
                return false; // Empty
            }
            if (arr.length === 0) {
                return false;
            }
            return cursor;
        }
        ,
        krsort: function (inputArr, sort_flags) {
            // Sort an array by key value in reverse order  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/krsort
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: The examples are correct, this is a new way
            // %        note 2: This function deviates from PHP in returning a copy of the array instead
            // %        note 2: of acting by reference and returning true; this was necessary because
            // %        note 2: IE does not allow deleting and re-adding of properties without caching
            // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 2: get the PHP behavior, but use this only if you are in an environment
            // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 2: property deletion is supported. Note that we intend to implement the PHP
            // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 2: is by reference in PHP anyways
            // %        note 3: Since JS objects' keys are always strings, and (the
            // %        note 3: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 3: if the content is a numeric string, we treat the
            // %        note 3: "original type" as numeric.
            // -    depends on: i18n_loc_get_default
            // *     example 1: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.data = krsort(data);
            // *     results 1: {d: 'lemon', c: 'apple', b: 'banana', a: 'orange'}
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};
            // *     example 2: $P.krsort(data);
            // *     results 2: data == {3: 'Kevin', 2: 'van', 1: 'Zonneveld'}
            // *     returns 2: true
            var tmp_arr = {},
                keys = [],
                sorter, i, k, that = this,
                strictForIn = false,
                populateArr = {};
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(b, a);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return (b - a);
                };
                break;
            case 'SORT_REGULAR':
                // compare items normally (don't change types)
            default:
                sorter = function (b, a) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // Make a list of key names
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            keys.sort(sorter);
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
        
            // Rebuild array with sorted key names
            for (i = 0; i < keys.length; i++) {
                k = keys[i];
                tmp_arr[k] = inputArr[k];
                if (strictForIn) {
                    delete inputArr[k];
                }
            }
            for (i in tmp_arr) {
                if (tmp_arr.hasOwnProperty(i)) {
                    populateArr[i] = tmp_arr[i];
                }
            }
        
            return strictForIn || populateArr;
        }
        ,
        ksort: function (inputArr, sort_flags) {
            // Sort an array by key  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ksort
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: The examples are correct, this is a new way
            // %        note 2: This function deviates from PHP in returning a copy of the array instead
            // %        note 2: of acting by reference and returning true; this was necessary because
            // %        note 2: IE does not allow deleting and re-adding of properties without caching
            // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 2: get the PHP behavior, but use this only if you are in an environment
            // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 2: property deletion is supported. Note that we intend to implement the PHP
            // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 2: is by reference in PHP anyways
            // %        note 3: Since JS objects' keys are always strings, and (the
            // %        note 3: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 3: if the content is a numeric string, we treat the
            // %        note 3: "original type" as numeric.
            // -    depends on: i18n_loc_get_default
            // -    depends on: strnatcmp
            // *     example 1: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.data = ksort(data);
            // *     results 1: {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};
            // *     example 2: $P.ksort(data);
            // *     results 2: data == {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}
            // *     returns 2: true
            var tmp_arr = {},
                keys = [],
                sorter, i, k, that = this,
                strictForIn = false,
                populateArr = {};
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(a, b);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return ((a + 0) - (b + 0));
                };
                break;
                // case 'SORT_REGULAR': // compare items normally (don't change types)
            default:
                sorter = function (a, b) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // Make a list of key names
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            keys.sort(sorter);
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            // Rebuild array with sorted key names
            for (i = 0; i < keys.length; i++) {
                k = keys[i];
                tmp_arr[k] = inputArr[k];
                if (strictForIn) {
                    delete inputArr[k];
                }
            }
            for (i in tmp_arr) {
                if (tmp_arr.hasOwnProperty(i)) {
                    populateArr[i] = tmp_arr[i];
                }
            }
        
            return strictForIn || populateArr;
        }
        ,
        lcfirst: function (str) {
            // !No description available for lcfirst. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/lcfirst
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.lcfirst('Kevin Van Zonneveld');
            // *     returns 1: 'kevin Van Zonneveld'
            str += '';
            var f = str.charAt(0).toLowerCase();
            return f + str.substr(1);
        }
        ,
        lcg_value: function () {
            // !No description available for lcg_value. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/lcg_value
            // +   original by: Onno Marsman
            return Math.random();
        }
        ,
        levenshtein: function (s1, s2) {
            // Calculate Levenshtein distance between two strings  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/levenshtein
            // +            original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // +            bugfixed by: Onno Marsman
            // +             revised by: Andrea Giammarchi (http://webreflection.blogspot.com)
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // + reimplemented by: Alexander M Beedie
            // *                example 1: $P.levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
            // *                returns 1: 3
            if (s1 == s2) {
                return 0;
            }
        
            var s1_len = s1.length;
            var s2_len = s2.length;
            if (s1_len === 0) {
                return s2_len;
            }
            if (s2_len === 0) {
                return s1_len;
            }
        
            // BEGIN STATIC
            var split = false;
            try {
                split = !('0')[0];
            } catch (e) {
                split = true; // Earlier IE may not support access by string index
            }
            // END STATIC
            if (split) {
                s1 = s1.split('');
                s2 = s2.split('');
            }
        
            var v0 = new Array(s1_len + 1);
            var v1 = new Array(s1_len + 1);
        
            var s1_idx = 0,
                s2_idx = 0,
                cost = 0;
            for (s1_idx = 0; s1_idx < s1_len + 1; s1_idx++) {
                v0[s1_idx] = s1_idx;
            }
            var char_s1 = '',
                char_s2 = '';
            for (s2_idx = 1; s2_idx <= s2_len; s2_idx++) {
                v1[0] = s2_idx;
                char_s2 = s2[s2_idx - 1];
        
                for (s1_idx = 0; s1_idx < s1_len; s1_idx++) {
                    char_s1 = s1[s1_idx];
                    cost = (char_s1 == char_s2) ? 0 : 1;
                    var m_min = v0[s1_idx + 1] + 1;
                    var b = v1[s1_idx] + 1;
                    var c = v0[s1_idx] + cost;
                    if (b < m_min) {
                        m_min = b;
                    }
                    if (c < m_min) {
                        m_min = c;
                    }
                    v1[s1_idx + 1] = m_min;
                }
                var v_tmp = v0;
                v0 = v1;
                v1 = v_tmp;
            }
            return v0[s1_len];
        }
        ,
        localeconv: function () {
            // Returns numeric formatting information based on the current locale  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/localeconv
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: setlocale
            // *     example 1: $P.localeconv();
            // *     returns 1: {decimal_point: '.', thousands_sep: ',', positive_sign: '', negative_sign: '-', int_frac_digits: 2, frac_digits: 2, p_cs_precedes: 1, p_sep_by_space: 0, n_cs_precedes: 1, n_sep_by_space: 0, p_sign_posn: 3, n_sign_posn: 0, grouping: 3, int_curr_symbol: 'USD', currency_symbol: '$', mon_decimal_point: '.', mon_thousands_sep: ',', mon_grouping: 3}
            var arr = {},
                prop = '';
        
            // BEGIN REDUNDANT
            this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place, if not already
            // END REDUNDANT
            // Make copies
            for (prop in this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC) {
                arr[prop] = this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC[prop];
            }
            for (prop in this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY) {
                arr[prop] = this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY[prop];
            }
        
            return arr;
        }
        ,
        localtime: function (timestamp, is_assoc) {
            // Returns the results of the C system call localtime as an associative array if the associative_array argument is set to 1 other wise it is a regular array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/localtime
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +  derived from: Josh Fraser (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/)
            // +      parts by: Breaking Par Consulting Inc (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7)
            // +   improved by: Ryan W Tenney (http://ryan.10e.us)
            // *     example 1: $P.localtime();
            // *     returns 1: [50,28,0,14,2,109,6,73,0]
            var t, yday, x, o = {};
        
            if (timestamp === undefined) {
                t = new Date();
            } else if (timestamp instanceof Date) {
                t = timestamp;
            } else {
                t = new Date(timestamp * 1000);
            }
        
            x = function (t, m) {
                var a = (new Date(t.getFullYear(), 0, m, 0, 0, 0, 0)).toUTCString();
                return t - new Date(a.slice(0, a.lastIndexOf(' ') - 1));
            };
        
            yday = Math.floor((t - new Date(t.getFullYear(), 0, 1)) / 86400000);
        
            o = {
                'tm_sec': t.getSeconds(),
                // seconds
                'tm_min': t.getMinutes(),
                // minutes
                'tm_hour': t.getHours(),
                // hour
                'tm_mday': t.getDate(),
                // day of the month, 1 - 31
                'tm_mon': t.getMonth(),
                // month of the year, 0 (January) to 11 (December)
                'tm_year': t.getFullYear() - 1900,
                // years since 1900
                'tm_wday': t.getDay(),
                // day of the week, 0 (Sun) to 6 (Sat)
                'tm_yday': yday,
                // day of the year
                'tm_isdst': +(x(t, 1) != x(t, 6)) // is daylight savings time in effect
            };
        
            return is_assoc ? o : [
            o.tm_sec, o.tm_min, o.tm_hour, o.tm_mday, o.tm_mon, o.tm_year, o.tm_wday, o.tm_yday, o.tm_isdst];
        }
        ,
        log: function (arg, base) {
            // Returns the natural logarithm of the number, or the base log if base is specified  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/log
            // +   original by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.log(8723321.4, 7);
            // *     returns 1: 8.212871815082147
            return (typeof base === 'undefined') ? 
                Math.log(arg) :
                Math.log(arg) / Math.log(base);
        }
        ,
        log10: function (arg) {
            // Returns the base-10 logarithm of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/log10
            // +   original by: Philip Peterson
            // +   improved by: Onno Marsman
            // +   improved by: Tod Gentille
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.log10(10);
            // *     returns 1: 1
            // *     example 2: $P.log10(1);
            // *     returns 2: 0
            return Math.log(arg) / 2.302585092994046; // Math.LN10
        }
        ,
        log1p: function (x) {
            // Returns log(1 + number), computed in a way that accurate even when the value of number is close to zero  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/log1p
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: Precision 'n' can be adjusted as desired
            // *     example 1: $P.log1p(1e-15);
            // *     returns 1: 9.999999999999995e-16
            var ret = 0,
                n = 50; // degree of precision
            if (x <= -1) {
                return '-INF'; // JavaScript style would be to return Number.NEGATIVE_INFINITY
            }
            if (x < 0 || x > 1) {
                return Math.log(1 + x);
            }
            for (var i = 1; i < n; i++) {
                if ((i % 2) === 0) {
                    ret -= Math.pow(x, i) / i;
                } else {
                    ret += Math.pow(x, i) / i;
                }
            }
            return ret;
        }
        ,
        long2ip: function (proper_address) {
            // Converts an (IPv4) Internet network address into a string in Internet standard dotted format  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/long2ip
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.long2ip( 3221234342 );
            // *     returns 1: '192.0.34.166'
            var output = false;
        
            if (!isNaN(proper_address) && (proper_address >= 0 || proper_address <= 4294967295)) {
                output = Math.floor(proper_address / Math.pow(256, 3)) + '.' + Math.floor((proper_address % Math.pow(256, 3)) / Math.pow(256, 2)) + '.' + Math.floor(((proper_address % Math.pow(256, 3)) % Math.pow(256, 2)) / Math.pow(256, 1)) + '.' + Math.floor((((proper_address % Math.pow(256, 3)) % Math.pow(256, 2)) % Math.pow(256, 1)) / Math.pow(256, 0));
            }
        
            return output;
        }
        ,
        ltrim: function (str, charlist) {
            // Strips whitespace from the beginning of a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ltrim
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.ltrim('    Kevin van Zonneveld    ');
            // *     returns 1: 'Kevin van Zonneveld    '
            charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('^[' + charlist + ']+', 'g');
            return (str + '').replace(re, '');
        }
        ,
        max: function () {
            // Return the highest value in an array or a series of arguments  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/max
            // +   original by: Onno Marsman
            // +    revised by: Onno Marsman
            // +    tweaked by: Jack
            // %          note: Long code cause we're aiming for maximum PHP compatibility
            // *     example 1: $P.max(1, 3, 5, 6, 7);
            // *     returns 1: 7
            // *     example 2: $P.max([2, 4, 5]);
            // *     returns 2: 5
            // *     example 3: $P.max(0, 'hello');
            // *     returns 3: 0
            // *     example 4: $P.max('hello', 0);
            // *     returns 4: 'hello'
            // *     example 5: $P.max(-1, 'hello');
            // *     returns 5: 'hello'
            // *     example 6: $P.max([2, 4, 8], [2, 5, 7]);
            // *     returns 6: [2, 5, 7]
            var ar, retVal, i = 0,
                n = 0,
                argv = arguments,
                argc = argv.length,
                _obj2Array = function (obj) {
                    if (Object.prototype.toString.call(obj) === '[object Array]') {
                        return obj;
                    }
                    else {
                        var ar = [];
                        for (var i in obj) {
                            if (obj.hasOwnProperty(i)) {
                                ar.push(obj[i]);
                            }
                        }
                        return ar;
                    }
                }, //function _obj2Array
                _compare = function (current, next) {
                    var i = 0,
                        n = 0,
                        tmp = 0,
                        nl = 0,
                        cl = 0;
        
                    if (current === next) {
                        return 0;
                    }
                    else if (typeof current === 'object') {
                        if (typeof next === 'object') {
                            current = _obj2Array(current);
                            next = _obj2Array(next);
                            cl = current.length;
                            nl = next.length;
                            if (nl > cl) {
                                return 1;
                            }
                            else if (nl < cl) {
                                return -1;
                            }
                            for (i = 0, n = cl; i < n; ++i) {
                                tmp = _compare(current[i], next[i]);
                                if (tmp == 1) {
                                    return 1;
                                }
                                else if (tmp == -1) {
                                    return -1;
                                }
                            }
                            return 0;
                        }
                        return -1;
                    }
                    else if (typeof next == 'object') {
                        return 1;
                    }
                    else if (isNaN(next) && !isNaN(current)) {
                        if (current == 0) {
                            return 0;
                        }
                        return (current < 0 ? 1 : -1);
                    }
                    else if (isNaN(current) && !isNaN(next)) {
                        if (next == 0) {
                            return 0;
                        }
                        return (next > 0 ? 1 : -1);
                    }
        
                    if (next == current) {
                        return 0;
                    }
                    return (next > current ? 1 : -1);
                }; //function _compare
            if (argc === 0) {
                throw new Error('At least one value should be passed to max()');
            }
            else if (argc === 1) {
                if (typeof argv[0] === 'object') {
                    ar = _obj2Array(argv[0]);
                }
                else {
                    throw new Error('Wrong parameter count for max()');
                }
                if (ar.length === 0) {
                    throw new Error('Array must contain at least one element for max()');
                }
            }
            else {
                ar = argv;
            }
        
            retVal = ar[0];
            for (i = 1, n = ar.length; i < n; ++i) {
                if (_compare(retVal, ar[i]) == 1) {
                    retVal = ar[i];
                }
            }
        
            return retVal;
        }
        ,
        md5: function (str) {
            // Calculate the md5 hash of a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/md5
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: utf8_encode
            // *     example 1: $P.md5('Kevin van Zonneveld');
            // *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'
            var xl;
        
            var rotateLeft = function (lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            };
        
            var addUnsigned = function (lX, lY) {
                var lX4, lY4, lX8, lY8, lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                }
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
                } else {
                    return (lResult ^ lX8 ^ lY8);
                }
            };
        
            var _F = function (x, y, z) {
                return (x & y) | ((~x) & z);
            };
            var _G = function (x, y, z) {
                return (x & z) | (y & (~z));
            };
            var _H = function (x, y, z) {
                return (x ^ y ^ z);
            };
            var _I = function (x, y, z) {
                return (y ^ (x | (~z)));
            };
        
            var _FF = function (a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };
        
            var _GG = function (a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };
        
            var _HH = function (a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };
        
            var _II = function (a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            };
        
            var convertToWordArray = function (str) {
                var lWordCount;
                var lMessageLength = str.length;
                var lNumberOfWords_temp1 = lMessageLength + 8;
                var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
                var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
                var lWordArray = new Array(lNumberOfWords - 1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            };
        
            var wordToHex = function (lValue) {
                var wordToHexValue = "",
                    wordToHexValue_temp = "",
                    lByte, lCount;
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    wordToHexValue_temp = "0" + lByte.toString(16);
                    wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
                }
                return wordToHexValue;
            };
        
            var x = [],
                k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22,
                S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20,
                S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23,
                S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;
        
            str = this.utf8_encode(str);
            x = convertToWordArray(str);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;
        
            xl = x.length;
            for (k = 0; k < xl; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD);
            }
        
            var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        
            return temp.toLowerCase();
        }
        ,
        md5_file: function (str_filename) {
            // Calculate the md5 hash of given filename  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/md5_file
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: file_get_contents
            // -    depends on: md5
            // *     example 1: $P.md5_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '202cb962ac59075b964b07152d234b70'
            var buf = '';
        
            buf = this.file_get_contents(str_filename);
        
            if (!buf) {
                return false;
            }
        
            return this.md5(buf);
        }
        ,
        metaphone: function (word, phones) {
            // +   original by: Greg Frazier
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Rafał Kukawski (http://kukawski.pl)
            // *     example 1: $P.metaphone('Gnu');
            // *     returns 1: 'N'
            
            word = (word == null ? '' : word + '').toUpperCase();
            
            function isVowel (a) {
                return 'AEIOU'.indexOf(a) !== -1;
            }
            
            function removeDuplicates (word) {
                var wordlength = word.length,
                    char1 = word.charAt(0),
                    char2,
                    rebuilt = char1;
                    
                for (var i = 1; i < wordlength; i++) {
                    char2 = word.charAt(i);
                    
                    if (char2 !== char1 || char2 === 'C' || char2 === 'G') { // 'c' and 'g' are exceptions
                        rebuilt += char2;
                    }
                    char1 = char2;
                }
                
                return rebuilt;
            }
            
            word = removeDuplicates(word);
        
            var wordlength = word.length,
                x = 0,
                metaword = '';
        
            //Special wh- case
            if (word.substr(0, 2) === 'WH') {
                // Remove "h" and rebuild the string
                word = 'W' + word.substr(2);
            }
            
            var cc = word.charAt(0); // current char. Short name cause it's used all over the function
            var pc = ''; // previous char. There is none when x === 0
            var nc = word.charAt(1); // next char
            var nnc = ''; // 2 characters ahead. Needed later
            
            if (1 <= wordlength) {
                switch (cc) {
                case 'A':
                    if (nc === 'E') {
                        metaword += 'E';
                    } else {
                        metaword += 'A';
                    }
                    x += 1;
                    break;
                case 'E': case 'I': case 'O': case 'U':
                    metaword += cc;
                    x += 1;
                    break;
                case 'G': case 'K': case 'P':
                    if (nc === 'N') {
                        x += 1;
                    }
                    break;
                case 'W':
                    if (nc === 'R') {
                        x += 1;
                    }
                    break;
                }
            }
        
            for (; x < wordlength; x++) {
                cc = word.charAt(x);
                pc = word.charAt(x - 1);
                nc = word.charAt(x + 1);
                nnc = word.charAt(x + 2);
                
                if (!isVowel(cc)) {
                    switch (cc) {
                    case 'B':
                        if (pc !== 'M') {
                            metaword += 'B';
                        }
                        break;
                    case 'C':
                        if (x + 1 <= wordlength) {
                            if (word.substr(x - 1, 3) !== 'SCH') {
                                if (x === 0 && (x + 2 <= wordlength) && isVowel(nnc)) {
                                    metaword += 'K';
                                } else {
                                    metaword += 'X';
                                }
                            } else if (word.substr(x + 1, 2) === 'IA') {
                                metaword += 'X';
                            } else if ('IEY'.indexOf(nc) !== -1) {
                                if (x > 0) {
                                    if (pc !== 'S') {
                                        metaword += 'S';
                                    }
                                } else {
                                    metaword += 'S';
                                }
                            } else {
                                metaword += 'K';
                            }
                        } else {
                            metaword += 'K';
                        }
                        break;
                    case 'D':
                        if (x + 2 <= wordlength && nc === 'G' && 'EIY'.indexOf(nnc) !== -1) {
                            metaword += 'J';
                            x += 2;
                        } else {
                            metaword += 'T';
                        }
                        break;
                    case 'F':
                        metaword += 'F';
                        break;
                    case 'G':
                        if (x < wordlength) {
                            if ((nc === 'N' && x + 1 === wordlength - 1) || (nc === 'N' && nnc === 'S' && x + 2 === wordlength - 1)) {
                                break;
                            }
                            if (word.substr(x + 1, 3) === 'NED' && x + 3 === wordlength - 1) {
                                break;
                            }
                            if (word.substr(x - 2, 3) === 'ING' && x === wordlength - 1) {
                                break;
                            }
                            
                            if (x + 1 <= wordlength - 1 && word.substr(x - 2, 4) === 'OUGH') {
                                metaword += 'F';
                                break;
                            }
                            if (nc === 'H' && x + 2 <= wordlength) {
                                if (isVowel(nnc)) {
                                    metaword += 'K';
                                }
                            } else if (x + 1 === wordlength) {
                                if (nc !== 'N') {
                                    metaword += 'K';
                                }
                            } else if (x + 3 === wordlength) {
                                if (word.substr(x + 1, 3) !== 'NED') {
                                    metaword += 'K';
                                }
                            } else if (x + 1 <= wordlength) {
                                if ('EIY'.indexOf(nc) !== -1) {
                                    if (pc != 'G') {
                                        metaword += 'J';
                                    }
                                } else if (x === 0 || pc !== 'D' || 'EIY'.indexOf(nc) === -1) {
                                    metaword += 'K';
                                }
                            } else {
                                metaword += 'K';
                            }
                        } else {
                            metaword += 'K';
                        }
                        break;
                    case 'M': case 'J': case 'N': case 'R': case 'L':
                        metaword += cc;
                        break;
                    case 'Q':
                        metaword += 'K';
                        break;
                    case 'V':
                        metaword += 'F';
                        break;
                    case 'Z':
                        metaword += 'S';
                        break;
                    case 'X':
                        metaword += (x === 0) ? 'S' : 'KS';
                        break;
                    case 'K':
                        if (x === 0 || pc !== 'C') {
                            metaword += 'K';
                        }
                        break;
                    case 'P':
                        if (x + 1 <= wordlength && nc === 'H') {
                            metaword += 'F';
                        } else {
                            metaword += 'P';
                        }
                        break;
                    case 'Y':
                        if (x + 1 > wordlength || isVowel(nc)) {
                            metaword += 'Y';
                        }
                        break;
                    case 'H':
                        if (x === 0 || 'CSPTG'.indexOf(pc) === -1) {
                            if (isVowel(nc) === true) {
                                metaword += 'H';
                            }
                        }
                        break;
                    case 'S':
                        if (x + 1 <= wordlength) {
                            if (nc === 'H') {
                                metaword += 'X';
                            } else if (x + 2 <= wordlength && nc === 'I' && 'AO'.indexOf(nnc) !== -1) {
                                metaword += 'X';
                            } else {
                                metaword += 'S';
                            }
                        } else {
                            metaword += 'S';
                        }
                        break;
                    case 'T':
                        if (x + 1 <= wordlength) {
                            if (nc === 'H') {
                                metaword += '0';
                            } else if (x + 2 <= wordlength && nc === 'I' && 'AO'.indexOf(nnc) !== -1) {
                                metaword += 'X';
                            } else {
                                metaword += 'T';
                            }
                        } else {
                            metaword += 'T';
                        }
                        break;
                    case 'W':
                        if (x + 1 <= wordlength && isVowel(nc)) {
                            metaword += 'W';
                        }
                        break;
                    }
                }
            }
        
            phones = parseInt(phones, 10);
            if (metaword.length > phones) {
                return metaword.substr(0, phones);
            }
            return metaword;
        }
        ,
        method_exists: function (obj, method) {
            // Checks if the class method exists  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/method_exists
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function class_a() {this.meth1 = function () {return true;}};
            // *     example 1: $P.var instance_a = new class_a();
            // *     example 1: $P.method_exists(instance_a, 'meth1');
            // *     returns 1: true
            // *     example 2: $P.function class_a() {this.meth1 = function () {return true;}};
            // *     example 2: $P.var instance_a = new class_a();
            // *     example 2: $P.method_exists(instance_a, 'meth2');
            // *     returns 2: false
            if (typeof obj === 'string') {
                return this.window[obj] && typeof this.window[obj][method] === 'function';
            }
        
            return typeof obj[method] === 'function';
        }
        ,
        microtime: function (get_as_float) {
            // Returns either a string or a float containing the current time in seconds and microseconds  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/microtime
            // +   original by: Paulo Freitas
            // *     example 1: $P.timeStamp = microtime(true);
            // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
            var now = new Date().getTime() / 1000;
            var s = parseInt(now, 10);
        
            return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
        }
        ,
        min: function () {
            // Return the lowest value in an array or a series of arguments  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/min
            // +   original by: Onno Marsman
            // +    revised by: Onno Marsman
            // +    tweaked by: Jack
            // %          note: Long code cause we're aiming for maximum PHP compatibility
            // *     example 1: $P.min(1, 3, 5, 6, 7);
            // *     returns 1: 1
            // *     example 2: $P.min([2, 4, 5]);
            // *     returns 2: 2
            // *     example 3: $P.min(0, 'hello');
            // *     returns 3: 0
            // *     example 4: $P.min('hello', 0);
            // *     returns 4: 'hello'
            // *     example 5: $P.min(-1, 'hello');
            // *     returns 5: -1
            // *     example 6: $P.min([2, 4, 8], [2, 5, 7]);
            // *     returns 6: [2, 4, 8]
            var ar, retVal, i = 0,
                n = 0,
                argv = arguments,
                argc = argv.length,
                _obj2Array = function (obj) {
                    if (Object.prototype.toString.call(obj) === '[object Array]') {
                        return obj;
                    }
                    var ar = [];
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            ar.push(obj[i]);
                        }
                    }
                    return ar;
                }, //function _obj2Array
                _compare = function (current, next) {
                    var i = 0,
                        n = 0,
                        tmp = 0,
                        nl = 0,
                        cl = 0;
        
                    if (current === next) {
                        return 0;
                    }
                    else if (typeof current === 'object') {
                        if (typeof next === 'object') {
                            current = _obj2Array(current);
                            next = _obj2Array(next);
                            cl = current.length;
                            nl = next.length;
                            if (nl > cl) {
                                return 1;
                            } 
                            else if (nl < cl) {
                                return -1;
                            }
                            for (i = 0, n = cl; i < n; ++i) {
                                tmp = _compare(current[i], next[i]);
                                if (tmp == 1) {
                                    return 1;
                                }
                                else if (tmp == -1) {
                                    return -1;
                                }
                            }
                            return 0;
                        }
                        return -1;
                    }
                    else if (typeof next == 'object') {
                        return 1;
                    }
                    else if (isNaN(next) && !isNaN(current)) {
                        if (current == 0) {
                            return 0;
                        }
                        return (current < 0 ? 1 : -1);
                    }
                    else if (isNaN(current) && !isNaN(next)) {
                        if (next == 0) {
                            return 0;
                        }
                        return (next > 0 ? 1 : -1);
                    }
                    
                    if (next == current) {
                        return 0;
                    }
                    return (next > current ? 1 : -1);
                }; //function _compare
            if (argc === 0) {
                throw new Error('At least one value should be passed to min()');
            }
            else if (argc === 1) {
                if (typeof argv[0] === 'object') {
                    ar = _obj2Array(argv[0]);
                }
                else {
                    throw new Error('Wrong parameter count for min()');
                }
                if (ar.length === 0) {
                    throw new Error('Array must contain at least one element for min()');
                }
            }
            else {
                ar = argv;
            }
        
            retVal = ar[0];
            for (i = 1, n = ar.length; i < n; ++i) {
                if (_compare(retVal, ar[i]) == -1) {
                    retVal = ar[i];
                }
            }
        
            return retVal;
        }
        ,
        mktime: function () {
            // Get UNIX timestamp for a date  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/mktime
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: baris ozdil
            // +      input by: gabriel paderni
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: FGFEmperor
            // +      input by: Yannoo
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: jakes
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Marc Palau
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: 3D-GRAF
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Chris
            // +    revised by: Theriault
            // %        note 1: The return values of the following examples are
            // %        note 1: received only if your system's timezone is UTC.
            // *     example 1: $P.mktime(14, 10, 2, 2, 1, 2008);
            // *     returns 1: 1201875002
            // *     example 2: $P.mktime(0, 0, 0, 0, 1, 2008);
            // *     returns 2: 1196467200
            // *     example 3: $P.make = mktime();
            // *     example 3: $P.td = new Date();
            // *     example 3: $P.real = Math.floor(td.getTime() / 1000);
            // *     example 3: $P.diff = (real - make);
            // *     results 3: diff < 5
            // *     example 4: $P.mktime(0, 0, 0, 13, 1, 1997)
            // *     returns 4: 883612800 
            // *     example 5: $P.mktime(0, 0, 0, 1, 1, 1998)
            // *     returns 5: 883612800 
            // *     example 6: $P.mktime(0, 0, 0, 1, 1, 98)
            // *     returns 6: 883612800 
            // *     example 7: $P.mktime(23, 59, 59, 13, 0, 2010)
            // *     returns 7: 1293839999
            // *     example 8: $P.mktime(0, 0, -1, 1, 1, 1970)
            // *     returns 8: -1
            var d = new Date(),
                r = arguments,
                i = 0,
                e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];
        
            for (i = 0; i < e.length; i++) {
                if (typeof r[i] === 'undefined') {
                    r[i] = d['get' + e[i]]();
                    r[i] += (i === 3); // +1 to fix JS months.
                } else {
                    r[i] = parseInt(r[i], 10);
                    if (isNaN(r[i])) {
                        return false;
                    }
                }
            }
        
            // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
            r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);
        
            // Set year, month (-1 to fix JS months), and date.
            // !This must come before the call to setHours!
            d.setFullYear(r[5], r[3] - 1, r[4]);
        
            // Set hours, minutes, and seconds.
            d.setHours(r[0], r[1], r[2]);
        
            // Divide milliseconds by 1000 to return seconds and drop decimal.
            // Add 1 second if negative or it'll be off from PHP by 1 second.
            return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
        }
        ,
        money_format: function (format, number) {
            // Convert monetary value(s) to string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/money_format
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: daniel airton wermann (http://wermann.com.br)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: setlocale
            // %          note 1: This depends on setlocale having the appropriate locale (these examples use 'en_US')
            // *     example 1: $P.money_format('%i', 1234.56);
            // *     returns 1: 'USD 1,234.56'
            // *     example 2: $P.money_format('%14#8.2n', 1234.5678);
            // *     returns 2: ' $     1,234.57'
            // *     example 3: $P.money_format('%14#8.2n', -1234.5678);
            // *     returns 3: '-$     1,234.57'
            // *     example 4: $P.money_format('%(14#8.2n', 1234.5678);
            // *     returns 4: ' $     1,234.57 '
            // *     example 5: $P.money_format('%(14#8.2n', -1234.5678);
            // *     returns 5: '($     1,234.57)'
            // *     example 6: $P.money_format('%=014#8.2n', 1234.5678);
            // *     returns 6: ' $000001,234.57'
            // *     example 7: $P.money_format('%=014#8.2n', -1234.5678);
            // *     returns 7: '-$000001,234.57'
            // *     example 8: $P.money_format('%=*14#8.2n', 1234.5678);
            // *     returns 8: ' $*****1,234.57'
            // *     example 9: $P.money_format('%=*14#8.2n', -1234.5678);
            // *     returns 9: '-$*****1,234.57'
            // *     example 10: $P.money_format('%=*^14#8.2n', 1234.5678);
            // *     returns 10: '  $****1234.57'
            // *     example 11: $P.money_format('%=*^14#8.2n', -1234.5678);
            // *     returns 11: ' -$****1234.57'
            // *     example 12: $P.money_format('%=*!14#8.2n', 1234.5678);
            // *     returns 12: ' *****1,234.57'
            // *     example 13: $P.money_format('%=*!14#8.2n', -1234.5678);
            // *     returns 13: '-*****1,234.57'
            // *     example 14: $P.money_format('%i', 3590);
            // *     returns 14: ' USD 3,590.00'
            // Per PHP behavior, there seems to be no extra padding for sign when there is a positive number, though my
            // understanding of the description is that there should be padding; need to revisit examples
        
            // Helpful info at http://ftp.gnu.org/pub/pub/old-gnu/Manuals/glibc-2.2.3/html_chapter/libc_7.html and http://publib.boulder.ibm.com/infocenter/zos/v1r10/index.jsp?topic=/com.ibm.zos.r10.bpxbd00/strfmp.htm
        
            if (typeof number !== 'number') {
                return null;
            }
            var regex = /%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g; // 1: flags, 3: width, 5: left, 7: right, 8: conversion
        
            this.setlocale('LC_ALL', 0); // Ensure the locale data we need is set up
            var monetary = this.php_js.locales[this.php_js.localeCategories['LC_MONETARY']]['LC_MONETARY'];
        
            var doReplace = function (n0, flags, n2, width, n4, left, n6, right, conversion) {
                var value = '',
                    repl = '';
                if (conversion === '%') { // Percent does not seem to be allowed with intervening content
                    return '%';
                }
                var fill = flags && (/=./).test(flags) ? flags.match(/=(.)/)[1] : ' '; // flag: =f (numeric fill)
                var showCurrSymbol = !flags || flags.indexOf('!') === -1; // flag: ! (suppress currency symbol)
                width = parseInt(width, 10) || 0; // field width: w (minimum field width)
        
                var neg = number < 0;
                number = number + ''; // Convert to string
                number = neg ? number.slice(1) : number; // We don't want negative symbol represented here yet
        
                var decpos = number.indexOf('.');
                var integer = decpos !== -1 ? number.slice(0, decpos) : number; // Get integer portion
                var fraction = decpos !== -1 ? number.slice(decpos + 1) : ''; // Get decimal portion
        
                var _str_splice = function (integerStr, idx, thous_sep) {
                    var integerArr = integerStr.split('');
                    integerArr.splice(idx, 0, thous_sep);
                    return integerArr.join('');
                };
        
                var init_lgth = integer.length;
                left = parseInt(left, 10);
                var filler = init_lgth < left;
                if (filler) {
                    var fillnum = left - init_lgth;
                    integer = new Array(fillnum + 1).join(fill) + integer;
                }
                if (flags.indexOf('^') === -1) { // flag: ^ (disable grouping characters (of locale))
                    // use grouping characters
                    var thous_sep = monetary.mon_thousands_sep; // ','
                    var mon_grouping = monetary.mon_grouping; // [3] (every 3 digits in U.S.A. locale)
        
                    if (mon_grouping[0] < integer.length) {
                        for (var i = 0, idx = integer.length; i < mon_grouping.length; i++) {
                            idx -= mon_grouping[i]; // e.g., 3
                            if (idx < 0) {
                                break;
                            }
                            if (filler && idx < fillnum) {
                                thous_sep = fill;
                            }
                            integer = _str_splice(integer, idx, thous_sep);
                        }
                    }
                    if (mon_grouping[i - 1] > 0) { // Repeating last grouping (may only be one) until highest portion of integer reached
                        while (idx > mon_grouping[i - 1]) {
                            idx -= mon_grouping[i - 1];
                            if (filler && idx < fillnum) {
                                thous_sep = fill;
                            }
                            integer = _str_splice(integer, idx, thous_sep);
                        }
                    }
                }
        
                // left, right
                if (right === '0') { // No decimal or fractional digits
                    value = integer;
                } else {
                    var dec_pt = monetary.mon_decimal_point; // '.'
                    if (right === '' || right === undefined) {
                        right = conversion === 'i' ? monetary.int_frac_digits : monetary.frac_digits;
                    }
                    right = parseInt(right, 10);
        
                    if (right === 0) { // Only remove fractional portion if explicitly set to zero digits
                        fraction = '';
                        dec_pt = '';
                    } else if (right < fraction.length) {
                        fraction = Math.round(parseFloat(fraction.slice(0, right) + '.' + fraction.substr(right, 1), 10)) + '';
                    } else if (right > fraction.length) {
                        fraction += new Array(right - fraction.length + 1).join('0'); // pad with 0's
                    }
                    value = integer + dec_pt + fraction;
                }
        
                var symbol = '';
                if (showCurrSymbol) {
                    symbol = conversion === 'i' ? monetary.int_curr_symbol : monetary.currency_symbol; // 'i' vs. 'n' ('USD' vs. '$')
                }
                var sign_posn = neg ? monetary.n_sign_posn : monetary.p_sign_posn;
        
                // 0: no space between curr. symbol and value
                // 1: space sep. them unless symb. and sign are adjacent then space sep. them from value
                // 2: space sep. sign and value unless symb. and sign are adjacent then space separates
                var sep_by_space = neg ? monetary.n_sep_by_space : monetary.p_sep_by_space;
        
                // p_cs_precedes, n_cs_precedes // positive currency symbol follows value = 0; precedes value = 1
                var cs_precedes = neg ? monetary.n_cs_precedes : monetary.p_cs_precedes;
        
                // Assemble symbol/value/sign and possible space as appropriate
                if (flags.indexOf('(') !== -1) { // flag: parenth. for negative
                    // Fix: unclear on whether and how sep_by_space, sign_posn, or cs_precedes have
                    // an impact here (as they do below), but assuming for now behaves as sign_posn 0 as
                    // far as localized sep_by_space and sign_posn behavior
                    repl = (cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') : '') + value + (!cs_precedes ? (sep_by_space === 1 ? ' ' : '') + symbol : '');
                    if (neg) {
                        repl = '(' + repl + ')';
                    } else {
                        repl = ' ' + repl + ' ';
                    }
                } else { // '+' is default
                    var pos_sign = monetary.positive_sign; // ''
                    var neg_sign = monetary.negative_sign; // '-'
                    var sign = neg ? (neg_sign) : (pos_sign);
                    var otherSign = neg ? (pos_sign) : (neg_sign);
                    var signPadding = '';
                    if (sign_posn) { // has a sign
                        signPadding = new Array(otherSign.length - sign.length + 1).join(' ');
                    }
        
                    var valueAndCS = '';
                    switch (sign_posn) {
                        // 0: parentheses surround value and curr. symbol;
                        // 1: sign precedes them;
                        // 2: sign follows them;
                        // 3: sign immed. precedes curr. symbol; (but may be space between)
                        // 4: sign immed. succeeds curr. symbol; (but may be space between)
                    case 0:
                        valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                        repl = '(' + valueAndCS + ')';
                        break;
                    case 1:
                        valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                        repl = signPadding + sign + (sep_by_space === 2 ? ' ' : '') + valueAndCS;
                        break;
                    case 2:
                        valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                        repl = valueAndCS + (sep_by_space === 2 ? ' ' : '') + sign + signPadding;
                        break;
                    case 3:
                        repl = cs_precedes ? signPadding + sign + (sep_by_space === 2 ? ' ' : '') + symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + sign + signPadding + (sep_by_space === 2 ? ' ' : '') + symbol;
                        break;
                    case 4:
                        repl = cs_precedes ? symbol + (sep_by_space === 2 ? ' ' : '') + signPadding + sign + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol + (sep_by_space === 2 ? ' ' : '') + sign + signPadding;
                        break;
                    }
                }
        
                var padding = width - repl.length;
                if (padding > 0) {
                    padding = new Array(padding + 1).join(' ');
                    // Fix: How does p_sep_by_space affect the count if there is a space? Included in count presumably?
                    if (flags.indexOf('-') !== -1) { // left-justified (pad to right)
                        repl += padding;
                    } else { // right-justified (pad to left)
                        repl = padding + repl;
                    }
                }
                return repl;
            };
        
            return format.replace(regex, doReplace);
        }
        ,
        mt_getrandmax: function () {
            // Returns the maximum value a random number from Mersenne Twister can have  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/mt_getrandmax
            // +   original by: Onno Marsman
            // *     example 1: $P.mt_getrandmax();
            // *     returns 1: 2147483647
            return 2147483647;
        }
        ,
        mt_rand: function (min, max) {
            // Returns a random number from Mersenne Twister  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/mt_rand
            // +   original by: Onno Marsman
            // *     example 1: $P.mt_rand(1, 1);
            // *     returns 1: 1
            var argc = arguments.length;
            if (argc === 0) {
                min = 0;
                max = 2147483647;
            } else if (argc === 1) {
                throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        ,
        natcasesort: function (inputArr) {
            // Sort an array using case-insensitive natural sort  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/natcasesort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // %        note 1: This function deviates from PHP in returning a copy of the array instead
            // %        note 1: of acting by reference and returning true; this was necessary because
            // %        note 1: IE does not allow deleting and re-adding of properties without caching
            // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 1: get the PHP behavior, but use this only if you are in an environment
            // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 1: property deletion is supported. Note that we intend to implement the PHP
            // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 1: is by reference in PHP anyways
            // %        note 2: We cannot use numbers as keys and have them be reordered since they
            // %        note 2: adhere to numerical order in some implementations
            // -    depends on: strnatcasecmp
            // *     example 1: $array1 = {a:'IMG0.png', b:'img12.png', c:'img10.png', d:'img2.png', e:'img1.png', f:'IMG3.png'};
            // *     example 1: $array1 = natcasesort($array1);
            // *     returns 1: {a: 'IMG0.png', e: 'img1.png', d: 'img2.png', f: 'IMG3.png', c: 'img10.png', b: 'img12.png'}
            var valArr = [],
                k, i, ret, that = this,
                strictForIn = false,
                populateArr = {};
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            // Get key and value arrays
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push([k, inputArr[k]]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            valArr.sort(function (a, b) {
                return that.strnatcasecmp(a[1], b[1]);
            });
        
            // Repopulate the old array
            for (i = 0; i < valArr.length; i++) {
                populateArr[valArr[i][0]] = valArr[i][1];
            }
        
            return strictForIn || populateArr;
        }
        ,
        natsort: function (inputArr) {
            // Sort an array using natural sort  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/natsort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // %        note 1: This function deviates from PHP in returning a copy of the array instead
            // %        note 1: of acting by reference and returning true; this was necessary because
            // %        note 1: IE does not allow deleting and re-adding of properties without caching
            // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 1: get the PHP behavior, but use this only if you are in an environment
            // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 1: property deletion is supported. Note that we intend to implement the PHP
            // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 1: is by reference in PHP anyways
            // -    depends on: strnatcmp
            // *     example 1: $array1 = {a:"img12.png", b:"img10.png", c:"img2.png", d:"img1.png"};
            // *     example 1: $array1 = natsort($array1);
            // *     returns 1: {d: 'img1.png', c: 'img2.png', b: 'img10.png', a: 'img12.png'}
            var valArr = [],
                k, i, ret, that = this,
                strictForIn = false,
                populateArr = {};
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            // Get key and value arrays
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push([k, inputArr[k]]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            valArr.sort(function (a, b) {
                return that.strnatcmp(a[1], b[1]);
            });
        
            // Repopulate the old array
            for (i = 0; i < valArr.length; i++) {
                populateArr[valArr[i][0]] = valArr[i][1];
            }
        
            return strictForIn || populateArr;
        }
        ,
        next: function (arr) {
            // Move array argument's internal pointer to the next element and return it  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/next
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.transport = ['foot', 'bike', 'car', 'plane'];
            // *     example 1: $P.next(transport);
            // *     example 1: $P.next(transport);
            // *     returns 1: 'car'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            var cursor = pointers[arrpos + 1];
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                var ct = 0;
                for (var k in arr) {
                    if (ct === cursor + 1) {
                        pointers[arrpos + 1] += 1;
                        return arr[k];
                    }
                    ct++;
                }
                return false; // End
            }
            if (arr.length === 0 || cursor === (arr.length - 1)) {
                return false;
            }
            pointers[arrpos + 1] += 1;
            return arr[pointers[arrpos + 1]];
        }
        ,
        nl2br: function (str, is_xhtml) {
            // Converts newlines to HTML line breaks  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/nl2br
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Philip Peterson
            // +   improved by: Onno Marsman
            // +   improved by: Atli Þór
            // +   bugfixed by: Onno Marsman
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Maximusya
            // *     example 1: $P.nl2br('Kevin\nvan\nZonneveld');
            // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
            // *     example 2: $P.nl2br("\nOne\nTwo\n\nThree\n", false);
            // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
            // *     example 3: $P.nl2br("\nOne\nTwo\n\nThree\n", true);
            // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
        
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
        ,
        nl_langinfo: function (item) {
            // Query language and locale information  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/nl_langinfo
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: setlocale
            // *     example 1: $P.nl_langinfo('DAY_1');
            // *     returns 1: 'Sunday'
            this.setlocale('LC_ALL', 0); // Ensure locale data is available
            var loc = this.php_js.locales[this.php_js.localeCategories.LC_TIME];
            if (item.indexOf('ABDAY_') === 0) {
                return loc.LC_TIME.a[parseInt(item.replace(/^ABDAY_/, ''), 10) - 1];
            } else if (item.indexOf('DAY_') === 0) {
                return loc.LC_TIME.A[parseInt(item.replace(/^DAY_/, ''), 10) - 1];
            } else if (item.indexOf('ABMON_') === 0) {
                return loc.LC_TIME.b[parseInt(item.replace(/^ABMON_/, ''), 10) - 1];
            } else if (item.indexOf('MON_') === 0) {
                return loc.LC_TIME.B[parseInt(item.replace(/^MON_/, ''), 10) - 1];
            } else {
                switch (item) {
                    // More LC_TIME
                case 'AM_STR':
                    return loc.LC_TIME.p[0];
                case 'PM_STR':
                    return loc.LC_TIME.p[1];
                case 'D_T_FMT':
                    return loc.LC_TIME.c;
                case 'D_FMT':
                    return loc.LC_TIME.x;
                case 'T_FMT':
                    return loc.LC_TIME.X;
                case 'T_FMT_AMPM':
                    return loc.LC_TIME.r;
                case 'ERA':
                    // all fall-throughs
                case 'ERA_YEAR':
                case 'ERA_D_T_FMT':
                case 'ERA_D_FMT':
                case 'ERA_T_FMT':
                    return loc.LC_TIME[item];
                }
                loc = this.php_js.locales[this.php_js.localeCategories.LC_MONETARY];
                if (item === 'CRNCYSTR') {
                    item = 'CURRENCY_SYMBOL'; // alias
                }
                switch (item) {
                case 'INT_CURR_SYMBOL':
                    // all fall-throughs
                case 'CURRENCY_SYMBOL':
                case 'MON_DECIMAL_POINT':
                case 'MON_THOUSANDS_SEP':
                case 'POSITIVE_SIGN':
                case 'NEGATIVE_SIGN':
                case 'INT_FRAC_DIGITS':
                case 'FRAC_DIGITS':
                case 'P_CS_PRECEDES':
                case 'P_SEP_BY_SPACE':
                case 'N_CS_PRECEDES':
                case 'N_SEP_BY_SPACE':
                case 'P_SIGN_POSN':
                case 'N_SIGN_POSN':
                    return loc.LC_MONETARY[item.toLowerCase()];
                case 'MON_GROUPING':
                    // Same as above, or return something different since this returns an array?
                    return loc.LC_MONETARY[item.toLowerCase()];
                }
                loc = this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC];
                switch (item) {
                case 'RADIXCHAR':
                    // Fall-through
                case 'DECIMAL_POINT':
                    return loc.LC_NUMERIC[item.toLowerCase()];
                case 'THOUSEP':
                    // Fall-through
                case 'THOUSANDS_SEP':
                    return loc.LC_NUMERIC[item.toLowerCase()];
                case 'GROUPING':
                    // Same as above, or return something different since this returns an array?
                    return loc.LC_NUMERIC[item.toLowerCase()];
                }
                loc = this.php_js.locales[this.php_js.localeCategories.LC_MESSAGES];
                switch (item) {
                case 'YESEXPR':
                    // all fall-throughs
                case 'NOEXPR':
                case 'YESSTR':
                case 'NOSTR':
                    return loc.LC_MESSAGES[item];
                }
                loc = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE];
                if (item === 'CODESET') {
                    return loc.LC_CTYPE[item];
                }
                return false;
            }
        }
        ,
        number_format: function (number, decimals, dec_point, thousands_sep) {
            // Formats a number with grouped thousands  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/number_format
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     bugfix by: Michael White (http://getsprink.com)
            // +     bugfix by: Benjamin Lupton
            // +     bugfix by: Allan Jensen (http://www.winternet.no)
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +     bugfix by: Howard Yeend
            // +    revised by: Luke Smith (http://lucassmith.name)
            // +     bugfix by: Diogo Resende
            // +     bugfix by: Rival
            // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
            // +   improved by: davook
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Jay Klehr
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Amir Habibi (http://www.residence-mixte.com/)
            // +     bugfix by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +      input by: Amirouche
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.number_format(1234.56);
            // *     returns 1: '1,235'
            // *     example 2: $P.number_format(1234.56, 2, ',', ' ');
            // *     returns 2: '1 234,56'
            // *     example 3: $P.number_format(1234.5678, 2, '.', '');
            // *     returns 3: '1234.57'
            // *     example 4: $P.number_format(67, 2, ',', '.');
            // *     returns 4: '67,00'
            // *     example 5: $P.number_format(1000);
            // *     returns 5: '1,000'
            // *     example 6: $P.number_format(67.311, 2);
            // *     returns 6: '67.31'
            // *     example 7: $P.number_format(1000.55, 1);
            // *     returns 7: '1,000.6'
            // *     example 8: $P.number_format(67000, 5, ',', '.');
            // *     returns 8: '67.000,00000'
            // *     example 9: $P.number_format(0.9, 0);
            // *     returns 9: '1'
            // *    example 10: $P.number_format('1.20', 2);
            // *    returns 10: '1.20'
            // *    example 11: $P.number_format('1.20', 4);
            // *    returns 11: '1.2000'
            // *    example 12: $P.number_format('1.2000', 3);
            // *    returns 12: '1.200'
            // *    example 13: $P.number_format('1 000,50', 2, '.', ' ');
            // *    returns 13: '100 050.00'
            // Strip all characters but numerical ones.
            number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }
        ,
        octdec: function (oct_string) {
            // Returns the decimal equivalent of an octal string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/octdec
            // +   original by: Philippe Baumann
            // *     example 1: $P.octdec('77');
            // *     returns 1: 63
            oct_string = (oct_string + '').replace(/[^0-7]/gi, '');
            return parseInt(oct_string, 8);
        }
        ,
        ord: function (string) {
            // Returns the codepoint value of a character  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ord
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   input by: incidence
            // *     example 1: $P.ord('K');
            // *     returns 1: 75
            // *     example 2: $P.ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
            // *     returns 2: 65536
            var str = string + '',
                code = str.charCodeAt(0);
            if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
                var hi = code;
                if (str.length === 1) {
                    return code; // This is just a high surrogate with no following low surrogate, so we return its value;
                    // we could also throw an error as it is not a complete character, but someone may want to know
                }
                var low = str.charCodeAt(1);
                return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
                return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
                // we could also throw an error as it is not a complete character, but someone may want to know
            }
            return code;
        }
        ,
        pack: function (format) {
            // Takes one or more arguments and packs them into a binary string according to the format argument  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pack
            // +   original by: Tim de Koning (http://www.kingsquare.nl)
            // +      parts by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   bugfixed by: Tim de Koning (http://www.kingsquare.nl)
            // %        note 1: Float encoding by: Jonas Raoni Soares Silva
            // %        note 2: Home: http://www.kingsquare.nl/blog/12-12-2009/13507444
            // %        note 3: Feedback: phpjs-pack@kingsquare.nl
            // %        note 4: 'machine dependent byte order and size' aren't
            // %        note 4: applicable for JavaScript; pack works as on a 32bit,
            // %        note 4: little endian machine
            // *     example 1: $P.pack('nvc*', 0x1234, 0x5678, 65, 66);
            // *     returns 1: '4xVAB'
            var formatPointer = 0,
                argumentPointer = 1,
                result = '',
                argument = '',
                i = 0,
                r = [],
                instruction, quantifier, word, precisionBits, exponentBits, extraNullCount;
        
            // vars used by float encoding
            var bias, minExp, maxExp, minUnnormExp, status, exp, len, bin, signal, n, intPart, floatPart, lastBit, rounded, j, k, tmpResult;
        
            while (formatPointer < format.length) {
                instruction = format[formatPointer];
                quantifier = '';
                formatPointer++;
                while ((formatPointer < format.length) && (format[formatPointer].match(/[\d\*]/) !== null)) {
                    quantifier += format[formatPointer];
                    formatPointer++;
                }
                if (quantifier === '') {
                    quantifier = '1';
                }
        
                // Now pack variables: 'quantifier' times 'instruction'
                switch (instruction) {
                case 'a':
                    // NUL-padded string
                case 'A':
                    // SPACE-padded string
                    if (typeof arguments[argumentPointer] === 'undefined') {
                        throw new Error('Warning:  pack() Type ' + instruction + ': not enough arguments');
                    } else {
                        argument = String(arguments[argumentPointer]);
                    }
                    if (quantifier === '*') {
                        quantifier = argument.length;
                    }
                    for (i = 0; i < quantifier; i++) {
                        if (typeof argument[i] === 'undefined') {
                            if (instruction === 'a') {
                                result += String.fromCharCode(0);
                            } else {
                                result += ' ';
                            }
                        } else {
                            result += argument[i];
                        }
                    }
                    argumentPointer++;
                    break;
                case 'h':
                    // Hex string, low nibble first
                case 'H':
                    // Hex string, high nibble first
                    if (typeof arguments[argumentPointer] === 'undefined') {
                        throw new Error('Warning: pack() Type ' + instruction + ': not enough arguments');
                    } else {
                        argument = arguments[argumentPointer];
                    }
                    if (quantifier === '*') {
                        quantifier = argument.length;
                    }
                    if (quantifier > argument.length) {
                        throw new Error('Warning: pack() Type ' + instruction + ': not enough characters in string');
                    }
                    for (i = 0; i < quantifier; i += 2) {
                        // Always get per 2 bytes...
                        word = argument[i];
                        if (((i + 1) >= quantifier) || typeof(argument[i + 1]) === 'undefined') {
                            word += '0';
                        } else {
                            word += argument[i + 1];
                        }
                        // The fastest way to reverse?
                        if (instruction === 'h') {
                            word = word[1] + word[0];
                        }
                        result += String.fromCharCode(parseInt(word, 16));
                    }
                    argumentPointer++;
                    break;
        
                case 'c':
                    // signed char
                case 'C':
                    // unsigned char
                    // c and C is the same in pack
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
        
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(arguments[argumentPointer]);
                        argumentPointer++;
                    }
                    break;
        
                case 's':
                    // signed short (always 16 bit, machine byte order)
                case 'S':
                    // unsigned short (always 16 bit, machine byte order)
                case 'v':
                    // s and S is the same in pack
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
        
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
                        argumentPointer++;
                    }
                    break;
        
                case 'n':
                    // unsigned short (always 16 bit, big endian byte order)
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
        
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
                        argumentPointer++;
                    }
                    break;
        
                case 'i':
                    // signed integer (machine dependent size and byte order)
                case 'I':
                    // unsigned integer (machine dependent size and byte order)
                case 'l':
                    // signed long (always 32 bit, machine byte order)
                case 'L':
                    // unsigned long (always 32 bit, machine byte order)
                case 'V':
                    // unsigned long (always 32 bit, little endian byte order)
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
        
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
                        argumentPointer++;
                    }
        
                    break;
                case 'N':
                    // unsigned long (always 32 bit, big endian byte order)
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
        
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
                        result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
                        argumentPointer++;
                    }
                    break;
        
                case 'f':
                    // float (machine dependent size and representation)
                case 'd':
                    // double (machine dependent size and representation)
                    // version based on IEEE754
                    precisionBits = 23;
                    exponentBits = 8;
                    if (instruction === 'd') {
                        precisionBits = 52;
                        exponentBits = 11;
                    }
        
                    if (quantifier === '*') {
                        quantifier = arguments.length - argumentPointer;
                    }
                    if (quantifier > (arguments.length - argumentPointer)) {
                        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
                    }
                    for (i = 0; i < quantifier; i++) {
                        argument = arguments[argumentPointer];
                        bias = Math.pow(2, exponentBits - 1) - 1;
                        minExp = -bias + 1;
                        maxExp = bias;
                        minUnnormExp = minExp - precisionBits;
                        status = isNaN(n = parseFloat(argument)) || n === -Infinity || n === +Infinity ? n : 0;
                        exp = 0;
                        len = 2 * bias + 1 + precisionBits + 3;
                        bin = new Array(len);
                        signal = (n = status !== 0 ? 0 : n) < 0;
                        n = Math.abs(n);
                        intPart = Math.floor(n);
                        floatPart = n - intPart;
        
                        for (k = len; k;) {
                            bin[--k] = 0;
                        }
                        for (k = bias + 2; intPart && k;) {
                            bin[--k] = intPart % 2;
                            intPart = Math.floor(intPart / 2);
                        }
                        for (k = bias + 1; floatPart > 0 && k; --floatPart) {
                            (bin[++k] = ((floatPart *= 2) >= 1) - 0);
                        }
                        for (k = -1; ++k < len && !bin[k];) {}
        
                        if (bin[(lastBit = precisionBits - 1 + (k = (exp = bias + 1 - k) >= minExp && exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1]) {
                            if (!(rounded = bin[lastBit])) {
                                for (j = lastBit + 2; !rounded && j < len; rounded = bin[j++]) {}
                            }
                            for (j = lastBit + 1; rounded && --j >= 0;
                            (bin[j] = !bin[j] - 0) && (rounded = 0)) {}
                        }
        
                        for (k = k - 2 < 0 ? -1 : k - 3; ++k < len && !bin[k];) {}
        
                        if ((exp = bias + 1 - k) >= minExp && exp <= maxExp) {
                            ++k;
                        } else {
                            if (exp < minExp) {
                                if (exp !== bias + 1 - len && exp < minUnnormExp) { /*"encodeFloat::float underflow" */
                                }
                                k = bias + 1 - (exp = minExp - 1);
                            }
                        }
        
                        if (intPart || status !== 0) {
                            exp = maxExp + 1;
                            k = bias + 2;
                            if (status === -Infinity) {
                                signal = 1;
                            } else if (isNaN(status)) {
                                bin[k] = 1;
                            }
                        }
        
                        n = Math.abs(exp + bias);
                        tmpResult = '';
        
                        for (j = exponentBits + 1; --j;) {
                            tmpResult = (n % 2) + tmpResult;
                            n = n >>= 1;
                        }
        
                        n = 0;
                        j = 0;
                        k = (tmpResult = (signal ? '1' : '0') + tmpResult + bin.slice(k, k + precisionBits).join('')).length;
                        r = [];
        
                        for (; k;) {
                            n += (1 << j) * tmpResult.charAt(--k);
                            if (j === 7) {
                                r[r.length] = String.fromCharCode(n);
                                n = 0;
                            }
                            j = (j + 1) % 8;
                        }
        
                        r[r.length] = n ? String.fromCharCode(n) : '';
                        result += r.join('');
                        argumentPointer++;
                    }
                    break;
        
                case 'x':
                    // NUL byte
                    if (quantifier === '*') {
                        throw new Error('Warning: pack(): Type x: \'*\' ignored');
                    }
                    for (i = 0; i < quantifier; i++) {
                        result += String.fromCharCode(0);
                    }
                    break;
        
                case 'X':
                    // Back up one byte
                    if (quantifier === '*') {
                        throw new Error('Warning: pack(): Type X: \'*\' ignored');
                    }
                    for (i = 0; i < quantifier; i++) {
                        if (result.length === 0) {
                            throw new Error('Warning: pack(): Type X:' + ' outside of string');
                        } else {
                            result = result.substring(0, result.length - 1);
                        }
                    }
                    break;
        
                case '@':
                    // NUL-fill to absolute position
                    if (quantifier === '*') {
                        throw new Error('Warning: pack(): Type X: \'*\' ignored');
                    }
                    if (quantifier > result.length) {
                        extraNullCount = quantifier - result.length;
                        for (i = 0; i < extraNullCount; i++) {
                            result += String.fromCharCode(0);
                        }
                    }
                    if (quantifier < result.length) {
                        result = result.substring(0, quantifier);
                    }
                    break;
        
                default:
                    throw new Error('Warning:  pack() Type ' + instruction + ': unknown format code');
                }
            }
            if (argumentPointer < arguments.length) {
                throw new Error('Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused');
            }
        
            return result;
        }
        ,
        parse_str: function (str, array) {
            // Parses GET/POST/COOKIE data and sets global variables  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/parse_str
            // +   original by: Cagri Ekin
            // +   improved by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +   reimplemented by: stag019
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: stag019
            // -    depends on: urldecode
            // +   input by: Dreamer
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: When no argument is specified, will put variables in global scope.
            // *     example 1: $P.var arr = {};
            // *     example 1: $P.parse_str('first=foo&second=bar', arr);
            // *     results 1: arr == { first: 'foo', second: 'bar' }
            // *     example 2: $P.var arr = {};
            // *     example 2: $P.parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
            // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }
            var glue1 = '=',
                glue2 = '&',
                array2 = String(str).replace(/^&?([\s\S]*?)&?$/, '$1').split(glue2),
                i, j, chr, tmp, key, value, bracket, keys, evalStr, that = this,
                fixStr = function (str) {
                    return that.urldecode(str).replace(/([\\"'])/g, '\\$1').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
                };
        
            if (!array) {
                array = this.window;
            }
        
            for (i = 0; i < array2.length; i++) {
                tmp = array2[i].split(glue1);
                if (tmp.length < 2) {
                    tmp = [tmp, ''];
                }
                key = fixStr(tmp[0]);
                value = fixStr(tmp[1]);
                while (key.charAt(0) === ' ') {
                    key = key.substr(1);
                }
                if (key.indexOf('\0') !== -1) {
                    key = key.substr(0, key.indexOf('\0'));
                }
                if (key && key.charAt(0) !== '[') {
                    keys = [];
                    bracket = 0;
                    for (j = 0; j < key.length; j++) {
                        if (key.charAt(j) === '[' && !bracket) {
                            bracket = j + 1;
                        } else if (key.charAt(j) === ']') {
                            if (bracket) {
                                if (!keys.length) {
                                    keys.push(key.substr(0, bracket - 1));
                                }
                                keys.push(key.substr(bracket, j - bracket));
                                bracket = 0;
                                if (key.charAt(j + 1) !== '[') {
                                    break;
                                }
                            }
                        }
                    }
                    if (!keys.length) {
                        keys = [key];
                    }
                    for (j = 0; j < keys[0].length; j++) {
                        chr = keys[0].charAt(j);
                        if (chr === ' ' || chr === '.' || chr === '[') {
                            keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
                        }
                        if (chr === '[') {
                            break;
                        }
                    }
                    evalStr = 'array';
                    for (j = 0; j < keys.length; j++) {
                        key = keys[j];
                        if ((key !== '' && key !== ' ') || j === 0) {
                            key = "'" + key + "'";
                        } else {
                            key = eval(evalStr + '.push([]);') - 1;
                        }
                        evalStr += '[' + key + ']';
                        if (j !== keys.length - 1 && eval('typeof ' + evalStr) === 'undefined') {
                            eval(evalStr + ' = [];');
                        }
                    }
                    evalStr += " = '" + value + "';\n";
                    eval(evalStr);
                }
            }
        }
        ,
        parse_url: function (str, component) {
            // Parse a URL and return its components  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/parse_url
            // +      original by: Steven Levithan (http://blog.stevenlevithan.com)
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // + input by: Lorenzo Pisani
            // + input by: Tony
            // + improved by: Brett Zamir (http://brett-zamir.me)
            // %          note: Based on http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
            // %          note: blog post at http://blog.stevenlevithan.com/archives/parseuri
            // %          note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
            // %          note: Does not replace invalid characters with '_' as in PHP, nor does it return false with
            // %          note: a seriously malformed URL.
            // %          note: Besides function name, is essentially the same as parseUri as well as our allowing
            // %          note: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
            // *     example 1: $P.parse_url('http://username:password@hostname/path?arg=value#anchor');
            // *     returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}
            var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 
                                'relative', 'path', 'directory', 'file', 'query', 'fragment'],
                ini = (this.php_js && this.php_js.ini) || {},
                mode = (ini['phpjs.parse_url.mode'] && 
                    ini['phpjs.parse_url.mode'].local_value) || 'php',
                parser = {
                    php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-scheme to catch file:/// (should restrict this)
                };
        
            var m = parser[mode].exec(str),
                uri = {},
                i = 14;
            while (i--) {
                if (m[i]) {
                  uri[key[i]] = m[i];  
                }
            }
        
            if (component) {
                return uri[component.replace('PHP_URL_', '').toLowerCase()];
            }
            if (mode !== 'php') {
                var name = (ini['phpjs.parse_url.queryKey'] && 
                        ini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';
                parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
                uri[name] = {};
                uri[key[12]].replace(parser, function ($0, $1, $2) {
                    if ($1) {uri[name][$1] = $2;}
                });
            }
            delete uri.source;
            return uri;
        }
        ,
        pathinfo: function (path, options) {
            // Returns information about a certain string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pathinfo
            // +   original by: Nate
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Inspired by actual PHP source: php5-5.2.6/ext/standard/string.c line #1559
            // %        note 1: The way the bitwise arguments are handled allows for greater flexibility
            // %        note 1: & compatability. We might even standardize this code and use a similar approach for
            // %        note 1: other bitwise PHP functions
            // %        note 2: php.js tries very hard to stay away from a core.js file with global dependencies, because we like
            // %        note 2: that you can just take a couple of functions and be on your way.
            // %        note 2: But by way we implemented this function, if you want you can still declare the PATHINFO_*
            // %        note 2: yourself, and then you can use: pathinfo('/www/index.html', PATHINFO_BASENAME | PATHINFO_EXTENSION);
            // %        note 2: which makes it fully compliant with PHP syntax.
            // -    depends on: dirname
            // -    depends on: basename
            // *     example 1: $P.pathinfo('/www/htdocs/index.html', 1);
            // *     returns 1: '/www/htdocs'
            // *     example 2: $P.pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME');
            // *     returns 2: 'index.html'
            // *     example 3: $P.pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION');
            // *     returns 3: 'html'
            // *     example 4: $P.pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME');
            // *     returns 4: 'index'
            // *     example 5: $P.pathinfo('/www/htdocs/index.html', 2 | 4);
            // *     returns 5: {basename: 'index.html', extension: 'html'}
            // *     example 6: $P.pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL');
            // *     returns 6: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
            // *     example 7: $P.pathinfo('/www/htdocs/index.html');
            // *     returns 7: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
            // Working vars
            var opt = '',
                optName = '',
                optTemp = 0,
                tmp_arr = {},
                cnt = 0,
                i = 0;
            var have_basename = false,
                have_extension = false,
                have_filename = false;
        
            // Input defaulting & sanitation
            if (!path) {
                return false;
            }
            if (!options) {
                options = 'PATHINFO_ALL';
            }
        
            // Initialize binary arguments. Both the string & integer (constant) input is
            // allowed
            var OPTS = {
                'PATHINFO_DIRNAME': 1,
                'PATHINFO_BASENAME': 2,
                'PATHINFO_EXTENSION': 4,
                'PATHINFO_FILENAME': 8,
                'PATHINFO_ALL': 0
            };
            // PATHINFO_ALL sums up all previously defined PATHINFOs (could just pre-calculate)
            for (optName in OPTS) {
                OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[optName];
            }
            if (typeof options !== 'number') { // Allow for a single string or an array of string flags
                options = [].concat(options);
                for (i = 0; i < options.length; i++) {
                    // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                    if (OPTS[options[i]]) {
                        optTemp = optTemp | OPTS[options[i]];
                    }
                }
                options = optTemp;
            }
        
            // Internal Functions
            var __getExt = function (path) {
                var str = path + '';
                var dotP = str.lastIndexOf('.') + 1;
                return str.substr(dotP);
            };
        
        
            // Gather path infos
            if (options & OPTS.PATHINFO_DIRNAME) {
                tmp_arr.dirname = this.dirname(path);
            }
        
            if (options & OPTS.PATHINFO_BASENAME) {
                if (false === have_basename) {
                    have_basename = this.basename(path);
                }
                tmp_arr.basename = have_basename;
            }
        
            if (options & OPTS.PATHINFO_EXTENSION) {
                if (false === have_basename) {
                    have_basename = this.basename(path);
                }
                if (false === have_extension) {
                    have_extension = __getExt(have_basename);
                }
                tmp_arr.extension = have_extension;
            }
        
            if (options & OPTS.PATHINFO_FILENAME) {
                if (false === have_basename) {
                    have_basename = this.basename(path);
                }
                if (false === have_extension) {
                    have_extension = __getExt(have_basename);
                }
                if (false === have_filename) {
                    have_filename = have_basename.substr(0, (have_basename.length - have_extension.length) - 1);
                }
        
                tmp_arr.filename = have_filename;
            }
        
        
            // If array contains only 1 element: return string
            cnt = 0;
            for (opt in tmp_arr) {
                cnt++;
            }
            if (cnt == 1) {
                return tmp_arr[opt];
            }
        
            // Return full-blown array
            return tmp_arr;
        }
        ,
        pclose: function (handle) {
            // Close a file pointer opened by popen()  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pclose
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.var handle = popen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
            // *     example 1: $P.pclose(handle);
            // *     returns 1: true
            if (!handle || handle.opener !== 'popen') {
                return false;
            }
        
            try {
                delete this.php_js.resourceDataPointer[handle.id];
                delete this.php_js.resourceData[handle.id]; // Free up memory
            } catch (e) {
                return false;
            }
            return true;
        }
        ,
        pi: function () {
            // Returns an approximation of pi  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pi
            // +   original by: Onno Marsman
            // +   improved by: dude
            // *     example 1: $P.pi(8723321.4);
            // *     returns 1: 3.141592653589793
            return 3.141592653589793; // Math.PI
        }
        ,
        popen: function (filename, mode, use_include_path, context) {
            // Execute a command and open either a read or a write pipe to it  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/popen
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Paul Smith
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: file_get_contents
            // *     example 1: $P.popen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
            // *     returns 1: 'Resource id #1'
            var resource = {},
                i = 0,
                that = this;
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
        
            // BEGIN file inclusion: file_get_contents
            var file_get_contents = function (url) {
                var req = that.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                if (!req) {
                    throw new Error('XMLHttpRequest not supported');
                }
                if (!(/^http/).test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
                    url = that.window.location.href + '/' + url;
                }
                req.open("GET", url, false);
                req.send(null);
                return req.responseText;
            };
            // END file inclusion
        
            if (use_include_path === 1 || use_include_path === '1' || use_include_path === true) {
                // Not implemented yet: Search for file in include path too
            }
            if (context) {
                // Not implemented yet, but could be useful to modify nature of HTTP request, etc.
            }
        
            for (i = 0; i < mode.length; i++) { // Have to deal with other flags if ever allow
                switch (mode.charAt(i)) {
                case 'r':
                    if (!mode.charAt(i + 1) || mode.charAt(i + 1) !== '+') {
                        break;
                    }
                case 'w':
                    // or 'w+'
                case 'a':
                    // or 'a+'
                case 'x':
                    // or 'x+'
                    throw 'Writing is not implemented';
                case 'b':
                case 't':
                    throw 'Windows-only modes are not supported';
                default:
                    throw 'Unrecognized file mode passed to ' + getFuncName(arguments.caller) + '()';
                }
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.resourceData = this.php_js.resourceData || {};
            this.php_js.resourceDataPointer = this.php_js.resourceDataPointer || {};
            this.php_js.resourceIdCounter = this.php_js.resourceIdCounter || 0;
            // END REDUNDANT
        
            // BEGIN STATIC
        
            function PHPJS_Resource(type, id, opener) { // Can reuse the following for other resources, just changing the instantiation
                // See http://php.net/manual/en/resource.php for types
                this.type = type;
                this.id = id;
                this.opener = opener;
            }
            PHPJS_Resource.prototype.toString = function () {
                return 'Resource id #' + this.id;
            };
            PHPJS_Resource.prototype.get_resource_type = function () {
                return this.type;
            };
            PHPJS_Resource.prototype.var_dump = function () {
                return 'resource(' + this.id + ') of type (' + this.type + ')';
            };
            // END STATIC
        
            this.php_js.resourceIdCounter++;
        
            this.php_js.resourceData[this.php_js.resourceIdCounter] = this.file_get_contents(filename);
            this.php_js.resourceDataPointer[this.php_js.resourceIdCounter] = 0;
        
            resource = new PHPJS_Resource('stream', this.php_js.resourceIdCounter, 'popen');
            resource.mode = mode; // Add file-specific attributes
        
            return resource; // may be 'file' instead of 'stream' type on some systems
        }
        ,
        pos: function (arr) {
            // !No description available for pos. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pos
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // -    depends on: current
            // *     example 1: $P.transport = ['foot', 'bike', 'car', 'plane'];
            // *     example 1: $P.pos(transport);
            // *     returns 1: 'foot'
            return this.current(arr);
        }
        ,
        pow: function (base, exp) {
            // Returns base raised to the power of exponent. Returns integer result when possible  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/pow
            // +   original by: Onno Marsman
            // *     example 1: $P.pow(8723321.4, 7);
            // *     returns 1: 3.843909168077899e+48
            return Math.pow(base, exp);
        }
        ,
        preg_grep: function (pattern, input, flags) {
            // Searches array and returns entries which match regex  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/preg_grep
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: If pass pattern as string, must escape backslashes, even for single quotes
            // %          note 2: The regular expression itself must be expressed JavaScript style
            // %          note 3: It is not recommended to submit the pattern as a string, as we may implement
            // %          note 3:   parsing of PHP-style expressions (flags, etc.) in the future
            // *     example 1: $P.var arr = [1, 4, 4.5, 3, 'a', 4.4];
            // *     example 1: $P.preg_grep("/^(\\d+)?\\.\\d+$/", arr);
            // *     returns 1: {2: 4.5, 5: 4.4}
            var p = '',
                retObj = {};
            var invert = (flags === 1 || flags === 'PREG_GREP_INVERT'); // Todo: put flags as number and do bitwise checks (at least if other flags allowable); see pathinfo()
        
            if (typeof pattern === 'string') {
                pattern = eval(pattern);
            }
        
            if (invert) {
                for (p in input) {
                    if (input[p].search(pattern) === -1) {
                        retObj[p] = input[p];
                    }
                }
            } else {
                for (p in input) {
                    if (input[p].search(pattern) !== -1) {
                        retObj[p] = input[p];
                    }
                }
            }
        
            return retObj;
        }
        ,
        preg_quote: function (str, delimiter) {
            // Quote regular expression characters plus an optional character  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/preg_quote
            // +   original by: booeyOH
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.preg_quote("$40");
            // *     returns 1: '\$40'
            // *     example 2: $P.preg_quote("*RRRING* Hello?");
            // *     returns 2: '\*RRRING\* Hello\?'
            // *     example 3: $P.preg_quote("\\.+*?[^]$(){}=!<>|:");
            // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
            return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
        }
        ,
        print_r: function (array, return_val) {
            // Prints out or returns information about the specified variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/print_r
            // +   original by: Michael White (http://getsprink.com)
            // +   improved by: Ben Bryan
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: echo
            // *     example 1: $P.print_r(1, true);
            // *     returns 1: 1
            var output = '',
                pad_char = ' ',
                pad_val = 4,
                d = this.window.document,
                getFuncName = function (fn) {
                    var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                    if (!name) {
                        return '(Anonymous)';
                    }
                    return name[1];
                },
                repeat_char = function (len, pad_char) {
                    var str = '';
                    for (var i = 0; i < len; i++) {
                        str += pad_char;
                    }
                    return str;
                },
                formatArray = function (obj, cur_depth, pad_val, pad_char) {
                    if (cur_depth > 0) {
                        cur_depth++;
                    }
        
                    var base_pad = repeat_char(pad_val * cur_depth, pad_char);
                    var thick_pad = repeat_char(pad_val * (cur_depth + 1), pad_char);
                    var str = '';
        
                    if (typeof obj === 'object' && obj !== null && obj.constructor && getFuncName(obj.constructor) !== 'PHPJS_Resource') {
                        str += 'Array\n' + base_pad + '(\n';
                        for (var key in obj) {
                            if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
                                str += thick_pad + '[' + key + '] => ' + formatArray(obj[key], cur_depth + 1, pad_val, pad_char);
                            }
                            else {
                                str += thick_pad + '[' + key + '] => ' + obj[key] + '\n';
                            }
                        }
                        str += base_pad + ')\n';
                    }
                    else if (obj === null || obj === undefined) {
                        str = '';
                    }
                    else { // for our "resource" class
                        str = obj.toString();
                    }
        
                    return str;
                };
        
            output = formatArray(array, 0, pad_val, pad_char);
        
            if (return_val !== true) {
                if (d.body) {
                    this.echo(output);
                }
                else {
                    try {
                        d = XULDocument; // We're in XUL, so appending as plain text won't work; trigger an error out of XUL
                        this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">' + output + '</pre>');
                    } catch (e) {
                        this.echo(output); // Outputting as plain text may work in some plain XML
                    }
                }
                return true;
            }
            return output;
        }
        ,
        printf: function () {
            // Output a formatted string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/printf
            // +   original by: Ash Searle (http://hexmen.com/blog/)
            // +   improved by: Michael White (http://getsprink.com)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: sprintf
            // *     example 1: $P.printf("%01.2f", 123.1);
            // *     returns 1: 6
            var body, elmt, d = this.window.document;
            var ret = '';
        
            var HTMLNS = 'http://www.w3.org/1999/xhtml';
            body = d.getElementsByTagNameNS ? (d.getElementsByTagNameNS(HTMLNS, 'body')[0] ? d.getElementsByTagNameNS(HTMLNS, 'body')[0] : d.documentElement.lastChild) : d.getElementsByTagName('body')[0];
        
            if (!body) {
                return false;
            }
        
            ret = this.sprintf.apply(this, arguments);
        
            elmt = d.createTextNode(ret);
            body.appendChild(elmt);
        
            return ret.length;
        }
        ,
        property_exists: function (cls, prop) {
            // Checks if the object or class has a property  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/property_exists
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.function class_a () {this.prop1 = 'one'};
            // *     example 1: $P.var instance_a = new class_a();
            // *     example 1: $P.property_exists(instance_a, 'prop1');
            // *     returns 1: true
            // *     example 2: $P.function class_a () {this.prop1 = 'one'};
            // *     example 2: $P.var instance_a = new class_a();
            // *     example 2: $P.property_exists(instance_a, 'prop2');
            // *     returns 2: false
            cls = (typeof cls === 'string') ? this.window[cls] : cls;
        
            if (typeof cls === 'function' && cls.toSource && cls.toSource().match(new RegExp('this\\.' + prop + '\\s'))) {
                // Hackish and non-standard but can probably detect if setting
                // the property (we don't want to test by instantiating as that
                // may have side-effects)
                return true;
            }
        
            return (cls[prop] !== undefined && typeof cls[prop] !== 'function') || (cls.prototype !== undefined && cls.prototype[prop] !== undefined && typeof cls.prototype[prop] !== 'function') || (cls.constructor && cls.constructor[prop] !== undefined && typeof cls.constructor[prop] !== 'function');
        }
        ,
        putenv: function (setting) {
            // Set the value of an environment variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/putenv
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: We are not using $_ENV as in PHP, you could define
            // %        note 1: "$_ENV = this.php_js.ENV;" and get/set accordingly
            // %        note 2: Uses global: php_js to store environment info
            // *     example 1: $P.putenv('LC_ALL=en-US');
            // *     results 1: true
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ENV = this.php_js.ENV || {};
            // END REDUNDANT
            var pos = setting.indexOf('=');
            this.php_js.ENV[setting.slice(0, pos)] = setting.slice(pos + 1);
            return true;
        }
        ,
        quoted_printable_decode: function (str) {
            // Convert a quoted-printable string to an 8 bit string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/quoted_printable_decode
            // +   original by: Ole Vrijenhoek
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   reimplemented by: Theriault
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Theriault
            // *     example 1: $P.quoted_printable_decode('a=3Db=3Dc');
            // *     returns 1: 'a=b=c'
            // *     example 2: $P.quoted_printable_decode('abc  =20\r\n123  =20\r\n');
            // *     returns 2: 'abc   \r\n123   \r\n'
            // *     example 3: $P.quoted_printable_decode('012345678901234567890123456789012345678901234567890123456789012345678901234=\r\n56789');
            // *     returns 3: '01234567890123456789012345678901234567890123456789012345678901234567890123456789'
            // *    example 4: $P.quoted_printable_decode("Lorem ipsum dolor sit amet=23, consectetur adipisicing elit");
            // *    returns 4: Lorem ipsum dolor sit amet#, consectetur adipisicing elit
            // Removes softline breaks
            var RFC2045Decode1 = /=\r\n/gm,
                // Decodes all equal signs followed by two hex digits
                RFC2045Decode2IN = /=([0-9A-F]{2})/gim,
                // the RFC states against decoding lower case encodings, but following apparent PHP behavior
                // RFC2045Decode2IN = /=([0-9A-F]{2})/gm,
                RFC2045Decode2OUT = function (sMatch, sHex) {
                    return String.fromCharCode(parseInt(sHex, 16));
                };
            return str.replace(RFC2045Decode1, '').replace(RFC2045Decode2IN, RFC2045Decode2OUT);
        }
        ,
        quoted_printable_encode: function (str) {
            // +   original by: Theriault
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // *     example 1: $P.quoted_printable_encode('a=b=c');
            // *     returns 1: 'a=3Db=3Dc'
            // *     example 2: $P.quoted_printable_encode('abc   \r\n123   \r\n');
            // *     returns 2: 'abc  =20\r\n123  =20\r\n'
            // *     example 3: $P.quoted_printable_encode('0123456789012345678901234567890123456789012345678901234567890123456789012345');
            // *     returns 3: '012345678901234567890123456789012345678901234567890123456789012345678901234=\r\n5'
            // RFC 2045: 6.7.2: Octets with decimal values of 33 through 60 (bang to less-than) inclusive, and 62 through 126 (greater-than to tilde), inclusive, MAY be represented as the US-ASCII characters
            // PHP does not encode any of the above; as does this function.
            // RFC 2045: 6.7.3: Octets with values of 9 and 32 MAY be represented as US-ASCII TAB (HT) and SPACE characters, respectively, but MUST NOT be so represented at the end of an encoded line
            // PHP does not encode spaces (octet 32) except before a CRLF sequence as stated above. PHP always encodes tabs (octet 9). This function replicates PHP.
            // RFC 2045: 6.7.4: A line break in a text body, represented as a CRLF sequence in the text canonical form, must be represented by a (RFC 822) line break
            // PHP does not encode a CRLF sequence, as does this function.
            // RFC 2045: 6.7.5: The Quoted-Printable encoding REQUIRES that encoded lines be no more than 76 characters long. If longer lines are to be encoded with the Quoted-Printable encoding, "soft" line breaks must be used.
            // PHP breaks lines greater than 76 characters; as does this function.
            var hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
                RFC2045Encode1IN = / \r\n|\r\n|[^!-<>-~ ]/gm,
                RFC2045Encode1OUT = function (sMatch) {
                    // Encode space before CRLF sequence to prevent spaces from being stripped
                    // Keep hard line breaks intact; CRLF sequences
                    if (sMatch.length > 1) {
                        return sMatch.replace(' ', '=20');
                    }
                    // Encode matching character
                    var chr = sMatch.charCodeAt(0);
                    return '=' + hexChars[((chr >>> 4) & 15)] + hexChars[(chr & 15)];
                },
                // Split lines to 75 characters; the reason it's 75 and not 76 is because softline breaks are preceeded by an equal sign; which would be the 76th character.
                // However, if the last line/string was exactly 76 characters, then a softline would not be needed. PHP currently softbreaks anyway; so this function replicates PHP.
                RFC2045Encode2IN = /.{1,72}(?!\r\n)[^=]{0,3}/g,
                RFC2045Encode2OUT = function (sMatch) {
                    if (sMatch.substr(sMatch.length - 2) === '\r\n') {
                        return sMatch;
                    }
                    return sMatch + '=\r\n';
                };
            str = str.replace(RFC2045Encode1IN, RFC2045Encode1OUT).replace(RFC2045Encode2IN, RFC2045Encode2OUT);
            // Strip last softline break
            return str.substr(0, str.length - 3);
        }
        ,
        quotemeta: function (str) {
            // Quotes meta characters  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/quotemeta
            // +   original by: Paulo Freitas
            // *     example 1: $P.quotemeta(". + * ? ^ ( $ )");
            // *     returns 1: '\. \+ \* \? \^ \( \$ \)'
            return (str + '').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');
        }
        ,
        rad2deg: function (angle) {
            // Converts the radian number to the equivalent number in degrees  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rad2deg
            // +   original by: Enrique Gonzalez
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.rad2deg(3.141592653589793);
            // *     returns 1: 180
            return angle * 57.29577951308232; // angle / Math.PI * 180
        }
        ,
        rand: function (min, max) {
            // Returns a random number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rand
            // +   original by: Leslie Hoare
            // +   bugfixed by: Onno Marsman
            // %          note 1: See the commented out code below for a version which will work with our experimental (though probably unnecessary) srand() function)
            // *     example 1: $P.rand(1, 1);
            // *     returns 1: 1
            var argc = arguments.length;
            if (argc === 0) {
                min = 0;
                max = 2147483647;
            } else if (argc === 1) {
                throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        
        /*
            // See note above for an explanation of the following alternative code
            
            // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: srand
            // %          note 1: This is a very possibly imperfect adaptation from the PHP source code
            var rand_seed, ctx, PHP_RAND_MAX=2147483647; // 0x7fffffff
        
            if (!this.php_js || this.php_js.rand_seed === undefined) {
                this.srand();
            }
            rand_seed = this.php_js.rand_seed;
        
            var argc = arguments.length;
            if (argc === 1) {
                throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
            }
        
            var do_rand = function (ctx) {
                return ((ctx * 1103515245 + 12345) % (PHP_RAND_MAX + 1));
            };
        
            var php_rand = function (ctxArg) { // php_rand_r
                this.php_js.rand_seed = do_rand(ctxArg);
                return parseInt(this.php_js.rand_seed, 10);
            };
        
            var number = php_rand(rand_seed);
        
            if (argc === 2) {
                number = min + parseInt(parseFloat(parseFloat(max) - min + 1.0) * (number/(PHP_RAND_MAX + 1.0)), 10);
            }
            return number;
            */
        }
        ,
        range: function (low, high, step) {
            // Create an array containing the range of integers or characters from low to high (inclusive)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/range
            // +   original by: Waldo Malqui Silva
            // *     example 1: $P.range ( 0, 12 );
            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            // *     example 2: $P.range( 0, 100, 10 );
            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            // *     example 3: $P.range( 'a', 'i' );
            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            // *     example 4: $P.range( 'c', 'a' );
            // *     returns 4: ['c', 'b', 'a']
            var matrix = [];
            var inival, endval, plus;
            var walker = step || 1;
            var chars = false;
        
            if (!isNaN(low) && !isNaN(high)) {
                inival = low;
                endval = high;
            } else if (isNaN(low) && isNaN(high)) {
                chars = true;
                inival = low.charCodeAt(0);
                endval = high.charCodeAt(0);
            } else {
                inival = (isNaN(low) ? 0 : low);
                endval = (isNaN(high) ? 0 : high);
            }
        
            plus = ((inival > endval) ? false : true);
            if (plus) {
                while (inival <= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival += walker;
                }
            } else {
                while (inival >= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival -= walker;
                }
            }
        
            return matrix;
        }
        ,
        rawurldecode: function (str) {
            // Decodes URL-encodes string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rawurldecode
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +      input by: travc
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Ratheous
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
            // %        note 1: pages served as UTF-8
            // *     example 1: $P.rawurldecode('Kevin+van+Zonneveld%21');
            // *     returns 1: 'Kevin+van+Zonneveld!'
            // *     example 2: $P.rawurldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
            // *     returns 2: 'http://kevin.vanzonneveld.net/'
            // *     example 3: $P.rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
            // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
            // *     example 4: $P.rawurldecode('-22%97bc%2Fbc');
            // *     returns 4: '-22—bc/bc'
            return decodeURIComponent(str + '');
        }
        ,
        rawurlencode: function (str) {
            // URL-encodes string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rawurlencode
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +      input by: travc
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Michael Grier
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Ratheous
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Joris
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: This reflects PHP 5.3/6.0+ behavior
            // %        note 2: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
            // %        note 2: pages served as UTF-8
            // *     example 1: $P.rawurlencode('Kevin van Zonneveld!');
            // *     returns 1: 'Kevin%20van%20Zonneveld%21'
            // *     example 2: $P.rawurlencode('http://kevin.vanzonneveld.net/');
            // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
            // *     example 3: $P.rawurlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
            // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
            str = (str + '').toString();
        
            // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
            // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
            return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
            replace(/\)/g, '%29').replace(/\*/g, '%2A');
        }
        ,
        readfile: function (filename, use_include_path, context) {
            // Output a file or a URL  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/readfile
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: echo
            // *     example 1: $P.readfile('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '123'
            var read_data = this.file_get_contents(filename, use_include_path, context); // bitwise-or use_include_path?
            this.echo(read_data);
            return read_data;
        }
        ,
        realpath: function (path) {
            // Return the resolved path  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/realpath
            // +   original by: mk.keck
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // %        note 1: Returned path is an url like e.g. 'http://yourhost.tld/path/'
            // *     example 1: $P.realpath('../.././_supporters/pj_test_supportfile_1.htm');
            // *     returns 1: 'file:/home/kevin/workspace/_supporters/pj_test_supportfile_1.htm'
            var p = 0,
                arr = []; /* Save the root, if not given */
            var r = this.window.location.href; /* Avoid input failures */
            path = (path + '').replace('\\', '/'); /* Check if there's a port in path (like 'http://') */
            if (path.indexOf('://') !== -1) {
                p = 1;
            } /* Ok, there's not a port in path, so let's take the root */
            if (!p) {
                path = r.substring(0, r.lastIndexOf('/') + 1) + path;
            } /* Explode the given path into it's parts */
            arr = path.split('/'); /* The path is an array now */
            path = []; /* Foreach part make a check */
            for (var k in arr) { /* This is'nt really interesting */
                if (arr[k] == '.') {
                    continue;
                } /* This reduces the realpath */
                if (arr[k] == '..') {
        /* But only if there more than 3 parts in the path-array.
                     * The first three parts are for the uri */
                    if (path.length > 3) {
                        path.pop();
                    }
                } /* This adds parts to the realpath */
                else {
        /* But only if the part is not empty or the uri
                     * (the first three parts ar needed) was not
                     * saved */
                    if ((path.length < 2) || (arr[k] !== '')) {
                        path.push(arr[k]);
                    }
                }
            } /* Returns the absloute path as a string */
            return path.join('/');
        }
        ,
        register_shutdown_function: function (cb) {
            // Register a user-level function to be called on request termination  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/register_shutdown_function
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.register_shutdown_function(function(first, middle, last) {alert('Goodbye '+first+' '+middle+' '+last+'!');}, 'Kevin', 'van', 'Zonneveld');
            // *     returns 1: 'Goodbye Kevin van Zonneveld!'
            var args = [],
                _addEvent = function (el, type, handler, capturing) {
                    if (el.addEventListener) { /* W3C */
                        el.addEventListener(type, handler, !! capturing);
                    } else if (el.attachEvent) { /* IE */
                        el.attachEvent('on' + type, handler);
                    } else { /* OLDER BROWSERS (DOM0) */
                        el['on' + type] = handler;
                    }
                };
        
            args = Array.prototype.slice.call(arguments, 1);
            _addEvent(this.window, 'unload', function () {
                cb.apply(null, args);
            }, false);
        }
        ,
        reset: function (arr) {
            // Set array argument's internal pointer to the first element and return it  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/reset
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Legaev Andrey
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Uses global: php_js to store the array pointer
            // *     example 1: $P.reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
            // *     returns 1: 'Kevin' 
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.pointers = this.php_js.pointers || [];
            var indexOf = function (value) {
                for (var i = 0, length = this.length; i < length; i++) {
                    if (this[i] === value) {
                        return i;
                    }
                }
                return -1;
            };
            // END REDUNDANT
            var pointers = this.php_js.pointers;
            if (!pointers.indexOf) {
                pointers.indexOf = indexOf;
            }
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            }
            var arrpos = pointers.indexOf(arr);
            if (Object.prototype.toString.call(arr) !== '[object Array]') {
                for (var k in arr) {
                    if (pointers.indexOf(arr) === -1) {
                        pointers.push(arr, 0);
                    } else {
                        pointers[arrpos + 1] = 0;
                    }
                    return arr[k];
                }
                return false; // Empty
            }
            if (arr.length === 0) {
                return false;
            }
            pointers[arrpos + 1] = 0;
            return arr[pointers[arrpos + 1]];
        }
        ,
        restore_include_path: function () {
            // !No description available for restore_include_path. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/restore_include_path
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.restore_include_path();
            // *     returns 1: undefined
            if (this.php_js && this.php_js.ini && this.php_js.ini.include_path) {
                this.php_js.ini.include_path.local_value = this.php_js.ini.include_path.global_value;
            }
        }
        ,
        rewind: function (handle) {
            // Rewind the position of a file pointer  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rewind
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.var h = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
            // *     example 1: $P.fread(h, 100);
            // *     example 1: $P.rewind(h);
            // *     returns 1: true
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
            if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || !handle || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource') {
                return false;
            }
            this.php_js.resourceDataPointer[handle.id] = 0;
            return true;
        }
        ,
        round: function (value, precision, mode) {
            // Returns the number rounded to specified precision  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/round
            // +   original by: Philip Peterson
            // +    revised by: Onno Marsman
            // +      input by: Greenseed
            // +    revised by: T.Wild
            // +      input by: meo
            // +      input by: William
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Josep Sanz (http://www.ws3.es/)
            // +    revised by: Rafał Kukawski (http://blog.kukawski.pl/)
            // %        note 1: Great work. Ideas for improvement:
            // %        note 1:  - code more compliant with developer guidelines
            // %        note 1:  - for implementing PHP constant arguments look at
            // %        note 1:  the pathinfo() function, it offers the greatest
            // %        note 1:  flexibility & compatibility possible
            // *     example 1: $P.round(1241757, -3);
            // *     returns 1: 1242000
            // *     example 2: $P.round(3.6);
            // *     returns 2: 4
            // *     example 3: $P.round(2.835, 2);
            // *     returns 3: 2.84
            // *     example 4: $P.round(1.1749999999999, 2);
            // *     returns 4: 1.17
            // *     example 5: $P.round(58551.799999999996, 2);
            // *     returns 5: 58551.8
            var m, f, isHalf, sgn; // helper variables
            precision |= 0; // making sure precision is integer
            m = Math.pow(10, precision);
            value *= m;
            sgn = (value > 0) | -(value < 0); // sign of the number
            isHalf = value % 1 === 0.5 * sgn;
            f = Math.floor(value);
        
            if (isHalf) {
                switch (mode) {
                case 'PHP_ROUND_HALF_DOWN':
                    value = f + (sgn < 0); // rounds .5 toward zero
                    break;
                case 'PHP_ROUND_HALF_EVEN':
                    value = f + (f % 2 * sgn); // rouds .5 towards the next even integer
                    break;
                case 'PHP_ROUND_HALF_ODD':
                    value = f + !(f % 2); // rounds .5 towards the next odd integer
                    break;
                default:
                    value = f + (sgn > 0); // rounds .5 away from zero
                }
            }
        
            return (isHalf ? value : Math.round(value)) / m;
        }
        ,
        rsort: function (inputArr, sort_flags) {
            // Sort an array in reverse order  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rsort
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
            // %        note 1: integrated into all of these functions by adapting the code at
            // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
            // %        note 2: This function deviates from PHP in returning a copy of the array instead
            // %        note 2: of acting by reference and returning true; this was necessary because
            // %        note 2: IE does not allow deleting and re-adding of properties without caching
            // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 2: get the PHP behavior, but use this only if you are in an environment
            // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 2: property deletion is supported. Note that we intend to implement the PHP
            // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 2: is by reference in PHP anyways
            // %        note 3: Since JS objects' keys are always strings, and (the
            // %        note 3: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 3: if the content is a numeric string, we treat the
            // %        note 3: "original type" as numeric.
            // -    depends on: i18n_loc_get_default
            // *     example 1: $P.rsort(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: ['van', 'Zonneveld', 'Kevin']
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 2: $P.rsort(fruits);
            // *     results 2: fruits == {0: 'orange', 1: 'lemon', 2: 'banana', 3: 'apple'}
            // *     returns 2: true
            var valArr = [],
                k = '',
                i = 0,
                sorter = false,
                that = this,
                strictForIn = false,
                populateArr = [];
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(b, a);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return (b - a);
                };
                break;
            case 'SORT_REGULAR':
                // compare items normally (don't change types)
            default:
                sorter = function (b, a) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            for (k in inputArr) { // Get key and value arrays
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push(inputArr[k]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
        
            valArr.sort(sorter);
        
            for (i = 0; i < valArr.length; i++) { // Repopulate the old array
                populateArr[i] = valArr[i];
            }
            return strictForIn || populateArr;
        }
        ,
        rtrim: function (str, charlist) {
            // Removes trailing whitespace  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/rtrim
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   input by: rem
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.rtrim('    Kevin van Zonneveld    ');
            // *     returns 1: '    Kevin van Zonneveld'
            charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '').replace(re, '');
        }
        ,
        serialize: function (mixed_value) {
            // Returns a string representation of variable (which can later be unserialized)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/serialize
            // +   original by: Arpad Ray (mailto:arpad@php.net)
            // +   improved by: Dino
            // +   bugfixed by: Andrej Pavlovic
            // +   bugfixed by: Garagoth
            // +      input by: DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html)
            // +   bugfixed by: Russell Walker (http://www.nbill.co.uk/)
            // +   bugfixed by: Jamie Beck (http://www.terabit.ca/)
            // +      input by: Martin (http://www.erlenwiese.de/)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
            // +   improved by: Le Torbi (http://www.letorbi.de/)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
            // +   bugfixed by: Ben (http://benblume.co.uk/)
            // -    depends on: utf8_encode
            // %          note: We feel the main purpose of this function should be to ease the transport of data between php & js
            // %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
            // *     example 1: $P.serialize(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
            // *     example 2: $P.serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
            // *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
            var _utf8Size = function (str) {
                var size = 0,
                    i = 0,
                    l = str.length,
                    code = '';
                for (i = 0; i < l; i++) {
                    code = str.charCodeAt(i);
                    if (code < 0x0080) {
                        size += 1;
                    } else if (code < 0x0800) {
                        size += 2;
                    } else {
                        size += 3;
                    }
                }
                return size;
            };
            var _getType = function (inp) {
                var type = typeof inp,
                    match;
                var key;
        
                if (type === 'object' && !inp) {
                    return 'null';
                }
                if (type === "object") {
                    if (!inp.constructor) {
                        return 'object';
                    }
                    var cons = inp.constructor.toString();
                    match = cons.match(/(\w+)\(/);
                    if (match) {
                        cons = match[1].toLowerCase();
                    }
                    var types = ["boolean", "number", "string", "array"];
                    for (key in types) {
                        if (cons == types[key]) {
                            type = types[key];
                            break;
                        }
                    }
                }
                return type;
            };
            var type = _getType(mixed_value);
            var val, ktype = '';
        
            switch (type) {
            case "function":
                val = "";
                break;
            case "boolean":
                val = "b:" + (mixed_value ? "1" : "0");
                break;
            case "number":
                val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
                break;
            case "string":
                val = "s:" + _utf8Size(mixed_value) + ":\"" + mixed_value + "\"";
                break;
            case "array":
            case "object":
                val = "a";
        /*
                    if (type == "object") {
                        var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                        if (objname == undefined) {
                            return;
                        }
                        objname[1] = this.serialize(objname[1]);
                        val = "O" + objname[1].substring(1, objname[1].length - 1);
                    }
                    */
                var count = 0;
                var vals = "";
                var okey;
                var key;
                for (key in mixed_value) {
                    if (mixed_value.hasOwnProperty(key)) {
                        ktype = _getType(mixed_value[key]);
                        if (ktype === "function") {
                            continue;
                        }
        
                        okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                        vals += this.serialize(okey) + this.serialize(mixed_value[key]);
                        count++;
                    }
                }
                val += ":" + count + ":{" + vals + "}";
                break;
            case "undefined":
                // Fall-through
            default:
                // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
                val = "N";
                break;
            }
            if (type !== "object" && type !== "array") {
                val += ";";
            }
            return val;
        }
        ,
        setcookie: function (name, value, expires, path, domain, secure) {
            // Send a cookie  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/setcookie
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   bugfixed by: Andreas
            // +   bugfixed by: Onno Marsman
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: setrawcookie
            // *     example 1: $P.setcookie('author_name', 'Kevin van Zonneveld');
            // *     returns 1: true
            return this.setrawcookie(name, encodeURIComponent(value), expires, path, domain, secure);
        }
        ,
        setrawcookie: function (name, value, expires, path, domain, secure) {
            // Send a cookie with no url encoding of the value  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/setrawcookie
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   derived from: setcookie
            // +   input by: Michael
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.setcookie('author_name', 'Kevin van Zonneveld');
            // *     returns 1: true
            if (typeof expires === 'string' && (/^\d+$/).test(expires)) {
                expires = parseInt(expires, 10);
            }
        
            if (expires instanceof Date) {
                expires = expires.toGMTString();
            } else if (typeof(expires) === 'number') {
                expires = (new Date(expires * 1e3)).toGMTString();
            }
        
            var r = [name + '=' + value],
                s = {},
                i = '';
            s = {
                expires: expires,
                path: path,
                domain: domain
            };
            for (i in s) {
                if (s.hasOwnProperty(i)) { // Exclude items on Object.prototype
                    s[i] && r.push(i + '=' + s[i]);
                }
            }
        
            return secure && r.push('secure'), this.window.document.cookie = r.join(";"), true;
        }
        ,
        settype: function (vr, type) {
            // Set the type of the variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/settype
            // +   original by: Waldo Malqui Silva
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Credits to Crockford also
            // %        note 2: only works on global variables, and "vr" must be passed in as a string
            // *     example 1: $P.foo = '5bar';
            // *     example 1: $P.settype('foo', 'integer');
            // *     results 1: foo === 5
            // *     returns 1: true
            // *     example 2: $P.foo = true;
            // *     example 2: $P.settype('foo', 'string');
            // *     results 2: foo === '1'
            // *     returns 2: true
            var is_array = function (arr) {
                return typeof arr === 'object' && typeof arr.length === 'number' && !(arr.propertyIsEnumerable('length')) && typeof arr.splice === 'function';
            };
            var v, mtch, i, obj;
            v = this[vr] ? this[vr] : vr;
        
            try {
                switch (type) {
                case 'boolean':
                    if (is_array(v) && v.length === 0) {
                        this[vr] = false;
                    } else if (v === '0') {
                        this[vr] = false;
                    } else if (typeof v === 'object' && !is_array(v)) {
                        var lgth = false;
                        for (i in v) {
                            lgth = true;
                        }
                        this[vr] = lgth;
                    } else {
                        this[vr] = !! v;
                    }
                    break;
                case 'integer':
                    if (typeof v === 'number') {
                        this[vr] = parseInt(v, 10);
                    } else if (typeof v === 'string') {
                        mtch = v.match(/^([+\-]?)(\d+)/);
                        if (!mtch) {
                            this[vr] = 0;
                        } else {
                            this[vr] = parseInt(v, 10);
                        }
                    } else if (v === true) {
                        this[vr] = 1;
                    } else if (v === false || v === null) {
                        this[vr] = 0;
                    } else if (is_array(v) && v.length === 0) {
                        this[vr] = 0;
                    } else if (typeof v === 'object') {
                        this[vr] = 1;
                    }
        
                    break;
                case 'float':
                    if (typeof v === 'string') {
                        mtch = v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);
                        if (!mtch) {
                            this[vr] = 0;
                        } else {
                            this[vr] = parseFloat(v, 10);
                        }
                    } else if (v === true) {
                        this[vr] = 1;
                    } else if (v === false || v === null) {
                        this[vr] = 0;
                    } else if (is_array(v) && v.length === 0) {
                        this[vr] = 0;
                    } else if (typeof v === 'object') {
                        this[vr] = 1;
                    }
                    break;
                case 'string':
                    if (v === null || v === false) {
                        this[vr] = '';
                    } else if (is_array(v)) {
                        this[vr] = 'Array';
                    } else if (typeof v === 'object') {
                        this[vr] = 'Object';
                    } else if (v === true) {
                        this[vr] = '1';
                    } else {
                        this[vr] += '';
                    } // numbers (and functions?)
                    break;
                case 'array':
                    if (v === null) {
                        this[vr] = [];
                    } else if (typeof v !== 'object') {
                        this[vr] = [v];
                    }
                    break;
                case 'object':
                    if (v === null) {
                        this[vr] = {};
                    } else if (is_array(v)) {
                        for (i = 0, obj = {}; i < v.length; i++) {
                            obj[i] = v;
                        }
                        this[vr] = obj;
                    } else if (typeof v !== 'object') {
                        this[vr] = {
                            scalar: v
                        };
                    }
                    break;
                case 'null':
                    delete this[vr];
                    break;
                }
                return true;
            } catch (e) {
                return false;
            }
        }
        ,
        sha1: function (str) {
            // Calculate the sha1 hash of a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sha1
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // + namespaced by: Michael White (http://getsprink.com)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: utf8_encode
            // *     example 1: $P.sha1('Kevin van Zonneveld');
            // *     returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
            var rotate_left = function (n, s) {
                var t4 = (n << s) | (n >>> (32 - s));
                return t4;
            };
        
        /*var lsb_hex = function (val) { // Not in use; needed?
                var str="";
                var i;
                var vh;
                var vl;
        
                for ( i=0; i<=6; i+=2 ) {
                    vh = (val>>>(i*4+4))&0x0f;
                    vl = (val>>>(i*4))&0x0f;
                    str += vh.toString(16) + vl.toString(16);
                }
                return str;
            };*/
        
            var cvt_hex = function (val) {
                var str = "";
                var i;
                var v;
        
                for (i = 7; i >= 0; i--) {
                    v = (val >>> (i * 4)) & 0x0f;
                    str += v.toString(16);
                }
                return str;
            };
        
            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var temp;
        
            str = this.utf8_encode(str);
            var str_len = str.length;
        
            var word_array = [];
            for (i = 0; i < str_len - 3; i += 4) {
                j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
                word_array.push(j);
            }
        
            switch (str_len % 4) {
            case 0:
                i = 0x080000000;
                break;
            case 1:
                i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
                break;
            case 2:
                i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
                break;
            case 3:
                i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) << 8 | 0x80;
                break;
            }
        
            word_array.push(i);
        
            while ((word_array.length % 16) != 14) {
                word_array.push(0);
            }
        
            word_array.push(str_len >>> 29);
            word_array.push((str_len << 3) & 0x0ffffffff);
        
            for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
                for (i = 0; i < 16; i++) {
                    W[i] = word_array[blockstart + i];
                }
                for (i = 16; i <= 79; i++) {
                    W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
                }
        
        
                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;
        
                for (i = 0; i <= 19; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }
        
                for (i = 20; i <= 39; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }
        
                for (i = 40; i <= 59; i++) {
                    temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }
        
                for (i = 60; i <= 79; i++) {
                    temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotate_left(B, 30);
                    B = A;
                    A = temp;
                }
        
                H0 = (H0 + A) & 0x0ffffffff;
                H1 = (H1 + B) & 0x0ffffffff;
                H2 = (H2 + C) & 0x0ffffffff;
                H3 = (H3 + D) & 0x0ffffffff;
                H4 = (H4 + E) & 0x0ffffffff;
            }
        
            temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
            return temp.toLowerCase();
        }
        ,
        sha1_file: function (str_filename) {
            // Calculate the sha1 hash of given filename  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sha1_file
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: file_get_contents
            // -    depends on: sha1
            // *     example 1: $P.sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
            // *     returns 1: '40bd001563085fc35165329ea1ff5c5ecbdbbeef'
            var buf = this.file_get_contents(str_filename);
            return this.sha1(buf);
        }
        ,
        shuffle: function (inputArr) {
            // Randomly shuffle the contents of an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/shuffle
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: This function deviates from PHP in returning a copy of the array instead
            // %        note 1: of acting by reference and returning true; this was necessary because
            // %        note 1: IE does not allow deleting and re-adding of properties without caching
            // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 1: get the PHP behavior, but use this only if you are in an environment
            // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 1: property deletion is supported. Note that we intend to implement the PHP
            // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 1: is by reference in PHP anyways
            // *     example 1: $P.ini_set('phpjs.strictForIn', true);
            // *     example 1: $P.shuffle({5:'a', 2:'3', 3:'c', 4:5, 'q':5});
            // *     returns 1: {5:'a', 4:5, 'q':5, 3:'c', 2:'3'}
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.var data = {5:'a', 2:'3', 3:'c', 4:5, 'q':5};
            // *     example 2: $P.shuffle(data);
            // *     results 2: {5:'a', 'q':5, 3:'c', 2:'3', 4:5}
            // *     returns 2: true
            var valArr = [],
                k = '',
                i = 0,
                strictForIn = false,
                populateArr = [];
        
            for (k in inputArr) { // Get key and value arrays
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push(inputArr[k]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            valArr.sort(function () {
                return 0.5 - Math.random();
            });
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            for (i = 0; i < valArr.length; i++) { // Repopulate the old array
                populateArr[i] = valArr[i];
            }
        
            return strictForIn || populateArr;
        }
        ,
        similar_text: function (first, second) {
            // Calculates the similarity between two strings  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/similar_text
            // +   original by: Rafał Kukawski (http://blog.kukawski.pl)
            // +   bugfixed by: Chris McMacken
            // *     example 1: $P.similar_text('Hello World!', 'Hello phpjs!');
            // *     returns 1: 7
            // *     example 2: $P.similar_text('Hello World!', null);
            // *     returns 2: 0
            if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
                return 0;
            }
        
            first += '';
            second += '';
        
            var pos1 = 0,
                pos2 = 0,
                max = 0,
                firstLength = first.length,
                secondLength = second.length,
                p, q, l, sum;
        
            max = 0;
        
            for (p = 0; p < firstLength; p++) {
                for (q = 0; q < secondLength; q++) {
                    for (l = 0;
                    (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++);
                    if (l > max) {
                        max = l;
                        pos1 = p;
                        pos2 = q;
                    }
                }
            }
        
            sum = max;
        
            if (sum) {
                if (pos1 && pos2) {
                    sum += this.similar_text(first.substr(0, pos2), second.substr(0, pos2));
                }
        
                if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
                    sum += this.similar_text(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max, secondLength - pos2 - max));
                }
            }
        
            return sum;
        }
        ,
        sin: function (arg) {
            // Returns the sine of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sin
            // +   original by: Onno Marsman
            // *     example 1: $P.sin(8723321.4);
            // *     returns 1: -0.9834330348825909
            return Math.sin(arg);
        }
        ,
        sinh: function (arg) {
            // Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sinh
            // +   original by: Onno Marsman
            // *     example 1: $P.sinh(-0.9834330348825909);
            // *     returns 1: -1.1497971402636502
            return (Math.exp(arg) - Math.exp(-arg)) / 2;
        }
        ,
        sizeof: function (mixed_var, mode) {
            // !No description available for sizeof. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sizeof
            // +   original by: Philip Peterson
            // -    depends on: count
            // *     example 1: $P.sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE');
            // *     returns 1: 6
            // *     example 2: $P.sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
            // *     returns 2: 6
            return this.count(mixed_var, mode);
        }
        ,
        sort: function (inputArr, sort_flags) {
            // Sort an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sort
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
            // %        note 1: integrated into all of these functions by adapting the code at
            // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
            // %        note 2: This function deviates from PHP in returning a copy of the array instead
            // %        note 2: of acting by reference and returning true; this was necessary because
            // %        note 2: IE does not allow deleting and re-adding of properties without caching
            // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 2: get the PHP behavior, but use this only if you are in an environment
            // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 2: property deletion is supported. Note that we intend to implement the PHP
            // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 2: is by reference in PHP anyways
            // %        note 3: Since JS objects' keys are always strings, and (the
            // %        note 3: default) SORT_REGULAR flag distinguishes by key type,
            // %        note 3: if the content is a numeric string, we treat the
            // %        note 3: "original type" as numeric.
            // -    depends on: i18n_loc_get_default
            // *     example 1: $P.sort(['Kevin', 'van', 'Zonneveld']);
            // *     returns 1: ['Kevin', 'Zonneveld', 'van']
            // *     example 2: $P.ini_set('phpjs.strictForIn', true);
            // *     example 2: $P.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 2: $P.sort(fruits);
            // *     results 2: fruits == {0: 'apple', 1: 'banana', 2: 'lemon', 3: 'orange'}
            // *     returns 2: true
            var valArr = [],
                keyArr = [],
                k = '',
                i = 0,
                sorter = false,
                that = this,
                strictForIn = false,
                populateArr = [];
        
            switch (sort_flags) {
            case 'SORT_STRING':
                // compare items as strings
                sorter = function (a, b) {
                    return that.strnatcmp(a, b);
                };
                break;
            case 'SORT_LOCALE_STRING':
                // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
                var loc = this.i18n_loc_get_default();
                sorter = this.php_js.i18nLocales[loc].sorting;
                break;
            case 'SORT_NUMERIC':
                // compare items numerically
                sorter = function (a, b) {
                    return (a - b);
                };
                break;
            case 'SORT_REGULAR':
                // compare items normally (don't change types)
            default:
                sorter = function (a, b) {
                    var aFloat = parseFloat(a),
                        bFloat = parseFloat(b),
                        aNumeric = aFloat + '' === a,
                        bNumeric = bFloat + '' === b;
                    if (aNumeric && bNumeric) {
                        return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                    } else if (aNumeric && !bNumeric) {
                        return 1;
                    } else if (!aNumeric && bNumeric) {
                        return -1;
                    }
                    return a > b ? 1 : a < b ? -1 : 0;
                };
                break;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
            for (k in inputArr) { // Get key and value arrays
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push(inputArr[k]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
        
            valArr.sort(sorter);
        
            for (i = 0; i < valArr.length; i++) { // Repopulate the old array
                populateArr[i] = valArr[i];
            }
            return strictForIn || populateArr;
        }
        ,
        soundex: function (str) {
            // Calculate the soundex key of a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/soundex
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   original by: Arnout Kazemier (http://www.3rd-Eden.com)
            // +    revised by: Rafał Kukawski (http://blog.kukawski.pl)
            // *     example 1: $P.soundex('Kevin');
            // *     returns 1: 'K150'
            // *     example 2: $P.soundex('Ellery');
            // *     returns 2: 'E460'
            // *     example 3: $P.soundex('Euler');
            // *     returns 3: 'E460'
            str = (str + '').toUpperCase();
            if (!str) {
                return '';
            }
            var sdx = [0, 0, 0, 0],
                m = {
                    B: 1,
                    F: 1,
                    P: 1,
                    V: 1,
                    C: 2,
                    G: 2,
                    J: 2,
                    K: 2,
                    Q: 2,
                    S: 2,
                    X: 2,
                    Z: 2,
                    D: 3,
                    T: 3,
                    L: 4,
                    M: 5,
                    N: 5,
                    R: 6
                },
                i = 0,
                j, s = 0,
                c, p;
        
            while ((c = str.charAt(i++)) && s < 4) {
                if (j = m[c]) {
                    if (j !== p) {
                        sdx[s++] = p = j;
                    }
                } else {
                    s += i === 1;
                    p = 0;
                }
            }
        
            sdx[0] = str.charAt(0);
            return sdx.join('');
        }
        ,
        split: function (delimiter, string) {
            // Split string into array by regular expression  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/split
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: explode
            // *     example 1: $P.split(' ', 'Kevin van Zonneveld');
            // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
            return this.explode(delimiter, string);
        }
        ,
        sprintf: function () {
            // Return a formatted string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sprintf
            // +   original by: Ash Searle (http://hexmen.com/blog/)
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Paulo Freitas
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.sprintf("%01.2f", 123.1);
            // *     returns 1: 123.10
            // *     example 2: $P.sprintf("[%10s]", 'monkey');
            // *     returns 2: '[    monkey]'
            // *     example 3: $P.sprintf("[%'#10s]", 'monkey');
            // *     returns 3: '[####monkey]'
            var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
            var a = arguments,
                i = 0,
                format = a[i++];
        
            // pad()
            var pad = function (str, len, chr, leftJustify) {
                if (!chr) {
                    chr = ' ';
                }
                var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                return leftJustify ? str + padding : padding + str;
            };
        
            // justify()
            var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;
                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            };
        
            // formatBaseX()
            var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                // Note: casts negative numbers to positive ones
                var number = value >>> 0;
                prefix = prefix && number && {
                    '2': '0b',
                    '8': '0',
                    '16': '0x'
                }[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            };
        
            // formatString()
            var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision != null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };
        
            // doFormat()
            var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                var number;
                var prefix;
                var method;
                var textTransform;
                var value;
        
                if (substring == '%%') {
                    return '%';
                }
        
                // parse flags
                var leftJustify = false,
                    positivePrefix = '',
                    zeroPad = false,
                    prefixBaseX = false,
                    customPadChar = ' ';
                var flagsl = flags.length;
                for (var j = 0; flags && j < flagsl; j++) {
                    switch (flags.charAt(j)) {
                    case ' ':
                        positivePrefix = ' ';
                        break;
                    case '+':
                        positivePrefix = '+';
                        break;
                    case '-':
                        leftJustify = true;
                        break;
                    case "'":
                        customPadChar = flags.charAt(j + 1);
                        break;
                    case '0':
                        zeroPad = true;
                        break;
                    case '#':
                        prefixBaseX = true;
                        break;
                    }
                }
        
                // parameters may be null, undefined, empty-string or real valued
                // we want to ignore null, undefined and empty-string values
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth == '*') {
                    minWidth = +a[i++];
                } else if (minWidth.charAt(0) == '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }
        
                // Note: undocumented perl feature:
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }
        
                if (!isFinite(minWidth)) {
                    throw new Error('sprintf: (minimum-)width must be finite');
                }
        
                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
                } else if (precision == '*') {
                    precision = +a[i++];
                } else if (precision.charAt(0) == '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }
        
                // grab value using valueIndex if required?
                value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        
                switch (type) {
                case 's':
                    return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                case 'c':
                    return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                case 'b':
                    return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'o':
                    return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'x':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'X':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                case 'u':
                    return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'i':
                case 'd':
                    number = (+value) | 0;
                    prefix = number < 0 ? '-' : positivePrefix;
                    value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad);
                case 'e':
                case 'E':
                case 'f':
                case 'F':
                case 'g':
                case 'G':
                    number = +value;
                    prefix = number < 0 ? '-' : positivePrefix;
                    method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                default:
                    return substring;
                }
            };
        
            return format.replace(regex, doFormat);
        }
        ,
        sql_regcase: function (str) {
            // Make regular expression for case insensitive match  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sql_regcase
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: setlocale
            // *     example 1: $P.sql_regcase('Foo - bar.');
            // *     returns 1: '[Ff][Oo][Oo] - [Bb][Aa][Rr].'
            this.setlocale('LC_ALL', 0);
            var i = 0,
                upper = '',
                lower = '',
                pos = 0,
                retStr = '';
        
            upper = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;
            lower = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;
        
            for (i = 0; i < str.length; i++) {
                if (((pos = upper.indexOf(str.charAt(i))) !== -1) || ((pos = lower.indexOf(str.charAt(i))) !== -1)) {
                    retStr += '[' + upper.charAt(pos) + lower.charAt(pos) + ']';
                } else {
                    retStr += str.charAt(i);
                }
            }
            return retStr;
        }
        ,
        sqrt: function (arg) {
            // Returns the square root of the number  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/sqrt
            // +   original by: Onno Marsman
            // *     example 1: $P.sqrt(8723321.4);
            // *     returns 1: 2953.5269424875746
            return Math.sqrt(arg);
        }
        ,
        sscanf: function (str, format) {
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Since JS does not support scalar reference variables, any additional arguments to the function will
            // %        note 1: only be allowable here as strings referring to a global variable (which will then be set to the value
            // %        note 1: found in 'str' corresponding to the appropriate conversion specification in 'format'
            // %        note 2: I am unclear on how WS is to be handled here because documentation seems to me to contradict PHP behavior
            // *     example 1: $P.sscanf('SN/2350001', 'SN/%d');
            // *     returns 1: [2350001]
            // *     example 2: $P.var myVar; // Will be set by function
            // *     example 2: $P.sscanf('SN/2350001', 'SN/%d', 'myVar');
            // *     returns 2: 1
            // *     example 3: $P.sscanf("10--20", "%2$d--%1$d"); // Must escape '$' in PHP, but not JS
            // *     returns 3: [20, 10]
            // SETUP
            var retArr = [],
                num = 0,
                _NWS = /\S/,
                args = arguments,
                that = this,
                digit;
        
            var _setExtraConversionSpecs = function (offset) {
                // Since a mismatched character sets us off track from future legitimate finds, we just scan
                // to the end for any other conversion specifications (besides a percent literal), setting them to null
                // sscanf seems to disallow all conversion specification components (of sprintf) except for type specifiers
                //var matches = format.match(/%[+-]?([ 0]|'.)?-?\d*(\.\d+)?[bcdeufFosxX]/g); // Do not allow % in last char. class
                var matches = format.slice(offset).match(/%[cdeEufgosxX]/g); // Do not allow % in last char. class;
                // b, F,G give errors in PHP, but 'g', though also disallowed, doesn't
                if (matches) {
                    var lgth = matches.length;
                    while (lgth--) {
                        retArr.push(null);
                    }
                }
                return _finish();
            };
        
            var _finish = function () {
                if (args.length === 2) {
                    return retArr;
                }
                for (var i = 0; i < retArr.length; ++i) {
                    that.window[args[i + 2]] = retArr[i];
                }
                return i;
            };
        
            var _addNext = function (j, regex, cb) {
                if (assign) {
                    var remaining = str.slice(j);
                    var check = width ? remaining.substr(0, width) : remaining;
                    var match = regex.exec(check);
                    var testNull = retArr[digit !== undefined ? digit : retArr.length] = match ? (cb ? cb.apply(null, match) : match[0]) : null;
                    if (testNull === null) {
                        throw 'No match in string';
                    }
                    return j + match[0].length;
                }
                return j;
            };
        
            if (arguments.length < 2) {
                throw 'Not enough arguments passed to sscanf';
            }
        
            // PROCESS
            for (var i = 0, j = 0; i < format.length; i++) {
        
                var width = 0,
                    assign = true;
        
                if (format.charAt(i) === '%') {
                    if (format.charAt(i + 1) === '%') {
                        if (str.charAt(j) === '%') { // a matched percent literal
                            ++i, ++j; // skip beyond duplicated percent
                            continue;
                        }
                        // Format indicated a percent literal, but not actually present
                        return _setExtraConversionSpecs(i + 2);
                    }
        
                    // CHARACTER FOLLOWING PERCENT IS NOT A PERCENT
        
                    var prePattern = new RegExp('^(?:(\\d+)\\$)?(\\*)?(\\d*)([hlL]?)', 'g'); // We need 'g' set to get lastIndex
        
                    var preConvs = prePattern.exec(format.slice(i + 1));
        
                    var tmpDigit = digit;
                    if (tmpDigit && preConvs[1] === undefined) {
                        throw 'All groups in sscanf() must be expressed as numeric if any have already been used';
                    }
                    digit = preConvs[1] ? parseInt(preConvs[1], 10) - 1 : undefined;
        
                    assign = !preConvs[2];
                    width = parseInt(preConvs[3], 10);
                    var sizeCode = preConvs[4];
                    i += prePattern.lastIndex;
        
                    // Fix: Does PHP do anything with these? Seems not to matter
                    if (sizeCode) { // This would need to be processed later
                        switch (sizeCode) {
                        case 'h':
                            // Treats subsequent as short int (for d,i,n) or unsigned short int (for o,u,x)
                        case 'l':
                            // Treats subsequent as long int (for d,i,n), or unsigned long int (for o,u,x);
                            //    or as double (for e,f,g) instead of float or wchar_t instead of char
                        case 'L':
                            // Treats subsequent as long double (for e,f,g)
                            break;
                        default:
                            throw 'Unexpected size specifier in sscanf()!';
                            break;
                        }
                    }
                    // PROCESS CHARACTER
                    try {
                        switch (format.charAt(i + 1)) {
                            // For detailed explanations, see http://web.archive.org/web/20031128125047/http://www.uwm.edu/cgi-bin/IMT/wwwman?topic=scanf%283%29&msection=
                            // Also http://www.mathworks.com/access/helpdesk/help/techdoc/ref/sscanf.html
                            // p, S, C arguments in C function not available
                            // DOCUMENTED UNDER SSCANF
                        case 'F':
                            // Not supported in PHP sscanf; the argument is treated as a float, and
                            //  presented as a floating-point number (non-locale aware)
                            // sscanf doesn't support locales, so no need for two (see %f)
                            break;
                        case 'g':
                            // Not supported in PHP sscanf; shorter of %e and %f
                            // Irrelevant to input conversion
                            break;
                        case 'G':
                            // Not supported in PHP sscanf; shorter of %E and %f
                            // Irrelevant to input conversion
                            break;
                        case 'b':
                            // Not supported in PHP sscanf; the argument is treated as an integer, and presented as a binary number
                            // Not supported - couldn't distinguish from other integers
                            break;
                        case 'i':
                            // Integer with base detection (Equivalent of 'd', but base 0 instead of 10)
                            j = _addNext(j, /([+-])?(?:(?:0x([\da-fA-F]+))|(?:0([0-7]+))|(\d+))/, function (num, sign, hex, oct, dec) {
                                return hex ? parseInt(num, 16) : oct ? parseInt(num, 8) : parseInt(num, 10);
                            });
                            break;
                        case 'n':
                            // Number of characters processed so far
                            retArr[digit !== undefined ? digit : retArr.length - 1] = j;
                            break;
                            // DOCUMENTED UNDER SPRINTF
                        case 'c':
                            // Get character; suppresses skipping over whitespace! (but shouldn't be whitespace in format anyways, so no difference here)
                            // Non-greedy match
                            j = _addNext(j, new RegExp('.{1,' + (width || 1) + '}'));
                            break;
                        case 'D':
                            // sscanf documented decimal number; equivalent of 'd';
                        case 'd':
                            // Optionally signed decimal integer
                            j = _addNext(j, /([+-])?(?:0*)(\d+)/, function (num, sign, dec) {
                                // Ignores initial zeroes, unlike %i and parseInt()
                                var decInt = parseInt((sign || '') + dec, 10);
                                if (decInt < 0) { // PHP also won't allow less than -2147483648
                                    return decInt < -2147483648 ? -2147483648 : decInt; // integer overflow with negative
                                } else { // PHP also won't allow greater than -2147483647
                                    return decInt < 2147483647 ? decInt : 2147483647;
                                }
                            });
                            break;
                        case 'f':
                            // Although sscanf doesn't support locales, this is used instead of '%F'; seems to be same as %e
                        case 'E':
                            // These don't discriminate here as both allow exponential float of either case
                        case 'e':
                            j = _addNext(j, /([+-])?(?:0*)(\d*\.?\d*(?:[eE]?\d+)?)/, function (num, sign, dec) {
                                if (dec === '.') {
                                    return null;
                                }
                                return parseFloat((sign || '') + dec); // Ignores initial zeroes, unlike %i and parseFloat()
                            });
                            break;
                        case 'u':
                            // unsigned decimal integer
                            // We won't deal with integer overflows due to signs
                            j = _addNext(j, /([+-])?(?:0*)(\d+)/, function (num, sign, dec) {
                                // Ignores initial zeroes, unlike %i and parseInt()
                                var decInt = parseInt(dec, 10);
                                if (sign === '-') { // PHP also won't allow greater than 4294967295
                                    return 4294967296 - decInt; // integer overflow with negative
                                } else {
                                    return decInt < 4294967295 ? decInt : 4294967295;
                                }
                            });
                            break;
                        case 'o':
                            // Octal integer // Fix: add overflows as above?
                            j = _addNext(j, /([+-])?(?:0([0-7]+))/, function (num, sign, oct) {
                                return parseInt(num, 8);
                            });
                            break;
                        case 's':
                            // Greedy match
                            j = _addNext(j, /\S+/);
                            break;
                        case 'X':
                            // Same as 'x'?
                        case 'x':
                            // Fix: add overflows as above?
                            // Initial 0x not necessary here
                            j = _addNext(j, /([+-])?(?:(?:0x)?([\da-fA-F]+))/, function (num, sign, hex) {
                                return parseInt(num, 16);
                            });
                            break;
                        case '':
                            // If no character left in expression
                            throw 'Missing character after percent mark in sscanf() format argument';
                        default:
                            throw 'Unrecognized character after percent mark in sscanf() format argument';
                        }
                    } catch (e) {
                        if (e === 'No match in string') { // Allow us to exit
                            return _setExtraConversionSpecs(i + 2);
                        }
                    }++i; // Calculate skipping beyond initial percent too
                } else if (format.charAt(i) !== str.charAt(j)) {
                    // Fix: Double-check i whitespace ignored in string and/or formats
                    _NWS.lastIndex = 0;
                    if ((_NWS).test(str.charAt(j)) || str.charAt(j) === '') { // Whitespace doesn't need to be an exact match)
                        return _setExtraConversionSpecs(i + 1);
                    } else {
                        // Adjust strings when encounter non-matching whitespace, so they align in future checks above
                        str = str.slice(0, j) + str.slice(j + 1); // Ok to replace with j++;?
                        i--;
                    }
                } else {
                    j++;
                }
            }
        
            // POST-PROCESSING
            return _finish();
        }
        ,
        str_getcsv: function (input, delimiter, enclosure, escape) {
            // Parse a CSV string into an array  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_getcsv
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.str_getcsv('"abc", "def", "ghi"');
            // *     returns 1: ['abc', 'def', 'ghi']
            var output = [];
            var backwards = function (str) { // We need to go backwards to simulate negative look-behind (don't split on 
                //an escaped enclosure even if followed by the delimiter and another enclosure mark)
                return str.split('').reverse().join('');
            };
            var pq = function (str) { // preg_quote()
                return (str + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
            };
        
            delimiter = delimiter || ',';
            enclosure = enclosure || '"';
            escape = escape || '\\';
        
            input = input.replace(new RegExp('^\\s*' + pq(enclosure)), '').replace(new RegExp(pq(enclosure) + '\\s*$'), '');
        
            // PHP behavior may differ by including whitespace even outside of the enclosure
            input = backwards(input).split(new RegExp(pq(enclosure) + '\\s*' + pq(delimiter) + '\\s*' + pq(enclosure) + '(?!' + pq(escape) + ')', 'g')).reverse();
        
            for (var i = 0; i < input.length; i++) {
                output.push(backwards(input[i]).replace(new RegExp(pq(escape) + pq(enclosure), 'g'), enclosure));
            }
        
            return output;
        }
        ,
        str_ireplace: function (search, replace, subject) {
            // Replaces all occurrences of search in haystack with replace / case-insensitive  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_ireplace
            // +   original by: Martijn Wieringa
            // +      input by: penutbutterjelly
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    tweaked by: Jack
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Philipp Lenssen
            // *     example 1: $P.str_ireplace('l', 'l', 'HeLLo');
            // *     returns 1: 'Hello'
            // *     example 2: $P.str_ireplace('$', 'foo', '$bar');
            // *     returns 2: 'foobar'
            var i, k = '';
            var searchl = 0;
            var reg;
        
            var escapeRegex = function (s) {
                return s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g, '\\$1');
            };
        
            search += '';
            searchl = search.length;
            if (Object.prototype.toString.call(replace) !== '[object Array]') {
                replace = [replace];
                if (Object.prototype.toString.call(search) === '[object Array]') {
                    // If search is an array and replace is a string,
                    // then this replacement string is used for every value of search
                    while (searchl > replace.length) {
                        replace[replace.length] = replace[0];
                    }
                }
            }
        
            if (Object.prototype.toString.call(search) !== '[object Array]') {
                search = [search];
            }
            while (search.length > replace.length) {
                // If replace has fewer values than search,
                // then an empty string is used for the rest of replacement values
                replace[replace.length] = '';
            }
        
            if (Object.prototype.toString.call(subject) === '[object Array]') {
                // If subject is an array, then the search and replace is performed
                // with every entry of subject , and the return value is an array as well.
                for (k in subject) {
                    if (subject.hasOwnProperty(k)) {
                        subject[k] = str_ireplace(search, replace, subject[k]);
                    }
                }
                return subject;
            }
        
            searchl = search.length;
            for (i = 0; i < searchl; i++) {
                reg = new RegExp(escapeRegex(search[i]), 'gi');
                subject = subject.replace(reg, replace[i]);
            }
        
            return subject;
        }
        ,
        str_pad: function (input, pad_length, pad_string, pad_type) {
            // Returns input string padded on the left or right to specified length with pad_string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_pad
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // + namespaced by: Michael White (http://getsprink.com)
            // +      input by: Marco van Oort
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
            // *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
            // *     example 2: $P.str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
            // *     returns 2: '------Kevin van Zonneveld-----'
            var half = '',
                pad_to_go;
        
            var str_pad_repeater = function (s, len) {
                var collect = '',
                    i;
        
                while (collect.length < len) {
                    collect += s;
                }
                collect = collect.substr(0, len);
        
                return collect;
            };
        
            input += '';
            pad_string = pad_string !== undefined ? pad_string : ' ';
        
            if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') {
                pad_type = 'STR_PAD_RIGHT';
            }
            if ((pad_to_go = pad_length - input.length) > 0) {
                if (pad_type == 'STR_PAD_LEFT') {
                    input = str_pad_repeater(pad_string, pad_to_go) + input;
                } else if (pad_type == 'STR_PAD_RIGHT') {
                    input = input + str_pad_repeater(pad_string, pad_to_go);
                } else if (pad_type == 'STR_PAD_BOTH') {
                    half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
                    input = half + input + half;
                    input = input.substr(0, pad_length);
                }
            }
        
            return input;
        }
        ,
        str_repeat: function (input, multiplier) {
            // Returns the input string repeat mult times  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_repeat
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // *     example 1: $P.str_repeat('-=', 10);
            // *     returns 1: '-=-=-=-=-=-=-=-=-=-='
            return new Array(multiplier + 1).join(input);
        }
        ,
        str_replace: function (search, replace, subject, count) {
            // Replaces all occurrences of search in haystack with replace  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_replace
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Gabriel Paderni
            // +   improved by: Philip Peterson
            // +   improved by: Simon Willison (http://simonwillison.net)
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   bugfixed by: Anton Ongson
            // +      input by: Onno Marsman
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    tweaked by: Onno Marsman
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   input by: Oleg Eremeev
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Oleg Eremeev
            // %          note 1: The count parameter must be passed as a string in order
            // %          note 1:  to find a global variable in which the result will be given
            // *     example 1: $P.str_replace(' ', '.', 'Kevin van Zonneveld');
            // *     returns 1: 'Kevin.van.Zonneveld'
            // *     example 2: $P.str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
            // *     returns 2: 'hemmo, mars'
            var i = 0,
                j = 0,
                temp = '',
                repl = '',
                sl = 0,
                fl = 0,
                f = [].concat(search),
                r = [].concat(replace),
                s = subject,
                ra = Object.prototype.toString.call(r) === '[object Array]',
                sa = Object.prototype.toString.call(s) === '[object Array]';
            s = [].concat(s);
            if (count) {
                this.window[count] = 0;
            }
        
            for (i = 0, sl = s.length; i < sl; i++) {
                if (s[i] === '') {
                    continue;
                }
                for (j = 0, fl = f.length; j < fl; j++) {
                    temp = s[i] + '';
                    repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
                    s[i] = (temp).split(f[j]).join(repl);
                    if (count && s[i] !== temp) {
                        this.window[count] += (temp.length - s[i].length) / f[j].length;
                    }
                }
            }
            return sa ? s : s[0];
        }
        ,
        str_rot13: function (str) {
            // Perform the rot13 transform on a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_rot13
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // *     example 1: $P.str_rot13('Kevin van Zonneveld');
            // *     returns 1: 'Xriva ina Mbaariryq'
            // *     example 2: $P.str_rot13('Xriva ina Mbaariryq');
            // *     returns 2: 'Kevin van Zonneveld'
            // *     example 3: $P.str_rot13(33);
            // *     returns 3: '33'
            return (str + '').replace(/[a-z]/gi, function (s) {
                return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
            });
        }
        ,
        str_shuffle: function (str) {
            // Shuffles string. One permutation of all possible is created  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_shuffle
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.shuffled = str_shuffle("abcdef");
            // *     results 1: shuffled.length == 6
            if (str == undefined) {
                throw 'Wrong parameter count for str_shuffle()';
            }
        
            var getRandomInt = function (max) {
                return Math.floor(Math.random() * (max + 1));
            };
            var newStr = '',
                rand = 0;
        
            while (str.length) {
                rand = getRandomInt(str.length - 1);
                newStr += str.charAt(rand);
                str = str.substring(0, rand) + str.substr(rand + 1);
            }
        
            return newStr;
        }
        ,
        str_split: function (string, split_length) {
            // Convert a string to an array. If split_length is specified, break the string down into chunks each split_length characters long.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_split
            // +     original by: Martijn Wieringa
            // +     improved by: Brett Zamir (http://brett-zamir.me)
            // +     bugfixed by: Onno Marsman
            // +      revised by: Theriault
            // +        input by: Bjorn Roesbeke (http://www.bjornroesbeke.be/)
            // +      revised by: Rafał Kukawski (http://blog.kukawski.pl/)
            // *       example 1: $P.str_split('Hello Friend', 3);
            // *       returns 1: ['Hel', 'lo ', 'Fri', 'end']
            if (split_length === null) {
                split_length = 1;
            }
            if (string === null || split_length < 1) {
                return false;
            }
            string += '';
            var chunks = [],
                pos = 0,
                len = string.length;
            while (pos < len) {
                chunks.push(string.slice(pos, pos += split_length));
            }
        
            return chunks;
        }
        ,
        str_word_count: function (str, format, charlist) {
            // Counts the number of words inside a string. If format of 1 is specified,     then the function will return an array containing all the words     found inside the string. If format of 2 is specified, then the function     will return an associated array where the position of the word is the key     and the word itself is the value.      For the purpose of this function, 'word' is defined as a locale dependent     string containing alphabetic characters, which also may contain, but not start     with "'" and "-" characters.  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/str_word_count
            // +   original by: Ole Vrijenhoek
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Bug?
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -   depends on: ctype_alpha
            // *     example 1: $P.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1);
            // *     returns 1: ['Hello', 'fri', 'nd', "you're", 'looking', 'good', 'today']
            // *     example 2: $P.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 2);
            // *     returns 2: {0: 'Hello', 6: 'fri', 10: 'nd', 14: "you're", 29: 'looking', 46: 'good', 51: 'today'}
            // *     example 3: $P.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1, '\u00e0\u00e1\u00e3\u00e73');
            // *     returns 3: ['Hello', 'fri3nd', 'youre', 'looking', 'good', 'today']
            var len = str.length,
                cl = charlist && charlist.length,
                chr = '',
                tmpStr = '',
                i = 0,
                c = '',
                wArr = [],
                wC = 0,
                assoc = {},
                aC = 0,
                reg = '',
                match = false;
        
            // BEGIN STATIC
            var _preg_quote = function (str) {
                return (str + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
            },
                _getWholeChar = function (str, i) { // Use for rare cases of non-BMP characters
                    var code = str.charCodeAt(i);
                    if (code < 0xD800 || code > 0xDFFF) {
                        return str.charAt(i);
                    }
                    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
                        if (str.length <= (i + 1)) {
                            throw 'High surrogate without following low surrogate';
                        }
                        var next = str.charCodeAt(i + 1);
                        if (0xDC00 > next || next > 0xDFFF) {
                            throw 'High surrogate without following low surrogate';
                        }
                        return str.charAt(i) + str.charAt(i + 1);
                    }
                    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
                    if (i === 0) {
                        throw 'Low surrogate without preceding high surrogate';
                    }
                    var prev = str.charCodeAt(i - 1);
                    if (0xD800 > prev || prev > 0xDBFF) { // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
                        throw 'Low surrogate without preceding high surrogate';
                    }
                    return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
                };
            // END STATIC
            if (cl) {
                reg = '^(' + _preg_quote(_getWholeChar(charlist, 0));
                for (i = 1; i < cl; i++) {
                    if ((chr = _getWholeChar(charlist, i)) === false) {
                        continue;
                    }
                    reg += '|' + _preg_quote(chr);
                }
                reg += ')$';
                reg = new RegExp(reg);
            }
        
            for (i = 0; i < len; i++) {
                if ((c = _getWholeChar(str, i)) === false) {
                    continue;
                }
                match = this.ctype_alpha(c) || (reg && c.search(reg) !== -1) || ((i !== 0 && i !== len - 1) && c === '-') || // No hyphen at beginning or end unless allowed in charlist (or locale)
                (i !== 0 && c === "'"); // No apostrophe at beginning unless allowed in charlist (or locale)
                if (match) {
                    if (tmpStr === '' && format === 2) {
                        aC = i;
                    }
                    tmpStr = tmpStr + c;
                }
                if (i === len - 1 || !match && tmpStr !== '') {
                    if (format !== 2) {
                        wArr[wArr.length] = tmpStr;
                    } else {
                        assoc[aC] = tmpStr;
                    }
                    tmpStr = '';
                    wC++;
                }
            }
        
            if (!format) {
                return wC;
            } else if (format === 1) {
                return wArr;
            } else if (format === 2) {
                return assoc;
            }
            throw 'You have supplied an incorrect format';
        }
        ,
        strcasecmp: function (f_string1, f_string2) {
            // Binary safe case-insensitive string comparison  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strcasecmp
            // +     original by: Martijn Wieringa
            // +     bugfixed by: Onno Marsman
            // *         example 1: $P.strcasecmp('Hello', 'hello');
            // *         returns 1: 0
            var string1 = (f_string1 + '').toLowerCase();
            var string2 = (f_string2 + '').toLowerCase();
        
            if (string1 > string2) {
                return 1;
            } else if (string1 == string2) {
                return 0;
            }
        
            return -1;
        }
        ,
        strchr: function (haystack, needle, bool) {
            // An alias for strstr  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strchr
            // +   original by: Philip Peterson
            // -    depends on: strstr
            // *     example 1: $P.strchr('Kevin van Zonneveld', 'van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.strchr('Kevin van Zonneveld', 'van', true);
            // *     returns 2: 'Kevin '
            return this.strstr(haystack, needle, bool);
        }
        ,
        strcmp: function (str1, str2) {
            // Binary safe string comparison  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strcmp
            // +   original by: Waldo Malqui Silva
            // +      input by: Steve Hilder
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: gorthaur
            // *     example 1: $P.strcmp( 'waldo', 'owald' );
            // *     returns 1: 1
            // *     example 2: $P.strcmp( 'owald', 'waldo' );
            // *     returns 2: -1
            return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
        }
        ,
        strcoll: function (str1, str2) {
            // Compares two strings using the current locale  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strcoll
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: setlocale
            // *     example 1: $P.strcoll('a', 'b');
            // *     returns 1: -1
            this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
            var cmp = this.php_js.locales[this.php_js.localeCategories.LC_COLLATE].LC_COLLATE;
            // return str1.localeCompare(str2); // We don't use this as it doesn't allow us to control it via setlocale()
            return cmp(str1, str2);
        }
        ,
        strcspn: function (str, mask, start, length) {
            // Finds length of initial segment consisting entirely of characters not found in mask. If start or/and length is provide works like strcspn(substr($s,$start,$len),$bad_chars)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strcspn
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strcspn('abcdefg123', '1234567890');
            // *     returns 1: 7
            // *     example 2: $P.strcspn('123abc', '1234567890');
            // *     returns 2: 3
            start = start ? start : 0;
            var count = (length && ((start + length) < str.length)) ? start + length : str.length;
            strct: for (var i = start, lgth = 0; i < count; i++) {
                for (var j = 0; j < mask.length; j++) {
                    if (str.charAt(i).indexOf(mask[j]) !== -1) {
                        continue strct;
                    }
                }++lgth;
            }
        
            return lgth;
        }
        ,
        strftime: function (fmt, timestamp) {
            // Format a local time/date according to locale settings  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strftime
            // +      original by: Blues (http://tech.bluesmoon.info/)
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Alex
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -       depends on: setlocale
            // %        note 1: Uses global: php_js to store locale info
            // *        example 1: $P.strftime("%A", 1062462400); // Return value will depend on date and locale
            // *        returns 1: 'Tuesday'
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
            // END REDUNDANT
            var phpjs = this.php_js;
        
            // BEGIN STATIC
            var _xPad = function (x, pad, r) {
                if (typeof r === 'undefined') {
                    r = 10;
                }
                for (; parseInt(x, 10) < r && r > 1; r /= 10) {
                    x = pad.toString() + x;
                }
                return x.toString();
            };
        
            var locale = phpjs.localeCategories.LC_TIME;
            var locales = phpjs.locales;
            var lc_time = locales[locale].LC_TIME;
        
            var _formats = {
                a: function (d) {
                    return lc_time.a[d.getDay()];
                },
                A: function (d) {
                    return lc_time.A[d.getDay()];
                },
                b: function (d) {
                    return lc_time.b[d.getMonth()];
                },
                B: function (d) {
                    return lc_time.B[d.getMonth()];
                },
                C: function (d) {
                    return _xPad(parseInt(d.getFullYear() / 100, 10), 0);
                },
                d: ['getDate', '0'],
                e: ['getDate', ' '],
                g: function (d) {
                    return _xPad(parseInt(this.G(d) / 100, 10), 0);
                },
                G: function (d) {
                    var y = d.getFullYear();
                    var V = parseInt(_formats.V(d), 10);
                    var W = parseInt(_formats.W(d), 10);
        
                    if (W > V) {
                        y++;
                    } else if (W === 0 && V >= 52) {
                        y--;
                    }
        
                    return y;
                },
                H: ['getHours', '0'],
                I: function (d) {
                    var I = d.getHours() % 12;
                    return _xPad(I === 0 ? 12 : I, 0);
                },
                j: function (d) {
                    var ms = d - new Date('' + d.getFullYear() + '/1/1 GMT');
                    ms += d.getTimezoneOffset() * 60000; // Line differs from Yahoo implementation which would be equivalent to replacing it here with:
                    // ms = new Date('' + d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' GMT') - ms;
                    var doy = parseInt(ms / 60000 / 60 / 24, 10) + 1;
                    return _xPad(doy, 0, 100);
                },
                k: ['getHours', '0'],
                // not in PHP, but implemented here (as in Yahoo)
                l: function (d) {
                    var l = d.getHours() % 12;
                    return _xPad(l === 0 ? 12 : l, ' ');
                },
                m: function (d) {
                    return _xPad(d.getMonth() + 1, 0);
                },
                M: ['getMinutes', '0'],
                p: function (d) {
                    return lc_time.p[d.getHours() >= 12 ? 1 : 0];
                },
                P: function (d) {
                    return lc_time.P[d.getHours() >= 12 ? 1 : 0];
                },
                s: function (d) { // Yahoo uses return parseInt(d.getTime()/1000, 10);
                    return Date.parse(d) / 1000;
                },
                S: ['getSeconds', '0'],
                u: function (d) {
                    var dow = d.getDay();
                    return ((dow === 0) ? 7 : dow);
                },
                U: function (d) {
                    var doy = parseInt(_formats.j(d), 10);
                    var rdow = 6 - d.getDay();
                    var woy = parseInt((doy + rdow) / 7, 10);
                    return _xPad(woy, 0);
                },
                V: function (d) {
                    var woy = parseInt(_formats.W(d), 10);
                    var dow1_1 = (new Date('' + d.getFullYear() + '/1/1')).getDay();
                    // First week is 01 and not 00 as in the case of %U and %W,
                    // so we add 1 to the final result except if day 1 of the year
                    // is a Monday (then %W returns 01).
                    // We also need to subtract 1 if the day 1 of the year is
                    // Friday-Sunday, so the resulting equation becomes:
                    var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
                    if (idow === 53 && (new Date('' + d.getFullYear() + '/12/31')).getDay() < 4) {
                        idow = 1;
                    } else if (idow === 0) {
                        idow = _formats.V(new Date('' + (d.getFullYear() - 1) + '/12/31'));
                    }
                    return _xPad(idow, 0);
                },
                w: 'getDay',
                W: function (d) {
                    var doy = parseInt(_formats.j(d), 10);
                    var rdow = 7 - _formats.u(d);
                    var woy = parseInt((doy + rdow) / 7, 10);
                    return _xPad(woy, 0, 10);
                },
                y: function (d) {
                    return _xPad(d.getFullYear() % 100, 0);
                },
                Y: 'getFullYear',
                z: function (d) {
                    var o = d.getTimezoneOffset();
                    var H = _xPad(parseInt(Math.abs(o / 60), 10), 0);
                    var M = _xPad(o % 60, 0);
                    return (o > 0 ? '-' : '+') + H + M;
                },
                Z: function (d) {
                    return d.toString().replace(/^.*\(([^)]+)\)$/, '$1');
        /*
                    // Yahoo's: Better?
                    var tz = d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, '$2').replace(/[a-z ]/g, '');
                    if(tz.length > 4) {
                        tz = Dt.formats.z(d);
                    }
                    return tz;
                    */
                },
                '%': function (d) {
                    return '%';
                }
            };
            // END STATIC
        /* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
        Ec
        EC
        Ex
        EX
        Ey
        EY
        Od or Oe
        OH
        OI
        Om
        OM
        OS
        OU
        Ow
        OW
        Oy
        */
        
            var _date = ((typeof(timestamp) == 'undefined') ? new Date() : // Not provided
            (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
            new Date(timestamp * 1000) // PHP API expects UNIX timestamp (auto-convert to int)
            );
        
            var _aggregates = {
                c: 'locale',
                D: '%m/%d/%y',
                F: '%y-%m-%d',
                h: '%b',
                n: '\n',
                r: 'locale',
                R: '%H:%M',
                t: '\t',
                T: '%H:%M:%S',
                x: 'locale',
                X: 'locale'
            };
        
        
            // First replace aggregates (run in a loop because an agg may be made up of other aggs)
            while (fmt.match(/%[cDFhnrRtTxX]/)) {
                fmt = fmt.replace(/%([cDFhnrRtTxX])/g, function (m0, m1) {
                    var f = _aggregates[m1];
                    return (f === 'locale' ? lc_time[m1] : f);
                });
            }
        
            // Now replace formats - we need a closure so that the date object gets passed through
            var str = fmt.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, function (m0, m1) {
                var f = _formats[m1];
                if (typeof f === 'string') {
                    return _date[f]();
                } else if (typeof f === 'function') {
                    return f(_date);
                } else if (typeof f === 'object' && typeof(f[0]) === 'string') {
                    return _xPad(_date[f[0]](), f[1]);
                } else { // Shouldn't reach here
                    return m1;
                }
            });
            return str;
        }
        ,
        strip_tags: function (input, allowed) {
            // Strips HTML and PHP tags from a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strip_tags
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Luke Godfrey
            // +      input by: Pul
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +      input by: Alex
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Marc Palau
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Eric Nagel
            // +      input by: Bobby Drake
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Tomasz Wesolowski
            // +      input by: Evertjan Garretsen
            // +    revised by: Rafał Kukawski (http://blog.kukawski.pl/)
            // *     example 1: $P.strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
            // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
            // *     example 2: $P.strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
            // *     returns 2: '<p>Kevin van Zonneveld</p>'
            // *     example 3: $P.strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
            // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
            // *     example 4: $P.strip_tags('1 < 5 5 > 1');
            // *     returns 4: '1 < 5 5 > 1'
            // *     example 5: $P.strip_tags('1 <br/> 1');
            // *     returns 5: '1  1'
            // *     example 6: $P.strip_tags('1 <br/> 1', '<br>');
            // *     returns 6: '1  1'
            // *     example 7: $P.strip_tags('1 <br/> 1', '<br><br/>');
            // *     returns 7: '1 <br/> 1'
            allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
                return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
        }
        ,
        stripos: function (f_haystack, f_needle, f_offset) {
            // Finds position of first occurrence of a string within another, case insensitive  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/stripos
            // +     original by: Martijn Wieringa
            // +      revised by: Onno Marsman
            // *         example 1: $P.stripos('ABC', 'a');
            // *         returns 1: 0
            var haystack = (f_haystack + '').toLowerCase();
            var needle = (f_needle + '').toLowerCase();
            var index = 0;
        
            if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
                return index;
            }
            return false;
        }
        ,
        stripslashes: function (str) {
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +      fixed by: Mick@el
            // +   improved by: marrtins
            // +   bugfixed by: Onno Marsman
            // +   improved by: rezna
            // +   input by: Rick Waldron
            // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Brant Messenger (http://www.brantmessenger.com/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.stripslashes('Kevin\'s code');
            // *     returns 1: "Kevin's code"
            // *     example 2: $P.stripslashes('Kevin\\\'s code');
            // *     returns 2: "Kevin\'s code"
            return (str + '').replace(/\\(.?)/g, function (s, n1) {
                switch (n1) {
                case '\\':
                    return '\\';
                case '0':
                    return '\u0000';
                case '':
                    return '';
                default:
                    return n1;
                }
            });
        }
        ,
        stristr: function (haystack, needle, bool) {
            // Finds first occurrence of a string within another, case insensitive  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/stristr
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfxied by: Onno Marsman
            // *     example 1: $P.stristr('Kevin van Zonneveld', 'Van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.stristr('Kevin van Zonneveld', 'VAN', true);
            // *     returns 2: 'Kevin '
            var pos = 0;
        
            haystack += '';
            pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
            if (pos == -1) {
                return false;
            } else {
                if (bool) {
                    return haystack.substr(0, pos);
                } else {
                    return haystack.slice(pos);
                }
            }
        }
        ,
        strlen: function (string) {
            // Get string length  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strlen
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sakimori
            // +      input by: Kirk Strobeck
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +    revised by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: May look like overkill, but in order to be truly faithful to handling all Unicode
            // %        note 1: characters and to this function in PHP which does not count the number of bytes
            // %        note 1: but counts the number of characters, something like this is really necessary.
            // *     example 1: $P.strlen('Kevin van Zonneveld');
            // *     returns 1: 19
            // *     example 2: $P.strlen('A\ud87e\udc04Z');
            // *     returns 2: 3
            var str = string + '';
            var i = 0,
                chr = '',
                lgth = 0;
        
            if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini['unicode.semantics'].local_value.toLowerCase() !== 'on') {
                return string.length;
            }
        
            var getWholeChar = function (str, i) {
                var code = str.charCodeAt(i);
                var next = '',
                    prev = '';
                if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
                    if (str.length <= (i + 1)) {
                        throw 'High surrogate without following low surrogate';
                    }
                    next = str.charCodeAt(i + 1);
                    if (0xDC00 > next || next > 0xDFFF) {
                        throw 'High surrogate without following low surrogate';
                    }
                    return str.charAt(i) + str.charAt(i + 1);
                } else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
                    if (i === 0) {
                        throw 'Low surrogate without preceding high surrogate';
                    }
                    prev = str.charCodeAt(i - 1);
                    if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
                        throw 'Low surrogate without preceding high surrogate';
                    }
                    return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
                }
                return str.charAt(i);
            };
        
            for (i = 0, lgth = 0; i < str.length; i++) {
                if ((chr = getWholeChar(str, i)) === false) {
                    continue;
                } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
                lgth++;
            }
            return lgth;
        }
        ,
        strnatcasecmp: function (str1, str2) {
            // Returns the result of case-insensitive string comparison using 'natural' algorithm  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strnatcasecmp
            // +      original by: Martin Pool
            // + reimplemented by: Pierre-Luc Paour
            // + reimplemented by: Kristof Coomans (SCK-CEN (Belgian Nucleair Research Centre))
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +         input by: Devan Penner-Woelk
            // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *        example 1: $P.strnatcasecmp(10, 1);
            // *        returns 1: 1
            // *        example 1: $P.strnatcasecmp('1', '10');
            // *        returns 1: -1
            var a = (str1 + '').toLowerCase();
            var b = (str2 + '').toLowerCase();
        
            var isWhitespaceChar = function (a) {
                return a.charCodeAt(0) <= 32;
            };
        
            var isDigitChar = function (a) {
                var charCode = a.charCodeAt(0);
                return (charCode >= 48 && charCode <= 57);
            };
        
            var compareRight = function (a, b) {
                var bias = 0;
                var ia = 0;
                var ib = 0;
        
                var ca;
                var cb;
        
                // The longest run of digits wins.  That aside, the greatest
                // value wins, but we can't know that it will until we've scanned
                // both numbers to know that they have the same magnitude, so we
                // remember it in BIAS.
                for (var cnt = 0; true; ia++, ib++) {
                    ca = a.charAt(ia);
                    cb = b.charAt(ib);
        
                    if (!isDigitChar(ca) && !isDigitChar(cb)) {
                        return bias;
                    } else if (!isDigitChar(ca)) {
                        return -1;
                    } else if (!isDigitChar(cb)) {
                        return 1;
                    } else if (ca < cb) {
                        if (bias === 0) {
                            bias = -1;
                        }
                    } else if (ca > cb) {
                        if (bias === 0) {
                            bias = 1;
                        }
                    } else if (ca === '0' && cb === '0') {
                        return bias;
                    }
                }
            };
        
            var ia = 0,
                ib = 0;
            var nza = 0,
                nzb = 0;
            var ca, cb;
            var result;
        
            while (true) {
                // only count the number of zeroes leading the last number compared
                nza = nzb = 0;
        
                ca = a.charAt(ia);
                cb = b.charAt(ib);
        
                // skip over leading spaces or zeros
                while (isWhitespaceChar(ca) || ca === '0') {
                    if (ca === '0') {
                        nza++;
                    } else {
                        // only count consecutive zeroes
                        nza = 0;
                    }
        
                    ca = a.charAt(++ia);
                }
        
                while (isWhitespaceChar(cb) || cb === '0') {
                    if (cb === '0') {
                        nzb++;
                    } else {
                        // only count consecutive zeroes
                        nzb = 0;
                    }
        
                    cb = b.charAt(++ib);
                }
        
                // process run of digits
                if (isDigitChar(ca) && isDigitChar(cb)) {
                    if ((result = compareRight(a.substring(ia), b.substring(ib))) !== 0) {
                        return result;
                    }
                }
        
                if (ca === '0' && cb === '0') {
                    // The strings compare the same.  Perhaps the caller
                    // will want to call strcmp to break the tie.
                    return nza - nzb;
                }
        
                if (ca < cb) {
                    return -1;
                } else if (ca > cb) {
                    return +1;
                }
        
                ++ia;
                ++ib;
            }
        }
        ,
        strnatcmp: function (f_string1, f_string2, f_version) {
            // Returns the result of string comparison using 'natural' algorithm  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strnatcmp
            // +   original by: Martijn Wieringa
            // + namespaced by: Michael White (http://getsprink.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // -    depends on: strcmp
            // %          note: Added f_version argument against code guidelines, because it's so neat
            // *     example 1: $P.strnatcmp('Price 12.9', 'Price 12.15');
            // *     returns 1: 1
            // *     example 2: $P.strnatcmp('Price 12.09', 'Price 12.15');
            // *     returns 2: -1
            // *     example 3: $P.strnatcmp('Price 12.90', 'Price 12.15');
            // *     returns 3: 1
            // *     example 4: $P.strnatcmp('Version 12.9', 'Version 12.15', true);
            // *     returns 4: -6
            // *     example 5: $P.strnatcmp('Version 12.15', 'Version 12.9', true);
            // *     returns 5: 6
            var i = 0;
        
            if (f_version == undefined) {
                f_version = false;
            }
        
            var __strnatcmp_split = function (f_string) {
                var result = [];
                var buffer = '';
                var chr = '';
                var i = 0,
                    f_stringl = 0;
        
                var text = true;
        
                f_stringl = f_string.length;
                for (i = 0; i < f_stringl; i++) {
                    chr = f_string.substring(i, i + 1);
                    if (chr.match(/\d/)) {
                        if (text) {
                            if (buffer.length > 0) {
                                result[result.length] = buffer;
                                buffer = '';
                            }
        
                            text = false;
                        }
                        buffer += chr;
                    } else if ((text == false) && (chr == '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i + 2).match(/\d/))) {
                        result[result.length] = buffer;
                        buffer = '';
                    } else {
                        if (text == false) {
                            if (buffer.length > 0) {
                                result[result.length] = parseInt(buffer, 10);
                                buffer = '';
                            }
                            text = true;
                        }
                        buffer += chr;
                    }
                }
        
                if (buffer.length > 0) {
                    if (text) {
                        result[result.length] = buffer;
                    } else {
                        result[result.length] = parseInt(buffer, 10);
                    }
                }
        
                return result;
            };
        
            var array1 = __strnatcmp_split(f_string1 + '');
            var array2 = __strnatcmp_split(f_string2 + '');
        
            var len = array1.length;
            var text = true;
        
            var result = -1;
            var r = 0;
        
            if (len > array2.length) {
                len = array2.length;
                result = 1;
            }
        
            for (i = 0; i < len; i++) {
                if (isNaN(array1[i])) {
                    if (isNaN(array2[i])) {
                        text = true;
        
                        if ((r = this.strcmp(array1[i], array2[i])) != 0) {
                            return r;
                        }
                    } else if (text) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (isNaN(array2[i])) {
                    if (text) {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    if (text || f_version) {
                        if ((r = (array1[i] - array2[i])) != 0) {
                            return r;
                        }
                    } else {
                        if ((r = this.strcmp(array1[i].toString(), array2[i].toString())) != 0) {
                            return r;
                        }
                    }
        
                    text = false;
                }
            }
        
            return result;
        }
        ,
        strncasecmp: function (argStr1, argStr2, len) {
            // Binary safe string comparison  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strncasecmp
            // +   original by: Saulo Vallory
            // +      input by: Nate
            // +   bugfixed by: Onno Marsman
            // %          note: Returns < 0 if str1 is less than str2 ; > 0 if str1 is greater than str2 , and 0 if they are equal.
            // *     example 1: $P.strncasecmp('Price 12.9', 'Price 12.15', 2);
            // *     returns 1: 0
            // *     example 2: $P.strncasecmp('Price 12.09', 'Price 12.15', 10);
            // *     returns 2: -1
            // *     example 3: $P.strncasecmp('Price 12.90', 'Price 12.15', 30);
            // *     returns 3: 8
            // *     example 4: $P.strncasecmp('Version 12.9', 'Version 12.15', 20);
            // *     returns 4: 8
            // *     example 5: $P.strncasecmp('Version 12.15', 'Version 12.9', 20);
            // *     returns 5: -8
            var diff, i = 0;
            var str1 = (argStr1 + '').toLowerCase().substr(0, len);
            var str2 = (argStr2 + '').toLowerCase().substr(0, len);
        
            if (str1.length !== str2.length) {
                if (str1.length < str2.length) {
                    len = str1.length;
                    if (str2.substr(0, str1.length) == str1) {
                        return str1.length - str2.length; // return the difference of chars
                    }
                } else {
                    len = str2.length;
                    // str1 is longer than str2
                    if (str1.substr(0, str2.length) == str2) {
                        return str1.length - str2.length; // return the difference of chars
                    }
                }
            } else {
                // Avoids trying to get a char that does not exist
                len = str1.length;
            }
        
            for (diff = 0, i = 0; i < len; i++) {
                diff = str1.charCodeAt(i) - str2.charCodeAt(i);
                if (diff !== 0) {
                    return diff;
                }
            }
        
            return 0;
        }
        ,
        strncmp: function (str1, str2, lgth) {
            // Binary safe string comparison  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strncmp
            // +      original by: Waldo Malqui Silva
            // +         input by: Steve Hilder
            // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +       revised by: gorthaur
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strncmp('aaa', 'aab', 2);
            // *     returns 1: 0
            // *     example 2: $P.strncmp('aaa', 'aab', 3 );
            // *     returns 2: -1
            var s1 = (str1 + '').substr(0, lgth);
            var s2 = (str2 + '').substr(0, lgth);
        
            return ((s1 == s2) ? 0 : ((s1 > s2) ? 1 : -1));
        }
        ,
        strpbrk: function (haystack, char_list) {
            // Search a string for any of a set of characters  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strpbrk
            // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
            // +   bugfixed by: Onno Marsman
            // +    revised by: Christoph
            // +    improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strpbrk('This is a Simple text.', 'is');
            // *     returns 1: 'is is a Simple text.'
            for (var i = 0, len = haystack.length; i < len; ++i) {
                if (char_list.indexOf(haystack.charAt(i)) >= 0) {
                    return haystack.slice(i);
                }
            }
            return false;
        }
        ,
        strpos: function (haystack, needle, offset) {
            // Finds position of first occurrence of a string within another  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strpos
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman    
            // +   bugfixed by: Daniel Esteban
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strpos('Kevin van Zonneveld', 'e', 5);
            // *     returns 1: 14
            var i = (haystack + '').indexOf(needle, (offset || 0));
            return i === -1 ? false : i;
        }
        ,
        strptime: function (dateStr, format) {
            // Parse a time/date generated with strftime()  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strptime
            // +      original by: Brett Zamir (http://brett-zamir.me)
            // +      based on: strftime
            // -       depends on: setlocale
            // -       depends on: array_map
            // *        example 1: $P.strptime('20091112222135', '%Y%m%d%H%M%S'); // Return value will depend on date and locale
            // *        returns 1: {tm_sec: 35, tm_min: 21, tm_hour: 22, tm_mday: 12, tm_mon: 10, tm_year: 109, tm_wday: 4, tm_yday: 315, unparsed: ''}
            // *        example 1: $P.strptime('2009extra', '%Y');
            // *        returns 1: {tm_sec:0, tm_min:0, tm_hour:0, tm_mday:0, tm_mon:0, tm_year:109, tm_wday:3, tm_yday: -1, unparsed: 'extra'}
            // tm_isdst is in other docs; why not PHP?
        
            // Needs more thorough testing and examples
        
            var retObj = {
                tm_sec: 0,
                tm_min: 0,
                tm_hour: 0,
                tm_mday: 0,
                tm_mon: 0,
                tm_year: 0,
                tm_wday: 0,
                tm_yday: 0,
                unparsed: ''
            },
                that = this,
                amPmOffset = 0,
                prevHour = false,
                _date = function () {
                    var o = retObj;
                    // We set date to at least 1 to ensure year or month doesn't go backwards
                    return _reset(new Date(Date.UTC(o.tm_year + 1900, o.tm_mon, o.tm_mday || 1, o.tm_hour, o.tm_min, o.tm_sec)), o.tm_mday);
                },
                _reset = function (dateObj, realMday) {
                    // realMday is to allow for a value of 0 in return results (but without
                    // messing up the Date() object)
                    var o = retObj;
                    var d = dateObj;
                    o.tm_sec = d.getUTCSeconds();
                    o.tm_min = d.getUTCMinutes();
                    o.tm_hour = d.getUTCHours();
                    o.tm_mday = realMday === 0 ? realMday : d.getUTCDate();
                    o.tm_mon = d.getUTCMonth();
                    o.tm_year = d.getUTCFullYear() - 1900;
                    o.tm_wday = realMday === 0 ? (d.getUTCDay() > 0 ? d.getUTCDay() - 1 : 6) : d.getUTCDay();
                    var jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
                    o.tm_yday = Math.ceil((d - jan1) / (1000 * 60 * 60 * 24));
                };
        
            // BEGIN STATIC
            var _NWS = /\S/,
                _WS = /\s/;
        
            var _aggregates = {
                c: 'locale',
                D: '%m/%d/%y',
                F: '%y-%m-%d',
                r: 'locale',
                R: '%H:%M',
                T: '%H:%M:%S',
                x: 'locale',
                X: 'locale'
            };
        
        /* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
        Ec
        EC
        Ex
        EX
        Ey
        EY
        Od or Oe
        OH
        OI
        Om
        OM
        OS
        OU
        Ow
        OW
        Oy
        */
            var _preg_quote = function (str) {
                return (str + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
            };
            // END STATIC
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
            // END REDUNDANT
        
            var phpjs = this.php_js;
            var locale = phpjs.localeCategories.LC_TIME;
            var locales = phpjs.locales;
            var lc_time = locales[locale].LC_TIME;
        
            // First replace aggregates (run in a loop because an agg may be made up of other aggs)
            while (format.match(/%[cDFhnrRtTxX]/)) {
                format = format.replace(/%([cDFhnrRtTxX])/g, function (m0, m1) {
                    var f = _aggregates[m1];
                    return (f === 'locale' ? lc_time[m1] : f);
                });
            }
        
            var _addNext = function (j, regex, cb) {
                if (typeof regex === 'string') {
                    regex = new RegExp('^' + regex, 'i');
                }
                var check = dateStr.slice(j);
                var match = regex.exec(check);
                // Even if the callback returns null after assigning to the return object, the object won't be saved anyways
                var testNull = match ? cb.apply(null, match) : null;
                if (testNull === null) {
                    throw 'No match in string';
                }
                return j + match[0].length;
            };
        
            var _addLocalized = function (j, formatChar, category) {
                return _addNext(j, that.array_map(
                _preg_quote, lc_time[formatChar]).join('|'), // Could make each parenthesized instead and pass index to callback
        
                function (m) {
                    var match = lc_time[formatChar].search(new RegExp('^' + _preg_quote(m) + '$', 'i'));
                    if (match) {
                        retObj[category] = match[0];
                    }
                });
            };
        
            // BEGIN PROCESSING CHARACTERS
            for (var i = 0, j = 0; i < format.length; i++) {
                if (format.charAt(i) === '%') {
                    var literalPos = ['%', 'n', 't'].indexOf(format.charAt(i + 1));
                    if (literalPos !== -1) {
                        if (['%', '\n', '\t'].indexOf(dateStr.charAt(j)) === literalPos) { // a matched literal
                            ++i, ++j; // skip beyond
                            continue;
                        }
                        // Format indicated a percent literal, but not actually present
                        return false;
                    }
                    var formatChar = format.charAt(i + 1);
                    try {
                        switch (formatChar) {
                        case 'a':
                            // Fall-through // Sun-Sat
                        case 'A':
                            // Sunday-Saturday
                            j = _addLocalized(j, formatChar, 'tm_wday'); // Changes nothing else
                            break;
                        case 'h':
                            // Fall-through (alias of 'b');
                        case 'b':
                            // Jan-Dec
                            j = _addLocalized(j, 'b', 'tm_mon');
                            _date(); // Also changes wday, yday
                            break;
                        case 'B':
                            // January-December
                            j = _addLocalized(j, formatChar, 'tm_mon');
                            _date(); // Also changes wday, yday
                            break;
                        case 'C':
                            // 0+; century (19 for 20th)
                            j = _addNext(j, /^\d?\d/, // PHP docs say two-digit, but accepts one-digit (two-digit max)
        
                            function (d) {
                                var year = (parseInt(d, 10) - 19) * 100;
                                retObj.tm_year = year;
                                _date();
                                if (!retObj.tm_yday) {
                                    retObj.tm_yday = -1;
                                }
                                // Also changes wday; and sets yday to -1 (always?)
                            });
                            break;
                        case 'd':
                            // Fall-through  01-31 day
                        case 'e':
                            // 1-31 day
                            j = _addNext(j, formatChar === 'd' ? /^(0[1-9]|[1-2]\d|3[0-1])/ : /^([1-2]\d|3[0-1]|[1-9])/, function (d) {
                                var dayMonth = parseInt(d, 10);
                                retObj.tm_mday = dayMonth;
                                _date(); // Also changes w_day, y_day
                            });
                            break;
                        case 'g':
                            // No apparent effect; 2-digit year (see 'V')
                            break;
                        case 'G':
                            // No apparent effect; 4-digit year (see 'V')'
                            break;
                        case 'H':
                            // 00-23 hours
                            j = _addNext(j, /^([0-1]\d|2[0-3])/, function (d) {
                                var hour = parseInt(d, 10);
                                retObj.tm_hour = hour;
                                // Changes nothing else
                            });
                            break;
                        case 'l':
                            // Fall-through of lower-case 'L'; 1-12 hours
                        case 'I':
                            // 01-12 hours
                            j = _addNext(j, formatChar === 'l' ? /^([1-9]|1[0-2])/ : /^(0[1-9]|1[0-2])/, function (d) {
                                var hour = parseInt(d, 10) - 1 + amPmOffset;
                                retObj.tm_hour = hour;
                                prevHour = true; // Used for coordinating with am-pm
                                // Changes nothing else, but affected by prior 'p/P'
                            });
                            break;
                        case 'j':
                            // 001-366 day of year
                            j = _addNext(j, /^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/, function (d) {
                                var dayYear = parseInt(d, 10) - 1;
                                retObj.tm_yday = dayYear;
                                // Changes nothing else (oddly, since if based on a given year, could calculate other fields)
                            });
                            break;
                        case 'm':
                            // 01-12 month
                            j = _addNext(j, /^(0[1-9]|1[0-2])/, function (d) {
                                var month = parseInt(d, 10) - 1;
                                retObj.tm_mon = month;
                                _date(); // Also sets wday and yday
                            });
                            break;
                        case 'M':
                            // 00-59 minutes
                            j = _addNext(j, /^[0-5]\d/, function (d) {
                                var minute = parseInt(d, 10);
                                retObj.tm_min = minute;
                                // Changes nothing else
                            });
                            break;
                        case 'P':
                            // Seems not to work; AM-PM
                            return false; // Could make fall-through instead since supposed to be a synonym despite PHP docs
                        case 'p':
                            // am-pm
                            j = _addNext(j, /^(am|pm)/i, function (d) {
                                // No effect on 'H' since already 24 hours but
                                //   works before or after setting of l/I hour
                                amPmOffset = (/a/).test(d) ? 0 : 12;
                                if (prevHour) {
                                    retObj.tm_hour += amPmOffset;
                                }
                            });
                            break;
                        case 's':
                            // Unix timestamp (in seconds)
                            j = _addNext(j, /^\d+/, function (d) {
                                var timestamp = parseInt(d, 10);
                                var date = new Date(Date.UTC(timestamp * 1000));
                                _reset(date);
                                // Affects all fields, but can't be negative (and initial + not allowed)
                            });
                            break;
                        case 'S':
                            // 00-59 seconds
                            j = _addNext(j, /^[0-5]\d/, // strptime also accepts 60-61 for some reason
        
                            function (d) {
                                var second = parseInt(d, 10);
                                retObj.tm_sec = second;
                                // Changes nothing else
                            });
                            break;
                        case 'u':
                            // Fall-through; 1 (Monday)-7(Sunday)
                        case 'w':
                            // 0 (Sunday)-6(Saturday)
                            j = _addNext(j, /^\d/, function (d) {
                                retObj.tm_wday = d - (formatChar === 'u');
                                // Changes nothing else apparently
                            });
                            break;
                        case 'U':
                            // Fall-through (week of year, from 1st Sunday)
                        case 'V':
                            // Fall-through (ISO-8601:1988 week number; from first 4-weekday week, starting with Monday)
                        case 'W':
                            // Apparently ignored (week of year, from 1st Monday)
                            break;
                        case 'y':
                            // 69 (or higher) for 1969+, 68 (or lower) for 2068-
                            j = _addNext(j, /^\d?\d/, // PHP docs say two-digit, but accepts one-digit (two-digit max)
        
                            function (d) {
                                d = parseInt(d, 10);
                                var year = d >= 69 ? d : d + 100;
                                retObj.tm_year = year;
                                _date();
                                if (!retObj.tm_yday) {
                                    retObj.tm_yday = -1;
                                }
                                // Also changes wday; and sets yday to -1 (always?)
                            });
                            break;
                        case 'Y':
                            // 2010 (4-digit year)
                            j = _addNext(j, /^\d{1,4}/, // PHP docs say four-digit, but accepts one-digit (four-digit max)
        
                            function (d) {
                                var year = (parseInt(d, 10)) - 1900;
                                retObj.tm_year = year;
                                _date();
                                if (!retObj.tm_yday) {
                                    retObj.tm_yday = -1;
                                }
                                // Also changes wday; and sets yday to -1 (always?)
                            });
                            break;
                        case 'z':
                            // Timezone; on my system, strftime gives -0800, but strptime seems not to alter hour setting
                            break;
                        case 'Z':
                            // Timezone; on my system, strftime gives PST, but strptime treats text as unparsed
                            break;
                        default:
                            throw 'Unrecognized formatting character in strptime()';
                            break;
                        }
                    } catch (e) {
                        if (e === 'No match in string') { // Allow us to exit
                            return false; // There was supposed to be a matching format but there wasn't
                        }
                    }++i; // Calculate skipping beyond initial percent too
                } else if (format.charAt(i) !== dateStr.charAt(j)) {
                    // If extra whitespace at beginning or end of either, or between formats, no problem
                    // (just a problem when between % and format specifier)
        
                    // If the string has white-space, it is ok to ignore
                    if (dateStr.charAt(j).search(_WS) !== -1) {
                        j++;
                        i--; // Let the next iteration try again with the same format character
                    } else if (format.charAt(i).search(_NWS) !== -1) { // Any extra formatting characters besides white-space causes 
                        // problems (do check after WS though, as may just be WS in string before next character)
                        return false;
                    } else { // Extra WS in format
                        // Adjust strings when encounter non-matching whitespace, so they align in future checks above
                        // Will check on next iteration (against same (non-WS) string character)
                    }
                } else {
                    j++;
                }
            }
        
            // POST-PROCESSING
            retObj.unparsed = dateStr.slice(j); // Will also get extra whitespace; empty string if none
            return retObj;
        }
        ,
        strrchr: function (haystack, needle) {
            // Finds the last occurrence of a character in a string within another  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strrchr
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Jason Wong (http://carrot.org/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strrchr("Line 1\nLine 2\nLine 3", 10).substr(1)
            // *     returns 1: 'Line 3'
            var pos = 0;
        
            if (typeof needle !== 'string') {
                needle = String.fromCharCode(parseInt(needle, 10));
            }
            needle = needle.charAt(0);
            pos = haystack.lastIndexOf(needle);
            if (pos === -1) {
                return false;
            }
        
            return haystack.substr(pos);
        }
        ,
        strrev: function (string) {
            // Reverse a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strrev
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strrev('Kevin van Zonneveld');
            // *     returns 1: 'dlevennoZ nav niveK'
            // *     example 2: $P.strrev('a\u0301haB') === 'Baha\u0301'; // combining
            // *     returns 2: true
            // *     example 3: $P.strrev('A\uD87E\uDC04Z') === 'Z\uD87E\uDC04A'; // surrogates
            // *     returns 2: true
            string = string + '';
        
            // Performance will be enhanced with the next two lines of code commented
            //      out if you don't care about combining characters
            // Keep Unicode combining characters together with the character preceding
            //      them and which they are modifying (as in PHP 6)
            // See http://unicode.org/reports/tr44/#Property_Table (Me+Mn)
            // We also add the low surrogate range at the beginning here so it will be
            //      maintained with its preceding high surrogate
            var grapheme_extend = /(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;
            string = string.replace(grapheme_extend, '$2$1'); // Temporarily reverse
            return string.split('').reverse().join('');
        }
        ,
        strripos: function (haystack, needle, offset) {
            // Finds position of last occurrence of a string within another string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strripos
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   input by: saulius
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strripos('Kevin van Zonneveld', 'E');
            // *     returns 1: 16
            haystack = (haystack + '').toLowerCase();
            needle = (needle + '').toLowerCase();
        
            var i = -1;
            if (offset) {
                i = (haystack + '').slice(offset).lastIndexOf(needle); // strrpos' offset indicates starting point of range till end,
                // while lastIndexOf's optional 2nd argument indicates ending point of range from the beginning
                if (i !== -1) {
                    i += offset;
                }
            } else {
                i = (haystack + '').lastIndexOf(needle);
            }
            return i >= 0 ? i : false;
        }
        ,
        strrpos: function (haystack, needle, offset) {
            // Finds position of last occurrence of a string within another string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strrpos
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   input by: saulius
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strrpos('Kevin van Zonneveld', 'e');
            // *     returns 1: 16
            // *     example 2: $P.strrpos('somepage.com', '.', false);
            // *     returns 2: 8
            // *     example 3: $P.strrpos('baa', 'a', 3);
            // *     returns 3: false
            // *     example 4: $P.strrpos('baa', 'a', 2);
            // *     returns 4: 2
            var i = -1;
            if (offset) {
                i = (haystack + '').slice(offset).lastIndexOf(needle); // strrpos' offset indicates starting point of range till end,
                // while lastIndexOf's optional 2nd argument indicates ending point of range from the beginning
                if (i !== -1) {
                    i += offset;
                }
            } else {
                i = (haystack + '').lastIndexOf(needle);
            }
            return i >= 0 ? i : false;
        }
        ,
        strspn: function (str1, str2, start, lgth) {
            // Finds length of initial segment consisting entirely of characters found in mask. If start or/and length is provided works like strspn(substr($s,$start,$len),$good_chars)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strspn
            // +   original by: Valentina De Rosa
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.strspn('42 is the answer, what is the question ...', '1234567890');
            // *     returns 1: 2
            // *     example 2: $P.strspn('foo', 'o', 1, 2);
            // *     returns 2: 2
            var found;
            var stri;
            var strj;
            var j = 0;
            var i = 0;
        
            start = start ? (start < 0 ? (str1.length + start) : start) : 0;
            lgth = lgth ? ((lgth < 0) ? (str1.length + lgth - start) : lgth) : str1.length - start;
            str1 = str1.substr(start, lgth);
        
            for (i = 0; i < str1.length; i++) {
                found = 0;
                stri = str1.substring(i, i + 1);
                for (j = 0; j <= str2.length; j++) {
                    strj = str2.substring(j, j + 1);
                    if (stri == strj) {
                        found = 1;
                        break;
                    }
                }
                if (found != 1) {
                    return i;
                }
            }
        
            return i;
        }
        ,
        strstr: function (haystack, needle, bool) {
            // Finds first occurrence of a string within another  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strstr
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.strstr('Kevin van Zonneveld', 'van');
            // *     returns 1: 'van Zonneveld'
            // *     example 2: $P.strstr('Kevin van Zonneveld', 'van', true);
            // *     returns 2: 'Kevin '
            // *     example 3: $P.strstr('name@example.com', '@');
            // *     returns 3: '@example.com'
            // *     example 4: $P.strstr('name@example.com', '@', true);
            // *     returns 4: 'name'
            var pos = 0;
        
            haystack += '';
            pos = haystack.indexOf(needle);
            if (pos == -1) {
                return false;
            } else {
                if (bool) {
                    return haystack.substr(0, pos);
                } else {
                    return haystack.slice(pos);
                }
            }
        }
        ,
        strtok: function (str, tokens) {
            // Tokenize a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strtok
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Use tab and newline as tokenizing characters as well
            // *     example 1: $string = "\t\t\t\nThis is\tan example\nstring\n";
            // *     example 1: $tok = strtok($string, " \n\t");
            // *     example 1: $b = '';
            // *     example 1: $P.while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
            // *     example 1: $b
            // *     returns 1: "Word=This\nWord=is\nWord=an\nWord=example\nWord=string\n"
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            // END REDUNDANT
            if (tokens === undefined) {
                tokens = str;
                str = this.php_js.strtokleftOver;
            }
            if (str.length === 0) {
                return false;
            }
            if (tokens.indexOf(str.charAt(0)) !== -1) {
                return this.strtok(str.substr(1), tokens);
            }
            for (var i = 0; i < str.length; i++) {
                if (tokens.indexOf(str.charAt(i)) !== -1) {
                    break;
                }
            }
            this.php_js.strtokleftOver = str.substr(i + 1);
            return str.substring(0, i);
        }
        ,
        strtolower: function (str) {
            // Makes a string lowercase  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strtolower
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman
            // *     example 1: $P.strtolower('Kevin van Zonneveld');
            // *     returns 1: 'kevin van zonneveld'
            return (str + '').toLowerCase();
        }
        ,
        strtotime: function (str, now) {
            // Convert string representation of date and time to a timestamp  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strtotime
            // +   original by: Caio Ariede (http://caioariede.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: David
            // +   improved by: Caio Ariede (http://caioariede.com)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Wagner B. Soares
            // +   bugfixed by: Artur Tchernychev
            // %        note 1: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
            // *     example 1: $P.strtotime('+1 day', 1129633200);
            // *     returns 1: 1129719600
            // *     example 2: $P.strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
            // *     returns 2: 1130425202
            // *     example 3: $P.strtotime('last month', 1129633200);
            // *     returns 3: 1127041200
            // *     example 4: $P.strtotime('2009-05-04 08:30:00');
            // *     returns 4: 1241418600
            var i, match, s, strTmp = '',
                parse = '';
        
            strTmp = str;
            strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' '); // unecessary spaces
            strTmp = strTmp.replace(/[\t\r\n]/g, ''); // unecessary chars
            if (strTmp == 'now') {
                return (new Date()).getTime() / 1000; // Return seconds, not milli-seconds
            } else if (!isNaN(parse = Date.parse(strTmp))) {
                return (parse / 1000);
            } else if (now) {
                now = new Date(now * 1000); // Accept PHP-style seconds
            } else {
                now = new Date();
            }
        
            strTmp = strTmp.toLowerCase();
        
            var __is = {
                day: {
                    'sun': 0,
                    'mon': 1,
                    'tue': 2,
                    'wed': 3,
                    'thu': 4,
                    'fri': 5,
                    'sat': 6
                },
                mon: {
                    'jan': 0,
                    'feb': 1,
                    'mar': 2,
                    'apr': 3,
                    'may': 4,
                    'jun': 5,
                    'jul': 6,
                    'aug': 7,
                    'sep': 8,
                    'oct': 9,
                    'nov': 10,
                    'dec': 11
                }
            };
        
            var process = function (m) {
                var ago = (m[2] && m[2] == 'ago');
                var num = (num = m[0] == 'last' ? -1 : 1) * (ago ? -1 : 1);
        
                switch (m[0]) {
                case 'last':
                case 'next':
                    switch (m[1].substring(0, 3)) {
                    case 'yea':
                        now.setFullYear(now.getFullYear() + num);
                        break;
                    case 'mon':
                        now.setMonth(now.getMonth() + num);
                        break;
                    case 'wee':
                        now.setDate(now.getDate() + (num * 7));
                        break;
                    case 'day':
                        now.setDate(now.getDate() + num);
                        break;
                    case 'hou':
                        now.setHours(now.getHours() + num);
                        break;
                    case 'min':
                        now.setMinutes(now.getMinutes() + num);
                        break;
                    case 'sec':
                        now.setSeconds(now.getSeconds() + num);
                        break;
                    default:
                        var day;
                        if (typeof(day = __is.day[m[1].substring(0, 3)]) != 'undefined') {
                            var diff = day - now.getDay();
                            if (diff == 0) {
                                diff = 7 * num;
                            } else if (diff > 0) {
                                if (m[0] == 'last') {
                                    diff -= 7;
                                }
                            } else {
                                if (m[0] == 'next') {
                                    diff += 7;
                                }
                            }
                            now.setDate(now.getDate() + diff);
                        }
                    }
                    break;
        
                default:
                    if (/\d+/.test(m[0])) {
                        num *= parseInt(m[0], 10);
        
                        switch (m[1].substring(0, 3)) {
                        case 'yea':
                            now.setFullYear(now.getFullYear() + num);
                            break;
                        case 'mon':
                            now.setMonth(now.getMonth() + num);
                            break;
                        case 'wee':
                            now.setDate(now.getDate() + (num * 7));
                            break;
                        case 'day':
                            now.setDate(now.getDate() + num);
                            break;
                        case 'hou':
                            now.setHours(now.getHours() + num);
                            break;
                        case 'min':
                            now.setMinutes(now.getMinutes() + num);
                            break;
                        case 'sec':
                            now.setSeconds(now.getSeconds() + num);
                            break;
                        }
                    } else {
                        return false;
                    }
                    break;
                }
                return true;
            };
        
            match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
            if (match != null) {
                if (!match[2]) {
                    match[2] = '00:00:00';
                } else if (!match[3]) {
                    match[2] += ':00';
                }
        
                s = match[1].split(/-/g);
        
                for (i in __is.mon) {
                    if (__is.mon[i] == s[1] - 1) {
                        s[1] = i;
                    }
                }
                s[0] = parseInt(s[0], 10);
        
                s[0] = (s[0] >= 0 && s[0] <= 69) ? '20' + (s[0] < 10 ? '0' + s[0] : s[0] + '') : (s[0] >= 70 && s[0] <= 99) ? '19' + s[0] : s[0] + '';
                return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]) + (match[4] ? match[4] / 1000 : ''), 10);
            }
        
            var regex = '([+-]?\\d+\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)' + '|(last|next)\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))' + '(\\sago)?';
        
            match = strTmp.match(new RegExp(regex, 'gi')); // Brett: seems should be case insensitive per docs, so added 'i'
            if (match == null) {
                return false;
            }
        
            for (i = 0; i < match.length; i++) {
                if (!process(match[i].split(' '))) {
                    return false;
                }
            }
        
            return (now.getTime() / 1000);
        }
        ,
        strtoupper: function (str) {
            // Makes a string uppercase  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strtoupper
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Onno Marsman
            // *     example 1: $P.strtoupper('Kevin van Zonneveld');
            // *     returns 1: 'KEVIN VAN ZONNEVELD'
            return (str + '').toUpperCase();
        }
        ,
        strtr: function (str, from, to) {
            // Translates characters in str using given translation tables  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strtr
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +      input by: uestla
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Alan C
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Taras Bogach
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +      input by: jpfle
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -   depends on: krsort
            // -   depends on: ini_set
            // *     example 1: $trans = {'hello' : 'hi', 'hi' : 'hello'};
            // *     example 1: $P.strtr('hi all, I said hello', $trans)
            // *     returns 1: 'hello all, I said hi'
            // *     example 2: $P.strtr('äaabaåccasdeöoo', 'äåö','aao');
            // *     returns 2: 'aaabaaccasdeooo'
            // *     example 3: $P.strtr('ääääääää', 'ä', 'a');
            // *     returns 3: 'aaaaaaaa'
            // *     example 4: $P.strtr('http', 'pthxyz','xyzpth');
            // *     returns 4: 'zyyx'
            // *     example 5: $P.strtr('zyyx', 'pthxyz','xyzpth');
            // *     returns 5: 'http'
            // *     example 6: $P.strtr('aa', {'a':1,'aa':2});
            // *     returns 6: '2'
            var fr = '',
                i = 0,
                j = 0,
                lenStr = 0,
                lenFrom = 0,
                tmpStrictForIn = false,
                fromTypeStr = '',
                toTypeStr = '',
                istr = '';
            var tmpFrom = [];
            var tmpTo = [];
            var ret = '';
            var match = false;
        
            // Received replace_pairs?
            // Convert to normal from->to chars
            if (typeof from === 'object') {
                tmpStrictForIn = this.ini_set('phpjs.strictForIn', false); // Not thread-safe; temporarily set to true
                from = this.krsort(from);
                this.ini_set('phpjs.strictForIn', tmpStrictForIn);
        
                for (fr in from) {
                    if (from.hasOwnProperty(fr)) {
                        tmpFrom.push(fr);
                        tmpTo.push(from[fr]);
                    }
                }
        
                from = tmpFrom;
                to = tmpTo;
            }
        
            // Walk through subject and replace chars when needed
            lenStr = str.length;
            lenFrom = from.length;
            fromTypeStr = typeof from === 'string';
            toTypeStr = typeof to === 'string';
        
            for (i = 0; i < lenStr; i++) {
                match = false;
                if (fromTypeStr) {
                    istr = str.charAt(i);
                    for (j = 0; j < lenFrom; j++) {
                        if (istr == from.charAt(j)) {
                            match = true;
                            break;
                        }
                    }
                } else {
                    for (j = 0; j < lenFrom; j++) {
                        if (str.substr(i, from[j].length) == from[j]) {
                            match = true;
                            // Fast forward
                            i = (i + from[j].length) - 1;
                            break;
                        }
                    }
                }
                if (match) {
                    ret += toTypeStr ? to.charAt(j) : to[j];
                } else {
                    ret += str.charAt(i);
                }
            }
        
            return ret;
        }
        ,
        strval: function (str) {
            // Get the string value of a variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/strval
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: Comment out the entire switch if you want JS-like behavior instead of PHP behavior
            // -    depends on: gettype
            // *     example 1: $P.strval({red: 1, green: 2, blue: 3, white: 4});
            // *     returns 1: 'Array'
            var type = '';
        
            if (str === null) {
                return '';
            }
        
            type = this.gettype(str);
            switch (type) {
            case 'boolean':
                if (str === true) {
                    return '1';
                }
                return '';
            case 'array':
                return 'Array';
            case 'object':
                return 'Object';
            }
        
            return str;
        }
        ,
        substr: function (str, start, len) {
            // Returns part of a string  
            // 
            // version: 909.322
            // discuss at: http://phpjs.org/functions/substr
            // +     original by: Martijn Wieringa
            // +     bugfixed by: T.Wild
            // +      tweaked by: Onno Marsman
            // +      revised by: Theriault
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // %    note 1: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
            // *       example 1: $P.substr('abcdef', 0, -1);
            // *       returns 1: 'abcde'
            // *       example 2: $P.substr(2, 0, -6);
            // *       returns 2: false
            // *       example 3: $P.ini_set('unicode.semantics',  'on');
            // *       example 3: $P.substr('a\uD801\uDC00', 0, -1);
            // *       returns 3: 'a'
            // *       example 4: $P.ini_set('unicode.semantics',  'on');
            // *       example 4: $P.substr('a\uD801\uDC00', 0, 2);
            // *       returns 4: 'a\uD801\uDC00'
            // *       example 5: $P.ini_set('unicode.semantics',  'on');
            // *       example 5: $P.substr('a\uD801\uDC00', -1, 1);
            // *       returns 5: '\uD801\uDC00'
            // *       example 6: $P.ini_set('unicode.semantics',  'on');
            // *       example 6: $P.substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
            // *       returns 6: '\uD801\uDC00z'
            // *       example 7: $P.ini_set('unicode.semantics',  'on');
            // *       example 7: $P.substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
            // *       returns 7: '\uD801\uDC00z'
            // Add: (?) Use unicode.runtime_encoding (e.g., with string wrapped in "binary" or "Binary" class) to
            // allow access of binary (see file_get_contents()) by: charCodeAt(x) & 0xFF (see https://developer.mozilla.org/En/Using_XMLHttpRequest ) or require conversion first?
            var i = 0,
                allBMP = true,
                es = 0,
                el = 0,
                se = 0,
                ret = '';
            str += '';
            var end = str.length;
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
            case 'on':
                // Full-blown Unicode including non-Basic-Multilingual-Plane characters
                // strlen()
                for (i = 0; i < str.length; i++) {
                    if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
                        allBMP = false;
                        break;
                    }
                }
        
                if (!allBMP) {
                    if (start < 0) {
                        for (i = end - 1, es = (start += end); i >= es; i--) {
                            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                                start--;
                                es--;
                            }
                        }
                    } else {
                        var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                        while ((surrogatePairs.exec(str)) != null) {
                            var li = surrogatePairs.lastIndex;
                            if (li - 2 < start) {
                                start++;
                            } else {
                                break;
                            }
                        }
                    }
        
                    if (start >= end || start < 0) {
                        return false;
                    }
                    if (len < 0) {
                        for (i = end - 1, el = (end += len); i >= el; i--) {
                            if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                                end--;
                                el--;
                            }
                        }
                        if (start > end) {
                            return false;
                        }
                        return str.slice(start, end);
                    } else {
                        se = start + len;
                        for (i = start; i < se; i++) {
                            ret += str.charAt(i);
                            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
                                se++; // Go one further, since one of the "characters" is part of a surrogate pair
                            }
                        }
                        return ret;
                    }
                    break;
                }
                // Fall-through
            case 'off':
                // assumes there are no non-BMP characters;
                //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
            default:
                if (start < 0) {
                    start += end;
                }
                end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
                // PHP returns false if start does not fall within the string.
                // PHP returns false if the calculated end comes before the calculated start.
                // PHP returns an empty string if start and end are the same.
                // Otherwise, PHP returns the portion of the string from start to end.
                return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
            }
            return undefined; // Please Netbeans
        }
        ,
        substr_compare: function (main_str, str, offset, length, case_insensitivity) {
            // Binary safe optionally case insensitive comparison of 2 strings from an offset, up to length characters  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/substr_compare
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   derived from: strcasecmp, strcmp
            // *     example 1: $P.substr_compare("abcde", "bc", 1, 2);
            // *     returns 1: 0
            if (!offset && offset !== 0) {
                throw 'Missing offset for substr_compare()';
            }
        
            if (offset < 0) {
                offset = main_str.length + offset;
            }
        
            if (length && length > (main_str.length - offset)) {
                return false;
            }
            length = length || main_str.length - offset;
        
            main_str = main_str.substr(offset, length);
            str = str.substr(0, length); // Should only compare up to the desired length
            if (case_insensitivity) { // Works as strcasecmp
                main_str = (main_str + '').toLowerCase();
                str = (str + '').toLowerCase();
                if (main_str == str) {
                    return 0;
                }
                return (main_str > str) ? 1 : -1;
            }
            // Works as strcmp
            return ((main_str == str) ? 0 : ((main_str > str) ? 1 : -1));
        }
        ,
        substr_count: function (haystack, needle, offset, length) {
            // Returns the number of times a substring occurs in the string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/substr_count
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.substr_count('Kevin van Zonneveld', 'e');
            // *     returns 1: 3
            // *     example 2: $P.substr_count('Kevin van Zonneveld', 'K', 1);
            // *     returns 2: 0
            // *     example 3: $P.substr_count('Kevin van Zonneveld', 'Z', 0, 10);
            // *     returns 3: false
            var pos = 0,
                cnt = 0;
        
            haystack += '';
            needle += '';
            if (isNaN(offset)) {
                offset = 0;
            }
            if (isNaN(length)) {
                length = 0;
            }
            offset--;
        
            while ((offset = haystack.indexOf(needle, offset + 1)) != -1) {
                if (length > 0 && (offset + needle.length) > length) {
                    return false;
                } else {
                    cnt++;
                }
            }
        
            return cnt;
        }
        ,
        substr_replace: function (str, replace, start, length) {
            // Replaces part of a string with another string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/substr_replace
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0);
            // *     returns 1: 'bob'
            // *     example 2: $var = 'ABCDEFGH:/MNRPQR/';
            // *     example 2: $P.substr_replace($var, 'bob', 0, $var.length);
            // *     returns 2: 'bob'
            // *     example 3: $P.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0, 0);
            // *     returns 3: 'bobABCDEFGH:/MNRPQR/'
            // *     example 4: $P.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 10, -1);
            // *     returns 4: 'ABCDEFGH:/bob/'
            // *     example 5: $P.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', -7, -1);
            // *     returns 5: 'ABCDEFGH:/bob/'
            // *     example 6: 'substr_replace('ABCDEFGH:/MNRPQR/', '', 10, -1)'
            // *     returns 6: 'ABCDEFGH://'
            if (start < 0) { // start position in str
                start = start + str.length;
            }
            length = length !== undefined ? length : str.length;
            if (length < 0) {
                length = length + str.length - start;
            }
            return str.slice(0, start) + replace.substr(0, length) + replace.slice(length) + str.slice(start + length);
        }
        ,
        tan: function (arg) {
            // Returns the tangent of the number in radians  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/tan
            // +   original by: Onno Marsman
            // *     example 1: $P.tan(8723321.4);
            // *     returns 1: 5.4251848798444815
            return Math.tan(arg);
        }
        ,
        tanh: function (arg) {
            // Returns the hyperbolic tangent of the number, defined as sinh(number)/cosh(number)  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/tanh
            // +   original by: Onno Marsman
            // *     example 1: $P.tanh(5.4251848798444815);
            // *     returns 1: 0.9999612058841574
            return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
        }
        ,
        time: function () {
            // Return current UNIX timestamp  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/time
            // +   original by: GeekFG (http://geekfg.blogspot.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: metjay
            // +   improved by: HKM
            // *     example 1: $P.timeStamp = time();
            // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
            return Math.floor(new Date().getTime() / 1000);
        }
        ,
        trim: function (str, charlist) {
            // Strips whitespace from the beginning and end of a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/trim
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: mdsjack (http://www.mdsjack.bo.it)
            // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
            // +      input by: Erkekjetter
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: DxGx
            // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // *     example 1: $P.trim('    Kevin van Zonneveld    ');
            // *     returns 1: 'Kevin van Zonneveld'
            // *     example 2: $P.trim('Hello World', 'Hdle');
            // *     returns 2: 'o Wor'
            // *     example 3: $P.trim(16, 1);
            // *     returns 3: 6
            var whitespace, l = 0,
                i = 0;
            str += '';
        
            if (!charlist) {
                // default list
                whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
            } else {
                // preg_quote custom list
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            }
        
            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }
        
            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }
        
            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        }
        ,
        uasort: function (inputArr, sorter) {
            // Sort an array with a user-defined comparison function and maintain index association  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/uasort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // %        note 1: This function deviates from PHP in returning a copy of the array instead
            // %        note 1: of acting by reference and returning true; this was necessary because
            // %        note 1: IE does not allow deleting and re-adding of properties without caching
            // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 1: get the PHP behavior, but use this only if you are in an environment
            // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 1: property deletion is supported. Note that we intend to implement the PHP
            // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 1: is by reference in PHP anyways
            // *     example 1: $P.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.fruits = uasort(fruits, function (a, b) { if (a > b) {return 1;}if (a < b) {return -1;} return 0;});
            // *     results 1: fruits == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
            var valArr = [],
                tempKeyVal, tempValue, ret, k = '',
                i = 0,
                strictForIn = false,
                populateArr = {};
        
            if (typeof sorter === 'string') {
                sorter = this[sorter];
            } else if (Object.prototype.toString.call(sorter) === '[object Array]') {
                sorter = this[sorter[0]][sorter[1]];
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
        
            for (k in inputArr) { // Get key and value arrays
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push([k, inputArr[k]]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            valArr.sort(function (a, b) {
                return sorter(a[1], b[1]);
            });
            
            for (i = 0; i < valArr.length; i++) { // Repopulate the old array
                populateArr[valArr[i][0]] = valArr[i][1];
            }
        
            return strictForIn || populateArr;
        }
        ,
        ucfirst: function (str) {
            // Makes a string's first character uppercase  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ucfirst
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // *     example 1: $P.ucfirst('kevin van zonneveld');
            // *     returns 1: 'Kevin van zonneveld'
            str += '';
            var f = str.charAt(0).toUpperCase();
            return f + str.substr(1);
        }
        ,
        ucwords: function (str) {
            // Uppercase the first character of every word in a string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ucwords
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Waldo Malqui Silva
            // +   bugfixed by: Onno Marsman
            // +   improved by: Robin
            // +      input by: James (http://www.james-bell.co.uk/)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.ucwords('kevin van  zonneveld');
            // *     returns 1: 'Kevin Van  Zonneveld'
            // *     example 2: $P.ucwords('HELLO WORLD');
            // *     returns 2: 'HELLO WORLD'
            return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        }
        ,
        uksort: function (inputArr, sorter) {
            // Sort an array by keys using a user-defined comparison function  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/uksort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: The examples are correct, this is a new way
            // %        note 2: This function deviates from PHP in returning a copy of the array instead
            // %        note 2: of acting by reference and returning true; this was necessary because
            // %        note 2: IE does not allow deleting and re-adding of properties without caching
            // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 2: get the PHP behavior, but use this only if you are in an environment
            // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 2: property deletion is supported. Note that we intend to implement the PHP
            // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 2: is by reference in PHP anyways
            // *     example 1: $P.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
            // *     example 1: $P.data = uksort(data, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
            // *     results 1: data == {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
            // *     returns 1: true
            var tmp_arr = {},
                keys = [],
                i = 0,
                k = '',
                strictForIn = false,
                populateArr = {};
        
            if (typeof sorter === 'string') {
                sorter = this.window[sorter];
            }
        
            // Make a list of key names
            for (k in inputArr) {
                if (inputArr.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
        
            // Sort key names
            try {
                if (sorter) {
                    keys.sort(sorter);
                } else {
                    keys.sort();
                }
            } catch (e) {
                return false;
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
        
            // Rebuild array with sorted key names
            for (i = 0; i < keys.length; i++) {
                k = keys[i];
                tmp_arr[k] = inputArr[k];
                if (strictForIn) {
                    delete inputArr[k];
                }
            }
            for (i in tmp_arr) {
                if (tmp_arr.hasOwnProperty(i)) {
                    populateArr[i] = tmp_arr[i];
                }
            }
            return strictForIn || populateArr;
        }
        ,
        uniqid: function (prefix, more_entropy) {
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kankrelune (http://www.webfaktory.info/)
            // %        note 1: Uses an internal counter (in php_js global) to avoid collision
            // *     example 1: $P.uniqid();
            // *     returns 1: 'a30285b160c14'
            // *     example 2: $P.uniqid('foo');
            // *     returns 2: 'fooa30285b1cd361'
            // *     example 3: $P.uniqid('bar', true);
            // *     returns 3: 'bara20285b23dfd1.31879087'
            if (typeof prefix == 'undefined') {
                prefix = "";
            }
        
            var retId;
            var formatSeed = function (seed, reqWidth) {
                seed = parseInt(seed, 10).toString(16); // to hex str
                if (reqWidth < seed.length) { // so long we split
                    return seed.slice(seed.length - reqWidth);
                }
                if (reqWidth > seed.length) { // so short we pad
                    return Array(1 + (reqWidth - seed.length)).join('0') + seed;
                }
                return seed;
            };
        
            // BEGIN REDUNDANT
            if (!this.php_js) {
                this.php_js = {};
            }
            // END REDUNDANT
            if (!this.php_js.uniqidSeed) { // init seed with big random int
                this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
            }
            this.php_js.uniqidSeed++;
        
            retId = prefix; // start with prefix, add current milliseconds hex string
            retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
            retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
            if (more_entropy) {
                // for more entropy we add a float lower to 10
                retId += (Math.random() * 10).toFixed(8).toString();
            }
        
            return retId;
        }
        ,
        unserialize: function (data) {
            // Takes a string representation of variable and recreates it  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/unserialize
            // +     original by: Arpad Ray (mailto:arpad@php.net)
            // +     improved by: Pedro Tainha (http://www.pedrotainha.com)
            // +     bugfixed by: dptr1988
            // +      revised by: d3x
            // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +        input by: Brett Zamir (http://brett-zamir.me)
            // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: Chris
            // +     improved by: James
            // +        input by: Martin (http://www.erlenwiese.de/)
            // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     improved by: Le Torbi
            // +     input by: kilops
            // +     bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -      depends on: utf8_decode
            // %            note: We feel the main purpose of this function should be to ease the transport of data between php & js
            // %            note: Aiming for PHP-compatibility, we have to translate objects to arrays
            // *       example 1: $P.unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
            // *       returns 1: ['Kevin', 'van', 'Zonneveld']
            // *       example 2: $P.unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
            // *       returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
            var that = this;
            var utf8Overhead = function (chr) {
                // http://phpjs.org/functions/unserialize:571#comment_95906
                var code = chr.charCodeAt(0);
                if (code < 0x0080) {
                    return 0;
                }
                if (code < 0x0800) {
                    return 1;
                }
                return 2;
            };
        
        
            var error = function (type, msg, filename, line) {
                throw new that.window[type](msg, filename, line);
            };
            var read_until = function (data, offset, stopchr) {
                var buf = [];
                var chr = data.slice(offset, offset + 1);
                var i = 2;
                while (chr != stopchr) {
                    if ((i + offset) > data.length) {
                        error('Error', 'Invalid');
                    }
                    buf.push(chr);
                    chr = data.slice(offset + (i - 1), offset + i);
                    i += 1;
                }
                return [buf.length, buf.join('')];
            };
            var read_chrs = function (data, offset, length) {
                var buf;
        
                buf = [];
                for (var i = 0; i < length; i++) {
                    var chr = data.slice(offset + (i - 1), offset + i);
                    buf.push(chr);
                    length -= utf8Overhead(chr);
                }
                return [buf.length, buf.join('')];
            };
            var _unserialize = function (data, offset) {
                var readdata;
                var readData;
                var chrs = 0;
                var ccount;
                var stringlength;
                var keyandchrs;
                var keys;
        
                if (!offset) {
                    offset = 0;
                }
                var dtype = (data.slice(offset, offset + 1)).toLowerCase();
        
                var dataoffset = offset + 2;
                var typeconvert = function (x) {
                    return x;
                };
        
                switch (dtype) {
                case 'i':
                    typeconvert = function (x) {
                        return parseInt(x, 10);
                    };
                    readData = read_until(data, dataoffset, ';');
                    chrs = readData[0];
                    readdata = readData[1];
                    dataoffset += chrs + 1;
                    break;
                case 'b':
                    typeconvert = function (x) {
                        return parseInt(x, 10) !== 0;
                    };
                    readData = read_until(data, dataoffset, ';');
                    chrs = readData[0];
                    readdata = readData[1];
                    dataoffset += chrs + 1;
                    break;
                case 'd':
                    typeconvert = function (x) {
                        return parseFloat(x);
                    };
                    readData = read_until(data, dataoffset, ';');
                    chrs = readData[0];
                    readdata = readData[1];
                    dataoffset += chrs + 1;
                    break;
                case 'n':
                    readdata = null;
                    break;
                case 's':
                    ccount = read_until(data, dataoffset, ':');
                    chrs = ccount[0];
                    stringlength = ccount[1];
                    dataoffset += chrs + 2;
        
                    readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
                    chrs = readData[0];
                    readdata = readData[1];
                    dataoffset += chrs + 2;
                    if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) {
                        error('SyntaxError', 'String length mismatch');
                    }
        
                    // Length was calculated on an utf-8 encoded string
                    // so wait with decoding
                    readdata = that.utf8_decode(readdata);
                    break;
                case 'a':
                    readdata = {};
        
                    keyandchrs = read_until(data, dataoffset, ':');
                    chrs = keyandchrs[0];
                    keys = keyandchrs[1];
                    dataoffset += chrs + 2;
        
                    for (var i = 0; i < parseInt(keys, 10); i++) {
                        var kprops = _unserialize(data, dataoffset);
                        var kchrs = kprops[1];
                        var key = kprops[2];
                        dataoffset += kchrs;
        
                        var vprops = _unserialize(data, dataoffset);
                        var vchrs = vprops[1];
                        var value = vprops[2];
                        dataoffset += vchrs;
        
                        readdata[key] = value;
                    }
        
                    dataoffset += 1;
                    break;
                default:
                    error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
                    break;
                }
                return [dtype, dataoffset - offset, typeconvert(readdata)];
            };
        
            return _unserialize((data + ''), 0)[2];
        }
        ,
        urldecode: function (str) {
            // Decodes URL-encoded string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/urldecode
            // +   original by: Philip Peterson
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: AJ
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: travc
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Lars Fischer
            // +      input by: Ratheous
            // +   improved by: Orlando
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +      bugfixed by: Rob
            // +      input by: e-mike
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
            // %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
            // %        note 2: pages served as UTF-8
            // *     example 1: $P.urldecode('Kevin+van+Zonneveld%21');
            // *     returns 1: 'Kevin van Zonneveld!'
            // *     example 2: $P.urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
            // *     returns 2: 'http://kevin.vanzonneveld.net/'
            // *     example 3: $P.urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
            // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
            return decodeURIComponent((str + '').replace(/\+/g, '%20'));
        }
        ,
        urlencode: function (str) {
            // URL-encodes string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/urlencode
            // +   original by: Philip Peterson
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: AJ
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: travc
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Lars Fischer
            // +      input by: Ratheous
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Joris
            // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
            // %          note 1: This reflects PHP 5.3/6.0+ behavior
            // %        note 2: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
            // %        note 2: pages served as UTF-8
            // *     example 1: $P.urlencode('Kevin van Zonneveld!');
            // *     returns 1: 'Kevin+van+Zonneveld%21'
            // *     example 2: $P.urlencode('http://kevin.vanzonneveld.net/');
            // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
            // *     example 3: $P.urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
            // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
            str = (str + '').toString();
        
            // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
            // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
            return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
            replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
        }
        ,
        user_error: function (error_msg, error_type) {
            // !No description available for user_error. @php.js developers: Please update the function summary text file.
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/user_error
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: trigger_error
            // *     example 1: $P.user_error('Cannot divide by zero', 256);
            // *     returns 1: true
            return this.trigger_error(error_msg, error_type);
        }
        ,
        usort: function (inputArr, sorter) {
            // Sort an array by values using a user-defined comparison function  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/usort
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // %        note 1: This function deviates from PHP in returning a copy of the array instead
            // %        note 1: of acting by reference and returning true; this was necessary because
            // %        note 1: IE does not allow deleting and re-adding of properties without caching
            // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
            // %        note 1: get the PHP behavior, but use this only if you are in an environment
            // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
            // %        note 1: property deletion is supported. Note that we intend to implement the PHP
            // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
            // %        note 1: is by reference in PHP anyways
            // *     example 1: $P.stuff = {d: '3', a: '1', b: '11', c: '4'};
            // *     example 1: $P.stuff = usort(stuff, function (a, b) {return(a-b);});
            // *     results 1: stuff = {0: '1', 1: '3', 2: '4', 3: '11'};
            var valArr = [],
                k = '',
                i = 0,
                strictForIn = false,
                populateArr = {};
        
            if (typeof sorter === 'string') {
                sorter = this[sorter];
            } else if (Object.prototype.toString.call(sorter) === '[object Array]') {
                sorter = this[sorter[0]][sorter[1]];
            }
        
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            // END REDUNDANT
            strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value && this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
            populateArr = strictForIn ? inputArr : populateArr;
        
        
            for (k in inputArr) { // Get key and value arrays
                if (inputArr.hasOwnProperty(k)) {
                    valArr.push(inputArr[k]);
                    if (strictForIn) {
                        delete inputArr[k];
                    }
                }
            }
            try {
                valArr.sort(sorter);
            } catch (e) {
                return false;
            }
            for (i = 0; i < valArr.length; i++) { // Repopulate the old array
                populateArr[i] = valArr[i];
            }
        
            return strictForIn || populateArr;
        }
        ,
        utf8_decode: function (str_data) {
            // Converts a UTF-8 encoded string to ISO-8859-1  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/utf8_decode
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Norman "zEh" Fuchs
            // +   bugfixed by: hitwork
            // +   bugfixed by: Onno Marsman
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: $P.utf8_decode('Kevin van Zonneveld');
            // *     returns 1: 'Kevin van Zonneveld'
            var tmp_arr = [],
                i = 0,
                ac = 0,
                c1 = 0,
                c2 = 0,
                c3 = 0;
        
            str_data += '';
        
            while (i < str_data.length) {
                c1 = str_data.charCodeAt(i);
                if (c1 < 128) {
                    tmp_arr[ac++] = String.fromCharCode(c1);
                    i++;
                } else if (c1 > 191 && c1 < 224) {
                    c2 = str_data.charCodeAt(i + 1);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = str_data.charCodeAt(i + 1);
                    c3 = str_data.charCodeAt(i + 2);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
        
            return tmp_arr.join('');
        }
        ,
        utf8_encode: function (argString) {
            // Encodes an ISO-8859-1 string to UTF-8  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/utf8_encode
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: sowberry
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +   improved by: Yves Sucaet
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Ulrich
            // +   bugfixed by: Rafal Kukawski
            // *     example 1: $P.utf8_encode('Kevin van Zonneveld');
            // *     returns 1: 'Kevin van Zonneveld'
            if (argString === null || typeof argString === "undefined") {
                return "";
            }
        
            var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            var utftext = "",
                start, end, stringl = 0;
        
            start = end = 0;
            stringl = string.length;
            for (var n = 0; n < stringl; n++) {
                var c1 = string.charCodeAt(n);
                var enc = null;
        
                if (c1 < 128) {
                    end++;
                } else if (c1 > 127 && c1 < 2048) {
                    enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
                } else {
                    enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
                }
                if (enc !== null) {
                    if (end > start) {
                        utftext += string.slice(start, end);
                    }
                    utftext += enc;
                    start = end = n + 1;
                }
            }
        
            if (end > start) {
                utftext += string.slice(start, stringl);
            }
        
            return utftext;
        }
        ,
        var_dump: function () {
            // Dumps a string representation of variable to output  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/var_dump
            // +   original by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Zahlii
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: echo
            // %        note 1: For returning a string, use var_export() with the second argument set to true
            // *     example 1: $P.var_dump(1);
            // *     returns 1: 'int(1)'
            var output = '',
                pad_char = ' ',
                pad_val = 4,
                lgth = 0,
                i = 0,
                d = this.window.document;
            var _getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
        
            var _repeat_char = function (len, pad_char) {
                var str = '';
                for (var i = 0; i < len; i++) {
                    str += pad_char;
                }
                return str;
            };
            var _getInnerVal = function (val, thick_pad) {
                var ret = '';
                if (val === null) {
                    ret = 'NULL';
                } else if (typeof val === 'boolean') {
                    ret = 'bool(' + val + ')';
                } else if (typeof val === 'string') {
                    ret = 'string(' + val.length + ') "' + val + '"';
                } else if (typeof val === 'number') {
                    if (parseFloat(val) == parseInt(val, 10)) {
                        ret = 'int(' + val + ')';
                    } else {
                        ret = 'float(' + val + ')';
                    }
                }
                // The remaining are not PHP behavior because these values only exist in this exact form in JavaScript
                else if (typeof val === 'undefined') {
                    ret = 'undefined';
                } else if (typeof val === 'function') {
                    var funcLines = val.toString().split('\n');
                    ret = '';
                    for (var i = 0, fll = funcLines.length; i < fll; i++) {
                        ret += (i !== 0 ? '\n' + thick_pad : '') + funcLines[i];
                    }
                } else if (val instanceof Date) {
                    ret = 'Date(' + val + ')';
                } else if (val instanceof RegExp) {
                    ret = 'RegExp(' + val + ')';
                } else if (val.nodeName) { // Different than PHP's DOMElement
                    switch (val.nodeType) {
                    case 1:
                        if (typeof val.namespaceURI === 'undefined' || val.namespaceURI === 'http://www.w3.org/1999/xhtml') { // Undefined namespace could be plain XML, but namespaceURI not widely supported
                            ret = 'HTMLElement("' + val.nodeName + '")';
                        } else {
                            ret = 'XML Element("' + val.nodeName + '")';
                        }
                        break;
                    case 2:
                        ret = 'ATTRIBUTE_NODE(' + val.nodeName + ')';
                        break;
                    case 3:
                        ret = 'TEXT_NODE(' + val.nodeValue + ')';
                        break;
                    case 4:
                        ret = 'CDATA_SECTION_NODE(' + val.nodeValue + ')';
                        break;
                    case 5:
                        ret = 'ENTITY_REFERENCE_NODE';
                        break;
                    case 6:
                        ret = 'ENTITY_NODE';
                        break;
                    case 7:
                        ret = 'PROCESSING_INSTRUCTION_NODE(' + val.nodeName + ':' + val.nodeValue + ')';
                        break;
                    case 8:
                        ret = 'COMMENT_NODE(' + val.nodeValue + ')';
                        break;
                    case 9:
                        ret = 'DOCUMENT_NODE';
                        break;
                    case 10:
                        ret = 'DOCUMENT_TYPE_NODE';
                        break;
                    case 11:
                        ret = 'DOCUMENT_FRAGMENT_NODE';
                        break;
                    case 12:
                        ret = 'NOTATION_NODE';
                        break;
                    }
                }
                return ret;
            };
        
            var _formatArray = function (obj, cur_depth, pad_val, pad_char) {
                var someProp = '';
                if (cur_depth > 0) {
                    cur_depth++;
                }
        
                var base_pad = _repeat_char(pad_val * (cur_depth - 1), pad_char);
                var thick_pad = _repeat_char(pad_val * (cur_depth + 1), pad_char);
                var str = '';
                var val = '';
        
                if (typeof obj === 'object' && obj !== null) {
                    if (obj.constructor && _getFuncName(obj.constructor) === 'PHPJS_Resource') {
                        return obj.var_dump();
                    }
                    lgth = 0;
                    for (someProp in obj) {
                        lgth++;
                    }
                    str += 'array(' + lgth + ') {\n';
                    for (var key in obj) {
                        var objVal = obj[key];
                        if (typeof objVal === 'object' && objVal !== null && !(objVal instanceof Date) && !(objVal instanceof RegExp) && !objVal.nodeName) {
                            str += thick_pad + '[' + key + '] =>\n' + thick_pad + _formatArray(objVal, cur_depth + 1, pad_val, pad_char);
                        } else {
                            val = _getInnerVal(objVal, thick_pad);
                            str += thick_pad + '[' + key + '] =>\n' + thick_pad + val + '\n';
                        }
                    }
                    str += base_pad + '}\n';
                } else {
                    str = _getInnerVal(obj, thick_pad);
                }
                return str;
            };
        
            output = _formatArray(arguments[0], 0, pad_val, pad_char);
            for (i = 1; i < arguments.length; i++) {
                output += '\n' + _formatArray(arguments[i], 0, pad_val, pad_char);
            }
        
            if (d.body) {
                this.echo(output);
            } else {
                try {
                    d = XULDocument; // We're in XUL, so appending as plain text won't work
                    this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">' + output + '</pre>');
                } catch (e) {
                    this.echo(output); // Outputting as plain text may work in some plain XML
                }
            }
        }
        ,
        var_export: function (mixed_expression, bool_return) {
            // Outputs or returns a string representation of a variable  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/var_export
            // +   original by: Philip Peterson
            // +   improved by: johnrembo
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   input by: Brian Tafoya (http://www.premasolutions.com/)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: echo
            // *     example 1: $P.var_export(null);
            // *     returns 1: null
            // *     example 2: $P.var_export({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, true);
            // *     returns 2: "array (\n  0 => 'Kevin',\n  1 => 'van',\n  2 => 'Zonneveld'\n)"
            // *     example 3: $P.data = 'Kevin';
            // *     example 3: $P.var_export(data, true);
            // *     returns 3: "'Kevin'"
            var retstr = '',
                iret = '',
                cnt = 0,
                x = [],
                i = 0,
                funcParts = [],
                idtLevel = arguments[2] || 2,
                // We use the last argument (not part of PHP) to pass in our indentation level
                innerIndent = '',
                outerIndent = '';
        
            var getFuncName = function (fn) {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
                if (!name) {
                    return '(Anonymous)';
                }
                return name[1];
            };
        
            var _makeIndent = function (idtLevel) {
                return (new Array(idtLevel + 1)).join(' ');
            };
        
            var __getType = function (inp) {
                var i = 0;
                var match, type = typeof inp;
                if (type === 'object' && inp.constructor && getFuncName(inp.constructor) === 'PHPJS_Resource') {
                    return 'resource';
                }
                if (type === 'function') {
                    return 'function';
                }
                if (type === 'object' && !inp) {
                    return 'null'; // Should this be just null?
                }
                if (type === "object") {
                    if (!inp.constructor) {
                        return 'object';
                    }
                    var cons = inp.constructor.toString();
                    match = cons.match(/(\w+)\(/);
                    if (match) {
                        cons = match[1].toLowerCase();
                    }
                    var types = ["boolean", "number", "string", "array"];
                    for (i = 0; i < types.length; i++) {
                        if (cons === types[i]) {
                            type = types[i];
                            break;
                        }
                    }
                }
                return type;
            };
            var type = __getType(mixed_expression);
        
            if (type === null) {
                retstr = "NULL";
            } else if (type === 'array' || type === 'object') {
                outerIndent = _makeIndent(idtLevel - 2);
                innerIndent = _makeIndent(idtLevel);
                for (i in mixed_expression) {
                    var value = this.var_export(mixed_expression[i], true, idtLevel + 2);
                    value = typeof value === 'string' ? value.replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
                    x[cnt++] = innerIndent + i + ' => ' + (__getType(mixed_expression[i]) === 'array' ? '\n' : '') + value;
                }
                iret = x.join(',\n');
                retstr = outerIndent + "array (\n" + iret + '\n' + outerIndent + ')';
            } else if (type === 'function') {
                funcParts = mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);
        
                // For lambda functions, var_export() outputs such as the following:  '\000lambda_1'
                // Since it will probably not be a common use to expect this (unhelpful) form, we'll use another PHP-exportable
                // construct, create_function() (though dollar signs must be on the variables in JavaScript); if using instead
                // in JavaScript and you are using the namespaced version, note that create_function() will not be available
                // as a global
                retstr = "create_function ('" + funcParts[1] + "', '" + funcParts[2].replace(new RegExp("'", 'g'), "\\'") + "')";
            } else if (type === 'resource') {
                retstr = 'NULL'; // Resources treated as null for var_export
            } else {
                retstr = (typeof(mixed_expression) !== 'string') ? mixed_expression : "'" + mixed_expression.replace(/(["'])/g, "\\$1").replace(/\0/g, "\\0") + "'";
            }
        
            if (bool_return !== true) {
                this.echo(retstr);
                return null;
            } else {
                return retstr;
            }
        }
        ,
        version_compare: function (v1, v2, operator) {
            // Compares two "PHP-standardized" version number strings  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/version_compare
            // +      original by: Philippe Jausions (http://pear.php.net/user/jausions)
            // +      original by: Aidan Lister (http://aidanlister.com/)
            // + reimplemented by: Kankrelune (http://www.webfaktory.info/)
            // +      improved by: Brett Zamir (http://brett-zamir.me)
            // +      improved by: Scott Baker
            // +      improved by: Theriault
            // *        example 1: $P.version_compare('8.2.5rc', '8.2.5a');
            // *        returns 1: 1
            // *        example 2: $P.version_compare('8.2.50', '8.2.52', '<');
            // *        returns 2: true
            // *        example 3: $P.version_compare('5.3.0-dev', '5.3.0');
            // *        returns 3: -1
            // *        example 4: $P.version_compare('4.1.0.52','4.01.0.51');
            // *        returns 4: 1
            // BEGIN REDUNDANT
            this.php_js = this.php_js || {};
            this.php_js.ENV = this.php_js.ENV || {};
            // END REDUNDANT
            // Important: compare must be initialized at 0. 
            var i = 0,
                x = 0,
                compare = 0,
                // vm maps textual PHP versions to negatives so they're less than 0.
                // PHP currently defines these as CASE-SENSITIVE. It is important to
                // leave these as negatives so that they can come before numerical versions
                // and as if no letters were there to begin with.
                // (1alpha is < 1 and < 1.1 but > 1dev1)
                // If a non-numerical value can't be mapped to this table, it receives
                // -7 as its value.
                vm = {
                    'dev': -6,
                    'alpha': -5,
                    'a': -5,
                    'beta': -4,
                    'b': -4,
                    'RC': -3,
                    'rc': -3,
                    '#': -2,
                    'p': -1,
                    'pl': -1
                },
                // This function will be called to prepare each version argument.
                // It replaces every _, -, and + with a dot.
                // It surrounds any nonsequence of numbers/dots with dots.
                // It replaces sequences of dots with a single dot.
                //    version_compare('4..0', '4.0') == 0
                // Important: A string of 0 length needs to be converted into a value
                // even less than an unexisting value in vm (-7), hence [-8].
                // It's also important to not strip spaces because of this.
                //   version_compare('', ' ') == 1
                prepVersion = function (v) {
                    v = ('' + v).replace(/[_\-+]/g, '.');
                    v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
                    return (!v.length ? [-8] : v.split('.'));
                },
                // This converts a version component to a number.
                // Empty component becomes 0.
                // Non-numerical component becomes a negative number.
                // Numerical component becomes itself as an integer.
                numVersion = function (v) {
                    return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
                };
            v1 = prepVersion(v1);
            v2 = prepVersion(v2);
            x = Math.max(v1.length, v2.length);
            for (i = 0; i < x; i++) {
                if (v1[i] == v2[i]) {
                    continue;
                }
                v1[i] = numVersion(v1[i]);
                v2[i] = numVersion(v2[i]);
                if (v1[i] < v2[i]) {
                    compare = -1;
                    break;
                } else if (v1[i] > v2[i]) {
                    compare = 1;
                    break;
                }
            }
            if (!operator) {
                return compare;
            }
        
            // Important: operator is CASE-SENSITIVE.
            // "No operator" seems to be treated as "<."
            // Any other values seem to make the function return null.
            switch (operator) {
            case '>':
            case 'gt':
                return (compare > 0);
            case '>=':
            case 'ge':
                return (compare >= 0);
            case '<=':
            case 'le':
                return (compare <= 0);
            case '==':
            case '=':
            case 'eq':
                return (compare === 0);
            case '<>':
            case '!=':
            case 'ne':
                return (compare !== 0);
            case '':
            case '<':
            case 'lt':
                return (compare < 0);
            default:
                return null;
            }
        }
        ,
        vprintf: function (format, args) {
            // Output a formatted string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/vprintf
            // +   original by: Ash Searle (http://hexmen.com/blog/)
            // +   improved by: Michael White (http://getsprink.com)
            // + reimplemented by: Brett Zamir (http://brett-zamir.me)
            // -    depends on: sprintf
            // *     example 1: $P.printf("%01.2f", 123.1);
            // *     returns 1: 6
            var body, elmt;
            var ret = '',
                d = this.window.document;
        
            // .shift() does not work to get first item in bodies
            var HTMLNS = 'http://www.w3.org/1999/xhtml';
            body = d.getElementsByTagNameNS ? (d.getElementsByTagNameNS(HTMLNS, 'body')[0] ? d.getElementsByTagNameNS(HTMLNS, 'body')[0] : d.documentElement.lastChild) : d.getElementsByTagName('body')[0];
        
            if (!body) {
                return false;
            }
        
            ret = this.sprintf.apply(this, [format].concat(args));
        
            elmt = d.createTextNode(ret);
            body.appendChild(elmt);
        
            return ret.length;
        }
        ,
        vsprintf: function (format, args) {
            // Return a formatted string  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/vsprintf
            // +   original by: ejsanders
            // -    depends on: sprintf
            // *     example 1: $P.vsprintf('%04d-%02d-%02d', [1988, 8, 1]);
            // *     returns 1: '1988-08-01'
            return this.sprintf.apply(this, [format].concat(args));
        }
        ,
        wordwrap: function (str, int_width, str_break, cut) {
            // Wraps buffer to selected number of characters using string break char  
            // 
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/wordwrap
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Nick Callen
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Sakimori
            // +   bugfixed by: Michael Grier
            // *     example 1: $P.wordwrap('Kevin van Zonneveld', 6, '|', true);
            // *     returns 1: 'Kevin |van |Zonnev|eld'
            // *     example 2: $P.wordwrap('The quick brown fox jumped over the lazy dog.', 20, '<br />\n');
            // *     returns 2: 'The quick brown fox <br />\njumped over the lazy<br />\n dog.'
            // *     example 3: $P.wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
            // *     returns 3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat.'
            // PHP Defaults
            var m = ((arguments.length >= 2) ? arguments[1] : 75);
            var b = ((arguments.length >= 3) ? arguments[2] : "\n");
            var c = ((arguments.length >= 4) ? arguments[3] : false);
        
            var i, j, l, s, r;
        
            str += '';
        
            if (m < 1) {
                return str;
            }
        
            for (i = -1, l = (r = str.split(/\r\n|\n|\r/)).length; ++i < l; r[i] += s) {
                for (s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : "")) {
                    j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
                }
            }
        
            return r.join("\n");
        }
    }; // end PHP_JS.prototype

    this.PHP_JS = PHP_JS;
}());
