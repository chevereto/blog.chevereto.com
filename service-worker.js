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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69bfba7c6ec0a29058bf73f78e57b8c6"
  },
  {
    "url": "assets/css/0.styles.3f6b9ca3.css",
    "revision": "61a62e1b4aabfd8d45e6812f0a8a51f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4f62ee2.js",
    "revision": "32f2b8f5cfad74490ff7468438b2bf8e"
  },
  {
    "url": "assets/js/11.56e1b153.js",
    "revision": "482c27f79ed22cc06aab33a05934393a"
  },
  {
    "url": "assets/js/12.0343677f.js",
    "revision": "16c9ff8a4e0b41448f0d2e5f5d33ddaf"
  },
  {
    "url": "assets/js/13.bc60f4eb.js",
    "revision": "6087bb16ff2dc110ab06fb73b11c83f2"
  },
  {
    "url": "assets/js/14.b5a7803d.js",
    "revision": "dda0e1320bc8a2384c75ccb367dc5a50"
  },
  {
    "url": "assets/js/15.0145e0d1.js",
    "revision": "04df3c1ad17651e811b566cfa43bbaf3"
  },
  {
    "url": "assets/js/16.3a5cca17.js",
    "revision": "af5eb541c5d2172e29bf723d00cb583f"
  },
  {
    "url": "assets/js/17.973c3587.js",
    "revision": "7eca75dc7e329f357cd41fc5f0754f74"
  },
  {
    "url": "assets/js/18.5da26090.js",
    "revision": "ae06fbdf0fd972e9348a06d14c24c800"
  },
  {
    "url": "assets/js/19.cf3bb6da.js",
    "revision": "ce58f842518b3b21fc792a692138896e"
  },
  {
    "url": "assets/js/20.274a621c.js",
    "revision": "1d87433f5d9759ef3efdb03aac57c274"
  },
  {
    "url": "assets/js/21.7762cb1b.js",
    "revision": "8a905c99bd1cf727c598e602f48026ce"
  },
  {
    "url": "assets/js/22.d821dabe.js",
    "revision": "c675eaadd4eaa7e8cefd39ae524d025c"
  },
  {
    "url": "assets/js/23.0b16790c.js",
    "revision": "23c36154acb6aa5ee74114693c742a2c"
  },
  {
    "url": "assets/js/24.efd8abca.js",
    "revision": "efc8368f645546a7c38b781f99cf04e1"
  },
  {
    "url": "assets/js/25.9b323ba9.js",
    "revision": "582849dabd1d5058b0b7c4a4d0fad84f"
  },
  {
    "url": "assets/js/26.e9a480e6.js",
    "revision": "61ddb7612a072b276b71a480d1c768ba"
  },
  {
    "url": "assets/js/27.6785f290.js",
    "revision": "78ef96bf532821c4a01a5ba074bf4912"
  },
  {
    "url": "assets/js/28.4a99660f.js",
    "revision": "6893740877e111a3a453f5089ffaab2a"
  },
  {
    "url": "assets/js/29.cc5b7468.js",
    "revision": "3aa81d4f9ad247e7d386c6f78d9455d1"
  },
  {
    "url": "assets/js/3.9cf7e98d.js",
    "revision": "ab6eff97622570a97a55023d140cf385"
  },
  {
    "url": "assets/js/30.1c9446b4.js",
    "revision": "78b7f2ac50f91986dee22fb79f0cfbc0"
  },
  {
    "url": "assets/js/31.f5d8ba06.js",
    "revision": "c3a88376352455cf1a9072961b3fefb1"
  },
  {
    "url": "assets/js/32.9c9ec999.js",
    "revision": "783863daae2c204c125522bbc909ffc8"
  },
  {
    "url": "assets/js/33.cc984c28.js",
    "revision": "34c5a7974163dd480f599b949f30606e"
  },
  {
    "url": "assets/js/4.60fa105b.js",
    "revision": "7c471817ebf4a5a292a71368de74c19e"
  },
  {
    "url": "assets/js/5.989927f3.js",
    "revision": "75cb7c76f56c6bd51e0a78a61fc85d2e"
  },
  {
    "url": "assets/js/6.9055d822.js",
    "revision": "cf16b8c453c73d4a46c3bfb554ac5213"
  },
  {
    "url": "assets/js/7.5dab4856.js",
    "revision": "1dd825dc64f94ba54db8a424006a0eb0"
  },
  {
    "url": "assets/js/8.6a8676fb.js",
    "revision": "5406c55de4954ab6a31a7f67c015646a"
  },
  {
    "url": "assets/js/9.81f7624f.js",
    "revision": "82f7e1de6bf811dd9ffd4122746e55ed"
  },
  {
    "url": "assets/js/app.0f0dcd73.js",
    "revision": "27e3853dbf7f069d6b0d617055389f08"
  },
  {
    "url": "assets/js/vuejs-paginate.0a28ebc1.js",
    "revision": "00218330226e545c74fcf5b024e1d793"
  },
  {
    "url": "avatars/rodolfo.jpg",
    "revision": "35bd164554a594eb53d8d5181ee1cba7"
  },
  {
    "url": "chevereto-13th-anniversary/index.html",
    "revision": "13a0bb6cf35fff6b870c34a07666d728"
  },
  {
    "url": "chevereto-14th-anniversary/index.html",
    "revision": "48dfe6295bdc44ed53e4663db4b75044"
  },
  {
    "url": "chevereto-3-long-term-support/index.html",
    "revision": "bd74ae16903dfe49c1037c64d50ebbd9"
  },
  {
    "url": "chevereto-bulk-importing/index.html",
    "revision": "b2f8c6737bfae132765b396f0a23880f"
  },
  {
    "url": "chevereto-macanudo/index.html",
    "revision": "96c5b8363ac590fe9a14f0eb01398bb0"
  },
  {
    "url": "chevereto-v4-faq/index.html",
    "revision": "036e338d155899214d8f6f249e4536fc"
  },
  {
    "url": "chevereto-vps/index.html",
    "revision": "657df470512a6b54701ef342557a2e59"
  },
  {
    "url": "hello-chevereto-v4/index.html",
    "revision": "0062a4c0a3543b4d94f05bf10c53a9fb"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "50215b42db00f1b17c3631a19d9707e4"
  },
  {
    "url": "introducing-new-installer-with-cpanel-support/index.html",
    "revision": "e847f54546f6bc25a6b6a82eb69ba158"
  },
  {
    "url": "introducing-upload-plugin/index.html",
    "revision": "0c07675285a4e23b6a49b02280d90397"
  },
  {
    "url": "logo.png",
    "revision": "2179105dc8009814831fae6afa9c1024"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "new-documentation-for-chevereto/index.html",
    "revision": "fc5415a389cd944760127b3811f9e63c"
  },
  {
    "url": "new-installer/index.html",
    "revision": "7ca013b8405a5f0946d9c20301f52e80"
  },
  {
    "url": "page/2/index.html",
    "revision": "54aa299c5bde154e2628a9edf9fd87d8"
  },
  {
    "url": "page/3/index.html",
    "revision": "baf02ef02df12799e8fc9da99d05bcf1"
  },
  {
    "url": "page/4/index.html",
    "revision": "d6057565d4cdeb81192d1a22e3799d2c"
  },
  {
    "url": "photos/2017/installer-screen.jpg",
    "revision": "5b0e38ce43458b8368b5aef74260d3ae"
  },
  {
    "url": "photos/2017/pup_discourse.jpg",
    "revision": "b4e47007c166d0386027de0397ca94e6"
  },
  {
    "url": "photos/2017/pup_display.png",
    "revision": "1c7d5cb651c855dc75f14a410033830d"
  },
  {
    "url": "photos/2017/pup_palette_red-1.jpg",
    "revision": "f94c739f5e4a2c19eaa0c2b8fe787ac8"
  },
  {
    "url": "photos/2019/cpanel-screen.png",
    "revision": "fb71f21e6ac4ba7fbea6952699ecefcb"
  },
  {
    "url": "photos/2019/installer-done.png",
    "revision": "67989425217782f8bddfba18725aa685"
  },
  {
    "url": "photos/2019/installer-screen-v2.png",
    "revision": "4c3821f84b5af9f0e617b6ea9c691bc9"
  },
  {
    "url": "photos/2020/3.15.jpg",
    "revision": "62b440275d70a0bf69205ebb7f57b31b"
  },
  {
    "url": "photos/2021/breno-machado-in9-n0JwgZ0-unsplash.jpg",
    "revision": "32a4d911317038fd1ce90d30fcb8d72d"
  },
  {
    "url": "photos/2021/clouds-4040132_1280.jpg",
    "revision": "e4b27d522541f7ca1e06d52579e46e05"
  },
  {
    "url": "photos/2021/faq-daniella-alscher.png",
    "revision": "2884907f7c3a52eb9e98d8165ce2e9ab"
  },
  {
    "url": "photos/2021/laptop-3173613.png",
    "revision": "b097f891bdb91f4ffcaefa5fb2fbef72"
  },
  {
    "url": "photos/2021/moais.jpg",
    "revision": "7d592a39bef63c28b681153470cadc9c"
  },
  {
    "url": "photos/2021/pexels-faik-akmd-1025469.jpg",
    "revision": "fede2482c59ba362749e1c14e3077bde"
  },
  {
    "url": "photos/2021/pexels-fiona-art-5186869.jpg",
    "revision": "fbd44550bd75d646b24787d65ca117e4"
  },
  {
    "url": "photos/2021/pexels-john-cahil-rom-2170473.jpg",
    "revision": "cdb73e59ff201c4775d517d14fc3d7c0"
  },
  {
    "url": "photos/2021/sean-sinclair-C_NJKfnTR5A-unsplash.jpg",
    "revision": "c297ac4b2c0f9fc1c82a5fecfba23ff9"
  },
  {
    "url": "photos/2021/sergei-akulich-xdj_w3w6dMU-unsplash.jpg",
    "revision": "92aade6022ef1dcf919f468fd9a6173d"
  },
  {
    "url": "photos/2021/vps.jpeg",
    "revision": "965fcce012c061e245d45ecd8ded7896"
  },
  {
    "url": "photos/2022/david-marcu-cuicas-romania.jpg",
    "revision": "0bac87887709ad8c75794782acdb4415"
  },
  {
    "url": "photos/2022/kostiantyn-stupak-190340.jpg",
    "revision": "a16bc66618979b78c28bf2ddaa40c539"
  },
  {
    "url": "photos/2022/lucas-benjamin.jpg",
    "revision": "42ba035923f21f8c64af73e7930f28bf"
  },
  {
    "url": "photos/2022/milad-fakurian-nY14Fs8pxT8-unsplash.jpg",
    "revision": "a81738db197e053a6b039939ca70a494"
  },
  {
    "url": "photos/2022/richard-horvath-cPccYbPrF.jpg",
    "revision": "eab0db9445e92c03c1ae1038537ab17c"
  },
  {
    "url": "photos/2022/richard-horvath-RAZU_R66vUc.jpg",
    "revision": "62dd3e9353bcf8d5ade08ee18c703a04"
  },
  {
    "url": "photos/2022/vackground.jpg",
    "revision": "5c44d903823106c9138732265a37730c"
  },
  {
    "url": "tag/announcement/index.html",
    "revision": "3380ddc50da4f8d3481973fca96f32a1"
  },
  {
    "url": "tag/cpanel/index.html",
    "revision": "9068984efd7903a4a89fb2050ddb55e7"
  },
  {
    "url": "tag/docs/index.html",
    "revision": "577a3e1df8f0c0ca992f13fb72f3a416"
  },
  {
    "url": "tag/faq/index.html",
    "revision": "740b059b14f70ef87d38284139f48526"
  },
  {
    "url": "tag/features/index.html",
    "revision": "ae50a52c8d230de6acd881ee84aedb55"
  },
  {
    "url": "tag/index.html",
    "revision": "3d4bb90030fbfcce7d3cab6172cfb4bd"
  },
  {
    "url": "tag/installation/index.html",
    "revision": "53987f39ad3b57b7cf2861108b6d5cfb"
  },
  {
    "url": "tag/installer/index.html",
    "revision": "78c775ddc4cf91f23d74204833b7d0c1"
  },
  {
    "url": "tag/lts/index.html",
    "revision": "a0b5c905ff911a26af522727878da6fd"
  },
  {
    "url": "tag/news/index.html",
    "revision": "fffb3ca8fcc85ccde72af7de9aaa9cb9"
  },
  {
    "url": "tag/pup/index.html",
    "revision": "a0bed85a3b583ebda84ec1337c133956"
  },
  {
    "url": "tag/release/index.html",
    "revision": "58881489889268f6ae97091e076c0d38"
  },
  {
    "url": "tag/releases/index.html",
    "revision": "4e81683013312d1697b7fe530bdbbcaa"
  },
  {
    "url": "tag/support/index.html",
    "revision": "c6ff25a2b8ba511346b628fe174e506d"
  },
  {
    "url": "tag/tiempos/index.html",
    "revision": "3856b7872f6fe3cbf083aef74a4a2898"
  },
  {
    "url": "tag/tiempos/page/2/index.html",
    "revision": "e5d393d76d7494013a9c55dd01c675a5"
  },
  {
    "url": "tag/upcoming/index.html",
    "revision": "639356cec79d6d4d893f0d41419371d9"
  },
  {
    "url": "tag/updates/index.html",
    "revision": "c0df3efe4bdfc1abee5d32577ad45269"
  },
  {
    "url": "tag/upload plugin/index.html",
    "revision": "4b35544e60ef43f644fb85575089d150"
  },
  {
    "url": "tiempos-2022-01/index.html",
    "revision": "27862961a7bac92ddfc46af10633977b"
  },
  {
    "url": "tiempos-2022-02/index.html",
    "revision": "167b6dc3beb012a16e9294a746b7dfad"
  },
  {
    "url": "tiempos-2022-03/index.html",
    "revision": "07b3d4ee425bad0a2cda04fdb23ba7cd"
  },
  {
    "url": "tiempos-2022-04/index.html",
    "revision": "92d72d5f98031986be90f1c7d07dbe5a"
  },
  {
    "url": "tiempos-2022-05/index.html",
    "revision": "59e43406204159c979d542dd633429db"
  },
  {
    "url": "tiempos-2022-06/index.html",
    "revision": "9e6710da9a02237ca482ff53c0975fca"
  },
  {
    "url": "tiempos-2022-07/index.html",
    "revision": "f46ea494671bc3c0cb733c47a3f440ce"
  },
  {
    "url": "v4.0-beta-updates/index.html",
    "revision": "651a0432d3977f5364a3ea3d7bb69462"
  }
].concat(self.__precacheManifest || []);
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
