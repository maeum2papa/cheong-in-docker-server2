export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e26e72bd.js","app":"_app/immutable/entry/app.2999cc9e.js","imports":["_app/immutable/entry/start.e26e72bd.js","_app/immutable/chunks/scheduler.605bd5b0.js","_app/immutable/chunks/singletons.3cfb80d4.js","_app/immutable/chunks/index.6b17dd27.js","_app/immutable/entry/app.2999cc9e.js","_app/immutable/chunks/scheduler.605bd5b0.js","_app/immutable/chunks/index.aaf32209.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/api/auth",
				pattern: /^\/api\/auth\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/auth/_server.js'))
			},
			{
				id: "/api/case",
				pattern: /^\/api\/case\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/case/_server.js'))
			},
			{
				id: "/api/case/add",
				pattern: /^\/api\/case\/add\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/case/add/_server.js'))
			},
			{
				id: "/api/case/delete",
				pattern: /^\/api\/case\/delete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/case/delete/_server.js'))
			},
			{
				id: "/api/case/edit",
				pattern: /^\/api\/case\/edit\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/case/edit/_server.js'))
			},
			{
				id: "/api/faq",
				pattern: /^\/api\/faq\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/faq/_server.js'))
			},
			{
				id: "/api/faq/add",
				pattern: /^\/api\/faq\/add\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/faq/add/_server.js'))
			},
			{
				id: "/api/faq/delete",
				pattern: /^\/api\/faq\/delete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/faq/delete/_server.js'))
			},
			{
				id: "/api/faq/edit",
				pattern: /^\/api\/faq\/edit\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/faq/edit/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/logout",
				pattern: /^\/api\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/logout/_server.js'))
			},
			{
				id: "/case",
				pattern: /^\/case\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/case/add",
				pattern: /^\/case\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/case/edit/[id]",
				pattern: /^\/case\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/case/[id]",
				pattern: /^\/case\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/faq/add",
				pattern: /^\/faq\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/faq/edit/[id]",
				pattern: /^\/faq\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/faq/[id]",
				pattern: /^\/faq\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set(["/"]);
