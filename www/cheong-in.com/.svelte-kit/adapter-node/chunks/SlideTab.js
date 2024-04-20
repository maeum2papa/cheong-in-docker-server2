import { e as encrypt } from "./encrypt.js";
import { c as create_ssr_component, e as each, d as escape, n as null_to_empty } from "./ssr.js";
const commonHeader = {
  "Content-Type": "application/json;charset=UTF-8",
  "Accept": "application/json"
};
const postApi = async ({ path = "", data = {}, auth = "" } = {}) => {
  try {
    let result = {};
    data = { "body": encrypt(JSON.stringify(data)) };
    const response = await fetch(path, {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache",
      // *default, no-cache, reload, force-cache, only-if-cached
      headers: commonHeader,
      body: JSON.stringify(data)
    });
    result = await response.json();
    return result;
  } catch (err) {
  }
};
const SlideTab_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.slide-menu.svelte-ax0i8r.svelte-ax0i8r{width:100%;overflow-x:scroll}.slide-menu.svelte-ax0i8r ul.svelte-ax0i8r{margin-top:20px;margin-bottom:8px;display:flex;flex-wrap:nowrap;gap:8px}.slide-menu.svelte-ax0i8r ul li.svelte-ax0i8r{flex:0 0 auto;padding:8px 16px;border-radius:80px;background-color:var(--background-gray);color:var(--font-gray);font-size:13px;cursor:pointer}.slide-menu.svelte-ax0i8r ul li.active.svelte-ax0i8r{background-color:var(--primary);color:#ffffff}.slide-menu.svelte-ax0i8r.svelte-ax0i8r::-webkit-scrollbar{display:none}.slide-menu.svelte-ax0i8r.svelte-ax0i8r{-ms-overflow-style:none;scrollbar-width:none}',
  map: null
};
const SlideTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleTab } = $$props;
  let { isActive } = $$props;
  let slideMenu = ["전체", "누수탐지공사", "배관공사", "막힘 소통공사", "방수공사", "칸막이·창틀", "기타 건물유지 보수", "기타"];
  if ($$props.handleTab === void 0 && $$bindings.handleTab && handleTab !== void 0)
    $$bindings.handleTab(handleTab);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css);
  return `<div class="slide-menu svelte-ax0i8r"><ul class="svelte-ax0i8r">${each(slideMenu, (item, index) => {
    return `<li class="${escape(null_to_empty(isActive == index ? "active" : ""), true) + " svelte-ax0i8r"}">${escape(item)}</li>`;
  })}</ul> </div>`;
});
export {
  SlideTab as S,
  postApi as p
};
