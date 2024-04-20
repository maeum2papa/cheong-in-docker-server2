import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as cAlert, L as Loading } from "../../chunks/store.js";
const app = "";
const common = "";
const Alert2_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".alert.svelte-1ojnz0b.svelte-1ojnz0b{position:fixed;min-width:300px;padding:40px;top:50%;left:50%;transform:translate(-50%, -50%);background:#fff;z-index:2001;border-radius:4px;text-align:center}.alert.svelte-1ojnz0b div.svelte-1ojnz0b{font-size:18px}.mask.svelte-1ojnz0b.svelte-1ojnz0b{position:fixed;width:100vw;height:100vh;background:rgba(1, 1, 1, 0.9);z-index:2000;top:0;left:0}button.svelte-1ojnz0b.svelte-1ojnz0b{margin-top:40px}",
  map: null
};
const Alert2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cAlert, $$unsubscribe_cAlert;
  $$unsubscribe_cAlert = subscribe(cAlert, (value) => $cAlert = value);
  $$result.css.add(css$2);
  $$unsubscribe_cAlert();
  return `${$cAlert.flag ? `<div class="alert svelte-1ojnz0b"><div class="svelte-1ojnz0b">${escape($cAlert.msg)}</div> <button type="button" class="black svelte-1ojnz0b" data-svelte-h="svelte-1wm7qsu">확인</button></div> <div class="mask svelte-1ojnz0b"></div>` : ``}`;
});
const Loding_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.lds-dual-ring.svelte-wow93c{display:inline-block;width:80px;height:80px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.lds-dual-ring.svelte-wow93c:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid gray;border-color:gray transparent gray transparent;animation:svelte-wow93c-lds-dual-ring 1.2s linear infinite}@keyframes svelte-wow93c-lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.mask.svelte-wow93c{position:fixed;width:100vw;height:100vh;background:rgba(255,255,255,0.1);top:0;left:0}',
  map: null
};
const Loding = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $Loading, $$unsubscribe_Loading;
  $$unsubscribe_Loading = subscribe(Loading, (value) => $Loading = value);
  $$result.css.add(css$1);
  $$unsubscribe_Loading();
  return `${$Loading.flag ? `<div class="lds-dual-ring svelte-wow93c"></div> <div class="mask svelte-wow93c"></div>` : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-f824qx{padding-bottom:30px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-f824qx"><main>${slots.default ? slots.default({}) : ``}</main></div> ${validate_component(Alert2, "Alert2").$$render($$result, {}, {}, {})} ${validate_component(Loding, "Loding").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
