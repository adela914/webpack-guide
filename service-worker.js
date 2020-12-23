/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2d2a3705d8272df943ce52bcd91ccb8d"
  },
  {
    "url": "advanced/mode-config.html",
    "revision": "19fb008517c3b9a1b447f8c3aaf17e66"
  },
  {
    "url": "advanced/tree-shaking.html",
    "revision": "65c12e77ac003b1685c3050523b552d8"
  },
  {
    "url": "advanced/webpack-merge.html",
    "revision": "8474b9ea14acfc123f258fb6e790e5f1"
  },
  {
    "url": "assets/css/0.styles.811f42bf.css",
    "revision": "61a107a1abc236510cf5809c439129e1"
  },
  {
    "url": "assets/img/css-loading-error.a03a18eb.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "assets/img/diagram.519da03f.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wds.8baa2312.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "assets/img/webpack-bundling.e79747a1.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "assets/img/webpack-entry.90e26197.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "assets/js/10.52b4f4ba.js",
    "revision": "b248dc09bc27378ad9633a67ae8b6689"
  },
  {
    "url": "assets/js/11.bec836e7.js",
    "revision": "eaed075ec56c16ea7931089d4c489f39"
  },
  {
    "url": "assets/js/12.71ccd654.js",
    "revision": "b7c7892aca1cbdda6acac1c9849136a8"
  },
  {
    "url": "assets/js/13.8b99bb23.js",
    "revision": "40dc00ec4fbc20e34d63496f74e92d0a"
  },
  {
    "url": "assets/js/14.ce61a2f7.js",
    "revision": "7e838e95f06cea5ae2ead68498a4c9a4"
  },
  {
    "url": "assets/js/15.64eb4af7.js",
    "revision": "eb6bf333991eff166e195915d17e05c5"
  },
  {
    "url": "assets/js/16.4390d269.js",
    "revision": "6b704f57c5971f6133efbd0c5c06adac"
  },
  {
    "url": "assets/js/17.d7edd4b4.js",
    "revision": "ca4983f04fcc69ee0162ad7e9e050278"
  },
  {
    "url": "assets/js/18.fb071979.js",
    "revision": "39bfa5b92b8293fc1c2ab7be50f60161"
  },
  {
    "url": "assets/js/19.58c91b6a.js",
    "revision": "9103aead56199e3e174b6f88bd513da4"
  },
  {
    "url": "assets/js/2.3b9c6778.js",
    "revision": "9db66c11c33f2f7daa94d7f716f68314"
  },
  {
    "url": "assets/js/20.da50c083.js",
    "revision": "042b768918e7cb10d2513755fc998588"
  },
  {
    "url": "assets/js/21.f59d4cb5.js",
    "revision": "3e8c96b6f243c3eaf92d395e0d3b4e69"
  },
  {
    "url": "assets/js/22.696fd086.js",
    "revision": "94e0ea8b650e38893b069c7e68cf2bd2"
  },
  {
    "url": "assets/js/23.58ec73fd.js",
    "revision": "48ace724aeef6bc59cbad7a2406b5fa0"
  },
  {
    "url": "assets/js/24.9819a0f7.js",
    "revision": "9ad5f3ded276f331d1d796caa787db97"
  },
  {
    "url": "assets/js/25.bcf686cc.js",
    "revision": "0d5561a4b6739876dc404c7240cd7b96"
  },
  {
    "url": "assets/js/26.42ebf254.js",
    "revision": "da7cbeebd82b40f35527f9a29f4159af"
  },
  {
    "url": "assets/js/27.5eae9608.js",
    "revision": "b35f4b7a92f18a5047848a3c85ef48e0"
  },
  {
    "url": "assets/js/28.9d63fc9e.js",
    "revision": "54aeb7d10d362ecb23965873d2d2f41e"
  },
  {
    "url": "assets/js/29.9960dc67.js",
    "revision": "6219f21e4729ba9a4a0870ce7f26b18d"
  },
  {
    "url": "assets/js/3.88a7ba97.js",
    "revision": "f4c7fc83c45fb2c069b4a0535b3e4aad"
  },
  {
    "url": "assets/js/30.ccad4a10.js",
    "revision": "cef6823570c0f5813601033ce8d6ae93"
  },
  {
    "url": "assets/js/31.774efc4a.js",
    "revision": "93ea7b16bf309729efedf327d1aa8cbb"
  },
  {
    "url": "assets/js/32.7a2ad726.js",
    "revision": "0ad35a3b512a3fbbe8968565486b953f"
  },
  {
    "url": "assets/js/33.9a17f870.js",
    "revision": "169357919c41b5752b5274da8f6a2552"
  },
  {
    "url": "assets/js/34.74125e51.js",
    "revision": "231441bd620c2b4fa772beda47eda45b"
  },
  {
    "url": "assets/js/35.a3cedc3c.js",
    "revision": "6ab2fd5785d22e0d767bd2d636cc0c8a"
  },
  {
    "url": "assets/js/36.a39021b6.js",
    "revision": "79a0f16c69f31b299818874ea9a0e79c"
  },
  {
    "url": "assets/js/37.92412f18.js",
    "revision": "d5700b21b8daa313a187ed0fe1782dd7"
  },
  {
    "url": "assets/js/38.1f71ea94.js",
    "revision": "cfddc8026ae4bb50c9356e415f8dd296"
  },
  {
    "url": "assets/js/39.43403a82.js",
    "revision": "e593e8102b2c77eee931d612afda3778"
  },
  {
    "url": "assets/js/4.3571b5ca.js",
    "revision": "11c09a4b0d9db0ef64c8000ce212c5d6"
  },
  {
    "url": "assets/js/40.79d01bc6.js",
    "revision": "ae1ad5837370236e87f6435429e91d86"
  },
  {
    "url": "assets/js/41.95610ad1.js",
    "revision": "898b5c2ee66282d2dd70e727e98702ff"
  },
  {
    "url": "assets/js/5.a0b69039.js",
    "revision": "8e80ee545dedd65c15eef430ff188877"
  },
  {
    "url": "assets/js/6.eb3e824f.js",
    "revision": "15601ffe2e34de0ce91a25208fdf00d0"
  },
  {
    "url": "assets/js/7.abbe41d2.js",
    "revision": "fffcf6299ba165c4084684089853f207"
  },
  {
    "url": "assets/js/8.e12292f6.js",
    "revision": "c81633da5b669180e992411b37a1d895"
  },
  {
    "url": "assets/js/9.90c0d9d7.js",
    "revision": "0930f7479647696bf65dadeaf9b7c233"
  },
  {
    "url": "assets/js/app.653a0002.js",
    "revision": "73a944af1f42ec23e475f32a4acbc594"
  },
  {
    "url": "backup/flow.html",
    "revision": "b8ca510ecd5a914486cf5b135f2fca21"
  },
  {
    "url": "build/node-npm.html",
    "revision": "d6849fbc3763b2a0d548d0ca23397489"
  },
  {
    "url": "build/npm-custom-commands.html",
    "revision": "1ab61cd07e54a8c4911677213da2c248"
  },
  {
    "url": "build/npm-module-install.html",
    "revision": "79d5c225e8b65c8ff92681a06a220ff7"
  },
  {
    "url": "build/npm-package-lock.html",
    "revision": "7d0a1444d19cdc6fb84add4e5192ab59"
  },
  {
    "url": "concepts/entry.html",
    "revision": "3780785736620e7ca02fc47bd0bda89a"
  },
  {
    "url": "concepts/loader.html",
    "revision": "324e7e57f95c50d7f57907a442f678ef"
  },
  {
    "url": "concepts/output.html",
    "revision": "9e664456dd72da550091034c9da35ccb"
  },
  {
    "url": "concepts/overview.html",
    "revision": "4ab8cf61d304786e52574ba47bb11af9"
  },
  {
    "url": "concepts/plugin.html",
    "revision": "6f6859f0b04b86fcf7d897f16b54aa82"
  },
  {
    "url": "concepts/wrapup.html",
    "revision": "8f731d65e4af8518d02eca4976c24630"
  },
  {
    "url": "contribution.html",
    "revision": "f2ba99653c7abe7f4b359eec48b887e8"
  },
  {
    "url": "devtools/hot-module-replacement.html",
    "revision": "62d0371ffe94838b6188f289b8c741bd"
  },
  {
    "url": "devtools/source-map.html",
    "revision": "ecce3b1675933292a37d9e321dcfd53c"
  },
  {
    "url": "devtools/webpack-dev-server.html",
    "revision": "0b5ca9e890dc52c6884402f38a0d1734"
  },
  {
    "url": "faq.html",
    "revision": "1d1494b2b5deaf9a5548b3a5049cef38"
  },
  {
    "url": "from-scratch.html",
    "revision": "e7090f3a3ececbd52cacf26703696bd8"
  },
  {
    "url": "getting-started.html",
    "revision": "13285c0628bc04bc02eba3d858886e72"
  },
  {
    "url": "guide.html",
    "revision": "c50ce7ed26daa264a7a7a51cbd416a17"
  },
  {
    "url": "images/css-loading-error.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "images/diagram.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "images/favicon.png",
    "revision": "9144652d53e2cb1f58b31434be1754dc"
  },
  {
    "url": "images/icons/120.png",
    "revision": "21d61a59a8b81e2f2b7c1c4498931403"
  },
  {
    "url": "images/icons/128.png",
    "revision": "52282522bbeedc203932501bae719d3d"
  },
  {
    "url": "images/icons/144.png",
    "revision": "c8e2ba305773c351de6ceb6f541fcda8"
  },
  {
    "url": "images/icons/152.png",
    "revision": "7020b01c65552daefc6a040e98799c3b"
  },
  {
    "url": "images/icons/180.png",
    "revision": "f01084a321ad9222b05b58e70f3a9169"
  },
  {
    "url": "images/icons/192.png",
    "revision": "5b857fb78e5c61ba0a654b8c84114e97"
  },
  {
    "url": "images/icons/384.png",
    "revision": "b5f35dedd751624d3cd125f4131e883e"
  },
  {
    "url": "images/icons/512.png",
    "revision": "e8c8cd801fd9cd4348e0fdd70aedaa07"
  },
  {
    "url": "images/icons/72.png",
    "revision": "6d6096aeb8339449afd43567dec8bcdb"
  },
  {
    "url": "images/icons/96.png",
    "revision": "26887d961394795c8f14b086148c0e61"
  },
  {
    "url": "images/patron-button.png",
    "revision": "8b4321f782e84764e556af3dee32a131"
  },
  {
    "url": "images/wds.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "images/webpack-bundling.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "images/webpack-entry.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "index.html",
    "revision": "493117e9f0450e3ae5872ccb2f4e477e"
  },
  {
    "url": "logo.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
  },
  {
    "url": "logo.svg",
    "revision": "96621d3c37d96ad3bf792fcc848d912f"
  },
  {
    "url": "motivation/fe-ecosystem.html",
    "revision": "75a4c2a84b9af9b24ed883fa538d709b"
  },
  {
    "url": "motivation/problem-to-solve.html",
    "revision": "c622377f8fe5c9ce94ca281e30db7609"
  },
  {
    "url": "motivation/why-webpack.html",
    "revision": "f4e75ec3ddd9d3a8392ecc3f853a182d"
  },
  {
    "url": "roadmap.html",
    "revision": "8e391360c31f229e1e8010647c61f097"
  },
  {
    "url": "tutorials/code-splitting.html",
    "revision": "774ba2d786276eb860062aa78ec18866"
  },
  {
    "url": "tutorials/plugins.html",
    "revision": "b34ff97ddf70881bdb68a4829f621c70"
  },
  {
    "url": "tutorials/webpack-dev-server.html",
    "revision": "e2e23135b8edc8c5890fb616876b7720"
  },
  {
    "url": "webpack/module-bundler.html",
    "revision": "b5afc66519575acce572a8ebf9c3bdf8"
  },
  {
    "url": "webpack/modules.html",
    "revision": "9a69dbfcd3f5445edca482da3b608b94"
  },
  {
    "url": "webpack/web-task-manager.html",
    "revision": "21955a552a5493eac3e4f9b8c37893c1"
  },
  {
    "url": "webpack/what-is-webpack.html",
    "revision": "7f4519289bcdc476cbd88a9d5b31ddc6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
