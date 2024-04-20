import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { c as cAlert } from "../../../chunks/store.js";
import "../../../chunks/encrypt.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cAlert;
  $$unsubscribe_cAlert = subscribe(cAlert, (value) => value);
  let formData = { email: "" };
  let inputs = {};
  $$unsubscribe_cAlert();
  return `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-59exb2"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">청인설비 홈페이지 관리</h2></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="#" method="POST"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900" data-svelte-h="svelte-1m8q7up">아이디</label> <div class="mt-2"><input id="email" name="text" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"${add_attribute("value", formData.email, 0)}${add_attribute("this", inputs.email, 0)}></div></div> <div><div class="flex items-center justify-between" data-svelte-h="svelte-2sy7ww"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">비밀번호</label></div> <div class="mt-2"><input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"${add_attribute("value", formData.password, 0)}${add_attribute("this", inputs.password, 0)}></div></div> <div><button type="button" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-svelte-h="svelte-ahufcl">로그인</button></div></form></div> </div>`;
});
export {
  Page as default
};
