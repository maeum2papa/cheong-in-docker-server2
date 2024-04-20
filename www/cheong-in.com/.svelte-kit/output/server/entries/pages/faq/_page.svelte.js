import { c as create_ssr_component, e as each, d as escape, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { p as postApi, S as SlideTab } from "../../../chunks/SlideTab.js";
const Accordion_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.accordion.svelte-1ivqc0q.svelte-1ivqc0q{padding:16px 8px;border-bottom:1px solid var(--border-color-gray);font-size:var(--font-size-small-small);display:flex;align-content:center;justify-content:space-between}div.accordion.svelte-1ivqc0q>span.svelte-1ivqc0q{width:8px;height:8px;border-top:1px solid var(--font-gray);border-right:1px solid var(--font-gray);display:inline-block;transform:rotate(135deg);top:13px;right:20px}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<div class="accordion svelte-1ivqc0q"><div class="header"><div class="text">${slots.head ? slots.head({}) : ``}</div></div> <span class="svelte-1ivqc0q"></span></div> ${open ? `<div class="details">${slots.details ? slots.details({}) : ``}</div>` : ``}`;
});
const Pagination_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pagination.svelte-yvdzjo{text-align:center;margin-top:20px}button.svelte-yvdzjo{background:none;color:#000;min-width:0;font-weight:400;padding:10px}button.active.svelte-yvdzjo{color:var(--primary);font-weight:800}button.svelte-yvdzjo:active{background:none}button.svelte-yvdzjo:disabled{color:var(--font-gray)}",
  map: null
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let { handlePageClick } = $$props;
  let { handlePrev } = $$props;
  let { handleNext } = $$props;
  let { currentPage } = $$props;
  let { totalDocsCount } = $$props;
  let { listLimit: listLimit2 } = $$props;
  let { pageCount: pageCount2 } = $$props;
  let pageNum = [];
  let pageGroup = Math.ceil(currentPage / pageCount2) - 1;
  let start = pageGroup * pageCount2 + 1;
  let end = start + pageCount2 - 1;
  end = end > totalPages ? totalPages : end;
  for (let i = start; i < end + 1; i++) {
    pageNum.push(i);
  }
  if ($$props.handlePageClick === void 0 && $$bindings.handlePageClick && handlePageClick !== void 0)
    $$bindings.handlePageClick(handlePageClick);
  if ($$props.handlePrev === void 0 && $$bindings.handlePrev && handlePrev !== void 0)
    $$bindings.handlePrev(handlePrev);
  if ($$props.handleNext === void 0 && $$bindings.handleNext && handleNext !== void 0)
    $$bindings.handleNext(handleNext);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalDocsCount === void 0 && $$bindings.totalDocsCount && totalDocsCount !== void 0)
    $$bindings.totalDocsCount(totalDocsCount);
  if ($$props.listLimit === void 0 && $$bindings.listLimit && listLimit2 !== void 0)
    $$bindings.listLimit(listLimit2);
  if ($$props.pageCount === void 0 && $$bindings.pageCount && pageCount2 !== void 0)
    $$bindings.pageCount(pageCount2);
  $$result.css.add(css$1);
  totalPages = Math.ceil(totalDocsCount / listLimit2);
  {
    (() => {
      let newPageNum = [];
      pageGroup = Math.ceil(currentPage / pageCount2) - 1;
      start = pageGroup * pageCount2 + 1;
      end = start + pageCount2 - 1;
      end = end > totalPages ? totalPages : end;
      for (let i = start; i < end + 1; i++) {
        newPageNum.push(i);
      }
      pageNum = newPageNum;
    })();
  }
  return `<div class="pagination svelte-yvdzjo"><div><button ${currentPage === 1 ? "disabled" : ""} class="svelte-yvdzjo">이전</button> ${each(pageNum, (item) => {
    return `<button class="${escape(null_to_empty(currentPage == item ? "active" : ""), true) + " svelte-yvdzjo"}">${escape(item)}</button>`;
  })} <button ${currentPage === totalPages ? "disabled" : ""} class="svelte-yvdzjo">다음</button></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".faq.svelte-1ubosre.svelte-1ubosre{margin-top:20px}.faq-header.svelte-1ubosre.svelte-1ubosre{padding-left:20px}.faq-body.svelte-1ubosre.svelte-1ubosre{margin:20px;border-top:1px solid var(--border-color-gray)}.faq-body.svelte-1ubosre .details.svelte-1ubosre{background-color:var(--background-gray);border-bottom:1px solid var(--border-color-gray)}.faq-body.svelte-1ubosre .inner.svelte-1ubosre{padding:24px 16px;line-height:1.25em}h3.svelte-1ubosre.svelte-1ubosre{font-size:var(--font-size-small);font-weight:700}",
  map: null
};
let listLimit = 10;
let pageCount = 5;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let faqList = [];
  let isActive = 0;
  let currentPage = 1;
  let totalDocsCount;
  const requestData = { page: currentPage, limit: listLimit };
  const handleTab = async (index) => {
    isActive = index;
    requestData.sort = parseInt(isActive);
    await handleGetFaq();
  };
  const handleGetFaq = async () => {
    requestData.page = currentPage;
    requestData.sort = parseInt(isActive);
    const res = await postApi({ path: "/api/faq", data: requestData });
    faqList = res.data;
    totalDocsCount = res.totalDocs;
  };
  const handlePageClick = async (item) => {
    currentPage = item;
    await handleGetFaq();
  };
  const handlePrev = async () => {
    currentPage -= 1;
    await handleGetFaq();
  };
  const handleNext = async () => {
    currentPage += 1;
    await handleGetFaq();
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="faq svelte-1ubosre"><div class="faq-header svelte-1ubosre"><h3 class="svelte-1ubosre" data-svelte-h="svelte-19zgi4q">자주하는 질문</h3> ${validate_component(SlideTab, "SlideTab").$$render($$result, { handleTab, isActive }, {}, {})}</div> <div class="faq-body svelte-1ubosre">${each(faqList, (item) => {
      return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<div slot="details" class="details svelte-1ubosre"><p class="inner svelte-1ubosre">${escape(item.answer)}</p> </div>`;
        },
        head: () => {
          return `<span slot="head">${escape(item.question)}</span>`;
        }
      })}`;
    })}</div> ${totalDocsCount ? `${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        handlePageClick,
        handlePrev,
        handleNext,
        totalDocsCount,
        pageCount,
        listLimit,
        currentPage
      },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
