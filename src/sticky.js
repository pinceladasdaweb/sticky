/*jslint browser: true, debug: true*/
/*global define, module, exports*/
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Sticky = factory();
    }
}(this, function () {
    "use strict";
    var Sticky = function (options) {
        if (!this || !(this instanceof Sticky)) {
            return new Sticky(options);
        }

        if (!options) {
            options = {};
        }

        this.target = options.target;
        this.offset = options.offset;

        this.ready();
    };

    Sticky.prototype = {
        hasClass: function (el, name) {
            return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
        },
        addClass: function (el, name) {
            if (!this.hasClass(el, name)) {
                el.className += (el.className ? ' ' : '') + name;
            }
        },
        removeClass: function (el, name) {
            if (this.hasClass(el, name)) {
                el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
            }
        },
        supportTrans: function () {
            var s        = document.body.style,
                supports = 'transition' in s || 'WebkitTransition' in s || 'MozTransition' in s || 'msTransition' in s || 'OTransition' in s;

            return supports;
        },
        scrollPos: function () {
            if (window.pageYOffset !== undefined) {
                return pageYOffset;
            } else {
                var root = document.documentElement,
                    body = document.body,
                    scrollY;

                scrollY = root.scrollTop || body.scrollTop || 0;
                return scrollY;
            }
        },
        trigger: function (eventName) {
            var event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, false);

            window.dispatchEvent(event);
        },
        handler: function () {
            this.trigger('scroll');
        },
        attach: function (el) {
            if (this.scrollPos() > this.offset) {
                this.addClass(el, 'sticky');
            } else {
                this.removeClass(el, 'sticky');
            }
        },
        ready: function () {
            var root   = document.documentElement,
                el     = document.querySelector(this.target),
                events = ['DOMContentLoaded', 'load', 'resize'],
                i,
                len;

            if (!this.supportTrans()) {
                this.addClass(root, 'no-transitions');
            }

            window.addEventListener('scroll', function () {
                this.attach(el);
            }.bind(this), false);

            for (i = 0, len = events.length; i < len; i += 1) {
                window.addEventListener(events[i], this.handler(), false);
            }
        }
    };

    return Sticky;
}));