define(["jquery", "underscore"], function (a, b) {
    "use strict";
    return function () {
        for (var a, b = function () {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b);
        window.log = Function.prototype.bind ? Function.prototype.bind.call(e.log, e) : function () {
            Function.prototype.apply.call(e.log, e, arguments)
        }
    }(), {
        addStyleToHeader: function (b, c) {
            c && "string" == typeof c ? a("#" + c).length || a("<style>").attr("id", c).html(b).appendTo("head") : a("<style>").html(b).appendTo("head")
        },
        addStyleLinkToHeader: function (c, d) {
            if (d && !b.isEmpty(d) && !a("#" + d).length) {
                var e = a(document.createElement("link"));
                e.attr("rel", "stylesheet"), e.attr("type", "text/css"), e.attr("href", c), d && !b.isEmpty(d) && e.attr("id", d), a("head").append(e)
            }
        }
    }
});