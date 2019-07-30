const common = {
  repoUrl: "https://github.com/craftercms/video-center-blueprint"
}

const studioConfig = {
  baseUrl: window.baseUrl ? window.baseUrl : "http://localhost:8080",
  site: window.siteName ? window.siteName : "vc",
  navTreeBase: "/site/website"
}

const themeConfig = {
  theme: 'themedefault'
};

export {
  common,
  studioConfig,
  themeConfig
};
