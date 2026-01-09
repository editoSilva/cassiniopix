import {
    u as S,
    C as R,
    B as W,
    c as E,
    S as j,
    N as H,
    i as P,
  } from "./CookiesComponent-3cc93cf3.js";
  import {
    _ as x,
    T as U,
    g as M,
    k as i,
    l as r,
    m as s,
    A as y,
    u as c,
    s as v,
    K as w,
    j as a,
    F as b,
    x as C,
    y as m,
    J as k,
    $ as Y,
    N as A,
    z as g,
    a0 as J,
    D as p,
    Z as u,
    W as K,
  } from "./app-a41775fa.js";
  import {
    R as O,
    L as Z,
    F as q,
    D as I,
    W as Q,
  } from "./WithdrawModal-008a788d.js";
  const X = {
      props: ["mission", "index"],
      components: {},
      data() {
        return { isLoading: !1, missions: null };
      },
      setup(e) {
        return {};
      },
      computed: {},
      mounted() {},
      methods: {
        acceptMission: async function (e) {
          const t = this,
            n = U();
          return await M.post("missionsusers", { mission_id: e })
            .then(async (h) => {
              h.data.status &&
                (t.$emit("updateMission"),
                n.success(t.$t("Mission accepted successfully")));
            })
            .catch((h) => {});
        },
        stripHTML: function (e) {
          var t = new DOMParser().parseFromString(e, "text/html");
          return t.body.textContent || "";
        },
      },
      created() {},
      watch: {},
    },
    tt = { class: "mr-2 h-auto w-[100px]" },
    et = { class: "w-full flex-col" },
    st = { class: "text-2xl font-bold" },
    ot = { class: "text-sm text-gray-400" },
    it = { class: "text-2xl font-extrabold italic text-yellow-400" },
    nt = { class: "flex w-[150px] items-center px-3" },
    at = {
      key: 1,
      class:
        "ui-button-black mr-3 flex items-center justify-center rounded text-center",
      style: { width: "100px" },
    };
  function rt(e, t, n, h, d, o) {
    return (
      i(),
      r(
        "div",
        {
          class: "mb-3 flex h-[130px] w-full rounded-xl p-4 dark:bg-gray-700",
          key: n.index,
        },
        [
          s("div", tt, [
            s(
              "div",
              {
                class: "pie",
                style: y("--percentage: " + n.mission.myRoundsPercentage),
              },
              c(n.mission.myRounds),
              5
            ),
          ]),
          s("div", et, [
            s("h1", st, c(n.mission.challenge_name), 1),
            s(
              "div",
              ot,
              c(
                e.state.limitCharacters(
                  o.stripHTML(n.mission.challenge_description),
                  80
                )
              ),
              1
            ),
            s(
              "h2",
              it,
              c(
                e.state.currencyFormat(
                  parseFloat(n.mission.challenge_bonus),
                  n.mission.challenge_currency
                )
              ),
              1
            ),
          ]),
          s("div", nt, [
            n.mission.haveMission
              ? (i(), r("button", at, c(e.$t("Active")), 1))
              : (i(),
                r(
                  "button",
                  {
                    key: 0,
                    onClick:
                      t[0] ||
                      (t[0] = v(
                        (l) => o.acceptMission(n.mission.id),
                        ["prevent"]
                      )),
                    class:
                      "ui-button-blue mr-3 flex items-center justify-center rounded text-center",
                    style: { width: "100px" },
                  },
                  c(e.$t("Accept")),
                  1
                )),
          ]),
        ]
      )
    );
  }
  const L = x(X, [["render", rt]]),
    lt = {
      props: [],
      components: { MissionCard: L },
      data() {
        return { isLoading: !1, missions: null };
      },
      setup(e) {
        return {};
      },
      computed: {
        isAuthenticated() {
          return w().isAuth;
        },
      },
      mounted() {},
      methods: {
        refreshData: function () {
          this.getMissions();
        },
        getMissions: function () {
          const e = this;
          (e.isLoading = !0),
            M.get("missions?period=daily")
              .then((t) => {
                (e.missions = t.data.missions), (e.isLoading = !1);
              })
              .catch((t) => {
                e.isLoading = !1;
              });
        },
      },
      created() {
        this.isAuthenticated && this.getMissions();
      },
      watch: {
        isAuthenticated(e, t) {
          this.getMissions();
        },
      },
    },
    ct = { key: 0, class: "" },
    dt = { key: 1, class: "flex w-full flex-col" },
    ut = {
      key: 1,
      class:
        "flex min-h-[250px] w-full flex-col items-center justify-center p-4 text-center",
    },
    ht = { class: "text-2xl" };
  function mt(e, t, n, h, d, o) {
    const l = a("MissionCard");
    return d.isLoading
      ? (i(), r("div", ct))
      : (i(),
        r("div", dt, [
          o.isAuthenticated
            ? (i(!0),
              r(
                b,
                { key: 0 },
                C(
                  d.missions,
                  (f, _) => (
                    i(),
                    m(
                      l,
                      { mission: f, index: _, onUpdateMission: o.refreshData },
                      null,
                      8,
                      ["mission", "index", "onUpdateMission"]
                    )
                  )
                ),
                256
              ))
            : (i(), r("div", ut, [s("h1", ht, c(e.$t("Log in to view")), 1)])),
        ]));
  }
  const pt = x(lt, [["render", mt]]),
    gt = {
      props: [],
      components: { MissionCard: L },
      data() {
        return { isLoading: !1, missions: null };
      },
      setup(e) {
        return {};
      },
      computed: {
        isAuthenticated() {
          return w().isAuth;
        },
      },
      mounted() {},
      methods: {
        refreshData: function () {
          this.getMissions();
        },
        getMissions: function () {
          const e = this;
          (e.isLoading = !0),
            M.get("missions?period=week")
              .then((t) => {
                (e.missions = t.data.missions), (e.isLoading = !1);
              })
              .catch((t) => {
                e.isLoading = !1;
              });
        },
      },
      created() {
        this.isAuthenticated && this.getMissions();
      },
      watch: {
        isAuthenticated(e, t) {
          this.getMissions();
        },
      },
    },
    ft = { key: 0, class: "" },
    _t = { key: 1, class: "flex max-h-[500px] w-full flex-col overflow-y-auto" },
    xt = {
      key: 1,
      class:
        "flex min-h-[250px] w-full flex-col items-center justify-center p-4 text-center",
    },
    wt = { class: "text-2xl" };
  function vt(e, t, n, h, d, o) {
    const l = a("MissionCard");
    return d.isLoading
      ? (i(), r("div", ft))
      : (i(),
        r("div", _t, [
          o.isAuthenticated
            ? (i(!0),
              r(
                b,
                { key: 0 },
                C(
                  d.missions,
                  (f, _) => (
                    i(),
                    m(
                      l,
                      { mission: f, index: _, onUpdateMission: o.refreshData },
                      null,
                      8,
                      ["mission", "index", "onUpdateMission"]
                    )
                  )
                ),
                256
              ))
            : (i(), r("div", xt, [s("h1", wt, c(e.$t("Log in to view")), 1)])),
        ]));
  }
  const Mt = x(gt, [["render", vt]]),
    yt = {
      name: "GameAuthMobile",
      data() {
        return {};
      },
      computed: {
        topNavMenuStore() {
          return S();
        },
        modalStore() {
          return k();
        },
        isAuthenticated() {
          return w().isAuth;
        },
        casinoGameAuthStore() {
          return Y();
        },
        getCasinoGame() {
          return this.casinoGameAuthStore.getCasinoGameAuth;
        },
        getCasinoVisibility() {
          return this.casinoGameAuthStore.getVisibility;
        },
        isMobile() {
          return this.casinoGameAuthStore.getMobile;
        },
      },
      mounted() {
        this.casinoGameAuthStore.setMobile(window.innerWidth < 1024),
          window.addEventListener("resize", this.handleResize);
      },
      beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
      },
      methods: {
        close(e) {
          e.target.dataset.action === "close" &&
            (this.casinoGameAuthStore.setCasinoGameAuth({
              title: "",
              provider: "",
              cover: "",
            }),
            this.casinoGameAuthStore.setVisibility(!1));
        },
        loginToggle() {
          this.modalStore.setLoginModalStatus(!0),
            this.casinoGameAuthStore.setVisibility(!1);
        },
        handleResize() {
          this.casinoGameAuthStore.setMobile(!1);
        },
      },
    },
    bt = s(
      "button",
      { "data-action": "close", type: "button", class: "self-end p-2" },
      [
        s(
          "svg",
          {
            "data-action": "close",
            height: "26",
            viewBox: "0 0 320 512",
            width: "26",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            s("path", {
              "data-action": "close",
              d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z",
              fill: "#fff",
            }),
          ]
        ),
      ],
      -1
    ),
    St = { class: "bg-[#212425] px-4 py-6" },
    Ct = { class: "mb-6 flex items-center gap-4" },
    kt = {
      class: "h-[150px] w-[150px] rounded-md",
      style: { overflow: "hidden" },
    },
    At = ["src"],
    Lt = { class: "flex-1" },
    Vt = { class: "text-lg font-semibold text-white" },
    zt = { class: "text-sm text-white text-opacity-50" },
    Bt = s(
      "svg",
      {
        height: "14",
        viewBox: "0 0 512 512",
        width: "14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        s("path", {
          d: "M344.7 273.5l-144.1 136c-6.975 6.578-17.2 8.375-26 4.594C165.8 410.3 160.1 401.6 160.1 392V320H32.02C14.33 320 0 305.7 0 288V224c0-17.67 14.33-32 32.02-32h128.1V120c0-9.578 5.707-18.25 14.51-22.05c8.803-3.781 19.03-1.984 26 4.594l144.1 136C354.3 247.6 354.3 264.4 344.7 273.5z",
          fill: "currentColor",
        }),
        s("path", {
          d: "M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z",
          fill: "currentColor",
          opacity: "0.4",
        }),
      ],
      -1
    ),
    Gt = s(
      "span",
      { class: "text-sm font-semibold" },
      "Entre ou registre-se",
      -1
    ),
    $t = [Bt, Gt];
  function Tt(e, t, n, h, d, o) {
    return !o.isAuthenticated && o.isMobile
      ? (i(),
        r(
          "div",
          {
            key: 0,
            class: A([
              o.getCasinoVisibility ? "flex" : "hidden",
              "fixed bottom-0 left-0 z-[100] h-full w-full flex-col justify-end bg-black bg-opacity-50 pb-16",
            ]),
            style: y({ "padding-top": `${o.topNavMenuStore.getNavbarHeight}px` }),
            "data-action": "close",
            onClick:
              t[1] || (t[1] = v((...l) => o.close && o.close(...l), ["prevent"])),
          },
          [
            bt,
            s("div", St, [
              s("div", Ct, [
                s("div", kt, [
                  s(
                    "img",
                    {
                      src: "/storage/" + o.getCasinoGame.cover || "",
                      class: "object-cover",
                    },
                    null,
                    8,
                    At
                  ),
                ]),
                s("div", Lt, [
                  s("h2", Vt, c(o.getCasinoGame.title || ""), 1),
                  s("p", zt, c(o.getCasinoGame.provider || ""), 1),
                ]),
              ]),
              s(
                "button",
                {
                  type: "button",
                  class:
                    "flex w-full items-center justify-center gap-2 rounded bg-[var(--ci-primary-color)] py-3 text-gray-700",
                  onClick:
                    t[0] ||
                    (t[0] = v(
                      (...l) => o.loginToggle && o.loginToggle(...l),
                      ["prevent"]
                    )),
                },
                $t
              ),
            ]),
          ],
          6
        ))
      : g("", !0);
  }
  const Nt = x(yt, [["render", Tt]]),
    Dt = {
      components: {
        MissionWeekly: Mt,
        MissionDaily: pt,
        CookiesComponent: R,
        BottomNavComponent: W,
        FooterComponent: E,
        SideBarComponent: j,
        NavTopComponent: H,
        RegisterModal: O,
        LoginModal: Z,
        ForgotPasswordModal: q,
        DepositModal: I,
        WithdrawModal: Q,
        GameAuthMobile: Nt,
      },
      data() {
        return {
          onMobile: window.innerWidth < 1024,
          mobileSize: 1024,
          scrollButtonVisibility: !1,
        };
      },
      computed: {
        modalStore() {
          return k();
        },
        topNavMenuStore() {
          return S();
        },
        sidebarMenuStore() {
          return J();
        },
        mainContentMarginStyle() {
          const e = this.topNavMenuStore.getNavbarHeight,
            t = this.sidebarMenuStore.getSidebarWidth;
          return {
            "margin-top": `${e}px`,
            "padding-left": this.onMobile ? "0px" : `${t}px`,
          };
        },
        isAuthenticated() {
          return w().isAuth;
        },
      },
      mounted() {
        P(),
          window.scrollY >= 400 && (this.scrollButtonVisibility = !0),
          (this.onMobile = window.innerWidth < this.mobileSize),
          window.addEventListener("resize", this.handleResize),
          window.addEventListener("scroll", this.handleScroll);
      },
      unmounted() {
        window.removeEventListener("resize", this.handleResize),
          window.removeEventListener("scroll", this.handleScroll);
      },
      methods: {
        handleResize() {
          this.onMobile = window.innerWidth < this.mobileSize;
        },
        handleScroll() {
          window.scrollY >= 400
            ? (this.scrollButtonVisibility = !0)
            : (this.scrollButtonVisibility = !1);
        },
        scrollToTop() {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      },
    },
    Ft = { class: "relative" },
    Rt = s(
      "div",
      null,
      [
        s(
          "svg",
          {
            height: "12",
            viewBox: "0 0 384 512",
            width: "12",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            s("path", {
              d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z",
              fill: "#fff",
            }),
          ]
        ),
      ],
      -1
    ),
    Wt = s("span", { class: "text-xs text-white" }, "Voltar ao topo", -1),
    Et = [Rt, Wt];
  function jt(e, t, n, h, d, o) {
    const l = a("LoginModal"),
      f = a("ForgotPasswordModal"),
      _ = a("RegisterModal"),
      V = a("DepositModal"),
      z = a("WithdrawModal"),
      B = a("NavTopComponent"),
      G = a("SideBarComponent"),
      $ = a("FooterComponent"),
      T = a("BottomNavComponent"),
      N = a("CookiesComponent"),
      D = a("GameAuthMobile");
    return (
      i(),
      r(
        b,
        null,
        [
          o.modalStore.getLoginModalStatus ? (i(), m(l, { key: 0 })) : g("", !0),
          o.modalStore.getForgotPasswordModalStatus
            ? (i(), m(f, { key: 1 }))
            : g("", !0),
          o.modalStore.getRegisterModalStatus
            ? (i(), m(_, { key: 2 }))
            : g("", !0),
          o.modalStore.getDepositModalStatus
            ? (i(), m(V, { key: 3 }))
            : g("", !0),
          o.modalStore.getWithdrawModalStatus
            ? (i(), m(z, { key: 4 }))
            : g("", !0),
          p(B, { simple: !1 }),
          t[0] || (u(-1), (t[0] = p(G)), u(1), t[0]),
          s(
            "div",
            { style: y(o.mainContentMarginStyle) },
            [
              s("div", Ft, [
                s(
                  "div",
                  {
                    class: A([
                      d.scrollButtonVisibility ? "flex" : "hidden",
                      "fixed bottom-20 left-2/4 z-[50] -translate-x-2/4 cursor-pointer items-center justify-center gap-2 rounded-full border border-[var(--ci-primary-color)] bg-black bg-opacity-80 px-2 py-1 hover:brightness-110 lg:bottom-5 lg:translate-x-2/4 lg:px-4 lg:py-2",
                    ]),
                    onClick:
                      t[1] ||
                      (t[1] = (...F) => o.scrollToTop && o.scrollToTop(...F)),
                  },
                  Et,
                  2
                ),
                K(e.$slots, "default"),
                t[2] || (u(-1), (t[2] = p($)), u(1), t[2]),
                t[3] || (u(-1), (t[3] = p(T)), u(1), t[3]),
              ]),
            ],
            4
          ),
          t[4] || (u(-1), (t[4] = p(N)), u(1), t[4]),
          p(D),
        ],
        64
      )
    );
  }
  const Yt = x(Dt, [["render", jt]]);
  export { Yt as B };
  