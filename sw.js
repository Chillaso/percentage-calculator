if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>n(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(o(...e),r)))}}define(["./workbox-387ab1b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/icons/icon_192.png",revision:"a80ffffb8d3a555b25a0f19a0a9878f1"},{url:"assets/icons/icon_24.png",revision:"04fa5b0f5827d885b678f0d131406aab"},{url:"assets/icons/icon_48.png",revision:"3dbd388868265c8498acfe676ef27811"},{url:"assets/icons/icon_512.png",revision:"414aacb61ad294e75f267554db7e9368"},{url:"assets/screenshots/screen.png",revision:"808ac8889e4c17f3f83fd9235f1aa28d"},{url:"code/index.c492f108.css",revision:null},{url:"code/index.c50f653a.js",revision:null},{url:"index.html",revision:"b4536f7d44f6884641e2500fd5f02aa9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
