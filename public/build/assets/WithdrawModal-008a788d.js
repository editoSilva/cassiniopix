import {
  _ as Ke,
  P as ar,
  J as Ye,
  L as wt,
  T as Re,
  K as mt,
  g as Ae,
  j as lt,
  X as mn,
  k as $,
  y as _t,
  m as a,
  l as V,
  z as le,
  s as G,
  q as te,
  v as Ce,
  N as fe,
  G as ce,
  t as Le,
  Y as uo,
  D as ct,
  E as lr,
  a1 as xt,
  B as St,
  C as Ct,
  u as he,
  A as cr,
  H as po,
  a2 as ur,
  U as dr,
  I as pr,
} from "./app-a41775fa.js";
import { b as jt } from "./CookiesComponent-3cc93cf3.js";
const hr = {
    name: "RegisterModal",
    data() {
      return {
        modalRegister: {},
        modalConfirmClose: {},
        modalRegisterStatus: !0,
        modalConfirmCloseStatus: !1,
        isLoadingRegister: !1,
        isReferral: !1,
        currentFocus: "",
        typeInputPassword: "password",
        registerForm: {
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          cpf: "",
          phone: "",
          reference_code: "",
          term_a: !0,
          agreement: !0,
        },
        registerFormAlerts: {
          name: !1,
          email: !1,
          password: !1,
          password_confirmation: !1,
          cpf: !1,
          reference_code: !1,
          phone: "",
          term_a: !1,
          agreement: !1,
        },
      };
    },
    setup() {
      return { router: ar() };
    },
    computed: {
      modalStore() {
        return Ye();
      },
      registerModalStatus() {
        return this.useModalStore.getRegisterModalStatus();
      },
      confirmCloseModalStatus() {
        return this.useModalStore.getConfirmCloseModalStatus();
      },
      setting() {
        return wt().setting;
      },
    },
    mounted() {
      (this.modalRegister = new jt(document.getElementById("modalElRegister"), {
        placement: "center",
        backdrop: "dynamic",
        backdropClasses: "bg-black bg-opacity-30 fixed inset-0 z-40",
        closable: !1,
      })),
        (this.modalConfirmClose = new jt(
          document.getElementById("modalConfirmClose"),
          {
            placement: "center",
            backdrop: "dynamic",
            backdropClasses: "bg-black bg-opacity-30 fixed inset-0 z-40",
            closable: !1,
          }
        )),
        this.$route.query.code &&
          ((this.isReferral = !0),
          (this.registerForm.reference_code = this.$route.query.code));
    },
    methods: {
      registerSubmit: function (t) {
        const e = this,
          n = Re();
        e.isLoadingRegister = !0;
        const o = mt();
        Ae.post("auth/register", e.registerForm)
          .then((r) => {
            r.data.access_token !== void 0 &&
              (o.setToken(r.data.access_token),
              o.setUser(r.data.user),
              o.setIsAuth(!0),
              (e.registerForm = {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                cpf: "",
                phone: "",
                reference_code: "",
                term_a: !0,
                agreement: !0,
              }),
              (e.registerFormAlerts = {
                name: !1,
                email: !1,
                password: !1,
                password_confirmation: !1,
                cpf: !1,
                phone: !1,
                reference_code: !1,
                term_a: !1,
                agreement: !1,
              })),
              e.modalStore.setRegisterModalStatus(!1),
              e.router.push({ name: "profileWallet" }),
              n.success(e.$t("Sua conta foi criada com sucesso!")),
              (e.isLoadingRegister = !1);
          })
          .catch((r) => {
            Object.entries(JSON.parse(r.request.responseText)).forEach(
              ([s, i]) => {
                n.error(`${i}`);
              }
            ),
              (e.isLoadingRegister = !1);
          });
      },
      closeModal() {
        (this.modalRegisterStatus = !1), (this.modalConfirmCloseStatus = !0);
      },
      closeConfirmCloseModal() {
        (this.registerForm = {
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          cpf: "",
          phone: "",
          reference_code: "",
          term_a: !1,
          agreement: !1,
        }),
          (this.registerFormAlerts = {
            name: !1,
            email: !1,
            password: !1,
            password_confirmation: !1,
            cpf: !1,
            reference_code: !1,
            term_a: !1,
            agreement: !1,
          }),
          this.$route.query.code &&
            (this.registerForm.reference_code = this.$route.query.code),
          (this.modalRegisterStatus = !1),
          (this.modalConfirmCloseStatus = !1),
          this.modalStore.setRegisterModalStatus(!1);
      },
      continueRegister() {
        (this.modalRegisterStatus = !0), (this.modalConfirmCloseStatus = !1);
      },
      togglePassword: function () {
        this.typeInputPassword === "password"
          ? (this.typeInputPassword = "text")
          : (this.typeInputPassword = "password");
      },
      focusInput(t) {
        this.currentFocus = t.target.name;
      },
      focusoutInput() {
        this.registerForm[this.currentFocus].length === 0
          ? ((this.registerFormAlerts[this.currentFocus] = !0),
            (this.currentFocus = ""))
          : ((this.registerFormAlerts[this.currentFocus] = !1),
            (this.currentFocus = ""));
      },
      continueLogin() {
        this.modalStore.setRegisterModalStatus(!1),
          this.modalStore.setLoginModalStatus(!0);
      },
    },
  },
  Pe = (t) => (St("data-v-7284995c"), (t = t()), Ct(), t),
  fr = {
    class:
      "bg-base relative max-h-full max-w-3xl rounded-lg shadow-lg md:max-w-[450px]",
  },
  mr = {
    key: 0,
    class:
      "absolute bottom-0 left-0 right-0 top-0 z-[999] bg-white/70 dark:bg-gray-800/70",
  },
  gr = Pe(() =>
    a(
      "div",
      {
        role: "status",
        class: "absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2",
      },
      [
        a(
          "svg",
          {
            "aria-hidden": "true",
            class:
              "mr-2 h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            a("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor",
            }),
            a("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill",
            }),
          ]
        ),
        a("span", { class: "sr-only" }, "Loading..."),
      ],
      -1
    )
  ),
  yr = [gr],
  vr = { class: "fixed inset-0 overflow-y-auto" },
  br = {
    class:
      "flex min-h-full items-stretch justify-center text-center sm:items-center sm:p-4",
  },
  wr = {
    class:
      "relative bg-[var(--background-base)] sm:m-auto sm:rounded-lg md:max-w-md",
  },
  _r = ["src"],
  xr = Pe(() =>
    a(
      "button",
      { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
      [a("i", { class: "fa-solid fa-xmark" })],
      -1
    )
  ),
  Sr = [xr],
  Cr = {
    class:
      "flex items-center justify-center gap-4 border-b border-gray-500 pb-6 md:hidden",
  },
  kr = Pe(() =>
    a(
      "button",
      {
        type: "button",
        class: "text-xs font-bold text-[var(--ci-primary-color)]",
      },
      "Registrar",
      -1
    )
  ),
  Er = { class: "mb-4 mt-5 flex justify-center sm:mb-6 sm:mt-0" },
  Mr = {
    class:
      "inline-flex min-w-full items-center justify-center lg:min-w-[120px] lg:justify-start",
  },
  Ar = ["src"],
  Pr = {
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Or = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-email",
  },
  Ir = Pe(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  Tr = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Rr = {
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Fr = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-password",
  },
  Dr = ["type"],
  Br = { key: 0, class: "fa-regular fa-eye" },
  Lr = { key: 1, class: "fa-sharp fa-regular fa-eye-slash" },
  jr = Pe(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  zr = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  qr = {
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Nr = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-cpf",
  },
  $r = Pe(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  Ur = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Vr = {
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Wr = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-phone",
  },
  Hr = Pe(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  Qr = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Gr = { class: "text-auth-texts mt-2 justify-center text-xs" },
  Kr = {
    key: 0,
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Yr = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "reference_code",
  },
  Jr = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Zr = {
    class: "text-auth-texts/60 my-1 text-center text-[.6rem] md:text-[.62rem]",
  },
  Xr = Pe(() =>
    a(
      "div",
      { class: "w-full" },
      [
        a(
          "button",
          {
            type: "submit",
            class:
              "mb-3 flex w-full items-center justify-center gap-2 rounded bg-[var(--ci-primary-color)] py-3 font-semibold text-black hover:opacity-80",
          },
          [
            ce(" Criar Conta "),
            a(
              "svg",
              {
                height: "16",
                viewBox: "0 0 448 512",
                width: "16",
                xmlns: "http://www.w3.org/2000/svg",
              },
              [
                a("path", {
                  d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
                  fill: "currentColor",
                }),
              ]
            ),
          ]
        ),
      ],
      -1
    )
  ),
  es = { class: "text-xs" },
  ts = {
    class:
      "bg-base relative max-h-full max-w-3xl rounded-lg shadow-lg md:max-w-[450px]",
  },
  ns = { class: "fixed inset-0 overflow-y-auto" },
  os = {
    class:
      "flex min-h-full items-stretch justify-center text-center sm:items-center sm:p-4",
  },
  rs = {
    class:
      "relative flex flex-col items-center justify-center bg-[var(--background-base)] px-8 py-4 sm:m-auto sm:h-96 sm:rounded-lg md:max-w-md",
  },
  ss = Pe(() =>
    a(
      "button",
      { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
      [a("i", { class: "fa-solid fa-xmark" })],
      -1
    )
  ),
  is = [ss],
  as = Pe(() =>
    a(
      "div",
      { class: "mb-8 flex flex-col items-center justify-center" },
      [
        a(
          "h2",
          { class: "mb-6 text-2xl text-white" },
          "Tem certeza de que deseja cancelar seu registro?"
        ),
        a(
          "p",
          { class: "text-sm" },
          "Ganhe um bônus de 100% no seu primeiro depósito"
        ),
      ],
      -1
    )
  ),
  ls = { class: "flex w-full flex-col items-center justify-center" };
function cs(t, e, n, o, r, s) {
  const i = lt("RouterLink"),
    c = mn("maska");
  return (
    $(),
    _t(xt, { to: "body" }, [
      a(
        "div",
        {
          id: "modalElRegister",
          tabindex: "-1",
          "aria-hidden": "true",
          class: fe([
            r.modalRegisterStatus ? "flex" : "hidden",
            "fixed left-0 right-0 top-0 z-[500] h-screen w-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-30 sm:z-[999999] md:inset-0",
          ]),
        },
        [
          a("div", null, [
            a("div", fr, [
              r.isLoadingRegister ? ($(), V("div", mr, yr)) : le("", !0),
              a("div", vr, [
                a("div", br, [
                  a("div", wr, [
                    a(
                      "img",
                      {
                        src: "/storage/banners/cadastro-modal.png",
                        class: "w-full sm:rounded-t-lg",
                      },
                      null,
                      8,
                      _r
                    ),
                    a(
                      "div",
                      {
                        class:
                          "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                        onClick:
                          e[0] ||
                          (e[0] = G(
                            (...l) => s.closeModal && s.closeModal(...l),
                            ["prevent"]
                          )),
                      },
                      Sr
                    ),
                    a(
                      "form",
                      {
                        onSubmit:
                          e[20] ||
                          (e[20] = G(
                            (...l) =>
                              s.registerSubmit && s.registerSubmit(...l),
                            ["prevent"]
                          )),
                        method: "POST",
                        action: "",
                        class: "flex w-full flex-col gap-2 p-6",
                      },
                      [
                        a("div", Cr, [
                          a(
                            "button",
                            {
                              type: "button",
                              class: "text-xs font-bold",
                              onClick:
                                e[1] ||
                                (e[1] = G(
                                  (...l) =>
                                    s.continueLogin && s.continueLogin(...l),
                                  ["prevent"]
                                )),
                            },
                            "Entrar"
                          ),
                          kr,
                        ]),
                        a("div", Er, [
                          a("div", Mr, [
                            a(
                              "img",
                              {
                                src:
                                  "/storage/" + s.setting.software_logo_white,
                                alt: "",
                                class: "h-10",
                              },
                              null,
                              8,
                              Ar
                            ),
                          ]),
                        ]),
                        a("div", Pr, [
                          a("label", Or, [
                            te(
                              a(
                                "input",
                                {
                                  type: "email",
                                  id: "input-email",
                                  name: "email",
                                  "onUpdate:modelValue":
                                    e[2] ||
                                    (e[2] = (l) => (r.registerForm.email = l)),
                                  class:
                                    "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                                  required: "",
                                  onFocus:
                                    e[3] ||
                                    (e[3] = (...l) =>
                                      s.focusInput && s.focusInput(...l)),
                                  onFocusout:
                                    e[4] ||
                                    (e[4] = (...l) =>
                                      s.focusoutInput && s.focusoutInput(...l)),
                                },
                                null,
                                544
                              ),
                              [[Ce, r.registerForm.email]]
                            ),
                            a(
                              "span",
                              {
                                class: fe([
                                  r.currentFocus === "email" ||
                                  r.registerForm.email.length
                                    ? "top-2 text-[8px]"
                                    : "top-1/2 text-sm",
                                  "absolute -translate-y-2/4",
                                ]),
                              },
                              [ce(" Email "), Ir],
                              2
                            ),
                          ]),
                          te(a("div", Tr, " Coloque um email valido ", 512), [
                            [Le, r.registerFormAlerts.email],
                          ]),
                        ]),
                        a("div", Rr, [
                          a("label", Fr, [
                            te(
                              a(
                                "input",
                                {
                                  type: r.typeInputPassword,
                                  id: "input-password",
                                  name: "password",
                                  "onUpdate:modelValue":
                                    e[5] ||
                                    (e[5] = (l) =>
                                      (r.registerForm.password = l)),
                                  class:
                                    "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                                  required: "",
                                  onFocus:
                                    e[6] ||
                                    (e[6] = (...l) =>
                                      s.focusInput && s.focusInput(...l)),
                                  onFocusout:
                                    e[7] ||
                                    (e[7] = (...l) =>
                                      s.focusoutInput && s.focusoutInput(...l)),
                                },
                                null,
                                40,
                                Dr
                              ),
                              [[uo, r.registerForm.password]]
                            ),
                            a(
                              "button",
                              {
                                tabindex: "-1",
                                type: "button",
                                onClick:
                                  e[8] ||
                                  (e[8] = G(
                                    (...l) =>
                                      s.togglePassword &&
                                      s.togglePassword(...l),
                                    ["prevent"]
                                  )),
                                class:
                                  "absolute inset-y-0 right-0 flex items-center pr-3.5",
                              },
                              [
                                r.typeInputPassword === "password"
                                  ? ($(), V("i", Br))
                                  : le("", !0),
                                r.typeInputPassword === "text"
                                  ? ($(), V("i", Lr))
                                  : le("", !0),
                              ]
                            ),
                            a(
                              "span",
                              {
                                class: fe([
                                  r.currentFocus === "password" ||
                                  r.registerForm.password.length
                                    ? "top-2 text-[8px]"
                                    : "top-1/2 text-sm",
                                  "absolute -translate-y-2/4",
                                ]),
                              },
                              [ce(" Senha "), jr],
                              2
                            ),
                          ]),
                          te(a("div", zr, " Coloque uma senha válida ", 512), [
                            [Le, r.registerFormAlerts.password],
                          ]),
                        ]),
                        a("div", qr, [
                          a("label", Nr, [
                            te(
                              a(
                                "input",
                                {
                                  type: "cpf",
                                  id: "input-cpf",
                                  name: "cpf",
                                  "onUpdate:modelValue":
                                    e[9] ||
                                    (e[9] = (l) => (r.registerForm.cpf = l)),
                                  "data-maska": `[
                          '###.###.###-##'
                        ]`,
                                  class:
                                    "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                                  required: "",
                                  onFocus:
                                    e[10] ||
                                    (e[10] = (...l) =>
                                      s.focusInput && s.focusInput(...l)),
                                  onFocusout:
                                    e[11] ||
                                    (e[11] = (...l) =>
                                      s.focusoutInput && s.focusoutInput(...l)),
                                },
                                null,
                                544
                              ),
                              [[Ce, r.registerForm.cpf], [c]]
                            ),
                            a(
                              "span",
                              {
                                class: fe([
                                  r.currentFocus === "cpf" ||
                                  r.registerForm.cpf.length
                                    ? "top-2 text-[8px]"
                                    : "top-1/2 text-sm",
                                  "absolute -translate-y-2/4",
                                ]),
                              },
                              [ce(" CPF "), $r],
                              2
                            ),
                          ]),
                          te(a("div", Ur, " Coloque um valor valido ", 512), [
                            [Le, r.registerFormAlerts.cpf],
                          ]),
                        ]),
                        a("div", Vr, [
                          a("label", Wr, [
                            te(
                              a(
                                "input",
                                {
                                  type: "text",
                                  name: "phone",
                                  id: "input-phone",
                                  "data-maska":
                                    "['(##) ####-####', '(##) #####-####']",
                                  "onUpdate:modelValue":
                                    e[12] ||
                                    (e[12] = (l) => (r.registerForm.phone = l)),
                                  class:
                                    "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                                  required: "",
                                  onFocus:
                                    e[13] ||
                                    (e[13] = (...l) =>
                                      s.focusInput && s.focusInput(...l)),
                                  onFocusout:
                                    e[14] ||
                                    (e[14] = (...l) =>
                                      s.focusoutInput && s.focusoutInput(...l)),
                                },
                                null,
                                544
                              ),
                              [[c], [Ce, r.registerForm.phone]]
                            ),
                            a(
                              "span",
                              {
                                class: fe([
                                  r.currentFocus === "phone" ||
                                  r.registerForm.phone.length
                                    ? "top-2 text-[8px]"
                                    : "top-1/2 text-sm",
                                  "absolute -translate-y-2/4",
                                ]),
                              },
                              [ce(" Telefone "), Hr],
                              2
                            ),
                          ]),
                          te(
                            a("div", Qr, " Coloque um telefone valido ", 512),
                            [[Le, r.registerFormAlerts.phone]]
                          ),
                        ]),
                        a("div", Gr, [
                          a(
                            "button",
                            {
                              onClick:
                                e[15] ||
                                (e[15] = G(
                                  (l) => (r.isReferral = !0),
                                  ["prevent"]
                                )),
                              type: "button",
                              class:
                                "mb-2 inline-flex justify-center font-bold",
                            },
                            " Adicionar código de referência "
                          ),
                          r.isReferral
                            ? ($(),
                              V("div", Kr, [
                                a("label", Yr, [
                                  te(
                                    a(
                                      "input",
                                      {
                                        type: "text",
                                        name: "reference_code",
                                        id: "reference_code",
                                        "onUpdate:modelValue":
                                          e[16] ||
                                          (e[16] = (l) =>
                                            (r.registerForm.reference_code =
                                              l)),
                                        class:
                                          "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                                        onFocus:
                                          e[17] ||
                                          (e[17] = (...l) =>
                                            s.focusInput && s.focusInput(...l)),
                                        onFocusout:
                                          e[18] ||
                                          (e[18] = (...l) =>
                                            s.focusoutInput &&
                                            s.focusoutInput(...l)),
                                      },
                                      null,
                                      544
                                    ),
                                    [[Ce, r.registerForm.reference_code]]
                                  ),
                                  a(
                                    "span",
                                    {
                                      class: fe([
                                        r.currentFocus === "reference_code" ||
                                        r.registerForm.reference_code.length
                                          ? "top-2 text-[8px]"
                                          : "top-1/2 text-sm",
                                        "absolute -translate-y-2/4",
                                      ]),
                                    },
                                    " Código ",
                                    2
                                  ),
                                ]),
                                te(a("div", Jr, " Codigo inválido ", 512), [
                                  [Le, r.registerFormAlerts.reference_code],
                                ]),
                              ]))
                            : le("", !0),
                        ]),
                        a("div", Zr, [
                          ce(" Ao se inscrever "),
                          ct(
                            i,
                            {
                              to: { name: "serviceTerms" },
                              class:
                                "text-[var(--ci-primary-color)] hover:opacity-90",
                              target: "_blank",
                            },
                            {
                              default: lr(() => [
                                ce(
                                  " você concorda com nossos termos e condições "
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        Xr,
                        a("div", es, [
                          ce(" Já tem uma conta? "),
                          a(
                            "span",
                            {
                              class:
                                "cursor-pointer text-[var(--ci-primary-color)] hover:opacity-90",
                              onClick:
                                e[19] ||
                                (e[19] = G(
                                  (...l) =>
                                    s.continueLogin && s.continueLogin(...l),
                                  ["prevent"]
                                )),
                            },
                            " Entrar "
                          ),
                        ]),
                      ],
                      32
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ],
        2
      ),
      a(
        "div",
        {
          id: "modalConfirmClose",
          tabindex: "-1",
          "aria-hidden": "true",
          class: fe([
            r.modalConfirmCloseStatus ? "block" : "hidden",
            "fixed left-0 right-0 top-0 z-[999999] h-screen w-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-30 md:inset-0",
          ]),
        },
        [
          a("div", null, [
            a("div", ts, [
              a("div", ns, [
                a("div", os, [
                  a("div", rs, [
                    a(
                      "div",
                      {
                        class:
                          "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                        onClick:
                          e[21] ||
                          (e[21] = G(
                            (...l) =>
                              s.closeConfirmCloseModal &&
                              s.closeConfirmCloseModal(...l),
                            ["prevent"]
                          )),
                      },
                      is
                    ),
                    as,
                    a("div", ls, [
                      a(
                        "button",
                        {
                          type: "button",
                          class:
                            "mb-6 w-full rounded-[4px] bg-[var(--ci-primary-color)] py-3 font-medium text-black",
                          onClick:
                            e[22] ||
                            (e[22] = (...l) =>
                              s.continueRegister && s.continueRegister(...l)),
                        },
                        " Continuar "
                      ),
                      a(
                        "button",
                        {
                          type: "button",
                          class: "text-sm",
                          onClick:
                            e[23] ||
                            (e[23] = (...l) =>
                              s.closeConfirmCloseModal &&
                              s.closeConfirmCloseModal(...l)),
                        },
                        "Sim, quero cancelar"
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ],
        2
      ),
    ])
  );
}
const Md = Ke(hr, [
  ["render", cs],
  ["__scopeId", "data-v-7284995c"],
]);
const us = {
    name: "LoginModal",
    data() {
      return {
        isLoadingLogin: !1,
        currentFocus: "",
        modalAuth: null,
        typeInputPassword: "password",
        loginForm: { email: "", password: "" },
        loginFormAlerts: { email: !1, password: !1 },
      };
    },
    computed: {
      modalStore() {
        return Ye();
      },
      loginModalStatus() {
        return this.useModalStore.getLoginModalStatus();
      },
      setting() {
        return wt().setting;
      },
    },
    mounted() {
      this.modalAuth = new jt(document.getElementById("modalElAuth"), {
        placement: "center",
        backdrop: "dynamic",
        backdropClasses:
          "bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        closable: !1,
      });
    },
    methods: {
      loginSubmit: function (t) {
        const e = this;
        e.isLoadingLogin = !0;
        const n = Re(),
          o = mt();
        Ae.post("auth/login", e.loginForm)
          .then(async (r) => {
            await new Promise((s) => {
              setTimeout(() => {
                o.setToken(r.data.access_token),
                  o.setUser(r.data.user),
                  o.setIsAuth(!0),
                  (e.loginForm = { email: "", password: "" }),
                  (e.loginFormAlerts = { email: !1, password: !1 }),
                  e.modalStore.setLoginModalStatus(!1),
                  n.success("Login realizado com sucesso, bem-vindo!"),
                  (e.isLoadingLogin = !1),
                  this.$router.push({ name: "home" });
              }, 1e3);
            });
          })
          .catch((r) => {
            const s = this;
            Object.entries(JSON.parse(r.request.responseText)).forEach(
              ([i, c]) => {
                n.error(`${c}`);
              }
            ),
              (s.isLoadingLogin = !1);
          });
      },
      focusInput(t) {
        this.currentFocus = t.target.name;
      },
      focusoutInput() {
        this.loginForm[this.currentFocus].length === 0
          ? ((this.loginFormAlerts[this.currentFocus] = !0),
            (this.currentFocus = ""))
          : ((this.loginFormAlerts[this.currentFocus] = !1),
            (this.currentFocus = ""));
      },
      togglePassword: function () {
        this.typeInputPassword === "password"
          ? (this.typeInputPassword = "text")
          : (this.typeInputPassword = "password");
      },
      closeModal() {
        this.modalStore.setLoginModalStatus(!1);
      },
      continueRegister() {
        this.modalStore.setLoginModalStatus(!1),
          this.modalStore.setRegisterModalStatus(!0);
      },
      continueForgotPassword() {
        this.modalStore.setLoginModalStatus(!1),
          this.modalStore.setForgotPasswordModalStatus(!0);
      },
    },
  },
  pt = (t) => (St("data-v-4eb8657a"), (t = t()), Ct(), t),
  ds = {
    class:
      "bg-base relative h-full max-h-full w-full shadow-lg sm:h-auto sm:max-w-md sm:rounded-lg",
  },
  ps = { class: "flex md:justify-between" },
  hs = { class: "relative w-full" },
  fs = ["src"],
  ms = pt(() =>
    a(
      "button",
      { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
      [a("i", { class: "fa-solid fa-xmark" })],
      -1
    )
  ),
  gs = [ms],
  ys = {
    key: 0,
    class:
      "absolute bottom-0 left-0 right-0 top-0 z-[999] bg-white/70 dark:bg-gray-800/70",
  },
  vs = pt(() =>
    a(
      "div",
      {
        role: "status",
        class: "absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2",
      },
      [
        a(
          "svg",
          {
            "aria-hidden": "true",
            class:
              "mr-2 h-10 w-10 animate-spin fill-green-600 text-gray-200 dark:text-gray-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            a("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor",
            }),
            a("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill",
            }),
          ]
        ),
        a("span", { class: "sr-only" }, "Loading..."),
      ],
      -1
    )
  ),
  bs = [vs],
  ws = {
    class:
      "flex items-center justify-center gap-4 border-b border-gray-500 pb-6 sm:hidden",
  },
  _s = pt(() =>
    a(
      "button",
      {
        type: "button",
        class: "text-xs font-bold text-[var(--ci-primary-color)]",
      },
      "Entrar",
      -1
    )
  ),
  xs = { class: "mb-4 mt-5 flex justify-center sm:mb-6 sm:mt-0" },
  Ss = {
    class:
      "inline-flex min-w-full items-center justify-center lg:min-w-[120px] lg:justify-start",
  },
  Cs = ["src"],
  ks = {
    class:
      "relative mb-2 flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Es = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-email",
  },
  Ms = pt(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  As = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Ps = {
    class:
      "relative mb-1 flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Os = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-password",
  },
  Is = ["type"],
  Ts = { key: 0, class: "fa-regular fa-eye" },
  Rs = { key: 1, class: "fa-sharp fa-regular fa-eye-slash" },
  Fs = pt(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  Ds = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Bs = { class: "flex justify-end" },
  Ls = pt(() =>
    a(
      "div",
      { class: "mb-9 w-full" },
      [
        a(
          "button",
          {
            type: "submit",
            class:
              "w-full rounded bg-[var(--ci-primary-color)] py-3 font-semibold text-black hover:opacity-80",
          },
          " Entrar "
        ),
      ],
      -1
    )
  ),
  js = { class: "mb-6 flex items-center justify-center text-xs text-gray-500" };
function zs(t, e, n, o, r, s) {
  return (
    $(),
    _t(xt, { to: "body" }, [
      a(
        "div",
        {
          id: "modalElAuth",
          tabindex: "-1",
          "aria-hidden": "true",
          "arial-modal": "true",
          role: "dialog",
          class: fe([
            s.modalStore.getLoginModalStatus ? "flex" : "hidden",
            "fixed left-0 right-0 top-0 z-[500] h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-30 sm:z-[999999] md:inset-0",
          ]),
        },
        [
          a("div", ds, [
            a("div", ps, [
              a("div", hs, [
                a(
                  "img",
                  {
                    src: "/storage/banners/login-modal.png",
                    class: "w-full sm:rounded-t-lg",
                  },
                  null,
                  8,
                  fs
                ),
                a(
                  "div",
                  {
                    class:
                      "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                    onClick:
                      e[0] ||
                      (e[0] = G(
                        (...i) => s.closeModal && s.closeModal(...i),
                        ["prevent"]
                      )),
                  },
                  gs
                ),
                r.isLoadingLogin ? ($(), V("div", ys, bs)) : le("", !0),
                a(
                  "form",
                  {
                    onSubmit:
                      e[11] ||
                      (e[11] = G(
                        (...i) => s.loginSubmit && s.loginSubmit(...i),
                        ["prevent"]
                      )),
                    method: "POST",
                    class: "p-6",
                  },
                  [
                    a("div", ws, [
                      _s,
                      a(
                        "button",
                        {
                          type: "button",
                          class: "text-xs font-bold",
                          onClick:
                            e[1] ||
                            (e[1] = G(
                              (...i) =>
                                s.continueRegister && s.continueRegister(...i),
                              ["prevent"]
                            )),
                        },
                        "Registrar"
                      ),
                    ]),
                    a("div", xs, [
                      a("div", Ss, [
                        a(
                          "img",
                          {
                            src: "/storage/" + s.setting.software_logo_white,
                            alt: "",
                            class: "h-10",
                          },
                          null,
                          8,
                          Cs
                        ),
                      ]),
                    ]),
                    a("div", ks, [
                      a("label", Es, [
                        te(
                          a(
                            "input",
                            {
                              type: "email",
                              name: "email",
                              id: "input-email",
                              "onUpdate:modelValue":
                                e[2] || (e[2] = (i) => (r.loginForm.email = i)),
                              class:
                                "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                              required: "",
                              onFocus:
                                e[3] ||
                                (e[3] = (...i) =>
                                  s.focusInput && s.focusInput(...i)),
                              onFocusout:
                                e[4] ||
                                (e[4] = (...i) =>
                                  s.focusoutInput && s.focusoutInput(...i)),
                            },
                            null,
                            544
                          ),
                          [[Ce, r.loginForm.email]]
                        ),
                        a(
                          "span",
                          {
                            class: fe([
                              r.currentFocus === "email" ||
                              r.loginForm.email.length
                                ? "top-2 text-[8px]"
                                : "top-1/2 text-sm",
                              "absolute -translate-y-2/4",
                            ]),
                          },
                          [ce(" Email ou telefone "), Ms],
                          2
                        ),
                      ]),
                      te(a("div", As, " Digite seu email ou telefone ", 512), [
                        [Le, r.loginFormAlerts.email],
                      ]),
                    ]),
                    a("div", Ps, [
                      a("label", Os, [
                        te(
                          a(
                            "input",
                            {
                              type: r.typeInputPassword,
                              id: "input-password",
                              name: "password",
                              "onUpdate:modelValue":
                                e[5] ||
                                (e[5] = (i) => (r.loginForm.password = i)),
                              class:
                                "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                              required: "",
                              onFocus:
                                e[6] ||
                                (e[6] = (...i) =>
                                  s.focusInput && s.focusInput(...i)),
                              onFocusout:
                                e[7] ||
                                (e[7] = (...i) =>
                                  s.focusoutInput && s.focusoutInput(...i)),
                            },
                            null,
                            40,
                            Is
                          ),
                          [[uo, r.loginForm.password]]
                        ),
                        a(
                          "button",
                          {
                            tabindex: "-1",
                            type: "button",
                            onClick:
                              e[8] ||
                              (e[8] = G(
                                (...i) =>
                                  s.togglePassword && s.togglePassword(...i),
                                ["prevent"]
                              )),
                            class:
                              "absolute inset-y-0 right-0 flex items-center pr-3.5",
                          },
                          [
                            r.typeInputPassword === "password"
                              ? ($(), V("i", Ts))
                              : le("", !0),
                            r.typeInputPassword === "text"
                              ? ($(), V("i", Rs))
                              : le("", !0),
                          ]
                        ),
                        a(
                          "span",
                          {
                            class: fe([
                              r.currentFocus === "password" ||
                              r.loginForm.password.length
                                ? "top-2 text-[8px]"
                                : "top-1/2 text-sm",
                              "absolute -translate-y-2/4",
                            ]),
                          },
                          [ce(" Digite a senha "), Fs],
                          2
                        ),
                      ]),
                      te(a("div", Ds, " Coloque uma senha válida ", 512), [
                        [Le, r.loginFormAlerts.password],
                      ]),
                    ]),
                    a("div", Bs, [
                      a(
                        "span",
                        {
                          class:
                            "mb-9 inline-block cursor-pointer text-xs text-white",
                          onClick:
                            e[9] ||
                            (e[9] = G(
                              (...i) =>
                                s.continueForgotPassword &&
                                s.continueForgotPassword(...i),
                              ["prevent"]
                            )),
                        },
                        " Esqueceu a senha? "
                      ),
                    ]),
                    Ls,
                    a("p", js, [
                      ce(" Não tem uma conta ainda? "),
                      a(
                        "span",
                        {
                          onClick:
                            e[10] ||
                            (e[10] = G(
                              (...i) =>
                                s.continueRegister && s.continueRegister(...i),
                              ["prevent"]
                            )),
                          class:
                            "cursor-pointer text-[var(--ci-primary-color)]",
                        },
                        " Criar uma conta gratuita "
                      ),
                    ]),
                  ],
                  32
                ),
              ]),
            ]),
          ]),
        ],
        2
      ),
    ])
  );
}
const Ad = Ke(us, [
  ["render", zs],
  ["__scopeId", "data-v-4eb8657a"],
]);
const qs = {
    name: "ForgotPasswordModal",
    data() {
      return {
        forgotPasswordModal: {},
        isLoadingLogin: !1,
        currentFocus: "",
        form: { email: "" },
        formAlerts: { email: "" },
      };
    },
    computed: {
      modalStore() {
        return Ye();
      },
      setting() {
        return wt().setting;
      },
    },
    mounted() {
      this.forgotPasswordModal = new jt(
        document.getElementById("modalForgotPassword"),
        {
          placement: "center",
          backdrop: "dynamic",
          backdropClasses:
            "bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
          closable: !1,
        }
      );
    },
    methods: {
      forgotPasswordSubmit: async function (t) {
        const e = this,
          n = Re();
        (e.isLoading = !0),
          await Ae.post("auth/forget-password", e.form)
            .then(async (o) => {
              (e.isLoading = !1),
                n.success(
                  "Um token foi enviado para você em sua caixa de E-mail!"
                ),
                this.modalStore.setForgotPasswordModalStatus(!1);
            })
            .catch((o) => {
              const r = this;
              Object.entries(JSON.parse(o.request.responseText)).forEach(
                ([s, i]) => {
                  n.error(`${i}`),
                    this.modalStore.setForgotPasswordModalStatus(!1);
                }
              ),
                (r.isLoading = !1);
            });
      },
      focusInput(t) {
        this.currentFocus = t.target.name;
      },
      focusoutInput() {
        this.form[this.currentFocus].length === 0
          ? ((this.formAlerts[this.currentFocus] = !0),
            (this.currentFocus = ""))
          : ((this.formAlerts[this.currentFocus] = !1),
            (this.currentFocus = ""));
      },
      closeModal() {
        this.modalStore.setForgotPasswordModalStatus(!1);
      },
      continueRegister() {
        this.modalStore.setLoginModalStatus(!1),
          this.modalStore.setRegisterModalStatus(!0);
      },
    },
  },
  gn = (t) => (St("data-v-2d985010"), (t = t()), Ct(), t),
  Ns = {
    class:
      "bg-base relative h-full max-h-full w-full shadow-lg sm:h-auto sm:max-w-md sm:rounded-lg",
  },
  $s = { class: "flex md:justify-between" },
  Us = { class: "relative w-full p-6" },
  Vs = gn(() =>
    a(
      "button",
      { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
      [a("i", { class: "fa-solid fa-xmark" })],
      -1
    )
  ),
  Ws = [Vs],
  Hs = { class: "mb-6 flex justify-center" },
  Qs = {
    class:
      "mb-6 mt-6 inline-flex min-w-full items-center justify-center lg:min-w-[120px] lg:justify-start",
  },
  Gs = ["src"],
  Ks = {
    class:
      "relative flex flex-wrap rounded-md border-2 border-transparent bg-[#424344]",
  },
  Ys = {
    class:
      "flex h-12 flex-grow cursor-text items-center overflow-hidden border-0 px-4",
    for: "input-email",
  },
  Js = gn(() =>
    a("small", { class: "text-sm font-bold text-[#f1416cb3]" }, "*", -1)
  ),
  Zs = {
    role: "alert",
    class:
      "absolute bottom-0 right-0 rounded-tl-sm bg-[#f1416cb3] px-2 py-1 text-center text-[0.5rem] text-white",
  },
  Xs = gn(() =>
    a(
      "div",
      { class: "mt-5 w-full" },
      [
        a(
          "button",
          {
            type: "submit",
            class:
              "mb-3 w-full rounded bg-[var(--ci-primary-color)] py-3 font-medium text-black",
          },
          " Resetar Senha "
        ),
      ],
      -1
    )
  );
function ei(t, e, n, o, r, s) {
  return (
    $(),
    _t(xt, { to: "body" }, [
      a(
        "div",
        {
          id: "modalForgotPassword",
          tabindex: "-1",
          "aria-hidden": "true",
          "arial-modal": "true",
          role: "dialog",
          class: fe([
            s.modalStore.getForgotPasswordModalStatus ? "flex" : "hidden",
            "fixed left-0 right-0 top-0 z-[500] h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-30 sm:z-[999999] md:inset-0",
          ]),
        },
        [
          a("div", Ns, [
            a("div", $s, [
              a("div", Us, [
                a(
                  "div",
                  {
                    class:
                      "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                    onClick:
                      e[0] ||
                      (e[0] = G(
                        (...i) => s.closeModal && s.closeModal(...i),
                        ["prevent"]
                      )),
                  },
                  Ws
                ),
                a("div", Hs, [
                  a("div", Qs, [
                    a(
                      "img",
                      {
                        src: "/storage/" + s.setting.software_logo_white,
                        alt: "",
                        class: "mr-3 hidden h-10 dark:block",
                      },
                      null,
                      8,
                      Gs
                    ),
                  ]),
                ]),
                a(
                  "form",
                  {
                    onSubmit:
                      e[4] ||
                      (e[4] = G(
                        (...i) =>
                          s.forgotPasswordSubmit &&
                          s.forgotPasswordSubmit(...i),
                        ["prevent"]
                      )),
                    method: "post",
                    action: "",
                    class: "",
                  },
                  [
                    a("div", Ks, [
                      a("label", Ys, [
                        te(
                          a(
                            "input",
                            {
                              type: "email",
                              id: "input-email",
                              name: "email",
                              "onUpdate:modelValue":
                                e[1] || (e[1] = (i) => (r.form.email = i)),
                              class:
                                "w-full border-none bg-transparent p-0 pt-2 text-sm focus:outline-none focus:ring-0",
                              required: "",
                              onFocus:
                                e[2] ||
                                (e[2] = (...i) =>
                                  s.focusInput && s.focusInput(...i)),
                              onFocusout:
                                e[3] ||
                                (e[3] = (...i) =>
                                  s.focusoutInput && s.focusoutInput(...i)),
                            },
                            null,
                            544
                          ),
                          [[Ce, r.form.email]]
                        ),
                        a(
                          "span",
                          {
                            class: fe([
                              r.currentFocus === "email" || r.form.email.length
                                ? "top-2 text-[8px]"
                                : "top-1/2 text-sm",
                              "absolute -translate-y-2/4",
                            ]),
                          },
                          [ce(" Email ou telefone "), Js],
                          2
                        ),
                      ]),
                      te(a("div", Zs, " Coloque um valor valido ", 512), [
                        [Le, r.formAlerts.email],
                      ]),
                    ]),
                    Xs,
                  ],
                  32
                ),
              ]),
            ]),
          ]),
        ],
        2
      ),
    ])
  );
}
const Pd = Ke(qs, [
  ["render", ei],
  ["__scopeId", "data-v-2d985010"],
]);
var ti = Object.defineProperty,
  ni = (t, e, n) =>
    e in t
      ? ti(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  me = (t, e, n) => (ni(t, typeof e != "symbol" ? e + "" : e, n), n);
function oi(t, e) {
  const n = Object.create(null),
    o = t.split(",");
  for (let r = 0; r < o.length; r++) n[o[r]] = !0;
  return e ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ri = {},
  si = [],
  ze = () => {},
  ii = /^on[^a-z]/,
  ai = (t) => ii.test(t),
  Fe = Object.assign,
  ho = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  li = Object.prototype.hasOwnProperty,
  Ht = (t, e) => li.call(t, e),
  W = Array.isArray,
  tt = (t) => Qt(t) === "[object Map]",
  fo = (t) => Qt(t) === "[object Set]",
  K = (t) => typeof t == "function",
  Me = (t) => typeof t == "string",
  yn = (t) => typeof t == "symbol",
  ue = (t) => t !== null && typeof t == "object",
  mo = (t) => ue(t) && K(t.then) && K(t.catch),
  go = Object.prototype.toString,
  Qt = (t) => go.call(t),
  ci = (t) => Qt(t).slice(8, -1),
  yo = (t) => Qt(t) === "[object Object]",
  vn = (t) =>
    Me(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  zt = (t, e) => !Object.is(t, e),
  ui = (t) => {
    const e = Me(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Ln;
const jn = () =>
  Ln ||
  (Ln =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function bn(t) {
  if (W(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n],
        r = Me(o) ? fi(o) : bn(o);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else if (Me(t) || ue(t)) return t;
}
const di = /;(?![^(]*\))/g,
  pi = /:([^]+)/,
  hi = /\/\*[^]*?\*\//g;
function fi(t) {
  const e = {};
  return (
    t
      .replace(hi, "")
      .split(di)
      .forEach((n) => {
        if (n) {
          const o = n.split(pi);
          o.length > 1 && (e[o[0].trim()] = o[1].trim());
        }
      }),
    e
  );
}
function nt(t) {
  let e = "";
  if (Me(t)) e = t;
  else if (W(t))
    for (let n = 0; n < t.length; n++) {
      const o = nt(t[n]);
      o && (e += o + " ");
    }
  else if (ue(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const mi = (t) =>
    Me(t)
      ? t
      : t == null
      ? ""
      : W(t) || (ue(t) && (t.toString === go || !K(t.toString)))
      ? JSON.stringify(t, vo, 2)
      : String(t),
  vo = (t, e) =>
    e && e.__v_isRef
      ? vo(t, e.value)
      : tt(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [o, r]) => ((n[`${o} =>`] = r), n),
            {}
          ),
        }
      : fo(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : ue(e) && !W(e) && !yo(e)
      ? String(e)
      : e;
let bo;
function gi(t, e = bo) {
  e && e.active && e.effects.push(t);
}
function yi() {
  return bo;
}
const wn = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  wo = (t) => (t.w & $e) > 0,
  _o = (t) => (t.n & $e) > 0,
  vi = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= $e;
  },
  bi = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        wo(r) && !_o(r) ? r.delete(t) : (e[n++] = r),
          (r.w &= ~$e),
          (r.n &= ~$e);
      }
      e.length = n;
    }
  },
  ln = new WeakMap();
let ht = 0,
  $e = 1;
const cn = 30;
let xe;
const Qe = Symbol(""),
  un = Symbol("");
class xo {
  constructor(e, n = null, o) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      gi(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let e = xe,
      n = qe;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = xe),
        (xe = this),
        (qe = !0),
        ($e = 1 << ++ht),
        ht <= cn ? vi(this) : zn(this),
        this.fn()
      );
    } finally {
      ht <= cn && bi(this),
        ($e = 1 << --ht),
        (xe = this.parent),
        (qe = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    xe === this
      ? (this.deferStop = !0)
      : this.active &&
        (zn(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function zn(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let qe = !0;
const So = [];
function _n() {
  So.push(qe), (qe = !1);
}
function xn() {
  const t = So.pop();
  qe = t === void 0 ? !0 : t;
}
function _e(t, e, n) {
  if (qe && xe) {
    let o = ln.get(t);
    o || ln.set(t, (o = new Map()));
    let r = o.get(n);
    r || o.set(n, (r = wn())), Co(r);
  }
}
function Co(t, e) {
  let n = !1;
  ht <= cn ? _o(t) || ((t.n |= $e), (n = !wo(t))) : (n = !t.has(xe)),
    n && (t.add(xe), xe.deps.push(t));
}
function Ue(t, e, n, o, r, s) {
  const i = ln.get(t);
  if (!i) return;
  let c = [];
  if (e === "clear") c = [...i.values()];
  else if (n === "length" && W(t)) {
    const l = Number(o);
    i.forEach((y, I) => {
      (I === "length" || I >= l) && c.push(y);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), e)) {
      case "add":
        W(t)
          ? vn(n) && c.push(i.get("length"))
          : (c.push(i.get(Qe)), tt(t) && c.push(i.get(un)));
        break;
      case "delete":
        W(t) || (c.push(i.get(Qe)), tt(t) && c.push(i.get(un)));
        break;
      case "set":
        tt(t) && c.push(i.get(Qe));
        break;
    }
  if (c.length === 1) c[0] && dn(c[0]);
  else {
    const l = [];
    for (const y of c) y && l.push(...y);
    dn(wn(l));
  }
}
function dn(t, e) {
  const n = W(t) ? t : [...t];
  for (const o of n) o.computed && qn(o);
  for (const o of n) o.computed || qn(o);
}
function qn(t, e) {
  (t !== xe || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const wi = oi("__proto__,__v_isRef,__isVue"),
  ko = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(yn)
  ),
  _i = Eo(),
  xi = Eo(!0),
  Nn = Si();
function Si() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const o = Z(this);
        for (let s = 0, i = this.length; s < i; s++) _e(o, "get", s + "");
        const r = o[e](...n);
        return r === -1 || r === !1 ? o[e](...n.map(Z)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        _n();
        const o = Z(this)[e].apply(this, n);
        return xn(), o;
      };
    }),
    t
  );
}
function Ci(t) {
  const e = Z(this);
  return _e(e, "has", t), e.hasOwnProperty(t);
}
function Eo(t = !1, e = !1) {
  return function (n, o, r) {
    if (o === "__v_isReactive") return !t;
    if (o === "__v_isReadonly") return t;
    if (o === "__v_isShallow") return e;
    if (o === "__v_raw" && r === (t ? (e ? qi : Po) : e ? zi : Ao).get(n))
      return n;
    const s = W(n);
    if (!t) {
      if (s && Ht(Nn, o)) return Reflect.get(Nn, o, r);
      if (o === "hasOwnProperty") return Ci;
    }
    const i = Reflect.get(n, o, r);
    return (yn(o) ? ko.has(o) : wi(o)) || (t || _e(n, "get", o), e)
      ? i
      : ge(i)
      ? s && vn(o)
        ? i
        : i.value
      : ue(i)
      ? t
        ? Oo(i)
        : Cn(i)
      : i;
  };
}
const ki = Ei();
function Ei(t = !1) {
  return function (e, n, o, r) {
    let s = e[n];
    if (gt(s) && ge(s) && !ge(o)) return !1;
    if (
      !t &&
      (!pn(o) && !gt(o) && ((s = Z(s)), (o = Z(o))), !W(e) && ge(s) && !ge(o))
    )
      return (s.value = o), !0;
    const i = W(e) && vn(n) ? Number(n) < e.length : Ht(e, n),
      c = Reflect.set(e, n, o, r);
    return (
      e === Z(r) && (i ? zt(o, s) && Ue(e, "set", n, o) : Ue(e, "add", n, o)), c
    );
  };
}
function Mi(t, e) {
  const n = Ht(t, e);
  t[e];
  const o = Reflect.deleteProperty(t, e);
  return o && n && Ue(t, "delete", e, void 0), o;
}
function Ai(t, e) {
  const n = Reflect.has(t, e);
  return (!yn(e) || !ko.has(e)) && _e(t, "has", e), n;
}
function Pi(t) {
  return _e(t, "iterate", W(t) ? "length" : Qe), Reflect.ownKeys(t);
}
const Oi = { get: _i, set: ki, deleteProperty: Mi, has: Ai, ownKeys: Pi },
  Ii = {
    get: xi,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  Sn = (t) => t,
  Gt = (t) => Reflect.getPrototypeOf(t);
function Mt(t, e, n = !1, o = !1) {
  t = t.__v_raw;
  const r = Z(t),
    s = Z(e);
  n || (e !== s && _e(r, "get", e), _e(r, "get", s));
  const { has: i } = Gt(r),
    c = o ? Sn : n ? En : kn;
  if (i.call(r, e)) return c(t.get(e));
  if (i.call(r, s)) return c(t.get(s));
  t !== r && t.get(e);
}
function At(t, e = !1) {
  const n = this.__v_raw,
    o = Z(n),
    r = Z(t);
  return (
    e || (t !== r && _e(o, "has", t), _e(o, "has", r)),
    t === r ? n.has(t) : n.has(t) || n.has(r)
  );
}
function Pt(t, e = !1) {
  return (
    (t = t.__v_raw), !e && _e(Z(t), "iterate", Qe), Reflect.get(t, "size", t)
  );
}
function $n(t) {
  t = Z(t);
  const e = Z(this);
  return Gt(e).has.call(e, t) || (e.add(t), Ue(e, "add", t, t)), this;
}
function Un(t, e) {
  e = Z(e);
  const n = Z(this),
    { has: o, get: r } = Gt(n);
  let s = o.call(n, t);
  s || ((t = Z(t)), (s = o.call(n, t)));
  const i = r.call(n, t);
  return (
    n.set(t, e), s ? zt(e, i) && Ue(n, "set", t, e) : Ue(n, "add", t, e), this
  );
}
function Vn(t) {
  const e = Z(this),
    { has: n, get: o } = Gt(e);
  let r = n.call(e, t);
  r || ((t = Z(t)), (r = n.call(e, t))), o && o.call(e, t);
  const s = e.delete(t);
  return r && Ue(e, "delete", t, void 0), s;
}
function Wn() {
  const t = Z(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Ue(t, "clear", void 0, void 0), n;
}
function Ot(t, e) {
  return function (n, o) {
    const r = this,
      s = r.__v_raw,
      i = Z(s),
      c = e ? Sn : t ? En : kn;
    return (
      !t && _e(i, "iterate", Qe), s.forEach((l, y) => n.call(o, c(l), c(y), r))
    );
  };
}
function It(t, e, n) {
  return function (...o) {
    const r = this.__v_raw,
      s = Z(r),
      i = tt(s),
      c = t === "entries" || (t === Symbol.iterator && i),
      l = t === "keys" && i,
      y = r[t](...o),
      I = n ? Sn : e ? En : kn;
    return (
      !e && _e(s, "iterate", l ? un : Qe),
      {
        next() {
          const { value: g, done: x } = y.next();
          return x
            ? { value: g, done: x }
            : { value: c ? [I(g[0]), I(g[1])] : I(g), done: x };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Be(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function Ti() {
  const t = {
      get(r) {
        return Mt(this, r);
      },
      get size() {
        return Pt(this);
      },
      has: At,
      add: $n,
      set: Un,
      delete: Vn,
      clear: Wn,
      forEach: Ot(!1, !1),
    },
    e = {
      get(r) {
        return Mt(this, r, !1, !0);
      },
      get size() {
        return Pt(this);
      },
      has: At,
      add: $n,
      set: Un,
      delete: Vn,
      clear: Wn,
      forEach: Ot(!1, !0),
    },
    n = {
      get(r) {
        return Mt(this, r, !0);
      },
      get size() {
        return Pt(this, !0);
      },
      has(r) {
        return At.call(this, r, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Ot(!0, !1),
    },
    o = {
      get(r) {
        return Mt(this, r, !0, !0);
      },
      get size() {
        return Pt(this, !0);
      },
      has(r) {
        return At.call(this, r, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Ot(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (t[r] = It(r, !1, !1)),
        (n[r] = It(r, !0, !1)),
        (e[r] = It(r, !1, !0)),
        (o[r] = It(r, !0, !0));
    }),
    [t, n, e, o]
  );
}
const [Ri, Fi, Di, Bi] = Ti();
function Mo(t, e) {
  const n = e ? (t ? Bi : Di) : t ? Fi : Ri;
  return (o, r, s) =>
    r === "__v_isReactive"
      ? !t
      : r === "__v_isReadonly"
      ? t
      : r === "__v_raw"
      ? o
      : Reflect.get(Ht(n, r) && r in o ? n : o, r, s);
}
const Li = { get: Mo(!1, !1) },
  ji = { get: Mo(!0, !1) },
  Ao = new WeakMap(),
  zi = new WeakMap(),
  Po = new WeakMap(),
  qi = new WeakMap();
function Ni(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function $i(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ni(ci(t));
}
function Cn(t) {
  return gt(t) ? t : Io(t, !1, Oi, Li, Ao);
}
function Oo(t) {
  return Io(t, !0, Ii, ji, Po);
}
function Io(t, e, n, o, r) {
  if (!ue(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const s = r.get(t);
  if (s) return s;
  const i = $i(t);
  if (i === 0) return t;
  const c = new Proxy(t, i === 2 ? o : n);
  return r.set(t, c), c;
}
function ot(t) {
  return gt(t) ? ot(t.__v_raw) : !!(t && t.__v_isReactive);
}
function gt(t) {
  return !!(t && t.__v_isReadonly);
}
function pn(t) {
  return !!(t && t.__v_isShallow);
}
function To(t) {
  return ot(t) || gt(t);
}
function Z(t) {
  const e = t && t.__v_raw;
  return e ? Z(e) : t;
}
const kn = (t) => (ue(t) ? Cn(t) : t),
  En = (t) => (ue(t) ? Oo(t) : t);
function Ui(t) {
  qe && xe && ((t = Z(t)), Co(t.dep || (t.dep = wn())));
}
function Vi(t, e) {
  t = Z(t);
  const n = t.dep;
  n && dn(n);
}
function ge(t) {
  return !!(t && t.__v_isRef === !0);
}
function Dt(t) {
  return ge(t) ? t.value : t;
}
const Wi = {
  get: (t, e, n) => Dt(Reflect.get(t, e, n)),
  set: (t, e, n, o) => {
    const r = t[e];
    return ge(r) && !ge(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, o);
  },
};
function Hi(t) {
  return ot(t) ? t : new Proxy(t, Wi);
}
class Qi {
  constructor(e, n, o, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new xo(e, () => {
        this._dirty || ((this._dirty = !0), Vi(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const e = Z(this);
    return (
      Ui(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function Gi(t, e, n = !1) {
  let o, r;
  const s = K(t);
  return (
    s ? ((o = t), (r = ze)) : ((o = t.get), (r = t.set)),
    new Qi(o, r, s || !r, n)
  );
}
function rt(t, e, n, o) {
  let r;
  try {
    r = o ? t(...o) : t();
  } catch (s) {
    Mn(s, e, n);
  }
  return r;
}
function yt(t, e, n, o) {
  if (K(t)) {
    const s = rt(t, e, n, o);
    return (
      s &&
        mo(s) &&
        s.catch((i) => {
          Mn(i, e, n);
        }),
      s
    );
  }
  const r = [];
  for (let s = 0; s < t.length; s++) r.push(yt(t[s], e, n, o));
  return r;
}
function Mn(t, e, n, o = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const i = e.proxy,
      c = n;
    for (; s; ) {
      const y = s.ec;
      if (y) {
        for (let I = 0; I < y.length; I++) if (y[I](t, i, c) === !1) return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      rt(l, null, 10, [t, i, c]);
      return;
    }
  }
  Ki(t, n, r, o);
}
function Ki(t, e, n, o = !0) {
  console.error(t);
}
let qt = !1,
  hn = !1;
const Se = [];
let je = 0;
const st = [];
let Te = null,
  He = 0;
const Yi = Promise.resolve();
function Ji(t) {
  let e = je + 1,
    n = Se.length;
  for (; e < n; ) {
    const o = (e + n) >>> 1;
    vt(Se[o]) < t ? (e = o + 1) : (n = o);
  }
  return e;
}
function Zi(t) {
  (!Se.length || !Se.includes(t, qt && t.allowRecurse ? je + 1 : je)) &&
    (t.id == null ? Se.push(t) : Se.splice(Ji(t.id), 0, t), Ro());
}
function Ro() {
  !qt && !hn && ((hn = !0), Yi.then(Do));
}
function Fo(t) {
  W(t)
    ? st.push(...t)
    : (!Te || !Te.includes(t, t.allowRecurse ? He + 1 : He)) && st.push(t),
    Ro();
}
function Xi(t) {
  if (st.length) {
    const e = [...new Set(st)];
    if (((st.length = 0), Te)) {
      Te.push(...e);
      return;
    }
    for (Te = e, Te.sort((n, o) => vt(n) - vt(o)), He = 0; He < Te.length; He++)
      Te[He]();
    (Te = null), (He = 0);
  }
}
const vt = (t) => (t.id == null ? 1 / 0 : t.id),
  ea = (t, e) => {
    const n = vt(t) - vt(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Do(t) {
  (hn = !1), (qt = !0), Se.sort(ea);
  const e = ze;
  try {
    for (je = 0; je < Se.length; je++) {
      const n = Se[je];
      n && n.active !== !1 && rt(n, null, 14);
    }
  } finally {
    (je = 0),
      (Se.length = 0),
      Xi(),
      (qt = !1),
      (Se.length || st.length) && Do();
  }
}
let ke = null,
  Bo = null;
function Hn(t) {
  const e = ke;
  return (ke = t), (Bo = (t && t.type.__scopeId) || null), e;
}
function ta(t, e = ke, n) {
  if (!e || t._n) return t;
  const o = (...r) => {
    o._d && eo(-1);
    const s = Hn(e);
    let i;
    try {
      i = t(...r);
    } finally {
      Hn(s), o._d && eo(1);
    }
    return i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function na(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (Qo(o)) {
      if (o.type !== ut || o.children === "v-if") {
        if (e) return;
        e = o;
      }
    } else return;
  }
  return e;
}
function Lo({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const oa = (t) => t.__isSuspense,
  ra = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, o, r, s, i, c, l, y) {
      t == null ? ia(e, n, o, r, s, i, c, l, y) : aa(t, e, n, o, r, i, c, l, y);
    },
    hydrate: la,
    create: An,
    normalize: ca,
  },
  sa = ra;
function bt(t, e) {
  const n = t.props && t.props[e];
  K(n) && n();
}
function ia(t, e, n, o, r, s, i, c, l) {
  const {
      p: y,
      o: { createElement: I },
    } = l,
    g = I("div"),
    x = (t.suspense = An(t, r, o, e, g, n, s, i, c, l));
  y(null, (x.pendingBranch = t.ssContent), g, null, o, x, s, i),
    x.deps > 0
      ? (bt(t, "onPending"),
        bt(t, "onFallback"),
        y(null, t.ssFallback, e, n, o, null, s, i),
        it(x, t.ssFallback))
      : x.resolve(!1, !0);
}
function aa(t, e, n, o, r, s, i, c, { p: l, um: y, o: { createElement: I } }) {
  const g = (e.suspense = t.suspense);
  (g.vnode = e), (e.el = t.el);
  const x = e.ssContent,
    j = e.ssFallback,
    { activeBranch: U, pendingBranch: Y, isInFallback: H, isHydrating: X } = g;
  if (Y)
    (g.pendingBranch = x),
      en(x, Y)
        ? (l(Y, x, g.hiddenContainer, null, r, g, s, i, c),
          g.deps <= 0
            ? g.resolve()
            : H && (l(U, j, n, o, r, null, s, i, c), it(g, j)))
        : (g.pendingId++,
          X ? ((g.isHydrating = !1), (g.activeBranch = Y)) : y(Y, r, g),
          (g.deps = 0),
          (g.effects.length = 0),
          (g.hiddenContainer = I("div")),
          H
            ? (l(null, x, g.hiddenContainer, null, r, g, s, i, c),
              g.deps <= 0
                ? g.resolve()
                : (l(U, j, n, o, r, null, s, i, c), it(g, j)))
            : U && en(x, U)
            ? (l(U, x, n, o, r, g, s, i, c), g.resolve(!0))
            : (l(null, x, g.hiddenContainer, null, r, g, s, i, c),
              g.deps <= 0 && g.resolve()));
  else if (U && en(x, U)) l(U, x, n, o, r, g, s, i, c), it(g, x);
  else if (
    (bt(e, "onPending"),
    (g.pendingBranch = x),
    g.pendingId++,
    l(null, x, g.hiddenContainer, null, r, g, s, i, c),
    g.deps <= 0)
  )
    g.resolve();
  else {
    const { timeout: N, pendingId: oe } = g;
    N > 0
      ? setTimeout(() => {
          g.pendingId === oe && g.fallback(j);
        }, N)
      : N === 0 && g.fallback(j);
  }
}
function An(t, e, n, o, r, s, i, c, l, y, I = !1) {
  const {
    p: g,
    m: x,
    um: j,
    n: U,
    o: { parentNode: Y, remove: H },
  } = y;
  let X;
  const N = da(t);
  N && e != null && e.pendingBranch && ((X = e.pendingId), e.deps++);
  const oe = t.props ? ui(t.props.timeout) : void 0,
    z = {
      vnode: t,
      parent: e,
      parentComponent: n,
      isSVG: i,
      container: o,
      hiddenContainer: r,
      anchor: s,
      deps: 0,
      pendingId: 0,
      timeout: typeof oe == "number" ? oe : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: I,
      isUnmounted: !1,
      effects: [],
      resolve(A = !1, T = !1) {
        const {
          vnode: S,
          activeBranch: C,
          pendingBranch: h,
          pendingId: w,
          effects: d,
          parentComponent: u,
          container: E,
        } = z;
        if (z.isHydrating) z.isHydrating = !1;
        else if (!A) {
          const f = C && h.transition && h.transition.mode === "out-in";
          f &&
            (C.transition.afterLeave = () => {
              w === z.pendingId && x(h, E, p, 0);
            });
          let { anchor: p } = z;
          C && ((p = U(C)), j(C, u, z, !0)), f || x(h, E, p, 0);
        }
        it(z, h), (z.pendingBranch = null), (z.isInFallback = !1);
        let k = z.parent,
          M = !1;
        for (; k; ) {
          if (k.pendingBranch) {
            k.effects.push(...d), (M = !0);
            break;
          }
          k = k.parent;
        }
        M || Fo(d),
          (z.effects = []),
          N &&
            e &&
            e.pendingBranch &&
            X === e.pendingId &&
            (e.deps--, e.deps === 0 && !T && e.resolve()),
          bt(S, "onResolve");
      },
      fallback(A) {
        if (!z.pendingBranch) return;
        const {
          vnode: T,
          activeBranch: S,
          parentComponent: C,
          container: h,
          isSVG: w,
        } = z;
        bt(T, "onFallback");
        const d = U(S),
          u = () => {
            z.isInFallback && (g(null, A, h, d, C, null, w, c, l), it(z, A));
          },
          E = A.transition && A.transition.mode === "out-in";
        E && (S.transition.afterLeave = u),
          (z.isInFallback = !0),
          j(S, C, null, !0),
          E || u();
      },
      move(A, T, S) {
        z.activeBranch && x(z.activeBranch, A, T, S), (z.container = A);
      },
      next() {
        return z.activeBranch && U(z.activeBranch);
      },
      registerDep(A, T) {
        const S = !!z.pendingBranch;
        S && z.deps++;
        const C = A.vnode.el;
        A.asyncDep
          .catch((h) => {
            Mn(h, A, 0);
          })
          .then((h) => {
            if (A.isUnmounted || z.isUnmounted || z.pendingId !== A.suspenseId)
              return;
            A.asyncResolved = !0;
            const { vnode: w } = A;
            Va(A, h, !1), C && (w.el = C);
            const d = !C && A.subTree.el;
            T(A, w, Y(C || A.subTree.el), C ? null : U(A.subTree), z, i, l),
              d && H(d),
              Lo(A, w.el),
              S && --z.deps === 0 && z.resolve();
          });
      },
      unmount(A, T) {
        (z.isUnmounted = !0),
          z.activeBranch && j(z.activeBranch, n, A, T),
          z.pendingBranch && j(z.pendingBranch, n, A, T);
      },
    };
  return z;
}
function la(t, e, n, o, r, s, i, c, l) {
  const y = (e.suspense = An(
      e,
      o,
      n,
      t.parentNode,
      document.createElement("div"),
      null,
      r,
      s,
      i,
      c,
      !0
    )),
    I = l(t, (y.pendingBranch = e.ssContent), n, y, s, i);
  return y.deps === 0 && y.resolve(!1, !0), I;
}
function ca(t) {
  const { shapeFlag: e, children: n } = t,
    o = e & 32;
  (t.ssContent = Qn(o ? n.default : n)),
    (t.ssFallback = o ? Qn(n.fallback) : Ne(ut));
}
function Qn(t) {
  let e;
  if (K(t)) {
    const n = dt && t._c;
    n && ((t._d = !1), at()), (t = t()), n && ((t._d = !0), (e = we), Vo());
  }
  return (
    W(t) && (t = na(t)),
    (t = za(t)),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)),
    t
  );
}
function ua(t, e) {
  e && e.pendingBranch
    ? W(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Fo(t);
}
function it(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: o } = t,
    r = (n.el = e.el);
  o && o.subTree === n && ((o.vnode.el = r), Lo(o, r));
}
function da(t) {
  var e;
  return (
    ((e = t.props) == null ? void 0 : e.suspensible) != null &&
    t.props.suspensible !== !1
  );
}
const Tt = {};
function Jt(t, e, n) {
  return pa(t, e, n);
}
function pa(
  t,
  e,
  { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = ri
) {
  var c;
  const l = yi() === ((c = de) == null ? void 0 : c.scope) ? de : null;
  let y,
    I = !1,
    g = !1;
  if (
    (ge(t)
      ? ((y = () => t.value), (I = pn(t)))
      : ot(t)
      ? ((y = () => t), (o = !0))
      : W(t)
      ? ((g = !0),
        (I = t.some((N) => ot(N) || pn(N))),
        (y = () =>
          t.map((N) => {
            if (ge(N)) return N.value;
            if (ot(N)) return et(N);
            if (K(N)) return rt(N, l, 2);
          })))
      : K(t)
      ? e
        ? (y = () => rt(t, l, 2))
        : (y = () => {
            if (!(l && l.isUnmounted)) return x && x(), yt(t, l, 3, [j]);
          })
      : (y = ze),
    e && o)
  ) {
    const N = y;
    y = () => et(N());
  }
  let x,
    j = (N) => {
      x = X.onStop = () => {
        rt(N, l, 4);
      };
    },
    U = g ? new Array(t.length).fill(Tt) : Tt;
  const Y = () => {
    if (X.active)
      if (e) {
        const N = X.run();
        (o || I || (g ? N.some((oe, z) => zt(oe, U[z])) : zt(N, U))) &&
          (x && x(),
          yt(e, l, 3, [N, U === Tt ? void 0 : g && U[0] === Tt ? [] : U, j]),
          (U = N));
      } else X.run();
  };
  Y.allowRecurse = !!e;
  let H;
  r === "sync"
    ? (H = Y)
    : r === "post"
    ? (H = () => Xn(Y, l && l.suspense))
    : ((Y.pre = !0), l && (Y.id = l.uid), (H = () => Zi(Y)));
  const X = new xo(y, H);
  return (
    e
      ? n
        ? Y()
        : (U = X.run())
      : r === "post"
      ? Xn(X.run.bind(X), l && l.suspense)
      : X.run(),
    () => {
      X.stop(), l && l.scope && ho(l.scope.effects, X);
    }
  );
}
function ha(t, e) {
  const n = e.split(".");
  return () => {
    let o = t;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
function et(t, e) {
  if (!ue(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), ge(t))) et(t.value, e);
  else if (W(t)) for (let n = 0; n < t.length; n++) et(t[n], e);
  else if (fo(t) || tt(t))
    t.forEach((n) => {
      et(n, e);
    });
  else if (yo(t)) for (const n in t) et(t[n], e);
  return t;
}
function jo(t, e) {
  return K(t) ? (() => Fe({ name: t.name }, e, { setup: t }))() : t;
}
const fa = (t) => t.type.__isKeepAlive;
function ma(t, e) {
  zo(t, "a", e);
}
function ga(t, e) {
  zo(t, "da", e);
}
function zo(t, e, n = de) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
  if ((Kt(e, o, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      fa(r.parent.vnode) && ya(o, e, n, r), (r = r.parent);
  }
}
function ya(t, e, n, o) {
  const r = Kt(e, t, o, !0);
  qo(() => {
    ho(o[e], r);
  }, n);
}
function Kt(t, e, n = de, o = !1) {
  if (n) {
    const r = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...i) => {
          if (n.isUnmounted) return;
          _n(), Vt(n);
          const c = yt(e, n, t, i);
          return Tn(), xn(), c;
        });
    return o ? r.unshift(s) : r.push(s), s;
  }
}
const De =
    (t) =>
    (e, n = de) =>
      Kt(t, (...o) => e(...o), n),
  va = De("bm"),
  ba = De("m"),
  wa = De("bu"),
  _a = De("u"),
  xa = De("bum"),
  qo = De("um"),
  Sa = De("sp"),
  Ca = De("rtg"),
  ka = De("rtc");
function Ea(t, e = de) {
  Kt("ec", t, e);
}
const Ma = Symbol.for("v-ndc");
function Gn(t) {
  return W(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
function Aa(t) {
  const e = $a();
  let n = t();
  return (
    Tn(),
    mo(n) &&
      (n = n.catch((o) => {
        throw (Vt(e), o);
      })),
    [n, () => Vt(e)]
  );
}
function Pa(t) {
  const e = $o(t),
    n = t.proxy,
    o = t.ctx;
  e.beforeCreate && Kn(e.beforeCreate, t, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: l,
    inject: y,
    created: I,
    beforeMount: g,
    mounted: x,
    beforeUpdate: j,
    updated: U,
    activated: Y,
    deactivated: H,
    beforeDestroy: X,
    beforeUnmount: N,
    destroyed: oe,
    unmounted: z,
    render: A,
    renderTracked: T,
    renderTriggered: S,
    errorCaptured: C,
    serverPrefetch: h,
    expose: w,
    inheritAttrs: d,
    components: u,
    directives: E,
    filters: k,
  } = e;
  if ((y && Oa(y, o, null), i))
    for (const p in i) {
      const O = i[p];
      K(O) && (o[p] = O.bind(n));
    }
  if (r) {
    const p = r.call(n, n);
    ue(p) && (t.data = Cn(p));
  }
  if (s)
    for (const p in s) {
      const O = s[p],
        D = K(O) ? O.bind(n, n) : K(O.get) ? O.get.bind(n, n) : ze,
        R = !K(O) && K(O.set) ? O.set.bind(n) : ze,
        Q = Qa({ get: D, set: R });
      Object.defineProperty(o, p, {
        enumerable: !0,
        configurable: !0,
        get: () => Q.value,
        set: (ie) => (Q.value = ie),
      });
    }
  if (c) for (const p in c) No(c[p], o, n, p);
  if (l) {
    const p = K(l) ? l.call(n) : l;
    Reflect.ownKeys(p).forEach((O) => {
      Fa(O, p[O]);
    });
  }
  I && Kn(I, t, "c");
  function f(p, O) {
    W(O) ? O.forEach((D) => p(D.bind(n))) : O && p(O.bind(n));
  }
  if (
    (f(va, g),
    f(ba, x),
    f(wa, j),
    f(_a, U),
    f(ma, Y),
    f(ga, H),
    f(Ea, C),
    f(ka, T),
    f(Ca, S),
    f(xa, N),
    f(qo, z),
    f(Sa, h),
    W(w))
  )
    if (w.length) {
      const p = t.exposed || (t.exposed = {});
      w.forEach((O) => {
        Object.defineProperty(p, O, {
          get: () => n[O],
          set: (D) => (n[O] = D),
        });
      });
    } else t.exposed || (t.exposed = {});
  A && t.render === ze && (t.render = A),
    d != null && (t.inheritAttrs = d),
    u && (t.components = u),
    E && (t.directives = E);
}
function Oa(t, e, n = ze) {
  W(t) && (t = fn(t));
  for (const o in t) {
    const r = t[o];
    let s;
    ue(r)
      ? "default" in r
        ? (s = Zt(r.from || o, r.default, !0))
        : (s = Zt(r.from || o))
      : (s = Zt(r)),
      ge(s)
        ? Object.defineProperty(e, o, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
          })
        : (e[o] = s);
  }
}
function Kn(t, e, n) {
  yt(W(t) ? t.map((o) => o.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function No(t, e, n, o) {
  const r = o.includes(".") ? ha(n, o) : () => n[o];
  if (Me(t)) {
    const s = e[t];
    K(s) && Jt(r, s);
  } else if (K(t)) Jt(r, t.bind(n));
  else if (ue(t))
    if (W(t)) t.forEach((s) => No(s, e, n, o));
    else {
      const s = K(t.handler) ? t.handler.bind(n) : e[t.handler];
      K(s) && Jt(r, s, t);
    }
}
function $o(t) {
  const e = t.type,
    { mixins: n, extends: o } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = t.appContext,
    c = s.get(e);
  let l;
  return (
    c
      ? (l = c)
      : !r.length && !n && !o
      ? (l = e)
      : ((l = {}), r.length && r.forEach((y) => Nt(l, y, i, !0)), Nt(l, e, i)),
    ue(e) && s.set(e, l),
    l
  );
}
function Nt(t, e, n, o = !1) {
  const { mixins: r, extends: s } = e;
  s && Nt(t, s, n, !0), r && r.forEach((i) => Nt(t, i, n, !0));
  for (const i in e)
    if (!(o && i === "expose")) {
      const c = Ia[i] || (n && n[i]);
      t[i] = c ? c(t[i], e[i]) : e[i];
    }
  return t;
}
const Ia = {
  data: Yn,
  props: Jn,
  emits: Jn,
  methods: ft,
  computed: ft,
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  components: ft,
  directives: ft,
  watch: Ra,
  provide: Yn,
  inject: Ta,
};
function Yn(t, e) {
  return e
    ? t
      ? function () {
          return Fe(
            K(t) ? t.call(this, this) : t,
            K(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function Ta(t, e) {
  return ft(fn(t), fn(e));
}
function fn(t) {
  if (W(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function pe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ft(t, e) {
  return t ? Fe(Object.create(null), t, e) : e;
}
function Jn(t, e) {
  return t
    ? W(t) && W(e)
      ? [...new Set([...t, ...e])]
      : Fe(Object.create(null), Gn(t), Gn(e ?? {}))
    : e;
}
function Ra(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Fe(Object.create(null), t);
  for (const o in e) n[o] = pe(t[o], e[o]);
  return n;
}
let Zn = null;
function Fa(t, e) {
  if (de) {
    let n = de.provides;
    const o = de.parent && de.parent.provides;
    o === n && (n = de.provides = Object.create(o)), (n[t] = e);
  }
}
function Zt(t, e, n = !1) {
  const o = de || ke;
  if (o || Zn) {
    const r = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : Zn._context.provides;
    if (r && t in r) return r[t];
    if (arguments.length > 1) return n && K(e) ? e.call(o && o.proxy) : e;
  }
}
const Xn = ua,
  Da = (t) => t.__isTeleport,
  Pn = Symbol.for("v-fgt"),
  Uo = Symbol.for("v-txt"),
  ut = Symbol.for("v-cmt"),
  Bt = [];
let we = null;
function at(t = !1) {
  Bt.push((we = t ? null : []));
}
function Vo() {
  Bt.pop(), (we = Bt[Bt.length - 1] || null);
}
let dt = 1;
function eo(t) {
  dt += t;
}
function Wo(t) {
  return (
    (t.dynamicChildren = dt > 0 ? we || si : null),
    Vo(),
    dt > 0 && we && we.push(t),
    t
  );
}
function Xt(t, e, n, o, r, s) {
  return Wo($t(t, e, n, o, r, s, !0));
}
function Ho(t, e, n, o, r) {
  return Wo(Ne(t, e, n, o, r, !0));
}
function Qo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function en(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Go = "__vInternal",
  Ko = ({ key: t }) => t ?? null,
  Lt = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Me(t) || ge(t) || K(t)
        ? { i: ke, r: t, k: e, f: !!n }
        : t
      : null
  );
function $t(
  t,
  e = null,
  n = null,
  o = 0,
  r = null,
  s = t === Pn ? 0 : 1,
  i = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ko(e),
    ref: e && Lt(e),
    scopeId: Bo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ke,
  };
  return (
    c
      ? (On(l, n), s & 128 && t.normalize(l))
      : n && (l.shapeFlag |= Me(n) ? 8 : 16),
    dt > 0 &&
      !i &&
      we &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      we.push(l),
    l
  );
}
const Ne = Ba;
function Ba(t, e = null, n = null, o = 0, r = null, s = !1) {
  if (((!t || t === Ma) && (t = ut), Qo(t))) {
    const c = Ut(t, e, !0);
    return (
      n && On(c, n),
      dt > 0 &&
        !s &&
        we &&
        (c.shapeFlag & 6 ? (we[we.indexOf(t)] = c) : we.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Ha(t) && (t = t.__vccOpts), e)) {
    e = La(e);
    let { class: c, style: l } = e;
    c && !Me(c) && (e.class = nt(c)),
      ue(l) && (To(l) && !W(l) && (l = Fe({}, l)), (e.style = bn(l)));
  }
  const i = Me(t) ? 1 : oa(t) ? 128 : Da(t) ? 64 : ue(t) ? 4 : K(t) ? 2 : 0;
  return $t(t, e, n, o, r, i, s, !0);
}
function La(t) {
  return t ? (To(t) || Go in t ? Fe({}, t) : t) : null;
}
function Ut(t, e, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = t,
    c = e ? Na(o || {}, e) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Ko(c),
    ref:
      e && e.ref ? (n && r ? (W(r) ? r.concat(Lt(e)) : [r, Lt(e)]) : Lt(e)) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Pn ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ut(t.ssContent),
    ssFallback: t.ssFallback && Ut(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function ja(t = " ", e = 0) {
  return Ne(Uo, null, t, e);
}
function to(t = "", e = !1) {
  return e ? (at(), Ho(ut, null, t)) : Ne(ut, null, t);
}
function za(t) {
  return t == null || typeof t == "boolean"
    ? Ne(ut)
    : W(t)
    ? Ne(Pn, null, t.slice())
    : typeof t == "object"
    ? qa(t)
    : Ne(Uo, null, String(t));
}
function qa(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Ut(t);
}
function On(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null) e = null;
  else if (W(e)) n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), On(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(Go in e)
        ? (e._ctx = ke)
        : r === 3 &&
          ke &&
          (ke.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    K(e)
      ? ((e = { default: e, _ctx: ke }), (n = 32))
      : ((e = String(e)), o & 64 ? ((n = 16), (e = [ja(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Na(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const r in o)
      if (r === "class")
        e.class !== o.class && (e.class = nt([e.class, o.class]));
      else if (r === "style") e.style = bn([e.style, o.style]);
      else if (ai(r)) {
        const s = e[r],
          i = o[r];
        i &&
          s !== i &&
          !(W(s) && s.includes(i)) &&
          (e[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (e[r] = o[r]);
  }
  return e;
}
let de = null;
const $a = () => de || ke;
let In,
  Je,
  no = "__VUE_INSTANCE_SETTERS__";
(Je = jn()[no]) || (Je = jn()[no] = []),
  Je.push((t) => (de = t)),
  (In = (t) => {
    Je.length > 1 ? Je.forEach((e) => e(t)) : Je[0](t);
  });
const Vt = (t) => {
    In(t), t.scope.on();
  },
  Tn = () => {
    de && de.scope.off(), In(null);
  };
let Ua = !1;
function Va(t, e, n) {
  K(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : ue(e) && (t.setupState = Hi(e)),
    Wa(t, n);
}
let oo;
function Wa(t, e, n) {
  const o = t.type;
  if (!t.render) {
    if (!e && oo && !o.render) {
      const r = o.template || $o(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: i } = t.appContext.config,
          { delimiters: c, compilerOptions: l } = o,
          y = Fe(Fe({ isCustomElement: s, delimiters: c }, i), l);
        o.render = oo(r, y);
      }
    }
    t.render = o.render || ze;
  }
  Vt(t), _n(), Pa(t), xn(), Tn();
}
function Ha(t) {
  return K(t) && "__vccOpts" in t;
}
const Qa = (t, e) => Gi(t, e, Ua),
  tn = {
    numeric: "Numeric",
    alphanumeric: "Alphanumeric",
    byte: "Byte",
    kanji: "Kanji",
  };
function Ga(t) {
  switch (!0) {
    case /^[0-9]*$/.test(t):
      return tn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(t):
      return tn.alphanumeric;
    default:
      return tn.byte;
  }
}
const Rt = (t) => !!t && typeof t == "object" && !Array.isArray(t);
function Wt(t, ...e) {
  if (!e.length) return t;
  const n = e.shift();
  return n === void 0 || !Rt(t) || !Rt(n)
    ? t
    : ((t = { ...t }),
      Object.keys(n).forEach((o) => {
        const r = t[o],
          s = n[o];
        Array.isArray(r) && Array.isArray(s)
          ? (t[o] = s)
          : Rt(r) && Rt(s)
          ? (t[o] = Wt(Object.assign({}, r), s))
          : (t[o] = s);
      }),
      Wt(t, ...e));
}
function Ka(t, e) {
  const n = document.createElement("a");
  (n.download = e),
    (n.href = t),
    document.body.appendChild(n),
    n.click(),
    document.body.removeChild(n);
}
function Ya({
  originalHeight: t,
  originalWidth: e,
  maxHiddenDots: n,
  maxHiddenAxisDots: o,
  dotSize: r,
}) {
  const s = { x: 0, y: 0 },
    i = { x: 0, y: 0 };
  if (t <= 0 || e <= 0 || n <= 0 || r <= 0)
    return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
  const c = t / e;
  return (
    (s.x = Math.floor(Math.sqrt(n / c))),
    s.x <= 0 && (s.x = 1),
    o && o < s.x && (s.x = o),
    s.x % 2 === 0 && s.x--,
    (i.x = s.x * r),
    (s.y = 1 + 2 * Math.ceil((s.x * c - 1) / 2)),
    (i.y = Math.round(i.x * c)),
    (s.y * s.x > n || (o && o < s.y)) &&
      (o && o < s.y ? ((s.y = o), s.y % 2 === 0 && s.x--) : (s.y -= 2),
      (i.y = s.y * r),
      (s.x = 1 + 2 * Math.ceil((s.y / c - 1) / 2)),
      (i.x = Math.round(i.y / c))),
    { height: i.y, width: i.x, hideYDots: s.y, hideXDots: s.x }
  );
}
const Ja = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 },
  Ze = {
    dots: "dots",
    rounded: "rounded",
    classy: "classy",
    classyRounded: "classy-rounded",
    square: "square",
    extraRounded: "extra-rounded",
  };
class nn {
  constructor({ context: e, type: n }) {
    me(this, "_context"),
      me(this, "_type"),
      (this._context = e),
      (this._type = n);
  }
  draw(e, n, o, r) {
    const s = this._context,
      i = this._type;
    let c;
    switch (i) {
      case Ze.dots:
        c = this._drawDot;
        break;
      case Ze.classy:
        c = this._drawClassy;
        break;
      case Ze.classyRounded:
        c = this._drawClassyRounded;
        break;
      case Ze.rounded:
        c = this._drawRounded;
        break;
      case Ze.extraRounded:
        c = this._drawExtraRounded;
        break;
      case Ze.square:
      default:
        c = this._drawSquare;
    }
    c.call(this, { x: e, y: n, size: o, context: s, getNeighbor: r });
  }
  _rotateFigure({ x: e, y: n, size: o, context: r, rotation: s, draw: i }) {
    const c = e + o / 2,
      l = n + o / 2;
    r.translate(c, l),
      s && r.rotate(s),
      i(),
      r.closePath(),
      s && r.rotate(-s),
      r.translate(-c, -l);
  }
  _basicDot(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0), o.arc(0, 0, n / 2, 0, Math.PI * 2);
      },
    });
  }
  _basicSquare(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0), o.rect(-n / 2, -n / 2, n, n);
      },
    });
  }
  _basicSideRounded(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0),
          o.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2),
          o.lineTo(-n / 2, n / 2),
          o.lineTo(-n / 2, -n / 2),
          o.lineTo(0, -n / 2);
      },
    });
  }
  _basicCornerRounded(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0),
          o.arc(0, 0, n / 2, -Math.PI / 2, 0),
          o.lineTo(n / 2, n / 2),
          o.lineTo(-n / 2, n / 2),
          o.lineTo(-n / 2, -n / 2),
          o.lineTo(0, -n / 2);
      },
    });
  }
  _basicCornerExtraRounded(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0),
          o.arc(-n / 2, n / 2, n, -Math.PI / 2, 0),
          o.lineTo(-n / 2, n / 2),
          o.lineTo(-n / 2, -n / 2);
      },
    });
  }
  _basicCornersRounded(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0),
          o.arc(0, 0, n / 2, -Math.PI / 2, 0),
          o.lineTo(n / 2, n / 2),
          o.lineTo(0, n / 2),
          o.arc(0, 0, n / 2, Math.PI / 2, Math.PI),
          o.lineTo(-n / 2, -n / 2),
          o.lineTo(0, -n / 2);
      },
    });
  }
  _basicCornersExtraRounded(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0),
          o.arc(-n / 2, n / 2, n, -Math.PI / 2, 0),
          o.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI);
      },
    });
  }
  _drawDot({ x: e, y: n, size: o, context: r }) {
    this._basicDot({ x: e, y: n, size: o, context: r, rotation: 0 });
  }
  _drawSquare({ x: e, y: n, size: o, context: r }) {
    this._basicSquare({ x: e, y: n, size: o, context: r, rotation: 0 });
  }
  _drawRounded({ x: e, y: n, size: o, context: r, getNeighbor: s }) {
    const i = +s(-1, 0),
      c = +s(1, 0),
      l = +s(0, -1),
      y = +s(0, 1),
      I = i + c + l + y;
    if (I === 0) {
      this._basicDot({ x: e, y: n, size: o, context: r, rotation: 0 });
      return;
    }
    if (I > 2 || (i && c) || (l && y)) {
      this._basicSquare({ x: e, y: n, size: o, context: r, rotation: 0 });
      return;
    }
    if (I === 2) {
      let g = 0;
      i && l
        ? (g = Math.PI / 2)
        : l && c
        ? (g = Math.PI)
        : c && y && (g = -Math.PI / 2),
        this._basicCornerRounded({
          x: e,
          y: n,
          size: o,
          context: r,
          rotation: g,
        });
      return;
    }
    if (I === 1) {
      let g = 0;
      l ? (g = Math.PI / 2) : c ? (g = Math.PI) : y && (g = -Math.PI / 2),
        this._basicSideRounded({
          x: e,
          y: n,
          size: o,
          context: r,
          rotation: g,
        });
    }
  }
  _drawExtraRounded({ x: e, y: n, size: o, context: r, getNeighbor: s }) {
    const i = +s(-1, 0),
      c = +s(1, 0),
      l = +s(0, -1),
      y = +s(0, 1),
      I = i + c + l + y;
    if (I === 0) {
      this._basicDot({ x: e, y: n, size: o, context: r, rotation: 0 });
      return;
    }
    if (I > 2 || (i && c) || (l && y)) {
      this._basicSquare({ x: e, y: n, size: o, context: r, rotation: 0 });
      return;
    }
    if (I === 2) {
      let g = 0;
      i && l
        ? (g = Math.PI / 2)
        : l && c
        ? (g = Math.PI)
        : c && y && (g = -Math.PI / 2),
        this._basicCornerExtraRounded({
          x: e,
          y: n,
          size: o,
          context: r,
          rotation: g,
        });
      return;
    }
    if (I === 1) {
      let g = 0;
      l ? (g = Math.PI / 2) : c ? (g = Math.PI) : y && (g = -Math.PI / 2),
        this._basicSideRounded({
          x: e,
          y: n,
          size: o,
          context: r,
          rotation: g,
        });
    }
  }
  _drawClassy({ x: e, y: n, size: o, context: r, getNeighbor: s }) {
    const i = +s(-1, 0),
      c = +s(1, 0),
      l = +s(0, -1),
      y = +s(0, 1);
    if (i + c + l + y === 0) {
      this._basicCornersRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: Math.PI / 2,
      });
      return;
    }
    if (!i && !l) {
      this._basicCornerRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: -Math.PI / 2,
      });
      return;
    }
    if (!c && !y) {
      this._basicCornerRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: Math.PI / 2,
      });
      return;
    }
    this._basicSquare({ x: e, y: n, size: o, context: r, rotation: 0 });
  }
  _drawClassyRounded({ x: e, y: n, size: o, context: r, getNeighbor: s }) {
    const i = +s(-1, 0),
      c = +s(1, 0),
      l = +s(0, -1),
      y = +s(0, 1);
    if (i + c + l + y === 0) {
      this._basicCornersRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: Math.PI / 2,
      });
      return;
    }
    if (!i && !l) {
      this._basicCornerExtraRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: -Math.PI / 2,
      });
      return;
    }
    if (!c && !y) {
      this._basicCornerExtraRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: Math.PI / 2,
      });
      return;
    }
    this._basicSquare({ x: e, y: n, size: o, context: r, rotation: 0 });
  }
}
const on = { dot: "dot", square: "square", extraRounded: "extra-rounded" };
class Za {
  constructor({ context: e, type: n }) {
    me(this, "_context"),
      me(this, "_type"),
      (this._context = e),
      (this._type = n);
  }
  draw(e, n, o, r) {
    const s = this._context,
      i = this._type;
    let c;
    switch (i) {
      case on.square:
        c = this._drawSquare;
        break;
      case on.extraRounded:
        c = this._drawExtraRounded;
        break;
      case on.dot:
      default:
        c = this._drawDot;
    }
    c.call(this, { x: e, y: n, size: o, context: s, rotation: r });
  }
  _rotateFigure({ x: e, y: n, size: o, context: r, rotation: s, draw: i }) {
    const c = e + o / 2,
      l = n + o / 2;
    r.translate(c, l),
      s && r.rotate(s),
      i(),
      r.closePath(),
      s && r.rotate(-s),
      r.translate(-c, -l);
  }
  _basicDot(e) {
    const { size: n, context: o } = e,
      r = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.arc(0, 0, n / 2, 0, Math.PI * 2),
          o.arc(0, 0, n / 2 - r, 0, Math.PI * 2);
      },
    });
  }
  _basicSquare(e) {
    const { size: n, context: o } = e,
      r = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.rect(-n / 2, -n / 2, n, n),
          o.rect(-n / 2 + r, -n / 2 + r, n - 2 * r, n - 2 * r);
      },
    });
  }
  _basicExtraRounded(e) {
    const { size: n, context: o } = e,
      r = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.arc(-r, -r, 2.5 * r, Math.PI, -Math.PI / 2),
          o.lineTo(r, -3.5 * r),
          o.arc(r, -r, 2.5 * r, -Math.PI / 2, 0),
          o.lineTo(3.5 * r, -r),
          o.arc(r, r, 2.5 * r, 0, Math.PI / 2),
          o.lineTo(-r, 3.5 * r),
          o.arc(-r, r, 2.5 * r, Math.PI / 2, Math.PI),
          o.lineTo(-3.5 * r, -r),
          o.arc(-r, -r, 1.5 * r, Math.PI, -Math.PI / 2),
          o.lineTo(r, -2.5 * r),
          o.arc(r, -r, 1.5 * r, -Math.PI / 2, 0),
          o.lineTo(2.5 * r, -r),
          o.arc(r, r, 1.5 * r, 0, Math.PI / 2),
          o.lineTo(-r, 2.5 * r),
          o.arc(-r, r, 1.5 * r, Math.PI / 2, Math.PI),
          o.lineTo(-2.5 * r, -r);
      },
    });
  }
  _drawDot({ x: e, y: n, size: o, context: r, rotation: s }) {
    this._basicDot({ x: e, y: n, size: o, context: r, rotation: s });
  }
  _drawSquare({ x: e, y: n, size: o, context: r, rotation: s }) {
    this._basicSquare({ x: e, y: n, size: o, context: r, rotation: s });
  }
  _drawExtraRounded({ x: e, y: n, size: o, context: r, rotation: s }) {
    this._basicExtraRounded({ x: e, y: n, size: o, context: r, rotation: s });
  }
}
const ro = { dot: "dot", square: "square" };
class Xa {
  constructor({ context: e, type: n }) {
    me(this, "_context"),
      me(this, "_type"),
      (this._context = e),
      (this._type = n);
  }
  draw(e, n, o, r) {
    const s = this._context;
    switch (this._type) {
      case ro.square:
        this._drawSquare({ x: e, y: n, size: o, context: s, rotation: r });
        break;
      case ro.dot:
      default:
        this._drawDot({ x: e, y: n, size: o, context: s, rotation: r });
    }
  }
  _rotateFigure({ x: e, y: n, size: o, context: r, rotation: s, draw: i }) {
    const c = e + o / 2,
      l = n + o / 2;
    r.moveTo(0, 0),
      r.translate(c, l),
      s && r.rotate(s),
      i(),
      r.closePath(),
      s && r.rotate(-s),
      r.translate(-c, -l);
  }
  _drawDot(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0), o.arc(0, 0, n / 2, 0, Math.PI * 2);
      },
    });
  }
  _drawSquare(e) {
    const { size: n, context: o } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        o.moveTo(0, 0), o.rect(-n / 2, -n / 2, n, n);
      },
    });
  }
}
const el = { radial: "radial", linear: "linear" },
  Ve = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  We = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
class tl {
  constructor(e) {
    me(this, "_canvas"),
      me(this, "_options"),
      me(this, "_qr"),
      me(this, "_image"),
      (this._canvas = document.createElement("canvas")),
      (this._canvas.width = e.width),
      (this._canvas.height = e.height),
      (this._options = e);
  }
  get context() {
    return this._canvas.getContext("2d");
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  getCanvas() {
    return this._canvas;
  }
  clear() {
    const e = this.context;
    e && e.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(e) {
    const n = e.getModuleCount(),
      o =
        Math.min(this._options.width, this._options.height) -
        this._options.margin * 2,
      r = Math.floor(o / n);
    let s = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
    if (((this._qr = e), this._options.image)) {
      if ((await this.loadImage(), !this._image)) return;
      const { imageOptions: i, qrOptions: c } = this._options,
        l = i.imageSize * Ja[c.errorCorrectionLevel],
        y = Math.floor(l * n * n);
      s = Ya({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: y,
        maxHiddenAxisDots: n - 14,
        dotSize: r,
      });
    }
    this.clear(),
      this.drawBackground(),
      this.drawDots((i, c) => {
        var l, y, I, g, x, j;
        return !(
          (this._options.imageOptions.hideBackgroundDots &&
            i >= (n - s.hideXDots) / 2 &&
            i < (n + s.hideXDots) / 2 &&
            c >= (n - s.hideYDots) / 2 &&
            c < (n + s.hideYDots) / 2) ||
          ((l = Ve[i]) != null && l[c]) ||
          ((y = Ve[i - n + 7]) != null && y[c]) ||
          ((I = Ve[i]) != null && I[c - n + 7]) ||
          ((g = We[i]) != null && g[c]) ||
          ((x = We[i - n + 7]) != null && x[c]) ||
          ((j = We[i]) != null && j[c - n + 7])
        );
      }),
      this.drawCorners(),
      this._options.image &&
        this.drawImage({
          width: s.width,
          height: s.height,
          count: n,
          dotSize: r,
        });
  }
  drawBackground() {
    const e = this.context,
      n = this._options;
    if (e) {
      if (n.backgroundOptions.gradient) {
        const o = n.backgroundOptions.gradient,
          r = this._createGradient({
            context: e,
            options: o,
            additionalRotation: 0,
            x: 0,
            y: 0,
            size:
              this._canvas.width > this._canvas.height
                ? this._canvas.width
                : this._canvas.height,
          });
        o.colorStops.forEach(({ offset: s, color: i }) => {
          r.addColorStop(s, i);
        }),
          (e.fillStyle = r);
      } else
        n.backgroundOptions.color && (e.fillStyle = n.backgroundOptions.color);
      e.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(e) {
    if (!this._qr) throw "QR code is not defined";
    const n = this.context;
    if (!n) throw "QR code is not defined";
    const o = this._options,
      r = this._qr.getModuleCount();
    if (r > o.width || r > o.height) throw "The canvas is too small.";
    const s = Math.min(o.width, o.height) - o.margin * 2,
      i = Math.floor(s / r),
      c = Math.floor((o.width - r * i) / 2),
      l = Math.floor((o.height - r * i) / 2),
      y = new nn({ context: n, type: o.dotsOptions.type });
    n.beginPath();
    for (let I = 0; I < r; I++)
      for (let g = 0; g < r; g++)
        (e && !e(I, g)) ||
          (this._qr.isDark(I, g) &&
            y.draw(c + I * i, l + g * i, i, (x, j) =>
              I + x < 0 ||
              g + j < 0 ||
              I + x >= r ||
              g + j >= r ||
              (e && !e(I + x, g + j))
                ? !1
                : !!this._qr && this._qr.isDark(I + x, g + j)
            ));
    if (o.dotsOptions.gradient) {
      const I = o.dotsOptions.gradient,
        g = this._createGradient({
          context: n,
          options: I,
          additionalRotation: 0,
          x: c,
          y: l,
          size: r * i,
        });
      I.colorStops.forEach(({ offset: x, color: j }) => {
        g.addColorStop(x, j);
      }),
        (n.fillStyle = n.strokeStyle = g);
    } else
      o.dotsOptions.color &&
        (n.fillStyle = n.strokeStyle = o.dotsOptions.color);
    n.fill("evenodd");
  }
  drawCorners(e) {
    if (!this._qr) throw "QR code is not defined";
    const n = this.context;
    if (!n) throw "QR code is not defined";
    const o = this._options,
      r = this._qr.getModuleCount(),
      s = Math.min(o.width, o.height) - o.margin * 2,
      i = Math.floor(s / r),
      c = i * 7,
      l = i * 3,
      y = Math.floor((o.width - r * i) / 2),
      I = Math.floor((o.height - r * i) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2],
    ].forEach(([g, x, j]) => {
      var U, Y, H, X, N, oe, z, A, T, S;
      if (e && !e(g, x)) return;
      const C = y + g * i * (r - 7),
        h = I + x * i * (r - 7);
      if ((U = o.cornersSquareOptions) != null && U.type) {
        const w = new Za({
          context: n,
          type: (Y = o.cornersSquareOptions) == null ? void 0 : Y.type,
        });
        n.beginPath(), w.draw(C, h, c, j);
      } else {
        const w = new nn({ context: n, type: o.dotsOptions.type });
        n.beginPath();
        for (let d = 0; d < Ve.length; d++)
          for (let u = 0; u < Ve[d].length; u++)
            (H = Ve[d]) != null &&
              H[u] &&
              w.draw(C + d * i, h + u * i, i, (E, k) => {
                var M;
                return !!((M = Ve[d + E]) != null && M[u + k]);
              });
      }
      if ((X = o.cornersSquareOptions) != null && X.gradient) {
        const w = o.cornersSquareOptions.gradient,
          d = this._createGradient({
            context: n,
            options: w,
            additionalRotation: j,
            x: C,
            y: h,
            size: c,
          });
        w.colorStops.forEach(({ offset: u, color: E }) => {
          d.addColorStop(u, E);
        }),
          (n.fillStyle = n.strokeStyle = d);
      } else
        (N = o.cornersSquareOptions) != null &&
          N.color &&
          (n.fillStyle = n.strokeStyle = o.cornersSquareOptions.color);
      if ((n.fill("evenodd"), (oe = o.cornersDotOptions) != null && oe.type)) {
        const w = new Xa({
          context: n,
          type: (z = o.cornersDotOptions) == null ? void 0 : z.type,
        });
        n.beginPath(), w.draw(C + i * 2, h + i * 2, l, j);
      } else {
        const w = new nn({ context: n, type: o.dotsOptions.type });
        n.beginPath();
        for (let d = 0; d < We.length; d++)
          for (let u = 0; u < We[d].length; u++)
            (A = We[d]) != null &&
              A[u] &&
              w.draw(C + d * i, h + u * i, i, (E, k) => {
                var M;
                return !!((M = We[d + E]) != null && M[u + k]);
              });
      }
      if ((T = o.cornersDotOptions) != null && T.gradient) {
        const w = o.cornersDotOptions.gradient,
          d = this._createGradient({
            context: n,
            options: w,
            additionalRotation: j,
            x: C + i * 2,
            y: h + i * 2,
            size: l,
          });
        w.colorStops.forEach(({ offset: u, color: E }) => {
          d.addColorStop(u, E);
        }),
          (n.fillStyle = n.strokeStyle = d);
      } else
        (S = o.cornersDotOptions) != null &&
          S.color &&
          (n.fillStyle = n.strokeStyle = o.cornersDotOptions.color);
      n.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((e, n) => {
      const o = this._options,
        r = new Image();
      if (!o.image) return n("Image is not defined");
      typeof o.imageOptions.crossOrigin == "string" &&
        (r.crossOrigin = o.imageOptions.crossOrigin),
        (this._image = r),
        (r.onload = () => {
          e();
        }),
        (r.src = o.image);
    });
  }
  drawImage({ width: e, height: n, count: o, dotSize: r }) {
    const s = this.context;
    if (!s) throw "canvasContext is not defined";
    if (!this._image) throw "image is not defined";
    const i = this._options,
      c = Math.floor((i.width - o * r) / 2),
      l = Math.floor((i.height - o * r) / 2),
      y = c + i.imageOptions.margin + (o * r - e) / 2,
      I = l + i.imageOptions.margin + (o * r - n) / 2,
      g = e - i.imageOptions.margin * 2,
      x = n - i.imageOptions.margin * 2;
    s.drawImage(this._image, y, I, g < 0 ? 0 : g, x < 0 ? 0 : x);
  }
  _createGradient({
    context: e,
    options: n,
    additionalRotation: o,
    x: r,
    y: s,
    size: i,
  }) {
    let c;
    if (n.type === el.radial)
      c = e.createRadialGradient(
        r + i / 2,
        s + i / 2,
        0,
        r + i / 2,
        s + i / 2,
        i / 2
      );
    else {
      const l = ((n.rotation || 0) + o) % (2 * Math.PI),
        y = (l + 2 * Math.PI) % (2 * Math.PI);
      let I = r + i / 2,
        g = s + i / 2,
        x = r + i / 2,
        j = s + i / 2;
      (y >= 0 && y <= 0.25 * Math.PI) ||
      (y > 1.75 * Math.PI && y <= 2 * Math.PI)
        ? ((I = I - i / 2),
          (g = g - (i / 2) * Math.tan(l)),
          (x = x + i / 2),
          (j = j + (i / 2) * Math.tan(l)))
        : y > 0.25 * Math.PI && y <= 0.75 * Math.PI
        ? ((g = g - i / 2),
          (I = I - i / 2 / Math.tan(l)),
          (j = j + i / 2),
          (x = x + i / 2 / Math.tan(l)))
        : y > 0.75 * Math.PI && y <= 1.25 * Math.PI
        ? ((I = I + i / 2),
          (g = g + (i / 2) * Math.tan(l)),
          (x = x - i / 2),
          (j = j - (i / 2) * Math.tan(l)))
        : y > 1.25 * Math.PI &&
          y <= 1.75 * Math.PI &&
          ((g = g + i / 2),
          (I = I + i / 2 / Math.tan(l)),
          (j = j - i / 2),
          (x = x - i / 2 / Math.tan(l))),
        (c = e.createLinearGradient(
          Math.round(I),
          Math.round(g),
          Math.round(x),
          Math.round(j)
        ));
    }
    return c;
  }
}
const Yo = {};
for (let t = 0; t <= 40; t++) Yo[t] = t;
const nl = { L: "L", M: "M", Q: "Q", H: "H" },
  so = {
    width: 300,
    height: 300,
    data: "",
    margin: 0,
    qrOptions: { typeNumber: Yo[0], mode: void 0, errorCorrectionLevel: nl.Q },
    imageOptions: {
      hideBackgroundDots: !0,
      imageSize: 0.4,
      crossOrigin: void 0,
      margin: 0,
    },
    dotsOptions: { type: "square", color: "#000" },
    backgroundOptions: { color: "#fff" },
  };
function Ft(t) {
  const e = { ...t };
  if (!e.colorStops || !e.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return (
    e.rotation ? (e.rotation = Number(e.rotation)) : (e.rotation = 0),
    (e.colorStops = e.colorStops.map((n) => ({
      ...n,
      offset: Number(n.offset),
    }))),
    e
  );
}
function io(t) {
  const e = { ...t };
  return (
    (e.width = Number(e.width)),
    (e.height = Number(e.height)),
    (e.margin = Number(e.margin)),
    (e.imageOptions = {
      ...e.imageOptions,
      hideBackgroundDots: !!e.imageOptions.hideBackgroundDots,
      imageSize: Number(e.imageOptions.imageSize),
      margin: Number(e.imageOptions.margin),
    }),
    e.margin > Math.min(e.width, e.height) &&
      (e.margin = Math.min(e.width, e.height)),
    (e.dotsOptions = { ...e.dotsOptions }),
    e.dotsOptions.gradient &&
      (e.dotsOptions.gradient = Ft(e.dotsOptions.gradient)),
    e.cornersSquareOptions &&
      ((e.cornersSquareOptions = { ...e.cornersSquareOptions }),
      e.cornersSquareOptions.gradient &&
        (e.cornersSquareOptions.gradient = Ft(
          e.cornersSquareOptions.gradient
        ))),
    e.cornersDotOptions &&
      ((e.cornersDotOptions = { ...e.cornersDotOptions }),
      e.cornersDotOptions.gradient &&
        (e.cornersDotOptions.gradient = Ft(e.cornersDotOptions.gradient))),
    e.backgroundOptions &&
      ((e.backgroundOptions = { ...e.backgroundOptions }),
      e.backgroundOptions.gradient &&
        (e.backgroundOptions.gradient = Ft(e.backgroundOptions.gradient))),
    e
  );
}
function ol(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Jo = { exports: {} };
(function (t, e) {
  var n = (function () {
    var o = function (A, T) {
      var S = 236,
        C = 17,
        h = A,
        w = s[T],
        d = null,
        u = 0,
        E = null,
        k = [],
        M = {},
        f = function (b, _) {
          (u = h * 4 + 17),
            (d = (function (m) {
              for (var v = new Array(m), P = 0; P < m; P += 1) {
                v[P] = new Array(m);
                for (var F = 0; F < m; F += 1) v[P][F] = null;
              }
              return v;
            })(u)),
            p(0, 0),
            p(u - 7, 0),
            p(0, u - 7),
            R(),
            D(),
            ie(b, _),
            h >= 7 && Q(b),
            E == null && (E = J(h, w, k)),
            ae(E, _);
        },
        p = function (b, _) {
          for (var m = -1; m <= 7; m += 1)
            if (!(b + m <= -1 || u <= b + m))
              for (var v = -1; v <= 7; v += 1)
                _ + v <= -1 ||
                  u <= _ + v ||
                  ((0 <= m && m <= 6 && (v == 0 || v == 6)) ||
                  (0 <= v && v <= 6 && (m == 0 || m == 6)) ||
                  (2 <= m && m <= 4 && 2 <= v && v <= 4)
                    ? (d[b + m][_ + v] = !0)
                    : (d[b + m][_ + v] = !1));
        },
        O = function () {
          for (var b = 0, _ = 0, m = 0; m < 8; m += 1) {
            f(!0, m);
            var v = c.getLostPoint(M);
            (m == 0 || b > v) && ((b = v), (_ = m));
          }
          return _;
        },
        D = function () {
          for (var b = 8; b < u - 8; b += 1)
            d[b][6] == null && (d[b][6] = b % 2 == 0);
          for (var _ = 8; _ < u - 8; _ += 1)
            d[6][_] == null && (d[6][_] = _ % 2 == 0);
        },
        R = function () {
          for (var b = c.getPatternPosition(h), _ = 0; _ < b.length; _ += 1)
            for (var m = 0; m < b.length; m += 1) {
              var v = b[_],
                P = b[m];
              if (d[v][P] == null)
                for (var F = -2; F <= 2; F += 1)
                  for (var L = -2; L <= 2; L += 1)
                    F == -2 || F == 2 || L == -2 || L == 2 || (F == 0 && L == 0)
                      ? (d[v + F][P + L] = !0)
                      : (d[v + F][P + L] = !1);
            }
        },
        Q = function (b) {
          for (var _ = c.getBCHTypeNumber(h), m = 0; m < 18; m += 1) {
            var v = !b && ((_ >> m) & 1) == 1;
            d[Math.floor(m / 3)][(m % 3) + u - 8 - 3] = v;
          }
          for (var m = 0; m < 18; m += 1) {
            var v = !b && ((_ >> m) & 1) == 1;
            d[(m % 3) + u - 8 - 3][Math.floor(m / 3)] = v;
          }
        },
        ie = function (b, _) {
          for (
            var m = (w << 3) | _, v = c.getBCHTypeInfo(m), P = 0;
            P < 15;
            P += 1
          ) {
            var F = !b && ((v >> P) & 1) == 1;
            P < 6
              ? (d[P][8] = F)
              : P < 8
              ? (d[P + 1][8] = F)
              : (d[u - 15 + P][8] = F);
          }
          for (var P = 0; P < 15; P += 1) {
            var F = !b && ((v >> P) & 1) == 1;
            P < 8
              ? (d[8][u - P - 1] = F)
              : P < 9
              ? (d[8][15 - P - 1 + 1] = F)
              : (d[8][15 - P - 1] = F);
          }
          d[u - 8][8] = !b;
        },
        ae = function (b, _) {
          for (
            var m = -1,
              v = u - 1,
              P = 7,
              F = 0,
              L = c.getMaskFunction(_),
              B = u - 1;
            B > 0;
            B -= 2
          )
            for (B == 6 && (B -= 1); ; ) {
              for (var ee = 0; ee < 2; ee += 1)
                if (d[v][B - ee] == null) {
                  var se = !1;
                  F < b.length && (se = ((b[F] >>> P) & 1) == 1);
                  var q = L(v, B - ee);
                  q && (se = !se),
                    (d[v][B - ee] = se),
                    (P -= 1),
                    P == -1 && ((F += 1), (P = 7));
                }
              if (((v += m), v < 0 || u <= v)) {
                (v -= m), (m = -m);
                break;
              }
            }
        },
        ye = function (b, _) {
          for (
            var m = 0,
              v = 0,
              P = 0,
              F = new Array(_.length),
              L = new Array(_.length),
              B = 0;
            B < _.length;
            B += 1
          ) {
            var ee = _[B].dataCount,
              se = _[B].totalCount - ee;
            (v = Math.max(v, ee)),
              (P = Math.max(P, se)),
              (F[B] = new Array(ee));
            for (var q = 0; q < F[B].length; q += 1)
              F[B][q] = 255 & b.getBuffer()[q + m];
            m += ee;
            var ve = c.getErrorCorrectPolynomial(se),
              be = y(F[B], ve.getLength() - 1),
              Fn = be.mod(ve);
            L[B] = new Array(ve.getLength() - 1);
            for (var q = 0; q < L[B].length; q += 1) {
              var Dn = q + Fn.getLength() - L[B].length;
              L[B][q] = Dn >= 0 ? Fn.getAt(Dn) : 0;
            }
          }
          for (var Bn = 0, q = 0; q < _.length; q += 1) Bn += _[q].totalCount;
          for (var Yt = new Array(Bn), Et = 0, q = 0; q < v; q += 1)
            for (var B = 0; B < _.length; B += 1)
              q < F[B].length && ((Yt[Et] = F[B][q]), (Et += 1));
          for (var q = 0; q < P; q += 1)
            for (var B = 0; B < _.length; B += 1)
              q < L[B].length && ((Yt[Et] = L[B][q]), (Et += 1));
          return Yt;
        },
        J = function (b, _, m) {
          for (
            var v = I.getRSBlocks(b, _), P = g(), F = 0;
            F < m.length;
            F += 1
          ) {
            var L = m[F];
            P.put(L.getMode(), 4),
              P.put(L.getLength(), c.getLengthInBits(L.getMode(), b)),
              L.write(P);
          }
          for (var B = 0, F = 0; F < v.length; F += 1) B += v[F].dataCount;
          if (P.getLengthInBits() > B * 8)
            throw (
              "code length overflow. (" +
              P.getLengthInBits() +
              ">" +
              B * 8 +
              ")"
            );
          for (
            P.getLengthInBits() + 4 <= B * 8 && P.put(0, 4);
            P.getLengthInBits() % 8 != 0;

          )
            P.putBit(!1);
          for (
            ;
            !(
              P.getLengthInBits() >= B * 8 ||
              (P.put(S, 8), P.getLengthInBits() >= B * 8)
            );

          )
            P.put(C, 8);
          return ye(P, v);
        };
      (M.addData = function (b, _) {
        _ = _ || "Byte";
        var m = null;
        switch (_) {
          case "Numeric":
            m = x(b);
            break;
          case "Alphanumeric":
            m = j(b);
            break;
          case "Byte":
            m = U(b);
            break;
          case "Kanji":
            m = Y(b);
            break;
          default:
            throw "mode:" + _;
        }
        k.push(m), (E = null);
      }),
        (M.isDark = function (b, _) {
          if (b < 0 || u <= b || _ < 0 || u <= _) throw b + "," + _;
          return d[b][_];
        }),
        (M.getModuleCount = function () {
          return u;
        }),
        (M.make = function () {
          if (h < 1) {
            for (var b = 1; b < 40; b++) {
              for (
                var _ = I.getRSBlocks(b, w), m = g(), v = 0;
                v < k.length;
                v++
              ) {
                var P = k[v];
                m.put(P.getMode(), 4),
                  m.put(P.getLength(), c.getLengthInBits(P.getMode(), b)),
                  P.write(m);
              }
              for (var F = 0, v = 0; v < _.length; v++) F += _[v].dataCount;
              if (m.getLengthInBits() <= F * 8) break;
            }
            h = b;
          }
          f(!1, O());
        }),
        (M.createTableTag = function (b, _) {
          (b = b || 2), (_ = typeof _ > "u" ? b * 4 : _);
          var m = "";
          (m += '<table style="'),
            (m += " border-width: 0px; border-style: none;"),
            (m += " border-collapse: collapse;"),
            (m += " padding: 0px; margin: " + _ + "px;"),
            (m += '">'),
            (m += "<tbody>");
          for (var v = 0; v < M.getModuleCount(); v += 1) {
            m += "<tr>";
            for (var P = 0; P < M.getModuleCount(); P += 1)
              (m += '<td style="'),
                (m += " border-width: 0px; border-style: none;"),
                (m += " border-collapse: collapse;"),
                (m += " padding: 0px; margin: 0px;"),
                (m += " width: " + b + "px;"),
                (m += " height: " + b + "px;"),
                (m += " background-color: "),
                (m += M.isDark(v, P) ? "#000000" : "#ffffff"),
                (m += ";"),
                (m += '"/>');
            m += "</tr>";
          }
          return (m += "</tbody>"), (m += "</table>"), m;
        }),
        (M.createSvgTag = function (b, _, m, v) {
          var P = {};
          typeof arguments[0] == "object" &&
            ((P = arguments[0]),
            (b = P.cellSize),
            (_ = P.margin),
            (m = P.alt),
            (v = P.title)),
            (b = b || 2),
            (_ = typeof _ > "u" ? b * 4 : _),
            (m = typeof m == "string" ? { text: m } : m || {}),
            (m.text = m.text || null),
            (m.id = m.text ? m.id || "qrcode-description" : null),
            (v = typeof v == "string" ? { text: v } : v || {}),
            (v.text = v.text || null),
            (v.id = v.text ? v.id || "qrcode-title" : null);
          var F = M.getModuleCount() * b + _ * 2,
            L,
            B,
            ee,
            se,
            q = "",
            ve;
          for (
            ve = "l" + b + ",0 0," + b + " -" + b + ",0 0,-" + b + "z ",
              q += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
              q += P.scalable
                ? ""
                : ' width="' + F + 'px" height="' + F + 'px"',
              q += ' viewBox="0 0 ' + F + " " + F + '" ',
              q += ' preserveAspectRatio="xMinYMin meet"',
              q +=
                v.text || m.text
                  ? ' role="img" aria-labelledby="' +
                    re([v.id, m.id].join(" ").trim()) +
                    '"'
                  : "",
              q += ">",
              q += v.text
                ? '<title id="' + re(v.id) + '">' + re(v.text) + "</title>"
                : "",
              q += m.text
                ? '<description id="' +
                  re(m.id) +
                  '">' +
                  re(m.text) +
                  "</description>"
                : "",
              q +=
                '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
              q += '<path d="',
              ee = 0;
            ee < M.getModuleCount();
            ee += 1
          )
            for (se = ee * b + _, L = 0; L < M.getModuleCount(); L += 1)
              M.isDark(ee, L) &&
                ((B = L * b + _), (q += "M" + B + "," + se + ve));
          return (
            (q += '" stroke="transparent" fill="black"/>'), (q += "</svg>"), q
          );
        }),
        (M.createDataURL = function (b, _) {
          (b = b || 2), (_ = typeof _ > "u" ? b * 4 : _);
          var m = M.getModuleCount() * b + _ * 2,
            v = _,
            P = m - _;
          return z(m, m, function (F, L) {
            if (v <= F && F < P && v <= L && L < P) {
              var B = Math.floor((F - v) / b),
                ee = Math.floor((L - v) / b);
              return M.isDark(ee, B) ? 0 : 1;
            } else return 1;
          });
        }),
        (M.createImgTag = function (b, _, m) {
          (b = b || 2), (_ = typeof _ > "u" ? b * 4 : _);
          var v = M.getModuleCount() * b + _ * 2,
            P = "";
          return (
            (P += "<img"),
            (P += ' src="'),
            (P += M.createDataURL(b, _)),
            (P += '"'),
            (P += ' width="'),
            (P += v),
            (P += '"'),
            (P += ' height="'),
            (P += v),
            (P += '"'),
            m && ((P += ' alt="'), (P += re(m)), (P += '"')),
            (P += "/>"),
            P
          );
        });
      var re = function (b) {
          for (var _ = "", m = 0; m < b.length; m += 1) {
            var v = b.charAt(m);
            switch (v) {
              case "<":
                _ += "&lt;";
                break;
              case ">":
                _ += "&gt;";
                break;
              case "&":
                _ += "&amp;";
                break;
              case '"':
                _ += "&quot;";
                break;
              default:
                _ += v;
                break;
            }
          }
          return _;
        },
        Ie = function (b) {
          var _ = 1;
          b = typeof b > "u" ? _ * 2 : b;
          var m = M.getModuleCount() * _ + b * 2,
            v = b,
            P = m - b,
            F,
            L,
            B,
            ee,
            se,
            q = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
            ve = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " },
            be = "";
          for (F = 0; F < m; F += 2) {
            for (
              B = Math.floor((F - v) / _),
                ee = Math.floor((F + 1 - v) / _),
                L = 0;
              L < m;
              L += 1
            )
              (se = "█"),
                v <= L &&
                  L < P &&
                  v <= F &&
                  F < P &&
                  M.isDark(B, Math.floor((L - v) / _)) &&
                  (se = " "),
                v <= L &&
                L < P &&
                v <= F + 1 &&
                F + 1 < P &&
                M.isDark(ee, Math.floor((L - v) / _))
                  ? (se += " ")
                  : (se += "█"),
                (be += b < 1 && F + 1 >= P ? ve[se] : q[se]);
            be += `
`;
          }
          return m % 2 && b > 0
            ? be.substring(0, be.length - m - 1) + Array(m + 1).join("▀")
            : be.substring(0, be.length - 1);
        };
      return (
        (M.createASCII = function (b, _) {
          if (((b = b || 1), b < 2)) return Ie(_);
          (b -= 1), (_ = typeof _ > "u" ? b * 2 : _);
          var m = M.getModuleCount() * b + _ * 2,
            v = _,
            P = m - _,
            F,
            L,
            B,
            ee,
            se = Array(b + 1).join("██"),
            q = Array(b + 1).join("  "),
            ve = "",
            be = "";
          for (F = 0; F < m; F += 1) {
            for (B = Math.floor((F - v) / b), be = "", L = 0; L < m; L += 1)
              (ee = 1),
                v <= L &&
                  L < P &&
                  v <= F &&
                  F < P &&
                  M.isDark(B, Math.floor((L - v) / b)) &&
                  (ee = 0),
                (be += ee ? se : q);
            for (B = 0; B < b; B += 1)
              ve +=
                be +
                `
`;
          }
          return ve.substring(0, ve.length - 1);
        }),
        (M.renderTo2dContext = function (b, _) {
          _ = _ || 2;
          for (var m = M.getModuleCount(), v = 0; v < m; v++)
            for (var P = 0; P < m; P++)
              (b.fillStyle = M.isDark(v, P) ? "black" : "white"),
                b.fillRect(v * _, P * _, _, _);
        }),
        M
      );
    };
    (o.stringToBytesFuncs = {
      default: function (A) {
        for (var T = [], S = 0; S < A.length; S += 1) {
          var C = A.charCodeAt(S);
          T.push(C & 255);
        }
        return T;
      },
    }),
      (o.stringToBytes = o.stringToBytesFuncs.default),
      (o.createStringToBytes = function (A, T) {
        var S = (function () {
            for (
              var h = N(A),
                w = function () {
                  var D = h.read();
                  if (D == -1) throw "eof";
                  return D;
                },
                d = 0,
                u = {};
              ;

            ) {
              var E = h.read();
              if (E == -1) break;
              var k = w(),
                M = w(),
                f = w(),
                p = String.fromCharCode((E << 8) | k),
                O = (M << 8) | f;
              (u[p] = O), (d += 1);
            }
            if (d != T) throw d + " != " + T;
            return u;
          })(),
          C = "?".charCodeAt(0);
        return function (h) {
          for (var w = [], d = 0; d < h.length; d += 1) {
            var u = h.charCodeAt(d);
            if (u < 128) w.push(u);
            else {
              var E = S[h.charAt(d)];
              typeof E == "number"
                ? (E & 255) == E
                  ? w.push(E)
                  : (w.push(E >>> 8), w.push(E & 255))
                : w.push(C);
            }
          }
          return w;
        };
      });
    var r = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      },
      s = { L: 1, M: 0, Q: 3, H: 2 },
      i = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      c = (function () {
        var A = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          T = 1335,
          S = 7973,
          C = 21522,
          h = {},
          w = function (d) {
            for (var u = 0; d != 0; ) (u += 1), (d >>>= 1);
            return u;
          };
        return (
          (h.getBCHTypeInfo = function (d) {
            for (var u = d << 10; w(u) - w(T) >= 0; ) u ^= T << (w(u) - w(T));
            return ((d << 10) | u) ^ C;
          }),
          (h.getBCHTypeNumber = function (d) {
            for (var u = d << 12; w(u) - w(S) >= 0; ) u ^= S << (w(u) - w(S));
            return (d << 12) | u;
          }),
          (h.getPatternPosition = function (d) {
            return A[d - 1];
          }),
          (h.getMaskFunction = function (d) {
            switch (d) {
              case i.PATTERN000:
                return function (u, E) {
                  return (u + E) % 2 == 0;
                };
              case i.PATTERN001:
                return function (u, E) {
                  return u % 2 == 0;
                };
              case i.PATTERN010:
                return function (u, E) {
                  return E % 3 == 0;
                };
              case i.PATTERN011:
                return function (u, E) {
                  return (u + E) % 3 == 0;
                };
              case i.PATTERN100:
                return function (u, E) {
                  return (Math.floor(u / 2) + Math.floor(E / 3)) % 2 == 0;
                };
              case i.PATTERN101:
                return function (u, E) {
                  return ((u * E) % 2) + ((u * E) % 3) == 0;
                };
              case i.PATTERN110:
                return function (u, E) {
                  return (((u * E) % 2) + ((u * E) % 3)) % 2 == 0;
                };
              case i.PATTERN111:
                return function (u, E) {
                  return (((u * E) % 3) + ((u + E) % 2)) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + d;
            }
          }),
          (h.getErrorCorrectPolynomial = function (d) {
            for (var u = y([1], 0), E = 0; E < d; E += 1)
              u = u.multiply(y([1, l.gexp(E)], 0));
            return u;
          }),
          (h.getLengthInBits = function (d, u) {
            if (1 <= u && u < 10)
              switch (d) {
                case r.MODE_NUMBER:
                  return 10;
                case r.MODE_ALPHA_NUM:
                  return 9;
                case r.MODE_8BIT_BYTE:
                  return 8;
                case r.MODE_KANJI:
                  return 8;
                default:
                  throw "mode:" + d;
              }
            else if (u < 27)
              switch (d) {
                case r.MODE_NUMBER:
                  return 12;
                case r.MODE_ALPHA_NUM:
                  return 11;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 10;
                default:
                  throw "mode:" + d;
              }
            else if (u < 41)
              switch (d) {
                case r.MODE_NUMBER:
                  return 14;
                case r.MODE_ALPHA_NUM:
                  return 13;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 12;
                default:
                  throw "mode:" + d;
              }
            else throw "type:" + u;
          }),
          (h.getLostPoint = function (d) {
            for (var u = d.getModuleCount(), E = 0, k = 0; k < u; k += 1)
              for (var M = 0; M < u; M += 1) {
                for (var f = 0, p = d.isDark(k, M), O = -1; O <= 1; O += 1)
                  if (!(k + O < 0 || u <= k + O))
                    for (var D = -1; D <= 1; D += 1)
                      M + D < 0 ||
                        u <= M + D ||
                        (O == 0 && D == 0) ||
                        (p == d.isDark(k + O, M + D) && (f += 1));
                f > 5 && (E += 3 + f - 5);
              }
            for (var k = 0; k < u - 1; k += 1)
              for (var M = 0; M < u - 1; M += 1) {
                var R = 0;
                d.isDark(k, M) && (R += 1),
                  d.isDark(k + 1, M) && (R += 1),
                  d.isDark(k, M + 1) && (R += 1),
                  d.isDark(k + 1, M + 1) && (R += 1),
                  (R == 0 || R == 4) && (E += 3);
              }
            for (var k = 0; k < u; k += 1)
              for (var M = 0; M < u - 6; M += 1)
                d.isDark(k, M) &&
                  !d.isDark(k, M + 1) &&
                  d.isDark(k, M + 2) &&
                  d.isDark(k, M + 3) &&
                  d.isDark(k, M + 4) &&
                  !d.isDark(k, M + 5) &&
                  d.isDark(k, M + 6) &&
                  (E += 40);
            for (var M = 0; M < u; M += 1)
              for (var k = 0; k < u - 6; k += 1)
                d.isDark(k, M) &&
                  !d.isDark(k + 1, M) &&
                  d.isDark(k + 2, M) &&
                  d.isDark(k + 3, M) &&
                  d.isDark(k + 4, M) &&
                  !d.isDark(k + 5, M) &&
                  d.isDark(k + 6, M) &&
                  (E += 40);
            for (var Q = 0, M = 0; M < u; M += 1)
              for (var k = 0; k < u; k += 1) d.isDark(k, M) && (Q += 1);
            var ie = Math.abs((100 * Q) / u / u - 50) / 5;
            return (E += ie * 10), E;
          }),
          h
        );
      })(),
      l = (function () {
        for (var A = new Array(256), T = new Array(256), S = 0; S < 8; S += 1)
          A[S] = 1 << S;
        for (var S = 8; S < 256; S += 1)
          A[S] = A[S - 4] ^ A[S - 5] ^ A[S - 6] ^ A[S - 8];
        for (var S = 0; S < 255; S += 1) T[A[S]] = S;
        var C = {};
        return (
          (C.glog = function (h) {
            if (h < 1) throw "glog(" + h + ")";
            return T[h];
          }),
          (C.gexp = function (h) {
            for (; h < 0; ) h += 255;
            for (; h >= 256; ) h -= 255;
            return A[h];
          }),
          C
        );
      })();
    function y(A, T) {
      if (typeof A.length > "u") throw A.length + "/" + T;
      var S = (function () {
          for (var h = 0; h < A.length && A[h] == 0; ) h += 1;
          for (
            var w = new Array(A.length - h + T), d = 0;
            d < A.length - h;
            d += 1
          )
            w[d] = A[d + h];
          return w;
        })(),
        C = {};
      return (
        (C.getAt = function (h) {
          return S[h];
        }),
        (C.getLength = function () {
          return S.length;
        }),
        (C.multiply = function (h) {
          for (
            var w = new Array(C.getLength() + h.getLength() - 1), d = 0;
            d < C.getLength();
            d += 1
          )
            for (var u = 0; u < h.getLength(); u += 1)
              w[d + u] ^= l.gexp(l.glog(C.getAt(d)) + l.glog(h.getAt(u)));
          return y(w, 0);
        }),
        (C.mod = function (h) {
          if (C.getLength() - h.getLength() < 0) return C;
          for (
            var w = l.glog(C.getAt(0)) - l.glog(h.getAt(0)),
              d = new Array(C.getLength()),
              u = 0;
            u < C.getLength();
            u += 1
          )
            d[u] = C.getAt(u);
          for (var u = 0; u < h.getLength(); u += 1)
            d[u] ^= l.gexp(l.glog(h.getAt(u)) + w);
          return y(d, 0).mod(h);
        }),
        C
      );
    }
    var I = (function () {
        var A = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ],
          T = function (h, w) {
            var d = {};
            return (d.totalCount = h), (d.dataCount = w), d;
          },
          S = {},
          C = function (h, w) {
            switch (w) {
              case s.L:
                return A[(h - 1) * 4 + 0];
              case s.M:
                return A[(h - 1) * 4 + 1];
              case s.Q:
                return A[(h - 1) * 4 + 2];
              case s.H:
                return A[(h - 1) * 4 + 3];
              default:
                return;
            }
          };
        return (
          (S.getRSBlocks = function (h, w) {
            var d = C(h, w);
            if (typeof d > "u")
              throw (
                "bad rs block @ typeNumber:" + h + "/errorCorrectionLevel:" + w
              );
            for (var u = d.length / 3, E = [], k = 0; k < u; k += 1)
              for (
                var M = d[k * 3 + 0], f = d[k * 3 + 1], p = d[k * 3 + 2], O = 0;
                O < M;
                O += 1
              )
                E.push(T(f, p));
            return E;
          }),
          S
        );
      })(),
      g = function () {
        var A = [],
          T = 0,
          S = {};
        return (
          (S.getBuffer = function () {
            return A;
          }),
          (S.getAt = function (C) {
            var h = Math.floor(C / 8);
            return ((A[h] >>> (7 - (C % 8))) & 1) == 1;
          }),
          (S.put = function (C, h) {
            for (var w = 0; w < h; w += 1)
              S.putBit(((C >>> (h - w - 1)) & 1) == 1);
          }),
          (S.getLengthInBits = function () {
            return T;
          }),
          (S.putBit = function (C) {
            var h = Math.floor(T / 8);
            A.length <= h && A.push(0), C && (A[h] |= 128 >>> T % 8), (T += 1);
          }),
          S
        );
      },
      x = function (A) {
        var T = r.MODE_NUMBER,
          S = A,
          C = {};
        (C.getMode = function () {
          return T;
        }),
          (C.getLength = function (d) {
            return S.length;
          }),
          (C.write = function (d) {
            for (var u = S, E = 0; E + 2 < u.length; )
              d.put(h(u.substring(E, E + 3)), 10), (E += 3);
            E < u.length &&
              (u.length - E == 1
                ? d.put(h(u.substring(E, E + 1)), 4)
                : u.length - E == 2 && d.put(h(u.substring(E, E + 2)), 7));
          });
        var h = function (d) {
            for (var u = 0, E = 0; E < d.length; E += 1)
              u = u * 10 + w(d.charAt(E));
            return u;
          },
          w = function (d) {
            if ("0" <= d && d <= "9")
              return d.charCodeAt(0) - "0".charCodeAt(0);
            throw "illegal char :" + d;
          };
        return C;
      },
      j = function (A) {
        var T = r.MODE_ALPHA_NUM,
          S = A,
          C = {};
        (C.getMode = function () {
          return T;
        }),
          (C.getLength = function (w) {
            return S.length;
          }),
          (C.write = function (w) {
            for (var d = S, u = 0; u + 1 < d.length; )
              w.put(h(d.charAt(u)) * 45 + h(d.charAt(u + 1)), 11), (u += 2);
            u < d.length && w.put(h(d.charAt(u)), 6);
          });
        var h = function (w) {
          if ("0" <= w && w <= "9") return w.charCodeAt(0) - "0".charCodeAt(0);
          if ("A" <= w && w <= "Z")
            return w.charCodeAt(0) - "A".charCodeAt(0) + 10;
          switch (w) {
            case " ":
              return 36;
            case "$":
              return 37;
            case "%":
              return 38;
            case "*":
              return 39;
            case "+":
              return 40;
            case "-":
              return 41;
            case ".":
              return 42;
            case "/":
              return 43;
            case ":":
              return 44;
            default:
              throw "illegal char :" + w;
          }
        };
        return C;
      },
      U = function (A) {
        var T = r.MODE_8BIT_BYTE,
          S = o.stringToBytes(A),
          C = {};
        return (
          (C.getMode = function () {
            return T;
          }),
          (C.getLength = function (h) {
            return S.length;
          }),
          (C.write = function (h) {
            for (var w = 0; w < S.length; w += 1) h.put(S[w], 8);
          }),
          C
        );
      },
      Y = function (A) {
        var T = r.MODE_KANJI,
          S = o.stringToBytesFuncs.SJIS;
        if (!S) throw "sjis not supported.";
        (function (w, d) {
          var u = S(w);
          if (u.length != 2 || ((u[0] << 8) | u[1]) != d)
            throw "sjis not supported.";
        })("友", 38726);
        var C = S(A),
          h = {};
        return (
          (h.getMode = function () {
            return T;
          }),
          (h.getLength = function (w) {
            return ~~(C.length / 2);
          }),
          (h.write = function (w) {
            for (var d = C, u = 0; u + 1 < d.length; ) {
              var E = ((255 & d[u]) << 8) | (255 & d[u + 1]);
              if (33088 <= E && E <= 40956) E -= 33088;
              else if (57408 <= E && E <= 60351) E -= 49472;
              else throw "illegal char at " + (u + 1) + "/" + E;
              (E = ((E >>> 8) & 255) * 192 + (E & 255)), w.put(E, 13), (u += 2);
            }
            if (u < d.length) throw "illegal char at " + (u + 1);
          }),
          h
        );
      },
      H = function () {
        var A = [],
          T = {};
        return (
          (T.writeByte = function (S) {
            A.push(S & 255);
          }),
          (T.writeShort = function (S) {
            T.writeByte(S), T.writeByte(S >>> 8);
          }),
          (T.writeBytes = function (S, C, h) {
            (C = C || 0), (h = h || S.length);
            for (var w = 0; w < h; w += 1) T.writeByte(S[w + C]);
          }),
          (T.writeString = function (S) {
            for (var C = 0; C < S.length; C += 1) T.writeByte(S.charCodeAt(C));
          }),
          (T.toByteArray = function () {
            return A;
          }),
          (T.toString = function () {
            var S = "";
            S += "[";
            for (var C = 0; C < A.length; C += 1)
              C > 0 && (S += ","), (S += A[C]);
            return (S += "]"), S;
          }),
          T
        );
      },
      X = function () {
        var A = 0,
          T = 0,
          S = 0,
          C = "",
          h = {},
          w = function (u) {
            C += String.fromCharCode(d(u & 63));
          },
          d = function (u) {
            if (!(u < 0)) {
              if (u < 26) return 65 + u;
              if (u < 52) return 97 + (u - 26);
              if (u < 62) return 48 + (u - 52);
              if (u == 62) return 43;
              if (u == 63) return 47;
            }
            throw "n:" + u;
          };
        return (
          (h.writeByte = function (u) {
            for (A = (A << 8) | (u & 255), T += 8, S += 1; T >= 6; )
              w(A >>> (T - 6)), (T -= 6);
          }),
          (h.flush = function () {
            if ((T > 0 && (w(A << (6 - T)), (A = 0), (T = 0)), S % 3 != 0))
              for (var u = 3 - (S % 3), E = 0; E < u; E += 1) C += "=";
          }),
          (h.toString = function () {
            return C;
          }),
          h
        );
      },
      N = function (A) {
        var T = A,
          S = 0,
          C = 0,
          h = 0,
          w = {};
        w.read = function () {
          for (; h < 8; ) {
            if (S >= T.length) {
              if (h == 0) return -1;
              throw "unexpected end of file./" + h;
            }
            var u = T.charAt(S);
            if (((S += 1), u == "=")) return (h = 0), -1;
            u.match(/^\s$/) || ((C = (C << 6) | d(u.charCodeAt(0))), (h += 6));
          }
          var E = (C >>> (h - 8)) & 255;
          return (h -= 8), E;
        };
        var d = function (u) {
          if (65 <= u && u <= 90) return u - 65;
          if (97 <= u && u <= 122) return u - 97 + 26;
          if (48 <= u && u <= 57) return u - 48 + 52;
          if (u == 43) return 62;
          if (u == 47) return 63;
          throw "c:" + u;
        };
        return w;
      },
      oe = function (A, T) {
        var S = A,
          C = T,
          h = new Array(A * T),
          w = {};
        (w.setPixel = function (k, M, f) {
          h[M * S + k] = f;
        }),
          (w.write = function (k) {
            k.writeString("GIF87a"),
              k.writeShort(S),
              k.writeShort(C),
              k.writeByte(128),
              k.writeByte(0),
              k.writeByte(0),
              k.writeByte(0),
              k.writeByte(0),
              k.writeByte(0),
              k.writeByte(255),
              k.writeByte(255),
              k.writeByte(255),
              k.writeString(","),
              k.writeShort(0),
              k.writeShort(0),
              k.writeShort(S),
              k.writeShort(C),
              k.writeByte(0);
            var M = 2,
              f = u(M);
            k.writeByte(M);
            for (var p = 0; f.length - p > 255; )
              k.writeByte(255), k.writeBytes(f, p, 255), (p += 255);
            k.writeByte(f.length - p),
              k.writeBytes(f, p, f.length - p),
              k.writeByte(0),
              k.writeString(";");
          });
        var d = function (k) {
            var M = k,
              f = 0,
              p = 0,
              O = {};
            return (
              (O.write = function (D, R) {
                if (D >>> R) throw "length over";
                for (; f + R >= 8; )
                  M.writeByte(255 & ((D << f) | p)),
                    (R -= 8 - f),
                    (D >>>= 8 - f),
                    (p = 0),
                    (f = 0);
                (p = (D << f) | p), (f = f + R);
              }),
              (O.flush = function () {
                f > 0 && M.writeByte(p);
              }),
              O
            );
          },
          u = function (k) {
            for (
              var M = 1 << k, f = (1 << k) + 1, p = k + 1, O = E(), D = 0;
              D < M;
              D += 1
            )
              O.add(String.fromCharCode(D));
            O.add(String.fromCharCode(M)), O.add(String.fromCharCode(f));
            var R = H(),
              Q = d(R);
            Q.write(M, p);
            var ie = 0,
              ae = String.fromCharCode(h[ie]);
            for (ie += 1; ie < h.length; ) {
              var ye = String.fromCharCode(h[ie]);
              (ie += 1),
                O.contains(ae + ye)
                  ? (ae = ae + ye)
                  : (Q.write(O.indexOf(ae), p),
                    O.size() < 4095 &&
                      (O.size() == 1 << p && (p += 1), O.add(ae + ye)),
                    (ae = ye));
            }
            return (
              Q.write(O.indexOf(ae), p),
              Q.write(f, p),
              Q.flush(),
              R.toByteArray()
            );
          },
          E = function () {
            var k = {},
              M = 0,
              f = {};
            return (
              (f.add = function (p) {
                if (f.contains(p)) throw "dup key:" + p;
                (k[p] = M), (M += 1);
              }),
              (f.size = function () {
                return M;
              }),
              (f.indexOf = function (p) {
                return k[p];
              }),
              (f.contains = function (p) {
                return typeof k[p] < "u";
              }),
              f
            );
          };
        return w;
      },
      z = function (A, T, S) {
        for (var C = oe(A, T), h = 0; h < T; h += 1)
          for (var w = 0; w < A; w += 1) C.setPixel(w, h, S(w, h));
        var d = H();
        C.write(d);
        for (var u = X(), E = d.toByteArray(), k = 0; k < E.length; k += 1)
          u.writeByte(E[k]);
        return u.flush(), "data:image/gif;base64," + u;
      };
    return o;
  })();
  (function () {
    n.stringToBytesFuncs["UTF-8"] = function (o) {
      function r(s) {
        for (var i = [], c = 0; c < s.length; c++) {
          var l = s.charCodeAt(c);
          l < 128
            ? i.push(l)
            : l < 2048
            ? i.push(192 | (l >> 6), 128 | (l & 63))
            : l < 55296 || l >= 57344
            ? i.push(224 | (l >> 12), 128 | ((l >> 6) & 63), 128 | (l & 63))
            : (c++,
              (l = 65536 + (((l & 1023) << 10) | (s.charCodeAt(c) & 1023))),
              i.push(
                240 | (l >> 18),
                128 | ((l >> 12) & 63),
                128 | ((l >> 6) & 63),
                128 | (l & 63)
              ));
        }
        return i;
      }
      return r(o);
    };
  })(),
    (function (o) {
      t.exports = o();
    })(function () {
      return n;
    });
})(Jo);
var rl = Jo.exports;
const sl = ol(rl);
class Rn {
  constructor(e) {
    me(this, "_options"),
      me(this, "_container"),
      me(this, "_canvas"),
      me(this, "_qr"),
      me(this, "_drawingPromise"),
      (this._options = e ? io(Wt(so, e)) : so),
      this.update();
  }
  static _clearContainer(e) {
    e && (e.innerHTML = "");
  }
  update(e) {
    Rn._clearContainer(this._container),
      (this._options = e ? io(Wt(this._options, e)) : this._options),
      this._options.data &&
        ((this._qr = sl(
          this._options.qrOptions.typeNumber,
          this._options.qrOptions.errorCorrectionLevel
        )),
        this._qr.addData(
          this._options.data,
          this._options.qrOptions.mode || Ga(this._options.data)
        ),
        this._qr.make(),
        (this._canvas = new tl(this._options)),
        (this._drawingPromise = this._canvas.drawQR(this._qr)),
        this.append(this._container));
  }
  append(e) {
    if (e) {
      if (typeof e.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && e.appendChild(this._canvas.getCanvas()),
        (this._container = e);
    }
  }
  async getImageUrl(e) {
    return this._drawingPromise &&
      (await this._drawingPromise) === void 0 &&
      this._canvas
      ? this._canvas.getCanvas().toDataURL(`image/${e}`)
      : "";
  }
  download(e) {
    this._drawingPromise &&
      this._drawingPromise.then(() => {
        if (!this._canvas) return;
        const n = e,
          o = n.extension || "png",
          r = n.name || "qr",
          s = this._canvas.getCanvas().toDataURL(`image/${o}`);
        Ka(s, `${r}.${o}`);
      });
  }
}
const il = ["src"],
  al = { key: 1 },
  ll = jo({
    __name: "QRCodeVue3Async",
    props: {
      value: { default: "" },
      width: { default: 300 },
      height: { default: 300 },
      margin: { default: 0 },
      imgclass: { default: "" },
      myclass: { default: "" },
      downloadButton: { default: "" },
      ButtonName: { default: "Download" },
      qrOptions: {
        default: { typeNumber: 0, mode: "Byte", errorCorrectionLevel: "Q" },
      },
      imageOptions: {
        default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 },
      },
      dotsOptions: {
        default: {
          type: "dots",
          color: "#6a1a4c",
          gradient: {
            type: "linear",
            rotation: 0,
            colorStops: [
              { offset: 0, color: "#6a1a4c" },
              { offset: 1, color: "#6a1a4c" },
            ],
          },
        },
      },
      backgroundOptions: { default: { color: "#ffffff" } },
      cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
      cornersDotOptions: { default: { type: void 0, color: "#000000" } },
      fileExt: { default: "png" },
      image: { default: "" },
      download: { type: Boolean, default: !1 },
      downloadOptions: { default: { name: "vqr", extension: "png" } },
    },
    async setup(t) {
      let e, n;
      const o = t,
        r = new Rn({
          data: o.value,
          width: o.width,
          height: o.height,
          margin: o.margin,
          qrOptions: o.qrOptions,
          imageOptions: o.imageOptions,
          dotsOptions: o.dotsOptions,
          backgroundOptions: o.backgroundOptions,
          image: o.image,
          cornersSquareOptions: o.cornersSquareOptions,
          cornersDotOptions: o.cornersDotOptions,
        });
      let s =
        (([e, n] = Aa(() => r.getImageUrl(o.fileExt))), (e = await e), n(), e);
      function i() {
        r.download(o.downloadOptions);
      }
      return (c, l) => (
        at(),
        Xt("div", null, [
          Dt(s)
            ? (at(),
              Xt(
                "div",
                { key: 0, class: nt(c.myclass) },
                [
                  $t(
                    "img",
                    {
                      src: Dt(s),
                      class: nt(c.imgclass),
                      crossorigin: "anonymous",
                    },
                    null,
                    10,
                    il
                  ),
                ],
                2
              ))
            : to("", !0),
          Dt(s) && c.download
            ? (at(),
              Xt("div", al, [
                $t(
                  "button",
                  { onClick: i, class: nt(c.downloadButton) },
                  mi(c.ButtonName),
                  3
                ),
              ]))
            : to("", !0),
        ])
      );
    },
  }),
  cl = jo({
    __name: "QRCodeVue3",
    props: {
      value: { default: "" },
      width: { default: 300 },
      height: { default: 300 },
      margin: { default: 0 },
      imgclass: { default: "" },
      myclass: { default: "" },
      downloadButton: { default: "" },
      ButtonName: { default: "Download" },
      qrOptions: {
        default: { typeNumber: 0, mode: "Byte", errorCorrectionLevel: "Q" },
      },
      imageOptions: {
        default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 },
      },
      dotsOptions: {
        default: {
          type: "dots",
          color: "#6a1a4c",
          gradient: {
            type: "linear",
            rotation: 0,
            colorStops: [
              { offset: 0, color: "#6a1a4c" },
              { offset: 1, color: "#6a1a4c" },
            ],
          },
        },
      },
      backgroundOptions: { default: { color: "#ffffff" } },
      cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
      cornersDotOptions: { default: { type: void 0, color: "#000000" } },
      fileExt: { default: "png" },
      image: { default: "" },
      download: { type: Boolean, default: !1 },
      downloadOptions: { default: { name: "vqr", extension: "png" } },
    },
    setup(t) {
      const e = t;
      return (n, o) => (
        at(),
        Ho(sa, null, {
          default: ta(() => [
            Ne(
              ll,
              {
                "background-options": e.backgroundOptions,
                "button-name": e.ButtonName,
                "corners-dot-options": e.cornersDotOptions,
                "corners-square-options": e.cornersSquareOptions,
                "dots-options": e.dotsOptions,
                download: e.download,
                "download-button": e.downloadButton,
                "download-options": e.downloadOptions,
                "file-ext": e.fileExt,
                height: e.height,
                image: e.image,
                "image-options": e.imageOptions,
                imgclass: e.imgclass,
                margin: e.margin,
                value: e.value,
                myclass: e.myclass,
                "qr-options": e.qrOptions,
                width: e.width,
              },
              null,
              8,
              [
                "background-options",
                "button-name",
                "corners-dot-options",
                "corners-square-options",
                "dots-options",
                "download",
                "download-button",
                "download-options",
                "file-ext",
                "height",
                "image",
                "image-options",
                "imgclass",
                "margin",
                "value",
                "myclass",
                "qr-options",
                "width",
              ]
            ),
          ]),
          _: 1,
        })
      );
    },
  });
var Xe = {};
const ul = "@vue-stripe/vue-stripe",
  dl = "4.5.0",
  pl = "Stripe Checkout & Elements for Vue.js",
  hl = "jofftiquez@gmail.com",
  fl = {
    build: "rollup -c",
    lint: "vue-cli-service lint --fix",
    prebuild: "rimraf dist",
    test: "jest",
  },
  ml = "dist/index.js",
  gl = "dist",
  yl = { "@stripe/stripe-js": "^1.13.2", "vue-coerce-props": "^1.0.0" },
  vl = {
    "@babel/cli": "^7.7.5",
    "@babel/core": "^7.7.5",
    "@babel/plugin-proposal-export-default-from": "^7.7.4",
    "@babel/plugin-proposal-optional-chaining": "^7.10.4",
    "@babel/plugin-transform-runtime": "^7.7.5",
    "@babel/preset-env": "^7.7.5",
    "@babel/preset-es2015": "^7.0.0-beta.53",
    "@babel/runtime": "^7.7.5",
    "@rollup/plugin-node-resolve": "^6.0.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "^4.5.10",
    "@vue/eslint-config-standard": "^5.1.2",
    "babel-eslint": "^10.1.0",
    "babel-minify": "^0.5.1",
    "cross-env": "^6.0.3",
    eslint: "^6.8.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^6.2.2",
    jest: "^24.9.0",
    "lint-staged": "^9.5.0",
    rimraf: "^3.0.0",
    rollup: "^1.27.9",
    "rollup-plugin-babel": "^4.3.3",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-postcss": "^2.0.3",
    "rollup-plugin-terser": "^5.1.3",
    "rollup-plugin-uglify": "^6.0.3",
    "rollup-plugin-vue": "^5.1.4",
    "vue-template-compiler": "^2.6.11",
  },
  bl = { url: "https://github.com/vue-stripe/vue-stripe/issues" },
  wl = { "pre-commit": "lint-staged" },
  _l = "https://github.com/vue-stripe/vue-stripe#readme",
  xl = ["vue", "vuejs", "stripe", "checkout", "payment"],
  Sl = "MIT",
  Cl = { type: "git", url: "git@github.com:vue-stripe/vue-stripe.git" },
  kl = "typings/index.d.ts",
  El = {
    name: ul,
    version: dl,
    description: pl,
    author: hl,
    scripts: fl,
    main: ml,
    module: gl,
    dependencies: yl,
    devDependencies: vl,
    bugs: bl,
    gitHooks: wl,
    homepage: _l,
    keywords: xl,
    license: Sl,
    "lint-staged": { "*.{js,jsx,vue}": ["vue-cli-service lint", "git add"] },
    repository: Cl,
    typings: kl,
  };
var Zo;
Object.defineProperty(Xe, "__esModule", { value: !0 });
var rn = "auto",
  Ml = [
    "auto",
    "bg",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "en-GB",
    "es",
    "es-419",
    "et",
    "fi",
    "fr",
    "fr-CA",
    "hu",
    "id",
    "it",
    "ja",
    "lt",
    "lv",
    "ms",
    "mt",
    "nb",
    "nl",
    "pl",
    "pt",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "zh",
    "zh-HK",
    "zh-TW",
  ],
  Al = ["auto", "book", "donate", "pay"],
  Pl = ["required", "auto"],
  Ol = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: { color: "#fa755a", iconColor: "#fa755a" },
  },
  Il = El.version,
  kt = {
    name: "vue-stripe",
    version: Il,
    url: "https://vuestripe.com",
    partner_id: "pp_partner_IqtOXpBSuz0IE2",
  },
  Tl = {
    install: function (t, e) {
      var n = e.pk,
        o = e.stripeAccount,
        r = e.apiVersion,
        s = e.locale,
        i = window.Stripe(n, { stripeAccount: o, apiVersion: r, locale: s });
      i.registerAppInfo(kt), (t.prototype.$stripe = i);
    },
  };
function Rl(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
var Fl = Rl(function (t) {
    var e = (function (n) {
      var o,
        r = Object.prototype,
        s = r.hasOwnProperty,
        i = typeof Symbol == "function" ? Symbol : {},
        c = i.iterator || "@@iterator",
        l = i.asyncIterator || "@@asyncIterator",
        y = i.toStringTag || "@@toStringTag";
      function I(f, p, O, D) {
        var R = p && p.prototype instanceof X ? p : X,
          Q = Object.create(R.prototype),
          ie = new E(D || []);
        return (
          (Q._invoke = (function (ae, ye, J) {
            var re = x;
            return function (Ie, b) {
              if (re === U) throw new Error("Generator is already running");
              if (re === Y) {
                if (Ie === "throw") throw b;
                return M();
              }
              for (J.method = Ie, J.arg = b; ; ) {
                var _ = J.delegate;
                if (_) {
                  var m = w(_, J);
                  if (m) {
                    if (m === H) continue;
                    return m;
                  }
                }
                if (J.method === "next") J.sent = J._sent = J.arg;
                else if (J.method === "throw") {
                  if (re === x) throw ((re = Y), J.arg);
                  J.dispatchException(J.arg);
                } else J.method === "return" && J.abrupt("return", J.arg);
                re = U;
                var v = g(ae, ye, J);
                if (v.type === "normal") {
                  if (((re = J.done ? Y : j), v.arg === H)) continue;
                  return { value: v.arg, done: J.done };
                }
                v.type === "throw" &&
                  ((re = Y), (J.method = "throw"), (J.arg = v.arg));
              }
            };
          })(f, O, ie)),
          Q
        );
      }
      function g(f, p, O) {
        try {
          return { type: "normal", arg: f.call(p, O) };
        } catch (D) {
          return { type: "throw", arg: D };
        }
      }
      n.wrap = I;
      var x = "suspendedStart",
        j = "suspendedYield",
        U = "executing",
        Y = "completed",
        H = {};
      function X() {}
      function N() {}
      function oe() {}
      var z = {};
      z[c] = function () {
        return this;
      };
      var A = Object.getPrototypeOf,
        T = A && A(A(k([])));
      T && T !== r && s.call(T, c) && (z = T);
      var S = (oe.prototype = X.prototype = Object.create(z));
      function C(f) {
        ["next", "throw", "return"].forEach(function (p) {
          f[p] = function (O) {
            return this._invoke(p, O);
          };
        });
      }
      function h(f) {
        var p;
        this._invoke = function (O, D) {
          function R() {
            return new Promise(function (Q, ie) {
              (function ae(ye, J, re, Ie) {
                var b = g(f[ye], f, J);
                if (b.type !== "throw") {
                  var _ = b.arg,
                    m = _.value;
                  return m && typeof m == "object" && s.call(m, "__await")
                    ? Promise.resolve(m.__await).then(
                        function (v) {
                          ae("next", v, re, Ie);
                        },
                        function (v) {
                          ae("throw", v, re, Ie);
                        }
                      )
                    : Promise.resolve(m).then(
                        function (v) {
                          (_.value = v), re(_);
                        },
                        function (v) {
                          return ae("throw", v, re, Ie);
                        }
                      );
                }
                Ie(b.arg);
              })(O, D, Q, ie);
            });
          }
          return (p = p ? p.then(R, R) : R());
        };
      }
      function w(f, p) {
        var O = f.iterator[p.method];
        if (O === o) {
          if (((p.delegate = null), p.method === "throw")) {
            if (
              f.iterator.return &&
              ((p.method = "return"),
              (p.arg = o),
              w(f, p),
              p.method === "throw")
            )
              return H;
            (p.method = "throw"),
              (p.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return H;
        }
        var D = g(O, f.iterator, p.arg);
        if (D.type === "throw")
          return (p.method = "throw"), (p.arg = D.arg), (p.delegate = null), H;
        var R = D.arg;
        return R
          ? R.done
            ? ((p[f.resultName] = R.value),
              (p.next = f.nextLoc),
              p.method !== "return" && ((p.method = "next"), (p.arg = o)),
              (p.delegate = null),
              H)
            : R
          : ((p.method = "throw"),
            (p.arg = new TypeError("iterator result is not an object")),
            (p.delegate = null),
            H);
      }
      function d(f) {
        var p = { tryLoc: f[0] };
        1 in f && (p.catchLoc = f[1]),
          2 in f && ((p.finallyLoc = f[2]), (p.afterLoc = f[3])),
          this.tryEntries.push(p);
      }
      function u(f) {
        var p = f.completion || {};
        (p.type = "normal"), delete p.arg, (f.completion = p);
      }
      function E(f) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          f.forEach(d, this),
          this.reset(!0);
      }
      function k(f) {
        if (f) {
          var p = f[c];
          if (p) return p.call(f);
          if (typeof f.next == "function") return f;
          if (!isNaN(f.length)) {
            var O = -1,
              D = function R() {
                for (; ++O < f.length; )
                  if (s.call(f, O)) return (R.value = f[O]), (R.done = !1), R;
                return (R.value = o), (R.done = !0), R;
              };
            return (D.next = D);
          }
        }
        return { next: M };
      }
      function M() {
        return { value: o, done: !0 };
      }
      return (
        (N.prototype = S.constructor = oe),
        (oe.constructor = N),
        (oe[y] = N.displayName = "GeneratorFunction"),
        (n.isGeneratorFunction = function (f) {
          var p = typeof f == "function" && f.constructor;
          return (
            !!p &&
            (p === N || (p.displayName || p.name) === "GeneratorFunction")
          );
        }),
        (n.mark = function (f) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(f, oe)
              : ((f.__proto__ = oe), y in f || (f[y] = "GeneratorFunction")),
            (f.prototype = Object.create(S)),
            f
          );
        }),
        (n.awrap = function (f) {
          return { __await: f };
        }),
        C(h.prototype),
        (h.prototype[l] = function () {
          return this;
        }),
        (n.AsyncIterator = h),
        (n.async = function (f, p, O, D) {
          var R = new h(I(f, p, O, D));
          return n.isGeneratorFunction(p)
            ? R
            : R.next().then(function (Q) {
                return Q.done ? Q.value : R.next();
              });
        }),
        C(S),
        (S[y] = "Generator"),
        (S[c] = function () {
          return this;
        }),
        (S.toString = function () {
          return "[object Generator]";
        }),
        (n.keys = function (f) {
          var p = [];
          for (var O in f) p.push(O);
          return (
            p.reverse(),
            function D() {
              for (; p.length; ) {
                var R = p.pop();
                if (R in f) return (D.value = R), (D.done = !1), D;
              }
              return (D.done = !0), D;
            }
          );
        }),
        (n.values = k),
        (E.prototype = {
          constructor: E,
          reset: function (f) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = o),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = o),
              this.tryEntries.forEach(u),
              !f)
            )
              for (var p in this)
                p.charAt(0) === "t" &&
                  s.call(this, p) &&
                  !isNaN(+p.slice(1)) &&
                  (this[p] = o);
          },
          stop: function () {
            this.done = !0;
            var f = this.tryEntries[0].completion;
            if (f.type === "throw") throw f.arg;
            return this.rval;
          },
          dispatchException: function (f) {
            if (this.done) throw f;
            var p = this;
            function O(ye, J) {
              return (
                (Q.type = "throw"),
                (Q.arg = f),
                (p.next = ye),
                J && ((p.method = "next"), (p.arg = o)),
                !!J
              );
            }
            for (var D = this.tryEntries.length - 1; D >= 0; --D) {
              var R = this.tryEntries[D],
                Q = R.completion;
              if (R.tryLoc === "root") return O("end");
              if (R.tryLoc <= this.prev) {
                var ie = s.call(R, "catchLoc"),
                  ae = s.call(R, "finallyLoc");
                if (ie && ae) {
                  if (this.prev < R.catchLoc) return O(R.catchLoc, !0);
                  if (this.prev < R.finallyLoc) return O(R.finallyLoc);
                } else if (ie) {
                  if (this.prev < R.catchLoc) return O(R.catchLoc, !0);
                } else {
                  if (!ae)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < R.finallyLoc) return O(R.finallyLoc);
                }
              }
            }
          },
          abrupt: function (f, p) {
            for (var O = this.tryEntries.length - 1; O >= 0; --O) {
              var D = this.tryEntries[O];
              if (
                D.tryLoc <= this.prev &&
                s.call(D, "finallyLoc") &&
                this.prev < D.finallyLoc
              ) {
                var R = D;
                break;
              }
            }
            R &&
              (f === "break" || f === "continue") &&
              R.tryLoc <= p &&
              p <= R.finallyLoc &&
              (R = null);
            var Q = R ? R.completion : {};
            return (
              (Q.type = f),
              (Q.arg = p),
              R
                ? ((this.method = "next"), (this.next = R.finallyLoc), H)
                : this.complete(Q)
            );
          },
          complete: function (f, p) {
            if (f.type === "throw") throw f.arg;
            return (
              f.type === "break" || f.type === "continue"
                ? (this.next = f.arg)
                : f.type === "return"
                ? ((this.rval = this.arg = f.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : f.type === "normal" && p && (this.next = p),
              H
            );
          },
          finish: function (f) {
            for (var p = this.tryEntries.length - 1; p >= 0; --p) {
              var O = this.tryEntries[p];
              if (O.finallyLoc === f)
                return this.complete(O.completion, O.afterLoc), u(O), H;
            }
          },
          catch: function (f) {
            for (var p = this.tryEntries.length - 1; p >= 0; --p) {
              var O = this.tryEntries[p];
              if (O.tryLoc === f) {
                var D = O.completion;
                if (D.type === "throw") {
                  var R = D.arg;
                  u(O);
                }
                return R;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (f, p, O) {
            return (
              (this.delegate = { iterator: k(f), resultName: p, nextLoc: O }),
              this.method === "next" && (this.arg = o),
              H
            );
          },
        }),
        n
      );
    })(t.exports);
    try {
      regeneratorRuntime = e;
    } catch {
      Function("r", "regeneratorRuntime = r")(e);
    }
  }),
  Ee = Fl;
function Xo(t) {
  return (Xo =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(t);
}
var er,
  tr = "https://js.stripe.com/v3",
  Dl = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  ao =
    "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  Bl = function () {
    for (
      var t = document.querySelectorAll('script[src^="'.concat(tr, '"]')),
        e = 0;
      e < t.length;
      e++
    ) {
      var n = t[e];
      if (Dl.test(n.src)) return n;
    }
    return null;
  },
  Ll = function (t) {
    var e = t && !t.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
      n = document.createElement("script");
    n.src = "".concat(tr).concat(e);
    var o = document.head || document.body;
    if (!o)
      throw new Error(
        "Expected document.body not to be null. Stripe.js requires a <body> element."
      );
    return o.appendChild(n), n;
  },
  jl = function (t, e) {
    t &&
      t._registerWrapper &&
      t._registerWrapper({
        name: "stripe-js",
        version: "1.13.2",
        startTime: e,
      });
  },
  sn = null,
  zl = function (t) {
    return sn !== null
      ? sn
      : (sn = new Promise(function (e, n) {
          if (typeof window < "u")
            if ((window.Stripe && t && console.warn(ao), window.Stripe))
              e(window.Stripe);
            else
              try {
                var o = Bl();
                o && t ? console.warn(ao) : o || (o = Ll(t)),
                  o.addEventListener("load", function () {
                    window.Stripe
                      ? e(window.Stripe)
                      : n(new Error("Stripe.js not available"));
                  }),
                  o.addEventListener("error", function () {
                    n(new Error("Failed to load Stripe.js"));
                  });
              } catch (r) {
                return void n(r);
              }
          else e(null);
        }));
  },
  ql = function (t, e, n) {
    if (t === null) return null;
    var o = t.apply(void 0, e);
    return jl(o, n), o;
  },
  Nl = function (t) {
    var e = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(
      JSON.stringify(t),
      `
`
    );
    if (t === null || Xo(t) !== "object") throw new Error(e);
    if (
      Object.keys(t).length === 1 &&
      typeof t.advancedFraudSignals == "boolean"
    )
      return t;
    throw new Error(e);
  },
  nr = !1,
  Ge = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    nr = !0;
    var o = Date.now();
    return zl(er).then(function (r) {
      return ql(r, e, o);
    });
  };
Ge.setLoadParameters = function (t) {
  if (nr)
    throw new Error(
      "You cannot change load parameters after calling loadStripe"
    );
  er = Nl(t);
};
/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */ var $l = {
    beforeCreate: function () {
      var t = this.$options.props;
      t &&
        (this._$coertions = Object.keys(t)
          .filter(function (e) {
            return t[e].coerce;
          })
          .map(function (e) {
            return [e, t[e].coerce];
          }));
    },
    computed: {
      $coerced: function () {
        var t = this;
        return this._$coertions.reduce(function (e, n) {
          var o = n[0],
            r = n[1];
          return (e[o] = r.call(t, t.$props[o])), e;
        }, {});
      },
    },
  },
  Ul = {
    pk: { type: String, required: !0 },
    mode: {
      type: String,
      validator: function (t) {
        return ["payment", "subscription"].includes(t);
      },
    },
    lineItems: { type: Array, default: void 0 },
    items: { type: Array },
    successUrl: { type: String, default: window.location.href },
    cancelUrl: { type: String, default: window.location.href },
    submitType: {
      type: String,
      validator: function (t) {
        return Al.includes(t);
      },
    },
    billingAddressCollection: {
      type: String,
      default: "auto",
      validator: function (t) {
        return Pl.includes(t);
      },
    },
    clientReferenceId: { type: String },
    customerEmail: { type: String },
    sessionId: { type: String },
    stripeAccount: { type: String, default: void 0 },
    apiVersion: { type: String, default: void 0 },
    locale: {
      type: String,
      default: rn,
      coerce: function (t) {
        return Ml.includes(t)
          ? t
          : (console.warn(
              "VueStripe Warning: '"
                .concat(
                  t,
                  "' is not supported by Stripe yet. Falling back to default '"
                )
                .concat(rn, "'.")
            ),
            rn);
      },
    },
    shippingAddressCollection: {
      type: Object,
      validator: function (t) {
        return Object.prototype.hasOwnProperty.call(t, "allowedCountries");
      },
    },
    disableAdvancedFraudDetection: { type: Boolean },
    stripeOptions: { type: Object, default: null },
  },
  Vl = {
    props: Ul,
    mixins: [$l],
    render: function (t) {
      return t;
    },
    methods: {
      redirectToCheckout: function () {
        var t, e, n;
        return Ee.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (o.prev = 0),
                    this.$emit("loading", !0),
                    this.disableAdvancedFraudDetection &&
                      Ge.setLoadParameters({ advancedFraudSignals: !1 }),
                    (t = {
                      stripeAccount: this.stripeAccount,
                      apiVersion: this.apiVersion,
                      locale: this.locale,
                    }),
                    (o.next = 6),
                    Ee.awrap(Ge(this.pk, t))
                  );
                case 6:
                  if (((e = o.sent).registerAppInfo(kt), !this.sessionId)) {
                    o.next = 11;
                    break;
                  }
                  return (
                    e.redirectToCheckout({ sessionId: this.sessionId }),
                    o.abrupt("return")
                  );
                case 11:
                  if (!this.lineItems || !this.lineItems.length || this.mode) {
                    o.next = 14;
                    break;
                  }
                  return (
                    console.error(
                      "Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"
                    ),
                    o.abrupt("return")
                  );
                case 14:
                  return (
                    (n = {
                      billingAddressCollection: this.billingAddressCollection,
                      cancelUrl: this.cancelUrl,
                      clientReferenceId: this.clientReferenceId,
                      customerEmail: this.customerEmail,
                      items: this.items,
                      lineItems: this.lineItems,
                      locale: this.$coerced.locale,
                      mode: this.mode,
                      shippingAddressCollection: this.shippingAddressCollection,
                      submitType: this.submitType,
                      successUrl: this.successUrl,
                    }),
                    o.abrupt("return", e.redirectToCheckout(n))
                  );
                case 18:
                  (o.prev = 18),
                    (o.t0 = o.catch(0)),
                    console.error(o.t0),
                    this.$emit("error", o.t0);
                case 22:
                case "end":
                  return o.stop();
              }
          },
          null,
          this,
          [[0, 18]]
        );
      },
    },
  };
function Wl(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
var Hl = Wl;
function lo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function Ql(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? lo(Object(n), !0).forEach(function (o) {
          Hl(t, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : lo(Object(n)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return t;
}
var Gl = "card",
  Kl = {
    props: {
      pk: { type: String, required: !0 },
      testMode: { type: Boolean, default: !1 },
      stripeAccount: { type: String, default: void 0 },
      apiVersion: { type: String, default: void 0 },
      locale: { type: String, default: "auto" },
      elementsOptions: {
        type: Object,
        default: function () {
          return {};
        },
      },
      tokenData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      disableAdvancedFraudDetection: { type: Boolean },
      classes: {
        type: Object,
        default: function () {
          return {};
        },
      },
      elementStyle: {
        type: Object,
        default: function () {
          return Ol;
        },
      },
      value: { type: String, default: void 0 },
      hidePostalCode: Boolean,
      iconStyle: {
        type: String,
        default: "default",
        validator: function (t) {
          return ["solid", "default"].includes(t);
        },
      },
      hideIcon: Boolean,
      disabled: Boolean,
    },
    data: function () {
      return {
        loading: !1,
        stripe: null,
        elements: null,
        element: null,
        card: null,
      };
    },
    computed: {
      form: function () {
        return document.getElementById("stripe-element-form");
      },
    },
    mounted: function () {
      var t,
        e,
        n = this;
      return Ee.async(
        function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  this.disableAdvancedFraudDetection &&
                    Ge.setLoadParameters({ advancedFraudSignals: !1 }),
                  (t = {
                    stripeAccount: this.stripeAccount,
                    apiVersion: this.apiVersion,
                    locale: this.locale,
                  }),
                  (e = {
                    classes: this.classes,
                    style: this.elementStyle,
                    value: this.value,
                    hidePostalCode: this.hidePostalCode,
                    iconStyle: this.iconStyle,
                    hideIcon: this.hideIcon,
                    disabled: this.disabled,
                  }),
                  (o.next = 5),
                  Ee.awrap(Ge(this.pk, t))
                );
              case 5:
                (this.stripe = o.sent),
                  this.stripe.registerAppInfo(kt),
                  (this.elements = this.stripe.elements(this.elementsOptions)),
                  (this.element = this.elements.create(Gl, e)),
                  this.element.mount("#stripe-element-mount-point"),
                  this.element.on("change", function (r) {
                    var s = document.getElementById("stripe-element-errors");
                    r.error
                      ? (s.textContent = r.error.message)
                      : (s.textContent = ""),
                      n.onChange(r);
                  }),
                  this.element.on("blur", this.onBlur),
                  this.element.on("click", this.onClick),
                  this.element.on("escape", this.onEscape),
                  this.element.on("focus", this.onFocus),
                  this.element.on("ready", this.onReady),
                  this.form.addEventListener("submit", function (r) {
                    var s, i, c, l;
                    return Ee.async(
                      function (y) {
                        for (;;)
                          switch ((y.prev = y.next)) {
                            case 0:
                              return (
                                (y.prev = 0),
                                n.$emit("loading", !0),
                                r.preventDefault(),
                                (s = Ql({}, n.element)),
                                n.amount && (s.amount = n.amount),
                                (y.next = 7),
                                Ee.awrap(n.stripe.createToken(s, n.tokenData))
                              );
                            case 7:
                              if (
                                ((i = y.sent), (c = i.token), !(l = i.error))
                              ) {
                                y.next = 15;
                                break;
                              }
                              return (
                                (document.getElementById(
                                  "stripe-element-errors"
                                ).textContent = l.message),
                                n.$emit("error", l),
                                y.abrupt("return")
                              );
                            case 15:
                              n.$emit("token", c), (y.next = 22);
                              break;
                            case 18:
                              (y.prev = 18),
                                (y.t0 = y.catch(0)),
                                console.error(y.t0),
                                n.$emit("error", y.t0);
                            case 22:
                              return (
                                (y.prev = 22),
                                n.$emit("loading", !1),
                                y.finish(22)
                              );
                            case 25:
                            case "end":
                              return y.stop();
                          }
                      },
                      null,
                      null,
                      [[0, 18, 22, 25]]
                    );
                  });
              case 17:
              case "end":
                return o.stop();
            }
        },
        null,
        this
      );
    },
    methods: {
      submit: function () {
        this.$refs.submitButtonRef.click();
      },
      clear: function () {
        this.element.clear();
      },
      destroy: function () {
        this.element.destroy();
      },
      focus: function () {
        console.warn(
          "This method will currently not work on iOS 13+ due to a system limitation."
        ),
          this.element.focus();
      },
      unmount: function () {
        this.element.unmount();
      },
      update: function (t) {
        this.element.update(t);
      },
      onChange: function (t) {
        this.$emit("element-change", t);
      },
      onReady: function (t) {
        this.$emit("element-ready", t);
      },
      onFocus: function (t) {
        this.$emit("element-focus", t);
      },
      onBlur: function (t) {
        this.$emit("element-blur", t);
      },
      onEscape: function (t) {
        this.$emit("element-escape", t);
      },
      onClick: function (t) {
        this.$emit("element-click", t);
      },
    },
  };
function or(t, e, n, o, r, s, i, c, l, y) {
  typeof i != "boolean" && ((l = c), (c = i), (i = !1));
  const I = typeof n == "function" ? n.options : n;
  let g;
  if (
    (t &&
      t.render &&
      ((I.render = t.render),
      (I.staticRenderFns = t.staticRenderFns),
      (I._compiled = !0),
      r && (I.functional = !0)),
    o && (I._scopeId = o),
    s
      ? ((g = function (x) {
          (x =
            x ||
            (this.$vnode && this.$vnode.ssrContext) ||
            (this.parent &&
              this.parent.$vnode &&
              this.parent.$vnode.ssrContext)) ||
            typeof __VUE_SSR_CONTEXT__ > "u" ||
            (x = __VUE_SSR_CONTEXT__),
            e && e.call(this, l(x)),
            x && x._registeredComponents && x._registeredComponents.add(s);
        }),
        (I._ssrRegister = g))
      : e &&
        (g = i
          ? function (x) {
              e.call(this, y(x, this.$root.$options.shadowRoot));
            }
          : function (x) {
              e.call(this, c(x));
            }),
    g)
  )
    if (I.functional) {
      const x = I.render;
      I.render = function (j, U) {
        return g.call(U), x(j, U);
      };
    } else {
      const x = I.beforeCreate;
      I.beforeCreate = x ? [].concat(x, g) : [g];
    }
  return n;
}
const Yl =
  typeof navigator < "u" &&
  /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function rr(t) {
  return (e, n) => Jl(e, n);
}
let an;
const co = {};
function Jl(t, e) {
  const n = Yl ? e.media || "default" : t,
    o = co[n] || (co[n] = { ids: new Set(), styles: [] });
  if (!o.ids.has(t)) {
    o.ids.add(t);
    let r = e.source;
    if (
      (e.map &&
        ((r +=
          `
/*# sourceURL=` +
          e.map.sources[0] +
          " */"),
        (r +=
          `
/*# sourceMappingURL=data:application/json;base64,` +
          btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) +
          " */")),
      o.element ||
        ((o.element = document.createElement("style")),
        (o.element.type = "text/css"),
        e.media && o.element.setAttribute("media", e.media),
        an === void 0 &&
          (an = document.head || document.getElementsByTagName("head")[0]),
        an.appendChild(o.element)),
      "styleSheet" in o.element)
    )
      o.styles.push(r),
        (o.element.styleSheet.cssText = o.styles.filter(Boolean).join(`
`));
    else {
      const s = o.ids.size - 1,
        i = document.createTextNode(r),
        c = o.element.childNodes;
      c[s] && o.element.removeChild(c[s]),
        c.length ? o.element.insertBefore(i, c[s]) : o.element.appendChild(i);
    }
  }
}
const Zl = Kl;
var sr = function () {
    var t = this.$createElement,
      e = this._self._c || t;
    return e("div", [
      e(
        "form",
        { attrs: { id: "stripe-element-form" } },
        [
          e("div", { attrs: { id: "stripe-element-mount-point" } }),
          this._v(" "),
          this._t("stripe-element-errors", [
            e("div", { attrs: { id: "stripe-element-errors", role: "alert" } }),
          ]),
          this._v(" "),
          e("button", {
            ref: "submitButtonRef",
            staticClass: "hide",
            attrs: { type: "submit" },
          }),
        ],
        2
      ),
    ]);
  },
  Xl = [];
sr._withStripped = !0;
const ec = function (t) {
    t &&
      t("data-v-4dd8360e_0", {
        source: `





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,
        map: {
          version: 3,
          sources: [
            "/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue",
          ],
          names: [],
          mappings:
            ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",
          file: "Card.vue",
          sourcesContent: [
            `<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`,
          ],
        },
        media: void 0,
      });
  },
  tc = "data-v-4dd8360e",
  nc = or(
    { render: sr, staticRenderFns: Xl },
    ec,
    Zl,
    tc,
    !1,
    void 0,
    !1,
    rr,
    void 0,
    void 0
  );
var oc = "payment",
  rc = {
    props: {
      pk: { type: String, required: !0 },
      testMode: { type: Boolean, default: !1 },
      elementsOptions: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      confirmParams: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      redirect: { type: String, default: "always" },
      createOptions: {
        type: Object,
        default: function () {
          return {};
        },
      },
      stripeAccount: { type: String, default: void 0 },
      apiVersion: { type: String, default: void 0 },
      locale: { type: String, default: "auto" },
      disableAdvancedFraudDetection: { type: Boolean },
    },
    data: function () {
      return { loading: !1, stripe: null, elements: null, element: null };
    },
    computed: {
      form: function () {
        return document.getElementById("stripe-payment-element-form");
      },
    },
    mounted: function () {
      var t,
        e = this;
      return Ee.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  this.disableAdvancedFraudDetection &&
                    Ge.setLoadParameters({ advancedFraudSignals: !1 }),
                  (t = {
                    stripeAccount: this.stripeAccount,
                    apiVersion: this.apiVersion,
                    locale: this.locale,
                  }),
                  (n.next = 4),
                  Ee.awrap(Ge(this.pk, t))
                );
              case 4:
                (this.stripe = n.sent),
                  this.stripe.registerAppInfo(kt),
                  (this.elements = this.stripe.elements(this.elementsOptions)),
                  (this.element = this.elements.create(oc, this.createOptions)),
                  this.element.mount("#stripe-payment-element-mount-point"),
                  this.element.on("change", function (o) {
                    var r = document.getElementById(
                      "stripe-payment-element-errors"
                    );
                    o.error
                      ? (r.textContent = o.error.message)
                      : (r.textContent = ""),
                      e.onChange(o);
                  }),
                  this.element.on("blur", this.onBlur),
                  this.element.on("click", this.onClick),
                  this.element.on("escape", this.onEscape),
                  this.element.on("focus", this.onFocus),
                  this.element.on("ready", this.onReady),
                  this.form.addEventListener("submit", function (o) {
                    var r, s, i;
                    return Ee.async(
                      function (c) {
                        for (;;)
                          switch ((c.prev = c.next)) {
                            case 0:
                              return (
                                (c.prev = 0),
                                e.$emit("loading", !0),
                                o.preventDefault(),
                                (c.next = 5),
                                Ee.awrap(
                                  e.stripe.confirmPayment({
                                    elements: e.elements,
                                    confirmParams: e.confirmParams,
                                    redirect: e.redirect,
                                  })
                                )
                              );
                            case 5:
                              if (
                                ((r = c.sent),
                                (s = r.error),
                                (i = r.paymentIntent),
                                !s)
                              ) {
                                c.next = 15;
                                break;
                              }
                              return (
                                (document.getElementById(
                                  "stripe-payment-element-errors"
                                ).textContent = s.message),
                                e.$emit("error", s),
                                c.abrupt("return")
                              );
                            case 15:
                              i && e.$emit("confirmed", i);
                            case 16:
                              c.next = 22;
                              break;
                            case 18:
                              (c.prev = 18),
                                (c.t0 = c.catch(0)),
                                console.error(c.t0),
                                e.$emit("error", c.t0);
                            case 22:
                              return (
                                (c.prev = 22),
                                e.$emit("loading", !1),
                                c.finish(22)
                              );
                            case 25:
                            case "end":
                              return c.stop();
                          }
                      },
                      null,
                      null,
                      [[0, 18, 22, 25]]
                    );
                  });
              case 16:
              case "end":
                return n.stop();
            }
        },
        null,
        this
      );
    },
    methods: {
      submit: function () {
        this.$refs.submitButtonRef.click();
      },
      clear: function () {
        this.element.clear();
      },
      destroy: function () {
        this.element.destroy();
      },
      focus: function () {
        console.warn(
          "This method will currently not work on iOS 13+ due to a system limitation."
        ),
          this.element.focus();
      },
      collapse: function () {
        this.element.collapse();
      },
      getElement: function () {
        this.element.getElement();
      },
      unmount: function () {
        this.element.unmount();
      },
      update: function (t) {
        this.element.update(t);
      },
      onChange: function (t) {
        this.$emit("element-change", t);
      },
      onReady: function (t) {
        this.$emit("element-ready", t);
      },
      onFocus: function (t) {
        this.$emit("element-focus", t);
      },
      onBlur: function (t) {
        this.$emit("element-blur", t);
      },
      onEscape: function (t) {
        this.$emit("element-escape", t);
      },
      onClick: function (t) {
        this.$emit("element-click", t);
      },
    },
  };
const sc = rc;
var ir = function () {
    var t = this.$createElement,
      e = this._self._c || t;
    return e("div", [
      e(
        "form",
        { attrs: { id: "stripe-payment-element-form" } },
        [
          e("div", { attrs: { id: "stripe-payment-element-mount-point" } }),
          this._v(" "),
          this._t("stripe-payment-element-errors", [
            e("div", {
              attrs: { id: "stripe-payment-element-errors", role: "alert" },
            }),
          ]),
          this._v(" "),
          e("button", {
            ref: "submitButtonRef",
            staticClass: "hide",
            attrs: { type: "submit" },
          }),
        ],
        2
      ),
    ]);
  },
  ic = [];
ir._withStripped = !0;
const ac = function (t) {
    t &&
      t("data-v-171d7aec_0", {
        source: `












































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-171d7aec] {
  display: none;
}
`,
        map: {
          version: 3,
          sources: [
            "/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue",
          ],
          names: [],
          mappings:
            ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QA;;;EAGA;AACA;EACA,aAAA;AACA",
          file: "Payment.vue",
          sourcesContent: [
            `<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error, paymentIntent } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });

        // if the response is an error
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        } else if (paymentIntent) {
          // if the user has passed prop redirect="if_required"
          // and the payment confirmation was successful
          // and the payment method is not forced to redirect
          // then stripe.confirmPayment resolves with a paymentIntent
          // so we sould pass it back up to the caller for consumption
          // https://stripe.com/docs/js/payment_intents/confirm_payment?type=pii#confirm_payment_intent-options-redirect
          this.$emit('confirmed', paymentIntent);
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`,
          ],
        },
        media: void 0,
      });
  },
  lc = or(
    { render: ir, staticRenderFns: ic },
    ac,
    sc,
    "data-v-171d7aec",
    !1,
    void 0,
    !1,
    rr,
    void 0,
    void 0
  );
var cc = {
  install: function (t, e) {
    var n, o, r, s, i, c, l;
    return Ee.async(function (y) {
      for (;;)
        switch ((y.prev = y.next)) {
          case 0:
            (n = e.pk),
              (o = e.stripeAccount),
              (r = e.apiVersion),
              (s = e.locale),
              (i = e.elementsOptions),
              (c = window.Stripe(n, {
                stripeAccount: o,
                apiVersion: r,
                locale: s,
              })).registerAppInfo(kt),
              (l = c.elements(i)),
              (t.prototype.$stripe = c),
              (t.prototype.$stripeElements = l);
          case 6:
          case "end":
            return y.stop();
        }
    });
  },
};
(Zo = Xe.StripeCheckout = Vl),
  (Xe.StripeElementCard = nc),
  (Xe.StripeElementPayment = lc),
  (Xe.StripeElementsPlugin = cc),
  (Xe.StripePlugin = Tl);
const uc = {
    props: ["showMobile", "title", "isFull"],
    components: { QRCodeVue3: cl, StripeCheckout: Zo },
    data() {
      return {
        isLoading: !1,
        minutes: 15,
        seconds: 0,
        timer: null,
        setting: null,
        wallet: null,
        isEditing: !1,
        banners: null,
        custom: null,
        deposit: { amount: "", cpf: "", gateway: "" },
        activeCoupon: !1,
        selectedAmount: 0,
        showPixQRCode: !1,
        qrcodecopypast: "",
        QRCodeCopyPastMessage: 'Copiar Código "copiar e colar"',
        copyingcode: !1,
        idTransaction: "",
        intervalId: null,
        paymentType: "pix",
        elementsOptions: { appearance: {} },
        confirmParams: { return_url: null },
        successURL: null,
        cancelURL: null,
        amount: null,
        currency: null,
        publishableKey: null,
        sessionId: null,
        swiperEl: {},
        swiperElOptions: {
          slidesPerView: 2.5,
          spaceBetween: 8,
          freeMode: !0,
          direction: "horizontal",
          breakpoints: {
            400: { slidesPerView: 3.2 },
            480: { slidesPerView: 3.8 },
            640: { slidesPerView: 3.5 },
          },
        },
        warnStatus: !1,
        warnMessage: "",
        pixtimeleft: {
          initialTime: 300,
          secondsLeft: null,
          time: null,
          timer: null,
          expired: !1,
        },
        bonustimeleft: {
          initialTime: 600,
          secondsLeft: null,
          time: {},
          timer: null,
          expired: !1,
        },
      };
    },
    computed: {
      isAuthenticated() {
        return mt().isAuth;
      },
      authStore() {
        return mt();
      },
      handleWarnMessage() {
        const t =
            Number(this.deposit.amount).toFixed(2) !== "0.00" &&
            Number(this.deposit.amount) < Number(this.setting.min_deposit),
          e = Number(this.deposit.amount) > Number(this.setting.max_deposit),
          n = this.deposit.cpf.length === 0 || this.isEditing;
        return (
          t
            ? (this.warnMessage = `O valor mínimo para depósito é ${this.state.currencyFormat(
                Number(this.setting.min_deposit),
                "BRL"
              )}`)
            : e
            ? (this.warnMessage = `O valor máximo para depósito é ${this.state.currencyFormat(
                Number(this.setting.max_deposit),
                "BRL"
              )}`)
            : n && (this.warnMessage = "Por favor, preencha ou confirme o CPF"),
          t || e || n
        );
      },
      config() {
        return {
          decimal: ",",
          thousands: ".",
          prefix: "R$ ",
          suffix: "",
          precision: 2,
          masked: !1,
          min: null,
          max: null,
        };
      },
      getProgressPixTimeleft() {
        let t = null;
        return (
          (t =
            (this.pixtimeleft.secondsLeft / this.pixtimeleft.initialTime) *
            100),
          this.pixtimeleft.secondsLeft <= 0 && (t = 0),
          { width: `${t}%` }
        );
      },
      modalStore() {
        return Ye();
      },
      isPending() {
        const t =
            Number(this.deposit.amount) < Number(this.setting.min_deposit),
          e = this.deposit.cpf.length === 0 || this.isEditing;
        return t || e;
      },
    },
    mounted() {
      this.initializeSwiper(),
        (this.bonustimeleft.secondsLeft = this.bonustimeleft.initialTime),
        (this.bonustimeleft.timer = setInterval(this.updateTimeBonus, 1e3));
    },
    beforeUnmount() {
      clearInterval(this.pixtimeleft.timer),
        clearInterval(this.bonustimeleft.timer),
        (this.paymentType = null),
        (this.bonustimeleft.secondsLeft = null),
        (this.bonustimeleft.time = null),
        (this.bonustimeleft.expired = !1),
        (this.activeCoupon = !1),
        clearInterval(this.bonustimeleft.timer);
    },
    methods: {
      getSession: function () {
        const t = this;
        Ae.post("stripe/session", { amount: t.amount, currency: t.currency })
          .then((e) => {
            e.data.id && (t.sessionId = e.data.id);
          })
          .catch((e) => {});
      },
      checkoutStripe: function () {
        const t = Re();
        if (this.amount <= 0 || this.amount === "") {
          t.error("Você precisa digitar um valor");
          return;
        }
        this.$refs.checkoutRef.redirectToCheckout();
      },
      getPublicKeyStripe: function () {
        const t = this;
        Ae.post("stripe/publickey", {})
          .then((e) => {
            t.$nextTick(() => {
              (t.publishableKey = e.data.stripe_public_key),
                (t.elementsOptions.clientSecret = e.data.stripe_secret_key),
                (t.confirmParams.return_url = e.data.successURL);
            });
          })
          .catch((e) => {});
      },
      setPaymentMethod: function (t) {
        t === "stripe" && this.getPublicKeyStripe(), (this.paymentType = t);
      },
      submitQRCode: function (t) {
        const e = this,
          n = Re();
        if (!this.isEditing) {
          if (e.deposit.amount === "" || e.deposit.amount === void 0) {
            n.error(e.$t("You need to enter a value"));
            return;
          }
          if (e.deposit.cpf === "" || e.deposit.cpf === void 0) {
            n.error(e.$t("Do you need to enter your CPF or CNPJ"));
            return;
          }
          if (
            parseFloat(e.deposit.amount) < parseFloat(e.setting.min_deposit)
          ) {
            n.error("O valor mínimo de depósito é de " + e.setting.min_deposit);
            return;
          }
          if (
            parseFloat(e.deposit.amount) > parseFloat(e.setting.max_deposit)
          ) {
            n.error("O valor máximo de depósito é de " + e.setting.min_deposit);
            return;
          }
          (e.deposit.gateway = "suitpay"),
            (e.isLoading = !0),
            Ae.post("wallet/deposit/payment", e.deposit)
              .then((o) => {
                (e.showPixQRCode = !0),
                  (e.isLoading = !1),
                  (this.pixtimeleft.secondsLeft = this.pixtimeleft.initialTime),
                  (this.pixtimeleft.timer = setInterval(
                    this.updateTimePix,
                    1e3
                  )),
                  (e.idTransaction = o.data.idTransaction),
                  (e.qrcodecopypast = o.data.qrcode);
              })
              .catch((o) => {
                Object.entries(JSON.parse(o.request.responseText)).forEach(
                  ([r, s]) => {
                    n.error(`${s}`);
                  }
                ),
                  (e.showPixQRCode = !1),
                  (e.isLoading = !1);
              });
        }
      },
      copyQRCode: function (t) {
        const e = Re();
        var n = document.getElementById("pixcopiaecola");
        n.select(),
          n.setSelectionRange(0, 99999),
          document.execCommand("copy"),
          e.success("Pix Copiado com sucesso"),
          (this.copyingcode = !0),
          (this.QRCodeCopyPastMessage = "Código copiado"),
          setTimeout(() => {
            (this.copyingcode = !1),
              (this.QRCodeCopyPastMessage = 'Copiar Código "copiar e colar"');
          }, 2e3);
      },
      setAmount: function (t) {
        (this.deposit.amount = t), (this.selectedAmount = `R$ ${t}`);
      },
      getWallet: async function () {
        const t = Re();
        try {
          const e = await Ae.get("profile/wallet");
          (this.wallet = e.data.wallet),
            (this.currency = e.data.wallet.currency);
        } catch (e) {
          Object.entries(JSON.parse(e.request.responseText)).forEach(
            ([n, o]) => {
              t.error(`${o}`);
            }
          );
        }
      },
      getSetting: function () {
        const t = this,
          n = wt().setting;
        n && ((t.setting = n), (t.amount = n.max_deposit));
      },
      updateTimePix() {
        if (this.pixtimeleft.secondsLeft > 0) {
          this.pixtimeleft.secondsLeft--;
          const t = Math.floor(this.pixtimeleft.secondsLeft / 60),
            e = this.pixtimeleft.secondsLeft % 60,
            n = t < 10 ? `0${t}` : e,
            o = e < 10 ? `0${e}` : e;
          this.pixtimeleft.time = `${n}:${o}`;
        } else
          (this.pixtimeleft.expired = !0),
            clearInterval(this.pixtimeleft.timer);
      },
      getBanners: async function () {
        const t = this;
        try {
          const n = (await Ae.get("settings/banners")).data.banners;
          t.banners = n.filter((o) => o.type === "deposit");
        } catch (e) {
          console.error(e);
        }
      },
      updateTimeBonus() {
        if (this.bonustimeleft.secondsLeft > 0) {
          this.bonustimeleft.secondsLeft--;
          const t = Math.floor(this.bonustimeleft.secondsLeft / 3600),
            e = Math.floor((this.bonustimeleft.secondsLeft % 3600) / 60),
            n = this.bonustimeleft.secondsLeft % 60,
            o = t < 10 ? `0${t}` : t,
            r = e < 10 ? `0${e}` : e,
            s = n < 10 ? `0${n}` : n;
          this.bonustimeleft.time = { hours: o, minutes: r, seconds: s };
        } else
          (this.bonustimeleft.expired = !0),
            clearInterval(this.bonustimeleft.timer);
      },
      backToDeposit() {
        (this.showPixQRCode = !1),
          (this.isLoading = !1),
          (this.pixtimeleft.secondsLeft = null),
          (this.pixtimeleft.time = null),
          (this.pixtimeleft.expired = !1),
          clearInterval(this.pixtimeleft.timer),
          setTimeout(() => {
            this.initializeSwiper();
          });
      },
      initializeSwiper() {
        (this.swiperEl = document.querySelector(".swiper-amounts")),
          Object.assign(this.swiperEl, this.swiperElOptions),
          this.swiperEl.initialize();
      },
      toggleCoupon() {
        this.activeCoupon = !this.activeCoupon;
      },
      closeModal() {
        this.modalStore.setDepositModalStatus(!1);
      },
      editCpf() {
        this.deposit.cpf.length
          ? (this.isEditing = !this.isEditing)
          : (this.isEditing = !0);
      },
    },
    async created() {
      this.isAuthenticated &&
        (this.getWallet(),
        this.getSetting(),
        this.getBanners(),
        (this.deposit.cpf = this.authStore.user.cpf),
        (this.custom = custom));
    },
    watch: {
      startTimeBonus(t, e) {},
      amount(t, e) {
        this.paymentType === "stripe" &&
          (this.getSession(), (this.currency = "USD"));
      },
      currency(t, e) {
        this.paymentType === "stripe" && this.getSession();
      },
    },
  },
  ne = (t) => (St("data-v-4d8f7da1"), (t = t()), Ct(), t),
  dc = { class: "block" },
  pc = { key: 0 },
  hc = { key: 0, class: "flex flex-col p-8" },
  fc = ne(() =>
    a(
      "div",
      { class: "mb-3 w-full" },
      [
        a("div", { class: "flex justify-center" }, [
          a("h2", { class: "text-center text-white" }, [
            ce(" Escaneie a imagem "),
            a("br"),
            ce(" para fazer o pagamento "),
          ]),
        ]),
      ],
      -1
    )
  ),
  mc = { class: "w-full" },
  gc = { class: "mx-auto flex max-w-[230px] items-center justify-center p-3" },
  yc = ne(() =>
    a(
      "div",
      { class: "absolute right-3 top-3 cursor-pointer opacity-70" },
      [
        a(
          "svg",
          {
            height: "30",
            viewBox: "0 0 512 512",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            a("path", {
              d: `M397.9,286.8c-7.2,0-13.8,2.1-19.5,5.6c-3.3-17.4-18.5-30.6-36.8-30.6c-13.6,0-25.4,7.3-32,18.1
	c-3.9-17.4-18.5-30.6-36.8-30.6c-9.7,0-18.4,3.8-25,9.7V143c0-17.3-14-31.3-30.6-31.3c-18,0-32,14-32,31.3v252.3l-43.8-58.4
	c-6.1-8.2-15.5-12.5-25-12.5c-16.6,0-31.3,13.3-31.3,31.3c0,6.5,2,13.1,6.3,18.7l71.3,95.1c20,26.7,51.8,42.5,85,42.5h75.1
	c62.1,0,112.6-50.5,112.6-112.6v-75.1C435.4,303.6,418.6,286.8,397.9,286.8z M272.8,424.4c0,6.9-5.6,12.5-12.5,12.5
	c-6.9,0-12.5-5.6-12.5-12.5v-75.1c0-6.9,5.6-12.5,12.5-12.5c6.9,0,12.5,5.6,12.5,12.5V424.4z M322.8,424.4c0,6.9-5.6,12.5-12.5,12.5
	s-12.5-5.6-12.5-12.5v-75.1c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5V424.4z M372.9,424.4c0,6.9-5.6,12.5-12.5,12.5
	c-6.9,0-12.5-5.6-12.5-12.5v-75.1c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5V424.4z`,
              fill: "currentColor",
              opacity: "0.4",
            }),
            a("path", {
              d: `M260.3,336.9c-6.9,0-12.5,5.6-12.5,12.5v75.1c0,6.9,5.6,12.5,12.5,12.5c6.9,0,12.5-5.6,12.5-12.5v-75.1
	C272.8,342.5,267.2,336.9,260.3,336.9z M310.3,336.9c-6.9,0-12.5,5.6-12.5,12.5v75.1c0,6.9,5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5
	v-75.1C322.8,342.5,317.2,336.9,310.3,336.9z M360.4,336.9c-6.9,0-12.5,5.6-12.5,12.5v75.1c0,6.9,5.6,12.5,12.5,12.5
	c6.9,0,12.5-5.6,12.5-12.5v-75.1C372.9,342.5,367.2,336.9,360.4,336.9z M341.8,42.1c-7.3-7.3-19.2-7.3-26.5,0l-37.5,37.5
	c-7.3,7.3-7.3,19.2,0,26.5c4.3,3.7,9.2,5.5,13.9,5.5c4.8,0,9.6-1.8,13.3-5.5l37.5-37.5C349.8,61.3,349.8,49.5,341.8,42.1z
	 M362.8,160.4c0-10.4-8.4-18.8-18.8-18.8H291c-10.4,0-18.8,8.4-18.8,18.8c0.5,5.7,2.6,10.4,6,13.7c3.4,3.4,8.1,5.5,13.3,5.5h53.1
	C354.9,179.6,363.3,171.3,362.8,160.4z M167.2,160.4c0-10.4-8.4-18.8-18.8-18.8H95.3c-10.4,0-18.8,8.4-18.8,18.8
	c0.5,5.7,2.6,10.4,6,13.7c3.4,3.4,8.1,5.5,13.3,5.5h53.1C159.2,179.6,167.6,171.3,167.2,160.4z M97,68.7l37.5,37.5
	c3.7,3.7,8.5,5.5,13.3,5.5c4.8,0,9.6-1.8,13.9-5.5c7.3-7.3,7.3-19.2,0-26.5l-37.5-37.5c-7.3-7.3-19.2-7.3-26.5,0
	C89.7,49.5,89.7,61.3,97,68.7z M200.7,18.3v53.1c0,5.2,2.1,9.9,5.5,13.3c3.4,3.4,8.1,5.5,13.7,6c10.4,0,18.8-8.4,18.8-18.8V18.8
	c0-10.4-8.4-18.8-18.8-18.8C209.1-0.4,200.7,8,200.7,18.3z`,
              fill: "currentColor",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  vc = {
    class: "mb-3 text-center text-3xl font-bold text-[var(--ci-primary-color)]",
  },
  bc = {
    key: 0,
    height: "1em",
    viewBox: "0 0 512 512",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
  },
  wc = ne(() =>
    a(
      "path",
      {
        d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
        fill: "currentColor",
      },
      null,
      -1
    )
  ),
  _c = [wc],
  xc = { key: 0, class: "mb-8 px-3" },
  Sc = ne(() =>
    a(
      "p",
      { class: "text-xs font-bold text-yellow-400" },
      "O tempo para você pagar expira em:",
      -1
    )
  ),
  Cc = { class: "my-1 block text-xl font-bold text-white" },
  kc = { class: "h-1 w-full rounded bg-[#474A4B]" },
  Ec = { key: 1, class: "mb-8 text-center" },
  Mc = ne(() =>
    a(
      "span",
      { class: "text-xl font-bold text-pink-500" },
      "Código PIX expirado",
      -1
    )
  ),
  Ac = [Mc],
  Pc = { class: "flex justify-center rounded" },
  Oc = { key: 1 },
  Ic = { key: 0, class: "flex w-full flex-col" },
  Tc = {
    key: 0,
    role: "status",
    class:
      "absolute left-1/2 top-2/4 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded bg-gray-700 bg-opacity-50",
  },
  Rc = ne(() =>
    a(
      "svg",
      {
        "aria-hidden": "true",
        class:
          "h-8 w-8 animate-spin fill-[var(--ci-primary-color)] text-gray-200",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor",
        }),
        a("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill",
        }),
      ],
      -1
    )
  ),
  Fc = { class: "sr-only" },
  Dc = { key: 1 },
  Bc = ["src"],
  Lc = { class: "p-4" },
  jc = ne(() =>
    a(
      "h1",
      { class: "mb-6 text-lg font-bold text-[var(--ci-primary-color)]" },
      "Depósito",
      -1
    )
  ),
  zc = {
    class:
      "mb-4 flex items-center justify-between rounded bg-red-500 bg-opacity-90 px-4 py-3",
  },
  qc = { class: "text-md font-semibold uppercase text-white sm:text-xl" },
  Nc = { class: "flex items-center gap-1" },
  $c = { class: "span-counter" },
  Uc = { class: "span-counter" },
  Vc = { class: "span-counter" },
  Wc = { key: 0, class: "mb-4 rounded bg-green-700 bg-opacity-30 p-4" },
  Hc = { class: "text-center text-xs text-green-500" },
  Qc = { class: "mb-2 flex items-center gap-2 text-base text-white sm:h-10" },
  Gc = ne(() => a("h3", { class: "text-gray-300 break-keep" }, "Meu CPF:", -1)),
  Kc = { class: "container-pixkey flex items-center gap-2" },
  Yc = {
    key: 0,
    for: "pixkey",
    class: "label-pixkey flex items-center justify-between",
  },
  Jc = ["title"],
  Zc = ne(() =>
    a(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        class: "stroke-green-500",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      [
        a("circle", { cx: "12", cy: "12", r: "10" }),
        a("path", { d: "m9 12 2 2 4-4" }),
      ],
      -1
    )
  ),
  Xc = [Zc],
  eu = ne(() =>
    a(
      "svg",
      {
        class: "stroke-[var(--ci-primary-color)]",
        fill: "none",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        }),
        a("path", {
          d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
        }),
      ],
      -1
    )
  ),
  tu = [eu],
  nu = ne(() =>
    a(
      "p",
      { class: "mb-5 text-sm text-yellow-400" },
      " Você não pode realizar depósitos para terceiros. Depósito somente é válido para contas de sua titularidade. ",
      -1
    )
  ),
  ou = ne(() =>
    a(
      "div",
      { class: "mb-2 flex items-center justify-between" },
      [
        a(
          "p",
          { class: "text-sm font-medium text-white" },
          "Valor a ser depositado:"
        ),
      ],
      -1
    )
  ),
  ru = { class: "my-2" },
  su = {
    class: "flex w-full items-center justify-between rounded bg-[#424344] py-1",
  },
  iu = { class: "flex w-full" },
  au = { key: 1, class: "mb-2 rounded-[4px] bg-[#36272C] py-3 text-center" },
  lu = { class: "px-1 text-xs text-red-400 md:text-sm" },
  cu = { class: "swiper-amounts", init: "false", "events-prefix": "swiper-" },
  uu = { type: "button", class: "text-sm" },
  du = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 50,00", -1)
  ),
  pu = [du],
  hu = { class: "item-selected" },
  fu = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 100,00", -1)
  ),
  mu = [fu],
  gu = { class: "item-selected" },
  yu = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 200,00", -1)
  ),
  vu = [yu],
  bu = { class: "item-selected" },
  wu = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 500,00", -1)
  ),
  _u = [wu],
  xu = { class: "item-selected" },
  Su = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 1.000,00", -1)
  ),
  Cu = [Su],
  ku = { class: "item-selected" },
  Eu = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 2.000,00", -1)
  ),
  Mu = [Eu],
  Au = { class: "item-selected" },
  Pu = ne(() =>
    a("button", { type: "button", class: "text-sm" }, "R$ 5.000,00", -1)
  ),
  Ou = [Pu],
  Iu = { class: "mt-3 flex w-full items-center justify-center" },
  Tu = ["disabled"],
  Ru = ne(() =>
    a("span", { class: "text-sm font-semibold uppercase" }, "Gerar PIX", -1)
  ),
  Fu = [Ru];
function Du(t, e, n, o, r, s) {
  var y, I, g;
  const i = lt("QRCodeVue3"),
    c = lt("money3"),
    l = mn("maska");
  return (
    $(),
    V("div", dc, [
      r.paymentType === "pix" && r.setting && r.setting.suitpay_is_enable
        ? ($(),
          V("div", pc, [
            r.showPixQRCode && r.wallet
              ? ($(),
                V("div", hc, [
                  a(
                    "button",
                    {
                      type: "button",
                      class: "mb-6 flex items-center",
                      onClick:
                        e[0] ||
                        (e[0] = (...x) =>
                          s.backToDeposit && s.backToDeposit(...x)),
                    },
                    "🠘 Voltar"
                  ),
                  fc,
                  a("div", mc, [
                    a("div", gc, [
                      ct(i, { value: r.qrcodecopypast }, null, 8, ["value"]),
                    ]),
                    a(
                      "div",
                      {
                        class:
                          "relative mb-6 mt-4 rounded-lg border border-dashed border-gray-300 p-6",
                        onClick:
                          e[4] ||
                          (e[4] = G(
                            (...x) => s.copyQRCode && s.copyQRCode(...x),
                            ["stop", "prevent"]
                          )),
                      },
                      [
                        yc,
                        a(
                          "p",
                          vc,
                          he(
                            t.state.currencyFormat(
                              parseFloat(r.deposit.amount),
                              "BRL"
                            )
                          ),
                          1
                        ),
                        te(
                          a(
                            "input",
                            {
                              id: "pixcopiaecola",
                              type: "text",
                              class:
                                "mb-3 w-full rounded-lg border-none bg-gray-500 bg-opacity-30 p-4 text-xs focus:outline-none focus:ring-0",
                              "onUpdate:modelValue":
                                e[1] || (e[1] = (x) => (r.qrcodecopypast = x)),
                              readonly: "",
                              onClick:
                                e[2] ||
                                (e[2] = G(
                                  (...x) => s.copyQRCode && s.copyQRCode(...x),
                                  ["stop", "prevent"]
                                )),
                            },
                            null,
                            512
                          ),
                          [[Ce, r.qrcodecopypast]]
                        ),
                        a(
                          "button",
                          {
                            onClick:
                              e[3] ||
                              (e[3] = G(
                                (...x) => s.copyQRCode && s.copyQRCode(...x),
                                ["stop", "prevent"]
                              )),
                            type: "button",
                            class:
                              "mx-auto flex items-center gap-2 rounded bg-[var(--ci-primary-opacity-color)] px-5 py-3 text-[var(--ci-primary-color)] hover:brightness-[1.05]",
                          },
                          [
                            r.copyingcode
                              ? ($(), V("svg", bc, _c))
                              : le("", !0),
                            a("span", null, he(r.QRCodeCopyPastMessage), 1),
                          ]
                        ),
                      ]
                    ),
                    r.pixtimeleft.expired
                      ? ($(), V("div", Ec, Ac))
                      : ($(),
                        V("div", xc, [
                          Sc,
                          a("span", Cc, he(r.pixtimeleft.time || "05:00"), 1),
                          a("div", kc, [
                            a(
                              "div",
                              {
                                class:
                                  "h-full rounded bg-[var(--ci-primary-color)]",
                                style: cr(s.getProgressPixTimeleft),
                              },
                              null,
                              4
                            ),
                          ]),
                        ])),
                    a("div", Pc, [
                      a(
                        "button",
                        {
                          onClick:
                            e[5] ||
                            (e[5] = (...x) =>
                              s.closeModal && s.closeModal(...x)),
                          type: "button",
                          class:
                            "rounded bg-green-700 bg-opacity-30 px-4 py-2 text-sm text-green-500 hover:opacity-80",
                        },
                        " Eu já paguei o PIX "
                      ),
                    ]),
                  ]),
                ]))
              : le("", !0),
            r.showPixQRCode
              ? le("", !0)
              : ($(),
                V("div", Oc, [
                  r.setting != null
                    ? ($(),
                      V("div", Ic, [
                        r.isLoading
                          ? ($(),
                            V("div", Tc, [
                              Rc,
                              a("span", Fc, he(t.$t("Loading")) + "...", 1),
                            ]))
                          : le("", !0),
                        r.banners && r.banners.length > 0
                          ? ($(),
                            V("div", Dc, [
                              a(
                                "img",
                                {
                                  src: `/storage/${r.banners[0].image}`,
                                  class: "w-full sm:rounded-t-lg mb-0",
                                  style: { "margin-bottom": "0 !important" },
                                },
                                null,
                                8,
                                Bc
                              ),
                            ]))
                          : le("", !0),
                        a("div", Lc, [
                          jc,
                          a("div", zc, [
                            a(
                              "h1",
                              qc,
                              he(
                                r.bonustimeleft.expired
                                  ? "Bônus expirado"
                                  : "Bônus expira em:"
                              ),
                              1
                            ),
                            a("div", Nc, [
                              a(
                                "span",
                                $c,
                                he(
                                  ((y = r.bonustimeleft.time) == null
                                    ? void 0
                                    : y.hours) || "00"
                                ),
                                1
                              ),
                              ce(" : "),
                              a(
                                "span",
                                Uc,
                                he(
                                  ((I = r.bonustimeleft.time) == null
                                    ? void 0
                                    : I.minutes) || "00"
                                ),
                                1
                              ),
                              ce(" : "),
                              a(
                                "span",
                                Vc,
                                he(
                                  ((g = r.bonustimeleft.time) == null
                                    ? void 0
                                    : g.seconds) || "00"
                                ),
                                1
                              ),
                            ]),
                          ]),
                          a(
                            "form",
                            {
                              action: "",
                              onSubmit:
                                e[18] ||
                                (e[18] = G(
                                  (...x) =>
                                    s.submitQRCode && s.submitQRCode(...x),
                                  ["prevent"]
                                )),
                              class: "rounded bg-[#323637] p-4",
                            },
                            [
                              r.custom && r.custom.texto_deposito
                                ? ($(),
                                  V("div", Wc, [
                                    a("p", Hc, he(r.custom.texto_deposito), 1),
                                  ]))
                                : le("", !0),
                              a("div", Qc, [
                                Gc,
                                a("div", Kc, [
                                  r.isEditing
                                    ? ($(),
                                      V("label", Yc, [
                                        te(
                                          a(
                                            "input",
                                            {
                                              type: "cpf",
                                              id: "pixkey",
                                              "onUpdate:modelValue":
                                                e[6] ||
                                                (e[6] = (x) =>
                                                  (r.deposit.cpf = x)),
                                              "data-maska": `[
                        '###.###.###-##'
                      ]`,
                                              class:
                                                "input-pixkey w-40 p-2 appearance-none rounded border-none bg-[#424344] placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-0 sm:w-[initial]",
                                              placeholder: "Digite o CPF",
                                              required: "",
                                            },
                                            null,
                                            512
                                          ),
                                          [[Ce, r.deposit.cpf], [l]]
                                        ),
                                      ]))
                                    : ($(),
                                      V(
                                        "span",
                                        {
                                          key: 1,
                                          class:
                                            "text-wrap block break-all font-medium sm:max-w-[240px] sm:truncate",
                                          title: r.deposit.cpf,
                                        },
                                        he(r.deposit.cpf),
                                        9,
                                        Jc
                                      )),
                                  r.isEditing
                                    ? ($(),
                                      V(
                                        "button",
                                        {
                                          key: 2,
                                          type: "button",
                                          title: "Confirmar",
                                          onClick:
                                            e[7] ||
                                            (e[7] = (...x) =>
                                              s.editCpf && s.editCpf(...x)),
                                        },
                                        Xc
                                      ))
                                    : ($(),
                                      V(
                                        "button",
                                        {
                                          key: 3,
                                          type: "button",
                                          onClick:
                                            e[8] ||
                                            (e[8] = (...x) =>
                                              s.editCpf && s.editCpf(...x)),
                                          title: "Editar",
                                        },
                                        tu
                                      )),
                                ]),
                              ]),
                              nu,
                              ou,
                              a("div", ru, [
                                a("div", su, [
                                  a("div", iu, [
                                    ct(
                                      c,
                                      po(
                                        {
                                          class:
                                            "w-full appearance-none rounded-md border-none bg-transparent placeholder-white focus:outline-none focus:ring-0",
                                          modelValue: r.deposit.amount,
                                          "onUpdate:modelValue":
                                            e[9] ||
                                            (e[9] = (x) =>
                                              (r.deposit.amount = x)),
                                        },
                                        s.config,
                                        { placeholder: "R$ 0,00", required: "" }
                                      ),
                                      null,
                                      16,
                                      ["modelValue"]
                                    ),
                                  ]),
                                ]),
                              ]),
                              s.handleWarnMessage
                                ? ($(),
                                  V("div", au, [
                                    a("p", lu, he(r.warnMessage), 1),
                                  ]))
                                : le("", !0),
                              a("swiper-container", cu, [
                                a("swiper-slide", null, [
                                  a(
                                    "div",
                                    {
                                      onClick:
                                        e[10] ||
                                        (e[10] = G(
                                          (x) =>
                                            s.setAmount(
                                              parseFloat(r.setting.min_deposit)
                                            ),
                                          ["prevent"]
                                        )),
                                      class: "swiper-slide-custom",
                                    },
                                    [
                                      a(
                                        "button",
                                        uu,
                                        he(
                                          t.state.currencyFormat(
                                            parseFloat(r.setting.min_deposit),
                                            "BRL"
                                          )
                                        ),
                                        1
                                      ),
                                    ]
                                  ),
                                ]),
                                a("swiper-slide", null, [
                                  a(
                                    "div",
                                    {
                                      onClick:
                                        e[11] ||
                                        (e[11] = G(
                                          (x) => s.setAmount(50),
                                          ["prevent"]
                                        )),
                                      class: "swiper-slide-custom",
                                    },
                                    pu
                                  ),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", hu, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[12] ||
                                          (e[12] = G(
                                            (x) => s.setAmount(100),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      mu
                                    ),
                                  ]),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", gu, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[13] ||
                                          (e[13] = G(
                                            (x) => s.setAmount(200),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      vu
                                    ),
                                  ]),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", bu, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[14] ||
                                          (e[14] = G(
                                            (x) => s.setAmount(500),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      _u
                                    ),
                                  ]),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", xu, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[15] ||
                                          (e[15] = G(
                                            (x) => s.setAmount(1e3),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      Cu
                                    ),
                                  ]),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", ku, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[16] ||
                                          (e[16] = G(
                                            (x) => s.setAmount(2e3),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      Mu
                                    ),
                                  ]),
                                ]),
                                a("swiper-slide", null, [
                                  a("div", Au, [
                                    a(
                                      "div",
                                      {
                                        onClick:
                                          e[17] ||
                                          (e[17] = G(
                                            (x) => s.setAmount(5e3),
                                            ["prevent"]
                                          )),
                                        class: "swiper-slide-custom",
                                      },
                                      Ou
                                    ),
                                  ]),
                                ]),
                              ]),
                              a("div", Iu, [
                                a(
                                  "button",
                                  {
                                    type: "submit",
                                    class: fe([
                                      s.isPending ? "opacity-50" : "",
                                      "w-full rounded bg-[var(--ci-primary-color)] py-3 font-semibold text-black",
                                    ]),
                                    disabled: !!s.isPending,
                                  },
                                  Fu,
                                  10,
                                  Tu
                                ),
                              ]),
                            ],
                            32
                          ),
                        ]),
                      ]))
                    : le("", !0),
                ])),
          ]))
        : le("", !0),
    ])
  );
}
const Bu = Ke(uc, [
    ["render", Du],
    ["__scopeId", "data-v-4d8f7da1"],
  ]),
  Lu = {
    name: "DepositModal",
    components: { DepositWidget: Bu },
    computed: {
      modalStore() {
        return Ye();
      },
      depositModalStatus() {
        return this.modalStore.getDepositModalStatus();
      },
    },
    mounted() {
      this.modalDeposit = new Modal(document.getElementById("modalElDeposit"), {
        placement: "center",
        backdrop: "static",
        backdropClasses:
          "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
        closable: !1,
      });
    },
    methods: {
      closeModal() {
        this.modalStore.setDepositModalStatus(!1);
      },
    },
  },
  ju = {
    class:
      "bg-base relative h-full max-h-full w-full shadow-lg sm:h-auto sm:max-w-lg sm:rounded-lg",
  },
  zu = a(
    "button",
    { class: "font-bo]ld text-base text-[var(--ci-primary-color)] shadow-lg" },
    [a("i", { class: "fa-solid fa-xmark" })],
    -1
  ),
  qu = [zu],
  Nu = {
    class: "bg-base my-auto flex flex-col sm:rounded-lg md:justify-between",
  };
function $u(t, e, n, o, r, s) {
  const i = lt("DepositWidget");
  return (
    $(),
    _t(xt, { to: "body" }, [
      a(
        "div",
        {
          id: "modalElDeposit",
          tabindex: "-1",
          "aria-hidden": "true",
          class: fe([
            s.modalStore.getDepositModalStatus ? "flex" : "hidden",
            "fixed left-0 right-0 top-0 z-[500] h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden sm:z-[999999] md:inset-0",
          ]),
        },
        [
          a("div", ju, [
            a(
              "div",
              {
                class:
                  "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                onClick:
                  e[0] || (e[0] = (...c) => s.closeModal && s.closeModal(...c)),
              },
              qu
            ),
            a("div", Nu, [ct(i)]),
          ]),
        ],
        2
      ),
    ])
  );
}
const Od = Ke(Lu, [["render", $u]]);
const Uu = {
    name: "WithdrawWidget",
    data() {
      return {
        isLoadingBalanceWithdrawal: !0,
        setting: null,
        wallet: null,
        currency: null,
        withdraw: {
          name: "",
          pix_key: "",
          pix_type: "",
          amount: "0.00",
          type: "pix",
          currency: "",
          symbol: "",
          accept_terms: !0,
          cpf: "",
        },
        isEditing: !1,
      };
    },
    computed: {
      config() {
        return {
          decimal: ",",
          thousands: ".",
          prefix: "R$ ",
          suffix: "",
          precision: 2,
          masked: !1,
          min: null,
          max: null,
        };
      },
      authStore() {
        return mt();
      },
      modalStore() {
        return Ye();
      },
      balanceWithdrawal() {
        var t;
        return this.state.currencyFormat(
          Number((t = this.wallet) == null ? void 0 : t.balance_withdrawal),
          "BRL"
        );
      },
      handleInputUser() {
        var i, c;
        const t = Number(this.withdraw.amount),
          e = Number((i = this.setting) == null ? void 0 : i.min_withdrawal),
          n = Number((c = this.setting) == null ? void 0 : c.max_withdrawal),
          o = t > 0 && t < e,
          r = t > n,
          s = t == 0;
        return {
          minWithdraw: e,
          maxWithdraw: n,
          withdraw: t,
          isMinusThanMinimum: o,
          isGreaterThanMax: r,
          isZero: s,
        };
      },
      handleWarnMessage() {
        const {
          minWithdraw: t,
          maxWithdraw: e,
          isMinusThanMinimum: n,
          isGreaterThanMax: o,
          isZero: r,
        } = this.handleInputUser;
        let s = !0;
        return (
          n
            ? ((this.warnMessage = `O valor mínimo para saque é ${this.state.currencyFormat(
                t,
                "BRL"
              )}`),
              (s = !0))
            : o
            ? ((this.warnMessage = `O valor máximo para saque é ${this.state.currencyFormat(
                e,
                "BRL"
              )}`),
              (s = !0))
            : r
            ? ((this.warnMessage = "Digite o valor que deseja sacar"), (s = !0))
            : this.withdraw.pix_key
            ? this.withdraw.name
              ? this.withdraw.pix_type
                ? this.isEditing
                  ? ((this.warnMessage = "Confirme a sua chave PIX"), (s = !0))
                  : (s = !1)
                : ((this.warnMessage = "Selecione qual o tipo de chave"),
                  (s = !0))
              : ((this.warnMessage = "Digite um nome Válido"), (s = !0))
            : ((this.warnMessage = "Digite a sua chave PIX"), (s = !0)),
          s
        );
      },
      withdrawPermission() {
        const { minWithdraw: t, maxWithdraw: e } = this.handleInputUser,
          n = this.withdraw.amount < t || this.withdraw.amount > e,
          o = this.isEditing === !0,
          r = this.withdraw.pix_type.length === 0;
        return n || o || r;
      },
    },
    mounted() {
      this.getSetting(),
        this.getWallet(),
        (this.withdraw.cpf = this.authStore.user.cpf);
    },
    methods: {
      getSetting: function () {
        const e = wt().setting;
        e && (this.setting = e);
      },
      getWallet: async function () {
        const t = Re();
        try {
          const e = await Ae.get("profile/wallet");
          (this.wallet = e.data.wallet),
            (this.currency = e.data.wallet.currency),
            (this.withdraw.currency = e.data.wallet.currency),
            (this.withdraw.symbol = e.data.wallet.symbol),
            (this.isLoadingBalanceWithdrawal = !1);
        } catch (e) {
          Object.entries(JSON.parse(e.request.responseText)).forEach(
            ([n, o]) => {
              t.error(`${o}`);
            }
          );
        }
      },
      submitWithdraw: function (t) {
        const e = this,
          n = Re();
        (e.isLoading = !0),
          Ae.post("wallet/withdraw/request", e.withdraw)
            .then((o) => {
              (e.isLoading = !1),
                (e.withdraw = {
                  name: "",
                  pix_key: "",
                  pix_type: "",
                  amount: "",
                  type: "",
                  accept_terms: !0,
                }),
                n.success(o.data.message);
            })
            .catch((o) => {
              Object.entries(JSON.parse(o.request.responseText)).forEach(
                ([r, s]) => {
                  n.error(`${s}`);
                }
              ),
                (e.isLoading = !1);
            });
      },
      editCpf() {
        this.withdraw.cpf.length
          ? (this.isEditing = !this.isEditing)
          : (this.isEditing = !0);
      },
      handleNavigateTo() {
        this.modalStore.setWithdrawModalStatus(!1),
          this.$router.push({ name: "serviceTerms" });
      },
    },
  },
  Oe = (t) => (St("data-v-5b4aaaa5"), (t = t()), Ct(), t),
  Vu = Oe(() =>
    a(
      "h1",
      { class: "mb-6 text-lg font-bold text-[var(--ci-primary-color)]" },
      "Solicitar Saque",
      -1
    )
  ),
  Wu = { action: "" },
  Hu = {
    class:
      "mb-2 flex flex-col items-start gap-2 text-xl text-white sm:h-10 sm:flex-row sm:items-center",
  },
  Qu = Oe(() => a("h3", { class: "text-gray-300" }, "Meu CPF:", -1)),
  Gu = { class: "container-pixkey flex items-center gap-2" },
  Ku = {
    key: 0,
    for: "pixkey",
    class: "label-pixkey flex items-center justify-between",
  },
  Yu = ["title"],
  Ju = Oe(() =>
    a(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        class: "stroke-green-500",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      [
        a("circle", { cx: "12", cy: "12", r: "10" }),
        a("path", { d: "m9 12 2 2 4-4" }),
      ],
      -1
    )
  ),
  Zu = [Ju],
  Xu = Oe(() =>
    a(
      "svg",
      {
        class: "stroke-[var(--ci-primary-color)]",
        fill: "none",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        }),
        a("path", {
          d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
        }),
      ],
      -1
    )
  ),
  ed = [Xu],
  td = Oe(() =>
    a(
      "p",
      { class: "mb-5 text-sm text-yellow-400" },
      " Você não pode realizar saques para terceiros. Saque somente é válido para contas de sua titularidade. ",
      -1
    )
  ),
  nd = { class: "mb-4 cursor-pointer rounded bg-[#4D4F2A] bg-opacity-80 p-3" },
  od = Oe(() =>
    a(
      "label",
      { for: "name", class: "mb-1 block text-white" },
      "Nome Completo",
      -1
    )
  ),
  rd = Oe(() =>
    a(
      "label",
      { for: "withdraw", class: "mb-1 block text-white" },
      "Valor do saque",
      -1
    )
  ),
  sd = Oe(() =>
    a(
      "label",
      { for: "pixkey", class: "mb-1 block text-white" },
      "Chave Pix",
      -1
    )
  ),
  id = Oe(() =>
    a(
      "label",
      { for: "pix_type", class: "mb-1 block text-white" },
      "Tipo de Chave",
      -1
    )
  ),
  ad = pr(
    '<option selected disabled data-v-5b4aaaa5>Selecione uma chave</option><option value="document" data-v-5b4aaaa5>CPF/CNPJ</option><option value="email" data-v-5b4aaaa5>E-mail</option><option value="phoneNumber" data-v-5b4aaaa5>Telefone</option><option value="randomKey" data-v-5b4aaaa5>Chave Aleatória</option>',
    5
  ),
  ld = [ad],
  cd = { class: "mb-2 flex items-center text-sm text-white" },
  ud = { key: 0 },
  dd = Oe(() =>
    a(
      "svg",
      {
        "aria-hidden": "true",
        class:
          "h-4 w-4 animate-spin fill-[var(--ci-primary-color)] text-gray-200",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        a("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor",
        }),
        a("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill",
        }),
      ],
      -1
    )
  ),
  pd = [dd],
  hd = { key: 1, class: "font-bold text-blue-500" },
  fd = { key: 0, class: "mb-4 rounded bg-[#36272C] p-3" },
  md = { class: "text-center text-red-400" },
  gd = ["disabled"];
function yd(t, e, n, o, r, s) {
  const i = lt("money3"),
    c = mn("maska");
  return (
    $(),
    V("div", null, [
      Vu,
      a("form", Wu, [
        a("div", Hu, [
          Qu,
          a("div", Gu, [
            r.isEditing
              ? ($(),
                V("label", Ku, [
                  te(
                    a(
                      "input",
                      {
                        type: "cpf",
                        id: "pixkey",
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (l) => (r.withdraw.cpf = l)),
                        "data-maska": `[
                '###.###.###-##'
              ]`,
                        class:
                          "input-pixkey appearance-none rounded p-2 border-none bg-[#424344] placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-0 sm:w-[initial]",
                        placeholder: "Digite o CPF",
                        onKeyup:
                          e[1] ||
                          (e[1] = ur(
                            (...l) => s.editCpf && s.editCpf(...l),
                            ["enter"]
                          )),
                        required: "",
                      },
                      null,
                      544
                    ),
                    [[Ce, r.withdraw.cpf], [c]]
                  ),
                ]))
              : ($(),
                V(
                  "span",
                  {
                    key: 1,
                    class:
                      "text-wrap block break-all font-medium sm:max-w-[240px] sm:truncate",
                    title: r.withdraw.cpf,
                  },
                  he(r.withdraw.cpf),
                  9,
                  Yu
                )),
            r.isEditing
              ? ($(),
                V(
                  "button",
                  {
                    key: 2,
                    type: "button",
                    title: "Confirmar",
                    onClick:
                      e[2] || (e[2] = (...l) => s.editCpf && s.editCpf(...l)),
                  },
                  Zu
                ))
              : ($(),
                V(
                  "button",
                  {
                    key: 3,
                    type: "button",
                    onClick:
                      e[3] || (e[3] = (...l) => s.editCpf && s.editCpf(...l)),
                    title: "Editar",
                  },
                  ed
                )),
          ]),
        ]),
        td,
        a("div", nd, [
          a(
            "p",
            {
              class: "block text-center text-yellow-200",
              onClick:
                e[4] ||
                (e[4] = (...l) =>
                  s.handleNavigateTo && s.handleNavigateTo(...l)),
            },
            "Dúvidas? Leia as regras de Saque"
          ),
        ]),
        od,
        te(
          a(
            "input",
            {
              id: "name",
              "onUpdate:modelValue":
                e[5] || (e[5] = (l) => (r.withdraw.name = l)),
              type: "text",
              class:
                "mb-2 w-full appearance-none rounded border-none bg-[#424344] placeholder-white focus:outline-none focus:ring-0",
              placeholder: "Digite o nome do titular da conta",
              required: "",
            },
            null,
            512
          ),
          [[Ce, r.withdraw.name]]
        ),
        rd,
        ct(
          i,
          po(
            {
              id: "withdraw",
              class:
                "mb-4 w-full appearance-none rounded border-none bg-[#424344] placeholder-white focus:outline-none focus:ring-0",
              modelValue: r.withdraw.amount,
              "onUpdate:modelValue":
                e[6] || (e[6] = (l) => (r.withdraw.amount = l)),
            },
            s.config,
            { placeholder: "R$ 0,00", required: "" }
          ),
          null,
          16,
          ["modelValue"]
        ),
        sd,
        te(
          a(
            "input",
            {
              id: "pixkey",
              "onUpdate:modelValue":
                e[7] || (e[7] = (l) => (r.withdraw.pix_key = l)),
              type: "text",
              class:
                "mb-2 w-full appearance-none rounded border-none bg-[#424344] placeholder-white focus:outline-none focus:ring-0",
              placeholder: "Digite a sua chave PIX",
              required: "",
            },
            null,
            512
          ),
          [[Ce, r.withdraw.pix_key]]
        ),
        id,
        te(
          a(
            "select",
            {
              id: "pix_type",
              "onUpdate:modelValue":
                e[8] || (e[8] = (l) => (r.withdraw.pix_type = l)),
              name: "type_document",
              class:
                "mb-2 w-full appearance-none rounded border-none bg-[#424344] placeholder-white focus:outline-none focus:ring-0",
              required: "",
            },
            ld,
            512
          ),
          [[dr, r.withdraw.pix_type]]
        ),
        a("span", cd, [
          ce(" Disponível para saque:  "),
          r.isLoadingBalanceWithdrawal
            ? ($(), V("span", ud, pd))
            : ($(), V("span", hd, he(s.balanceWithdrawal), 1)),
        ]),
        s.handleWarnMessage
          ? ($(), V("div", fd, [a("p", md, he(t.warnMessage), 1)]))
          : le("", !0),
        a(
          "button",
          {
            type: "button",
            class:
              "w-full rounded bg-green-600 p-2 text-white hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-opacity-100",
            disabled: s.withdrawPermission,
            onClick:
              e[9] ||
              (e[9] = G(
                (...l) => s.submitWithdraw && s.submitWithdraw(...l),
                ["prevent"]
              )),
          },
          " Sacar ",
          8,
          gd
        ),
      ]),
    ])
  );
}
const vd = Ke(Uu, [
    ["render", yd],
    ["__scopeId", "data-v-5b4aaaa5"],
  ]),
  bd = {
    name: "WithdrawModal",
    components: { WithdrawWidget: vd },
    data() {
      return {};
    },
    computed: {
      modalStore() {
        return Ye();
      },
    },
    mounted() {},
    methods: {
      closeModal() {
        this.modalStore.setWithdrawModalStatus(!1);
      },
    },
  },
  wd = {
    class:
      "bg-base relative h-full max-h-full w-full shadow-lg sm:h-auto sm:max-w-lg sm:rounded-lg",
  },
  _d = a(
    "button",
    { class: "text-base font-bold text-[var(--ci-primary-color)] shadow-lg" },
    [a("i", { class: "fa-solid fa-xmark" })],
    -1
  ),
  xd = [_d],
  Sd = {
    class: "bg-base my-auto flex flex-col p-8 sm:rounded-lg md:justify-between",
  };
function Cd(t, e, n, o, r, s) {
  const i = lt("WithdrawWidget");
  return (
    $(),
    _t(xt, { to: "body" }, [
      a(
        "div",
        {
          id: "modalElWithdraw",
          tabindex: "-1",
          "aria-hidden": "true",
          class: fe([
            s.modalStore.getWithdrawModalStatus ? "flex" : "hidden",
            "fixed left-0 right-0 top-0 z-[500] h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden sm:z-[999999] md:inset-0 md:h-[calc(100%-1rem)]",
          ]),
        },
        [
          a("div", wd, [
            a(
              "div",
              {
                class:
                  "custom-box-shadow absolute right-3 top-3 z-50 flex h-10 w-10 cursor-pointer justify-center rounded-md bg-[#212425] p-2 md:-right-1 md:-top-1 md:hover:right-0 md:hover:top-0",
                onClick:
                  e[0] || (e[0] = (...c) => s.closeModal && s.closeModal(...c)),
              },
              xd
            ),
            a("div", Sd, [ct(i)]),
          ]),
        ],
        2
      ),
    ])
  );
}
const Id = Ke(bd, [["render", Cd]]);
export { Od as D, Pd as F, Ad as L, Md as R, Id as W };
