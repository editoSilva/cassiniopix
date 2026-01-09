import {
  d as xe,
  r as v,
  a as V,
  p as G,
  o as Ce,
  n as Je,
  b as Ke,
  c as Oe,
  w as me,
  e as Re,
  h as S,
  i as x,
  F as b,
  f as et,
  _ as B,
  g as F,
  j as L,
  k as r,
  l as c,
  m as a,
  q as fe,
  v as tt,
  s as U,
  t as Ne,
  u as E,
  x as y,
  y as z,
  z as T,
  A as ze,
  B as st,
  C as at,
  D as M,
  E as A,
  G as X,
  H as He,
  I as N,
  R as it,
  J as nt,
  K as Ie,
  L as ot,
  M as rt,
  N as H,
} from "./app-a41775fa.js";
import { B as lt } from "./BaseLayout-e04ce02c.js";
import {
  u as De,
  L as ct,
  M as dt,
  F as ut,
  a as ht,
  E as gt,
} from "./CookiesComponent-3cc93cf3.js";
import { C as ae } from "./CassinoGameCard-a081d024.js";
import { S as pt } from "./ShowGamesByProvider-9c0a529a.js";
import { L as mt } from "./LoadingComponent-d0558a90.js";
import { C as ft } from "./CustomPagination-387741e4.js";
import "./WithdrawModal-008a788d.js";
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const _ = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: "center",
    wrapAround: !1,
    throttle: 16,
    pauseAutoplayOnHover: !1,
    mouseDrag: !0,
    touchDrag: !0,
    dir: "ltr",
    breakpoints: void 0,
    i18n: {
      ariaNextSlide: "Navigate to next slide",
      ariaPreviousSlide: "Navigate to previous slide",
      ariaNavigateToSlide: "Navigate to slide {slideNumber}",
      ariaGallery: "Gallery",
      itemXofY: "Item {currentSlide} of {slidesCount}",
      iconArrowUp: "Arrow pointing upwards",
      iconArrowDown: "Arrow pointing downwards",
      iconArrowRight: "Arrow pointing to the right",
      iconArrowLeft: "Arrow pointing to the left",
    },
  },
  Ze = {
    itemsToShow: { default: _.itemsToShow, type: Number },
    itemsToScroll: { default: _.itemsToScroll, type: Number },
    wrapAround: { default: _.wrapAround, type: Boolean },
    throttle: { default: _.throttle, type: Number },
    snapAlign: {
      default: _.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(
          e
        );
      },
    },
    transition: { default: _.transition, type: Number },
    breakpoints: { default: _.breakpoints, type: Object },
    autoplay: { default: _.autoplay, type: Number },
    pauseAutoplayOnHover: { default: _.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: _.mouseDrag, type: Boolean },
    touchDrag: { default: _.touchDrag, type: Boolean },
    dir: {
      default: _.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: _.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function vt({ config: e, slidesCount: t }) {
  const { snapAlign: s, wrapAround: o, itemsToShow: i = 1 } = e;
  if (o) return Math.max(t - 1, 0);
  let n;
  switch (s) {
    case "start":
      n = t - i;
      break;
    case "end":
      n = t - 1;
      break;
    case "center":
    case "center-odd":
      n = t - Math.ceil((i - 0.5) / 2);
      break;
    case "center-even":
      n = t - Math.ceil(i / 2);
      break;
    default:
      n = 0;
      break;
  }
  return Math.max(n, 0);
}
function _t({ config: e, slidesCount: t }) {
  const { wrapAround: s, snapAlign: o, itemsToShow: i = 1 } = e;
  let n = 0;
  if (s || i > t) return n;
  switch (o) {
    case "start":
      n = 0;
      break;
    case "end":
      n = i - 1;
      break;
    case "center":
    case "center-odd":
      n = Math.floor((i - 1) / 2);
      break;
    case "center-even":
      n = Math.floor((i - 2) / 2);
      break;
    default:
      n = 0;
      break;
  }
  return n;
}
function ve({ val: e, max: t, min: s }) {
  return t < s ? e : Math.min(Math.max(e, s), t);
}
function wt({ config: e, currentSlide: t, slidesCount: s }) {
  const { snapAlign: o, wrapAround: i, itemsToShow: n = 1 } = e;
  let m = t;
  switch (o) {
    case "center":
    case "center-odd":
      m -= (n - 1) / 2;
      break;
    case "center-even":
      m -= (n - 2) / 2;
      break;
    case "end":
      m -= n - 1;
      break;
  }
  return i ? m : ve({ val: m, max: s - n, min: 0 });
}
function We(e) {
  return e
    ? e.reduce((t, s) => {
        var o;
        return s.type === b
          ? [...t, ...We(s.children)]
          : ((o = s.type) === null || o === void 0 ? void 0 : o.name) ===
            "CarouselSlide"
          ? [...t, s]
          : t;
      }, [])
    : [];
}
function se({ val: e, max: t, min: s = 0 }) {
  return e > t
    ? se({ val: e - (t + 1), max: t, min: s })
    : e < s
    ? se({ val: e + (t + 1), max: t, min: s })
    : e;
}
function xt(e, t) {
  let s;
  return t
    ? function (...o) {
        const i = this;
        s || (e.apply(i, o), (s = !0), setTimeout(() => (s = !1), t));
      }
    : e;
}
function Ct(e, t) {
  let s;
  return function (...o) {
    s && clearTimeout(s),
      (s = setTimeout(() => {
        e(...o), (s = null);
      }, t));
  };
}
function qe(e = "", t = {}) {
  return Object.entries(t).reduce(
    (s, [o, i]) => s.replace(`{${o}}`, String(i)),
    e
  );
}
var bt = xe({
    name: "ARIA",
    setup() {
      const e = x("config", V(Object.assign({}, _))),
        t = x("currentSlide", v(0)),
        s = x("slidesCount", v(0));
      return () =>
        S(
          "div",
          {
            class: ["carousel__liveregion", "carousel__sr-only"],
            "aria-live": "polite",
            "aria-atomic": "true",
          },
          qe(e.i18n.itemXofY, {
            currentSlide: t.value + 1,
            slidesCount: s.value,
          })
        );
    },
  }),
  be = xe({
    name: "Carousel",
    props: Ze,
    setup(e, { slots: t, emit: s, expose: o }) {
      var i;
      const n = v(null),
        m = v([]),
        p = v(0),
        h = v(0),
        d = V(Object.assign({}, _));
      let g = Object.assign({}, _),
        l;
      const f = v((i = e.modelValue) !== null && i !== void 0 ? i : 0),
        I = v(0),
        Y = v(0),
        $ = v(0),
        D = v(0);
      let Z, ie;
      G("config", d),
        G("slidesCount", h),
        G("currentSlide", f),
        G("maxSlide", $),
        G("minSlide", D),
        G("slideWidth", p);
      function ne() {
        (l = Object.assign({}, e.breakpoints)),
          (g = Object.assign(Object.assign(Object.assign({}, g), e), {
            i18n: Object.assign(Object.assign({}, g.i18n), e.i18n),
            breakpoints: void 0,
          })),
          Le(g);
      }
      function Q() {
        if (!l || !Object.keys(l).length) return;
        const u = Object.keys(l)
          .map((w) => Number(w))
          .sort((w, j) => +j - +w);
        let C = Object.assign({}, g);
        u.some((w) => {
          const j = window.matchMedia(`(min-width: ${w}px)`).matches;
          return j && (C = Object.assign(Object.assign({}, C), l[w])), j;
        }),
          Le(C);
      }
      function Le(u) {
        Object.entries(u).forEach(([C, w]) => (d[C] = w));
      }
      const Me = Ct(() => {
        Q(), W();
      }, 16);
      function W() {
        if (!n.value) return;
        const u = n.value.getBoundingClientRect();
        p.value = u.width / d.itemsToShow;
      }
      function oe() {
        h.value <= 0 ||
          ((Y.value = Math.ceil((h.value - 1) / 2)),
          ($.value = vt({ config: d, slidesCount: h.value })),
          (D.value = _t({ config: d, slidesCount: h.value })),
          d.wrapAround ||
            (f.value = ve({ val: f.value, max: $.value, min: D.value })));
      }
      Ce(() => {
        Je(() => W()),
          setTimeout(() => W(), 1e3),
          Q(),
          Be(),
          window.addEventListener("resize", Me, { passive: !0 }),
          s("init");
      }),
        Ke(() => {
          ie && clearTimeout(ie),
            Z && clearInterval(Z),
            window.removeEventListener("resize", Me, { passive: !0 });
        });
      let k = !1;
      const J = { x: 0, y: 0 },
        K = { x: 0, y: 0 },
        P = V({ x: 0, y: 0 }),
        ee = v(!1),
        re = v(!1),
        Ue = () => {
          ee.value = !0;
        },
        Ye = () => {
          ee.value = !1;
        };
      function ke(u) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(u.target.tagName) ||
          ((k = u.type === "touchstart"),
          k || u.preventDefault(),
          !((!k && u.button !== 0) || O.value) &&
            ((J.x = k ? u.touches[0].clientX : u.clientX),
            (J.y = k ? u.touches[0].clientY : u.clientY),
            document.addEventListener(k ? "touchmove" : "mousemove", Te, !0),
            document.addEventListener(k ? "touchend" : "mouseup", Ae, !0)));
      }
      const Te = xt((u) => {
        (re.value = !0),
          (K.x = k ? u.touches[0].clientX : u.clientX),
          (K.y = k ? u.touches[0].clientY : u.clientY);
        const C = K.x - J.x,
          w = K.y - J.y;
        (P.y = w), (P.x = C);
      }, d.throttle);
      function Ae() {
        const u = d.dir === "rtl" ? -1 : 1,
          C = Math.sign(P.x) * 0.4,
          w = Math.round(P.x / p.value + C) * u;
        if (w && !k) {
          const j = (ue) => {
            ue.stopPropagation(), window.removeEventListener("click", j, !0);
          };
          window.addEventListener("click", j, !0);
        }
        R(f.value - w),
          (P.x = 0),
          (P.y = 0),
          (re.value = !1),
          document.removeEventListener(k ? "touchmove" : "mousemove", Te, !0),
          document.removeEventListener(k ? "touchend" : "mouseup", Ae, !0);
      }
      function Be() {
        !d.autoplay ||
          d.autoplay <= 0 ||
          (Z = setInterval(() => {
            (d.pauseAutoplayOnHover && ee.value) || te();
          }, d.autoplay));
      }
      function je() {
        Z && (clearInterval(Z), (Z = null)), Be();
      }
      const O = v(!1);
      function R(u) {
        const C = d.wrapAround ? u : ve({ val: u, max: $.value, min: D.value });
        f.value === C ||
          O.value ||
          (s("slide-start", {
            slidingToIndex: u,
            currentSlideIndex: f.value,
            prevSlideIndex: I.value,
            slidesCount: h.value,
          }),
          (O.value = !0),
          (I.value = f.value),
          (f.value = C),
          (ie = setTimeout(() => {
            if (d.wrapAround) {
              const w = se({ val: C, max: $.value, min: 0 });
              w !== f.value &&
                ((f.value = w),
                s("loop", { currentSlideIndex: f.value, slidingToIndex: u }));
            }
            s("update:modelValue", f.value),
              s("slide-end", {
                currentSlideIndex: f.value,
                prevSlideIndex: I.value,
                slidesCount: h.value,
              }),
              (O.value = !1),
              je();
          }, d.transition)));
      }
      function te() {
        R(f.value + d.itemsToScroll);
      }
      function le() {
        R(f.value - d.itemsToScroll);
      }
      const Ge = { slideTo: R, next: te, prev: le };
      G("nav", Ge), G("isSliding", O);
      const Ee = Oe(() =>
        wt({ config: d, currentSlide: f.value, slidesCount: h.value })
      );
      G("slidesToScroll", Ee);
      const Qe = Oe(() => {
        const u = d.dir === "rtl" ? -1 : 1,
          C = Ee.value * p.value * u;
        return {
          transform: `translateX(${P.x - C}px)`,
          transition: `${O.value ? d.transition : 0}ms`,
          margin: d.wrapAround ? `0 -${h.value * p.value}px` : "",
          width: "100%",
        };
      });
      function $e() {
        ne(), Q(), oe(), W(), je();
      }
      Object.keys(Ze).forEach((u) => {
        ["modelValue"].includes(u) || me(() => e[u], $e);
      }),
        me(
          () => e.modelValue,
          (u) => {
            u !== f.value && R(Number(u));
          }
        ),
        me(h, oe),
        s("before-init"),
        ne();
      const Ve = {
        config: d,
        slidesCount: h,
        slideWidth: p,
        next: te,
        prev: le,
        slideTo: R,
        currentSlide: f,
        maxSlide: $,
        minSlide: D,
        middleSlide: Y,
      };
      o({
        updateBreakpointsConfigs: Q,
        updateSlidesData: oe,
        updateSlideWidth: W,
        initDefaultConfigs: ne,
        restartCarousel: $e,
        slideTo: R,
        next: te,
        prev: le,
        nav: Ge,
        data: Ve,
      });
      const ce = t.default || t.slides,
        de = t.addons,
        Pe = V(Ve);
      return () => {
        const u = We(ce == null ? void 0 : ce(Pe)),
          C = (de == null ? void 0 : de(Pe)) || [];
        u.forEach((he, ge) => (he.props.index = ge));
        let w = u;
        if (d.wrapAround) {
          const he = u.map((pe, q) =>
              Re(pe, {
                index: -u.length + q,
                isClone: !0,
                key: `clone-before-${q}`,
              })
            ),
            ge = u.map((pe, q) =>
              Re(pe, {
                index: u.length + q,
                isClone: !0,
                key: `clone-after-${q}`,
              })
            );
          w = [...he, ...u, ...ge];
        }
        (m.value = u), (h.value = Math.max(u.length, 1));
        const j = S(
            "ol",
            {
              class: "carousel__track",
              style: Qe.value,
              onMousedownCapture: d.mouseDrag ? ke : null,
              onTouchstartPassiveCapture: d.touchDrag ? ke : null,
            },
            w
          ),
          ue = S("div", { class: "carousel__viewport" }, j);
        return S(
          "section",
          {
            ref: n,
            class: {
              carousel: !0,
              "is-sliding": O.value,
              "is-dragging": re.value,
              "is-hover": ee.value,
              "carousel--rtl": d.dir === "rtl",
            },
            dir: d.dir,
            "aria-label": d.i18n.ariaGallery,
            tabindex: "0",
            onMouseenter: Ue,
            onMouseleave: Ye,
          },
          [ue, C, S(bt)]
        );
      };
    },
  }),
  _e;
