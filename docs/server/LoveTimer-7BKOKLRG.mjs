import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-QJ5TMGBR.mjs";

// src/pages/components/LoveTimer/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
import { useState, useEffect } from "react";
var startDate = /* @__PURE__ */ new Date("2023/10/7 00:00:00");
function LoveTimer() {
  const [elapsedTime, setElapsedTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(diff % (1e3 * 60) / 1e3);
      setElapsedTime(`${days} \u5929 ${hours} \u65F6 ${minutes} \u5206 ${seconds} \u79D2`);
    }, 1e3);
    return () => clearInterval(interval);
  }, [
    startDate
  ]);
  return /* @__PURE__ */ _jsxDEV("div", {
    children: /* @__PURE__ */ _jsxDEV("h2", {
      children: [
        "\u604B\u7231\u65F6\u95F4\uFF1A",
        elapsedTime
      ]
    }, void 0, true, {
      fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/components/LoveTimer/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "/Users/tianrui/projects/yy_tr_loving/src/pages/components/LoveTimer/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var LoveTimer_default = LoveTimer;
export {
  LoveTimer_default as default
};
//# sourceMappingURL=LoveTimer-7BKOKLRG.mjs.map
