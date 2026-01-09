import { B as v } from "./BaseLayout-e04ce02c.js";
import { b as p, u as C } from "./CookiesComponent-3cc93cf3.js";
import {
  _ as k,
  P as R,
  K as S,
  T as f,
  g,
  j as L,
  k as i,
  y as F,
  E as M,
  m as e,
  l as n,
  z as x,
  q as m,
  v as h,
  s as d,
  G as w,
  u as c,
  N as j,
  U as q,
} from "./app-a41775fa.js";
import "./WithdrawModal-008a788d.js";
const E = {
    props: [],
    components: { BaseLayout: v, Modal: p },
    data() {
      return {
        isLoading: !1,
        referenceRewards: null,
        commissionRewards: null,
        isShowForm: !1,
        isLoadingGenerate: !1,
        code: "",
        urlCode: "",
        referencecode: "",
        referencelink: "",
        banners: null,
        wallet: null,
        indications: 0,
        histories: null,
        withdrawalModal: null,
        withdrawalForm: { name: "", amount: 0, pix_key: "", pix_type: "" },
      };
    },
    setup(o) {
      return { router: R() };
    },
    computed: {
      userData() {
        return S().user;
      },
      topNavMenuStore() {
        return C();
      },
      topNav() {
        return this.topNavMenuStore.getTopNavStatus;
      },
    },
    mounted() {
      (this.referenceRewards = new p(
        document.getElementById("referenceRewardsEl"),
        {
          placement: "center",
          backdrop: "dynamic",
          backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
          closable: !0,
          onHide: () => {},
          onShow: () => {},
          onToggle: () => {},
        }
      )),
        (this.commissionRewards = new p(
          document.getElementById("commissionRewardsEl"),
          {
            placement: "center",
            backdrop: "dynamic",
            backdropClasses:
              "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
            closable: !0,
            onHide: () => {},
            onShow: () => {},
            onToggle: () => {},
          }
        )),
        (this.withdrawalModal = new p(document.getElementById("withdrawalEl"), {
          placement: "center",
          backdrop: "dynamic",
          backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
          closable: !0,
          onHide: () => {},
          onShow: () => {},
          onToggle: () => {},
        }));
    },
    methods: {
      copyCode: function (o) {
        const t = f();
        var l = document.getElementById("referenceCode");
        l.select(),
          l.setSelectionRange(0, 99999),
          document.execCommand("copy"),
          t.success(this.$t("Code copied successfully"));
      },
      copyLink: function (o) {
        const t = f();
        var l = document.getElementById("referenceLink");
        l.select(),
          l.setSelectionRange(0, 99999),
          document.execCommand("copy"),
          t.success(this.$t("Link copied successfully"));
      },
      getCode: function () {
        const o = this;
        f(),
          (o.isLoadingGenerate = !0),
          g
            .get("profile/affiliates/")
            .then((t) => {
              t.data.code !== "" &&
                t.data.code !== void 0 &&
                t.data.code !== null &&
                ((o.isShowForm = !0),
                (o.code = t.data.code),
                (o.referencecode = t.data.code),
                (o.urlCode = t.data.url)),
                (o.indications = t.data.indications),
                (o.referencelink = t.data.url),
                (o.wallet = t.data.wallet),
                (o.withdrawalForm.amount = t.data.wallet.refer_rewards),
                (o.isLoadingGenerate = !1);
            })
            .catch((t) => {
              (o.isShowForm = !1), (o.isLoadingGenerate = !1);
            });
      },
      getBanners: async function () {
        const o = this;
        try {
          const l = (await g.get("settings/banners")).data.banners;
          o.banners = l.filter((u) => u.type === "afiliado");
        } catch (t) {
          console.error(t);
        }
      },
      generateCode: function (o) {
        const t = this,
          l = f();
        (t.isLoadingGenerate = !0),
          g
            .get("profile/affiliates/generate")
            .then((u) => {
              u.data.status &&
                (t.getCode(),
                l.success(t.$t("Your code was generated successfully"))),
                (t.isLoadingGenerate = !1);
            })
            .catch((u) => {
              Object.entries(JSON.parse(u.request.responseText)).forEach(
                ([s, r]) => {
                  l.error(`${r}`);
                }
              ),
                (t.isLoadingGenerate = !1);
            });
      },
      toggleCommissionRewards: function (o) {
        this.commissionRewards.toggle();
      },
      closeWithdrawModal: function () {
        this.withdrawalModal.hide(), this.commissionRewards.show();
      },
      toggleReferenceRewards: function (o) {
        this.referenceRewards.toggle();
      },
      toggleWithdrawalModal: function () {
        this.withdrawalModal.toggle();
      },
      makeWithdrawal: async function () {
        const o = this,
          t = f();
        (o.isLoading = !0),
          g
            .post("profile/affiliates/request", o.withdrawalForm)
            .then((l) => {
              t.success(o.$t(l.data.message)),
                this.toggleWithdrawalModal(),
                (o.isLoading = !1),
                o.router.push({ name: "profileWallet" });
            })
            .catch((l) => {
              Object.entries(JSON.parse(l.request.responseText)).forEach(
                ([u, s]) => {
                  t.error(`${s}`);
                }
              ),
                (o.isLoading = !1);
            });
      },
    },
    created() {
      this.getCode(), this.getBanners();
    },
  },
  B = {
    key: 0,
    class: "grid grid-cols-1 gap-y-5 xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0",
  },
  N = {
    key: 0,
    class:
      "order-1 col-span-3 rounded-bl rounded-br bg-[#323637] shadow-lg md:mb-0 xl:order-1 xl:col-span-1",
  },
  T = {
    key: 0,
    class: "flex w-full flex-col rounded-t",
    style: { overflow: "hidden" },
  },
  z = ["src"],
  V = { class: "p-4" },
  G = e(
    "div",
    { class: "mb-8" },
    [
      e(
        "h1",
        {
          class: "tex-lg font-bold text-[var(--ci-primary-color)] md:text-2xl",
        },
        " Indique um amigo e ganhe dinheiro "
      ),
    ],
    -1
  ),
  W = { class: "mb-4 flex flex-col" },
  P = e(
    "label",
    {
      for: "reference-code",
      class: "mb-2 block text-sm font-medium text-white",
    },
    " Código de Referência ",
    -1
  ),
  D = { class: "relative w-full" },
  I = e("i", { class: "fa-duotone fa-copy text-2xl" }, null, -1),
  A = [I],
  U = { class: "flex flex-col" },
  Z = e(
    "label",
    {
      for: "reference-code",
      class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
    },
    " Link de Referência ",
    -1
  ),
  O = { class: "relative w-full" },
  H = e("i", { class: "fa-duotone fa-copy text-2xl" }, null, -1),
  J = [H],
  K = { class: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2" },
  Y = e(
    "a",
    {
      href: "/affiliate/login",
      class:
        "rounded bg-[var(--ci-primary-color)] py-3 text-center font-semibold uppercase text-black",
    },
    " Acessar painel de afiliado avançado ",
    -1
  ),
  Q = e("i", { class: "fa-regular fa-arrow-right ml-2" }, null, -1),
  X = {
    key: 1,
    class: "relative flex flex-col items-center justify-center p-6 text-center",
  },
  $ = { key: 0, class: "" },
  ee = e(
    "p",
    { class: "text-gray-400" },
    " Preparado para se tornar um afiliado? Para responder sim, clique no botão abaixo para gerar seu código. ",
    -1
  ),
  te = { class: "mt-5 w-full" },
  oe = {
    key: 1,
    role: "status",
    class: "absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2",
  },
  se = e(
    "svg",
    {
      "aria-hidden": "true",
      class:
        "h-8 w-8 animate-spin fill-green-600 text-gray-200 dark:text-gray-600",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      e("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor",
      }),
      e("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill",
      }),
    ],
    -1
  ),
  ae = { class: "sr-only" },
  re = { class: "order-2 flex flex-col gap-4 xl:order-2" },
  le = { class: "grid flex-1 grid-cols-1 gap-4 xl:order-2" },
  ie = {
    class:
      "flex w-full flex-col justify-center gap-6 rounded border-gray-700 bg-[#323637] p-4 shadow-lg sm:items-center md:flex-row md:gap-20",
  },
  ne = { class: "flex" },
  de = { class: "w-full text-center" },
  ce = e(
    "h1",
    { class: "mb-4 text-base uppercase" },
    "Recompensa total recebida:",
    -1
  ),
  ue = { class: "text-4xl font-bold text-[var(--ci-primary-color)]" },
  me = {
    class:
      "flex w-full items-center justify-center rounded border-gray-700 bg-[#323637] px-4 py-2 shadow-lg",
  },
  fe = { class: "text-center" },
  he = e(
    "h1",
    { class: "text-base uppercase" },
    "Total de depositantes indicados:",
    -1
  ),
  pe = { class: "text-4xl font-bold text-[var(--ci-primary-color)]" },
  ge = { class: "order-3 grid flex-1 grid-cols-1 gap-4 xl:order-2" },
  xe = { class: "w-full rounded bg-[#323637] p-4 shadow" },
  we = { class: "header flex justify-center" },
  _e = { class: "flex items-center justify-center text-center" },
  be = ["src"],
  ye = e("h2", { class: "ml-3 uppercase" }, "Comissão por revshare", -1),
  ve = { class: "body flex flex-col items-center justify-center py-8" },
  Ce = { class: "text-4xl font-bold text-[var(--ci-primary-color)]" },
  ke = { class: "w-full rounded bg-[#323637] p-4 shadow" },
  Re = { class: "header flex justify-center" },
  Se = { class: "flex items-center justify-center text-center" },
  Le = ["src"],
  Fe = e("h2", { class: "ml-3 uppercase" }, "Comissão por CPA", -1),
  Me = { class: "body flex flex-col items-center justify-center py-8" },
  je = { class: "text-4xl font-bold text-[var(--ci-primary-color)]" },
  qe = {
    key: 1,
    role: "status",
    class:
      "absolute left-1/2 top-2/4 mt-16 h-full -translate-x-1/2 -translate-y-1/2",
  },
  Ee = { class: "flex flex-col items-center justify-center text-center" },
  Be = e(
    "svg",
    {
      "aria-hidden": "true",
      class:
        "h-8 w-8 animate-spin fill-green-600 text-gray-200 dark:text-gray-600",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      e("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor",
      }),
      e("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill",
      }),
    ],
    -1
  ),
  Ne = { class: "mt-3" },
  Te = {
    id: "referenceRewardsEl",
    tabindex: "-1",
    "aria-hidden": "true",
    class:
      "fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0",
  },
  ze = { class: "relative max-h-full w-full max-w-2xl" },
  Ve = { class: "relative rounded-lg bg-white shadow dark:bg-gray-700" },
  Ge = { class: "flex justify-between rounded-t-lg p-4 dark:bg-gray-600" },
  We = e("i", { class: "fa-solid fa-xmark" }, null, -1),
  Pe = [We],
  De = e(
    "div",
    { class: "flex w-full justify-center p-4" },
    [
      e("div", { class: "flex items-center" }, [
        e("div", { class: "l" }),
        e("div", { class: "px-3 text-white" }, "Regras de Desbloqueio"),
        e("div", { class: "r" }),
      ]),
    ],
    -1
  ),
  Ie = {
    id: "commissionRewardsEl",
    tabindex: "-1",
    "aria-hidden": "true",
    class:
      "fixed left-0 right-0 top-0 z-[99999] hidden h-full max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0",
  },
  Ae = { class: "relative max-h-full w-full max-w-2xl" },
  Ue = e(
    "button",
    { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
    [e("i", { class: "fa-solid fa-xmark" })],
    -1
  ),
  Ze = [Ue],
  Oe = e(
    "div",
    {
      class: "relative h-[640px] rounded bg-white shadow dark:bg-gray-700",
      style: { overflow: "auto" },
    },
    [
      e("div", { class: "flex w-full flex-col justify-center p-8" }, [
        e(
          "h1",
          { class: "mb-6 text-lg font-bold text-[var(--ci-primary-color)]" },
          "Regras de recompensas por comissão"
        ),
        e(
          "div",
          { class: "flex w-full items-center justify-center text-center" },
          [
            e("div", { class: "l" }),
            e("div", { class: "px-3 text-white" }, "Taxas de comissões"),
            e("div", { class: "r" }),
          ]
        ),
        e("div", { class: "ml-4 mt-5" }, [
          e("ul", { class: "list-outside list-disc" }, [
            e(
              "li",
              { class: "mb-3 text-sm" },
              " Em qualquer ambiente público (por exemplo, universidades, escolas, bibliotecas e espaços de escritório), apenas uma comissão pode ser paga para cada usuário, endereço IP, dispositivo eletrônico, residência, número de telefone, método de cobrança, endereço de e-mail e computador e IP endereço compartilhado com outras pessoas. "
            ),
            e(
              "li",
              { class: "mb-3 text-sm" },
              " Nossa decisão de fazer uma aposta será baseada inteiramente em nosso critério depois que um depósito for feito e uma aposta for feita com sucesso. "
            ),
            e(
              "li",
              { class: "mb-3 text-sm" },
              " As comissões podem ser retiradas em nossa carteira CREDK interna do painel a qualquer momento. (Veja a extração de sua comissão no painel e visualize o saldo na carteira). "
            ),
            e(
              "li",
              { class: "mb-3 text-sm" },
              "Apoiamos a maioria das moedas no mercado."
            ),
            e(
              "li",
              { class: "mb-3 text-sm" },
              "O sistema calcula a comissão a cada 24 horas."
            ),
          ]),
        ]),
        e(
          "div",
          {
            class:
              "mt-5 w-full rounded border border-gray-500 p-4 text-center text-sm",
          },
          [
            w(" Se você tiver alguma dúvida sobre nossas regras, por favor "),
            e(
              "a",
              { href: "", class: "font-bold text-green-500" },
              " Contate-nos "
            ),
          ]
        ),
      ]),
    ],
    -1
  ),
  He = {
    id: "withdrawalEl",
    tabindex: "-1",
    "aria-hidden": "true",
    class:
      "fixed left-0 right-0 top-0 z-[99999] hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0",
  },
  Je = { class: "relative max-h-full w-full max-w-xl" },
  Ke = e(
    "button",
    { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
    [e("i", { class: "fa-solid fa-xmark" })],
    -1
  ),
  Ye = [Ke],
  Qe = { class: "bg-base relative rounded-lg p-8 shadow" },
  Xe = e(
    "h1",
    { class: "mb-6 text-lg font-bold text-[var(--ci-primary-color)]" },
    "Saque",
    -1
  ),
  $e = { class: "flex w-full flex-col justify-center" },
  et = { class: "mb-3 text-gray-400" },
  tt = e(
    "label",
    { for: "name", class: "mb-1 block text-white" },
    "Nome Completo",
    -1
  ),
  ot = e(
    "label",
    { for: "amount", class: "mb-2 block text-sm font-medium text-white" },
    "Valor do Saque",
    -1
  ),
  st = { key: 0, class: "text-sm italic" },
  at = { class: "mb-3 text-gray-400" },
  rt = e(
    "label",
    { for: "pix-key", class: "mb-2 block text-sm font-medium text-white" },
    "Chave Pix",
    -1
  ),
  lt = { class: "mb-3 text-gray-400" },
  it = e(
    "label",
    { for: "pix-type", class: "mb-2 block text-sm font-medium text-white" },
    "Tipo de Chave",
    -1
  ),
  nt = e("option", { value: "" }, "Selecione uma chave", -1),
  dt = e("option", { value: "document" }, "CPF/CNPJ", -1),
  ct = e("option", { value: "email" }, "E-mail", -1),
  ut = e("option", { value: "phoneNumber" }, "Telefone", -1),
  mt = e("option", { value: "randomKey" }, "Chave Aleatória", -1),
  ft = [nt, dt, ct, ut, mt],
  ht = e(
    "button",
    {
      type: "submit",
      class:
        "mt-5 w-full rounded bg-[var(--ci-primary-color)] px-4 py-3 font-semibold text-black hover:bg-[var(--ci-primary-color)]",
    },
    [
      w(" Solicitar agora "),
      e("i", { class: "fa-regular fa-arrow-right ml-2" }),
    ],
    -1
  );
function pt(o, t, l, u, s, r) {
  const y = L("BaseLayout");
  return (
    i(),
    F(y, null, {
      default: M(() => {
        var _, b;
        return [
          e(
            "div",
            {
              class: j([
                r.topNav ? "mt-[79px] lg:mt-[116px]" : "mt-[48px] lg:mt-[50px]",
                "relative mx-auto min-h-[calc(100vh-565px)] p-4 lg:container",
              ]),
            },
            [
              s.wallet && !s.isLoading
                ? (i(),
                  n("div", B, [
                    s.isShowForm
                      ? (i(),
                        n("div", N, [
                          s.banners && s.banners.length > 0
                            ? (i(),
                              n("div", T, [
                                e(
                                  "img",
                                  {
                                    src: `/storage/${s.banners[0].image}`,
                                    class: "h-auto w-full",
                                    width: "1000",
                                    height: "370",
                                  },
                                  null,
                                  8,
                                  z
                                ),
                              ]))
                            : x("", !0),
                          e("div", V, [
                            G,
                            e("div", W, [
                              P,
                              e("div", D, [
                                m(
                                  e(
                                    "input",
                                    {
                                      type: "text",
                                      id: "referenceCode",
                                      class:
                                        "rounded-gray-100 z-20 block w-full rounded border-gray-600 bg-gray-700 p-4 text-sm text-white placeholder-gray-400 focus:border-gray-500",
                                      placeholder: "Código de Referênia",
                                      "onUpdate:modelValue":
                                        t[0] ||
                                        (t[0] = (a) => (s.referencecode = a)),
                                      required: "",
                                    },
                                    null,
                                    512
                                  ),
                                  [[h, s.referencecode]]
                                ),
                                e(
                                  "button",
                                  {
                                    onClick:
                                      t[1] ||
                                      (t[1] = d(
                                        (...a) =>
                                          r.copyCode && r.copyCode(...a),
                                        ["prevent"]
                                      )),
                                    type: "submit",
                                    class:
                                      "absolute end-0 top-0 h-full rounded-e bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-gray-800",
                                  },
                                  A
                                ),
                              ]),
                            ]),
                            e("div", U, [
                              Z,
                              e("div", O, [
                                m(
                                  e(
                                    "input",
                                    {
                                      type: "text",
                                      id: "referenceLink",
                                      class:
                                        "rounded-gray-100 z-20 block w-full rounded border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500",
                                      placeholder: "Link de Referência",
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = (a) => (s.referencelink = a)),
                                      required: "",
                                    },
                                    null,
                                    512
                                  ),
                                  [[h, s.referencelink]]
                                ),
                                e(
                                  "button",
                                  {
                                    onClick:
                                      t[3] ||
                                      (t[3] = d(
                                        (...a) =>
                                          r.copyLink && r.copyLink(...a),
                                        ["prevent"]
                                      )),
                                    type: "submit",
                                    class:
                                      "absolute end-0 top-0 h-full rounded-e bg-gray-200 px-4 py-2 text-gray-500 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800",
                                  },
                                  J
                                ),
                              ]),
                            ]),
                            e("div", K, [
                              Y,
                              e(
                                "button",
                                {
                                  onClick:
                                    t[4] ||
                                    (t[4] = (a) =>
                                      o.$router.push("/terms/service")),
                                  type: "button",
                                  class:
                                    "text-sm text-gray-300 hover:text-opacity-80",
                                },
                                [w(" Termos e condições de Referência "), Q]
                              ),
                            ]),
                          ]),
                        ]))
                      : (i(),
                        n("div", X, [
                          s.isLoadingGenerate
                            ? x("", !0)
                            : (i(),
                              n("div", $, [
                                ee,
                                e("div", te, [
                                  e(
                                    "button",
                                    {
                                      onClick:
                                        t[5] ||
                                        (t[5] = d(
                                          (...a) =>
                                            r.generateCode &&
                                            r.generateCode(...a),
                                          ["prevent"]
                                        )),
                                      type: "button",
                                      class:
                                        "w-full rounded bg-[var(--ci-primary-color)] py-3 font-semibold text-black hover:opacity-90",
                                    },
                                    " Gerar o código "
                                  ),
                                ]),
                              ])),
                          s.isLoadingGenerate
                            ? (i(),
                              n("div", oe, [
                                se,
                                e("span", ae, c(o.$t("Loading")) + "...", 1),
                              ]))
                            : x("", !0),
                        ])),
                    e("div", re, [
                      e("div", le, [
                        e("div", ie, [
                          e("div", ne, [
                            e("div", de, [
                              ce,
                              e(
                                "h2",
                                ue,
                                c(
                                  o.state.currencyFormat(
                                    parseFloat(s.wallet.refer_rewards),
                                    s.wallet.currency
                                  )
                                ),
                                1
                              ),
                            ]),
                          ]),
                          e(
                            "button",
                            {
                              onClick:
                                t[6] ||
                                (t[6] = d(
                                  (...a) =>
                                    r.toggleWithdrawalModal &&
                                    r.toggleWithdrawalModal(...a),
                                  ["prevent"]
                                )),
                              type: "button",
                              class:
                                "flex w-[100%] items-center justify-center rounded bg-[var(--ci-primary-color)] py-4 font-semibold text-black hover:bg-opacity-80 hover:opacity-90 sm:w-[initial] sm:px-20",
                            },
                            " Saque "
                          ),
                        ]),
                        e("div", me, [
                          e("div", fe, [he, e("h2", pe, c(s.indications), 1)]),
                        ]),
                      ]),
                      e("div", ge, [
                        e("div", xe, [
                          e("div", we, [
                            e("div", _e, [
                              e(
                                "img",
                                {
                                  src: "/assets/images/network.a415d3eb.png",
                                  alt: "",
                                  width: "28",
                                },
                                null,
                                8,
                                be
                              ),
                              ye,
                            ]),
                          ]),
                          e("div", ve, [
                            e(
                              "h1",
                              Ce,
                              c(r.userData.affiliate_revenue_share) + "% ",
                              1
                            ),
                          ]),
                        ]),
                        e("div", ke, [
                          e("div", Re, [
                            e("div", Se, [
                              e(
                                "img",
                                {
                                  src: "/assets/images/discount.bf090f3a.png",
                                  alt: "",
                                  width: "28",
                                },
                                null,
                                8,
                                Le
                              ),
                              Fe,
                            ]),
                          ]),
                          e("div", Me, [
                            e(
                              "h1",
                              je,
                              c(
                                o.state.currencyFormat(
                                  parseFloat(r.userData.affiliate_cpa),
                                  s.wallet.currency
                                )
                              ),
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]))
                : (i(),
                  n("div", qe, [
                    e("div", Ee, [
                      Be,
                      e("span", Ne, c(o.$t("Loading")) + "...", 1),
                    ]),
                  ])),
            ],
            2
          ),
          e("div", Te, [
            e("div", ze, [
              e("div", Ve, [
                e("div", Ge, [
                  e("h1", null, c(o.$t("Referral Reward Rules")), 1),
                  e(
                    "button",
                    {
                      class: "",
                      onClick:
                        t[7] ||
                        (t[7] = d(
                          (...a) =>
                            r.toggleReferenceRewards &&
                            r.toggleReferenceRewards(...a),
                          ["prevent"]
                        )),
                    },
                    Pe
                  ),
                ]),
                De,
              ]),
            ]),
          ]),
          e("div", Ie, [
            e("div", Ae, [
              e(
                "div",
                {
                  class:
                    "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                  onClick:
                    t[8] ||
                    (t[8] = d(
                      (...a) =>
                        r.toggleCommissionRewards &&
                        r.toggleCommissionRewards(...a),
                      ["prevent"]
                    )),
                },
                Ze
              ),
              Oe,
            ]),
          ]),
          e("div", He, [
            e("div", Je, [
              e(
                "div",
                {
                  class:
                    "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                  onClick:
                    t[9] ||
                    (t[9] = d(
                      (...a) =>
                        r.closeWithdrawModal && r.closeWithdrawModal(...a),
                      ["prevent"]
                    )),
                },
                Ye
              ),
              e("div", Qe, [
                Xe,
                e("div", $e, [
                  e(
                    "form",
                    {
                      action: "",
                      onSubmit:
                        t[14] ||
                        (t[14] = d(
                          (...a) => r.makeWithdrawal && r.makeWithdrawal(...a),
                          ["prevent"]
                        )),
                    },
                    [
                      e("div", et, [
                        tt,
                        m(
                          e(
                            "input",
                            {
                              id: "name",
                              "onUpdate:modelValue":
                                t[10] ||
                                (t[10] = (a) => (s.withdrawalForm.name = a)),
                              type: "text",
                              class:
                                "mb-2 w-full appearance-none rounded border-none bg-[#424344] placeholder-white focus:outline-none focus:ring-0",
                              placeholder: "Digite o nome do titular da conta",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[h, s.withdrawalForm.name]]
                        ),
                        ot,
                        m(
                          e(
                            "input",
                            {
                              id: "amount",
                              "onUpdate:modelValue":
                                t[11] ||
                                (t[11] = (a) => (s.withdrawalForm.amount = a)),
                              type: "number",
                              class:
                                "w-full appearance-none rounded border-none bg-[#424344] py-3 placeholder-white focus:outline-none focus:ring-0",
                              placeholder: "Valor do saque",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[h, s.withdrawalForm.amount]]
                        ),
                        s.wallet
                          ? (i(),
                            n(
                              "span",
                              st,
                              " Saldo: " +
                                c(
                                  o.state.currencyFormat(
                                    parseFloat(
                                      (_ = s.wallet) == null
                                        ? void 0
                                        : _.refer_rewards
                                    ),
                                    (b = s.wallet) == null ? void 0 : b.currency
                                  )
                                ),
                              1
                            ))
                          : x("", !0),
                      ]),
                      e("div", at, [
                        rt,
                        m(
                          e(
                            "input",
                            {
                              id: "pix-key",
                              "onUpdate:modelValue":
                                t[12] ||
                                (t[12] = (a) => (s.withdrawalForm.pix_key = a)),
                              type: "text",
                              class:
                                "w-full appearance-none rounded border-none bg-[#424344] py-3 placeholder-gray-400 focus:outline-none focus:ring-0",
                              placeholder: "Digite a sua Chave pix",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[h, s.withdrawalForm.pix_key]]
                        ),
                      ]),
                      e("div", lt, [
                        it,
                        m(
                          e(
                            "select",
                            {
                              "onUpdate:modelValue":
                                t[13] ||
                                (t[13] = (a) =>
                                  (s.withdrawalForm.pix_type = a)),
                              name: "type_document",
                              class:
                                "w-full appearance-none rounded border-none bg-[#424344] py-3 placeholder-white focus:outline-none focus:ring-0",
                              required: "",
                            },
                            ft,
                            512
                          ),
                          [[q, s.withdrawalForm.pix_type]]
                        ),
                      ]),
                      ht,
                    ],
                    32
                  ),
                ]),
              ]),
            ]),
          ]),
        ];
      }),
      _: 1,
    })
  );
}
const bt = k(E, [["render", pt]]);
export { bt as default };
