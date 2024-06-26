!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function() {
    "use strict";
    const N = 1e3
      , D = "transitionend"
      , j = t=>{
        let i = t.getAttribute("data-bs-target");
        if (!i || "#" === i) {
            let e = t.getAttribute("href");
            if (!e || !e.includes("#") && !e.startsWith("."))
                return null;
            e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]),
            i = e && "#" !== e ? e.trim() : null
        }
        return i
    }
      , H = e=>{
        e = j(e);
        return e && document.querySelector(e) ? e : null
    }
      , a = e=>{
        e = j(e);
        return e ? document.querySelector(e) : null
    }
      , B = e=>{
        e.dispatchEvent(new Event(D))
    }
      , r = e=>!(!e || "object" != typeof e) && void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType
      , s = e=>r(e) ? e.jquery ? e[0] : e : "string" == typeof e && 0 < e.length ? document.querySelector(e) : null
      , i = (s,n,a)=>{
        Object.keys(a).forEach(e=>{
            var t = a[e]
              , i = n[e]
              , i = i && r(i) ? "element" : null == (i = i) ? "" + i : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(t).test(i))
                throw new TypeError(s.toUpperCase() + `: Option "${e}" provided type "${i}" but expected type "${t}".`)
        }
        )
    }
      , q = e=>!(!r(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility")
      , o = e=>!e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")))
      , R = e=>{
        return document.documentElement.attachShadow ? "function" == typeof e.getRootNode ? (t = e.getRootNode())instanceof ShadowRoot ? t : null : e instanceof ShadowRoot ? e : e.parentNode ? R(e.parentNode) : null : null;
        var t
    }
      , W = ()=>{}
      , h = e=>{
        e.offsetHeight
    }
      , F = ()=>{
        var e = window["jQuery"];
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
    }
      , Y = []
      , n = ()=>"rtl" === document.documentElement.dir;
    var e = s=>{
        var e;
        e = ()=>{
            const e = F();
            if (e) {
                const t = s.NAME
                  , i = e.fn[t];
                e.fn[t] = s.jQueryInterface,
                e.fn[t].Constructor = s,
                e.fn[t].noConflict = ()=>(e.fn[t] = i,
                s.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (Y.length || document.addEventListener("DOMContentLoaded", ()=>{
            Y.forEach(e=>e())
        }
        ),
        Y.push(e)) : e()
    }
    ;
    const l = e=>{
        "function" == typeof e && e()
    }
      , V = (i,s,e=!0)=>{
        if (e) {
            e = (e=>{
                if (!e)
                    return 0;
                let {transitionDuration: t, transitionDelay: i} = window.getComputedStyle(e);
                var e = Number.parseFloat(t)
                  , s = Number.parseFloat(i);
                return e || s ? (t = t.split(",")[0],
                i = i.split(",")[0],
                (Number.parseFloat(t) + Number.parseFloat(i)) * N) : 0
            }
            )(s) + 5;
            let t = !1;
            const n = ({target: e})=>{
                e === s && (t = !0,
                s.removeEventListener(D, n),
                l(i))
            }
            ;
            s.addEventListener(D, n),
            setTimeout(()=>{
                t || B(s)
            }
            , e)
        } else
            l(i)
    }
      , X = (e,t,i,s)=>{
        let n = e.indexOf(t);
        if (-1 === n)
            return e[!i && s ? e.length - 1 : 0];
        t = e.length;
        return n += i ? 1 : -1,
        s && (n = (n + t) % t),
        e[Math.max(0, Math.min(n, t - 1))]
    }
      , G = /[^.]*(?=\..*)\.|.*/
      , U = /\..*/
      , Q = /::\d+$/
      , K = {};
    let J = 1;
    const Z = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , ee = /^(mouseenter|mouseleave)/i
      , te = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function ie(e, t) {
        return t && t + "::" + J++ || e.uidEvent || J++
    }
    function se(e) {
        var t = ie(e);
        return e.uidEvent = t,
        K[t] = K[t] || {},
        K[t]
    }
    function ne(i, s, n=null) {
        var a = Object.keys(i);
        for (let e = 0, t = a.length; e < t; e++) {
            var r = i[a[e]];
            if (r.originalHandler === s && r.delegationSelector === n)
                return r
        }
        return null
    }
    function ae(e, t, i) {
        var s = "string" == typeof t
          , i = s ? i : t;
        let n = le(e);
        t = te.has(n);
        return [s, i, n = t ? n : e]
    }
    function re(e, t, i, s, n) {
        if ("string" == typeof t && e) {
            i || (i = s,
            s = null),
            ee.test(t) && (a = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ,
            s ? s = a(s) : i = a(i));
            var [a,r,o] = ae(t, i, s);
            const p = se(e)
              , m = p[o] || (p[o] = {})
              , f = ne(m, r, a ? i : null);
            if (f)
                f.oneOff = f.oneOff && n;
            else {
                var l, c, d, h, u, t = ie(r, t.replace(G, ""));
                const g = a ? (d = e,
                h = i,
                u = s,
                function i(s) {
                    var n = d.querySelectorAll(h);
                    for (let t = s["target"]; t && t !== this; t = t.parentNode)
                        for (let e = n.length; e--; )
                            if (n[e] === t)
                                return s.delegateTarget = t,
                                i.oneOff && v.off(d, s.type, h, u),
                                u.apply(t, [s]);
                    return null
                }
                ) : (l = e,
                c = i,
                function e(t) {
                    return t.delegateTarget = l,
                    e.oneOff && v.off(l, t.type, c),
                    c.apply(l, [t])
                }
                );
                g.delegationSelector = a ? i : null,
                g.originalHandler = r,
                g.oneOff = n,
                g.uidEvent = t,
                m[t] = g,
                e.addEventListener(o, g, a)
            }
        }
    }
    function oe(e, t, i, s, n) {
        s = ne(t[i], s, n);
        s && (e.removeEventListener(i, s, Boolean(n)),
        delete t[i][s.uidEvent])
    }
    function le(e) {
        return e = e.replace(U, ""),
        Z[e] || e
    }
    const v = {
        on(e, t, i, s) {
            re(e, t, i, s, !1)
        },
        one(e, t, i, s) {
            re(e, t, i, s, !0)
        },
        off(r, o, e, t) {
            if ("string" == typeof o && r) {
                const [i,s,n] = ae(o, e, t)
                  , a = n !== o
                  , l = se(r);
                t = o.startsWith(".");
                if (void 0 !== s)
                    return l && l[n] ? void oe(r, l, n, s, i ? e : null) : void 0;
                t && Object.keys(l).forEach(e=>{
                    {
                        var t = r
                          , i = l
                          , s = e
                          , n = o.slice(1);
                        const a = i[s] || {};
                        return void Object.keys(a).forEach(e=>{
                            e.includes(n) && (e = a[e],
                            oe(t, i, s, e.originalHandler, e.delegationSelector))
                        }
                        )
                    }
                }
                );
                const c = l[n] || {};
                Object.keys(c).forEach(e=>{
                    var t = e.replace(Q, "");
                    a && !o.includes(t) || (t = c[e],
                    oe(r, l, n, t.originalHandler, t.delegationSelector))
                }
                )
            }
        },
        trigger(e, t, i) {
            if ("string" != typeof t || !e)
                return null;
            const s = F();
            var n = le(t)
              , a = t !== n
              , r = te.has(n);
            let o, l = !0, c = !0, d = !1, h = null;
            return a && s && (o = s.Event(t, i),
            s(e).trigger(o),
            l = !o.isPropagationStopped(),
            c = !o.isImmediatePropagationStopped(),
            d = o.isDefaultPrevented()),
            r ? (h = document.createEvent("HTMLEvents")).initEvent(n, l, !0) : h = new CustomEvent(t,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== i && Object.keys(i).forEach(e=>{
                Object.defineProperty(h, e, {
                    get() {
                        return i[e]
                    }
                })
            }
            ),
            d && h.preventDefault(),
            c && e.dispatchEvent(h),
            h.defaultPrevented && void 0 !== o && o.preventDefault(),
            h
        }
    }
      , c = new Map
      , ce = {
        set(e, t, i) {
            c.has(e) || c.set(e, new Map);
            const s = c.get(e);
            s.has(t) || 0 === s.size ? s.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get(e, t) {
            return c.has(e) && c.get(e).get(t) || null
        },
        remove(e, t) {
            if (c.has(e)) {
                const i = c.get(e);
                i.delete(t),
                0 === i.size && c.delete(e)
            }
        }
    };
    class t {
        constructor(e) {
            (e = s(e)) && (this._element = e,
            ce.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            ce.remove(this._element, this.constructor.DATA_KEY),
            v.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach(e=>{
                this[e] = null
            }
            )
        }
        _queueCallback(e, t, i=!0) {
            V(e, t, i)
        }
        static getInstance(e) {
            return ce.get(s(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t={}) {
            return this.getInstance(e) || new this(e,"object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    var de = (i,s="hide")=>{
        var e = "click.dismiss" + i.EVENT_KEY;
        const n = i.NAME;
        v.on(document, e, `[data-bs-dismiss="${n}"]`, function(e) {
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            !o(this)) {
                e = a(this) || this.closest("." + n);
                const t = i.getOrCreateInstance(e);
                t[s]()
            }
        })
    }
    ;
    class he extends t {
        static get NAME() {
            return "alert"
        }
        close() {
            var e;
            v.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"),
            e = this._element.classList.contains("fade"),
            this._queueCallback(()=>this._destroyElement(), this._element, e))
        }
        _destroyElement() {
            this._element.remove(),
            v.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = he.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    de(he, "close"),
    e(he);
    const ue = '[data-bs-toggle="button"]';
    class pe extends t {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = pe.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }
    function me(e) {
        return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
    }
    function fe(e) {
        return e.replace(/[A-Z]/g, e=>"-" + e.toLowerCase())
    }
    v.on(document, "click.bs.button.data-api", ue, e=>{
        e.preventDefault();
        e = e.target.closest(ue);
        const t = pe.getOrCreateInstance(e);
        t.toggle()
    }
    ),
    e(pe);
    const d = {
        setDataAttribute(e, t, i) {
            e.setAttribute("data-bs-" + fe(t), i)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute("data-bs-" + fe(t))
        },
        getDataAttributes(i) {
            if (!i)
                return {};
            const s = {};
            return Object.keys(i.dataset).filter(e=>e.startsWith("bs")).forEach(e=>{
                let t = e.replace(/^bs/, "");
                t = t.charAt(0).toLowerCase() + t.slice(1, t.length),
                s[t] = me(i.dataset[e])
            }
            ),
            s
        },
        getDataAttribute(e, t) {
            return me(e.getAttribute("data-bs-" + fe(t)))
        },
        offset(e) {
            e = e.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position(e) {
            return {
                top: e.offsetTop,
                left: e.offsetLeft
            }
        }
    }
      , u = {
        find(e, t=document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, e))
        },
        findOne(e, t=document.documentElement) {
            return Element.prototype.querySelector.call(t, e)
        },
        children(e, t) {
            return [].concat(...e.children).filter(e=>e.matches(t))
        },
        parents(e, t) {
            const i = [];
            let s = e.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
                s.matches(t) && i.push(s),
                s = s.parentNode;
            return i
        },
        prev(e, t) {
            let i = e.previousElementSibling;
            for (; i; ) {
                if (i.matches(t))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let i = e.nextElementSibling;
            for (; i; ) {
                if (i.matches(t))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>e + ':not([tabindex^="-"])').join(", ");
            return this.find(t, e).filter(e=>!o(e) && q(e))
        }
    }
      , ge = "carousel";
    var ve = ".bs.carousel";
    const ye = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , be = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , p = "next"
      , m = "prev"
      , f = "left"
      , we = "right"
      , Ee = {
        ArrowLeft: we,
        ArrowRight: f
    }
      , Te = "slid" + ve;
    const g = "active"
      , xe = ".active.carousel-item";
    class y extends t {
        constructor(e, t) {
            super(e),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._indicatorsElement = u.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return ye
        }
        static get NAME() {
            return ge
        }
        next() {
            this._slide(p)
        }
        nextWhenVisible() {
            !document.hidden && q(this._element) && this.next()
        }
        prev() {
            this._slide(m)
        }
        pause(e) {
            e || (this._isPaused = !0),
            u.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (B(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
            this._activeElement = u.findOne(xe, this._element);
            var t = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    v.one(this._element, Te, ()=>this.to(e));
                else {
                    if (t === e)
                        return this.pause(),
                        void this.cycle();
                    t = t < e ? p : m;
                    this._slide(t, this._items[e])
                }
        }
        _getConfig(e) {
            return e = {
                ...ye,
                ...d.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            },
            i(ge, e, be),
            e
        }
        _handleSwipe() {
            var e = Math.abs(this.touchDeltaX);
            e <= 40 || (e = e / this.touchDeltaX,
            this.touchDeltaX = 0,
            e && this._slide(0 < e ? we : f))
        }
        _addEventListeners() {
            this._config.keyboard && v.on(this._element, "keydown.bs.carousel", e=>this._keydown(e)),
            "hover" === this._config.pause && (v.on(this._element, "mouseenter.bs.carousel", e=>this.pause(e)),
            v.on(this._element, "mouseleave.bs.carousel", e=>this.cycle(e))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = e=>this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType)
              , i = e=>{
                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
            }
              , s = e=>{
                this.touchDeltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this.touchStartX
            }
              , n = e=>{
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(e=>this.cycle(e), 500 + this._config.interval))
            }
            ;
            u.find(".carousel-item img", this._element).forEach(e=>{
                v.on(e, "dragstart.bs.carousel", e=>e.preventDefault())
            }
            ),
            this._pointerEvent ? (v.on(this._element, "pointerdown.bs.carousel", e=>i(e)),
            v.on(this._element, "pointerup.bs.carousel", e=>n(e)),
            this._element.classList.add("pointer-event")) : (v.on(this._element, "touchstart.bs.carousel", e=>i(e)),
            v.on(this._element, "touchmove.bs.carousel", e=>s(e)),
            v.on(this._element, "touchend.bs.carousel", e=>n(e)))
        }
        _keydown(e) {
            var t;
            /input|textarea/i.test(e.target.tagName) || (t = Ee[e.key]) && (e.preventDefault(),
            this._slide(t))
        }
        _getItemIndex(e) {
            return this._items = e && e.parentNode ? u.find(".carousel-item", e.parentNode) : [],
            this._items.indexOf(e)
        }
        _getItemByOrder(e, t) {
            e = e === p;
            return X(this._items, t, e, this._config.wrap)
        }
        _triggerSlideEvent(e, t) {
            var i = this._getItemIndex(e)
              , s = this._getItemIndex(u.findOne(xe, this._element));
            return v.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: s,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = u.findOne(".active", this._indicatorsElement)
                  , i = (e.classList.remove(g),
                e.removeAttribute("aria-current"),
                u.find("[data-bs-target]", this._indicatorsElement));
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(g),
                        i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || u.findOne(xe, this._element);
            var t;
            e && ((t = Number.parseInt(e.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }
        _slide(e, t) {
            e = this._directionToOrder(e);
            const i = u.findOne(xe, this._element)
              , s = this._getItemIndex(i)
              , n = t || this._getItemByOrder(e, i)
              , a = this._getItemIndex(n);
            var t = Boolean(this._interval)
              , r = e === p;
            const o = r ? "carousel-item-start" : "carousel-item-end"
              , l = r ? "carousel-item-next" : "carousel-item-prev"
              , c = this._orderToDirection(e);
            if (n && n.classList.contains(g))
                this._isSliding = !1;
            else if (!this._isSliding) {
                r = this._triggerSlideEvent(n, c);
                if (!r.defaultPrevented && i && n) {
                    this._isSliding = !0,
                    t && this.pause(),
                    this._setActiveIndicatorElement(n),
                    this._activeElement = n;
                    const d = ()=>{
                        v.trigger(this._element, Te, {
                            relatedTarget: n,
                            direction: c,
                            from: s,
                            to: a
                        })
                    }
                    ;
                    this._element.classList.contains("slide") ? (n.classList.add(l),
                    h(n),
                    i.classList.add(o),
                    n.classList.add(o),
                    this._queueCallback(()=>{
                        n.classList.remove(o, l),
                        n.classList.add(g),
                        i.classList.remove(g, l, o),
                        this._isSliding = !1,
                        setTimeout(d, 0)
                    }
                    , i, !0)) : (i.classList.remove(g),
                    n.classList.add(g),
                    this._isSliding = !1,
                    d()),
                    t && this.cycle()
                }
            }
        }
        _directionToOrder(e) {
            return [we, f].includes(e) ? n() ? e === f ? m : p : e === f ? p : m : e
        }
        _orderToDirection(e) {
            return [p, m].includes(e) ? n() ? e === m ? f : we : e === m ? we : f : e
        }
        static carouselInterface(e, t) {
            const i = y.getOrCreateInstance(e, t);
            let s = i["_config"];
            "object" == typeof t && (s = {
                ...s,
                ...t
            });
            e = "string" == typeof t ? t : s.slide;
            if ("number" == typeof t)
                i.to(t);
            else if ("string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]()
            } else
                s.interval && s.ride && (i.pause(),
                i.cycle())
        }
        static jQueryInterface(e) {
            return this.each(function() {
                y.carouselInterface(this, e)
            })
        }
        static dataApiClickHandler(e) {
            const t = a(this);
            if (t && t.classList.contains("carousel")) {
                const s = {
                    ...d.getDataAttributes(t),
                    ...d.getDataAttributes(this)
                };
                var i = this.getAttribute("data-bs-slide-to");
                i && (s.interval = !1),
                y.carouselInterface(t, s),
                i && y.getInstance(t).to(i),
                e.preventDefault()
            }
        }
    }
    v.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", y.dataApiClickHandler),
    v.on(window, "load.bs.carousel.data-api", ()=>{
        var i = u.find('[data-bs-ride="carousel"]');
        for (let e = 0, t = i.length; e < t; e++)
            y.carouselInterface(i[e], y.getInstance(i[e]))
    }
    ),
    e(y);
    const _e = "collapse"
      , Se = "bs.collapse";
    Se;
    const Ce = {
        toggle: !0,
        parent: null
    }
      , ke = {
        toggle: "boolean",
        parent: "(null|element)"
    };
    const Ae = "show"
      , Me = "collapse"
      , Ie = "collapsing"
      , Le = "collapsed"
      , Pe = `:scope .${Me} .` + Me
      , $e = '[data-bs-toggle="collapse"]';
    class Oe extends t {
        constructor(e, t) {
            super(e),
            this._isTransitioning = !1,
            this._config = this._getConfig(t),
            this._triggerArray = [];
            var i = u.find($e);
            for (let e = 0, t = i.length; e < t; e++) {
                var s = i[e]
                  , n = H(s)
                  , a = u.find(n).filter(e=>e === this._element);
                null !== n && a.length && (this._selector = n,
                this._triggerArray.push(s))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return Ce
        }
        static get NAME() {
            return _e
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let e = [], t;
                if (this._config.parent) {
                    const n = u.find(Pe, this._config.parent);
                    e = u.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(e=>!n.includes(e))
                }
                const s = u.findOne(this._selector);
                if (e.length) {
                    var i = e.find(e=>s !== e);
                    if ((t = i ? Oe.getInstance(i) : null) && t._isTransitioning)
                        return
                }
                i = v.trigger(this._element, "show.bs.collapse");
                if (!i.defaultPrevented) {
                    e.forEach(e=>{
                        s !== e && Oe.getOrCreateInstance(e, {
                            toggle: !1
                        }).hide(),
                        t || ce.set(e, Se, null)
                    }
                    );
                    const a = this._getDimension();
                    this._element.classList.remove(Me),
                    this._element.classList.add(Ie),
                    this._element.style[a] = 0,
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    this._isTransitioning = !0;
                    i = "scroll" + (a[0].toUpperCase() + a.slice(1));
                    this._queueCallback(()=>{
                        this._isTransitioning = !1,
                        this._element.classList.remove(Ie),
                        this._element.classList.add(Me, Ae),
                        this._element.style[a] = "",
                        v.trigger(this._element, "shown.bs.collapse")
                    }
                    , this._element, !0),
                    this._element.style[a] = this._element[i] + "px"
                }
            }
        }
        hide() {
            if (!this._isTransitioning && this._isShown()) {
                var e = v.trigger(this._element, "hide.bs.collapse");
                if (!e.defaultPrevented) {
                    var e = this._getDimension()
                      , t = (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
                    h(this._element),
                    this._element.classList.add(Ie),
                    this._element.classList.remove(Me, Ae),
                    this._triggerArray.length);
                    for (let e = 0; e < t; e++) {
                        var i = this._triggerArray[e]
                          , s = a(i);
                        s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1)
                    }
                    this._isTransitioning = !0;
                    this._element.style[e] = "",
                    this._queueCallback(()=>{
                        this._isTransitioning = !1,
                        this._element.classList.remove(Ie),
                        this._element.classList.add(Me),
                        v.trigger(this._element, "hidden.bs.collapse")
                    }
                    , this._element, !0)
                }
            }
        }
        _isShown(e=this._element) {
            return e.classList.contains(Ae)
        }
        _getConfig(e) {
            return (e = {
                ...Ce,
                ...d.getDataAttributes(this._element),
                ...e
            }).toggle = Boolean(e.toggle),
            e.parent = s(e.parent),
            i(_e, e, ke),
            e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (this._config.parent) {
                const t = u.find(Pe, this._config.parent);
                u.find($e, this._config.parent).filter(e=>!t.includes(e)).forEach(e=>{
                    var t = a(e);
                    t && this._addAriaAndCollapsedClass([e], this._isShown(t))
                }
                )
            }
        }
        _addAriaAndCollapsedClass(e, t) {
            e.length && e.forEach(e=>{
                t ? e.classList.remove(Le) : e.classList.add(Le),
                e.setAttribute("aria-expanded", t)
            }
            )
        }
        static jQueryInterface(i) {
            return this.each(function() {
                const e = {}
                  , t = ("string" == typeof i && /show|hide/.test(i) && (e.toggle = !1),
                Oe.getOrCreateInstance(this, e));
                if ("string" == typeof i) {
                    if (void 0 === t[i])
                        throw new TypeError(`No method named "${i}"`);
                    t[i]()
                }
            })
        }
    }
    v.on(document, "click.bs.collapse.data-api", $e, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        e = H(this);
        const t = u.find(e);
        t.forEach(e=>{
            Oe.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
        }
        )
    }),
    e(Oe);
    var k = "top"
      , A = "bottom"
      , M = "right"
      , I = "left"
      , ze = "auto"
      , Ne = [k, A, M, I]
      , L = "start"
      , De = "end"
      , je = "clippingParents"
      , He = "viewport"
      , Be = "popper"
      , qe = "reference"
      , Re = Ne.reduce(function(e, t) {
        return e.concat([t + "-" + L, t + "-" + De])
    }, [])
      , We = [].concat(Ne, [ze]).reduce(function(e, t) {
        return e.concat([t, t + "-" + L, t + "-" + De])
    }, [])
      , ve = "beforeRead"
      , Fe = "afterRead"
      , Ye = "beforeMain"
      , Ve = "afterMain"
      , Xe = "beforeWrite"
      , Ge = "afterWrite"
      , Ue = [ve, "read", Fe, Ye, "main", Ve, Xe, "write", Ge];
    function b(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function w(e) {
        return null == e ? window : "[object Window]" !== e.toString() ? (t = e.ownerDocument) && t.defaultView || window : e;
        var t
    }
    function Qe(e) {
        return e instanceof w(e).Element || e instanceof Element
    }
    function E(e) {
        return e instanceof w(e).HTMLElement || e instanceof HTMLElement
    }
    function Ke(e) {
        if ("undefined" != typeof ShadowRoot)
            return e instanceof w(e).ShadowRoot || e instanceof ShadowRoot
    }
    var T = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var n = e.state;
            Object.keys(n.elements).forEach(function(e) {
                var t = n.styles[e] || {}
                  , i = n.attributes[e] || {}
                  , s = n.elements[e];
                E(s) && b(s) && (Object.assign(s.style, t),
                Object.keys(i).forEach(function(e) {
                    var t = i[e];
                    !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                }))
            })
        },
        effect: function(e) {
            var s = e.state
              , n = {
                popper: {
                    position: s.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(s.elements.popper.style, n.popper),
            s.styles = n,
            s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow),
            function() {
                Object.keys(s.elements).forEach(function(e) {
                    var t = s.elements[e]
                      , i = s.attributes[e] || {}
                      , e = Object.keys((s.styles.hasOwnProperty(e) ? s.styles : n)[e]).reduce(function(e, t) {
                        return e[t] = "",
                        e
                    }, {});
                    E(t) && b(t) && (Object.assign(t.style, e),
                    Object.keys(i).forEach(function(e) {
                        t.removeAttribute(e)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    function P(e) {
        return e.split("-")[0]
    }
    function Je(e) {
        e = e.getBoundingClientRect();
        return {
            width: +e.width,
            height: +e.height,
            top: +e.top,
            right: +e.right,
            bottom: +e.bottom,
            left: +e.left,
            x: +e.left,
            y: +e.top
        }
    }
    function Ze(e) {
        var t = Je(e)
          , i = e.offsetWidth
          , s = e.offsetHeight;
        return Math.abs(t.width - i) <= 1 && (i = t.width),
        Math.abs(t.height - s) <= 1 && (s = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: i,
            height: s
        }
    }
    function et(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (i && Ke(i)) {
            var s = t;
            do {
                if (s && e.isSameNode(s))
                    return !0
            } while (s = s.parentNode || s.host)
        }
        return !1
    }
    function x(e) {
        return w(e).getComputedStyle(e)
    }
    function _(e) {
        return ((Qe(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function tt(e) {
        return "html" === b(e) ? e : e.assignedSlot || e.parentNode || (Ke(e) ? e.host : null) || _(e)
    }
    function it(e) {
        return E(e) && "fixed" !== x(e).position ? e.offsetParent : null
    }
    function st(e) {
        for (var t, i = w(e), s = it(e); s && (t = s,
        0 <= ["table", "td", "th"].indexOf(b(t))) && "static" === x(s).position; )
            s = it(s);
        return (!s || "html" !== b(s) && ("body" !== b(s) || "static" !== x(s).position)) && (s || function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
              , i = -1 !== navigator.userAgent.indexOf("Trident");
            if (i && E(e) && "fixed" === x(e).position)
                return null;
            for (var s = tt(e); E(s) && ["html", "body"].indexOf(b(s)) < 0; ) {
                var n = x(s);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter)
                    return s;
                s = s.parentNode
            }
            return null
        }(e)) || i
    }
    function nt(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }
    var S = Math.max
      , at = Math.min
      , rt = Math.round;
    function ot(e, t, i) {
        return S(e, at(t, i))
    }
    function lt() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
    function ct(e) {
        return Object.assign({}, lt(), e)
    }
    function dt(i, e) {
        return e.reduce(function(e, t) {
            return e[t] = i,
            e
        }, {})
    }
    var C = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, i, s, n, a = e.state, r = e.name, e = e.options, o = a.elements.arrow, l = a.modifiersData.popperOffsets, c = nt(d = P(a.placement)), d = 0 <= [I, M].indexOf(d) ? "height" : "width";
            o && l && (e = e.padding,
            i = a,
            i = ct("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, i.rects, {
                placement: i.placement
            })) : e) ? e : dt(e, Ne)),
            e = Ze(o),
            n = "y" === c ? k : I,
            s = "y" === c ? A : M,
            t = a.rects.reference[d] + a.rects.reference[c] - l[c] - a.rects.popper[d],
            l = l[c] - a.rects.reference[c],
            o = (o = st(o)) ? "y" === c ? o.clientHeight || 0 : o.clientWidth || 0 : 0,
            n = i[n],
            i = o - e[d] - i[s],
            n = ot(n, s = o / 2 - e[d] / 2 + (t / 2 - l / 2), i),
            a.modifiersData[r] = ((o = {})[c] = n,
            o.centerOffset = n - s,
            o))
        },
        effect: function(e) {
            var t = e.state;
            null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) && ("string" != typeof e || (e = t.elements.popper.querySelector(e))) && et(t.elements.popper, e) && (t.elements.arrow = e)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function ht(e) {
        return e.split("-")[1]
    }
    var ut = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function pt(e) {
        var t, i, s, n = e.popper, a = e.popperRect, r = e.placement, o = e.variation, l = e.offsets, c = e.position, d = e.gpuAcceleration, h = e.adaptive, e = e.roundOffsets, u = !0 === e ? (u = (p = l).x,
        p = l.y,
        m = window.devicePixelRatio || 1,
        {
            x: rt(rt(u * m) / m) || 0,
            y: rt(rt(p * m) / m) || 0
        }) : "function" == typeof e ? e(l) : l, p = u.x, m = void 0 === p ? 0 : p, e = u.y, e = void 0 === e ? 0 : e, f = l.hasOwnProperty("x"), l = l.hasOwnProperty("y"), g = I, v = k, y = window, n = (h && (s = "clientHeight",
        i = "clientWidth",
        (t = st(n)) === w(n) && "static" !== x(t = _(n)).position && "absolute" === c && (s = "scrollHeight",
        i = "scrollWidth"),
        r !== k && (r !== I && r !== M || o !== De) || (v = A,
        e = (e - (t[s] - a.height)) * (d ? 1 : -1)),
        r !== I && (r !== k && r !== A || o !== De) || (g = M,
        m = (m - (t[i] - a.width)) * (d ? 1 : -1))),
        Object.assign({
            position: c
        }, h && ut));
        return d ? Object.assign({}, n, ((s = {})[v] = l ? "0" : "",
        s[g] = f ? "0" : "",
        s.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + e + "px)" : "translate3d(" + m + "px, " + e + "px, 0)",
        s)) : Object.assign({}, n, ((r = {})[v] = l ? e + "px" : "",
        r[g] = f ? m + "px" : "",
        r.transform = "",
        r))
    }
    var mt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , e = e.options
              , i = void 0 === (i = e.gpuAcceleration) || i
              , s = void 0 === (s = e.adaptive) || s
              , e = void 0 === (e = e.roundOffsets) || e
              , i = {
                placement: P(t.placement),
                variation: ht(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, pt(Object.assign({}, i, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: s,
                roundOffsets: e
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, pt(Object.assign({}, i, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: e
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    }
      , ft = {
        passive: !0
    };
    var gt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state
              , i = e.instance
              , s = (e = e.options).scroll
              , n = void 0 === s || s
              , a = void 0 === (s = e.resize) || s
              , r = w(t.elements.popper)
              , o = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return n && o.forEach(function(e) {
                e.addEventListener("scroll", i.update, ft)
            }),
            a && r.addEventListener("resize", i.update, ft),
            function() {
                n && o.forEach(function(e) {
                    e.removeEventListener("scroll", i.update, ft)
                }),
                a && r.removeEventListener("resize", i.update, ft)
            }
        },
        data: {}
    }
      , vt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function yt(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return vt[e]
        })
    }
    var bt = {
        start: "end",
        end: "start"
    };
    function wt(e) {
        return e.replace(/start|end/g, function(e) {
            return bt[e]
        })
    }
    function Et(e) {
        e = w(e);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Tt(e) {
        return Je(_(e)).left + Et(e).scrollLeft
    }
    function xt(e) {
        var e = x(e)
          , t = e.overflow
          , i = e.overflowX
          , e = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + e + i)
    }
    function _t(e, t) {
        void 0 === t && (t = []);
        var i = function e(t) {
            return 0 <= ["html", "body", "#document"].indexOf(b(t)) ? t.ownerDocument.body : E(t) && xt(t) ? t : e(tt(t))
        }(e)
          , e = i === (null == (e = e.ownerDocument) ? void 0 : e.body)
          , s = w(i)
          , s = e ? [s].concat(s.visualViewport || [], xt(i) ? i : []) : i
          , i = t.concat(s);
        return e ? i : i.concat(_t(tt(s)))
    }
    function St(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function Ct(e, t) {
        return t === He ? St((s = w(i = e),
        n = _(i),
        s = s.visualViewport,
        a = n.clientWidth,
        n = n.clientHeight,
        o = r = 0,
        s && (a = s.width,
        n = s.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft,
        o = s.offsetTop)),
        {
            width: a,
            height: n,
            x: r + Tt(i),
            y: o
        })) : E(t) ? ((a = Je(s = t)).top = a.top + s.clientTop,
        a.left = a.left + s.clientLeft,
        a.bottom = a.top + s.clientHeight,
        a.right = a.left + s.clientWidth,
        a.width = s.clientWidth,
        a.height = s.clientHeight,
        a.x = a.left,
        a.y = a.top,
        a) : St((n = _(e),
        r = _(n),
        i = Et(n),
        o = null == (o = n.ownerDocument) ? void 0 : o.body,
        t = S(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        e = S(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        n = -i.scrollLeft + Tt(n),
        i = -i.scrollTop,
        "rtl" === x(o || r).direction && (n += S(r.clientWidth, o ? o.clientWidth : 0) - t),
        {
            width: t,
            height: e,
            x: n,
            y: i
        }));
        var i, s, n, a, r, o
    }
    function kt(i, e, t) {
        var s, n = "clippingParents" === e ? (a = _t(tt(n = i)),
        Qe(s = 0 <= ["absolute", "fixed"].indexOf(x(n).position) && E(n) ? st(n) : n) ? a.filter(function(e) {
            return Qe(e) && et(e, s) && "body" !== b(e)
        }) : []) : [].concat(e), a = [].concat(n, [t]), e = a[0], t = a.reduce(function(e, t) {
            t = Ct(i, t);
            return e.top = S(t.top, e.top),
            e.right = at(t.right, e.right),
            e.bottom = at(t.bottom, e.bottom),
            e.left = S(t.left, e.left),
            e
        }, Ct(i, e));
        return t.width = t.right - t.left,
        t.height = t.bottom - t.top,
        t.x = t.left,
        t.y = t.top,
        t
    }
    function At(e) {
        var t, i = e.reference, s = e.element, e = e.placement, n = e ? P(e) : null, e = e ? ht(e) : null, a = i.x + i.width / 2 - s.width / 2, r = i.y + i.height / 2 - s.height / 2;
        switch (n) {
        case k:
            t = {
                x: a,
                y: i.y - s.height
            };
            break;
        case A:
            t = {
                x: a,
                y: i.y + i.height
            };
            break;
        case M:
            t = {
                x: i.x + i.width,
                y: r
            };
            break;
        case I:
            t = {
                x: i.x - s.width,
                y: r
            };
            break;
        default:
            t = {
                x: i.x,
                y: i.y
            }
        }
        var o = n ? nt(n) : null;
        if (null != o) {
            var l = "y" === o ? "height" : "width";
            switch (e) {
            case L:
                t[o] = t[o] - (i[l] / 2 - s[l] / 2);
                break;
            case De:
                t[o] = t[o] + (i[l] / 2 - s[l] / 2)
            }
        }
        return t
    }
    function Mt(e, t) {
        var s, t = t = void 0 === t ? {} : t, i = t.placement, i = void 0 === i ? e.placement : i, n = t.boundary, n = void 0 === n ? je : n, a = t.rootBoundary, a = void 0 === a ? He : a, r = t.elementContext, r = void 0 === r ? Be : r, o = t.altBoundary, o = void 0 !== o && o, t = t.padding, t = void 0 === t ? 0 : t, t = ct("number" != typeof t ? t : dt(t, Ne)), l = e.rects.popper, o = e.elements[o ? r === Be ? qe : Be : r], o = kt(Qe(o) ? o : o.contextElement || _(e.elements.popper), n, a), n = Je(e.elements.reference), a = At({
            reference: n,
            element: l,
            strategy: "absolute",
            placement: i
        }), l = St(Object.assign({}, l, a)), a = r === Be ? l : n, c = {
            top: o.top - a.top + t.top,
            bottom: a.bottom - o.bottom + t.bottom,
            left: o.left - a.left + t.left,
            right: a.right - o.right + t.right
        }, l = e.modifiersData.offset;
        return r === Be && l && (s = l[i],
        Object.keys(c).forEach(function(e) {
            var t = 0 <= [M, A].indexOf(e) ? 1 : -1
              , i = 0 <= [k, A].indexOf(e) ? "y" : "x";
            c[e] += s[i] * t
        })),
        c
    }
    var It = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var h = e.state
              , t = e.options
              , e = e.name;
            if (!h.modifiersData[e]._skip) {
                for (var i = t.mainAxis, s = void 0 === i || i, i = t.altAxis, n = void 0 === i || i, i = t.fallbackPlacements, u = t.padding, p = t.boundary, m = t.rootBoundary, a = t.altBoundary, r = t.flipVariations, f = void 0 === r || r, g = t.allowedAutoPlacements, r = h.options.placement, t = P(r), i = i || (t === r || !f ? [yt(r)] : function(e) {
                    if (P(e) === ze)
                        return [];
                    var t = yt(e);
                    return [wt(e), t, wt(t)]
                }(r)), o = [r].concat(i).reduce(function(e, t) {
                    return e.concat(P(t) === ze ? (i = h,
                    s = (e = e = void 0 === (e = {
                        placement: t,
                        boundary: p,
                        rootBoundary: m,
                        padding: u,
                        flipVariations: f,
                        allowedAutoPlacements: g
                    }) ? {} : e).placement,
                    n = e.boundary,
                    a = e.rootBoundary,
                    r = e.padding,
                    o = e.flipVariations,
                    l = void 0 === (e = e.allowedAutoPlacements) ? We : e,
                    c = ht(s),
                    e = c ? o ? Re : Re.filter(function(e) {
                        return ht(e) === c
                    }) : Ne,
                    d = (s = 0 === (s = e.filter(function(e) {
                        return 0 <= l.indexOf(e)
                    })).length ? e : s).reduce(function(e, t) {
                        return e[t] = Mt(i, {
                            placement: t,
                            boundary: n,
                            rootBoundary: a,
                            padding: r
                        })[P(t)],
                        e
                    }, {}),
                    Object.keys(d).sort(function(e, t) {
                        return d[e] - d[t]
                    })) : t);
                    var i, s, n, a, r, o, l, c, d
                }, []), l = h.rects.reference, c = h.rects.popper, d = new Map, v = !0, y = o[0], b = 0; b < o.length; b++) {
                    var w = o[b]
                      , E = P(w)
                      , T = ht(w) === L
                      , x = 0 <= [k, A].indexOf(E)
                      , _ = x ? "width" : "height"
                      , S = Mt(h, {
                        placement: w,
                        boundary: p,
                        rootBoundary: m,
                        altBoundary: a,
                        padding: u
                    })
                      , x = x ? T ? M : I : T ? A : k
                      , T = (l[_] > c[_] && (x = yt(x)),
                    yt(x))
                      , _ = [];
                    if (s && _.push(S[E] <= 0),
                    n && _.push(S[x] <= 0, S[T] <= 0),
                    _.every(function(e) {
                        return e
                    })) {
                        y = w,
                        v = !1;
                        break
                    }
                    d.set(w, _)
                }
                if (v)
                    for (var C = f ? 3 : 1; 0 < C; C--)
                        if ("break" === function(t) {
                            var e = o.find(function(e) {
                                e = d.get(e);
                                if (e)
                                    return e.slice(0, t).every(function(e) {
                                        return e
                                    })
                            });
                            if (e)
                                return y = e,
                                "break"
                        }(C))
                            break;
                h.placement !== y && (h.modifiersData[e]._skip = !0,
                h.placement = y,
                h.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Lt(e, t, i) {
        return {
            top: e.top - t.height - (i = void 0 === i ? {
                x: 0,
                y: 0
            } : i).y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x
        }
    }
    function Pt(t) {
        return [k, M, A, I].some(function(e) {
            return 0 <= t[e]
        })
    }
    var $t = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state
              , e = e.name
              , i = t.rects.reference
              , s = t.rects.popper
              , n = t.modifiersData.preventOverflow
              , a = Mt(t, {
                elementContext: "reference"
            })
              , r = Mt(t, {
                altBoundary: !0
            })
              , a = Lt(a, i)
              , i = Lt(r, s, n)
              , r = Pt(a)
              , s = Pt(i);
            t.modifiersData[e] = {
                referenceClippingOffsets: a,
                popperEscapeOffsets: i,
                isReferenceHidden: r,
                hasPopperEscaped: s
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": s
            })
        }
    };
    var Ot = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var r = e.state
              , t = e.options
              , e = e.name
              , o = void 0 === (t = t.offset) ? [0, 0] : t
              , t = We.reduce(function(e, t) {
                var i, s, n, a;
                return e[t] = (t = t,
                i = r.rects,
                s = o,
                n = P(t),
                a = 0 <= [I, k].indexOf(n) ? -1 : 1,
                t = (i = "function" == typeof s ? s(Object.assign({}, i, {
                    placement: t
                })) : s)[0] || 0,
                s = (i[1] || 0) * a,
                0 <= [I, M].indexOf(n) ? {
                    x: s,
                    y: t
                } : {
                    x: t,
                    y: s
                }),
                e
            }, {})
              , i = (s = t[r.placement]).x
              , s = s.y;
            null != r.modifiersData.popperOffsets && (r.modifiersData.popperOffsets.x += i,
            r.modifiersData.popperOffsets.y += s),
            r.modifiersData[e] = t
        }
    };
    var zt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state
              , e = e.name;
            t.modifiersData[e] = At({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    };
    var Nt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, i, s, n, a, r, o, l, c, d = e.state, h = e.options, e = e.name, u = void 0 === (u = h.mainAxis) || u, p = void 0 !== (p = h.altAxis) && p, m = h.boundary, f = h.rootBoundary, g = h.altBoundary, v = h.padding, y = void 0 === (y = h.tether) || y, h = void 0 === (h = h.tetherOffset) ? 0 : h, m = Mt(d, {
                boundary: m,
                rootBoundary: f,
                padding: v,
                altBoundary: g
            }), f = P(d.placement), g = !(v = ht(d.placement)), b = "x" === (f = nt(f)) ? "y" : "x", w = d.modifiersData.popperOffsets, E = d.rects.reference, T = d.rects.popper, h = "function" == typeof h ? h(Object.assign({}, d.rects, {
                placement: d.placement
            })) : h, x = {
                x: 0,
                y: 0
            };
            w && ((u || p) && (a = "y" === f ? "height" : "width",
            t = w[f],
            i = w[f] + m[c = "y" === f ? k : I],
            s = w[f] - m[o = "y" === f ? A : M],
            r = y ? -T[a] / 2 : 0,
            n = (v === L ? E : T)[a],
            v = v === L ? -T[a] : -E[a],
            T = d.elements.arrow,
            T = y && T ? Ze(T) : {
                width: 0,
                height: 0
            },
            c = (l = d.modifiersData["arrow#persistent"] ? d.modifiersData["arrow#persistent"].padding : lt())[c],
            l = l[o],
            o = ot(0, E[a], T[a]),
            T = g ? E[a] / 2 - r - o - c - h : n - o - c - h,
            n = g ? -E[a] / 2 + r + o + l + h : v + o + l + h,
            g = (c = d.elements.arrow && st(d.elements.arrow)) ? "y" === f ? c.clientTop || 0 : c.clientLeft || 0 : 0,
            E = d.modifiersData.offset ? d.modifiersData.offset[d.placement][f] : 0,
            a = w[f] + T - E - g,
            r = w[f] + n - E,
            u && (v = ot(y ? at(i, a) : i, t, y ? S(s, r) : s),
            w[f] = v,
            x[f] = v - t),
            p && (l = (o = w[b]) + m["x" === f ? k : I],
            h = o - m["x" === f ? A : M],
            c = ot(y ? at(l, a) : l, o, y ? S(h, r) : h),
            w[b] = c,
            x[b] = c - o)),
            d.modifiersData[e] = x)
        },
        requiresIfExists: ["offset"]
    };
    function Dt(e, t, i) {
        void 0 === i && (i = !1);
        var s = E(t)
          , n = (E(t) && ((n = (a = t).getBoundingClientRect()).width,
        a.offsetWidth,
        n.height,
        a.offsetHeight),
        _(t))
          , a = Je(e)
          , e = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , r = {
            x: 0,
            y: 0
        };
        return !s && i || ("body" === b(t) && !xt(n) || (e = (s = t) !== w(s) && E(s) ? {
            scrollLeft: s.scrollLeft,
            scrollTop: s.scrollTop
        } : Et(s)),
        E(t) ? ((r = Je(t)).x += t.clientLeft,
        r.y += t.clientTop) : n && (r.x = Tt(n))),
        {
            x: a.left + e.scrollLeft - r.x,
            y: a.top + e.scrollTop - r.y,
            width: a.width,
            height: a.height
        }
    }
    function jt(e) {
        var i = new Map
          , s = new Set
          , n = [];
        return e.forEach(function(e) {
            i.set(e.name, e)
        }),
        e.forEach(function(e) {
            s.has(e.name) || !function t(e) {
                s.add(e.name),
                [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                    s.has(e) || (e = i.get(e)) && t(e)
                }),
                n.push(e)
            }(e)
        }),
        n
    }
    var Ht = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Bt() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }
    function qt(e) {
        var e = e = void 0 === e ? {} : e
          , t = e.defaultModifiers
          , h = void 0 === t ? [] : t
          , t = e.defaultOptions
          , u = void 0 === t ? Ht : t;
        return function(s, n, t) {
            void 0 === t && (t = u);
            var i, a, r = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Ht, u),
                modifiersData: {},
                elements: {
                    reference: s,
                    popper: n
                },
                attributes: {},
                styles: {}
            }, o = [], l = !1, c = {
                state: r,
                setOptions: function(e) {
                    var i, t, e = "function" == typeof e ? e(r.options) : e, e = (d(),
                    r.options = Object.assign({}, u, r.options, e),
                    r.scrollParents = {
                        reference: Qe(s) ? _t(s) : s.contextElement ? _t(s.contextElement) : [],
                        popper: _t(n)
                    },
                    e = [].concat(h, r.options.modifiers),
                    t = e.reduce(function(e, t) {
                        var i = e[t.name];
                        return e[t.name] = i ? Object.assign({}, i, t, {
                            options: Object.assign({}, i.options, t.options),
                            data: Object.assign({}, i.data, t.data)
                        }) : t,
                        e
                    }, {}),
                    e = Object.keys(t).map(function(e) {
                        return t[e]
                    }),
                    i = jt(e),
                    Ue.reduce(function(e, t) {
                        return e.concat(i.filter(function(e) {
                            return e.phase === t
                        }))
                    }, []));
                    return r.orderedModifiers = e.filter(function(e) {
                        return e.enabled
                    }),
                    r.orderedModifiers.forEach(function(e) {
                        var t = e.name
                          , i = e.options
                          , e = e.effect;
                        "function" == typeof e && (e = e({
                            state: r,
                            name: t,
                            instance: c,
                            options: void 0 === i ? {} : i
                        }),
                        o.push(e || function() {}
                        ))
                    }),
                    c.update()
                },
                forceUpdate: function() {
                    if (!l) {
                        var e = r.elements
                          , t = e.reference
                          , e = e.popper;
                        if (Bt(t, e)) {
                            r.rects = {
                                reference: Dt(t, st(e), "fixed" === r.options.strategy),
                                popper: Ze(e)
                            },
                            r.reset = !1,
                            r.placement = r.options.placement,
                            r.orderedModifiers.forEach(function(e) {
                                return r.modifiersData[e.name] = Object.assign({}, e.data)
                            });
                            for (var i, s, n, a = 0; a < r.orderedModifiers.length; a++)
                                !0 === r.reset ? (r.reset = !1,
                                a = -1) : (i = (n = r.orderedModifiers[a]).fn,
                                s = n.options,
                                n = n.name,
                                "function" == typeof i && (r = i({
                                    state: r,
                                    options: void 0 === s ? {} : s,
                                    name: n,
                                    instance: c
                                }) || r))
                        }
                    }
                },
                update: (i = function() {
                    return new Promise(function(e) {
                        c.forceUpdate(),
                        e(r)
                    }
                    )
                }
                ,
                function() {
                    return a = a || new Promise(function(e) {
                        Promise.resolve().then(function() {
                            a = void 0,
                            e(i())
                        })
                    }
                    )
                }
                ),
                destroy: function() {
                    d(),
                    l = !0
                }
            };
            return Bt(s, n) && c.setOptions(t).then(function(e) {
                !l && t.onFirstUpdate && t.onFirstUpdate(e)
            }),
            c;
            function d() {
                o.forEach(function(e) {
                    return e()
                }),
                o = []
            }
        }
    }
    var Rt = qt({
        defaultModifiers: [gt, zt, mt, T, Ot, It, Nt, C, $t]
    });
    const Wt = Object.freeze({
        __proto__: null,
        popperGenerator: qt,
        detectOverflow: Mt,
        createPopperBase: qt(),
        createPopper: Rt,
        createPopperLite: qt({
            defaultModifiers: [gt, zt, mt, T]
        }),
        top: k,
        bottom: A,
        right: M,
        left: I,
        auto: ze,
        basePlacements: Ne,
        start: L,
        end: De,
        clippingParents: je,
        viewport: He,
        popper: Be,
        reference: qe,
        variationPlacements: Re,
        placements: We,
        beforeRead: ve,
        read: "read",
        afterRead: Fe,
        beforeMain: Ye,
        main: "main",
        afterMain: Ve,
        beforeWrite: Xe,
        write: "write",
        afterWrite: Ge,
        modifierPhases: Ue,
        applyStyles: T,
        arrow: C,
        computeStyles: mt,
        eventListeners: gt,
        flip: It,
        hide: $t,
        offset: Ot,
        popperOffsets: zt,
        preventOverflow: Nt
    })
      , Ft = "dropdown";
    ve = ".bs.dropdown",
    Fe = ".data-api";
    const Yt = "Escape"
      , Vt = "ArrowUp"
      , Xt = "ArrowDown"
      , Gt = new RegExp(Vt + `|${Xt}|` + Yt);
    Ye = "click" + ve + Fe,
    Ve = "keydown" + ve + Fe;
    const Ut = "show"
      , Qt = '[data-bs-toggle="dropdown"]'
      , Kt = ".dropdown-menu"
      , Jt = n() ? "top-end" : "top-start"
      , Zt = n() ? "top-start" : "top-end"
      , ei = n() ? "bottom-end" : "bottom-start"
      , ti = n() ? "bottom-start" : "bottom-end"
      , ii = n() ? "left-start" : "right-start"
      , si = n() ? "right-start" : "left-start"
      , ni = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , ai = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class $ extends t {
        constructor(e, t) {
            super(e),
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return ni
        }
        static get DefaultType() {
            return ai
        }
        static get NAME() {
            return Ft
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!o(this._element) && !this._isShown(this._menu)) {
                var e = {
                    relatedTarget: this._element
                }
                  , t = v.trigger(this._element, "show.bs.dropdown", e);
                if (!t.defaultPrevented) {
                    const i = $.getParentFromElement(this._element);
                    this._inNavbar ? d.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i),
                    "ontouchstart"in document.documentElement && !i.closest(".navbar-nav") && [].concat(...document.body.children).forEach(e=>v.on(e, "mouseover", W)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(Ut),
                    this._element.classList.add(Ut),
                    v.trigger(this._element, "shown.bs.dropdown", e)
                }
            }
        }
        hide() {
            var e;
            !o(this._element) && this._isShown(this._menu) && (e = {
                relatedTarget: this._element
            },
            this._completeHide(e))
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(e) {
            v.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(e=>v.off(e, "mouseover", W)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(Ut),
            this._element.classList.remove(Ut),
            this._element.setAttribute("aria-expanded", "false"),
            d.removeDataAttribute(this._menu, "popper"),
            v.trigger(this._element, "hidden.bs.dropdown", e))
        }
        _getConfig(e) {
            if (e = {
                ...this.constructor.Default,
                ...d.getDataAttributes(this._element),
                ...e
            },
            i(Ft, e, this.constructor.DefaultType),
            "object" != typeof e.reference || r(e.reference) || "function" == typeof e.reference.getBoundingClientRect)
                return e;
            throw new TypeError(Ft.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
        }
        _createPopper(e) {
            if (void 0 === Wt)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = e : r(this._config.reference) ? t = s(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const i = this._getPopperConfig();
            e = i.modifiers.find(e=>"applyStyles" === e.name && !1 === e.enabled);
            this._popper = Rt(t, this._menu, i),
            e && d.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(e=this._element) {
            return e.classList.contains(Ut)
        }
        _getMenuElement() {
            return u.next(this._element, Kt)[0]
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend"))
                return ii;
            if (e.classList.contains("dropstart"))
                return si;
            var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? Zt : Jt : t ? ti : ei
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: e, target: t}) {
            const i = u.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(q);
            i.length && X(i, t, e === Xt, !i.includes(t)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = $.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
        static clearMenus(i) {
            if (!i || 2 !== i.button && ("keyup" !== i.type || "Tab" === i.key)) {
                var s = u.find(Qt);
                for (let e = 0, t = s.length; e < t; e++) {
                    const a = $.getInstance(s[e]);
                    if (a && !1 !== a._config.autoClose && a._isShown()) {
                        const r = {
                            relatedTarget: a._element
                        };
                        if (i) {
                            const o = i.composedPath();
                            var n = o.includes(a._menu);
                            if (o.includes(a._element) || "inside" === a._config.autoClose && !n || "outside" === a._config.autoClose && n)
                                continue;
                            if (a._menu.contains(i.target) && ("keyup" === i.type && "Tab" === i.key || /input|select|option|textarea|form/i.test(i.target.tagName)))
                                continue;
                            "click" === i.type && (r.clickEvent = i)
                        }
                        a._completeHide(r)
                    }
                }
            }
        }
        static getParentFromElement(e) {
            return a(e) || e.parentNode
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? !("Space" === e.key || e.key !== Yt && (e.key !== Xt && e.key !== Vt || e.target.closest(Kt))) : Gt.test(e.key)) {
                var t = this.classList.contains(Ut);
                if ((t || e.key !== Yt) && (e.preventDefault(),
                e.stopPropagation(),
                !o(this))) {
                    var i = this.matches(Qt) ? this : u.prev(this, Qt)[0];
                    const s = $.getOrCreateInstance(i);
                    if (e.key !== Yt)
                        return e.key === Vt || e.key === Xt ? (t || s.show(),
                        void s._selectMenuItem(e)) : void (t && "Space" !== e.key || $.clearMenus());
                    s.hide()
                }
            }
        }
    }
    v.on(document, Ve, Qt, $.dataApiKeydownHandler),
    v.on(document, Ve, Kt, $.dataApiKeydownHandler),
    v.on(document, Ye, $.clearMenus),
    v.on(document, "keyup.bs.dropdown.data-api", $.clearMenus),
    v.on(document, Ye, Qt, function(e) {
        e.preventDefault(),
        $.getOrCreateInstance(this).toggle()
    }),
    e($);
    const ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , oi = ".sticky-top";
    class li {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            var e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", e=>e + t),
            this._setElementAttributes(ri, "paddingRight", e=>e + t),
            this._setElementAttributes(oi, "marginRight", e=>e - t)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, i, s) {
            const n = this.getWidth();
            this._applyManipulationCallback(e, e=>{
                var t;
                e !== this._element && window.innerWidth > e.clientWidth + n || (this._saveInitialAttribute(e, i),
                t = window.getComputedStyle(e)[i],
                e.style[i] = s(Number.parseFloat(t)) + "px")
            }
            )
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(ri, "paddingRight"),
            this._resetElementAttributes(oi, "marginRight")
        }
        _saveInitialAttribute(e, t) {
            var i = e.style[t];
            i && d.setDataAttribute(e, t, i)
        }
        _resetElementAttributes(e, i) {
            this._applyManipulationCallback(e, e=>{
                var t = d.getDataAttribute(e, i);
                void 0 === t ? e.style.removeProperty(i) : (d.removeDataAttribute(e, i),
                e.style[i] = t)
            }
            )
        }
        _applyManipulationCallback(e, t) {
            r(e) ? t(e) : u.find(e, this._element).forEach(t)
        }
        isOverflowing() {
            return 0 < this.getWidth()
        }
    }
    const ci = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , di = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , hi = "backdrop"
      , ui = "mousedown.bs." + hi;
    class pi {
        constructor(e) {
            this._config = this._getConfig(e),
            this._isAppended = !1,
            this._element = null
        }
        show(e) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && h(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(()=>{
                l(e)
            }
            )) : l(e)
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(()=>{
                this.dispose(),
                l(e)
            }
            )) : l(e)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className,
                this._config.isAnimated && e.classList.add("fade"),
                this._element = e
            }
            return this._element
        }
        _getConfig(e) {
            return (e = {
                ...ci,
                ..."object" == typeof e ? e : {}
            }).rootElement = s(e.rootElement),
            i(hi, e, di),
            e
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            v.on(this._getElement(), ui, ()=>{
                l(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (v.off(this._element, ui),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(e) {
            V(e, this._getElement(), this._config.isAnimated)
        }
    }
    const mi = {
        trapElement: null,
        autofocus: !0
    }
      , fi = {
        trapElement: "element",
        autofocus: "boolean"
    };
    const gi = ".bs.focustrap"
      , vi = (gi,
    gi,
    "backward");
    class yi {
        constructor(e) {
            this._config = this._getConfig(e),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            const {trapElement: e, autofocus: t} = this._config;
            this._isActive || (t && e.focus(),
            v.off(document, gi),
            v.on(document, "focusin.bs.focustrap", e=>this._handleFocusin(e)),
            v.on(document, "keydown.tab.bs.focustrap", e=>this._handleKeydown(e)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            v.off(document, gi))
        }
        _handleFocusin(e) {
            e = e.target;
            const t = this._config["trapElement"];
            if (e !== document && e !== t && !t.contains(e)) {
                const i = u.focusableChildren(t);
                (0 === i.length ? t : this._lastTabNavDirection === vi ? i[i.length - 1] : i[0]).focus()
            }
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? vi : "forward")
        }
        _getConfig(e) {
            return e = {
                ...mi,
                ..."object" == typeof e ? e : {}
            },
            i("focustrap", e, fi),
            e
        }
    }
    const O = ".bs.modal";
    const bi = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , wi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , Ei = (O,
    O,
    "hidden" + O)
      , Ti = "show" + O
      , xi = (O,
    "resize" + O)
      , _i = "click.dismiss" + O
      , Si = "keydown.dismiss" + O
      , Ci = (O,
    "mousedown.dismiss" + O);
    O;
    const ki = "modal-open"
      , Ai = "modal-static";
    class Mi extends t {
        constructor(e, t) {
            super(e),
            this._config = this._getConfig(t),
            this._dialog = u.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new li
        }
        static get Default() {
            return bi
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || v.trigger(this._element, Ti, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(ki),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            v.on(this._dialog, Ci, ()=>{
                v.one(this._element, "mouseup.dismiss.bs.modal", e=>{
                    e.target === this._element && (this._ignoreBackdropClick = !0)
                }
                )
            }
            ),
            this._showBackdrop(()=>this._showElement(e)))
        }
        hide() {
            var e;
            !this._isShown || this._isTransitioning || v.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            (e = this._isAnimated()) && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            v.off(this._element, _i),
            v.off(this._dialog, Ci),
            this._queueCallback(()=>this._hideModal(), this._element, e))
        }
        dispose() {
            [window, this._dialog].forEach(e=>v.off(e, O)),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new pi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new yi({
                trapElement: this._element
            })
        }
        _getConfig(e) {
            return e = {
                ...bi,
                ...d.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            },
            i("modal", e, wi),
            e
        }
        _showElement(e) {
            var t = this._isAnimated();
            const i = u.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            t && h(this._element),
            this._element.classList.add("show");
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                v.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }
            , this._dialog, t)
        }
        _setEscapeEvent() {
            this._isShown ? v.on(this._element, Si, e=>{
                this._config.keyboard && "Escape" === e.key ? (e.preventDefault(),
                this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
            }
            ) : v.off(this._element, Si)
        }
        _setResizeEvent() {
            this._isShown ? v.on(window, xi, ()=>this._adjustDialog()) : v.off(window, xi)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(ki),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                v.trigger(this._element, Ei)
            }
            )
        }
        _showBackdrop(e) {
            v.on(this._element, _i, e=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            ),
            this._backdrop.show(e)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            var e = v.trigger(this._element, "hidePrevented.bs.modal");
            if (!e.defaultPrevented) {
                const {classList: t, scrollHeight: i, style: s} = this._element
                  , n = i > document.documentElement.clientHeight;
                !n && "hidden" === s.overflowY || t.contains(Ai) || (n || (s.overflowY = "hidden"),
                t.add(Ai),
                this._queueCallback(()=>{
                    t.remove(Ai),
                    n || this._queueCallback(()=>{
                        s.overflowY = ""
                    }
                    , this._dialog)
                }
                , this._dialog),
                this._element.focus())
            }
        }
        _adjustDialog() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._scrollBar.getWidth()
              , i = 0 < t;
            (!i && e && !n() || i && !e && n()) && (this._element.style.paddingLeft = t + "px"),
            (i && !e && !n() || !i && e && n()) && (this._element.style.paddingRight = t + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, i) {
            return this.each(function() {
                const e = Mi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](i)
                }
            })
        }
    }
    v.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
        const t = a(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        v.one(t, Ti, e=>{
            e.defaultPrevented || v.one(t, Ei, ()=>{
                q(this) && this.focus()
            }
            )
        }
        );
        e = u.findOne(".modal.show");
        e && Mi.getInstance(e).hide();
        const i = Mi.getOrCreateInstance(t);
        i.toggle(this)
    }),
    de(Mi),
    e(Mi);
    const Ii = "offcanvas";
    Xe = ".bs.offcanvas";
    const Li = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Pi = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , $i = ".offcanvas.show"
      , Oi = "hidden" + Xe;
    class z extends t {
        constructor(e, t) {
            super(e),
            this._config = this._getConfig(t),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return Ii
        }
        static get Default() {
            return Li
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || v.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new li).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add("show"),
            this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(),
                v.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && !v.trigger(this._element, "hide.bs.offcanvas").defaultPrevented && (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new li).reset(),
                v.trigger(this._element, Oi)
            }
            , this._element, !0))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(e) {
            return e = {
                ...Li,
                ...d.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            },
            i(Ii, e, Pi),
            e
        }
        _initializeBackDrop() {
            return new pi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new yi({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            v.on(this._element, "keydown.dismiss.bs.offcanvas", e=>{
                this._config.keyboard && "Escape" === e.key && this.hide()
            }
            )
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = z.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    v.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(e) {
        var t = a(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        !o(this)) {
            v.one(t, Oi, ()=>{
                q(this) && this.focus()
            }
            );
            e = u.findOne($i);
            e && e !== t && z.getInstance(e).hide();
            const i = z.getOrCreateInstance(t);
            i.toggle(this)
        }
    }),
    v.on(window, "load.bs.offcanvas.data-api", ()=>u.find($i).forEach(e=>z.getOrCreateInstance(e).show())),
    de(z),
    e(z);
    const zi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
    const Ni = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Di = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    Ge = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function ji(e, i, t) {
        if (!e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        const s = new window.DOMParser
          , n = s.parseFromString(e, "text/html");
        var a = [].concat(...n.body.querySelectorAll("*"));
        for (let e = 0, t = a.length; e < t; e++) {
            const o = a[e];
            var r = o.nodeName.toLowerCase();
            if (Object.keys(i).includes(r)) {
                const l = [].concat(...o.attributes)
                  , c = [].concat(i["*"] || [], i[r] || []);
                l.forEach(e=>{
                    ((e,t)=>{
                        var i = e.nodeName.toLowerCase();
                        if (t.includes(i))
                            return !zi.has(i) || Boolean(Ni.test(e.nodeValue) || Di.test(e.nodeValue));
                        const s = t.filter(e=>e instanceof RegExp);
                        for (let e = 0, t = s.length; e < t; e++)
                            if (s[e].test(i))
                                return !0;
                        return !1
                    }
                    )(e, c) || o.removeAttribute(e.nodeName)
                }
                )
            } else
                o.remove()
        }
        return n.body.innerHTML
    }
    const Hi = "tooltip";
    T = ".bs.tooltip";
    const Bi = new Set(["sanitize", "allowList", "sanitizeFn"])
      , qi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , Ri = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: n() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: n() ? "right" : "left"
    }
      , Wi = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: Ge,
        popperConfig: null
    }
      , Fi = {
        HIDE: "hide" + T,
        HIDDEN: "hidden" + T,
        SHOW: "show" + T,
        SHOWN: "shown" + T,
        INSERTED: "inserted" + T,
        CLICK: "click" + T,
        FOCUSIN: "focusin" + T,
        FOCUSOUT: "focusout" + T,
        MOUSEENTER: "mouseenter" + T,
        MOUSELEAVE: "mouseleave" + T
    }
      , Yi = "fade";
    const Vi = "show"
      , Xi = "show"
      , Gi = ".tooltip-inner"
      , Ui = "hide.bs.modal"
      , Qi = "hover"
      , Ki = "focus";
    class Ji extends t {
        constructor(e, t) {
            if (void 0 === Wt)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Wi
        }
        static get NAME() {
            return Hi
        }
        static get Event() {
            return Fi
        }
        static get DefaultType() {
            return qi
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger.click = !t._activeTrigger.click,
                    t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else
                    this.getTipElement().classList.contains(Vi) ? this._leave(null, this) : this._enter(null, this)
        }
        dispose() {
            clearTimeout(this._timeout),
            v.off(this._element.closest(".modal"), Ui, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var e = v.trigger(this._element, this.constructor.Event.SHOW);
                const i = R(this._element);
                var t = (null === i ? this._element.ownerDocument.documentElement : i).contains(this._element);
                if (!e.defaultPrevented && t) {
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Gi).innerHTML && (this._disposePopper(),
                    this.tip.remove(),
                    this.tip = null);
                    const s = this.getTipElement();
                    e = (e=>{
                        for (; e += Math.floor(1e6 * Math.random()),
                        document.getElementById(e); )
                            ;
                        return e
                    }
                    )(this.constructor.NAME),
                    t = (s.setAttribute("id", e),
                    this._element.setAttribute("aria-describedby", e),
                    this._config.animation && s.classList.add(Yi),
                    "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement),
                    e = this._getAttachment(t);
                    this._addAttachmentClass(e);
                    const n = this._config["container"]
                      , a = (ce.set(s, this.constructor.DATA_KEY, this),
                    this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s),
                    v.trigger(this._element, this.constructor.Event.INSERTED)),
                    this._popper ? this._popper.update() : this._popper = Rt(this._element, s, this._getPopperConfig(e)),
                    s.classList.add(Vi),
                    this._resolvePossibleFunction(this._config.customClass));
                    a && s.classList.add(...a.split(" ")),
                    "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(e=>{
                        v.on(e, "mouseover", W)
                    }
                    );
                    t = this.tip.classList.contains(Yi);
                    this._queueCallback(()=>{
                        var e = this._hoverState;
                        this._hoverState = null,
                        v.trigger(this._element, this.constructor.Event.SHOWN),
                        "out" === e && this._leave(null, this)
                    }
                    , this.tip, t)
                }
            }
        }
        hide() {
            if (this._popper) {
                const t = this.getTipElement();
                var e;
                v.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (t.classList.remove(Vi),
                "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(e=>v.off(e, "mouseover", W)),
                this._activeTrigger.click = !1,
                this._activeTrigger[Ki] = !1,
                this._activeTrigger[Qi] = !1,
                e = this.tip.classList.contains(Yi),
                this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._hoverState !== Xi && t.remove(),
                    this._cleanTipClass(),
                    this._element.removeAttribute("aria-describedby"),
                    v.trigger(this._element, this.constructor.Event.HIDDEN),
                    this._disposePopper())
                }
                , this.tip, e),
                this._hoverState = "")
            }
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const e = document.createElement("div")
              , t = (e.innerHTML = this._config.template,
            e.children[0]);
            return this.setContent(t),
            t.classList.remove(Yi, Vi),
            this.tip = t,
            this.tip
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), Gi)
        }
        _sanitizeAndSetContent(e, t, i) {
            const s = u.findOne(i, e);
            !t && s ? s.remove() : this.setElementContent(s, t)
        }
        setElementContent(e, t) {
            if (null !== e)
                return r(t) ? (t = s(t),
                void (this._config.html ? t.parentNode !== e && (e.innerHTML = "",
                e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = ji(t, this._config.allowList, this._config.sanitizeFn)),
                e.innerHTML = t) : e.textContent = t)
        }
        getTitle() {
            var e = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(e)
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e
        }
        _initializeOnDelegatedTarget(e, t) {
            return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }
        _getPopperConfig(e) {
            e = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: e=>this._handlePopperPlacementChange(e)
                }],
                onFirstUpdate: e=>{
                    e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(e))
        }
        _getAttachment(e) {
            return Ri[e.toUpperCase()]
        }
        _setListeners() {
            const e = this._config.trigger.split(" ");
            e.forEach(e=>{
                var t;
                "click" === e ? v.on(this._element, this.constructor.Event.CLICK, this._config.selector, e=>this.toggle(e)) : "manual" !== e && (t = e === Qi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                e = e === Qi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT,
                v.on(this._element, t, this._config.selector, e=>this._enter(e)),
                v.on(this._element, e, this._config.selector, e=>this._leave(e)))
            }
            ),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            v.on(this._element.closest(".modal"), Ui, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            var e = this._element.getAttribute("title")
              , t = typeof this._element.getAttribute("data-bs-original-title");
            !e && "string" == t || (this._element.setAttribute("data-bs-original-title", e || ""),
            !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
            this._element.setAttribute("title", ""))
        }
        _enter(e, t) {
            t = this._initializeOnDelegatedTarget(e, t),
            e && (t._activeTrigger["focusin" === e.type ? Ki : Qi] = !0),
            t.getTipElement().classList.contains(Vi) || t._hoverState === Xi ? t._hoverState = Xi : (clearTimeout(t._timeout),
            t._hoverState = Xi,
            t._config.delay && t._config.delay.show ? t._timeout = setTimeout(()=>{
                t._hoverState === Xi && t.show()
            }
            , t._config.delay.show) : t.show())
        }
        _leave(e, t) {
            t = this._initializeOnDelegatedTarget(e, t),
            e && (t._activeTrigger["focusout" === e.type ? Ki : Qi] = t._element.contains(e.relatedTarget)),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = "out",
            t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(()=>{
                "out" === t._hoverState && t.hide()
            }
            , t._config.delay.hide) : t.hide())
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        _getConfig(e) {
            const t = d.getDataAttributes(this._element);
            return Object.keys(t).forEach(e=>{
                Bi.has(e) && delete t[e]
            }
            ),
            (e = {
                ...this.constructor.Default,
                ...t,
                ..."object" == typeof e && e ? e : {}
            }).container = !1 === e.container ? document.body : s(e.container),
            "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            i(Hi, e, this.constructor.DefaultType),
            e.sanitize && (e.template = ji(e.template, e.allowList, e.sanitizeFn)),
            e
        }
        _getDelegateConfig() {
            const e = {};
            for (const t in this._config)
                this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e
        }
        _cleanTipClass() {
            const t = this.getTipElement();
            var e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g");
            const i = t.getAttribute("class").match(e);
            null !== i && 0 < i.length && i.map(e=>e.trim()).forEach(e=>t.classList.remove(e))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(e) {
            e = e.state;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ji.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    e(Ji);
    C = ".bs.popover";
    const Zi = {
        ...Ji.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , es = {
        ...Ji.DefaultType,
        content: "(string|element|function)"
    }
      , ts = {
        HIDE: "hide" + C,
        HIDDEN: "hidden" + C,
        SHOW: "show" + C,
        SHOWN: "shown" + C,
        INSERTED: "inserted" + C,
        CLICK: "click" + C,
        FOCUSIN: "focusin" + C,
        FOCUSOUT: "focusout" + C,
        MOUSEENTER: "mouseenter" + C,
        MOUSELEAVE: "mouseleave" + C
    };
    class is extends Ji {
        static get Default() {
            return Zi
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return ts
        }
        static get DefaultType() {
            return es
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
            this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = is.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    e(is);
    const ss = "scrollspy";
    const ns = ".bs.scrollspy";
    const as = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , rs = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    ns,
    ns;
    ns;
    const os = "dropdown-item"
      , ls = "active"
      , cs = ".nav-link"
      , ds = ".list-group-item"
      , hs = cs + `, ${ds}, .` + os
      , us = "position";
    class ps extends t {
        constructor(e, t) {
            super(e),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(t),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            v.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return as
        }
        static get NAME() {
            return ss
        }
        refresh() {
            var e = this._scrollElement === this._scrollElement.window ? "offset" : us;
            const s = "auto" === this._config.method ? e : this._config.method
              , n = s === us ? this._getScrollTop() : 0
              , t = (this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            u.find(hs, this._config.target));
            t.map(e=>{
                e = H(e);
                const t = e ? u.findOne(e) : null;
                if (t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height)
                        return [d[s](t).top + n, e]
                }
                return null
            }
            ).filter(e=>e).sort((e,t)=>e[0] - t[0]).forEach(e=>{
                this._offsets.push(e[0]),
                this._targets.push(e[1])
            }
            )
        }
        dispose() {
            v.off(this._scrollElement, ns),
            super.dispose()
        }
        _getConfig(e) {
            return (e = {
                ...as,
                ...d.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }).target = s(e.target) || document.documentElement,
            i(ss, e, rs),
            e
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            i <= t)
                return e = this._targets[this._targets.length - 1],
                void (this._activeTarget !== e && this._activate(e));
            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                return this._activeTarget = null,
                void this._clear();
            for (let e = this._offsets.length; e--; )
                this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = hs.split(",").map(e=>e + `[data-bs-target="${t}"],${e}[href="${t}"]`)
              , i = u.findOne(e.join(","), this._config.target);
            i.classList.add(ls),
            i.classList.contains(os) ? u.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(ls) : u.parents(i, ".nav, .list-group").forEach(e=>{
                u.prev(e, cs + ", " + ds).forEach(e=>e.classList.add(ls)),
                u.prev(e, ".nav-item").forEach(e=>{
                    u.children(e, cs).forEach(e=>e.classList.add(ls))
                }
                )
            }
            ),
            v.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            u.find(hs, this._config.target).filter(e=>e.classList.contains(ls)).forEach(e=>e.classList.remove(ls))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ps.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    v.on(window, "load.bs.scrollspy.data-api", ()=>{
        u.find('[data-bs-spy="scroll"]').forEach(e=>new ps(e))
    }
    ),
    e(ps);
    const ms = "active"
      , fs = ".active"
      , gs = ":scope > li > .active";
    class vs extends t {
        static get NAME() {
            return "tab"
        }
        show() {
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(ms)) {
                let e;
                var t = a(this._element)
                  , i = this._element.closest(".nav, .list-group")
                  , s = (i && (s = "UL" === i.nodeName || "OL" === i.nodeName ? gs : fs,
                e = (e = u.find(s, i))[e.length - 1]),
                e ? v.trigger(e, "hide.bs.tab", {
                    relatedTarget: this._element
                }) : null);
                v.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== s && s.defaultPrevented || (this._activate(this._element, i),
                s = ()=>{
                    v.trigger(e, "hidden.bs.tab", {
                        relatedTarget: this._element
                    }),
                    v.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: e
                    })
                }
                ,
                t ? this._activate(t, t.parentNode, s) : s())
            }
        }
        _activate(e, t, i) {
            const s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? u.children(t, fs) : u.find(gs, t))[0];
            var t = i && s && s.classList.contains("fade")
              , n = ()=>this._transitionComplete(e, s, i);
            s && t ? (s.classList.remove("show"),
            this._queueCallback(n, e, !0)) : n()
        }
        _transitionComplete(e, t, i) {
            if (t) {
                t.classList.remove(ms);
                const n = u.findOne(":scope > .dropdown-menu .active", t.parentNode);
                n && n.classList.remove(ms),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            e.classList.add(ms),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            h(e),
            e.classList.contains("fade") && e.classList.add("show");
            let s = e.parentNode;
            (s = s && "LI" === s.nodeName ? s.parentNode : s) && s.classList.contains("dropdown-menu") && ((t = e.closest(".dropdown")) && u.find(".dropdown-toggle", t).forEach(e=>e.classList.add(ms)),
            e.setAttribute("aria-expanded", !0)),
            i && i()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = vs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    v.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(e) {
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        !o(this)) {
            const t = vs.getOrCreateInstance(this);
            t.show()
        }
    }),
    e(vs);
    const ys = "show"
      , bs = "showing"
      , ws = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Es = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Ts extends t {
        constructor(e, t) {
            super(e),
            this._config = this._getConfig(t),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return ws
        }
        static get Default() {
            return Es
        }
        static get NAME() {
            return "toast"
        }
        show() {
            v.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            h(this._element),
            this._element.classList.add(ys),
            this._element.classList.add(bs),
            this._queueCallback(()=>{
                this._element.classList.remove(bs),
                v.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(ys) && !v.trigger(this._element, "hide.bs.toast").defaultPrevented && (this._element.classList.add(bs),
            this._queueCallback(()=>{
                this._element.classList.add("hide"),
                this._element.classList.remove(bs),
                this._element.classList.remove(ys),
                v.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(ys) && this._element.classList.remove(ys),
            super.dispose()
        }
        _getConfig(e) {
            return e = {
                ...Es,
                ...d.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            },
            i("toast", e, this.constructor.DefaultType),
            e
        }
        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay))
        }
        _onInteraction(e, t) {
            switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = t
            }
            t ? this._clearTimeout() : (e = e.relatedTarget,
            this._element === e || this._element.contains(e) || this._maybeScheduleHide())
        }
        _setListeners() {
            v.on(this._element, "mouseover.bs.toast", e=>this._onInteraction(e, !0)),
            v.on(this._element, "mouseout.bs.toast", e=>this._onInteraction(e, !1)),
            v.on(this._element, "focusin.bs.toast", e=>this._onInteraction(e, !0)),
            v.on(this._element, "focusout.bs.toast", e=>this._onInteraction(e, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ts.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    return de(Ts),
    e(Ts),
    {
        Alert: he,
        Button: pe,
        Carousel: y,
        Collapse: Oe,
        Dropdown: $,
        Modal: Mi,
        Offcanvas: z,
        Popover: is,
        ScrollSpy: ps,
        Tab: vs,
        Toast: Ts,
        Tooltip: Ji
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, function() {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s)
        }
    }
    function e(e, t, i) {
        t && s(e.prototype, t),
        i && s(e, i)
    }
    var o = Date.now();
    function c(e) {
        var t = {}
          , i = !0
          , s = 0
          , n = arguments.length;
        for ("[object Boolean]" === Object.prototype.toString.call(e) && (i = e,
        s++); s < n; s++) {
            a = void 0;
            var a, r = arguments[s];
            for (a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (i && "[object Object]" === Object.prototype.toString.call(r[a]) ? t[a] = c(!0, t[a], r[a]) : t[a] = r[a])
        }
        return t
    }
    function u(e, t) {
        if (0 != M(e = A(e = !B(e) && e !== window && e !== document ? e : [e]) || d(e) ? e : [e]))
            if (A(e) && !d(e))
                for (var i = e.length, s = 0; s < i && !1 !== t.call(e[s], e[s], s, e); s++)
                    ;
            else if (d(e))
                for (var n in e)
                    if (w(e, n) && !1 === t.call(e[n], e[n], n, e))
                        break
    }
    function _(e, t, i) {
        var s = 1 < arguments.length && void 0 !== t ? t : null
          , n = 2 < arguments.length && void 0 !== i ? i : null
          , t = e[o] = e[o] || []
          , a = {
            all: t,
            evt: null,
            found: null
        };
        return s && n && 0 < M(t) && u(t, function(e, t) {
            if (e.eventName == s && e.fn.toString() == n.toString())
                return a.found = !0,
                a.evt = t,
                !1
        }),
        a
    }
    function P(i, e, t) {
        var e = 1 < arguments.length && void 0 !== e ? e : {}
          , s = e.onElement
          , n = e.withCallback
          , a = e.avoidDuplicate
          , r = void 0 === a || a
          , a = e.once
          , o = void 0 !== a && a
          , a = e.useCapture
          , l = void 0 !== a && a
          , c = 2 < arguments.length ? t : void 0
          , d = s || [];
        function h(e) {
            H(n) && n.call(c, e, this),
            o && h.destroy()
        }
        return b(d) && (d = document.querySelectorAll(d)),
        h.destroy = function() {
            u(d, function(e) {
                var t = _(e, i, h);
                t.found && t.all.splice(t.evt, 1),
                e.removeEventListener && e.removeEventListener(i, h, l)
            })
        }
        ,
        u(d, function(e) {
            var t = _(e, i, h);
            (e.addEventListener && r && !t.found || !r) && (e.addEventListener(i, h, l),
            t.all.push({
                eventName: i,
                fn: h
            }))
        }),
        h
    }
    function $(t, e) {
        u(e.split(" "), function(e) {
            return t.classList.add(e)
        })
    }
    function O(t, e) {
        u(e.split(" "), function(e) {
            return t.classList.remove(e)
        })
    }
    function z(e, t) {
        return e.classList.contains(t)
    }
    function N(e, t) {
        for (; e !== document.body; ) {
            if (!(e = e.parentElement))
                return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t))
                return e
        }
    }
    function D(t, e, i) {
        var s, e = 1 < arguments.length && void 0 !== e ? e : "", n = 2 < arguments.length && void 0 !== i && i;
        t && "" !== e && ("none" === e ? H(n) && n() : (i = function() {
            var e, t = document.createElement("fakeelement"), i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in i)
                if (void 0 !== t.style[e])
                    return i[e]
        }(),
        u(s = e.split(" "), function(e) {
            $(t, "g" + e)
        }),
        P(i, {
            onElement: t,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                u(s, function(e) {
                    O(t, "g" + e)
                }),
                H(n) && n()
            }
        })))
    }
    function j(e, t) {
        t = 1 < arguments.length && void 0 !== t ? t : "";
        if ("" === t)
            return e.style.webkitTransform = "",
            e.style.MozTransform = "",
            e.style.msTransform = "",
            e.style.OTransform = "",
            e.style.transform = "",
            !1;
        e.style.webkitTransform = t,
        e.style.MozTransform = t,
        e.style.msTransform = t,
        e.style.OTransform = t,
        e.style.transform = t
    }
    function S(e) {
        e.style.display = "block"
    }
    function l(e) {
        e.style.display = "none"
    }
    function g(e) {
        var t = document.createDocumentFragment()
          , i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild; )
            t.appendChild(i.firstChild);
        return t
    }
    function F() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
    function v(e, t, i, s) {
        var n, a;
        e() ? t() : (i = i || 100,
        a = setInterval(function() {
            e() && (clearInterval(a),
            n && clearTimeout(n),
            t())
        }, i),
        s && (n = setTimeout(function() {
            clearInterval(a)
        }, s)))
    }
    function C(e, t, i) {
        if (q(e))
            console.error("Inject assets error");
        else if (H(t) && (i = t,
        t = !1),
        b(t) && t in window)
            H(i) && i();
        else {
            var s;
            if (-1 !== e.indexOf(".css")) {
                if ((s = document.querySelectorAll('link[href="' + e + '"]')) && 0 < s.length)
                    return void (H(i) && i());
                var n = document.getElementsByTagName("head")[0]
                  , a = n.querySelectorAll('link[rel="stylesheet"]')
                  , r = document.createElement("link");
                return r.rel = "stylesheet",
                r.type = "text/css",
                r.href = e,
                r.media = "all",
                a ? n.insertBefore(r, a[0]) : n.appendChild(r),
                void (H(i) && i())
            }
            if ((s = document.querySelectorAll('script[src="' + e + '"]')) && 0 < s.length) {
                if (H(i)) {
                    if (b(t))
                        return void v(function() {
                            return void 0 !== window[t]
                        }, function() {
                            i()
                        });
                    i()
                }
            } else {
                a = document.createElement("script");
                a.type = "text/javascript",
                a.src = e,
                a.onload = function() {
                    if (H(i)) {
                        if (b(t))
                            return v(function() {
                                return void 0 !== window[t]
                            }, function() {
                                i()
                            }),
                            !1;
                        i()
                    }
                }
                ,
                document.body.appendChild(a)
            }
        }
    }
    function y() {
        return "navigator"in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }
    function H(e) {
        return "function" == typeof e
    }
    function b(e) {
        return "string" == typeof e
    }
    function B(e) {
        return e && e.nodeType && 1 == e.nodeType
    }
    function k(e) {
        return Array.isArray(e)
    }
    function A(e) {
        return e && e.length && isFinite(e.length)
    }
    function d(e) {
        return "object" === t(e) && null != e && !H(e) && !k(e)
    }
    function q(e) {
        return null == e
    }
    function w(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }
    function M(e) {
        if (d(e)) {
            if (e.keys)
                return e.keys().length;
            var t, i = 0;
            for (t in e)
                w(e, t) && i++;
            return i
        }
        return e.length
    }
    function R(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    function Y(e) {
        var e = 0 < arguments.length && void 0 !== e ? e : -1
          , t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length)
            return !1;
        if (1 == t.length)
            return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = []
          , t = (u(t, function(e) {
            i.push(e.getAttribute("data-taborder"))
        }),
        Math.max.apply(Math, i.map(function(e) {
            return parseInt(e)
        })))
          , s = e < 0 ? 1 : e + 1;
        t < s && (s = "1");
        e = i.filter(function(e) {
            return e >= parseInt(s)
        }).sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(e, '"]'))
    }
    function h(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }
    function I(e, t) {
        n = t;
        var i, s, n = 0 == (s = h(i = e) * h(n)) ? 0 : (1 < (i = (i.x * n.x + i.y * n.y) / s) && (i = 1),
        Math.acos(i));
        return 0 < e.x * t.y - t.x * e.y && (n *= -1),
        180 * n / Math.PI
    }
    e(i, [{
        key: "add",
        value: function(e) {
            this.handlers.push(e)
        }
    }, {
        key: "del",
        value: function(e) {
            e || (this.handlers = []);
            for (var t = this.handlers.length; 0 <= t; t--)
                this.handlers[t] === e && this.handlers.splice(t, 1)
        }
    }, {
        key: "dispatch",
        value: function() {
            for (var e = 0, t = this.handlers.length; e < t; e++) {
                var i = this.handlers[e];
                "function" == typeof i && i.apply(this.el, arguments)
            }
        }
    }]);
    var L = i;
    function i(e) {
        r(this, i),
        this.handlers = [],
        this.el = e
    }
    function n(e, t) {
        e = new L(e);
        return e.add(t),
        e
    }
    e(a, [{
        key: "start",
        value: function(e) {
            var t, i;
            e.touches && (e.target && e.target.nodeName && 0 <= ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) ? console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase()) : (this.now = Date.now(),
            this.x1 = e.touches[0].pageX,
            this.y1 = e.touches[0].pageY,
            this.delta = this.now - (this.last || this.now),
            this.touchStart.dispatch(e, this.element),
            null !== this.preTapPosition.x && (this.isDoubleTap = 0 < this.delta && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30,
            this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
            this.preTapPosition.x = this.x1,
            this.preTapPosition.y = this.y1,
            this.last = this.now,
            t = this.preV,
            1 < e.touches.length && (this._cancelLongTap(),
            this._cancelSingleTap(),
            i = {
                x: e.touches[1].pageX - this.x1,
                y: e.touches[1].pageY - this.y1
            },
            t.x = i.x,
            t.y = i.y,
            this.pinchStartLen = h(t),
            this.multipointStart.dispatch(e, this.element)),
            this._preventTap = !1,
            this.longTapTimeout = setTimeout(function() {
                this.longTap.dispatch(e, this.element),
                this._preventTap = !0
            }
            .bind(this), 750)))
        }
    }, {
        key: "move",
        value: function(e) {
            var t, i, s, n, a, r, o;
            e.touches && (r = this.preV,
            t = e.touches.length,
            i = e.touches[0].pageX,
            s = e.touches[0].pageY,
            this.isDoubleTap = !1,
            1 < t ? (n = e.touches[1].pageX,
            a = e.touches[1].pageY,
            o = {
                x: e.touches[1].pageX - i,
                y: e.touches[1].pageY - s
            },
            null !== r.x && (0 < this.pinchStartLen && (e.zoom = h(o) / this.pinchStartLen,
            this.pinch.dispatch(e, this.element)),
            e.angle = I(o, r),
            this.rotate.dispatch(e, this.element)),
            r.x = o.x,
            r.y = o.y,
            null !== this.x2 && null !== this.sx2 ? (e.deltaX = (i - this.x2 + n - this.sx2) / 2,
            e.deltaY = (s - this.y2 + a - this.sy2) / 2) : (e.deltaX = 0,
            e.deltaY = 0),
            this.twoFingerPressMove.dispatch(e, this.element),
            this.sx2 = n,
            this.sy2 = a) : (null !== this.x2 ? (e.deltaX = i - this.x2,
            e.deltaY = s - this.y2,
            r = Math.abs(this.x1 - this.x2),
            o = Math.abs(this.y1 - this.y2),
            (10 < r || 10 < o) && (this._preventTap = !0)) : (e.deltaX = 0,
            e.deltaY = 0),
            this.pressMove.dispatch(e, this.element)),
            this.touchMove.dispatch(e, this.element),
            this._cancelLongTap(),
            this.x2 = i,
            this.y2 = s,
            1 < t && e.preventDefault())
        }
    }, {
        key: "end",
        value: function(e) {
            var t;
            e.changedTouches && (this._cancelLongTap(),
            t = this,
            e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element),
            this.sx2 = this.sy2 = null),
            this.x2 && 30 < Math.abs(this.x1 - this.x2) || this.y2 && 30 < Math.abs(this.y1 - this.y2) ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2),
            this.swipeTimeout = setTimeout(function() {
                t.swipe.dispatch(e, t.element)
            }, 0)) : (this.tapTimeout = setTimeout(function() {
                t._preventTap || t.tap.dispatch(e, t.element),
                t.isDoubleTap && (t.doubleTap.dispatch(e, t.element),
                t.isDoubleTap = !1)
            }, 0),
            t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                t.singleTap.dispatch(e, t.element)
            }, 250))),
            this.touchEnd.dispatch(e, this.element),
            this.preV.x = 0,
            this.preV.y = 0,
            this.zoom = 1,
            this.pinchStartLen = null,
            this.x1 = this.x2 = this.y1 = this.y2 = null)
        }
    }, {
        key: "cancelAll",
        value: function() {
            this._preventTap = !0,
            clearTimeout(this.singleTapTimeout),
            clearTimeout(this.tapTimeout),
            clearTimeout(this.longTapTimeout),
            clearTimeout(this.swipeTimeout)
        }
    }, {
        key: "cancel",
        value: function(e) {
            this.cancelAll(),
            this.touchCancel.dispatch(e, this.element)
        }
    }, {
        key: "_cancelLongTap",
        value: function() {
            clearTimeout(this.longTapTimeout)
        }
    }, {
        key: "_cancelSingleTap",
        value: function() {
            clearTimeout(this.singleTapTimeout)
        }
    }, {
        key: "_swipeDirection",
        value: function(e, t, i, s) {
            return Math.abs(e - t) >= Math.abs(i - s) ? 0 < e - t ? "Left" : "Right" : 0 < i - s ? "Up" : "Down"
        }
    }, {
        key: "on",
        value: function(e, t) {
            this[e] && this[e].add(t)
        }
    }, {
        key: "off",
        value: function(e, t) {
            this[e] && this[e].del(t)
        }
    }, {
        key: "destroy",
        value: function() {
            return this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
            this.tapTimeout && clearTimeout(this.tapTimeout),
            this.longTapTimeout && clearTimeout(this.longTapTimeout),
            this.swipeTimeout && clearTimeout(this.swipeTimeout),
            this.element.removeEventListener("touchstart", this.start),
            this.element.removeEventListener("touchmove", this.move),
            this.element.removeEventListener("touchend", this.end),
            this.element.removeEventListener("touchcancel", this.cancel),
            this.rotate.del(),
            this.touchStart.del(),
            this.multipointStart.del(),
            this.multipointEnd.del(),
            this.pinch.del(),
            this.swipe.del(),
            this.tap.del(),
            this.doubleTap.del(),
            this.longTap.del(),
            this.singleTap.del(),
            this.pressMove.del(),
            this.twoFingerPressMove.del(),
            this.touchMove.del(),
            this.touchEnd.del(),
            this.touchCancel.del(),
            this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null,
            window.removeEventListener("scroll", this._cancelAllHandler),
            null
        }
    }]);
    var V = a;
    function a(e, t) {
        r(this, a),
        this.element = "string" == typeof e ? document.querySelector(e) : e,
        this.start = this.start.bind(this),
        this.move = this.move.bind(this),
        this.end = this.end.bind(this),
        this.cancel = this.cancel.bind(this),
        this.element.addEventListener("touchstart", this.start, !1),
        this.element.addEventListener("touchmove", this.move, !1),
        this.element.addEventListener("touchend", this.end, !1),
        this.element.addEventListener("touchcancel", this.cancel, !1),
        this.preV = {
            x: null,
            y: null
        },
        this.pinchStartLen = null,
        this.zoom = 1,
        this.isDoubleTap = !1;
        function i() {}
        this.rotate = n(this.element, t.rotate || i),
        this.touchStart = n(this.element, t.touchStart || i),
        this.multipointStart = n(this.element, t.multipointStart || i),
        this.multipointEnd = n(this.element, t.multipointEnd || i),
        this.pinch = n(this.element, t.pinch || i),
        this.swipe = n(this.element, t.swipe || i),
        this.tap = n(this.element, t.tap || i),
        this.doubleTap = n(this.element, t.doubleTap || i),
        this.longTap = n(this.element, t.longTap || i),
        this.singleTap = n(this.element, t.singleTap || i),
        this.pressMove = n(this.element, t.pressMove || i),
        this.twoFingerPressMove = n(this.element, t.twoFingerPressMove || i),
        this.touchMove = n(this.element, t.touchMove || i),
        this.touchEnd = n(this.element, t.touchEnd || i),
        this.touchCancel = n(this.element, t.touchCancel || i),
        this.translateContainer = this.element,
        this._cancelAllHandler = this.cancelAll.bind(this),
        window.addEventListener("scroll", this._cancelAllHandler),
        this.delta = null,
        this.last = null,
        this.now = null,
        this.tapTimeout = null,
        this.singleTapTimeout = null,
        this.longTapTimeout = null,
        this.swipeTimeout = null,
        this.x1 = this.x2 = this.y1 = this.y2 = null,
        this.preTapPosition = {
            x: null,
            y: null
        }
    }
    function W(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in i)
                if (void 0 !== t.style[e])
                    return i[e]
        }()
          , i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          , s = z(e, "gslide-media") ? e : e.querySelector(".gslide-media")
          , n = N(s, ".ginner-container")
          , e = e.querySelector(".gslide-description");
        $(s = 769 < i ? n : s, "greset"),
        j(s, "translate3d(0, 0, 0)"),
        P(t, {
            onElement: s,
            once: !0,
            withCallback: function(e, t) {
                O(s, "greset")
            }
        }),
        s.style.opacity = "",
        e && (e.style.opacity = "")
    }
    e(p, [{
        key: "zoomIn",
        value: function() {
            var e, t = this.widowWidth();
            this.zoomedIn || t <= 768 || ((e = this.img).setAttribute("data-style", e.getAttribute("style")),
            e.style.maxWidth = e.naturalWidth + "px",
            e.style.maxHeight = e.naturalHeight + "px",
            e.naturalWidth > t && (t = t / 2 - e.naturalWidth / 2,
            this.setTranslate(this.img.parentNode, t, 0)),
            this.slide.classList.add("zoomed"),
            this.zoomedIn = !0)
        }
    }, {
        key: "zoomOut",
        value: function() {
            this.img.parentNode.setAttribute("style", ""),
            this.img.setAttribute("style", this.img.getAttribute("data-style")),
            this.slide.classList.remove("zoomed"),
            this.zoomedIn = !1,
            this.currentX = null,
            this.currentY = null,
            this.initialX = null,
            this.initialY = null,
            this.xOffset = 0,
            this.yOffset = 0,
            this.onclose && "function" == typeof this.onclose && this.onclose()
        }
    }, {
        key: "dragStart",
        value: function(e) {
            e.preventDefault(),
            this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
            this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
            this.initialY = e.clientY - this.yOffset),
            e.target === this.img && (this.active = !0,
            this.img.classList.add("dragging"))) : this.active = !1
        }
    }, {
        key: "dragEnd",
        value: function(e) {
            var t = this;
            e.preventDefault(),
            this.initialX = this.currentX,
            this.initialY = this.currentY,
            this.active = !1,
            setTimeout(function() {
                t.dragging = !1,
                t.img.isDragging = !1,
                t.img.classList.remove("dragging")
            }, 100)
        }
    }, {
        key: "drag",
        value: function(e) {
            this.active && (e.preventDefault(),
            "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
            this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
            this.currentY = e.clientY - this.initialY),
            this.xOffset = this.currentX,
            this.yOffset = this.currentY,
            this.img.isDragging = !0,
            this.dragging = !0,
            this.setTranslate(this.img, this.currentX, this.currentY))
        }
    }, {
        key: "onMove",
        value: function(e) {
            var t;
            this.zoomedIn && (t = e.clientX - this.img.naturalWidth / 2,
            e = e.clientY - this.img.naturalHeight / 2,
            this.setTranslate(this.img, t, e))
        }
    }, {
        key: "setTranslate",
        value: function(e, t, i) {
            e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
        }
    }, {
        key: "widowWidth",
        value: function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
    }]);
    var X = p;
    function p(e, t) {
        var i = this
          , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (r(this, p),
        this.img = e,
        this.slide = t,
        this.onclose = s,
        this.img.setZoomEvents)
            return !1;
        this.active = !1,
        this.zoomedIn = !1,
        this.dragging = !1,
        this.currentX = null,
        this.currentY = null,
        this.initialX = null,
        this.initialY = null,
        this.xOffset = 0,
        this.yOffset = 0,
        this.img.addEventListener("mousedown", function(e) {
            return i.dragStart(e)
        }, !1),
        this.img.addEventListener("mouseup", function(e) {
            return i.dragEnd(e)
        }, !1),
        this.img.addEventListener("mousemove", function(e) {
            return i.drag(e)
        }, !1),
        this.img.addEventListener("click", function(e) {
            return i.slide.classList.contains("dragging-nav") ? (i.zoomOut(),
            !1) : i.zoomedIn ? void (i.zoomedIn && !i.dragging && i.zoomOut()) : i.zoomIn()
        }, !1),
        this.img.setZoomEvents = !0
    }
    e(m, [{
        key: "dragStart",
        value: function(e) {
            var t;
            this.slide.classList.contains("zoomed") ? this.active = !1 : ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset,
            this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset,
            this.initialY = e.clientY - this.yOffset),
            t = e.target.nodeName.toLowerCase(),
            e.target.classList.contains("nodrag") || N(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(),
            (e.target === this.el || "img" !== t && N(e.target, ".gslide-inline")) && (this.active = !0,
            this.el.classList.add("dragging"),
            this.dragContainer = N(e.target, ".ginner-container"))))
        }
    }, {
        key: "dragEnd",
        value: function(e) {
            var t = this;
            e && e.preventDefault(),
            this.initialX = 0,
            this.initialY = 0,
            this.currentX = null,
            this.currentY = null,
            this.initialX = null,
            this.initialY = null,
            this.xOffset = 0,
            this.yOffset = 0,
            this.active = !1,
            this.doSlideChange && (this.instance.preventOutsideClick = !0,
            "right" == this.doSlideChange && this.instance.prevSlide(),
            "left" == this.doSlideChange && this.instance.nextSlide()),
            this.doSlideClose && this.instance.close(),
            this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0),
            setTimeout(function() {
                t.instance.preventOutsideClick = !1,
                t.toleranceReached = !1,
                t.lastDirection = null,
                t.dragging = !1,
                t.el.isDragging = !1,
                t.el.classList.remove("dragging"),
                t.slide.classList.remove("dragging-nav"),
                t.dragContainer.style.transform = "",
                t.dragContainer.style.transition = ""
            }, 100)
        }
    }, {
        key: "drag",
        value: function(e) {
            if (this.active) {
                e.preventDefault(),
                this.slide.classList.add("dragging-nav"),
                "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX,
                this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX,
                this.currentY = e.clientY - this.initialY),
                this.xOffset = this.currentX,
                this.yOffset = this.currentY,
                this.el.isDragging = !0,
                this.dragging = !0,
                this.doSlideChange = !1,
                this.doSlideClose = !1;
                var e = Math.abs(this.currentX)
                  , t = Math.abs(this.currentY);
                if (0 < e && e >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                    this.yOffset = 0,
                    this.lastDirection = "x",
                    this.setTranslate(this.dragContainer, this.currentX, 0);
                    var i = this.shouldChange();
                    if (!this.instance.settings.dragAutoSnap && i && (this.doSlideChange = i),
                    this.instance.settings.dragAutoSnap && i)
                        return this.instance.preventOutsideClick = !0,
                        this.toleranceReached = !0,
                        this.active = !1,
                        this.instance.preventOutsideClick = !0,
                        this.dragEnd(null),
                        "right" == i && this.instance.prevSlide(),
                        void ("left" == i && this.instance.nextSlide())
                }
                0 < this.toleranceY && 0 < t && e <= t && (!this.lastDirection || "y" == this.lastDirection) && (this.xOffset = 0,
                this.lastDirection = "y",
                this.setTranslate(this.dragContainer, 0, this.currentY),
                i = this.shouldClose(),
                !this.instance.settings.dragAutoSnap && i && (this.doSlideClose = !0),
                this.instance.settings.dragAutoSnap && i && this.instance.close())
            }
        }
    }, {
        key: "shouldChange",
        value: function() {
            var e, t = !1;
            return Math.abs(this.currentX) >= this.toleranceX && (("left" == (e = 0 < this.currentX ? "right" : "left") && this.slide !== this.slide.parentNode.lastChild || "right" == e && this.slide !== this.slide.parentNode.firstChild) && (t = e)),
            t
        }
    }, {
        key: "shouldClose",
        value: function() {
            var e = !1;
            return e = Math.abs(this.currentY) >= this.toleranceY ? !0 : e
        }
    }, {
        key: "setTranslate",
        value: function(e, t, i) {
            e.style.transition = 3 < arguments.length && void 0 !== arguments[3] && arguments[3] ? "all .2s ease" : "",
            e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
        }
    }]);
    var G = m;
    function m() {
        var t = this
          , e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          , i = (r(this, m),
        e.dragEl)
          , s = e.toleranceX
          , s = void 0 === s ? 40 : s
          , n = e.toleranceY
          , n = void 0 === n ? 65 : n
          , a = e.slide
          , a = void 0 === a ? null : a
          , e = e.instance
          , e = void 0 === e ? null : e;
        this.el = i,
        this.active = !1,
        this.dragging = !1,
        this.currentX = null,
        this.currentY = null,
        this.initialX = null,
        this.initialY = null,
        this.xOffset = 0,
        this.yOffset = 0,
        this.direction = null,
        this.lastDirection = null,
        this.toleranceX = s,
        this.toleranceY = n,
        this.toleranceReached = !1,
        this.dragContainer = this.el,
        this.slide = a,
        this.instance = e,
        this.el.addEventListener("mousedown", function(e) {
            return t.dragStart(e)
        }, !1),
        this.el.addEventListener("mouseup", function(e) {
            return t.dragEnd(e)
        }, !1),
        this.el.addEventListener("mousemove", function(e) {
            return t.drag(e)
        }, !1)
    }
    function U(e) {
        var t = N(e.target, ".gslide-media");
        "enterfullscreen" === e.type && $(t, "fullscreen"),
        "exitfullscreen" === e.type && O(t, "fullscreen")
    }
    function Q(e, t, i, s) {
        var n, a, r, e = e.querySelector(".gslide-media"), o = (s = {
            url: t.href,
            callback: s
        },
        o = s.url,
        n = s.allow,
        a = s.callback,
        s = s.appendTo,
        (r = document.createElement("iframe")).className = "vimeo-video gvideo",
        r.src = o,
        r.style.width = "100%",
        r.style.height = "100%",
        n && r.setAttribute("allow", n),
        r.onload = function() {
            r.onload = null,
            $(r, "node-ready"),
            H(a) && a()
        }
        ,
        s && s.appendChild(r),
        r);
        e.parentNode.style.maxWidth = t.width,
        e.parentNode.style.height = t.height,
        e.appendChild(o)
    }
    e(f, [{
        key: "sourceType",
        value: function(e) {
            var t = e;
            if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))
                return "image";
            if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
                return "video";
            if (e.match(/vimeo\.com\/([0-9]*)/))
                return "video";
            if (null !== e.match(/\.(mp4|ogg|webm|mov)/))
                return "video";
            if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/))
                return "audio";
            if (-1 < e.indexOf("#") && "" !== t.split("#").pop().trim())
                return "inline";
            return -1 < e.indexOf("goajax=true") ? "ajax" : "external"
        }
    }, {
        key: "parseConfig",
        value: function(s, n) {
            var a = this
              , r = c({
                descPosition: n.descPosition
            }, this.defaults);
            if (d(s) && !B(s))
                return w(s, "type") || (w(s, "content") && s.content ? s.type = "inline" : w(s, "href") && (s.type = this.sourceType(s.href))),
                t = c(r, s),
                this.setSize(t, n),
                t;
            var o, e, t = "", l = s.getAttribute("data-glightbox"), i = s.nodeName.toLowerCase();
            if ("a" === i && (t = s.href),
            "img" === i && (t = s.src,
            r.alt = s.alt),
            r.href = t,
            u(r, function(e, t) {
                w(n, t) && "width" !== t && (r[t] = n[t]);
                var i = s.dataset[t];
                q(i) || (r[t] = a.sanitizeValue(i))
            }),
            r.content && (r.type = "inline"),
            !r.type && t && (r.type = this.sourceType(t)),
            q(l) ? (r.title || "a" != i || (q(t = s.title) || "" === t || (r.title = t)),
            r.title || "img" != i || (q(t = s.alt) || "" === t || (r.title = t))) : (o = [],
            u(r, function(e, t) {
                o.push(";\\s?" + t)
            }),
            o = o.join("\\s?:|"),
            "" !== l.trim() && u(r, function(e, t) {
                var i = l
                  , s = new RegExp("s?" + t + "s?:s?(.*?)(" + o + "s?:|$)")
                  , i = i.match(s);
                i && i.length && i[1] && (s = i[1].trim().replace(/;\s*$/, ""),
                r[t] = a.sanitizeValue(s))
            })),
            r.description && "." === r.description.substring(0, 1)) {
                try {
                    e = document.querySelector(r.description).innerHTML
                } catch (e) {
                    if (!(e instanceof DOMException))
                        throw e
                }
                e && (r.description = e)
            }
            return r.description || (i = s.querySelector(".glightbox-desc")) && (r.description = i.innerHTML),
            this.setSize(r, n, s),
            this.slideConfig = r
        }
    }, {
        key: "setSize",
        value: function(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
              , s = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width)
              , t = this.checkSize(t.height);
            return e.width = w(e, "width") && "" !== e.width ? this.checkSize(e.width) : s,
            e.height = w(e, "height") && "" !== e.height ? this.checkSize(e.height) : t,
            i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width,
            e._hasCustomHeight = !!i.dataset.height),
            e
        }
    }, {
        key: "checkSize",
        value: function(e) {
            return R(e) ? "".concat(e, "px") : e
        }
    }, {
        key: "sanitizeValue",
        value: function(e) {
            return "true" !== e && "false" !== e ? e : "true" === e
        }
    }]);
    var K = f;
    function f() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        r(this, f),
        this.defaults = {
            href: "",
            sizes: "",
            srcset: "",
            title: "",
            type: "",
            videoProvider: "",
            description: "",
            alt: "",
            descPosition: "bottom",
            effect: "",
            width: "",
            height: "",
            content: !1,
            zoomable: !0,
            draggable: !0
        },
        d(e) && (this.defaults = c(this.defaults, e))
    }
    e(T, [{
        key: "setContent",
        value: function() {
            var t = this
              , i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
              , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (z(i, "loaded"))
                return !1;
            var s, n = this.instance.settings, a = this.slideConfig, r = y(), o = (H(n.beforeSlideLoad) && n.beforeSlideLoad({
                index: this.index,
                slide: i,
                player: !1
            }),
            a.type), l = a.descPosition, c = i.querySelector(".gslide-media"), d = i.querySelector(".gslide-title"), h = i.querySelector(".gslide-desc"), u = i.querySelector(".gdesc-inner"), p = e, m = "gSlideTitle_" + this.index, f = "gSlideDesc_" + this.index;
            if (H(n.afterSlideLoad) && (p = function() {
                H(e) && e(),
                n.afterSlideLoad({
                    index: t.index,
                    slide: i,
                    player: t.instance.getSlidePlayerInstance(t.index)
                })
            }
            ),
            "" == a.title && "" == a.description ? u && u.parentNode.parentNode.removeChild(u.parentNode) : (d && "" !== a.title ? (d.id = m,
            d.innerHTML = a.title) : d.parentNode.removeChild(d),
            h && "" !== a.description ? (h.id = f,
            r && 0 < n.moreLength ? (a.smallDescription = this.slideShortDesc(a.description, n.moreLength, n.moreText),
            h.innerHTML = a.smallDescription,
            this.descriptionEvents(h, a)) : h.innerHTML = a.description) : h.parentNode.removeChild(h),
            $(c.parentNode, "desc-".concat(l)),
            $(u.parentNode, "description-".concat(l))),
            $(c, "gslide-".concat(o)),
            $(i, "loaded"),
            "video" === o)
                !function(t, i, s, n) {
                    var a = this
                      , e = t.querySelector(".ginner-container")
                      , r = "gvideo" + s
                      , o = t.querySelector(".gslide-media")
                      , l = this.getAllPlayers()
                      , c = ($(e, "gvideo-container"),
                    o.insertBefore(g('<div class="gvideo-wrapper"></div>'), o.firstChild),
                    t.querySelector(".gvideo-wrapper"))
                      , d = (C(this.settings.plyr.css, "Plyr"),
                    i.href)
                      , h = null == i ? void 0 : i.videoProvider
                      , u = !1;
                    o.style.maxWidth = i.width,
                    C(this.settings.plyr.js, "Plyr", function() {
                        "local" !== (h = !(h = !h && d.match(/vimeo\.com\/([0-9]*)/) ? "vimeo" : h) && (d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) ? "youtube" : h) && h || (h = "local",
                        e = '<video id="' + r + '" ',
                        e = (e = (e += 'style="background:#000; max-width: '.concat(i.width, ';" ')) + 'preload="metadata" poster="' + i.poster + '" x-webkit-airplay="allow" playsinline controls class="gvideo-local">') + '<source src="'.concat(d, '">'),
                        u = g(e += "</video>"));
                        var e = u || g('<div id="'.concat(r, '" data-plyr-provider="').concat(h, '" data-plyr-embed-id="').concat(d, '"></div>'))
                          , e = ($(c, "".concat(h, "-video gvideo")),
                        c.appendChild(e),
                        c.setAttribute("data-id", r),
                        c.setAttribute("data-index", s),
                        w(a.settings.plyr, "config") ? a.settings.plyr.config : {})
                          , e = new Plyr("#" + r,e);
                        e.on("ready", function(e) {
                            l[r] = e.detail.plyr,
                            H(n) && n()
                        }),
                        v(function() {
                            return t.querySelector("iframe") && "true" == t.querySelector("iframe").dataset.ready
                        }, function() {
                            a.resize(t)
                        }),
                        e.on("enterfullscreen", U),
                        e.on("exitfullscreen", U)
                    })
                }
                .apply(this.instance, [i, a, this.index, p]);
            else {
                if ("external" !== o)
                    return "inline" === o ? (function(e, t, i, s) {
                        var n, a = this, e = e.querySelector(".gslide-media"), r = !(!w(t, "href") || !t.href) && t.href.split("#").pop().trim(), o = !(!w(t, "content") || !t.content) && t.content;
                        if (o && (b(o) && (n = g('<div class="ginlined-content">'.concat(o, "</div>"))),
                        B(o) && ("none" == o.style.display && (o.style.display = "block"),
                        (l = document.createElement("div")).className = "ginlined-content",
                        l.appendChild(o),
                        n = l)),
                        r) {
                            o = document.getElementById(r);
                            if (!o)
                                return !1;
                            var l = o.cloneNode(!0);
                            l.style.height = t.height,
                            l.style.maxWidth = t.width,
                            $(l, "ginlined-content"),
                            n = l
                        }
                        if (!n)
                            return console.error("Unable to append inline slide content", t),
                            !1;
                        e.style.height = t.height,
                        e.style.width = t.width,
                        e.appendChild(n),
                        this.events["inlineclose" + r] = P("click", {
                            onElement: e.querySelectorAll(".gtrigger-close"),
                            withCallback: function(e) {
                                e.preventDefault(),
                                a.close()
                            }
                        }),
                        H(s) && s()
                    }
                    .apply(this.instance, [i, a, this.index, p]),
                    void (a.draggable && new G({
                        dragEl: i.querySelector(".gslide-inline"),
                        toleranceX: n.dragToleranceX,
                        toleranceY: n.dragToleranceY,
                        slide: i,
                        instance: this.instance
                    }))) : "image" === o ? (d = a,
                    f = this.index,
                    s = function() {
                        var e = i.querySelector("img");
                        a.draggable && new G({
                            dragEl: e,
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: i,
                            instance: t.instance
                        }),
                        a.zoomable && e.naturalWidth > e.offsetWidth && ($(e, "zoomable"),
                        new X(e,i,function() {
                            t.instance.resize()
                        }
                        )),
                        H(p) && p()
                    }
                    ,
                    m = (m = i).querySelector(".gslide-media"),
                    r = new Image,
                    h = "gSlideTitle_" + f,
                    f = "gSlideDesc_" + f,
                    r.addEventListener("load", function() {
                        H(s) && s()
                    }, !1),
                    r.src = d.href,
                    "" != d.sizes && "" != d.srcset && (r.sizes = d.sizes,
                    r.srcset = d.srcset),
                    r.alt = "",
                    q(d.alt) || "" === d.alt || (r.alt = d.alt),
                    "" !== d.title && r.setAttribute("aria-labelledby", h),
                    "" !== d.description && r.setAttribute("aria-describedby", f),
                    d.hasOwnProperty("_hasCustomWidth") && d._hasCustomWidth && (r.style.width = d.width),
                    d.hasOwnProperty("_hasCustomHeight") && d._hasCustomHeight && (r.style.height = d.height),
                    void m.insertBefore(r, m.firstChild)) : void (H(p) && p());
                Q.apply(this, [i, a, this.index, p])
            }
        }
    }, {
        key: "slideShortDesc",
        value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 50
              , i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , s = document.createElement("div");
            s.innerHTML = e;
            var n = i;
            if ((e = s.innerText.trim()).length <= t)
                return e;
            e = e.substr(0, t - 1);
            return n ? (s = null,
            e + '... <a href="#" class="desc-more">' + i + "</a>") : e
        }
    }, {
        key: "descriptionEvents",
        value: function(e, a) {
            var r = this
              , e = e.querySelector(".desc-more");
            if (!e)
                return !1;
            P("click", {
                onElement: e,
                withCallback: function(e, t) {
                    e.preventDefault();
                    var i = document.body
                      , s = N(t, ".gslide-desc");
                    if (!s)
                        return !1;
                    s.innerHTML = a.description,
                    $(i, "gdesc-open");
                    var n = P("click", {
                        onElement: [i, N(s, ".gslide-description")],
                        withCallback: function(e, t) {
                            "a" !== e.target.nodeName.toLowerCase() && (O(i, "gdesc-open"),
                            $(i, "gdesc-closed"),
                            s.innerHTML = a.smallDescription,
                            r.descriptionEvents(s, a),
                            setTimeout(function() {
                                O(i, "gdesc-closed")
                            }, 400),
                            n.destroy())
                        }
                    })
                }
            })
        }
    }, {
        key: "create",
        value: function() {
            return g(this.instance.settings.slideHTML)
        }
    }, {
        key: "getConfig",
        value: function() {
            B(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
            var e = new K(this.instance.settings.slideExtraAttributes);
            return this.slideConfig = e.parseConfig(this.element, this.instance.settings),
            this.slideConfig
        }
    }]);
    var E = T;
    function T(e, t, i) {
        r(this, T),
        this.element = e,
        this.instance = t,
        this.index = i
    }
    var J = y()
      , Z = null !== y() || void 0 !== document.createTouch || "ontouchstart"in window || "onmsgesturechange"in window || navigator.msMaxTouchPoints
      , ee = document.getElementsByTagName("html")[0]
      , te = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }
      , ie = (e(x, [{
        key: "init",
        value: function() {
            var i = this
              , e = this.getSelector();
            e && (this.baseEvents = P("click", {
                onElement: e,
                withCallback: function(e, t) {
                    e.preventDefault(),
                    i.open(t)
                }
            })),
            this.elements = this.getElements()
        }
    }, {
        key: "open",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
              , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (0 === this.elements.length)
                return !1;
            this.activeSlide = null,
            this.prevActiveSlideIndex = null,
            this.prevActiveSlide = null;
            var s, n, a, r, i, o, l, c, d, h, u, p, m, f, g, v, y, b, w, E, T, x, _, S, C, k, A, M, I, t = R(t) ? t : this.settings.startAt, L = (B(e) && ((L = e.getAttribute("data-gallery")) && (this.fullElementsList = this.elements,
            this.elements = this.getGalleryElements(this.elements, L)),
            q(t) && (t = this.getElementIndex(e)) < 0 && (t = 0)),
            R(t) || (t = 0),
            this.build(),
            D(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in),
            document.body);
            0 < window.innerWidth - document.documentElement.clientWidth && ((e = document.createElement("style")).type = "text/css",
            e.className = "gcss-styles",
            document.head.appendChild(e),
            $(L, "gscrollbar-fixer")),
            $(L, "glightbox-open"),
            $(ee, "glightbox-open"),
            J && ($(document.body, "glightbox-mobile"),
            this.settings.slideEffect = "slide",
            this.settings.autoplayVideos = !1),
            this.showSlide(t, !0),
            1 === this.elements.length ? ($(this.prevButton, "glightbox-button-hidden"),
            $(this.nextButton, "glightbox-button-hidden")) : (O(this.prevButton, "glightbox-button-hidden"),
            O(this.nextButton, "glightbox-button-hidden")),
            this.lightboxOpen = !0,
            this.trigger("open"),
            H(this.settings.onOpen) && this.settings.onOpen(),
            Z && this.settings.touchNavigation && ((s = this).events.hasOwnProperty("touch") || (e = F(),
            n = e.width,
            a = e.height,
            c = r = !1,
            v = g = f = m = l = o = i = null,
            x = T = p = u = !(h = d = 1),
            _ = {},
            S = {},
            k = C = E = w = 0,
            e = document.getElementById("glightbox-slider"),
            M = document.querySelector(".goverlay"),
            e = new V(e,{
                touchStart: function(e) {
                    r = !0,
                    (z(e.targetTouches[0].target, "ginner-container") || N(e.targetTouches[0].target, ".gslide-desc") || "a" == e.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1),
                    (r = N(e.targetTouches[0].target, ".gslide-inline") && !z(e.targetTouches[0].target.parentNode, "gslide-inline") ? !1 : r) && (S = e.targetTouches[0],
                    _.pageX = e.targetTouches[0].pageX,
                    _.pageY = e.targetTouches[0].pageY,
                    C = e.targetTouches[0].clientX,
                    k = e.targetTouches[0].clientY,
                    i = s.activeSlide,
                    o = i.querySelector(".gslide-media"),
                    A = i.querySelector(".gslide-inline"),
                    l = null,
                    z(o, "gslide-image") && (l = o.querySelector("img")),
                    769 < (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) && (o = i.querySelector(".ginner-container")),
                    O(M, "greset"),
                    20 < e.pageX && e.pageX < window.innerWidth - 20 || e.preventDefault())
                },
                touchMove: function(e) {
                    if (r && (S = e.targetTouches[0],
                    !u && !p)) {
                        if (A && A.offsetHeight > a) {
                            var t = _.pageX - S.pageX;
                            if (Math.abs(t) <= 13)
                                return !1
                        }
                        c = !0;
                        var i, t = e.targetTouches[0].clientX, e = e.targetTouches[0].clientY, t = C - t, e = k - e;
                        if (Math.abs(t) > Math.abs(e) ? x = !(T = !1) : T = !(x = !1),
                        y = S.pageX - _.pageX,
                        w = 100 * y / n,
                        b = S.pageY - _.pageY,
                        E = 100 * b / a,
                        T && l && (i = 1 - Math.abs(b) / a,
                        M.style.opacity = i,
                        s.settings.touchFollowAxis && (w = 0)),
                        x && (i = 1 - Math.abs(y) / n,
                        o.style.opacity = i,
                        s.settings.touchFollowAxis && (E = 0)),
                        !l)
                            return j(o, "translate3d(".concat(w, "%, 0, 0)"));
                        j(o, "translate3d(".concat(w, "%, ").concat(E, "%, 0)"))
                    }
                },
                touchEnd: function() {
                    var e, t;
                    if (r)
                        return c = !1,
                        p || u ? (g = m,
                        void (v = f)) : (e = Math.abs(parseInt(E)),
                        t = Math.abs(parseInt(w)),
                        29 < e && l ? void s.close() : e < 29 && t < 25 ? ($(M, "greset"),
                        M.style.opacity = 1,
                        W(o)) : void 0)
                },
                multipointEnd: function() {
                    setTimeout(function() {
                        u = !1
                    }, 50)
                },
                multipointStart: function() {
                    u = !0,
                    d = h || 1
                },
                pinch: function(e) {
                    if (!l || c)
                        return !1;
                    u = !0,
                    l.scaleX = l.scaleY = d * e.zoom;
                    e = d * e.zoom;
                    if (p = !0,
                    e <= 1)
                        return p = !1,
                        e = 1,
                        f = m = g = v = null,
                        void l.setAttribute("style", "");
                    l.style.transform = "scale3d(".concat(e = 4.5 < e ? 4.5 : e, ", ").concat(e, ", 1)"),
                    h = e
                },
                pressMove: function(e) {
                    var t, i;
                    p && !u && (i = S.pageX - _.pageX,
                    t = S.pageY - _.pageY,
                    g && (i += g),
                    v && (t += v),
                    m = i,
                    f = t,
                    i = "translate3d(".concat(i, "px, ").concat(t, "px, 0)"),
                    h && (i += " scale3d(".concat(h, ", ").concat(h, ", 1)")),
                    j(l, i))
                },
                swipe: function(e) {
                    if (!p)
                        if (u)
                            u = !1;
                        else {
                            if ("Left" == e.direction) {
                                if (s.index == s.elements.length - 1)
                                    return W(o);
                                s.nextSlide()
                            }
                            if ("Right" == e.direction) {
                                if (0 == s.index)
                                    return W(o);
                                s.prevSlide()
                            }
                        }
                }
            }),
            s.events.touch = e)),
            this.settings.keyboardNavigation && !(I = this).events.hasOwnProperty("keyboard") && (I.events.keyboard = P("keydown", {
                onElement: window,
                withCallback: function(e, t) {
                    var i = (e = e || window.event).keyCode;
                    if (9 == i) {
                        var s = document.querySelector(".gbtn.focused");
                        if (!s) {
                            var n = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                            if ("input" == n || "textarea" == n || "button" == n)
                                return
                        }
                        e.preventDefault();
                        n = document.querySelectorAll(".gbtn[data-taborder]");
                        if (!n || n.length <= 0)
                            return;
                        if (!s)
                            return void ((e = Y()) && (e.focus(),
                            $(e, "focused")));
                        n = Y(s.getAttribute("data-taborder"));
                        O(s, "focused"),
                        n && (n.focus(),
                        $(n, "focused"))
                    }
                    39 == i && I.nextSlide(),
                    37 == i && I.prevSlide(),
                    27 == i && I.close()
                }
            }))
        }
    }, {
        key: "openAt",
        value: function() {
            this.open(null, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0)
        }
    }, {
        key: "showSlide",
        value: function() {
            var e, t = this, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = (S(this.loader),
            this.index = parseInt(i),
            this.slidesContainer.querySelector(".current")), a = (n && O(n, "current"),
            this.slideAnimateOut(),
            this.slidesContainer.querySelectorAll(".gslide")[i]);
            z(a, "loaded") ? (this.slideAnimateIn(a, s),
            l(this.loader)) : (S(this.loader),
            n = this.elements[i],
            e = {
                index: this.index,
                slide: a,
                slideNode: a,
                slideConfig: n.slideConfig,
                slideIndex: this.index,
                trigger: n.node,
                player: null
            },
            this.trigger("slide_before_load", e),
            n.instance.setContent(a, function() {
                l(t.loader),
                t.resize(),
                t.slideAnimateIn(a, s),
                t.trigger("slide_after_load", e)
            })),
            this.slideDescription = a.querySelector(".gslide-description"),
            this.slideDescriptionContained = this.slideDescription && z(this.slideDescription.parentNode, "gslide-media"),
            this.settings.preload && (this.preloadSlide(i + 1),
            this.preloadSlide(i - 1)),
            this.updateNavigationClasses(),
            this.activeSlide = a
        }
    }, {
        key: "preloadSlide",
        value: function(e) {
            var t = this;
            if (e < 0 || e > this.elements.length - 1)
                return !1;
            if (q(this.elements[e]))
                return !1;
            var i = this.slidesContainer.querySelectorAll(".gslide")[e];
            if (z(i, "loaded"))
                return !1;
            var s = this.elements[e]
              , n = s.type
              , a = {
                index: e,
                slide: i,
                slideNode: i,
                slideConfig: s.slideConfig,
                slideIndex: e,
                trigger: s.node,
                player: null
            };
            this.trigger("slide_before_load", a),
            "video" === n || "external" === n ? setTimeout(function() {
                s.instance.setContent(i, function() {
                    t.trigger("slide_after_load", a)
                })
            }, 200) : s.instance.setContent(i, function() {
                t.trigger("slide_after_load", a)
            })
        }
    }, {
        key: "prevSlide",
        value: function() {
            this.goToSlide(this.index - 1)
        }
    }, {
        key: "nextSlide",
        value: function() {
            this.goToSlide(this.index + 1)
        }
    }, {
        key: "goToSlide",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            if (this.prevActiveSlide = this.activeSlide,
            this.prevActiveSlideIndex = this.index,
            !this.loop() && (e < 0 || e > this.elements.length - 1))
                return !1;
            e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0),
            this.showSlide(e)
        }
    }, {
        key: "insertSlide",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
              , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1
              , e = (t < 0 && (t = this.elements.length),
            new E(e,this,t))
              , i = e.getConfig()
              , s = c({}, i)
              , n = e.create()
              , a = this.elements.length - 1
              , e = (s.index = t,
            s.node = !1,
            s.instance = e,
            s.slideConfig = i,
            this.elements.splice(t, 0, s),
            null)
              , r = null;
            this.slidesContainer && (a < t ? this.slidesContainer.appendChild(n) : (a = this.slidesContainer.querySelectorAll(".gslide")[t],
            this.slidesContainer.insertBefore(n, a)),
            (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t),
            0 === this.index && 0 === t && (this.index = 1),
            this.updateNavigationClasses(),
            e = this.slidesContainer.querySelectorAll(".gslide")[t],
            r = this.getSlidePlayerInstance(t),
            s.slideNode = e),
            this.trigger("slide_inserted", {
                index: t,
                slide: e,
                slideNode: e,
                slideConfig: i,
                slideIndex: t,
                trigger: null,
                player: r
            }),
            H(this.settings.slideInserted) && this.settings.slideInserted({
                index: t,
                slide: e,
                player: r
            })
        }
    }, {
        key: "removeSlide",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1;
            if (e < 0 || e > this.elements.length - 1)
                return !1;
            var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
            t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()),
            t.parentNode.removeChild(t)),
            this.elements.splice(e, 1),
            this.trigger("slide_removed", e),
            H(this.settings.slideRemoved) && this.settings.slideRemoved(e)
        }
    }, {
        key: "slideAnimateIn",
        value: function(e, t) {
            var i = this
              , s = e.querySelector(".gslide-media")
              , n = e.querySelector(".gslide-description")
              , a = {
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide,
                slideNode: this.prevActiveSlide,
                slideIndex: this.prevActiveSlide,
                slideConfig: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                trigger: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            }
              , r = {
                index: this.index,
                slide: this.activeSlide,
                slideNode: this.activeSlide,
                slideConfig: this.elements[this.index].slideConfig,
                slideIndex: this.index,
                trigger: this.elements[this.index].node,
                player: this.getSlidePlayerInstance(this.index)
            };
            0 < s.offsetWidth && n && (l(n),
            n.style.display = ""),
            O(e, this.effectsClasses),
            t ? D(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                i.settings.autoplayVideos && i.slidePlayerPlay(e),
                i.trigger("slide_changed", {
                    prev: a,
                    current: r
                }),
                H(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [a, r])
            }) : (n = "none" !== (s = this.settings.slideEffect) ? this.settings.cssEfects[s].in : s,
            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (n = this.settings.cssEfects.slideBack.in),
            D(e, n, function() {
                i.settings.autoplayVideos && i.slidePlayerPlay(e),
                i.trigger("slide_changed", {
                    prev: a,
                    current: r
                }),
                H(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [a, r])
            })),
            setTimeout(function() {
                i.resize(e)
            }, 100),
            $(e, "current")
        }
    }, {
        key: "slideAnimateOut",
        value: function() {
            if (!this.prevActiveSlide)
                return !1;
            var s = this.prevActiveSlide
              , e = (O(s, this.effectsClasses),
            $(s, "prev"),
            this.settings.slideEffect)
              , e = "none" !== e ? this.settings.cssEfects[e].out : e;
            this.slidePlayerPause(s),
            this.trigger("slide_before_change", {
                prev: {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    slideNode: this.prevActiveSlide,
                    slideIndex: this.prevActiveSlideIndex,
                    slideConfig: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                    player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                },
                current: {
                    index: this.index,
                    slide: this.activeSlide,
                    slideNode: this.activeSlide,
                    slideIndex: this.index,
                    slideConfig: this.elements[this.index].slideConfig,
                    trigger: this.elements[this.index].node,
                    player: this.getSlidePlayerInstance(this.index)
                }
            }),
            H(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide,
                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            }, {
                index: this.index,
                slide: this.activeSlide,
                player: this.getSlidePlayerInstance(this.index)
            }]),
            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (e = this.settings.cssEfects.slideBack.out),
            D(s, e, function() {
                var e = s.querySelector(".ginner-container")
                  , t = s.querySelector(".gslide-media")
                  , i = s.querySelector(".gslide-description");
                e.style.transform = "",
                t.style.transform = "",
                O(t, "greset"),
                t.style.opacity = "",
                i && (i.style.opacity = ""),
                O(s, "prev")
            })
        }
    }, {
        key: "getAllPlayers",
        value: function() {
            return this.videoPlayers
        }
    }, {
        key: "getSlidePlayerInstance",
        value: function(e) {
            var e = "gvideo" + e
              , t = this.getAllPlayers();
            return !(!w(t, e) || !t[e]) && t[e]
        }
    }, {
        key: "stopSlideVideo",
        value: function(e) {
            B(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")),
            console.log("stopSlideVideo is deprecated, use slidePlayerPause");
            var t = this.getSlidePlayerInstance(e);
            t && t.playing && t.pause()
        }
    }, {
        key: "slidePlayerPause",
        value: function(e) {
            B(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index"));
            var t = this.getSlidePlayerInstance(e);
            t && t.playing && t.pause()
        }
    }, {
        key: "playSlideVideo",
        value: function(e) {
            B(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")),
            console.log("playSlideVideo is deprecated, use slidePlayerPlay");
            var t = this.getSlidePlayerInstance(e);
            t && !t.playing && t.play()
        }
    }, {
        key: "slidePlayerPlay",
        value: function(e) {
            var t;
            (!J || null != (t = this.settings.plyr.config) && t.muted) && (B(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")),
            (t = this.getSlidePlayerInstance(e)) && !t.playing && (t.play(),
            this.settings.autofocusVideos && t.elements.container.focus()))
        }
    }, {
        key: "setElements",
        value: function(e) {
            var n = this
              , a = (this.settings.elements = !1,
            []);
            e && e.length && u(e, function(e, t) {
                var e = new E(e,n,t)
                  , i = e.getConfig()
                  , s = c({}, i);
                s.slideConfig = i,
                s.instance = e,
                s.index = t,
                a.push(s)
            }),
            this.elements = a,
            this.lightboxOpen && (this.slidesContainer.innerHTML = "",
            this.elements.length && (u(this.elements, function() {
                var e = g(n.settings.slideHTML);
                n.slidesContainer.appendChild(e)
            }),
            this.showSlide(0, !0)))
        }
    }, {
        key: "getElementIndex",
        value: function(i) {
            var s = !1;
            return u(this.elements, function(e, t) {
                if (w(e, "node") && e.node == i)
                    return s = t,
                    !0
            }),
            s
        }
    }, {
        key: "getElements",
        value: function() {
            var a = this
              , r = []
              , e = (this.elements = this.elements || [],
            !q(this.settings.elements) && k(this.settings.elements) && this.settings.elements.length && u(this.settings.elements, function(e, t) {
                var e = new E(e,a,t)
                  , i = e.getConfig()
                  , s = c({}, i);
                s.node = !1,
                s.index = t,
                s.instance = e,
                s.slideConfig = i,
                r.push(s)
            }),
            !1);
            return (e = this.getSelector() ? document.querySelectorAll(this.getSelector()) : e) && u(e, function(e, t) {
                var i = new E(e,a,t)
                  , s = i.getConfig()
                  , n = c({}, s);
                n.node = e,
                n.index = t,
                n.instance = i,
                n.slideConfig = s,
                n.gallery = e.getAttribute("data-gallery"),
                r.push(n)
            }),
            r
        }
    }, {
        key: "getGalleryElements",
        value: function(e, t) {
            return e.filter(function(e) {
                return e.gallery == t
            })
        }
    }, {
        key: "getSelector",
        value: function() {
            return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
        }
    }, {
        key: "getActiveSlide",
        value: function() {
            return this.slidesContainer.querySelectorAll(".gslide")[this.index]
        }
    }, {
        key: "getActiveSlideIndex",
        value: function() {
            return this.index
        }
    }, {
        key: "getAnimationClasses",
        value: function() {
            var e, t, i = [];
            for (e in this.settings.cssEfects)
                this.settings.cssEfects.hasOwnProperty(e) && (t = this.settings.cssEfects[e],
                i.push("g".concat(t.in)),
                i.push("g".concat(t.out)));
            return i.join(" ")
        }
    }, {
        key: "build",
        value: function() {
            var i = this;
            if (this.built)
                return !1;
            var e = document.body.childNodes
              , t = []
              , e = (u(e, function(e) {
                e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (t.push(e),
                e.setAttribute("aria-hidden", "true"))
            }),
            w(this.settings.svg, "next") ? this.settings.svg.next : "")
              , s = w(this.settings.svg, "prev") ? this.settings.svg.prev : ""
              , n = w(this.settings.svg, "close") ? this.settings.svg.close : ""
              , a = this.settings.lightboxHTML
              , e = (a = g(a = (a = (a = a.replace(/{nextSVG}/g, e)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, n)),
            document.body.appendChild(a),
            document.getElementById("glightbox-body"))
              , s = (this.modal = e).querySelector(".gclose");
            this.prevButton = e.querySelector(".gprev"),
            this.nextButton = e.querySelector(".gnext"),
            this.overlay = e.querySelector(".goverlay"),
            this.loader = e.querySelector(".gloader"),
            this.slidesContainer = document.getElementById("glightbox-slider"),
            this.bodyHiddenChildElms = t,
            this.events = {},
            $(this.modal, "glightbox-" + this.settings.skin),
            this.settings.closeButton && s && (this.events.close = P("click", {
                onElement: s,
                withCallback: function(e, t) {
                    e.preventDefault(),
                    i.close()
                }
            })),
            s && !this.settings.closeButton && s.parentNode.removeChild(s),
            this.nextButton && (this.events.next = P("click", {
                onElement: this.nextButton,
                withCallback: function(e, t) {
                    e.preventDefault(),
                    i.nextSlide()
                }
            })),
            this.prevButton && (this.events.prev = P("click", {
                onElement: this.prevButton,
                withCallback: function(e, t) {
                    e.preventDefault(),
                    i.prevSlide()
                }
            })),
            this.settings.closeOnOutsideClick && (this.events.outClose = P("click", {
                onElement: e,
                withCallback: function(e, t) {
                    i.preventOutsideClick || z(document.body, "glightbox-mobile") || N(e.target, ".ginner-container") || N(e.target, ".gbtn") || z(e.target, "gnext") || z(e.target, "gprev") || i.close()
                }
            })),
            u(this.elements, function(e, t) {
                i.slidesContainer.appendChild(e.instance.create()),
                e.slideNode = i.slidesContainer.querySelectorAll(".gslide")[t]
            }),
            Z && ($(document.body, "glightbox-touch"),
            this.settings.autoplayVideos = !1),
            this.events.resize = P("resize", {
                onElement: window,
                withCallback: function() {
                    i.resize()
                }
            }),
            this.built = !0
        }
    }, {
        key: "resize",
        value: function() {
            var e, t, i, s, n, a, r, o = (o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || this.activeSlide;
            o && !z(o, "zoomed") && (i = F(),
            e = o.querySelector(".gvideo-wrapper"),
            o = o.querySelector(".gslide-image"),
            t = this.slideDescription,
            a = i.width,
            i = i.height,
            (a <= 768 ? $ : O)(document.body, "glightbox-mobile"),
            (e || o) && (s = !1,
            t && (z(t, "description-bottom") || z(t, "description-top")) && !z(t, "gabsolute") && (s = !0),
            o && (a <= 768 ? o.querySelector("img") : s && (n = t.offsetHeight,
            (o = o.querySelector("img")).setAttribute("style", "max-height: calc(100vh - ".concat(n, "px)")),
            t.setAttribute("style", "max-width: ".concat(o.offsetWidth, "px;")))),
            e && ((n = w(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "") || (o = e.clientWidth,
            r = e.clientHeight,
            n = "".concat(o / (o = o / r), ":").concat(r / o)),
            r = n.split(":"),
            o = this.settings.videosWidth,
            n = this.settings.videosWidth,
            r = (n = R(o) || -1 !== o.indexOf("px") ? parseInt(o) : -1 !== o.indexOf("vw") ? a * parseInt(o) / 100 : -1 !== o.indexOf("vh") ? i * parseInt(o) / 100 : -1 !== o.indexOf("%") ? a * parseInt(o) / 100 : parseInt(e.clientWidth)) / (parseInt(r[0]) / parseInt(r[1])),
            r = Math.floor(r),
            s && (i -= t.offsetHeight),
            a < n || i < r || i < r && n < a ? (r = e.offsetWidth,
            n = e.offsetHeight,
            e.parentNode.setAttribute("style", "max-width: ".concat((r = {
                width: r * (a = i / n),
                height: n * a
            }).width, "px")),
            s && t.setAttribute("style", "max-width: ".concat(r.width, "px;"))) : (e.parentNode.style.maxWidth = "".concat(o),
            s && t.setAttribute("style", "max-width: ".concat(o, ";"))))))
        }
    }, {
        key: "reload",
        value: function() {
            this.init()
        }
    }, {
        key: "updateNavigationClasses",
        value: function() {
            var e = this.loop();
            O(this.nextButton, "disabled"),
            O(this.prevButton, "disabled"),
            0 == this.index && this.elements.length - 1 == 0 ? ($(this.prevButton, "disabled"),
            $(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || $(this.nextButton, "disabled") : $(this.prevButton, "disabled")
        }
    }, {
        key: "loop",
        value: function() {
            var e = w(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
            return e = w(this.settings, "loop") ? this.settings.loop : e
        }
    }, {
        key: "close",
        value: function() {
            var i = this;
            if (!this.lightboxOpen) {
                if (this.events) {
                    for (var e in this.events)
                        this.events.hasOwnProperty(e) && this.events[e].destroy();
                    this.events = null
                }
                return !1
            }
            if (this.closing)
                return !1;
            this.closing = !0,
            this.slidePlayerPause(this.activeSlide),
            this.fullElementsList && (this.elements = this.fullElementsList),
            this.bodyHiddenChildElms.length && u(this.bodyHiddenChildElms, function(e) {
                e.removeAttribute("aria-hidden")
            }),
            $(this.modal, "glightbox-closing"),
            D(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out),
            D(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                if (i.activeSlide = null,
                i.prevActiveSlideIndex = null,
                i.prevActiveSlide = null,
                i.built = !1,
                i.events) {
                    for (var e in i.events)
                        i.events.hasOwnProperty(e) && i.events[e].destroy();
                    i.events = null
                }
                var t = document.body
                  , t = (O(ee, "glightbox-open"),
                O(t, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),
                i.modal.parentNode.removeChild(i.modal),
                i.trigger("close"),
                H(i.settings.onClose) && i.settings.onClose(),
                document.querySelector(".gcss-styles"));
                t && t.parentNode.removeChild(t),
                i.lightboxOpen = !1,
                i.closing = null
            })
        }
    }, {
        key: "destroy",
        value: function() {
            this.close(),
            this.clearAllEvents(),
            this.baseEvents && this.baseEvents.destroy()
        }
    }, {
        key: "on",
        value: function(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if (!e || !H(t))
                throw new TypeError("Event name and callback must be defined");
            this.apiEvents.push({
                evt: e,
                once: i,
                callback: t
            })
        }
    }, {
        key: "once",
        value: function(e, t) {
            this.on(e, t, !0)
        }
    }, {
        key: "trigger",
        value: function(n) {
            var t = this
              , a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
              , r = [];
            u(this.apiEvents, function(e, t) {
                var i = e.evt
                  , s = e.once
                  , e = e.callback;
                i == n && (e(a),
                s && r.push(t))
            }),
            r.length && u(r, function(e) {
                return t.apiEvents.splice(e, 1)
            })
        }
    }, {
        key: "clearAllEvents",
        value: function() {
            this.apiEvents.splice(0, this.apiEvents.length)
        }
    }, {
        key: "version",
        value: function() {
            return "3.1.0"
        }
    }]),
    x);
    function x() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        r(this, x),
        this.customOptions = e,
        this.settings = c(te, e),
        this.effectsClasses = this.getAnimationClasses(),
        this.videoPlayers = {},
        this.apiEvents = [],
        this.fullElementsList = !1
    }
    return function() {
        var e = new ie(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
        return e.init(),
        e
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Headhesive = t()
}(this, function() {
    "use strict";
    function e(i, s) {
        function n() {
            d = l(),
            c = null,
            o = i.apply(a, r),
            a = r = null
        }
        var a, r, o, l = Date.now || function() {
            return (new Date).getTime()
        }
        , c = null, d = 0;
        return function() {
            var e = l()
              , t = s - (e - d);
            return a = this,
            r = arguments,
            t <= 0 ? (clearTimeout(c),
            c = null,
            d = e,
            o = i.apply(a, r),
            a = r = null) : c = c || setTimeout(n, t),
            o
        }
    }
    function t(e, t) {
        "querySelector"in document && "addEventListener"in window && (this.visible = !1,
        this.options = {
            offset: 300,
            offsetSide: "top",
            classes: {
                clone: "headhesive",
                stick: "headhesive--stick",
                unstick: "headhesive--unstick"
            },
            throttle: 250,
            onInit: function() {},
            onStick: function() {},
            onUnstick: function() {},
            onDestroy: function() {}
        },
        this.elem = "string" == typeof e ? document.querySelector(e) : e,
        this.options = s(this.options, t),
        this.init())
    }
    var s = function(e, t) {
        for (var i in t)
            t.hasOwnProperty(i) && (e[i] = "object" == typeof t[i] ? s(e[i], t[i]) : t[i]);
        return e
    };
    return t.prototype = {
        constructor: t,
        init: function() {
            if (this.clonedElem = this.elem.cloneNode(!0),
            this.clonedElem.className += " " + this.options.classes.clone,
            document.body.insertBefore(this.clonedElem, document.body.firstChild),
            "number" == typeof this.options.offset)
                this.scrollOffset = this.options.offset;
            else {
                if ("string" != typeof this.options.offset)
                    throw new Error("Invalid offset: " + this.options.offset);
                this._setScrollOffset()
            }
            this._throttleUpdate = e(this.update.bind(this), this.options.throttle),
            this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle),
            window.addEventListener("scroll", this._throttleUpdate, !1),
            window.addEventListener("resize", this._throttleScrollOffset, !1),
            this.options.onInit.call(this)
        },
        _setScrollOffset: function() {
            "string" == typeof this.options.offset && (this.scrollOffset = function(e, t) {
                for (var i = 0, s = e.offsetHeight; e; )
                    i += e.offsetTop,
                    e = e.offsetParent;
                return "bottom" === t && (i += s),
                i
            }(document.querySelector(this.options.offset), this.options.offsetSide))
        },
        destroy: function() {
            document.body.removeChild(this.clonedElem),
            window.removeEventListener("scroll", this._throttleUpdate),
            window.removeEventListener("resize", this._throttleScrollOffset),
            this.options.onDestroy.call(this)
        },
        stick: function() {
            this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*","g"), ""),
            this.clonedElem.className += " " + this.options.classes.stick,
            this.visible = !0,
            this.options.onStick.call(this))
        },
        unstick: function() {
            this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*","g"), ""),
            this.clonedElem.className += " " + this.options.classes.unstick,
            this.visible = !1,
            this.options.onUnstick.call(this))
        },
        update: function() {
            (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > this.scrollOffset ? this.stick() : this.unstick()
        }
    },
    t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        var i;
        if (e && t)
            return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t),
            this
    }
    ,
    t.once = function(e, t) {
        var i;
        if (e && t)
            return this.on(e, t),
            ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0,
            this
    }
    ,
    t.off = function(e, t) {
        e = this._events && this._events[e];
        if (e && e.length)
            return -1 != (t = e.indexOf(t)) && e.splice(t, 1),
            this
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
                var a = i[n];
                s && s[a] && (this.off(e, a),
                delete s[a]),
                a.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function a(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function r(e, t, i) {
        if (!(this instanceof r))
            return new r(e,t,i);
        var s, n = e;
        return (n = "string" == typeof e ? document.querySelectorAll(e) : n) ? (this.elements = (s = n,
        Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? c.call(s) : [s]),
        this.options = a({}, this.options),
        "function" == typeof t ? i = t : a(this.options, t),
        i && this.on("always", i),
        this.getImages(),
        o && (this.jqDeferred = new o.Deferred),
        void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (n || e))
    }
    function i(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var o = t.jQuery
      , l = t.console
      , c = Array.prototype.slice
      , d = ((r.prototype = Object.create(e.prototype)).options = {},
    r.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    r.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), s = 0; s < i.length; s++) {
                var n = i[s];
                this.addImage(n)
            }
            if ("string" == typeof this.options.background)
                for (var a = e.querySelectorAll(this.options.background), s = 0; s < a.length; s++) {
                    var r = a[s];
                    this.addElementBackgroundImages(r)
                }
        }
    }
    ,
    {
        1: !0,
        9: !0,
        11: !0
    });
    return r.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(t.backgroundImage); null !== s; ) {
                var n = s && s[2];
                n && this.addBackground(n, e),
                s = i.exec(t.backgroundImage)
            }
    }
    ,
    r.prototype.addImage = function(e) {
        e = new i(e);
        this.images.push(e)
    }
    ,
    r.prototype.addBackground = function(e, t) {
        e = new s(e,t);
        this.images.push(e)
    }
    ,
    r.prototype.check = function() {
        function t(e, t, i) {
            setTimeout(function() {
                s.progress(e, t, i)
            })
        }
        var s = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    r.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, e, t)
    }
    ,
    r.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred && (e = this.hasAnyBroken ? "reject" : "resolve",
        this.jqDeferred[e](this))
    }
    ,
    (i.prototype = Object.create(e.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    i.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    i.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    i.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    i.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    (s.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    (r.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((o = e).fn.imagesLoaded = function(e, t) {
            return new r(this,e,t).jqDeferred.promise(o(this))
        }
        )
    }
    )(),
    r
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function(e, t) {
    "use strict";
    function i(l, c, d) {
        (d = d || t || e.jQuery) && (c.prototype.option || (c.prototype.option = function(e) {
            d.isPlainObject(e) && (this.options = d.extend(!0, this.options, e))
        }
        ),
        d.fn[l] = function(e) {
            var t, s, n, a, r, o;
            return "string" == typeof e ? (t = h.call(arguments, 1),
            n = t,
            r = "$()." + l + '("' + (s = e) + '")',
            (t = this).each(function(e, t) {
                var i, t = d.data(t, l);
                t ? (i = t[s]) && "_" != s.charAt(0) ? (i = i.apply(t, n),
                a = void 0 === a ? i : a) : u(r + " is not a valid method") : u(l + " not initialized. Cannot call methods, i.e. " + r)
            }),
            void 0 !== a ? a : t) : (o = e,
            this.each(function(e, t) {
                var i = d.data(t, l);
                i ? (i.option(o),
                i._init()) : (i = new c(t,o),
                d.data(t, l, i))
            }),
            this)
        }
        ,
        s(d))
    }
    function s(e) {
        e && !e.bridget && (e.bridget = i)
    }
    var h = Array.prototype.slice
      , n = e.console
      , u = void 0 === n ? function() {}
    : function(e) {
        n.error(e)
    }
    ;
    return s(t || e.jQuery),
    i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        var i;
        if (e && t)
            return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t),
            this
    }
    ,
    t.once = function(e, t) {
        var i;
        if (e && t)
            return this.on(e, t),
            ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0,
            this
    }
    ,
    t.off = function(e, t) {
        e = this._events && this._events[e];
        if (e && e.length)
            return -1 != (t = e.indexOf(t)) && e.splice(t, 1),
            this
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
                var a = i[n];
                s && s[a] && (this.off(e, a),
                delete s[a]),
                a.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";
    function g(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }
    function v(e) {
        e = getComputedStyle(e);
        return e || t("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function y(e) {
        if (T || (T = !0,
        (d = document.createElement("div")).style.width = "200px",
        d.style.padding = "1px 2px 3px 4px",
        d.style.borderStyle = "solid",
        d.style.borderWidth = "1px 2px 3px 4px",
        d.style.boxSizing = "border-box",
        (c = document.body || document.documentElement).appendChild(d),
        a = v(d),
        b = 200 == Math.round(g(a.width)),
        y.isBoxSizeOuter = b,
        c.removeChild(d)),
        (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == typeof e && e.nodeType) {
            var t = v(e);
            if ("none" == t.display) {
                for (var i = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, s = 0; s < E; s++)
                    i[w[s]] = 0;
                return i
            }
            var n = {};
            n.width = e.offsetWidth,
            n.height = e.offsetHeight;
            for (var a = n.isBorderBox = "border-box" == t.boxSizing, r = 0; r < E; r++) {
                var o = w[r]
                  , l = t[o]
                  , l = parseFloat(l);
                n[o] = isNaN(l) ? 0 : l
            }
            var c = n.paddingLeft + n.paddingRight
              , d = n.paddingTop + n.paddingBottom
              , e = n.marginLeft + n.marginRight
              , h = n.marginTop + n.marginBottom
              , u = n.borderLeftWidth + n.borderRightWidth
              , p = n.borderTopWidth + n.borderBottomWidth
              , m = a && b
              , f = g(t.width)
              , f = (!1 !== f && (n.width = f + (m ? 0 : c + u)),
            g(t.height));
            return !1 !== f && (n.height = f + (m ? 0 : d + p)),
            n.innerWidth = n.width - (c + u),
            n.innerHeight = n.height - (d + p),
            n.outerWidth = n.width + e,
            n.outerHeight = n.height + h,
            n
        }
        var d, c, a
    }
    var b, t = "undefined" == typeof console ? function() {}
    : function(e) {
        console.error(e)
    }
    , w = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], E = w.length, T = !1;
    return y
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var i = function() {
        var e = window.Element.prototype;
        if (e.matches)
            return "matches";
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var s = t[i] + "MatchesSelector";
            if (e[s])
                return s
        }
    }();
    return function(e, t) {
        return e[i](t)
    }
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector)
}(window, function(i, a) {
    var l = {
        extend: function(e, t) {
            for (var i in t)
                e[i] = t[i];
            return e
        },
        modulo: function(e, t) {
            return (e % t + t) % t
        }
    }
      , t = Array.prototype.slice
      , c = (l.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
    }
    ,
    l.removeFrom = function(e, t) {
        t = e.indexOf(t);
        -1 != t && e.splice(t, 1)
    }
    ,
    l.getParent = function(e, t) {
        for (; e.parentNode && e != document.body; )
            if (e = e.parentNode,
            a(e, t))
                return e
    }
    ,
    l.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }
    ,
    l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    l.filterFindElements = function(e, s) {
        e = l.makeArray(e);
        var n = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement)
                if (s) {
                    a(e, s) && n.push(e);
                    for (var t = e.querySelectorAll(s), i = 0; i < t.length; i++)
                        n.push(t[i])
                } else
                    n.push(e)
        }),
        n
    }
    ,
    l.debounceMethod = function(e, t, s) {
        s = s || 100;
        var n = e.prototype[t]
          , a = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[a]
              , t = (clearTimeout(e),
            arguments)
              , i = this;
            this[a] = setTimeout(function() {
                n.apply(i, t),
                delete i[a]
            }, s)
        }
    }
    ,
    l.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }
    ,
    l.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    }
    ,
    i.console);
    return l.htmlInit = function(r, o) {
        l.docReady(function() {
            var e = l.toDashed(o)
              , s = "data-" + e
              , t = document.querySelectorAll("[" + s + "]")
              , e = document.querySelectorAll(".js-" + e)
              , t = l.makeArray(t).concat(l.makeArray(e))
              , n = s + "-options"
              , a = i.jQuery;
            t.forEach(function(t) {
                var e, i = t.getAttribute(s) || t.getAttribute(n);
                try {
                    e = i && JSON.parse(i)
                } catch (e) {
                    return void (c && c.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                i = new r(t,e);
                a && a.data(t, o, i)
            })
        })
    }
    ,
    l
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {},
    e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
    "use strict";
    function i(e, t) {
        e && (this.element = e,
        this.layout = t,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var s = document.documentElement.style
      , n = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , s = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[n]
      , r = {
        transform: s,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay"
    }
      , e = i.prototype = Object.create(e.prototype)
      , o = (e.constructor = i,
    e._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    e.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    e.getSize = function() {
        this.size = t(this.element)
    }
    ,
    e.css = function(e) {
        var t, i = this.element.style;
        for (t in e)
            i[r[t] || t] = e[t]
    }
    ,
    e.getPosition = function() {
        var e = getComputedStyle(this.element)
          , t = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , s = e[t ? "left" : "right"]
          , e = e[i ? "top" : "bottom"]
          , n = parseFloat(s)
          , a = parseFloat(e)
          , r = this.layout.size;
        -1 != s.indexOf("%") && (n = n / 100 * r.width),
        -1 != e.indexOf("%") && (a = a / 100 * r.height),
        n = isNaN(n) ? 0 : n,
        a = isNaN(a) ? 0 : a,
        n -= t ? r.paddingLeft : r.paddingRight,
        a -= i ? r.paddingTop : r.paddingBottom,
        this.position.x = n,
        this.position.y = a
    }
    ,
    e.layoutPosition = function() {
        var e = this.layout.size
          , t = {}
          , i = this.layout._getOption("originLeft")
          , s = this.layout._getOption("originTop")
          , n = i ? "right" : "left"
          , a = this.position.x + e[i ? "paddingLeft" : "paddingRight"]
          , i = (t[i ? "left" : "right"] = this.getXValue(a),
        t[n] = "",
        s ? "paddingTop" : "paddingBottom")
          , a = s ? "bottom" : "top"
          , n = this.position.y + e[i];
        t[s ? "top" : "bottom"] = this.getYValue(n),
        t[a] = "",
        this.css(t),
        this.emitEvent("layout", [this])
    }
    ,
    e.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }
    ,
    e.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }
    ,
    e._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x
          , s = this.position.y
          , n = e == this.position.x && t == this.position.y;
        this.setPosition(e, t),
        n && !this.isTransitioning ? this.layoutPosition() : ((n = {}).transform = this.getTranslate(e - i, t - s),
        this.transition({
            to: n,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        }))
    }
    ,
    e.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }
    ,
    e.goTo = function(e, t) {
        this.setPosition(e, t),
        this.layoutPosition()
    }
    ,
    e.moveTo = e._transitionTo,
    e.setPosition = function(e, t) {
        this.position.x = parseFloat(e),
        this.position.y = parseFloat(t)
    }
    ,
    e._nonTransition = function(e) {
        for (var t in this.css(e.to),
        e.isCleaning && this._removeStyles(e.to),
        e.onTransitionEnd)
            e.onTransitionEnd[t].call(this)
    }
    ,
    e.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t, i = this._transn;
            for (t in e.onTransitionEnd)
                i.onEnd[t] = e.onTransitionEnd[t];
            for (t in e.to)
                i.ingProperties[t] = !0,
                e.isCleaning && (i.clean[t] = !0);
            e.from && (this.css(e.from),
            this.element.offsetHeight,
            0),
            this.enableTransition(e.to),
            this.css(e.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(e)
    }
    ,
    "opacity," + s.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    }))
      , l = (e.enableTransition = function() {
        var e;
        this.isTransitioning || (e = "number" == typeof (e = this.layout.options.transitionDuration) ? e + "ms" : e,
        this.css({
            transitionProperty: o,
            transitionDuration: e,
            transitionDelay: this.staggerDelay || 0
        }),
        this.element.addEventListener(a, this, !1))
    }
    ,
    e.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }
    ,
    e.onotransitionend = function(e) {
        this.ontransitionend(e)
    }
    ,
    {
        "-webkit-transform": "transform"
    })
      , c = (e.ontransitionend = function(e) {
        var t, i;
        e.target === this.element && (t = this._transn,
        i = l[e.propertyName] || e.propertyName,
        delete t.ingProperties[i],
        function(e) {
            for (var t in e)
                return;
            return 1
        }(t.ingProperties) && this.disableTransition(),
        i in t.clean && (this.element.style[e.propertyName] = "",
        delete t.clean[i]),
        i in t.onEnd && (t.onEnd[i].call(this),
        delete t.onEnd[i]),
        this.emitEvent("transitionEnd", [this]))
    }
    ,
    e.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(a, this, !1),
        this.isTransitioning = !1
    }
    ,
    e._removeStyles = function(e) {
        var t, i = {};
        for (t in e)
            i[t] = "";
        this.css(i)
    }
    ,
    {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    });
    return e.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    e.stagger = function(e) {
        e = isNaN(e) ? 0 : e,
        this.staggerDelay = e + "ms"
    }
    ,
    e.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    e.remove = function() {
        return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    e.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var e = this.layout.options
          , t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }
    ,
    e.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    e.getHideRevealTransitionEndProperty = function(e) {
        var t, e = this.layout.options[e];
        if (e.opacity)
            return "opacity";
        for (t in e)
            return t
    }
    ,
    e.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var e = this.layout.options
          , t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }
    ,
    e.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    e.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    i
}),
function(n, a) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(e, t, i, s) {
        return a(n, e, t, i, s)
    }) : "object" == typeof module && module.exports ? module.exports = a(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = a(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(e, t, n, s, a) {
    "use strict";
    function r(e, t) {
        var i = s.getQueryElement(e);
        i ? (this.element = i,
        c && (this.$element = c(this.element)),
        this.options = s.extend({}, this.constructor.defaults),
        this.option(t),
        t = ++d,
        this.element.outlayerGUID = t,
        (h[t] = this)._create(),
        this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
    }
    function o(e) {
        function t() {
            e.apply(this, arguments)
        }
        return (t.prototype = Object.create(e.prototype)).constructor = t
    }
    function i() {}
    var l = e.console
      , c = e.jQuery
      , d = 0
      , h = {}
      , u = (r.namespace = "outlayer",
    r.Item = a,
    r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    r.prototype)
      , p = (s.extend(u, t.prototype),
    u.option = function(e) {
        s.extend(this.options, e)
    }
    ,
    u._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }
    ,
    r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    u._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        s.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    u.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    u._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
            var a = new i(t[n],this);
            s.push(a)
        }
        return s
    }
    ,
    u._filterFindItemElements = function(e) {
        return s.filterFindElements(e, this.options.itemSelector)
    }
    ,
    u.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element
        })
    }
    ,
    u.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var e = this._getOption("layoutInstant")
          , e = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    u._init = u.layout,
    u._resetLayout = function() {
        this.getSize()
    }
    ,
    u.getSize = function() {
        this.size = n(this.element)
    }
    ,
    u._getMeasurement = function(e, t) {
        var i, s = this.options[e];
        s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s),
        this[e] = i ? n(i)[t] : s) : this[e] = 0
    }
    ,
    u.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e),
        this._layoutItems(e, t),
        this._postLayout()
    }
    ,
    u._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored
        })
    }
    ,
    u._layoutItems = function(e, i) {
        var s;
        this._emitCompleteOnItems("layout", e),
        e && e.length && (s = [],
        e.forEach(function(e) {
            var t = this._getItemLayoutPosition(e);
            t.item = e,
            t.isInstant = i || e.isLayoutInstant,
            s.push(t)
        }, this),
        this._processLayoutQueue(s))
    }
    ,
    u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    u._processLayoutQueue = function(e) {
        this.updateStagger(),
        e.forEach(function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }
    ,
    u.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void (this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e)
                return e;
            var t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1]
              , e = e && e[2];
            return t.length ? parseFloat(t) * (p[e] || 1) : 0
        }(e),
        this.stagger)
    }
    ,
    u._positionItem = function(e, t, i, s, n) {
        s ? e.goTo(t, i) : (e.stagger(n * this.stagger),
        e.moveTo(t, i))
    }
    ,
    u._postLayout = function() {
        this.resizeContainer()
    }
    ,
    u.resizeContainer = function() {
        var e;
        this._getOption("resizeContainer") && (e = this._getContainerSize()) && (this._setContainerMeasure(e.width, !0),
        this._setContainerMeasure(e.height, !1))
    }
    ,
    u._getContainerSize = i,
    u._setContainerMeasure = function(e, t) {
        var i;
        void 0 !== e && ((i = this.size).isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
        e = Math.max(e, 0),
        this.element.style[t ? "width" : "height"] = e + "px")
    }
    ,
    u._emitCompleteOnItems = function(t, e) {
        function i() {
            a.dispatchEvent(t + "Complete", null, [e])
        }
        function s() {
            ++n == r && i()
        }
        var n, a = this, r = e.length;
        e && r ? (n = 0,
        e.forEach(function(e) {
            e.once(t, s)
        })) : i()
    }
    ,
    u.dispatchEvent = function(e, t, i) {
        var s = t ? [t].concat(i) : i;
        this.emitEvent(e, s),
        c && (this.$element = this.$element || c(this.element),
        t ? ((s = c.Event(t)).type = e,
        this.$element.trigger(s, i)) : this.$element.trigger(e, i))
    }
    ,
    u.ignore = function(e) {
        e = this.getItem(e);
        e && (e.isIgnored = !0)
    }
    ,
    u.unignore = function(e) {
        e = this.getItem(e);
        e && delete e.isIgnored
    }
    ,
    u.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e),
        e.forEach(this.ignore, this))
    }
    ,
    u.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            s.removeFrom(this.stamps, e),
            this.unignore(e)
        }, this)
    }
    ,
    u._find = function(e) {
        if (e)
            return "string" == typeof e && (e = this.element.querySelectorAll(e)),
            s.makeArray(e)
    }
    ,
    u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    u._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect()
          , t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }
    ,
    u._manageStamp = i,
    u._getElementOffset = function(e) {
        var t = e.getBoundingClientRect()
          , i = this._boundingRect
          , e = n(e);
        return {
            left: t.left - i.left - e.marginLeft,
            top: t.top - i.top - e.marginTop,
            right: i.right - t.right - e.marginRight,
            bottom: i.bottom - t.bottom - e.marginBottom
        }
    }
    ,
    u.handleEvent = s.handleEvent,
    u.bindResize = function() {
        e.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    u.unbindResize = function() {
        e.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    u.onresize = function() {
        this.resize()
    }
    ,
    s.debounceMethod(r, "onresize", 100),
    u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    u.needsResizeLayout = function() {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }
    ,
    u.addItems = function(e) {
        e = this._itemize(e);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    u.appended = function(e) {
        e = this.addItems(e);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    u.prepended = function(e) {
        var t, e = this._itemize(e);
        e.length && (t = this.items.slice(0),
        this.items = e.concat(t),
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(e, !0),
        this.reveal(e),
        this.layoutItems(t))
    }
    ,
    u.reveal = function(e) {
        var i;
        this._emitCompleteOnItems("reveal", e),
        e && e.length && (i = this.updateStagger(),
        e.forEach(function(e, t) {
            e.stagger(t * i),
            e.reveal()
        }))
    }
    ,
    u.hide = function(e) {
        var i;
        this._emitCompleteOnItems("hide", e),
        e && e.length && (i = this.updateStagger(),
        e.forEach(function(e, t) {
            e.stagger(t * i),
            e.hide()
        }))
    }
    ,
    u.revealItemElements = function(e) {
        e = this.getItems(e);
        this.reveal(e)
    }
    ,
    u.hideItemElements = function(e) {
        e = this.getItems(e);
        this.hide(e)
    }
    ,
    u.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e)
                return i
        }
    }
    ,
    u.getItems = function(e) {
        e = s.makeArray(e);
        var t = [];
        return e.forEach(function(e) {
            e = this.getItem(e);
            e && t.push(e)
        }, this),
        t
    }
    ,
    u.remove = function(e) {
        e = this.getItems(e);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(e) {
            e.remove(),
            s.removeFrom(this.items, e)
        }, this)
    }
    ,
    u.destroy = function() {
        var e = this.element.style
          , e = (e.height = "",
        e.position = "",
        e.width = "",
        this.items.forEach(function(e) {
            e.destroy()
        }),
        this.unbindResize(),
        this.element.outlayerGUID);
        delete h[e],
        delete this.element.outlayerGUID,
        c && c.removeData(this.element, this.constructor.namespace)
    }
    ,
    r.data = function(e) {
        e = (e = s.getQueryElement(e)) && e.outlayerGUID;
        return e && h[e]
    }
    ,
    r.create = function(e, t) {
        var i = o(r);
        return i.defaults = s.extend({}, r.defaults),
        s.extend(i.defaults, t),
        i.compatOptions = s.extend({}, r.compatOptions),
        i.namespace = e,
        i.data = r.data,
        i.Item = o(a),
        s.htmlInit(i, e),
        c && c.bridget && c.bridget(e, i),
        i
    }
    ,
    {
        ms: 1,
        s: 1e3
    });
    return r.Item = a,
    r
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {},
    e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
    "use strict";
    function t() {
        e.Item.apply(this, arguments)
    }
    var i = t.prototype = Object.create(e.Item.prototype)
      , s = i._create
      , n = (i._create = function() {
        this.id = this.layout.itemGUID++,
        s.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var e, t = this.layout.options.getSortData, i = this.layout._sorters;
            for (e in t) {
                var s = i[e];
                this.sortData[e] = s(this.element, this)
            }
        }
    }
    ,
    i.destroy);
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {},
    e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(t, i) {
    "use strict";
    function s(e) {
        (this.isotope = e) && (this.options = e.options[this.namespace],
        this.element = e.element,
        this.items = e.filteredItems,
        this.size = e.size)
    }
    var n = s.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
        n[e] = function() {
            return i.prototype[e].apply(this.isotope, arguments)
        }
    }),
    n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    n.getSegmentSize = function(e, t) {
        var i, e = e + t, s = "outer" + t;
        this._getMeasurement(e, s),
        this[e] || (i = this.getFirstItemSize(),
        this[e] = i && i[s] || this.isotope.size["inner" + t])
    }
    ,
    n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    n.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    s.modes = {},
    s.create = function(e, t) {
        function i() {
            s.apply(this, arguments)
        }
        return (i.prototype = Object.create(n)).constructor = i,
        t && (i.options = t),
        s.modes[i.prototype.namespace = e] = i
    }
    ,
    s
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, o) {
    var e = e.create("masonry")
      , t = (e.compatOptions.fitWidth = "isFitWidth",
    e.prototype);
    return t._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var e = 0; e < this.cols; e++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    t.measureColumns = function() {
        this.getContainerWidth(),
        this.columnWidth || (e = (e = this.items[0]) && e.element,
        this.columnWidth = e && o(e).outerWidth || this.containerWidth);
        var e = this.columnWidth += this.gutter
          , t = this.containerWidth + this.gutter
          , i = t / e
          , t = e - t % e
          , i = Math[t && t < 1 ? "round" : "floor"](i);
        this.cols = Math.max(i, 1)
    }
    ,
    t.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element
          , e = o(e);
        this.containerWidth = e && e.innerWidth
    }
    ,
    t._getItemLayoutPosition = function(e) {
        e.getSize();
        for (var t = e.size.outerWidth % this.columnWidth, t = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth), t = Math.min(t, this.cols), i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](t, e), s = {
            x: this.columnWidth * i.col,
            y: i.y
        }, n = i.y + e.size.outerHeight, a = t + i.col, r = i.col; r < a; r++)
            this.colYs[r] = n;
        return s
    }
    ,
    t._getTopColPosition = function(e) {
        var e = this._getTopColGroup(e)
          , t = Math.min.apply(Math, e);
        return {
            col: e.indexOf(t),
            y: t
        }
    }
    ,
    t._getTopColGroup = function(e) {
        if (e < 2)
            return this.colYs;
        for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++)
            t[s] = this._getColGroupY(s, e);
        return t
    }
    ,
    t._getColGroupY = function(e, t) {
        if (t < 2)
            return this.colYs[e];
        e = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, e)
    }
    ,
    t._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols
          , i = 1 < e && i + e > this.cols ? 0 : i
          , t = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = t ? i + e : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, e)
        }
    }
    ,
    t._manageStamp = function(e) {
        var t = o(e)
          , e = this._getElementOffset(e)
          , i = this._getOption("originLeft") ? e.left : e.right
          , s = i + t.outerWidth
          , i = Math.floor(i / this.columnWidth)
          , i = Math.max(0, i)
          , n = Math.floor(s / this.columnWidth);
        n -= s % this.columnWidth ? 0 : 1;
        for (var n = Math.min(this.cols - 1, n), a = (this._getOption("originTop") ? e.top : e.bottom) + t.outerHeight, r = i; r <= n; r++)
            this.colYs[r] = Math.max(a, this.colYs[r])
    }
    ,
    t._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()),
        e
    }
    ,
    t._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; )
            e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }
    ,
    t.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(),
        e != this.containerWidth
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
    "use strict";
    var i, e = e.create("masonry"), s = e.prototype, n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (i in t.prototype)
        n[i] || (s[i] = t.prototype[i]);
    var a = s.measureColumns
      , r = (s.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        a.call(this)
    }
    ,
    s._getOption);
    return s._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var e = e.create("fitRows")
      , t = e.prototype;
    return t._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    t._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter
          , i = (0 !== this.x && t + this.x > i && (this.x = 0,
        this.y = this.maxY),
        {
            x: this.x,
            y: this.y
        });
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight),
        this.x += t,
        i
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var e = e.create("vertical", {
        horizontalAlignment: 0
    })
      , t = e.prototype;
    return t._resetLayout = function() {
        this.y = 0
    }
    ,
    t._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += e.size.outerHeight,
        {
            x: t,
            y: i
        }
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(r, o) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(e, t, i, s, n, a) {
        return o(r, e, 0, i, s, n, a)
    }) : "object" == typeof module && module.exports ? module.exports = o(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : r.Isotope = o(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode)
}(window, function(e, i, t, s, a, n, r) {
    var o = e.jQuery
      , l = String.prototype.trim ? function(e) {
        return e.trim()
    }
    : function(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
      , c = i.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    })
      , e = (c.Item = n,
    c.LayoutMode = r,
    c.prototype)
      , d = (e._create = function() {
        for (var e in this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        i.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"],
        r.modes)
            this._initLayoutMode(e)
    }
    ,
    e.reloadItems = function() {
        this.itemGUID = 0,
        i.prototype.reloadItems.call(this)
    }
    ,
    e._itemize = function() {
        for (var e = i.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++)
            e[t].id = this.itemGUID++;
        return this._updateItemsSortData(e),
        e
    }
    ,
    e._initLayoutMode = function(e) {
        var t = r.modes[e]
          , i = this.options[e] || {};
        this.options[e] = t.options ? a.extend(t.options, i) : i,
        this.modes[e] = new t(this)
    }
    ,
    e.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    e._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, e),
        this._isLayoutInited = !0
    }
    ,
    e.arrange = function(e) {
        this.option(e),
        this._getIsInstant();
        e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    e._init = e.arrange,
    e._hideReveal = function(e) {
        this.reveal(e.needReveal),
        this.hide(e.needHide)
    }
    ,
    e._getIsInstant = function() {
        var e = this._getOption("layoutInstant")
          , e = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = e
    }
    ,
    e._bindArrangeComplete = function() {
        function e() {
            t && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var t, i, s, n = this;
        this.once("layoutComplete", function() {
            t = !0,
            e()
        }),
        this.once("hideComplete", function() {
            i = !0,
            e()
        }),
        this.once("revealComplete", function() {
            s = !0,
            e()
        })
    }
    ,
    e._filter = function(e) {
        for (var t = this.options.filter, i = [], s = [], n = [], a = this._getFilterTest(t || "*"), r = 0; r < e.length; r++) {
            var o, l = e[r];
            l.isIgnored || ((o = a(l)) && i.push(l),
            o && l.isHidden ? s.push(l) : o || l.isHidden || n.push(l))
        }
        return {
            matches: i,
            needReveal: s,
            needHide: n
        }
    }
    ,
    e._getFilterTest = function(t) {
        return o && this.options.isJQueryFiltering ? function(e) {
            return o(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return s(e.element, t)
        }
    }
    ,
    e.updateSortData = function(e) {
        e = e ? (e = a.makeArray(e),
        this.getItems(e)) : this.items;
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    e._getSorters = function() {
        var e, t = this.options.getSortData;
        for (e in t) {
            var i = t[e];
            this._sorters[e] = d(i)
        }
    }
    ,
    e._updateItemsSortData = function(e) {
        for (var t = e && e.length, i = 0; t && i < t; i++)
            e[i].updateSortData()
    }
    ,
    function(e) {
        if ("string" != typeof e)
            return e;
        var t, i, s = (e = l(e).split(" "))[0], n = (n = s.match(/^\[(.+)\]$/)) && n[1], a = (i = s,
        (t = n) ? function(e) {
            return e.getAttribute(t)
        }
        : function(e) {
            e = e.querySelector(i);
            return e && e.textContent
        }
        ), r = c.sortDataParsers[e[1]];
        return r ? function(e) {
            return e && r(a(e))
        }
        : function(e) {
            return e && a(e)
        }
    }
    )
      , h = (c.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    },
    e._sort = function() {
        var e, r, o;
        this.options.sortBy && (e = a.makeArray(this.options.sortBy),
        this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory)),
        r = this.sortHistory,
        o = this.options.sortAscending,
        this.filteredItems.sort(function(e, t) {
            for (var i = 0; i < r.length; i++) {
                var s = r[i]
                  , n = e.sortData[s]
                  , a = t.sortData[s];
                if (a < n || n < a)
                    return (a < n ? 1 : -1) * ((void 0 !== o[s] ? o[s] : o) ? 1 : -1)
            }
            return 0
        }))
    }
    ,
    e._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t] != this.sortHistory[t])
                return !1;
        return !0
    }
    ,
    e._mode = function() {
        var e = this.options.layoutMode
          , t = this.modes[e];
        if (t)
            return t.options = this.options[e],
            t;
        throw new Error("No layout mode: " + e)
    }
    ,
    e._resetLayout = function() {
        i.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    e._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }
    ,
    e._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }
    ,
    e._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    e.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    e.appended = function(e) {
        var e = this.addItems(e);
        e.length && (e = this._filterRevealAdded(e),
        this.filteredItems = this.filteredItems.concat(e))
    }
    ,
    e.prepended = function(e) {
        var t, e = this._itemize(e);
        e.length && (this._resetLayout(),
        this._manageStamps(),
        t = this._filterRevealAdded(e),
        this.layoutItems(this.filteredItems),
        this.filteredItems = t.concat(this.filteredItems),
        this.items = e.concat(this.items))
    }
    ,
    e._filterRevealAdded = function(e) {
        e = this._filter(e);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    e.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            for (var i, s = t.length, n = 0; n < s; n++)
                i = t[n],
                this.element.appendChild(i.element);
            e = this._filter(t).matches;
            for (n = 0; n < s; n++)
                t[n].isLayoutInstant = !0;
            for (this.arrange(),
            n = 0; n < s; n++)
                delete t[n].isLayoutInstant;
            this.reveal(e)
        }
    }
    ,
    e.remove);
    return e.remove = function(e) {
        e = a.makeArray(e);
        var t = this.getItems(e);
        h.call(this, e);
        for (var i = t && t.length, s = 0; i && s < i; s++) {
            var n = t[s];
            a.removeFrom(this.filteredItems, n)
        }
    }
    ,
    e.shuffle = function() {
        for (var e = 0; e < this.items.length; e++)
            this.items[e].sortData.random = Math.random();
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    e._noTransition = function(e, t) {
        var i = this.options.transitionDuration
          , e = (this.options.transitionDuration = 0,
        e.apply(this, t));
        return this.options.transitionDuration = i,
        e
    }
    ,
    e.getFilteredItemElements = function() {
        return this.filteredItems.map(function(e) {
            return e.element
        })
    }
    ,
    c
}),
function(e) {
    var t, n, i, s, a = navigator.userAgent;
    function r() {
        clearTimeout(t),
        t = setTimeout(i, 99)
    }
    function o() {
        r(),
        s && s.addListener && s.addListener(r)
    }
    e.HTMLPictureElement && /ecko/.test(a) && a.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (n = document.createElement("source"),
    i = function() {
        for (var e = document.querySelectorAll("picture > img, img[srcset][sizes]"), t = 0; t < e.length; t++)
            !function(e) {
                var t, i, s = e.parentNode;
                "PICTURE" === s.nodeName.toUpperCase() ? (t = n.cloneNode(),
                s.insertBefore(t, s.firstElementChild),
                setTimeout(function() {
                    s.removeChild(t)
                })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth,
                i = e.sizes,
                e.sizes += ",100vw",
                setTimeout(function() {
                    e.sizes = i
                }))
            }(e[t])
    }
    ,
    s = e.matchMedia && matchMedia("(orientation: landscape)"),
    n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    /^[c|i]|d$/.test(document.readyState || "") ? o() : document.addEventListener("DOMContentLoaded", o),
    r))
}(window),
function(e, a, f) {
    "use strict";
    function m(e) {
        return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
    }
    function N(e, t) {
        return e.res - t.res
    }
    function w(e, t) {
        var i, s, n;
        if (e && t)
            for (n = T.parseSet(t),
            e = T.makeUrl(e),
            i = 0; i < n.length; i++)
                if (e === T.makeUrl(n[i].url)) {
                    s = n[i];
                    break
                }
        return s
    }
    function D(t, d) {
        function e(e) {
            var e = e.exec(t.substring(o));
            return e ? (e = e[0],
            o += e.length,
            e) : void 0
        }
        function i() {
            for (var e, t, i, s, n, a, r, o = !1, l = {}, c = 0; c < u.length; c++)
                s = (n = u[c])[n.length - 1],
                n = n.substring(0, n.length - 1),
                a = parseInt(n, 10),
                r = parseFloat(n),
                ae.test(n) && "w" === s ? ((e || t) && (o = !0),
                0 === a ? o = !0 : e = a) : re.test(n) && "x" === s ? ((e || t || i) && (o = !0),
                r < 0 ? o = !0 : t = r) : ae.test(n) && "h" === s ? ((i || t) && (o = !0),
                0 === a ? o = !0 : i = a) : o = !0;
            o || (l.url = h,
            e && (l.w = e),
            t && (l.d = t),
            i && (l.h = i),
            i || t || e || (l.d = 1),
            1 === l.d && (d.has1x = !0),
            l.set = d,
            p.push(l))
        }
        for (var h, u, s, n, a, r = t.length, o = 0, p = []; ; ) {
            if (e(ie),
            r <= o)
                return p;
            h = e(se),
            u = [],
            "," === h.slice(-1) ? (h = h.replace(ne, ""),
            i()) : function() {
                for (e(te),
                s = "",
                n = "in descriptor"; ; ) {
                    if (a = t.charAt(o),
                    "in descriptor" === n)
                        if (m(a))
                            s && (u.push(s),
                            s = "",
                            n = "after descriptor");
                        else {
                            if ("," === a)
                                return o += 1,
                                s && u.push(s),
                                i();
                            if ("(" === a)
                                s += a,
                                n = "in parens";
                            else {
                                if ("" === a)
                                    return s && u.push(s),
                                    i();
                                s += a
                            }
                        }
                    else if ("in parens" === n)
                        if (")" === a)
                            s += a,
                            n = "in descriptor";
                        else {
                            if ("" === a)
                                return u.push(s),
                                i();
                            s += a
                        }
                    else if ("after descriptor" === n && !m(a)) {
                        if ("" === a)
                            return i();
                        n = "in descriptor",
                        --o
                    }
                    o += 1
                }
            }()
        }
    }
    function j(e) {
        for (var t, i, s, n = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, a = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i, r = function(e) {
            function t() {
                n && (a.push(n),
                n = "")
            }
            function i() {
                a[0] && (r.push(a),
                a = [])
            }
            for (var s, n = "", a = [], r = [], o = 0, l = 0, c = !1; ; ) {
                if ("" === (s = e.charAt(l)))
                    return t(),
                    i(),
                    r;
                if (c)
                    "*" === s && "/" === e[l + 1] ? (c = !1,
                    l += 2,
                    t()) : l += 1;
                else {
                    if (m(s)) {
                        if (e.charAt(l - 1) && m(e.charAt(l - 1)) || !n) {
                            l += 1;
                            continue
                        }
                        if (0 === o) {
                            t(),
                            l += 1;
                            continue
                        }
                        s = " "
                    } else if ("(" === s)
                        o += 1;
                    else if (")" === s)
                        --o;
                    else {
                        if ("," === s) {
                            t(),
                            i(),
                            l += 1;
                            continue
                        }
                        if ("/" === s && "*" === e.charAt(l + 1)) {
                            c = !0,
                            l += 2;
                            continue
                        }
                    }
                    n += s,
                    l += 1
                }
            }
        }(e), o = r.length, l = 0; l < o; l++)
            if (i = (t = r[l])[t.length - 1],
            s = i,
            n.test(s) && 0 <= parseFloat(s) || (a.test(s) || ("0" === s || "-0" === s || "+0" === s))) {
                if (s = i,
                t.pop(),
                0 === t.length)
                    return s;
                if (t = t.join(" "),
                T.matchesMedia(t))
                    return s
            }
        return "100vw"
    }
    a.createElement("picture");
    function t() {}
    function H(e, t, i, s) {
        e.addEventListener ? e.addEventListener(t, i, s || !1) : e.attachEvent && e.attachEvent("on" + t, i)
    }
    function i(t) {
        var i = {};
        return function(e) {
            return e in i || (i[e] = t(e)),
            i[e]
        }
    }
    function E(e, t) {
        return e.w ? (e.cWidth = T.calcListLength(t || "100vw"),
        e.res = e.w / e.cWidth) : e.res = e.d,
        e
    }
    var n, B, r, q, R, W, F, s, o, Y, V, l, c, d, h, u, T = {}, p = !1, g = a.createElement("img"), v = g.getAttribute, X = g.setAttribute, G = g.removeAttribute, y = a.documentElement, b = {}, x = {
        algorithm: ""
    }, _ = "data-pfsrc", U = _ + "set", S = navigator.userAgent, Q = /rident/.test(S) || /ecko/.test(S) && S.match(/rv\:(\d+)/) && 35 < RegExp.$1, C = "currentSrc", K = /\s+\+?\d+(e\d+)?w/, J = /(\([^)]+\))?\s*(.+)/, k = e.picturefillCFG, Z = "font-size:100%!important;", A = !0, M = {}, I = {}, L = e.devicePixelRatio, P = {
        px: 1,
        in: 96
    }, ee = a.createElement("a"), $ = !1, te = /^[ \t\n\r\u000c]+/, ie = /^[, \t\n\r\u000c]+/, se = /^[^ \t\n\r\u000c]+/, ne = /[,]+$/, ae = /^\d+$/, re = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, oe = (q = /^([\d\.]+)(em|vw|px)$/,
    R = i(function(e) {
        return "return " + function() {
            for (var e = arguments, t = 0, i = e[0]; ++t in e; )
                i = i.replace(e[t], e[++t]);
            return i
        }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
    }),
    function(e, t) {
        var i;
        if (!(e in M))
            if (M[e] = !1,
            t && (i = e.match(q)))
                M[e] = i[1] * P[i[2]];
            else
                try {
                    M[e] = new Function("e",R(e))(P)
                } catch (e) {}
        return M[e]
    }
    ), O = function(e) {
        if (p) {
            var t, i, s, n = e || {};
            if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements,
            n.elements = null)),
            s = (t = n.elements || T.qsa(n.context || a, n.reevaluate || n.reselect ? T.sel : T.selShort)).length) {
                for (T.setupRun(n),
                $ = !0,
                i = 0; i < s; i++)
                    T.fillImg(t[i], n);
                T.teardownRun(n)
            }
        }
    };
    function z() {
        var e = a.readyState || "";
        l = setTimeout(z, "loading" === e ? 200 : 999),
        a.body && (T.fillImgs(),
        (W = W || V.test(e)) && clearTimeout(l))
    }
    function le() {
        var e = new Date - Y;
        e < s ? o = setTimeout(le, s - e) : (o = null,
        F())
    }
    function ce() {
        2 === d.width && (T.supSizes = !0),
        B = T.supSrcset && !T.supSizes,
        p = !0,
        setTimeout(O)
    }
    e.console && console.warn,
    C in g || (C = "src"),
    b["image/jpeg"] = !0,
    b["image/gif"] = !0,
    b["image/png"] = !0,
    b["image/svg+xml"] = a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
    T.ns = ("pf" + (new Date).getTime()).substr(0, 9),
    T.supSrcset = "srcset"in g,
    T.supSizes = "sizes"in g,
    T.supPicture = !!e.HTMLPictureElement,
    T.supSrcset && T.supPicture && !T.supSizes && (S = a.createElement("img"),
    g.srcset = "data:,a",
    S.src = "data:,a",
    T.supSrcset = g.complete === S.complete,
    T.supPicture = T.supSrcset && T.supPicture),
    T.supSrcset && !T.supSizes ? (g = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    (d = a.createElement("img")).onload = ce,
    d.onerror = ce,
    d.setAttribute("sizes", "9px"),
    d.srcset = g + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",
    d.src = g) : p = !0,
    T.selShort = "picture>img,img[srcset]",
    T.sel = T.selShort,
    T.cfg = x,
    T.DPR = L || 1,
    T.u = P,
    T.types = b,
    T.setSize = t,
    T.makeUrl = i(function(e) {
        return ee.href = e,
        ee.href
    }),
    T.qsa = function(e, t) {
        return "querySelector"in e ? e.querySelectorAll(t) : []
    }
    ,
    T.matchesMedia = function() {
        return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? T.matchesMedia = function(e) {
            return !e || matchMedia(e).matches
        }
        : T.matchesMedia = T.mMQ,
        T.matchesMedia.apply(this, arguments)
    }
    ,
    T.mMQ = function(e) {
        return !e || oe(e)
    }
    ,
    T.calcLength = function(e) {
        e = oe(e, !0) || !1;
        return e = e < 0 ? !1 : e
    }
    ,
    T.supportsType = function(e) {
        return !e || b[e]
    }
    ,
    T.parseSize = i(function(e) {
        e = (e || "").match(J);
        return {
            media: e && e[1],
            length: e && e[2]
        }
    }),
    T.parseSet = function(e) {
        return e.cands || (e.cands = D(e.srcset, e)),
        e.cands
    }
    ,
    T.getEmValue = function() {
        var e, t, i, s;
        return !n && (e = a.body) && (t = a.createElement("div"),
        i = y.style.cssText,
        s = e.style.cssText,
        t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        y.style.cssText = Z,
        e.style.cssText = Z,
        e.appendChild(t),
        n = t.offsetWidth,
        e.removeChild(t),
        n = parseFloat(n, 10),
        y.style.cssText = i,
        e.style.cssText = s),
        n || 16
    }
    ,
    T.calcListLength = function(e) {
        var t;
        return e in I && !x.uT || (t = T.calcLength(j(e)),
        I[e] = t || P.width),
        I[e]
    }
    ,
    T.setRes = function(e) {
        if (e)
            for (var t, i = 0, s = (t = T.parseSet(e)).length; i < s; i++)
                E(t[i], e.sizes);
        return t
    }
    ,
    T.setRes.res = E,
    T.applySetCandidate = function(e, t) {
        if (e.length) {
            var i, s, n, a, r, o, l = t[T.ns], c = T.DPR, d = l.curSrc || t[C], h = l.curCan || (y = t,
            h = d,
            b = e[0].set,
            (b = w(h, b = !b && h ? (b = y[T.ns].sets) && b[b.length - 1] : b)) && (h = T.makeUrl(h),
            y[T.ns].curSrc = h,
            (y[T.ns].curCan = b).res || E(b, b.set.sizes)),
            b);
            if (h && h.set === e[0].set && ((o = Q && !t.complete && h.res - .1 > c) || (h.cached = !0,
            h.res >= c && (r = h))),
            !r)
                for (e.sort(N),
                r = e[(a = e.length) - 1],
                s = 0; s < a; s++)
                    if ((i = e[s]).res >= c) {
                        r = e[n = s - 1] && (o || d !== T.makeUrl(i.url)) && (u = e[n].res,
                        p = i.res,
                        m = c,
                        f = e[n].cached,
                        v = g = void 0,
                        f = "saveData" === x.algorithm ? 2.7 < u ? m + 1 : (v = (p - m) * (g = Math.pow(u - .6, 1.5)),
                        f && (v += .1 * g),
                        u + v) : 1 < m ? Math.sqrt(u * p) : u,
                        m < f) ? e[n] : i;
                        break
                    }
            r && (y = T.makeUrl(r.url),
            l.curSrc = y,
            l.curCan = r,
            y !== d && T.setSrc(t, r),
            T.setSize(t))
        }
        var u, p, m, f, g, v, y, h, b
    }
    ,
    T.setSrc = function(e, t) {
        e.src = t.url,
        "image/svg+xml" === t.set.type && (t = e.style.width,
        e.style.width = e.offsetWidth + 1 + "px",
        e.offsetWidth + 1 && (e.style.width = t))
    }
    ,
    T.getSet = function(e) {
        for (var t, i, s = !1, n = e[T.ns].sets, a = 0; a < n.length && !s; a++)
            if ((t = n[a]).srcset && T.matchesMedia(t.media) && (i = T.supportsType(t.type))) {
                s = t = "pending" === i ? i : t;
                break
            }
        return s
    }
    ,
    T.parseSets = function(e, t, i) {
        var s, n, a, r, o = t && "PICTURE" === t.nodeName.toUpperCase(), l = e[T.ns];
        if (l.src !== f && !i.src || (l.src = v.call(e, "src"),
        l.src ? X.call(e, _, l.src) : G.call(e, _)),
        l.srcset !== f && !i.srcset && T.supSrcset && !e.srcset || (s = v.call(e, "srcset"),
        l.srcset = s,
        r = !0),
        l.sets = [],
        o) {
            l.pic = !0,
            i = t;
            for (var c = l.sets, d, h, u = i.getElementsByTagName("source"), p = 0, m = u.length; p < m; p++)
                (d = u[p])[T.ns] = !0,
                (h = d.getAttribute("srcset")) && c.push({
                    srcset: h,
                    media: d.getAttribute("media"),
                    type: d.getAttribute("type"),
                    sizes: d.getAttribute("sizes")
                })
        }
        l.srcset ? (n = {
            srcset: l.srcset,
            sizes: v.call(e, "sizes")
        },
        l.sets.push(n),
        (a = (B || l.src) && K.test(l.srcset || "")) || !l.src || w(l.src, n) || n.has1x || (n.srcset += ", " + l.src,
        n.cands.push({
            url: l.src,
            d: 1,
            set: n
        }))) : l.src && l.sets.push({
            srcset: l.src,
            sizes: null
        }),
        l.curCan = null,
        l.curSrc = f,
        l.supported = !(o || n && !T.supSrcset || a && !T.supSizes),
        r && T.supSrcset && !l.supported && (s ? (X.call(e, U, s),
        e.srcset = "") : G.call(e, U)),
        l.supported && !l.srcset && (!l.src && e.src || e.src !== T.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src),
        l.parsed = !0
    }
    ,
    T.fillImg = function(e, t) {
        var i, s = t.reselect || t.reevaluate;
        e[T.ns] || (e[T.ns] = {}),
        i = e[T.ns],
        !s && i.evaled === r || (i.parsed && !t.reevaluate || T.parseSets(e, e.parentNode, t),
        i.supported ? i.evaled = r : (s = e,
        t = T.getSet(s),
        i = !1,
        "pending" !== t && (i = r,
        t && (t = T.setRes(t),
        T.applySetCandidate(t, s))),
        s[T.ns].evaled = i))
    }
    ,
    T.setupRun = function() {
        $ && !A && L === e.devicePixelRatio || (A = !1,
        L = e.devicePixelRatio,
        M = {},
        I = {},
        T.DPR = L || 1,
        P.width = Math.max(e.innerWidth || 0, y.clientWidth),
        P.height = Math.max(e.innerHeight || 0, y.clientHeight),
        P.vw = P.width / 100,
        P.vh = P.height / 100,
        r = [P.height, P.width, L].join("-"),
        P.em = T.getEmValue(),
        P.rem = P.em)
    }
    ,
    T.supPicture ? (O = t,
    T.fillImg = t) : (V = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
    l = setTimeout(z, a.body ? 9 : 99),
    c = y.clientHeight,
    H(e, "resize", (F = function() {
        A = Math.max(e.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== c,
        c = y.clientHeight,
        A && T.fillImgs()
    }
    ,
    s = 99,
    function() {
        Y = new Date,
        o = o || setTimeout(le, s)
    }
    )),
    H(a, "readystatechange", z)),
    T.picturefill = O,
    T.fillImgs = O,
    T.teardownRun = t,
    O._ = T,
    e.picturefillCFG = {
        pf: T,
        push: function(e) {
            var t = e.shift();
            "function" == typeof T[t] ? T[t].apply(T, e) : (x[t] = e[0],
            $ && T.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; k && k.length; )
        e.picturefillCFG.push(k.shift());
    e.picturefill = O,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = O : "function" == typeof define && define.amd && define("picturefill", function() {
        return O
    }),
    T.supPicture || (b["image/webp"] = (h = "image/webp",
    S = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
    (u = new e.Image).onerror = function() {
        b[h] = !1,
        O()
    }
    ,
    u.onload = function() {
        b[h] = 1 === u.width,
        O()
    }
    ,
    u.src = S,
    "pending"))
}(window, document),
"object" == typeof navigator && function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, function() {
    "use strict";
    function a(e, t, i) {
        t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i
    }
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s)
        }
    }
    function t(t, e) {
        var i, s = Object.keys(t);
        return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t),
        e && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        s.push.apply(s, i)),
        s
    }
    function H(s) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(n), !0).forEach(function(e) {
                var t, i;
                t = s,
                i = n[e = e],
                e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(e) {
                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return s
    }
    var B = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };
    function s(e) {
        return null != e ? e.constructor : null
    }
    function q(e) {
        return F(e, Element)
    }
    function R(e) {
        return F(e, Event)
    }
    function W(e) {
        return Y(e) || (X(e) || G(e) || U(e)) && !e.length || V(e) && !Object.keys(e).length
    }
    var F = function(e, t) {
        return !!(e && t && e instanceof t)
    }
      , Y = function(e) {
        return null == e
    }
      , V = function(e) {
        return s(e) === Object
    }
      , X = function(e) {
        return s(e) === String
    }
      , G = function(e) {
        return Array.isArray(e)
    }
      , U = function(e) {
        return F(e, NodeList)
    }
      , Q = X
      , K = G
      , J = U;
    Z = [{
        key: "setup",
        value: function(i) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , e = null;
            if (W(i) || Q(i) ? e = Array.from(document.querySelectorAll(Q(i) ? i : 'input[type="range"]')) : q(i) ? e = [i] : J(i) ? e = Array.from(i) : K(i) && (e = i.filter(q)),
            W(e))
                return null;
            var s = H({}, B, {}, t);
            return Q(i) && s.watch && new MutationObserver(function(e) {
                Array.from(e).forEach(function(e) {
                    Array.from(e.addedNodes).forEach(function(e) {
                        var t;
                        q(e) && (t = i,
                        function() {
                            return Array.from(document.querySelectorAll(t)).includes(this)
                        }
                        .call(e, t)) && new r(e,s)
                    })
                })
            }
            ).observe(document.body, {
                childList: !0,
                subtree: !0
            }),
            e.map(function(e) {
                return new r(e,t)
            })
        }
    }, {
        key: "enabled",
        get: function() {
            return "ontouchstart"in document.documentElement
        }
    }],
    e((Ze = r).prototype, [{
        key: "init",
        value: function() {
            r.enabled && (this.config.addCSS && (this.element.style.userSelect = "none",
            this.element.style.webKitUserSelect = "none",
            this.element.style.touchAction = "manipulation"),
            this.listeners(!0),
            this.element.rangeTouch = this)
        }
    }, {
        key: "destroy",
        value: function() {
            r.enabled && (this.config.addCSS && (this.element.style.userSelect = "",
            this.element.style.webKitUserSelect = "",
            this.element.style.touchAction = ""),
            this.listeners(!1),
            this.element.rangeTouch = null)
        }
    }, {
        key: "listeners",
        value: function(e) {
            var t = this
              , i = e ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e) {
                t.element[i](e, function(e) {
                    return t.set(e)
                }, !1)
            })
        }
    }, {
        key: "get",
        value: function(e) {
            if (!r.enabled || !R(e))
                return null;
            var t = e.target
              , e = e.changedTouches[0]
              , i = parseFloat(t.getAttribute("min")) || 0
              , s = parseFloat(t.getAttribute("max")) || 100
              , n = parseFloat(t.getAttribute("step")) || 1
              , t = t.getBoundingClientRect()
              , a = 100 / t.width * (this.config.thumbWidth / 2) / 100;
            return (e = 100 / t.width * (e.clientX - t.left)) < 0 ? e = 0 : 100 < e && (e = 100),
            e < 50 ? e -= (100 - 2 * e) * a : 50 < e && (e += 2 * (e - 50) * a),
            i + (t = e / 100 * (s - i),
            (a = n) < 1 ? (e = (e = "".concat(a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0,
            parseFloat(t.toFixed(e))) : Math.round(t / a) * a)
        }
    }, {
        key: "set",
        value: function(e) {
            var t;
            r.enabled && R(e) && !e.target.disabled && (e.preventDefault(),
            e.target.value = this.get(e),
            t = e.target,
            e = "touchend" === e.type ? "change" : "input",
            t && e && (e = new Event(e,{
                bubbles: !0
            }),
            t.dispatchEvent(e)))
        }
    }]),
    e(Ze, Z);
    var Z, ee = r;
    function r(e, t) {
        if (!(this instanceof r))
            throw new TypeError("Cannot call a class as a function");
        q(e) ? this.element = e : Q(e) && (this.element = document.querySelector(e)),
        q(this.element) && W(this.element.rangeTouch) && (this.config = H({}, B, {}, t),
        this.init())
    }
    const te = e=>null != e ? e.constructor : null
      , i = (e,t)=>Boolean(e && t && e instanceof t)
      , ie = e=>null == e
      , se = e=>te(e) === Object
      , ne = e=>te(e) === String
      , ae = e=>te(e) === Function
      , re = e=>Array.isArray(e)
      , oe = e=>i(e, NodeList)
      , le = e=>ie(e) || (ne(e) || re(e) || oe(e)) && !e.length || se(e) && !Object.keys(e).length;
    var o = ie
      , n = se
      , y = e=>te(e) === Number && !Number.isNaN(e)
      , l = ne
      , b = e=>te(e) === Boolean
      , c = ae
      , u = re
      , ce = oe
      , w = e=>null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
      , d = e=>i(e, Event)
      , h = e=>i(e, KeyboardEvent)
      , de = e=>i(e, TextTrack) || !ie(e) && ne(e.kind)
      , he = e=>{
        if (i(e, window.URL))
            return !0;
        if (!ne(e))
            return !1;
        let t = e;
        e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
        try {
            return !le(new URL(t).hostname)
        } catch (e) {
            return !1
        }
    }
      , E = le;
    const ue = (()=>{
        const t = document.createElement("span")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , i = Object.keys(e).find(e=>void 0 !== t.style[e]);
        return !!l(i) && e[i]
    }
    )();
    function pe(e, t) {
        setTimeout(()=>{
            try {
                e.hidden = !0,
                e.offsetHeight,
                e.hidden = !1
            } catch (e) {}
        }
        , t)
    }
    const p = {
        isIE: Boolean(window.document.documentMode),
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance"in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    };
    function me(e, t) {
        return t.split(".").reduce((e,t)=>e && e[t], e)
    }
    function m(t={}, ...e) {
        if (!e.length)
            return t;
        const i = e.shift();
        return n(i) ? (Object.keys(i).forEach(e=>{
            n(i[e]) ? (Object.keys(t).includes(e) || Object.assign(t, {
                [e]: {}
            }),
            m(t[e], i[e])) : Object.assign(t, {
                [e]: i[e]
            })
        }
        ),
        m(t, ...e)) : t
    }
    function fe(e, a) {
        e = e.length ? e : [e];
        Array.from(e).reverse().forEach((e,t)=>{
            const i = 0 < t ? a.cloneNode(!0) : a
              , s = e.parentNode
              , n = e.nextSibling;
            i.appendChild(e),
            n ? s.insertBefore(i, n) : s.appendChild(i)
        }
        )
    }
    function ge(i, e) {
        w(i) && !E(e) && Object.entries(e).filter(([,e])=>!o(e)).forEach(([e,t])=>i.setAttribute(e, t))
    }
    function T(e, t, i) {
        const s = document.createElement(e);
        return n(t) && ge(s, t),
        l(i) && (s.innerText = i),
        s
    }
    function ve(e, t, i, s) {
        w(t) && t.appendChild(T(e, i, s))
    }
    function f(e) {
        ce(e) || u(e) ? Array.from(e).forEach(f) : w(e) && w(e.parentNode) && e.parentNode.removeChild(e)
    }
    function ye(t) {
        if (w(t)) {
            let e = t.childNodes["length"];
            for (; 0 < e; )
                t.removeChild(t.lastChild),
                --e
        }
    }
    function be(e, t) {
        return w(t) && w(t.parentNode) && w(e) ? (t.parentNode.replaceChild(e, t),
        e) : null
    }
    function g(e, t) {
        if (!l(e) || E(e))
            return {};
        const r = {}
          , o = m({}, t);
        return e.split(",").forEach(e=>{
            const t = e.trim()
              , i = t.replace(".", "")
              , s = t.replace(/[[\]]/g, "").split("=")
              , [n] = s
              , a = 1 < s.length ? s[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
            case ".":
                l(o.class) ? r.class = o.class + " " + i : r.class = i;
                break;
            case "#":
                r.id = t.replace("#", "");
                break;
            case "[":
                r[n] = a
            }
        }
        ),
        m(o, r)
    }
    function v(t, i) {
        if (w(t)) {
            let e = i;
            b(e) || (e = !t.hidden),
            t.hidden = e
        }
    }
    function x(t, i, s) {
        if (ce(t))
            return Array.from(t).map(e=>x(e, i, s));
        if (w(t)) {
            let e = void 0 !== s ? s ? "add" : "remove" : "toggle";
            return t.classList[e](i),
            t.classList.contains(i)
        }
        return !1
    }
    function we(e, t) {
        return w(e) && e.classList.contains(t)
    }
    function _(e, t) {
        const i = Element["prototype"];
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }
        ).call(e, t)
    }
    function S(e) {
        return this.elements.container.querySelectorAll(e)
    }
    function C(e) {
        return this.elements.container.querySelector(e)
    }
    function Ee(e=null, t=!1) {
        w(e) && (e.focus({
            preventScroll: !0
        }),
        t && x(e, this.config.classNames.tabFocus))
    }
    const Te = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    }
      , k = {
        audio: "canPlayType"in document.createElement("audio"),
        video: "canPlayType"in document.createElement("video"),
        check(e, t, i) {
            i = p.isIPhone && i && k.playsinline,
            t = k[e] || "html5" !== t;
            return {
                api: t,
                ui: t && k.rangeInput && ("video" !== e || !p.isIPhone || i)
            }
        },
        pip: !(p.isIPhone || !c(T("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || T("video").disablePictureInPicture)),
        airplay: c(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline"in document.createElement("video"),
        mime(e) {
            if (E(e))
                return !1;
            var [t] = e.split("/");
            let i = e;
            if (!this.isHTML5 || t !== this.type)
                return !1;
            Object.keys(Te).includes(i) && (i += `; codecs="${Te[e]}"`);
            try {
                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
            } catch (e) {
                return !1
            }
        },
        textTracks: "textTracks"in document.createElement("video"),
        rangeInput: (()=>{
            const e = document.createElement("input");
            return (e.type = "range") === e.type
        }
        )(),
        touch: "ontouchstart"in document.documentElement,
        transitions: !1 !== ue,
        reducedMotion: "matchMedia"in window && window.matchMedia("(prefers-reduced-motion)").matches
    }
      , xe = (()=>{
        let e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: ()=>(e = !0,
                null)
            });
            window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
    }
    )();
    function A(i, e, s, n=!1, a=!0, r=!1) {
        if (i && "addEventListener"in i && !E(e) && c(s)) {
            const o = e.split(" ");
            let t = r;
            xe && (t = {
                passive: a,
                capture: r
            }),
            o.forEach(e=>{
                this && this.eventListeners && n && this.eventListeners.push({
                    element: i,
                    type: e,
                    callback: s,
                    options: t
                }),
                i[n ? "addEventListener" : "removeEventListener"](e, s, t)
            }
            )
        }
    }
    function M(e, t="", i, s=!0, n=!1) {
        A.call(this, e, t, i, !0, s, n)
    }
    function _e(e, t="", i, s=!0, n=!1) {
        A.call(this, e, t, i, !1, s, n)
    }
    function Se(t, i="", s, n=!0, a=!1) {
        const r = (...e)=>{
            _e(t, i, r, n, a),
            s.apply(this, e)
        }
        ;
        A.call(this, t, i, r, !0, n, a)
    }
    function I(e, t="", i=!1, s={}) {
        w(e) && !E(t) && (t = new CustomEvent(t,{
            bubbles: i,
            detail: {
                ...s,
                plyr: this
            }
        }),
        e.dispatchEvent(t))
    }
    function L(e) {
        var t;
        t = e,
        i(t, Promise) && ae(t.then) && e.then(null, ()=>{}
        )
    }
    function Ce(i) {
        return u(i) ? i.filter((e,t)=>i.indexOf(e) === t) : i
    }
    function ke(e, i) {
        return u(e) && e.length ? e.reduce((e,t)=>Math.abs(t - i) < Math.abs(e - i) ? t : e) : null
    }
    function Ae(e) {
        return !(!window || !window.CSS) && window.CSS.supports(e)
    }
    const Me = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e,[t,i])=>({
        ...e,
        [t / i]: [t, i]
    }), {});
    function Ie(e) {
        return (u(e) || l(e) && e.includes(":")) && (u(e) ? e : e.split(":")).map(Number).every(y)
    }
    function Le(e) {
        if (!u(e) || !e.every(y))
            return null;
        const [t,i] = e
          , s = (e,t)=>0 === t ? e : s(t, e % t)
          , n = s(t, i);
        return [t / n, i / n]
    }
    function Pe(e) {
        const t = e=>Ie(e) ? e.split(":").map(Number) : null;
        let i = t(e);
        if (null === (i = null === i ? t(this.config.ratio) : i) && !E(this.embed) && u(this.embed.ratio) && ({ratio: i} = this.embed),
        null === i && this.isHTML5) {
            const {videoWidth: e, videoHeight: t} = this.media;
            i = [e, t]
        }
        return Le(i)
    }
    function $e(e) {
        if (!this.isVideo)
            return {};
        const t = this.elements["wrapper"]
          , i = Pe.call(this, e);
        if (!u(i))
            return {};
        var [e,s] = Le(i)
          , n = 100 / e * s;
        if (Ae(`aspect-ratio: ${e}/` + s) ? t.style.aspectRatio = e + "/" + s : t.style.paddingBottom = n + "%",
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10)
              , i = (e - n) / (e / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
        } else
            this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
        return {
            padding: n,
            ratio: i
        }
    }
    function Oe(e, t, i=.05) {
        var s = e / t
          , n = ke(Object.keys(Me), s);
        return Math.abs(n - s) <= i ? Me[n] : [e, t]
    }
    const P = {
        getSources() {
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e=>{
                e = e.getAttribute("type");
                return !!E(e) || k.mime.call(this, e)
            }
            ) : []
        },
        getQualityOptions() {
            return this.config.quality.forced ? this.config.quality.options : P.getSources.call(this).map(e=>Number(e.getAttribute("size"))).filter(Boolean)
        },
        setup() {
            if (this.isHTML5) {
                const o = this;
                o.options.speed = o.config.speed.options,
                E(this.config.ratio) || $e.call(o),
                Object.defineProperty(o.media, "quality", {
                    get() {
                        const e = P.getSources.call(o).find(e=>e.getAttribute("src") === o.source);
                        return e && Number(e.getAttribute("size"))
                    },
                    set(t) {
                        if (o.quality !== t) {
                            if (o.config.quality.forced && c(o.config.quality.onChange))
                                o.config.quality.onChange(t);
                            else {
                                const e = P.getSources.call(o).find(e=>Number(e.getAttribute("size")) === t);
                                if (!e)
                                    return;
                                const {currentTime: i, paused: s, preload: n, readyState: a, playbackRate: r} = o.media;
                                o.media.src = e.getAttribute("src"),
                                "none" === n && !a || (o.once("loadedmetadata", ()=>{
                                    o.speed = r,
                                    o.currentTime = i,
                                    s || L(o.play())
                                }
                                ),
                                o.media.load())
                            }
                            I.call(o, o.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests() {
            this.isHTML5 && (f(P.getSources.call(this)),
            this.media.setAttribute("src", this.config.blankVideo),
            this.media.load(),
            this.debug.log("Cancelled network requests"))
        }
    };
    function ze(e, ...i) {
        return E(e) ? e : e.toString().replace(/{(\d+)}/g, (e,t)=>i[t].toString())
    }
    const Ne = (e="",t="",i="")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),"g"), i.toString())
      , De = (e="")=>e.toString().replace(/\w\S*/g, e=>e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    function je(e) {
        const t = document.createElement("div");
        return t.appendChild(e),
        t.innerHTML
    }
    const He = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
    }
      , $ = {
        get(e="", t={}) {
            if (E(e) || E(t))
                return "";
            let i = me(t.i18n, e);
            if (E(i))
                return Object.keys(He).includes(e) ? He[e] : "";
            e = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(e).forEach(([e,t])=>{
                i = Ne(i, e, t)
            }
            ),
            i
        }
    };
    class Be {
        constructor(e) {
            a(this, "get", e=>{
                if (!Be.supported || !this.enabled)
                    return null;
                var t = window.localStorage.getItem(this.key);
                if (E(t))
                    return null;
                t = JSON.parse(t);
                return l(e) && e.length ? t[e] : t
            }
            ),
            a(this, "set", t=>{
                if (Be.supported && this.enabled && n(t)) {
                    let e = this.get();
                    m(e = E(e) ? {} : e, t);
                    try {
                        window.localStorage.setItem(this.key, JSON.stringify(e))
                    } catch (t) {}
                }
            }
            ),
            this.enabled = e.config.storage.enabled,
            this.key = e.config.storage.key
        }
        static get supported() {
            try {
                if (!("localStorage"in window))
                    return !1;
                var e = "___test";
                return window.localStorage.setItem(e, e),
                window.localStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }
    }
    function qe(e, s="text") {
        return new Promise((t,i)=>{
            try {
                const i = new XMLHttpRequest;
                if (!("withCredentials"in i))
                    return;
                i.addEventListener("load", ()=>{
                    if ("text" === s)
                        try {
                            t(JSON.parse(i.responseText))
                        } catch (e) {
                            t(i.responseText)
                        }
                    else
                        t(i.response)
                }
                ),
                i.addEventListener("error", ()=>{
                    throw new Error(i.status)
                }
                ),
                i.open("GET", e, !0),
                i.responseType = s,
                i.send()
            } catch (e) {
                i(e)
            }
        }
        )
    }
    function Re(e, t) {
        if (l(e)) {
            const i = l(t);
            const s = ()=>null !== document.getElementById(t)
              , n = (e,t)=>{
                e.innerHTML = t,
                i && s() || document.body.insertAdjacentElement("afterbegin", e)
            }
            ;
            if (!i || !s()) {
                const s = Be.supported
                  , a = document.createElement("div");
                if (a.setAttribute("hidden", ""),
                i && a.setAttribute("id", t),
                s) {
                    const e = window.localStorage.getItem("cache-" + t);
                    if (null !== e) {
                        const t = JSON.parse(e);
                        n(a, t.content)
                    }
                }
                qe(e).then(e=>{
                    if (!E(e)) {
                        if (s)
                            try {
                                window.localStorage.setItem("cache-" + t, JSON.stringify({
                                    content: e
                                }))
                            } catch (e) {}
                        n(a, e)
                    }
                }
                ).catch(()=>{}
                )
            }
        }
    }
    const We = e=>Math.trunc(e / 60 / 60 % 60, 10);
    function Fe(e=0, t=!1, i=!1) {
        if (!y(e))
            return Fe(void 0, t, i);
        var s = e=>("0" + e).slice(-2);
        let n = We(e);
        var a = Math.trunc(e / 60 % 60, 10)
          , r = Math.trunc(e % 60, 10);
        return n = t || 0 < n ? n + ":" : "",
        (i && 0 < e ? "-" : "") + n + s(a) + ":" + s(r)
    }
    const O = {
        getIconUrl() {
            var e = new URL(this.config.iconUrl,window.location)
              , t = window.location.host || window.top.location.host
              , e = e.host !== t || p.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements() {
            try {
                return this.elements.controls = C.call(this, this.config.selectors.controls.wrapper),
                this.elements.buttons = {
                    play: S.call(this, this.config.selectors.buttons.play),
                    pause: C.call(this, this.config.selectors.buttons.pause),
                    restart: C.call(this, this.config.selectors.buttons.restart),
                    rewind: C.call(this, this.config.selectors.buttons.rewind),
                    fastForward: C.call(this, this.config.selectors.buttons.fastForward),
                    mute: C.call(this, this.config.selectors.buttons.mute),
                    pip: C.call(this, this.config.selectors.buttons.pip),
                    airplay: C.call(this, this.config.selectors.buttons.airplay),
                    settings: C.call(this, this.config.selectors.buttons.settings),
                    captions: C.call(this, this.config.selectors.buttons.captions),
                    fullscreen: C.call(this, this.config.selectors.buttons.fullscreen)
                },
                this.elements.progress = C.call(this, this.config.selectors.progress),
                this.elements.inputs = {
                    seek: C.call(this, this.config.selectors.inputs.seek),
                    volume: C.call(this, this.config.selectors.inputs.volume)
                },
                this.elements.display = {
                    buffer: C.call(this, this.config.selectors.display.buffer),
                    currentTime: C.call(this, this.config.selectors.display.currentTime),
                    duration: C.call(this, this.config.selectors.display.duration)
                },
                w(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)),
                !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e),
                this.toggleNativeControls(!0),
                !1
            }
        },
        createIcon(e, t) {
            const i = "http://www.w3.org/2000/svg"
              , s = O.getIconUrl.call(this)
              , n = `${s.cors ? "" : s.url}#` + this.config.iconPrefix
              , a = document.createElementNS(i, "svg")
              , r = (ge(a, m(t, {
                "aria-hidden": "true",
                focusable: "false"
            })),
            document.createElementNS(i, "use"))
              , o = n + "-" + e;
            return "href"in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
            r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
            a.appendChild(r),
            a
        },
        createLabel(e, t={}) {
            e = $.get(e, this.config);
            return T("span", {
                ...t,
                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            }, e)
        },
        createBadge(e) {
            if (E(e))
                return null;
            const t = T("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(T("span", {
                class: this.config.classNames.menu.badge
            }, e)),
            t
        },
        createButton(e, t) {
            const i = m({}, t);
            let s = function(e="") {
                let t = e.toString();
                return (t = function(e="") {
                    e = e.toString(),
                    e = Ne(e, "-", " ");
                    return e = Ne(e, "_", " "),
                    e = De(e),
                    Ne(e, " ", "")
                }(t)).charAt(0).toLowerCase() + t.slice(1)
            }(e);
            const n = {
                element: "button",
                toggle: !1,
                label: null,
                icon: null,
                labelPressed: null,
                iconPressed: null
            };
            switch (["element", "icon", "label"].forEach(e=>{
                Object.keys(i).includes(e) && (n[e] = i[e],
                delete i[e])
            }
            ),
            "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"),
            Object.keys(i).includes("class") ? i.class.split(" ").some(e=>e === this.config.classNames.control) || m(i, {
                class: i.class + " " + this.config.classNames.control
            }) : i.class = this.config.classNames.control,
            e) {
            case "play":
                n.toggle = !0,
                n.label = "play",
                n.labelPressed = "pause",
                n.icon = "play",
                n.iconPressed = "pause";
                break;
            case "mute":
                n.toggle = !0,
                n.label = "mute",
                n.labelPressed = "unmute",
                n.icon = "volume",
                n.iconPressed = "muted";
                break;
            case "captions":
                n.toggle = !0,
                n.label = "enableCaptions",
                n.labelPressed = "disableCaptions",
                n.icon = "captions-off",
                n.iconPressed = "captions-on";
                break;
            case "fullscreen":
                n.toggle = !0,
                n.label = "enterFullscreen",
                n.labelPressed = "exitFullscreen",
                n.icon = "enter-fullscreen",
                n.iconPressed = "exit-fullscreen";
                break;
            case "play-large":
                i.class += ` ${this.config.classNames.control}--overlaid`,
                s = "play",
                n.label = "play",
                n.icon = "play";
                break;
            default:
                E(n.label) && (n.label = s),
                E(n.icon) && (n.icon = e)
            }
            const a = T(n.element);
            return n.toggle ? (a.appendChild(O.createIcon.call(this, n.iconPressed, {
                class: "icon--pressed"
            })),
            a.appendChild(O.createIcon.call(this, n.icon, {
                class: "icon--not-pressed"
            })),
            a.appendChild(O.createLabel.call(this, n.labelPressed, {
                class: "label--pressed"
            })),
            a.appendChild(O.createLabel.call(this, n.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(O.createIcon.call(this, n.icon)),
            a.appendChild(O.createLabel.call(this, n.label))),
            m(i, g(this.config.selectors.buttons[s], i)),
            ge(a, i),
            "play" === s ? (u(this.elements.buttons[s]) || (this.elements.buttons[s] = []),
            this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a,
            a
        },
        createRange(e, t) {
            t = T("input", m(g(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": $.get(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = t,
            O.updateRangeFill.call(this, t),
            ee.setup(t),
            t
        },
        createProgress(e, t) {
            const i = T("progress", m(g(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                i.appendChild(T("span", null, "0"));
                const t = {
                    played: "played",
                    buffer: "buffered"
                }[e]
                  , s = t ? $.get(t, this.config) : "";
                i.innerText = "% " + s.toLowerCase()
            }
            return this.elements.display[e] = i
        },
        createTime(e, t) {
            t = g(this.config.selectors.display[e], t),
            t = T("div", m(t, {
                class: `${t.class || ""} ${this.config.classNames.display.time} `.trim(),
                "aria-label": $.get(e, this.config)
            }), "00:00");
            return this.elements.display[e] = t
        },
        bindMenuItemShortcuts(s, e) {
            M.call(this, s, "keydown keyup", t=>{
                if (["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(t.key) && (t.preventDefault(),
                t.stopPropagation(),
                "keydown" !== t.type)) {
                    var i = _(s, '[role="menuitemradio"]');
                    if (!i && ["Space", "ArrowRight"].includes(t.key))
                        O.showMenuPanel.call(this, e, !0);
                    else {
                        let e;
                        "Space" !== t.key && ("ArrowDown" === t.key || i && "ArrowRight" === t.key ? (e = s.nextElementSibling,
                        w(e) || (e = s.parentNode.firstElementChild)) : (e = s.previousElementSibling,
                        w(e) || (e = s.parentNode.lastElementChild)),
                        Ee.call(this, e, !0))
                    }
                }
            }
            , !1),
            M.call(this, s, "keyup", e=>{
                "Return" === e.key && O.focusFirstMenuItem.call(this, null, !0)
            }
            )
        },
        createMenuItem({value: t, list: e, type: i, title: s, badge: n=null, checked: a=!1}) {
            const r = g(this.config.selectors.inputs[i])
              , o = T("button", m(r, {
                type: "button",
                role: "menuitemradio",
                class: (this.config.classNames.control + " " + (r.class || "")).trim(),
                "aria-checked": a,
                value: t
            }))
              , l = T("span");
            l.innerHTML = s,
            w(n) && l.appendChild(n),
            o.appendChild(l),
            Object.defineProperty(o, "checked", {
                enumerable: !0,
                get: ()=>"true" === o.getAttribute("aria-checked"),
                set(e) {
                    e && Array.from(o.parentNode.children).filter(e=>_(e, '[role="menuitemradio"]')).forEach(e=>e.setAttribute("aria-checked", "false")),
                    o.setAttribute("aria-checked", e ? "true" : "false")
                }
            }),
            this.listeners.bind(o, "click keyup", e=>{
                if (!h(e) || "Space" === e.key) {
                    switch (e.preventDefault(),
                    e.stopPropagation(),
                    o.checked = !0,
                    i) {
                    case "language":
                        this.currentTrack = Number(t);
                        break;
                    case "quality":
                        this.quality = t;
                        break;
                    case "speed":
                        this.speed = parseFloat(t)
                    }
                    O.showMenuPanel.call(this, "home", h(e))
                }
            }
            , i, !1),
            O.bindMenuItemShortcuts.call(this, o, i),
            e.appendChild(o)
        },
        formatTime(e=0, t=!1) {
            return y(e) ? Fe(e, 0 < We(this.duration), t) : e
        },
        updateTimeDisplay(e=null, t=0, i=!1) {
            w(e) && y(t) && (e.innerText = O.formatTime(t, i))
        },
        updateVolume() {
            this.supported.ui && (w(this.elements.inputs.volume) && O.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume),
            w(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange(e, t=0) {
            w(e) && (e.value = t,
            O.updateRangeFill.call(this, e))
        },
        updateProgress(e) {
            if (this.supported.ui && d(e)) {
                var t, i, s = (e,t)=>{
                    const i = y(t) ? t : 0
                      , s = w(e) ? e : this.elements.display.buffer;
                    if (w(s)) {
                        s.value = i;
                        const e = s.getElementsByTagName("span")[0];
                        w(e) && (e.childNodes[0].nodeValue = i)
                    }
                }
                ;
                if (e)
                    switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        t = this.currentTime,
                        i = this.duration,
                        t = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2),
                        "timeupdate" === e.type && O.setRange.call(this, this.elements.inputs.seek, t);
                        break;
                    case "playing":
                    case "progress":
                        s(this.elements.display.buffer, 100 * this.buffered)
                    }
            }
        },
        updateRangeFill(e) {
            const t = d(e) ? e.target : e;
            if (w(t) && "range" === t.getAttribute("type")) {
                if (_(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = O.formatTime(this.currentTime)
                      , i = O.formatTime(this.duration)
                      , s = $.get("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
                } else if (_(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e),
                    t.setAttribute("aria-valuetext", e.toFixed(1) + "%")
                } else
                    t.setAttribute("aria-valuenow", t.value);
                p.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
            }
        },
        updateSeekTooltip(t) {
            if (this.config.tooltips.seek && w(this.elements.inputs.seek) && w(this.elements.display.seekTooltip) && 0 !== this.duration) {
                const s = this.elements.display.seekTooltip
                  , n = this.config.classNames.tooltip + "--visible"
                  , a = e=>x(s, n, e);
                if (this.touch)
                    a(!1);
                else {
                    let e = 0;
                    var i = this.elements.progress.getBoundingClientRect();
                    if (d(t))
                        e = 100 / i.width * (t.pageX - i.left);
                    else {
                        if (!we(s, n))
                            return;
                        e = parseFloat(s.style.left, 10)
                    }
                    e < 0 ? e = 0 : 100 < e && (e = 100);
                    const r = this.duration / 100 * e;
                    s.innerText = O.formatTime(r);
                    i = null == (i = this.config.markers) || null == (i = i.points) ? void 0 : i.find(({time: e})=>e === Math.round(r));
                    i && s.insertAdjacentHTML("afterbegin", i.label + "<br>"),
                    s.style.left = e + "%",
                    d(t) && ["mouseenter", "mouseleave"].includes(t.type) && a("mouseenter" === t.type)
                }
            }
        },
        timeUpdate(e) {
            var t = !w(this.elements.display.duration) && this.config.invertTime;
            O.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t),
            e && "timeupdate" === e.type && this.media.seeking || O.updateProgress.call(this, e)
        },
        durationUpdate() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= 2 ** 32)
                    return v(this.elements.display.currentTime, !0),
                    void v(this.elements.progress, !0);
                w(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = w(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && O.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration),
                e && O.updateTimeDisplay.call(this, this.elements.display.duration, this.duration),
                this.config.markers.enabled && O.setMarkers.call(this),
                O.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton(e, t) {
            v(this.elements.settings.buttons[e], !t)
        },
        updateSetting(e, t, i) {
            const s = this.elements.settings.panels[e];
            let n = null
              , a = t;
            if ("captions" === e)
                n = this.currentTrack;
            else {
                if (n = E(i) ? this[e] : i,
                E(n) && (n = this.config[e].default),
                !E(this.options[e]) && !this.options[e].includes(n))
                    return void this.debug.warn(`Unsupported value of '${n}' for ` + e);
                if (!this.config[e].options.includes(n))
                    return void this.debug.warn(`Disabled value of '${n}' for ` + e)
            }
            if (w(a) || (a = s && s.querySelector('[role="menu"]')),
            w(a)) {
                this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = O.getLabel.call(this, e, n);
                const r = a && a.querySelector(`[value="${n}"]`);
                w(r) && (r.checked = !0)
            }
        },
        getLabel(e, t) {
            switch (e) {
            case "speed":
                return 1 === t ? $.get("normal", this.config) : t + "&times;";
            case "quality":
                if (y(t)) {
                    const e = $.get("qualityLabel." + t, this.config);
                    return e.length ? e : t + "p"
                }
                return De(t);
            case "captions":
                return z.getLabel.call(this);
            default:
                return null
            }
        },
        setQualityMenu(e) {
            if (w(this.elements.settings.panels.quality)) {
                const t = "quality"
                  , i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                u(e) && (this.options.quality = Ce(e).filter(e=>this.config.quality.options.includes(e)));
                e = !E(this.options.quality) && 1 < this.options.quality.length;
                if (O.toggleMenuButton.call(this, t, e),
                ye(i),
                O.checkMenu.call(this),
                e) {
                    const s = e=>{
                        e = $.get("qualityBadge." + e, this.config);
                        return e.length ? O.createBadge.call(this, e) : null
                    }
                    ;
                    this.options.quality.sort((e,t)=>{
                        const i = this.config.quality.options;
                        return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                    }
                    ).forEach(e=>{
                        O.createMenuItem.call(this, {
                            value: e,
                            list: i,
                            type: t,
                            title: O.getLabel.call(this, "quality", e),
                            badge: s(e)
                        })
                    }
                    ),
                    O.updateSetting.call(this, t, i)
                }
            }
        },
        setCaptionsMenu() {
            if (w(this.elements.settings.panels.captions)) {
                const i = this.elements.settings.panels.captions.querySelector('[role="menu"]')
                  , e = z.getTracks.call(this)
                  , t = Boolean(e.length);
                if (O.toggleMenuButton.call(this, "captions", t),
                ye(i),
                O.checkMenu.call(this),
                t) {
                    const s = e.map((e,t)=>({
                        value: t,
                        checked: this.captions.toggled && this.currentTrack === t,
                        title: z.getLabel.call(this, e),
                        badge: e.language && O.createBadge.call(this, e.language.toUpperCase()),
                        list: i,
                        type: "language"
                    }));
                    s.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: $.get("disabled", this.config),
                        list: i,
                        type: "language"
                    }),
                    s.forEach(O.createMenuItem.bind(this)),
                    O.updateSetting.call(this, "captions", i)
                }
            }
        },
        setSpeedMenu() {
            if (w(this.elements.settings.panels.speed)) {
                const t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter(e=>e >= this.minimumSpeed && e <= this.maximumSpeed);
                var e = !E(this.options.speed) && 1 < this.options.speed.length;
                O.toggleMenuButton.call(this, "speed", e),
                ye(t),
                O.checkMenu.call(this),
                e && (this.options.speed.forEach(e=>{
                    O.createMenuItem.call(this, {
                        value: e,
                        list: t,
                        type: "speed",
                        title: O.getLabel.call(this, "speed", e)
                    })
                }
                ),
                O.updateSetting.call(this, "speed", t))
            }
        },
        checkMenu() {
            var e = this.elements.settings["buttons"]
              , e = !E(e) && Object.values(e).some(e=>!e.hidden);
            v(this.elements.settings.menu, !e)
        },
        focusFirstMenuItem(t, i=!1) {
            if (!this.elements.settings.popup.hidden) {
                let e = t;
                t = (e = w(e) ? e : Object.values(this.elements.settings.panels).find(e=>!e.hidden)).querySelector('[role^="menuitem"]');
                Ee.call(this, t, i)
            }
        },
        toggleMenu(t) {
            const i = this.elements.settings["popup"]
              , s = this.elements.buttons.settings;
            if (w(i) && w(s)) {
                const n = i["hidden"];
                let e = n;
                if (b(t))
                    e = t;
                else if (h(t) && "Escape" === t.key)
                    e = !1;
                else if (d(t)) {
                    const n = c(t.composedPath) ? t.composedPath()[0] : t.target
                      , a = i.contains(n);
                    if (a || !a && t.target !== s && e)
                        return
                }
                s.setAttribute("aria-expanded", e),
                v(i, !e),
                x(this.elements.container, this.config.classNames.menu.open, e),
                e && h(t) ? O.focusFirstMenuItem.call(this, null, !0) : e || n || Ee.call(this, s, h(t))
            }
        },
        getMenuSize(e) {
            const t = e.cloneNode(!0);
            t.style.position = "absolute",
            t.style.opacity = 0,
            t.removeAttribute("hidden"),
            e.parentNode.appendChild(t);
            var e = t.scrollWidth
              , i = t.scrollHeight;
            return f(t),
            {
                width: e,
                height: i
            }
        },
        showMenuPanel(e="", t=!1) {
            var i = this.elements.container.querySelector(`#plyr-settings-${this.id}-` + e);
            if (w(i)) {
                const s = i.parentNode
                  , n = Array.from(s.children).find(e=>!e.hidden);
                if (k.transitions && !k.reducedMotion) {
                    s.style.width = n.scrollWidth + "px",
                    s.style.height = n.scrollHeight + "px";
                    const e = O.getMenuSize.call(this, i)
                      , t = e=>{
                        e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "",
                        s.style.height = "",
                        _e.call(this, s, ue, t))
                    }
                    ;
                    M.call(this, s, ue, t),
                    s.style.width = e.width + "px",
                    s.style.height = e.height + "px"
                }
                v(n, !0),
                v(i, !1),
                O.focusFirstMenuItem.call(this, i, t)
            }
        },
        setDownloadUrl() {
            const e = this.elements.buttons.download;
            w(e) && e.setAttribute("href", this.download)
        },
        create(o) {
            const {bindMenuItemShortcuts: l, createButton: i, createProgress: e, createRange: s, createTime: c, setQualityMenu: t, setSpeedMenu: n, showMenuPanel: d} = O
              , a = (this.elements.controls = null,
            u(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large")),
            T("div", g(this.config.selectors.controls.wrapper)))
              , h = (this.elements.controls = a,
            {
                class: "plyr__controls__item"
            });
            return Ce(u(this.config.controls) ? this.config.controls : []).forEach(t=>{
                if ("restart" === t && a.appendChild(i.call(this, "restart", h)),
                "rewind" === t && a.appendChild(i.call(this, "rewind", h)),
                "play" === t && a.appendChild(i.call(this, "play", h)),
                "fast-forward" === t && a.appendChild(i.call(this, "fast-forward", h)),
                "progress" === t) {
                    const l = T("div", {
                        class: h.class + " plyr__progress__container"
                    })
                      , i = T("div", g(this.config.selectors.progress));
                    if (i.appendChild(s.call(this, "seek", {
                        id: "plyr-seek-" + o.id
                    })),
                    i.appendChild(e.call(this, "buffer")),
                    this.config.tooltips.seek) {
                        const o = T("span", {
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        i.appendChild(o),
                        this.elements.display.seekTooltip = o
                    }
                    this.elements.progress = i,
                    l.appendChild(this.elements.progress),
                    a.appendChild(l)
                }
                if ("current-time" === t && a.appendChild(c.call(this, "currentTime", h)),
                "duration" === t && a.appendChild(c.call(this, "duration", h)),
                "mute" === t || "volume" === t) {
                    let e = this.elements["volume"];
                    if (w(e) && a.contains(e) || (e = T("div", m({}, h, {
                        class: (h.class + " plyr__volume").trim()
                    })),
                    this.elements.volume = e,
                    a.appendChild(e)),
                    "mute" === t && e.appendChild(i.call(this, "mute")),
                    "volume" === t && !p.isIos) {
                        const i = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        };
                        e.appendChild(s.call(this, "volume", m(i, {
                            id: "plyr-volume-" + o.id
                        })))
                    }
                }
                if ("captions" === t && a.appendChild(i.call(this, "captions", h)),
                "settings" === t && !E(this.config.settings)) {
                    const e = T("div", m({}, h, {
                        class: (h.class + " plyr__menu").trim(),
                        hidden: ""
                    }))
                      , s = (e.appendChild(i.call(this, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-" + o.id,
                        "aria-expanded": !1
                    })),
                    T("div", {
                        class: "plyr__menu__container",
                        id: "plyr-settings-" + o.id,
                        hidden: ""
                    }))
                      , c = T("div")
                      , t = T("div", {
                        id: `plyr-settings-${o.id}-home`
                    })
                      , r = T("div", {
                        role: "menu"
                    });
                    t.appendChild(r),
                    c.appendChild(t),
                    this.elements.settings.panels.home = t,
                    this.config.settings.forEach(e=>{
                        const t = T("button", m(g(this.config.selectors.buttons.settings), {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }))
                          , i = (l.call(this, t, e),
                        M.call(this, t, "click", ()=>{
                            d.call(this, e, !1)
                        }
                        ),
                        T("span", null, $.get(e, this.config)))
                          , s = T("span", {
                            class: this.config.classNames.menu.value
                        })
                          , n = (s.innerHTML = o[e],
                        i.appendChild(s),
                        t.appendChild(i),
                        r.appendChild(t),
                        T("div", {
                            id: `plyr-settings-${o.id}-` + e,
                            hidden: ""
                        }))
                          , a = T("button", {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                        });
                        a.appendChild(T("span", {
                            "aria-hidden": !0
                        }, $.get(e, this.config))),
                        a.appendChild(T("span", {
                            class: this.config.classNames.hidden
                        }, $.get("menuBack", this.config))),
                        M.call(this, n, "keydown", e=>{
                            "ArrowLeft" === e.key && (e.preventDefault(),
                            e.stopPropagation(),
                            d.call(this, "home", !0))
                        }
                        , !1),
                        M.call(this, a, "click", ()=>{
                            d.call(this, "home", !1)
                        }
                        ),
                        n.appendChild(a),
                        n.appendChild(T("div", {
                            role: "menu"
                        })),
                        c.appendChild(n),
                        this.elements.settings.buttons[e] = t,
                        this.elements.settings.panels[e] = n
                    }
                    ),
                    s.appendChild(c),
                    e.appendChild(s),
                    a.appendChild(e),
                    this.elements.settings.popup = s,
                    this.elements.settings.menu = e
                }
                if ("pip" === t && k.pip && a.appendChild(i.call(this, "pip", h)),
                "airplay" === t && k.airplay && a.appendChild(i.call(this, "airplay", h)),
                "download" === t) {
                    const o = m({}, h, {
                        element: "a",
                        href: this.download,
                        target: "_blank"
                    })
                      , l = (this.isHTML5 && (o.download = ""),
                    this.config.urls)["download"];
                    !he(l) && this.isEmbed && m(o, {
                        icon: "logo-" + this.provider,
                        label: this.provider
                    }),
                    a.appendChild(i.call(this, "download", o))
                }
                "fullscreen" === t && a.appendChild(i.call(this, "fullscreen", h))
            }
            ),
            this.isHTML5 && t.call(this, P.getQualityOptions.call(this)),
            n.call(this),
            a
        },
        inject() {
            if (this.config.loadSprite) {
                const t = O.getIconUrl.call(this);
                t.cors && Re(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            let t = null;
            this.elements.controls = null;
            const e = {
                id: this.id,
                seektime: this.config.seekTime,
                title: this.config.title
            };
            let i = !0;
            c(this.config.controls) && (this.config.controls = this.config.controls.call(this, e)),
            this.config.controls || (this.config.controls = []),
            w(this.config.controls) || l(this.config.controls) ? t = this.config.controls : (t = O.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: z.getLabel.call(this)
            }),
            i = !1);
            let s;
            if (i && l(this.config.controls) && (t = (()=>{
                let i = t;
                return Object.entries(e).forEach(([e,t])=>{
                    i = Ne(i, `{${e}}`, t)
                }
                ),
                i
            }
            )()),
            l(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)),
            (s = w(s) ? s : this.elements.container)[w(t) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", t),
            w(this.elements.controls) || O.findElements.call(this),
            !E(this.elements.buttons)) {
                const t = t=>{
                    const i = this.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: ()=>we(t, i),
                        set(e=!1) {
                            x(t, i, e)
                        }
                    })
                }
                ;
                Object.values(this.elements.buttons).filter(Boolean).forEach(e=>{
                    u(e) || ce(e) ? Array.from(e).filter(Boolean).forEach(t) : t(e)
                }
                )
            }
            if (p.isEdge && pe(s),
            this.config.tooltips.controls) {
                const {classNames: t, selectors: e} = this.config
                  , i = `${e.controls.wrapper} ${e.labels} .` + t.hidden
                  , s = S.call(this, i);
                Array.from(s).forEach(e=>{
                    x(e, this.config.classNames.hidden, !1),
                    x(e, this.config.classNames.tooltip, !0)
                }
                )
            }
        },
        setMediaMetadata() {
            try {
                "mediaSession"in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                    title: this.config.mediaMetadata.title,
                    artist: this.config.mediaMetadata.artist,
                    album: this.config.mediaMetadata.album,
                    artwork: this.config.mediaMetadata.artwork
                }))
            } catch (e) {}
        },
        setMarkers() {
            var e;
            if (this.duration && !this.elements.markers) {
                const t = null == (e = this.config.markers) || null == (e = e.points) ? void 0 : e.filter(({time: e})=>0 < e && e < this.duration);
                if (null != t && t.length) {
                    const i = document.createDocumentFragment()
                      , n = document.createDocumentFragment();
                    let s = null;
                    const a = this.config.classNames.tooltip + "--visible"
                      , r = e=>x(s, a, e);
                    t.forEach(e=>{
                        const t = T("span", {
                            class: this.config.classNames.marker
                        }, "")
                          , i = e.time / this.duration * 100 + "%";
                        s && (t.addEventListener("mouseenter", ()=>{
                            e.label || (s.style.left = i,
                            s.innerHTML = e.label,
                            r(!0))
                        }
                        ),
                        t.addEventListener("mouseleave", ()=>{
                            r(!1)
                        }
                        )),
                        t.addEventListener("click", ()=>{
                            this.currentTime = e.time
                        }
                        ),
                        t.style.left = i,
                        n.appendChild(t)
                    }
                    ),
                    i.appendChild(n),
                    this.config.tooltips.seek || (s = T("span", {
                        class: this.config.classNames.tooltip
                    }, ""),
                    i.appendChild(s)),
                    this.elements.markers = {
                        points: n,
                        tip: s
                    },
                    this.elements.progress.appendChild(i)
                }
            }
        }
    };
    function Ye(e, t=!0) {
        let i = e;
        if (t) {
            const e = document.createElement("a");
            e.href = i,
            i = e.href
        }
        try {
            return new URL(i)
        } catch (e) {
            return null
        }
    }
    function Ve(e) {
        const i = new URLSearchParams;
        return n(e) && Object.entries(e).forEach(([e,t])=>{
            i.set(e, t)
        }
        ),
        i
    }
    const z = {
        setup() {
            if (this.supported.ui)
                if (!this.isVideo || this.isYouTube || this.isHTML5 && !k.textTracks)
                    u(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && O.setCaptionsMenu.call(this);
                else {
                    var i;
                    if (w(this.elements.captions) || (this.elements.captions = T("div", g(this.config.selectors.captions)),
                    s = this.elements.captions,
                    i = this.elements.wrapper,
                    w(s) && w(i) && i.parentNode.insertBefore(s, i.nextSibling)),
                    p.isIE && window.URL) {
                        const s = this.media.querySelectorAll("track");
                        Array.from(s).forEach(t=>{
                            var e = t.getAttribute("src")
                              , i = Ye(e);
                            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && qe(e, "blob").then(e=>{
                                t.setAttribute("src", window.URL.createObjectURL(e))
                            }
                            ).catch(()=>{
                                f(t)
                            }
                            )
                        }
                        )
                    }
                    var s = Ce((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e=>e.split("-")[0]));
                    let e = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase()
                      , t = ("auto" === e && ([e] = s),
                    this.storage.get("captions"));
                    if (b(t) || ({active: t} = this.config.captions),
                    Object.assign(this.captions, {
                        toggled: !1,
                        active: t,
                        language: e,
                        languages: s
                    }),
                    this.isHTML5) {
                        const s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                        M.call(this, this.media.textTracks, s, z.update.bind(this))
                    }
                    setTimeout(z.update.bind(this), 0)
                }
        },
        update() {
            const e = z.getTracks.call(this, !0)
              , {active: t, language: i, meta: s, currentTrackNode: n} = this.captions
              , a = Boolean(e.find(e=>e.language === i));
            this.isHTML5 && this.isVideo && e.filter(e=>!s.get(e)).forEach(e=>{
                this.debug.log("Track added", e),
                s.set(e, {
                    default: "showing" === e.mode
                }),
                "showing" === e.mode && (e.mode = "hidden"),
                M.call(this, e, "cuechange", ()=>z.updateCues.call(this))
            }
            ),
            (a && this.language !== i || !e.includes(n)) && (z.setLanguage.call(this, i),
            z.toggle.call(this, t && a)),
            this.elements && x(this.elements.container, this.config.classNames.captions.enabled, !E(e)),
            u(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && O.setCaptionsMenu.call(this)
        },
        toggle(e, t=!0) {
            if (this.supported.ui) {
                const i = this.captions["toggled"]
                  , s = this.config.classNames.captions.active
                  , n = o(e) ? !i : e;
                if (n !== i) {
                    if (t || (this.captions.active = n,
                    this.storage.set({
                        captions: n
                    })),
                    !this.language && n && !t) {
                        const e = z.getTracks.call(this)
                          , t = z.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                        return this.captions.language = t.language,
                        void z.set.call(this, e.indexOf(t))
                    }
                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n),
                    x(this.elements.container, s, n),
                    this.captions.toggled = n,
                    O.updateSetting.call(this, "captions"),
                    I.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
                }
                setTimeout(()=>{
                    n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                }
                )
            }
        },
        set(e, t=!0) {
            var i, s = z.getTracks.call(this);
            -1 !== e ? y(e) ? e in s ? (this.captions.currentTrack !== e && (i = ((s = s[this.captions.currentTrack = e]) || {})["language"],
            this.captions.currentTrackNode = s,
            O.updateSetting.call(this, "captions"),
            t || (this.captions.language = i,
            this.storage.set({
                language: i
            })),
            this.isVimeo && this.embed.enableTextTrack(i),
            I.call(this, this.media, "languagechange")),
            z.toggle.call(this, !0, t),
            this.isHTML5 && this.isVideo && z.updateCues.call(this)) : this.debug.warn("Track not found", e) : this.debug.warn("Invalid caption argument", e) : z.toggle.call(this, !1, t)
        },
        setLanguage(e, t=!0) {
            if (l(e)) {
                var i = e.toLowerCase();
                this.captions.language = i;
                const s = z.getTracks.call(this)
                  , n = z.findTrack.call(this, [i]);
                z.set.call(this, s.indexOf(n), t)
            } else
                this.debug.warn("Invalid language argument", e)
        },
        getTracks(t=!1) {
            return Array.from((this.media || {}).textTracks || []).filter(e=>!this.isHTML5 || t || this.captions.meta.has(e)).filter(e=>["captions", "subtitles"].includes(e.kind))
        },
        findTrack(e, t=!1) {
            const i = z.getTracks.call(this)
              , s = e=>Number((this.captions.meta.get(e) || {}).default)
              , n = Array.from(i).sort((e,t)=>s(t) - s(e));
            let a;
            return e.every(t=>!(a = n.find(e=>e.language === t))),
            a || (t ? n[0] : void 0)
        },
        getCurrentTrack() {
            return z.getTracks.call(this)[this.currentTrack]
        },
        getLabel(e) {
            let t = e;
            return !de(t) && k.textTracks && this.captions.toggled && (t = z.getCurrentTrack.call(this)),
            de(t) ? E(t.label) ? E(t.language) ? $.get("enabled", this.config) : e.language.toUpperCase() : t.label : $.get("disabled", this.config)
        },
        updateCues(t) {
            if (this.supported.ui)
                if (w(this.elements.captions))
                    if (o(t) || Array.isArray(t)) {
                        let e = t;
                        if (!e) {
                            const t = z.getCurrentTrack.call(this);
                            e = Array.from((t || {}).activeCues || []).map(e=>e.getCueAsHTML()).map(je)
                        }
                        var i = e.map(e=>e.trim()).join("\n");
                        if (i !== this.elements.captions.innerHTML) {
                            ye(this.elements.captions);
                            const t = T("span", g(this.config.selectors.caption));
                            t.innerHTML = i,
                            this.elements.captions.appendChild(t),
                            I.call(this, this.media, "cuechange")
                        }
                    } else
                        this.debug.warn("updateCues: Invalid input", t);
                else
                    this.debug.warn("No captions element to render to")
        }
    }
      , Xe = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: !1,
            onChange: null
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        settings: ["captions", "quality", "speed"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            download: null,
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                download: '[data-plyr="download"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
                time: "plyr__time"
            },
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus",
            previewThumbnails: {
                thumbContainer: "plyr__preview-thumb",
                thumbContainerShown: "plyr__preview-thumb--is-shown",
                imageContainer: "plyr__preview-thumb__image-container",
                timeContainer: "plyr__preview-thumb__time-container",
                scrubbingContainer: "plyr__preview-scrubbing",
                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id",
                hash: "data-plyr-embed-hash"
            }
        },
        ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
        },
        previewThumbnails: {
            enabled: !1,
            src: ""
        },
        vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            customControls: !0,
            referrerPolicy: null,
            premium: !1
        },
        youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: !0,
            noCookie: !1
        },
        mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
        },
        markers: {
            enabled: !1,
            points: []
        }
    }
      , Ge = "picture-in-picture"
      , N = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    }
      , Ue = ()=>{}
    ;
    class Qe {
        constructor(e=!1) {
            this.enabled = window.console && e,
            this.enabled && this.log("Debugging enabled")
        }
        get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : Ue
        }
        get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : Ue
        }
        get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : Ue
        }
    }
    class D {
        constructor(e) {
            a(this, "onChange", ()=>{
                if (this.enabled) {
                    const t = this.player.elements.buttons.fullscreen;
                    w(t) && (t.pressed = this.active);
                    var e = this.target === this.player.media ? this.target : this.player.elements.container;
                    I.call(this.player, e, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                }
            }
            ),
            a(this, "toggleFallback", (t=!1)=>{
                if (t ? this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
                document.body.style.overflow = t ? "hidden" : "",
                x(this.target, this.player.config.classNames.fullscreen.fallback, t),
                p.isIos) {
                    let e = document.head.querySelector('meta[name="viewport"]');
                    const s = "viewport-fit=cover";
                    e || (e = document.createElement("meta")).setAttribute("name", "viewport");
                    var i = l(e.content) && e.content.includes(s);
                    t ? (this.cleanupViewport = !i,
                    i || (e.content += "," + s)) : this.cleanupViewport && (e.content = e.content.split(",").filter(e=>e.trim() !== s).join(","))
                }
                this.onChange()
            }
            ),
            a(this, "trapFocus", e=>{
                if (!p.isIos && this.active && "Tab" === e.key) {
                    const t = document.activeElement
                      , i = S.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]")
                      , [s] = i
                      , n = i[i.length - 1];
                    t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(),
                    e.preventDefault()) : (s.focus(),
                    e.preventDefault())
                }
            }
            ),
            a(this, "update", ()=>{
                var e;
                this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : D.native ? "Native" : "Fallback",
                this.player.debug.log(e + " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"),
                x(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            }
            ),
            a(this, "enter", ()=>{
                this.enabled && (p.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !D.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? E(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen({
                    navigationUI: "hide"
                }))
            }
            ),
            a(this, "exit", ()=>{
                var e;
                this.enabled && (p.isIos && this.player.config.fullscreen.iosNative ? (this.target.webkitExitFullscreen(),
                L(this.player.play())) : !D.native || this.forceFallback ? this.toggleFallback(!1) : this.prefix ? E(this.prefix) || (e = "moz" === this.prefix ? "Cancel" : "Exit",
                document[this.prefix + e + this.property]()) : (document.cancelFullScreen || document.exitFullscreen).call(document))
            }
            ),
            a(this, "toggle", ()=>{
                this.active ? this.exit() : this.enter()
            }
            ),
            this.player = e,
            this.prefix = D.prefix,
            this.property = D.property,
            this.scrollPosition = {
                x: 0,
                y: 0
            },
            this.forceFallback = "force" === e.config.fullscreen.fallback,
            this.player.elements.fullscreen = e.config.fullscreen.container && function(e, t) {
                const i = Element["prototype"];
                return (i.closest || function() {
                    let e = this;
                    do {
                        if (_.matches(e, t))
                            return e
                    } while (null !== (e = e.parentElement || e.parentNode) && 1 === e.nodeType);
                    return null
                }
                ).call(e, t)
            }(this.player.elements.container, e.config.fullscreen.container),
            M.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", ()=>{
                this.onChange()
            }
            ),
            M.call(this.player, this.player.elements.container, "dblclick", e=>{
                w(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
            }
            ),
            M.call(this, this.player.elements.container, "keydown", e=>this.trapFocus(e)),
            this.update()
        }
        static get native() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        }
        get usingNative() {
            return D.native && !this.forceFallback
        }
        static get prefix() {
            if (c(document.exitFullscreen))
                return "";
            let t = "";
            return ["webkit", "moz", "ms"].some(e=>!(!c(document[e + "ExitFullscreen"]) && !c(document[e + "CancelFullScreen"]) || (t = e,
            0))),
            t
        }
        static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
        }
        get enabled() {
            return (D.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
        }
        get active() {
            if (!this.enabled)
                return !1;
            if (!D.native || this.forceFallback)
                return we(this.target, this.player.config.classNames.fullscreen.fallback);
            var e = this.prefix ? this.target.getRootNode()["" + this.prefix + this.property + "Element"] : this.target.getRootNode().fullscreenElement;
            return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
        }
        get target() {
            return p.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
        }
    }
    function Ke(n, a=1) {
        return new Promise((e,t)=>{
            const i = new Image
              , s = ()=>{
                delete i.onload,
                delete i.onerror,
                (i.naturalWidth >= a ? e : t)(i)
            }
            ;
            Object.assign(i, {
                onload: s,
                onerror: s,
                src: n
            })
        }
        )
    }
    const j = {
        addStyleHook() {
            x(this.elements.container, this.config.selectors.container.replace(".", ""), !0),
            x(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
        },
        toggleNativeControls(e=!1) {
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
        },
        build() {
            if (this.listeners.media(),
            !this.supported.ui)
                return this.debug.warn(`Basic support only for ${this.provider} ` + this.type),
                void j.toggleNativeControls.call(this, !0);
            w(this.elements.controls) || (O.inject.call(this),
            this.listeners.controls()),
            j.toggleNativeControls.call(this),
            this.isHTML5 && z.setup.call(this),
            this.volume = null,
            this.muted = null,
            this.loop = null,
            this.quality = null,
            this.speed = null,
            O.updateVolume.call(this),
            O.timeUpdate.call(this),
            O.durationUpdate.call(this),
            j.checkPlaying.call(this),
            x(this.elements.container, this.config.classNames.pip.supported, k.pip && this.isHTML5 && this.isVideo),
            x(this.elements.container, this.config.classNames.airplay.supported, k.airplay && this.isHTML5),
            x(this.elements.container, this.config.classNames.isIos, p.isIos),
            x(this.elements.container, this.config.classNames.isTouch, this.touch),
            this.ready = !0,
            setTimeout(()=>{
                I.call(this, this.media, "ready")
            }
            , 0),
            j.setTitle.call(this),
            this.poster && j.setPoster.call(this, this.poster, !1).catch(()=>{}
            ),
            this.config.duration && O.durationUpdate.call(this),
            this.config.mediaMetadata && O.setMediaMetadata.call(this)
        },
        setTitle() {
            let t = $.get("play", this.config);
            if (l(this.config.title) && !E(this.config.title) && (t += ", " + this.config.title),
            Array.from(this.elements.buttons.play || []).forEach(e=>{
                e.setAttribute("aria-label", t)
            }
            ),
            this.isEmbed) {
                const t = C.call(this, "iframe");
                if (w(t)) {
                    const e = E(this.config.title) ? "video" : this.config.title
                      , i = $.get("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", e))
                }
            }
        },
        togglePoster(e) {
            x(this.elements.container, this.config.classNames.posterEnabled, e)
        },
        setPoster(t, e=!0) {
            return e && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", t),
            this.elements.poster.removeAttribute("hidden"),
            function() {
                return new Promise(e=>this.ready ? setTimeout(e, 0) : M.call(this, this.elements.container, "ready", e)).then(()=>{}
                )
            }
            .call(this).then(()=>Ke(t)).catch(e=>{
                throw t === this.poster && j.togglePoster.call(this, !1),
                e
            }
            ).then(()=>{
                if (t !== this.poster)
                    throw new Error("setPoster cancelled by later call to setPoster")
            }
            ).then(()=>(Object.assign(this.elements.poster.style, {
                backgroundImage: `url('${t}')`,
                backgroundSize: ""
            }),
            j.togglePoster.call(this, !0),
            t)))
        },
        checkPlaying(e) {
            x(this.elements.container, this.config.classNames.playing, this.playing),
            x(this.elements.container, this.config.classNames.paused, this.paused),
            x(this.elements.container, this.config.classNames.stopped, this.stopped),
            Array.from(this.elements.buttons.play || []).forEach(e=>{
                Object.assign(e, {
                    pressed: this.playing
                }),
                e.setAttribute("aria-label", $.get(this.playing ? "pause" : "play", this.config))
            }
            ),
            d(e) && "timeupdate" === e.type || j.toggleControls.call(this)
        },
        checkLoading(e) {
            this.loading = ["stalled", "waiting"].includes(e.type),
            clearTimeout(this.timers.loading),
            this.timers.loading = setTimeout(()=>{
                x(this.elements.container, this.config.classNames.loading, this.loading),
                j.toggleControls.call(this)
            }
            , this.loading ? 250 : 0)
        },
        toggleControls(e) {
            var t, i = this.elements["controls"];
            i && this.config.hideControls && (t = this.touch && this.lastSeekTime + 2e3 > Date.now(),
            this.toggleControls(Boolean(e || this.loading || this.paused || i.pressed || i.hover || t)))
        },
        migrateStyles() {
            Object.values({
                ...this.media.style
            }).filter(e=>!E(e) && l(e) && e.startsWith("--plyr")).forEach(e=>{
                this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)),
                this.media.style.removeProperty(e)
            }
            ),
            E(this.media.style) && this.media.removeAttribute("style")
        }
    };
    class Je {
        constructor(e) {
            a(this, "firstTouch", ()=>{
                const e = this["player"]
                  , t = e["elements"];
                e.touch = !0,
                x(t.container, e.config.classNames.isTouch, !0)
            }
            ),
            a(this, "setTabFocus", e=>{
                const t = this["player"]
                  , i = t["elements"]
                  , {key: s, type: n, timeStamp: a} = e;
                clearTimeout(this.focusTimer),
                "keydown" === n && "Tab" !== s || ("keydown" === n && (this.lastKeyDown = a),
                e = a - this.lastKeyDown <= 20,
                "focus" === n && !e || (e = t.config.classNames.tabFocus,
                x(S.call(t, "." + e), e, !1),
                "focusout" !== n && (this.focusTimer = setTimeout(()=>{
                    var e = document.activeElement;
                    i.container.contains(e) && x(document.activeElement, t.config.classNames.tabFocus, !0)
                }
                , 10))))
            }
            ),
            a(this, "global", (e=!0)=>{
                var t = this["player"];
                t.config.keyboard.global && A.call(t, window, "keydown keyup", this.handleKey, e, !1),
                A.call(t, document.body, "click", this.toggleMenu, e),
                Se.call(t, document.body, "touchstart", this.firstTouch),
                A.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
            }
            ),
            a(this, "container", ()=>{
                const o = this["player"]
                  , {config: e, elements: l, timers: s} = o
                  , i = (!e.keyboard.global && e.keyboard.focused && M.call(o, l.container, "keydown keyup", this.handleKey, !1),
                M.call(o, l.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", e=>{
                    const t = l["controls"];
                    t && "enterfullscreen" === e.type && (t.pressed = !1,
                    t.hover = !1);
                    let i = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(e.type) && (j.toggleControls.call(o, !0),
                    i = o.touch ? 3e3 : 2e3),
                    clearTimeout(s.controls),
                    s.controls = setTimeout(()=>j.toggleControls.call(o, !1), i)
                }
                ),
                ()=>{
                    if (o.isVimeo && !o.config.vimeo.premium) {
                        const i = l.wrapper
                          , s = o.fullscreen["active"]
                          , [n,a] = Pe.call(o)
                          , r = Ae(`aspect-ratio: ${n} / ` + a);
                        var e, t;
                        s ? ([t,e] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                        t = n / a < t / e,
                        r ? (i.style.width = t ? "auto" : "100%",
                        i.style.height = t ? "100%" : "auto") : (i.style.maxWidth = t ? e / a * n + "px" : null,
                        i.style.margin = t ? "0 auto" : null)) : r ? (i.style.width = null,
                        i.style.height = null) : (i.style.maxWidth = null,
                        i.style.margin = null)
                    }
                }
                )
                  , n = ()=>{
                    clearTimeout(s.resized),
                    s.resized = setTimeout(i, 50)
                }
                ;
                M.call(o, l.container, "enterfullscreen exitfullscreen", e=>{
                    var t = o.fullscreen["target"];
                    t !== l.container || !o.isEmbed && E(o.config.ratio) || (i(),
                    ("enterfullscreen" === e.type ? M : _e).call(o, window, "resize", n))
                }
                )
            }
            ),
            a(this, "media", ()=>{
                const i = this["player"]
                  , s = i["elements"];
                if (M.call(i, i.media, "timeupdate seeking seeked", e=>O.timeUpdate.call(i, e)),
                M.call(i, i.media, "durationchange loadeddata loadedmetadata", e=>O.durationUpdate.call(i, e)),
                M.call(i, i.media, "ended", ()=>{
                    i.isHTML5 && i.isVideo && i.config.resetOnEnd && (i.restart(),
                    i.pause())
                }
                ),
                M.call(i, i.media, "progress playing seeking seeked", e=>O.updateProgress.call(i, e)),
                M.call(i, i.media, "volumechange", e=>O.updateVolume.call(i, e)),
                M.call(i, i.media, "playing play pause ended emptied timeupdate", e=>j.checkPlaying.call(i, e)),
                M.call(i, i.media, "waiting canplay seeked playing", e=>j.checkLoading.call(i, e)),
                i.supported.ui && i.config.clickToPlay && !i.isAudio) {
                    const t = C.call(i, "." + i.config.classNames.video);
                    if (!w(t))
                        return;
                    M.call(i, s.container, "click", e=>{
                        ![s.container, t].includes(e.target) && !t.contains(e.target) || i.touch && i.config.hideControls || (i.ended ? (this.proxy(e, i.restart, "restart"),
                        this.proxy(e, ()=>{
                            L(i.play())
                        }
                        , "play")) : this.proxy(e, ()=>{
                            L(i.togglePlay())
                        }
                        , "play"))
                    }
                    )
                }
                i.supported.ui && i.config.disableContextMenu && M.call(i, s.wrapper, "contextmenu", e=>{
                    e.preventDefault()
                }
                , !1),
                M.call(i, i.media, "volumechange", ()=>{
                    i.storage.set({
                        volume: i.volume,
                        muted: i.muted
                    })
                }
                ),
                M.call(i, i.media, "ratechange", ()=>{
                    O.updateSetting.call(i, "speed"),
                    i.storage.set({
                        speed: i.speed
                    })
                }
                ),
                M.call(i, i.media, "qualitychange", e=>{
                    O.updateSetting.call(i, "quality", null, e.detail.quality)
                }
                ),
                M.call(i, i.media, "ready qualitychange", ()=>{
                    O.setDownloadUrl.call(i)
                }
                );
                const t = i.config.events.concat(["keyup", "keydown"]).join(" ");
                M.call(i, i.media, t, e=>{
                    let {detail: t={}} = e;
                    "error" === e.type && (t = i.media.error),
                    I.call(i, s.container, e.type, !0, t)
                }
                )
            }
            ),
            a(this, "proxy", (e,t,i)=>{
                const s = this["player"]
                  , n = s.config.listeners[i];
                let a = !0;
                !1 !== (a = c(n) ? n.call(s, e) : a) && c(t) && t.call(s, e)
            }
            ),
            a(this, "bind", (e,t,i,s,n=!0)=>{
                var a = this["player"]
                  , r = a.config.listeners[s]
                  , r = c(r);
                M.call(a, e, t, e=>this.proxy(e, i, s), n && !r)
            }
            ),
            a(this, "controls", ()=>{
                const r = this["player"]
                  , s = r["elements"]
                  , t = p.isIE ? "change" : "input";
                if (s.buttons.play && Array.from(s.buttons.play).forEach(e=>{
                    this.bind(e, "click", ()=>{
                        L(r.togglePlay())
                    }
                    , "play")
                }
                ),
                this.bind(s.buttons.restart, "click", r.restart, "restart"),
                this.bind(s.buttons.rewind, "click", ()=>{
                    r.lastSeekTime = Date.now(),
                    r.rewind()
                }
                , "rewind"),
                this.bind(s.buttons.fastForward, "click", ()=>{
                    r.lastSeekTime = Date.now(),
                    r.forward()
                }
                , "fastForward"),
                this.bind(s.buttons.mute, "click", ()=>{
                    r.muted = !r.muted
                }
                , "mute"),
                this.bind(s.buttons.captions, "click", ()=>r.toggleCaptions()),
                this.bind(s.buttons.download, "click", ()=>{
                    I.call(r, r.media, "download")
                }
                , "download"),
                this.bind(s.buttons.fullscreen, "click", ()=>{
                    r.fullscreen.toggle()
                }
                , "fullscreen"),
                this.bind(s.buttons.pip, "click", ()=>{
                    r.pip = "toggle"
                }
                , "pip"),
                this.bind(s.buttons.airplay, "click", r.airplay, "airplay"),
                this.bind(s.buttons.settings, "click", e=>{
                    e.stopPropagation(),
                    e.preventDefault(),
                    O.toggleMenu.call(r, e)
                }
                , null, !1),
                this.bind(s.buttons.settings, "keyup", e=>{
                    ["Space", "Enter"].includes(e.key) && ("Enter" !== e.key ? (e.preventDefault(),
                    e.stopPropagation(),
                    O.toggleMenu.call(r, e)) : O.focusFirstMenuItem.call(r, null, !0))
                }
                , null, !1),
                this.bind(s.settings.menu, "keydown", e=>{
                    "Escape" === e.key && O.toggleMenu.call(r, e)
                }
                ),
                this.bind(s.inputs.seek, "mousedown mousemove", e=>{
                    var t = s.progress.getBoundingClientRect()
                      , t = 100 / t.width * (e.pageX - t.left);
                    e.currentTarget.setAttribute("seek-value", t)
                }
                ),
                this.bind(s.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", e=>{
                    const t = e.currentTarget
                      , i = "play-on-seeked";
                    var s;
                    h(e) && !["ArrowLeft", "ArrowRight"].includes(e.key) || (r.lastSeekTime = Date.now(),
                    s = t.hasAttribute(i),
                    e = ["mouseup", "touchend", "keyup"].includes(e.type),
                    s && e ? (t.removeAttribute(i),
                    L(r.play())) : !e && r.playing && (t.setAttribute(i, ""),
                    r.pause()))
                }
                ),
                p.isIos) {
                    const s = S.call(r, 'input[type="range"]');
                    Array.from(s).forEach(e=>this.bind(e, t, e=>pe(e.target)))
                }
                this.bind(s.inputs.seek, t, e=>{
                    const t = e.currentTarget;
                    let i = t.getAttribute("seek-value");
                    E(i) && (i = t.value),
                    t.removeAttribute("seek-value"),
                    r.currentTime = i / t.max * r.duration
                }
                , "seek"),
                this.bind(s.progress, "mouseenter mouseleave mousemove", e=>O.updateSeekTooltip.call(r, e)),
                this.bind(s.progress, "mousemove touchmove", e=>{
                    const t = r["previewThumbnails"];
                    t && t.loaded && t.startMove(e)
                }
                ),
                this.bind(s.progress, "mouseleave touchend click", ()=>{
                    const e = r["previewThumbnails"];
                    e && e.loaded && e.endMove(!1, !0)
                }
                ),
                this.bind(s.progress, "mousedown touchstart", e=>{
                    const t = r["previewThumbnails"];
                    t && t.loaded && t.startScrubbing(e)
                }
                ),
                this.bind(s.progress, "mouseup touchend", e=>{
                    const t = r["previewThumbnails"];
                    t && t.loaded && t.endScrubbing(e)
                }
                ),
                p.isWebkit && Array.from(S.call(r, 'input[type="range"]')).forEach(e=>{
                    this.bind(e, "input", e=>O.updateRangeFill.call(r, e.target))
                }
                ),
                r.config.toggleInvert && !w(s.display.duration) && this.bind(s.display.currentTime, "click", ()=>{
                    0 !== r.currentTime && (r.config.invertTime = !r.config.invertTime,
                    O.timeUpdate.call(r))
                }
                ),
                this.bind(s.inputs.volume, t, e=>{
                    r.volume = e.target.value
                }
                , "volume"),
                this.bind(s.controls, "mouseenter mouseleave", e=>{
                    s.controls.hover = !r.touch && "mouseenter" === e.type
                }
                ),
                s.fullscreen && Array.from(s.fullscreen.children).filter(e=>!e.contains(s.container)).forEach(e=>{
                    this.bind(e, "mouseenter mouseleave", e=>{
                        s.controls && (s.controls.hover = !r.touch && "mouseenter" === e.type)
                    }
                    )
                }
                ),
                this.bind(s.controls, "mousedown mouseup touchstart touchend touchcancel", e=>{
                    s.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                }
                ),
                this.bind(s.controls, "focusin", ()=>{
                    const {config: e, timers: t} = r;
                    x(s.controls, e.classNames.noTransition, !0),
                    j.toggleControls.call(r, !0),
                    setTimeout(()=>{
                        x(s.controls, e.classNames.noTransition, !1)
                    }
                    , 0);
                    var i = this.touch ? 3e3 : 4e3;
                    clearTimeout(t.controls),
                    t.controls = setTimeout(()=>j.toggleControls.call(r, !1), i)
                }
                ),
                this.bind(s.inputs.volume, "wheel", e=>{
                    const t = e.webkitDirectionInvertedFromDevice
                      , [i,s] = [e.deltaX, -e.deltaY].map(e=>t ? -e : e)
                      , n = Math.sign(Math.abs(i) > Math.abs(s) ? i : s);
                    r.increaseVolume(n / 50);
                    var a = r.media["volume"];
                    (1 === n && a < 1 || -1 === n && 0 < a) && e.preventDefault()
                }
                , "volume", !1)
            }
            ),
            this.player = e,
            this.lastKey = null,
            this.focusTimer = null,
            this.lastKeyDown = null,
            this.handleKey = this.handleKey.bind(this),
            this.toggleMenu = this.toggleMenu.bind(this),
            this.setTabFocus = this.setTabFocus.bind(this),
            this.firstTouch = this.firstTouch.bind(this)
        }
        handleKey(e) {
            const t = this["player"]
              , i = t["elements"]
              , {key: s, type: n, altKey: a, ctrlKey: r, metaKey: o, shiftKey: l} = e
              , c = "keydown" === n
              , d = c && s === this.lastKey;
            var h;
            if (!(a || r || o || l) && s)
                if (c) {
                    const n = document.activeElement;
                    if (w(n)) {
                        const s = t.config.selectors["editable"]
                          , a = i.inputs["seek"];
                        if (n !== a && _(n, s))
                            return;
                        if ("Space" === e.key && _(n, 'button, [role^="menuitem"]'))
                            return
                    }
                    switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s) && (e.preventDefault(),
                    e.stopPropagation()),
                    s) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        d || (h = parseInt(s, 10),
                        t.currentTime = t.duration / 10 * h);
                        break;
                    case "Space":
                    case "k":
                        d || L(t.togglePlay());
                        break;
                    case "ArrowUp":
                        t.increaseVolume(.1);
                        break;
                    case "ArrowDown":
                        t.decreaseVolume(.1);
                        break;
                    case "m":
                        d || (t.muted = !t.muted);
                        break;
                    case "ArrowRight":
                        t.forward();
                        break;
                    case "ArrowLeft":
                        t.rewind();
                        break;
                    case "f":
                        t.fullscreen.toggle();
                        break;
                    case "c":
                        d || t.toggleCaptions();
                        break;
                    case "l":
                        t.loop = !t.loop
                    }
                    "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(),
                    this.lastKey = s
                } else
                    this.lastKey = null
        }
        toggleMenu(e) {
            O.toggleMenu.call(this.player, e)
        }
    }
    var Ze, et = function() {
        var p = function() {}
          , r = {}
          , d = {}
          , h = {};
        function o(e, t) {
            if (e) {
                var i = h[e];
                if (d[e] = t,
                i)
                    for (; i.length; )
                        i[0](e, t),
                        i.splice(0, 1)
            }
        }
        function u(e, t) {
            e.call && (e = {
                success: e
            }),
            t.length ? (e.error || p)(t) : (e.success || p)(e)
        }
        function l(e, s, t) {
            for (var n = (e = e.push ? e : [e]).length, i = n, a = [], r = function(e, t, i) {
                if ("e" == t && a.push(e),
                "b" == t) {
                    if (!i)
                        return;
                    a.push(e)
                }
                --n || s(a)
            }, o = 0; o < i; o++)
                !function i(s, n, a, r) {
                    var o, l, e = document, t = a.async, c = (a.numRetries || 0) + 1, d = a.before || p, h = s.replace(/[\?|#].*$/, ""), u = s.replace(/^(css|img)!/, "");
                    r = r || 0,
                    /(^css!|\.css$)/.test(h) ? ((l = e.createElement("link")).rel = "stylesheet",
                    l.href = u,
                    (o = "hideFocus"in l) && l.relList && (o = 0,
                    l.rel = "preload",
                    l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (l = e.createElement("img")).src = u : ((l = e.createElement("script")).src = s,
                    l.async = void 0 === t || t),
                    l.onload = l.onerror = l.onbeforeload = function(e) {
                        var t = e.type[0];
                        if (o)
                            try {
                                l.sheet.cssText.length || (t = "e")
                            } catch (e) {
                                18 != e.code && (t = "e")
                            }
                        if ("e" == t) {
                            if ((r += 1) < c)
                                return i(s, n, a, r)
                        } else if ("preload" == l.rel && "style" == l.as)
                            return l.rel = "stylesheet";
                        n(s, t, e.defaultPrevented)
                    }
                    ,
                    !1 !== d(s, l) && e.head.appendChild(l)
                }(e[o], r, t)
        }
        function m(e, t, i) {
            var s, n;
            if (t && t.trim && (s = t),
            n = (s ? i : t) || {},
            s) {
                if (s in r)
                    throw "LoadJS";
                r[s] = !0
            }
            function a(t, i) {
                l(e, function(e) {
                    u(n, e),
                    t && u({
                        success: t,
                        error: i
                    }, e),
                    o(s, e)
                }, n)
            }
            if (n.returnPromise)
                return new Promise(a);
            a()
        }
        return m.ready = function(e, t) {
            var i = e
              , s = function(e) {
                u(t, e)
            };
            i = i.push ? i : [i];
            for (var n, a, r = [], o = i.length, l = o, c = function(e, t) {
                t.length && r.push(e),
                --l || s(r)
            }; o--; )
                n = i[o],
                (a = d[n]) ? c(n, a) : (h[n] = h[n] || []).push(c);
            return m
        }
        ,
        m.done = function(e) {
            o(e, [])
        }
        ,
        m.reset = function() {
            r = {},
            d = {},
            h = {}
        }
        ,
        m.isDefined = function(e) {
            return e in r
        }
        ,
        m
    }();
    function tt(i) {
        return new Promise((e,t)=>{
            et(i, {
                success: e,
                error: t
            })
        }
        )
    }
    function it(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e && (this.media.paused = !e,
        I.call(this, this.media, e ? "play" : "pause"))
    }
    const st = {
        setup() {
            const t = this;
            x(t.elements.wrapper, t.config.classNames.embed, !0),
            t.options.speed = t.config.speed.options,
            $e.call(t),
            n(window.Vimeo) ? st.ready.call(t) : tt(t.config.urls.vimeo.sdk).then(()=>{
                st.ready.call(t)
            }
            ).catch(e=>{
                t.debug.warn("Vimeo SDK (player.js) failed to load", e)
            }
            )
        },
        ready() {
            const r = this
              , e = r.config.vimeo
              , {premium: t, referrerPolicy: i, ...s} = e;
            let n = r.media.getAttribute("src")
              , a = "";
            var o = (a = E(n) ? (n = r.media.getAttribute(r.config.attributes.embed.id),
            r.media.getAttribute(r.config.attributes.embed.hash)) : (o = n.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/)) && 5 === o.length ? o[4] : null) ? {
                h: a
            } : {}
              , l = (t && Object.assign(s, {
                controls: !1,
                sidedock: !1
            }),
            Ve({
                loop: r.config.loop.active,
                autoplay: r.autoplay,
                muted: r.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative,
                ...o,
                ...s
            }))
              , c = E(c = n) ? null : !y(Number(c)) && c.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : c;
            const d = T("iframe")
              , h = ze(r.config.urls.vimeo.iframe, c, l);
            if (d.setAttribute("src", h),
            d.setAttribute("allowfullscreen", ""),
            d.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")),
            E(i) || d.setAttribute("referrerPolicy", i),
            t || !e.customControls)
                d.setAttribute("data-poster", r.poster),
                r.media = be(d, r.media);
            else {
                const e = T("div", {
                    class: r.config.classNames.embedContainer,
                    "data-poster": r.poster
                });
                e.appendChild(d),
                r.media = be(e, r.media)
            }
            e.customControls || qe(ze(r.config.urls.vimeo.api, h)).then(e=>{
                !E(e) && e.thumbnail_url && j.setPoster.call(r, e.thumbnail_url).catch(()=>{}
                )
            }
            ),
            r.embed = new window.Vimeo.Player(d,{
                autopause: r.config.autopause,
                muted: r.muted
            }),
            r.media.paused = !0,
            r.media.currentTime = 0,
            r.supported.ui && r.embed.disableTextTrack(),
            r.media.play = ()=>(it.call(r, !0),
            r.embed.play()),
            r.media.pause = ()=>(it.call(r, !1),
            r.embed.pause()),
            r.media.stop = ()=>{
                r.pause(),
                r.currentTime = 0
            }
            ;
            let u = r.media["currentTime"]
              , p = (Object.defineProperty(r.media, "currentTime", {
                get: ()=>u,
                set(e) {
                    const {embed: t, media: i, paused: s, volume: n} = r
                      , a = s && !t.hasPlayed;
                    i.seeking = !0,
                    I.call(r, i, "seeking"),
                    Promise.resolve(a && t.setVolume(0)).then(()=>t.setCurrentTime(e)).then(()=>a && t.pause()).then(()=>a && t.setVolume(n)).catch(()=>{}
                    )
                }
            }),
            r.config.speed.selected)
              , m = (Object.defineProperty(r.media, "playbackRate", {
                get: ()=>p,
                set(e) {
                    r.embed.setPlaybackRate(e).then(()=>{
                        p = e,
                        I.call(r, r.media, "ratechange")
                    }
                    ).catch(()=>{
                        r.options.speed = [1]
                    }
                    )
                }
            }),
            r.config)["volume"]
              , f = (Object.defineProperty(r.media, "volume", {
                get: ()=>m,
                set(e) {
                    r.embed.setVolume(e).then(()=>{
                        m = e,
                        I.call(r, r.media, "volumechange")
                    }
                    )
                }
            }),
            r.config)["muted"];
            Object.defineProperty(r.media, "muted", {
                get: ()=>f,
                set(e) {
                    const t = !!b(e) && e;
                    r.embed.setVolume(t ? 0 : r.config.volume).then(()=>{
                        f = t,
                        I.call(r, r.media, "volumechange")
                    }
                    )
                }
            });
            let g, v = r.config["loop"];
            Object.defineProperty(r.media, "loop", {
                get: ()=>v,
                set(e) {
                    const t = b(e) ? e : r.config.loop.active;
                    r.embed.setLoop(t).then(()=>{
                        v = t
                    }
                    )
                }
            }),
            r.embed.getVideoUrl().then(e=>{
                g = e,
                O.setDownloadUrl.call(r)
            }
            ).catch(e=>{
                this.debug.warn(e)
            }
            ),
            Object.defineProperty(r.media, "currentSrc", {
                get: ()=>g
            }),
            Object.defineProperty(r.media, "ended", {
                get: ()=>r.currentTime === r.duration
            }),
            Promise.all([r.embed.getVideoWidth(), r.embed.getVideoHeight()]).then(e=>{
                var [e,t] = e;
                r.embed.ratio = Oe(e, t),
                $e.call(this)
            }
            ),
            r.embed.setAutopause(r.config.autopause).then(e=>{
                r.config.autopause = e
            }
            ),
            r.embed.getVideoTitle().then(e=>{
                r.config.title = e,
                j.setTitle.call(this)
            }
            ),
            r.embed.getCurrentTime().then(e=>{
                u = e,
                I.call(r, r.media, "timeupdate")
            }
            ),
            r.embed.getDuration().then(e=>{
                r.media.duration = e,
                I.call(r, r.media, "durationchange")
            }
            ),
            r.embed.getTextTracks().then(e=>{
                r.media.textTracks = e,
                z.setup.call(r)
            }
            ),
            r.embed.on("cuechange", ({cues: e=[]})=>{
                e = e.map(e=>{
                    {
                        e = e.text;
                        const t = document.createDocumentFragment()
                          , i = document.createElement("div");
                        return t.appendChild(i),
                        i.innerHTML = e,
                        t.firstChild.innerText
                    }
                }
                );
                z.updateCues.call(r, e)
            }
            ),
            r.embed.on("loaded", ()=>{
                r.embed.getPaused().then(e=>{
                    it.call(r, !e),
                    e || I.call(r, r.media, "playing")
                }
                ),
                w(r.embed.element) && r.supported.ui && r.embed.element.setAttribute("tabindex", -1)
            }
            ),
            r.embed.on("bufferstart", ()=>{
                I.call(r, r.media, "waiting")
            }
            ),
            r.embed.on("bufferend", ()=>{
                I.call(r, r.media, "playing")
            }
            ),
            r.embed.on("play", ()=>{
                it.call(r, !0),
                I.call(r, r.media, "playing")
            }
            ),
            r.embed.on("pause", ()=>{
                it.call(r, !1)
            }
            ),
            r.embed.on("timeupdate", e=>{
                r.media.seeking = !1,
                u = e.seconds,
                I.call(r, r.media, "timeupdate")
            }
            ),
            r.embed.on("progress", e=>{
                r.media.buffered = e.percent,
                I.call(r, r.media, "progress"),
                1 === parseInt(e.percent, 10) && I.call(r, r.media, "canplaythrough"),
                r.embed.getDuration().then(e=>{
                    e !== r.media.duration && (r.media.duration = e,
                    I.call(r, r.media, "durationchange"))
                }
                )
            }
            ),
            r.embed.on("seeked", ()=>{
                r.media.seeking = !1,
                I.call(r, r.media, "seeked")
            }
            ),
            r.embed.on("ended", ()=>{
                r.media.paused = !0,
                I.call(r, r.media, "ended")
            }
            ),
            r.embed.on("error", e=>{
                r.media.error = e,
                I.call(r, r.media, "error")
            }
            ),
            e.customControls && setTimeout(()=>j.build.call(r), 0)
        }
    };
    function nt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e && (this.media.paused = !e,
        I.call(this, this.media, e ? "play" : "pause"))
    }
    const at = {
        setup() {
            if (x(this.elements.wrapper, this.config.classNames.embed, !0),
            n(window.YT) && c(window.YT.Player))
                at.ready.call(this);
            else {
                const e = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = ()=>{
                    c(e) && e(),
                    at.ready.call(this)
                }
                ,
                tt(this.config.urls.youtube.sdk).catch(e=>{
                    this.debug.warn("YouTube API failed to load", e)
                }
                )
            }
        },
        getTitle(e) {
            qe(ze(this.config.urls.youtube.api, e)).then(e=>{
                var t, i;
                n(e) && ({title: e, height: t, width: i} = e,
                this.config.title = e,
                j.setTitle.call(this),
                this.embed.ratio = Oe(i, t)),
                $e.call(this)
            }
            ).catch(()=>{
                $e.call(this)
            }
            )
        },
        ready() {
            const a = this
              , r = a.config.youtube
              , e = a.media && a.media.getAttribute("id");
            if (E(e) || !e.startsWith("youtube-")) {
                let e = a.media.getAttribute("src");
                E(e) && (e = a.media.getAttribute(this.config.attributes.embed.id));
                const o = E(t = e) ? null : t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : t;
                var t = T("div", {
                    id: a.provider + "-" + Math.floor(1e4 * Math.random()),
                    "data-poster": r.customControls ? a.poster : void 0
                });
                if (a.media = be(t, a.media),
                r.customControls) {
                    const r = e=>`https://i.ytimg.com/vi/${o}/${e}default.jpg`;
                    Ke(r("maxres"), 121).catch(()=>Ke(r("sd"), 121)).catch(()=>Ke(r("hq"))).then(e=>j.setPoster.call(a, e.src)).then(e=>{
                        e.includes("maxres") || (a.elements.poster.style.backgroundSize = "cover")
                    }
                    ).catch(()=>{}
                    )
                }
                a.embed = new window.YT.Player(a.media,{
                    videoId: o,
                    host: r.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0,
                    playerVars: m({}, {
                        autoplay: a.config.autoplay ? 1 : 0,
                        hl: a.config.hl,
                        controls: a.supported.ui && r.customControls ? 0 : 1,
                        disablekb: 1,
                        playsinline: a.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: a.captions.active ? 1 : 0,
                        cc_lang_pref: a.config.captions.language,
                        widget_referrer: window ? window.location.href : null
                    }, r),
                    events: {
                        onError(e) {
                            var t;
                            a.media.error || (t = {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players."
                            }[e = e.data] || "An unknown error occured",
                            a.media.error = {
                                code: e,
                                message: t
                            },
                            I.call(a, a.media, "error"))
                        },
                        onPlaybackRateChange(e) {
                            const t = e.target;
                            a.media.playbackRate = t.getPlaybackRate(),
                            I.call(a, a.media, "ratechange")
                        },
                        onReady(e) {
                            if (!c(a.media.play)) {
                                const s = e.target;
                                at.getTitle.call(a, o),
                                a.media.play = ()=>{
                                    nt.call(a, !0),
                                    s.playVideo()
                                }
                                ,
                                a.media.pause = ()=>{
                                    nt.call(a, !1),
                                    s.pauseVideo()
                                }
                                ,
                                a.media.stop = ()=>{
                                    s.stopVideo()
                                }
                                ,
                                a.media.duration = s.getDuration(),
                                a.media.paused = !0,
                                a.media.currentTime = 0,
                                Object.defineProperty(a.media, "currentTime", {
                                    get: ()=>Number(s.getCurrentTime()),
                                    set(e) {
                                        a.paused && !a.embed.hasPlayed && a.embed.mute(),
                                        a.media.seeking = !0,
                                        I.call(a, a.media, "seeking"),
                                        s.seekTo(e)
                                    }
                                }),
                                Object.defineProperty(a.media, "playbackRate", {
                                    get: ()=>s.getPlaybackRate(),
                                    set(e) {
                                        s.setPlaybackRate(e)
                                    }
                                });
                                let t = a.config["volume"]
                                  , i = (Object.defineProperty(a.media, "volume", {
                                    get: ()=>t,
                                    set(e) {
                                        t = e,
                                        s.setVolume(100 * t),
                                        I.call(a, a.media, "volumechange")
                                    }
                                }),
                                a.config)["muted"];
                                Object.defineProperty(a.media, "muted", {
                                    get: ()=>i,
                                    set(e) {
                                        e = b(e) ? e : i;
                                        i = e,
                                        s[e ? "mute" : "unMute"](),
                                        s.setVolume(100 * t),
                                        I.call(a, a.media, "volumechange")
                                    }
                                }),
                                Object.defineProperty(a.media, "currentSrc", {
                                    get: ()=>s.getVideoUrl()
                                }),
                                Object.defineProperty(a.media, "ended", {
                                    get: ()=>a.currentTime === a.duration
                                });
                                const n = s.getAvailablePlaybackRates();
                                a.options.speed = n.filter(e=>a.config.speed.options.includes(e)),
                                a.supported.ui && r.customControls && a.media.setAttribute("tabindex", -1),
                                I.call(a, a.media, "timeupdate"),
                                I.call(a, a.media, "durationchange"),
                                clearInterval(a.timers.buffering),
                                a.timers.buffering = setInterval(()=>{
                                    a.media.buffered = s.getVideoLoadedFraction(),
                                    (null === a.media.lastBuffered || a.media.lastBuffered < a.media.buffered) && I.call(a, a.media, "progress"),
                                    a.media.lastBuffered = a.media.buffered,
                                    1 === a.media.buffered && (clearInterval(a.timers.buffering),
                                    I.call(a, a.media, "canplaythrough"))
                                }
                                , 200),
                                r.customControls && setTimeout(()=>j.build.call(a), 50)
                            }
                        },
                        onStateChange(e) {
                            const t = e.target;
                            switch (clearInterval(a.timers.playing),
                            a.media.seeking && [1, 2].includes(e.data) && (a.media.seeking = !1,
                            I.call(a, a.media, "seeked")),
                            e.data) {
                            case -1:
                                I.call(a, a.media, "timeupdate"),
                                a.media.buffered = t.getVideoLoadedFraction(),
                                I.call(a, a.media, "progress");
                                break;
                            case 0:
                                nt.call(a, !1),
                                a.media.loop ? (t.stopVideo(),
                                t.playVideo()) : I.call(a, a.media, "ended");
                                break;
                            case 1:
                                r.customControls && !a.config.autoplay && a.media.paused && !a.embed.hasPlayed ? a.media.pause() : (nt.call(a, !0),
                                I.call(a, a.media, "playing"),
                                a.timers.playing = setInterval(()=>{
                                    I.call(a, a.media, "timeupdate")
                                }
                                , 50),
                                a.media.duration !== t.getDuration() && (a.media.duration = t.getDuration(),
                                I.call(a, a.media, "durationchange")));
                                break;
                            case 2:
                                a.muted || a.embed.unMute(),
                                nt.call(a, !1);
                                break;
                            case 3:
                                I.call(a, a.media, "waiting")
                            }
                            I.call(a, a.elements.container, "statechange", !1, {
                                code: e.data
                            })
                        }
                    }
                })
            }
        }
    }
      , rt = {
        setup() {
            this.media ? (x(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0),
            x(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0),
            this.isEmbed && x(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0),
            this.isVideo && (this.elements.wrapper = T("div", {
                class: this.config.classNames.video
            }),
            fe(this.media, this.elements.wrapper),
            this.elements.poster = T("div", {
                class: this.config.classNames.poster
            }),
            this.elements.wrapper.appendChild(this.elements.poster)),
            this.isHTML5 ? P.setup.call(this) : this.isYouTube ? at.setup.call(this) : this.isVimeo && st.setup.call(this)) : this.debug.warn("No media element found!")
        }
    };
    class ot {
        constructor(e) {
            a(this, "load", ()=>{
                this.enabled && (n(window.google) && n(window.google.ima) ? this.ready() : tt(this.player.config.urls.googleIMA.sdk).then(()=>{
                    this.ready()
                }
                ).catch(()=>{
                    this.trigger("error", new Error("Google IMA SDK failed to load"))
                }
                ))
            }
            ),
            a(this, "ready", ()=>{
                this.enabled || (this.manager && this.manager.destroy(),
                this.elements.displayContainer && this.elements.displayContainer.destroy(),
                this.elements.container.remove()),
                this.startSafetyTimer(12e3, "ready()"),
                this.managerPromise.then(()=>{
                    this.clearSafetyTimer("onAdsManagerLoaded()")
                }
                ),
                this.listeners(),
                this.setupIMA()
            }
            ),
            a(this, "setupIMA", ()=>{
                this.elements.container = T("div", {
                    class: this.player.config.classNames.ads
                }),
                this.player.elements.container.appendChild(this.elements.container),
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                google.ima.settings.setLocale(this.player.config.ads.language),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),
                this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container,this.player.media),
                this.loader = new google.ima.AdsLoader(this.elements.displayContainer),
                this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e=>this.onAdsManagerLoaded(e), !1),
                this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e=>this.onAdError(e), !1),
                this.requestAds()
            }
            ),
            a(this, "requestAds", ()=>{
                var e = this.player.elements["container"];
                try {
                    const t = new google.ima.AdsRequest;
                    t.adTagUrl = this.tagUrl,
                    t.linearAdSlotWidth = e.offsetWidth,
                    t.linearAdSlotHeight = e.offsetHeight,
                    t.nonLinearAdSlotWidth = e.offsetWidth,
                    t.nonLinearAdSlotHeight = e.offsetHeight,
                    t.forceNonLinearFullSlot = !1,
                    t.setAdWillPlayMuted(!this.player.muted),
                    this.loader.requestAds(t)
                } catch (e) {
                    this.onAdError(e)
                }
            }
            ),
            a(this, "pollCountdown", (e=!1)=>{
                if (!e)
                    return clearInterval(this.countdownTimer),
                    void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval(()=>{
                    var e = Fe(Math.max(this.manager.getRemainingTime(), 0))
                      , e = $.get("advertisement", this.player.config) + " - " + e;
                    this.elements.container.setAttribute("data-badge-text", e)
                }
                , 100)
            }
            ),
            a(this, "onAdsManagerLoaded", e=>{
                if (this.enabled) {
                    const t = new google.ima.AdsRenderingSettings;
                    t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                    t.enablePreloading = !0,
                    this.manager = e.getAdsManager(this.player, t),
                    this.cuePoints = this.manager.getCuePoints(),
                    this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e=>this.onAdError(e)),
                    Object.keys(google.ima.AdEvent.Type).forEach(e=>{
                        this.manager.addEventListener(google.ima.AdEvent.Type[e], e=>this.onAdEvent(e))
                    }
                    ),
                    this.trigger("loaded")
                }
            }
            ),
            a(this, "addCuePoints", ()=>{
                E(this.cuePoints) || this.cuePoints.forEach(e=>{
                    if (0 !== e && -1 !== e && e < this.player.duration) {
                        const t = this.player.elements.progress;
                        if (w(t)) {
                            const i = 100 / this.player.duration * e
                              , s = T("span", {
                                class: this.player.config.classNames.cues
                            });
                            s.style.left = i.toString() + "%",
                            t.appendChild(s)
                        }
                    }
                }
                )
            }
            ),
            a(this, "onAdEvent", e=>{
                const t = this.player.elements["container"]
                  , i = e.getAd()
                  , s = e.getAdData();
                switch (n = e.type,
                I.call(this.player, this.player.media, "ads" + n.replace(/_/g, "").toLowerCase()),
                e.type) {
                case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                    this.pollCountdown(!0),
                    i.isLinear() || (i.width = t.offsetWidth,
                    i.height = t.offsetHeight);
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.manager.setVolume(this.player.volume);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                    break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    this.pauseContent();
                    break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    this.pollCountdown(),
                    this.resumeContent();
                    break;
                case google.ima.AdEvent.Type.LOG:
                    s.adError && this.player.debug.warn("Non-fatal ad error: " + s.adError.getMessage())
                }
                var n
            }
            ),
            a(this, "onAdError", e=>{
                this.cancel(),
                this.player.debug.warn("Ads error", e)
            }
            ),
            a(this, "listeners", ()=>{
                const e = this.player.elements["container"];
                let s;
                this.player.on("canplay", ()=>{
                    this.addCuePoints()
                }
                ),
                this.player.on("ended", ()=>{
                    this.loader.contentComplete()
                }
                ),
                this.player.on("timeupdate", ()=>{
                    s = this.player.currentTime
                }
                ),
                this.player.on("seeked", ()=>{
                    const i = this.player.currentTime;
                    E(this.cuePoints) || this.cuePoints.forEach((e,t)=>{
                        s < e && e < i && (this.manager.discardAdBreak(),
                        this.cuePoints.splice(t, 1))
                    }
                    )
                }
                ),
                window.addEventListener("resize", ()=>{
                    this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                }
                )
            }
            ),
            a(this, "play", ()=>{
                const e = this.player.elements["container"];
                this.managerPromise || this.resumeContent(),
                this.managerPromise.then(()=>{
                    this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                    try {
                        this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL),
                        this.manager.start()),
                        this.initialized = !0
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
                ).catch(()=>{}
                )
            }
            ),
            a(this, "resumeContent", ()=>{
                this.elements.container.style.zIndex = "",
                this.playing = !1,
                L(this.player.media.play())
            }
            ),
            a(this, "pauseContent", ()=>{
                this.elements.container.style.zIndex = 3,
                this.playing = !0,
                this.player.media.pause()
            }
            ),
            a(this, "cancel", ()=>{
                this.initialized && this.resumeContent(),
                this.trigger("error"),
                this.loadAds()
            }
            ),
            a(this, "loadAds", ()=>{
                this.managerPromise.then(()=>{
                    this.manager && this.manager.destroy(),
                    this.managerPromise = new Promise(e=>{
                        this.on("loaded", e),
                        this.player.debug.log(this.manager)
                    }
                    ),
                    this.initialized = !1,
                    this.requestAds()
                }
                ).catch(()=>{}
                )
            }
            ),
            a(this, "trigger", (e,...t)=>{
                const i = this.events[e];
                u(i) && i.forEach(e=>{
                    c(e) && e.apply(this, t)
                }
                )
            }
            ),
            a(this, "on", (e,t)=>(u(this.events[e]) || (this.events[e] = []),
            this.events[e].push(t),
            this)),
            a(this, "startSafetyTimer", (e,t)=>{
                this.player.debug.log("Safety timer invoked from: " + t),
                this.safetyTimer = setTimeout(()=>{
                    this.cancel(),
                    this.clearSafetyTimer("startSafetyTimer()")
                }
                , e)
            }
            ),
            a(this, "clearSafetyTimer", e=>{
                o(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e),
                clearTimeout(this.safetyTimer),
                this.safetyTimer = null)
            }
            ),
            this.player = e,
            this.config = e.config.ads,
            this.playing = !1,
            this.initialized = !1,
            this.elements = {
                container: null,
                displayContainer: null
            },
            this.manager = null,
            this.loader = null,
            this.cuePoints = null,
            this.events = {},
            this.safetyTimer = null,
            this.countdownTimer = null,
            this.managerPromise = new Promise((e,t)=>{
                this.on("loaded", e),
                this.on("error", t)
            }
            ),
            this.load()
        }
        get enabled() {
            var e = this["config"];
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!E(e.publisherId) || he(e.tagUrl))
        }
        get tagUrl() {
            var e = this["config"];
            return he(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + Ve({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId
            })
        }
    }
    function lt(e=0, t=0, i=255) {
        return Math.min(Math.max(e, t), i)
    }
    const ct = (e,t)=>{
        const i = {};
        return e > t.width / t.height ? (i.width = t.width,
        i.height = 1 / e * t.width) : (i.height = t.height,
        i.width = e * t.height),
        i
    }
    ;
    class dt {
        constructor(e) {
            a(this, "load", ()=>{
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled),
                this.enabled && this.getThumbnails().then(()=>{
                    this.enabled && (this.render(),
                    this.determineContainerAutoSizing(),
                    this.loaded = !0)
                }
                )
            }
            ),
            a(this, "getThumbnails", ()=>new Promise(e=>{
                const t = this.player.config.previewThumbnails["src"];
                if (E(t))
                    throw new Error("Missing previewThumbnails.src config attribute");
                const i = ()=>{
                    this.thumbnails.sort((e,t)=>e.height - t.height),
                    this.player.debug.log("Preview thumbnails", this.thumbnails),
                    e()
                }
                ;
                if (c(t))
                    t(e=>{
                        this.thumbnails = e,
                        i()
                    }
                    );
                else {
                    const e = (l(t) ? [t] : t).map(e=>this.getThumbnail(e));
                    Promise.all(e).then(i)
                }
            }
            )),
            a(this, "getThumbnail", n=>new Promise(s=>{
                qe(n).then(e=>{
                    const t = {
                        frames: (e=>{
                            const t = [];
                            return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e=>{
                                const i = {};
                                e.split(/\r\n|\n|\r/).forEach(e=>{
                                    if (y(i.startTime)) {
                                        if (!E(e.trim()) && E(i.text)) {
                                            const t = e.trim().split("#xywh=");
                                            [i.text] = t,
                                            t[1] && ([i.x,i.y,i.w,i.h] = t[1].split(","))
                                        }
                                    } else {
                                        e = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                        e && (i.startTime = 60 * Number(e[1] || 0) * 60 + 60 * Number(e[2]) + Number(e[3]) + Number("0." + e[4]),
                                        i.endTime = 60 * Number(e[6] || 0) * 60 + 60 * Number(e[7]) + Number(e[8]) + Number("0." + e[9]))
                                    }
                                }
                                ),
                                i.text && t.push(i)
                            }
                            ),
                            t
                        }
                        )(e),
                        height: null,
                        urlPrefix: ""
                    }
                      , i = (t.frames[0].text.startsWith("/") || t.frames[0].text.startsWith("http://") || t.frames[0].text.startsWith("https://") || (t.urlPrefix = n.substring(0, n.lastIndexOf("/") + 1)),
                    new Image);
                    i.onload = ()=>{
                        t.height = i.naturalHeight,
                        t.width = i.naturalWidth,
                        this.thumbnails.push(t),
                        s()
                    }
                    ,
                    i.src = t.urlPrefix + t.frames[0].text
                }
                )
            }
            )),
            a(this, "startMove", e=>{
                var t;
                this.loaded && d(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration && ("touchmove" === e.type ? this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100) : (t = 100 / (t = this.player.elements.progress.getBoundingClientRect()).width * (e.pageX - t.left),
                this.seekTime = this.player.media.duration * (t / 100),
                this.seekTime < 0 && (this.seekTime = 0),
                this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1),
                this.mousePosX = e.pageX,
                this.elements.thumb.time.innerText = Fe(this.seekTime),
                (t = null == (t = this.player.config.markers) || null == (e = t.points) ? void 0 : e.find(({time: e})=>e === Math.round(this.seekTime))) && this.elements.thumb.time.insertAdjacentHTML("afterbegin", t.label + "<br>")),
                this.showImageAtCurrentTime())
            }
            ),
            a(this, "endMove", ()=>{
                this.toggleThumbContainer(!1, !0)
            }
            ),
            a(this, "startScrubbing", e=>{
                !o(e.button) && !1 !== e.button && 0 !== e.button || (this.mouseDown = !0,
                this.player.media.duration && (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()))
            }
            ),
            a(this, "endScrubbing", ()=>{
                this.mouseDown = !1,
                Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Se.call(this.player, this.player.media, "timeupdate", ()=>{
                    this.mouseDown || this.toggleScrubbingContainer(!1)
                }
                )
            }
            ),
            a(this, "listeners", ()=>{
                this.player.on("play", ()=>{
                    this.toggleThumbContainer(!1, !0)
                }
                ),
                this.player.on("seeked", ()=>{
                    this.toggleThumbContainer(!1)
                }
                ),
                this.player.on("timeupdate", ()=>{
                    this.lastTime = this.player.media.currentTime
                }
                )
            }
            ),
            a(this, "render", ()=>{
                this.elements.thumb.container = T("div", {
                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                }),
                this.elements.thumb.imageContainer = T("div", {
                    class: this.player.config.classNames.previewThumbnails.imageContainer
                }),
                this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                const e = T("div", {
                    class: this.player.config.classNames.previewThumbnails.timeContainer
                });
                this.elements.thumb.time = T("span", {}, "00:00"),
                e.appendChild(this.elements.thumb.time),
                this.elements.thumb.imageContainer.appendChild(e),
                w(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container),
                this.elements.scrubbing.container = T("div", {
                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                }),
                this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
            }
            ),
            a(this, "destroy", ()=>{
                this.elements.thumb.container && this.elements.thumb.container.remove(),
                this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
            }
            ),
            a(this, "showImageAtCurrentTime", ()=>{
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                const i = this.thumbnails[0].frames.findIndex(e=>this.seekTime >= e.startTime && this.seekTime <= e.endTime)
                  , e = 0 <= i;
                let s = 0;
                this.mouseDown || this.toggleThumbContainer(e),
                e && (this.thumbnails.forEach((e,t)=>{
                    this.loadedImages.includes(e.frames[i].text) && (s = t)
                }
                ),
                i !== this.showingThumb && (this.showingThumb = i,
                this.loadImage(s)))
            }
            ),
            a(this, "loadImage", (e=0)=>{
                const t = this.showingThumb
                  , i = this.thumbnails[e]
                  , s = i["urlPrefix"]
                  , n = i.frames[t]
                  , a = i.frames[t].text
                  , r = s + a;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === a)
                    this.showImage(this.currentImageElement, n, e, t, a, !1),
                    this.currentImageElement.dataset.index = t,
                    this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    const i = new Image;
                    i.src = r,
                    i.dataset.index = t,
                    i.dataset.filename = a,
                    this.showingThumbFilename = a,
                    this.player.debug.log("Loading image: " + r),
                    i.onload = ()=>this.showImage(i, n, e, t, a, !0),
                    this.loadingImage = i,
                    this.removeOldImages(i)
                }
            }
            ),
            a(this, "showImage", (e,t,i,s,n,a=!0)=>{
                this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ` + a),
                this.setImageSizeAndOffset(e, t),
                a && (this.currentImageContainer.appendChild(e),
                this.currentImageElement = e,
                this.loadedImages.includes(n) || this.loadedImages.push(n)),
                this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
            }
            ),
            a(this, "removeOldImages", i=>{
                Array.from(this.currentImageContainer.children).forEach(e=>{
                    if ("img" === e.tagName.toLowerCase()) {
                        var t = this.usingSprites ? 500 : 1e3;
                        if (e.dataset.index !== i.dataset.index && !e.dataset.deleting) {
                            e.dataset.deleting = !0;
                            const i = this["currentImageContainer"];
                            setTimeout(()=>{
                                i.removeChild(e),
                                this.player.debug.log("Removing thumb: " + e.dataset.filename)
                            }
                            , t)
                        }
                    }
                }
                )
            }
            ),
            a(this, "preloadNearby", (t,i=!0)=>new Promise(a=>{
                setTimeout(()=>{
                    const n = this.thumbnails[0].frames[t].text;
                    if (this.showingThumbFilename === n) {
                        let e, s = (e = i ? this.thumbnails[0].frames.slice(t) : this.thumbnails[0].frames.slice(0, t).reverse(),
                        !1);
                        e.forEach(e=>{
                            const t = e.text;
                            if (t !== n && !this.loadedImages.includes(t)) {
                                s = !0,
                                this.player.debug.log("Preloading thumb filename: " + t);
                                const e = this.thumbnails[0]["urlPrefix"]
                                  , n = e + t
                                  , i = new Image;
                                i.src = n,
                                i.onload = ()=>{
                                    this.player.debug.log("Preloaded thumb filename: " + t),
                                    this.loadedImages.includes(t) || this.loadedImages.push(t),
                                    a()
                                }
                            }
                        }
                        ),
                        s || a()
                    }
                }
                , 300)
            }
            )),
            a(this, "getHigherQuality", (t,i,s,n)=>{
                if (t < this.thumbnails.length - 1) {
                    let e = i.naturalHeight;
                    (e = this.usingSprites ? s.h : e) < this.thumbContainerHeight && setTimeout(()=>{
                        this.showingThumbFilename === n && (this.player.debug.log("Showing higher quality thumb for: " + n),
                        this.loadImage(t + 1))
                    }
                    , 300)
                }
            }
            ),
            a(this, "toggleThumbContainer", (e=!1,t=!1)=>{
                var i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e),
                !e && t && (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
            ),
            a(this, "toggleScrubbingContainer", (e=!1)=>{
                var t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                e || (this.showingThumb = null,
                this.showingThumbFilename = null)
            }
            ),
            a(this, "determineContainerAutoSizing", ()=>{
                (20 < this.elements.thumb.imageContainer.clientHeight || 20 < this.elements.thumb.imageContainer.clientWidth) && (this.sizeSpecifiedInCSS = !0)
            }
            ),
            a(this, "setThumbContainerSizeAndPos", ()=>{
                const e = this.elements.thumb["imageContainer"];
                var t;
                this.sizeSpecifiedInCSS ? 20 < e.clientHeight && e.clientWidth < 20 ? (t = Math.floor(e.clientHeight * this.thumbAspectRatio),
                e.style.width = t + "px") : e.clientHeight < 20 && 20 < e.clientWidth && (t = Math.floor(e.clientWidth / this.thumbAspectRatio),
                e.style.height = t + "px") : (t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio),
                e.style.height = this.thumbContainerHeight + "px",
                e.style.width = t + "px"),
                this.setThumbContainerPos()
            }
            ),
            a(this, "setThumbContainerPos", ()=>{
                const e = this.player.elements.progress.getBoundingClientRect()
                  , t = this.player.elements.container.getBoundingClientRect()
                  , i = this.elements.thumb["container"]
                  , s = t.left - e.left + 10
                  , n = t.right - e.left - i.clientWidth - 10
                  , a = this.mousePosX - e.left - i.clientWidth / 2
                  , r = lt(a, s, n);
                i.style.left = r + "px",
                i.style.setProperty("--preview-arrow-offset", a - r + "px")
            }
            ),
            a(this, "setScrubbingContainerSize", ()=>{
                var {width: e, height: t} = ct(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                this.elements.scrubbing.container.style.width = e + "px",
                this.elements.scrubbing.container.style.height = t + "px"
            }
            ),
            a(this, "setImageSizeAndOffset", (e,t)=>{
                var i;
                this.usingSprites && (i = this.thumbContainerHeight / t.h,
                e.style.height = e.naturalHeight * i + "px",
                e.style.width = e.naturalWidth * i + "px",
                e.style.left = `-${t.x * i}px`,
                e.style.top = `-${t.y * i}px`)
            }
            ),
            this.player = e,
            this.thumbnails = [],
            this.loaded = !1,
            this.lastMouseMoveTime = Date.now(),
            this.mouseDown = !1,
            this.loadedImages = [],
            this.elements = {
                thumb: {},
                scrubbing: {}
            },
            this.load()
        }
        get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
        }
        get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
        }
        get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
        }
        get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
        }
        get thumbContainerHeight() {
            var e;
            return this.mouseDown ? (e = ct(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
            })["height"],
            e) : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
        }
        get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
        }
        set currentImageElement(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
        }
    }
    const ht = {
        insertElements(t, e) {
            l(e) ? ve(t, this.media, {
                src: e
            }) : u(e) && e.forEach(e=>{
                ve(t, this.media, e)
            }
            )
        },
        change(a) {
            me(a, "sources.length") ? (P.cancelRequests.call(this),
            this.destroy.call(this, ()=>{
                this.options.quality = [],
                f(this.media),
                this.media = null,
                w(this.elements.container) && this.elements.container.removeAttribute("class");
                var {sources: e, type: t} = a
                  , [{provider: i=N.html5, src: s}] = e
                  , n = "html5" === i ? t : "div"
                  , s = "html5" === i ? {} : {
                    src: s
                };
                Object.assign(this, {
                    provider: i,
                    type: t,
                    supported: k.check(t, i, this.config.playsinline),
                    media: T(n, s)
                }),
                this.elements.container.appendChild(this.media),
                b(a.autoplay) && (this.config.autoplay = a.autoplay),
                this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""),
                this.config.autoplay && this.media.setAttribute("autoplay", ""),
                E(a.poster) || (this.poster = a.poster),
                this.config.loop.active && this.media.setAttribute("loop", ""),
                this.config.muted && this.media.setAttribute("muted", ""),
                this.config.playsinline && this.media.setAttribute("playsinline", "")),
                j.addStyleHook.call(this),
                this.isHTML5 && ht.insertElements.call(this, "source", e),
                this.config.title = a.title,
                rt.setup.call(this),
                this.isHTML5 && Object.keys(a).includes("tracks") && ht.insertElements.call(this, "track", a.tracks),
                (this.isHTML5 || this.isEmbed && !this.supported.ui) && j.build.call(this),
                this.isHTML5 && this.media.load(),
                E(a.previewThumbnails) || (Object.assign(this.config.previewThumbnails, a.previewThumbnails),
                this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(),
                this.previewThumbnails = null),
                this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))),
                this.fullscreen.update()
            }
            , !0)) : this.debug.warn("Invalid source format")
        }
    };
    class ut {
        constructor(e, t) {
            if (a(this, "play", ()=>c(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>L(this.media.play())),
            this.media.play()) : null),
            a(this, "pause", ()=>this.playing && c(this.media.pause) ? this.media.pause() : null),
            a(this, "togglePlay", e=>(b(e) ? e : !this.playing) ? this.play() : this.pause()),
            a(this, "stop", ()=>{
                this.isHTML5 ? (this.pause(),
                this.restart()) : c(this.media.stop) && this.media.stop()
            }
            ),
            a(this, "restart", ()=>{
                this.currentTime = 0
            }
            ),
            a(this, "rewind", e=>{
                this.currentTime -= y(e) ? e : this.config.seekTime
            }
            ),
            a(this, "forward", e=>{
                this.currentTime += y(e) ? e : this.config.seekTime
            }
            ),
            a(this, "increaseVolume", e=>{
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (y(e) ? e : 0)
            }
            ),
            a(this, "decreaseVolume", e=>{
                this.increaseVolume(-e)
            }
            ),
            a(this, "airplay", ()=>{
                k.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
            ),
            a(this, "toggleControls", e=>{
                if (!this.supported.ui || this.isAudio)
                    return !1;
                var t = we(this.elements.container, this.config.classNames.hideControls)
                  , i = x(this.elements.container, this.config.classNames.hideControls, void 0 === e ? void 0 : !e);
                if (i && u(this.config.controls) && this.config.controls.includes("settings") && !E(this.config.settings) && O.toggleMenu.call(this, !1),
                i !== t) {
                    const e = i ? "controlshidden" : "controlsshown";
                    I.call(this, this.media, e)
                }
                return !i
            }
            ),
            a(this, "on", (e,t)=>{
                M.call(this, this.elements.container, e, t)
            }
            ),
            a(this, "once", (e,t)=>{
                Se.call(this, this.elements.container, e, t)
            }
            ),
            a(this, "off", (e,t)=>{
                _e(this.elements.container, e, t)
            }
            ),
            a(this, "destroy", (e,t=!1)=>{
                var i;
                this.ready && (i = ()=>{
                    document.body.style.overflow = "",
                    this.embed = null,
                    t ? (Object.keys(this.elements).length && (f(this.elements.buttons.play),
                    f(this.elements.captions),
                    f(this.elements.controls),
                    f(this.elements.wrapper),
                    this.elements.buttons.play = null,
                    this.elements.captions = null,
                    this.elements.controls = null,
                    this.elements.wrapper = null),
                    c(e) && e()) : (function() {
                        this && this.eventListeners && (this.eventListeners.forEach(e=>{
                            const {element: t, type: i, callback: s, options: n} = e;
                            t.removeEventListener(i, s, n)
                        }
                        ),
                        this.eventListeners = [])
                    }
                    .call(this),
                    P.cancelRequests.call(this),
                    be(this.elements.original, this.elements.container),
                    I.call(this, this.elements.original, "destroyed", !0),
                    c(e) && e.call(this.elements.original),
                    this.ready = !1,
                    setTimeout(()=>{
                        this.elements = null,
                        this.media = null
                    }
                    , 200))
                }
                ,
                this.stop(),
                clearTimeout(this.timers.loading),
                clearTimeout(this.timers.controls),
                clearTimeout(this.timers.resized),
                this.isHTML5 ? (j.toggleNativeControls.call(this, !0),
                i()) : this.isYouTube ? (clearInterval(this.timers.buffering),
                clearInterval(this.timers.playing),
                null !== this.embed && c(this.embed.destroy) && this.embed.destroy(),
                i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i),
                setTimeout(i, 200)))
            }
            ),
            a(this, "supports", e=>k.mime.call(this, e)),
            this.timers = {},
            this.ready = !1,
            this.loading = !1,
            this.failed = !1,
            this.touch = k.touch,
            this.media = e,
            l(this.media) && (this.media = document.querySelectorAll(this.media)),
            (window.jQuery && this.media instanceof jQuery || ce(this.media) || u(this.media)) && (this.media = this.media[0]),
            this.config = m({}, Xe, ut.defaults, t || {}, (()=>{
                try {
                    return JSON.parse(this.media.getAttribute("data-plyr-config"))
                } catch (e) {
                    return {}
                }
            }
            )()),
            this.elements = {
                container: null,
                fullscreen: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                    popup: null,
                    menu: null,
                    panels: {},
                    buttons: {}
                }
            },
            this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            },
            this.fullscreen = {
                active: !1
            },
            this.options = {
                speed: [],
                quality: []
            },
            this.debug = new Qe(this.config.debug),
            this.debug.log("Config", this.config),
            this.debug.log("Support", k),
            o(this.media) || !w(this.media))
                this.debug.error("Setup failed: no suitable element passed");
            else if (this.media.plyr)
                this.debug.warn("Target already setup");
            else if (this.config.enabled)
                if (k.check().api) {
                    const n = this.media.cloneNode(!0);
                    n.autoplay = !1,
                    this.elements.original = n;
                    var i, s = this.media.tagName.toLowerCase();
                    let e = null
                      , t = null;
                    switch (s) {
                    case "div":
                        if (e = this.media.querySelector("iframe"),
                        w(e)) {
                            if (t = Ye(e.getAttribute("src")),
                            this.provider = (i = t.toString(),
                            /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(i) ? N.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i) ? N.vimeo : null),
                            this.elements.container = this.media,
                            this.media = e,
                            this.elements.container.className = "",
                            t.search.length) {
                                const a = ["1", "true"];
                                a.includes(t.searchParams.get("autoplay")) && (this.config.autoplay = !0),
                                a.includes(t.searchParams.get("loop")) && (this.config.loop.active = !0),
                                this.isYouTube ? (this.config.playsinline = a.includes(t.searchParams.get("playsinline")),
                                this.config.youtube.hl = t.searchParams.get("hl")) : this.config.playsinline = !0
                            }
                        } else
                            this.provider = this.media.getAttribute(this.config.attributes.embed.provider),
                            this.media.removeAttribute(this.config.attributes.embed.provider);
                        if (E(this.provider) || !Object.values(N).includes(this.provider))
                            return void this.debug.error("Setup failed: Invalid provider");
                        this.type = "video";
                        break;
                    case "video":
                    case "audio":
                        this.type = s,
                        this.provider = N.html5,
                        this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0),
                        this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
                        (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0),
                        this.media.hasAttribute("muted") && (this.config.muted = !0),
                        this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                        break;
                    default:
                        return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = k.check(this.type, this.provider, this.config.playsinline),
                    this.supported.api ? (this.eventListeners = [],
                    this.listeners = new Je(this),
                    this.storage = new Be(this),
                    this.media.plyr = this,
                    w(this.elements.container) || (this.elements.container = T("div", {
                        tabindex: 0
                    }),
                    fe(this.media, this.elements.container)),
                    j.migrateStyles.call(this),
                    j.addStyleHook.call(this),
                    rt.setup.call(this),
                    this.config.debug && M.call(this, this.elements.container, this.config.events.join(" "), e=>{
                        this.debug.log("event: " + e.type)
                    }
                    ),
                    this.fullscreen = new D(this),
                    (this.isHTML5 || this.isEmbed && !this.supported.ui) && j.build.call(this),
                    this.listeners.container(),
                    this.listeners.global(),
                    this.config.ads.enabled && (this.ads = new ot(this)),
                    this.isHTML5 && this.config.autoplay && this.once("canplay", ()=>L(this.play())),
                    this.lastSeekTime = 0,
                    this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))) : this.debug.error("Setup failed: no support")
                } else
                    this.debug.error("Setup failed: no support");
            else
                this.debug.error("Setup failed: disabled by config")
        }
        get isHTML5() {
            return this.provider === N.html5
        }
        get isEmbed() {
            return this.isYouTube || this.isVimeo
        }
        get isYouTube() {
            return this.provider === N.youtube
        }
        get isVimeo() {
            return this.provider === N.vimeo
        }
        get isVideo() {
            return "video" === this.type
        }
        get isAudio() {
            return "audio" === this.type
        }
        get playing() {
            return Boolean(this.ready && !this.paused && !this.ended)
        }
        get paused() {
            return Boolean(this.media.paused)
        }
        get stopped() {
            return Boolean(this.paused && 0 === this.currentTime)
        }
        get ended() {
            return Boolean(this.media.ended)
        }
        set currentTime(e) {
            var t;
            this.duration && (t = y(e) && 0 < e,
            this.media.currentTime = t ? Math.min(e, this.duration) : 0,
            this.debug.log(`Seeking to ${this.currentTime} seconds`))
        }
        get currentTime() {
            return Number(this.media.currentTime)
        }
        get buffered() {
            const e = this.media["buffered"];
            return y(e) ? e : e && e.length && 0 < this.duration ? e.end(0) / this.duration : 0
        }
        get seeking() {
            return Boolean(this.media.seeking)
        }
        get duration() {
            var e = parseFloat(this.config.duration)
              , t = (this.media || {}).duration
              , t = y(t) && t !== 1 / 0 ? t : 0;
            return e || t
        }
        set volume(e) {
            let t = e;
            l(t) && (t = Number(t)),
            y(t) || (t = this.storage.get("volume")),
            y(t) || ({volume: t} = this.config),
            (t = 1 < t ? 1 : t) < 0 && (t = 0),
            this.config.volume = t,
            this.media.volume = t,
            !E(e) && this.muted && 0 < t && (this.muted = !1)
        }
        get volume() {
            return Number(this.media.volume)
        }
        set muted(e) {
            let t = e;
            b(t) || (t = this.storage.get("muted")),
            b(t) || (t = this.config.muted),
            this.config.muted = t,
            this.media.muted = t
        }
        get muted() {
            return Boolean(this.media.muted)
        }
        get hasAudio() {
            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
        }
        set speed(e) {
            let t = null;
            y(e) && (t = e),
            y(t) || (t = this.storage.get("speed"));
            var {minimumSpeed: e, maximumSpeed: i} = this;
            t = lt(t = y(t) ? t : this.config.speed.selected, e, i),
            this.config.speed.selected = t,
            setTimeout(()=>{
                this.media && (this.media.playbackRate = t)
            }
            , 0)
        }
        get speed() {
            return Number(this.media.playbackRate)
        }
        get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
        }
        get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
        }
        set quality(i) {
            const s = this.config.quality
              , n = this.options.quality;
            if (n.length) {
                let e = [!E(i) && Number(i), this.storage.get("quality"), s.selected, s.default].find(y)
                  , t = !0;
                if (!n.includes(e)) {
                    const i = ke(n, e);
                    this.debug.warn(`Unsupported quality option: ${e}, using ${i} instead`),
                    e = i,
                    t = !1
                }
                s.selected = e,
                this.media.quality = e,
                t && this.storage.set({
                    quality: e
                })
            }
        }
        get quality() {
            return this.media.quality
        }
        set loop(e) {
            e = b(e) ? e : this.config.loop.active;
            this.config.loop.active = e,
            this.media.loop = e
        }
        get loop() {
            return Boolean(this.media.loop)
        }
        set source(e) {
            ht.change.call(this, e)
        }
        get source() {
            return this.media.currentSrc
        }
        get download() {
            var e = this.config.urls["download"];
            return he(e) ? e : this.source
        }
        set download(e) {
            he(e) && (this.config.urls.download = e,
            O.setDownloadUrl.call(this))
        }
        set poster(e) {
            this.isVideo ? j.setPoster.call(this, e, !1).catch(()=>{}
            ) : this.debug.warn("Poster can only be set for video")
        }
        get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
        }
        get ratio() {
            if (!this.isVideo)
                return null;
            const e = Le(Pe.call(this));
            return u(e) ? e.join(":") : e
        }
        set ratio(e) {
            this.isVideo ? l(e) && Ie(e) ? (this.config.ratio = Le(e),
            $e.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
        }
        set autoplay(e) {
            this.config.autoplay = b(e) ? e : this.config.autoplay
        }
        get autoplay() {
            return Boolean(this.config.autoplay)
        }
        toggleCaptions(e) {
            z.toggle.call(this, e, !1)
        }
        set currentTrack(e) {
            z.set.call(this, e, !1),
            z.setup.call(this)
        }
        get currentTrack() {
            var {toggled: e, currentTrack: t} = this.captions;
            return e ? t : -1
        }
        set language(e) {
            z.setLanguage.call(this, e, !1)
        }
        get language() {
            return (z.getCurrentTrack.call(this) || {}).language
        }
        set pip(e) {
            k.pip && (e = b(e) ? e : !this.pip,
            c(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? Ge : "inline"),
            c(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture()))
        }
        get pip() {
            return k.pip ? E(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ge : null
        }
        setPreviewThumbnails(e) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(),
            this.previewThumbnails = null),
            Object.assign(this.config.previewThumbnails, e),
            this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))
        }
        static supported(e, t, i) {
            return k.check(e, t, i)
        }
        static loadSprite(e, t) {
            return Re(e, t)
        }
        static setup(e, t={}) {
            let i = null;
            return l(e) ? i = Array.from(document.querySelectorAll(e)) : ce(e) ? i = Array.from(e) : u(e) && (i = e.filter(w)),
            E(i) ? null : i.map(e=>new ut(e,t))
        }
    }
    return ut.defaults = (Ze = Xe,
    JSON.parse(JSON.stringify(Ze))),
    ut
});
var $jscomp = $jscomp || {}
  , $jscomp$lookupPolyfilledValue = ($jscomp.scope = {},
$jscomp.arrayIteratorImpl = function(e) {
    var t = 0;
    return function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        } : {
            done: !0
        }
    }
}
,
$jscomp.arrayIterator = function(e) {
    return {
        next: $jscomp.arrayIteratorImpl(e)
    }
}
,
$jscomp.ASSUME_ES5 = !1,
$jscomp.ASSUME_NO_NATIVE_MAP = !1,
$jscomp.ASSUME_NO_NATIVE_SET = !1,
$jscomp.SIMPLE_FROUND_POLYFILL = !1,
$jscomp.ISOLATE_POLYFILLS = !1,
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, i) {
    return e == Array.prototype || e == Object.prototype || (e[t] = i.value),
    e
}
,
$jscomp.getGlobal = function(e) {
    e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var t = 0; t < e.length; ++t) {
        var i = e[t];
        if (i && i.Math == Math)
            return i
    }
    throw Error("Cannot find global object")
}
,
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"),
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE,
$jscomp.polyfills = {},
$jscomp.propertyToPolyfillSymbol = {},
$jscomp.POLYFILL_PREFIX = "$jscp$",
function(e, t) {
    var i = $jscomp.propertyToPolyfillSymbol[t];
    return null != i && void 0 !== (i = e[i]) ? i : e[t]
}
)
  , scrollCue = ($jscomp.polyfill = function(e, t, i, s) {
    t && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(e, t, i, s) : $jscomp.polyfillUnisolated(e, t, i, s))
}
,
$jscomp.polyfillUnisolated = function(e, t, i, s) {
    for (i = $jscomp.global,
    e = e.split("."),
    s = 0; s < e.length - 1; s++) {
        var n = e[s];
        n in i || (i[n] = {}),
        i = i[n]
    }
    (t = t(s = i[e = e[e.length - 1]])) != s && null != t && $jscomp.defineProperty(i, e, {
        configurable: !0,
        writable: !0,
        value: t
    })
}
,
$jscomp.polyfillIsolated = function(e, t, i, s) {
    var n = e.split(".");
    e = 1 === n.length,
    s = n[0],
    s = !e && s in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var a = 0; a < n.length - 1; a++) {
        var r = n[a];
        r in s || (s[r] = {}),
        s = s[r]
    }
    n = n[n.length - 1],
    null != (t = t(i = $jscomp.IS_SYMBOL_NATIVE && "es6" === i ? s[n] : null)) && (e ? $jscomp.defineProperty($jscomp.polyfills, n, {
        configurable: !0,
        writable: !0,
        value: t
    }) : t !== i && ($jscomp.propertyToPolyfillSymbol[n] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(n) : $jscomp.POLYFILL_PREFIX + n,
    n = $jscomp.propertyToPolyfillSymbol[n],
    $jscomp.defineProperty(s, n, {
        configurable: !0,
        writable: !0,
        value: t
    })))
}
,
$jscomp.initSymbol = function() {}
,
$jscomp.polyfill("Symbol", function(e) {
    if (e)
        return e;
    function t(e, t) {
        this.$jscomp$symbol$id_ = e,
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
    function i(e) {
        if (this instanceof i)
            throw new TypeError("Symbol is not a constructor");
        return new t("jscomp_symbol_" + (e || "") + "_" + s++,e)
    }
    t.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    }
    ;
    var s = 0;
    return i
}, "es6", "es3"),
$jscomp.initSymbolIterator = function() {}
,
$jscomp.polyfill("Symbol.iterator", function(e) {
    if (e)
        return e;
    e = Symbol("Symbol.iterator");
    for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), i = 0; i < t.length; i++) {
        var s = $jscomp.global[t[i]];
        "function" == typeof s && "function" != typeof s.prototype[e] && $jscomp.defineProperty(s.prototype, e, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return e
}, "es6", "es3"),
$jscomp.initSymbolAsyncIterator = function() {}
,
$jscomp.iteratorPrototype = function(e) {
    return (e = {
        next: e
    })[Symbol.iterator] = function() {
        return this
    }
    ,
    e
}
,
$jscomp.iteratorFromArray = function(t, i) {
    t instanceof String && (t += "");
    var s = 0
      , n = {
        next: function() {
            var e;
            return s < t.length ? (e = s++,
            {
                value: i(e, t[e]),
                done: !1
            }) : (n.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ,
            n.next())
        }
    };
    return n[Symbol.iterator] = function() {
        return n
    }
    ,
    n
}
,
$jscomp.polyfill("Array.prototype.keys", function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e
        })
    }
}, "es6", "es3"),
function() {
    var a, n, r, o = {}, s = 0, l = !0, c = !0, d = !1, t = !1, i = {
        duration: 600,
        interval: -.7,
        percentage: .75,
        enable: !0,
        docSlider: !1,
        pageChangeReset: !1
    }, o = {
        setEvents: function(e) {
            function t() {
                l && (requestAnimationFrame(function() {
                    l = !0,
                    c && (o.setQuery(),
                    o.runQuery())
                }),
                l = !1)
            }
            if (c && !e && window.addEventListener("load", o.runQuery),
            window.addEventListener("scroll", t),
            d) {
                e = docSlider.getElements().pages;
                for (var i = 0; i < e.length; i++)
                    e[i].addEventListener("scroll", function(e) {
                        if (docSlider.getCurrentIndex() + "" !== (e = e.target.getAttribute("data-ds-index")))
                            return !1;
                        docSlider._getWheelEnable() && t()
                    })
            }
            window.addEventListener("resize", function() {
                0 < s && clearTimeout(s),
                s = setTimeout(function() {
                    c && (o.searchElements(),
                    o.setQuery(),
                    o.runQuery())
                }, 200)
            })
        },
        setOptions: function(t, i) {
            var s = {};
            if (void 0 !== t)
                return Object.keys(t).forEach(function(e) {
                    "[object Object]" === Object.prototype.toString.call(t[e]) ? s[e] = o.setOptions(t[e], i[e]) : (s[e] = t[e],
                    void 0 !== i && void 0 !== i[e] && (s[e] = i[e]))
                }),
                s
        },
        searchElements: function() {
            a = [];
            for (var e = document.querySelectorAll("[data-cues]:not([data-disabled])"), t = 0; t < e.length; t++) {
                for (var i = e[t], s = 0; s < i.children.length; s++) {
                    var n = i.children[s];
                    o.setAttrPtoC(n, "data-cue", i, "data-cues", ""),
                    o.setAttrPtoC(n, "data-duration", i, "data-duration", !1),
                    o.setAttrPtoC(n, "data-interval", i, "data-interval", !1),
                    o.setAttrPtoC(n, "data-sort", i, "data-sort", !1),
                    o.setAttrPtoC(n, "data-addClass", i, "data-addClass", !1),
                    o.setAttrPtoC(n, "data-group", i, "data-group", !1),
                    o.setAttrPtoC(n, "data-delay", i, "data-delay", !1)
                }
                i.setAttribute("data-disabled", "true")
            }
            for (e = document.querySelectorAll('[data-cue]:not([data-show="true"])'),
            t = 0; t < e.length; t++)
                i = e[t],
                a.push({
                    elm: i,
                    cue: o.getAttr(i, "data-cue", "fadeIn"),
                    duration: Number(o.getAttr(i, "data-duration", r.duration)),
                    interval: Number(o.getAttr(i, "data-interval", r.interval)),
                    order: o.getOrderNumber(i),
                    sort: o.getAttr(i, "data-sort", null),
                    addClass: o.getAttr(i, "data-addClass", null),
                    group: o.getAttr(i, "data-group", null),
                    delay: Number(o.getAttr(i, "data-delay", 0))
                });
            if (d)
                for (e = docSlider.getElements().pages.length,
                t = 0; t < e; t++)
                    for (i = document.querySelectorAll('[data-ds-index="' + t + '"] [data-cue]:not([data-scpage])'),
                    s = 0; s < i.length; s++)
                        i[s].setAttribute("data-scpage", t)
        },
        sortElements: function() {
            for (var e = arguments[0], a = [].slice.call(arguments).slice(1), t = {
                $jscomp$loop$prop$i$4: 0
            }; t.$jscomp$loop$prop$i$4 < a.length; (t = {
                $jscomp$loop$prop$i$4: t.$jscomp$loop$prop$i$4
            }).$jscomp$loop$prop$i$4++)
                e.sort(function(n) {
                    return function(e, t) {
                        var i = void 0 === a[n.$jscomp$loop$prop$i$4][1] || a[n.$jscomp$loop$prop$i$4][1]
                          , s = a[n.$jscomp$loop$prop$i$4][0];
                        return e[s] > t[s] ? i ? 1 : -1 : e[s] < t[s] ? i ? -1 : 1 : 0
                    }
                }(t))
        },
        randElements: function(e) {
            for (var t = e.length - 1; 0 < t; t--) {
                var i = Math.floor(Math.random() * (t + 1))
                  , s = e[t];
                e[t] = e[i],
                e[i] = s
            }
            return e
        },
        setDurationValue: function(e, t, i) {
            return void 0 === t ? e : (t = t.duration,
            (e = -1 === (i + "").indexOf(".") ? e + t + i : e + t + t * i) < 0 ? 0 : e)
        },
        getOrderNumber: function(e) {
            return e.hasAttribute("data-order") ? 0 <= (e = Number(e.getAttribute("data-order"))) ? e : Math.pow(2, 53) - 1 + e : Math.pow(2, 52) - 1
        },
        setAttrPtoC: function(e, t, i, s, n) {
            i.hasAttribute(s) ? e.hasAttribute(t) || e.setAttribute(t, i.getAttribute(s)) : !1 !== n && e.setAttribute(t, n)
        },
        getAttr: function(e, t, i) {
            return e.hasAttribute(t) ? e.getAttribute(t) : i
        },
        getOffsetTop: function(e) {
            return e.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        },
        setClassNames: function(e, t) {
            if (t) {
                t = t.split(" ");
                for (var i = 0; i < t.length; i++)
                    e.classList.add(t[i])
            }
        },
        setQuery: function() {
            n = {};
            for (var e = 0; e < a.length; e++) {
                var t = a[e]
                  , i = t.group || "$" + o.getOffsetTop(t.elm);
                if (!t.elm.hasAttribute("data-show")) {
                    if (d) {
                        var s = t.elm.getAttribute("data-scpage");
                        if (s !== docSlider.getCurrentIndex() + "" && null !== s)
                            continue
                    }
                    void 0 === n[i] && (n[i] = []),
                    n[i].push(t)
                }
            }
        },
        runQuery: function() {
            for (var e = Object.keys(n), t = {}, i = 0; i < e.length; t = {
                $jscomp$loop$prop$elms$6: t.$jscomp$loop$prop$elms$6,
                $jscomp$loop$prop$interval$7: t.$jscomp$loop$prop$interval$7
            },
            i++)
                if (t.$jscomp$loop$prop$elms$6 = n[e[i]],
                o.isElementIn(t.$jscomp$loop$prop$elms$6[0].elm)) {
                    "reverse" === t.$jscomp$loop$prop$elms$6[0].sort ? t.$jscomp$loop$prop$elms$6.reverse() : "random" === t.$jscomp$loop$prop$elms$6[0].sort && o.randElements(t.$jscomp$loop$prop$elms$6),
                    o.sortElements(t.$jscomp$loop$prop$elms$6, ["order"]);
                    for (var s = t.$jscomp$loop$prop$interval$7 = 0; s < t.$jscomp$loop$prop$elms$6.length; s++)
                        !function(t) {
                            return function(e) {
                                t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show", "true"),
                                o.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm, t.$jscomp$loop$prop$elms$6[e].addClass),
                                t.$jscomp$loop$prop$interval$7 = o.setDurationValue(t.$jscomp$loop$prop$interval$7, t.$jscomp$loop$prop$elms$6[e - 1], t.$jscomp$loop$prop$elms$6[e].interval),
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationName = t.$jscomp$loop$prop$elms$6[e].cue,
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration = t.$jscomp$loop$prop$elms$6[e].duration + "ms",
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction = "ease",
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay = t.$jscomp$loop$prop$interval$7 + t.$jscomp$loop$prop$elms$6[e].delay + "ms",
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection = "normal",
                                t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode = "both"
                            }
                        }(t)(s);
                    delete n[e[i]]
                }
        },
        isElementIn: function(e) {
            var t = e.hasAttribute("data-scpage") ? o.isScrollEndWithDocSlider : o.isScrollEnd;
            return window.pageYOffset > o.getOffsetTop(e) - window.innerHeight * r.percentage || t()
        },
        isScrollEnd: function() {
            var e = window.document.documentElement;
            return (window.document.body.scrollTop || e.scrollTop) >= e.scrollHeight - e.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var e = docSlider.getCurrentPage();
            return e.scrollTop >= e.scrollHeight - e.clientHeight
        }
    };
    return {
        init: function(e) {
            r = o.setOptions(i, e),
            c = r.enable,
            d = r.docSlider,
            t = r.pageChangeReset,
            d || (o.setEvents(),
            o.searchElements(),
            o.setQuery())
        },
        update: function() {
            c && (o.searchElements(),
            o.setQuery(),
            o.runQuery())
        },
        enable: function(e) {
            c = void 0 === e ? !c : e,
            scrollCue.update()
        },
        _hasDocSlider: function() {
            return d
        },
        _hasPageChangeReset: function() {
            return t
        },
        _initWithDocSlider: function(e) {
            o.setEvents(e),
            o.searchElements(),
            o.setQuery()
        },
        _updateWithDocSlider: function() {
            c && (o.setQuery(),
            o.runQuery())
        },
        _searchElements: function() {
            o.searchElements()
        }
    }
}());
function polyfill() {
    var e, s, o, l, i, t, c = window, d = document;
    function h(e, t) {
        this.scrollLeft = e,
        this.scrollTop = t
    }
    function n(e) {
        if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior)
            return !0;
        if ("object" == typeof e && "smooth" === e.behavior)
            return !1;
        throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
    }
    function a(e, t) {
        return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
    }
    function r(e, t) {
        e = c.getComputedStyle(e, null)["overflow" + t];
        return "auto" === e || "scroll" === e
    }
    function u(e) {
        for (; e !== d.body && !1 === (i = void 0,
        i = a(t = e, "Y") && r(t, "Y"),
        t = a(t, "X") && r(t, "X"),
        i || t); )
            e = e.parentNode || e.host;
        var t, i;
        return e
    }
    function p(e) {
        var t, i = (l() - e.startTime) / s;
        i = i = 1 < i ? 1 : i,
        i = .5 * (1 - Math.cos(Math.PI * i)),
        t = e.startX + (e.x - e.startX) * i,
        i = e.startY + (e.y - e.startY) * i,
        e.method.call(e.scrollable, t, i),
        t === e.x && i === e.y || c.requestAnimationFrame(p.bind(c, e))
    }
    function m(e, t, i) {
        var s, n, a, r = l(), e = e === d.body ? (n = (s = c).scrollX || c.pageXOffset,
        a = c.scrollY || c.pageYOffset,
        o.scroll) : (n = (s = e).scrollLeft,
        a = e.scrollTop,
        h);
        p({
            scrollable: s,
            method: e,
            startTime: r,
            startX: n,
            startY: a,
            x: t,
            y: i
        })
    }
    "scrollBehavior"in d.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (e = c.HTMLElement || c.Element,
    s = 468,
    o = {
        scroll: c.scroll || c.scrollTo,
        scrollBy: c.scrollBy,
        elementScroll: e.prototype.scroll || h,
        scrollIntoView: e.prototype.scrollIntoView
    },
    l = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now,
    t = c.navigator.userAgent,
    i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0,
    c.scroll = c.scrollTo = function() {
        void 0 !== arguments[0] && (!0 === n(arguments[0]) ? o.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset) : m.call(c, d.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset))
    }
    ,
    c.scrollBy = function() {
        void 0 !== arguments[0] && (n(arguments[0]) ? o.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(c, d.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
    }
    ,
    e.prototype.scroll = e.prototype.scrollTo = function() {
        if (void 0 !== arguments[0])
            if (!0 === n(arguments[0])) {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                    throw new SyntaxError("Value could not be converted");
                o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
            } else {
                var e = arguments[0].left
                  , t = arguments[0].top;
                m.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
            }
    }
    ,
    e.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 === n(arguments[0]) ? o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop) : this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
        }))
    }
    ,
    e.prototype.scrollIntoView = function() {
        var e, t, i;
        !0 === n(arguments[0]) ? o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]) : (t = (e = u(this)).getBoundingClientRect(),
        i = this.getBoundingClientRect(),
        e !== d.body ? (m.call(this, e, e.scrollLeft + i.left - t.left, e.scrollTop + i.top - t.top),
        "fixed" !== c.getComputedStyle(e).position && c.scrollBy({
            left: t.left,
            top: t.top,
            behavior: "smooth"
        })) : c.scrollBy({
            left: i.left,
            top: i.top,
            behavior: "smooth"
        }))
    }
    )
}
"object" == typeof exports && "undefined" != typeof module ? module.exports = {
    polyfill: polyfill
} : polyfill(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function() {
    "use strict";
    function s(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function n(t, i) {
        void 0 === t && (t = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach(e=>{
            void 0 === t[e] ? t[e] = i[e] : s(i[e]) && s(t[e]) && 0 < Object.keys(i[e]).length && n(t[e], i[e])
        }
        )
    }
    const t = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function x() {
        var e = "undefined" != typeof document ? document : {};
        return n(e, t),
        e
    }
    const N = {
        document: t,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function L() {
        var e = "undefined" != typeof window ? window : {};
        return n(e, N),
        e
    }
    class r extends Array {
        constructor(e) {
            if ("number" != typeof e) {
                super(...e || []);
                {
                    var t = this;
                    const i = t.__proto__;
                    void Object.defineProperty(t, "__proto__", {
                        get: ()=>i,
                        set(e) {
                            i.__proto__ = e
                        }
                    })
                }
            } else
                super(e)
        }
    }
    function a(e) {
        const t = [];
        return (e = void 0 === e ? [] : e).forEach(e=>{
            Array.isArray(e) ? t.push(...a(e)) : t.push(e)
        }
        ),
        t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function P(e, t) {
        const i = L()
          , s = x();
        let n = [];
        if (!t && e instanceof r)
            return e;
        if (!e)
            return new r(n);
        if ("string" == typeof e) {
            const i = e.trim();
            if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                let e = "div";
                0 === i.indexOf("<li") && (e = "ul"),
                0 === i.indexOf("<tr") && (e = "tbody"),
                0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"),
                0 === i.indexOf("<tbody") && (e = "table"),
                0 === i.indexOf("<option") && (e = "select");
                const t = s.createElement(e);
                t.innerHTML = i;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    n.push(t.childNodes[e])
            } else
                n = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const i = []
                      , s = t.querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1)
                        i.push(s[e]);
                    return i
                }(e.trim(), t || s)
        } else if (e.nodeType || e === i || e === s)
            n.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof r)
                return e;
            n = e
        }
        return new r(function(t) {
            const i = [];
            for (let e = 0; e < t.length; e += 1)
                -1 === i.indexOf(t[e]) && i.push(t[e]);
            return i
        }(n))
    }
    P.fn = r.prototype;
    const i = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            const s = a(t.map(e=>e.split(" ")));
            return this.forEach(e=>{
                e.classList.add(...s)
            }
            ),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            const s = a(t.map(e=>e.split(" ")));
            return this.forEach(e=>{
                e.classList.remove(...s)
            }
            ),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            const s = a(t.map(e=>e.split(" ")));
            return 0 < o(this, t=>0 < s.filter(e=>t.classList.contains(e)).length).length
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            const s = a(t.map(e=>e.split(" ")));
            this.forEach(t=>{
                s.forEach(e=>{
                    t.classList.toggle(e)
                }
                )
            }
            )
        },
        attr: function(t, i) {
            if (1 === arguments.length && "string" == typeof t)
                return this[0] ? this[0].getAttribute(t) : void 0;
            for (let e = 0; e < this.length; e += 1)
                if (2 === arguments.length)
                    this[e].setAttribute(t, i);
                else
                    for (const i in t)
                        this[e][i] = t[i],
                        this[e].setAttribute(i, t[i]);
            return this
        },
        removeAttr: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].removeAttribute(t);
            return this
        },
        transform: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].style.transform = t;
            return this
        },
        transition: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
            return this
        },
        on: function() {
            for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
                i[e] = arguments[e];
            let[s,n,a,r] = i;
            function o(t) {
                var e = t.target;
                if (e) {
                    const i = t.target.dom7EventData || [];
                    if (i.indexOf(t) < 0 && i.unshift(t),
                    P(e).is(n))
                        a.apply(e, i);
                    else {
                        const t = P(e).parents();
                        for (let e = 0; e < t.length; e += 1)
                            P(t[e]).is(n) && a.apply(t[e], i)
                    }
                }
            }
            function l(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                a.apply(this, t)
            }
            "function" == typeof i[1] && ([s,a,r] = i,
            n = void 0),
            r = r || !1;
            var c = s.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const i = this[e];
                if (n)
                    for (d = 0; d < c.length; d += 1) {
                        const t = c[d];
                        i.dom7LiveListeners || (i.dom7LiveListeners = {}),
                        i.dom7LiveListeners[t] || (i.dom7LiveListeners[t] = []),
                        i.dom7LiveListeners[t].push({
                            listener: a,
                            proxyListener: o
                        }),
                        i.addEventListener(t, o, r)
                    }
                else
                    for (d = 0; d < c.length; d += 1) {
                        const t = c[d];
                        i.dom7Listeners || (i.dom7Listeners = {}),
                        i.dom7Listeners[t] || (i.dom7Listeners[t] = []),
                        i.dom7Listeners[t].push({
                            listener: a,
                            proxyListener: l
                        }),
                        i.addEventListener(t, l, r)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                i[s] = arguments[s];
            let[t,n,a,r] = i;
            "function" == typeof i[1] && ([t,a,r] = i,
            n = void 0),
            r = r || !1;
            var o = t.split(" ");
            for (let e = 0; e < o.length; e += 1) {
                const i = o[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let t;
                    if (!n && s.dom7Listeners ? t = s.dom7Listeners[i] : n && s.dom7LiveListeners && (t = s.dom7LiveListeners[i]),
                    t && t.length)
                        for (let e = t.length - 1; 0 <= e; --e) {
                            const n = t[e];
                            (a && n.listener === a || a && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === a || !a) && (s.removeEventListener(i, n.proxyListener, r),
                            t.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const t = L();
            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                s[n] = arguments[n];
            const a = s[0].split(" ")
              , r = s[1];
            for (let e = 0; e < a.length; e += 1) {
                const n = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    if (t.CustomEvent) {
                        const i = new t.CustomEvent(n,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        a.dom7EventData = s.filter((e,t)=>0 < t),
                        a.dispatchEvent(i),
                        a.dom7EventData = [],
                        delete a.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(i) {
            const s = this;
            return i && s.on("transitionend", function e(t) {
                t.target === this && (i.call(this, t),
                s.off("transitionend", e))
            }),
            this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = L();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (0 < this.length) {
                const e = L()
                  , t = x()
                  , i = this[0]
                  , s = i.getBoundingClientRect()
                  , n = t.body
                  , a = i.clientTop || n.clientTop || 0
                  , r = i.clientLeft || n.clientLeft || 0
                  , o = i === e ? e.scrollY : i.scrollTop
                  , l = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - a,
                    left: s.left + l - r
                }
            }
            return null
        },
        css: function(e, t) {
            const i = L();
            let s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (const t in e)
                            this[s].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (s = 0; s < this.length; s += 1)
                this[s].style[e] = t;
            return this
        },
        each: function(i) {
            return i && this.forEach((e,t)=>{
                i.apply(e, [e, t])
            }
            ),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0] ? this[0].innerHTML : null;
            for (let e = 0; e < this.length; e += 1)
                this[e].innerHTML = t;
            return this
        },
        text: function(t) {
            if (void 0 === t)
                return this[0] ? this[0].textContent.trim() : null;
            for (let e = 0; e < this.length; e += 1)
                this[e].textContent = t;
            return this
        },
        is: function(e) {
            const t = L()
              , i = x()
              , s = this[0];
            let n, a;
            if (!s || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (s.matches)
                    return s.matches(e);
                if (s.webkitMatchesSelector)
                    return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector)
                    return s.msMatchesSelector(e);
                for (n = P(e),
                a = 0; a < n.length; a += 1)
                    if (n[a] === s)
                        return !0;
                return !1
            }
            if (e === i)
                return s === i;
            if (e === t)
                return s === t;
            if (e.nodeType || e instanceof r) {
                for (n = e.nodeType ? [e] : e,
                a = 0; a < n.length; a += 1)
                    if (n[a] === s)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t = this.length;
            return P(t - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            var i;
            const s = x();
            for (let e = 0; e < arguments.length; e += 1) {
                i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                for (let t = 0; t < this.length; t += 1)
                    if ("string" == typeof i) {
                        const x = s.createElement("div");
                        for (x.innerHTML = i; x.firstChild; )
                            this[t].appendChild(x.firstChild)
                    } else if (i instanceof r)
                        for (let e = 0; e < i.length; e += 1)
                            this[t].appendChild(i[e]);
                    else
                        this[t].appendChild(i)
            }
            return this
        },
        prepend: function(e) {
            const t = x();
            let i, s;
            for (i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                    const x = t.createElement("div");
                    for (x.innerHTML = e,
                    s = x.childNodes.length - 1; 0 <= s; --s)
                        this[i].insertBefore(x.childNodes[s], this[i].childNodes[0])
                } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1)
                        this[i].insertBefore(e[s], this[i].childNodes[0]);
                else
                    this[i].insertBefore(e, this[i].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && P(this[0].nextElementSibling).is(e) ? P([this[0].nextElementSibling]) : P([]) : this[0].nextElementSibling ? P([this[0].nextElementSibling]) : P([]) : P([])
        },
        nextAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i)
                return P([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e && !P(s).is(e) || t.push(s),
                i = s
            }
            return P(t)
        },
        prev: function(e) {
            var t;
            return 0 < this.length ? (t = this[0],
            e ? t.previousElementSibling && P(t.previousElementSibling).is(e) ? P([t.previousElementSibling]) : P([]) : t.previousElementSibling ? P([t.previousElementSibling]) : P([])) : P([])
        },
        prevAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i)
                return P([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e && !P(s).is(e) || t.push(s),
                i = s
            }
            return P(t)
        },
        parent: function(t) {
            const i = [];
            for (let e = 0; e < this.length; e += 1)
                null === this[e].parentNode || t && !P(this[e].parentNode).is(t) || i.push(this[e].parentNode);
            return P(i)
        },
        parents: function(i) {
            const s = [];
            for (let t = 0; t < this.length; t += 1) {
                let e = this[t].parentNode;
                for (; e; )
                    i && !P(e).is(i) || s.push(e),
                    e = e.parentNode
            }
            return P(s)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? P([]) : t = t.is(e) ? t : t.parents(e).eq(0)
        },
        find: function(t) {
            const i = [];
            for (let e = 0; e < this.length; e += 1) {
                var s = this[e].querySelectorAll(t);
                for (let e = 0; e < s.length; e += 1)
                    i.push(s[e])
            }
            return P(i)
        },
        children: function(t) {
            const i = [];
            for (let e = 0; e < this.length; e += 1) {
                var s = this[e].children;
                for (let e = 0; e < s.length; e += 1)
                    t && !P(s[e]).is(t) || i.push(s[e])
            }
            return P(i)
        },
        filter: function(e) {
            return P(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function _(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function v() {
        return Date.now()
    }
    function $(e, t) {
        void 0 === t && (t = "x");
        const i = L();
        let s, n, a;
        const r = function(e) {
            const t = L();
            let i;
            return i = (i = !(i = t.getComputedStyle ? t.getComputedStyle(e, null) : i) && e.currentStyle ? e.currentStyle : i) || e.style
        }(e);
        return i.WebKitCSSMatrix ? (6 < (n = r.transform || r.webkitTransform).split(",").length && (n = n.split(", ").map(e=>e.replace(",", ".")).join(", ")),
        a = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        s = a.toString().split(",")),
        "x" === t && (n = i.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
        (n = "y" === t ? i.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5]) : n) || 0
    }
    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function u(e) {
        const i = Object(arguments.length <= 0 ? void 0 : e)
          , t = ["__proto__", "constructor", "prototype"];
        for (let e = 1; e < arguments.length; e += 1) {
            var s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
            if (null != s && (o = s,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? o instanceof HTMLElement : o && (1 === o.nodeType || 11 === o.nodeType)))) {
                var n = Object.keys(Object(s)).filter(e=>t.indexOf(e) < 0);
                for (let e = 0, t = n.length; e < t; e += 1) {
                    var a = n[e]
                      , r = Object.getOwnPropertyDescriptor(s, a);
                    void 0 !== r && r.enumerable && (c(i[a]) && c(s[a]) ? s[a].__swiper__ ? i[a] = s[a] : u(i[a], s[a]) : !c(i[a]) && c(s[a]) ? (i[a] = {},
                    s[a].__swiper__ ? i[a] = s[a] : u(i[a], s[a])) : i[a] = s[a])
                }
            }
        }
        var o;
        return i
    }
    function C(e, t, i) {
        e.style.setProperty(t, i)
    }
    function y(e) {
        let {swiper: i, targetPosition: s, side: n} = e;
        const a = L()
          , r = -i.translate;
        let o, l = null;
        const c = i.params.speed
          , d = (i.wrapperEl.style.scrollSnapType = "none",
        a.cancelAnimationFrame(i.cssModeFrameID),
        s > r ? "next" : "prev")
          , h = (e,t)=>"next" === d && t <= e || "prev" === d && e <= t
          , u = ()=>{
            o = (new Date).getTime(),
            null === l && (l = o);
            var e = Math.max(Math.min((o - l) / c, 1), 0)
              , e = .5 - Math.cos(e * Math.PI) / 2;
            let t = r + e * (s - r);
            if (h(t, s) && (t = s),
            i.wrapperEl.scrollTo({
                [n]: t
            }),
            h(t, s))
                return i.wrapperEl.style.overflow = "hidden",
                i.wrapperEl.style.scrollSnapType = "",
                setTimeout(()=>{
                    i.wrapperEl.style.overflow = "",
                    i.wrapperEl.scrollTo({
                        [n]: t
                    })
                }
                ),
                void a.cancelAnimationFrame(i.cssModeFrameID);
            i.cssModeFrameID = a.requestAnimationFrame(u)
        }
        ;
        u()
    }
    let e, d, h;
    function m() {
        return e = e || function() {
            const i = L()
              , e = x();
            return {
                smoothScroll: e.documentElement && "scrollBehavior"in e.documentElement.style,
                touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch),
                passiveListener: function() {
                    let e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        i.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart"in i
            }
        }()
    }
    function l(e) {
        let {swiper: t, runCallbacks: i, direction: s, step: n} = e;
        var {activeIndex: e, previousIndex: a} = t;
        let r = s;
        if (r = r || (a < e ? "next" : e < a ? "prev" : "reset"),
        t.emit("transition" + n),
        i && e !== a) {
            if ("reset" === r)
                return t.emit("slideResetTransition" + n);
            t.emit("slideChangeTransition" + n),
            "next" === r ? t.emit("slideNextTransition" + n) : t.emit("slidePrevTransition" + n)
        }
    }
    function p() {
        var e, t, i = this, {params: s, el: n} = i;
        n && 0 === n.offsetWidth || (s.breakpoints && i.setBreakpoint(),
        {allowSlideNext: n, allowSlidePrev: e, snapGrid: t} = i,
        i.allowSlideNext = !0,
        i.allowSlidePrev = !0,
        i.updateSize(),
        i.updateSlides(),
        i.updateSlidesClasses(),
        ("auto" === s.slidesPerView || 1 < s.slidesPerView) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
        i.allowSlidePrev = e,
        i.allowSlideNext = n,
        i.params.watchOverflow && t !== i.snapGrid && i.checkOverflow())
    }
    Object.keys(i).forEach(e=>{
        Object.defineProperty(P.fn, e, {
            value: i[e],
            writable: !0
        })
    }
    );
    let f = !1;
    function D() {}
    const g = (e,t)=>{
        const i = x()
          , {params: s, touchEvents: n, el: a, wrapperEl: r, device: o, support: l} = e
          , c = !!s.nested
          , d = "on" === t ? "addEventListener" : "removeEventListener"
          , h = t;
        if (l.touch) {
            const t = !("touchstart" !== n.start || !l.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            a[d](n.start, e.onTouchStart, t),
            a[d](n.move, e.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: c
            } : c),
            a[d](n.end, e.onTouchEnd, t),
            n.cancel && a[d](n.cancel, e.onTouchEnd, t)
        } else
            a[d](n.start, e.onTouchStart, !1),
            i[d](n.move, e.onTouchMove, c),
            i[d](n.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) && a[d]("click", e.onClick, !0),
        s.cssMode && r[d]("scroll", e.onScroll),
        s.updateOnWindowResize ? e[h](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", p, !0) : e[h]("observerUpdate", p, !0)
    }
      , b = (e,t)=>e.grid && t.grid && 1 < t.grid.rows;
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    const E = {
        eventsEmitter: {
            on(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed)
                    return s;
                if ("function" != typeof t)
                    return s;
                const n = i ? "unshift" : "push";
                return e.split(" ").forEach(e=>{
                    s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][n](t)
                }
                ),
                s
            },
            once(s, n, e) {
                const a = this;
                return !a.eventsListeners || a.destroyed || "function" != typeof n ? a : (r.__emitterProxy = n,
                a.on(s, r, e));
                function r() {
                    a.off(s, r),
                    r.__emitterProxy && delete r.__emitterProxy;
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                        t[i] = arguments[i];
                    n.apply(a, t)
                }
            },
            onAny(e, t) {
                if (!this.eventsListeners || this.destroyed)
                    return this;
                if ("function" != typeof e)
                    return this;
                t = t ? "unshift" : "push";
                return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e),
                this
            },
            offAny(e) {
                if (!this.eventsListeners || this.destroyed)
                    return this;
                if (!this.eventsAnyListeners)
                    return this;
                e = this.eventsAnyListeners.indexOf(e);
                return 0 <= e && this.eventsAnyListeners.splice(e, 1),
                this
            },
            off(e, s) {
                const n = this;
                return !n.eventsListeners || n.destroyed || n.eventsListeners && e.split(" ").forEach(i=>{
                    void 0 === s ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((e,t)=>{
                        (e === s || e.__emitterProxy && e.__emitterProxy === s) && n.eventsListeners[i].splice(t, 1)
                    }
                    )
                }
                ),
                n
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed)
                    return e;
                if (!e.eventsListeners)
                    return e;
                let t, i, s;
                for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                    a[r] = arguments[r];
                return s = "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0],
                i = a.slice(1, a.length),
                e) : (t = a[0].events,
                i = a[0].data,
                a[0].context || e),
                i.unshift(s),
                (Array.isArray(t) ? t : t.split(" ")).forEach(t=>{
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e=>{
                        e.apply(s, [t, ...i])
                    }
                    ),
                    e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e=>{
                        e.apply(s, i)
                    }
                    )
                }
                ),
                e
            }
        },
        update: {
            updateSize: function() {
                var e = this;
                let t, i;
                const s = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth,
                i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10),
                i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            },
            updateSlides: function() {
                const i = this;
                function s(e) {
                    return i.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }
                function n(e, t) {
                    return parseFloat(e.getPropertyValue(s(t)) || 0)
                }
                const a = i.params
                  , {$wrapperEl: r, size: o, rtlTranslate: l, wrongRTL: c} = i
                  , d = i.virtual && a.virtual.enabled
                  , e = (d ? i.virtual : i).slides.length
                  , h = r.children("." + i.params.slideClass)
                  , u = (d ? i.virtual.slides : h).length;
                let p = [];
                const m = []
                  , f = [];
                let g = a.slidesOffsetBefore
                  , v = ("function" == typeof g && (g = a.slidesOffsetBefore.call(i)),
                a.slidesOffsetAfter);
                "function" == typeof v && (v = a.slidesOffsetAfter.call(i));
                var y = i.snapGrid.length
                  , b = i.slidesGrid.length;
                let w = a.spaceBetween
                  , E = -g
                  , T = 0
                  , x = 0;
                if (void 0 !== o) {
                    "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * o),
                    i.virtualSize = -w,
                    l ? h.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : h.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }),
                    a.centeredSlides && a.cssMode && (C(i.wrapperEl, "--swiper-centered-offset-before", ""),
                    C(i.wrapperEl, "--swiper-centered-offset-after", ""));
                    var _ = a.grid && 1 < a.grid.rows && i.grid;
                    let t;
                    _ && i.grid.initSlides(u);
                    var S = "auto" === a.slidesPerView && a.breakpoints && 0 < Object.keys(a.breakpoints).filter(e=>void 0 !== a.breakpoints[e].slidesPerView).length;
                    for (let e = 0; e < u; e += 1) {
                        t = 0;
                        const l = h.eq(e);
                        if (_ && i.grid.updateSlide(e, l, u, s),
                        "none" !== l.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                S && (h[e].style[s("width")] = "");
                                const o = getComputedStyle(l[0])
                                  , c = l[0].style.transform
                                  , d = l[0].style.webkitTransform;
                                if (c && (l[0].style.transform = "none"),
                                d && (l[0].style.webkitTransform = "none"),
                                a.roundLengths)
                                    t = i.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
                                else {
                                    const i = n(o, "width")
                                      , s = n(o, "padding-left")
                                      , a = n(o, "padding-right")
                                      , r = n(o, "margin-left")
                                      , c = n(o, "margin-right")
                                      , d = o.getPropertyValue("box-sizing");
                                    if (d && "border-box" === d)
                                        t = i + r + c;
                                    else {
                                        const {clientWidth: n, offsetWidth: o} = l[0];
                                        t = i + s + a + r + c + (o - n)
                                    }
                                }
                                c && (l[0].style.transform = c),
                                d && (l[0].style.webkitTransform = d),
                                a.roundLengths && (t = Math.floor(t))
                            } else
                                t = (o - (a.slidesPerView - 1) * w) / a.slidesPerView,
                                a.roundLengths && (t = Math.floor(t)),
                                h[e] && (h[e].style[s("width")] = t + "px");
                            h[e] && (h[e].swiperSlideSize = t),
                            f.push(t),
                            a.centeredSlides ? (E = E + t / 2 + T / 2 + w,
                            0 === T && 0 !== e && (E = E - o / 2 - w),
                            0 === e && (E = E - o / 2 - w),
                            Math.abs(E) < .001 && (E = 0),
                            a.roundLengths && (E = Math.floor(E)),
                            x % a.slidesPerGroup == 0 && p.push(E),
                            m.push(E)) : (a.roundLengths && (E = Math.floor(E)),
                            (x - Math.min(i.params.slidesPerGroupSkip, x)) % i.params.slidesPerGroup == 0 && p.push(E),
                            m.push(E),
                            E = E + t + w),
                            i.virtualSize += t + w,
                            T = t,
                            x += 1
                        }
                    }
                    if (i.virtualSize = Math.max(i.virtualSize, o) + v,
                    l && c && ("slide" === a.effect || "coverflow" === a.effect) && r.css({
                        width: i.virtualSize + a.spaceBetween + "px"
                    }),
                    a.setWrapperSize && r.css({
                        [s("width")]: i.virtualSize + a.spaceBetween + "px"
                    }),
                    _ && i.grid.updateWrapperSize(t, p, s),
                    !a.centeredSlides) {
                        const s = [];
                        for (let t = 0; t < p.length; t += 1) {
                            let e = p[t];
                            a.roundLengths && (e = Math.floor(e)),
                            p[t] <= i.virtualSize - o && s.push(e)
                        }
                        p = s,
                        1 < Math.floor(i.virtualSize - o) - Math.floor(p[p.length - 1]) && p.push(i.virtualSize - o)
                    }
                    if (0 === p.length && (p = [0]),
                    0 !== a.spaceBetween) {
                        const n = i.isHorizontal() && l ? "marginLeft" : s("marginRight");
                        h.filter((e,t)=>!a.cssMode || t !== h.length - 1).css({
                            [n]: w + "px"
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let t = 0;
                        f.forEach(e=>{
                            t += e + (a.spaceBetween || 0)
                        }
                        );
                        const s = (t -= a.spaceBetween) - o;
                        p = p.map(e=>e < 0 ? -g : e > s ? s + v : e)
                    }
                    if (a.centerInsufficientSlides) {
                        let t = 0;
                        if (f.forEach(e=>{
                            t += e + (a.spaceBetween || 0)
                        }
                        ),
                        (t -= a.spaceBetween) < o) {
                            const s = (o - t) / 2;
                            p.forEach((e,t)=>{
                                p[t] = e - s
                            }
                            ),
                            m.forEach((e,t)=>{
                                m[t] = e + s
                            }
                            )
                        }
                    }
                    if (Object.assign(i, {
                        slides: h,
                        snapGrid: p,
                        slidesGrid: m,
                        slidesSizesGrid: f
                    }),
                    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        C(i.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                        C(i.wrapperEl, "--swiper-centered-offset-after", i.size / 2 - f[f.length - 1] / 2 + "px");
                        const s = -i.snapGrid[0]
                          , n = -i.slidesGrid[0];
                        i.snapGrid = i.snapGrid.map(e=>e + s),
                        i.slidesGrid = i.slidesGrid.map(e=>e + n)
                    }
                    if (u !== e && i.emit("slidesLengthChange"),
                    p.length !== y && (i.params.watchOverflow && i.checkOverflow(),
                    i.emit("snapGridLengthChange")),
                    m.length !== b && i.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && i.updateSlidesOffset(),
                    !(d || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                        const s = a.containerModifierClass + "backface-hidden"
                          , n = i.$el.hasClass(s);
                        u <= a.maxBackfaceHiddenSlides ? n || i.$el.addClass(s) : n && i.$el.removeClass(s)
                    }
                }
            },
            updateAutoHeight: function(e) {
                const i = this
                  , t = []
                  , s = i.virtual && i.params.virtual.enabled;
                let n, a = 0;
                "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                var r = t=>(s ? i.slides.filter(e=>parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t) : i.slides.eq(t))[0];
                if ("auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    if (i.params.centeredSlides)
                        (i.visibleSlides || P([])).each(e=>{
                            t.push(e)
                        }
                        );
                    else
                        for (n = 0; n < Math.ceil(i.params.slidesPerView); n += 1) {
                            const e = i.activeIndex + n;
                            if (e > i.slides.length && !s)
                                break;
                            t.push(r(e))
                        }
                else
                    t.push(r(i.activeIndex));
                for (n = 0; n < t.length; n += 1)
                    if (void 0 !== t[n]) {
                        const e = t[n].offsetHeight;
                        a = e > a ? e : a
                    }
                !a && 0 !== a || i.$wrapperEl.css("height", a + "px")
            },
            updateSlidesOffset: function() {
                const t = this.slides;
                for (let e = 0; e < t.length; e += 1)
                    t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const s = this
                  , n = s.params
                  , {slides: a, rtlTranslate: r, snapGrid: o} = s;
                if (0 !== a.length) {
                    void 0 === a[0].swiperSlideOffset && s.updateSlidesOffset();
                    let i = r ? e : -e;
                    a.removeClass(n.slideVisibleClass),
                    s.visibleSlidesIndexes = [],
                    s.visibleSlides = [];
                    for (let t = 0; t < a.length; t += 1) {
                        const l = a[t];
                        let e = l.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (e -= a[0].swiperSlideOffset);
                        const P = (i + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween)
                          , c = (i - o[0] + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween)
                          , d = -(i - e)
                          , h = d + s.slidesSizesGrid[t];
                        (0 <= d && d < s.size - 1 || 1 < h && h <= s.size || d <= 0 && h >= s.size) && (s.visibleSlides.push(l),
                        s.visibleSlidesIndexes.push(t),
                        a.eq(t).addClass(n.slideVisibleClass)),
                        l.progress = r ? -P : P,
                        l.originalProgress = r ? -c : c
                    }
                    s.visibleSlides = P(s.visibleSlides)
                }
            },
            updateProgress: function(e) {
                var t = this;
                if (void 0 === e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params
                  , s = t.maxTranslate() - t.minTranslate();
                let {progress: n, isBeginning: a, isEnd: r} = t;
                var o = a
                  , l = r;
                r = 0 == s ? (n = 0,
                a = !0) : (n = (e - t.minTranslate()) / s,
                a = n <= 0,
                1 <= n),
                Object.assign(t, {
                    progress: n,
                    isBeginning: a,
                    isEnd: r
                }),
                (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e),
                a && !o && t.emit("reachBeginning toEdge"),
                r && !l && t.emit("reachEnd toEdge"),
                (o && !a || l && !r) && t.emit("fromEdge"),
                t.emit("progress", n)
            },
            updateSlidesClasses: function() {
                const {slides: e, params: t, $wrapperEl: i, activeIndex: s, realIndex: n} = this
                  , a = this.virtual && t.virtual.enabled;
                let r, o = (e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` + t.slideDuplicatePrevClass),
                (r = a ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s)).addClass(t.slideActiveClass),
                t.loop && (r.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`)).addClass(t.slideDuplicateActiveClass),
                r.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass)), l = (t.loop && 0 === o.length && (o = e.eq(0)).addClass(t.slideNextClass),
                r.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass));
                t.loop && 0 === l.length && (l = e.eq(-1)).addClass(t.slidePrevClass),
                t.loop && ((o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicateNextClass),
                (l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicatePrevClass)),
                this.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this
                  , i = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: s, snapGrid: n, params: a, activeIndex: r, realIndex: o, snapIndex: l} = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < s.length; e += 1)
                        void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : i >= s[e] && i < s[e + 1] && (d = e + 1) : i >= s[e] && (d = e);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (0 <= n.indexOf(i))
                    c = n.indexOf(i);
                else {
                    const e = Math.min(a.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / a.slidesPerGroup)
                }
                c >= n.length && (c = n.length - 1),
                d === r ? c !== l && (t.snapIndex = c,
                t.emit("snapIndexChange")) : (e = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10),
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: e,
                    previousIndex: r,
                    activeIndex: d
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== e && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange"))
            },
            updateClickedSlide: function(e) {
                var t = this
                  , i = t.params
                  , s = P(e).closest("." + i.slideClass)[0];
                let n, a = !1;
                if (s)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === s) {
                            a = !0,
                            n = e;
                            break
                        }
                if (!s || !a)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = s,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(P(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n,
                i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var {params: t, rtlTranslate: i, translate: s, $wrapperEl: n} = this;
                if (t.virtualTranslate)
                    return i ? -s : s;
                if (t.cssMode)
                    return s;
                let a = $(n[0], e);
                return (a = i ? -a : a) || 0
            },
            setTranslate: function(e, t) {
                const i = this
                  , {rtlTranslate: s, params: n, $wrapperEl: a, wrapperEl: r, progress: o} = i;
                let l = 0
                  , c = 0;
                i.isHorizontal() ? l = s ? -e : e : c = e,
                n.roundLengths && (l = Math.floor(l),
                c = Math.floor(c)),
                n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -c : n.virtualTranslate || a.transform(`translate3d(${l}px, ${c}px, 0px)`),
                i.previousTranslate = i.translate,
                i.translate = i.isHorizontal() ? l : c;
                var d = i.maxTranslate() - i.minTranslate();
                (0 == d ? 0 : (e - i.minTranslate()) / d) !== o && i.updateProgress(e),
                i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, s, n) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
                const a = this
                  , {params: r, wrapperEl: o} = a;
                if (a.animating && r.preventInteractionOnTransition)
                    return !1;
                var l = a.minTranslate()
                  , c = a.maxTranslate()
                  , l = s && l < e ? l : s && e < c ? c : e;
                if (a.updateProgress(l),
                r.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t)
                        o[e ? "scrollLeft" : "scrollTop"] = -l;
                    else {
                        if (!a.support.smoothScroll)
                            return y({
                                swiper: a,
                                targetPosition: -l,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        o.scrollTo({
                            [e ? "left" : "top"]: -l,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (a.setTransition(0),
                a.setTranslate(l),
                i && (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd"))) : (a.setTransition(t),
                a.setTranslate(l),
                i && (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
                a.animating || (a.animating = !0,
                a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                    a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                    a.onTranslateToWrapperTransitionEnd = null,
                    delete a.onTranslateToWrapperTransitionEnd,
                    i && a.emit("transitionEnd"))
                }
                ),
                a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var i = this["params"];
                i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                l({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var i = this["params"];
                this.animating = !1,
                i.cssMode || (this.setTransition(0),
                l({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: {
            slideTo: function(e, t, i, s, n) {
                if (void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "number" != typeof (e = void 0 === e ? 0 : e) && "string" != typeof e)
                    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t))
                        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let r = e;
                r < 0 && (r = 0);
                const {params: o, snapGrid: l, slidesGrid: c, previousIndex: d, activeIndex: h, rtlTranslate: u, wrapperEl: p, enabled: m} = a;
                if (a.animating && o.preventInteractionOnTransition || !m && !s && !n)
                    return !1;
                e = Math.min(a.params.slidesPerGroupSkip, r);
                let f = e + Math.floor((r - e) / a.params.slidesPerGroup);
                f >= l.length && (f = l.length - 1),
                (h || o.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                var g = -l[f];
                if (a.updateProgress(g),
                o.normalizeSlideIndex)
                    for (let e = 0; e < c.length; e += 1) {
                        const t = -Math.floor(100 * g)
                          , i = Math.floor(100 * c[e])
                          , s = Math.floor(100 * c[e + 1]);
                        void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? r = e : t >= i && t < s && (r = e + 1) : t >= i && (r = e)
                    }
                if (a.initialized && r !== h) {
                    if (!a.allowSlideNext && g < a.translate && g < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (h || 0) !== r)
                        return !1
                }
                let v;
                if (v = r > h ? "next" : r < h ? "prev" : "reset",
                u && -g === a.translate || !u && g === a.translate)
                    return a.updateActiveIndex(r),
                    o.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== o.effect && a.setTranslate(g),
                    "reset" != v && (a.transitionStart(i, v),
                    a.transitionEnd(i, v)),
                    !1;
                if (o.cssMode) {
                    const e = a.isHorizontal()
                      , i = u ? g : -g;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none",
                        a._immediateVirtual = !0),
                        p[e ? "scrollLeft" : "scrollTop"] = i,
                        t && requestAnimationFrame(()=>{
                            a.wrapperEl.style.scrollSnapType = "",
                            a._swiperImmediateVirtual = !1
                        }
                        )
                    } else {
                        if (!a.support.smoothScroll)
                            return y({
                                swiper: a,
                                targetPosition: i,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        p.scrollTo({
                            [e ? "left" : "top"]: i,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return a.setTransition(t),
                a.setTranslate(g),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, s),
                a.transitionStart(i, v),
                0 === t ? a.transitionEnd(i, v) : a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                    a.onSlideToWrapperTransitionEnd = null,
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(i, v))
                }
                ),
                a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)),
                !0
            },
            slideToLoop: function(e, t, i, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                let n = e = void 0 === e ? 0 : e;
                return this.params.loop && (n += this.loopedSlides),
                this.slideTo(n, t, i, s)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var s = this
                  , {animating: n, enabled: a, params: r} = s;
                if (!a)
                    return s;
                let o = r.slidesPerGroup;
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o;
                if (r.loop) {
                    if (n && r.loopPreventsSlide)
                        return !1;
                    s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft
                }
                return r.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + a, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                const s = this
                  , {params: n, animating: a, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: c} = s;
                if (!c)
                    return s;
                if (n.loop) {
                    if (a && n.loopPreventsSlide)
                        return !1;
                    s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const h = d(l ? s.translate : -s.translate)
                  , u = r.map(e=>d(e));
                let p = r[u.indexOf(h) - 1];
                if (void 0 === p && n.cssMode) {
                    let i;
                    r.forEach((e,t)=>{
                        h >= e && (i = t)
                    }
                    ),
                    void 0 !== i && (p = r[0 < i ? i - 1 : i])
                }
                let m = 0;
                if (void 0 !== p && ((m = o.indexOf(p)) < 0 && (m = s.activeIndex - 1),
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1,
                m = Math.max(m, 0))),
                n.rewind && s.isBeginning) {
                    const n = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(n, e, t, i)
                }
                return s.slideTo(m, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed),
                this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, i)
            },
            slideToClosest: function(e, t, i, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = .5);
                var n = this;
                let a = n.activeIndex;
                var r = Math.min(n.params.slidesPerGroupSkip, a)
                  , r = r + Math.floor((a - r) / n.params.slidesPerGroup)
                  , o = n.rtlTranslate ? n.translate : -n.translate;
                if (o >= n.snapGrid[r]) {
                    const e = n.snapGrid[r];
                    o - e > (n.snapGrid[r + 1] - e) * s && (a += n.params.slidesPerGroup)
                } else {
                    const e = n.snapGrid[r - 1];
                    o - e <= (n.snapGrid[r] - e) * s && (a -= n.params.slidesPerGroup)
                }
                return a = Math.max(a, 0),
                a = Math.min(a, n.slidesGrid.length - 1),
                n.slideTo(a, e, t, i)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: i} = e
                  , s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, a = e.clickedIndex;
                t.loop ? e.animating || (n = parseInt(P(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(),
                a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                _(()=>{
                    e.slideTo(a)
                }
                )) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(),
                a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                _(()=>{
                    e.slideTo(a)
                }
                )) : e.slideTo(a)) : e.slideTo(a)
            }
        },
        loop: {
            loopCreate: function() {
                const s = this
                  , t = x()
                  , {params: i, $wrapperEl: e} = s
                  , n = 0 < e.children().length ? P(e.children()[0].parentNode) : e;
                n.children(`.${i.slideClass}.` + i.slideDuplicateClass).remove();
                let a = n.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    const s = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (s !== i.slidesPerGroup) {
                        for (let e = 0; e < s; e += 1) {
                            const s = P(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            n.append(s)
                        }
                        a = n.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length),
                s.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
                s.loopedSlides += i.loopAdditionalSlides,
                s.loopedSlides > a.length && (s.loopedSlides = a.length);
                const r = []
                  , o = [];
                a.each((e,t)=>{
                    const i = P(e);
                    t < s.loopedSlides && o.push(e),
                    t < a.length && t >= a.length - s.loopedSlides && r.push(e),
                    i.attr("data-swiper-slide-index", t)
                }
                );
                for (let e = 0; e < o.length; e += 1)
                    n.append(P(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (let e = r.length - 1; 0 <= e; --e)
                    n.prepend(P(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                var e = this
                  , {activeIndex: t, slides: i, loopedSlides: s, allowSlidePrev: n, allowSlideNext: a, snapGrid: r, rtlTranslate: o} = (e.emit("beforeLoopFix"),
                e);
                let l;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                r = -r[t] - e.getTranslate();
                t < s ? (l = i.length - 3 * s + t,
                l += s,
                e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r)) : t >= i.length - s && (l = -i.length + t + s,
                l += s,
                e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r)),
                e.allowSlidePrev = n,
                e.allowSlideNext = a,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: i} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` + t.slideBlankClass).remove(),
                i.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    t.style.cursor = "move",
                    t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , t = x()
                  , {params: i, support: s} = e;
                e.onTouchStart = function(e) {
                    const s = this
                      , n = x()
                      , a = L()
                      , r = s.touchEventsData
                      , {params: o, touches: l, enabled: t} = s;
                    if (t && (!s.animating || !o.preventInteractionOnTransition)) {
                        !s.animating && o.cssMode && o.loop && s.loopFix();
                        let t = e
                          , i = P((t = t.originalEvent ? t.originalEvent : t).target);
                        if (("wrapper" !== o.touchEventsTarget || i.closest(s.wrapperEl).length) && (r.isTouchEvent = "touchstart" === t.type,
                        (r.isTouchEvent || !("which"in t) || 3 !== t.which) && !(!r.isTouchEvent && "button"in t && 0 < t.button || r.isTouched && r.isMoved))) {
                            o.noSwipingClass && "" !== o.noSwipingClass && t.target && t.target.shadowRoot && e.path && e.path[0] && (i = P(e.path[0]));
                            var c = o.noSwipingSelector || "." + o.noSwipingClass
                              , d = !(!t.target || !t.target.shadowRoot);
                            if (o.noSwiping && (d ? function(s, e) {
                                return function e(t) {
                                    if (!t || t === x() || t === L())
                                        return null;
                                    var i = (t = t.assignedSlot ? t.assignedSlot : t).closest(s);
                                    return i || t.getRootNode ? i || e(t.getRootNode().host) : null
                                }(e = void 0 === e ? this : e)
                            }(c, i[0]) : i.closest(c)[0]))
                                s.allowClick = !0;
                            else if (!o.swipeHandler || i.closest(o.swipeHandler)[0]) {
                                l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX,
                                l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY;
                                var d = l.currentX
                                  , c = l.currentY
                                  , h = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection
                                  , u = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                if (h && (d <= u || d >= a.innerWidth - u)) {
                                    if ("prevent" !== h)
                                        return;
                                    e.preventDefault()
                                }
                                if (Object.assign(r, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                l.startX = d,
                                l.startY = c,
                                r.touchStartTime = v(),
                                s.allowClick = !0,
                                s.updateSize(),
                                s.swipeDirection = void 0,
                                0 < o.threshold && (r.allowThresholdMove = !1),
                                "touchstart" !== t.type) {
                                    let e = !0;
                                    i.is(r.focusableElements) && (e = !1,
                                    "SELECT" === i[0].nodeName && (r.isTouched = !1)),
                                    n.activeElement && P(n.activeElement).is(r.focusableElements) && n.activeElement !== i[0] && n.activeElement.blur();
                                    const x = e && s.allowTouchMove && o.touchStartPreventDefault;
                                    !o.touchStartForcePreventDefault && !x || i[0].isContentEditable || t.preventDefault()
                                }
                                s.params.freeMode && s.params.freeMode.enabled && s.freeMode && s.animating && !o.cssMode && s.freeMode.onTouchStart(),
                                s.emit("touchStart", t)
                            }
                        }
                    }
                }
                .bind(e),
                e.onTouchMove = function(n) {
                    const e = x()
                      , a = this
                      , r = a.touchEventsData
                      , {params: o, touches: l, rtlTranslate: c, enabled: t} = a;
                    if (t) {
                        let s = n;
                        if (s.originalEvent && (s = s.originalEvent),
                        r.isTouched) {
                            if (!r.isTouchEvent || "touchmove" === s.type) {
                                var n = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0])
                                  , d = ("touchmove" === s.type ? n : s).pageX
                                  , n = ("touchmove" === s.type ? n : s).pageY;
                                if (s.preventedByNestedSwiper)
                                    return l.startX = d,
                                    void (l.startY = n);
                                if (!a.allowTouchMove)
                                    return P(s.target).is(r.focusableElements) || (a.allowClick = !1),
                                    void (r.isTouched && (Object.assign(l, {
                                        startX: d,
                                        startY: n,
                                        currentX: d,
                                        currentY: n
                                    }),
                                    r.touchStartTime = v()));
                                if (r.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                                    if (a.isVertical()) {
                                        if (n < l.startY && a.translate <= a.maxTranslate() || n > l.startY && a.translate >= a.minTranslate())
                                            return r.isTouched = !1,
                                            void (r.isMoved = !1)
                                    } else if (d < l.startX && a.translate <= a.maxTranslate() || d > l.startX && a.translate >= a.minTranslate())
                                        return;
                                if (r.isTouchEvent && e.activeElement && s.target === e.activeElement && P(s.target).is(r.focusableElements))
                                    return r.isMoved = !0,
                                    void (a.allowClick = !1);
                                if (r.allowTouchCallbacks && a.emit("touchMove", s),
                                !(s.targetTouches && 1 < s.targetTouches.length)) {
                                    l.currentX = d,
                                    l.currentY = n;
                                    var i, d = l.currentX - l.startX, n = l.currentY - l.startY;
                                    if (!(a.params.threshold && Math.sqrt(d ** 2 + n ** 2) < a.params.threshold))
                                        if (void 0 === r.isScrolling && (a.isHorizontal() && l.currentY === l.startY || a.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : 25 <= d * d + n * n && (i = 180 * Math.atan2(Math.abs(n), Math.abs(d)) / Math.PI,
                                        r.isScrolling = a.isHorizontal() ? i > o.touchAngle : 90 - i > o.touchAngle)),
                                        r.isScrolling && a.emit("touchMoveOpposite", s),
                                        void 0 !== r.startMoving || l.currentX === l.startX && l.currentY === l.startY || (r.startMoving = !0),
                                        r.isScrolling)
                                            r.isTouched = !1;
                                        else if (r.startMoving) {
                                            a.allowClick = !1,
                                            !o.cssMode && s.cancelable && s.preventDefault(),
                                            o.touchMoveStopPropagation && !o.nested && s.stopPropagation(),
                                            r.isMoved || (o.loop && !o.cssMode && a.loopFix(),
                                            r.startTranslate = a.getTranslate(),
                                            a.setTransition(0),
                                            a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                            r.allowMomentumBounce = !1,
                                            !o.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
                                            a.emit("sliderFirstMove", s)),
                                            a.emit("sliderMove", s),
                                            r.isMoved = !0;
                                            let e = a.isHorizontal() ? d : n
                                              , t = (l.diff = e,
                                            e *= o.touchRatio,
                                            c && (e = -e),
                                            a.swipeDirection = 0 < e ? "prev" : "next",
                                            r.currentTranslate = e + r.startTranslate,
                                            !0)
                                              , i = o.resistanceRatio;
                                            if (o.touchReleaseOnEdges && (i = 0),
                                            0 < e && r.currentTranslate > a.minTranslate() ? (t = !1,
                                            o.resistance && (r.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + r.startTranslate + e) ** i)) : e < 0 && r.currentTranslate < a.maxTranslate() && (t = !1,
                                            o.resistance && (r.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - r.startTranslate - e) ** i)),
                                            t && (s.preventedByNestedSwiper = !0),
                                            !a.allowSlideNext && "next" === a.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
                                            !a.allowSlidePrev && "prev" === a.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
                                            a.allowSlidePrev || a.allowSlideNext || (r.currentTranslate = r.startTranslate),
                                            0 < o.threshold) {
                                                if (!(Math.abs(e) > o.threshold || r.allowThresholdMove))
                                                    return void (r.currentTranslate = r.startTranslate);
                                                if (!r.allowThresholdMove)
                                                    return r.allowThresholdMove = !0,
                                                    l.startX = l.currentX,
                                                    l.startY = l.currentY,
                                                    r.currentTranslate = r.startTranslate,
                                                    void (l.diff = a.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                                            }
                                            o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && a.freeMode || o.watchSlidesProgress) && (a.updateActiveIndex(),
                                            a.updateSlidesClasses()),
                                            a.params.freeMode && o.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(),
                                            a.updateProgress(r.currentTranslate),
                                            a.setTranslate(r.currentTranslate))
                                        }
                                }
                            }
                        } else
                            r.startMoving && r.isScrolling && a.emit("touchMoveOpposite", s)
                    }
                }
                .bind(e),
                e.onTouchEnd = function(a) {
                    const r = this
                      , e = r.touchEventsData
                      , {params: o, touches: t, rtlTranslate: i, slidesGrid: l, enabled: s} = r;
                    if (s) {
                        let n = a;
                        if (n.originalEvent && (n = n.originalEvent),
                        e.allowTouchCallbacks && r.emit("touchEnd", n),
                        e.allowTouchCallbacks = !1,
                        !e.isTouched)
                            return e.isMoved && o.grabCursor && r.setGrabCursor(!1),
                            e.isMoved = !1,
                            void (e.startMoving = !1);
                        o.grabCursor && e.isMoved && e.isTouched && (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) && r.setGrabCursor(!1);
                        var c, d = v(), h = d - e.touchStartTime;
                        if (r.allowClick) {
                            const a = n.path || n.composedPath && n.composedPath();
                            r.updateClickedSlide(a && a[0] || n.target),
                            r.emit("tap click", n),
                            h < 300 && d - e.lastClickTime < 300 && r.emit("doubleTap doubleClick", n)
                        }
                        if (e.lastClickTime = v(),
                        _(()=>{
                            r.destroyed || (r.allowClick = !0)
                        }
                        ),
                        !e.isTouched || !e.isMoved || !r.swipeDirection || 0 === t.diff || e.currentTranslate === e.startTranslate)
                            return e.isTouched = !1,
                            e.isMoved = !1,
                            void (e.startMoving = !1);
                        if (e.isTouched = !1,
                        e.isMoved = !1,
                        e.startMoving = !1,
                        c = o.followFinger ? i ? r.translate : -r.translate : -e.currentTranslate,
                        !o.cssMode)
                            if (r.params.freeMode && o.freeMode.enabled)
                                r.freeMode.onTouchEnd({
                                    currentPos: c
                                });
                            else {
                                let t = 0
                                  , i = r.slidesSizesGrid[0];
                                for (let e = 0; e < l.length; e += e < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
                                    const r = e < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                                    void 0 !== l[e + r] ? c >= l[e] && c < l[e + r] && (t = e,
                                    i = l[e + r] - l[e]) : c >= l[e] && (t = e,
                                    i = l[l.length - 1] - l[l.length - 2])
                                }
                                let e = null
                                  , s = null;
                                o.rewind && (r.isBeginning ? s = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1 : r.isEnd && (e = 0));
                                a = (c - l[t]) / i,
                                d = t < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                                h > o.longSwipesMs ? o.longSwipes ? ("next" === r.swipeDirection && (a >= o.longSwipesRatio ? r.slideTo(o.rewind && r.isEnd ? e : t + d) : r.slideTo(t)),
                                "prev" === r.swipeDirection && (a > 1 - o.longSwipesRatio ? r.slideTo(t + d) : null !== s && a < 0 && Math.abs(a) > o.longSwipesRatio ? r.slideTo(s) : r.slideTo(t))) : r.slideTo(r.activeIndex) : o.shortSwipes ? !r.navigation || n.target !== r.navigation.nextEl && n.target !== r.navigation.prevEl ? ("next" === r.swipeDirection && r.slideTo(null !== e ? e : t + d),
                                "prev" === r.swipeDirection && r.slideTo(null !== s ? s : t)) : n.target === r.navigation.nextEl ? r.slideTo(t + d) : r.slideTo(t) : r.slideTo(r.activeIndex)
                            }
                    }
                }
                .bind(e),
                i.cssMode && (e.onScroll = function() {
                    var e = this
                      , {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
                    s && (e.previousTranslate = e.translate,
                    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
                    0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (0 == (s = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / s) !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1))
                }
                .bind(e)),
                e.onClick = function(e) {
                    this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                .bind(e),
                s.touch && !f && (t.addEventListener("touchstart", D),
                f = !0),
                g(e, "on")
            },
            detachEvents: function() {
                g(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: i, loopedSlides: s=0, params: n, $el: a} = e
                  , r = n.breakpoints;
                var o, l, c, d, h;
                !r || 0 === Object.keys(r).length || (o = e.getBreakpoint(r, e.params.breakpointsBase, e.el)) && e.currentBreakpoint !== o && (l = (o in r ? r[o] : void 0) || e.originalParams,
                h = b(e, n),
                d = b(e, l),
                c = n.enabled,
                h && !d ? (a.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !h && d && (a.addClass(n.containerModifierClass + "grid"),
                (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && a.addClass(n.containerModifierClass + "grid-column"),
                e.emitContainerClasses()),
                h = l.direction && l.direction !== n.direction,
                d = n.loop && (l.slidesPerView !== n.slidesPerView || h),
                h && i && e.changeDirection(),
                u(e.params, l),
                h = e.params.enabled,
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                c && !h ? e.disable() : !c && h && e.enable(),
                e.currentBreakpoint = o,
                e.emit("_beforeBreakpoint", l),
                d && i && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l))
            },
            getBreakpoint: function(e, i, s) {
                if (void 0 === i && (i = "window"),
                e && ("container" !== i || s)) {
                    let t = !1;
                    const n = L()
                      , a = "window" === i ? n.innerHeight : s.clientHeight
                      , r = Object.keys(e).map(e=>{
                        var t;
                        return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)),
                        {
                            value: a * t,
                            point: e
                        }) : {
                            value: e,
                            point: e
                        }
                    }
                    );
                    r.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < r.length; e += 1) {
                        const {point: L, value: a} = r[e];
                        "window" === i ? n.matchMedia(`(min-width: ${a}px)`).matches && (t = L) : a <= s.clientWidth && (t = L)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: i} = e
                  , s = i["slidesOffsetBefore"];
                if (s) {
                    const t = e.slides.length - 1
                      , i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                    e.isLocked = e.size > i
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const {classNames: e, params: t, rtl: i, $el: s, device: n, support: a} = this
                  , r = function(e, i) {
                    const s = [];
                    return e.forEach(t=>{
                        "object" == typeof t ? Object.keys(t).forEach(e=>{
                            t[e] && s.push(i + e)
                        }
                        ) : "string" == typeof t && s.push(i + t)
                    }
                    ),
                    s
                }(["initialized", t.direction, {
                    "pointer-events": !a.touch
                }, {
                    "free-mode": this.params.freeMode && t.freeMode.enabled
                }, {
                    autoheight: t.autoHeight
                }, {
                    rtl: i
                }, {
                    grid: t.grid && 1 < t.grid.rows
                }, {
                    "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
                }, {
                    android: n.android
                }, {
                    ios: n.ios
                }, {
                    "css-mode": t.cssMode
                }, {
                    centered: t.cssMode && t.centeredSlides
                }, {
                    "watch-progress": t.watchSlidesProgress
                }], t.containerModifierClass);
                e.push(...r),
                s.addClass([...e].join(" ")),
                this.emitContainerClasses()
            },
            removeClasses: function() {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, i, s, n, a) {
                const r = L();
                let o;
                function l() {
                    a && a()
                }
                !(P(e).parent("picture")[0] || e.complete && n) && t ? ((o = new r.Image).onload = l,
                o.onerror = l,
                s && (o.sizes = s),
                i && (o.srcset = i),
                t && (o.src = t)) : l()
            },
            preloadImages: function() {
                const t = this;
                function i() {
                    null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                    t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                    t.emit("imagesReady")))
                }
                t.imagesToLoad = t.$el.find("img");
                for (let e = 0; e < t.imagesToLoad.length; e += 1) {
                    const s = t.imagesToLoad[e];
                    t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, i)
                }
            }
        }
    }
      , T = {};
    class S {
        constructor() {
            let t, i;
            for (var p, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                s[n] = arguments[n];
            if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? i = s[0] : [t,i] = s,
            i = u({}, i = i || {}),
            t && !i.el && (i.el = t),
            i.el && 1 < P(i.el).length) {
                const t = [];
                return P(i.el).each(e=>{
                    e = u({}, i, {
                        el: e
                    });
                    t.push(new S(e))
                }
                ),
                t
            }
            const a = this
              , r = (a.__swiper__ = !0,
            a.support = m(),
            a.device = (void 0 === (p = {
                userAgent: i.userAgent
            }) && (p = {}),
            d = d || function() {
                var e = (void 0 === p ? {} : p)["userAgent"];
                const t = m()
                  , i = L()
                  , s = i.navigator.platform
                  , n = e || i.navigator.userAgent
                  , a = {
                    ios: !1,
                    android: !1
                }
                  , r = i.screen.width
                  , o = i.screen.height
                  , l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = n.match(/(iPad).*OS\s([\d_]+)/);
                var e = n.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , d = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , h = "Win32" === s;
                let u = "MacIntel" === s;
                return !c && u && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(r + "x" + o) && (c = (c = n.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"],
                u = !1),
                l && !h && (a.os = "android",
                a.android = !0),
                (c || d || e) && (a.os = "ios",
                a.ios = !0),
                a
            }()),
            a.browser = h = h || function() {
                const t = L();
                return {
                    isSafari: function() {
                        const e = t.navigator.userAgent.toLowerCase();
                        return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                }
            }(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules),
            {});
            a.modules.forEach(e=>{
                var s, n;
                e({
                    swiper: a,
                    extendParams: (s = i,
                    n = r,
                    function(e) {
                        void 0 === e && (e = {});
                        var t = Object.keys(e)[0]
                          , i = e[t];
                        "object" == typeof i && null !== i && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === s[t] && (s[t] = {
                            auto: !0
                        }),
                        t in s && "enabled"in i && (!0 === s[t] && (s[t] = {
                            enabled: !0
                        }),
                        "object" != typeof s[t] || "enabled"in s[t] || (s[t].enabled = !0),
                        s[t] || (s[t] = {
                            enabled: !1
                        }))),
                        u(n, e)
                    }
                    ),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }
            );
            var o, l = u({}, w, r);
            return a.params = u({}, l, T, i),
            a.originalParams = u({}, a.params),
            a.passedParams = u({}, i),
            a.params && a.params.on && Object.keys(a.params.on).forEach(e=>{
                a.on(e, a.params.on[e])
            }
            ),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            a.$ = P,
            Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: P(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === a.params.direction,
                isVertical: ()=>"vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"],
                o = ["pointerdown", "pointermove", "pointerup"],
                a.touchEventsTouch = {
                    start: l[0],
                    move: l[1],
                    end: l[2],
                    cancel: l[3]
                },
                a.touchEventsDesktop = {
                    start: o[0],
                    move: o[1],
                    end: o[2]
                },
                a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: v(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
        }
        enable() {
            this.enabled || (this.enabled = !0,
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"))
        }
        disable() {
            this.enabled && (this.enabled = !1,
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"))
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            var i = this.minTranslate()
              , e = (this.maxTranslate() - i) * e + i;
            this.translateTo(e, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        }
        emitContainerClasses() {
            const t = this;
            if (t.params._emitClasses && t.el) {
                const e = t.el.className.split(" ").filter(e=>0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
                t.emit("_containerClasses", e.join(" "))
            }
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            const i = this;
            if (i.params._emitClasses && i.el) {
                const s = [];
                i.slides.each(e=>{
                    var t = i.getSlideClasses(e);
                    s.push({
                        slideEl: e,
                        classNames: t
                    }),
                    i.emit("_slideClass", e, t)
                }
                ),
                i.emit("_slideClasses", s)
            }
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"),
            void 0 === t && (t = !1);
            var {params: i, slides: s, slidesGrid: n, slidesSizesGrid: a, size: r, activeIndex: o} = this;
            let l = 1;
            if (i.centeredSlides) {
                let t, i = s[o].swiperSlideSize;
                for (let e = o + 1; e < s.length; e += 1)
                    s[e] && !t && (i += s[e].swiperSlideSize,
                    l += 1,
                    i > r && (t = !0));
                for (let e = o - 1; 0 <= e; --e)
                    s[e] && !t && (i += s[e].swiperSlideSize,
                    l += 1,
                    i > r && (t = !0))
            } else if ("current" === e)
                for (let e = o + 1; e < s.length; e += 1)
                    (t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1);
            else
                for (let e = o - 1; 0 <= e; --e)
                    n[o] - n[e] < r && (l += 1);
            return l
        }
        update() {
            const t = this;
            var e, i;
            function s() {
                var e = t.rtlTranslate ? -1 * t.translate : t.translate
                  , e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(e),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            }
            t && !t.destroyed && ({snapGrid: e, params: i} = t,
            i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode && t.params.freeMode.enabled ? (s(),
            t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || s(),
            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
            t.emit("update"))
        }
        changeDirection(t, e) {
            void 0 === e && (e = !0);
            var i = this
              , s = i.params.direction;
            return (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass("" + i.params.containerModifierClass + s).addClass("" + i.params.containerModifierClass + t),
            i.emitContainerClasses(),
            i.params.direction = t,
            i.slides.each(e=>{
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            }
            ),
            i.emit("changeDirection"),
            e && i.update()),
            i
        }
        mount(t) {
            const e = this;
            if (e.mounted)
                return !0;
            const i = P(t || e.params.el);
            if (!(t = i[0]))
                return !1;
            t.swiper = e;
            const s = ()=>"." + (e.params.wrapperClass || "").trim().split(" ").join(".");
            let n = (()=>{
                if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                    const e = P(t.shadowRoot.querySelector(s()));
                    return e.children = e=>i.children(e),
                    e
                }
                return (i.children ? i : P(i)).children(s())
            }
            )();
            if (0 === n.length && e.params.createElements) {
                const t = x().createElement("div");
                n = P(t),
                t.className = e.params.wrapperClass,
                i.append(t),
                i.children("." + e.params.slideClass).each(e=>{
                    n.append(e)
                }
                )
            }
            return Object.assign(e, {
                $el: i,
                el: t,
                $wrapperEl: n,
                wrapperEl: n[0],
                mounted: !0,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === n.css("display")
            }),
            !0
        }
        init(e) {
            var t = this;
            return t.initialized || !1 !== t.mount(e) && (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            const i = this
              , {params: s, $el: n, $wrapperEl: a, slides: r} = i;
            if (void 0 !== i.params && !i.destroyed) {
                if (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t && (i.removeClasses(),
                n.removeAttr("style"),
                a.removeAttr("style"),
                r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(e=>{
                    i.off(e)
                }
                ),
                !1 !== e) {
                    i.$el[0].swiper = null;
                    {
                        const o = i;
                        Object.keys(o).forEach(e=>{
                            try {
                                o[e] = null
                            } catch (e) {}
                            try {
                                delete o[e]
                            } catch (e) {}
                        }
                        )
                    }
                }
                i.destroyed = !0
            }
            return null
        }
        static extendDefaults(e) {
            u(T, e)
        }
        static get extendedDefaults() {
            return T
        }
        static get defaults() {
            return w
        }
        static installModule(e) {
            S.prototype.__modules__ || (S.prototype.__modules__ = []);
            const t = S.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? e.forEach(e=>S.installModule(e)) : S.installModule(e),
            S
        }
    }
    function k(i, s, n, a) {
        const r = x();
        return i.params.createElements && Object.keys(a).forEach(t=>{
            if (!n[t] && !0 === n.auto) {
                let e = i.$el.children("." + a[t])[0];
                e || ((e = r.createElement("div")).className = a[t],
                i.$el.append(e)),
                n[t] = e,
                s[t] = e
            }
        }
        ),
        n
    }
    function A(e) {
        return "." + (e = void 0 === e ? "" : e).trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }
    function M(e) {
        const {effect: i, swiper: s, on: t, setTranslate: n, setTransition: a, overwriteParams: r, perspective: o, recreateShadows: l, getEffectParams: c} = e;
        let d;
        t("beforeInit", ()=>{
            var e;
            s.params.effect === i && (s.classNames.push("" + s.params.containerModifierClass + i),
            o && o() && s.classNames.push(s.params.containerModifierClass + "3d"),
            e = r ? r() : {},
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e))
        }
        ),
        t("setTranslate", ()=>{
            s.params.effect === i && n()
        }
        ),
        t("setTransition", (e,t)=>{
            s.params.effect === i && a(t)
        }
        ),
        t("transitionEnd", ()=>{
            s.params.effect === i && l && c && c().slideShadows && (s.slides.each(e=>{
                s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
            }
            ),
            l())
        }
        ),
        t("virtualUpdate", ()=>{
            s.params.effect === i && (s.slides.length || (d = !0),
            requestAnimationFrame(()=>{
                d && s.slides && s.slides.length && (n(),
                d = !1)
            }
            ))
        }
        )
    }
    function I(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function O(e) {
        let {swiper: s, duration: t, transformEl: n, allSlides: a} = e;
        const {slides: r, activeIndex: o, $wrapperEl: l} = s;
        if (s.params.virtualTranslate && 0 !== t) {
            let e, i = !1;
            (e = a ? n ? r.find(n) : r : n ? r.eq(o).find(n) : r.eq(o)).transitionEnd(()=>{
                if (!i && s && !s.destroyed) {
                    i = !0,
                    s.animating = !1;
                    var t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1)
                        l.trigger(t[e])
                }
            }
            )
        }
    }
    function z(e, t, i) {
        const s = "swiper-slide-shadow" + (i ? "-" + i : "")
          , n = e.transformEl ? t.find(e.transformEl) : t;
        let a = n.children("." + s);
        return a.length || (a = P(`<div class="swiper-slide-shadow${i ? "-" + i : ""}"></div>`),
        n.append(a)),
        a
    }
    return Object.keys(E).forEach(t=>{
        Object.keys(E[t]).forEach(e=>{
            S.prototype[e] = E[t][e]
        }
        )
    }
    ),
    S.use([function(e) {
        let {swiper: a, on: t, emit: i} = e;
        const s = L();
        let n = null
          , r = null;
        const o = ()=>{
            a && !a.destroyed && a.initialized && (i("beforeResize"),
            i("resize"))
        }
          , l = ()=>{
            a && !a.destroyed && a.initialized && i("orientationchange")
        }
        ;
        t("init", ()=>{
            a.params.resizeObserver && void 0 !== s.ResizeObserver ? a && !a.destroyed && a.initialized && (n = new ResizeObserver(i=>{
                r = s.requestAnimationFrame(()=>{
                    var {width: e, height: t} = a;
                    let s = e
                      , n = t;
                    i.forEach(e=>{
                        var {contentBoxSize: e, contentRect: t, target: i} = e;
                        i && i !== a.el || (s = t ? t.width : (e[0] || e).inlineSize,
                        n = t ? t.height : (e[0] || e).blockSize)
                    }
                    ),
                    s === e && n === t || o()
                }
                )
            }
            )).observe(a.el) : (s.addEventListener("resize", o),
            s.addEventListener("orientationchange", l))
        }
        ),
        t("destroy", ()=>{
            r && s.cancelAnimationFrame(r),
            n && n.unobserve && a.el && (n.unobserve(a.el),
            n = null),
            s.removeEventListener("resize", o),
            s.removeEventListener("orientationchange", l)
        }
        )
    }
    , function(e) {
        let {swiper: i, extendParams: t, on: s, emit: n} = e;
        function a(e, t) {
            void 0 === t && (t = {});
            const i = new (o.MutationObserver || o.WebkitMutationObserver)(e=>{
                var t;
                1 === e.length ? n("observerUpdate", e[0]) : (t = function() {
                    n("observerUpdate", e[0])
                }
                ,
                o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0))
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            r.push(i)
        }
        const r = []
          , o = L();
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        s("init", ()=>{
            if (i.params.observer) {
                if (i.params.observeParents) {
                    var t = i.$el.parents();
                    for (let e = 0; e < t.length; e += 1)
                        a(t[e])
                }
                a(i.$el[0], {
                    childList: i.params.observeSlideChildren
                }),
                a(i.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        ),
        s("destroy", ()=>{
            r.forEach(e=>{
                e.disconnect()
            }
            ),
            r.splice(0, r.length)
        }
        )
    }
    ]),
    S.use([function(e) {
        let t, {swiper: E, extendParams: i, on: s, emit: T} = e;
        function x(e, t) {
            const i = E.params.virtual;
            if (i.cache && E.virtual.cache[t])
                return E.virtual.cache[t];
            const s = i.renderSlide ? P(i.renderSlide.call(E, e, t)) : P(`<div class="${E.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (E.virtual.cache[t] = s),
            s
        }
        function r(t) {
            const {slidesPerView: e, slidesPerGroup: i, centeredSlides: s} = E.params
              , {addSlidesBefore: n, addSlidesAfter: a} = E.params.virtual
              , {from: r, to: o, slides: l, slidesGrid: c, offset: d} = E.virtual;
            E.params.cssMode || E.updateActiveIndex();
            var h = E.activeIndex || 0;
            let u, p, m;
            u = E.rtlTranslate ? "right" : E.isHorizontal() ? "left" : "top",
            m = s ? (p = Math.floor(e / 2) + i + a,
            Math.floor(e / 2) + i + n) : (p = e + (i - 1) + a,
            i + n);
            const f = Math.max((h || 0) - m, 0)
              , g = Math.min((h || 0) + p, l.length - 1)
              , v = (E.slidesGrid[f] || 0) - (E.slidesGrid[0] || 0);
            function y() {
                E.updateSlides(),
                E.updateProgress(),
                E.updateSlidesClasses(),
                E.lazy && E.params.lazy.enabled && E.lazy.load(),
                T("virtualUpdate")
            }
            if (Object.assign(E.virtual, {
                from: f,
                to: g,
                offset: v,
                slidesGrid: E.slidesGrid
            }),
            r === f && o === g && !t)
                return E.slidesGrid !== c && v !== d && E.slides.css(u, v + "px"),
                E.updateProgress(),
                void T("virtualUpdate");
            if (E.params.virtual.renderExternal)
                return E.params.virtual.renderExternal.call(E, {
                    offset: v,
                    from: f,
                    to: g,
                    slides: function() {
                        const t = [];
                        for (let e = f; e <= g; e += 1)
                            t.push(l[e]);
                        return t
                    }()
                }),
                void (E.params.virtual.renderExternalUpdate ? y() : T("virtualUpdate"));
            const b = []
              , w = [];
            if (t)
                E.$wrapperEl.find("." + E.params.slideClass).remove();
            else
                for (let e = r; e <= o; e += 1)
                    (e < f || e > g) && E.$wrapperEl.find(`.${E.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let e = 0; e < l.length; e += 1)
                e >= f && e <= g && (void 0 === o || t ? w.push(e) : (e > o && w.push(e),
                e < r && b.push(e)));
            w.forEach(e=>{
                E.$wrapperEl.append(x(l[e], e))
            }
            ),
            b.sort((e,t)=>t - e).forEach(e=>{
                E.$wrapperEl.prepend(x(l[e], e))
            }
            ),
            E.$wrapperEl.children(".swiper-slide").css(u, v + "px"),
            y()
        }
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        E.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        s("beforeInit", ()=>{
            E.params.virtual.enabled && (E.virtual.slides = E.params.virtual.slides,
            E.classNames.push(E.params.containerModifierClass + "virtual"),
            E.params.watchSlidesProgress = !0,
            E.originalParams.watchSlidesProgress = !0,
            E.params.initialSlide || r())
        }
        ),
        s("setTranslate", ()=>{
            E.params.virtual.enabled && (E.params.cssMode && !E._immediateVirtual ? (clearTimeout(t),
            t = setTimeout(()=>{
                r()
            }
            , 100)) : r())
        }
        ),
        s("init update resize", ()=>{
            E.params.virtual.enabled && E.params.cssMode && C(E.wrapperEl, "--swiper-virtual-size", E.virtualSize + "px")
        }
        ),
        Object.assign(E.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length"in t)
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && E.virtual.slides.push(t[e]);
                else
                    E.virtual.slides.push(t);
                r(!0)
            },
            prependSlide: function(s) {
                const n = E.activeIndex;
                let e = n + 1
                  , a = 1;
                if (Array.isArray(s)) {
                    for (let e = 0; e < s.length; e += 1)
                        s[e] && E.virtual.slides.unshift(s[e]);
                    e = n + s.length,
                    a = s.length
                } else
                    E.virtual.slides.unshift(s);
                if (E.params.virtual.cache) {
                    const s = E.virtual.cache
                      , n = {};
                    Object.keys(s).forEach(e=>{
                        const t = s[e]
                          , i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + a),
                        n[parseInt(e, 10) + a] = t
                    }
                    ),
                    E.virtual.cache = n
                }
                r(!0),
                E.slideTo(e, 0)
            },
            removeSlide: function(i) {
                if (null != i) {
                    let t = E.activeIndex;
                    if (Array.isArray(i))
                        for (let e = i.length - 1; 0 <= e; --e)
                            E.virtual.slides.splice(i[e], 1),
                            E.params.virtual.cache && delete E.virtual.cache[i[e]],
                            i[e] < t && --t,
                            t = Math.max(t, 0);
                    else
                        E.virtual.slides.splice(i, 1),
                        E.params.virtual.cache && delete E.virtual.cache[i],
                        i < t && --t,
                        t = Math.max(t, 0);
                    r(!0),
                    E.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                E.virtual.slides = [],
                E.params.virtual.cache && (E.virtual.cache = {}),
                r(!0),
                E.slideTo(0, 0)
            },
            update: r
        })
    }
    , function(e) {
        let {swiper: h, extendParams: t, on: i, emit: u} = e;
        const p = x()
          , m = L();
        function s(t) {
            if (h.enabled) {
                const i = h["rtlTranslate"];
                let e = t;
                const s = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode
                  , n = h.params.keyboard.pageUpDown
                  , a = n && 33 === s
                  , r = n && 34 === s
                  , o = 37 === s
                  , l = 39 === s
                  , c = 38 === s
                  , d = 40 === s;
                if (!h.allowSlideNext && (h.isHorizontal() && l || h.isVertical() && d || r))
                    return !1;
                if (!h.allowSlidePrev && (h.isHorizontal() && o || h.isVertical() && c || a))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || p.activeElement && p.activeElement.nodeName && ("input" === p.activeElement.nodeName.toLowerCase() || "textarea" === p.activeElement.nodeName.toLowerCase()))) {
                    if (h.params.keyboard.onlyInViewport && (a || r || o || l || c || d)) {
                        let t = !1;
                        if (0 < h.$el.parents("." + h.params.slideClass).length && 0 === h.$el.parents("." + h.params.slideActiveClass).length)
                            return;
                        const e = h.$el
                          , s = e[0].clientWidth
                          , n = e[0].clientHeight
                          , u = m.innerWidth
                          , p = m.innerHeight
                          , a = h.$el.offset()
                          , r = (i && (a.left -= h.$el[0].scrollLeft),
                        [[a.left, a.top], [a.left + s, a.top], [a.left, a.top + n], [a.left + s, a.top + n]]);
                        for (let e = 0; e < r.length; e += 1) {
                            const i = r[e];
                            0 <= i[0] && i[0] <= u && 0 <= i[1] && i[1] <= p && (0 === i[0] && 0 === i[1] || (t = !0))
                        }
                        if (!t)
                            return
                    }
                    h.isHorizontal() ? ((a || r || o || l) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    ((r || l) && !i || (a || o) && i) && h.slideNext(),
                    ((a || o) && !i || (r || l) && i) && h.slidePrev()) : ((a || r || c || d) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (r || d) && h.slideNext(),
                    (a || c) && h.slidePrev()),
                    u("keyPress", s)
                }
            }
        }
        function n() {
            h.keyboard.enabled || (P(p).on("keydown", s),
            h.keyboard.enabled = !0)
        }
        function a() {
            h.keyboard.enabled && (P(p).off("keydown", s),
            h.keyboard.enabled = !1)
        }
        h.keyboard = {
            enabled: !1
        },
        t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", ()=>{
            h.params.keyboard.enabled && n()
        }
        ),
        i("destroy", ()=>{
            h.keyboard.enabled && a()
        }
        ),
        Object.assign(h.keyboard, {
            enable: n,
            disable: a
        })
    }
    , function(e) {
        let {swiper: c, extendParams: t, on: i, emit: d} = e;
        const s = L();
        let h;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        c.mousewheel = {
            enabled: !1
        };
        let u, n = v();
        const p = [];
        function a() {
            c.enabled && (c.mouseEntered = !0)
        }
        function r() {
            c.enabled && (c.mouseEntered = !1)
        }
        function m(e) {
            c.params.mousewheel.thresholdDelta && e.delta < c.params.mousewheel.thresholdDelta || c.params.mousewheel.thresholdTime && v() - n < c.params.mousewheel.thresholdTime || 6 <= e.delta && v() - n < 60 || (e.direction < 0 ? c.isEnd && !c.params.loop || c.animating || (c.slideNext(),
            d("scroll", e.raw)) : c.isBeginning && !c.params.loop || c.animating || (c.slidePrev(),
            d("scroll", e.raw)),
            n = (new s.Date).getTime())
        }
        function o(s) {
            let n = s
              , a = !0;
            if (c.enabled) {
                var r = c.params.mousewheel;
                c.params.cssMode && n.preventDefault();
                let e = c.$el;
                if ("container" !== c.params.mousewheel.eventsTarget && (e = P(c.params.mousewheel.eventsTarget)),
                !c.mouseEntered && !e[0].contains(n.target) && !r.releaseOnEdges)
                    return !0;
                n.originalEvent && (n = n.originalEvent);
                let t = 0;
                var o = c.rtlTranslate ? -1 : 1
                  , l = function(e) {
                    let t = 0
                      , i = 0
                      , s = 0
                      , n = 0;
                    return "detail"in e && (i = e.detail),
                    "wheelDelta"in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
                    i = 0),
                    s = 10 * t,
                    n = 10 * i,
                    "deltaY"in e && (n = e.deltaY),
                    "deltaX"in e && (s = e.deltaX),
                    e.shiftKey && !s && (s = n,
                    n = 0),
                    (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
                    n *= 40) : (s *= 800,
                    n *= 800)),
                    s && !t && (t = s < 1 ? -1 : 1),
                    n && !i && (i = n < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: n
                    }
                }(n);
                if (r.forceToAxis)
                    if (c.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                            return !0;
                        t = -l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                            return !0;
                        t = -l.pixelY
                    }
                else
                    t = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 === t)
                    return !0;
                r.invert && (t = -t);
                let i = c.getTranslate() + t * r.sensitivity;
                if ((i = i >= c.minTranslate() ? c.minTranslate() : i) <= c.maxTranslate() && (i = c.maxTranslate()),
                (a = !!c.params.loop || !(i === c.minTranslate() || i === c.maxTranslate())) && c.params.nested && n.stopPropagation(),
                c.params.freeMode && c.params.freeMode.enabled) {
                    const s = {
                        time: v(),
                        delta: Math.abs(t),
                        direction: Math.sign(t)
                    }
                      , a = u && s.time < u.time + 500 && s.delta <= u.delta && s.direction === u.direction;
                    if (!a) {
                        u = void 0,
                        c.params.loop && c.loopFix();
                        let e = c.getTranslate() + t * r.sensitivity;
                        const P = c.isBeginning
                          , v = c.isEnd;
                        if ((e = e >= c.minTranslate() ? c.minTranslate() : e) <= c.maxTranslate() && (e = c.maxTranslate()),
                        c.setTransition(0),
                        c.setTranslate(e),
                        c.updateProgress(),
                        c.updateActiveIndex(),
                        c.updateSlidesClasses(),
                        (!P && c.isBeginning || !v && c.isEnd) && c.updateSlidesClasses(),
                        c.params.freeMode.sticky) {
                            clearTimeout(h),
                            h = void 0,
                            15 <= p.length && p.shift();
                            const n = p.length ? p[p.length - 1] : void 0
                              , a = p[0];
                            if (p.push(s),
                            n && (s.delta > n.delta || s.direction !== n.direction))
                                p.splice(0);
                            else if (15 <= p.length && s.time - a.time < 500 && 1 <= a.delta - s.delta && s.delta <= 6) {
                                const n = 0 < t ? .8 : .2;
                                u = s,
                                p.splice(0),
                                h = _(()=>{
                                    c.slideToClosest(c.params.speed, !0, void 0, n)
                                }
                                , 0)
                            }
                            h = h || _(()=>{
                                u = s,
                                p.splice(0),
                                c.slideToClosest(c.params.speed, !0, void 0, .5)
                            }
                            , 500)
                        }
                        if (a || d("scroll", n),
                        c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(),
                        e === c.minTranslate() || e === c.maxTranslate())
                            return !0
                    }
                } else {
                    const n = {
                        time: v(),
                        delta: Math.abs(t),
                        direction: Math.sign(t),
                        raw: s
                    }
                      , a = (2 <= p.length && p.shift(),
                    p.length ? p[p.length - 1] : void 0);
                    if (p.push(n),
                    (!a || n.direction !== a.direction || n.delta > a.delta || n.time > a.time + 150) && m(n),
                    function(e) {
                        var t = c.params.mousewheel;
                        if (e.direction < 0) {
                            if (c.isEnd && !c.params.loop && t.releaseOnEdges)
                                return 1
                        } else if (c.isBeginning && !c.params.loop && t.releaseOnEdges)
                            return 1
                    }(n))
                        return !0
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                !1
            }
        }
        function l(e) {
            let t = c.$el;
            (t = "container" !== c.params.mousewheel.eventsTarget ? P(c.params.mousewheel.eventsTarget) : t)[e]("mouseenter", a),
            t[e]("mouseleave", r),
            t[e]("wheel", o)
        }
        function f() {
            return c.params.cssMode ? (c.wrapperEl.removeEventListener("wheel", o),
            !0) : !c.mousewheel.enabled && (l("on"),
            c.mousewheel.enabled = !0)
        }
        function g() {
            return c.params.cssMode ? (c.wrapperEl.addEventListener(event, o),
            !0) : !!c.mousewheel.enabled && (l("off"),
            !(c.mousewheel.enabled = !1))
        }
        i("init", ()=>{
            !c.params.mousewheel.enabled && c.params.cssMode && g(),
            c.params.mousewheel.enabled && f()
        }
        ),
        i("destroy", ()=>{
            c.params.cssMode && f(),
            c.mousewheel.enabled && g()
        }
        ),
        Object.assign(c.mousewheel, {
            enable: f,
            disable: g
        })
    }
    , function(e) {
        let {swiper: a, extendParams: t, on: i, emit: r} = e;
        function s(e) {
            let t;
            return e && (t = P(e),
            a.params.uniqueNavElements && "string" == typeof e && 1 < t.length && 1 === a.$el.find(e).length && (t = a.$el.find(e))),
            t
        }
        function n(e, t) {
            var i = a.params.navigation;
            e && 0 < e.length && (e[t ? "addClass" : "removeClass"](i.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
            a.params.watchOverflow && a.enabled && e[a.isLocked ? "addClass" : "removeClass"](i.lockClass))
        }
        function o() {
            var e, t;
            a.params.loop || ({$nextEl: e, $prevEl: t} = a.navigation,
            n(t, a.isBeginning && !a.params.rewind),
            n(e, a.isEnd && !a.params.rewind))
        }
        function l(e) {
            e.preventDefault(),
            a.isBeginning && !a.params.loop && !a.params.rewind || a.slidePrev()
        }
        function c(e) {
            e.preventDefault(),
            a.isEnd && !a.params.loop && !a.params.rewind || a.slideNext()
        }
        function d() {
            var e = a.params.navigation;
            if (a.params.navigation = k(a, a.originalParams.navigation, a.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            e.nextEl || e.prevEl) {
                const t = s(e.nextEl)
                  , i = s(e.prevEl);
                t && 0 < t.length && t.on("click", c),
                i && 0 < i.length && i.on("click", l),
                Object.assign(a.navigation, {
                    $nextEl: t,
                    nextEl: t && t[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                }),
                a.enabled || (t && t.addClass(e.lockClass),
                i && i.addClass(e.lockClass))
            }
        }
        function h() {
            const {$nextEl: e, $prevEl: t} = a.navigation;
            e && e.length && (e.off("click", c),
            e.removeClass(a.params.navigation.disabledClass)),
            t && t.length && (t.off("click", l),
            t.removeClass(a.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        a.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        i("init", ()=>{
            d(),
            o()
        }
        ),
        i("toEdge fromEdge lock unlock", ()=>{
            o()
        }
        ),
        i("destroy", ()=>{
            h()
        }
        ),
        i("enable disable", ()=>{
            const {$nextEl: e, $prevEl: t} = a.navigation;
            e && e[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass),
            t && t[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass)
        }
        ),
        i("click", (e,t)=>{
            const {$nextEl: i, $prevEl: s} = a.navigation
              , n = t.target;
            if (a.params.navigation.hideOnClick && !P(n).is(s) && !P(n).is(i) && (!(a.pagination && a.params.pagination && a.params.pagination.clickable) || a.pagination.el !== n && !a.pagination.el.contains(n))) {
                let e;
                i ? e = i.hasClass(a.params.navigation.hiddenClass) : s && (e = s.hasClass(a.params.navigation.hiddenClass)),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(a.params.navigation.hiddenClass),
                s && s.toggleClass(a.params.navigation.hiddenClass)
            }
        }
        ),
        Object.assign(a.navigation, {
            update: o,
            init: d,
            destroy: h
        })
    }
    , function(e) {
        let {swiper: c, extendParams: t, on: i, emit: d} = e;
        e = "swiper-pagination";
        let h, u = (t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: e + "-bullet",
                bulletActiveClass: e + "-bullet-active",
                modifierClass: e + "-",
                currentClass: e + "-current",
                totalClass: e + "-total",
                hiddenClass: e + "-hidden",
                progressbarFillClass: e + "-progressbar-fill",
                progressbarOppositeClass: e + "-progressbar-opposite",
                clickableClass: e + "-clickable",
                lockClass: e + "-lock",
                horizontalClass: e + "-horizontal",
                verticalClass: e + "-vertical"
            }
        }),
        c.pagination = {
            el: null,
            $el: null,
            bullets: []
        },
        0);
        function a() {
            return !c.params.pagination.el || !c.pagination.el || !c.pagination.$el || 0 === c.pagination.$el.length
        }
        function p(e, t) {
            var i = c.params.pagination["bulletActiveClass"];
            e[t]().addClass(i + "-" + t)[t]().addClass(i + `-${t}-` + t)
        }
        function s() {
            const t = c.rtl
              , r = c.params.pagination;
            if (!a()) {
                const o = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length
                  , l = c.pagination.$el;
                let a;
                var i = c.params.loop ? Math.ceil((o - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                if (c.params.loop ? ((a = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup)) > o - 1 - 2 * c.loopedSlides && (a -= o - 2 * c.loopedSlides),
                a > i - 1 && (a -= i),
                a < 0 && "bullets" !== c.params.paginationType && (a = i + a)) : a = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0,
                "bullets" === r.type && c.pagination.bullets && 0 < c.pagination.bullets.length) {
                    const o = c.pagination.bullets;
                    let s, n, e;
                    if (r.dynamicBullets && (h = o.eq(0)[c.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    l.css(c.isHorizontal() ? "width" : "height", h * (r.dynamicMainBullets + 4) + "px"),
                    1 < r.dynamicMainBullets && void 0 !== c.previousIndex && ((u += a - (c.previousIndex - c.loopedSlides || 0)) > r.dynamicMainBullets - 1 ? u = r.dynamicMainBullets - 1 : u < 0 && (u = 0)),
                    s = Math.max(a - u, 0),
                    n = s + (Math.min(o.length, r.dynamicMainBullets) - 1),
                    e = (n + s) / 2),
                    o.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e=>"" + r.bulletActiveClass + e).join(" ")),
                    1 < l.length)
                        o.each(e=>{
                            const t = P(e)
                              , i = t.index();
                            i === a && t.addClass(r.bulletActiveClass),
                            r.dynamicBullets && (i >= s && i <= n && t.addClass(r.bulletActiveClass + "-main"),
                            i === s && p(t, "prev"),
                            i === n && p(t, "next"))
                        }
                        );
                    else {
                        const t = o.eq(a)
                          , l = t.index();
                        if (t.addClass(r.bulletActiveClass),
                        r.dynamicBullets) {
                            const t = o.eq(s)
                              , h = o.eq(n);
                            for (let e = s; e <= n; e += 1)
                                o.eq(e).addClass(r.bulletActiveClass + "-main");
                            if (c.params.loop)
                                if (l >= o.length) {
                                    for (let e = r.dynamicMainBullets; 0 <= e; --e)
                                        o.eq(o.length - e).addClass(r.bulletActiveClass + "-main");
                                    o.eq(o.length - r.dynamicMainBullets - 1).addClass(r.bulletActiveClass + "-prev")
                                } else
                                    p(t, "prev"),
                                    p(h, "next");
                            else
                                p(t, "prev"),
                                p(h, "next")
                        }
                    }
                    if (r.dynamicBullets) {
                        const d = Math.min(o.length, r.dynamicMainBullets + 4)
                          , l = (h * d - h) / 2 - e * h
                          , u = t ? "right" : "left";
                        o.css(c.isHorizontal() ? u : "top", l + "px")
                    }
                }
                if ("fraction" === r.type && (l.find(A(r.currentClass)).text(r.formatFractionCurrent(a + 1)),
                l.find(A(r.totalClass)).text(r.formatFractionTotal(i))),
                "progressbar" === r.type) {
                    var s = r.progressbarOpposite ? c.isHorizontal() ? "vertical" : "horizontal" : c.isHorizontal() ? "horizontal" : "vertical";
                    const o = (a + 1) / i;
                    let e = 1
                      , t = 1;
                    "horizontal" == s ? e = o : t = o,
                    l.find(A(r.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`).transition(c.params.speed)
                }
                "custom" === r.type && r.renderCustom ? (l.html(r.renderCustom(c, a + 1, i)),
                d("paginationRender", l[0])) : d("paginationUpdate", l[0]),
                c.params.watchOverflow && c.enabled && l[c.isLocked ? "addClass" : "removeClass"](r.lockClass)
            }
        }
        function n() {
            const s = c.params.pagination;
            if (!a()) {
                const e = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length
                  , n = c.pagination.$el;
                let i = "";
                if ("bullets" === s.type) {
                    let t = c.params.loop ? Math.ceil((e - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                    c.params.freeMode && c.params.freeMode.enabled && !c.params.loop && t > e && (t = e);
                    for (let e = 0; e < t; e += 1)
                        s.renderBullet ? i += s.renderBullet.call(c, e, s.bulletClass) : i += `<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`;
                    n.html(i),
                    c.pagination.bullets = n.find(A(s.bulletClass))
                }
                "fraction" === s.type && (i = s.renderFraction ? s.renderFraction.call(c, s.currentClass, s.totalClass) : `<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`,
                n.html(i)),
                "progressbar" === s.type && (i = s.renderProgressbar ? s.renderProgressbar.call(c, s.progressbarFillClass) : `<span class="${s.progressbarFillClass}"></span>`,
                n.html(i)),
                "custom" !== s.type && d("paginationRender", c.pagination.$el[0])
            }
        }
        function r() {
            c.params.pagination = k(c, c.originalParams.pagination, c.params.pagination, {
                el: "swiper-pagination"
            });
            const t = c.params.pagination;
            if (t.el) {
                let e = P(t.el);
                0 !== e.length && (c.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && (1 < (e = c.$el.find(t.el)).length && (e = e.filter(e=>P(e).parents(".swiper")[0] === c.el))),
                "bullets" === t.type && t.clickable && e.addClass(t.clickableClass),
                e.addClass(t.modifierClass + t.type),
                e.addClass(c.isHorizontal() ? t.horizontalClass : t.verticalClass),
                "bullets" === t.type && t.dynamicBullets && (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                u = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass),
                t.clickable && e.on("click", A(t.bulletClass), function(e) {
                    e.preventDefault();
                    let t = P(this).index() * c.params.slidesPerGroup;
                    c.params.loop && (t += c.loopedSlides),
                    c.slideTo(t)
                }),
                Object.assign(c.pagination, {
                    $el: e,
                    el: e[0]
                }),
                c.enabled || e.addClass(t.lockClass))
            }
        }
        function o() {
            var e = c.params.pagination;
            if (!a()) {
                const t = c.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                t.removeClass(c.isHorizontal() ? e.horizontalClass : e.verticalClass),
                c.pagination.bullets && c.pagination.bullets.removeClass && c.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", A(e.bulletClass))
            }
        }
        i("init", ()=>{
            r(),
            n(),
            s()
        }
        ),
        i("activeIndexChange", ()=>{
            !c.params.loop && void 0 !== c.snapIndex || s()
        }
        ),
        i("snapIndexChange", ()=>{
            c.params.loop || s()
        }
        ),
        i("slidesLengthChange", ()=>{
            c.params.loop && (n(),
            s())
        }
        ),
        i("snapGridLengthChange", ()=>{
            c.params.loop || (n(),
            s())
        }
        ),
        i("destroy", ()=>{
            o()
        }
        ),
        i("enable disable", ()=>{
            const e = c.pagination["$el"];
            e && e[c.enabled ? "removeClass" : "addClass"](c.params.pagination.lockClass)
        }
        ),
        i("lock unlock", ()=>{
            s()
        }
        ),
        i("click", (e,t)=>{
            const i = t.target
              , s = c.pagination["$el"];
            if (c.params.pagination.el && c.params.pagination.hideOnClick && 0 < s.length && !P(i).hasClass(c.params.pagination.bulletClass) && (!c.navigation || !(c.navigation.nextEl && i === c.navigation.nextEl || c.navigation.prevEl && i === c.navigation.prevEl))) {
                const e = s.hasClass(c.params.pagination.hiddenClass);
                d(!0 === e ? "paginationShow" : "paginationHide"),
                s.toggleClass(c.params.pagination.hiddenClass)
            }
        }
        ),
        Object.assign(c.pagination, {
            render: n,
            update: s,
            init: r,
            destroy: o
        })
    }
    , function(e) {
        let {swiper: c, extendParams: t, on: i, emit: r} = e;
        const d = x();
        let o, l, h, s, u = !1, p = null, m = null;
        function n() {
            if (c.params.scrollbar.el && c.scrollbar.el) {
                const {scrollbar: i, rtlTranslate: s, progress: n} = c
                  , {$dragEl: a, $el: r} = i
                  , o = c.params.scrollbar;
                let e = l
                  , t = (h - l) * n;
                s ? 0 < (t = -t) ? (e = l - t,
                t = 0) : -t + l > h && (e = h + t) : t < 0 ? (e = l + t,
                t = 0) : t + l > h && (e = h - t),
                c.isHorizontal() ? (a.transform(`translate3d(${t}px, 0, 0)`),
                a[0].style.width = e + "px") : (a.transform(`translate3d(0px, ${t}px, 0)`),
                a[0].style.height = e + "px"),
                o.hide && (clearTimeout(p),
                r[0].style.opacity = 1,
                p = setTimeout(()=>{
                    r[0].style.opacity = 0,
                    r.transition(400)
                }
                , 1e3))
            }
        }
        function a() {
            if (c.params.scrollbar.el && c.scrollbar.el) {
                const e = c["scrollbar"]
                  , {$dragEl: t, $el: i} = e;
                t[0].style.width = "",
                t[0].style.height = "",
                h = c.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                s = c.size / (c.virtualSize + c.params.slidesOffsetBefore - (c.params.centeredSlides ? c.snapGrid[0] : 0)),
                l = "auto" === c.params.scrollbar.dragSize ? h * s : parseInt(c.params.scrollbar.dragSize, 10),
                c.isHorizontal() ? t[0].style.width = l + "px" : t[0].style.height = l + "px",
                i[0].style.display = 1 <= s ? "none" : "",
                c.params.scrollbar.hide && (i[0].style.opacity = 0),
                c.params.watchOverflow && c.enabled && e.$el[c.isLocked ? "addClass" : "removeClass"](c.params.scrollbar.lockClass)
            }
        }
        function f(e) {
            return c.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
        }
        function g(e) {
            const {scrollbar: t, rtlTranslate: i} = c
              , s = t["$el"];
            let n;
            n = (f(e) - s.offset()[c.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (h - l),
            n = Math.max(Math.min(n, 1), 0),
            i && (n = 1 - n);
            e = c.minTranslate() + (c.maxTranslate() - c.minTranslate()) * n;
            c.updateProgress(e),
            c.setTranslate(e),
            c.updateActiveIndex(),
            c.updateSlidesClasses()
        }
        function v(e) {
            const t = c.params.scrollbar
              , {scrollbar: i, $wrapperEl: s} = c
              , {$el: n, $dragEl: a} = i;
            u = !0,
            o = e.target === a[0] || e.target === a ? f(e) - e.target.getBoundingClientRect()[c.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            a.transition(100),
            g(e),
            clearTimeout(m),
            n.transition(0),
            t.hide && n.css("opacity", 1),
            c.params.cssMode && c.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e)
        }
        function y(e) {
            const {scrollbar: t, $wrapperEl: i} = c
              , {$el: s, $dragEl: n} = t;
            u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            g(e),
            i.transition(0),
            s.transition(0),
            n.transition(0),
            r("scrollbarDragMove", e))
        }
        function b(e) {
            const t = c.params.scrollbar
              , {scrollbar: i, $wrapperEl: s} = c
              , n = i["$el"];
            u && (u = !1,
            c.params.cssMode && (c.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(m),
            m = _(()=>{
                n.css("opacity", 0),
                n.transition(400)
            }
            , 1e3)),
            r("scrollbarDragEnd", e),
            t.snapOnRelease && c.slideToClosest())
        }
        function w(e) {
            const {scrollbar: t, touchEventsTouch: i, touchEventsDesktop: s, params: n, support: a} = c
              , r = t.$el[0]
              , o = !(!a.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , l = !(!a.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            r && (e = "on" === e ? "addEventListener" : "removeEventListener",
            a.touch ? (r[e](i.start, v, o),
            r[e](i.move, y, o),
            r[e](i.end, b, l)) : (r[e](s.start, v, o),
            d[e](s.move, y, o),
            d[e](s.end, b, l)))
        }
        function E() {
            const {scrollbar: i, $el: s} = c;
            c.params.scrollbar = k(c, c.originalParams.scrollbar, c.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            var n = c.params.scrollbar;
            if (n.el) {
                let e = P(n.el)
                  , t = (e = c.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && 1 === s.find(n.el).length ? s.find(n.el) : e).find("." + c.params.scrollbar.dragClass);
                0 === t.length && (t = P(`<div class="${c.params.scrollbar.dragClass}"></div>`),
                e.append(t)),
                Object.assign(i, {
                    $el: e,
                    el: e[0],
                    $dragEl: t,
                    dragEl: t[0]
                }),
                n.draggable && c.params.scrollbar.el && w("on"),
                e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
            }
        }
        function T() {
            c.params.scrollbar.el && w("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        c.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        i("init", ()=>{
            E(),
            a(),
            n()
        }
        ),
        i("update resize observerUpdate lock unlock", ()=>{
            a()
        }
        ),
        i("setTranslate", ()=>{
            n()
        }
        ),
        i("setTransition", (e,t)=>{
            t = t,
            c.params.scrollbar.el && c.scrollbar.el && c.scrollbar.$dragEl.transition(t)
        }
        ),
        i("enable disable", ()=>{
            const e = c.scrollbar["$el"];
            e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
        }
        ),
        i("destroy", ()=>{
            T()
        }
        ),
        Object.assign(c.scrollbar, {
            updateSize: a,
            setTranslate: n,
            init: E,
            destroy: T
        })
    }
    , function(e) {
        let {swiper: d, extendParams: t, on: i} = e;
        t({
            parallax: {
                enabled: !1
            }
        });
        const a = (e,t)=>{
            const i = d["rtl"]
              , s = P(e)
              , n = i ? -1 : 1
              , a = s.attr("data-swiper-parallax") || "0";
            let r = s.attr("data-swiper-parallax-x")
              , o = s.attr("data-swiper-parallax-y");
            var l = s.attr("data-swiper-parallax-scale")
              , c = s.attr("data-swiper-parallax-opacity");
            if (r || o ? (r = r || "0",
            o = o || "0") : d.isHorizontal() ? (r = a,
            o = "0") : (o = a,
            r = "0"),
            r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * n + "%" : r * t * n + "px",
            o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != c) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                s[0].style.opacity = e
            }
            if (null == l)
                s.transform(`translate3d(${r}, ${o}, 0px)`);
            else {
                const e = l - (l - 1) * (1 - Math.abs(t));
                s.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`)
            }
        }
          , s = ()=>{
            const {$el: e, slides: t, progress: s, snapGrid: n} = d;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                a(e, s)
            }
            ),
            t.each((e,t)=>{
                let i = e.progress;
                1 < d.params.slidesPerGroup && "auto" !== d.params.slidesPerView && (i += Math.ceil(t / 2) - s * (n.length - 1)),
                i = Math.min(Math.max(i, -1), 1),
                P(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                    a(e, i)
                }
                )
            }
            )
        }
        ;
        i("beforeInit", ()=>{
            d.params.parallax.enabled && (d.params.watchSlidesProgress = !0,
            d.originalParams.watchSlidesProgress = !0)
        }
        ),
        i("init", ()=>{
            d.params.parallax.enabled && s()
        }
        ),
        i("setTranslate", ()=>{
            d.params.parallax.enabled && s()
        }
        ),
        i("setTransition", (e,t)=>{
            if (d.params.parallax.enabled) {
                var s = t;
                void 0 === s && (s = d.params.speed);
                const i = d["$el"];
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                    const t = P(e);
                    let i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0),
                    t.transition(i)
                }
                )
            }
        }
        )
    }
    , function(e) {
        let {swiper: E, extendParams: t, on: i, emit: s} = e;
        const T = L();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        E.zoom = {
            enabled: !1
        };
        let n, a, r, x = 1, o = !1;
        const _ = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }
          , S = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , l = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let c = 1;
        function d(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , e = e.targetTouches[1].pageY;
            return Math.sqrt((s - t) ** 2 + (e - i) ** 2)
        }
        function h(e) {
            var t = E.support
              , i = E.params.zoom;
            if (a = !1,
            r = !1,
            !t.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                a = !0,
                _.scaleStart = d(e)
            }
            _.$slideEl && _.$slideEl.length || (_.$slideEl = P(e.target).closest("." + E.params.slideClass),
            0 === _.$slideEl.length && (_.$slideEl = E.slides.eq(E.activeIndex)),
            _.$imageEl = _.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            _.$imageWrapEl = _.$imageEl.parent("." + i.containerClass),
            _.maxRatio = _.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== _.$imageWrapEl.length) ? (_.$imageEl && _.$imageEl.transition(0),
            o = !0) : _.$imageEl = void 0
        }
        function u(e) {
            const t = E.support
              , i = E.params.zoom
              , s = E.zoom;
            if (!t.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                r = !0,
                _.scaleMove = d(e)
            }
            _.$imageEl && 0 !== _.$imageEl.length ? (t.gestures ? s.scale = e.scale * x : s.scale = _.scaleMove / _.scaleStart * x,
            s.scale > _.maxRatio && (s.scale = _.maxRatio - 1 + (s.scale - _.maxRatio + 1) ** .5),
            s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5),
            _.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && h(e)
        }
        function p(e) {
            const t = E.device
              , i = E.support
              , s = E.params.zoom
              , n = E.zoom;
            if (!i.gestures) {
                if (!a || !r)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android)
                    return;
                a = !1,
                r = !1
            }
            _.$imageEl && 0 !== _.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, _.maxRatio), s.minRatio),
            _.$imageEl.transition(E.params.speed).transform(`translate3d(0,0,0) scale(${n.scale})`),
            x = n.scale,
            o = !1,
            1 === n.scale && (_.$slideEl = void 0))
        }
        function m(e) {
            var t = E.zoom;
            if (_.$imageEl && 0 !== _.$imageEl.length && (E.allowClick = !1,
            S.isTouched && _.$slideEl)) {
                S.isMoved || (S.width = _.$imageEl[0].offsetWidth,
                S.height = _.$imageEl[0].offsetHeight,
                S.startX = $(_.$imageWrapEl[0], "x") || 0,
                S.startY = $(_.$imageWrapEl[0], "y") || 0,
                _.slideWidth = _.$slideEl[0].offsetWidth,
                _.slideHeight = _.$slideEl[0].offsetHeight,
                _.$imageWrapEl.transition(0));
                var i = S.width * t.scale
                  , t = S.height * t.scale;
                if (!(i < _.slideWidth && t < _.slideHeight)) {
                    if (S.minX = Math.min(_.slideWidth / 2 - i / 2, 0),
                    S.maxX = -S.minX,
                    S.minY = Math.min(_.slideHeight / 2 - t / 2, 0),
                    S.maxY = -S.minY,
                    S.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX,
                    S.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY,
                    !S.isMoved && !o) {
                        if (E.isHorizontal() && (Math.floor(S.minX) === Math.floor(S.startX) && S.touchesCurrent.x < S.touchesStart.x || Math.floor(S.maxX) === Math.floor(S.startX) && S.touchesCurrent.x > S.touchesStart.x))
                            return void (S.isTouched = !1);
                        if (!E.isHorizontal() && (Math.floor(S.minY) === Math.floor(S.startY) && S.touchesCurrent.y < S.touchesStart.y || Math.floor(S.maxY) === Math.floor(S.startY) && S.touchesCurrent.y > S.touchesStart.y))
                            return void (S.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    S.isMoved = !0,
                    S.currentX = S.touchesCurrent.x - S.touchesStart.x + S.startX,
                    S.currentY = S.touchesCurrent.y - S.touchesStart.y + S.startY,
                    S.currentX < S.minX && (S.currentX = S.minX + 1 - (S.minX - S.currentX + 1) ** .8),
                    S.currentX > S.maxX && (S.currentX = S.maxX - 1 + (S.currentX - S.maxX + 1) ** .8),
                    S.currentY < S.minY && (S.currentY = S.minY + 1 - (S.minY - S.currentY + 1) ** .8),
                    S.currentY > S.maxY && (S.currentY = S.maxY - 1 + (S.currentY - S.maxY + 1) ** .8),
                    l.prevPositionX || (l.prevPositionX = S.touchesCurrent.x),
                    l.prevPositionY || (l.prevPositionY = S.touchesCurrent.y),
                    l.prevTime || (l.prevTime = Date.now()),
                    l.x = (S.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2,
                    l.y = (S.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2,
                    Math.abs(S.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0),
                    Math.abs(S.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0),
                    l.prevPositionX = S.touchesCurrent.x,
                    l.prevPositionY = S.touchesCurrent.y,
                    l.prevTime = Date.now(),
                    _.$imageWrapEl.transform(`translate3d(${S.currentX}px, ${S.currentY}px,0)`)
                }
            }
        }
        function f() {
            const e = E.zoom;
            _.$slideEl && E.previousIndex !== E.activeIndex && (_.$imageEl && _.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            _.$imageWrapEl && _.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            x = 1,
            _.$slideEl = void 0,
            _.$imageEl = void 0,
            _.$imageWrapEl = void 0)
        }
        function g(y) {
            const b = E.zoom
              , w = E.params.zoom;
            if (_.$slideEl || (y && y.target && (_.$slideEl = P(y.target).closest("." + E.params.slideClass)),
            _.$slideEl || (E.params.virtual && E.params.virtual.enabled && E.virtual ? _.$slideEl = E.$wrapperEl.children("." + E.params.slideActiveClass) : _.$slideEl = E.slides.eq(E.activeIndex)),
            _.$imageEl = _.$slideEl.find("." + w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            _.$imageWrapEl = _.$imageEl.parent("." + w.containerClass)),
            _.$imageEl && 0 !== _.$imageEl.length && _.$imageWrapEl && 0 !== _.$imageWrapEl.length) {
                let e, t, i, s, n, a, r, o, l, c, d, h, u, p, m, f, g, v;
                E.params.cssMode && (E.wrapperEl.style.overflow = "hidden",
                E.wrapperEl.style.touchAction = "none"),
                _.$slideEl.addClass("" + w.zoomedSlideClass),
                t = void 0 === S.touchesStart.x && y ? (e = ("touchend" === y.type ? y.changedTouches[0] : y).pageX,
                ("touchend" === y.type ? y.changedTouches[0] : y).pageY) : (e = S.touchesStart.x,
                S.touchesStart.y),
                b.scale = _.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                x = _.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                y ? (g = _.$slideEl[0].offsetWidth,
                v = _.$slideEl[0].offsetHeight,
                i = _.$slideEl.offset().left + T.scrollX,
                s = _.$slideEl.offset().top + T.scrollY,
                n = i + g / 2 - e,
                a = s + v / 2 - t,
                l = _.$imageEl[0].offsetWidth,
                c = _.$imageEl[0].offsetHeight,
                d = l * b.scale,
                h = c * b.scale,
                m = -(u = Math.min(g / 2 - d / 2, 0)),
                f = -(p = Math.min(v / 2 - h / 2, 0)),
                r = n * b.scale,
                o = a * b.scale,
                (r = r < u ? u : r) > m && (r = m),
                (o = o < p ? p : o) > f && (o = f)) : (r = 0,
                o = 0),
                _.$imageWrapEl.transition(300).transform(`translate3d(${r}px, ${o}px,0)`),
                _.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${b.scale})`)
            }
        }
        function v() {
            const e = E.zoom
              , t = E.params.zoom;
            _.$slideEl || (E.params.virtual && E.params.virtual.enabled && E.virtual ? _.$slideEl = E.$wrapperEl.children("." + E.params.slideActiveClass) : _.$slideEl = E.slides.eq(E.activeIndex),
            _.$imageEl = _.$slideEl.find("." + t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            _.$imageWrapEl = _.$imageEl.parent("." + t.containerClass)),
            _.$imageEl && 0 !== _.$imageEl.length && _.$imageWrapEl && 0 !== _.$imageWrapEl.length && (E.params.cssMode && (E.wrapperEl.style.overflow = "",
            E.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            x = 1,
            _.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            _.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            _.$slideEl.removeClass("" + t.zoomedSlideClass),
            _.$slideEl = void 0)
        }
        function y(e) {
            var t = E.zoom;
            t.scale && 1 !== t.scale ? v() : g(e)
        }
        function b() {
            var e = E.support;
            return {
                passiveListener: !("touchstart" !== E.touchEvents.start || !e.passiveListener || !E.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function w() {
            return "." + E.params.slideClass
        }
        function C(e) {
            var t = b()["passiveListener"]
              , i = w();
            E.$wrapperEl[e]("gesturestart", i, h, t),
            E.$wrapperEl[e]("gesturechange", i, u, t),
            E.$wrapperEl[e]("gestureend", i, p, t)
        }
        function k() {
            n || (n = !0,
            C("on"))
        }
        function A() {
            n && (n = !1,
            C("off"))
        }
        function M() {
            const e = E.zoom;
            var t, i, s, n;
            e.enabled || (e.enabled = !0,
            t = E.support,
            {passiveListener: i, activeListenerWithCapture: s} = b(),
            n = w(),
            t.gestures ? (E.$wrapperEl.on(E.touchEvents.start, k, i),
            E.$wrapperEl.on(E.touchEvents.end, A, i)) : "touchstart" === E.touchEvents.start && (E.$wrapperEl.on(E.touchEvents.start, n, h, i),
            E.$wrapperEl.on(E.touchEvents.move, n, u, s),
            E.$wrapperEl.on(E.touchEvents.end, n, p, i),
            E.touchEvents.cancel && E.$wrapperEl.on(E.touchEvents.cancel, n, p, i)),
            E.$wrapperEl.on(E.touchEvents.move, "." + E.params.zoom.containerClass, m, s))
        }
        function I() {
            const e = E.zoom;
            var t, i, s, n;
            e.enabled && (t = E.support,
            {passiveListener: i, activeListenerWithCapture: s} = (e.enabled = !1,
            b()),
            n = w(),
            t.gestures ? (E.$wrapperEl.off(E.touchEvents.start, k, i),
            E.$wrapperEl.off(E.touchEvents.end, A, i)) : "touchstart" === E.touchEvents.start && (E.$wrapperEl.off(E.touchEvents.start, n, h, i),
            E.$wrapperEl.off(E.touchEvents.move, n, u, s),
            E.$wrapperEl.off(E.touchEvents.end, n, p, i),
            E.touchEvents.cancel && E.$wrapperEl.off(E.touchEvents.cancel, n, p, i)),
            E.$wrapperEl.off(E.touchEvents.move, "." + E.params.zoom.containerClass, m, s))
        }
        Object.defineProperty(E.zoom, "scale", {
            get: ()=>c,
            set(e) {
                var t, i;
                c !== e && (t = _.$imageEl ? _.$imageEl[0] : void 0,
                i = _.$slideEl ? _.$slideEl[0] : void 0,
                s("zoomChange", e, t, i)),
                c = e
            }
        }),
        i("init", ()=>{
            E.params.zoom.enabled && M()
        }
        ),
        i("destroy", ()=>{
            I()
        }
        ),
        i("touchStart", (e,t)=>{
            var i;
            E.zoom.enabled && (t = t,
            i = E.device,
            _.$imageEl && 0 !== _.$imageEl.length && !S.isTouched && (i.android && t.cancelable && t.preventDefault(),
            S.isTouched = !0,
            S.touchesStart.x = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX,
            S.touchesStart.y = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY))
        }
        ),
        i("touchEnd", (e,t)=>{
            if (E.zoom.enabled) {
                var i = E.zoom;
                if (_.$imageEl && 0 !== _.$imageEl.length) {
                    if (!S.isTouched || !S.isMoved)
                        return void (S.isTouched = !1,
                        S.isMoved = !1);
                    S.isTouched = !1,
                    S.isMoved = !1;
                    let e = 300
                      , t = 300;
                    var s = l.x * e
                      , s = S.currentX + s
                      , n = l.y * t
                      , n = S.currentY + n
                      , a = (0 !== l.x && (e = Math.abs((s - S.currentX) / l.x)),
                    0 !== l.y && (t = Math.abs((n - S.currentY) / l.y)),
                    Math.max(e, t))
                      , s = (S.currentX = s,
                    S.currentY = n,
                    S.width * i.scale)
                      , n = S.height * i.scale;
                    S.minX = Math.min(_.slideWidth / 2 - s / 2, 0),
                    S.maxX = -S.minX,
                    S.minY = Math.min(_.slideHeight / 2 - n / 2, 0),
                    S.maxY = -S.minY,
                    S.currentX = Math.max(Math.min(S.currentX, S.maxX), S.minX),
                    S.currentY = Math.max(Math.min(S.currentY, S.maxY), S.minY),
                    _.$imageWrapEl.transition(a).transform(`translate3d(${S.currentX}px, ${S.currentY}px,0)`)
                }
            }
        }
        ),
        i("doubleTap", (e,t)=>{
            !E.animating && E.params.zoom.enabled && E.zoom.enabled && E.params.zoom.toggle && y(t)
        }
        ),
        i("transitionEnd", ()=>{
            E.zoom.enabled && E.params.zoom.enabled && f()
        }
        ),
        i("slideChange", ()=>{
            E.zoom.enabled && E.params.zoom.enabled && E.params.cssMode && f()
        }
        ),
        Object.assign(E.zoom, {
            enable: M,
            disable: I,
            in: g,
            out: v,
            toggle: y
        })
    }
    , function(e) {
        let {swiper: d, extendParams: t, on: i, emit: h} = e
          , c = (t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }),
        !(d.lazy = {}))
          , u = !1;
        function p(e, o) {
            void 0 === o && (o = !0);
            const l = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                const c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children(`.${d.params.slideClass}[data-swiper-slide-index="${e}"]`) : d.slides.eq(e)
                  , t = c.find(`.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`);
                !c.hasClass(l.elementClass) || c.hasClass(l.loadedClass) || c.hasClass(l.loadingClass) || t.push(c[0]),
                0 !== t.length && t.each(e=>{
                    const t = P(e)
                      , i = (t.addClass(l.loadingClass),
                    t.attr("data-background"))
                      , s = t.attr("data-src")
                      , n = t.attr("data-srcset")
                      , a = t.attr("data-sizes")
                      , r = t.parent("picture");
                    d.loadImage(t[0], s || i, n, a, !1, ()=>{
                        var e;
                        null == d || !d || d && !d.params || d.destroyed || (i ? (t.css("background-image", `url("${i}")`),
                        t.removeAttr("data-background")) : (n && (t.attr("srcset", n),
                        t.removeAttr("data-srcset")),
                        a && (t.attr("sizes", a),
                        t.removeAttr("data-sizes")),
                        r.length && r.children("source").each(e=>{
                            const t = P(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"))
                        }
                        ),
                        s && (t.attr("src", s),
                        t.removeAttr("data-src"))),
                        t.addClass(l.loadedClass).removeClass(l.loadingClass),
                        c.find("." + l.preloaderClass).remove(),
                        d.params.loop && o && (e = c.attr("data-swiper-slide-index"),
                        c.hasClass(d.params.slideDuplicateClass) ? p(d.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${d.params.slideDuplicateClass})`).index(), !1) : p(d.$wrapperEl.children(`.${d.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)),
                        h("lazyImageReady", c[0], t[0]),
                        d.params.autoHeight && d.updateAutoHeight())
                    }
                    ),
                    h("lazyImageLoad", c[0], t[0])
                }
                )
            }
        }
        function m() {
            const {$wrapperEl: t, params: i, slides: s, activeIndex: n} = d
              , a = d.virtual && i.virtual.enabled
              , e = i.lazy;
            let r = i.slidesPerView;
            function o(e) {
                if (a) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return 1
                } else if (s[e])
                    return 1
            }
            function l(e) {
                return a ? P(e).attr("data-swiper-slide-index") : P(e).index()
            }
            if ("auto" === r && (r = 0),
            u = u || !0,
            d.params.watchSlidesProgress)
                t.children("." + i.slideVisibleClass).each(e=>{
                    p(a ? P(e).attr("data-swiper-slide-index") : P(e).index())
                }
                );
            else if (1 < r)
                for (let e = n; e < n + r; e += 1)
                    o(e) && p(e);
            else
                p(n);
            if (e.loadPrevNext)
                if (1 < r || e.loadPrevNextAmount && 1 < e.loadPrevNextAmount) {
                    const t = e.loadPrevNextAmount
                      , d = Math.ceil(r)
                      , i = Math.min(n + d + Math.max(t, d), s.length)
                      , a = Math.max(n - Math.max(d, t), 0);
                    for (let e = n + d; e < i; e += 1)
                        o(e) && p(e);
                    for (let e = a; e < n; e += 1)
                        o(e) && p(e)
                } else {
                    const d = t.children("." + i.slideNextClass)
                      , s = (0 < d.length && p(l(d)),
                    t.children("." + i.slidePrevClass));
                    0 < s.length && p(l(s))
                }
        }
        function f() {
            var e = L();
            if (d && !d.destroyed) {
                const s = d.params.lazy.scrollingElement ? P(d.params.lazy.scrollingElement) : P(e)
                  , n = s[0] === e
                  , a = n ? e.innerWidth : s[0].offsetWidth
                  , r = n ? e.innerHeight : s[0].offsetHeight
                  , o = d.$el.offset()
                  , l = d["rtlTranslate"];
                let t = !1;
                l && (o.left -= d.$el[0].scrollLeft);
                var i = [[o.left, o.top], [o.left + d.width, o.top], [o.left, o.top + d.height], [o.left + d.width, o.top + d.height]];
                for (let e = 0; e < i.length; e += 1) {
                    const d = i[e];
                    0 <= d[0] && d[0] <= a && 0 <= d[1] && d[1] <= r && (0 === d[0] && 0 === d[1] || (t = !0))
                }
                e = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                t ? (m(),
                s.off("scroll", f, e)) : c || (c = !0,
                s.on("scroll", f, e))
            }
        }
        i("beforeInit", ()=>{
            d.params.lazy.enabled && d.params.preloadImages && (d.params.preloadImages = !1)
        }
        ),
        i("init", ()=>{
            d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
        }
        ),
        i("scroll", ()=>{
            d.params.freeMode && d.params.freeMode.enabled && !d.params.freeMode.sticky && m()
        }
        ),
        i("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
            d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
        }
        ),
        i("transitionStart", ()=>{
            d.params.lazy.enabled && (d.params.lazy.loadOnTransitionStart || !d.params.lazy.loadOnTransitionStart && !u) && (d.params.lazy.checkInView ? f : m)()
        }
        ),
        i("transitionEnd", ()=>{
            d.params.lazy.enabled && !d.params.lazy.loadOnTransitionStart && (d.params.lazy.checkInView ? f : m)()
        }
        ),
        i("slideChange", ()=>{
            var {lazy: e, cssMode: t, watchSlidesProgress: i, touchReleaseOnEdges: s, resistanceRatio: n} = d.params;
            e.enabled && (t || i && (s || 0 === n)) && m()
        }
        ),
        i("destroy", ()=>{
            d.$el && d.$el.find("." + d.params.lazy.loadingClass).removeClass(d.params.lazy.loadingClass)
        }
        ),
        Object.assign(d.lazy, {
            load: m,
            loadInSlide: p
        })
    }
    , function(e) {
        let {swiper: o, extendParams: t, on: i} = e;
        function l(e, t) {
            const i = function() {
                let i, s, n;
                return (e,t)=>{
                    for (s = -1,
                    i = e.length; 1 < i - s; )
                        e[n = i + s >> 1] <= t ? s = n : i = n;
                    return i
                }
            }();
            let s, n;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = i(this.x, e),
                s = n - 1,
                (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
            }
            ,
            this
        }
        function s() {
            o.controller.control && o.controller.spline && (o.controller.spline = void 0,
            delete o.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        o.controller = {
            control: void 0
        },
        i("beforeInit", ()=>{
            o.controller.control = o.params.controller.control
        }
        ),
        i("update", ()=>{
            s()
        }
        ),
        i("resize", ()=>{
            s()
        }
        ),
        i("observerUpdate", ()=>{
            s()
        }
        ),
        i("setTranslate", (e,t,i)=>{
            o.controller.control && o.controller.setTranslate(t, i)
        }
        ),
        i("setTransition", (e,t,i)=>{
            o.controller.control && o.controller.setTransition(t, i)
        }
        ),
        Object.assign(o.controller, {
            setTranslate: function(e, t) {
                var i = o.controller.control;
                let s, n;
                var a = o.constructor;
                function r(e) {
                    var t, i = o.rtlTranslate ? -o.translate : o.translate;
                    "slide" === o.params.controller.by && (t = e,
                    o.controller.spline || (o.controller.spline = o.params.loop ? new l(o.slidesGrid,t.slidesGrid) : new l(o.snapGrid,t.snapGrid)),
                    n = -o.controller.spline.interpolate(-i)),
                    n && "container" !== o.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()),
                    n = (i - o.minTranslate()) * s + e.minTranslate()),
                    o.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, o),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                        i[e] !== t && i[e]instanceof a && r(i[e]);
                else
                    i instanceof a && t !== i && r(i)
            },
            setTransition: function(t, e) {
                const i = o.constructor
                  , s = o.controller.control;
                let n;
                function a(e) {
                    e.setTransition(t, o),
                    0 !== t && (e.transitionStart(),
                    e.params.autoHeight && _(()=>{
                        e.updateAutoHeight()
                    }
                    ),
                    e.$wrapperEl.transitionEnd(()=>{
                        s && (e.params.loop && "slide" === o.params.controller.by && e.loopFix(),
                        e.transitionEnd())
                    }
                    ))
                }
                if (Array.isArray(s))
                    for (n = 0; n < s.length; n += 1)
                        s[n] !== e && s[n]instanceof i && a(s[n]);
                else
                    s instanceof i && e !== s && a(s)
            }
        })
    }
    , function(e) {
        let {swiper: r, extendParams: t, on: i} = e
          , o = (t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        null);
        function s(e) {
            const t = o;
            0 !== t.length && (t.html(""),
            t.html(e))
        }
        function n(e) {
            e.attr("tabIndex", "0")
        }
        function a(e) {
            e.attr("tabIndex", "-1")
        }
        function l(e, t) {
            e.attr("role", t)
        }
        function c(e, t) {
            e.attr("aria-roledescription", t)
        }
        function d(e, t) {
            e.attr("aria-label", t)
        }
        function h(e) {
            e.attr("aria-disabled", !0)
        }
        function u(e) {
            e.attr("aria-disabled", !1)
        }
        function p(e) {
            if (13 === e.keyCode || 32 === e.keyCode) {
                const t = r.params.a11y
                  , i = P(e.target);
                r.navigation && r.navigation.$nextEl && i.is(r.navigation.$nextEl) && (r.isEnd && !r.params.loop || r.slideNext(),
                r.isEnd ? s(t.lastSlideMessage) : s(t.nextSlideMessage)),
                r.navigation && r.navigation.$prevEl && i.is(r.navigation.$prevEl) && (r.isBeginning && !r.params.loop || r.slidePrev(),
                r.isBeginning ? s(t.firstSlideMessage) : s(t.prevSlideMessage)),
                r.pagination && i.is(A(r.params.pagination.bulletClass)) && i[0].click()
            }
        }
        function m() {
            return r.pagination && r.pagination.bullets && r.pagination.bullets.length
        }
        function f() {
            return m() && r.params.pagination.clickable
        }
        const g = (e,t,i)=>{
            n(e),
            "BUTTON" !== e[0].tagName && (l(e, "button"),
            e.on("keydown", p)),
            d(e, i),
            e.attr("aria-controls", t)
        }
          , v = e=>{
            var t, i, e = e.target.closest("." + r.params.slideClass);
            e && r.slides.includes(e) && (t = r.slides.indexOf(e) === r.activeIndex,
            i = r.params.watchSlidesProgress && r.visibleSlides && r.visibleSlides.includes(e),
            t || i || r.slideTo(r.slides.indexOf(e), 0))
        }
          , y = ()=>{
            const n = r.params.a11y
              , a = (n.itemRoleDescriptionMessage && c(P(r.slides), n.itemRoleDescriptionMessage),
            l(P(r.slides), n.slideRole),
            (r.params.loop ? r.slides.filter(e=>!e.classList.contains(r.params.slideDuplicateClass)) : r.slides).length);
            r.slides.each((e,t)=>{
                const i = P(e)
                  , s = r.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : t;
                d(i, n.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, a))
            }
            )
        }
        ;
        i("beforeInit", ()=>{
            o = P(`<span class="${r.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        ),
        i("afterInit", ()=>{
            if (r.params.a11y.enabled) {
                var i = r.params.a11y
                  , s = (r.$el.append(o),
                r.$el);
                i.containerRoleDescriptionMessage && c(s, i.containerRoleDescriptionMessage),
                i.containerMessage && d(s, i.containerMessage);
                const n = r.$wrapperEl
                  , a = i.id || n.attr("id") || "swiper-wrapper-" + "x".repeat(s = void 0 === (s = 16) ? 16 : s).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16));
                s = r.params.autoplay && r.params.autoplay.enabled ? "off" : "polite";
                let e, t;
                n.attr("id", a),
                n.attr("aria-live", s),
                y(),
                r.navigation && r.navigation.$nextEl && (e = r.navigation.$nextEl),
                r.navigation && r.navigation.$prevEl && (t = r.navigation.$prevEl),
                e && e.length && g(e, a, i.nextSlideMessage),
                t && t.length && g(t, a, i.prevSlideMessage),
                f() && r.pagination.$el.on("keydown", A(r.params.pagination.bulletClass), p),
                r.$el.on("focus", v, !0)
            }
        }
        ),
        i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
            r.params.a11y.enabled && y()
        }
        ),
        i("fromEdge toEdge afterInit lock unlock", ()=>{
            var e, t;
            r.params.a11y.enabled && !r.params.loop && !r.params.rewind && r.navigation && ({$nextEl: e, $prevEl: t} = r.navigation,
            t && 0 < t.length && (r.isBeginning ? (h(t),
            a(t)) : (u(t),
            n(t))),
            e && 0 < e.length && (r.isEnd ? (h(e),
            a(e)) : (u(e),
            n(e))))
        }
        ),
        i("paginationUpdate", ()=>{
            if (r.params.a11y.enabled) {
                const i = r.params.a11y;
                m() && r.pagination.bullets.each(e=>{
                    const t = P(e);
                    r.params.pagination.clickable && (n(t),
                    r.params.pagination.renderBullet || (l(t, "button"),
                    d(t, i.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))),
                    t.is("." + r.params.pagination.bulletActiveClass) ? t.attr("aria-current", "true") : t.removeAttr("aria-current")
                }
                )
            }
        }
        ),
        i("destroy", ()=>{
            if (r.params.a11y.enabled) {
                let e, t;
                o && 0 < o.length && o.remove(),
                r.navigation && r.navigation.$nextEl && (e = r.navigation.$nextEl),
                r.navigation && r.navigation.$prevEl && (t = r.navigation.$prevEl),
                e && e.off("keydown", p),
                t && t.off("keydown", p),
                f() && r.pagination.$el.off("keydown", A(r.params.pagination.bulletClass), p),
                r.$el.off("focus", v, !0)
            }
        }
        )
    }
    , function(e) {
        let {swiper: r, extendParams: t, on: i} = e
          , o = (t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        }),
        !1)
          , s = {};
        const l = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , n = e=>{
            var t = L();
            let i;
            e = (i = e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e=>"" !== e),
            t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        }
          , a = (i,s)=>{
            const n = L();
            if (o && r.params.history.enabled) {
                let e;
                e = r.params.url ? new URL(r.params.url) : n.location;
                const a = r.slides.eq(s);
                let t = l(a.attr("data-history"));
                if (0 < r.params.history.root.length) {
                    let e = r.params.history.root;
                    "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    t = e + `/${i}/` + t
                } else
                    e.pathname.includes(i) || (t = i + "/" + t);
                r.params.history.keepQuery && (t += e.search);
                s = n.history.state;
                s && s.value === t || (r.params.history.replaceState ? n.history.replaceState({
                    value: t
                }, null, t) : n.history.pushState({
                    value: t
                }, null, t))
            }
        }
          , c = (i,s,n)=>{
            if (s)
                for (let e = 0, t = r.slides.length; e < t; e += 1) {
                    const a = r.slides.eq(e);
                    if (l(a.attr("data-history")) === s && !a.hasClass(r.params.slideDuplicateClass)) {
                        const s = a.index();
                        r.slideTo(s, i, n)
                    }
                }
            else
                r.slideTo(0, i, n)
        }
          , d = ()=>{
            s = n(r.params.url),
            c(r.params.speed, s.value, !1)
        }
        ;
        i("init", ()=>{
            if (r.params.history.enabled) {
                const e = L();
                if (r.params.history) {
                    if (!e.history || !e.history.pushState)
                        return void (r.params.history.enabled = !1,
                        r.params.hashNavigation.enabled = !0);
                    o = !0,
                    ((s = n(r.params.url)).key || s.value) && (c(0, s.value, r.params.runCallbacksOnInit),
                    r.params.history.replaceState || e.addEventListener("popstate", d))
                }
            }
        }
        ),
        i("destroy", ()=>{
            if (r.params.history.enabled) {
                const e = L();
                r.params.history.replaceState || e.removeEventListener("popstate", d)
            }
        }
        ),
        i("transitionEnd _freeModeNoMomentumRelease", ()=>{
            o && a(r.params.history.key, r.activeIndex)
        }
        ),
        i("slideChange", ()=>{
            o && r.params.cssMode && a(r.params.history.key, r.activeIndex)
        }
        )
    }
    , function(e) {
        let {swiper: n, extendParams: t, emit: i, on: s} = e
          , a = !1;
        const r = x()
          , o = L()
          , l = (t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        }),
        ()=>{
            i("hashChange");
            var e = r.location.hash.replace("#", "");
            e !== n.slides.eq(n.activeIndex).attr("data-hash") && void 0 !== (e = n.$wrapperEl.children(`.${n.params.slideClass}[data-hash="${e}"]`).index()) && n.slideTo(e)
        }
        )
          , c = ()=>{
            if (a && n.params.hashNavigation.enabled)
                if (n.params.hashNavigation.replaceState && o.history && o.history.replaceState)
                    o.history.replaceState(null, null, "#" + n.slides.eq(n.activeIndex).attr("data-hash") || ""),
                    i("hashSet");
                else {
                    const e = n.slides.eq(n.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    r.location.hash = t || "",
                    i("hashSet")
                }
        }
        ;
        s("init", ()=>{
            if (n.params.hashNavigation.enabled && !(!n.params.hashNavigation.enabled || n.params.history && n.params.history.enabled)) {
                a = !0;
                const i = r.location.hash.replace("#", "");
                if (i)
                    for (let e = 0, t = n.slides.length; e < t; e += 1) {
                        const s = n.slides.eq(e);
                        if ((s.attr("data-hash") || s.attr("data-history")) === i && !s.hasClass(n.params.slideDuplicateClass)) {
                            const i = s.index();
                            n.slideTo(i, 0, n.params.runCallbacksOnInit, !0)
                        }
                    }
                n.params.hashNavigation.watchState && P(o).on("hashchange", l)
            }
        }
        ),
        s("destroy", ()=>{
            n.params.hashNavigation.enabled && n.params.hashNavigation.watchState && P(o).off("hashchange", l)
        }
        ),
        s("transitionEnd _freeModeNoMomentumRelease", ()=>{
            a && c()
        }
        ),
        s("slideChange", ()=>{
            a && n.params.cssMode && c()
        }
        )
    }
    , function(e) {
        let s, {swiper: n, extendParams: t, on: i, emit: a} = e;
        function r() {
            const e = n.slides.eq(n.activeIndex);
            let t = n.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || n.params.autoplay.delay);
            const i = ()=>{
                let e;
                n.params.autoplay.reverseDirection ? n.params.loop ? (n.loopFix(),
                e = n.slidePrev(n.params.speed, !0, !0),
                a("autoplay")) : n.isBeginning ? n.params.autoplay.stopOnLastSlide ? l() : (e = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0),
                a("autoplay")) : (e = n.slidePrev(n.params.speed, !0, !0),
                a("autoplay")) : n.params.loop ? (n.loopFix(),
                e = n.slideNext(n.params.speed, !0, !0),
                a("autoplay")) : n.isEnd ? n.params.autoplay.stopOnLastSlide ? l() : (e = n.slideTo(0, n.params.speed, !0, !0),
                a("autoplay")) : (e = n.slideNext(n.params.speed, !0, !0),
                a("autoplay")),
                (n.params.cssMode && n.autoplay.running || !1 === e) && r()
            }
            ;
            clearTimeout(s),
            0 !== t ? s = _(()=>{
                i()
            }
            , t) : i()
        }
        function o() {
            return void 0 === s && !n.autoplay.running && (n.autoplay.running = !0,
            a("autoplayStart"),
            r(),
            !0)
        }
        function l() {
            return !!n.autoplay.running && void 0 !== s && (s && (clearTimeout(s),
            s = void 0),
            n.autoplay.running = !1,
            a("autoplayStop"),
            !0)
        }
        function c(e) {
            !n.autoplay.running || n.autoplay.paused || (s && clearTimeout(s),
            n.autoplay.paused = !0,
            0 !== e && n.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e=>{
                n.$wrapperEl[0].addEventListener(e, h)
            }
            ) : (n.autoplay.paused = !1,
            r()))
        }
        function d() {
            var e = x();
            "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState && n.autoplay.paused && (r(),
            n.autoplay.paused = !1)
        }
        function h(e) {
            n && !n.destroyed && n.$wrapperEl && e.target === n.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e=>{
                n.$wrapperEl[0].removeEventListener(e, h)
            }
            ),
            n.autoplay.paused = !1,
            (n.autoplay.running ? r : l)())
        }
        function u() {
            n.params.autoplay.disableOnInteraction ? l() : (a("autoplayPause"),
            c()),
            ["transitionend", "webkitTransitionEnd"].forEach(e=>{
                n.$wrapperEl[0].removeEventListener(e, h)
            }
            )
        }
        function p() {
            n.params.autoplay.disableOnInteraction || (n.autoplay.paused = !1,
            a("autoplayResume"),
            r())
        }
        n.autoplay = {
            running: !1,
            paused: !1
        },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        i("init", ()=>{
            n.params.autoplay.enabled && (o(),
            x().addEventListener("visibilitychange", d),
            n.params.autoplay.pauseOnMouseEnter && (n.$el.on("mouseenter", u),
            n.$el.on("mouseleave", p)))
        }
        ),
        i("beforeTransitionStart", (e,t,i)=>{
            n.autoplay.running && (i || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(t) : l())
        }
        ),
        i("sliderFirstMove", ()=>{
            n.autoplay.running && (n.params.autoplay.disableOnInteraction ? l : c)()
        }
        ),
        i("touchEnd", ()=>{
            n.params.cssMode && n.autoplay.paused && !n.params.autoplay.disableOnInteraction && r()
        }
        ),
        i("destroy", ()=>{
            n.$el.off("mouseenter", u),
            n.$el.off("mouseleave", p),
            n.autoplay.running && l(),
            x().removeEventListener("visibilitychange", d)
        }
        ),
        Object.assign(n.autoplay, {
            pause: c,
            run: r,
            start: o,
            stop: l
        })
    }
    , function(e) {
        let {swiper: l, extendParams: t, on: i} = e
          , s = (t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        }),
        !1)
          , n = !1;
        function a() {
            var e = l.thumbs.swiper;
            if (e && !e.destroyed) {
                const i = e.clickedIndex
                  , s = e.clickedSlide;
                if (!(s && P(s).hasClass(l.params.thumbs.slideThumbActiveClass) || null == i)) {
                    let t;
                    if (t = e.params.loop ? parseInt(P(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i,
                    l.params.loop) {
                        let e = l.activeIndex;
                        l.slides.eq(e).hasClass(l.params.slideDuplicateClass) && (l.loopFix(),
                        l._clientLeft = l.$wrapperEl[0].clientLeft,
                        e = l.activeIndex);
                        const i = l.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index()
                          , s = l.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
                        t = void 0 === i || void 0 !== s && s - e < e - i ? s : i
                    }
                    l.slideTo(t)
                }
            }
        }
        function r() {
            var e = l.params["thumbs"];
            if (s)
                return !1;
            s = !0;
            const t = l.constructor;
            return e.swiper instanceof t ? (l.thumbs.swiper = e.swiper,
            Object.assign(l.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            Object.assign(l.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : c(e.swiper) && (e = Object.assign({}, e.swiper),
            Object.assign(e, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            l.thumbs.swiper = new t(e),
            n = !0),
            l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass),
            l.thumbs.swiper.on("tap", a),
            !0
        }
        function o(s) {
            const n = l.thumbs.swiper;
            if (n && !n.destroyed) {
                const a = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView
                  , r = l.params.thumbs.autoScrollOffset
                  , o = r && !n.params.loop;
                if (l.realIndex !== n.realIndex || o) {
                    let e, t, i = n.activeIndex;
                    if (n.params.loop) {
                        n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(),
                        n._clientLeft = n.$wrapperEl[0].clientLeft,
                        i = n.activeIndex);
                        const s = n.slides.eq(i).prevAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index()
                          , a = n.slides.eq(i).nextAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index();
                        e = void 0 === s ? a : void 0 === a ? s : a - i == i - s ? 1 < n.params.slidesPerGroup ? a : i : a - i < i - s ? a : s,
                        t = l.activeIndex > l.previousIndex ? "next" : "prev"
                    } else
                        e = l.realIndex,
                        t = e > l.previousIndex ? "next" : "prev";
                    o && (e += "next" === t ? r : -1 * r),
                    n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(e) < 0 && (n.params.centeredSlides ? e = e > i ? e - Math.floor(a / 2) + 1 : e + Math.floor(a / 2) - 1 : e > i && n.params.slidesPerGroup,
                    n.slideTo(e, s ? 0 : void 0))
                }
                let t = 1;
                var i = l.params.thumbs.slideThumbActiveClass;
                if (1 < l.params.slidesPerView && !l.params.centeredSlides && (t = l.params.slidesPerView),
                l.params.thumbs.multipleActiveThumbs || (t = 1),
                t = Math.floor(t),
                n.slides.removeClass(i),
                n.params.loop || n.params.virtual && n.params.virtual.enabled)
                    for (let e = 0; e < t; e += 1)
                        n.$wrapperEl.children(`[data-swiper-slide-index="${l.realIndex + e}"]`).addClass(i);
                else
                    for (let e = 0; e < t; e += 1)
                        n.slides.eq(l.realIndex + e).addClass(i)
            }
        }
        l.thumbs = {
            swiper: null
        },
        i("beforeInit", ()=>{
            var e = l.params["thumbs"];
            e && e.swiper && (r(),
            o(!0))
        }
        ),
        i("slideChange update resize observerUpdate", ()=>{
            o()
        }
        ),
        i("setTransition", (e,t)=>{
            const i = l.thumbs.swiper;
            i && !i.destroyed && i.setTransition(t)
        }
        ),
        i("beforeDestroy", ()=>{
            const e = l.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        }
        ),
        Object.assign(l.thumbs, {
            init: r,
            update: o
        })
    }
    , function(e) {
        let {swiper: u, extendParams: t, emit: p, once: m} = e;
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(u, {
            freeMode: {
                onTouchStart: function() {
                    var e = u.getTranslate();
                    u.setTranslate(e),
                    u.setTransition(0),
                    u.touchEventsData.velocities.length = 0,
                    u.freeMode.onTouchEnd({
                        currentPos: u.rtl ? u.translate : -u.translate
                    })
                },
                onTouchMove: function() {
                    const {touchEventsData: e, touches: t} = u;
                    0 === e.velocities.length && e.velocities.push({
                        position: t[u.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: t[u.isHorizontal() ? "currentX" : "currentY"],
                        time: v()
                    })
                },
                onTouchEnd: function(a) {
                    let r = a["currentPos"];
                    const {params: o, $wrapperEl: l, rtlTranslate: c, snapGrid: d, touchEventsData: h} = u
                      , e = v() - h.touchStartTime;
                    if (r < -u.minTranslate())
                        u.slideTo(u.activeIndex);
                    else if (r > -u.maxTranslate())
                        u.slides.length < d.length ? u.slideTo(d.length - 1) : u.slideTo(u.slides.length - 1);
                    else {
                        if (o.freeMode.momentum) {
                            if (1 < h.velocities.length) {
                                const a = h.velocities.pop()
                                  , r = h.velocities.pop()
                                  , p = a.position - r.position
                                  , m = a.time - r.time;
                                u.velocity = p / m,
                                u.velocity /= 2,
                                Math.abs(u.velocity) < o.freeMode.minimumVelocity && (u.velocity = 0),
                                (150 < m || 300 < v() - a.time) && (u.velocity = 0)
                            } else
                                u.velocity = 0;
                            u.velocity *= o.freeMode.momentumVelocityRatio,
                            h.velocities.length = 0;
                            let e = 1e3 * o.freeMode.momentumRatio;
                            const r = u.velocity * e;
                            let i = u.translate + r;
                            c && (i = -i);
                            let t, s = !1;
                            a = 20 * Math.abs(u.velocity) * o.freeMode.momentumBounceRatio;
                            let n;
                            if (i < u.maxTranslate())
                                o.freeMode.momentumBounce ? (i + u.maxTranslate() < -a && (i = u.maxTranslate() - a),
                                t = u.maxTranslate(),
                                s = !0,
                                h.allowMomentumBounce = !0) : i = u.maxTranslate(),
                                o.loop && o.centeredSlides && (n = !0);
                            else if (i > u.minTranslate())
                                o.freeMode.momentumBounce ? (i - u.minTranslate() > a && (i = u.minTranslate() + a),
                                t = u.minTranslate(),
                                s = !0,
                                h.allowMomentumBounce = !0) : i = u.minTranslate(),
                                o.loop && o.centeredSlides && (n = !0);
                            else if (o.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < d.length; e += 1)
                                    if (d[e] > -i) {
                                        t = e;
                                        break
                                    }
                                i = -(i = Math.abs(d[t] - i) < Math.abs(d[t - 1] - i) || "next" === u.swipeDirection ? d[t] : d[t - 1])
                            }
                            if (n && m("transitionEnd", ()=>{
                                u.loopFix()
                            }
                            ),
                            0 !== u.velocity) {
                                if (e = c ? Math.abs((-i - u.translate) / u.velocity) : Math.abs((i - u.translate) / u.velocity),
                                o.freeMode.sticky) {
                                    const r = Math.abs((c ? -i : i) - u.translate)
                                      , p = u.slidesSizesGrid[u.activeIndex];
                                    e = r < p ? o.speed : r < 2 * p ? 1.5 * o.speed : 2.5 * o.speed
                                }
                            } else if (o.freeMode.sticky)
                                return void u.slideToClosest();
                            o.freeMode.momentumBounce && s ? (u.updateProgress(t),
                            u.setTransition(e),
                            u.setTranslate(i),
                            u.transitionStart(!0, u.swipeDirection),
                            u.animating = !0,
                            l.transitionEnd(()=>{
                                u && !u.destroyed && h.allowMomentumBounce && (p("momentumBounce"),
                                u.setTransition(o.speed),
                                setTimeout(()=>{
                                    u.setTranslate(t),
                                    l.transitionEnd(()=>{
                                        u && !u.destroyed && u.transitionEnd()
                                    }
                                    )
                                }
                                , 0))
                            }
                            )) : u.velocity ? (p("_freeModeNoMomentumRelease"),
                            u.updateProgress(i),
                            u.setTransition(e),
                            u.setTranslate(i),
                            u.transitionStart(!0, u.swipeDirection),
                            u.animating || (u.animating = !0,
                            l.transitionEnd(()=>{
                                u && !u.destroyed && u.transitionEnd()
                            }
                            ))) : u.updateProgress(i),
                            u.updateActiveIndex(),
                            u.updateSlidesClasses()
                        } else {
                            if (o.freeMode.sticky)
                                return void u.slideToClosest();
                            o.freeMode && p("_freeModeNoMomentumRelease")
                        }
                        (!o.freeMode.momentum || e >= o.longSwipesMs) && (u.updateProgress(),
                        u.updateActiveIndex(),
                        u.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function(e) {
        let h, u, p, {swiper: m, extendParams: t} = e;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        m.grid = {
            initSlides: e=>{
                var t = m.params["slidesPerView"]
                  , {rows: i, fill: s} = m.params.grid;
                u = h / i,
                p = Math.floor(e / i),
                h = Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i,
                "auto" !== t && "row" === s && (h = Math.max(h, t * i))
            }
            ,
            updateSlide: (e,t,i,s)=>{
                var {slidesPerGroup: n, spaceBetween: a} = m.params
                  , {rows: r, fill: o} = m.params.grid;
                let l, c, d;
                if ("row" === o && 1 < n) {
                    const u = Math.floor(e / (n * r))
                      , p = e - r * n * u
                      , m = 0 === u ? n : Math.min(Math.ceil((i - u * r * n) / r), n);
                    d = Math.floor(p / m),
                    l = (c = p - d * m + u * n) + d * h / r,
                    t.css({
                        "-webkit-order": l,
                        order: l
                    })
                } else
                    "column" === o ? (c = Math.floor(e / r),
                    d = e - c * r,
                    (c > p || c === p && d === r - 1) && ((d += 1) >= r && (d = 0,
                    c += 1))) : (d = Math.floor(e / u),
                    c = e - d * u);
                t.css(s("margin-top"), 0 !== d ? a && a + "px" : "")
            }
            ,
            updateWrapperSize: (i,s,e)=>{
                var {spaceBetween: t, centeredSlides: n, roundLengths: a} = m.params
                  , r = m.params.grid["rows"];
                if (m.virtualSize = (i + t) * h,
                m.virtualSize = Math.ceil(m.virtualSize / r) - t,
                m.$wrapperEl.css({
                    [e("width")]: m.virtualSize + t + "px"
                }),
                n) {
                    s.splice(0, s.length);
                    const i = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let e = s[t];
                        a && (e = Math.floor(e)),
                        s[t] < m.virtualSize + s[0] && i.push(e)
                    }
                    s.push(...i)
                }
            }
        }
    }
    , function(e) {
        e = e.swiper;
        Object.assign(e, {
            appendSlide: function(t) {
                const {$wrapperEl: i, params: e} = this;
                if (e.loop && this.loopDestroy(),
                "object" == typeof t && "length"in t)
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && i.append(t[e]);
                else
                    i.append(t);
                e.loop && this.loopCreate(),
                e.observer || this.update()
            }
            .bind(e),
            prependSlide: function(t) {
                const {params: e, $wrapperEl: i, activeIndex: s} = this;
                e.loop && this.loopDestroy();
                let n = s + 1;
                if ("object" == typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && i.prepend(t[e]);
                    n = s + t.length
                } else
                    i.prepend(t);
                e.loop && this.loopCreate(),
                e.observer || this.update(),
                this.slideTo(n, 0, !1)
            }
            .bind(e),
            addSlide: function(t, i) {
                const s = this
                  , {$wrapperEl: n, params: a, activeIndex: e} = s;
                let r = e;
                a.loop && (r -= s.loopedSlides,
                s.loopDestroy(),
                s.slides = n.children("." + a.slideClass));
                var o = s.slides.length;
                if (t <= 0)
                    s.prependSlide(i);
                else if (o <= t)
                    s.appendSlide(i);
                else {
                    let e = r > t ? r + 1 : r;
                    const l = [];
                    for (let e = o - 1; e >= t; --e) {
                        const t = s.slides.eq(e);
                        t.remove(),
                        l.unshift(t)
                    }
                    if ("object" == typeof i && "length"in i) {
                        for (let e = 0; e < i.length; e += 1)
                            i[e] && n.append(i[e]);
                        e = r > t ? r + i.length : r
                    } else
                        n.append(i);
                    for (let e = 0; e < l.length; e += 1)
                        n.append(l[e]);
                    a.loop && s.loopCreate(),
                    a.observer || s.update(),
                    a.loop ? s.slideTo(e + s.loopedSlides, 0, !1) : s.slideTo(e, 0, !1)
                }
            }
            .bind(e),
            removeSlide: function(t) {
                const i = this
                  , {params: e, $wrapperEl: s, activeIndex: n} = i;
                let a = n;
                e.loop && (a -= i.loopedSlides,
                i.loopDestroy(),
                i.slides = s.children("." + e.slideClass));
                let r, o = a;
                if ("object" == typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        r = t[e],
                        i.slides[r] && i.slides.eq(r).remove(),
                        r < o && --o;
                    o = Math.max(o, 0)
                } else
                    r = t,
                    i.slides[r] && i.slides.eq(r).remove(),
                    r < o && --o,
                    o = Math.max(o, 0);
                e.loop && i.loopCreate(),
                e.observer || i.update(),
                e.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
            }
            .bind(e),
            removeAllSlides: function() {
                const t = [];
                for (let e = 0; e < this.slides.length; e += 1)
                    t.push(e);
                this.removeSlide(t)
            }
            .bind(e)
        })
    }
    , function(e) {
        let {swiper: r, extendParams: t, on: i} = e;
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        M({
            effect: "fade",
            swiper: r,
            on: i,
            setTranslate: ()=>{
                const s = r["slides"]
                  , n = r.params.fadeEffect;
                for (let i = 0; i < s.length; i += 1) {
                    const s = r.slides.eq(i);
                    let e = -s[0].swiperSlideOffset
                      , t = (r.params.virtualTranslate || (e -= r.translate),
                    0);
                    r.isHorizontal() || (t = e,
                    e = 0);
                    var a = r.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                    I(n, s).css({
                        opacity: a
                    }).transform(`translate3d(${e}px, ${t}px, 0px)`)
                }
            }
            ,
            setTransition: e=>{
                var t = r.params.fadeEffect["transformEl"];
                (t ? r.slides.find(t) : r.slides).transition(e),
                O({
                    swiper: r,
                    duration: e,
                    transformEl: t,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !r.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: f, extendParams: t, on: i} = e;
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const g = (e,t,i)=>{
            let s = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
              , n = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === s.length && (s = P(`<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`),
            e.append(s)),
            0 === n.length && (n = P(`<div class="swiper-slide-shadow-${i ? "right" : "bottom"}"></div>`),
            e.append(n)),
            s.length && (s[0].style.opacity = Math.max(-t, 0)),
            n.length && (n[0].style.opacity = Math.max(t, 0))
        }
        ;
        M({
            effect: "cube",
            swiper: f,
            on: i,
            setTranslate: ()=>{
                const {$el: e, $wrapperEl: t, slides: o, width: i, height: s, rtlTranslate: l, size: c, browser: n} = f
                  , d = f.params.cubeEffect
                  , h = f.isHorizontal()
                  , u = f.virtual && f.params.virtual.enabled;
                let a, p = 0;
                d.shadow && (h ? (0 === (a = t.find(".swiper-cube-shadow")).length && (a = P('<div class="swiper-cube-shadow"></div>'),
                t.append(a)),
                a.css({
                    height: i + "px"
                })) : 0 === (a = e.find(".swiper-cube-shadow")).length && (a = P('<div class="swiper-cube-shadow"></div>'),
                e.append(a)));
                for (let r = 0; r < o.length; r += 1) {
                    const f = o.eq(r);
                    let e = r
                      , t = 90 * (e = u ? parseInt(f.attr("data-swiper-slide-index"), 10) : e)
                      , i = Math.floor(t / 360);
                    l && (t = -t,
                    i = Math.floor(-t / 360));
                    const P = Math.max(Math.min(f[0].progress, 1), -1);
                    let s = 0
                      , n = 0
                      , a = 0;
                    e % 4 == 0 ? (s = 4 * -i * c,
                    a = 0) : (e - 1) % 4 == 0 ? (s = 0,
                    a = 4 * -i * c) : (e - 2) % 4 == 0 ? (s = c + 4 * i * c,
                    a = c) : (e - 3) % 4 == 0 && (s = -c,
                    a = 3 * c + 4 * c * i),
                    l && (s = -s),
                    h || (n = s,
                    s = 0);
                    var m = `rotateX(${h ? 0 : -t}deg) rotateY(${h ? t : 0}deg) translate3d(${s}px, ${n}px, ${a}px)`;
                    P <= 1 && -1 < P && (p = 90 * e + 90 * P,
                    l && (p = 90 * -e - 90 * P)),
                    f.transform(m),
                    d.slideShadows && g(f, P, h)
                }
                if (t.css({
                    "-webkit-transform-origin": `50% 50% -${c / 2}px`,
                    "transform-origin": `50% 50% -${c / 2}px`
                }),
                d.shadow)
                    if (h)
                        a.transform(`translate3d(0px, ${i / 2 + d.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);
                    else {
                        const e = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90)
                          , f = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , t = d.shadowScale
                          , o = d.shadowScale / f
                          , g = d.shadowOffset;
                        a.transform(`scale3d(${t}, 1, ${o}) translate3d(0px, ${s / 2 + g}px, ${-s / 2 / o}px) rotateX(-90deg)`)
                    }
                var r = n.isSafari || n.isWebView ? -c / 2 : 0;
                t.transform(`translate3d(0px,0,${r}px) rotateX(${f.isHorizontal() ? 0 : p}deg) rotateY(${f.isHorizontal() ? -p : 0}deg)`),
                t[0].style.setProperty("--swiper-cube-translate-z", r + "px")
            }
            ,
            setTransition: e=>{
                const {$el: t, slides: i} = f;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                f.params.cubeEffect.shadow && !f.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
            ,
            recreateShadows: ()=>{
                const i = f.isHorizontal();
                f.slides.each(e=>{
                    var t = Math.max(Math.min(e.progress, 1), -1);
                    g(P(e), t, i)
                }
                )
            }
            ,
            getEffectParams: ()=>f.params.cubeEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function(e) {
        let {swiper: h, extendParams: t, on: i} = e;
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const u = (e,t,i)=>{
            let s = h.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
              , n = h.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === s.length && (s = z(i, e, h.isHorizontal() ? "left" : "top")),
            0 === n.length && (n = z(i, e, h.isHorizontal() ? "right" : "bottom")),
            s.length && (s[0].style.opacity = Math.max(-t, 0)),
            n.length && (n[0].style.opacity = Math.max(t, 0))
        }
        ;
        M({
            effect: "flip",
            swiper: h,
            on: i,
            setTranslate: ()=>{
                const {slides: r, rtlTranslate: o} = h
                  , l = h.params.flipEffect;
                for (let a = 0; a < r.length; a += 1) {
                    const d = r.eq(a);
                    let e = d[0].progress;
                    h.params.flipEffect.limitRotation && (e = Math.max(Math.min(d[0].progress, 1), -1));
                    var c = d[0].swiperSlideOffset;
                    let t = -180 * e
                      , i = 0
                      , s = h.params.cssMode ? -c - h.translate : -c
                      , n = 0;
                    h.isHorizontal() ? o && (t = -t) : (n = s,
                    s = 0,
                    i = -t,
                    t = 0),
                    d[0].style.zIndex = -Math.abs(Math.round(e)) + r.length,
                    l.slideShadows && u(d, e, l);
                    c = `translate3d(${s}px, ${n}px, 0px) rotateX(${i}deg) rotateY(${t}deg)`;
                    I(l, d).transform(c)
                }
            }
            ,
            setTransition: e=>{
                var t = h.params.flipEffect["transformEl"];
                (t ? h.slides.find(t) : h.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                O({
                    swiper: h,
                    duration: e,
                    transformEl: t
                })
            }
            ,
            recreateShadows: ()=>{
                const s = h.params.flipEffect;
                h.slides.each(e=>{
                    var t = P(e);
                    let i = t[0].progress;
                    h.params.flipEffect.limitRotation && (i = Math.max(Math.min(e.progress, 1), -1)),
                    u(t, i, s)
                }
                )
            }
            ,
            getEffectParams: ()=>h.params.flipEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !h.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: b, extendParams: t, on: i} = e;
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        M({
            effect: "coverflow",
            swiper: b,
            on: i,
            setTranslate: ()=>{
                const {width: e, height: l, slides: c, slidesSizesGrid: d} = b
                  , h = b.params.coverflowEffect
                  , u = b.isHorizontal()
                  , p = b.translate
                  , m = u ? e / 2 - p : l / 2 - p
                  , f = u ? h.rotate : -h.rotate
                  , g = h.depth;
                for (let o = 0, e = c.length; o < e; o += 1) {
                    const b = c.eq(o)
                      , l = d[o]
                      , p = (m - b[0].swiperSlideOffset - l / 2) / l
                      , y = "function" == typeof h.modifier ? h.modifier(p) : p * h.modifier;
                    let e = u ? f * y : 0
                      , t = u ? 0 : f * y
                      , i = -g * Math.abs(y)
                      , s = h.stretch
                      , n = ("string" == typeof s && -1 !== s.indexOf("%") && (s = parseFloat(h.stretch) / 100 * l),
                    u ? 0 : s * y)
                      , a = u ? s * y : 0
                      , r = 1 - (1 - h.scale) * Math.abs(y);
                    Math.abs(a) < .001 && (a = 0),
                    Math.abs(n) < .001 && (n = 0),
                    Math.abs(i) < .001 && (i = 0),
                    Math.abs(e) < .001 && (e = 0),
                    Math.abs(t) < .001 && (t = 0),
                    Math.abs(r) < .001 && (r = 0);
                    var v = `translate3d(${a}px,${n}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${r})`;
                    if (I(h, b).transform(v),
                    b[0].style.zIndex = 1 - Math.abs(Math.round(y)),
                    h.slideShadows) {
                        let e = u ? b.find(".swiper-slide-shadow-left") : b.find(".swiper-slide-shadow-top")
                          , t = u ? b.find(".swiper-slide-shadow-right") : b.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = z(h, b, u ? "left" : "top")),
                        0 === t.length && (t = z(h, b, u ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = 0 < y ? y : 0),
                        t.length && (t[0].style.opacity = 0 < -y ? -y : 0)
                    }
                }
            }
            ,
            setTransition: e=>{
                var t = b.params.coverflowEffect["transformEl"];
                (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
        })
    }
    , function(e) {
        let {swiper: b, extendParams: t, on: i} = e;
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        M({
            effect: "creative",
            swiper: b,
            on: i,
            setTranslate: ()=>{
                const {slides: n, $wrapperEl: e, slidesSizesGrid: a} = b
                  , r = b.params.creativeEffect
                  , o = r["progressMultiplier"]
                  , l = b.params.centeredSlides;
                if (l) {
                    const n = a[0] / 2 - b.params.slidesOffsetBefore || 0;
                    e.transform(`translateX(calc(50% - ${n}px))`)
                }
                for (let s = 0; s < n.length; s += 1) {
                    const a = n.eq(s)
                      , p = a[0].progress
                      , m = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let e = m;
                    l || (e = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const f = a[0].swiperSlideOffset
                      , g = [b.params.cssMode ? -f - b.translate : -f, 0, 0]
                      , v = [0, 0, 0];
                    let t = !1
                      , i = (b.isHorizontal() || (g[1] = g[0],
                    g[0] = 0),
                    {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    });
                    m < 0 ? (i = r.next,
                    t = !0) : 0 < m && (i = r.prev,
                    t = !0),
                    g.forEach((e,t)=>{
                        g[t] = `calc(${e}px + (${e = i.translate[t],
                        "string" == typeof e ? e : e + "px"} * ${Math.abs(m * o)}))`
                    }
                    ),
                    v.forEach((e,t)=>{
                        v[t] = i.rotate[t] * Math.abs(m * o)
                    }
                    ),
                    a[0].style.zIndex = -Math.abs(Math.round(p)) + n.length;
                    var c = g.join(", ")
                      , d = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`
                      , h = e < 0 ? `scale(${1 + (1 - i.scale) * e * o})` : `scale(${1 - (1 - i.scale) * e * o})`
                      , u = e < 0 ? 1 + (1 - i.opacity) * e * o : 1 - (1 - i.opacity) * e * o
                      , c = `translate3d(${c}) ${d} ` + h;
                    if (t && i.shadow || !t) {
                        let e = a.children(".swiper-slide-shadow");
                        if ((e = 0 === e.length && i.shadow ? z(r, a) : e).length) {
                            const b = r.shadowPerProgress ? m * (1 / r.limitProgress) : m;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(b), 0), 1)
                        }
                    }
                    const y = I(r, a);
                    y.transform(c).css({
                        opacity: u
                    }),
                    i.origin && y.css("transform-origin", i.origin)
                }
            }
            ,
            setTransition: e=>{
                var t = b.params.creativeEffect["transformEl"];
                (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                O({
                    swiper: b,
                    duration: e,
                    transformEl: t,
                    allSlides: !0
                })
            }
            ,
            perspective: ()=>b.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !b.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: b, extendParams: t, on: i} = e;
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0
            }
        }),
        M({
            effect: "cards",
            swiper: b,
            on: i,
            setTranslate: ()=>{
                const {slides: o, activeIndex: l} = b
                  , c = b.params.cardsEffect
                  , {startTranslate: d, isTouched: h} = b.touchEventsData
                  , u = b.translate;
                for (let r = 0; r < o.length; r += 1) {
                    const g = o.eq(r)
                      , v = g[0].progress
                      , y = Math.min(Math.max(v, -4), 4);
                    let e = g[0].swiperSlideOffset
                      , t = (b.params.centeredSlides && !b.params.cssMode && b.$wrapperEl.transform(`translateX(${b.minTranslate()}px)`),
                    b.params.centeredSlides && b.params.cssMode && (e -= o[0].swiperSlideOffset),
                    b.params.cssMode ? -e - b.translate : -e)
                      , i = 0;
                    var p = -100 * Math.abs(y);
                    let s = 1
                      , n = -2 * y
                      , a = 8 - .75 * Math.abs(y);
                    var m = b.virtual && b.params.virtual.enabled ? b.virtual.from + r : r
                      , f = (m === l || m === l - 1) && 0 < y && y < 1 && (h || b.params.cssMode) && u < d
                      , m = (m === l || m === l + 1) && y < 0 && -1 < y && (h || b.params.cssMode) && d < u;
                    if (f || m) {
                        const o = (1 - Math.abs((Math.abs(y) - .5) / .5)) ** .5;
                        n += -28 * y * o,
                        s += -.5 * o,
                        a += 96 * o,
                        i = -25 * o * Math.abs(y) + "%"
                    }
                    if (t = y < 0 ? `calc(${t}px + (${a * Math.abs(y)}%))` : 0 < y ? `calc(${t}px + (-${a * Math.abs(y)}%))` : t + "px",
                    !b.isHorizontal()) {
                        const o = i;
                        i = t,
                        t = o
                    }
                    f = y < 0 ? "" + (1 + (1 - s) * y) : "" + (1 - (1 - s) * y),
                    m = `
        translate3d(${t}, ${i}, ${p}px)
        rotateZ(${c.rotate ? n : 0}deg)
        scale(${f})
      `;
                    if (c.slideShadows) {
                        let e = g.find(".swiper-slide-shadow");
                        (e = 0 === e.length ? z(c, g) : e).length && (e[0].style.opacity = Math.min(Math.max((Math.abs(y) - .5) / .5, 0), 1))
                    }
                    g[0].style.zIndex = -Math.abs(Math.round(v)) + o.length,
                    I(c, g).transform(m)
                }
            }
            ,
            setTransition: e=>{
                var t = b.params.cardsEffect["transformEl"];
                (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                O({
                    swiper: b,
                    duration: e,
                    transformEl: t
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !b.params.cssMode
            })
        })
    }
    ]),
    S
});
