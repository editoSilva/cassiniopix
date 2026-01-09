import {
    f as _1,
    _ as E,
    k as h,
    l as p,
    m as o,
    u as O,
    I as Bt,
    P as w1,
    a as F1,
    o as fe,
    a3 as Ce,
    g as et,
    s as _t,
    G as z,
    q as Lt,
    a4 as a1,
    F as It,
    S as U1,
    r as G1,
    a5 as K1,
    N as F,
    K as Qt,
    J as C1,
    j as ct,
    y as tt,
    E as b,
    B as Pt,
    C as Dt,
    R as Ee,
    a0 as Me,
    L as Se,
    T as be,
    D as C,
    z as $,
    t as ie,
    x as Gt,
    M as yt,
  } from "./app-a41775fa.js";
  var J1 = (function () {
      function e(t, i) {
        i === void 0 && (i = []),
          (this._eventType = t),
          (this._eventFunctions = i);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._eventFunctions.forEach(function (i) {
            typeof window < "u" && window.addEventListener(t._eventType, i);
          });
        }),
        e
      );
    })(),
    X1 = (function () {
      function e() {
        this._instances = {
          Accordion: {},
          Carousel: {},
          Collapse: {},
          Dial: {},
          Dismiss: {},
          Drawer: {},
          Dropdown: {},
          Modal: {},
          Popover: {},
          Tabs: {},
          Tooltip: {},
        };
      }
      return (
        (e.prototype.addInstance = function (t, i, s, a) {
          if ((a === void 0 && (a = !1), !this._instances[t]))
            return (
              console.warn("Flowbite: Component ".concat(t, " does not exist.")),
              !1
            );
          if (this._instances[t][s] && !a) {
            console.warn(
              "Flowbite: Instance with ID ".concat(s, " already exists.")
            );
            return;
          }
          this._instances[t][s || this._generateRandomId()] = i;
        }),
        (e.prototype.getAllInstances = function () {
          return this._instances;
        }),
        (e.prototype.getInstances = function (t) {
          return this._instances[t]
            ? this._instances[t]
            : (console.warn("Flowbite: Component ".concat(t, " does not exist.")),
              !1);
        }),
        (e.prototype.getInstance = function (t, i) {
          if (this._componentAndInstanceCheck(t, i)) {
            if (!this._instances[t][i]) {
              console.warn(
                "Flowbite: Instance with ID ".concat(i, " does not exist.")
              );
              return;
            }
            return this._instances[t][i];
          }
        }),
        (e.prototype.destroyAndRemoveInstance = function (t, i) {
          this._componentAndInstanceCheck(t, i) &&
            (this.destroyInstanceObject(t, i), this.removeInstance(t, i));
        }),
        (e.prototype.removeInstance = function (t, i) {
          this._componentAndInstanceCheck(t, i) &&
            this._instances[t][i].removeInstance();
        }),
        (e.prototype.destroyInstanceObject = function (t, i) {
          this._componentAndInstanceCheck(t, i) &&
            this._instances[t][i].destroy();
        }),
        (e.prototype.instanceExists = function (t, i) {
          return !(!this._instances[t] || !this._instances[t][i]);
        }),
        (e.prototype._generateRandomId = function () {
          return Math.random().toString(36).substr(2, 9);
        }),
        (e.prototype._componentAndInstanceCheck = function (t, i) {
          return this._instances[t]
            ? this._instances[t][i]
              ? !0
              : (console.warn(
                  "Flowbite: Instance with ID ".concat(i, " already exists.")
                ),
                !1)
            : (console.warn("Flowbite: Component ".concat(t, " does not exist.")),
              !1);
        }),
        e
      );
    })(),
    g = new X1();
  typeof window < "u" && (window.FlowbiteInstances = g);
  var se =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (se =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          se.apply(this, arguments)
        );
      },
    oe = {
      alwaysOpen: !1,
      activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
      inactiveClasses: "text-gray-500 dark:text-gray-400",
      onOpen: function () {},
      onClose: function () {},
      onToggle: function () {},
    },
    b1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = []),
          s === void 0 && (s = oe),
          (this._accordionEl = t),
          (this._items = i),
          (this._options = se(se({}, oe), s)),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Accordion", this, this._accordionEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._items.length &&
            !this._initialized &&
            (this._items.forEach(function (i) {
              i.active && t.open(i.id);
              var s = function () {
                t.toggle(i.id);
              };
              i.triggerEl.addEventListener("click", s), (i.clickHandler = s);
            }),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._items.length &&
            this._initialized &&
            (this._items.forEach(function (t) {
              t.triggerEl.removeEventListener("click", t.clickHandler),
                delete t.clickHandler;
            }),
            (this._initialized = !1));
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Accordion", this._accordionEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.getItem = function (t) {
          return this._items.filter(function (i) {
            return i.id === t;
          })[0];
        }),
        (e.prototype.open = function (t) {
          var i,
            s,
            a = this,
            n = this.getItem(t);
          this._options.alwaysOpen ||
            this._items.map(function (r) {
              var l, c;
              r !== n &&
                ((l = r.triggerEl.classList).remove.apply(
                  l,
                  a._options.activeClasses.split(" ")
                ),
                (c = r.triggerEl.classList).add.apply(
                  c,
                  a._options.inactiveClasses.split(" ")
                ),
                r.targetEl.classList.add("hidden"),
                r.triggerEl.setAttribute("aria-expanded", "false"),
                (r.active = !1),
                r.iconEl && r.iconEl.classList.remove("rotate-180"));
            }),
            (i = n.triggerEl.classList).add.apply(
              i,
              this._options.activeClasses.split(" ")
            ),
            (s = n.triggerEl.classList).remove.apply(
              s,
              this._options.inactiveClasses.split(" ")
            ),
            n.triggerEl.setAttribute("aria-expanded", "true"),
            n.targetEl.classList.remove("hidden"),
            (n.active = !0),
            n.iconEl && n.iconEl.classList.add("rotate-180"),
            this._options.onOpen(this, n);
        }),
        (e.prototype.toggle = function (t) {
          var i = this.getItem(t);
          i.active ? this.close(t) : this.open(t),
            this._options.onToggle(this, i);
        }),
        (e.prototype.close = function (t) {
          var i,
            s,
            a = this.getItem(t);
          (i = a.triggerEl.classList).remove.apply(
            i,
            this._options.activeClasses.split(" ")
          ),
            (s = a.triggerEl.classList).add.apply(
              s,
              this._options.inactiveClasses.split(" ")
            ),
            a.targetEl.classList.add("hidden"),
            a.triggerEl.setAttribute("aria-expanded", "false"),
            (a.active = !1),
            a.iconEl && a.iconEl.classList.remove("rotate-180"),
            this._options.onClose(this, a);
        }),
        e
      );
    })();
  function Ae() {
    document.querySelectorAll("[data-accordion]").forEach(function (e) {
      var t = e.getAttribute("data-accordion"),
        i = e.getAttribute("data-active-classes"),
        s = e.getAttribute("data-inactive-classes"),
        a = [];
      e.querySelectorAll("[data-accordion-target]").forEach(function (n) {
        if (n.closest("[data-accordion]") === e) {
          var r = {
            id: n.getAttribute("data-accordion-target"),
            triggerEl: n,
            targetEl: document.querySelector(
              n.getAttribute("data-accordion-target")
            ),
            iconEl: n.querySelector("[data-accordion-icon]"),
            active: n.getAttribute("aria-expanded") === "true",
          };
          a.push(r);
        }
      }),
        new b1(e, a, {
          alwaysOpen: t === "open",
          activeClasses: i || oe.activeClasses,
          inactiveClasses: s || oe.inactiveClasses,
        });
    });
  }
  typeof window < "u" && ((window.Accordion = b1), (window.initAccordions = Ae));
  var ae =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (ae =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          ae.apply(this, arguments)
        );
      },
    n1 = {
      onCollapse: function () {},
      onExpand: function () {},
      onToggle: function () {},
    },
    y1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = n1),
          (this._targetEl = t),
          (this._triggerEl = i),
          (this._options = ae(ae({}, n1), s)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Collapse", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._triggerEl.hasAttribute("aria-expanded")
              ? (this._visible =
                  this._triggerEl.getAttribute("aria-expanded") === "true")
              : (this._visible = !this._targetEl.classList.contains("hidden")),
            (this._clickHandler = function () {
              t.toggle();
            }),
            this._triggerEl.addEventListener("click", this._clickHandler),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._triggerEl &&
            this._initialized &&
            (this._triggerEl.removeEventListener("click", this._clickHandler),
            (this._initialized = !1));
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Collapse", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.collapse = function () {
          this._targetEl.classList.add("hidden"),
            this._triggerEl &&
              this._triggerEl.setAttribute("aria-expanded", "false"),
            (this._visible = !1),
            this._options.onCollapse(this);
        }),
        (e.prototype.expand = function () {
          this._targetEl.classList.remove("hidden"),
            this._triggerEl &&
              this._triggerEl.setAttribute("aria-expanded", "true"),
            (this._visible = !0),
            this._options.onExpand(this);
        }),
        (e.prototype.toggle = function () {
          this._visible ? this.collapse() : this.expand(),
            this._options.onToggle(this);
        }),
        e
      );
    })();
  function He() {
    document.querySelectorAll("[data-collapse-toggle]").forEach(function (e) {
      var t = e.getAttribute("data-collapse-toggle"),
        i = document.getElementById(t);
      i
        ? new y1(i, e)
        : console.error(
            'The target element with id "'.concat(
              t,
              '" does not exist. Please check the data-collapse-toggle attribute.'
            )
          );
    });
  }
  typeof window < "u" && ((window.Collapse = y1), (window.initCollapses = He));
  var gt =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (gt =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          gt.apply(this, arguments)
        );
      },
    te = {
      defaultPosition: 0,
      indicators: {
        items: [],
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
      },
      interval: 3e3,
      onNext: function () {},
      onPrev: function () {},
      onChange: function () {},
    },
    x1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = []),
          s === void 0 && (s = te),
          (this._carouselEl = t),
          (this._items = i),
          (this._options = gt(gt(gt({}, te), s), {
            indicators: gt(gt({}, te.indicators), s.indicators),
          })),
          (this._activeItem = this.getItem(this._options.defaultPosition)),
          (this._indicators = this._options.indicators.items),
          (this._intervalDuration = this._options.interval),
          (this._intervalInstance = null),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Carousel", this, this._carouselEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._items.length &&
            !this._initialized &&
            (this._items.map(function (i) {
              i.el.classList.add(
                "absolute",
                "inset-0",
                "transition-transform",
                "transform"
              );
            }),
            this._getActiveItem()
              ? this.slideTo(this._getActiveItem().position)
              : this.slideTo(0),
            this._indicators.map(function (i, s) {
              i.el.addEventListener("click", function () {
                t.slideTo(s);
              });
            }),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._initialized && (this._initialized = !1);
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Carousel", this._carouselEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.getItem = function (t) {
          return this._items[t];
        }),
        (e.prototype.slideTo = function (t) {
          var i = this._items[t],
            s = {
              left:
                i.position === 0
                  ? this._items[this._items.length - 1]
                  : this._items[i.position - 1],
              middle: i,
              right:
                i.position === this._items.length - 1
                  ? this._items[0]
                  : this._items[i.position + 1],
            };
          this._rotate(s),
            this._setActiveItem(i),
            this._intervalInstance && (this.pause(), this.cycle()),
            this._options.onChange(this);
        }),
        (e.prototype.next = function () {
          var t = this._getActiveItem(),
            i = null;
          t.position === this._items.length - 1
            ? (i = this._items[0])
            : (i = this._items[t.position + 1]),
            this.slideTo(i.position),
            this._options.onNext(this);
        }),
        (e.prototype.prev = function () {
          var t = this._getActiveItem(),
            i = null;
          t.position === 0
            ? (i = this._items[this._items.length - 1])
            : (i = this._items[t.position - 1]),
            this.slideTo(i.position),
            this._options.onPrev(this);
        }),
        (e.prototype._rotate = function (t) {
          this._items.map(function (i) {
            i.el.classList.add("hidden");
          }),
            t.left.el.classList.remove(
              "-translate-x-full",
              "translate-x-full",
              "translate-x-0",
              "hidden",
              "z-20"
            ),
            t.left.el.classList.add("-translate-x-full", "z-10"),
            t.middle.el.classList.remove(
              "-translate-x-full",
              "translate-x-full",
              "translate-x-0",
              "hidden",
              "z-10"
            ),
            t.middle.el.classList.add("translate-x-0", "z-20"),
            t.right.el.classList.remove(
              "-translate-x-full",
              "translate-x-full",
              "translate-x-0",
              "hidden",
              "z-20"
            ),
            t.right.el.classList.add("translate-x-full", "z-10");
        }),
        (e.prototype.cycle = function () {
          var t = this;
          typeof window < "u" &&
            (this._intervalInstance = window.setInterval(function () {
              t.next();
            }, this._intervalDuration));
        }),
        (e.prototype.pause = function () {
          clearInterval(this._intervalInstance);
        }),
        (e.prototype._getActiveItem = function () {
          return this._activeItem;
        }),
        (e.prototype._setActiveItem = function (t) {
          var i,
            s,
            a = this;
          this._activeItem = t;
          var n = t.position;
          this._indicators.length &&
            (this._indicators.map(function (r) {
              var l, c;
              r.el.setAttribute("aria-current", "false"),
                (l = r.el.classList).remove.apply(
                  l,
                  a._options.indicators.activeClasses.split(" ")
                ),
                (c = r.el.classList).add.apply(
                  c,
                  a._options.indicators.inactiveClasses.split(" ")
                );
            }),
            (i = this._indicators[n].el.classList).add.apply(
              i,
              this._options.indicators.activeClasses.split(" ")
            ),
            (s = this._indicators[n].el.classList).remove.apply(
              s,
              this._options.indicators.inactiveClasses.split(" ")
            ),
            this._indicators[n].el.setAttribute("aria-current", "true"));
        }),
        e
      );
    })();
  function ze() {
    document.querySelectorAll("[data-carousel]").forEach(function (e) {
      var t = e.getAttribute("data-carousel-interval"),
        i = e.getAttribute("data-carousel") === "slide",
        s = [],
        a = 0;
      e.querySelectorAll("[data-carousel-item]").length &&
        Array.from(e.querySelectorAll("[data-carousel-item]")).map(function (
          u,
          d
        ) {
          s.push({ position: d, el: u }),
            u.getAttribute("data-carousel-item") === "active" && (a = d);
        });
      var n = [];
      e.querySelectorAll("[data-carousel-slide-to]").length &&
        Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map(function (
          u
        ) {
          n.push({
            position: parseInt(u.getAttribute("data-carousel-slide-to")),
            el: u,
          });
        });
      var r = new x1(e, s, {
        defaultPosition: a,
        indicators: { items: n },
        interval: t || te.interval,
      });
      i && r.cycle();
      var l = e.querySelector("[data-carousel-next]"),
        c = e.querySelector("[data-carousel-prev]");
      l &&
        l.addEventListener("click", function () {
          r.next();
        }),
        c &&
          c.addEventListener("click", function () {
            r.prev();
          });
    });
  }
  typeof window < "u" && ((window.Carousel = x1), (window.initCarousels = ze));
  var ne =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (ne =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          ne.apply(this, arguments)
        );
      },
    r1 = {
      transition: "transition-opacity",
      duration: 300,
      timing: "ease-out",
      onHide: function () {},
    },
    L1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = r1),
          (this._targetEl = t),
          (this._triggerEl = i),
          (this._options = ne(ne({}, r1), s)),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Dismiss", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            ((this._clickHandler = function () {
              t.hide();
            }),
            this._triggerEl.addEventListener("click", this._clickHandler),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._triggerEl &&
            this._initialized &&
            (this._triggerEl.removeEventListener("click", this._clickHandler),
            (this._initialized = !1));
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Dismiss", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.hide = function () {
          var t = this;
          this._targetEl.classList.add(
            this._options.transition,
            "duration-".concat(this._options.duration),
            this._options.timing,
            "opacity-0"
          ),
            setTimeout(function () {
              t._targetEl.classList.add("hidden");
            }, this._options.duration),
            this._options.onHide(this, this._targetEl);
        }),
        e
      );
    })();
  function Ie() {
    document.querySelectorAll("[data-dismiss-target]").forEach(function (e) {
      var t = e.getAttribute("data-dismiss-target"),
        i = document.querySelector(t);
      i
        ? new L1(i, e)
        : console.error(
            'The dismiss element with id "'.concat(
              t,
              '" does not exist. Please check the data-dismiss-target attribute.'
            )
          );
    });
  }
  typeof window < "u" && ((window.Dismiss = L1), (window.initDismisses = Ie));
  var Z = "top",
    G = "bottom",
    K = "right",
    R = "left",
    Te = "auto",
    Zt = [Z, G, K, R],
    kt = "start",
    Ot = "end",
    Y1 = "clippingParents",
    k1 = "viewport",
    zt = "popper",
    Q1 = "reference",
    l1 = Zt.reduce(function (e, t) {
      return e.concat([t + "-" + kt, t + "-" + Ot]);
    }, []),
    E1 = [].concat(Zt, [Te]).reduce(function (e, t) {
      return e.concat([t, t + "-" + kt, t + "-" + Ot]);
    }, []),
    ti = "beforeRead",
    ei = "read",
    ii = "afterRead",
    si = "beforeMain",
    oi = "main",
    ai = "afterMain",
    ni = "beforeWrite",
    ri = "write",
    li = "afterWrite",
    ci = [ti, ei, ii, si, oi, ai, ni, ri, li];
  function Q(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function N(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function Ct(e) {
    var t = N(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function U(e) {
    var t = N(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Ve(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = N(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function di(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (i) {
      var s = t.styles[i] || {},
        a = t.attributes[i] || {},
        n = t.elements[i];
      !U(n) ||
        !Q(n) ||
        (Object.assign(n.style, s),
        Object.keys(a).forEach(function (r) {
          var l = a[r];
          l === !1 ? n.removeAttribute(r) : n.setAttribute(r, l === !0 ? "" : l);
        }));
    });
  }
  function hi(e) {
    var t = e.state,
      i = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, i.popper),
      (t.styles = i),
      t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
      function () {
        Object.keys(t.elements).forEach(function (s) {
          var a = t.elements[s],
            n = t.attributes[s] || {},
            r = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : i[s]),
            l = r.reduce(function (c, u) {
              return (c[u] = ""), c;
            }, {});
          !U(a) ||
            !Q(a) ||
            (Object.assign(a.style, l),
            Object.keys(n).forEach(function (c) {
              a.removeAttribute(c);
            }));
        });
      }
    );
  }
  const ui = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: di,
    effect: hi,
    requires: ["computeStyles"],
  };
  function Y(e) {
    return e.split("-")[0];
  }
  var wt = Math.max,
    re = Math.min,
    Et = Math.round;
  function ye() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function M1() {
    return !/^((?!chrome|android).)*safari/i.test(ye());
  }
  function Mt(e, t, i) {
    t === void 0 && (t = !1), i === void 0 && (i = !1);
    var s = e.getBoundingClientRect(),
      a = 1,
      n = 1;
    t &&
      U(e) &&
      ((a = (e.offsetWidth > 0 && Et(s.width) / e.offsetWidth) || 1),
      (n = (e.offsetHeight > 0 && Et(s.height) / e.offsetHeight) || 1));
    var r = Ct(e) ? N(e) : window,
      l = r.visualViewport,
      c = !M1() && i,
      u = (s.left + (c && l ? l.offsetLeft : 0)) / a,
      d = (s.top + (c && l ? l.offsetTop : 0)) / n,
      m = s.width / a,
      y = s.height / n;
    return {
      width: m,
      height: y,
      top: d,
      right: u + m,
      bottom: d + y,
      left: u,
      x: u,
      y: d,
    };
  }
  function $e(e) {
    var t = Mt(e),
      i = e.offsetWidth,
      s = e.offsetHeight;
    return (
      Math.abs(t.width - i) <= 1 && (i = t.width),
      Math.abs(t.height - s) <= 1 && (s = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
    );
  }
  function S1(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && Ve(i)) {
      var s = t;
      do {
        if (s && e.isSameNode(s)) return !0;
        s = s.parentNode || s.host;
      } while (s);
    }
    return !1;
  }
  function it(e) {
    return N(e).getComputedStyle(e);
  }
  function pi(e) {
    return ["table", "td", "th"].indexOf(Q(e)) >= 0;
  }
  function dt(e) {
    return ((Ct(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function ve(e) {
    return Q(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (Ve(e) ? e.host : null) || dt(e);
  }
  function c1(e) {
    return !U(e) || it(e).position === "fixed" ? null : e.offsetParent;
  }
  function fi(e) {
    var t = /firefox/i.test(ye()),
      i = /Trident/i.test(ye());
    if (i && U(e)) {
      var s = it(e);
      if (s.position === "fixed") return null;
    }
    var a = ve(e);
    for (Ve(a) && (a = a.host); U(a) && ["html", "body"].indexOf(Q(a)) < 0; ) {
      var n = it(a);
      if (
        n.transform !== "none" ||
        n.perspective !== "none" ||
        n.contain === "paint" ||
        ["transform", "perspective"].indexOf(n.willChange) !== -1 ||
        (t && n.willChange === "filter") ||
        (t && n.filter && n.filter !== "none")
      )
        return a;
      a = a.parentNode;
    }
    return null;
  }
  function Rt(e) {
    for (var t = N(e), i = c1(e); i && pi(i) && it(i).position === "static"; )
      i = c1(i);
    return i &&
      (Q(i) === "html" || (Q(i) === "body" && it(i).position === "static"))
      ? t
      : i || fi(e) || t;
  }
  function Oe(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Tt(e, t, i) {
    return wt(e, re(t, i));
  }
  function vi(e, t, i) {
    var s = Tt(e, t, i);
    return s > i ? i : s;
  }
  function A1() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function H1(e) {
    return Object.assign({}, A1(), e);
  }
  function z1(e, t) {
    return t.reduce(function (i, s) {
      return (i[s] = e), i;
    }, {});
  }
  var gi = function (t, i) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, i.rects, { placement: i.placement }))
          : t),
      H1(typeof t != "number" ? t : z1(t, Zt))
    );
  };
  function mi(e) {
    var t,
      i = e.state,
      s = e.name,
      a = e.options,
      n = i.elements.arrow,
      r = i.modifiersData.popperOffsets,
      l = Y(i.placement),
      c = Oe(l),
      u = [R, K].indexOf(l) >= 0,
      d = u ? "height" : "width";
    if (!(!n || !r)) {
      var m = gi(a.padding, i),
        y = $e(n),
        f = c === "y" ? Z : R,
        M = c === "y" ? G : K,
        w =
          i.rects.reference[d] + i.rects.reference[c] - r[c] - i.rects.popper[d],
        _ = r[c] - i.rects.reference[c],
        k = Rt(n),
        I = k ? (c === "y" ? k.clientHeight || 0 : k.clientWidth || 0) : 0,
        T = w / 2 - _ / 2,
        v = m[f],
        x = I - y[d] - m[M],
        L = I / 2 - y[d] / 2 + T,
        H = Tt(v, L, x),
        B = c;
      i.modifiersData[s] = ((t = {}), (t[B] = H), (t.centerOffset = H - L), t);
    }
  }
  function _i(e) {
    var t = e.state,
      i = e.options,
      s = i.element,
      a = s === void 0 ? "[data-popper-arrow]" : s;
    a != null &&
      ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
        (S1(t.elements.popper, a) && (t.elements.arrow = a)));
  }
  const wi = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: mi,
    effect: _i,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function St(e) {
    return e.split("-")[1];
  }
  var Ci = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function bi(e, t) {
    var i = e.x,
      s = e.y,
      a = t.devicePixelRatio || 1;
    return { x: Et(i * a) / a || 0, y: Et(s * a) / a || 0 };
  }
  function d1(e) {
    var t,
      i = e.popper,
      s = e.popperRect,
      a = e.placement,
      n = e.variation,
      r = e.offsets,
      l = e.position,
      c = e.gpuAcceleration,
      u = e.adaptive,
      d = e.roundOffsets,
      m = e.isFixed,
      y = r.x,
      f = y === void 0 ? 0 : y,
      M = r.y,
      w = M === void 0 ? 0 : M,
      _ = typeof d == "function" ? d({ x: f, y: w }) : { x: f, y: w };
    (f = _.x), (w = _.y);
    var k = r.hasOwnProperty("x"),
      I = r.hasOwnProperty("y"),
      T = R,
      v = Z,
      x = window;
    if (u) {
      var L = Rt(i),
        H = "clientHeight",
        B = "clientWidth";
      if (
        (L === N(i) &&
          ((L = dt(i)),
          it(L).position !== "static" &&
            l === "absolute" &&
            ((H = "scrollHeight"), (B = "scrollWidth"))),
        (L = L),
        a === Z || ((a === R || a === K) && n === Ot))
      ) {
        v = G;
        var j = m && L === x && x.visualViewport ? x.visualViewport.height : L[H];
        (w -= j - s.height), (w *= c ? 1 : -1);
      }
      if (a === R || ((a === Z || a === G) && n === Ot)) {
        T = K;
        var V = m && L === x && x.visualViewport ? x.visualViewport.width : L[B];
        (f -= V - s.width), (f *= c ? 1 : -1);
      }
    }
    var P = Object.assign({ position: l }, u && Ci),
      J = d === !0 ? bi({ x: f, y: w }, N(i)) : { x: f, y: w };
    if (((f = J.x), (w = J.y), c)) {
      var D;
      return Object.assign(
        {},
        P,
        ((D = {}),
        (D[v] = I ? "0" : ""),
        (D[T] = k ? "0" : ""),
        (D.transform =
          (x.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + w + "px)"
            : "translate3d(" + f + "px, " + w + "px, 0)"),
        D)
      );
    }
    return Object.assign(
      {},
      P,
      ((t = {}),
      (t[v] = I ? w + "px" : ""),
      (t[T] = k ? f + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function yi(e) {
    var t = e.state,
      i = e.options,
      s = i.gpuAcceleration,
      a = s === void 0 ? !0 : s,
      n = i.adaptive,
      r = n === void 0 ? !0 : n,
      l = i.roundOffsets,
      c = l === void 0 ? !0 : l,
      u = {
        placement: Y(t.placement),
        variation: St(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: a,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        d1(
          Object.assign({}, u, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: r,
            roundOffsets: c,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          d1(
            Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: c,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const xi = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: yi,
    data: {},
  };
  var Kt = { passive: !0 };
  function Li(e) {
    var t = e.state,
      i = e.instance,
      s = e.options,
      a = s.scroll,
      n = a === void 0 ? !0 : a,
      r = s.resize,
      l = r === void 0 ? !0 : r,
      c = N(t.elements.popper),
      u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      n &&
        u.forEach(function (d) {
          d.addEventListener("scroll", i.update, Kt);
        }),
      l && c.addEventListener("resize", i.update, Kt),
      function () {
        n &&
          u.forEach(function (d) {
            d.removeEventListener("scroll", i.update, Kt);
          }),
          l && c.removeEventListener("resize", i.update, Kt);
      }
    );
  }
  const ki = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Li,
    data: {},
  };
  var Ei = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ee(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return Ei[t];
    });
  }
  var Mi = { start: "end", end: "start" };
  function h1(e) {
    return e.replace(/start|end/g, function (t) {
      return Mi[t];
    });
  }
  function je(e) {
    var t = N(e),
      i = t.pageXOffset,
      s = t.pageYOffset;
    return { scrollLeft: i, scrollTop: s };
  }
  function Be(e) {
    return Mt(dt(e)).left + je(e).scrollLeft;
  }
  function Si(e, t) {
    var i = N(e),
      s = dt(e),
      a = i.visualViewport,
      n = s.clientWidth,
      r = s.clientHeight,
      l = 0,
      c = 0;
    if (a) {
      (n = a.width), (r = a.height);
      var u = M1();
      (u || (!u && t === "fixed")) && ((l = a.offsetLeft), (c = a.offsetTop));
    }
    return { width: n, height: r, x: l + Be(e), y: c };
  }
  function Ai(e) {
    var t,
      i = dt(e),
      s = je(e),
      a = (t = e.ownerDocument) == null ? void 0 : t.body,
      n = wt(
        i.scrollWidth,
        i.clientWidth,
        a ? a.scrollWidth : 0,
        a ? a.clientWidth : 0
      ),
      r = wt(
        i.scrollHeight,
        i.clientHeight,
        a ? a.scrollHeight : 0,
        a ? a.clientHeight : 0
      ),
      l = -s.scrollLeft + Be(e),
      c = -s.scrollTop;
    return (
      it(a || i).direction === "rtl" &&
        (l += wt(i.clientWidth, a ? a.clientWidth : 0) - n),
      { width: n, height: r, x: l, y: c }
    );
  }
  function Pe(e) {
    var t = it(e),
      i = t.overflow,
      s = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + a + s);
  }
  function I1(e) {
    return ["html", "body", "#document"].indexOf(Q(e)) >= 0
      ? e.ownerDocument.body
      : U(e) && Pe(e)
      ? e
      : I1(ve(e));
  }
  function Vt(e, t) {
    var i;
    t === void 0 && (t = []);
    var s = I1(e),
      a = s === ((i = e.ownerDocument) == null ? void 0 : i.body),
      n = N(s),
      r = a ? [n].concat(n.visualViewport || [], Pe(s) ? s : []) : s,
      l = t.concat(r);
    return a ? l : l.concat(Vt(ve(r)));
  }
  function xe(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function Hi(e, t) {
    var i = Mt(e, !1, t === "fixed");
    return (
      (i.top = i.top + e.clientTop),
      (i.left = i.left + e.clientLeft),
      (i.bottom = i.top + e.clientHeight),
      (i.right = i.left + e.clientWidth),
      (i.width = e.clientWidth),
      (i.height = e.clientHeight),
      (i.x = i.left),
      (i.y = i.top),
      i
    );
  }
  function u1(e, t, i) {
    return t === k1 ? xe(Si(e, i)) : Ct(t) ? Hi(t, i) : xe(Ai(dt(e)));
  }
  function zi(e) {
    var t = Vt(ve(e)),
      i = ["absolute", "fixed"].indexOf(it(e).position) >= 0,
      s = i && U(e) ? Rt(e) : e;
    return Ct(s)
      ? t.filter(function (a) {
          return Ct(a) && S1(a, s) && Q(a) !== "body";
        })
      : [];
  }
  function Ii(e, t, i, s) {
    var a = t === "clippingParents" ? zi(e) : [].concat(t),
      n = [].concat(a, [i]),
      r = n[0],
      l = n.reduce(function (c, u) {
        var d = u1(e, u, s);
        return (
          (c.top = wt(d.top, c.top)),
          (c.right = re(d.right, c.right)),
          (c.bottom = re(d.bottom, c.bottom)),
          (c.left = wt(d.left, c.left)),
          c
        );
      }, u1(e, r, s));
    return (
      (l.width = l.right - l.left),
      (l.height = l.bottom - l.top),
      (l.x = l.left),
      (l.y = l.top),
      l
    );
  }
  function T1(e) {
    var t = e.reference,
      i = e.element,
      s = e.placement,
      a = s ? Y(s) : null,
      n = s ? St(s) : null,
      r = t.x + t.width / 2 - i.width / 2,
      l = t.y + t.height / 2 - i.height / 2,
      c;
    switch (a) {
      case Z:
        c = { x: r, y: t.y - i.height };
        break;
      case G:
        c = { x: r, y: t.y + t.height };
        break;
      case K:
        c = { x: t.x + t.width, y: l };
        break;
      case R:
        c = { x: t.x - i.width, y: l };
        break;
      default:
        c = { x: t.x, y: t.y };
    }
    var u = a ? Oe(a) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (n) {
        case kt:
          c[u] = c[u] - (t[d] / 2 - i[d] / 2);
          break;
        case Ot:
          c[u] = c[u] + (t[d] / 2 - i[d] / 2);
          break;
      }
    }
    return c;
  }
  function jt(e, t) {
    t === void 0 && (t = {});
    var i = t,
      s = i.placement,
      a = s === void 0 ? e.placement : s,
      n = i.strategy,
      r = n === void 0 ? e.strategy : n,
      l = i.boundary,
      c = l === void 0 ? Y1 : l,
      u = i.rootBoundary,
      d = u === void 0 ? k1 : u,
      m = i.elementContext,
      y = m === void 0 ? zt : m,
      f = i.altBoundary,
      M = f === void 0 ? !1 : f,
      w = i.padding,
      _ = w === void 0 ? 0 : w,
      k = H1(typeof _ != "number" ? _ : z1(_, Zt)),
      I = y === zt ? Q1 : zt,
      T = e.rects.popper,
      v = e.elements[M ? I : y],
      x = Ii(Ct(v) ? v : v.contextElement || dt(e.elements.popper), c, d, r),
      L = Mt(e.elements.reference),
      H = T1({ reference: L, element: T, strategy: "absolute", placement: a }),
      B = xe(Object.assign({}, T, H)),
      j = y === zt ? B : L,
      V = {
        top: x.top - j.top + k.top,
        bottom: j.bottom - x.bottom + k.bottom,
        left: x.left - j.left + k.left,
        right: j.right - x.right + k.right,
      },
      P = e.modifiersData.offset;
    if (y === zt && P) {
      var J = P[a];
      Object.keys(V).forEach(function (D) {
        var ht = [K, G].indexOf(D) >= 0 ? 1 : -1,
          ut = [Z, G].indexOf(D) >= 0 ? "y" : "x";
        V[D] += J[ut] * ht;
      });
    }
    return V;
  }
  function Ti(e, t) {
    t === void 0 && (t = {});
    var i = t,
      s = i.placement,
      a = i.boundary,
      n = i.rootBoundary,
      r = i.padding,
      l = i.flipVariations,
      c = i.allowedAutoPlacements,
      u = c === void 0 ? E1 : c,
      d = St(s),
      m = d
        ? l
          ? l1
          : l1.filter(function (M) {
              return St(M) === d;
            })
        : Zt,
      y = m.filter(function (M) {
        return u.indexOf(M) >= 0;
      });
    y.length === 0 && (y = m);
    var f = y.reduce(function (M, w) {
      return (
        (M[w] = jt(e, { placement: w, boundary: a, rootBoundary: n, padding: r })[
          Y(w)
        ]),
        M
      );
    }, {});
    return Object.keys(f).sort(function (M, w) {
      return f[M] - f[w];
    });
  }
  function Vi(e) {
    if (Y(e) === Te) return [];
    var t = ee(e);
    return [h1(e), t, h1(t)];
  }
  function $i(e) {
    var t = e.state,
      i = e.options,
      s = e.name;
    if (!t.modifiersData[s]._skip) {
      for (
        var a = i.mainAxis,
          n = a === void 0 ? !0 : a,
          r = i.altAxis,
          l = r === void 0 ? !0 : r,
          c = i.fallbackPlacements,
          u = i.padding,
          d = i.boundary,
          m = i.rootBoundary,
          y = i.altBoundary,
          f = i.flipVariations,
          M = f === void 0 ? !0 : f,
          w = i.allowedAutoPlacements,
          _ = t.options.placement,
          k = Y(_),
          I = k === _,
          T = c || (I || !M ? [ee(_)] : Vi(_)),
          v = [_].concat(T).reduce(function (bt, ot) {
            return bt.concat(
              Y(ot) === Te
                ? Ti(t, {
                    placement: ot,
                    boundary: d,
                    rootBoundary: m,
                    padding: u,
                    flipVariations: M,
                    allowedAutoPlacements: w,
                  })
                : ot
            );
          }, []),
          x = t.rects.reference,
          L = t.rects.popper,
          H = new Map(),
          B = !0,
          j = v[0],
          V = 0;
        V < v.length;
        V++
      ) {
        var P = v[V],
          J = Y(P),
          D = St(P) === kt,
          ht = [Z, G].indexOf(J) >= 0,
          ut = ht ? "width" : "height",
          q = jt(t, {
            placement: P,
            boundary: d,
            rootBoundary: m,
            altBoundary: y,
            padding: u,
          }),
          X = ht ? (D ? K : R) : D ? G : Z;
        x[ut] > L[ut] && (X = ee(X));
        var qt = ee(X),
          pt = [];
        if (
          (n && pt.push(q[J] <= 0),
          l && pt.push(q[X] <= 0, q[qt] <= 0),
          pt.every(function (bt) {
            return bt;
          }))
        ) {
          (j = P), (B = !1);
          break;
        }
        H.set(P, pt);
      }
      if (B)
        for (
          var Nt = M ? 3 : 1,
            ge = function (ot) {
              var Ht = v.find(function (Ft) {
                var ft = H.get(Ft);
                if (ft)
                  return ft.slice(0, ot).every(function (me) {
                    return me;
                  });
              });
              if (Ht) return (j = Ht), "break";
            },
            At = Nt;
          At > 0;
          At--
        ) {
          var Wt = ge(At);
          if (Wt === "break") break;
        }
      t.placement !== j &&
        ((t.modifiersData[s]._skip = !0), (t.placement = j), (t.reset = !0));
    }
  }
  const Oi = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: $i,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function p1(e, t, i) {
    return (
      i === void 0 && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function f1(e) {
    return [Z, K, G, R].some(function (t) {
      return e[t] >= 0;
    });
  }
  function ji(e) {
    var t = e.state,
      i = e.name,
      s = t.rects.reference,
      a = t.rects.popper,
      n = t.modifiersData.preventOverflow,
      r = jt(t, { elementContext: "reference" }),
      l = jt(t, { altBoundary: !0 }),
      c = p1(r, s),
      u = p1(l, a, n),
      d = f1(c),
      m = f1(u);
    (t.modifiersData[i] = {
      referenceClippingOffsets: c,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: m,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": m,
      }));
  }
  const Bi = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: ji,
  };
  function Pi(e, t, i) {
    var s = Y(e),
      a = [R, Z].indexOf(s) >= 0 ? -1 : 1,
      n = typeof i == "function" ? i(Object.assign({}, t, { placement: e })) : i,
      r = n[0],
      l = n[1];
    return (
      (r = r || 0),
      (l = (l || 0) * a),
      [R, K].indexOf(s) >= 0 ? { x: l, y: r } : { x: r, y: l }
    );
  }
  function Di(e) {
    var t = e.state,
      i = e.options,
      s = e.name,
      a = i.offset,
      n = a === void 0 ? [0, 0] : a,
      r = E1.reduce(function (d, m) {
        return (d[m] = Pi(m, t.rects, n)), d;
      }, {}),
      l = r[t.placement],
      c = l.x,
      u = l.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += c),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[s] = r);
  }
  const Zi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Di,
  };
  function Ri(e) {
    var t = e.state,
      i = e.name;
    t.modifiersData[i] = T1({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const qi = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Ri,
    data: {},
  };
  function Ni(e) {
    return e === "x" ? "y" : "x";
  }
  function Wi(e) {
    var t = e.state,
      i = e.options,
      s = e.name,
      a = i.mainAxis,
      n = a === void 0 ? !0 : a,
      r = i.altAxis,
      l = r === void 0 ? !1 : r,
      c = i.boundary,
      u = i.rootBoundary,
      d = i.altBoundary,
      m = i.padding,
      y = i.tether,
      f = y === void 0 ? !0 : y,
      M = i.tetherOffset,
      w = M === void 0 ? 0 : M,
      _ = jt(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: d }),
      k = Y(t.placement),
      I = St(t.placement),
      T = !I,
      v = Oe(k),
      x = Ni(v),
      L = t.modifiersData.popperOffsets,
      H = t.rects.reference,
      B = t.rects.popper,
      j =
        typeof w == "function"
          ? w(Object.assign({}, t.rects, { placement: t.placement }))
          : w,
      V =
        typeof j == "number"
          ? { mainAxis: j, altAxis: j }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
      P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      J = { x: 0, y: 0 };
    if (L) {
      if (n) {
        var D,
          ht = v === "y" ? Z : R,
          ut = v === "y" ? G : K,
          q = v === "y" ? "height" : "width",
          X = L[v],
          qt = X + _[ht],
          pt = X - _[ut],
          Nt = f ? -B[q] / 2 : 0,
          ge = I === kt ? H[q] : B[q],
          At = I === kt ? -B[q] : -H[q],
          Wt = t.elements.arrow,
          bt = f && Wt ? $e(Wt) : { width: 0, height: 0 },
          ot = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : A1(),
          Ht = ot[ht],
          Ft = ot[ut],
          ft = Tt(0, H[q], bt[q]),
          me = T
            ? H[q] / 2 - Nt - ft - Ht - V.mainAxis
            : ge - ft - Ht - V.mainAxis,
          D1 = T
            ? -H[q] / 2 + Nt + ft + Ft + V.mainAxis
            : At + ft + Ft + V.mainAxis,
          _e = t.elements.arrow && Rt(t.elements.arrow),
          Z1 = _e ? (v === "y" ? _e.clientTop || 0 : _e.clientLeft || 0) : 0,
          Je = (D = P == null ? void 0 : P[v]) != null ? D : 0,
          R1 = X + me - Je - Z1,
          q1 = X + D1 - Je,
          Xe = Tt(f ? re(qt, R1) : qt, X, f ? wt(pt, q1) : pt);
        (L[v] = Xe), (J[v] = Xe - X);
      }
      if (l) {
        var Ye,
          N1 = v === "x" ? Z : R,
          W1 = v === "x" ? G : K,
          vt = L[x],
          Ut = x === "y" ? "height" : "width",
          Qe = vt + _[N1],
          t1 = vt - _[W1],
          we = [Z, R].indexOf(k) !== -1,
          e1 = (Ye = P == null ? void 0 : P[x]) != null ? Ye : 0,
          i1 = we ? Qe : vt - H[Ut] - B[Ut] - e1 + V.altAxis,
          s1 = we ? vt + H[Ut] + B[Ut] - e1 - V.altAxis : t1,
          o1 = f && we ? vi(i1, vt, s1) : Tt(f ? i1 : Qe, vt, f ? s1 : t1);
        (L[x] = o1), (J[x] = o1 - vt);
      }
      t.modifiersData[s] = J;
    }
  }
  const Fi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Wi,
    requiresIfExists: ["offset"],
  };
  function Ui(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function Gi(e) {
    return e === N(e) || !U(e) ? je(e) : Ui(e);
  }
  function Ki(e) {
    var t = e.getBoundingClientRect(),
      i = Et(t.width) / e.offsetWidth || 1,
      s = Et(t.height) / e.offsetHeight || 1;
    return i !== 1 || s !== 1;
  }
  function Ji(e, t, i) {
    i === void 0 && (i = !1);
    var s = U(t),
      a = U(t) && Ki(t),
      n = dt(t),
      r = Mt(e, a, i),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (s || (!s && !i)) &&
        ((Q(t) !== "body" || Pe(n)) && (l = Gi(t)),
        U(t)
          ? ((c = Mt(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop))
          : n && (c.x = Be(n))),
      {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height,
      }
    );
  }
  function Xi(e) {
    var t = new Map(),
      i = new Set(),
      s = [];
    e.forEach(function (n) {
      t.set(n.name, n);
    });
    function a(n) {
      i.add(n.name);
      var r = [].concat(n.requires || [], n.requiresIfExists || []);
      r.forEach(function (l) {
        if (!i.has(l)) {
          var c = t.get(l);
          c && a(c);
        }
      }),
        s.push(n);
    }
    return (
      e.forEach(function (n) {
        i.has(n.name) || a(n);
      }),
      s
    );
  }
  function Yi(e) {
    var t = Xi(e);
    return ci.reduce(function (i, s) {
      return i.concat(
        t.filter(function (a) {
          return a.phase === s;
        })
      );
    }, []);
  }
  function Qi(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (i) {
            Promise.resolve().then(function () {
              (t = void 0), i(e());
            });
          })),
        t
      );
    };
  }
  function t2(e) {
    var t = e.reduce(function (i, s) {
      var a = i[s.name];
      return (
        (i[s.name] = a
          ? Object.assign({}, a, s, {
              options: Object.assign({}, a.options, s.options),
              data: Object.assign({}, a.data, s.data),
            })
          : s),
        i
      );
    }, {});
    return Object.keys(t).map(function (i) {
      return t[i];
    });
  }
  var v1 = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function g1() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (s) {
      return !(s && typeof s.getBoundingClientRect == "function");
    });
  }
  function e2(e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.defaultModifiers,
      s = i === void 0 ? [] : i,
      a = t.defaultOptions,
      n = a === void 0 ? v1 : a;
    return function (l, c, u) {
      u === void 0 && (u = n);
      var d = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, v1, n),
          modifiersData: {},
          elements: { reference: l, popper: c },
          attributes: {},
          styles: {},
        },
        m = [],
        y = !1,
        f = {
          state: d,
          setOptions: function (k) {
            var I = typeof k == "function" ? k(d.options) : k;
            w(),
              (d.options = Object.assign({}, n, d.options, I)),
              (d.scrollParents = {
                reference: Ct(l)
                  ? Vt(l)
                  : l.contextElement
                  ? Vt(l.contextElement)
                  : [],
                popper: Vt(c),
              });
            var T = Yi(t2([].concat(s, d.options.modifiers)));
            return (
              (d.orderedModifiers = T.filter(function (v) {
                return v.enabled;
              })),
              M(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!y) {
              var k = d.elements,
                I = k.reference,
                T = k.popper;
              if (g1(I, T)) {
                (d.rects = {
                  reference: Ji(I, Rt(T), d.options.strategy === "fixed"),
                  popper: $e(T),
                }),
                  (d.reset = !1),
                  (d.placement = d.options.placement),
                  d.orderedModifiers.forEach(function (V) {
                    return (d.modifiersData[V.name] = Object.assign({}, V.data));
                  });
                for (var v = 0; v < d.orderedModifiers.length; v++) {
                  if (d.reset === !0) {
                    (d.reset = !1), (v = -1);
                    continue;
                  }
                  var x = d.orderedModifiers[v],
                    L = x.fn,
                    H = x.options,
                    B = H === void 0 ? {} : H,
                    j = x.name;
                  typeof L == "function" &&
                    (d = L({ state: d, options: B, name: j, instance: f }) || d);
                }
              }
            }
          },
          update: Qi(function () {
            return new Promise(function (_) {
              f.forceUpdate(), _(d);
            });
          }),
          destroy: function () {
            w(), (y = !0);
          },
        };
      if (!g1(l, c)) return f;
      f.setOptions(u).then(function (_) {
        !y && u.onFirstUpdate && u.onFirstUpdate(_);
      });
      function M() {
        d.orderedModifiers.forEach(function (_) {
          var k = _.name,
            I = _.options,
            T = I === void 0 ? {} : I,
            v = _.effect;
          if (typeof v == "function") {
            var x = v({ state: d, name: k, instance: f, options: T }),
              L = function () {};
            m.push(x || L);
          }
        });
      }
      function w() {
        m.forEach(function (_) {
          return _();
        }),
          (m = []);
      }
      return f;
    };
  }
  var i2 = [ki, qi, xi, ui, Zi, Oi, Fi, wi, Bi],
    De = e2({ defaultModifiers: i2 }),
    at =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (at =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          at.apply(this, arguments)
        );
      },
    Jt =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, i) {
        if (i || arguments.length === 2)
          for (var s = 0, a = t.length, n; s < a; s++)
            (n || !(s in t)) &&
              (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
        return e.concat(n || Array.prototype.slice.call(t));
      },
    nt = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: !1,
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    V1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = nt),
          (this._targetEl = t),
          (this._triggerEl = i),
          (this._options = at(at({}, nt), s)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Dropdown", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            ((this._popperInstance = this._createPopperInstance()),
            this._setupEventListeners(),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          var t = this,
            i = this._getTriggerEvents();
          this._options.triggerType === "click" &&
            i.showEvents.forEach(function (s) {
              t._triggerEl.removeEventListener(s, t._clickHandler);
            }),
            this._options.triggerType === "hover" &&
              (i.showEvents.forEach(function (s) {
                t._triggerEl.removeEventListener(s, t._hoverShowTriggerElHandler),
                  t._targetEl.removeEventListener(s, t._hoverShowTargetElHandler);
              }),
              i.hideEvents.forEach(function (s) {
                t._triggerEl.removeEventListener(s, t._hoverHideHandler),
                  t._targetEl.removeEventListener(s, t._hoverHideHandler);
              })),
            this._popperInstance.destroy(),
            (this._initialized = !1);
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Dropdown", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype._setupEventListeners = function () {
          var t = this,
            i = this._getTriggerEvents();
          (this._clickHandler = function () {
            t.toggle();
          }),
            this._options.triggerType === "click" &&
              i.showEvents.forEach(function (s) {
                t._triggerEl.addEventListener(s, t._clickHandler);
              }),
            (this._hoverShowTriggerElHandler = function (s) {
              s.type === "click"
                ? t.toggle()
                : setTimeout(function () {
                    t.show();
                  }, t._options.delay);
            }),
            (this._hoverShowTargetElHandler = function () {
              t.show();
            }),
            (this._hoverHideHandler = function () {
              setTimeout(function () {
                t._targetEl.matches(":hover") || t.hide();
              }, t._options.delay);
            }),
            this._options.triggerType === "hover" &&
              (i.showEvents.forEach(function (s) {
                t._triggerEl.addEventListener(s, t._hoverShowTriggerElHandler),
                  t._targetEl.addEventListener(s, t._hoverShowTargetElHandler);
              }),
              i.hideEvents.forEach(function (s) {
                t._triggerEl.addEventListener(s, t._hoverHideHandler),
                  t._targetEl.addEventListener(s, t._hoverHideHandler);
              }));
        }),
        (e.prototype._createPopperInstance = function () {
          return De(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [
                    this._options.offsetSkidding,
                    this._options.offsetDistance,
                  ],
                },
              },
            ],
          });
        }),
        (e.prototype._setupClickOutsideListener = function () {
          var t = this;
          (this._clickOutsideEventListener = function (i) {
            t._handleClickOutside(i, t._targetEl);
          }),
            document.body.addEventListener(
              "click",
              this._clickOutsideEventListener,
              !0
            );
        }),
        (e.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
        }),
        (e.prototype._handleClickOutside = function (t, i) {
          var s = t.target,
            a = this._options.ignoreClickOutsideClass,
            n = !1;
          if (a) {
            var r = document.querySelectorAll(".".concat(a));
            r.forEach(function (l) {
              if (l.contains(s)) {
                n = !0;
                return;
              }
            });
          }
          s !== i &&
            !i.contains(s) &&
            !this._triggerEl.contains(s) &&
            !n &&
            this.isVisible() &&
            this.hide();
        }),
        (e.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return {
                showEvents: ["mouseenter", "click"],
                hideEvents: ["mouseleave"],
              };
            case "click":
              return { showEvents: ["click"], hideEvents: [] };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return { showEvents: ["click"], hideEvents: [] };
          }
        }),
        (e.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show(),
            this._options.onToggle(this);
        }),
        (e.prototype.isVisible = function () {
          return this._visible;
        }),
        (e.prototype.show = function () {
          this._targetEl.classList.remove("hidden"),
            this._targetEl.classList.add("block"),
            this._popperInstance.setOptions(function (t) {
              return at(at({}, t), {
                modifiers: Jt(
                  Jt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !0 }],
                  !1
                ),
              });
            }),
            this._setupClickOutsideListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (e.prototype.hide = function () {
          this._targetEl.classList.remove("block"),
            this._targetEl.classList.add("hidden"),
            this._popperInstance.setOptions(function (t) {
              return at(at({}, t), {
                modifiers: Jt(
                  Jt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !1 }],
                  !1
                ),
              });
            }),
            (this._visible = !1),
            this._removeClickOutsideListener(),
            this._options.onHide(this);
        }),
        e
      );
    })();
  function Ze() {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function (e) {
      var t = e.getAttribute("data-dropdown-toggle"),
        i = document.getElementById(t);
      if (i) {
        var s = e.getAttribute("data-dropdown-placement"),
          a = e.getAttribute("data-dropdown-offset-skidding"),
          n = e.getAttribute("data-dropdown-offset-distance"),
          r = e.getAttribute("data-dropdown-trigger"),
          l = e.getAttribute("data-dropdown-delay"),
          c = e.getAttribute("data-dropdown-ignore-click-outside-class");
        new V1(i, e, {
          placement: s || nt.placement,
          triggerType: r || nt.triggerType,
          offsetSkidding: a ? parseInt(a) : nt.offsetSkidding,
          offsetDistance: n ? parseInt(n) : nt.offsetDistance,
          delay: l ? parseInt(l) : nt.delay,
          ignoreClickOutsideClass: c || nt.ignoreClickOutsideClass,
        });
      } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'));
    });
  }
  typeof window < "u" && ((window.Dropdown = V1), (window.initDropdowns = Ze));
  var le =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (le =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          le.apply(this, arguments)
        );
      },
    xt = {
      placement: "center",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      backdrop: "dynamic",
      closable: !0,
      onHide: function () {},
      onShow: function () {},
      onToggle: function () {},
    },
    Le = (function () {
      function e(t, i) {
        t === void 0 && (t = null),
          i === void 0 && (i = xt),
          (this._targetEl = t),
          (this._options = le(le({}, xt), i)),
          (this._isHidden = !0),
          (this._backdropEl = null),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Modal", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._targetEl &&
            !this._initialized &&
            (this._getPlacementClasses().map(function (i) {
              t._targetEl.classList.add(i);
            }),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._initialized && (this.hide(), (this._initialized = !1));
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Modal", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype._createBackdrop = function () {
          var t;
          if (this._isHidden) {
            var i = document.createElement("div");
            i.setAttribute("modal-backdrop", ""),
              (t = i.classList).add.apply(
                t,
                this._options.backdropClasses.split(" ")
              ),
              document.querySelector("body").append(i),
              (this._backdropEl = i);
          }
        }),
        (e.prototype._destroyBackdropEl = function () {
          this._isHidden || document.querySelector("[modal-backdrop]").remove();
        }),
        (e.prototype._setupModalCloseEventListeners = function () {
          var t = this;
          this._options.backdrop === "dynamic" &&
            ((this._clickOutsideEventListener = function (i) {
              t._handleOutsideClick(i.target);
            }),
            this._targetEl.addEventListener(
              "click",
              this._clickOutsideEventListener,
              !0
            )),
            (this._keydownEventListener = function (i) {
              i.key === "Escape" && t.hide();
            }),
            document.body.addEventListener(
              "keydown",
              this._keydownEventListener,
              !0
            );
        }),
        (e.prototype._removeModalCloseEventListeners = function () {
          this._options.backdrop === "dynamic" &&
            this._targetEl.removeEventListener(
              "click",
              this._clickOutsideEventListener,
              !0
            ),
            document.body.removeEventListener(
              "keydown",
              this._keydownEventListener,
              !0
            );
        }),
        (e.prototype._handleOutsideClick = function (t) {
          (t === this._targetEl ||
            (t === this._backdropEl && this.isVisible())) &&
            this.hide();
        }),
        (e.prototype._getPlacementClasses = function () {
          switch (this._options.placement) {
            case "top-left":
              return ["justify-start", "items-start"];
            case "top-center":
              return ["justify-center", "items-start"];
            case "top-right":
              return ["justify-end", "items-start"];
            case "center-left":
              return ["justify-start", "items-center"];
            case "center":
              return ["justify-center", "items-center"];
            case "center-right":
              return ["justify-end", "items-center"];
            case "bottom-left":
              return ["justify-start", "items-end"];
            case "bottom-center":
              return ["justify-center", "items-end"];
            case "bottom-right":
              return ["justify-end", "items-end"];
            default:
              return ["justify-center", "items-center"];
          }
        }),
        (e.prototype.toggle = function () {
          this._isHidden ? this.show() : this.hide(),
            this._options.onToggle(this);
        }),
        (e.prototype.show = function () {
          this.isHidden &&
            (this._targetEl.classList.add("flex"),
            this._targetEl.classList.remove("hidden"),
            this._targetEl.setAttribute("aria-modal", "true"),
            this._targetEl.setAttribute("role", "dialog"),
            this._targetEl.removeAttribute("aria-hidden"),
            this._createBackdrop(),
            (this._isHidden = !1),
            this._options.closable && this._setupModalCloseEventListeners(),
            document.body.classList.add("overflow-hidden"),
            this._options.onShow(this));
        }),
        (e.prototype.hide = function () {
          this.isVisible &&
            (this._targetEl.classList.add("hidden"),
            this._targetEl.classList.remove("flex"),
            this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.removeAttribute("aria-modal"),
            this._targetEl.removeAttribute("role"),
            this._destroyBackdropEl(),
            (this._isHidden = !0),
            document.body.classList.remove("overflow-hidden"),
            this._options.closable && this._removeModalCloseEventListeners(),
            this._options.onHide(this));
        }),
        (e.prototype.isVisible = function () {
          return !this._isHidden;
        }),
        (e.prototype.isHidden = function () {
          return this._isHidden;
        }),
        e
      );
    })();
  function Re() {
    document.querySelectorAll("[data-modal-target]").forEach(function (e) {
      var t = e.getAttribute("data-modal-target"),
        i = document.getElementById(t);
      if (i) {
        var s = i.getAttribute("data-modal-placement"),
          a = i.getAttribute("data-modal-backdrop");
        g.instanceExists("Modal", i.getAttribute("id")) &&
          new Le(i, { placement: s || xt.placement, backdrop: a || xt.backdrop });
      } else console.error("Modal with id ".concat(t, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
    }),
      document.querySelectorAll("[data-modal-toggle]").forEach(function (e) {
        var t = e.getAttribute("data-modal-toggle"),
          i = document.getElementById(t);
        if (i) {
          var s = i.getAttribute("data-modal-placement"),
            a = i.getAttribute("data-modal-backdrop"),
            n;
          g.instanceExists("Modal", i.getAttribute("id"))
            ? (n = g.getInstance("Modal", i.getAttribute("id")))
            : (n = new Le(i, {
                placement: s || xt.placement,
                backdrop: a || xt.backdrop,
              })),
            e.addEventListener("click", function () {
              n.toggle();
            });
        } else
          console.error(
            "Modal with id ".concat(
              t,
              " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
            )
          );
      }),
      document.querySelectorAll("[data-modal-show]").forEach(function (e) {
        var t = e.getAttribute("data-modal-show"),
          i = document.getElementById(t);
        if (i)
          if (g.instanceExists("Modal", i.getAttribute("id"))) {
            var s = g.getInstance("Modal", i.getAttribute("id"));
            e.addEventListener("click", function () {
              s.show();
            });
          } else
            console.error(
              "Modal with id ".concat(
                t,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
        else
          console.error(
            "Modal with id ".concat(
              t,
              " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"
            )
          );
      }),
      document.querySelectorAll("[data-modal-hide]").forEach(function (e) {
        var t = e.getAttribute("data-modal-hide"),
          i = document.getElementById(t);
        if (i)
          if (g.instanceExists("Modal", i.getAttribute("id"))) {
            var s = g.getInstance("Modal", i.getAttribute("id"));
            e.addEventListener("click", function () {
              s.hide();
            });
          } else
            console.error(
              "Modal with id ".concat(
                t,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
        else
          console.error(
            "Modal with id ".concat(
              t,
              " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"
            )
          );
      });
  }
  typeof window < "u" && ((window.Modal = Le), (window.initModals = Re));
  var ce =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (ce =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          ce.apply(this, arguments)
        );
      },
    mt = {
      placement: "left",
      bodyScrolling: !1,
      backdrop: !0,
      edge: !1,
      edgeOffset: "bottom-[60px]",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    de = (function () {
      function e(t, i) {
        t === void 0 && (t = null),
          i === void 0 && (i = mt),
          (this._targetEl = t),
          (this._options = ce(ce({}, mt), i)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Drawer", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._targetEl &&
            !this._initialized &&
            (this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.classList.add("transition-transform"),
            this._getPlacementClasses(this._options.placement).base.map(function (
              i
            ) {
              t._targetEl.classList.add(i);
            }),
            (this._handleEscapeKey = function (i) {
              i.key === "Escape" && t.isVisible() && t.hide();
            }),
            document.addEventListener("keydown", this._handleEscapeKey),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          this._initialized &&
            (this.hide(),
            document.removeEventListener("keydown", this._handleEscapeKey),
            (this._initialized = !1));
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Drawer", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.hide = function () {
          var t = this;
          this._options.edge
            ? (this._getPlacementClasses(
                this._options.placement + "-edge"
              ).active.map(function (i) {
                t._targetEl.classList.remove(i);
              }),
              this._getPlacementClasses(
                this._options.placement + "-edge"
              ).inactive.map(function (i) {
                t._targetEl.classList.add(i);
              }))
            : (this._getPlacementClasses(this._options.placement).active.map(
                function (i) {
                  t._targetEl.classList.remove(i);
                }
              ),
              this._getPlacementClasses(this._options.placement).inactive.map(
                function (i) {
                  t._targetEl.classList.add(i);
                }
              )),
            this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.removeAttribute("aria-modal"),
            this._targetEl.removeAttribute("role"),
            this._options.bodyScrolling ||
              document.body.classList.remove("overflow-hidden"),
            this._options.backdrop && this._destroyBackdropEl(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        (e.prototype.show = function () {
          var t = this;
          this._options.edge
            ? (this._getPlacementClasses(
                this._options.placement + "-edge"
              ).active.map(function (i) {
                t._targetEl.classList.add(i);
              }),
              this._getPlacementClasses(
                this._options.placement + "-edge"
              ).inactive.map(function (i) {
                t._targetEl.classList.remove(i);
              }))
            : (this._getPlacementClasses(this._options.placement).active.map(
                function (i) {
                  t._targetEl.classList.add(i);
                }
              ),
              this._getPlacementClasses(this._options.placement).inactive.map(
                function (i) {
                  t._targetEl.classList.remove(i);
                }
              )),
            this._targetEl.setAttribute("aria-modal", "true"),
            this._targetEl.setAttribute("role", "dialog"),
            this._targetEl.removeAttribute("aria-hidden"),
            this._options.bodyScrolling ||
              document.body.classList.add("overflow-hidden"),
            this._options.backdrop && this._createBackdrop(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (e.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show();
        }),
        (e.prototype._createBackdrop = function () {
          var t,
            i = this;
          if (!this._visible) {
            var s = document.createElement("div");
            s.setAttribute("drawer-backdrop", ""),
              (t = s.classList).add.apply(
                t,
                this._options.backdropClasses.split(" ")
              ),
              document.querySelector("body").append(s),
              s.addEventListener("click", function () {
                i.hide();
              });
          }
        }),
        (e.prototype._destroyBackdropEl = function () {
          this._visible && document.querySelector("[drawer-backdrop]").remove();
        }),
        (e.prototype._getPlacementClasses = function (t) {
          switch (t) {
            case "top":
              return {
                base: ["top-0", "left-0", "right-0"],
                active: ["transform-none"],
                inactive: ["-translate-y-full"],
              };
            case "right":
              return {
                base: ["right-0", "top-0"],
                active: ["transform-none"],
                inactive: ["translate-x-full"],
              };
            case "bottom":
              return {
                base: ["bottom-0", "left-0", "right-0"],
                active: ["transform-none"],
                inactive: ["translate-y-full"],
              };
            case "left":
              return {
                base: ["left-0", "top-0"],
                active: ["transform-none"],
                inactive: ["-translate-x-full"],
              };
            case "bottom-edge":
              return {
                base: ["left-0", "top-0"],
                active: ["transform-none"],
                inactive: ["translate-y-full", this._options.edgeOffset],
              };
            default:
              return {
                base: ["left-0", "top-0"],
                active: ["transform-none"],
                inactive: ["-translate-x-full"],
              };
          }
        }),
        (e.prototype.isHidden = function () {
          return !this._visible;
        }),
        (e.prototype.isVisible = function () {
          return this._visible;
        }),
        e
      );
    })();
  function qe() {
    document.querySelectorAll("[data-drawer-target]").forEach(function (e) {
      var t = e.getAttribute("data-drawer-target"),
        i = document.getElementById(t);
      if (i) {
        var s = e.getAttribute("data-drawer-placement"),
          a = e.getAttribute("data-drawer-body-scrolling"),
          n = e.getAttribute("data-drawer-backdrop"),
          r = e.getAttribute("data-drawer-edge"),
          l = e.getAttribute("data-drawer-edge-offset");
        g.instanceExists("Drawer", i.getAttribute("id")) ||
          new de(i, {
            placement: s || mt.placement,
            bodyScrolling: a ? a === "true" : mt.bodyScrolling,
            backdrop: n ? n === "true" : mt.backdrop,
            edge: r ? r === "true" : mt.edge,
            edgeOffset: l || mt.edgeOffset,
          });
      } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
      document.querySelectorAll("[data-drawer-toggle]").forEach(function (e) {
        var t = e.getAttribute("data-drawer-toggle"),
          i = document.getElementById(t);
        if (i) {
          var s = g.getInstance("Drawer", i.getAttribute("id"));
          s
            ? e.addEventListener("click", function () {
                s.toggle();
              })
            : console.error(
                "Drawer with id ".concat(
                  t,
                  " has not been initialized. Please initialize it using the data-drawer-target attribute."
                )
              );
        } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
      }),
      document
        .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
        .forEach(function (e) {
          var t = e.getAttribute("data-drawer-dismiss")
              ? e.getAttribute("data-drawer-dismiss")
              : e.getAttribute("data-drawer-hide"),
            i = document.getElementById(t);
          if (i) {
            var s = g.getInstance("Drawer", i.getAttribute("id"));
            s
              ? e.addEventListener("click", function () {
                  s.hide();
                })
              : console.error(
                  "Drawer with id ".concat(
                    t,
                    " has not been initialized. Please initialize it using the data-drawer-target attribute."
                  )
                );
          } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
        }),
      document.querySelectorAll("[data-drawer-show]").forEach(function (e) {
        var t = e.getAttribute("data-drawer-show"),
          i = document.getElementById(t);
        if (i) {
          var s = g.getInstance("Drawer", i.getAttribute("id"));
          s
            ? e.addEventListener("click", function () {
                s.show();
              })
            : console.error(
                "Drawer with id ".concat(
                  t,
                  " has not been initialized. Please initialize it using the data-drawer-target attribute."
                )
              );
        } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
      });
  }
  typeof window < "u" && ((window.Drawer = de), (window.initDrawers = qe));
  var he =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (he =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          he.apply(this, arguments)
        );
      },
    m1 = {
      defaultTabId: null,
      activeClasses:
        "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
      inactiveClasses:
        "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
      onShow: function () {},
    },
    $1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = []),
          s === void 0 && (s = m1),
          (this._accordionEl = t),
          (this._items = i),
          (this._activeTab = s ? this.getTab(s.defaultTabId) : null),
          (this._options = he(he({}, m1), s)),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Tabs", this, this._accordionEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          this._items.length &&
            !this._initialized &&
            (this._activeTab || this.setActiveTab(this._items[0]),
            this.show(this._activeTab.id, !0),
            this._items.map(function (i) {
              i.triggerEl.addEventListener("click", function () {
                t.show(i.id);
              });
            }));
        }),
        (e.prototype.destroy = function () {
          this._initialized && (this._initialized = !1);
        }),
        (e.prototype.removeInstance = function () {
          this.destroy(), g.removeInstance("Tabs", this._accordionEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.getActiveTab = function () {
          return this._activeTab;
        }),
        (e.prototype.setActiveTab = function (t) {
          this._activeTab = t;
        }),
        (e.prototype.getTab = function (t) {
          return this._items.filter(function (i) {
            return i.id === t;
          })[0];
        }),
        (e.prototype.show = function (t, i) {
          var s,
            a,
            n = this;
          i === void 0 && (i = !1);
          var r = this.getTab(t);
          (r === this._activeTab && !i) ||
            (this._items.map(function (l) {
              var c, u;
              l !== r &&
                ((c = l.triggerEl.classList).remove.apply(
                  c,
                  n._options.activeClasses.split(" ")
                ),
                (u = l.triggerEl.classList).add.apply(
                  u,
                  n._options.inactiveClasses.split(" ")
                ),
                l.targetEl.classList.add("hidden"),
                l.triggerEl.setAttribute("aria-selected", "false"));
            }),
            (s = r.triggerEl.classList).add.apply(
              s,
              this._options.activeClasses.split(" ")
            ),
            (a = r.triggerEl.classList).remove.apply(
              a,
              this._options.inactiveClasses.split(" ")
            ),
            r.triggerEl.setAttribute("aria-selected", "true"),
            r.targetEl.classList.remove("hidden"),
            this.setActiveTab(r),
            this._options.onShow(this, r));
        }),
        e
      );
    })();
  function Ne() {
    document.querySelectorAll("[data-tabs-toggle]").forEach(function (e) {
      var t = [],
        i = null;
      e.querySelectorAll('[role="tab"]').forEach(function (s) {
        var a = s.getAttribute("aria-selected") === "true",
          n = {
            id: s.getAttribute("data-tabs-target"),
            triggerEl: s,
            targetEl: document.querySelector(s.getAttribute("data-tabs-target")),
          };
        t.push(n), a && (i = n.id);
      }),
        new $1(e, t, { defaultTabId: i });
    });
  }
  typeof window < "u" && ((window.Tabs = $1), (window.initTabs = Ne));
  var rt =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (rt =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          rt.apply(this, arguments)
        );
      },
    Xt =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, i) {
        if (i || arguments.length === 2)
          for (var s = 0, a = t.length, n; s < a; s++)
            (n || !(s in t)) &&
              (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
        return e.concat(n || Array.prototype.slice.call(t));
      },
    ue = {
      placement: "top",
      triggerType: "hover",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    O1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = ue),
          (this._targetEl = t),
          (this._triggerEl = i),
          (this._options = rt(rt({}, ue), s)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Tooltip", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._setupEventListeners(),
            (this._popperInstance = this._createPopperInstance()),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          var t = this;
          if (this._initialized) {
            var i = this._getTriggerEvents();
            i.showEvents.forEach(function (s) {
              t._triggerEl.removeEventListener(s, t._showHandler);
            }),
              i.hideEvents.forEach(function (s) {
                t._triggerEl.removeEventListener(s, t._hideHandler);
              }),
              this._removeKeydownListener(),
              this._removeClickOutsideListener(),
              this._popperInstance && this._popperInstance.destroy(),
              (this._initialized = !1);
          }
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Tooltip", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype._setupEventListeners = function () {
          var t = this,
            i = this._getTriggerEvents();
          (this._showHandler = function () {
            t.show();
          }),
            (this._hideHandler = function () {
              t.hide();
            }),
            i.showEvents.forEach(function (s) {
              t._triggerEl.addEventListener(s, t._showHandler);
            }),
            i.hideEvents.forEach(function (s) {
              t._triggerEl.addEventListener(s, t._hideHandler);
            });
        }),
        (e.prototype._createPopperInstance = function () {
          return De(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
          });
        }),
        (e.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
            case "click":
              return {
                showEvents: ["click", "focus"],
                hideEvents: ["focusout", "blur"],
              };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
          }
        }),
        (e.prototype._setupKeydownListener = function () {
          var t = this;
          (this._keydownEventListener = function (i) {
            i.key === "Escape" && t.hide();
          }),
            document.body.addEventListener(
              "keydown",
              this._keydownEventListener,
              !0
            );
        }),
        (e.prototype._removeKeydownListener = function () {
          document.body.removeEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
        }),
        (e.prototype._setupClickOutsideListener = function () {
          var t = this;
          (this._clickOutsideEventListener = function (i) {
            t._handleClickOutside(i, t._targetEl);
          }),
            document.body.addEventListener(
              "click",
              this._clickOutsideEventListener,
              !0
            );
        }),
        (e.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
        }),
        (e.prototype._handleClickOutside = function (t, i) {
          var s = t.target;
          s !== i &&
            !i.contains(s) &&
            !this._triggerEl.contains(s) &&
            this.isVisible() &&
            this.hide();
        }),
        (e.prototype.isVisible = function () {
          return this._visible;
        }),
        (e.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show();
        }),
        (e.prototype.show = function () {
          this._targetEl.classList.remove("opacity-0", "invisible"),
            this._targetEl.classList.add("opacity-100", "visible"),
            this._popperInstance.setOptions(function (t) {
              return rt(rt({}, t), {
                modifiers: Xt(
                  Xt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !0 }],
                  !1
                ),
              });
            }),
            this._setupClickOutsideListener(),
            this._setupKeydownListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (e.prototype.hide = function () {
          this._targetEl.classList.remove("opacity-100", "visible"),
            this._targetEl.classList.add("opacity-0", "invisible"),
            this._popperInstance.setOptions(function (t) {
              return rt(rt({}, t), {
                modifiers: Xt(
                  Xt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !1 }],
                  !1
                ),
              });
            }),
            this._removeClickOutsideListener(),
            this._removeKeydownListener(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        e
      );
    })();
  function We() {
    document.querySelectorAll("[data-tooltip-target]").forEach(function (e) {
      var t = e.getAttribute("data-tooltip-target"),
        i = document.getElementById(t);
      if (i) {
        var s = e.getAttribute("data-tooltip-trigger"),
          a = e.getAttribute("data-tooltip-placement");
        new O1(i, e, {
          placement: a || ue.placement,
          triggerType: s || ue.triggerType,
        });
      } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'));
    });
  }
  typeof window < "u" && ((window.Tooltip = O1), (window.initTooltips = We));
  var lt =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (lt =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          lt.apply(this, arguments)
        );
      },
    Yt =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, i) {
        if (i || arguments.length === 2)
          for (var s = 0, a = t.length, n; s < a; s++)
            (n || !(s in t)) &&
              (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
        return e.concat(n || Array.prototype.slice.call(t));
      },
    $t = {
      placement: "top",
      offset: 10,
      triggerType: "hover",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    j1 = (function () {
      function e(t, i, s) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = $t),
          (this._targetEl = t),
          (this._triggerEl = i),
          (this._options = lt(lt({}, $t), s)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Popover", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._setupEventListeners(),
            (this._popperInstance = this._createPopperInstance()),
            (this._initialized = !0));
        }),
        (e.prototype.destroy = function () {
          var t = this;
          if (this._initialized) {
            var i = this._getTriggerEvents();
            i.showEvents.forEach(function (s) {
              t._triggerEl.removeEventListener(s, t._showHandler),
                t._targetEl.removeEventListener(s, t._showHandler);
            }),
              i.hideEvents.forEach(function (s) {
                t._triggerEl.removeEventListener(s, t._hideHandler),
                  t._targetEl.removeEventListener(s, t._hideHandler);
              }),
              this._removeKeydownListener(),
              this._removeClickOutsideListener(),
              this._popperInstance && this._popperInstance.destroy(),
              (this._initialized = !1);
          }
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Popover", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype._setupEventListeners = function () {
          var t = this,
            i = this._getTriggerEvents();
          (this._showHandler = function () {
            t.show();
          }),
            (this._hideHandler = function () {
              setTimeout(function () {
                t._targetEl.matches(":hover") || t.hide();
              }, 100);
            }),
            i.showEvents.forEach(function (s) {
              t._triggerEl.addEventListener(s, t._showHandler),
                t._targetEl.addEventListener(s, t._showHandler);
            }),
            i.hideEvents.forEach(function (s) {
              t._triggerEl.addEventListener(s, t._hideHandler),
                t._targetEl.addEventListener(s, t._hideHandler);
            });
        }),
        (e.prototype._createPopperInstance = function () {
          return De(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
              { name: "offset", options: { offset: [0, this._options.offset] } },
            ],
          });
        }),
        (e.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
            case "click":
              return {
                showEvents: ["click", "focus"],
                hideEvents: ["focusout", "blur"],
              };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
          }
        }),
        (e.prototype._setupKeydownListener = function () {
          var t = this;
          (this._keydownEventListener = function (i) {
            i.key === "Escape" && t.hide();
          }),
            document.body.addEventListener(
              "keydown",
              this._keydownEventListener,
              !0
            );
        }),
        (e.prototype._removeKeydownListener = function () {
          document.body.removeEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
        }),
        (e.prototype._setupClickOutsideListener = function () {
          var t = this;
          (this._clickOutsideEventListener = function (i) {
            t._handleClickOutside(i, t._targetEl);
          }),
            document.body.addEventListener(
              "click",
              this._clickOutsideEventListener,
              !0
            );
        }),
        (e.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
        }),
        (e.prototype._handleClickOutside = function (t, i) {
          var s = t.target;
          s !== i &&
            !i.contains(s) &&
            !this._triggerEl.contains(s) &&
            this.isVisible() &&
            this.hide();
        }),
        (e.prototype.isVisible = function () {
          return this._visible;
        }),
        (e.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show(),
            this._options.onToggle(this);
        }),
        (e.prototype.show = function () {
          this._targetEl.classList.remove("opacity-0", "invisible"),
            this._targetEl.classList.add("opacity-100", "visible"),
            this._popperInstance.setOptions(function (t) {
              return lt(lt({}, t), {
                modifiers: Yt(
                  Yt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !0 }],
                  !1
                ),
              });
            }),
            this._setupClickOutsideListener(),
            this._setupKeydownListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (e.prototype.hide = function () {
          this._targetEl.classList.remove("opacity-100", "visible"),
            this._targetEl.classList.add("opacity-0", "invisible"),
            this._popperInstance.setOptions(function (t) {
              return lt(lt({}, t), {
                modifiers: Yt(
                  Yt([], t.modifiers, !0),
                  [{ name: "eventListeners", enabled: !1 }],
                  !1
                ),
              });
            }),
            this._removeClickOutsideListener(),
            this._removeKeydownListener(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        e
      );
    })();
  function Fe() {
    document.querySelectorAll("[data-popover-target]").forEach(function (e) {
      var t = e.getAttribute("data-popover-target"),
        i = document.getElementById(t);
      if (i) {
        var s = e.getAttribute("data-popover-trigger"),
          a = e.getAttribute("data-popover-placement"),
          n = e.getAttribute("data-popover-offset");
        new j1(i, e, {
          placement: a || $t.placement,
          offset: n ? parseInt(n) : $t.offset,
          triggerType: s || $t.triggerType,
        });
      } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'));
    });
  }
  typeof window < "u" && ((window.Popover = j1), (window.initPopovers = Fe));
  var pe =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (pe =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++) {
                t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          pe.apply(this, arguments)
        );
      },
    ke = {
      triggerType: "hover",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    B1 = (function () {
      function e(t, i, s, a) {
        t === void 0 && (t = null),
          i === void 0 && (i = null),
          s === void 0 && (s = null),
          a === void 0 && (a = ke),
          (this._parentEl = t),
          (this._triggerEl = i),
          (this._targetEl = s),
          (this._options = pe(pe({}, ke), a)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          g.addInstance("Dial", this, this._targetEl.id, !0);
      }
      return (
        (e.prototype.init = function () {
          var t = this;
          if (this._triggerEl && this._targetEl && !this._initialized) {
            var i = this._getTriggerEventTypes(this._options.triggerType);
            (this._showEventHandler = function () {
              t.show();
            }),
              i.showEvents.forEach(function (s) {
                t._triggerEl.addEventListener(s, t._showEventHandler),
                  t._targetEl.addEventListener(s, t._showEventHandler);
              }),
              (this._hideEventHandler = function () {
                t._parentEl.matches(":hover") || t.hide();
              }),
              i.hideEvents.forEach(function (s) {
                t._parentEl.addEventListener(s, t._hideEventHandler);
              }),
              (this._initialized = !0);
          }
        }),
        (e.prototype.destroy = function () {
          var t = this;
          if (this._initialized) {
            var i = this._getTriggerEventTypes(this._options.triggerType);
            i.showEvents.forEach(function (s) {
              t._triggerEl.removeEventListener(s, t._showEventHandler),
                t._targetEl.removeEventListener(s, t._showEventHandler);
            }),
              i.hideEvents.forEach(function (s) {
                t._parentEl.removeEventListener(s, t._hideEventHandler);
              }),
              (this._initialized = !1);
          }
        }),
        (e.prototype.removeInstance = function () {
          g.removeInstance("Dial", this._targetEl.id);
        }),
        (e.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (e.prototype.hide = function () {
          this._targetEl.classList.add("hidden"),
            this._triggerEl &&
              this._triggerEl.setAttribute("aria-expanded", "false"),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        (e.prototype.show = function () {
          this._targetEl.classList.remove("hidden"),
            this._triggerEl &&
              this._triggerEl.setAttribute("aria-expanded", "true"),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (e.prototype.toggle = function () {
          this._visible ? this.hide() : this.show();
        }),
        (e.prototype.isHidden = function () {
          return !this._visible;
        }),
        (e.prototype.isVisible = function () {
          return this._visible;
        }),
        (e.prototype._getTriggerEventTypes = function (t) {
          switch (t) {
            case "hover":
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
            case "click":
              return {
                showEvents: ["click", "focus"],
                hideEvents: ["focusout", "blur"],
              };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"],
              };
          }
        }),
        e
      );
    })();
  function Ue() {
    document.querySelectorAll("[data-dial-init]").forEach(function (e) {
      var t = e.querySelector("[data-dial-toggle]");
      if (t) {
        var i = t.getAttribute("data-dial-toggle"),
          s = document.getElementById(i);
        if (s) {
          var a = t.getAttribute("data-dial-trigger");
          new B1(e, t, s, { triggerType: a || ke.triggerType });
        } else
          console.error(
            "Dial with id ".concat(
              i,
              " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
            )
          );
      } else console.error("Dial with id ".concat(e.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
    });
  }
  typeof window < "u" && ((window.Dial = B1), (window.initDials = Ue));
  function Ge() {
    Ae(), He(), ze(), Ie(), Ze(), Re(), qe(), Ne(), We(), Fe(), Ue();
  }
  typeof window < "u" && (window.initFlowbite = Ge);
  var s2 = new J1("load", [Ae, He, ze, Ie, Ze, Re, qe, Ne, We, Fe, Ue]);
  s2.init();
  _1("missionstore", {
    state() {
      return { missionStatus: !1 };
    },
    actions: {
      setMissionToogle() {
        this.missionStatus = !this.missionStatus;
      },
    },
    getters: {
      getMissionStatus() {
        return this.missionStatus;
      },
    },
  });
  const P1 = _1("topnav", {
      state() {
        return { topNavStatus: !0, navbarHeight: void 0 };
      },
      actions: {
        setTopNavToggle() {
          this.topNavStatus = !this.topNavStatus;
        },
        setTopNavStatus(e) {
          this.topNavStatus = e;
        },
        setNavbarHeight(e) {
          this.navbarHeight = e;
        },
      },
      getters: {
        getTopNavStatus() {
          return this.topNavStatus;
        },
        getNavbarHeight() {
          return this.navbarHeight;
        },
      },
    }),
    o2 = {
      name: "DropdownDarkLight",
      data() {
        return {};
      },
      methods: {},
      mounted() {
        let e = document.getElementById("theme-toggle-dark-icon"),
          t = document.getElementById("theme-toggle-light-icon"),
          i = document.getElementById("theme-toggle-system-theme");
        e.addEventListener("click", function () {
          document.documentElement.classList.remove("light"),
            document.documentElement.classList.add("dark"),
            localStorage.setItem("color-theme", "dark");
        }),
          t.addEventListener("click", function () {
            document.documentElement.classList.remove("dark"),
              document.documentElement.classList.add("light"),
              localStorage.setItem("color-theme", "light");
          }),
          i.addEventListener("click", function () {
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? (document.documentElement.classList.remove("light"),
                document.documentElement.classList.add("dark"),
                localStorage.setItem("color-theme", "dark"))
              : (document.documentElement.classList.remove("dark"),
                document.documentElement.classList.add("light"),
                localStorage.setItem("color-theme", "light"));
          });
      },
    },
    a2 = { class: "relative inline-block text-left" },
    n2 = o(
      "button",
      {
        id: "dropdownTopButton",
        "data-dropdown-toggle": "dropdownTop",
        "data-dropdown-placement": "top",
        class:
          "flex h-8 w-8 items-center justify-center rounded-full border-white bg-gray-100 text-sm font-medium leading-none text-violet-700 outline-none ring-2 ring-white ring-opacity-20 transition-all focus:ring-offset-white dark:bg-gray-600 dark:ring-0",
      },
      [
        o(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 fill-gray-300 dark:fill-gray-400",
          },
          [
            o("path", {
              d: "M18.6493 4.59125C16.8893 2.99125 14.5593 2.03125 11.9993 2.03125C6.4993 2.03125 2.0293 6.50125 2.0293 12.0013C2.0293 17.5013 6.4993 21.9712 11.9993 21.9712C14.5593 21.9712 16.8893 21.0112 18.6493 19.4112C20.6893 17.6012 21.9693 14.9412 21.9693 12.0013C21.9693 9.06125 20.6893 6.40125 18.6493 4.59125ZM11.9693 16.3912C11.9493 18.0413 10.7193 18.4412 9.5693 17.9812C7.1993 17.0312 5.5293 14.7113 5.5293 12.0013C5.5293 9.29125 7.1993 6.97125 9.5693 6.01125C10.7193 5.55125 11.9493 5.96125 11.9693 7.60125V16.3912Z",
            }),
          ]
        ),
      ],
      -1
    ),
    r2 = {
      id: "dropdownTop",
      class:
        "z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700",
    },
    l2 = {
      id: "theme-toggle",
      class: "py-2 text-sm text-gray-700 dark:text-gray-200",
      "aria-labelledby": "dropdownTopButton",
    },
    c2 = {
      id: "theme-toggle-light-icon",
      class:
        "flex w-full cursor-pointer px-4 py-2 text-sm leading-5 text-gray-600 outline-none transition duration-700 hover:bg-gray-200/30 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-200",
    },
    d2 = Bt(
      '<div class="mr-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block h-5 w-5 stroke-gray-400 dark:hidden"><path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg data-v-c2d7f2c4="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden h-5 w-5 dark:block dark:fill-gray-400"><path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"></path><path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"></path></svg></div>',
      1
    ),
    h2 = {
      id: "theme-toggle-dark-icon",
      class:
        "flex w-full cursor-pointer px-4 py-2 text-sm leading-5 text-gray-600 outline-none transition duration-700 hover:bg-gray-200/30 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-200",
    },
    u2 = Bt(
      '<div class="mr-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block h-5 w-5 stroke-gray-400 dark:hidden"><path d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden h-5 w-5 dark:block dark:fill-gray-400"><path d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"></path></svg></div>',
      1
    ),
    p2 = {
      id: "theme-toggle-system-theme",
      class:
        "flex w-full cursor-pointer px-4 py-2 text-sm leading-5 text-gray-600 outline-none transition duration-700 hover:bg-gray-200/30 focus:bg-gray-100 focus:text-gray-900 dark:text-gray-200",
    },
    f2 = Bt(
      '<div class="mr-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block h-5 w-5 stroke-gray-400 dark:hidden"><path d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.22V22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 22H16.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden h-5 w-5 dark:block dark:fill-gray-400"><path d="M17.56 2H6.41C3.98 2 2 3.98 2 6.41V12.91V13.11C2 15.55 3.98 17.52 6.41 17.52H10.25C10.8 17.52 11.25 17.97 11.25 18.52V19.49C11.25 20.04 10.8 20.49 10.25 20.49H7.83C7.42 20.49 7.08 20.83 7.08 21.24C7.08 21.65 7.41 22 7.83 22H16.18C16.59 22 16.93 21.66 16.93 21.25C16.93 20.84 16.59 20.5 16.18 20.5H13.76C13.21 20.5 12.76 20.05 12.76 19.5V18.53C12.76 17.98 13.21 17.53 13.76 17.53H17.57C20.01 17.53 21.98 15.55 21.98 13.12V12.92V6.42C21.97 3.98 19.99 2 17.56 2Z"></path></svg></div>',
      1
    );
  function v2(e, t, i, s, a, n) {
    return (
      h(),
      p("div", a2, [
        n2,
        o("div", r2, [
          o("ul", l2, [
            o("li", c2, [d2, o("span", null, O(e.$t("Light theme")), 1)]),
            o("li", h2, [u2, o("span", null, O(e.$t("Dark theme")), 1)]),
            o("li", p2, [f2, o("span", null, O(e.$t("System theme")), 1)]),
          ]),
        ]),
      ])
    );
  }
  const g2 = E(o2, [["render", v2]]),
    m2 = {
      props: [],
      components: { Drawer: de },
      data() {
        return { isLoading: !1, drawer: null, language: "en" };
      },
      setup(e) {
        const t = w1(),
          i = F1({ lang: null });
        return (
          fe(() => {
            Ge();
            const s = new URLSearchParams(window.location.search);
            s.has("lang") && (i.lang = s.get("lang"));
          }),
          { routeParams: i, router: t }
        );
      },
      computed: {},
      mounted() {
        if (document.getElementById("drawer-language")) {
          const e = {
            placement: "right",
            backdrop: !0,
            bodyScrolling: !1,
            edge: !1,
            edgeOffset: "",
            backdropClasses:
              "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
            onHide: () => {},
            onShow: () => {},
            onToggle: () => {},
          };
          this.drawer = new de(document.getElementById("drawer-language"), e);
        }
        this.routeParams.lang && this.updateLangWithParam(this.routeParams.lang);
      },
      methods: {
        updateLangWithParam: async function (e) {
          e === "pt-br" && (e = "pt_BR"),
            Ce(e),
            await et
              .put("/profile/updateLanguage", { language: e })
              .then((t) => {})
              .catch((t) => {});
        },
        toggleModal() {
          this.drawer.toggle();
        },
        getLanguage: async function () {
          const e = this;
          (e.isLoading = !0),
            await et
              .post("/profile/getLanguage", {})
              .then((t) => {
                Ce(t.data.language),
                  (e.language = t.data.language),
                  (e.isLoading = !1);
              })
              .catch((t) => {
                const i = this;
                Object.entries(JSON.parse(t.request.responseText)).forEach(
                  ([s, a]) => {}
                ),
                  (i.isLoading = !1);
              });
        },
        updateLanguage: async function () {
          const e = this;
          this.routeParams.lang ||
            ((e.isLoading = !0),
            Ce(e.language),
            await et
              .put("/profile/updateLanguage", { language: e.language })
              .then((t) => {
                e.isLoading = !1;
              })
              .catch((t) => {
                const i = this;
                Object.entries(JSON.parse(t.request.responseText)).forEach(
                  ([s, a]) => {}
                ),
                  (i.isLoading = !1);
              }));
        },
      },
      created() {
        this.getLanguage();
      },
      watch: {
        language(e, t) {
          (this.language = e), this.updateLanguage();
        },
      },
    },
    _2 = o("i", { class: "fa-light fa-earth-americas" }, null, -1),
    w2 = [_2],
    C2 = {
      id: "drawer-language",
      class:
        "fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
      tabindex: "-1",
    },
    b2 = {
      class:
        "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400",
    },
    y2 = o(
      "svg",
      {
        class: "mr-2.5 h-4 w-4",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 20 20",
      },
      [
        o("path", {
          d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
        }),
      ],
      -1
    ),
    x2 = o(
      "svg",
      {
        class: "h-3 w-3",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 14 14",
      },
      [
        o("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6",
        }),
      ],
      -1
    ),
    L2 = o("span", { class: "sr-only" }, "Close menu", -1),
    k2 = [x2, L2],
    E2 = { class: "relative h-[calc(100%_-_64px)] w-full px-10" },
    M2 = { class: "grid grid-cols-3 py-6" },
    S2 = { class: "relative my-4 flex items-center justify-center" },
    A2 = { class: "relative" },
    H2 = {
      class:
        "flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-200 shadow-lg transition-all duration-300 peer-checked:border-primary-500 dark:border-gray-600",
    },
    z2 = ["src"],
    I2 = o(
      "div",
      {
        class:
          "absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-primary-500 text-white peer-checked:flex dark:border-gray-800",
      },
      [
        o(
          "svg",
          {
            "data-v-26e5b7b0": "",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img",
            class: "icon h-3 w-3",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
          },
          [
            o("path", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20 6L9 17l-5-5",
            }),
          ]
        ),
      ],
      -1
    ),
    T2 = { class: "relative my-4 flex items-center justify-center" },
    V2 = { class: "relative" },
    $2 = {
      class:
        "flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-200 shadow-lg transition-all duration-300 peer-checked:border-primary-500 dark:border-gray-600",
    },
    O2 = ["src"],
    j2 = o(
      "div",
      {
        class:
          "absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-primary-500 text-white peer-checked:flex dark:border-gray-800",
      },
      [
        o(
          "svg",
          {
            data: "",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img",
            class: "icon h-3 w-3",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
          },
          [
            o("path", {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20 6L9 17l-5-5",
            }),
          ]
        ),
      ],
      -1
    ),
    B2 = ["src"],
    P2 = ["src"];
  function D2(e, t, i, s, a, n) {
    return (
      h(),
      p(
        It,
        null,
        [
          o(
            "button",
            {
              onClick:
                t[0] ||
                (t[0] = _t(
                  (...r) => n.toggleModal && n.toggleModal(...r),
                  ["prevent"]
                )),
              class: "mr-3 mt-1 text-[28px] text-gray-500 dark:text-gray-500",
            },
            w2
          ),
          o("div", C2, [
            o("h5", b2, [y2, z(" " + O(e.$t("Select language")), 1)]),
            o(
              "button",
              {
                onClick:
                  t[1] ||
                  (t[1] = _t(
                    (...r) => n.toggleModal && n.toggleModal(...r),
                    ["prevent"]
                  )),
                type: "button",
                "aria-controls": "drawer-right-example",
                class:
                  "absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
              },
              k2
            ),
            o("div", E2, [
              o("div", M2, [
                o("div", S2, [
                  o("div", A2, [
                    Lt(
                      o(
                        "input",
                        {
                          type: "radio",
                          "onUpdate:modelValue":
                            t[2] || (t[2] = (r) => (a.language = r)),
                          value: "en",
                          name: "language_selection",
                          class:
                            "peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0",
                        },
                        null,
                        512
                      ),
                      [[a1, a.language]]
                    ),
                    o("div", H2, [
                      o(
                        "img",
                        {
                          class: "h-10 w-10 rounded-full",
                          src: "/assets/images/lang/united-states-of-america.svg",
                          alt: "flag icon",
                        },
                        null,
                        8,
                        z2
                      ),
                    ]),
                    I2,
                  ]),
                ]),
                o("div", T2, [
                  o("div", V2, [
                    Lt(
                      o(
                        "input",
                        {
                          type: "radio",
                          "onUpdate:modelValue":
                            t[3] || (t[3] = (r) => (a.language = r)),
                          value: "pt_BR",
                          name: "language_selection",
                          class:
                            "peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0",
                        },
                        null,
                        512
                      ),
                      [[a1, a.language]]
                    ),
                    o("div", $2, [
                      o(
                        "img",
                        {
                          class: "h-10 w-10 rounded-full",
                          src: "/assets/images/lang/brasil.svg",
                          alt: "flag icon",
                        },
                        null,
                        8,
                        O2
                      ),
                    ]),
                    j2,
                  ]),
                ]),
              ]),
              o("div", null, [
                o(
                  "img",
                  {
                    src: "/assets/images/lang/translation.svg",
                    class: "mx-auto w-full max-w-[280px] dark:hidden",
                    alt: "illustration",
                  },
                  null,
                  8,
                  B2
                ),
                o(
                  "img",
                  {
                    src: "/assets/images/lang/translation-dark.svg",
                    class: "mx-auto hidden w-full max-w-[280px] dark:block",
                    alt: "illustration",
                  },
                  null,
                  8,
                  P2
                ),
              ]),
            ]),
          ]),
        ],
        64
      )
    );
  }
  const Z2 = E(m2, [["render", D2]]),
    R2 = {
      props: [],
      components: {},
      data() {
        return {
          isLoadingWallet: !0,
          isCheckingWallet: !1,
          wallet: null,
          processInterval: null,
        };
      },
      setup(e) {
        const t = U1(),
          i = G1(!1);
        K1(() => {
          s();
        }),
          fe(() => {
            s();
          });
        function s() {
          i.value = t.name === "casinoPlayPage";
        }
        return { isCasinoPlayPage: i };
      },
      computed: {},
      beforeUnmount() {
        clearInterval(this.processInterval);
      },
      mounted() {},
      methods: {
        getWallet: async function () {
          const e = this;
          (e.isLoadingWallet = !0),
            await et
              .get("profile/wallet")
              .then((t) => {
                (e.wallet = t.data.wallet), (e.isLoadingWallet = !1);
              })
              .catch((t) => {
                Object.entries(JSON.parse(t.request.responseText)).forEach(
                  ([i, s]) => {
                    console.log(`${s}`);
                  }
                ),
                  (e.isLoadingWallet = !1);
              });
        },
        checkWallet: async function () {
          await this.getWallet();
        },
      },
      async created() {
        this.isCasinoPlayPage, await this.getWallet();
      },
      watch: {},
    },
    q2 = o(
      "path",
      {
        d: "M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96z",
        fill: "currentColor",
      },
      null,
      -1
    ),
    N2 = o(
      "path",
      {
        d: "M462.4 329.8C433.4 419.7 350.4 480 255.1 480c-55.41 0-106.5-21.19-145.4-56.49l-48.5 48.53C45.07 489 16 477 16 452.1V307.1C16 296.7 24.32 288.3 34.66 288h146.9c23.57 .5781 35.26 29.15 18.43 46l-44.18 44.2C183 401.8 218 416 256 416c66.58 0 125.1-42.53 145.5-105.8c5.422-16.78 23.36-26.03 40.3-20.59C458.6 294.1 467.9 313 462.4 329.8z",
        fill: "currentColor",
        opacity: "0.4",
      },
      null,
      -1
    ),
    W2 = [q2, N2];
  function F2(e, t, i, s, a, n) {
    var r, l;
    return (
      h(),
      p(
        "button",
        {
          type: "button",
          class: F([
            a.isLoadingWallet ? "w-[100px] sm:w-[140px]" : "",
            "wallet-money flex items-center justify-center gap-2 pt-1",
          ]),
        },
        [
          o(
            "div",
            {
              onClick:
                t[0] || (t[0] = (...c) => n.checkWallet && n.checkWallet(...c)),
            },
            [
              (h(),
              p(
                "svg",
                {
                  height: "1em",
                  viewBox: "0 0 512 512",
                  width: "1em",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: F(a.isLoadingWallet ? "animate-spin" : ""),
                },
                W2,
                2
              )),
            ]
          ),
          o(
            "div",
            {
              onClick:
                t[1] || (t[1] = (c) => e.$router.push({ name: "profileWallet" })),
            },
            [
              s.isCasinoPlayPage
                ? (h(),
                  p(
                    "strong",
                    {
                      key: 0,
                      class: F([
                        "text-xs",
                        "text-[var(--ci-primary-color)]",
                        "sm:text-sm",
                        "opacity-50",
                      ]),
                    },
                    " (Jogando) ",
                    2
                  ))
                : (h(),
                  p(
                    "strong",
                    {
                      key: 1,
                      class: F([
                        "text-xs",
                        "text-[var(--ci-primary-color)]",
                        "sm:text-sm",
                        a.isLoadingWallet ? "opacity-50" : "",
                      ]),
                    },
                    O(
                      a.isLoadingWallet
                        ? "R$ 0,00"
                        : e.state.currencyFormat(
                            (r = a.wallet) == null ? void 0 : r.total_balance,
                            (l = a.wallet) == null ? void 0 : l.currency
                          )
                    ),
                    3
                  )),
            ]
          ),
        ],
        2
      )
    );
  }
  const U2 = E(R2, [["render", F2]]),
    G2 = {
      props: ["showMobile", "title", "isFull"],
      data() {
        return { isLoading: !1, modalDeposit: null };
      },
      setup(e) {
        return (
          fe(() => {
            Ge();
          }),
          {}
        );
      },
      computed: {
        isAuthenticated() {
          return Qt().isAuth;
        },
        modalStore() {
          return C1();
        },
      },
      beforeUnmount() {},
      methods: {
        openModal() {
          this.modalStore.setDepositModalStatus(!0);
        },
      },
      created() {},
      watch: {},
    };
  function K2(e, t, i, s, a, n) {
    return (
      h(),
      p(
        "button",
        {
          onClick:
            t[0] ||
            (t[0] = _t((...r) => n.openModal && n.openModal(...r), ["prevent"])),
          type: "button",
          class: F([
            i.showMobile === !1 ? "hidden md:block" : "",
            i.isFull ? "w-full" : "",
            "ui-button-blue",
            "text-xs",
            "md:text-sm",
            "font-bold",
            "rounded",
            "shadow-[0px_0px_8px_var(--ci-primary-color)]",
          ]),
        },
        O(i.title),
        3
      )
    );
  }
  const J2 = E(G2, [["render", K2]]);
  const X2 = {
      name: "PromotionsIcon",
      data() {
        return {};
      },
    },
    Ke = (e) => (Pt("data-v-e6951240"), (e = e()), Dt(), e),
    Y2 = Ke(() =>
      o(
        "svg",
        {
          height: "16",
          viewBox: "0 0 512 512",
          width: "16",
          xmlns: "http://www.w3.org/2000/svg",
          class: "gift-promotions",
        },
        [
          o("path", {
            d: "M280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 136.6 408.6 176 360 176H288V256H224V176H152C103.4 176 64 136.6 64 88C64 39.4 103.4 0 152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128zM224 512V288H288V512H224z",
            class: "fill-[var(--ci-promotion-color)]",
          }),
          o("path", {
            d: "M152 176H224V256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C88.16 156.5 117.8 176 152 176zM480 256H288V176H360C394.2 176 423.8 156.5 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z",
            class: "fill-[var(--ci-promotion-color)]",
            opacity: "0.6",
          }),
        ],
        -1
      )
    ),
    Q2 = Ke(() => o("div", { class: "blur-style blur-style-top" }, null, -1)),
    ts = Ke(() => o("div", { class: "blur-style blur-style-bottom" }, null, -1));
  function es(e, t, i, s, a, n) {
    const r = ct("router-link");
    return (
      h(),
      tt(
        r,
        {
          to: { name: "home" },
          "active-class": "",
          class: "relative rounded bg-[var(--ci-promotion-background-color)] p-1",
          style: { overflow: "hidden" },
        },
        { default: b(() => [Y2, Q2, ts]), _: 1 }
      )
    );
  }
  const is = E(X2, [
    ["render", es],
    ["__scopeId", "data-v-e6951240"],
  ]);
  const ss = {
      props: ["simple"],
      components: {
        MakeDeposit: J2,
        WalletBalance: U2,
        LanguageSelector: Z2,
        DropdownDarkLight: g2,
        RouterLink: Ee,
        PromotionsIcon: is,
      },
      data() {
        return {
          isLoadingLogin: !1,
          isLoadingRegister: !1,
          modalProfile: null,
          modalProfileStatus: !0,
          custom: null,
          readonly: !1,
          profileUser: null,
          loginForm: { email: "", password: "" },
          avatarUrl: "/assets/images/profile.jpg",
          profileName: "",
          sumBets: 0,
          totalBets: 0,
          totalEarnings: 0,
          screenWidth: this.screenWidth,
        };
      },
      setup() {
        return { router: w1() };
      },
      computed: {
        sidebarMenuStore() {
          return Me();
        },
        topNavMenuStore() {
          return P1();
        },
        modalStore() {
          return C1();
        },
        topNav() {
          return this.topNavMenuStore.getTopNavStatus;
        },
        isAuthenticated() {
          return Qt().isAuth;
        },
        userData() {
          return Qt().user;
        },
        setting() {
          return Se().setting;
        },
        logoPositionClass() {
          const e = this.sidebarMenuStore.getSidebarColappseStatus,
            t = this.screenWidth < 1620;
          return [e && t ? "absolute left-[18rem]" : ""];
        },
        navbarPositionClass() {
          const e = this.sidebarMenuStore.getSidebarColappseStatus,
            t = this.screenWidth >= 1024;
          return { "pl-[70px]": e && t, "pl-[290px]": !e && t };
        },
      },
      mounted() {
        this.handleResize(), window.addEventListener("resize", this.handleResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.handleResize);
      },
      methods: {
        redirectSocialTo: function () {
          return "/auth/redirect/google";
        },
        like: async function (e) {
          const t = this,
            i = be();
          await et
            .post("/profile/like/" + e, {})
            .then((s) => {
              t.getProfile(), i.success(t.$t(s.data.message));
            })
            .catch((s) => {
              Object.entries(JSON.parse(s.request.responseText)).forEach(
                ([a, n]) => {
                  i.error(`${n}`);
                }
              );
            });
        },
        togglePassword: function () {
          this.typeInputPassword === "password"
            ? (this.typeInputPassword = "text")
            : (this.typeInputPassword = "password");
        },
        logoutAccount: function () {
          const e = Qt(),
            t = be();
          et.post("auth/logout", {})
            .then((i) => {
              e.logout(),
                this.router.push({ name: "home" }),
                t.success("Você foi desconectado com sucesso!!");
            })
            .catch((i) => {
              Object.entries(JSON.parse(i.request.responseText)).forEach(
                ([s, a]) => {
                  console.log(a);
                }
              );
            });
        },
        toggleMenu: function () {
          this.sidebarMenuStore.setSidebarToogle();
        },
        loginToggle: function () {
          this.modalStore.setLoginModalStatus(!0);
        },
        registerToggle: function () {
          this.modalStore.setRegisterModalStatus(!0);
        },
        openProfileInfo: function () {
          this.modalStore.setProfileInfoModalStatus(!0);
        },
        openFileInput() {
          this.$refs.fileInput.click();
        },
        async handleFileChange(e) {
          const t = e.target.files[0],
            i = new FormData();
          i.append("avatar", t);
          const s = new FileReader();
          (s.onload = () => {
            this.avatarUrl = s.result;
          }),
            s.readAsDataURL(t),
            await et
              .post("/profile/upload-avatar", i, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((a) => {
                console.log("Avatar atualizado com sucesso", a.data);
              })
              .catch((a) => {
                console.error("Erro ao atualizar avatar", a);
              });
        },
        closeTopNav: async function () {
          this.topNavMenuStore.setTopNavToggle(),
            await this.$nextTick(),
            this.topNavMenuStore.setNavbarHeight(this.$refs.navbar.clientHeight);
        },
        async collapseSidebarToggle() {
          this.sidebarMenuStore.setSidebarCollapseToogle(),
            await this.$nextTick(),
            this.sidebarMenuStore.setSidebarWidth(
              document.querySelector("[data-js='sidebar']").clientWidth
            );
        },
        handleResize() {
          (this.screenWidth = window.innerWidth),
            this.topNavMenuStore.setNavbarHeight(this.$refs.navbar.clientHeight);
        },
        getProfile: async function () {
          const e = this;
          (e.isLoadingProfile = !0),
            await et
              .get("/profile/")
              .then((t) => {
                (e.sumBets = t.data.sumBets),
                  (e.totalBets = t.data.totalBets),
                  (e.totalEarnings = t.data.totalEarnings);
                const i = t.data.user;
                (i == null ? void 0 : i.avatar) != null &&
                  (e.avatarUrl = "/storage/" + i.avatar),
                  (e.profileName = i.name),
                  (e.profileUser = i),
                  (e.isLoadingProfile = !1);
              })
              .catch((t) => {
                const i = this;
                Object.entries(JSON.parse(t.request.responseText)).forEach(
                  ([s, a]) => {}
                ),
                  (i.isLoadingProfile = !1);
              });
        },
      },
      async created() {
        this.isAuthenticated && (await this.getProfile()), (this.custom = custom);
      },
      watch: {
        searchTerm(e, t) {
          this.getSearch();
        },
        async searchGameMenu(e, t) {
          await this.getSearch(), (this.showSearchMenu = !this.showSearchMenu);
        },
      },
    },
    A = (e) => (Pt("data-v-e089934b"), (e = e()), Dt(), e),
    os = {
      ref: "navbar",
      class:
        "navbar navtop-color custom-box-shadow fixed top-0 z-[150] w-full border-none lg:z-[1000]",
    },
    as = {
      key: 0,
      class:
        "relative flex items-center justify-center gap-2 bg-[var(--ci-primary-color)] px-2 py-0 md:px-4 md:py-2",
    },
    ns = {
      class:
        "reedem py-[2px] text-center font-medium text-white md:text-xs lg:text-sm",
    },
    rs = A(() =>
      o(
        "svg",
        {
          height: "15",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
          class: "fill-[#474a4b] group-hover:fill-black",
        },
        [
          o("path", {
            d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
          }),
        ],
        -1
      )
    ),
    ls = [rs],
    cs = { class: "nav-menu relative" },
    ds = {
      class:
        "absolute bottom-0 left-0 hidden h-full w-full gap-4 px-5 lg:flex lg:max-w-[280px]",
    },
    hs = A(() =>
      o(
        "svg",
        {
          height: "16",
          viewBox: "0 0 640 512",
          width: "16",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#fff]",
        },
        [
          o("path", {
            d: "M220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.8 470 377.8 443.4 393.2L250.5 504.5C223.9 519.9 189.9 510.8 174.5 484.2L7.468 194.9C-7.906 168.2 1.218 134.2 27.85 118.8L220.7 7.468zM143.8 277.3C136.9 303.2 152.3 329.1 178.3 336.9C204.3 343.9 230.1 328.5 237.9 302.5L240.3 293.6C240.4 293.3 240.5 292.9 240.6 292.5L258.4 323.2L246.3 330.2C239.6 334 237.4 342.5 241.2 349.2C245.1 355.9 253.6 358.1 260.2 354.3L308.4 326.5C315.1 322.6 317.4 314.1 313.5 307.4C309.7 300.8 301.2 298.5 294.5 302.3L282.5 309.3L264.7 278.6C265.1 278.7 265.5 278.8 265.9 278.9L274.7 281.2C300.7 288.2 327.4 272.8 334.4 246.8C341.3 220.8 325.9 194.1 299.9 187.1L196.1 159.6C185.8 156.6 174.4 163.2 171.4 174.3L143.8 277.3z",
          }),
          o("path", {
            d: "M324.1 499L459.4 420.9C501.3 396.7 515.7 343.1 491.5 301.1L354.7 64.25C356.5 64.08 358.2 64 360 64H584C614.9 64 640 89.07 640 120V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 499V499zM579.8 135.7C565.8 123.9 545.3 126.2 532.9 138.9L528.1 144.2L523.1 138.9C510.6 126.2 489.9 123.9 476.4 135.7C460.7 149.2 459.9 173.1 473.9 187.6L522.4 237.6C525.4 240.8 530.6 240.8 533.9 237.6L582 187.6C596 173.1 595.3 149.2 579.8 135.7H579.8z",
            opacity: "0.4",
          }),
        ],
        -1
      )
    ),
    us = A(() =>
      o(
        "svg",
        {
          height: "16",
          viewBox: "0 0 512 512",
          width: "16",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#fff]",
        },
        [
          o("path", {
            d: "M355.5 45.53L342.4 14.98c-27.95-9.983-57.18-14.98-86.42-14.98c-29.25 0-58.51 4.992-86.46 14.97L156.5 45.53l99.5 55.13L355.5 45.53zM86.78 96.15L53.67 99.09c-34.79 44.75-53.67 99.8-53.67 156.5L.0001 256c0 2.694 .0519 5.379 .1352 8.063l24.95 21.76l83.2-77.67L86.78 96.15zM318.8 336L357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336zM512 255.6c0-56.7-18.9-111.8-53.72-156.5L425.6 96.16L403.7 208.2l83.21 77.67l24.92-21.79C511.1 260.1 512 258.1 512 255.6zM51.77 367.7l-7.39 32.46c33.48 49.11 82.96 85.07 140 101.7l28.6-16.99l-48.19-103.3L51.77 367.7zM347.2 381.5l-48.19 103.3l28.57 17c57.05-16.66 106.5-52.62 140-101.7l-7.38-32.46L347.2 381.5z",
          }),
          o("path", {
            d: "M458.3 99.08L458.3 99.08L458.3 99.08zM511.8 264c-1.442 48.66-16.82 95.87-44.28 136.1l-7.38-32.46l-113 13.86l-48.19 103.3l28.22 16.84c-23.48 6.78-47.67 10.2-71.85 10.2c-23.76 0-47.51-3.302-70.58-9.962l28.23-17.06l-48.19-103.3l-113-13.88l-7.39 32.46c-27.45-40.19-42.8-87.41-44.25-136.1l24.95 21.76l83.2-77.67L86.78 96.15L53.67 99.09c29.72-38.29 69.67-67.37 115.2-83.88l.3613 .2684L156.5 45.53l99.5 55.13l99.5-55.13L342.4 14.98c45.82 16.48 86 45.64 115.9 84.11L425.6 96.16L403.7 208.2l83.21 77.67L511.8 264zM357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336L357.3 217.4z",
            opacity: "0.2",
          }),
        ],
        -1
      )
    ),
    ps = {
      class:
        "mx-auto flex items-center justify-between px-4 py-2 lg:max-w-[1140px] lg:px-3 lg:py-4",
    },
    fs = A(() =>
      o(
        "svg",
        {
          height: "24px",
          viewBox: "0 0 448 512",
          width: "26px",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
            fill: "#fff",
          }),
        ],
        -1
      )
    ),
    vs = [fs],
    gs = { class: "flex items-center gap-3 hover:opacity-90" },
    ms = { key: 0, href: "/", class: "flex" },
    _s = ["src", "alt"],
    ws = ["src", "alt"],
    Cs = A(() => o("div", { class: "hidden md:block" }, null, -1)),
    bs = { key: 0, class: "flex items-center" },
    ys = { key: 0, class: "flex gap-2 md:gap-3" },
    xs = A(() =>
      o(
        "svg",
        {
          height: "15",
          viewBox: "0 0 512 512",
          width: "15",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M344.7 273.5l-144.1 136c-6.975 6.578-17.2 8.375-26 4.594C165.8 410.3 160.1 401.6 160.1 392V320H32.02C14.33 320 0 305.7 0 288V224c0-17.67 14.33-32 32.02-32h128.1V120c0-9.578 5.707-18.25 14.51-22.05c8.803-3.781 19.03-1.984 26 4.594l144.1 136C354.3 247.6 354.3 264.4 344.7 273.5z",
            fill: "currentColor",
          }),
          o("path", {
            d: "M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z",
            fill: "currentColor",
            opacity: "0.4",
          }),
        ],
        -1
      )
    ),
    Ls = { key: 1, class: "flex items-center gap-2" },
    ks = { class: "flex items-center" },
    Es = { class: "" },
    Ms = {
      type: "button",
      class:
        "profile-button flex items-center justify-center bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",
      "aria-expanded": "false",
      "data-dropdown-toggle": "dropdown-user",
      "data-dropdown-offset-distance": "15",
      "data-dropdown-offset-skidding": "-60",
      "data-dropdown-placement": "bottom",
    },
    Ss = A(() => o("span", { class: "sr-only" }, "Abrir menu do usuário", -1)),
    As = ["src"],
    Hs = {
      class: "z-50 my-4 hidden list-none rounded bg-white text-base shadow",
      id: "dropdown-user",
    },
    zs = { class: "px-4 py-3", role: "none" },
    Is = { class: "text-sm text-black", role: "none" },
    Ts = { class: "truncate text-sm font-medium text-gray-900", role: "none" },
    Vs = { class: "py-1", role: "none" },
    $s = A(() =>
      o("i", { class: "fa-duotone fa-house mr-3 text-base" }, null, -1)
    ),
    Os = A(() => o("span", null, "Visão Geral", -1)),
    js = A(() =>
      o("i", { class: "fa-duotone fa-people-group mr-3 text-base" }, null, -1)
    ),
    Bs = A(() => o("span", null, "Afiliado", -1)),
    Ps = A(() =>
      o(
        "i",
        { class: "fa-regular fa-money-bill-trend-up mr-3 text-base" },
        null,
        -1
      )
    ),
    Ds = A(() => o("span", null, "Depósito", -1)),
    Zs = A(() =>
      o(
        "i",
        { class: "fa-light fa-money-bill-transfer mr-3 text-base" },
        null,
        -1
      )
    ),
    Rs = A(() => o("span", null, "Saque", -1)),
    qs = A(() =>
      o("i", { class: "fa-duotone fa-wallet mr-3 text-base" }, null, -1)
    ),
    Ns = A(() => o("span", null, "Minha Carteira", -1)),
    Ws = A(() =>
      o("i", { class: "fa-regular fa-id-card-clip mr-3 text-base" }, null, -1)
    ),
    Fs = A(() => o("span", null, "Meu Perfil", -1)),
    Us = A(() =>
      o(
        "svg",
        {
          height: "16",
          viewBox: "0 0 512 512",
          width: "16",
          xmlns: "http://www.w3.org/2000/svg",
          active: "false",
          "aria-hidden": "true",
          class: "mr-3",
        },
        [
          o("path", {
            d: "M480 184.9v110.3C499.1 284 512 263.6 512 240S499.1 195.1 480 184.9zM64 128C28.66 128 0 156.7 0 192v96c0 35.34 28.66 64 64 64h2.53c-10.76 77.8 34.54 143.3 36.81 146.5C109.4 507 118.5 512 128 512h64c12.94 0 24.62-9.078 29.56-23.04c4.969-13.96 2.219-30-6.938-40.69C214.2 447.8 174.3 398.6 185.1 352H192c10.76 0 21.4 1.303 32 2.734V125.3C213.4 126.7 202.8 128 192 128H64z",
            fill: "currentColor",
          }),
          o("path", {
            d: "M480 448c0 9.219-7.094 32-32 32c-6.188 0-15.16-3.156-20-7.031l-85.03-68.03C308.7 377.5 267.3 360.6 224 354.7V125.3c43.26-5.84 84.69-22.79 119-50.2l85.03-68.03C433.8 2.375 440.9 0 448 0c25.03 0 32 23.25 32 32V448z",
            fill: "currentColor",
            opacity: "0.4",
          }),
        ],
        -1
      )
    ),
    Gs = A(() => o("span", null, "Promoções", -1)),
    Ks = A(() =>
      o(
        "i",
        { class: "fa-duotone fa-right-from-bracket mr-3 text-base" },
        null,
        -1
      )
    ),
    Js = A(() => o("span", null, "Desconectar", -1)),
    Xs = [Ks, Js];
  function Ys(e, t, i, s, a, n) {
    var d, m, y;
    const r = ct("RouterLink"),
      l = ct("PromotionsIcon"),
      c = ct("MakeDeposit"),
      u = ct("WalletBalance");
    return (
      h(),
      p(
        "nav",
        os,
        [
          n.topNav && a.custom && a.custom.texto_header
            ? (h(),
              p("div", as, [
                o("p", ns, O(a.custom.texto_header), 1),
                C(
                  r,
                  {
                    to: { name: "profileAffiliate" },
                    class:
                      "rounded bg-[#fff] p-1 px-2 text-[11px] font-medium text-[var(--ci-primary-color)] hover:opacity-90 lg:text-sm",
                  },
                  { default: b(() => [z(" Resgatar ")]), _: 1 }
                ),
                o(
                  "button",
                  {
                    type: "button",
                    class:
                      "group py-2 md:absolute md:right-2 md:top-2/4 md:-translate-y-1/2 md:p-1",
                    onClick:
                      t[0] ||
                      (t[0] = (...f) => n.closeTopNav && n.closeTopNav(...f)),
                  },
                  ls
                ),
              ]))
            : $("", !0),
          o("div", cs, [
            o("div", ds, [
              C(
                r,
                {
                  to: { name: "home" },
                  class:
                    "relative flex w-full cursor-pointer items-center justify-center gap-2 py-4 text-sm font-semibold uppercase text-white opacity-50 hover:opacity-100",
                },
                { default: b(() => [hs, z(" Cassino ")]), _: 1 }
              ),
              C(
                r,
                {
                  to: { name: "sports" },
                  type: "button",
                  class:
                    "relative flex w-full cursor-pointer items-center justify-center gap-2 py-4 text-sm font-semibold uppercase text-white opacity-50 hover:opacity-100",
                },
                { default: b(() => [us, z(" Esportes ")]), _: 1 }
              ),
            ]),
            o(
              "div",
              { class: F([n.navbarPositionClass, "mx-auto w-full"]) },
              [
                o("div", ps, [
                  o(
                    "div",
                    {
                      class: F([
                        n.logoPositionClass,
                        "flex items-center justify-start",
                      ]),
                    },
                    [
                      o(
                        "button",
                        {
                          onClick:
                            t[1] ||
                            (t[1] = (...f) =>
                              n.collapseSidebarToggle &&
                              n.collapseSidebarToggle(...f)),
                          type: "button",
                          class: "mr-4 hidden cursor-pointer lg:block",
                        },
                        vs
                      ),
                      o("div", gs, [
                        n.setting
                          ? (h(),
                            p("a", ms, [
                              o("div", null, [
                                o(
                                  "img",
                                  {
                                    src: "/storage/" + n.setting.software_logo_white,
                                    class: "block h-5 object-contain sm:hidden",
                                    alt: `${n.setting.software_name} logo`,
                                  },
                                  null,
                                  8,
                                  _s
                                ),
                                o(
                                  "img",
                                  {
                                    src:
                                      "/storage/" + n.setting.software_logo_white,
                                    class: "hidden h-8 object-contain sm:block",
                                    alt: `${n.setting.software_name} logo`,
                                  },
                                  null,
                                  8,
                                  ws
                                ),
                              ]),
                            ]))
                          : $("", !0),
                        C(l),
                      ]),
                    ],
                    2
                  ),
                  Cs,
                  i.simple
                    ? $("", !0)
                    : (h(),
                      p("div", bs, [
                        n.isAuthenticated
                          ? $("", !0)
                          : (h(),
                            p("div", ys, [
                              o(
                                "button",
                                {
                                  onClick:
                                    t[2] ||
                                    (t[2] = _t(
                                      (...f) =>
                                        n.registerToggle &&
                                        n.registerToggle(...f),
                                      ["prevent"]
                                    )),
                                  class:
                                    "rounded-md",
                                },
                                " Registre-se "
                              ),
                              o(
                                "button",
                                {
                                  onClick:
                                    t[3] ||
                                    (t[3] = _t(
                                      (...f) =>
                                        n.loginToggle && n.loginToggle(...f),
                                      ["prevent"]
                                    )),
                                  class:
                                    "ui-button-blue flex items-center gap-2 rounded text-[13px] sm:text-[15px]",
                                },
                                [xs, z(" Entrar ")]
                              ),
                            ])),
                        n.isAuthenticated
                          ? (h(),
                            p("div", Ls, [
                              C(c, { showMobile: !0, title: "Depósito" }),
                              C(u),
                              o("div", ks, [
                                o("div", Es, [
                                  o("button", Ms, [
                                    Ss,
                                    o(
                                      "img",
                                      {
                                        class: "h-6 w-6 rounded-full",
                                        src:
                                          (d = n.userData) != null && d.avatar
                                            ? "/storage/" + n.userData.avatar
                                            : "/assets/images/profile.jpg",
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      As
                                    ),
                                  ]),
                                ]),
                                o("div", Hs, [
                                  o("div", zs, [
                                    o(
                                      "p",
                                      Is,
                                      O(
                                        (m = n.userData) == null ? void 0 : m.name
                                      ),
                                      1
                                    ),
                                    o(
                                      "p",
                                      Ts,
                                      O(
                                        (y = n.userData) == null
                                          ? void 0
                                          : y.email
                                      ),
                                      1
                                    ),
                                  ]),
                                  o("ul", Vs, [
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "home" },
                                          "active-class": "visao-geral-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [$s, Os]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "profileAffiliate" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [js, Bs]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "profileWallet" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [Ps, Ds]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "profileWallet" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [Zs, Rs]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "profileWallet" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [qs, Ns]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "AccountPage" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "block px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [Ws, Fs]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      C(
                                        r,
                                        {
                                          to: { name: "home" },
                                          "active-class": "profile-menu-active",
                                          class:
                                            "flex px-4 py-2 text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                        },
                                        { default: b(() => [Us, Gs]), _: 1 }
                                      ),
                                    ]),
                                    o("li", null, [
                                      o(
                                        "button",
                                        {
                                          type: "button",
                                          class:
                                            "block w-full px-4 py-2 text-left text-sm text-black hover:bg-[var(--ci-primary-opacity-color)]",
                                          role: "menuitem",
                                          onClick:
                                            t[4] ||
                                            (t[4] = _t(
                                              (...f) =>
                                                n.logoutAccount &&
                                                n.logoutAccount(...f),
                                              ["prevent"]
                                            )),
                                        },
                                        Xs
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]))
                          : $("", !0),
                      ])),
                ]),
              ],
              2
            ),
          ]),
        ],
        512
      )
    );
  }
  const k3 = E(ss, [
      ["render", Ys],
      ["__scopeId", "data-v-e089934b"],
    ]),
    Qs = {},
    to = {
      height: "21",
      viewBox: "0 0 576 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
    },
    eo = o(
      "path",
      {
        d: "M448 128C465.7 128 480 142.3 480 160V352C480 369.7 465.7 384 448 384H128C110.3 384 96 369.7 96 352V160C96 142.3 110.3 128 128 128H448zM448 160H128V352H448V160z",
      },
      null,
      -1
    ),
    io = o(
      "path",
      {
        d: "M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    so = [eo, io];
  function oo(e, t) {
    return h(), p("svg", to, so);
  }
  const ao = E(Qs, [["render", oo]]),
    no = {},
    ro = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
    },
    lo = o(
      "path",
      {
        class: "primary",
        d: "M201.9 32l-128 128h92.13l128-128H201.9zM64 32C28.65 32 0 60.65 0 96v64h6.062l128-128H64zM326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM224.3 241.7C221.1 239.5 216.9 239.5 213.5 241.4C210.1 243.3 208 247 208 251v137.9c0 4.008 2.104 7.705 5.5 9.656C215.1 399.5 216.9 400 218.7 400c1.959 0 3.938-.5605 5.646-1.682l106.7-68.97C334.1 327.3 336 323.8 336 319.1s-1.896-7.34-5.021-9.354L224.3 241.7z",
      },
      null,
      -1
    ),
    co = o(
      "path",
      {
        class: "secondary",
        d: "M0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160H0zM330.1 329.3l-106.7 68.97C222.6 399.4 220.6 400 218.7 400c-1.77 0-3.562-.4648-5.166-1.379C210.1 396.7 208 392.1 208 388.1V251c0-4.01 2.104-7.705 5.5-9.656c3.375-1.918 7.562-1.832 10.81 .3027l106.7 68.97C334.1 312.7 336 316.2 336 319.1S334.1 327.3 330.1 329.3z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    ho = [lo, co];
  function uo(e, t) {
    return h(), p("svg", ro, ho);
  }
  const po = E(no, [["render", uo]]),
    fo = {},
    vo = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
      xmlns: "http://www.w3.org/2000/svg",
    },
    go = o(
      "path",
      {
        d: "M159 159C168.4 149.7 183.6 149.7 192.1 159L272.1 239C282.3 248.4 282.3 263.6 272.1 272.1C263.6 282.3 248.4 282.3 239 272.1L159 192.1C149.7 183.6 149.7 168.4 159 159V159z",
      },
      null,
      -1
    ),
    mo = o(
      "path",
      {
        d: "M224 32C224 14.33 238.3 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 184.4 29.46 119.6 76.84 73.14C89.46 60.78 109.7 60.98 122.1 73.6C134.5 86.23 134.3 106.5 121.6 118.9C86.03 153.7 64 202.3 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 160.9 378.8 81.89 288 66.65V96C288 113.7 273.7 128 256 128C238.3 128 224 113.7 224 96V32z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    _o = [go, mo];
  function wo(e, t) {
    return h(), p("svg", vo, _o);
  }
  const Co = E(fo, [["render", wo]]),
    bo = {},
    yo = {
      height: "21",
      viewBox: "0 0 640 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
    },
    xo = o(
      "path",
      {
        d: "M247.1 200l-31.96-.011L215.1 168c0-13.2-10.78-24-23.98-24C178.8 144 167.1 154.8 167.1 168l.0367 31.99L135.1 200c-13.2 0-23.98 10.8-23.98 24c0 13.2 10.77 24 23.98 24l32.04-.0098L167.1 280c0 13.2 10.82 24 24.02 24c13.2 0 23.98-10.8 23.98-24l.0368-32.01L247.1 248c13.2 0 24.02-10.8 24.02-24C271.1 210.8 261.2 200 247.1 200z",
      },
      null,
      -1
    ),
    Lo = o(
      "path",
      {
        d: "M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    ko = [xo, Lo];
  function Eo(e, t) {
    return h(), p("svg", yo, ko);
  }
  const Mo = E(bo, [["render", Eo]]),
    So = {},
    Ao = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Ho = o(
      "path",
      {
        d: "M355.5 45.53L342.4 14.98c-27.95-9.983-57.18-14.98-86.42-14.98c-29.25 0-58.51 4.992-86.46 14.97L156.5 45.53l99.5 55.13L355.5 45.53zM86.78 96.15L53.67 99.09c-34.79 44.75-53.67 99.8-53.67 156.5L.0001 256c0 2.694 .0519 5.379 .1352 8.063l24.95 21.76l83.2-77.67L86.78 96.15zM318.8 336L357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336zM512 255.6c0-56.7-18.9-111.8-53.72-156.5L425.6 96.16L403.7 208.2l83.21 77.67l24.92-21.79C511.1 260.1 512 258.1 512 255.6zM51.77 367.7l-7.39 32.46c33.48 49.11 82.96 85.07 140 101.7l28.6-16.99l-48.19-103.3L51.77 367.7zM347.2 381.5l-48.19 103.3l28.57 17c57.05-16.66 106.5-52.62 140-101.7l-7.38-32.46L347.2 381.5z",
      },
      null,
      -1
    ),
    zo = o(
      "path",
      {
        d: "M458.3 99.08L458.3 99.08L458.3 99.08zM511.8 264c-1.442 48.66-16.82 95.87-44.28 136.1l-7.38-32.46l-113 13.86l-48.19 103.3l28.22 16.84c-23.48 6.78-47.67 10.2-71.85 10.2c-23.76 0-47.51-3.302-70.58-9.962l28.23-17.06l-48.19-103.3l-113-13.88l-7.39 32.46c-27.45-40.19-42.8-87.41-44.25-136.1l24.95 21.76l83.2-77.67L86.78 96.15L53.67 99.09c29.72-38.29 69.67-67.37 115.2-83.88l.3613 .2684L156.5 45.53l99.5 55.13l99.5-55.13L342.4 14.98c45.82 16.48 86 45.64 115.9 84.11L425.6 96.16L403.7 208.2l83.21 77.67L511.8 264zM357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336L357.3 217.4z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Io = [Ho, zo];
  function To(e, t) {
    return h(), p("svg", Ao, Io);
  }
  const Vo = E(So, [["render", To]]),
    $o = {},
    Oo = {
      "data-v-91d30144": "",
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      lined: "false",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    jo = o(
      "path",
      {
        d: "M269.549 16.684C265.037 16.432 260.574 16 256 16C249.672 16 243.459 16.465 237.254 16.945C238.912 27.078 240 37.404 240 48C240 153.875 153.875 240 48 240C37.404 240 27.078 238.912 16.945 237.254C16.465 243.459 16 249.672 16 256C16 260.574 16.432 265.037 16.684 269.549C26.945 270.994 37.346 272 48 272C171.516 272 272 171.516 272 48C272 37.346 270.994 26.945 269.549 16.684ZM495.316 242.451C485.055 241.006 474.654 240 464 240C340.484 240 240 340.484 240 464C240 474.654 241.006 485.055 242.451 495.316C246.963 495.568 251.426 496 256 496C262.328 496 268.541 495.535 274.746 495.055C273.088 484.922 272 474.596 272 464C272 358.125 358.125 272 464 272C474.596 272 484.922 273.088 495.055 274.746C495.535 268.541 496 262.328 496 256C496 251.426 495.568 246.963 495.316 242.451Z",
      },
      null,
      -1
    ),
    Bo = o(
      "path",
      {
        d: "M464.316 240C474.971 240 485.371 241.006 495.633 242.451C488.818 120.756 391.561 23.498 269.865 16.684C271.311 26.945 272.316 37.346 272.316 48C272.316 171.516 171.832 272 48.316 272C37.662 272 27.262 270.994 17 269.549C23.814 391.244 121.072 488.502 242.768 495.316C241.322 485.055 240.316 474.654 240.316 464C240.316 340.484 340.801 240 464.316 240ZM240.316 48C240.316 37.404 239.229 27.078 237.57 16.945C120.016 26.059 26.375 119.699 17.262 237.254C27.395 238.912 37.721 240 48.316 240C154.191 240 240.316 153.875 240.316 48ZM272.316 464C272.316 474.596 273.404 484.922 275.062 495.055C392.617 485.941 486.258 392.301 495.371 274.746C485.238 273.088 474.912 272 464.316 272C358.441 272 272.316 358.125 272.316 464Z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Po = [jo, Bo];
  function Do(e, t) {
    return h(), p("svg", Oo, Po);
  }
  const Zo = E($o, [["render", Do]]),
    Ro = {},
    qo = {
      "data-v-91d30144": "",
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      lined: "false",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    No = o(
      "path",
      {
        d: "M141.734 164.361L75.521 98.148C50.535 126.691 32.291 161.154 23.039 199.224C29.023 199.906 34.875 201.045 41.039 201.045C79.387 201.045 114.148 186.931 141.734 164.361ZM186.971 164.343L256 233.373L413.852 75.519C371.637 38.566 316.512 15.997 256 15.999C247.432 15.999 238.984 16.487 230.648 17.362C231.627 25.208 233.041 32.931 233.041 41.038C233.041 88.202 215.291 130.884 186.971 164.343ZM201.045 41.038C201.045 34.872 199.904 29.021 199.223 23.036C161.154 32.286 126.691 50.532 98.148 75.519L164.361 141.734C186.934 114.146 201.045 79.386 201.045 41.038ZM164.344 186.97C130.885 215.289 88.203 233.041 41.039 233.041C32.934 233.041 25.211 231.627 17.363 230.646C16.488 238.982 16 247.432 16 256C16 316.512 38.568 371.637 75.521 413.852L233.373 256L164.344 186.97ZM370.266 347.637L436.479 413.852C461.465 385.307 479.713 350.844 488.963 312.778C482.977 312.094 477.125 310.955 470.961 310.955C432.613 310.955 397.852 325.067 370.266 347.637ZM436.479 98.148L278.627 256L347.656 325.028C381.115 296.709 423.797 278.959 470.961 278.959C479.066 278.959 486.791 280.373 494.637 281.352C495.512 273.016 496 264.568 496 256C496 195.488 473.432 140.363 436.479 98.148ZM325.029 347.657L256 278.627L98.148 436.479C140.363 473.433 195.488 496.001 256 495.999C264.568 495.999 273.016 495.513 281.352 494.636C280.371 486.79 278.959 479.067 278.959 470.962C278.959 423.798 296.709 381.116 325.029 347.657ZM310.955 470.962C310.955 477.126 312.094 482.976 312.775 488.962C350.846 479.71 385.309 461.466 413.852 436.479L347.639 370.266C325.066 397.852 310.955 432.614 310.955 470.962Z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Wo = o(
      "path",
      {
        d: "M494.992 281.332C493.824 292.053 491.855 302.514 489.314 312.762C483.381 312.076 477.572 310.955 471.457 310.955C433.109 310.955 398.348 325.067 370.762 347.637L436.736 413.614C429.699 421.657 422.152 429.204 414.109 436.241L348.135 370.266C325.562 397.852 311.451 432.614 311.451 470.962C311.451 477.077 312.574 482.878 313.258 488.817C303.01 491.356 292.549 493.329 281.83 494.497C280.852 486.702 279.455 479.02 279.455 470.962C279.455 423.798 297.205 381.116 325.525 347.657L256.496 278.627L99.139 435.985C91.086 428.94 83.557 421.411 76.512 413.358L233.869 256L164.84 186.97C131.381 215.289 88.699 233.041 41.535 233.041C33.479 233.041 25.801 231.644 18 230.666C19.168 219.947 21.141 209.486 23.68 199.238C29.617 199.922 35.42 201.045 41.535 201.045C79.883 201.045 114.645 186.931 142.23 164.361L76.129 98.259C83.158 90.222 90.602 82.56 98.645 75.519L164.857 141.734C187.43 114.146 201.541 79.386 201.541 41.038C201.541 34.923 200.418 29.114 199.734 23.183C209.982 20.644 220.443 18.671 231.164 17.503C232.141 25.302 233.537 32.98 233.537 41.038C233.537 88.202 215.787 130.884 187.467 164.343L256.496 233.373L414.348 75.519C422.393 82.562 429.754 90.298 436.779 98.343L279.123 256L348.152 325.028C381.611 296.709 424.293 278.959 471.457 278.959C479.514 278.959 487.193 280.356 494.992 281.332Z",
      },
      null,
      -1
    ),
    Fo = [No, Wo];
  function Uo(e, t) {
    return h(), p("svg", qo, Fo);
  }
  const Go = E(Ro, [["render", Uo]]),
    Ko = {},
    Jo = {
      "data-v-91d30144": "",
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      lined: "false",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    Xo = o(
      "path",
      {
        d: "M240.17 246.422C240.086 228.824 237.367 185.535 215.258 135.27C180.836 148.16 72.197 199.859 33.633 346.066C47.418 380.059 68.816 410.043 95.639 434.199C130.367 318.742 212.752 262.348 240.17 246.422ZM200.609 106.652C188.039 84.801 171.389 62.48 149.695 41.066C70.549 80.297 16 161.676 16 256C16 267.496 17.086 278.719 18.648 289.785C67.943 169.801 162.389 121.672 200.609 106.652ZM380.932 281.113C386.98 244.91 396.535 125.09 289.393 18.59C278.451 17.062 267.363 16 256 16C230.049 16 205.117 20.238 181.709 27.859C264.502 115.723 272.119 215.402 272.221 247.105C287.5 255.848 326.342 275.137 380.932 281.113ZM154.383 378.602C141.721 400.441 130.957 426.34 123.252 455.887C161.279 481.191 206.896 496 256 496C311.938 496 363.275 476.699 404.084 444.617C387.816 446.809 372.055 448.035 357.094 448.035C253.158 448.035 182.176 400.836 154.383 378.602ZM345.246 33.332C424.699 136.121 419.15 242.102 413.051 282.73C438.236 282.762 465.857 279.496 495.221 271.43C495.547 266.301 496 261.207 496 256C496 155.02 433.559 68.766 345.246 33.332ZM255.691 274.465C240.545 283.301 204.348 307.301 171.812 351.66C200.193 375.02 299.279 443.137 444.959 403.629C467.055 375.387 483.068 342.184 490.748 305.832C463.404 312.301 437.51 315.004 413.594 315.004C333.971 315.004 276.334 286.391 255.691 274.465Z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Yo = o(
      "path",
      {
        d: "M172.164 351.66C200.545 375.02 299.631 443.137 445.311 403.629C433.371 418.887 419.666 432.645 404.436 444.617C388.168 446.809 372.406 448.035 357.445 448.035C253.51 448.035 182.527 400.836 154.734 378.602C142.072 400.441 131.309 426.34 123.604 455.887C113.822 449.379 104.689 442.031 95.99 434.199C130.719 318.742 213.104 262.348 240.521 246.422C240.437 228.824 237.719 185.535 215.609 135.27C181.187 148.16 72.549 199.859 33.984 346.066C26.771 328.277 21.771 309.402 19 289.785C68.295 169.801 162.74 121.672 200.961 106.652C188.391 84.801 171.74 62.48 150.047 41.066C160.348 35.965 170.988 31.465 182.061 27.859C264.854 115.723 272.471 215.402 272.572 247.105C287.852 255.848 326.693 275.137 381.283 281.113C387.332 244.91 396.887 125.09 289.744 18.59C309.203 21.309 327.926 26.238 345.598 33.332C425.051 136.121 419.502 242.102 413.402 282.73C438.588 282.762 466.209 279.496 495.572 271.43C494.826 283.129 493.463 294.652 491.1 305.832C463.756 312.301 437.861 315.004 413.945 315.004C334.322 315.004 276.686 286.391 256.043 274.465C240.896 283.301 204.699 307.301 172.164 351.66Z",
      },
      null,
      -1
    ),
    Qo = [Xo, Yo];
  function ta(e, t) {
    return h(), p("svg", Jo, Qo);
  }
  const ea = E(Ko, [["render", ta]]),
    ia = {},
    sa = {
      "data-v-91d30144": "",
      height: "21",
      viewBox: "0 0 640 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    oa = o(
      "path",
      {
        d: "M247.1 200l-31.96-.011L215.1 168c0-13.2-10.78-24-23.98-24C178.8 144 167.1 154.8 167.1 168l.0367 31.99L135.1 200c-13.2 0-23.98 10.8-23.98 24c0 13.2 10.77 24 23.98 24l32.04-.0098L167.1 280c0 13.2 10.82 24 24.02 24c13.2 0 23.98-10.8 23.98-24l.0368-32.01L247.1 248c13.2 0 24.02-10.8 24.02-24C271.1 210.8 261.2 200 247.1 200z",
      },
      null,
      -1
    ),
    aa = o(
      "path",
      {
        d: "M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    na = [oa, aa];
  function ra(e, t) {
    return h(), p("svg", sa, na);
  }
  const la = E(ia, [["render", ra]]),
    ca = {},
    da = {
      height: "21",
      viewBox: "0 0 448 448.5",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    ha = Bt(
      '<path d="M209,.5c49.67-3.92,87.5,15.08,113.5,57,16.47,33.39,17.8,67.39,4,102-24.64,47.41-63.81,68.91-117.5,64.5-54.17-10.17-86.33-42.33-96.5-96.5-4.41-49.68,14.42-87.51,56.5-113.5,12.72-6.67,26.06-11.17,40-13.5ZM223,40.5c3.06.3,5.56,1.63,7.5,4,1.11,3.59,1.61,7.25,1.5,11,18.12,5.29,25.96,17.29,23.5,36-3.19,3.5-6.69,3.84-10.5,1-2.17-5.61-4.33-11.27-6.5-17-9.67-9.33-19.33-9.33-29,0-6.61,12.48-3.78,21.98,8.5,28.5,18.14-.2,30.64,7.97,37.5,24.5,3.59,14.9-.58,27.07-12.5,36.5-3.23,2.57-6.89,4.07-11,4.5.32,4.25-.51,8.25-2.5,12-3.67,2.67-7.33,2.67-11,0-1.99-3.75-2.82-7.75-2.5-12-18.12-5.29-25.96-17.29-23.5-36,3.19-3.51,6.69-3.84,10.5-1,2.17,5.6,4.34,11.27,6.5,17,8.15,8.16,16.99,9,26.5,2.5,8-9.33,8-18.67,0-28-6.26-3.16-12.92-4.82-20-5-18.1-6.03-26.26-18.53-24.5-37.5,2.57-14.07,10.74-22.73,24.5-26-.11-3.75.39-7.41,1.5-11,1.5-1.97,3.33-3.3,5.5-4Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.98;stroke-width:0px;"></path><path d="M246,239.5c2.43.02,4.76.52,7,1.5l26.5,26.5c.67,3,.67,6,0,9-9.53,9.86-19.36,19.36-29.5,28.5-9.91.37-13.07-4.13-9.5-13.5l10.5-10.5c-26.33-.33-52.67-.67-79-1-1.83-.5-3-1.67-3.5-3.5-.67-2.67-.67-5.33,0-8,.5-1.83,1.67-3,3.5-3.5,26.67-.33,53.33-.67,80-1l-11.5-11.5c-1.9-6.16-.07-10.49,5.5-13Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.96;stroke-width:0px;"></path><path d="M198,303.5c9.36.52,12.53,5.19,9.5,14l-10.5,10.5c26.33.33,52.67.67,79,1,1.83.5,3,1.67,3.5,3.5.67,2.67.67,5.33,0,8-.5,1.83-1.67,3-3.5,3.5-26.67.33-53.33.67-80,1,3.83,3.83,7.67,7.67,11.5,11.5,1.81,10.53-2.36,14.36-12.5,11.5-8.83-8.83-17.67-17.67-26.5-26.5-.67-3-.67-6,0-9,9.73-9.9,19.56-19.56,29.5-29Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.96;stroke-width:0px;"></path><path d="M73,208.5c34.54-2.91,56.71,12.09,66.5,45,3.4,34.57-11.43,56.73-44.5,66.5-34.59,3.37-56.76-11.47-66.5-44.5-3.19-34.59,11.64-56.92,44.5-67Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.98;stroke-width:0px;"></path><path d="M45,336.5c26-.17,52,0,78,.5,24.14,5.47,38.97,20.31,44.5,44.5.67,14.33.67,28.67,0,43-3.17,12.5-11,20.33-23.5,23.5-40,.67-80,.67-120,0-12.5-3.17-20.33-11-23.5-23.5-.67-14.33-.67-28.67,0-43,5.68-24.18,20.51-39.18,44.5-45Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.99;stroke-width:0px;"></path><path d="M353,208.5c34.54-2.91,56.71,12.09,66.5,45,3.4,34.57-11.43,56.73-44.5,66.5-34.59,3.37-56.76-11.47-66.5-44.5-3.19-34.59,11.64-56.92,44.5-67Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.98;stroke-width:0px;"></path><path d="M325,336.5c26-.17,52,0,78,.5,24.14,5.47,38.97,20.31,44.5,44.5.67,14.33.67,28.67,0,43-3.17,12.5-11,20.33-23.5,23.5-40,.67-80,.67-120,0-12.5-3.17-20.33-11-23.5-23.5-.67-14.33-.67-28.67,0-43,5.68-24.18,20.51-39.18,44.5-45Z" style="fill-rule:evenodd;isolation:isolate;opacity:0.99;stroke-width:0px;"></path>',
      7
    ),
    ua = [ha];
  function pa(e, t) {
    return h(), p("svg", da, ua);
  }
  const fa = E(ca, [["render", pa]]),
    va = {},
    ga = {
      height: "21",
      viewBox: "0 0 640 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    ma = o(
      "path",
      {
        d: "M640 191.1v191.1c0 35.25-28.75 63.1-64 63.1h-32v54.24c0 7.998-9.125 12.62-15.5 7.873l-82.75-62.12L319.1 447.1C284.7 447.1 256 419.2 256 383.1v-31.98l96-.002c52.88 0 96-43.12 96-95.99V128h128C611.3 128 640 156.7 640 191.1z",
      },
      null,
      -1
    ),
    _a = o(
      "path",
      {
        d: "M352 0H64C28.75 0 0 28.75 0 63.1V256C0 291.2 28.75 320 64 320l32 .0098v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9c35.25 .125 64-28.68 64-63.92V63.1C416 28.75 387.3 0 352 0z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    wa = [ma, _a];
  function Ca(e, t) {
    return h(), p("svg", ga, wa);
  }
  const ba = E(va, [["render", Ca]]),
    ya = {},
    xa = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    La = o(
      "path",
      {
        d: "M342.5 214.7C342.6 214.6 342.4 214.8 342.5 214.7l128.1-128.1c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L297.3 169.5c-.0742 .0742 .0742-.0762 0 0C317.1 178.1 333 194.9 342.5 214.7zM169.5 297.3C169.4 297.4 169.6 297.2 169.5 297.3l-128.1 128.1c-12.5 12.5-12.5 32.75 0 45.25C47.63 476.9 55.81 480 64 480s16.38-3.125 22.62-9.375l128.1-128.1c.0742-.0742-.0742 .0762 0 0C194.9 333 178.1 317.1 169.5 297.3zM342.5 297.3C342.4 297.2 342.6 297.4 342.5 297.3c-9.463 19.78-25.43 35.74-45.21 45.21c.0742 .0762-.0742-.0742 0 0l128.1 128.1C431.6 476.9 439.8 480 448 480s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L342.5 297.3zM86.63 41.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.5 214.7c.0742 .0742-.0762-.0742 0 0c9.463-19.78 25.43-35.74 45.21-45.21c-.0742-.0762 .0742 .0742 0 0L86.63 41.38z",
      },
      null,
      -1
    ),
    ka = o(
      "path",
      {
        d: "M214.7 169.5C227.2 163.5 241.2 160 256 160s28.76 3.51 41.29 9.502c.0742-.0762-.0742 .0742 0 0l115.5-115.6C369.5 20.26 315.2 0 256 0S142.5 20.26 99.2 53.95L214.7 169.5C214.8 169.6 214.6 169.4 214.7 169.5zM169.5 297.3C163.5 284.8 160 270.8 160 256s3.51-28.76 9.502-41.29c-.0762-.0742 .0742 .0742 0 0L53.95 99.2C20.26 142.5 0 196.8 0 256s20.26 113.5 53.95 156.8L169.5 297.3C169.6 297.2 169.4 297.4 169.5 297.3zM458.1 99.2l-115.6 115.5c-.0742 .0742 .0762-.0742 0 0C348.5 227.2 352 241.2 352 256s-3.51 28.76-9.502 41.29c.0762 .0742-.0742-.0742 0 0l115.6 115.5C491.7 369.5 512 315.2 512 256S491.7 142.5 458.1 99.2zM297.3 342.5C284.8 348.5 270.8 352 256 352s-28.76-3.51-41.29-9.502c-.0742 .0762 .0742-.0742 0 0l-115.5 115.6C142.5 491.7 196.8 512 256 512s113.5-20.26 156.8-53.95L297.3 342.5C297.2 342.4 297.4 342.6 297.3 342.5z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Ea = [La, ka];
  function Ma(e, t) {
    return h(), p("svg", xa, Ea);
  }
  const Sa = E(ya, [["render", Ma]]),
    Aa = {},
    Ha = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    za = o(
      "path",
      {
        d: "M320 96C328.8 96 336 103.2 336 112C336 120.8 328.8 128 320 128H192C183.2 128 176 120.8 176 112C176 103.2 183.2 96 192 96H320zM276.1 230.3C282.7 231.5 292.7 233.5 297.1 234.7C307.8 237.5 314.2 248.5 311.3 259.1C308.5 269.8 297.5 276.2 286.9 273.3C283 272.3 269.5 269.7 265.1 268.1C252.9 267.1 242.1 268.7 236.5 271.6C230.2 274.4 228.7 277.7 228.3 279.7C227.7 283.1 228.3 284.3 228.5 284.7C228.7 285.2 229.5 286.4 232.1 288.2C238.2 292.4 247.8 295.4 261.1 299.7L262.8 299.9C274.9 303.6 291.1 308.4 303.2 317.3C309.9 322.1 316.2 328.7 320.1 337.7C324.1 346.8 324.9 356.8 323.1 367.2C319.8 386.2 307.2 399.2 291.4 405.9C286.6 407.1 281.4 409.5 276.1 410.5V416C276.1 427.1 267.1 436.1 255.1 436.1C244.9 436.1 235.9 427.1 235.9 416V409.6C226.4 407.4 213.1 403.2 206.1 400.5C204.4 399.9 202.9 399.4 201.7 398.1C191.2 395.5 185.5 384.2 189 373.7C192.5 363.2 203.8 357.5 214.3 361C216.3 361.7 218.5 362.4 220.7 363.2C230.2 366.4 240.9 370 246.9 371C259.7 373 269.6 371.7 275.7 369.1C281.2 366.8 283.1 363.8 283.7 360.3C284.4 356.3 283.8 354.5 283.4 353.7C283.1 352.8 282.2 351.4 279.7 349.6C273.8 345.3 264.4 342.2 250.4 337.9L248.2 337.3C236.5 333.8 221.2 329.2 209.6 321.3C203 316.8 196.5 310.6 192.3 301.8C188.1 292.9 187.1 283 188.9 272.8C192.1 254.5 205.1 241.9 220 235.1C224.1 232.9 230.3 231.2 235.9 230V223.1C235.9 212.9 244.9 203.9 256 203.9C267.1 203.9 276.1 212.9 276.1 223.1L276.1 230.3z",
      },
      null,
      -1
    ),
    Ia = o(
      "path",
      {
        d: "M144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96H192L144.6 24.88zM332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128H320C323.8 130.5 328.1 133.3 332.1 136.4V136.4zM235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3V224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224L235.9 224z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Ta = [za, Ia];
  function Va(e, t) {
    return h(), p("svg", Ha, Ta);
  }
  const $a = E(Aa, [["render", Va]]),
    Oa = {},
    ja = {
      height: "21",
      viewBox: "0 0 512 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    Ba = o(
      "path",
      {
        d: "M105.4 246.6c-12.49-12.5-12.49-32.75 0-45.25c12.5-12.5 32.76-12.5 45.25 0L224 274.8V32c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32v242.8l73.38-73.38c12.49-12.5 32.75-12.5 45.25 0c12.49 12.5 12.49 32.75 0 45.25l-128 128C272.4 380.9 264.2 384 256 384s-16.38-3.125-22.62-9.375L105.4 246.6z",
      },
      null,
      -1
    ),
    Pa = o(
      "path",
      {
        d: "M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Da = [Ba, Pa];
  function Za(e, t) {
    return h(), p("svg", ja, Da);
  }
  const Ra = E(Oa, [["render", Za]]),
    qa = {},
    Na = {
      "data-v-91d30144": "",
      height: "21",
      viewBox: "0 0 448 512",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg",
      class: "fill-[#5e6263] dark:fill-[#fdffffb3]",
    },
    Wa = o(
      "path",
      {
        d: "M63.1 351.9C28.63 351.9 0 380.6 0 416s28.63 64 63.1 64s64.08-28.62 64.08-64S99.37 351.9 63.1 351.9z",
      },
      null,
      -1
    ),
    Fa = o(
      "path",
      {
        d: "M32 32C14.33 32 0 46.31 0 64s14.33 32 32 32c194.1 0 352 157.9 352 352c0 17.69 14.33 32 32 32s32-14.31 32-32C448 218.6 261.4 32 32 32zM25.57 176.1c-13.16-.7187-24.66 9.156-25.51 22.37C-.8071 211.7 9.223 223.1 22.44 223.9c120.1 7.875 225.7 112.7 233.6 233.6C256.9 470.3 267.4 480 279.1 480c.5313 0 1.062-.0313 1.594-.0625c13.22-.8437 23.25-12.28 22.39-25.5C294.6 310.3 169.7 185.4 25.57 176.1z",
        opacity: "0.4",
      },
      null,
      -1
    ),
    Ua = [Wa, Fa];
  function Ga(e, t) {
    return h(), p("svg", Na, Ua);
  }
  const Ka = E(qa, [["render", Ga]]);
  const Ja = {
      props: [],
      components: {
        RouterLink: Ee,
        MyBets: ao,
        LiveGames: po,
        StartsSoon: Co,
        ESports: Mo,
        Football: Vo,
        Tennis: Zo,
        Basketball: Go,
        Volleyball: ea,
        VirtualSports: la,
        BecomeAnAffiliate: fa,
        LiveSupport: ba,
        HelpCenter: Sa,
        ReferAFriend: $a,
        AppDownload: Ra,
        Blog: Ka,
      },
      data() {
        return {
          sidebarCasinoStatus: !0,
          sidebarSportsStatus: !0,
          onMobile: window.innerWidth < 1024,
          mobileSize: 1024,
          custom: null,
          isLoading: !0,
          categories: [],
          othersCategories: [
            {
              name: "Torne-se um afiliado",
              description: "Torne-se um afiliado",
              slug: "partners",
              icon: "BecomeAnAffiliate",
            },
            {
              name: "Suporte ao vivo",
              description: "Suporte ao vivo",
              slug: "support",
              icon: "LiveSupport",
            },
            {
              name: "Indique um amigo",
              description: "Indique um amigo",
              slug: "refers",
              icon: "ReferAFriend",
            },
          ],
          modalMission: null,
          setting: null,
        };
      },
      setup(e) {
        return fe(() => {}), {};
      },
      computed: {
        sidebarMenuStore() {
          return Me();
        },
        sidebarMenu() {
          return this.sidebarMenuStore.getSidebarStatus;
        },
        topNav() {
          return P1().getTopNavStatus;
        },
        sidebarCasinoClass() {
          return {
            "h-full pt-3": this.sidebarCasinoStatus,
            "pt-0 h-0": !this.sidebarCasinoStatus,
          };
        },
        sidebarSportsClass() {
          return {
            "h-full pt-3": this.sidebarSportsStatus,
            "pt-0 h-0": !this.sidebarSportsStatus,
          };
        },
        onMobileClass() {
          return {
            "w-full hidden": this.onMobile && !this.sidebarMenu,
            "w-full block": this.onMobile && this.sidebarMenu,
            "w-[70px] block": !this.onMobile && this.sidebarCollapseStatus,
            "w-[290px] block": !this.onMobile && !this.sidebarCollapseStatus,
          };
        },
        handleSidebarScrollClass() {
          return {
            "sidebar-scroll":
              this.sidebarCasinoStatus || this.sidebarSportsStatus,
          };
        },
        sidebarCollapseStatus() {
          return this.sidebarMenuStore.getSidebarColappseStatus;
        },
      },
      methods: {
        toggleMenu() {
          this.sidebarMenuStore.setSidebarToogle();
        },
        closeMenu() {
          this.sidebarMenuStore.setSidebarStatus(!1);
        },
        toggleCasinoSidebar() {
          this.sidebarCasinoStatus = !this.sidebarCasinoStatus;
        },
        toggleSportsSidebar() {
          this.sidebarSportsStatus = !this.sidebarSportsStatus;
        },
        getIcon(e) {
          return e
            .replaceAll(" ", "")
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll("ã", "a");
        },
        async handleResize() {
          (this.onMobile = window.innerWidth < this.mobileSize),
            this.sidebarMenuStore.setSidebarCollapseStatus(!1),
            this.onMobile
              ? this.sidebarMenuStore.setSidebarStatus(!1)
              : (await new Promise((e, t) => {
                  this.sidebarMenuStore.setSidebarStatus(!0), e();
                }),
                this.sidebarMenuStore.setSidebarWidth(
                  this.$refs.sidebar.clientWidth
                ));
        },
        getCasinoCategories: function () {
          const e = this,
            t = be();
          (e.isLoading = !0),
            et
              .get("categories")
              .then((i) => {
                (e.categories = i.data.categories), (e.isLoading = !1);
              })
              .catch((i) => {
                Object.entries(JSON.parse(i.request.responseText)).forEach(
                  ([s, a]) => {
                    t.error(`${a}`);
                  }
                ),
                  (e.isLoading = !1);
              });
        },
        getSetting: function () {
          const e = this,
            i = Se().setting;
          i && (e.setting = i);
        },
      },
      created() {
        this.getCasinoCategories(), this.getSetting(), (this.custom = custom);
      },
      mounted() {
        (this.onMobile = window.innerWidth < this.mobileSize),
          this.sidebarMenuStore.setSidebarWidth(this.$refs.sidebar.clientWidth),
          window.addEventListener("resize", this.handleResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.handleResize);
      },
      watch: {
        sidebarMenu(e, t) {
          this.sidebar = e;
        },
      },
    },
    st = (e) => (Pt("data-v-a3f0e017"), (e = e()), Dt(), e),
    Xa = { class: "sidebar-color h-full overflow-y-auto pb-16 lg:pb-0" },
    Ya = {
      class: "sidebar-section flex items-center justify-between p-5 lg:hidden",
    },
    Qa = ["src"],
    tn = st(() =>
      o(
        "svg",
        {
          height: "19",
          viewBox: "0 0 320 512",
          width: "19",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
            fill: "#fff",
          }),
        ],
        -1
      )
    ),
    en = [tn],
    sn = {
      class:
        "sidebar-section border-b-[1px] border-b-slate-50 border-opacity-10 p-5",
    },
    on = {
      key: 0,
      class:
        "flex w-full items-center justify-between gap-2 text-center font-bold lg:justify-center",
    },
    an = { class: "text-sm text-black" },
    nn = st(() => o("span", { class: "collapse-visible text-xl" }, "💥", -1)),
    rn = {
      class:
        "sidebar-section border-b-[1px] border-b-slate-50 border-opacity-10 px-7 py-6",
    },
    ln = { key: 0, class: "mb-4 grid grid-cols-1 gap-4" },
    cn = {
      class:
        "flex h-9 w-full max-w-sm animate-pulse items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700",
    },
    dn = { key: 1 },
    hn = st(() =>
      o(
        "span",
        { class: "collapsed text-sm font-bold uppercase text-white" },
        " Cassino ",
        -1
      )
    ),
    un = { key: 0, class: "collapsed" },
    pn = st(() =>
      o(
        "svg",
        {
          class: "h-[16px] w-[16px] text-gray-800 dark:text-white",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
        },
        [
          o("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "3",
            d: "m5 15 7-7 7 7",
          }),
        ],
        -1
      )
    ),
    fn = [pn],
    vn = { key: 1, class: "collapsed" },
    gn = st(() =>
      o(
        "svg",
        {
          class: "h-[16px] w-[16px] text-gray-800 dark:text-white",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
        },
        [
          o("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "3",
            d: "m19 9-7 7-7-7",
          }),
        ],
        -1
      )
    ),
    mn = [gn],
    _n = ["src"],
    wn = { class: "text-sm font-semibold" },
    Cn = { key: 0, class: "mb-4 grid grid-cols-1 gap-4" },
    bn = {
      class:
        "flex h-9 w-full max-w-sm animate-pulse items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700",
    },
    yn = { key: 1 },
    xn = st(() =>
      o("span", { class: "text-sm font-semibold" }, "Torne-se um afiliado", -1)
    ),
    Ln = ["href"],
    kn = st(() =>
      o("span", { class: "text-sm font-semibold" }, "Suporte ao Vivo", -1)
    ),
    En = st(() =>
      o("span", { class: "text-sm font-semibold" }, "Indique um amigo", -1)
    ),
    Mn = { class: "sidebar-color h-full overflow-y-auto" },
    Sn = { class: "border-b-[1px] border-b-slate-50 border-opacity-10 p-[10px]" },
    An = st(() =>
      o(
        "span",
        {
          class:
            "flex min-h-[50px] min-w-[50px] items-center justify-center rounded-[4px] bg-[#111212]",
        },
        [o("span", { class: "text-2xl" }, "💥")],
        -1
      )
    ),
    Hn = { class: "border-b-[1px] border-b-slate-50 border-opacity-10 p-[10px]" },
    zn = { class: "grid grid-cols-1 gap-[6px]" },
    In = ["src"],
    Tn = { class: "border-b-[1px] border-b-slate-50 border-opacity-10 p-[10px]" },
    Vn = { class: "grid grid-cols-1 gap-[6px]" };
  function $n(e, t, i, s, a, n) {
    const r = ct("RouterLink");
    return (
      h(),
      p(
        "aside",
        {
          ref: "sidebar",
          class: F([
            [
              n.handleSidebarScrollClass,
              n.topNav === !0 ? "lg:pt-[116px]" : "lg:pt-[72px]",
              n.onMobileClass,
            ],
            "sidebar-scroll custom-side-shadow sidebar-color fixed left-0 top-0 z-[200] h-full border-r-[1px] border-r-slate-50 border-opacity-10",
          ]),
          "aria-label": "Sidebar",
          "data-js": "sidebar",
        },
        [
          Lt(
            o(
              "div",
              Xa,
              [
                o("div", Ya, [
                  o(
                    "img",
                    {
                      src: "/storage/" + a.setting.software_logo_white,
                      alt: "",
                      class: "mr-3 block h-8",
                    },
                    null,
                    8,
                    Qa
                  ),
                  o(
                    "button",
                    {
                      type: "button",
                      onClick:
                        t[0] ||
                        (t[0] = (...l) => n.closeMenu && n.closeMenu(...l)),
                      class: "rounded-full bg-[#3F4142] p-1",
                    },
                    en
                  ),
                ]),
                o("div", sn, [
                  C(
                    r,
                    {
                      to: { name: "profileAffiliate" },
                      "active-class": "category-active",
                      class:
                        "redeem-menu-item flex w-full rounded bg-[var(--ci-primary-color)] px-5 py-3 hover:opacity-[0.8] lg:block",
                    },
                    {
                      default: b(() => [
                        a.custom && a.custom.texto_buton_bonus
                          ? (h(),
                            p("span", on, [
                              o("span", an, O(a.custom.texto_buton_bonus), 1),
                              nn,
                            ]))
                          : $("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                o("div", rn, [
                  o("div", null, [
                    a.isLoading
                      ? (h(),
                        p("div", ln, [
                          (h(),
                          p(
                            It,
                            null,
                            Gt(10, (l) => o("div", cn)),
                            64
                          )),
                        ]))
                      : (h(),
                        p("div", dn, [
                          o(
                            "div",
                            {
                              class:
                                "flex cursor-pointer items-center justify-between",
                              onClick:
                                t[1] ||
                                (t[1] = (...l) =>
                                  n.toggleCasinoSidebar &&
                                  n.toggleCasinoSidebar(...l)),
                            },
                            [
                              hn,
                              a.sidebarCasinoStatus
                                ? (h(), p("span", un, fn))
                                : (h(), p("span", vn, mn)),
                            ]
                          ),
                          o(
                            "div",
                            {
                              class: F([
                                n.sidebarCasinoClass,
                                "custom-overflow-hidden grid grid-cols-1",
                              ]),
                            },
                            [
                              (h(!0),
                              p(
                                It,
                                null,
                                Gt(
                                  a.categories,
                                  (l, c) => (
                                    h(),
                                    tt(
                                      r,
                                      {
                                        key: c,
                                        to: {
                                          name: l.game_id
                                            ? "casinoPlayPage"
                                            : "casinosAll",
                                          params: {
                                            [l.game_id ? "id" : "provider"]:
                                              l.game_id ? l.game_id : "all",
                                            [l.game_id ? "slug" : "category"]:
                                              l.slug,
                                          },
                                        },
                                        "active-class": "category-active",
                                        class:
                                          "site-menu-item flex items-center gap-3 rounded-xl py-3",
                                      },
                                      {
                                        default: b(() => [
                                          o(
                                            "img",
                                            {
                                              src: "/storage/" + l.image,
                                              width: "21",
                                            },
                                            null,
                                            8,
                                            _n
                                          ),
                                          o("span", wn, O(l.name), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            2
                          ),
                        ])),
                  ]),
                ]),
                o(
                  "div",
                  {
                    class: F([
                      [{ "flex  flex-col gap-[6px]": this.sidebarCasinoStatus }],
                      "sidebar-section border-opacity-10 px-7 py-6",
                    ]),
                  },
                  [
                    a.isLoading
                      ? (h(),
                        p("div", Cn, [
                          (h(),
                          p(
                            It,
                            null,
                            Gt(5, (l) => o("div", bn)),
                            64
                          )),
                        ]))
                      : (h(),
                        p("div", yn, [
                          C(
                            r,
                            {
                              to: { name: "profileAffiliate" },
                              "active-class": "category-active",
                              class:
                                "site-menu-item flex items-center gap-3 rounded-xl py-3 hover:text-white",
                            },
                            {
                              default: b(() => [
                                (h(), tt(yt(n.getIcon("BecomeAnAffiliate")))),
                                xn,
                              ]),
                              _: 1,
                            }
                          ),
                          a.custom && a.custom.whastapp
                            ? (h(),
                              p(
                                "a",
                                {
                                  key: 0,
                                  href: a.custom.whastapp,
                                  class:
                                    "site-menu-item flex items-center gap-3 rounded-xl py-3 hover:text-white",
                                },
                                [(h(), tt(yt(n.getIcon("LiveSupport")))), kn],
                                8,
                                Ln
                              ))
                            : $("", !0),
                          C(
                            r,
                            {
                              to: { name: "profileAffiliate" },
                              "active-class": "category-active",
                              class:
                                "site-menu-item flex items-center gap-3 rounded-xl py-3 hover:text-white",
                            },
                            {
                              default: b(() => [
                                (h(), tt(yt(n.getIcon("ReferAFriend")))),
                                En,
                              ]),
                              _: 1,
                            }
                          ),
                        ])),
                  ],
                  2
                ),
              ],
              512
            ),
            [[ie, !n.sidebarCollapseStatus]]
          ),
          Lt(
            o(
              "div",
              Mn,
              [
                o("div", Sn, [
                  C(
                    r,
                    {
                      to: { name: "home" },
                      "active-class": "invite-friend-active",
                      class:
                        "flex w-full items-center justify-center rounded hover:opacity-[0.7]",
                    },
                    { default: b(() => [An]), _: 1 }
                  ),
                ]),
                o("div", Hn, [
                  o("div", zn, [
                    (h(!0),
                    p(
                      It,
                      null,
                      Gt(
                        a.categories,
                        (l, c) => (
                          h(),
                          tt(
                            r,
                            {
                              key: c,
                              to: {
                                name: "casinosAll",
                                params: { provider: "all", category: l.slug },
                              },
                              "active-class": "category-active",
                              class:
                                "site-menu-item group flex min-h-[50px] w-full min-w-[50px] items-center justify-center rounded-[4px] bg-[#111212]",
                            },
                            {
                              default: b(() => [
                                o(
                                  "img",
                                  {
                                    src: "/storage/" + l.image,
                                    alt: "",
                                    width: "21",
                                    height: "21",
                                    class: "category-icon",
                                  },
                                  null,
                                  8,
                                  In
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                o("div", Tn, [
                  o("div", Vn, [
                    C(
                      r,
                      {
                        to: { name: "profileAffiliate" },
                        "active-class": "category-active",
                        class:
                          "group flex min-h-[50px] w-full min-w-[50px] items-center justify-center rounded-[4px] bg-[#111212]",
                      },
                      {
                        default: b(() => [
                          (h(),
                          tt(yt(n.getIcon("BecomeAnAffiliate")), {
                            class: "group-hover:dark:fill-[#fff]",
                          })),
                        ]),
                        _: 1,
                      }
                    ),
                    C(
                      r,
                      {
                        to: { name: "home" },
                        "active-class": "category-active",
                        class:
                          "group flex min-h-[50px] w-full min-w-[50px] items-center justify-center rounded-[4px] bg-[#111212]",
                      },
                      {
                        default: b(() => [
                          (h(),
                          tt(yt(n.getIcon("LiveSupport")), {
                            class: "group-hover:dark:fill-[#fff]",
                          })),
                        ]),
                        _: 1,
                      }
                    ),
                    C(
                      r,
                      {
                        to: { name: "home" },
                        "active-class": "category-active",
                        class:
                          "group flex min-h-[50px] w-full min-w-[50px] items-center justify-center rounded-[4px] bg-[#111212]",
                      },
                      {
                        default: b(() => [
                          (h(),
                          tt(yt(n.getIcon("ReferAFriend")), {
                            class: "group-hover:dark:fill-[#fff]",
                          })),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ],
              512
            ),
            [[ie, n.sidebarCollapseStatus]]
          ),
        ],
        2
      )
    );
  }
  const E3 = E(Ja, [
      ["render", $n],
      ["__scopeId", "data-v-a3f0e017"],
    ]),
    On = "/build/assets/BeGambleAware-135cb433.svg",
    jn = "/build/assets/gt_logo-593e5646.png";
  const Bn = {
      props: [],
      components: {},
      data() {
        return {
          isLoading: !1,
          year: new Date().getFullYear(),
          setting: null,
          overflowStatus: !1,
          custom: null,
        };
      },
      setup(e) {
        return {};
      },
      computed: {
        handleHeightClass() {
          return {
            "max-h-full": this.overflowStatus,
            "max-h-16": !this.overflowStatus,
          };
        },
        handlePaddingClass() {
          return { "pt-8": !this.overflowStatus, "pt-0": this.overflowStatus };
        },
      },
      mounted() {},
      methods: {
        getSetting: function () {
          const e = this,
            i = Se().setting;
          i && (e.setting = i);
        },
        toggleMore: function () {
          this.overflowStatus = !this.overflowStatus;
        },
      },
      created() {
        this.getSetting(), (this.custom = custom);
      },
      watch: {},
    },
    S = (e) => (Pt("data-v-751e0a96"), (e = e()), Dt(), e),
    Pn = { class: "default relative z-10 border-t border-solid border-gray-400" },
    Dn = { class: "relative w-full px-4 pb-24 pt-4" },
    Zn = {
      class:
        "relative flex flex-wrap items-start justify-center gap-4 pb-6 pt-0 after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-white after:opacity-20 after:content-[''] md:items-center md:gap-5 lg:flex-nowrap lg:justify-between",
    },
    Rn = {
      href: "/",
      "aria-label": "Ir para a página inicial",
      class: "inline-flex h-8 items-center justify-center lg:justify-start",
    },
    qn = ["src", "alt"],
    Nn = {
      class:
        "min-w-full justify-center px-0 lg:min-w-[100px] lg:justify-start xl:px-4",
    },
    Wn = S(() =>
      o(
        "h5",
        {
          class:
            "mb-2 whitespace-nowrap text-center text-sm font-bold lg:text-left lg:text-base",
        },
        "Suporte",
        -1
      )
    ),
    Fn = {
      class:
        "default flex flex-wrap justify-center md:-mx-2 lg:flex-row lg:items-center lg:justify-start",
    },
    Un = { class: "footer-link" },
    Gn = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Kn = { class: "footer-link" },
    Jn = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Xn = { class: "footer-link" },
    Yn = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Qn = { class: "footer-link" },
    tr = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    er = { class: "footer-link" },
    ir = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    sr = { class: "footer-link" },
    or = S(() =>
      o(
        "svg",
        {
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    ar = Bt(
      '<div data-v-751e0a96><h5 class="mb-2 whitespace-nowrap text-center text-sm font-bold lg:text-left lg:text-base" data-v-751e0a96>Pagamento</h5><span class="h-6" data-v-751e0a96><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 952.77 338.7" data-v-751e0a96><path d="M393.22,316.26V122a64.71,64.71,0,0,1,64.71-64.71l57.35.08A64.62,64.62,0,0,1,579.77,122v41.34a64.72,64.72,0,0,1-64.71,64.72H434" fill="none" stroke="#eeeeee" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26" data-v-751e0a96></path><path d="M595.8,57.28h24.88a26.56,26.56,0,0,1,26.56,26.56v145.1" fill="none" stroke="#eeeeee" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26" data-v-751e0a96></path><path d="M641.9,34.8,630.62,23.51a7.16,7.16,0,0,1,0-10.13L641.9,2.1a7.18,7.18,0,0,1,10.15,0l11.27,11.28a7.16,7.16,0,0,1,0,10.13L652,34.8a7.17,7.17,0,0,1-10.14,0" fill="#32bcad" data-v-751e0a96></path><path d="M695,57.15h24.67a47.85,47.85,0,0,1,33.84,14l57.71,57.71a19.13,19.13,0,0,0,27.07,0l57.5-57.49a47.81,47.81,0,0,1,33.83-14h20.06" fill="none" stroke="#eeeeee" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26" data-v-751e0a96></path><path d="M695,227.67h24.67a47.86,47.86,0,0,0,33.84-14l57.71-57.71a19.15,19.15,0,0,1,27.07,0l57.5,57.5a47.84,47.84,0,0,0,33.83,14h20.06" fill="none" stroke="#eeeeee" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26" data-v-751e0a96></path><path d="M246.13,264.53A46.07,46.07,0,0,1,213.35,251L166,203.62a9,9,0,0,0-12.44,0l-47.51,47.51A46.09,46.09,0,0,1,73.27,264.7H64l60,60a48,48,0,0,0,67.81,0l60.12-60.13Z" fill="#32bcad" data-v-751e0a96></path><path d="M73.28,97.09a46.08,46.08,0,0,1,32.78,13.57l47.51,47.52a8.81,8.81,0,0,0,12.44,0l47.34-47.34a46,46,0,0,1,32.78-13.58h5.7L191.71,37.14a47.94,47.94,0,0,0-67.81,0L64,97.09Z" fill="#32bcad" data-v-751e0a96></path><path d="M301.56,147l-36.33-36.33a7,7,0,0,1-2.58.52H246.13a32.62,32.62,0,0,0-22.93,9.5L175.86,168a22.74,22.74,0,0,1-32.13,0L96.21,120.51A32.62,32.62,0,0,0,73.28,111H53a7.12,7.12,0,0,1-2.44-.49L14,147a48,48,0,0,0,0,67.81l36.48,36.48a6.85,6.85,0,0,1,2.44-.49H73.28a32.63,32.63,0,0,0,22.93-9.51l47.51-47.51c8.59-8.58,23.56-8.58,32.14,0l47.34,47.33a32.62,32.62,0,0,0,22.93,9.5h16.52a6.9,6.9,0,0,1,2.58.52l36.33-36.33a47.94,47.94,0,0,0,0-67.81" fill="#32bcad" data-v-751e0a96></path><path d="M442.54,299.75a42.13,42.13,0,0,0-8.89,1.35v11.84a20.6,20.6,0,0,0,6.92,1.16c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m-10.89,22V298.32h1.63l.17,1a46.87,46.87,0,0,1,9.26-1.49,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53a14.59,14.59,0,0,1-6.89,1.53,24.82,24.82,0,0,1-7.12-1.09v6.89Z" fill="#eeeeee" data-v-751e0a96></path><path d="M466.36,299.68c-5.93,0-8.58,1.86-8.58,7.09,0,5.05,2.61,7.33,8.58,7.33s8.55-1.84,8.55-7.06c0-5.05-2.61-7.36-8.55-7.36M474,314.1c-2,1.42-4.62,1.83-7.64,1.83s-5.73-.44-7.66-1.83c-2.17-1.53-3.06-4-3.06-7.19s.89-5.67,3.06-7.23c1.93-1.39,4.58-1.83,7.66-1.83s5.67.44,7.64,1.83c2.2,1.56,3.05,4.1,3.05,7.19s-.88,5.7-3.05,7.23" fill="#eeeeee" data-v-751e0a96></path><path d="M502.1,315.45l-6.62-14.21h-.13l-6.52,14.21H487L480,298.32h2.2l5.87,14.38h.14l6.38-14.38h1.83l6.54,14.38h.14l5.73-14.38H511l-7.06,17.13Z" fill="#eeeeee" data-v-751e0a96></path><path d="M523.75,299.64c-5.5,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.43-.48-7.13-1.9-2-1.73-2.67-4.24-2.67-7.12s.91-5.67,3.19-7.33a11.38,11.38,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.47,1.66,2.95,4.58,2.95,7.9H516c.07,3.53,1.22,6.65,7.87,6.65a51.75,51.75,0,0,0,8.85-1v1.8a52.33,52.33,0,0,1-9,1.05" fill="#eeeeee" data-v-751e0a96></path><path d="M539.3,315.45V298.32h1.62l.17,1c3.63-.92,5.33-1.49,8.52-1.49h.24v1.9h-.48c-2.68,0-4.31.37-8.07,1.35v14.35Z" fill="#eeeeee" data-v-751e0a96></path><path d="M561.47,299.64c-5.49,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.42-.48-7.12-1.9-2-1.73-2.68-4.24-2.68-7.12s.92-5.67,3.19-7.33a11.42,11.42,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.48,1.66,3,4.58,3,7.9H553.7c.07,3.53,1.22,6.65,7.87,6.65a51.76,51.76,0,0,0,8.86-1v1.8a52.44,52.44,0,0,1-9,1.05" fill="#eeeeee" data-v-751e0a96></path><path d="M593.2,300.83a20.6,20.6,0,0,0-6.92-1.15c-5.94,0-8.75,2-8.75,7.23,0,4.95,2.31,7.12,6.78,7.12a44.06,44.06,0,0,0,8.89-1.33Zm.38,14.62-.18-1a46.06,46.06,0,0,1-9.26,1.5,9,9,0,0,1-6.07-1.77c-2-1.66-2.68-4.34-2.68-7.25,0-3.06,1-5.94,3.8-7.5a14.35,14.35,0,0,1,6.92-1.56,26.18,26.18,0,0,1,7.09,1.08V291.1h2v24.35Z" fill="#eeeeee" data-v-751e0a96></path><path d="M624.55,299.75a42.13,42.13,0,0,0-8.89,1.35v11.81a20,20,0,0,0,6.92,1.19c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m5.12,14.65a14.57,14.57,0,0,1-6.88,1.53,24.35,24.35,0,0,1-7.67-1.29l-.1.81h-1.36V291.1h2v8.17a48.34,48.34,0,0,1,9.06-1.42,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53" fill="#eeeeee" data-v-751e0a96></path><path d="M636.13,322v-1.86c1,.1,1.9.17,2.54.17,2.48,0,4-.72,5.36-3.53l.65-1.36-9-17.13H638l7.67,14.79h.13l7.29-14.79h2.28l-9.64,19.24c-1.76,3.49-3.66,4.64-7.16,4.64a19.48,19.48,0,0,1-2.47-.17" fill="#eeeeee" data-v-751e0a96></path><path d="M683,305.68h-6.64v6H683c4.58,0,6.31-.51,6.31-3,0-2.68-2.38-3-6.35-3M681.76,296h-5.42v6.1h5.46c4.51,0,6.31-.54,6.31-3.08,0-2.72-2.28-3-6.35-3m10.32,17.88c-2.45,1.56-5.4,1.62-10.79,1.62H671.14V292.22h9.91c4.65,0,7.5.06,9.87,1.49a4.91,4.91,0,0,1,2.38,4.61c0,2.44-1,4.07-3.67,5.16v.13c3,.68,4.92,2.21,4.92,5.5a5,5,0,0,1-2.47,4.72" fill="#eeeeee" data-v-751e0a96></path><path d="M714.84,308.26c-2-.17-4-.27-6.17-.27-3.49,0-4.72.71-4.72,2.31s1,2.3,3.7,2.3a34.52,34.52,0,0,0,7.19-1Zm1,7.19-.13-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,5.3,5.3,0,0,1,1-8.78c1.8-.85,4.21-.92,6.42-.92,1.79,0,4.2.1,6.2.24v-.31c0-2.68-1.76-3.56-6.58-3.56-1.86,0-4.14.1-6.31.3v-3.46c2.41-.2,5.13-.33,7.37-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#eeeeee" data-v-751e0a96></path><path d="M742,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#eeeeee" data-v-751e0a96></path><path d="M760.26,315.93c-2.21,0-4.62-.31-6.38-1.8-2.1-1.7-2.71-4.37-2.71-7.26,0-2.71.88-5.67,3.49-7.33,2.14-1.39,4.78-1.69,7.53-1.69,2,0,3.9.13,6,.33v3.67c-1.73-.17-3.8-.3-5.46-.3-4.55,0-6.69,1.42-6.69,5.36,0,3.69,1.6,5.29,5.33,5.29a40.69,40.69,0,0,0,7.19-.88v3.52a42.64,42.64,0,0,1-8.34,1.09" fill="#eeeeee" data-v-751e0a96></path><path d="M782.73,301.44c-4.55,0-6.55,1.43-6.55,5.33s2,5.56,6.55,5.56,6.48-1.39,6.48-5.29-1.93-5.6-6.48-5.6m8.21,12.69c-2.1,1.42-4.85,1.8-8.21,1.8s-6.17-.41-8.24-1.8c-2.38-1.56-3.23-4.14-3.23-7.22s.85-5.71,3.23-7.27c2.07-1.39,4.81-1.79,8.24-1.79s6.11.4,8.21,1.79c2.37,1.56,3.19,4.18,3.19,7.23s-.85,5.7-3.19,7.26" fill="#eeeeee" data-v-751e0a96></path><path d="M821.74,315.93c-2.88,0-6-.48-8.34-2.41-2.78-2.31-3.63-5.87-3.63-9.7,0-3.43,1.09-7.5,4.71-9.87,2.82-1.83,6.31-2.21,9.84-2.21,2.58,0,5.23.17,8.11.41v4.17c-2.47-.2-5.53-.37-7.9-.37-6.62,0-9.43,2.51-9.43,7.87s2.61,7.9,7.49,7.9a52.84,52.84,0,0,0,10.35-1.39v4.14a58,58,0,0,1-11.2,1.46" fill="#eeeeee" data-v-751e0a96></path><path d="M847,300.9c-4,0-5.5,1.43-5.81,4h11.54c-.14-2.78-1.77-4-5.73-4m-.72,15c-2.81,0-5.36-.34-7.26-1.9s-2.75-4.24-2.75-7.16c0-2.61.85-5.53,3.23-7.23,2.1-1.49,4.78-1.79,7.5-1.79,2.44,0,5.32.27,7.42,1.73,2.75,1.93,3,4.92,3,8.44H841.16c.1,2.62,1.49,4.31,6.31,4.31a61.81,61.81,0,0,0,9.13-.88v3.36a65.31,65.31,0,0,1-10.32,1.12" fill="#eeeeee" data-v-751e0a96></path><path d="M878.72,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#eeeeee" data-v-751e0a96></path><path d="M897.09,315.93c-2.31,0-4.41-.65-5.56-2.45a8.85,8.85,0,0,1-1.26-5.18v-6.42h-3.46v-3.56h3.46l.51-5.19H895v5.19h6.75v3.56H895v5.5a8.26,8.26,0,0,0,.47,3.26c.51,1.15,1.63,1.59,3.13,1.59a21.3,21.3,0,0,0,3.42-.34v3.43a27.57,27.57,0,0,1-4.95.61" fill="#eeeeee" data-v-751e0a96></path><path d="M906.44,315.45V298.32h3.9l.17,1.09a29.76,29.76,0,0,1,8.48-1.56,5.23,5.23,0,0,1,.61,0V302c-.54,0-1.19,0-1.66,0a26.94,26.94,0,0,0-6.72.88v12.65Z" fill="#eeeeee" data-v-751e0a96></path><path d="M937,308.26c-2-.17-4-.27-6.18-.27-3.49,0-4.71.71-4.71,2.31s1,2.3,3.69,2.3a34.61,34.61,0,0,0,7.2-1Zm1,7.19-.14-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,4.87,4.87,0,0,1-1.9-4.14,4.81,4.81,0,0,1,2.89-4.64c1.8-.85,4.2-.92,6.41-.92,1.8,0,4.21.1,6.21.24v-.31c0-2.68-1.77-3.56-6.58-3.56-1.87,0-4.14.1-6.31.3v-3.46c2.41-.2,5.12-.33,7.36-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#eeeeee" data-v-751e0a96></path><path d="M947.92,291.1h4.79v24.35h-4.79Z" fill="#eeeeee" data-v-751e0a96></path></svg></span></div>',
      1
    ),
    nr = {
      class:
        "relative py-6 after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-white after:opacity-20 after:content-['']",
    },
    rr = { class: "text-center" },
    lr = S(() => o("p", null, null, -1)),
    cr = S(() => o("p", null, null, -1)),
    dr = S(() =>
      o(
        "p",
        null,
        " Com o objetivo de proporcionar a melhor experiência de apostas aos seus usuários, oferecemos uma ampla gama de recursos e ferramentas, incluindo estatísticas detalhadas dos jogos,histórico de resultados, análises de especialistas e muito mais. ",
        -1
      )
    ),
    hr = S(() => o("p", null, null, -1)),
    ur = S(() =>
      o(
        "p",
        null,
        " Além disso, o site oferece diversas promoções e bônus exclusivos para seus usuários, aumentando as chances de lucro e proporcionando uma experiência ainda mais emocionante. ",
        -1
      )
    ),
    pr = S(() => o("p", null, null, -1)),
    fr = S(() =>
      o(
        "p",
        null,
        ' "Somos uma plataforma segura e confiável, que oferece suporte ao cliente 24 horas por dia, sete dias por semana. Com uma equipe de especialistas em apostas esportivas e cassino online,Donald Bet está comprometida em garantir que seus usuários tenham uma experiência positiva e segura, e possam desfrutar de todas as emoções e oportunidades oferecidas pelas apostas esportivas de forma responsável e consciente. ',
        -1
      )
    ),
    vr = {
      class:
        "items- center relative flex flex-col items-center justify-center gap-6 py-6 after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-white after:opacity-20 after:content-[''] md:flex-row",
    },
    gr = S(() =>
      o("h5", { class: "mb-3 text-sm font-bold md:text-base" }, "", -1)
    ),
    mr = { "data-v-0a4b127c": "", class: "flex flex-col items-center" },
    _r = {
      key: 0,
      "data-v-0a4b127c": "",
      class:
        "flex w-full flex-nowrap items-stretch justify-start gap-1 md:justify-center md:gap-2",
    },
    wr = { key: 0 },
    Cr = ["href"],
    br = S(() =>
      o(
        "svg",
        {
          "data-v-0a4b127c": "",
          height: "1em",
          viewBox: "0 0 448 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    yr = [br],
    xr = { key: 1 },
    Lr = ["href"],
    kr = S(() =>
      o(
        "svg",
        {
          "data-v-0a4b127c": "",
          height: "1em",
          viewBox: "0 0 320 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Er = [kr],
    Mr = { key: 2 },
    Sr = ["href"],
    Ar = S(() =>
      o(
        "svg",
        {
          "data-v-0a4b127c": "",
          height: "1em",
          viewBox: "0 0 576 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Hr = [Ar],
    zr = { key: 3 },
    Ir = ["href"],
    Tr = S(() =>
      o(
        "svg",
        {
          "data-v-0a4b127c": "",
          height: "1em",
          viewBox: "0 0 496 512",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          o("path", {
            d: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    Vr = [Tr],
    $r = {
      class:
        "relative py-6 after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-white after:opacity-20 after:content-['']",
    },
    Or = { class: "text-[.7rem] text-white" },
    jr = S(() => o("strong", null, "This Eclipse Gaming", -1)),
    Br = S(() =>
      o(
        "div",
        { class: "flex w-full flex-wrap items-center justify-center gap-4 p-6" },
        [
          o(
            "a",
            {
              href: "https://www.begambleaware.org/",
              "aria-label": "Acessar página da BeGambleAware",
              class: "cursor-pointer",
              target: "_blank",
            },
            [
              o("img", {
                class: "h-8",
                src: On,
                width: "175",
                height: "32",
                alt: "BeGambleAware logo",
              }),
            ]
          ),
          o(
            "a",
            {
              href: "https://www.gamblingtherapy.org/pt-br/",
              "aria-label": "Acessar página da GT",
              class: "cursor-pointer",
              target: "_blank",
            },
            [
              o("img", {
                class: "h-12",
                src: jn,
                width: "56",
                height: "48",
                alt: "GT logo",
              }),
            ]
          ),
          o("a", { href: "#", "aria-label": "Certificação SSL" }, [
            o(
              "svg",
              {
                fill: "none",
                height: "98",
                viewBox: "0 0 280 98",
                width: "280",
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-12 max-w-max",
                title: "Site seguro",
              },
              [
                o("path", {
                  "clip-rule": "evenodd",
                  d: "M35.5 0C19.208 0 6 13.2076 6 29.5V64H65V29.5C65 13.2076 51.792 0 35.5 0ZM35.5 9C24.7305 9 16 17.7305 16 28.5V52H55V28.5C55 17.7305 46.2695 9 35.5 9Z",
                  fill: "#D9D9D9",
                  "fill-rule": "evenodd",
                }),
                o("path", {
                  d: "M0 42C0 40.3431 1.34315 39 3 39H67C68.6569 39 70 40.3431 70 42V63C70 82.33 54.33 98 35 98V98C15.67 98 0 82.33 0 63V42Z",
                  fill: "url(#paint0_linear_336_31)",
                }),
                o("path", {
                  d: "M29.4956 76.8457L17.5388 64.9113C16.8204 64.1943 16.8204 63.0318 17.5388 62.3147L20.1402 59.7181C20.8585 59.001 22.0233 59.001 22.7416 59.7181L30.7963 67.7576L48.0485 50.5377C48.7668 49.8208 49.9316 49.8208 50.65 50.5377L53.2514 53.1343C53.9697 53.8513 53.9697 55.0139 53.2514 55.731L32.097 76.8458C31.3786 77.5628 30.2139 77.5628 29.4956 76.8457Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M93.3617 53.8942C90.8343 53.8942 88.3829 53.5592 86.0077 52.8893C83.663 52.1889 81.775 51.2906 80.3438 50.1943L82.856 44.6217C84.2263 45.6266 85.8555 46.4336 87.7434 47.0426C89.6314 47.6517 91.5194 47.9562 93.4074 47.9562C95.5085 47.9562 97.0616 47.6517 98.0665 47.0426C99.0714 46.4031 99.5738 45.5657 99.5738 44.5304C99.5738 43.7691 99.2693 43.1448 98.6603 42.6576C98.0817 42.1399 97.3204 41.7289 96.3764 41.4243C95.4629 41.1198 94.2144 40.7849 92.6309 40.4194C90.1948 39.8409 88.2002 39.2623 86.6472 38.6837C85.0942 38.1051 83.7543 37.1764 82.6276 35.8974C81.5314 34.6185 80.9832 32.9132 80.9832 30.7816C80.9832 28.924 81.4857 27.2492 82.4906 25.7571C83.4955 24.2345 85.0028 23.0317 87.0126 22.1486C89.0528 21.2655 91.5346 20.824 94.458 20.824C96.4982 20.824 98.4928 21.0676 100.442 21.5548C102.391 22.042 104.096 22.7424 105.558 23.656L103.274 29.2742C100.32 27.5994 97.3661 26.762 94.4123 26.762C92.3416 26.762 90.8038 27.097 89.7989 27.7669C88.8245 28.4368 88.3372 29.3199 88.3372 30.4162C88.3372 31.5124 88.9006 32.3346 90.0273 32.8827C91.1844 33.4004 92.9354 33.9181 95.2802 34.4357C97.7163 35.0143 99.7108 35.5929 101.264 36.1715C102.817 36.7501 104.142 37.6636 105.238 38.9121C106.364 40.1606 106.928 41.8507 106.928 43.9823C106.928 45.8093 106.41 47.4842 105.375 49.0067C104.37 50.4989 102.847 51.6865 100.807 52.5696C98.7668 53.4526 96.2851 53.8942 93.3617 53.8942Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M136.741 47.408V53.3461H111.984V21.3721H136.147V27.3101H119.338V34.253H134.183V40.0084H119.338V47.408H136.741Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M164.145 36.8566H170.905V49.8289C169.169 51.1383 167.159 52.1432 164.876 52.8436C162.592 53.544 160.293 53.8942 157.978 53.8942C154.659 53.8942 151.675 53.1938 149.026 51.793C146.376 50.3618 144.29 48.3977 142.768 45.9007C141.276 43.3732 140.53 40.526 140.53 37.3591C140.53 34.1921 141.276 31.3602 142.768 28.8631C144.29 26.3357 146.392 24.3716 149.071 22.9708C151.751 21.5396 154.766 20.824 158.115 20.824C160.917 20.824 163.46 21.296 165.743 22.24C168.027 23.184 169.946 24.5543 171.499 26.3509L166.748 30.7359C164.465 28.3302 161.709 27.1274 158.481 27.1274C156.441 27.1274 154.629 27.5537 153.045 28.4064C151.462 29.259 150.229 30.4618 149.345 32.0149C148.462 33.5679 148.021 35.3493 148.021 37.3591C148.021 39.3384 148.462 41.1046 149.345 42.6576C150.229 44.2106 151.447 45.4287 153 46.3118C154.583 47.1644 156.38 47.5908 158.389 47.5908C160.521 47.5908 162.44 47.134 164.145 46.2204V36.8566Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M191.984 53.8942C187.417 53.8942 183.854 52.6305 181.296 50.103C178.768 47.5755 177.505 43.967 177.505 39.2775V21.3721H184.904V39.0035C184.904 44.7283 187.28 47.5908 192.03 47.5908C194.344 47.5908 196.11 46.9056 197.328 45.5353C198.547 44.1345 199.156 41.9572 199.156 39.0035V21.3721H206.464V39.2775C206.464 43.967 205.185 47.5755 202.627 50.103C200.1 52.6305 196.552 53.8942 191.984 53.8942Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M234.148 53.3461L227.982 44.439H227.616H221.176V53.3461H213.776V21.3721H227.616C230.448 21.3721 232.9 21.8441 234.97 22.7881C237.071 23.7321 238.685 25.0719 239.812 26.8077C240.939 28.5434 241.502 30.5989 241.502 32.9741C241.502 35.3493 240.924 37.4048 239.766 39.1405C238.64 40.8458 237.026 42.1552 234.925 43.0687L242.096 53.3461H234.148ZM234.011 32.9741C234.011 31.1774 233.433 29.8071 232.275 28.8631C231.118 27.8887 229.428 27.4015 227.205 27.4015H221.176V38.5467H227.205C229.428 38.5467 231.118 38.0595 232.275 37.085C233.433 36.1106 234.011 34.7403 234.011 32.9741Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M262.849 53.8942C259.53 53.8942 256.531 53.1786 253.851 51.7474C251.202 50.3162 249.116 48.352 247.593 45.855C246.101 43.3276 245.355 40.4956 245.355 37.3591C245.355 34.2226 246.101 31.4058 247.593 28.9088C249.116 26.3814 251.202 24.402 253.851 22.9708C256.531 21.5396 259.53 20.824 262.849 20.824C266.169 20.824 269.153 21.5396 271.802 22.9708C274.451 24.402 276.537 26.3814 278.06 28.9088C279.582 31.4058 280.344 34.2226 280.344 37.3591C280.344 40.4956 279.582 43.3276 278.06 45.855C276.537 48.352 274.451 50.3162 271.802 51.7474C269.153 53.1786 266.169 53.8942 262.849 53.8942ZM262.849 47.5908C264.737 47.5908 266.443 47.1644 267.965 46.3118C269.488 45.4287 270.675 44.2106 271.528 42.6576C272.411 41.1046 272.853 39.3384 272.853 37.3591C272.853 35.3797 272.411 33.6136 271.528 32.0605C270.675 30.5075 269.488 29.3047 267.965 28.452C266.443 27.569 264.737 27.1274 262.849 27.1274C260.961 27.1274 259.256 27.569 257.734 28.452C256.211 29.3047 255.008 30.5075 254.125 32.0605C253.272 33.6136 252.846 35.3797 252.846 37.3591C252.846 39.3384 253.272 41.1046 254.125 42.6576C255.008 44.2106 256.211 45.4287 257.734 46.3118C259.256 47.1644 260.961 47.5908 262.849 47.5908Z",
                  fill: "white",
                }),
                o("rect", {
                  fill: "#78BF01",
                  height: "28",
                  rx: "3",
                  width: "200",
                  x: "80",
                  y: "62",
                }),
                o("path", {
                  d: "M98.7396 81.3301C97.4711 81.3301 96.3212 81.0743 95.2898 80.5628C94.2703 80.0401 93.4641 79.3228 92.8714 78.4109C92.2905 77.4879 92 76.4481 92 75.2915C92 74.1349 92.2905 73.1007 92.8714 72.1888C93.4641 71.2657 94.2703 70.5484 95.2898 70.0369C96.3212 69.5142 97.4771 69.2529 98.7574 69.2529C99.8363 69.2529 100.808 69.4308 101.674 69.7867C102.551 70.1425 103.286 70.6541 103.879 71.3213L102.029 72.9227C101.188 72.0108 100.144 71.5549 98.8997 71.5549C98.1291 71.5549 97.4415 71.7161 96.8369 72.0386C96.2323 72.35 95.7581 72.7893 95.4143 73.3565C95.0823 73.9236 94.9164 74.5686 94.9164 75.2915C94.9164 76.0143 95.0823 76.6593 95.4143 77.2265C95.7581 77.7937 96.2323 78.2385 96.8369 78.561C97.4415 78.8724 98.1291 79.0281 98.8997 79.0281C100.144 79.0281 101.188 78.5666 102.029 77.6435L103.879 79.245C103.286 79.9233 102.551 80.4404 101.674 80.7963C100.797 81.1522 99.8185 81.3301 98.7396 81.3301Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M115.462 78.9614V81.1299H105.824V69.453H115.231V71.6216H108.687V74.1572H114.467V76.259H108.687V78.9614H115.462Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M125.686 81.1299L123.285 77.8771H123.143H120.635V81.1299H117.755V69.453H123.143C124.245 69.453 125.2 69.6254 126.006 69.9701C126.824 70.3149 127.452 70.8042 127.891 71.4381C128.329 72.072 128.549 72.8227 128.549 73.6901C128.549 74.5575 128.324 75.3082 127.873 75.9421C127.434 76.5648 126.806 77.043 125.988 77.3766L128.78 81.1299H125.686ZM125.632 73.6901C125.632 73.0339 125.407 72.5335 124.957 72.1888C124.506 71.8329 123.848 71.655 122.983 71.655H120.635V75.7252H122.983C123.848 75.7252 124.506 75.5473 124.957 75.1914C125.407 74.8355 125.632 74.3351 125.632 73.6901Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M133.236 71.655H129.253V69.453H140.1V71.655H136.117V81.1299H133.236V71.655Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M141.65 69.453H144.531V81.1299H141.65V69.453Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M150.366 71.6216V74.7076H156.128V76.8762H150.366V81.1299H147.485V69.453H156.892V71.6216H150.366Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M158.842 69.453H161.723V81.1299H158.842V69.453Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M170.635 81.3301C169.366 81.3301 168.216 81.0743 167.185 80.5628C166.165 80.0401 165.359 79.3228 164.766 78.4109C164.185 77.4879 163.895 76.4481 163.895 75.2915C163.895 74.1349 164.185 73.1007 164.766 72.1888C165.359 71.2657 166.165 70.5484 167.185 70.0369C168.216 69.5142 169.372 69.2529 170.652 69.2529C171.731 69.2529 172.703 69.4308 173.569 69.7867C174.446 70.1425 175.181 70.6541 175.774 71.3213L173.924 72.9227C173.083 72.0108 172.039 71.5549 170.795 71.5549C170.024 71.5549 169.336 71.7161 168.732 72.0386C168.127 72.35 167.653 72.7893 167.309 73.3565C166.977 73.9236 166.811 74.5686 166.811 75.2915C166.811 76.0143 166.977 76.6593 167.309 77.2265C167.653 77.7937 168.127 78.2385 168.732 78.561C169.336 78.8724 170.024 79.0281 170.795 79.0281C172.039 79.0281 173.083 78.5666 173.924 77.6435L175.774 79.245C175.181 79.9233 174.446 80.4404 173.569 80.7963C172.691 81.1522 171.713 81.3301 170.635 81.3301Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M185.674 78.6277H179.895L178.792 81.1299H175.84L181.388 69.453H184.234L189.8 81.1299H186.776L185.674 78.6277ZM184.767 76.5759L182.793 72.1054L180.819 76.5759H184.767Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M196.875 81.3301C195.606 81.3301 194.456 81.0743 193.425 80.5628C192.405 80.0401 191.599 79.3228 191.006 78.4109C190.425 77.4879 190.135 76.4481 190.135 75.2915C190.135 74.1349 190.425 73.1007 191.006 72.1888C191.599 71.2657 192.405 70.5484 193.425 70.0369C194.456 69.5142 195.612 69.2529 196.892 69.2529C197.971 69.2529 198.943 69.4308 199.809 69.7867C200.686 70.1425 201.421 70.6541 202.014 71.3213L200.164 72.9227C199.323 72.0108 198.279 71.5549 197.035 71.5549C196.264 71.5549 195.576 71.7161 194.972 72.0386C194.367 72.35 193.893 72.7893 193.549 73.3565C193.217 73.9236 193.051 74.5686 193.051 75.2915C193.051 76.0143 193.217 76.6593 193.549 77.2265C193.893 77.7937 194.367 78.2385 194.972 78.561C195.576 78.8724 196.264 79.0281 197.035 79.0281C198.279 79.0281 199.323 78.5666 200.164 77.6435L202.014 79.245C201.421 79.9233 200.686 80.4404 199.809 80.7963C198.931 81.1522 197.953 81.3301 196.875 81.3301ZM195.914 85C195.606 85 195.304 84.9666 195.007 84.8999C194.711 84.8443 194.462 84.7609 194.26 84.6497L194.687 83.532C195.067 83.6989 195.452 83.7823 195.843 83.7823C196.46 83.7823 196.768 83.6043 196.768 83.2485C196.768 82.926 196.477 82.7647 195.897 82.7647H195.292L195.754 80.9965H197.23L196.981 81.964C197.503 82.0196 197.888 82.1697 198.137 82.4144C198.398 82.6702 198.528 82.9816 198.528 83.3486C198.528 83.8601 198.291 84.2605 197.817 84.5496C197.343 84.8499 196.709 85 195.914 85Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M211.914 78.6277H206.134L205.032 81.1299H202.08L207.628 69.453H210.473L216.039 81.1299H213.016L211.914 78.6277ZM211.007 76.5759L209.033 72.1054L207.059 76.5759H211.007ZM210.385 68.5522C210.064 68.5522 209.78 68.4966 209.531 68.3854C209.294 68.2631 209.027 68.1018 208.731 67.9017C208.541 67.7682 208.381 67.6681 208.251 67.6014C208.132 67.5347 208.014 67.5013 207.895 67.5013C207.646 67.5013 207.444 67.5847 207.29 67.7515C207.136 67.9072 207.053 68.1352 207.041 68.4355H205.637C205.66 67.6904 205.856 67.101 206.223 66.6673C206.603 66.2224 207.101 66 207.717 66C208.025 66 208.298 66.0612 208.535 66.1835C208.784 66.2947 209.063 66.456 209.371 66.6673C209.561 66.8007 209.715 66.9008 209.833 66.9675C209.964 67.0342 210.088 67.0676 210.207 67.0676C210.444 67.0676 210.639 66.9898 210.794 66.8341C210.96 66.6673 211.048 66.4448 211.06 66.1668H212.465C212.441 66.8897 212.24 67.468 211.861 67.9017C211.493 68.3354 211.001 68.5522 210.385 68.5522Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M223.186 81.3301C221.893 81.3301 220.726 81.0688 219.682 80.5461C218.651 80.0234 217.839 79.3061 217.246 78.3942C216.665 77.4712 216.375 76.4369 216.375 75.2915C216.375 74.146 216.665 73.1174 217.246 72.2054C217.839 71.2824 218.651 70.5596 219.682 70.0369C220.726 69.5142 221.893 69.2529 223.186 69.2529C224.478 69.2529 225.64 69.5142 226.671 70.0369C227.702 70.5596 228.514 71.2824 229.107 72.2054C229.7 73.1174 229.996 74.146 229.996 75.2915C229.996 76.4369 229.7 77.4712 229.107 78.3942C228.514 79.3061 227.702 80.0234 226.671 80.5461C225.64 81.0688 224.478 81.3301 223.186 81.3301ZM223.186 79.0281C223.921 79.0281 224.585 78.8724 225.177 78.561C225.77 78.2385 226.232 77.7937 226.564 77.2265C226.908 76.6593 227.08 76.0143 227.08 75.2915C227.08 74.5686 226.908 73.9236 226.564 73.3565C226.232 72.7893 225.77 72.35 225.177 72.0386C224.585 71.7161 223.921 71.5549 223.186 71.5549C222.451 71.5549 221.787 71.7161 221.194 72.0386C220.601 72.35 220.133 72.7893 219.789 73.3565C219.457 73.9236 219.291 74.5686 219.291 75.2915C219.291 76.0143 219.457 76.6593 219.789 77.2265C220.133 77.7937 220.601 78.2385 221.194 78.561C221.787 78.8724 222.451 79.0281 223.186 79.0281Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M241.288 81.3301C240.304 81.3301 239.349 81.2078 238.425 80.9631C237.512 80.7073 236.777 80.3793 236.219 79.9789L237.198 77.9438C237.731 78.3108 238.365 78.6055 239.1 78.8279C239.835 79.0503 240.57 79.1615 241.305 79.1615C242.123 79.1615 242.728 79.0503 243.119 78.8279C243.51 78.5944 243.706 78.2886 243.706 77.9104C243.706 77.6324 243.587 77.4044 243.35 77.2265C243.125 77.0375 242.829 76.8873 242.461 76.7761C242.106 76.6649 241.62 76.5426 241.003 76.4091C240.055 76.1978 239.278 75.9865 238.674 75.7752C238.069 75.5639 237.547 75.2248 237.109 74.7577C236.682 74.2906 236.468 73.6678 236.468 72.8894C236.468 72.211 236.664 71.5994 237.055 71.0544C237.447 70.4984 238.033 70.0591 238.816 69.7366C239.61 69.4141 240.576 69.2529 241.714 69.2529C242.509 69.2529 243.285 69.3418 244.044 69.5198C244.803 69.6977 245.467 69.9535 246.036 70.2871L245.146 72.3389C243.996 71.7272 242.847 71.4214 241.697 71.4214C240.89 71.4214 240.292 71.5438 239.901 71.7884C239.521 72.0331 239.331 72.3556 239.331 72.7559C239.331 73.1563 239.551 73.4565 239.989 73.6567C240.44 73.8458 241.122 74.0348 242.034 74.2239C242.983 74.4352 243.759 74.6465 244.364 74.8578C244.969 75.0691 245.484 75.4027 245.911 75.8586C246.35 76.3146 246.569 76.9318 246.569 77.7103C246.569 78.3775 246.368 78.9892 245.964 79.5452C245.573 80.0901 244.98 80.5239 244.186 80.8464C243.392 81.1689 242.426 81.3301 241.288 81.3301Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M252.628 81.3301C251.644 81.3301 250.689 81.2078 249.765 80.9631C248.852 80.7073 248.117 80.3793 247.559 79.9789L248.538 77.9438C249.071 78.3108 249.705 78.6055 250.44 78.8279C251.175 79.0503 251.91 79.1615 252.645 79.1615C253.463 79.1615 254.068 79.0503 254.459 78.8279C254.85 78.5944 255.046 78.2886 255.046 77.9104C255.046 77.6324 254.927 77.4044 254.69 77.2265C254.465 77.0375 254.169 76.8873 253.801 76.7761C253.446 76.6649 252.959 76.5426 252.343 76.4091C251.395 76.1978 250.618 75.9865 250.013 75.7752C249.409 75.5639 248.887 75.2248 248.449 74.7577C248.022 74.2906 247.808 73.6678 247.808 72.8894C247.808 72.211 248.004 71.5994 248.395 71.0544C248.786 70.4984 249.373 70.0591 250.156 69.7366C250.95 69.4141 251.916 69.2529 253.054 69.2529C253.849 69.2529 254.625 69.3418 255.384 69.5198C256.143 69.6977 256.806 69.9535 257.376 70.2871L256.486 72.3389C255.336 71.7272 254.186 71.4214 253.037 71.4214C252.23 71.4214 251.632 71.5438 251.24 71.7884C250.861 72.0331 250.671 72.3556 250.671 72.7559C250.671 73.1563 250.891 73.4565 251.329 73.6567C251.78 73.8458 252.462 74.0348 253.374 74.2239C254.323 74.4352 255.099 74.6465 255.704 74.8578C256.309 75.0691 256.824 75.4027 257.251 75.8586C257.69 76.3146 257.909 76.9318 257.909 77.7103C257.909 78.3775 257.707 78.9892 257.304 79.5452C256.913 80.0901 256.32 80.5239 255.526 80.8464C254.732 81.1689 253.766 81.3301 252.628 81.3301Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M259.877 69.453H262.758V78.928H269V81.1299H259.877V69.453Z",
                  fill: "white",
                }),
                o("defs", null, [
                  o(
                    "linearGradient",
                    {
                      id: "paint0_linear_336_31",
                      gradientUnits: "userSpaceOnUse",
                      x1: "1.95671e-07",
                      x2: "70",
                      y1: "64",
                      y2: "64",
                    },
                    [
                      o("stop", { offset: "0.4999", "stop-color": "#78BF01" }),
                      o("stop", { offset: "0.5", "stop-color": "#6EB600" }),
                      o("stop", { offset: "0.5001", "stop-color": "#78BF01" }),
                      o("stop", { offset: "0.5002", "stop-color": "#68B100" }),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
          o("a", { href: "" }, [
            o(
              "svg",
              {
                fill: "none",
                height: "1em",
                viewBox: "0 0 200 200",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-10 w-auto max-w-[10rem] text-[#03c6fc]",
                title: "Para maiores de 18 anos",
              },
              [
                o("circle", {
                  cx: "100",
                  cy: "100",
                  fill: "currentColor",
                  r: "100",
                }),
                o("circle", {
                  cx: "99.9231",
                  cy: "99.9231",
                  fill: "black",
                  r: "76.9231",
                }),
                o("path", {
                  d: "M45 91.304V76.2294C53.0312 74.8205 58.788 70.3122 62.2706 62.7044H72.7182V136.951H58.6459V84.4007C55.803 87.3123 51.2544 89.6134 45 91.304Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M82.9527 97.0803C78.9726 93.4173 76.9826 88.2985 76.9826 81.7239C76.9826 76.5581 78.5462 72.0028 81.6733 68.058C84.8716 64.0193 89.7756 62 96.3853 62C102.711 62 107.508 63.9724 110.777 67.9172C114.118 71.768 115.788 76.3702 115.788 81.7239C115.788 88.2985 113.798 93.4173 109.818 97.0803C115.575 101.213 118.453 107.365 118.453 115.536C118.453 122.205 116.428 127.793 112.377 132.301C108.325 136.716 102.995 138.923 96.3853 138.923C89.7045 138.923 84.3386 136.669 80.2874 132.161C76.3074 127.652 74.3174 122.111 74.3174 115.536C74.3174 111.122 75.1702 107.365 76.876 104.265C78.5817 101.072 80.6073 98.677 82.9527 97.0803ZM96.3853 91.5858C98.02 91.5858 99.477 90.9753 100.756 89.7543C102.036 88.4394 102.675 86.5139 102.675 83.978C102.675 81.3482 102.036 79.3758 100.756 78.0609C99.477 76.7459 98.02 76.0885 96.3853 76.0885C94.7507 76.0885 93.2581 76.7459 91.9078 78.0609C90.6285 79.3758 89.9888 81.3482 89.9888 83.978C89.9888 86.42 90.6285 88.2985 91.9078 89.6134C93.2581 90.9283 94.7507 91.5858 96.3853 91.5858ZM96.3853 124.271C98.8018 124.271 100.721 123.379 102.142 121.594C103.635 119.81 104.381 117.509 104.381 114.691C104.381 111.685 103.599 109.243 102.036 107.365C100.543 105.393 98.6596 104.406 96.3853 104.406C94.0399 104.406 92.121 105.393 90.6285 107.365C89.1359 109.243 88.3897 111.685 88.3897 114.691C88.3897 117.603 89.1004 119.951 90.5219 121.735C92.0144 123.426 93.9689 124.271 96.3853 124.271Z",
                  fill: "white",
                }),
                o("path", {
                  d: "M143.66 85.0769V84.0769H142.66H138.264H137.264V85.0769V97.3553H125.077H124.077V98.3553V102.659V103.659H125.077H137.264V115.846V116.846H138.264H142.66H143.66V115.846V103.659H155.846H156.846V102.659V98.3553V97.3553H155.846H143.66V85.0769Z",
                  fill: "white",
                  stroke: "white",
                  "stroke-width": "2",
                }),
              ]
            ),
          ]),
        ],
        -1
      )
    ),
    Pr = {
      key: 0,
      class:
        "relative flex w-full flex-col flex-wrap items-center justify-center py-6 text-[.7rem] sm:flex-row",
    },
    Dr = { key: 0, class: "" },
    Zr = S(() =>
      o(
        "span",
        { class: "mr-1 inline-block font-bold text-[#ffffff4d]" },
        "Suporte",
        -1
      )
    ),
    Rr = ["href"],
    qr = { key: 1, class: "mx-1 text-white opacity-20" },
    Nr = { key: 2, class: "" },
    Wr = S(() =>
      o(
        "span",
        { class: "mr-1 inline-block font-bold text-[#ffffff4d]" },
        "Jurídico",
        -1
      )
    ),
    Fr = ["href"],
    Ur = { key: 3, class: "mx-1 text-white opacity-20" },
    Gr = { key: 4, class: "" },
    Kr = S(() =>
      o(
        "span",
        { class: "mr-1 inline-block font-bold text-[#ffffff4d]" },
        "Parceiros",
        -1
      )
    ),
    Jr = ["href"];
  function Xr(e, t, i, s, a, n) {
    const r = ct("RouterLink");
    return (
      h(),
      p("footer", Pn, [
        o("div", Dn, [
          o("div", Zn, [
            o("a", Rn, [
              o(
                "img",
                {
                  src: "/storage/" + a.setting.software_logo_white,
                  class: "hidden h-10 dark:block",
                  width: "200",
                  height: "40",
                  alt: `${a.setting.software_name} logo`,
                },
                null,
                8,
                qn
              ),
            ]),
            o("div", Nn, [
              Wn,
              o("ul", Fn, [
                o("li", Un, [
                  C(
                    r,
                    { to: { name: "serviceTerms" } },
                    { default: b(() => [Gn, z(" Termos e Condições ")]), _: 1 }
                  ),
                ]),
                o("li", Kn, [
                  C(
                    r,
                    { to: { name: "serviceTerms" } },
                    { default: b(() => [Jn, z(" Política AML ")]), _: 1 }
                  ),
                ]),
                o("li", Xn, [
                  C(
                    r,
                    { to: { name: "serviceTerms" }, class: "default" },
                    {
                      default: b(() => [Yn, z(" Política de Privacidade ")]),
                      _: 1,
                    }
                  ),
                ]),
                o("li", Qn, [
                  C(
                    r,
                    { to: { name: "serviceTerms" }, class: "default" },
                    { default: b(() => [tr, z(" Depósitos e Saques ")]), _: 1 }
                  ),
                ]),
                o("li", er, [
                  C(
                    r,
                    { to: { name: "serviceTerms" }, class: "default" },
                    { default: b(() => [ir, z(" Regras de Apostas ")]), _: 1 }
                  ),
                ]),
                o("li", sr, [
                  C(
                    r,
                    { to: { name: "serviceTerms" }, class: "default" },
                    { default: b(() => [or, z(" Jogo Responsável ")]), _: 1 }
                  ),
                ]),
              ]),
            ]),
            ar,
          ]),
          o("div", nr, [
            o(
              "div",
              {
                class: F([
                  n.handleHeightClass,
                  "text-footer-texts custom-overflow-hidden pb-2 text-center text-[.7rem]",
                ]),
              },
              [
                o("div", rr, [
                  o(
                    "p",
                    null,
                    " A " +
                      O(a.setting.software_name) +
                      " um site de apostas esportivas e cassino online, que oferece aos seus usuários uma experiência única de apostas em diversos esportes, incluindo futebol, basquete, tênis, vôlei, entre outros. ",
                    1
                  ),
                  lr,
                  o(
                    "p",
                    null,
                    " Com uma plataforma intuitiva e fácil de usar, a " +
                      O(a.setting.software_name) +
                      " permite que seus usuários apostem em jogos ao vivo, além de oferecer uma ampla variedade de opções de apostas pré-jogo. ",
                    1
                  ),
                  cr,
                  dr,
                  hr,
                  ur,
                  pr,
                  fr,
                ]),
              ],
              2
            ),
            o(
              "button",
              {
                onClick:
                  t[0] || (t[0] = (...l) => n.toggleMore && n.toggleMore(...l)),
                class: F([
                  n.handlePaddingClass,
                  "absolute bottom-2 z-10 w-full bg-gradient-to-t from-[var(--background-base)] to-transparent text-[.7rem] text-white md:bottom-4",
                ]),
              },
              " Ver mais ",
              2
            ),
          ]),
          o("div", vr, [
            o("div", null, [
              gr,
              o("div", mr, [
                a.custom
                  ? (h(),
                    p("div", _r, [
                      a.custom.instagram
                        ? (h(),
                          p("div", wr, [
                            o(
                              "a",
                              {
                                href: a.custom.instagram,
                                "data-v-4a8722f9": "",
                                "data-v-0a4b127c": "",
                                "aria-label": "Ver nosso perfil no instagram",
                                class:
                                  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white hover:opacity-80",
                                rel: "noopener",
                                target: "_blank",
                              },
                              yr,
                              8,
                              Cr
                            ),
                          ]))
                        : $("", !0),
                      a.custom.facebook
                        ? (h(),
                          p("div", xr, [
                            o(
                              "a",
                              {
                                href: a.custom.facebook,
                                "data-v-4a8722f9": "",
                                "data-v-0a4b127c": "",
                                "aria-label": "Ver nossa página no facebook",
                                class:
                                  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white hover:opacity-80",
                                rel: "noopener",
                                target: "_blank",
                              },
                              Er,
                              8,
                              Lr
                            ),
                          ]))
                        : $("", !0),
                      a.custom.youtube
                        ? (h(),
                          p("div", Mr, [
                            o(
                              "a",
                              {
                                "data-v-4a8722f9": "",
                                "data-v-0a4b127c": "",
                                "aria-label": "Ver nosso canal no youtube",
                                class:
                                  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white hover:opacity-80",
                                href: a.custom.youtube,
                                rel: "noopener",
                                target: "_blank",
                              },
                              Hr,
                              8,
                              Sr
                            ),
                          ]))
                        : $("", !0),
                      a.custom.telegram
                        ? (h(),
                          p("div", zr, [
                            o(
                              "a",
                              {
                                href: a.custom.telegram,
                                "data-v-4a8722f9": "",
                                "data-v-0a4b127c": "",
                                "aria-label": "Acesse Nosso Telegram",
                                class:
                                  "flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white hover:opacity-80",
                                rel: "noopener",
                                target: "_blank",
                              },
                              Vr,
                              8,
                              Ir
                            ),
                          ]))
                        : $("", !0),
                    ]))
                  : $("", !0),
              ]),
            ]),
          ]),
          o("div", $r, [
            o("div", Or, [
              o("p", null, [
                o("strong", null, O(a.setting.software_name), 1),
                z(
                  " é um site de entretenimento online que oferece aos seus usuários uma experiência única em apostas esportivas. "
                ),
                jr,
                z(
                  " é uma empresa registrada em Curaçao, sob o número 1125502, com sede em Dr. Henri Fergusonweg 1, Gaito, Curaçao, entidade devidamente credenciada autorizado e licenciado pelo Governo de Curaçao. Ao acessar, continuar a usar ou navegar neste site, você concorda que podemos usar determinados cookies do navegador para melhorar sua experiência ao usar nosso site. Utilizamos cookies apenas para melhorar a sua experiência e não interferir na sua privacidade. "
                ),
              ]),
            ]),
          ]),
          Br,
          a.custom
            ? (h(),
              p("div", Pr, [
                a.custom.suporte
                  ? (h(),
                    p("div", Dr, [
                      Zr,
                      o(
                        "a",
                        { href: `mailto:${a.custom.suporte}` },
                        O(a.custom.suporte),
                        9,
                        Rr
                      ),
                    ]))
                  : $("", !0),
                a.custom.suporte && (a.custom.juridico || a.custom.parceiros)
                  ? (h(), p("span", qr, " | "))
                  : $("", !0),
                a.custom.juridico
                  ? (h(),
                    p("div", Nr, [
                      Wr,
                      o(
                        "a",
                        { href: `mailto:${a.custom.juridico}` },
                        O(a.custom.juridico),
                        9,
                        Fr
                      ),
                    ]))
                  : $("", !0),
                a.custom.juridico && a.custom.parceiros
                  ? (h(), p("span", Ur, " | "))
                  : $("", !0),
                a.custom.parceiros
                  ? (h(),
                    p("div", Gr, [
                      Kr,
                      o(
                        "a",
                        { href: `mailto:${a.custom.parceiros}` },
                        O(a.custom.parceiros),
                        9,
                        Jr
                      ),
                    ]))
                  : $("", !0),
              ]))
            : $("", !0),
        ]),
      ])
    );
  }
  const M3 = E(Bn, [
    ["render", Xr],
    ["__scopeId", "data-v-751e0a96"],
  ]);
  const Yr = {
      props: [],
      components: { RouterLink: Ee },
      data() {
        return {
          isLoading: !1,
          action1: "Apostas",
          action2: "Live",
          interval: null,
        };
      },
      setup(e) {
        return {};
      },
      computed: {
        sidebarMenuStore() {
          return Me();
        },
        sidebarMenuStatus() {
          return this.sidebarMenuStore.getSidebarStatus;
        },
      },
      mounted() {
        this.changeTitle();
      },
      unmounted() {
        clearInterval(this.interval), this.sidebarMenuStore.setSidebarStatus(!1);
      },
      methods: {
        toggleMenu: function () {
          this.sidebarMenuStore.setSidebarToogle(),
            this.sidebarMenuStore.setSidebarCollapseStatus(!1);
        },
        changeTitle() {
          this.interval = setInterval(() => {
            const e = ["Bets", "Live"],
              t = ["Live", "Cassino"];
            (this.action1 = this.nextElementInList(e, this.action1)),
              (this.action2 = this.nextElementInList(t, this.action2));
          }, 2500);
        },
        nextElementInList(e, t) {
          const s = (e.indexOf(t) + 1) % e.length;
          return e[s];
        },
      },
      watch: {},
    },
    W = (e) => (Pt("data-v-045b29f6"), (e = e()), Dt(), e),
    Qr = { class: "flex lg:hidden" },
    t3 = {
      class:
        "fixed bottom-0 z-[400] h-16 w-full bg-[var(--navtop-color-dark)] sm:z-[999999]",
    },
    e3 = { class: "mx-auto grid h-full max-w-md grid-cols-5" },
    i3 = W(() => o("span", { class: "sr-only" }, "Open sidebar", -1)),
    s3 = {
      height: "17",
      viewBox: "0 0 320 512",
      width: "17",
      xmlns: "http://www.w3.org/2000/svg",
      class: "dark:fill-[#C0C3C3]",
    },
    o3 = W(() =>
      o(
        "path",
        {
          d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
        },
        null,
        -1
      )
    ),
    a3 = [o3],
    n3 = {
      height: "17",
      viewBox: "0 0 448 512",
      width: "17",
      xmlns: "http://www.w3.org/2000/svg",
      class: "dark:fill-[#C0C3C3]",
    },
    r3 = W(() =>
      o(
        "path",
        {
          d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
        },
        null,
        -1
      )
    ),
    l3 = [r3],
    c3 = W(() =>
      o(
        "svg",
        {
          height: "17",
          viewBox: "0 0 512 512",
          width: "17",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#C0C3C3]",
        },
        [
          o("path", {
            d: "M355.5 45.53L342.4 14.98c-27.95-9.983-57.18-14.98-86.42-14.98c-29.25 0-58.51 4.992-86.46 14.97L156.5 45.53l99.5 55.13L355.5 45.53zM86.78 96.15L53.67 99.09c-34.79 44.75-53.67 99.8-53.67 156.5L.0001 256c0 2.694 .0519 5.379 .1352 8.063l24.95 21.76l83.2-77.67L86.78 96.15zM318.8 336L357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336zM512 255.6c0-56.7-18.9-111.8-53.72-156.5L425.6 96.16L403.7 208.2l83.21 77.67l24.92-21.79C511.1 260.1 512 258.1 512 255.6zM51.77 367.7l-7.39 32.46c33.48 49.11 82.96 85.07 140 101.7l28.6-16.99l-48.19-103.3L51.77 367.7zM347.2 381.5l-48.19 103.3l28.57 17c57.05-16.66 106.5-52.62 140-101.7l-7.38-32.46L347.2 381.5z",
            fill: "currentColor",
          }),
          o("path", {
            d: "M458.3 99.08L458.3 99.08L458.3 99.08zM511.8 264c-1.442 48.66-16.82 95.87-44.28 136.1l-7.38-32.46l-113 13.86l-48.19 103.3l28.22 16.84c-23.48 6.78-47.67 10.2-71.85 10.2c-23.76 0-47.51-3.302-70.58-9.962l28.23-17.06l-48.19-103.3l-113-13.88l-7.39 32.46c-27.45-40.19-42.8-87.41-44.25-136.1l24.95 21.76l83.2-77.67L86.78 96.15L53.67 99.09c29.72-38.29 69.67-67.37 115.2-83.88l.3613 .2684L156.5 45.53l99.5 55.13l99.5-55.13L342.4 14.98c45.82 16.48 86 45.64 115.9 84.11L425.6 96.16L403.7 208.2l83.21 77.67L511.8 264zM357.3 217.4L255.1 144L154.7 217.4l38.82 118.6L318.8 336L357.3 217.4z",
            opacity: "0.4",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    d3 = W(() =>
      o(
        "div",
        {
          id: "tooltip-sports",
          role: "tooltip",
          class:
            "tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        },
        [
          z(" Esportes "),
          o("div", { class: "tooltip-arrow", "data-popper-arrow": "" }),
        ],
        -1
      )
    ),
    h3 = W(() =>
      o(
        "span",
        { class: "pulse absolute right-2 top-2 h-1 w-1 rounded-full bg-red-500" },
        null,
        -1
      )
    ),
    u3 = W(() =>
      o(
        "svg",
        {
          height: "17",
          viewBox: "0 0 512 512",
          width: "17",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#C0C3C3]",
        },
        [
          o("path", {
            class: "primary",
            d: "M201.9 32l-128 128h92.13l128-128H201.9zM64 32C28.65 32 0 60.65 0 96v64h6.062l128-128H64zM326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM224.3 241.7C221.1 239.5 216.9 239.5 213.5 241.4C210.1 243.3 208 247 208 251v137.9c0 4.008 2.104 7.705 5.5 9.656C215.1 399.5 216.9 400 218.7 400c1.959 0 3.938-.5605 5.646-1.682l106.7-68.97C334.1 327.3 336 323.8 336 319.1s-1.896-7.34-5.021-9.354L224.3 241.7z",
            fill: "currentColor",
          }),
          o("path", {
            class: "secondary",
            d: "M0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160H0zM330.1 329.3l-106.7 68.97C222.6 399.4 220.6 400 218.7 400c-1.77 0-3.562-.4648-5.166-1.379C210.1 396.7 208 392.1 208 388.1V251c0-4.01 2.104-7.705 5.5-9.656c3.375-1.918 7.562-1.832 10.81 .3027l106.7 68.97C334.1 312.7 336 316.2 336 319.1S334.1 327.3 330.1 329.3z",
            fill: "currentColor",
            opacity: "0.4",
          }),
        ],
        -1
      )
    ),
    p3 = W(() =>
      o(
        "div",
        {
          id: "tooltip-bets",
          role: "tooltip",
          class:
            "tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        },
        [
          z(" Apostas "),
          o("div", { class: "tooltip-arrow", "data-popper-arrow": "" }),
        ],
        -1
      )
    ),
    f3 = W(() =>
      o(
        "svg",
        {
          height: "17",
          viewBox: "0 0 640 512",
          width: "17",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#C0C3C3]",
        },
        [
          o("path", {
            d: "M220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.8 470 377.8 443.4 393.2L250.5 504.5C223.9 519.9 189.9 510.8 174.5 484.2L7.468 194.9C-7.906 168.2 1.218 134.2 27.85 118.8L220.7 7.468zM143.8 277.3C136.9 303.2 152.3 329.1 178.3 336.9C204.3 343.9 230.1 328.5 237.9 302.5L240.3 293.6C240.4 293.3 240.5 292.9 240.6 292.5L258.4 323.2L246.3 330.2C239.6 334 237.4 342.5 241.2 349.2C245.1 355.9 253.6 358.1 260.2 354.3L308.4 326.5C315.1 322.6 317.4 314.1 313.5 307.4C309.7 300.8 301.2 298.5 294.5 302.3L282.5 309.3L264.7 278.6C265.1 278.7 265.5 278.8 265.9 278.9L274.7 281.2C300.7 288.2 327.4 272.8 334.4 246.8C341.3 220.8 325.9 194.1 299.9 187.1L196.1 159.6C185.8 156.6 174.4 163.2 171.4 174.3L143.8 277.3z",
            fill: "currentColor",
          }),
          o("path", {
            d: "M324.1 499L459.4 420.9C501.3 396.7 515.7 343.1 491.5 301.1L354.7 64.25C356.5 64.08 358.2 64 360 64H584C614.9 64 640 89.07 640 120V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 499V499zM579.8 135.7C565.8 123.9 545.3 126.2 532.9 138.9L528.1 144.2L523.1 138.9C510.6 126.2 489.9 123.9 476.4 135.7C460.7 149.2 459.9 173.1 473.9 187.6L522.4 237.6C525.4 240.8 530.6 240.8 533.9 237.6L582 187.6C596 173.1 595.3 149.2 579.8 135.7H579.8z",
            opacity: "0.4",
            fill: "currentColor",
          }),
        ],
        -1
      )
    ),
    v3 = W(() =>
      o(
        "div",
        {
          id: "tooltip-casino",
          role: "tooltip",
          class:
            "tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        },
        [
          z(" Cassino "),
          o("div", { class: "tooltip-arrow", "data-popper-arrow": "" }),
        ],
        -1
      )
    ),
    g3 = W(() =>
      o(
        "span",
        { class: "pulse absolute right-2 top-2 h-1 w-1 rounded-full bg-red-500" },
        null,
        -1
      )
    ),
    m3 = W(() =>
      o(
        "svg",
        {
          height: "17",
          viewBox: "0 0 640 512",
          width: "17",
          xmlns: "http://www.w3.org/2000/svg",
          class: "dark:fill-[#C0C3C3]",
        },
        [
          o("path", {
            d: "M591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376zM96 200c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1s23.1-10.75 23.1-23.1S109.3 200 96 200zM352 248c13.25 0 23.1-10.75 23.1-23.1s-10.75-23.1-23.1-23.1S328 210.8 328 224S338.8 248 352 248zM224 328c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1c13.25 0 23.1-10.75 23.1-23.1S237.3 328 224 328zM224 200c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1s23.1-10.75 23.1-23.1S237.3 200 224 200zM224 72c-13.25 0-23.1 10.75-23.1 23.1s10.75 23.1 23.1 23.1c13.25 0 23.1-10.75 23.1-23.1S237.3 72 224 72z",
            fill: "currentColor",
          }),
          o("path", {
            d: "M447.1 224c0-12.56-4.782-25.13-14.35-34.76l-174.9-174.9C249.1 4.784 236.5 0 223.1 0C211.4 0 198.9 4.784 189.2 14.35L14.35 189.2C4.784 198.9-.0011 211.4-.0011 223.1c0 12.56 4.786 25.18 14.35 34.8l174.9 174.9c9.626 9.563 22.19 14.35 34.75 14.35c12.56 0 25.13-4.782 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1c13.25 0 23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1c13.25 0 23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248z",
            fill: "currentColor",
            opacity: "0.4",
          }),
        ],
        -1
      )
    ),
    _3 = W(() =>
      o(
        "div",
        {
          id: "tooltip-live",
          role: "tooltip",
          class:
            "tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        },
        [
          z(" Live "),
          o("div", { class: "tooltip-arrow", "data-popper-arrow": "" }),
        ],
        -1
      )
    );
  function w3(e, t, i, s, a, n) {
    const r = ct("RouterLink");
    return (
      h(),
      p("div", Qr, [
        o("div", t3, [
          o("div", e3, [
            o(
              "button",
              {
                onClick:
                  t[0] ||
                  (t[0] = _t(
                    (...l) => n.toggleMenu && n.toggleMenu(...l),
                    ["prevent"]
                  )),
                type: "button",
                class:
                  "flex flex-col items-center justify-center text-[11px] font-semibold text-gray-500 dark:text-[#FDFAFA]",
              },
              [
                i3,
                Lt((h(), p("svg", s3, a3, 512)), [[ie, n.sidebarMenuStatus]]),
                Lt((h(), p("svg", n3, l3, 512)), [[ie, !n.sidebarMenuStatus]]),
                z(" Menu "),
              ]
            ),
            C(
              r,
              {
                to: { name: "sports" },
                "data-tooltip-target": "tooltip-sports",
                type: "button",
                "active-class": "nav-bottom-active",
                class:
                  "flex flex-col items-center justify-center text-[11px] font-semibold text-gray-500 dark:text-[#FDFAFA]",
              },
              { default: b(() => [c3, z(" Esportes ")]), _: 1 }
            ),
            d3,
            C(
              r,
              {
                to: {
                  name: "casinosAll",
                  params: { provider: "all", category: "todos" },
                },
                "data-tooltip-target": "tooltip-bets",
                type: "button",
                "active-class": "nav-bottom-active",
                class:
                  "relative flex flex-col items-center justify-center text-[11px] font-semibold text-gray-500 dark:text-[#FDFAFA]",
              },
              { default: b(() => [h3, u3, z(" " + O(a.action1), 1)]), _: 1 }
            ),
            p3,
            C(
              r,
              {
                to: { name: "casinos" },
                "data-tooltip-target": "tooltip-casino",
                type: "button",
                "active-class": "nav-bottom-active",
                class:
                  "flex flex-col items-center justify-center text-[11px] font-semibold text-gray-500 dark:text-[#FDFAFA]",
              },
              { default: b(() => [f3, z(" Cassino ")]), _: 1 }
            ),
            v3,
            C(
              r,
              {
                to: {
                  name: "casinosAll",
                  params: { provider: "all", category: "ao-vivo" },
                },
                "data-tooltip-target": "tooltip-live",
                type: "button",
                "active-class": "nav-bottom-active",
                class:
                  "relative flex flex-col items-center justify-center text-[11px] font-semibold text-gray-500 dark:text-[#FDFAFA]",
              },
              { default: b(() => [g3, m3, z(" " + O(a.action2), 1)]), _: 1 }
            ),
            _3,
          ]),
        ]),
      ])
    );
  }
  const S3 = E(Yr, [
      ["render", w3],
      ["__scopeId", "data-v-045b29f6"],
    ]),
    C3 = {
      props: {},
      data() {
        return {
          cookieAccepted: localStorage.getItem("cookieAccepted") === "true",
        };
      },
      methods: {
        acceptCookie() {
          localStorage.setItem("cookieAccepted", "true"),
            (this.cookieAccepted = !0);
        },
      },
      watch: {},
    },
    b3 = {
      key: 0,
      class:
        "",
    },
    y3 = o(
      "p",
      null,
      "",
      -1
    );
  function x3(e, t, i, s, a, n) {
    return a.cookieAccepted
      ? $("", !0)
      : (h(),
        p("div", b3, [
          y3,
          o(
            "button",
            {
              onClick:
                t[0] || (t[0] = (...r) => n.acceptCookie && n.acceptCookie(...r)),
              class: "",
            },
            ""
          ),
        ]));
  }
  const A3 = E(C3, [["render", x3]]);
  export {
    S3 as B,
    A3 as C,
    Mo as E,
    Vo as F,
    Z2 as L,
    J2 as M,
    k3 as N,
    E3 as S,
    $1 as T,
    po as a,
    Le as b,
    M3 as c,
    Ge as i,
    P1 as u,
  };
  