import { c as create_ssr_component, e as each, d as escape, b as add_attribute } from "./ssr.js";
const CaseList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".case-title.svelte-haiwx6.svelte-haiwx6{font-size:var(--font-size-small-small);margin-top:30px;margin-bottom:10px}.case-contents.svelte-haiwx6.svelte-haiwx6{display:flex;justify-content:space-between}.case-contents.svelte-haiwx6 .img-wrap.svelte-haiwx6{width:49%;height:160px;border-radius:8px;overflow:hidden;position:relative}.case-contents.svelte-haiwx6 .img-wrap img.svelte-haiwx6{width:100%;height:100%;object-fit:cover}.case-contents.svelte-haiwx6 .img-wrap p.svelte-haiwx6{position:absolute;left:10px;bottom:10px;color:#ffffff;font-size:11px}.case-contents.svelte-haiwx6 .img-wrap:last-child p.svelte-haiwx6{color:var(--yellow)}.case-contents.svelte-haiwx6 .img-wrap .bg-gradient.svelte-haiwx6{position:absolute;width:100%;height:100%;left:0;top:0;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)}",
  map: null
};
const CaseList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caseList } = $$props;
  if ($$props.caseList === void 0 && $$bindings.caseList && caseList !== void 0)
    $$bindings.caseList(caseList);
  $$result.css.add(css);
  return `${each(caseList, (item) => {
    return `<div class="case-title svelte-haiwx6">${escape(item.title)}</div> <div class="case-contents svelte-haiwx6"><div class="img-wrap svelte-haiwx6"><img${add_attribute("src", item.beforeImg, 0)} alt="" class="svelte-haiwx6"> <div class="bg-gradient svelte-haiwx6"></div> <p class="svelte-haiwx6" data-svelte-h="svelte-1t0no2z">공사 전</p></div> <div class="img-wrap svelte-haiwx6"><img${add_attribute("src", item.afterImg, 0)} alt="" class="svelte-haiwx6"> <div class="bg-gradient svelte-haiwx6"></div> <p class="svelte-haiwx6" data-svelte-h="svelte-7m32ej">공사 후</p></div> </div>`;
  })} <div></div>`;
});
export {
  CaseList as C
};
