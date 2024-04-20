

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/case/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5f06661a.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/api.3f2b77bb.js","_app/immutable/chunks/SlideTab.fdb49231.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CaseList.235a64a5.js","_app/immutable/chunks/navigation.ece7bc12.js","_app/immutable/chunks/singletons.29a41c96.js"];
export const stylesheets = ["_app/immutable/assets/3.5da275ba.css","_app/immutable/assets/SlideTab.241e9394.css","_app/immutable/assets/CaseList.29aa4a05.css"];
export const fonts = [];
