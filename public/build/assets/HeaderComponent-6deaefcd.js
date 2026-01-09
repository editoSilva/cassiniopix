import { _ as s, k as o, l as a, m as n, W as t } from "./app-a41775fa.js";
const r = {
    name: "headerComponent",
    data() {
      return {};
    },
    methods: {},
    mounted() {},
  },
  d = { class: "header-title flex justify-between" },
  l = {
    class:
      "mb-4 text-3xl leading-none text-gray-900 dark:text-white md:text-3xl lg:text-3xl",
  };
function c(e, m, i, _, p, x) {
  return (
    o(),
    a("div", d, [n("h1", l, [t(e.$slots, "header")]), t(e.$slots, "default")])
  );
}
const f = s(r, [["render", c]]);
export { f as H };
