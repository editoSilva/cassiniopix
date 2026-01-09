import { B as C } from "./BaseLayout-e04ce02c.js";
import {
  _ as L,
  S,
  w as b,
  g as P,
  j as p,
  k as n,
  y as f,
  E as M,
  l as d,
  m as e,
  q as h,
  t as m,
  v as G,
  z as w,
  F as _,
  x as v,
  A as k,
  u as x,
  N as z,
  B as F,
  C as B,
} from "./app-a41775fa.js";
import { u as D } from "./CookiesComponent-3cc93cf3.js";
import { C as T } from "./CassinoGameCard-a081d024.js";
import { C as I } from "./CustomPagination-387741e4.js";
import { L as j } from "./LoadingComponent-d0558a90.js";
import { H as E } from "./HeaderComponent-6deaefcd.js";
import "./WithdrawModal-008a788d.js";
const N = {
    props: [],
    components: {
      HeaderComponent: E,
      LoadingComponent: j,
      CustomPagination: I,
      CassinoGameCard: T,
      BaseLayout: C,
    },
    data() {
      return {
        isLoading: !1,
        isLoadingSearch: !0,
        games: null,
        searchTerm: "",
        provider: null,
        category: null,
        showSearch: !1,
        showFilters: !1,
        onMobile: !1,
        debounceSearchId: null,
        searchWarnStatus: !1,
        showLoadMore: !0,
        currentPage: 1,
        dropdownProviders: !1,
        dropdownCategories: !1,
        providersFilter: [],
        categoriesFilter: [],
      };
    },
    setup(o) {
      const t = S();
      return (
        b(
          () => t.params.provider,
          (l, s) => {}
        ),
        { route: t }
      );
    },
    computed: {
      gamesAmountProgress() {
        const o = this.games.total,
          t = this.games.data.length;
        return { width: `${Math.round(((t * 100) / o).toFixed(0))}%` };
      },
      topNav() {
        return D().getTopNavStatus;
      },
    },
    methods: {
      searchGames: async function () {
        const o = !!this.debounceSearchId;
        (this.searchWarnStatus = !1),
          (this.isLoadingSearch = !0),
          (this.showLoadMore = !0),
          (this.games = []),
          o && clearTimeout(this.debounceSearchId),
          (this.debounceSearchId = setTimeout(async () => {
            var t;
            await this.getGameData(1, !1),
              (this.isLoadingSearch = !1),
              ((t = this.games.data) == null ? void 0 : t.length) === 0
                ? (this.searchWarnStatus = !0)
                : (this.searchWarnStatus = !1),
              (this.debounceSearchId = null);
          }, 1e3));
      },
      getGameData: async function (o = 1, t = !0, l = !1) {
        var g;
        const s = this;
        s.isLoading = t;
        let r;
        l ? (r = (g = s.games) == null ? void 0 : g.data) : (r = []);
        const i = s.route.params.provider,
          u = s.route.params.category;
        (this.provider = i),
          (this.category = u),
          await P.get(
            "/casinos/games?page=" +
              o +
              "&searchTerm=" +
              s.searchTerm +
              "&category=" +
              s.category +
              "&provider=" +
              s.provider
          )
            .then((a) => {
              (s.games = a.data.games),
                (s.games.data = [...r, ...s.games.data]),
                (s.isLoading = !1),
                s.games.current_page === s.games.last_page
                  ? (s.showLoadMore = !1)
                  : (s.showLoadMore = !0);
            })
            .catch((a) => {
              s.isLoading = !1;
            });
      },
      toggleSearch: function () {
        (this.showSearch = !this.showSearch), (this.showFilters = !1);
      },
      toggleFilters: function () {
        (this.showFilters = !this.showFilters), (this.showSearch = !1);
      },
      handleResize: function () {
        (this.onMobile = window.innerWidth < 768),
          this.onMobile
            ? ((this.showSearch = !1), (this.showFilters = !1))
            : ((this.showSearch = !0), (this.showFilters = !0));
      },
      async loadMore() {
        const o = this;
        if (o.games.current_page === o.games.last_page) return;
        const l = o.games.current_page + 1;
        await this.getGameData(l, !1, !0);
      },
      toggleDropdown(o) {
        const l = o.target.closest("[data-filter]"),
          s = l ? l.dataset.js : void 0;
        if (s === "filter-providers" && this.dropdownProviders) {
          (this.dropdownProviders = !1), (this.dropdownCategories = !1);
          return;
        }
        if (s === "filter-providers" && !this.dropdownProviders) {
          (this.dropdownProviders = !0), (this.dropdownCategories = !1);
          return;
        }
        if (s === "filter-categories" && this.dropdownCategories) {
          (this.dropdownProviders = !1), (this.dropdownCategories = !1);
          return;
        }
        if (s === "filter-categories" && !this.dropdownCategories) {
          (this.dropdownProviders = !1), (this.dropdownCategories = !0);
          return;
        }
        (this.dropdownProviders = !1), (this.dropdownCategories = !1);
      },
    },
    mounted() {
      this.handleResize(),
        window.addEventListener("resize", this.handleResize),
        document.addEventListener("click", this.toggleDropdown);
    },
    unmounted() {
      window.removeEventListener("resize", this.handleResize),
        document.removeEventListener("click", this.toggleDropdown);
    },
    async created() {
      await this.getGameData(1, !1), (this.isLoadingSearch = !1);
    },
    watch: {
      "route.params.provider"(o, t) {
        this.getGameData(1, !0);
      },
      "route.params.category"(o, t) {
        this.getGameData(1, !0);
      },
    },
  },
  c = (o) => (F("data-v-a0e39142"), (o = o()), B(), o),
  R = { class: "px-4 py-5 md:px-0" },
  W = { class: "mb-8 lg:flex lg:items-center lg:justify-between" },
  q = { class: "flex items-center justify-between" },
  A = c(() =>
    e(
      "svg",
      {
        height: "16",
        viewBox: "0 0 448 512",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e("path", {
          d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
          fill: "#fdffff99",
        }),
      ],
      -1
    )
  ),
  V = c(() =>
    e("span", { class: "text-sm font-bold text-white" }, "Todos os jogos", -1)
  ),
  H = [A, V],
  U = { class: "flex items-center gap-3 md:hidden" },
  J = c(() =>
    e(
      "svg",
      {
        height: "16",
        viewBox: "0 0 512 512",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e("path", {
          d: "M500.3 443.7l-119.7-119.7c-15.03 22.3-34.26 41.54-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7z",
          fill: "currentColor",
        }),
        e("path", {
          d: "M207.1 0C93.12 0-.0002 93.13-.0002 208S93.12 416 207.1 416s208-93.13 208-208S322.9 0 207.1 0zM207.1 336c-70.58 0-128-57.42-128-128c0-70.58 57.42-128 128-128s128 57.42 128 128C335.1 278.6 278.6 336 207.1 336z",
          fill: "currentColor",
          opacity: "0.4",
        }),
      ],
      -1
    )
  ),
  K = [J],
  O = {
    height: "1em",
    viewBox: "0 0 512 512",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    style: {},
  },
  Q = c(() =>
    e(
      "path",
      {
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z",
        fill: "currentColor",
        opacity: "0.4",
      },
      null,
      -1
    )
  ),
  X = c(() =>
    e(
      "path",
      {
        d: "M377.6 321.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z",
        fill: "currentColor",
      },
      null,
      -1
    )
  ),
  Y = [Q, X],
  Z = {
    class:
      "items-center justify-between gap-4 md:mt-6 md:flex md:h-9 lg:mt-0 lg:w-full lg:max-w-xl",
  },
  $ = { class: "mt-5 w-full md:mt-0" },
  ee = {
    class:
      "z-20 flex w-full items-center gap-3 rounded-[4px] bg-[#323637] px-4 py-2",
  },
  te = {
    key: 0,
    class: "rounded-[4px] bg-[rgba(255,157,66,0.30)] py-3 text-center",
  },
  se = c(() =>
    e(
      "p",
      { class: "px-1 text-sm text-[#ff9e43] lg:text-base" },
      "Nenhum resultado encontrado para a sua pesquisa",
      -1
    )
  ),
  oe = [se],
  ae = { key: 1 },
  re = { class: "relative w-full" },
  ie = { class: "mb-5 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6" },
  le = { class: "custom-pulse h-28 rounded-[4px] bg-gray-700 lg:h-44" },
  ne = { key: 2 },
  de = { class: "relative w-full" },
  ce = { class: "mb-5 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6" },
  he = { class: "relative mt-[50px]" },
  ge = { class: "flex w-full flex-col items-center justify-center pt-5" },
  me = { class: "mb-4 h-1 w-44 bg-[#474A4B]" },
  ue = { class: "mb-3 text-center text-xs font-bold" };
