function Icegram_Message_Type_Popup(e) {
    Icegram_Message_Type.apply(this, arguments)
}
Icegram_Message_Type_Popup.prototype = Object.create(Icegram_Message_Type.prototype), Icegram_Message_Type_Popup.prototype.constructor = Icegram_Message_Type_Popup, Icegram_Message_Type_Popup.prototype.get_template_default = function () {
    return '<div id="icegram_message_{{=id}}" class="mfp-hide icegram ig_popup ig_{{=theme}}"><div class="ig_close" id="popup_box_close_{{=id}}"></div><div class="ig_container ig_clear_fix" data={{=id}}><div class="ig_bg_overlay"></div><div class="ig_form_container layout_left"></div><div class="ig_data ig_clear_fix"><div class="ig_headline">{{=headline}}</div><div class="ig_content"><div class="ig_message ig_clear_fix">{{=message}}</div></div><div class="ig_button" >{{=label}}</div></div><div class="ig_form_container layout_right layout_bottom"></div></div></div>'
}, Icegram_Message_Type_Popup.prototype.post_render = function () {
    (void 0 == this.data.use_theme_defaults || "yes" != this.data.use_theme_defaults) && void 0 != this.data.bg_color && "" != this.data.bg_color && this.el.find(".ig_bg_overlay").css("border-color", this.data.bg_color)
}, Icegram_Message_Type_Popup.prototype.show = function (e, t) {
    if (!this.is_visible()) {
        var i = this,
            o = "#icegram_message_" + this.data.id;
        this.animate("in"), jQuery.magnificPopup.open({
            items: {
                src: o,
                type: "inline"
            },
            showCloseBtn: !1,
            callbacks: {
                close: function () {
                    t !== !0 && i.track("closed")
                },
                open: function () {
                    window.icegram.adjustFormContainerHeight(i)
                }
            }
        }), i.el.addClass("ig_show").removeClass("ig_hide"), t !== !0 && this.track("shown")
    }
}, Icegram_Message_Type_Popup.prototype.add_powered_by = function (e) {
    setTimeout(function () {
        jQuery(".mfp-wrap").append('<div class="ig_powered_by"><a href="' + e.link + '" target="_blank">' + e.text + "</a></div>")
    }, 1e3 + 1e3 * this.data.delay_time)
}, Icegram_Message_Type_Popup.prototype.hide = function (e, t) {
    if (this.is_visible()) {
        var i = "#icegram_message_" + this.data.id,
            o = this;
        this.animate("out"), setTimeout(function () {
            o.el.addClass("ig_hide").removeClass("ig_show"), jQuery.magnificPopup.close({
                items: {
                    src: i,
                    type: "inline"
                }
            })
        }, 500)
    }
}, "undefined" == typeof jQuery.magnificPopup && ! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (e) {
    var t, i, o, n, a, s, r = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        p = "BeforeAppend",
        d = "MarkupParse",
        u = "Open",
        m = "Change",
        f = "mfp",
        g = "." + f,
        v = "mfp-ready",
        h = "mfp-removing",
        _ = "mfp-prevent-close",
        y = function () {},
        C = !!window.jQuery,
        b = e(window),
        w = function (e, i) {
            t.ev.on(f + e + g, i)
        },
        I = function (t, i, o, n) {
            var a = document.createElement("div");
            return a.className = "mfp-" + t, o && (a.innerHTML = o), n ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a
        },
        T = function (i, o) {
            t.ev.triggerHandler(f + i, o), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(o) ? o : [o]))
        },
        P = function (i) {
            return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
        },
        k = function () {
            e.magnificPopup.instance || (t = new y, t.init(), e.magnificPopup.instance = t)
        },
        x = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    y.prototype = {
        constructor: y,
        init: function () {
            var i = navigator.appVersion;
            t.isIE7 = -1 !== i.indexOf("MSIE 7."), t.isIE8 = -1 !== i.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = x(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function (i) {
            var n;
            if (i.isObj === !1) {
                t.items = i.items.toArray(), t.index = 0;
                var s, r = i.items;
                for (n = 0; n < r.length; n++)
                    if (s = r[n], s.parsed && (s = s.el[0]), s === i.el[0]) {
                        t.index = n;
                        break
                    }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], a = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = o, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = I("bg").on("click" + g, function () {
                t.close()
            }), t.wrap = I("wrap").attr("tabindex", -1).on("click" + g, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = I("container", t.wrap)), t.contentContainer = I("content"), t.st.preloader && (t.preloader = I("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (n = 0; n < l.length; n++) {
                var c = l[n];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(d, function (e, t, i, o) {
                i.close_replaceWith = P(o.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(P())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + g, function (e) {
                27 === e.keyCode && t.close()
            }), b.on("resize" + g, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var p = t.wH = b.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(p)) {
                var f = t._getScrollbarSize();
                f && (m.marginRight = f)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var h = t.st.mainClass;
            return t.isIE7 && (h += " mfp-ie7"), h && t._addClassToMFP(h), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + g, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(p), T(u), i
        },
        close: function () {
            t.isOpen && (T(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(h), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            T(r);
            var i = h + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "", e("html").css(n)
            }
            o.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), t.st.showCloseBtn && (!t.st.closeBtnInside || t.currTemplate[t.currItem.type] === !0) && t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(c)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    o = window.innerHeight * i;
                t.wrap.css("height", o), t.wH = o
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function () {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var o = i.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", o]), t.currItem = i, !t.currTemplate[o]) {
                var a = t.st[o] ? t.st[o].markup : !1;
                T("FirstMarkupParse", a), a ? t.currTemplate[o] = e(a) : t.currTemplate[o] = !0
            }
            n && n !== i.type && t.container.removeClass("mfp-" + n + "-holder");
            var s = t["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, t.currTemplate[o]);
            t.appendContent(s, o), i.preloaded = !0, T(m, i), n = i.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function (e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(P()) : t.content = e : t.content = "", T(p), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (i) {
            var o, n = t.items[i];
            if (n.tagName ? n = {
                    el: e(n)
                } : (o = n.type, n = {
                    data: n,
                    src: n.src
                }), n.el) {
                for (var a = t.types, s = 0; s < a.length; s++)
                    if (n.el.hasClass("mfp-" + a[s])) {
                        o = a[s];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = o || t.st.type || "inline", n.index = i, n.parsed = !0, t.items[i] = n, T("ElementParse", n), t.items[i]
        },
        addGroup: function (e, i) {
            var o = function (o) {
                o.mfpEl = this, t._openClick(o, e, i)
            };
            i || (i = {});
            var n = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, o)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, o) : (i.items = e, e.off(n).on(n, o)))
        },
        _openClick: function (i, o, n) {
            var a = void 0 !== n.midClick ? n.midClick : e.magnificPopup.defaults.midClick;
            if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var s = void 0 !== n.disableOn ? n.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(t)) return !0
                    } else if (b.width() < s) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), n.el = e(i.mfpEl), n.delegate && (n.items = o.find(n.delegate)), t.open(n)
            }
        },
        updateStatus: function (e, o) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), !o && "loading" === e && (o = t.st.tLoading);
                var n = {
                    status: e,
                    text: o
                };
                T("UpdateStatus", n), e = n.status, o = n.text, t.preloader.html(o), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        },
        _checkIfClose: function (i) {
            if (!e(i).hasClass(_)) {
                var o = t.st.closeOnContentClick,
                    n = t.st.closeOnBgClick;
                if (o && n) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (o) return !0
                } else if (n && e.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function (t, i, o) {
            var n;
            o.data && (i = e.extend(o.data, i)), T(d, [t, i, o]), e.each(i, function (e, i) {
                if (void 0 === i || i === !1) return !0;
                if (n = e.split("_"), n.length > 1) {
                    var o = t.find(g + "-" + n[0]);
                    if (o.length > 0) {
                        var a = n[1];
                        "replaceWith" === a ? o[0] !== i[0] && o.replaceWith(i) : "img" === a ? o.is("img") ? o.attr("src", i) : o.replaceWith('<img src="' + i + '" class="' + o.attr("class") + '" />') : o.attr(n[1], i)
                    }
                } else t.find(g + "-" + e).html(i)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function (t, i) {
            return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function (i) {
        k();
        var o = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var n, a = C ? o.data("magnificPopup") : o[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                a.items ? n = a.items[s] : (n = o, a.delegate && (n = n.find(a.delegate)), n = n.eq(s)), t._openClick({
                    mfpEl: n
                }, o, a)
            } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {}, i), C ? o.data("magnificPopup", i) : o[0].magnificPopup = i, t.addGroup(o, i);
        return o
    };
    var S, E, O, z = "inline",
        M = function () {
            O && (E.after(O.addClass(S)).detach(), O = null)
        };
    e.magnificPopup.registerModule(z, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(z), w(r + "." + z, function () {
                    M()
                })
            },
            getInline: function (i, o) {
                if (M(), i.src) {
                    var n = t.st.inline,
                        a = e(i.src);
                    if (a.length) {
                        var s = a[0].parentNode;
                        s && s.tagName && (E || (S = n.hiddenClass, E = I(S), S = "mfp-" + S), O = a.after(E).detach().removeClass(S)), t.updateStatus("ready")
                    } else t.updateStatus("error", n.tNotFound), a = e("<div>");
                    return i.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(o, {}, i), o
            }
        }
    });
    var B, H = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var o = t.st.image.titleSrc;
        if (o) {
            if (e.isFunction(o)) return o.call(t, i);
            if (i.el) return i.el.attr(o) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var i = t.st.image,
                    o = ".image";
                t.types.push("image"), w(u + o, function () {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }), w(r + o, function () {
                    i.cursor && e(document.body).removeClass(i.cursor), b.off("resize" + g)
                }), w("Resize" + o, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, B && clearInterval(B), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var i = 0,
                    o = e.img[0],
                    n = function (a) {
                        B && clearInterval(B), B = setInterval(function () {
                            return o.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(B), i++, 3 === i ? n(10) : 40 === i ? n(50) : 100 === i && n(500), void 0)
                        }, a)
                    };
                n(1)
            },
            getImage: function (i, o) {
                var n = 0,
                    a = function () {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(a, 100) : s()))
                    },
                    s = function () {
                        i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", r.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    r = t.st.image,
                    l = o.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", a).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(o, {
                    title: H(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (B && clearInterval(B), i.loadError ? (o.addClass("mfp-loading"), t.updateStatus("error", r.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), t.updateStatus("ready")), o) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), t.findImageSize(i)), o)
            }
        }
    });
    var F, A = function () {
        return void 0 === F && (F = void 0 !== document.createElement("p").style.MozTransform), F
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, i = t.st.zoom,
                    o = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var n, a, s = i.duration,
                        c = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                o = "all " + i.duration / 1e3 + "s " + i.easing,
                                n = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                a = "transition";
                            return n["-webkit-" + a] = n["-moz-" + a] = n["-o-" + a] = n[a] = o, t.css(n), t
                        },
                        p = function () {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(n), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void p();
                            a = c(e), a.css(t._getOffset()), t.wrap.append(a), n = setTimeout(function () {
                                a.css(t._getOffset(!0)), n = setTimeout(function () {
                                    p(), setTimeout(function () {
                                        a.remove(), e = a = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), w(l + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(n), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                a = c(e)
                            }
                            a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function () {
                                a.css(t._getOffset())
                            }, 16)
                        }
                    }), w(r + o, function () {
                        t._allowZoom() && (p(), a && a.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function (i) {
                var o;
                o = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var n = o.offset(),
                    a = parseInt(o.css("padding-top"), 10),
                    s = parseInt(o.css("padding-bottom"), 10);
                n.top -= e(window).scrollTop() - a;
                var r = {
                    width: o.width(),
                    height: (C ? o.innerHeight() : o[0].offsetHeight) - s - a
                };
                return A() ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r
            }
        }
    });
    var j = "retina";
    e.magnificPopup.registerModule(j, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        i = e.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (w("ImageHasSize." + j, function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), w("ElementParse." + j, function (t, o) {
                        o.src = e.replaceSrc(o, i)
                    }))
                }
            }
        }
    }), k()
});