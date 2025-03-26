import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __export
} from "./chunk-QJ5TMGBR.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";
process.env.ICE_CORE_REMOVE_ROUTES_CONFIG = "false";
process.env.ICE_CORE_REMOVE_DATA_LOADER = "false";

// .ice/entry.server.ts
import { getAppConfig, renderToHTML as renderAppToHTML, renderToResponse as renderAppToResponse } from "@ice/runtime/server";

// .ice/runtime-modules.ts
var statics = [];
var commons = [];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});

// .ice/index.ts
import { Link, NavLink, Outlet, useParams, useSearchParams, useLocation, useData, useConfig, useNavigate, useNavigation, useRevalidator, useAsyncValue } from "@ice/runtime/router";
import { defineAppConfig, useAppData, history, useActive, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, usePublicAppContext as useAppContext, Await, usePageLifecycle, unstable_useDocumentData, dynamic, Meta, Title, Links, Scripts, FirstChunkCache, Data, Main, usePageAssets } from "@ice/runtime";
import { defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime/data-loader";

// src/app.ts
var app_default = defineAppConfig(() => ({
  // Set your configs here.
  router: {
    basename: "/yy_tr_loving"
  }
}));

// src/document.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";

// package.json
var description = "A new ice.js project.";

// src/document.tsx
function Document() {
  return /* @__PURE__ */ _jsxDEV("html", {
    children: [
      /* @__PURE__ */ _jsxDEV("head", {
        children: [
          /* @__PURE__ */ _jsxDEV("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "description",
            content: description
          }, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
          }, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Meta, {}, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Title, {}, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Links, {}, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("body", {
        children: [
          /* @__PURE__ */ _jsxDEV(Main, {}, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Scripts, {}, void 0, false, {
            fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/tianrui/projects/yy_tr_loving/src/document.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { pages: { "components-timeline-index": ["js/p_components-timeline-index.js"], "components-lovetimer-index": ["js/p_components-lovetimer-index.js"], "components-antdtimeline-index": [], index: [], src_pages_components_Timeline_index_tsx: ["js/src_pages_components_Timeline_index_tsx.js"], "vendors-node_modules_antd_es_index_js": ["js/vendors-node_modules_antd_es_index_js.js"], "vendors-node_modules_react-vertical-timeline-component_dist-es6_index_js-node_modules_react-v-134ac0": ["js/vendors-node_modules_react-vertical-timeline-component_dist-es6_index_js-node_modules_react-v-134ac0.js", "css/vendors-node_modules_react-vertical-timeline-component_dist-es6_index_js-node_modules_react-v-134ac0.css"] }, entries: { main: ["framework.js", "js/main.js", "css/main.css"] }, assets: { "src/assets/love.jpeg": "02d7fcadc612e706ffab" }, publicPath: "/", dataLoader: null };

// .ice/routes.tsx
import { jsxDEV as _jsxDEV2 } from "@ice/runtime/react/jsx-dev-runtime";
import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from "@ice/runtime";
var createRoutes = ({ requestContext, renderMode }) => [
  {
    path: "components/AntdTimeline",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_components-antdtimeline-index" */
        "./AntdTimeline-TM7RATJ2.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "components/AntdTimeline",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "components/AntdTimeline",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/tianrui/projects/yy_tr_loving/.ice/routes.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, void 0),
    componentName: "components-antdtimeline-index",
    index: true,
    id: "components/AntdTimeline",
    exact: true,
    exports: []
  },
  {
    path: "components/LoveTimer",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_components-lovetimer-index" */
        "./LoveTimer-7BKOKLRG.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "components/LoveTimer",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "components/LoveTimer",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/tianrui/projects/yy_tr_loving/.ice/routes.tsx",
      lineNumber: 51,
      columnNumber: 19
    }, void 0),
    componentName: "components-lovetimer-index",
    index: true,
    id: "components/LoveTimer",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "components/Timeline",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_components-timeline-index" */
        "./Timeline-2TNLOJJR.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "components/Timeline",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "components/Timeline",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/tianrui/projects/yy_tr_loving/.ice/routes.tsx",
      lineNumber: 76,
      columnNumber: 19
    }, void 0),
    componentName: "components-timeline-index",
    index: true,
    id: "components/Timeline",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_index" */
        "./pages-JSTD7UYG.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "/",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "/",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/tianrui/projects/yy_tr_loving/.ice/routes.tsx",
      lineNumber: 101,
      columnNumber: 19
    }, void 0),
    componentName: "index",
    index: true,
    id: "/",
    exact: true,
    exports: [
      "default"
    ]
  }
];
var routes_default = createRoutes;

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  return await renderAppToHTML(requestContext, mergedOptions);
}
async function renderToResponse(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  return renderAppToResponse(requestContext, mergedOptions);
}
function mergeOptions(options) {
  const { renderMode = "SSR", basename, publicPath } = options;
  if (publicPath) {
    virtual_assets_manifest_default.publicPath = publicPath;
  }
  return {
    ...options,
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    createRoutes: routes_default,
    runtimeModules,
    documentDataLoader: void 0,
    Document,
    basename: basename || getRouterBasename(),
    renderMode,
    runtimeOptions: {}
  };
}
export {
  renderToHTML,
  renderToResponse
};
//# sourceMappingURL=index.mjs.map
