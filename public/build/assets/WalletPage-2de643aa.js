import {
    _ as w,
    j as v,
    k as d,
    l as p,
    m as t,
    u as i,
    D as x,
    E as m,
    F as f,
    R as S,
    J as C,
    T as b,
    g as u,
    y as L,
    N as g,
    x as _,
    G as y,
    z as W,
    B as M,
    C as D,
  } from "./app-a41775fa.js";
  import { B as N } from "./BaseLayout-e04ce02c.js";
  import { M as P, u as j } from "./CookiesComponent-3cc93cf3.js";
  import "./WithdrawModal-008a788d.js";
  const O = {
      props: [],
      components: {},
      data() {
        return { isLoading: !1 };
      },
      setup(s) {
        return {};
      },
      computed: {},
      mounted() {},
      methods: {},
      watch: {},
    },
    $ = { class: "mb-3 text-2xl font-bold" },
    B = { class: "w-full rounded bg-gray-100 shadow dark:bg-gray-700" },
    V = { class: "mb-3 w-full" },
    q = t(
      "span",
      { class: "w-8" },
      [t("i", { class: "fa-light fa-wallet" })],
      -1
    ),
    E = { class: "mb-3 w-full" },
    J = t(
      "span",
      { class: "w-8" },
      [t("i", { class: "fa-sharp fa-light fa-piggy-bank" })],
      -1
    ),
    F = { class: "mb-3 w-full" },
    z = t(
      "span",
      { class: "w-8" },
      [t("i", { class: "fa-light fa-money-simple-from-bracket" })],
      -1
    ),
    R = { class: "w-full" },
    I = t(
      "span",
      { class: "w-8" },
      [t("i", { class: "fa-solid fa-chart-mixed" })],
      -1
    );
  function H(s, e, a, n, o, l) {
    const c = v("RouterLink");
    return (
      d(),
      p(
        f,
        null,
        [
          t("h1", $, i(s.$t("Wallet")), 1),
          t("div", B, [
            t("ul", null, [
              t("li", V, [
                x(
                  c,
                  {
                    to: { name: "profileWallet" },
                    "active-class": "wallet-active",
                    class:
                      "flex w-full rounded bg-gray-200 px-4 py-3 transition duration-700 hover:bg-gray-300/20 dark:bg-gray-800/50 hover:dark:bg-gray-900",
                  },
                  {
                    default: m(() => [q, t("span", null, i(s.$t("Balance")), 1)]),
                    _: 1,
                  }
                ),
              ]),
              t("li", E, [
                x(
                  c,
                  {
                    to: { name: "profileDeposit" },
                    "active-class": "wallet-active",
                    class:
                      "flex w-full rounded bg-gray-200 px-4 py-3 transition duration-700 hover:bg-gray-300/20 dark:bg-gray-800/50 hover:dark:bg-gray-900",
                  },
                  {
                    default: m(() => [J, t("span", null, i(s.$t("Deposit")), 1)]),
                    _: 1,
                  }
                ),
              ]),
              t("li", F, [
                x(
                  c,
                  {
                    to: { name: "profileWithdraw" },
                    "active-class": "wallet-active",
                    class:
                      "flex w-full rounded bg-gray-200 px-4 py-3 transition duration-700 hover:bg-gray-300/20 dark:bg-gray-800/50 hover:dark:bg-gray-900",
                  },
                  {
                    default: m(() => [
                      z,
                      t("span", null, i(s.$t("Withdraw")), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              t("li", R, [
                x(
                  c,
                  {
                    to: { name: "profileTransactions" },
                    "active-class": "wallet-active",
                    class:
                      "flex w-full rounded bg-gray-200 px-4 py-3 transition duration-700 hover:bg-gray-300/20 dark:bg-gray-800/50 hover:dark:bg-gray-900",
                  },
                  {
                    default: m(() => [
                      I,
                      t("span", null, i(s.$t("Transactions")), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
        ],
        64
      )
    );
  }
  const G = w(O, [["render", H]]);
  const Q = {
      props: [],
      components: {
        WalletSideMenu: G,
        BaseLayout: N,
        RouterLink: S,
        MakeDeposit: P,
      },
      data() {
        return {
          isLoading: !1,
          isLoadingWallet: !0,
          wallet: null,
          mywallets: null,
          deposits: null,
          withdraws: null,
          transactions: null,
          loadingTable: !0,
          currentPage: 1,
          currentTab: 1,
          tabs: ["Depósitos", "Saques"],
        };
      },
      setup(s) {
        return {};
      },
      computed: {
        modalStore() {
          return C();
        },
        topNav() {
          return j().getTopNavStatus;
        },
      },
      mounted() {},
      methods: {
        setWallet: function (s) {
          const e = this,
            a = b();
          (e.isLoadingWallet = !0),
            u
              .post("profile/mywallet/" + s, {})
              .then((n) => {
                e.getMyWallet(),
                  (e.isLoadingWallet = !1),
                  window.location.reload();
              })
              .catch((n) => {
                Object.entries(JSON.parse(n.request.responseText)).forEach(
                  ([o, l]) => {
                    a.error(`${l}`);
                  }
                ),
                  (e.isLoadingWallet = !1);
              });
        },
        getWallet: function () {
          const s = this,
            e = b();
          (s.isLoadingWallet = !0),
            u
              .get("profile/wallet")
              .then((a) => {
                (s.wallet = a.data.wallet), (s.isLoadingWallet = !1);
              })
              .catch((a) => {
                Object.entries(JSON.parse(a.request.responseText)).forEach(
                  ([n, o]) => {
                    e.error(`${o}`);
                  }
                ),
                  (s.isLoadingWallet = !1);
              });
        },
        getMyWallet: function () {
          const s = this,
            e = b();
          u.get("profile/mywallet")
            .then((a) => {
              s.mywallets = a.data.wallets;
            })
            .catch((a) => {
              Object.entries(JSON.parse(a.request.responseText)).forEach(
                ([n, o]) => {
                  e.error(`${o}`);
                }
              );
            });
        },
        getDeposits: async function () {
          this.isLoading = !0;
          try {
            const s = await u.get("wallet/deposit");
            return (
              (this.deposits = s.data.deposits),
              (this.isLoading = !1),
              s.data.deposits
            );
          } catch (s) {
            Object.entries(JSON.parse(s.request.responseText)).forEach(
              ([e, a]) => {
                console.log(`${a}`), (this.isLoading = !1);
              }
            );
          }
        },
        getWithdraws: async function () {
          this.isLoading = !0;
          try {
            const s = await u.get("wallet/withdraw");
            return (
              (this.withdraws = s.data.withdraws),
              (this.isLoading = !1),
              s.data.withdraws
            );
          } catch (s) {
            Object.entries(JSON.parse(s.request.responseText)).forEach(
              ([e, a]) => {
                console.log(`${a}`);
              }
            ),
              (this.isLoading = !1);
          }
        },
        getData: async function (s, e) {
          if (
            ((this.loadingTable = !0), (this.currentPage = 1), s === "deposits")
          ) {
            (this.currentTab = e),
              (this.transactions = await this.getDeposits()),
              (this.loadingTable = !1);
            return;
          }
          if (s === "withdraws") {
            (this.currentTab = e),
              (this.transactions = await this.getWithdraws()),
              (this.loadingTable = !1);
            return;
          }
        },
        dateFormat(s) {
          const e = new Date(s),
            a = e.getFullYear(),
            n = String(e.getMonth() + 1).padStart(2, "0"),
            o = String(e.getDate()).padStart(2, "0"),
            l = e.getHours(),
            c = e.getMinutes(),
            r = e.getSeconds(),
            k = c < 10 ? `0${c}` : c,
            T = r < 10 ? `0${r}` : r;
          return `${o}/${n}/${a}, ${l}:${k}:${T}`;
        },
        getNextPage: async function () {
          var e;
          if (
            ((e = this.transactions) == null ? void 0 : e.next_page_url) !== null
          )
            try {
              const a = await u.get(this.transactions.next_page_url),
                n = Object.keys(a.data)[0];
              (this.transactions = a.data[n]), (this.loadingTable = !1);
            } catch (a) {
              Object.entries(JSON.parse(a.request.responseText)).forEach(
                ([n, o]) => {
                  console.log(`${o}`);
                }
              ),
                (this.loadingTable = !1);
            }
        },
        getPreviousPage: async function () {
          var e;
          if (
            ((e = this.transactions) == null ? void 0 : e.prev_page_url) !== null
          )
            try {
              const a = await u.get(this.transactions.prev_page_url),
                n = Object.keys(a.data)[0];
              (this.transactions = a.data[n]), (this.loadingTable = !1);
            } catch (a) {
              Object.entries(JSON.parse(a.request.responseText)).forEach(
                ([n, o]) => {
                  console.log(`${o}`);
                }
              ),
                (this.loadingTable = !1);
            }
        },
        openDepositModal: function () {
          this.modalStore.setDepositModalStatus(!0);
        },
        openWithdrawModal: function () {
          this.modalStore.setWithdrawModalStatus(!0);
        },
      },
      async created() {
        this.getWallet(),
          this.getMyWallet(),
          this.getWithdraws(),
          (this.transactions = await this.getDeposits()),
          (this.loadingTable = !1);
      },
      watch: {},
    },
    h = (s) => (M("data-v-b13c2219"), (s = s()), D(), s),
    Y = { key: 0, class: "my-8 grid w-full grid-cols-1" },
    A = { class: "mb-8 grid grid-cols-1 lg:grid-cols-2" },
    K = { class: "relative rounded bg-[#323637] p-5 pb-7" },
    U = h(() => t("span", { class: "mb-2 block text-base" }, "BRL", -1)),
    X = {
      class: "text-wrap mb-5 block text-3xl font-medium text-white sm:text-5xl",
    },
    Z = { class: "flex items-center gap-2" },
    tt = h(() =>
      t(
        "div",
        { class: "absolute right-6 top-6" },
        [
          t(
            "svg",
            {
              opacity: "0.2",
              class: "h-9 w-9 sm:h-11 sm:w-11",
              viewBox: "0 0 512 512",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              t("path", {
                d: "M48 127.1L448 128C448.4 128 448.9 128 449.3 128C460.5 128.3 470.9 131.6 480 136.9V136.6C499.1 147.6 512 168.3 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V80C0 106.5 21.49 128 48 128L48 127.1zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z",
                fill: "currentColor",
              }),
              t("path", {
                d: "M0 80C0 53.49 21.49 32 48 32H432C458.5 32 480 53.49 480 80V136.6C470.6 131.1 459.7 128 448 128L48 128C21.49 128 0 106.5 0 80V80z",
                fill: "currentColor",
                opacity: "0.4",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    et = { class: "w-full rounded bg-[#323637] p-5" },
    st = h(() =>
      t(
        "div",
        { class: "mb-5 flex flex-col gap-4 sm:flex-row sm:items-center" },
        [
          t(
            "h1",
            {
              class:
                "text-lg font-bold text-[var(--ci-primary-color)] md:text-2xl",
            },
            "Minhas transações"
          ),
        ],
        -1
      )
    ),
    at = { class: "mb-6 flex items-center gap-3" },
    ot = { key: 0 },
    rt = { class: "grid grid-cols-4 grid-rows-6 gap-3" },
    lt = { class: "custom-pulse h-8 rounded-[4px] bg-gray-700" },
    nt = { key: 1 },
    it = { class: "relative overflow-x-auto" },
    ct = { class: "w-full text-left rtl:text-right" },
    dt = h(() =>
      t(
        "thead",
        {
          class:
            "border-b-2 border-[var(--ci-primary-color)] text-base text-white",
        },
        [
          t("tr", null, [
            t(
              "th",
              {
                scope: "col",
                class:
                  "px-2 py-3 text-sm font-normal sm:w-20 sm:text-base md:w-36",
              },
              "Tipo"
            ),
            t(
              "th",
              {
                scope: "col",
                class: "px-2 py-3 text-sm font-normal sm:text-base",
              },
              "Quantidade"
            ),
            t(
              "th",
              {
                scope: "col",
                class: "px-2 py-3 text-sm font-normal sm:text-base",
              },
              "Status"
            ),
            t(
              "th",
              {
                scope: "col",
                class: "px-2 py-3 text-sm font-normal sm:text-base",
              },
              "Data"
            ),
          ]),
        ],
        -1
      )
    ),
    pt = { class: "w-4 px-2" },
    ut = h(() =>
      t(
        "path",
        {
          d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z",
          fill: "#000",
        },
        null,
        -1
      )
    ),
    gt = [ut],
    ht = {
      scope: "row",
      class: "whitespace-nowrap p-2 text-sm font-normal text-white sm:text-base",
    },
    mt = { class: "p-2 text-white" },
    xt = { class: "font-semibold" },
    bt = {
      class: "whitespace-nowrap p-2 text-sm font-normal text-white sm:text-base",
    },
    ft = {
      class:
        "flex-column flex flex-wrap items-center justify-center pt-4 md:flex-row md:flex-nowrap md:justify-between",
      "aria-label": "Table navigation",
    },
    _t = {
      class:
        "mb-4 block w-full text-center text-xs font-normal md:mb-0 md:inline md:w-auto md:text-left",
    },
    yt = { class: "inline-flex text-sm" },
    wt = { class: "rounded-s-[4px] bg-gray-800 p-[1px]" },
    vt = ["disabled"],
    kt = { class: "bg-gray-800 p-[1px]" },
    Tt = {
      class:
        "ms-0 flex h-10 items-center justify-center bg-[var(--ci-primary-color)] px-5 leading-tight hover:bg-[var(--ci-primary-color)] hover:text-black",
    },
    St = { class: "rounded-e-[4px] bg-gray-800 p-[1px]" },
    Ct = ["disabled"],
    Lt = {
      key: 2,
      class: "rounded-[4px] bg-[rgba(255,157,66,0.30)] py-3 text-center",
    },
    Wt = h(() =>
      t(
        "p",
        { class: "px-1 text-sm text-[#ff9e43] lg:text-base" },
        "Não há informações para mostrar.",
        -1
      )
    ),
    Mt = [Wt];
  function Dt(s, e, a, n, o, l) {
    const c = v("BaseLayout");
    return (
      d(),
      L(c, null, {
        default: m(() => [
          t(
            "div",
            {
              class: g([
                l.topNav ? "mt-[79px] lg:mt-[116px]" : "mt-[48px] lg:mt-20",
                "mx-auto flex max-w-6xl px-4 py-2 lg:px-3 lg:py-4",
              ]),
            },
            [
              o.isLoadingWallet
                ? W("", !0)
                : (d(),
                  p("div", Y, [
                    t("div", A, [
                      t("div", K, [
                        U,
                        t(
                          "strong",
                          X,
                          i(
                            s.state.currencyFormat(
                              parseFloat(o.wallet.total_balance),
                              o.wallet.currency
                            )
                          ),
                          1
                        ),
                        t("div", Z, [
                          t(
                            "button",
                            {
                              type: "button",
                              class:
                                "rounded bg-[var(--ci-primary-color)] px-4 py-2 font-medium text-black hover:opacity-80",
                              onClick:
                                e[0] ||
                                (e[0] = (...r) =>
                                  l.openDepositModal && l.openDepositModal(...r)),
                            },
                            " Depósito "
                          ),
                          t(
                            "button",
                            {
                              type: "button",
                              class:
                                "rounded bg-white px-4 py-2 font-medium text-black opacity-50 hover:bg-opacity-90",
                              onClick:
                                e[1] ||
                                (e[1] = (...r) =>
                                  l.openWithdrawModal &&
                                  l.openWithdrawModal(...r)),
                            },
                            " Saque "
                          ),
                        ]),
                        tt,
                      ]),
                    ]),
                    t("div", et, [
                      st,
                      t("div", null, [
                        t("ul", at, [
                          t("li", null, [
                            t(
                              "button",
                              {
                                type: "button",
                                class: g([
                                  o.currentTab === 1
                                    ? "bg-[var(--ci-primary-color)] text-black hover:opacity-80"
                                    : "text-[var(--ci-primary-color)] hover:bg-[var(--ci-primary-color)] hover:text-black hover:opacity-80",
                                  "rounded border border-[var(--ci-primary-color)] px-4 py-2 text-xs uppercase sm:text-sm",
                                ]),
                                onClick:
                                  e[2] ||
                                  (e[2] = (r) => l.getData("deposits", 1)),
                              },
                              " Depósitos ",
                              2
                            ),
                          ]),
                          t("li", null, [
                            t(
                              "button",
                              {
                                type: "button",
                                class: g([
                                  o.currentTab === 2
                                    ? "bg-[var(--ci-primary-color)] text-black hover:opacity-80"
                                    : "text-[var(--ci-primary-color)] hover:bg-[var(--ci-primary-color)] hover:text-black hover:opacity-80",
                                  "rounded border border-[var(--ci-primary-color)] px-4 py-2 text-xs uppercase sm:text-sm",
                                ]),
                                onClick:
                                  e[3] ||
                                  (e[3] = (r) => l.getData("withdraws", 2)),
                              },
                              " Saques ",
                              2
                            ),
                          ]),
                        ]),
                        o.loadingTable
                          ? (d(),
                            p("div", ot, [
                              t("div", rt, [
                                (d(),
                                p(
                                  f,
                                  null,
                                  _(28, (r) => t("div", lt)),
                                  64
                                )),
                              ]),
                            ]))
                          : o.wallet && o.transactions.data.length
                          ? (d(),
                            p("div", nt, [
                              t("div", it, [
                                t("table", ct, [
                                  dt,
                                  t("tbody", null, [
                                    (d(!0),
                                    p(
                                      f,
                                      null,
                                      _(
                                        o.transactions.data,
                                        (r) => (
                                          d(),
                                          p("tr", null, [
                                            t("td", pt, [
                                              t(
                                                "div",
                                                {
                                                  class: g([
                                                    r.status === 1
                                                      ? "bg-green-400"
                                                      : "bg-yellow-400",
                                                    "flex",
                                                    "w-max",
                                                    "items-center",
                                                    "rounded",
                                                    "p-1",
                                                  ]),
                                                },
                                                [
                                                  (d(),
                                                  p(
                                                    "svg",
                                                    {
                                                      class: g(
                                                        o.transactions.path.includes(
                                                          "deposit"
                                                        )
                                                          ? "rotate-0"
                                                          : "rotate-180"
                                                      ),
                                                      height: "14",
                                                      viewBox: "0 0 384 512",
                                                      width: "14",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                    gt,
                                                    2
                                                  )),
                                                ],
                                                2
                                              ),
                                            ]),
                                            t("th", ht, " R$ " + i(r.amount), 1),
                                            t("td", mt, [
                                              t(
                                                "div",
                                                {
                                                  class: g([
                                                    [
                                                      r.status === 1
                                                        ? "bg-green-400"
                                                        : r.status === 2
                                                        ? "bg-red-400"
                                                        : "bg-yellow-400",
                                                      "w-max",
                                                      "rounded",
                                                      "px-2",
                                                      "text-xs",
                                                      "text-black",
                                                      "sm:text-sm",
                                                    ],
                                                    "",
                                                  ]),
                                                },
                                                [
                                                  t(
                                                    "span",
                                                    xt,
                                                    i(
                                                      r.status === 1
                                                        ? "Concluído"
                                                        : r.status === 2
                                                        ? "Cancelado"
                                                        : "Pendente"
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                2
                                              ),
                                            ]),
                                            t(
                                              "td",
                                              bt,
                                              i(l.dateFormat(r.created_at)),
                                              1
                                            ),
                                          ])
                                        )
                                      ),
                                      256
                                    )),
                                  ]),
                                ]),
                              ]),
                              t("nav", ft, [
                                t("span", _t, [
                                  y(" Mostrando "),
                                  t(
                                    "span",
                                    null,
                                    "1 a " + i(o.transactions.data.length),
                                    1
                                  ),
                                  y(" de "),
                                  t(
                                    "span",
                                    null,
                                    i(o.transactions.total) + " registros",
                                    1
                                  ),
                                ]),
                                t("ul", yt, [
                                  t("li", wt, [
                                    t(
                                      "button",
                                      {
                                        class:
                                          "ms-0 flex h-10 items-center justify-center rounded-s-[4px] px-5 text-lg leading-tight hover:bg-[var(--ci-primary-color)]",
                                        disabled: !o.transactions.prev_page_url,
                                        onClick:
                                          e[4] ||
                                          (e[4] = (...r) =>
                                            l.getPreviousPage &&
                                            l.getPreviousPage(...r)),
                                      },
                                      " ‹ ",
                                      8,
                                      vt
                                    ),
                                  ]),
                                  t("li", kt, [
                                    t("a", Tt, i(o.transactions.current_page), 1),
                                  ]),
                                  t("li", St, [
                                    t(
                                      "button",
                                      {
                                        class:
                                          "ms-0 flex h-10 items-center justify-center rounded-e-[4px] bg-gray-800 px-5 text-lg leading-tight hover:bg-[var(--ci-primary-color)]",
                                        disabled: !o.transactions.next_page_url,
                                        onClick:
                                          e[5] ||
                                          (e[5] = (...r) =>
                                            l.getNextPage && l.getNextPage(...r)),
                                      },
                                      " › ",
                                      8,
                                      Ct
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]))
                          : (d(), p("div", Lt, Mt)),
                      ]),
                    ]),
                  ])),
            ],
            2
          ),
        ]),
        _: 1,
      })
    );
  }
  const $t = w(Q, [
    ["render", Dt],
    ["__scopeId", "data-v-b13c2219"],
  ]);
  export { $t as default };
  