(function (e) {
  (e.arrowUp = "arrowUp"),
    (e.arrowDown = "arrowDown"),
    (e.arrowRight = "arrowRight"),
    (e.arrowLeft = "arrowLeft");
})(_e || (_e = {}));
const St = {
  arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
  arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
  arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
};
function yt(e) {
  return e in _e;
}
const we = (e) => {
  const t = x("config", V(Object.assign({}, _))),
    s = String(e.name),
    o = `icon${s.charAt(0).toUpperCase() + s.slice(1)}`;
  if (!s || typeof s != "string" || !yt(s)) return;
  const i = St[s],
    n = S("path", { d: i }),
    m = t.i18n[o] || e.title || s,
    p = S("title", m);
  return S(
    "svg",
    {
      class: "carousel__icon",
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": m,
    },
    [p, n]
  );
};
we.props = { name: String, title: String };
const Se = (e, { slots: t, attrs: s }) => {
    const { next: o, prev: i } = t || {},
      n = x("config", V(Object.assign({}, _))),
      m = x("maxSlide", v(1)),
      p = x("minSlide", v(1)),
      h = x("currentSlide", v(1)),
      d = x("nav", {}),
      { dir: g, wrapAround: l, i18n: f } = n,
      I = g === "rtl",
      Y = S(
        "button",
        {
          type: "button",
          class: [
            "carousel__prev",
            !l && h.value <= p.value && "carousel__prev--disabled",
            s == null ? void 0 : s.class,
          ],
          "aria-label": f.ariaPreviousSlide,
          onClick: d.prev,
        },
        (i == null ? void 0 : i()) ||
          S(we, { name: I ? "arrowRight" : "arrowLeft" })
      ),
      $ = S(
        "button",
        {
          type: "button",
          class: [
            "carousel__next",
            !l && h.value >= m.value && "carousel__next--disabled",
            s == null ? void 0 : s.class,
          ],
          "aria-label": f.ariaNextSlide,
          onClick: d.next,
        },
        (o == null ? void 0 : o()) ||
          S(we, { name: I ? "arrowLeft" : "arrowRight" })
      );
    return [Y, $];
  },
  Lt = () => {
    const e = x("config", V(Object.assign({}, _))),
      t = x("maxSlide", v(1)),
      s = x("minSlide", v(1)),
      o = x("currentSlide", v(1)),
      i = x("nav", {}),
      n = (p) => se({ val: o.value, max: t.value, min: 0 }) === p,
      m = [];
    for (let p = s.value; p < t.value + 1; p++) {
      const h = S("button", {
          type: "button",
          class: {
            "carousel__pagination-button": !0,
            "carousel__pagination-button--active": n(p),
          },
          "aria-label": qe(e.i18n.ariaNavigateToSlide, { slideNumber: p + 1 }),
          onClick: () => i.slideTo(p),
        }),
        d = S("li", { class: "carousel__pagination-item", key: p }, h);
      m.push(d);
    }
    return S("ol", { class: "carousel__pagination" }, m);
  };
