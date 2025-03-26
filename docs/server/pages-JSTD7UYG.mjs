import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  AntdTimeline_default
} from "./chunk-YBM5YYY6.mjs";
import {
  Timeline_default
} from "./chunk-D2OZ6UKN.mjs";
import "./chunk-QRJFMT4M.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-QJ5TMGBR.mjs";

// style-handler-namespace:/Users/tianrui/projects/yy_tr_loving/src/pages/index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:/Users/tianrui/projects/yy_tr_loving/src/pages/index.module.css"(exports, module) {
    module.exports = {
      "app": "src-pages-index-module-css__app",
      "link": "src-pages-index-module-css__link",
      "button": "src-pages-index-module-css__button"
    };
  }
});

// src/assets/love.jpeg
var require_love = __commonJS({
  "src/assets/love.jpeg"(exports, module) {
    module.exports = "/assets/love.02d7fcad.jpeg";
  }
});

// src/pages/index.tsx
var import_index_module = __toESM(require_index_module());
var import_love = __toESM(require_love());
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
function IndexPage() {
  return /* @__PURE__ */ _jsxDEV("div", {
    className: import_index_module.default.app,
    children: [
      /* @__PURE__ */ _jsxDEV(AntdTimeline_default, {}, void 0, false, {
        fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV(Timeline_default, {}, void 0, false, {
        fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("img", {
        src: import_love.default,
        height: 100
      }, void 0, false, {
        fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  IndexPage as default
};
//# sourceMappingURL=pages-JSTD7UYG.mjs.map
