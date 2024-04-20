import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/encrypt.js";
import { c as category } from "../../../../chunks/format.js";
import { H as Header } from "../../../../chunks/Header.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let faq = "";
  $page.params.id;
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6"><div class="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0"><div><div><div class="text-right"><button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-svelte-h="svelte-1crzys3">목록</button> <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-svelte-h="svelte-j9yb6t">수정</button> <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-svelte-h="svelte-dje05q">삭제</button></div> <p class="text-base font-semibold leading-7 text-indigo-600">${escape(category(faq.sort))}</p> <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${escape(faq.question)}</h1></div></div> <div class="max-w-xl text-base leading-7 text-gray-700 mt-6"><p>${escape(faq.answer)}</p></div></div></div>`;
});
export {
  Page as default
};
