const cache = {};
const importAll = (r, c) => {
  r.keys().forEach(key => c[key] = r(key));
}
importAll(require.context("../../assets/page-tokens", true, /\.svg$/), cache);
const indexedCache = Object.keys(cache).map(key => ({ iconSize: key.split('/')[1], iconName: key.split('/')[2].replace(/\.svg/, ''), icon: cache[key] }))

export const index = [...new Set(Object.keys(cache).map(key => key.split('/')[1]))].reduce((acc, curr) => {
  acc[curr] = [];
  return acc;
},{})

indexedCache.map(el => index[el.iconSize].push({iconName: el.iconName, iconLink: el.icon}))
