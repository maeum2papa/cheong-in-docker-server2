import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/encrypt.js";
import { d as dateFormat } from "../../../chunks/format.js";
import { L as Loading } from "../../../chunks/store.js";
import { H as Header } from "../../../chunks/Header.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_Loading;
  $$unsubscribe_Loading = subscribe(Loading, (value) => value);
  let caseList = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6"><div class="text-right"><button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-svelte-h="svelte-1igd22k">시공사례 등록</button></div> <ul role="list" class="divide-y divide-gray-100 border-t border-gray-200 mt-2">${each(caseList, (item, index) => {
      return `<li class="flex justify-between gap-x-6 py-5 cursor-pointer"><div class="flex gap-x-4"><div class="min-w-0 flex-auto"><p class="text-sm font-semibold leading-6 text-gray-900">${escape(index + 1)}. ${escape(item.title)}</p> <p class="mt-1 truncate text-xs leading-5 text-gray-500 ps-4">${escape(dateFormat(item.insdt))}</p> </div></div> </li>`;
    })}</ul></div> ${``}`;
  } while (!$$settled);
  $$unsubscribe_Loading();
  return $$rendered;
});
export {
  Page as default
};
