

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.08b45ab8.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/api.3f2b77bb.js","_app/immutable/chunks/SlideTab.fdb49231.js"];
export const stylesheets = ["_app/immutable/assets/6.73faa1cd.css","_app/immutable/assets/SlideTab.241e9394.css"];
export const fonts = [];
