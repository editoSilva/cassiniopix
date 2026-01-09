import {
    C as M,
    B as S,
    c as h,
    S as _,
    N as w,
    i as v,
    u as C,
  } from "./CookiesComponent-3cc93cf3.js";
  import {
    R as b,
    L as N,
    F as f,
    D as k,
    W as y,
  } from "./WithdrawModal-008a788d.js";
  import {
    _ as B,
    o as z,
    J as F,
    a0 as L,
    j as e,
    k as a,
    l as R,
    y as s,
    z as r,
    D as i,
    Z as d,
    m as W,
    W as D,
    A as x,
    F as T,
  } from "./app-a41775fa.js";
  const P = {
    props: [],
    components: {
      CookiesComponent: M,
      BottomNavComponent: S,
      FooterComponent: h,
      SideBarComponent: _,
      NavTopComponent: w,
      RegisterModal: b,
      LoginModal: N,
      ForgotPasswordModal: f,
      DepositModal: k,
      WithdrawModal: y,
    },
    data() {
      return {
        logo: "/assets/images/logo_verde.png",
        isLoading: !1,
        onMobile: window.innerWidth < 1024,
      };
    },
    setup(n) {
      return (
        z(() => {
          v();
        }),
        {}
      );
    },
    computed: {
      modalStore() {
        return F();
      },
      topNavMenuStore() {
        return C();
      },
      sidebarMenuStore() {
        return L();
      },
      mainContentMarginStyle() {
        const n = this.topNavMenuStore.getNavbarHeight,
          o = this.sidebarMenuStore.getSidebarWidth;
        return {
          "margin-top": `${n}px`,
          "padding-left": this.onMobile ? "0px" : `${o}px`,
        };
      },
    },
    mounted() {
      (this.onMobile = window.innerWidth < this.mobileSize),
        window.addEventListener("resize", this.handleResize);
    },
    unmounted() {
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      handleResize() {
        this.onMobile = window.innerWidth < this.mobileSize;
      },
    },
    watch: {},
  };
  function E(n, o, V, G, H, t) {
    const l = e("LoginModal"),
      m = e("ForgotPasswordModal"),
      p = e("RegisterModal"),
      u = e("DepositModal"),
      g = e("NavTopComponent"),
      c = e("SideBarComponent");
    return (
      a(),
      R(
        T,
        null,
        [
          t.modalStore.getLoginModalStatus ? (a(), s(l, { key: 0 })) : r("", !0),
          t.modalStore.getForgotPasswordModalStatus
            ? (a(), s(m, { key: 1 }))
            : r("", !0),
          t.modalStore.getRegisterModalStatus
            ? (a(), s(p, { key: 2 }))
            : r("", !0),
          t.modalStore.getDepositModalStatus
            ? (a(), s(u, { key: 3 }))
            : r("", !0),
          i(g, { simple: !1 }),
          o[0] || (d(-1), (o[0] = i(c)), d(1), o[0]),
          W(
            "div",
            { style: x(t.mainContentMarginStyle) },
            [D(n.$slots, "default")],
            4
          ),
        ],
        64
      )
    );
  }
  const J = B(P, [["render", E]]);
  export { J as G };
  