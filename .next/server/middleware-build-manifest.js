self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/aboutus": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/aboutus.js"
    ],
    "/bangalore/[[...params]]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/bangalore/[[...params]].js"
    ],
    "/bangalore/[category]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/bangalore/[category].js"
    ],
    "/bangalore/lab-test": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/bangalore/lab-test.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];