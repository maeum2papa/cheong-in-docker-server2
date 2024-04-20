import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const BottomMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{width:100%;padding:10px 0;position:fixed;bottom:0;border-top:1px solid var(--border-color-gray);z-index:1000;background-color:#ffffff}ul.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{display:flex;justify-content:space-between}ul.svelte-13zm3mh li.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{width:25%;cursor:pointer}ul.svelte-13zm3mh li.svelte-13zm3mh>a.svelte-13zm3mh.svelte-13zm3mh{display:flex;flex-direction:column;align-items:center}ul.svelte-13zm3mh li.svelte-13zm3mh>a.svelte-13zm3mh>div.svelte-13zm3mh{font-size:11px}.home.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh,.case.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh,.faq.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh,.cs.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{width:24px;height:24px;background-position:center;background-size:cover}.home.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_home_n.png) no-repeat}.home.active.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_home_s.png) no-repeat}.case.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_tool_n.png) no-repeat}.case.active.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_tool_s.png) no-repeat}.faq.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_question_n.png) no-repeat}.faq.active.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_question_s.png) no-repeat}.cs.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_telephone_n.png) no-repeat}.cs.active.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh.svelte-13zm3mh{background:url(/images/icon_telephone_s.png) no-repeat}",
  map: null
};
const BottomMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let isActive = "";
  let navOption = [
    { route: "home", name: "메인" },
    { route: "case", name: "시공사례" },
    { route: "faq", name: "FAQ" },
    { route: "cs", name: "고객센터" }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="svelte-13zm3mh"><ul class="svelte-13zm3mh">${each(navOption, (item, index) => {
    return `<li class="svelte-13zm3mh"><a${add_attribute("href", item.route === "home" ? "/" : `/${item.route}`, 0)} class="svelte-13zm3mh"><div class="${escape(null_to_empty(item.route + (isActive === item.route ? " active" : "")), true) + " svelte-13zm3mh"}"></div> <div class="svelte-13zm3mh">${escape(item.name)}</div></a> </li>`;
  })}</ul> </nav>`;
});
const common = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1kvp2f8_START --><meta http-equiv="Content-Type" content="text/html; charset=utf-8">${$$result.title = `<title>누수공사전문 대전청인설비공사</title>`, ""}<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="Author" content="누수공사전문 대전청인설비공사"><meta name="Keywords" content="누수,하수도뚫기,수도녹임,배관공사,난방공사,방수공사,건물보수,집보수,세면대교체,변기교체,변기공사,세면대공사"><meta name="Description" content="누수공사전문, 하수・오수・난방 배관공사, 언수도녹임, 막힘 소통공사, 방수공사, 타일공사, 양변기・세면기 교체"><meta property="og:type" content="article"><meta property="og:title" content="누수공사전문 대전청인설비공사"><meta property="og:description" content="누수공사전문, 하수・오수・난방 배관공사, 언수도녹임, 막힘 소통공사, 방수공사, 타일공사, 양변기・세면기 교체"><meta property="og:image" content="https://cheong-in.com/og_image.jpg"><meta property="og:url" content="https://cheong-in.com"><meta name="google-site-verification" content="wra9ecnyTTr2akMK-bX9TTY6Qyh_1F9HQlgNmuunShg"><meta name="naver-site-verification" content="85cde738bec1d717124da8d0f7dad49d8ee589ed"><!-- HEAD_svelte-1kvp2f8_END -->`, ""} <div class="app"><main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(BottomMenu, "BottomMenu").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
