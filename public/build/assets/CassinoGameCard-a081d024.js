import {
    _ as d,
    R as h,
    K as u,
    $ as m,
    k as r,
    l as o,
    s as n,
    m as c,
    I as l,
  } from "./app-a41775fa.js";
  const p = {
      props: ["index", "game"],
      components: { RouterLink: h },
      data() {
        return { isLoading: !1, modalGame: null };
      },
      computed: {
        isAuthenticated() {
          return u().isAuth;
        },
        casinoGameAuthStore() {
          return m();
        },
      },
      setup(s) {
        return {};
      },
      methods: {
        handleRedirect() {
          const s = this.isAuthenticated,
            e = window.innerWidth < 1024;
          if ((this.casinoGameAuthStore.setMobile(e), !s && e)) {
            const t = {
              title: this.game.game_name,
              provider: this.game.provider.name,
              cover: this.game.cover,
            };
            this.casinoGameAuthStore.setCasinoGameAuth(t),
              this.casinoGameAuthStore.setVisibility(!0);
            return;
          }
          window.location.href = `/games/play/${this.game.id}/${this.game.game_code}`;
        },
      },
    },
    g = {
      class:
        "item-game group relative h-auto w-full max-w-[350px] cursor-pointer overflow-hidden rounded-[4px] text-gray-700",
    },
    f = ["src"],
    v = l(
      '<div class="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[rgba(0,0,0,0.80)] group-hover:flex"><span class="inline-flex items-center justify-center gap-1 rounded-[4px] bg-[var(--ci-primary-color)] px-4 py-2"><svg height="14" viewBox="0 0 384 512" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" fill="currentColor"></path></svg><span class="text-xs font-bold uppercase">Play</span></span></div>',
      1
    ),
    w = ["src"],
    x = l(
      '<div class="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[rgba(0,0,0,0.80)] group-hover:flex"><span class="inline-flex items-center justify-center gap-1 rounded-[4px] bg-[var(--ci-primary-color)] px-4 py-2"><svg height="14" viewBox="0 0 384 512" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" fill="currentColor"></path></svg><span class="text-xs font-bold uppercase">Play</span></span></div>',
      1
    );
  function _(s, e, t, b, y, a) {
    return (
      r(),
      o("div", g, [
        t.game.distribution === "kagaming"
          ? (r(),
            o(
              "div",
              {
                key: 0,
                onClick:
                  e[0] ||
                  (e[0] = n(
                    (...i) => a.handleRedirect && a.handleRedirect(...i),
                    ["prevent"]
                  )),
              },
              [
                c(
                  "img",
                  {
                    src: t.game.cover,
                    class: "h-auto w-full object-cover",
                    width: "176",
                    height: "176",
                  },
                  null,
                  8,
                  f
                ),
                v,
              ]
            ))
          : (r(),
            o(
              "div",
              {
                key: 1,
                onClick:
                  e[1] ||
                  (e[1] = n(
                    (...i) => a.handleRedirect && a.handleRedirect(...i),
                    ["prevent"]
                  )),
              },
              [
                c(
                  "img",
                  {
                    src: "/storage/" + t.game.cover,
                    alt: "",
                    class: "h-auto w-full object-cover",
                    width: "176",
                    height: "176",
                  },
                  null,
                  8,
                  w
                ),
                x,
              ]
            )),
      ])
    );
  }
  const S = d(p, [["render", _]]);
  export { S as C };
  