function pe(o, t, l, s, r, i) {
  const u = p("CassinoGameCard"),
    g = p("BaseLayout");
  return (
    n(),
    f(g, null, {
      default: M(() => [
        r.isLoading
          ? w("", !0)
          : (n(),
            d(
              "div",
              {
                key: 0,
                class: z([
                  i.topNav ? "mt-[79px] lg:mt-[116px]" : "mt-[48px] lg:mt-20",
                  "mx-auto px-0 pb-6 pt-0 sm:max-w-[690px] lg:max-w-[1140px] lg:px-4 lg:py-12",
                ]),
              },
              [
                e("div", R, [
                  e("header", W, [
                    e("div", q, [
                      e(
                        "button",
                        {
                          type: "button",
                          class: "flex items-center gap-3",
                          onClick:
                            t[0] ||
                            (t[0] = (a) => o.$router.push({ name: "home" })),
                        },
                        H
                      ),
                      e("div", U, [
                        e(
                          "button",
                          {
                            type: "button",
                            class: "py-2",
                            onClick:
                              t[1] ||
                              (t[1] = (...a) =>
                                i.toggleSearch && i.toggleSearch(...a)),
                          },
                          [
                            h(e("div", null, K, 512), [[m, !r.showSearch]]),
                            h(e("div", null, [(n(), d("svg", O, Y))], 512), [
                              [m, r.showSearch],
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                    e("div", Z, [
                      h(
                        e(
                          "form",
                          $,
                          [
                            e("label", ee, [
                              h(
                                e(
                                  "input",
                                  {
                                    type: "text",
                                    "onUpdate:modelValue":
                                      t[2] ||
                                      (t[2] = (a) => (r.searchTerm = a)),
                                    onInput:
                                      t[3] ||
                                      (t[3] = (...a) =>
                                        i.searchGames && i.searchGames(...a)),
                                    class:
                                      "m-0 w-full border-none bg-transparent p-0 text-sm font-light text-white placeholder-white placeholder-opacity-60 placeholder:text-xs focus:outline-none focus:ring-0",
                                    placeholder: "Pesquise por um jogo...",
                                    required: "",
                                  },
                                  null,
                                  544
                                ),
                                [[G, r.searchTerm]]
                              ),
                            ]),
                          ],
                          512
                        ),
                        [[m, r.showSearch]]
                      ),
                    ]),
                  ]),
                  r.searchWarnStatus ? (n(), d("div", te, oe)) : w("", !0),
                  r.isLoadingSearch
                    ? (n(),
                      d("div", ae, [
                        e("div", re, [
                          e("div", ie, [
                            (n(),
                            d(
                              _,
                              null,
                              v(18, (a) => e("div", le)),
                              64
                            )),
                          ]),
                        ]),
                      ]))
                    : (n(),
                      d("div", ne, [
                        e("div", de, [
                          e("div", ce, [
                            (n(!0),
                            d(
                              _,
                              null,
                              v(
                                r.games.data,
                                (a, y) => (
                                  n(),
                                  f(
                                    u,
                                    {
                                      index: y,
                                      title: a.game_name,
                                      cover: a.cover,
                                      gamecode: a.game_code,
                                      type: a.distribution,
                                      game: a,
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
                            )),
                          ]),
                        ]),
                        e("div", he, [
                          e("div", ge, [
                            e("div", me, [
                              e(
                                "div",
                                {
                                  class: "h-full bg-[var(--ci-primary-color)]",
                                  style: k(i.gamesAmountProgress),
                                },
                                null,
                                4
                              ),
                            ]),
                            e(
                              "span",
                              ue,
                              " Mostrando " +
                                x(r.games.data.length) +
                                " de " +
                                x(r.games.total) +
                                " jogos ",
                              1
                            ),
                            h(
                              e(
                                "button",
                                {
                                  type: "button",
                                  class:
                                    "relative rounded-[4px] bg-[var(--ci-primary-opacity-color)] px-3 py-2 text-xs font-bold text-[var(--ci-primary-color)] hover:opacity-80",
                                  onClick:
                                    t[4] ||
                                    (t[4] = (...a) =>
                                      i.loadMore && i.loadMore(...a)),
                                },
                                " Carregar mais ",
                                512
                              ),
                              [[m, r.showLoadMore]]
                            ),
                          ]),
                        ]),
                      ])),
                ]),
              ],
              2
            )),
      ]),
      _: 1,
    })
  );
}
const Se = L(N, [
  ["render", pe],
  ["__scopeId", "data-v-a0e39142"],
]);
export { Se as default };
