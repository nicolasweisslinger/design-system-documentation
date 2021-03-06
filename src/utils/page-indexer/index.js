import {pages} from '../../content/pages'

const cache = {};
const importAll = (r, c) => {
  r.keys().forEach(key => c[key] = r(key));
}
importAll(require.context("../../content", true, /\.section.js$/), cache);
const indexedCache = Object.keys(cache).map(key => ({ pageName: key.split('/')[1], modules: cache[key] }))
export const index = pages.map(child => ({
  pageName: child.folderName,
  displayName: child.displayName,
  anchors: child.anchors,
  content: indexedCache.reduce((acc, curr) =>
    curr.pageName === child.folderName ? [...acc, curr.modules] : acc
    , [])
}))