var ye = xe({
  name: "CarouselSlide",
  props: {
    index: { type: Number, default: 1 },
    isClone: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t }) {
    const s = x("config", V(Object.assign({}, _))),
      o = x("currentSlide", v(0)),
      i = x("slidesToScroll", v(0)),
      n = x("isSliding", v(!1)),
      m = () => e.index === o.value,
      p = () => e.index === o.value - 1,
      h = () => e.index === o.value + 1,
      d = () => {
        const g = Math.floor(i.value),
          l = Math.ceil(i.value + s.itemsToShow - 1);
        return e.index >= g && e.index <= l;
      };
    return () => {
      var g;
      return S(
        "li",
        {
          style: { width: `${100 / s.itemsToShow}%` },
          class: {
            carousel__slide: !0,
            "carousel__slide--clone": e.isClone,
            "carousel__slide--visible": d(),
            "carousel__slide--active": m(),
            "carousel__slide--prev": p(),
            "carousel__slide--next": h(),
            "carousel__slide--sliding": n.value,
          },
          "aria-hidden": !d(),
        },
        (g = t.default) === null || g === void 0 ? void 0 : g.call(t)
      );
    };
  },
});
const Fe = et("seachgames", {
  state() {
    return { searchgameStatus: !1, searchModeStatus: !1 };
  },
  actions: {
    setSearchGameToogle() {
      this.searchgameStatus = !this.searchgameStatus;
    },
    setSearchGameStatus(e) {
      this.searchgameStatus = e;
    },
    setSearchModeStatus(e) {
      this.searchModeStatus = e;
    },
  },
  getters: {
    getSearchGameStatus() {
      return this.searchgameStatus;
    },
    getSearchModeStatus() {
      return this.searchModeStatus;
    },
  },
});
const Mt = {
    name: "SearchMenuResult",
    components: { CassinoGameCard: ae },
    emits: ["search"],
    data() {
      return {
        showSearchResult: !1,
        isLoadingSearch: !1,
        shouldDisplayGames: !1,
        showLoadMore: !0,
        games: {},
        gamesData: [],
        searchTerm: "",
        searchWarnStatus: !1,
        searchWarnMessage: "",
        debounceSearchId: null,
        notFoundGamesMessage: "Nenhum resultado encontrado para a sua pesquisa",
        minimunLengthMessage: "A pesquisa requer pelo menos 3 caracteres",
      };
    },
    computed: {
      topNavStore() {
        return De();
      },
      searchGameStore() {
        return Fe();
      },
      searchGameMenu() {
        return this.searchGameStore.getSearchGameStatus;
      },
      searchModeStatus() {
        return this.searchGameStore.getSearchModeStatus;
      },
      gamesAmountProgress() {
        const e = this.games.total,
          t = this.games.data.length;
        return { width: `${Math.round(((t * 100) / e).toFixed(0))}%` };
      },
    },
    methods: {
      toggleSearch: function (e) {
        const t = this.topNavStore.getNavbarHeight,
          { top: s } = e.target.getBoundingClientRect();
        window.scrollTo({
          top: s - t + window.scrollY - 60,
          behavior: "smooth",
        }),
          this.searchGameStore.setSearchModeStatus(!0);
      },
      getSearch: async function () {
        const e = this;
        (this.isLoadingSearch = !0),
          (this.searchWarnStatus = !1),
          await F.get("/search/games?searchTerm=" + this.searchTerm)
            .then((t) => {
              (e.games = t.data.games), (e.showLoadMore = !0);
            })
            .catch((t) => {
              const s = this;
              Object.entries(JSON.parse(t.request.responseText)).forEach(
                ([o, i]) => {}
              ),
                (s.isLoadingSearch = !1),
                (this.searchWarnStatus = !1),
                (this.shouldDisplayGames = !1);
            });
      },
      clearData: async function () {
        (this.searchTerm = ""), await this.getSearch();
      },
      validateSearch(e) {
        let t = !1;
        return e.length >= 3 && (t = !0), t;
      },
      async loadMore() {
        const e = this;
        e.games.current_page !== e.games.last_page &&
          (await F.get(
            `/search/games?searchTerm=${e.searchTerm}&page=${
              e.games.current_page + 1
            }`
          )
            .then((s) => {
              const o = e.games.data;
              (e.games = s.data.games),
                (e.games.data = [...o, ...e.games.data]),
                e.games.current_page === e.games.last_page &&
                  (e.showLoadMore = !1);
            })
            .catch((s) => {
              Object.entries(JSON.parse(s.request.responseText)).forEach(
                ([o, i]) => {}
              );
            }));
      },
      closeSearch() {
        this.searchGameStore.setSearchModeStatus(!1),
          (this.searchTerm = ""),
          (this.searchWarnMessage = ""),
          (this.searchWarnStatus = !1),
          (this.showSearchResult = !1),
          (this.isLoadingSearch = !1);
      },
    },
    watch: {
      searchTerm(e, t) {
        if (this.validateSearch(e)) {
          const n = !!this.debounceSearchId;
          (this.searchWarnStatus = !1),
            (this.isLoadingSearch = !0),
            n && clearTimeout(this.debounceSearchId),
            (this.debounceSearchId = setTimeout(async () => {
              var m;
              await this.getSearch(),
                (this.isLoadingSearch = !1),
                (m = this.games.data) != null && m.length
                  ? ((this.searchWarnStatus = !1),
                    (this.searchWarnMessage = ""))
                  : ((this.searchWarnMessage = this.notFoundGamesMessage),
                    (this.searchWarnStatus = !0)),
                (this.debounceSearchId = null);
            }, 1e3));
          return;
        }
        const o = e.length === 0,
          i = e.length > 0 && e.length < 3;
        o &&
          ((this.searchWarnMessage = ""),
          (this.showSearchResult = !1),
          (this.searchWarnStatus = !1),
          (this.isLoadingSearch = !1)),
          i &&
            ((this.searchWarnMessage = this.minimunLengthMessage),
            (this.searchWarnStatus = !0),
            (this.showSearchResult = !0),
            (this.isLoadingSearch = !1));
      },
      async searchModeStatus(e, t) {
        const s = this.validateSearch(this.searchTerm),
          o = this.gamesData.length,
          i = s && this.searchModeStatus && o,
          n = s && this.searchModeStatus,
          m =
            this.searchModeStatus &&
            this.searchTerm.length > 0 &&
            this.searchTerm.length < 3;
        if (i) {
          (this.showSearchResult = !0),
            (this.searchWarnStatus = !1),
            (this.isLoadingSearch = !1);
          return;
        }
        if (n) {
          (this.showSearchResult = !0),
            (this.searchWarnStatus = !1),
            (this.isLoadingSearch = !0),
            await this.getSearch(),
            (this.isLoadingSearch = !1);
          return;
        }
        if (m) {
          (this.searchWarnMessage = this.minimunLengthMessage),
            (this.searchWarnStatus = !0),
            (this.isLoadingSearch = !1),
            (this.showSearchResult = !0);
          return;
        }
        (this.searchWarnMessage = ""),
          (this.searchWarnStatus = !1),
          (this.showSearchResult = !1),
          (this.isLoadingSearch = !1);
      },
    },
  },
  Xe = (e) => (st("data-v-530b5154"), (e = e()), at(), e),
  kt = { class: "relative mb-1 w-full" },
  Tt = { class: "flex w-full" },
  At = {
    class: "z-20 flex w-full items-center gap-3 rounded-[4px] bg-[#323637] p-3",
  },
  Bt = Xe(() =>
    a(
      "svg",
      {
        height: "16",
        viewBox: "0 0 512 512",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M500.3 443.7l-119.7-119.7c-15.03 22.3-34.26 41.54-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7z",
          fill: "currentColor",
        }),
        a("path", {
          d: "M207.1 0C93.12 0-.0002 93.13-.0002 208S93.12 416 207.1 416s208-93.13 208-208S322.9 0 207.1 0zM207.1 336c-70.58 0-128-57.42-128-128c0-70.58 57.42-128 128-128s128 57.42 128 128C335.1 278.6 278.6 336 207.1 336z",
          fill: "currentColor",
          opacity: "0.4",
        }),
      ],
      -1
    )
  ),
  jt = Xe(() =>
    a(
      "svg",
      {
        height: "16",
        viewBox: "0 0 320 512",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
          fill: "currentColor",
          opacity: "0.7",
        }),
      ],
      -1
    )
  ),
  Gt = [jt],
  Et = {
    key: 0,
    class:
      "custom-overflow max-h-[550px] w-full rounded-[4px] bg-[#323637] p-3",
  },
  $t = { class: "w-full" },
  Vt = {
    key: 0,
    class: "rounded-[4px] bg-[rgba(255,157,66,0.30)] py-3 text-center",
  },
  Pt = { class: "px-1 text-sm text-[#ff9e43] lg:text-base" },
  Ot = { key: 1 },
  Rt = {
    key: 0,
    class: "grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6",
  },
  Nt = {
    class:
      "custom-pulse flex h-28 w-full max-w-sm items-center justify-center rounded-[4px] bg-gray-700 lg:h-44",
  },
  It = { key: 1, class: "flex flex-col" },
  Zt = { class: "max-h-80 overflow-auto md:max-h-96" },
  zt = {
    class:
      "custom-scroll grid h-full grid-cols-3 gap-3 overflow-y-scroll md:grid-cols-4 lg:grid-cols-6",
  },
  Ht = { class: "flex w-full flex-col items-center justify-center pt-5" },
  Dt = { class: "mb-4 h-1 w-44 bg-[#474A4B]" },
  Wt = { class: "mb-3 text-center text-xs font-bold" };
