

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/case/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.665d1452.js","_app/immutable/chunks/scheduler.605bd5b0.js","_app/immutable/chunks/index.aaf32209.js","_app/immutable/chunks/stores.15ee8764.js","_app/immutable/chunks/singletons.3cfb80d4.js","_app/immutable/chunks/index.6b17dd27.js","_app/immutable/chunks/api.f9397e1c.js","_app/immutable/chunks/Header.59b83916.js"];
export const stylesheets = [];
export const fonts = [];
