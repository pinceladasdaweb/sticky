/*
--------------------------------
Sticky - Vanilla JS + CSS3 Sticky Header
--------------------------------
+ https://github.com/pinceladasdaweb/sticky
+ version 1.0.0
+ Copyright 2014 Pedro Rogerio
+ Licensed under the MIT license

+ Documentation: https://github.com/pinceladasdaweb/sticky
*/

var supports = (function () {
    'use strict';

    var style = document.createElement('div').style,
        vendors = ['', 'Moz', 'Webkit', 'Khtml', 'O', 'ms'],
        prefix, i, l;

    return function (prop) {
        if (typeof style[prop] === 'string') {
            return true;
        }

        prop = prop.replace(/^[a-z]/, function (val) {
            return val.toUpperCase();
        });

        for (i = 0, l = vendors.length; i < l; i += 1) {
            prefix = vendors[i] + prop;
            if (typeof style[prefix] === 'string') {
                return true;
            }
        }
        return false;
    };
}());

var Sticky = (function (d) {
    "use strict";
    var module = {
        config: function (config) {
            this.offset  = config.offset;
            this.target = config.target;
        },
        hasClass: function (el, name) {
            return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
        },
        addClass: function (el, name) {
            var self = this;

            if (!self.hasClass(el, name)) {
                el.className += (el.className ? ' ' : '') + name;
            }
        },
        removeClass: function (el, name) {
            var self = this;

            if (self.hasClass(el, name)) {
                el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
            }
        },
        addEvent: function (obj, type, fn) {
            if (obj.attachEvent) {
                obj['e' + type + fn] = fn;
                obj[type + fn] = function () {
                    obj['e' + type + fn](window.event);
                }
                obj.attachEvent('on' + type, obj[type + fn]);
            } else {
                obj.addEventListener(type, fn, false);
            }
        },
        getScroll: function () {
            if (window.pageYOffset !== undefined) {
                return pageYOffset;
            } else {
                var root = d.documentElement,
                    body = d.body,
                    scrollY;

                scrollY = root.scrollTop || body.scrollTop || 0;
                return scrollY;
            }
        },
        attach: function (el) {
            var self = this

            if (self.getScroll() > self.offset) {
                self.addClass(el, 'sticky');
            } else {
                self.removeClass(el, 'sticky');
            }
        },
        ready: function () {
            var self = this,
                root = d.documentElement,
                el   = d.querySelector(self.target);

            if (!supports('transition')) {
                self.addClass(root, 'no-transitions');
            }

            self.addEvent(window, 'load', function (e) {
                self.attach(el);
            });

            self.addEvent(window, 'scroll', function (e) {
                self.attach(el);
            });
        },
        init: function (config) {
            module.config(config);
            module.ready();
        }
    };

    return {
        init: module.init
    };
}(document));