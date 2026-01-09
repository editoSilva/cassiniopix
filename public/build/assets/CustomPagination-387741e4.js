import {
    _ as b,
    j as k,
    k as f,
    y,
    E as x,
    l as R,
    H as d,
    m as h,
    V as P,
    W as v,
    G as _,
    u as c,
    z as U,
  } from "./app-a41775fa.js";
  const B = {
      emits: ["pagination-change-page"],
      props: {
        data: { type: Object, default: () => {} },
        limit: { type: Number, default: 0 },
        keepLength: { type: Boolean, default: !1 },
      },
      computed: {
        isApiResource() {
          return !!this.data.meta;
        },
        currentPage() {
          return this.isApiResource
            ? this.data.meta.current_page
            : this.data.current_page ?? null;
        },
        firstPageUrl() {
          var e, t;
          return (
            this.data.first_page_url ??
            ((e = this.data.meta) == null ? void 0 : e.first_page_url) ??
            ((t = this.data.links) == null ? void 0 : t.first) ??
            null
          );
        },
        from() {
          return this.isApiResource
            ? this.data.meta.from
            : this.data.from ?? null;
        },
        lastPage() {
          return this.isApiResource
            ? this.data.meta.last_page
            : this.data.last_page ?? null;
        },
        lastPageUrl() {
          var e, t;
          return (
            this.data.last_page_url ??
            ((e = this.data.meta) == null ? void 0 : e.last_page_url) ??
            ((t = this.data.links) == null ? void 0 : t.last) ??
            null
          );
        },
        nextPageUrl() {
          var e, t;
          return (
            this.data.next_page_url ??
            ((e = this.data.meta) == null ? void 0 : e.next_page_url) ??
            ((t = this.data.links) == null ? void 0 : t.next) ??
            null
          );
        },
        perPage() {
          return this.isApiResource
            ? this.data.meta.per_page
            : this.data.per_page ?? null;
        },
        prevPageUrl() {
          var e, t;
          return (
            this.data.prev_page_url ??
            ((e = this.data.meta) == null ? void 0 : e.prev_page_url) ??
            ((t = this.data.links) == null ? void 0 : t.prev) ??
            null
          );
        },
        to() {
          return this.isApiResource ? this.data.meta.to : this.data.to ?? null;
        },
        total() {
          return this.isApiResource
            ? this.data.meta.total
            : this.data.total ?? null;
        },
        pageRange() {
          if (this.limit === -1) return 0;
          if (this.limit === 0) return this.lastPage;
          for (
            var e = this.currentPage,
              t = this.keepLength,
              i = this.lastPage,
              r = this.limit,
              m = e - r,
              p = e + r,
              g = (r + 2) * 2,
              s = (r + 2) * 2 - 1,
              n = [],
              u = [],
              l,
              a = 1;
            a <= i;
            a++
          )
            (a === 1 ||
              a === i ||
              (a >= m && a <= p) ||
              (t && a < g && e < g - 2) ||
              (t && a > i - s && e > i - s + 2)) &&
              n.push(a);
          return (
            n.forEach(function (o) {
              l && (o - l === 2 ? u.push(l + 1) : o - l !== 1 && u.push("...")),
                u.push(o),
                (l = o);
            }),
            u
          );
        },
      },
      methods: {
        previousPage() {
          this.selectPage(this.currentPage - 1);
        },
        nextPage() {
          this.selectPage(this.currentPage + 1);
        },
        selectPage(e) {
          e === "..." ||
            e === this.currentPage ||
            this.$emit("pagination-change-page", e);
        },
      },
      render() {
        return this.$slots.default({
          data: this.data,
          limit: this.limit,
          computed: {
            isApiResource: this.isApiResource,
            currentPage: this.currentPage,
            firstPageUrl: this.firstPageUrl,
            from: this.from,
            lastPage: this.lastPage,
            lastPageUrl: this.lastPageUrl,
            nextPageUrl: this.nextPageUrl,
            perPage: this.perPage,
            prevPageUrl: this.prevPageUrl,
            to: this.to,
            total: this.total,
            pageRange: this.pageRange,
          },
          prevButtonEvents: {
            click: (e) => {
              e.preventDefault(), this.previousPage();
            },
          },
          nextButtonEvents: {
            click: (e) => {
              e.preventDefault(), this.nextPage();
            },
          },
          pageButtonEvents: (e) => ({
            click: (t) => {
              t.preventDefault(), this.selectPage(e);
            },
          }),
        });
      },
    },
    A = {
      inheritAttrs: !1,
      emits: ["pagination-change-page"],
      components: { RenderlessPagination: B },
      props: {
        data: { type: Object, default: () => {} },
        limit: { type: Number, default: 0 },
        keepLength: { type: Boolean, default: !1 },
      },
      methods: {
        onPaginationChangePage(e) {
          this.$emit("pagination-change-page", e);
        },
      },
    },
    $ = ["disabled"],
    C = { class: "flex w-full items-center justify-center" },
    E = ["disabled"];
  function N(e, t, i, r, m, p) {
    const g = k("RenderlessPagination");
    return (
      f(),
      y(
        g,
        {
          data: i.data,
          limit: i.limit,
          "keep-length": i.keepLength,
          onPaginationChangePage: p.onPaginationChangePage,
        },
        {
          default: x((s) => [
            s.computed.total > s.computed.perPage
              ? (f(),
                R(
                  "nav",
                  d({ key: 0 }, e.$attrs, {
                    "aria-label": "Pagination",
                    class: "mt-5 flex justify-between",
                  }),
                  [
                    h(
                      "button",
                      d(
                        { disabled: !s.computed.prevPageUrl },
                        P(s.prevButtonEvents, !0),
                        {
                          class:
                            "px-3 py-2 disabled:bg-gray-600 disabled:opacity-50 dark:bg-gray-800",
                        }
                      ),
                      [
                        v(e.$slots, "prev-nav", {}, () => [
                          _(c(e.$t("Previous")), 1),
                        ]),
                      ],
                      16,
                      $
                    ),
                    h("div", C, [h("p", null, c(e.$t("Pagination")), 1)]),
                    h(
                      "button",
                      d(
                        { disabled: !s.computed.nextPageUrl },
                        P(s.nextButtonEvents, !0),
                        {
                          class:
                            "px-3 py-2 disabled:bg-gray-600 disabled:opacity-50 dark:bg-gray-800",
                        }
                      ),
                      [
                        v(e.$slots, "next-nav", {}, () => [
                          _(c(e.$t("Next")), 1),
                        ]),
                      ],
                      16,
                      E
                    ),
                  ],
                  16
                ))
              : U("", !0),
          ]),
          _: 3,
        },
        8,
        ["data", "limit", "keep-length", "onPaginationChangePage"]
      )
    );
  }
  const D = b(A, [["render", N]]);
  export { D as C };
  