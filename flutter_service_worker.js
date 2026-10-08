'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "7bdd934bcd31c07c3fc0d8dffed2e29c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5fb98ddc84d75729526a9a214d4dfc70",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "24248d6217fb27a2a83f55d716f7f71a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "af9f4716e9acf2fef7e0e4900fceb288",
".git/logs/HEAD": "26e1fc216060069bba1e8209dbb80daa",
".git/logs/refs/heads/master": "26e1fc216060069bba1e8209dbb80daa",
".git/logs/refs/remotes/origin/HEAD": "9cd6b20926e4993e71f343d09d6555f9",
".git/logs/refs/remotes/origin/master": "afd4f22f2e19b2a2cb74c9aacb9a943d",
".git/objects/03/ff2ac094864e4873d7e0db92be904c0df605e9": "2da5a241cc705f46f0c5b71b4791aa9e",
".git/objects/06/7a14e89c1137c187c1efaf10b962888aabf7ed": "57b568c3bd0a98c7ff1d9070b5285bac",
".git/objects/1e/949ddc9019b00d8a2970d56b65b998ea433f42": "4df9ad6797e643a5105345ded25acad2",
".git/objects/2b/e32bcffa5e17bd270ce05b59160e792b924786": "e64ef2242cb9a37f0d10df139eb22ad2",
".git/objects/3b/8477b0ec0e43f4d5ca6fc7dc56e8ffc20ffb87": "2fe84c73599f88a37abb0616e190a036",
".git/objects/43/6ce66940eb3924f48b0f29da2026a341d008e1": "0693116b4827cce626e39e45500c7b2d",
".git/objects/84/d986ad27b40f4d6b1ff07f4f547d025fc4e52f": "743b0296c8265d330dcbd55d3560332d",
".git/objects/9b/6503e9513e40c01fcceab7daffe8c38c326adf": "bb621724f2d10b2ffdd1ee1b07cdc1f4",
".git/objects/c0/055f1aeb695ef70598b7e679a70fd038ef745e": "b29afd7315451a3c86ac6876da52153b",
".git/objects/f4/187f6862d7ff7b20892988505f0b15cd5f33ab": "a72e1452828a4dd804bfc34c4eec241c",
".git/objects/info/packs": "d3ed398609a346c8b504a455776423ac",
".git/objects/pack/multi-pack-index": "9950297384d7ce7bbb628daab33a51a4",
".git/objects/pack/pack-e45258a00d25db5111008da05c7228587aea5327.idx": "0bee4bb9139ca14a056b73ecaaae653e",
".git/objects/pack/pack-e45258a00d25db5111008da05c7228587aea5327.pack": "3677152dcdb2a8e07c5f23aea508ba31",
".git/objects/pack/pack-e45258a00d25db5111008da05c7228587aea5327.rev": "0aa4d28893ce2c192efccd7b71f73d0b",
".git/objects/pack/pack-f8664f7a45fba3d33aa62eccc49227fd47ac2851.idx": "9cb2cf935779dfa7d78ca90fc27d9f87",
".git/objects/pack/pack-f8664f7a45fba3d33aa62eccc49227fd47ac2851.pack": "3f5376c62d19690b731f626456d1797b",
".git/objects/pack/pack-f8664f7a45fba3d33aa62eccc49227fd47ac2851.rev": "1c547b7d513a9efd155f6f19af8d65fd",
".git/ORIG_HEAD": "02c0a03e227952891ea00db82070713b",
".git/packed-refs": "edf1c3f9ed7dda59ee760ec4eab4af1a",
".git/refs/heads/master": "a509ada97dc432feef3601c9c194bb10",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a509ada97dc432feef3601c9c194bb10",
"assets/AssetManifest.bin": "b00f52fa7d51d2b280ab2954a861cbfe",
"assets/AssetManifest.json": "9b9aace3a3edade3dcf520b48c8d1140",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/nosample.png": "2ca47899805df7514ed21acff67c2846",
"assets/assets/images/notsendsample.png": "a73dba07c506d97288bf77b0a57cca1c",
"assets/assets/images/receivedsample.png": "d2d52279c1378d2f32119c721c57491c",
"assets/assets/images/rejectsample.png": "3915e834cb0b230cbc27932248a32867",
"assets/assets/images/SampleSEM.png": "fab8e7f733ce31bbe0c354b58adbfbee",
"assets/assets/images/sendsample.png": "c9bc9a6a0a611f24c2de8c58521f5937",
"assets/assets/images/waitsample.png": "796dffdad2fd5619824cc81b134f6ebc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d0ba8ce2d28404871f8bee2423c8472b",
"assets/NOTICES": "12d4d2ff285c4db6056e8d1ca96a6dff",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.js.symbols": "7d65ba80db73056cf90af657c82415f6",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.js.symbols": "214ee287788c0e35624da3ee83dbd3d1",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/experimental_webparagraph/canvaskit.js": "230c0e2b182dcd1061c06c2fe7b64b5f",
"canvaskit/experimental_webparagraph/canvaskit.js.symbols": "0c6d97b036dffdc0f4bc4552ae7b5c9d",
"canvaskit/experimental_webparagraph/canvaskit.wasm": "e008e87c245b0718932b34e9a15be803",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.js.symbols": "b8c2d893dad937bb4b9099b0df3280e1",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm_heavy.js": "b0f50d611a7641ff5f75efa54874c3b4",
"canvaskit/skwasm_heavy.js.symbols": "db2a5db43bb1408935eac856be1d9f06",
"canvaskit/skwasm_heavy.wasm": "76b8aa19738d3558be6085a11b79518a",
"canvaskit/webparagraph/canvaskit.js": "003f529b235d9f71c3b5e6c439330d87",
"canvaskit/webparagraph/canvaskit.js.symbols": "3184b27cda5ef5649c727c7c4f0ae31e",
"canvaskit/webparagraph/canvaskit.wasm": "8cecf3b9c2e8270502de9138a21d4e8f",
"canvaskit/wimp.js": "e6084b5f6628d1ffc5236f8c224750cd",
"canvaskit/wimp.js.symbols": "53d78ee9cde09cd3336add36d64f1c37",
"canvaskit/wimp.wasm": "9173d3df97ed517649085f35f64592bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbc86654e7cf78007018d2ade646d65a",
"/": "fbc86654e7cf78007018d2ade646d65a",
"main.dart.js": "1cb7daed3be8aac4d6937004585a6e53",
"manifest.json": "920749f91f0b5bc9b802afac26573b9e",
"version.json": "51b84a0988b0aeadc54f37dc103d2bbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
