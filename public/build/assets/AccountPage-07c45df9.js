import { B as k } from "./BaseLayout-e04ce02c.js";
import {
  _ as P,
  L as V,
  K as U,
  T,
  g as b,
  j as S,
  X as C,
  k as l,
  y as A,
  E as B,
  m as e,
  q as a,
  v as m,
  t as y,
  G as x,
  U as N,
  l as d,
  z as c,
  Y as _,
  s as w,
  u as g,
  N as E,
  B as q,
  C as M,
} from "./app-a41775fa.js";
import { u as D } from "./CookiesComponent-3cc93cf3.js";
import "./WithdrawModal-008a788d.js";
const j = {
    name: "AccountPage",
    components: { BaseLayout: k },
    data() {
      return {
        phone: "",
        username: "",
        selectedPixkey: "cpf",
        currentPixkeyValue: "",
        currentPassword: "",
        confirmPassword: "",
        newPassword: "",
        inputTypePassword: "password",
        inputTypeNewPassword: "password",
        inputTypeConfirmPassword: "password",
        totalEarnings: 0,
        totalBets: 0,
        sumBets: 0,
      };
    },
    computed: {
      settingsStore() {
        return V();
      },
      authStore() {
        return U();
      },
      topNav() {
        return D().getTopNavStatus;
      },
    },
    async mounted() {
      (this.phone = this.authStore.user.phone),
        (this.currentPixkeyValue = this.authStore.user.cpf || ""),
        (this.username = this.authStore.user.name),
        await this.getProfile();
    },
    methods: {
      async handleUpdateUserProfile(i) {
        const s = T(),
          u = i.target.dataset.form,
          h = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        let t = {};
        if (u === "general-informations") {
          if (!h.test(this.phone)) {
            s.error("O telefone digitado não é válido");
            return;
          }
          (t = { phone: this.phone }), this.updateUserProfile(t);
          return;
        }
        if (u === "user-informations") {
          if (!(this.username.length !== 0)) {
            s.error("O nome inserido não é válido");
            return;
          }
          (t = { username: this.username }), this.updateUserProfile(t);
          return;
        }
        if (u === "pixkey") {
          const r = h.test(this.currentPixkeyValue),
            f = this.selectedPixkey === "phone",
            p = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            o = this.selectedPixkey === "email",
            v = p.test(this.currentPixkeyValue);
          if ((f && !r) || (o && !v) || this.currentPixkeyValue.length === 0) {
            s.error("A chave pix digitada não é válida");
            return;
          }
          (t = {
            pixkeyType: this.selectedPixkey,
            pixkey: this.currentPixkeyValue,
          }),
            this.updateUserProfile(t);
          return;
        }
        if (u === "change-password") {
          const r = this.currentPassword.length !== 0,
            f = this.newPassword.length !== 0,
            p =
              this.confirmPassword.length !== 0 &&
              this.confirmPassword === this.newPassword;
          if (!r || !f || !p) {
            s.error("A senha digitada não é válida");
            return;
          }
          const o = {
            password: this.currentPassword,
            newPassword: this.newPassword,
          };
          this.updateUserProfile(o);
          return;
        }
      },
      async updateUserProfile(i) {
        try {
          await b.post("auth/update-profile", i);
        } catch (s) {
          Object.entries(JSON.parse(s.request.responseText)).forEach(
            ([u, h]) => {
              toast.error(`${h}`);
            }
          );
        }
      },
      async getProfile() {
        try {
          const i = await b.get("/profile/");
          (this.totalEarnings = i.data.totalEarnings),
            (this.totalBets = i.data.totalBets),
            (this.sumBets = i.data.sumBets);
        } catch (i) {
          Object.entries(JSON.parse(i.request.responseText)).forEach(
            ([s, u]) => {
              toast.error(`${u}`);
            }
          );
        }
      },
      showPassword(i) {
        this[i] = this[i] === "password" ? "text" : "password";
      },
    },
    watch: {
      selectedPixkey(i, s) {
        this.currentPixkeyValue = this.authStore.user[i] || "";
      },
    },
  },
  n = (i) => (q("data-v-36d619a4"), (i = i()), M(), i),
  I = { class: "grid gap-6" },
  O = { class: "rounded-md bg-[#323637] p-6" },
  z = n(() =>
    e(
      "h2",
      { class: "mb-8 text-2xl font-bold text-[var(--ci-primary-color)]" },
      "Informações gerais",
      -1
    )
  ),
  L = { class: "mb-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2" },
  J = n(() =>
    e(
      "label",
      { for: "email", class: "mb-2 block text-sm font-medium" },
      "E-mail",
      -1
    )
  ),
  Z = ["value"],
  F = n(() =>
    e(
      "label",
      { for: "user_id", class: "mb-2 block text-sm font-medium" },
      "ID do Usuário",
      -1
    )
  ),
  R = ["value"],
  G = n(() =>
    e(
      "label",
      { for: "phone", class: "mb-2 block text-sm font-medium" },
      "Telefone",
      -1
    )
  ),
  K = { class: "relative" },
  X = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Y = n(() =>
    e(
      "svg",
      {
        class: "h-5 w-5",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      [
        e("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 11.917 9.724 16.5 19 7.5",
        }),
      ],
      -1
    )
  ),
  H = { class: "rounded-md bg-[#323637] p-6" },
  Q = n(() =>
    e(
      "h2",
      { class: "mb-8 text-2xl font-bold text-[var(--ci-primary-color)]" },
      "Informações do usuário",
      -1
    )
  ),
  W = {
    class:
      "mb-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-3",
  },
  $ = n(() =>
    e(
      "label",
      { for: "name", class: "mb-2 block text-sm font-medium" },
      "Nome",
      -1
    )
  ),
  ee = n(() =>
    e(
      "label",
      { for: "currency", class: "mb-2 block text-sm font-medium" },
      "Moeda",
      -1
    )
  ),
  te = ["value"],
  se = n(() =>
    e(
      "label",
      { for: "document", class: "mb-2 block text-sm font-medium" },
      "Documento",
      -1
    )
  ),
  oe = ["value"],
  ne = n(() =>
    e(
      "svg",
      {
        class: "h-5 w-5",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      [
        e("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 11.917 9.724 16.5 19 7.5",
        }),
      ],
      -1
    )
  ),
  re = { class: "rounded-md bg-[#323637] p-6" },
  ie = n(() =>
    e(
      "h2",
      { class: "mb-8 text-2xl font-bold text-[var(--ci-primary-color)]" },
      "Meu Pix",
      -1
    )
  ),
  ae = { class: "mb-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2" },
  le = n(() =>
    e(
      "label",
      { for: "type_key", class: "mb-2 block text-sm font-medium" },
      "Tipo de chave",
      -1
    )
  ),
  de = n(() =>
    e(
      "option",
      { value: "cpf", selected: "", class: "uppercase" },
      "CPF/CNPJ",
      -1
    )
  ),
  ue = n(() => e("option", { value: "email" }, "E-mail", -1)),
  ce = n(() => e("option", { value: "phone" }, "Telefone", -1)),
  pe = n(() => e("option", { value: "random_key" }, "Chave aleatória", -1)),
  me = [de, ue, ce, pe],
  he = n(() =>
    e(
      "label",
      { for: "key_pix", class: "mb-2 block text-sm font-medium" },
      "Chave pix",
      -1
    )
  ),
  fe = { class: "relative" },
  xe = ["disabled"],
  ye = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  _e = n(() =>
    e(
      "svg",
      {
        class: "h-5 w-5",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      [
        e("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 11.917 9.724 16.5 19 7.5",
        }),
      ],
      -1
    )
  ),
  we = { class: "rounded-md bg-[#323637] p-6" },
  ge = n(() =>
    e(
      "h2",
      { class: "mb-8 text-2xl font-bold text-[var(--ci-primary-color)]" },
      "Alterar senha",
      -1
    )
  ),
  be = { class: "mb-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2" },
  ve = n(() =>
    e(
      "label",
      { for: "current_password", class: "mb-2 block text-sm font-medium" },
      "Senha atual",
      -1
    )
  ),
  ke = { class: "relative" },
  Pe = ["type"],
  Ve = { key: 0, class: "fa-regular fa-eye" },
  Ue = { key: 1, class: "fa-sharp fa-regular fa-eye-slash" },
  Te = n(() =>
    e(
      "label",
      { for: "new_password", class: "mb-2 block text-sm font-medium" },
      "Nova senha",
      -1
    )
  ),
  Se = { class: "relative" },
  Ce = ["type"],
  Ae = { key: 0, class: "fa-regular fa-eye" },
  Be = { key: 1, class: "fa-sharp fa-regular fa-eye-slash" },
  Ne = n(() =>
    e(
      "label",
      { for: "confirm_password", class: "mb-2 block text-sm font-medium" },
      "Confirmar senha",
      -1
    )
  ),
  Ee = { class: "relative" },
  qe = ["type"],
  Me = { key: 0, class: "fa-regular fa-eye" },
  De = { key: 1, class: "fa-sharp fa-regular fa-eye-slash" },
  je = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Ie = n(() =>
    e(
      "svg",
      {
        class: "h-5 w-5",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      [
        e("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 11.917 9.724 16.5 19 7.5",
        }),
      ],
      -1
    )
  ),
  Oe = { class: "rounded-md bg-[#323637] p-6" },
  ze = n(() =>
    e(
      "h2",
      { class: "mb-8 text-2xl font-bold text-[var(--ci-primary-color)]" },
      "Estatísticas",
      -1
    )
  ),
  Le = { class: "flex flex-wrap items-center gap-6" },
  Je = { class: "w-[100%] sm:flex-1 xl:w-[200px] xl:flex-initial" },
  Ze = n(() =>
    e("span", { class: "mb-2 inline-block text-sm" }, "Total de ganhos", -1)
  ),
  Fe = { class: "rounded bg-[#424344] p-4 text-center" },
  Re = { class: "text-lg font-medium" },
  Ge = { class: "w-[100%] sm:flex-1 xl:w-[200px] xl:flex-initial" },
  Ke = n(() =>
    e("span", { class: "mb-2 inline-block text-sm" }, "Apostas totais", -1)
  ),
  Xe = { class: "rounded bg-[#424344] p-4 text-center" },
  Ye = { class: "text-lg font-medium" },
  He = { class: "w-[100%] sm:flex-1 xl:w-[200px] xl:flex-initial" },
  Qe = n(() =>
    e("span", { class: "mb-2 inline-block text-sm" }, "Total apostado", -1)
  ),
  We = { class: "rounded bg-[#424344] p-4 text-center" },
  $e = { class: "text-lg font-medium" };
