"use strict";var precacheConfig=[["/Trump-Twitter-Tracker-Web/index.html","35c47d4ff29440f95764f383e4e8e44e"],["/Trump-Twitter-Tracker-Web/static/css/main.423c347f.css","44b6456dd37ec6a118d684a33ef0b46d"],["/Trump-Twitter-Tracker-Web/static/js/main.e2a779a3.js","be6756796049b93d5fe378d361724dcf"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Bold.39b2c303.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Bold.dc81817d.woff","dc81817def276b4f21395f7ea5e88dcd"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Bold.e31fcf18.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Bold.ecdd509c.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Light.3b813c2a.woff","3b813c2ae0d04909a33a18d792912ee7"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Light.46e48ce0.ttf","46e48ce0628835f68a7369d0254e4283"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Light.69f8a061.woff2","69f8a0617ac472f78e45841323a3df9e"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Light.a990f611.eot","a990f611f2305dc12965f186c2ef2690"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Medium.4d9f3f9e.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Medium.574fd0b5.woff2","574fd0b50367f886d359e8264938fc37"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Medium.894a2ede.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Medium.fc78759e.woff","fc78759e93a6cac50458610e3d9d63a0"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Regular.2751ee43.woff2","2751ee43015f9884c3642f103b7f70c9"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Regular.30799efa.eot","30799efa5bf74129468ad4e257551dc3"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Regular.ba3dcd89.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Regular.df7b648c.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Thin.7500519d.woff","7500519de3d82e33d1587f8042e2afcb"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Thin.94998475.ttf","94998475f6aea65f558494802416c1cf"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Thin.954bbdeb.woff2","954bbdeb86483e4ffea00c4591530ece"],["/Trump-Twitter-Tracker-Web/static/media/Roboto-Thin.dfe56a87.eot","dfe56a876d0282555d1e2458e278060f"],["/Trump-Twitter-Tracker-Web/static/media/arrow_left.270f72df.svg","270f72df47e036d9cfa11f91f0a94a60"],["/Trump-Twitter-Tracker-Web/static/media/arrow_right.d9ccc77c.svg","d9ccc77c8240ad0dc2724cf333c0479e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var c="/Trump-Twitter-Tracker-Web/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});