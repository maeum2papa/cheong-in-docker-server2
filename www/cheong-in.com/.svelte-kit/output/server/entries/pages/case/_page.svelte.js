import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as postApi, S as SlideTab } from "../../../chunks/SlideTab.js";
import { C as CaseList } from "../../../chunks/CaseList.js";
import { w as writable } from "../../../chunks/index2.js";
const Loading = writable({
  flag: false
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".case.svelte-13u3jw0.svelte-13u3jw0{margin-top:20px}.case-header.svelte-13u3jw0.svelte-13u3jw0{padding-left:20px}.case-header.svelte-13u3jw0 .sub-text.svelte-13u3jw0{padding-right:20px}.case-body.svelte-13u3jw0.svelte-13u3jw0{margin:20px 20px 80px;border-top:1px solid var(--border-color-gray)}h3.svelte-13u3jw0.svelte-13u3jw0{font-size:var(--font-size-small);font-weight:700}.sub-text.svelte-13u3jw0.svelte-13u3jw0{font-size:var(--font-size-small-small-small);line-height:20px;color:var(--font-gray);margin-top:10px;margin-bottom:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_Loading;
  $$unsubscribe_Loading = subscribe(Loading, (value) => value);
  let caseList = [];
  let isActive = 0;
  const handleTab = async (index) => {
    isActive = index;
    const res = await postApi({
      path: "/api/case",
      data: { sort: parseInt(index) }
    });
    caseList = res.data;
  };
  $$result.css.add(css);
  $$unsubscribe_Loading();
  return ` <div class="case svelte-13u3jw0"><div class="case-header svelte-13u3jw0"><h3 class="svelte-13u3jw0" data-svelte-h="svelte-1f4ebyd">시공 사례</h3> ${validate_component(SlideTab, "SlideTab").$$render($$result, { handleTab, isActive }, {}, {})} <div class="sub-text svelte-13u3jw0" data-svelte-h="svelte-y86qd5">상담, 현장방문, 탐지, 시공, A/S 전 과정을 책임 전문가가 합리적인 비용으로 진행합니다.</div></div> <div class="case-body svelte-13u3jw0">${validate_component(CaseList, "CaseList").$$render($$result, { caseList }, {}, {})}</div> </div>`;
});
export {
  Page as default
};