function qt(e, t, s, o, i, n) {
  var p;
  const m = L("CassinoGameCard");
  return (
    r(),
    c(
      b,
      null,
      [
        a("div", kt, [
          a("div", Tt, [
            a("label", At, [
              Bt,
              fe(
                a(
                  "input",
                  {
                    onClick:
                      t[0] ||
                      (t[0] = U(
                        (...h) => n.toggleSearch && n.toggleSearch(...h),
                        ["prevent"]
                      )),
                    type: "text",
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (h) => (i.searchTerm = h)),
                    class:
                      "m-0 w-full border-none bg-transparent p-0 text-sm font-light text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-0",
                    placeholder: "Pesquise por um jogo...",
                    required: "",
                  },
                  null,
                  512
                ),
                [[tt, i.searchTerm]]
              ),
              fe(
                a(
                  "button",
                  {
                    type: "button",
                    onClick:
                      t[2] ||
                      (t[2] = (...h) => n.closeSearch && n.closeSearch(...h)),
                  },
                  Gt,
                  512
                ),
                [[Ne, i.searchTerm]]
              ),
            ]),
          ]),
        ]),
        i.showSearchResult
          ? (r(),
            c("div", Et, [
              a("div", $t, [
                i.searchWarnStatus
                  ? (r(), c("div", Vt, [a("p", Pt, E(i.searchWarnMessage), 1)]))
                  : (r(),
                    c("div", Ot, [
                      i.isLoadingSearch
                        ? (r(),
                          c("div", Rt, [
                            (r(),
                            c(
                              b,
                              null,
                              y(12, (h) => a("div", Nt)),
                              64
                            )),
                          ]))
                        : (r(),
                          c("div", It, [
                            a("div", Zt, [
                              a("div", zt, [
                                i.games
                                  ? (r(!0),
                                    c(
                                      b,
                                      { key: 0 },
                                      y(
                                        (p = i.games) == null ? void 0 : p.data,
                                        (h, d) => (
                                          r(),
                                          z(
                                            m,
                                            {
                                              index: d,
                                              title: h.game_name,
                                              cover: h.cover,
                                              gamecode: h.game_code,
                                              type: h.distribution,
                                              game: h,
                                            },
                                            null,
                                            8,
                                            [
                                              "index",
                                              "title",
                                              "cover",
                                              "gamecode",
                                              "type",
                                              "game",
                                            ]
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  : T("", !0),
                              ]),
                            ]),
                            a("div", Ht, [
                              a("div", Dt, [
                                a(
                                  "div",
                                  {
                                    class:
                                      "h-full bg-[var(--ci-primary-color)]",
                                    style: ze(n.gamesAmountProgress),
                                  },
                                  null,
                                  4
                                ),
                              ]),
                              a(
                                "span",
                                Wt,
                                " Mostrando " +
                                  E(i.games.data.length) +
                                  " de " +
                                  E(i.games.total) +
                                  " jogos ",
                                1
                              ),
                              fe(
                                a(
                                  "button",
                                  {
                                    type: "button",
                                    class:
                                      "relative rounded-[4px] bg-[var(--ci-primary-opacity-color)] px-3 py-2 text-xs font-bold text-[var(--ci-primary-color)] hover:opacity-80",
                                    onClick:
                                      t[3] ||
                                      (t[3] = (...h) =>
                                        n.loadMore && n.loadMore(...h)),
                                  },
                                  " Carregar mais ",
                                  512
                                ),
                                [[Ne, i.showLoadMore]]
                              ),
                            ]),
                          ])),
                    ])),
              ]),
            ]))
          : T("", !0),
      ],
      64
    )
  );
}
const Ft = B(Mt, [
    ["render", qt],
    ["__scopeId", "data-v-530b5154"],
  ]),
  Xt = {
    props: ["category", "index"],
    components: {
      CassinoGameCard: ae,
      Carousel: be,
      Navigation: Se,
      Slide: ye,
    },
    data() {
      return {
        isLoading: !1,
        settingsGames: { itemsToShow: 2.5, snapAlign: "start" },
        breakpointsGames: {
          700: { itemsToShow: 3.5, snapAlign: "center" },
          1024: { itemsToShow: 6, snapAlign: "start" },
        },
      };
    },
    setup(e) {
      const t = v(null);
      return Ce(() => {}), { ckCarousel: t };
    },
    computed: {},
    mounted() {},
    methods: { onCarouselInit(e) {}, onSlideStart(e) {} },
    watch: {},
  },
  Ut = { class: "flex w-full justify-between" },
  Yt = { class: "text-xl font-bold" },
  Qt = { class: "flex" },
  Jt = a("i", { class: "fa-solid fa-angle-left" }, null, -1),
  Kt = [Jt],
  es = a("i", { class: "fa-solid fa-angle-right" }, null, -1),
  ts = [es],
  ss = a(
    "div",
    {
      role: "status",
      class:
        "mr-6 flex h-48 w-full max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300 text-4xl dark:bg-gray-700",
    },
    [a("i", { class: "fa-duotone fa-gamepad-modern" })],
    -1
  );
function as(e, t, s, o, i, n) {
  const m = L("RouterLink"),
    p = L("Slide"),
    h = L("CassinoGameCard"),
    d = L("Carousel");
  return (
    r(),
    c("div", { key: s.index, class: "game-list relative mt-5 flex flex-col" }, [
      a("div", Ut, [
        a("h2", Yt, E(e.$t(s.category.name)), 1),
        a("div", Qt, [
          M(
            m,
            {
              to: {
                name: "casinosAll",
                params: { provider: "slotegrator", game: s.category.slug },
              },
              class:
                "mr-2 rounded bg-gray-400/20 px-3 py-2 hover:bg-gray-500/20 dark:bg-gray-800 hover:dark:bg-gray-700",
            },
            { default: A(() => [X(E(e.$t("See all")), 1)]), _: 1 },
            8,
            ["to"]
          ),
          a(
            "button",
            {
              onClick:
                t[0] || (t[0] = U((g) => o.ckCarousel.prev(), ["prevent"])),
              class:
                "rounded bg-gray-400/20 px-3 py-2 hover:bg-gray-500/20 dark:bg-gray-800 hover:dark:bg-gray-700",
            },
            Kt
          ),
          a(
            "button",
            {
              onClick:
                t[1] || (t[1] = U((g) => o.ckCarousel.next(), ["prevent"])),
              class:
                "rounded bg-gray-400/20 px-3 py-2 hover:bg-gray-500/20 dark:bg-gray-800 hover:dark:bg-gray-700",
            },
            ts
          ),
        ]),
      ]),
      M(
        d,
        He({ ref: "ckCarousel" }, i.settingsGames, {
          breakpoints: i.breakpointsGames,
          onInit: t[2] || (t[2] = (g) => n.onCarouselInit(s.index)),
          onSlideStart: t[3] || (t[3] = (g) => n.onSlideStart(s.index)),
        }),
        {
          default: A(() => [
            i.isLoading
              ? (r(),
                c(
                  b,
                  { key: 0 },
                  y(10, (g, l) =>
                    M(p, { index: l }, { default: A(() => [ss]), _: 2 }, 1032, [
                      "index",
                    ])
                  ),
                  64
                ))
              : T("", !0),
            s.category.games_slotgrator && !i.isLoading
              ? (r(!0),
                c(
                  b,
                  { key: 1 },
                  y(
                    s.category.games_slotgrator,
                    (g, l) => (
                      r(),
                      z(
                        p,
                        { index: l },
                        {
                          default: A(() => [
                            M(
                              h,
                              {
                                index: l,
                                title: g.name,
                                cover: "/storage/" + g.image,
                                link: g.slug,
                                type: "slotegrator",
                              },
                              null,
                              8,
                              ["index", "title", "cover", "link"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["index"]
                      )
                    )
                  ),
                  256
                ))
              : T("", !0),
          ]),
          _: 1,
        },
        16,
        ["breakpoints"]
      ),
    ])
  );
}
const is = B(Xt, [["render", as]]),
  ns = {
    props: ["provider", "index"],
    components: {
      CassinoGameCard: ae,
      Carousel: be,
      Navigation: Se,
      Slide: ye,
    },
    data() {
      return {
        isLoading: !1,
        settingsGames: { itemsToShow: 2.5, snapAlign: "start" },
        breakpointsGames: {
          700: { itemsToShow: 3.5, snapAlign: "center" },
          1024: { itemsToShow: 6, snapAlign: "start" },
        },
      };
    },
    setup(e) {
      const t = v(null);
      return Ce(() => {}), { ckCarousel: t };
    },
    computed: {},
    mounted() {},
    methods: { onCarouselInit(e) {}, onSlideStart(e) {} },
    watch: {},
  },
  os = { class: "mb-2 flex w-full justify-between" },
  rs = { class: "text-xl font-bold text-white" },
  ls = { class: "flex" },
  cs = a("i", { class: "fa-solid fa-angle-left" }, null, -1),
  ds = [cs],
  us = a("i", { class: "fa-solid fa-angle-right" }, null, -1),
  hs = [us],
  gs = a(
    "div",
    {
      role: "status",
      class:
        "mr-6 flex h-48 w-full max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300 text-4xl dark:bg-gray-700",
    },
    [a("i", { class: "fa-duotone fa-gamepad-modern" })],
    -1
  );
function ps(e, t, s, o, i, n) {
  const m = L("RouterLink"),
    p = L("Slide"),
    h = L("CassinoGameCard"),
    d = L("Carousel");
  return (
    r(),
    c("div", { key: s.index, class: "game-list relative mt-5 flex flex-col" }, [
      a("div", os, [
        a("h2", rs, E(e.$t(s.provider.name)), 1),
        a("div", ls, [
          M(
            m,
            {
              to: {
                name: "casinosAll",
                params: { provider: s.provider.id, category: "all" },
              },
              class: "item-game mr-2 rounded px-3 py-2",
            },
            { default: A(() => [X(E(e.$t("See all")), 1)]), _: 1 },
            8,
            ["to"]
          ),
          a(
            "button",
            {
              onClick:
                t[0] || (t[0] = U((g) => o.ckCarousel.prev(), ["prevent"])),
              class: "item-game mr-2 rounded px-3 py-2",
            },
            ds
          ),
          a(
            "button",
            {
              onClick:
                t[1] || (t[1] = U((g) => o.ckCarousel.next(), ["prevent"])),
              class: "item-game rounded px-3 py-2",
            },
            hs
          ),
        ]),
      ]),
      M(
        d,
        He({ ref: "ckCarousel" }, i.settingsGames, {
          breakpoints: i.breakpointsGames,
          onInit: t[2] || (t[2] = (g) => n.onCarouselInit(s.index)),
          onSlideStart: t[3] || (t[3] = (g) => n.onSlideStart(s.index)),
        }),
        {
          default: A(() => [
            i.isLoading
              ? (r(),
                c(
                  b,
                  { key: 0 },
                  y(10, (g, l) =>
                    M(p, { index: l }, { default: A(() => [gs]), _: 2 }, 1032, [
                      "index",
                    ])
                  ),
                  64
                ))
              : T("", !0),
            s.provider.games && !i.isLoading
              ? (r(!0),
                c(
                  b,
                  { key: 1 },
                  y(
                    s.provider.games,
                    (g, l) => (
                      r(),
                      z(
                        p,
                        { index: l },
                        {
                          default: A(() => [
                            M(
                              h,
                              {
                                index: l,
                                title: g.game_name,
                                cover: g.cover,
                                gamecode: g.game_code,
                                type: g.distribution,
                                game: g,
                              },
                              null,
                              8,
                              [
                                "index",
                                "title",
                                "cover",
                                "gamecode",
                                "type",
                                "game",
                              ]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["index"]
                      )
                    )
                  ),
                  256
                ))
              : T("", !0),
          ]),
          _: 1,
        },
        16,
        ["breakpoints"]
      ),
    ])
  );
}
const ms = B(ns, [["render", ps]]),
  fs = {},
  vs = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  _s = N(
    '<g clip-path="url(#clip0_14_17)"><path d="M275.875 89.335C309.125 70.1175 351.75 81.5225 371 114.813L579.75 476.375C598.875 509.75 587.5 552.25 554.25 571.5L313.125 710.625C279.875 729.875 237.375 718.5 218.125 685.25L9.335 323.625C-9.8825 290.25 1.5225 247.75 34.8125 228.5L275.875 89.335ZM179.75 426.625C171.125 459 190.375 491.375 222.875 501.125C255.375 509.875 287.625 490.625 297.375 458.125L300.375 447C300.5 446.625 300.625 446.125 300.75 445.625L323 484L307.875 492.75C299.5 497.5 296.75 508.125 301.5 516.5C306.375 524.875 317 527.625 325.25 522.875L385.5 488.125C393.875 483.25 396.75 472.625 391.875 464.25C387.125 456 376.5 453.125 368.125 457.875L353.125 466.625L330.875 428.25C331.375 428.375 331.875 428.5 332.375 428.625L343.375 431.5C375.875 440.25 409.25 421 418 388.5C426.625 356 407.375 322.625 374.875 313.875L245.125 279.5C232.25 275.75 218 284 214.25 297.875L179.75 426.625Z"></path><path opacity="0.5" d="M405.125 703.75L574.25 606.125C626.625 575.875 644.625 508.875 614.375 456.375L443.375 160.312C445.625 160.1 447.75 160 450 160H730C768.625 160 800 191.337 800 230V650C800 688.625 768.625 720 730 720H450C433 720 417.25 713.875 405.125 703.75ZM724.75 249.625C707.25 234.875 681.625 237.75 666.125 253.625L660.125 260.25L653.875 253.625C638.25 237.75 612.375 234.875 595.5 249.625C575.875 266.5 574.875 296.375 592.375 314.5L653 377C656.75 381 663.25 381 667.375 377L727.5 314.5C745 296.375 744.125 266.5 724.75 249.625Z"></path></g><defs><clipPath id="clip0_14_17"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  ws = [_s];
function xs(e, t) {
  return r(), c("svg", vs, ws);
}
const Cs = B(fs, [["render", xs]]),
  bs = {},
  Ss = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  ys = N(
    '<g clip-path="url(#clip0_14_20)"><path d="M738.875 320H590.5C596.023 332.838 598.755 346.562 598.755 360.287C598.755 386.162 588.924 412.012 569.218 431.712L398.968 601.963V659.925C400 693.125 426.875 720 460 720H738.875C772 720 797.75 693.125 797.75 661.125V380C798.875 346.875 773.125 320 738.875 320ZM598.875 550C582.313 550 570 536.562 570 521.125C570 505.687 583.438 492.25 598.875 492.25C614.313 492.25 627.75 505.687 627.75 521.125C627.75 536.562 616.5 550 598.875 550ZM120 330C103.437 330 91.125 343.438 91.125 358.875C91.125 374.313 104.562 387.75 120 387.75C135.438 387.75 148.875 374.313 148.875 358.875C148.875 343.438 136.625 330 120 330ZM440 390C456.563 390 468.875 376.562 468.875 361.125C468.875 345.687 455.438 332.25 440 332.25C424.563 332.25 410 343.5 410 360C410 376.5 423.5 390 440 390ZM280 490C263.438 490 251.125 503.438 251.125 518.875C251.125 534.313 264.563 547.75 280 547.75C296.563 547.75 308.875 534.313 308.875 518.875C308.875 503.438 296.625 490 280 490ZM280 330C263.438 330 251.125 343.438 251.125 358.875C251.125 374.313 264.563 387.75 280 387.75C295.438 387.75 308.875 374.313 308.875 358.875C308.875 343.438 296.625 330 280 330ZM280 170C263.438 170 251.125 183.437 251.125 198.875C251.125 214.312 264.563 227.75 280 227.75C296.563 227.75 308.875 214.312 308.875 198.875C308.875 183.437 296.625 170 280 170Z"></path><path opacity="0.4" d="M558.875 360C558.875 344.3 552.897 328.588 540.937 316.55L322.312 97.925C311.375 85.98 295.625 80 278.875 80C264.25 80 248.625 85.98 236.5 97.9375L17.9375 316.5C5.97997 328.625 -0.00140381 344.25 -0.00140381 358.875C-0.00140381 374.575 5.9811 390.35 17.9361 402.375L236.561 621C248.594 632.954 264.299 638.937 279.999 638.937C295.699 638.937 311.411 632.96 323.436 621L542.061 402.375C554 391.375 558.875 375.75 558.875 360ZM120 390C103.437 390 91.125 376.562 91.125 361.125C91.125 345.687 104.562 332.25 120 332.25C135.437 332.25 148.875 345.687 148.875 361.125C148.875 376.562 136.625 390 120 390ZM280 550C263.437 550 251.125 536.562 251.125 521.125C251.125 505.687 264.562 492.25 280 492.25C296.562 492.25 308.875 505.687 308.875 521.125C308.875 536.562 296.625 550 280 550ZM280 390C263.437 390 251.125 376.562 251.125 361.125C251.125 345.687 264.562 332.25 280 332.25C295.437 332.25 308.875 345.687 308.875 361.125C308.875 376.562 296.625 390 280 390ZM280 230C263.437 230 251.125 216.563 251.125 201.125C251.125 185.688 264.562 172.25 280 172.25C296.562 172.25 308.875 185.688 308.875 201.125C308.875 216.563 296.625 230 280 230ZM440 390C423.437 390 411.125 376.562 411.125 361.125C411.125 345.687 424.562 332.25 440 332.25C455.437 332.25 468.875 345.687 468.875 361.125C468.875 376.562 456.625 390 440 390Z"></path></g><defs><clipPath id="clip0_14_20"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  Ls = [ys];
function Ms(e, t) {
  return r(), c("svg", Ss, Ls);
}
const ks = B(bs, [["render", Ms]]),
  Ts = {},
  As = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Bs = N(
    '<g clip-path="url(#clip0_14_23)"><path d="M665.125 280.511L519.759 135.15C506.592 121.981 485.242 121.981 472.073 135.15L436.792 170.431C401.886 157.623 364.347 150.275 325 150.275C145.508 150.275 0 295.783 0 475.275C0 654.767 145.508 800.275 325 800.275C504.492 800.275 650 654.767 650 475.275C650 435.928 642.652 398.386 629.844 363.48L665.125 328.202C678.292 315.033 678.292 293.683 665.125 280.511ZM325 300.275C228.516 300.275 150 378.791 150 475.275C150 489.092 138.819 500.275 125 500.275C111.181 500.275 100 489.092 100 475.275C100 351.202 200.928 250.275 325 250.275C338.819 250.275 350 261.456 350 275.275C350 289.094 338.819 300.275 325 300.275Z"></path><path opacity="0.4" d="M595.036 169.65L575 189.686L610.316 225L630.352 204.964C640.108 195.209 640.108 179.406 630.352 169.65C620.595 159.894 604.792 159.895 595.036 169.65ZM795.4 92.4516L733.408 66.6016L707.558 4.61562C706.289 2.06406 702.959 0 700.116 0C697.269 0 693.936 2.06406 692.667 4.61562L666.817 66.6016L604.828 92.4516C602.295 93.7187 600.231 97.0516 600.231 99.8953C600.231 102.725 602.295 106.075 604.828 107.344L666.817 133.192L692.667 195.177C693.936 197.728 697.269 199.794 700.116 199.794C702.959 199.794 706.289 197.728 707.558 195.177L733.408 133.192L795.4 107.344C797.936 106.075 800 102.725 800 99.8953C800 97.0516 797.936 93.7187 795.4 92.4516Z"></path></g><defs><clipPath id="clip0_14_23"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  js = [Bs];
function Gs(e, t) {
  return r(), c("svg", As, js);
}
const Es = B(Ts, [["render", Gs]]),
  $s = {},
  Vs = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ps = N(
    '<g clip-path="url(#clip0_14_29)"><path d="M400 400C275.977 400 100 591.797 100 712.891C100 767.383 141.797 800 212.109 800C288.477 800 338.867 760.742 400 760.742C461.719 760.742 512.305 800 587.891 800C658.203 800 700 767.383 700 712.891C700 591.797 524.023 400 400 400Z"></path><path opacity="0.4" d="M302.344 347.852C350.586 335.156 374.805 269.727 356.25 201.953C346.094 164.648 325 134.766 300 117.188V0L200 125C176.562 152.734 167.969 199.609 181.25 248.047C199.805 315.82 253.906 360.547 302.344 347.852ZM497.656 347.852C546.094 360.547 600.195 315.82 618.75 248.047C632.031 199.609 623.438 152.734 600 125L500 0V117.188C475 134.766 453.906 164.648 443.75 201.953C425.195 269.727 449.414 335.156 497.656 347.852ZM169.922 380.273C158.594 342.773 131.055 314.844 100 304.492V200L28.9062 297.461C10.1562 323.242 0 354.297 0 386.133C0 396.877 1.75781 408.203 5.07812 419.727C21.2891 473.828 71.4844 508.984 116.992 498.047C162.5 487.109 186.133 434.377 169.922 380.273ZM771.094 297.461L700 200V304.688C668.945 314.844 641.406 342.773 630.078 380.273C613.867 434.377 637.5 487.109 683.008 498.047C728.516 508.984 778.711 473.828 794.922 419.727C798.242 408.398 800 397.07 800 386.133C800 354.297 789.844 323.242 771.094 297.461Z"></path></g><defs><clipPath id="clip0_14_29"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  Os = [Ps];
function Rs(e, t) {
  return r(), c("svg", Vs, Os);
}
const Ns = B($s, [["render", Rs]]),
  Is = {},
  Zs = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  zs = N(
    '<g clip-path="url(#clip0_14_32)"><path d="M300 146.375C300 93.0156 345.312 0 400 0C456.25 0 500 93.0156 500 146.375V625L590 692.5C596.25 697.188 600 703.281 600 712.5V776.719C600 790.156 590.156 800 576.719 800C576.094 800 574.063 799.688 572.031 799.219L400 750L227.969 799.219C225.937 799.688 223.906 800 221.875 800C209.844 800 200 790.156 200 776.719V712.5C200 703.281 203.75 697.188 210 692.5L300 625V146.375Z"></path><path opacity="0.4" d="M300 500L32.9062 587.656C16.7187 594.375 0 582.344 0 565.312V476.719C0 460 8.35469 444.375 22.2656 435.156L300 250V500ZM500 250L777.812 435.156C791.719 444.375 800 460 800 476.719V565.312C800 582.344 783.281 594.375 767.031 587.656L500 498.594V250Z"></path></g><defs><clipPath id="clip0_14_32"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  Hs = [zs];
function Ds(e, t) {
  return r(), c("svg", Zs, Hs);
}
const Ws = B(Is, [["render", Ds]]),
  qs = {},
  Fs = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Xs = N(
    '<g clip-path="url(#clip0_14_35)"><path d="M260.156 616.875L180.938 537.656C166.563 523.281 162.344 501.719 170.469 483.125C199.063 417.812 268.438 264.062 323.75 182.344C451.719 -6.35943 642.344 -12.7219 756.094 8.24213C774.375 11.5843 788.438 25.6718 791.719 43.8437C812.656 157.656 806.406 348.281 617.656 476.25C535.313 532.031 379.688 599.844 312.656 627.656C295.469 635.312 274.219 631.094 260.156 616.875ZM600 262.5C634.531 262.5 662.5 234.531 662.5 200C662.5 165.469 634.531 137.5 600 137.5C565.469 137.5 537.5 165.469 537.5 200C537.5 234.531 565.469 262.5 600 262.5Z"></path><path opacity="0.4" d="M310.313 203.125C265.781 274.844 215.469 382.031 185.156 450H36.0938C23.9532 450 11.4594 442.656 4.81722 430.937C-1.82496 419.062 -1.58434 403.281 5.44847 392.969L87.9063 257.344C108.297 223.75 144.75 203.125 184.063 203.125H310.313ZM348.594 612.187C418.594 582.5 525.625 533.594 595.469 489.687V615.937C595.469 655.312 576.25 691.719 542.656 712.187L407.031 794.531C395.313 801.562 380.938 801.875 369.063 795.156C357.344 788.594 348.594 776.094 348.594 762.5V612.187Z"></path></g><defs><clipPath id="clip0_14_35"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  Us = [Xs];
function Ys(e, t) {
  return r(), c("svg", Fs, Us);
}
const Qs = B(qs, [["render", Ys]]),
  Js = {},
  Ks = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  ea = a(
    "path",
    {
      d: "M561.875 350.625C596.094 384.844 596.094 440.156 561.875 474.375C527.656 508.594 472.344 508.594 438.125 474.375L425.156 462.813C426.094 462.188 425.469 461.719 423.594 461.25V523.594H448.594C463.75 523.594 473.594 536.25 473.594 548.594C473.594 563.75 463.75 573.594 448.594 573.594H348.594C336.25 573.594 323.594 563.75 323.594 548.594C323.594 536.25 336.25 523.594 348.594 523.594H373.594V461.25C374.531 461.719 373.906 462.188 373.437 462.813L361.875 474.375C327.656 508.594 272.344 508.594 238.125 474.375C203.953 440.156 203.953 384.844 238.125 350.625L373.437 215.313C388.125 200.625 411.875 200.625 425.156 215.313L561.875 350.625Z",
    },
    null,
    -1
  ),
  ta = a(
    "path",
    {
      opacity: "0.4",
      d: "M600 0C655.156 0 700 44.7656 700 100V700C700 755.156 655.156 800 600 800H200C144.766 800 100 755.156 100 700V100C100 44.7656 144.766 0 200 0H600ZM238.125 350.625C203.953 384.844 203.953 440.156 238.125 474.375C272.344 508.594 327.656 508.594 361.875 474.375L373.438 462.813C373.906 462.188 374.531 461.719 373.594 461.25V523.594H348.594C336.25 523.594 323.594 536.25 323.594 548.594C323.594 563.75 336.25 573.594 348.594 573.594H448.594C463.75 573.594 473.594 563.75 473.594 548.594C473.594 536.25 463.75 523.594 448.594 523.594H423.594V461.25C425.469 461.719 426.094 462.188 425.156 462.813L438.125 474.375C472.344 508.594 527.656 508.594 561.875 474.375C596.094 440.156 596.094 384.844 561.875 350.625L425.156 215.313C411.875 200.625 388.125 200.625 373.438 215.313L238.125 350.625Z",
    },
    null,
    -1
  ),
  sa = [ea, ta];
function aa(e, t) {
  return r(), c("svg", Ks, sa);
}
const ia = B(Js, [["render", aa]]),
  na = {},
  oa = {
    width: "21",
    height: "21",
    viewBox: "0 0 800 800",
    xmlns: "http://www.w3.org/2000/svg",
  },
  ra = N(
    '<g clip-path="url(#clip0_14_41)"><path d="M350 400C350 372.344 372.344 350 400 350C427.656 350 450 372.344 450 400C450 427.656 427.656 450 400 450C372.344 450 350 427.656 350 400ZM800 400C800 620.937 620.937 800 400 800C179.063 800 0 620.937 0 400C0 179.063 179.063 0 400 0C620.937 0 800 179.063 800 400ZM400 100C232.969 100 100 232.969 100 400C100 565.625 232.969 700 400 700C565.625 700 700 565.625 700 400C700 232.969 565.625 100 400 100Z"></path><path opacity="0.4" d="M175 400C175 275.781 275.781 175 400 175C524.219 175 625 275.781 625 400C625 524.219 524.219 625 400 625C275.781 625 175 524.219 175 400ZM400 525C469.063 525 525 469.063 525 400C525 330.937 469.063 275 400 275C330.937 275 275 330.937 275 400C275 469.063 330.937 525 400 525Z"></path></g><defs><clipPath id="clip0_14_41"><rect width="800" height="800" fill="white"></rect></clipPath></defs>',
    2
  ),
  la = [ra];
function ca(e, t) {
  return r(), c("svg", oa, la);
}
const da = B(na, [["render", ca]]);
const ua = {
    components: {
      CustomPagination: ft,
      Pagination: Lt,
      ShowProviders: ms,
      LoadingComponent: mt,
      ShowCarousel: is,
      CassinoGameCard: ae,
      Carousel: be,
      Navigation: Se,
      Slide: ye,
      LanguageSelector: ct,
      MakeDeposit: dt,
      BaseLayout: lt,
      SearchMenuResult: Ft,
      ShowGamesByProvider: pt,
      RouterLink: it,
      Football: ut,
      LiveGames: ht,
      SlotGames: Cs,
      Cassinoaovivo: ks,
      ESports: gt,
      Mines: Es,
      FortuneTiger: Ns,
      Aviator: Ws,
      Spaceman: Qs,
      InfiniteBlackjack: ia,
      RoletaBrasileira: da,
    },
    data() {
      return {
        isLoading: !0,
        categories: [
          { name: "Esportes", sub: "", slug: "sports", icon: "Football" },
          { name: "Apostas", sub: "Live", slug: "mybets", icon: "LiveGames" },
          { name: "Cassino", sub: "", slug: "all", icon: "SlotGames" },
          {
            name: "Cassino",
            sub: "Live",
            slug: "ao-vivo",
            icon: "Cassinoaovivo",
          },
          { name: "E-Sports", sub: "esports", icon: "ESports" },
          { name: "Mines", sub: "", slug: "mines", icon: "Mines" },
          {
            name: "Fortune",
            sub: "Tiger",
            slug: "fortune-tiger",
            icon: "FortuneTiger",
          },
          { name: "Aviator", sub: "", slug: "aviator", icon: "Aviator" },
          { name: "Spaceman", sub: "", slug: "spaceman", icon: "Spaceman" },
          {
            name: "Blackjack",
            sub: "Live",
            slug: "infinite-blackjack",
            icon: "InfiniteBlackjack",
          },
          {
            name: "Roleta",
            sub: "Live",
            slug: "roleta-brasileira",
            icon: "RoletaBrasileira",
          },
          {
            name: "Futebol",
            sub: "Studio",
            slug: "football",
            icon: "Football",
          },
        ],
        swiperMainBannerEl: {},
        swiperMainBannerOptions: {
          loop: !0,
          slidesPerView: 1,
          speed: 5,
          freeMode: !0,
          autoplay: { delay: 6e3, disableOnIntereaction: !1 },
          navigation: {
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev",
          },
          pagination: { clickable: !0 },
          injectStyles: [
            `
          .swiper-pagination {
            position: absolute;
            height: 5px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding-bottom: 15px;
            z-index: 1;
          }

          .swiper-pagination-bullet {
            background: #fff;
            width: 30px;
            height: 3px;
            border-radius: 0;
          }

          .swiper-pagination-bullet-active {
            background: #fff;
          }
        `,
          ],
        },
        swiperRecommmendedBannerEl: {},
        swiperRecommmendedBannerOptions: {
          slidesPerView: 2,
          freeMode: !0,
          spaceBetween: 12,
          pagination: { clickable: !0 },
          breakpoints: { 640: { slidesPerView: 3 } },
          injectStyles: [
            `
          .swiper-pagination {
            position: absolute;
            height: 5px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            z-index: 1;
          }

          .swiper-pagination-bullet {
            background: #fff;
            width: 30px;
            height: 3px;
            border-radius: 0;
          }

          .swiper-pagination-bullet-active {
            background: #fff;
          }
        `,
          ],
        },
        swiperFeaturedGamesEl: {},
        swiperFeaturedGamesOptions: {
          slidesPerView: 2,
          spaceBetween: 10,
          freeMode: !0,
          navigation: {
            nextEl: ".destaques-games-button-next",
            prevEl: ".destaques-games-button-prev",
          },
          breakpoints: {
            360: { slidesPerView: 2.5 },
            420: { slidesPerView: 2.8, freemode: !0 },
            460: { slidesPerView: 3, freemode: !0 },
            520: { slidesPerView: 4, freemode: !0 },
            690: { slidesPerView: 5, spaceBetween: 22, freemode: !0 },
            1160: { slidesPerView: 6 },
          },
          injectStyles: [
            `
          .swiper-button-disabled {
            opacity: 0.4;
          }
        `,
          ],
        },
        swiperStudiosEl: {},
        swiperStudiosOptions: {
          slidesPerView: "auto",
          spaceBetween: 12,
          navigation: {
            nextEl: ".teste-games-button-next",
            prevEl: ".teste-games-button-prev",
          },
          breakpoints: { 768: { spaceBetween: 22 } },
        },
        banners: null,
        bannersHome: null,
        providers: null,
        featured_games: [],
        studios: [
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/fa97ba3a-e288-4234-ca4c-5f63185c9c00/w=160",
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/4bf9a0ad-268b-463e-4019-dfec32722f00/w=160",
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/431ef7dd-3837-449c-bfdd-690f1ddc0500/w=160",
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/0b77b2e0-fca0-4d89-457b-887c4c2e7300/w=160",
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/8a496f12-2adc-4e04-ee07-a45653fa0600/w=160",
          "https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/664e23b0-c5e5-4d54-d5b9-8f460cc36300/w=160",
        ],
        searchActive: !1,
        onMobile: window.innerWidth < 768,
        mobileSize: 768,
        pggames: [],
      };
    },
    computed: {
      searchGameStore() {
        return Fe();
      },
      modalStore() {
        return nt();
      },
      searchModeStatus() {
        return this.searchGameStore.getSearchModeStatus;
      },
      topNavMenuStore() {
        return De();
      },
      topNav() {
        return this.topNavMenuStore.getTopNavStatus;
      },
      userData() {
        return Ie().user;
      },
      isAuthenticated() {
        return Ie().isAuth;
      },
      setting() {
        return ot().setting;
      },
      overlayStyle() {
        return { "margin-top": `${this.topNavMenuStore.getNavbarHeight}px` };
      },
    },
    async mounted() {
      await this.initializeMethods(),
        (this.swiperMainBannerEl = document.querySelector(".main-banner")),
        (this.swiperRecommmendedBannerEl = document.querySelector(
          ".recommended-banner"
        )),
        (this.swiperStudiosEl = document.querySelector(".studios-slide")),
        this.featured_games.length &&
          ((this.swiperFeaturedGamesEl = document.querySelector(
            ".featured-games-slide"
          )),
          Object.assign(
            this.swiperFeaturedGamesEl,
            this.swiperFeaturedGamesOptions
          ),
          this.swiperFeaturedGamesEl.initialize()),
        Object.assign(this.swiperMainBannerEl, this.swiperMainBannerOptions),
        Object.assign(
          this.swiperRecommmendedBannerEl,
          this.swiperRecommmendedBannerOptions
        ),
        Object.assign(this.swiperStudiosEl, this.swiperStudiosOptions),
        this.swiperMainBannerEl.initialize(),
        this.swiperRecommmendedBannerEl.initialize(),
        this.swiperStudiosEl.initialize(),
        (this.onMobile = window.innerWidth < this.mobileSize),
        window.addEventListener("resize", this.handleResize),
        this.$route.query.code && this.registerToggle();
    },
    unmounted() {
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      toggleOverlay: function () {
        this.searchGameStore.setSearchModeStatus(!1);
      },
      getBanners: async function () {
        const e = this;
        try {
          const s = (await F.get("settings/banners")).data.banners;
          (e.banners = s.filter((o) => o.type === "carousel")),
            (e.bannersHome = s.filter((o) => o.type === "home"));
        } catch (t) {
          console.error(t);
        }
      },
      getAllGames: async function () {
        const e = this;
        try {
          const t = await F.get("games/all");
          t.data !== void 0 && (e.providers = t.data.providers);
        } catch (t) {
          Object.entries(JSON.parse(t.request.responseText)).forEach(
            ([s, o]) => {
              console.log(`${o}`);
            }
          );
        }
      },
      getFeaturedGames: async function () {
        const e = this;
        try {
          const t = await F.get("featured/games");
          e.featured_games = t.data.featured_games;
        } catch (t) {
          Object.entries(JSON.parse(t.request.responseText)).forEach(
            ([s, o]) => {
              console.log(`${o}`);
            }
          );
        }
      },
      initializeMethods: async function () {
        await Promise.all([
          this.getBanners(),
          this.getAllGames(),
          this.getFeaturedGames(),
        ]),
          (this.isLoading = !1);
      },
      handleResize() {
        this.onMobile = window.innerWidth < this.mobileSize;
      },
      registerToggle: function () {
        this.modalStore.setRegisterModalStatus(!0);
      },
    },
  },
  ha = { key: 1 },
  ga = a(
    "div",
    {
      class:
        "custom-pulse mb-6 h-44 w-full rounded-[4px] bg-gray-700 lg:h-[412px]",
    },
    null,
    -1
  ),
  pa = [ga],
  ma = { key: 2, class: "relative mb-6" },
  fa = { class: "main-banner", init: "false", "events-prefix": "swiper-" },
  va = ["href"],
  _a = ["src"],
  wa = a(
    "div",
    {
      class:
        "custom-button-prev group left-3 top-2/4 -translate-y-2/4 2xl:left-4",
    },
    [
      a("i", {
        class:
          "fa-solid fa-chevron-left text-sm text-white group-hover:opacity-70 lg:text-3xl",
      }),
    ],
    -1
  ),
  xa = a(
    "div",
    {
      class:
        "custom-button-next group right-3 top-2/4 -translate-y-2/4 2xl:right-4",
    },
    [
      a("i", {
        class:
          "fa-solid fa-chevron-right text-sm text-white group-hover:opacity-70 lg:text-3xl",
      }),
    ],
    -1
  ),
  Ca = a("div", { class: "swiper-pagination" }, null, -1),
  ba = { class: "px-4 lg:px-0" },
  Sa = { class: "relative z-[70] mb-4 w-full xl:mb-11" },
  ya = { class: "mb-4 xl:mb-11" },
  La = { class: "flex items-start justify-between gap-3 overflow-y-scroll" },
  Ma = {
    class:
      "mb-2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--ci-primary-opacity-color)]",
  },
  ka = {
    class:
      "flex flex-col items-center justify-center text-center text-xs font-bold text-white lg:text-sm",
  },
  Ta = { class: "text-[10px] font-normal lg:text-xs" },
  Aa = { key: 0 },
  Ba = a(
    "div",
    {
      class: "custom-pulse mb-6 h-24 w-full rounded-[4px] bg-gray-700 lg:h-44",
    },
    null,
    -1
  ),
  ja = [Ba],
  Ga = { key: 1, class: "relative mb-6" },
  Ea = {
    class: "recommended-banner",
    init: "false",
    "events-prefix": "swiper-",
  },
  $a = ["href"],
  Va = ["src"],
  Pa = a("div", { class: "swiper-pagination" }, null, -1),
  Oa = { key: 2, class: "mb-8 flex flex-col" },
  Ra = { class: "mb-2 flex w-full items-center justify-between" },
  Na = a(
    "div",
    { class: "flex gap-6" },
    [
      a(
        "h2",
        { class: "text-base font-bold text-white sm:text-xl" },
        "Recomendados"
      ),
      a("div", { class: "hidden items-center gap-4 sm:flex" }, [
        a(
          "div",
          {
            class: H([
              "destaques-games-button-prev",
              "group",
              "destaques-games-button-prev",
            ]),
          },
          [a("i", { class: "fa-solid fa-chevron-left text-sm" })]
        ),
        a(
          "div",
          {
            class: H([
              "destaques-games-button-next",
              "group",
              "destaques-games-button-next",
            ]),
          },
          [a("i", { class: "fa-solid fa-chevron-right text-sm" })]
        ),
      ]),
    ],
    -1
  ),
  Ia = { class: "w-full" },
  Za = {
    class: "featured-games-slide",
    init: "false",
    "events-prefix": "swiper-",
  },
  za = { key: 0, class: "mb-6 grid grid-cols-3 gap-5 lg:grid-cols-6" },
  Ha = { class: "custom-pulse h-40 rounded-[4px] bg-gray-700 lg:h-[190px]" },
  Da = { key: 1 },
  Wa = { key: 0, class: "mb-6 grid grid-cols-3 gap-5 lg:grid-cols-6" },
  qa = { class: "custom-pulse h-24 rounded-[4px] bg-gray-700 lg:h-[190px]" },
  Fa = { key: 1 },
  Xa = { class: "mb-2 flex w-full items-center justify-between" },
  Ua = a(
    "div",
    { class: "flex gap-6" },
    [
      a("h2", { class: "text-xl font-bold text-white" }, "Studios"),
      a("div", { class: "flex items-center gap-4" }, [
        a("div", { class: H(["group", "teste-games-button-prev"]) }, [
          a("i", { class: "fa-solid fa-chevron-left text-sm" }),
        ]),
        a("div", { class: H(["group", "teste-games-button-next"]) }, [
          a("i", { class: "fa-solid fa-chevron-right text-sm" }),
        ]),
      ]),
    ],
    -1
  ),
  Ya = { class: H("studios-slide"), init: "false", "events-prefix": "swiper-" },
  Qa = { class: "h-24 min-w-[170px] max-w-[170px] md:h-28" },
  Ja = {
    class:
      "flex h-full w-full items-center justify-center rounded-[4px] bg-[var(--navtop-color-dark)] p-5",
  },
  Ka = ["src"];
function ei(e, t, s, o, i, n) {
  const m = L("SearchMenuResult"),
    p = L("RouterLink"),
    h = L("CassinoGameCard"),
    d = L("ShowGamesByProvider"),
    g = L("BaseLayout");
  return (
    r(),
    z(g, null, {
      default: A(() => [
        a(
          "div",
          {
            class: H([
              n.topNav ? "mt-[79px] lg:mt-[116px]" : "mt-[48px] lg:mt-20",
              "mx-auto px-0 pb-6 pt-0 lg:max-w-[1140px] lg:px-4 lg:py-12",
            ]),
          },
          [
            n.searchModeStatus
              ? (r(),
                c(
                  "div",
                  {
                    key: 0,
                    style: ze(n.overlayStyle),
                    class:
                      "fixed left-0 top-0 z-[60] h-full w-full bg-black opacity-30",
                    onClick:
                      t[0] ||
                      (t[0] = (...l) =>
                        n.toggleOverlay && n.toggleOverlay(...l)),
                  },
                  null,
                  4
                ))
              : T("", !0),
            i.isLoading ? (r(), c("div", ha, pa)) : T("", !0),
            i.isLoading
              ? T("", !0)
              : (r(),
                c("div", ma, [
                  a("swiper-container", fa, [
                    (r(!0),
                    c(
                      b,
                      null,
                      y(
                        i.banners,
                        (l, f) => (
                          r(),
                          c("swiper-slide", { key: f }, [
                            a("div", null, [
                              a(
                                "a",
                                { href: l.link, class: "h-full w-full" },
                                [
                                  a(
                                    "img",
                                    {
                                      src: "/storage/" + l.image,
                                      class: "h-auto w-full xl:rounded-[4px]",
                                      width: "412",
                                      height: "153",
                                    },
                                    null,
                                    8,
                                    _a
                                  ),
                                ],
                                8,
                                va
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                  wa,
                  xa,
                  Ca,
                ])),
            a("div", ba, [
              a("div", Sa, [M(m)]),
              a("div", ya, [
                a("ul", La, [
                  (r(!0),
                  c(
                    b,
                    null,
                    y(
                      i.categories,
                      (l) => (
                        r(),
                        c(
                          "li",
                          {
                            key: l.id,
                            class:
                              "site-filter-item cursor-pointer hover:opacity-80",
                          },
                          [
                            M(
                              p,
                              {
                                to: {
                                  name: "casinosAll",
                                  params: { provider: "all", category: l.slug },
                                },
                                "active-class": "filter-active",
                                class:
                                  "flex flex-col items-center justify-center",
                              },
                              {
                                default: A(() => [
                                  a("div", Ma, [(r(), z(rt(l.icon)))]),
                                  a("span", ka, [
                                    X(E(l.name) + " ", 1),
                                    a("span", Ta, E(l.sub), 1),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["to"]
                            ),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              i.isLoading ? (r(), c("div", Aa, ja)) : T("", !0),
              i.isLoading
                ? T("", !0)
                : (r(),
                  c("div", Ga, [
                    a("swiper-container", Ea, [
                      (r(!0),
                      c(
                        b,
                        null,
                        y(
                          i.bannersHome,
                          (l, f) => (
                            r(),
                            c("swiper-slide", { key: f }, [
                              a("div", null, [
                                a(
                                  "a",
                                  { href: l.link, class: "h-full w-full" },
                                  [
                                    a(
                                      "img",
                                      {
                                        src: "/storage/" + l.image,
                                        class: "h-auto w-full xl:rounded-[4px]",
                                        width: "190",
                                        height: "90",
                                      },
                                      null,
                                      8,
                                      Va
                                    ),
                                  ],
                                  8,
                                  $a
                                ),
                              ]),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                    Pa,
                  ])),
              i.featured_games.length
                ? (r(),
                  c("div", Oa, [
                    a("div", Ra, [
                      Na,
                      a("div", null, [
                        M(
                          p,
                          {
                            to: {
                              name: "casinosAll",
                              params: { provider: "all", category: "all" },
                            },
                            class:
                              "inline-block rounded-full bg-[var(--ci-primary-opacity-color)] px-2 text-[10px] font-medium text-[var(--ci-primary-color)]",
                          },
                          { default: A(() => [X(" Ver todos ")]), _: 1 }
                        ),
                      ]),
                    ]),
                    a("div", Ia, [
                      a("swiper-container", Za, [
                        (r(!0),
                        c(
                          b,
                          null,
                          y(
                            i.featured_games,
                            (l, f) => (
                              r(),
                              c("swiper-slide", { key: f }, [
                                M(
                                  h,
                                  {
                                    index: f,
                                    title: l.game_name,
                                    cover: l.cover,
                                    gamecode: l.game_code,
                                    type: l.distribution,
                                    game: l,
                                  },
                                  null,
                                  8,
                                  [
                                    "index",
                                    "title",
                                    "cover",
                                    "gamecode",
                                    "type",
                                    "game",
                                  ]
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : T("", !0),
              a("div", null, [
                i.isLoading
                  ? (r(),
                    c("div", za, [
                      (r(),
                      c(
                        b,
                        null,
                        y(9, (l) => a("div", Ha)),
                        64
                      )),
                    ]))
                  : (r(),
                    c("div", Da, [
                      (r(!0),
                      c(
                        b,
                        null,
                        y(
                          i.providers,
                          (l, f) => (
                            r(),
                            z(
                              d,
                              { provider: l, index: f, class: "mb-8" },
                              null,
                              8,
                              ["provider", "index"]
                            )
                          )
                        ),
                        256
                      )),
                    ])),
              ]),
              a("div", null, [
                i.isLoading
                  ? (r(),
                    c("div", Wa, [
                      (r(),
                      c(
                        b,
                        null,
                        y(9, (l) => a("div", qa)),
                        64
                      )),
                    ]))
                  : (r(),
                    c("div", Fa, [
                      a("div", Xa, [
                        Ua,
                        a("div", null, [
                          M(
                            p,
                            {
                              to: {
                                name: "casinosAll",
                                params: {
                                  provider: "all",
                                  category: "providers",
                                },
                              },
                              class:
                                "inline-block rounded-full bg-[var(--ci-primary-opacity-color)] px-2 text-[10px] font-medium text-[var(--ci-primary-color)]",
                            },
                            { default: A(() => [X(" Ver todos ")]), _: 1 }
                          ),
                        ]),
                      ]),
                      a("div", null, [
                        a("swiper-container", Ya, [
                          (r(!0),
                          c(
                            b,
                            null,
                            y(
                              i.studios,
                              (l) => (
                                r(),
                                c("swiper-slide", Qa, [
                                  a("div", Ja, [
                                    a(
                                      "img",
                                      { src: l, width: "130", height: "60" },
                                      null,
                                      8,
                                      Ka
                                    ),
                                  ]),
                                ])
                              )
                            ),
                            256
                          )),
                        ]),
                      ]),
                    ])),
              ]),
            ]),
          ],
          2
        ),
      ]),
      _: 1,
    })
  );
}
const ci = B(ua, [["render", ei]]);
export { ci as default };
