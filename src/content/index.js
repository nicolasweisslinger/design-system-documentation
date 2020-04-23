const cache = [{}];

function importAll(r, i) {
  r.keys().forEach(key => cache[i][key] = r(key));
}

const pages = [
  {
    pathName: "./layout-components/",
    routeName: "/layout-components",
    navName: "Layout Components",
  },
  {
    pathName: "./atomic-components/",
    routeName: "/atomic-components",
    navName: "Atomic Components",
  }
]

pages.map((child, i) => {
  importAll(require.context(child.pathName, true, /\.section.js$/), i);
})

const pagesData = pages.map((child, i) => {
  Object.keys(cache[i]).map(key => ({ docs: cache[i][key].Documentation, code: cache[i][key].codeSnippets }))
})
console.log(pagesData);

export const index = [
  {
    routeName: "/layout-components",
    navName: "Layout Components",
    content: test
  },
]
