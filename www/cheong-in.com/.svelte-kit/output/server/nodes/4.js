

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/case/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.712ef76e.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/navigation.ece7bc12.js","_app/immutable/chunks/singletons.29a41c96.js","_app/immutable/chunks/api.3f2b77bb.js","_app/immutable/chunks/stores.d8fbdbab.js"];
export const stylesheets = ["_app/immutable/assets/4.61ad464f.css"];
export const fonts = [];
