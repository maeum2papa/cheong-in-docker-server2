export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/icon_clear.svg","images/icon_home_n.png","images/icon_home_s.png","images/icon_leak.svg","images/icon_logo.svg","images/icon_mobile.png","images/icon_note.png","images/icon_pipe.svg","images/icon_question_n.png","images/icon_question_s.png","images/icon_repair.svg","images/icon_sms.png","images/icon_telephone_n.png","images/icon_telephone_s.png","images/icon_tool_n.png","images/icon_tool_s.png","images/icon_waterproof.svg","images/icon_window.svg","images/img_main_light.png","images/img_pipe_leak.png","og_image.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.f788fcfb.js","app":"_app/immutable/entry/app.8dbe0ecb.js","imports":["_app/immutable/entry/start.f788fcfb.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/singletons.29a41c96.js","_app/immutable/entry/app.8dbe0ecb.js","_app/immutable/chunks/scheduler.eb0a19f3.js","_app/immutable/chunks/index.df893dc0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/case",
				pattern: /^\/api\/case\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/case/_server.js'))
			},
			{
				id: "/api/faq",
				pattern: /^\/api\/faq\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/faq/_server.js'))
			},
			{
				id: "/case",
				pattern: /^\/case\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/case/[id]",
				pattern: /^\/case\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cs",
				pattern: /^\/cs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
