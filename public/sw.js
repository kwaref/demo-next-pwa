if (!self.define) {
	let e,
		s = {}
	const n = (n, a) => (
		(n = new URL(n + '.js', a).href),
		s[n] ||
			new Promise(s => {
				if ('document' in self) {
					const e = document.createElement('script')
					;(e.src = n), (e.onload = s), document.head.appendChild(e)
				} else (e = n), importScripts(n), s()
			}).then(() => {
				let e = s[n]
				if (!e) throw new Error(`Module ${n} didn’t register its module`)
				return e
			})
	)
	self.define = (a, i) => {
		const t =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href
		if (s[t]) return
		let c = {}
		const r = e => n(e, t),
			o = { module: { uri: t }, exports: c, require: r }
		s[t] = Promise.all(a.map(e => o[e] || r(e))).then(e => (i(...e), c))
	}
}
define(['./workbox-5f5b08d6'], function (e) {
	'use strict'
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/static/chunks/framework-7dc8a65f4a0cda33.js',
					revision: '7dc8a65f4a0cda33',
				},
				{
					url: '/_next/static/chunks/main-335397e7a2a81641.js',
					revision: '335397e7a2a81641',
				},
				{
					url: '/_next/static/chunks/pages/_app-54772c170987db80.js',
					revision: '54772c170987db80',
				},
				{
					url: '/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js',
					revision: 'a4ba2246ff8fb532',
				},
				{
					url: '/_next/static/chunks/pages/index-2052149771c3e91d.js',
					revision: '2052149771c3e91d',
				},
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{
					url: '/_next/static/chunks/webpack-69bfa6990bb9e155.js',
					revision: '69bfa6990bb9e155',
				},
				{
					url: '/_next/static/css/2a634b51a93ec036.css',
					revision: '2a634b51a93ec036',
				},
				{
					url: '/_next/static/css/ab44ce7add5c3d11.css',
					revision: 'ab44ce7add5c3d11',
				},
				{
					url: '/_next/static/eKJW4iO3spDNreFJiyxBl/_buildManifest.js',
					revision: '832135130f6f2a8d960c5d24580a0feb',
				},
				{
					url: '/_next/static/eKJW4iO3spDNreFJiyxBl/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{ url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
				{
					url: '/icon-192x192.png',
					revision: '613e0bed9a2474ffa9a95542c28bf877',
				},
				{
					url: '/icon-256x256.png',
					revision: '6f775490ade60968dee2d52bcfc5e8d0',
				},
				{
					url: '/icon-384x384.png',
					revision: 'e5de11689a5e4784fab7455ce1487c24',
				},
				{
					url: '/icon-512x512.png',
					revision: '1c147a130051fb75ddaf66ddbc930894',
				},
				{ url: '/manifest.json', revision: '259066e2f8142e6583712acb4ff2f5c4' },
				{ url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
			],
			{ ignoreURLParametersMatching: [] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: n,
							state: a,
						}) =>
							s && 'opaqueredirect' === s.type
								? new Response(s.body, {
										status: 200,
										statusText: 'OK',
										headers: s.headers,
								  })
								: s,
					},
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				const s = e.pathname
				return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				return !e.pathname.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			'GET',
		)
})
