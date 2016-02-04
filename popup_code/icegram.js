function Icegram() {}

function Icegram_Message_Type(e) {
    var e;
    this.root_container = "#icegram_messages_container", this.data = e, this.type = e.type, this.data.delay_time = parseInt(this.data.delay_time), "string" != typeof this.data.link || "" == this.data.link || /^tel:/i.test(this.data.link) || /^https?:\/\//i.test(this.data.link) || (this.data.link = "http://" + this.data.link), this.set_template(this.get_template_default()), this.init()
}
Icegram.prototype.init = function (e) {
    if (void 0 != e) {
        jQuery(window).trigger("preinit.icegram", [e]), this.data = e, this.defaults = jQuery.extend({}, e.defaults), this.message_data = e.messages, this.messages, this.tracking_data = [], this.message_template_cache = {}, this.map_id_to_index = {}, this.map_type_to_index = {}, this.mode = void 0 == window.ig_mode ? "local" : window.ig_mode, this.powered_by = {
            link: "http://www.icegram.com/?utm_source=inapp&utm_campaign=poweredby&utm_medium="
        }, this.powered_by.text = this.defaults.powered_by_text, this.powered_by.logo = this.defaults.powered_by_logo, jQuery("body").append('<div id="icegram_messages_container"></div>');
        this.messages = [];
        var t = this;
        this.message_data.length > 0 && jQuery.each(this.message_data, function (e, i) {
            try {
                if (-1 == window.location.href.indexOf("campaign_preview_id")) {
                    if ("yes" == i.retargeting && 1 == jQuery.cookie("icegram_campaign_shown_" + i.id)) return;
                    if ("yes" == i.retargeting_clicked && 1 == jQuery.cookie("icegram_campaign_clicked_" + i.id)) return
                }
                var a = null,
                    r = i.type.split("-").join(" ").ucwords().split(" ").join("_");
                a = "function" == typeof window["Icegram_Message_Type_" + r] ? new window["Icegram_Message_Type_" + r](i) : new Icegram_Message_Type(i), t.messages.push(a), t.map_id_to_index["_" + i.id] = e, t.map_type_to_index[i.type] = jQuery.isArray(t.map_type_to_index[i.type]) ? t.map_type_to_index[i.type] : new Array, t.map_type_to_index[i.type].push(e)
            } catch (o) {}
        }), jQuery(window).unload(function () {
            "function" == typeof window.icegram.submit_tracking_data && window.icegram.submit_tracking_data(!1)
        }), setInterval(function () {
            "function" == typeof window.icegram.submit_tracking_data && window.icegram.submit_tracking_data(!0)
        }, 5e3), jQuery(window).trigger("init.icegram", [this])
    }
}, Icegram.prototype.timer_tick = function () {}, Icegram.prototype.get_template_fn = function (e) {
    return this.message_template_cache[e]
}, Icegram.prototype.set_template_fn = function (e, t) {
    this.message_template_cache[e] = t
}, Icegram.prototype.get_message = function (e) {
    return this.messages.length > e ? this.messages[e] : void 0
}, Icegram.prototype.get_message_by_id = function (e) {
    if (this.map_id_to_index.hasOwnProperty("_" + e)) {
        var t = this.map_id_to_index["_" + e];
        return this.get_message(t)
    }
    return void 0
}, Icegram.prototype.get_messages_by_type = function (e) {
    if (this.map_type_to_index.hasOwnProperty(e)) {
        var t = this.map_type_to_index[e],
            i = [];
        if (jQuery.isArray(t)) {
            var a = this;
            jQuery.each(t, function (e, t) {
                i.push(a.get_message(t))
            })
        }
        return i
    }
    return void 0
}, Icegram.prototype.get_powered_by = function (e) {
    var t = jQuery.extend({}, this.powered_by);
    return t.link = t.link + (e || ""), t
}, Icegram.prototype.track = function (e, t) {
    "object" == typeof t && t.hasOwnProperty("message_id") && t.hasOwnProperty("campaign_id") && (jQuery(window).trigger("track.icegram", [e, t]), this.tracking_data.push({
        type: e,
        params: t
    }))
}, Icegram.prototype.submit_tracking_data = function (e) {
    var t = window.location.protocol.split(":"),
        i = t[0],
        a = this.data.ajax_url.split("://"),
        r = a[0];
    if (this.tracking_data.length > 0 && -1 == window.location.href.indexOf("campaign_preview_id")) {
        var o = {
            type: "POST",
            url: this.data.ajax_url,
            async: e || !1,
            data: {
                action: "icegram_event_track",
                event_data: JSON.parse(JSON.stringify(this.tracking_data)),
                ig_remote_url: "remote" == this.mode ? window.location.href : void 0
            },
            success: function (e, t, i) {},
            error: function (e, t, i) {}
        };
        "remote" == this.mode ? (o.xhrFields = {
            withCredentials: !0
        }, o.crossDomain = !0, o.async = !0) : i != r && (o.xhrFields = {
            withCredentials: !0
        }, jQuery.extend(o.data, {
            ig_local_url_cs: window.location.href
        })), jQuery.ajax(o), this.tracking_data = []
    }
}, Icegram.prototype.hide_all_messages = function () {
    this.messages.length > 0 && jQuery.each(this.messages, function (e, t) {
        t.hide()
    })
}, Icegram_Message_Type.prototype.init = function () {
    this.render(), this.add_event_handlers()
}, Icegram_Message_Type.prototype.add_event_handlers = function () {
    this.el.on("click", {
        self: this
    }, this.on_click), jQuery(window).on("resize", {
        self: this
    }, this.on_resize)
}, Icegram_Message_Type.prototype.animations = {}, Icegram_Message_Type.prototype.embed_form = function () {
    if (-1 === jQuery.inArray(this.data.type, ["toast", "badge", "ribbon", "exit-redirect"])) {
        var e = null,
            t = this.data.form_layout,
            i = this.data.form_has_label,
            a = this.data.form_style || "none",
            r = this.data.label || void 0;
        if (a = a.toLowerCase().replace(" ", "_"), void 0 != this.data.use_form && "yes" == this.data.use_form && (e = this.data.form_html), this.el.find("form.ig_embed_form").length > 0) {
            var o = this.el.find("form.ig_embed_form");
            t = "inline", -1 === jQuery.inArray(this.data.type, ["messenger", "tab", "sidebar", "interstitial", "sticky"]) && (o.hasClass("ig_left") ? t = "left" : o.hasClass("ig_right") && (t = "right")), "inline" == t && this.el.find("form.ig_embed_form").replaceWith('<div class="ig_form_container layout_inline"></div>'), i = o.find(".ig_form_el_group label").length > 0 ? "yes" : void 0, 0 == o.find(".ig_button").length && 0 == o.find("button[type=submit]").length && (r = r || "Submit", o.append('<input class="ig_button" type="submit" value="' + r + '">')), e = jQuery("<div/>").append(o).html()
        }
        if (null == e) this.el.find(".ig_form_container").remove();
        else {
            var s = window.icegram.formProcess(this, e);
            if (s) {
                var n = void 0 != this.data.form_header && "" != this.data.form_header ? '<div class="ig_form_header">' + this.data.form_header + "</div>" : "",
                    _ = void 0 != this.data.form_footer && "" != this.data.form_footer ? '<div class="ig_form_footer">' + this.data.form_footer + "</div>" : "";
                this.el.find(".ig_form_container").append(n).append(s).append(_), void 0 == i ? this.el.find(".ig_el_label").not("span.ig_el_label").remove() : (this.el.find("input, textarea").removeAttr("placeholder"), this.el.find("select option.ig_el_placeholder").remove()), this.el.find(".ig_form_container .ig_button").length > 0 && (this.el.find(".ig_button").not(".ig_form_container .ig_button").hide(), r = r || this.el.find(".ig_button").val() || "Submit", this.el.find(".ig_button").val(r)), this.el.addClass("ig_form_" + t);
                var d = "";
                void 0 != this.data.form_bg_color && "" != this.data.form_bg_color ? (this.el.find(".ig_form_container").css("background-color", this.data.form_bg_color), d += ".ig_form_" + t + ".ig_form_" + a + " .ig_form_container:before{ background-color:" + this.data.form_bg_color + "; border-color:" + this.data.form_bg_color + ";}") : d += ".ig_form_" + t + ".ig_form_" + a + " .ig_form_container:before{ display:none;}", void 0 != this.data.form_text_color && "" != this.data.form_text_color && this.el.find(".ig_form_container").css("color", this.data.form_text_color), this.el.addClass("ig_form_" + a).find(".ig_form_container").prepend('<style type="text/css">' + d + "</style>"), this.el.find(".ig_form_container.layout_" + t + " .ig_form_els").first().addClass("ig_form_els_first").end().last().addClass("ig_form_els_last")
            }
        }
    }
}, Icegram_Message_Type.prototype.render = function () {
    this.pre_render();
    var e = this.render_template();
    try {
        jQuery(this.root_container).append(e)
    } catch (t) {}
    this.dom_id = "icegram_message_" + this.data.id, this.el = jQuery("#" + this.dom_id), this.set_position();
    var i = window.icegram.get_powered_by(this.type);
    if (i.hasOwnProperty("link") && i.hasOwnProperty("text") && "" != i.text && this.add_powered_by(i), (void 0 == this.data.headline || "" == this.data.headline) && this.el.find(".ig_headline").hide(), (void 0 == this.data.icon || "" == this.data.icon) && this.el.addClass("ig_no_icon").find(".ig_icon").remove(), (void 0 == this.data.message || "" == this.data.message) && this.el.find(".ig_message").hide(), (void 0 == this.data.label || "" == this.data.label) && this.el.find(".ig_button").hide(), this.embed_form(), void 0 == this.data.use_theme_defaults || "yes" != this.data.use_theme_defaults) {
        if (void 0 != this.data.text_color && "" != this.data.text_color && (this.el.css("color", this.data.text_color), this.el.find(".ig_container").css("color", this.data.text_color)), void 0 != this.data.bg_color && "" != this.data.bg_color && (this.el.css("background-color", this.data.bg_color), this.el.find(".ig_container").css("background-color", this.data.bg_color)), void 0 != this.data.cta_bg_color && "" != this.data.cta_bg_color) {
            this.el.find('.ig_button, form input[type="submit"]').css("background-color", this.data.cta_bg_color);
            var a = window.icegram.hexToHsl(this.data.cta_bg_color);
            this.el.find('.ig_button, form input[type="submit"]').css("border-color", "hsl(" + a.h + "," + (a.s - 5) + "%," + (a.l - 8) + "%)")
        }
        void 0 != this.data.cta_text_color && "" != this.data.cta_text_color && this.el.find('.ig_button, form input[type="submit"]').css("color", this.data.cta_text_color)
    }
    "string" == typeof this.data.link && "" != this.data.link && this.el.parent().find(".ig_cta, .ig_button").css("cursor", "pointer"), this.post_render(), this.hide({}, !0), this.set_up_show_trigger()
}, Icegram.prototype.formProcess = function (e, t) {
    var i = jQuery("<div/>").html(t).find(".gform_validation_container input").data("required_field", !0).end().find(".required_field").data("required_field", !0).end().find("input, label, select, textarea, button").not("br");
    if (i.length > 0) {
        var a = jQuery('<div class="ig_embed_form_container ig_clear_fix"></div>'),
            r = jQuery("<div/>").html(t).find("form").removeAttr("class").removeAttr("style").addClass("ig_clear_fix").empty(),
            o = ".",
            s = 0;
        jQuery.each(i, function (e, t) {
            var i = jQuery(t),
                r = jQuery('<div class="ig_form_els"></div>');
            if (i.removeAttr("class").removeAttr("style"), (-1 == i.attr("tabindex") || i.is('*[name*="[abs]"]') || i.data("required_field") || "_mc4wp_required_but_not_really" == i.attr("name")) && (i.addClass("ig_form_required_field").removeData("required_field"), s--), ("hidden" == i.attr("type") || 1 == i.prop("disabled")) && (i.addClass("ig_form_hidden_field"), s--), i.is("label")) o = i.not("input, select, textarea, button, span, br").text().replace(/\s+/g, " ") || ".";
            else if ((i.is("input") || i.is("button") || i.is("textarea") || i.is("select")) && !i.is("input[type=radio]")) {
                if (i.removeAttr("id"), i.is("button")) {
                    var n = i.not("br, span, div").text().trim() || "";
                    i.remove(), i = jQuery('<input type="submit" value="' + n + '">')
                }!i.is("input[type=submit]") && !i.is("input[type=button]") || i.is(".ig_form_hidden_field, .ig_form_required_field") || i.addClass("ig_button"), (i.is("input[type=text]") || i.is("input[type=email]")) && i.attr("size", 25), label_class = "ig_el_label ig_button_label", "." != o && (label_class = "ig_el_label", i.is("select") ? jQuery('<option class="ig_el_placeholder">' + o + "</option>").prependTo(i) : i.attr("placeholder", o)), jQuery('<label class="' + label_class + '">' + o + "</label>").appendTo(r), o = ".", r.append(i), a.append(r), s++
            } else i.is("input[type=radio]") && (label_class = "ig_el_label ig_button_label", "." != o && (label_class = "ig_el_label"), jQuery('<label><span class="' + label_class + '">' + o + "</span></label>").prepend(i).appendTo(r), o = ".", r.addClass("ig_form_el_radio"), a.append(r), s++)
        });
        var n = ["", "ig_full", "ig_half", "ig_third", "ig_quater"];
        return s = 4 > s ? s : 4, a.find(".ig_form_required_field").length <= 0 && a.append('<div class="ig_form_els"><input class="ig_form_required_field" type="text" tabindex="-1"></input></div>'), a.addClass(n[s]).find(".ig_form_required_field").parent().removeClass("ig_form_els").css({
            position: "absolute",
            left: "-5000px"
        }).end().end().find(".ig_form_hidden_field").parent().removeClass("ig_form_els").css({
            display: "none"
        }), r.append(a), jQuery("<div/>").append(r).html()
    }
    return null
}, Icegram_Message_Type.prototype.render_template = function () {
    return "function" != typeof window.icegram.get_template_fn(this.type) && window.icegram.set_template_fn(this.type, new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + this.template.replace(/[\r\t\n]/g, " ").split("{{").join("	").replace(/((^|\}\})[^\t]*)'/g, "$1\r").replace(/\t=(.*?)\}\}/g, "',$1,'").split("	").join("');").split("}}").join("p.push('").split("\r").join("\\'") + "');}return p.join('');")), window.icegram.get_template_fn(this.type)(this.data)
}, Icegram_Message_Type.prototype.pre_render = function () {}, Icegram_Message_Type.prototype.post_render = function () {}, Icegram_Message_Type.prototype.set_up_show_trigger = function () {
    if (isNaN(this.data.delay_time)) this.show();
    else if (this.data.delay_time >= 0) {
        var e = this;
        this.timer = setTimeout(function () {
            e.show()
        }, 1e3 * this.data.delay_time)
    }
}, Icegram_Message_Type.prototype.set_template = function (e) {
    this.template = e
}, Icegram_Message_Type.prototype.get_template_default = function () {
    return '<div id="icegram_message_{{=id}}" class="icegram"><div class="ig_headline">{{=headline}}</div></div>'
}, Icegram_Message_Type.prototype.show = function (e, t) {
    this.is_visible() || (this.animate("in"), this.pre_show(), this.el.show(e), this.el.addClass("ig_show").removeClass("ig_hide"), t !== !0 && this.track("shown"), this.post_show());
    var i = this;
    window.icegram.adjustFormContainerHeight(i)
}, Icegram_Message_Type.prototype.hide = function (e, t) {
    if (this.is_visible()) {
        var i = this;
        this.animate("out"), this.pre_hide(), setTimeout(function () {
            i.el.hasClass("ig_no_hide") || i.el.hide(e), i.el.addClass("ig_hide").removeClass("ig_show")
        }, 500), t !== !0 && this.track("closed"), this.post_hide()
    }
}, Icegram_Message_Type.prototype.set_position = function () {}, Icegram_Message_Type.prototype.add_powered_by = function (e) {}, Icegram_Message_Type.prototype.pre_show = function () {}, Icegram_Message_Type.prototype.post_show = function () {}, Icegram_Message_Type.prototype.pre_hide = function () {}, Icegram_Message_Type.prototype.post_hide = function () {}, Icegram_Message_Type.prototype.track = function (e, t) {
    "function" == typeof window.icegram.track && (t = t || {}, jQuery.extend(t, {
        message_id: this.data.id,
        campaign_id: this.data.campaign_id,
        expiry_time: this.data.expiry_time,
        expiry_time_clicked: this.data.expiry_time_clicked
    }), window.icegram.track(e, t))
}, Icegram_Message_Type.prototype.is_visible = function () {
    return this.el.hasClass("ig_show")
}, Icegram_Message_Type.prototype.toggle = function (e) {
    this.is_visible() ? this.hide(e) : this.show(e)
}, Icegram_Message_Type.prototype.on_click = function (e) {
    if (e.data = e.data || {
            self: this
        }, jQuery(e.target).filter(".ig_close").length) return void e.data.self.hide();
    var t = jQuery(e.target).closest(".icegram").find("form:visible").first();
    (jQuery(e.target).filter(".ig_button, .ig_cta ,:submit").length || jQuery(e.target).parents(".ig_button, .ig_cta ").length && !(t.find(".ig_button, input[type=button], input[type=submit], button[type=submit]").length > 0)) && e.data.self.on_cta_click(e)
}, Icegram_Message_Type.prototype.on_resize = function (e) {}, Icegram_Message_Type.prototype.on_cta_click = function (e) {
    e.data = e.data || {
        self: this
    }, e.data.self.track("clicked");
    var t = jQuery(e.target).closest(".icegram").find("form:visible").first();
    return jQuery(t).length && jQuery(t).find(".ig_form_required_field").length && "" !== jQuery(t).find(".ig_form_required_field").val() ? (e.preventDefault(), void e.data.self.hide()) : void(jQuery(t).length ? jQuery(t).submit(function (e) {
        jQuery(t).hasClass("ig_form_init_done") && e.preventDefault()
    }) : "string" == typeof e.data.self.data.link && "" != e.data.self.data.link ? window.location.href = e.data.self.data.link : e.data.self.data.hide !== !1 && e.data.self.hide())
}, Icegram_Message_Type.prototype.animate = function (e) {
    if ("undefined" != typeof this.data.animation) {
        var t = this.data.animation,
            i = this;
        "in" == e ? "function" == typeof this.animations[t + "_in"] ? this.animations[t + "_in"](i) : this.el.hasClass("ig_anim_" + t + "_in") || (this.el.removeClass("ig_anim_" + t + "_out"), setTimeout(function () {
            i.el.addClass("ig_anim_" + t + "_in")
        }, 1)) : "out" == e && ("function" == typeof this.animations[t + "_out"] ? this.animations[t + "_out"](i) : (this.el.removeClass("ig_anim_" + t + "_in"), setTimeout(function () {
            i.el.addClass("ig_anim_" + t + "_out")
        }, 1)))
    }
}, String.prototype.ucwords = function () {
    return this.toLowerCase().replace(/\b[a-z]/g, function (e) {
        return e.toUpperCase()
    })
}, Icegram.prototype.adjustFormContainerHeight = function (e) {
    var t = "";
    if (e.el.hasClass("ig_form_left") || e.el.hasClass("ig_form_right")) {
        t = e.el.hasClass("ig_form_left") ? "left" : "right";
        var i = e.el.find(".ig_data").outerHeight() > e.el.find(".ig_form_container.layout_" + t).outerHeight() ? e.el.find(".ig_data").outerHeight() : e.el.find(".ig_form_container.layout_" + t).outerHeight();
        e.el.find(".ig_form_container").outerHeight(i)
    }
}, Icegram.prototype.hexToRgb = function (e) {
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}, Icegram.prototype.rgbToHsl = function (e, t, i) {
    e /= 255, t /= 255, i /= 255;
    var a, r, o = Math.max(e, t, i),
        s = Math.min(e, t, i),
        n = (o + s) / 2;
    if (o == s) a = r = 0;
    else {
        var _ = o - s;
        switch (r = n > .5 ? _ / (2 - o - s) : _ / (o + s), o) {
        case e:
            a = (t - i) / _;
            break;
        case t:
            a = (i - e) / _ + 2;
            break;
        case i:
            a = (e - t) / _ + 4
        }
        n = Math.floor(100 * n), r = Math.floor(100 * r), a = Math.floor(60 * a), 0 > a && (a += 360)
    }
    return {
        h: a,
        s: r,
        l: n
    }
}, Icegram.prototype.hexToHsl = function (e) {
    var t = window.icegram.hexToRgb(e);
    return window.icegram.rgbToHsl(t.r, t.g, t.b)
}, "function" != typeof Object.create && ! function () {
    var e = function () {};
    Object.create = function (t) {
        if (arguments.length > 1) throw Error("Second argument not supported");
        if (null === t) throw Error("Cannot set a null [[Prototype]]");
        if ("object" != typeof t) throw TypeError("Argument must be an object");
        return e.prototype = t, new e
    }
}(), void 0 !== typeof jQuery.cookie && ! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function t(e) {
        return n.raw ? e : encodeURIComponent(e)
    }

    function i(e) {
        return n.raw ? e : decodeURIComponent(e)
    }

    function a(e) {
        return t(n.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(s, " ")), n.json ? JSON.parse(e) : e
        } catch (t) {}
    }

    function o(t, i) {
        var a = n.raw ? t : r(t);
        return e.isFunction(i) ? i(a) : a
    }
    var s = /\+/g,
        n = e.cookie = function (r, s, _) {
            if (void 0 !== s && !e.isFunction(s)) {
                if (_ = e.extend({}, n.defaults, _), "number" == typeof _.expires) {
                    var d = _.expires,
                        l = _.expires = new Date;
                    l.setTime(+l + 864e5 * d)
                }
                return document.cookie = [t(r), "=", a(s), _.expires ? "; expires=" + _.expires.toUTCString() : "", _.path ? "; path=" + _.path : "", _.domain ? "; domain=" + _.domain : "", _.secure ? "; secure" : ""].join("")
            }
            for (var c = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], g = 0, h = p.length; h > g; g++) {
                var m = p[g].split("="),
                    f = i(m.shift()),
                    u = m.join("=");
                if (r && r === f) {
                    c = o(u, s);
                    break
                }
                r || void 0 === (u = o(u)) || (c[f] = u)
            }
            return c
        };
    n.defaults = {}, e.removeCookie = function (t, i) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, i, {
            expires: -1
        })), !e.cookie(t))
    }
});