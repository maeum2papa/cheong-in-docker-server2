

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2843425a.js","_app/immutable/chunks/scheduler.605bd5b0.js","_app/immutable/chunks/index.aaf32209.js","_app/immutable/chunks/stores.15ee8764.js","_app/immutable/chunks/singletons.3cfb80d4.js","_app/immutable/chunks/index.6b17dd27.js"];
export const stylesheets = [];
export const fonts = [];
