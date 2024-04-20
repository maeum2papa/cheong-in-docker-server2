

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b1d8970c.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js","_app/immutable/chunks/stores.d8fbdbab.js","_app/immutable/chunks/singletons.29a41c96.js"];
export const stylesheets = [];
export const fonts = [];
