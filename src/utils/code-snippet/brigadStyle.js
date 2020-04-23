const colors = [
  "#64F1FF", "#4AFF67", "#57B3FF", "#13FFD6"
]

export default {
  "code[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "none",
    // "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "#272822",
    // "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#272822",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  //Component name
  "class-name": {
    "color": colors[0]
  },
  //Tags
  "punctuation": {
    "color": colors[0]
  },
  //Component property key
  "attr-name": {
    "color": colors[2]
  },
  //Component property value
  "attr-value": {
    "color": colors[3]
  },
  "comment": {
    "color": "slategray",
    "fontStyle": "italic"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": colors[0]
  },
  "tag": {
    "color": colors[0]
  },
  "constant": {
    "color": colors[4]
  },
  "symbol": {
    "color": colors[3]
  },
  "deleted": {
    "color": "#f92672"
  },
  "boolean": {
    "color": colors[3]
  },
  "number": {
    "color": colors[2]
  },
  "selector": {
    "color": colors[2]
  },
  "string": {
    "color": colors[0]
  },
  "char": {
    "color": colors[3]
  },
  "builtin": {
    "color": colors[0]
  },
  "inserted": {
    "color": colors[3]
  },
  "operator": {
    "color": colors[2]
  },
  "entity": {
    "color": colors[3],
    "cursor": "help"
  },
  "url": {
    "color": colors[0]
  },
  ".language-css .token.string": {
    "color": colors[3]
  },
  ".style .token.string": {
    "color": colors[2]
  },
  "variable": {
    "color": colors[0]
  },
  "atrule": {
    "color": colors[0]
  },
  "function": {
    "color": colors[2]
  },
  "keyword": {
    "color": colors[1]
  },
  "regex": {
    "color": colors[0]
  },
  "important": {
    "color": colors[1],
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
