import { c as create_ssr_component, a as subscribe } from "../../../../chunks/ssr.js";
import "../../../../chunks/encrypt.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".detail-header.svelte-47wa5x.svelte-47wa5x.svelte-47wa5x{margin-top:20px;margin-bottom:40px;display:flex;align-items:center;font-size:var(--font-size-small);font-weight:700}.detail-header.svelte-47wa5x>div.svelte-47wa5x.svelte-47wa5x{display:block;width:8px;height:8px;border-left:2px solid #000000;border-top:2px solid #000000;transform:rotate(-45deg);text-indent:-999px;margin-right:10px}.detail-body.svelte-47wa5x h3.svelte-47wa5x.svelte-47wa5x{font-size:var(--font-size-small-small);font-weight:400;margin-bottom:20px}.detail-body.svelte-47wa5x .img-wrap.svelte-47wa5x.svelte-47wa5x{width:100%;height:200px;position:relative;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)}.detail-body.svelte-47wa5x .img-wrap.svelte-47wa5x>div.svelte-47wa5x{position:absolute;left:10px;bottom:10px;color:#ffffff}.detail-body.svelte-47wa5x .img-wrap img.svelte-47wa5x.svelte-47wa5x{width:100%;height:100%;object-fit:cover}.detail-body.svelte-47wa5x .img-wrap .after.svelte-47wa5x.svelte-47wa5x{color:var(--yellow)}.detail-body.svelte-47wa5x .img-wrap .bg-gradient.svelte-47wa5x.svelte-47wa5x{position:absolute;width:100%;height:100%;left:0;top:0;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)}.detail-body.svelte-47wa5x .after-arrow.svelte-47wa5x.svelte-47wa5x{position:relative;width:16px;height:16px;margin:10px auto}.detail-body.svelte-47wa5x .after-arrow.svelte-47wa5x>div.svelte-47wa5x:first-child{position:absolute;top:-2px;left:4px;width:8px;height:8px;border-bottom:1px solid #000000;border-right:1px solid #000000;transform:rotate(45deg)}.detail-body.svelte-47wa5x .after-arrow.svelte-47wa5x>div.svelte-47wa5x:last-child{position:absolute;top:3px;left:4px;width:8px;height:8px;border-bottom:1px solid #000000;border-right:1px solid #000000;transform:rotate(45deg)}.explanation.svelte-47wa5x.svelte-47wa5x.svelte-47wa5x{margin-top:30px}.explanation.svelte-47wa5x p.svelte-47wa5x.svelte-47wa5x{line-height:1.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.id;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${``}`;
});
export {
  Page as default
};