function et(i, s, u, h, t, r) {
  const f = S("BaseLayout"),
    p = C("maska");
  return (
    l(),
    A(f, null, {
      default: B(() => [
        e(
          "div",
          {
            class: E([
              r.topNav ? "mt-[79px] lg:mt-[116px]" : "mt-[48px] lg:mt-20",
              "mx-auto w-full p-4 sm:max-w-[690px] md:py-5 lg:max-w-[1140px] lg:px-4 lg:py-12",
            ]),
          },
          [
            e("div", I, [
              e("div", O, [
                z,
                e("form", L, [
                  e("div", null, [
                    J,
                    e(
                      "input",
                      {
                        id: "email",
                        type: "email",
                        class:
                          "w-full cursor-not-allowed appearance-none rounded-md border-none bg-[#424344] py-3 opacity-50 focus:outline-none focus:ring-0",
                        value: r.authStore.user.email,
                        required: "",
                        disabled: "",
                      },
                      null,
                      8,
                      Z
                    ),
                  ]),
                  e("div", null, [
                    F,
                    e(
                      "input",
                      {
                        id: "user_id",
                        type: "text",
                        class:
                          "w-full cursor-not-allowed appearance-none rounded-md border-none bg-[#424344] py-3 opacity-50 focus:outline-none focus:ring-0",
                        value: r.authStore.user.id,
                        required: "",
                        disabled: "",
                      },
                      null,
                      8,
                      R
                    ),
                  ]),
                  e("div", null, [
                    G,
                    e("div", K, [
                      a(
                        e(
                          "input",
                          {
                            type: "text",
                            name: "phone",
                            id: "phone",
                            "data-maska":
                              "['(##) ####-####', '(##) #####-####']",
                            class:
                              "w-full appearance-none rounded-md border-none bg-[#424344] py-3 focus:outline-none focus:ring-0",
                            "onUpdate:modelValue":
                              s[0] || (s[0] = (o) => (t.phone = o)),
                            required: "",
                          },
                          null,
                          512
                        ),
                        [[p], [m, t.phone]]
                      ),
                      a(e("div", X, " Digite um telefone válido ", 512), [
                        [y, t.phone.length === 0],
                      ]),
                    ]),
                  ]),
                ]),
                e(
                  "button",
                  {
                    type: "button",
                    "data-form": "general-informations",
                    class:
                      "flex items-center gap-2 rounded bg-[var(--ci-primary-color)] px-3 py-2 font-medium text-gray-800 hover:opacity-90",
                    onClick:
                      s[1] ||
                      (s[1] = (...o) =>
                        r.handleUpdateUserProfile &&
                        r.handleUpdateUserProfile(...o)),
                  },
                  [Y, x(" Salvar ")]
                ),
              ]),
              e("div", H, [
                Q,
                e("form", W, [
                  e("div", null, [
                    $,
                    a(
                      e(
                        "input",
                        {
                          id: "name",
                          type: "text",
                          class:
                            "w-full appearance-none rounded-md border-none bg-[#424344] py-3 uppercase focus:outline-none focus:ring-0",
                          "onUpdate:modelValue":
                            s[2] || (s[2] = (o) => (t.username = o)),
                        },
                        null,
                        512
                      ),
                      [[m, t.username]]
                    ),
                  ]),
                  e("div", null, [
                    ee,
                    e(
                      "input",
                      {
                        id: "currency",
                        type: "text",
                        class:
                          "w-full cursor-not-allowed appearance-none rounded-md border-none bg-[#424344] py-3 opacity-50 focus:outline-none focus:ring-0",
                        value: r.settingsStore.setting.currency_code,
                        disabled: "",
                      },
                      null,
                      8,
                      te
                    ),
                  ]),
                  e("div", null, [
                    se,
                    e(
                      "input",
                      {
                        id: "document",
                        type: "text",
                        class:
                          "w-full cursor-not-allowed appearance-none rounded-md border-none bg-[#424344] py-3 opacity-50 focus:outline-none focus:ring-0",
                        value: r.authStore.user.cpf,
                        disabled: "",
                      },
                      null,
                      8,
                      oe
                    ),
                  ]),
                ]),
                e(
                  "button",
                  {
                    type: "button",
                    "data-form": "user-informations",
                    class:
                      "flex items-center gap-2 rounded bg-[var(--ci-primary-color)] px-3 py-2 font-medium text-gray-800 hover:opacity-90",
                    onClick:
                      s[3] ||
                      (s[3] = (...o) =>
                        r.handleUpdateUserProfile &&
                        r.handleUpdateUserProfile(...o)),
                  },
                  [ne, x(" Salvar ")]
                ),
              ]),
              e("div", re, [
                ie,
                e("form", ae, [
                  e("div", null, [
                    le,
                    a(
                      e(
                        "select",
                        {
                          name: "type_key",
                          id: "type_key",
                          "onUpdate:modelValue":
                            s[4] || (s[4] = (o) => (t.selectedPixkey = o)),
                          class:
                            "w-full appearance-none rounded-md border-none bg-[#424344] py-3 text-sm text-white focus:outline-none focus:ring-0",
                        },
                        me,
                        512
                      ),
                      [[N, t.selectedPixkey]]
                    ),
                  ]),
                  e("div", null, [
                    he,
                    e("div", fe, [
                      t.selectedPixkey === "cpf"
                        ? a(
                            (l(),
                            d(
                              "input",
                              {
                                key: 0,
                                id: "key_pix",
                                type: "text",
                                "onUpdate:modelValue":
                                  s[5] ||
                                  (s[5] = (o) => (t.currentPixkeyValue = o)),
                                class: "default-input blocked-input",
                                disabled: t.currentPixkeyValue.length !== 0,
                              },
                              null,
                              8,
                              xe
                            )),
                            [[m, t.currentPixkeyValue]]
                          )
                        : c("", !0),
                      t.selectedPixkey === "email"
                        ? a(
                            (l(),
                            d(
                              "input",
                              {
                                key: 1,
                                id: "key_pix",
                                type: "email",
                                "onUpdate:modelValue":
                                  s[6] ||
                                  (s[6] = (o) => (t.currentPixkeyValue = o)),
                                class: "default-input",
                                required: "",
                              },
                              null,
                              512
                            )),
                            [[m, t.currentPixkeyValue]]
                          )
                        : t.selectedPixkey === "phone"
                        ? a(
                            (l(),
                            d(
                              "input",
                              {
                                key: 2,
                                id: "key_pix",
                                type: "tel",
                                "onUpdate:modelValue":
                                  s[7] ||
                                  (s[7] = (o) => (t.currentPixkeyValue = o)),
                                "data-maska":
                                  "['(##) ####-####', '(##) #####-####']",
                                class: "default-input",
                                required: "",
                              },
                              null,
                              512
                            )),
                            [[m, t.currentPixkeyValue], [p]]
                          )
                        : t.selectedPixkey === "random_key"
                        ? a(
                            (l(),
                            d(
                              "input",
                              {
                                key: 3,
                                id: "key_pix",
                                type: "text",
                                "onUpdate:modelValue":
                                  s[8] ||
                                  (s[8] = (o) => (t.currentPixkeyValue = o)),
                                class: "default-input",
                                required: "",
                              },
                              null,
                              512
                            )),
                            [[m, t.currentPixkeyValue]]
                          )
                        : c("", !0),
                      a(e("div", ye, " Digite uma chave pix válida ", 512), [
                        [y, t.currentPixkeyValue.length === 0],
                      ]),
                    ]),
                  ]),
                ]),
                e(
                  "button",
                  {
                    type: "button",
                    "data-form": "pixkey",
                    class:
                      "flex items-center gap-2 rounded bg-[var(--ci-primary-color)] px-3 py-2 font-medium text-gray-800 hover:opacity-90",
                    onClick:
                      s[9] ||
                      (s[9] = (...o) =>
                        r.handleUpdateUserProfile &&
                        r.handleUpdateUserProfile(...o)),
                  },
                  [_e, x(" Salvar ")]
                ),
              ]),
              e("div", we, [
                ge,
                e("form", be, [
                  e("div", null, [
                    ve,
                    e("div", ke, [
                      a(
                        e(
                          "input",
                          {
                            id: "current_password",
                            type: t.inputTypePassword,
                            "onUpdate:modelValue":
                              s[10] || (s[10] = (o) => (t.currentPassword = o)),
                            class:
                              "w-full appearance-none rounded-md border-none bg-[#424344] py-3 focus:outline-none focus:ring-0",
                            placeholder: "Senha atual",
                            required: "",
                          },
                          null,
                          8,
                          Pe
                        ),
                        [[_, t.currentPassword]]
                      ),
                      e(
                        "button",
                        {
                          tabindex: "-1",
                          type: "button",
                          onClick:
                            s[11] ||
                            (s[11] = w(
                              (o) => r.showPassword("inputTypePassword"),
                              ["prevent"]
                            )),
                          class:
                            "absolute inset-y-0 right-0 flex items-center px-3",
                        },
                        [
                          t.inputTypePassword === "password"
                            ? (l(), d("i", Ve))
                            : c("", !0),
                          t.inputTypePassword === "text"
                            ? (l(), d("i", Ue))
                            : c("", !0),
                        ]
                      ),
                    ]),
                  ]),
                  e("div", null, [
                    Te,
                    e("div", Se, [
                      a(
                        e(
                          "input",
                          {
                            id: "new_password",
                            type: t.inputTypeNewPassword,
                            "onUpdate:modelValue":
                              s[12] || (s[12] = (o) => (t.newPassword = o)),
                            class:
                              "w-full appearance-none rounded-md border-none bg-[#424344] py-3 focus:outline-none focus:ring-0",
                            placeholder: "Nova senha",
                            required: "",
                          },
                          null,
                          8,
                          Ce
                        ),
                        [[_, t.newPassword]]
                      ),
                      e(
                        "button",
                        {
                          tabindex: "-1",
                          type: "button",
                          onClick:
                            s[13] ||
                            (s[13] = w(
                              (o) => r.showPassword("inputTypeNewPassword"),
                              ["prevent"]
                            )),
                          class:
                            "absolute inset-y-0 right-0 flex items-center px-3",
                        },
                        [
                          t.inputTypeNewPassword === "password"
                            ? (l(), d("i", Ae))
                            : c("", !0),
                          t.inputTypeNewPassword === "text"
                            ? (l(), d("i", Be))
                            : c("", !0),
                        ]
                      ),
                    ]),
                  ]),
                  e("div", null, [
                    Ne,
                    e("div", Ee, [
                      a(
                        e(
                          "input",
                          {
                            id: "confirm_password",
                            type: t.inputTypeConfirmPassword,
                            "onUpdate:modelValue":
                              s[14] || (s[14] = (o) => (t.confirmPassword = o)),
                            class:
                              "w-full appearance-none rounded-md border-none bg-[#424344] py-3 focus:outline-none focus:ring-0",
                            placeholder: "Confirmar senha",
                            required: "",
                          },
                          null,
                          8,
                          qe
                        ),
                        [[_, t.confirmPassword]]
                      ),
                      e(
                        "button",
                        {
                          tabindex: "-1",
                          type: "button",
                          onClick:
                            s[15] ||
                            (s[15] = w(
                              (o) => r.showPassword("inputTypeConfirmPassword"),
                              ["prevent"]
                            )),
                          class:
                            "absolute inset-y-0 right-0 flex items-center px-3",
                        },
                        [
                          t.inputTypeConfirmPassword === "password"
                            ? (l(), d("i", Me))
                            : c("", !0),
                          t.inputTypeConfirmPassword === "text"
                            ? (l(), d("i", De))
                            : c("", !0),
                        ]
                      ),
                      a(
                        e("div", je, " Senha de confirmação não confere ", 512),
                        [[y, t.newPassword !== t.confirmPassword]]
                      ),
                    ]),
                  ]),
                ]),
                e(
                  "button",
                  {
                    type: "button",
                    "data-form": "change-password",
                    class:
                      "flex items-center gap-2 rounded bg-[var(--ci-primary-color)] px-3 py-2 font-medium text-gray-800 hover:opacity-90",
                    onClick:
                      s[16] ||
                      (s[16] = (...o) =>
                        r.handleUpdateUserProfile &&
                        r.handleUpdateUserProfile(...o)),
                  },
                  [Ie, x(" Enviar ")]
                ),
              ]),
              e("div", Oe, [
                ze,
                e("div", Le, [
                  e("div", Je, [
                    Ze,
                    e("div", Fe, [e("span", Re, g(t.totalEarnings), 1)]),
                  ]),
                  e("div", Ge, [
                    Ke,
                    e("div", Xe, [e("span", Ye, g(t.totalBets), 1)]),
                  ]),
                  e("div", He, [
                    Qe,
                    e("div", We, [e("span", $e, g(t.sumBets), 1)]),
                  ]),
                ]),
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
const it = P(j, [
  ["render", et],
  ["__scopeId", "data-v-36d619a4"],
]);
export { it as default };
