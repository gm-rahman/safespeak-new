(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/sendIcon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sendIcon.00cf2848.svg");}),
"[project]/src/assets/sendIcon.svg.mjs { IMAGE => \"[project]/src/assets/sendIcon.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/sendIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/assistant-message-renderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantMessageRenderer",
    ()=>AssistantMessageRenderer,
    "normalizeAssistantMarkdown",
    ()=>normalizeAssistantMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$sanitize$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-sanitize/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function normalizeAssistantMarkdown(content) {
    return content.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").replace(/[ \t]+\n/g, "\n").trim();
}
function isExternalHref(href) {
    return /^https?:\/\//i.test(href !== null && href !== void 0 ? href : "");
}
function AssistantMessageRenderer(param) {
    let { content } = param;
    const normalizedContent = normalizeAssistantMarkdown(content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "assistant-markdown break-words",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ],
            rehypePlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$sanitize$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ],
            components: {
                p: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 35,
                        columnNumber: 38
                    }, void 0);
                },
                strong: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 36,
                        columnNumber: 43
                    }, void 0);
                },
                em: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 37,
                        columnNumber: 39
                    }, void 0);
                },
                ul: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 38,
                        columnNumber: 39
                    }, void 0);
                },
                ol: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 39,
                        columnNumber: 39
                    }, void 0);
                },
                li: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 40,
                        columnNumber: 39
                    }, void 0);
                },
                h1: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 41,
                        columnNumber: 39
                    }, void 0);
                },
                h2: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 42,
                        columnNumber: 39
                    }, void 0);
                },
                h3: (param)=>{
                    let { node, ...props } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 43,
                        columnNumber: 39
                    }, void 0);
                },
                a: (param)=>{
                    let { node, href, ...props } = param;
                    const external = isExternalHref(href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        ...props,
                        href: href,
                        target: external ? "_blank" : undefined,
                        rel: external ? "noopener noreferrer" : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
                        lineNumber: 48,
                        columnNumber: 15
                    }, void 0);
                }
            },
            children: normalizedContent
        }, void 0, false, {
            fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/assistant-message-renderer.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = AssistantMessageRenderer;
var _c;
__turbopack_context__.k.register(_c, "AssistantMessageRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentRequiredCard",
    ()=>ConsentRequiredCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLock.mjs [app-client] (ecmascript) <export default as IconLock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldCheck.mjs [app-client] (ecmascript) <export default as IconShieldCheck>");
"use client";
;
;
function ConsentRequiredCard(param) {
    let { requirement, isSubmitting = false, onAllow, onDecline } = param;
    var _requirement_allowLabel, _requirement_declineLabel;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-[18px] border border-[#d8e4f2] bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.06)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#0f5d9f]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__["IconShieldCheck"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent/consent-required-card.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] font-bold text-[#1f2a3a]",
                                children: requirement.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] leading-[1.55] text-[#60728a]",
                                children: requirement.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: requirement.flags.map((flag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full border border-[#dbe7f4] bg-[#f8fbff] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#5f738d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLock$3e$__["IconLock"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            flag.replace(/_/g, " ")
                                        ]
                                    }, flag, true, {
                                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAllow,
                        disabled: isSubmitting,
                        className: "inline-flex h-10 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-[11px] font-bold text-white shadow-[0_10px_18px_rgba(15,93,159,0.24)] disabled:cursor-not-allowed disabled:opacity-60",
                        children: isSubmitting ? "Saving consent..." : (_requirement_allowLabel = requirement.allowLabel) !== null && _requirement_allowLabel !== void 0 ? _requirement_allowLabel : "Allow and continue"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    onDecline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onDecline,
                        className: "inline-flex h-10 items-center justify-center rounded-full border border-[#d8e4f2] px-5 text-[11px] font-semibold text-[#5f738d]",
                        children: (_requirement_declineLabel = requirement.declineLabel) !== null && _requirement_declineLabel !== void 0 ? _requirement_declineLabel : "Not now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this) : null,
                    requirement.settingsHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: requirement.settingsHref,
                        className: "inline-flex h-10 items-center justify-center rounded-full border border-[#d8e4f2] px-5 text-[11px] font-semibold text-[#5f738d]",
                        children: "Review consent settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent/consent-required-card.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consent/consent-required-card.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/consent/consent-required-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ConsentRequiredCard;
var _c;
__turbopack_context__.k.register(_c, "ConsentRequiredCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/assistant-voice-first-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantVoiceFirstInput",
    ()=>AssistantVoiceFirstInput,
    "AvatarVoiceControlGlyph",
    ()=>AvatarVoiceControlGlyph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophone.mjs [app-client] (ecmascript) <export default as IconMicrophone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/sendIcon.svg.mjs { IMAGE => "[project]/src/assets/sendIcon.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
function AvatarVoiceControlGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-[2px]",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[4px] w-[4px] rounded-full bg-current opacity-95"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[10px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[14px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[10px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[4px] w-[4px] rounded-full bg-current opacity-95"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = AvatarVoiceControlGlyph;
function AssistantVoiceFirstInput(param) {
    let { value, name, placeholder, inputLabel, onChange, onDictationClick, dictationDisabled = false, dictationLabel, onVoiceFirstClick, voiceFirstDisabled = false, voiceFirstLabel, sendLabel, showSendButton, disabled = false, sendDisabled = false, isProcessing = false, captureState = "idle", captureLabel, cancelLabel, confirmLabel = "Use voice text", captureConfirmDisabled = false, onCancelCapture, onConfirmCapture, leadingAction, error, inputRef, inputTestId, dictationTestId, voiceTestId, sendTestId, onKeyDown } = param;
    if (captureState !== "idle") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-[#f8fbff] px-4 py-2",
                    "data-testid": "assistant-voice-first-capture",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center gap-3 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-medium text-[#64748b]",
                                    children: captureLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 flex-1 items-center gap-1 overflow-hidden",
                                    children: Array.from({
                                        length: 32
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1 rounded-full bg-[#7aa4d8] ".concat(captureState === "listening" ? "animate-pulse" : ""),
                                            style: {
                                                height: "".concat(10 + index * 7 % 18, "px"),
                                                animationDelay: "".concat(index * 45, "ms"),
                                                opacity: 0.38 + index % 6 * 0.1
                                            }
                                        }, index, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancelCapture,
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe6f2] bg-white text-[#64748b] transition hover:bg-[#f4f7fb]",
                            "aria-label": cancelLabel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onConfirmCapture,
                            disabled: captureConfirmDisabled,
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5d9f] text-white transition hover:bg-[#0c518a] disabled:cursor-not-allowed disabled:opacity-45",
                            "aria-label": confirmLabel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "px-4 pt-2 text-[11px] leading-[1.45] text-[#c24141]",
                    "aria-live": "polite",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-full border border-[#dbe6f2] bg-white px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
                "data-testid": "assistant-voice-first-input",
                children: [
                    leadingAction,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        name: name,
                        value: value,
                        onChange: (event)=>onChange(event.target.value),
                        onKeyDown: onKeyDown,
                        disabled: disabled,
                        placeholder: placeholder,
                        "aria-label": inputLabel,
                        "data-testid": inputTestId,
                        className: "h-11 min-w-[180px] flex-1 rounded-full border border-transparent bg-transparent px-3 text-sm text-[#1f2937] outline-none transition-[background-color,box-shadow,border-color] duration-150 placeholder:text-[#95a3b8] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onDictationClick,
                        disabled: dictationDisabled,
                        "aria-label": dictationLabel,
                        "data-testid": dictationTestId,
                        className: "inline-flex h-11 w-11 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f4f7fb] ".concat(dictationDisabled ? "cursor-not-allowed opacity-40" : ""),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    showSendButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex shrink-0 items-center rounded-full border border-[#dbe6f2] bg-white p-1 shadow-[0_6px_18px_rgba(148,163,184,0.14)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            "aria-label": sendLabel,
                            "data-testid": sendTestId,
                            disabled: sendDisabled,
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5d9f] text-white disabled:cursor-not-allowed disabled:opacity-45",
                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                lineNumber: 188,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: sendLabel,
                                width: 10,
                                height: 14,
                                className: "h-[14px] w-[10px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                lineNumber: 190,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center rounded-full border border-[#dbe6f2] bg-white p-1 shadow-[0_6px_18px_rgba(148,163,184,0.14)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onVoiceFirstClick,
                            disabled: voiceFirstDisabled,
                            "aria-label": voiceFirstLabel,
                            "data-testid": voiceTestId,
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#196bb1] text-white transition hover:bg-[#196bb1] ".concat(voiceFirstDisabled ? "cursor-not-allowed opacity-40" : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarVoiceControlGlyph, {}, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-4 pt-2 text-[11px] leading-[1.45] text-[#c24141]",
                "aria-live": "polite",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-voice-first-input.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
}
_c1 = AssistantVoiceFirstInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "AvatarVoiceControlGlyph");
__turbopack_context__.k.register(_c1, "AssistantVoiceFirstInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/voice-avatar-animation.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aiSpeaking": "voice-avatar-animation-module__VV8poG__aiSpeaking",
  "ambientGlow": "voice-avatar-animation-module__VV8poG__ambientGlow",
  "aura": "voice-avatar-animation-module__VV8poG__aura",
  "avatar": "voice-avatar-animation-module__VV8poG__avatar",
  "avatarBreath": "voice-avatar-animation-module__VV8poG__avatarBreath",
  "composer": "voice-avatar-animation-module__VV8poG__composer",
  "dashboard": "voice-avatar-animation-module__VV8poG__dashboard",
  "large": "voice-avatar-animation-module__VV8poG__large",
  "listening": "voice-avatar-animation-module__VV8poG__listening",
  "listeningRing": "voice-avatar-animation-module__VV8poG__listeningRing",
  "micActive": "voice-avatar-animation-module__VV8poG__micActive",
  "micIcon": "voice-avatar-animation-module__VV8poG__micIcon",
  "micIdle": "voice-avatar-animation-module__VV8poG__micIdle",
  "micPlate": "voice-avatar-animation-module__VV8poG__micPlate",
  "micProcessing": "voice-avatar-animation-module__VV8poG__micProcessing",
  "micShell": "voice-avatar-animation-module__VV8poG__micShell",
  "micSpeaking": "voice-avatar-animation-module__VV8poG__micSpeaking",
  "processing": "voice-avatar-animation-module__VV8poG__processing",
  "processingOrbit": "voice-avatar-animation-module__VV8poG__processingOrbit",
  "processingPulse": "voice-avatar-animation-module__VV8poG__processingPulse",
  "ring": "voice-avatar-animation-module__VV8poG__ring",
  "ringTwo": "voice-avatar-animation-module__VV8poG__ringTwo",
  "session": "voice-avatar-animation-module__VV8poG__session",
  "small": "voice-avatar-animation-module__VV8poG__small",
  "speakingRing": "voice-avatar-animation-module__VV8poG__speakingRing",
  "userSpeaking": "voice-avatar-animation-module__VV8poG__userSpeaking",
  "waveBar": "voice-avatar-animation-module__VV8poG__waveBar",
  "waveform": "voice-avatar-animation-module__VV8poG__waveform",
  "waveformIdle": "voice-avatar-animation-module__VV8poG__waveformIdle",
  "waveformListen": "voice-avatar-animation-module__VV8poG__waveformListen",
  "waveformSpeak": "voice-avatar-animation-module__VV8poG__waveformSpeak",
  "waveformThinking": "voice-avatar-animation-module__VV8poG__waveformThinking",
});
}),
"[project]/src/components/dashboard/voice-avatar-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceAvatarAnimation",
    ()=>VoiceAvatarAnimation,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophone.mjs [app-client] (ecmascript) <export default as IconMicrophone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/voice-avatar-animation.module.css [app-client] (css module)");
"use client";
;
;
;
const stateLabels = {
    idle: "SafeSpeak voice assistant ready",
    listening: "SafeSpeak voice assistant listening",
    processing: "SafeSpeak voice assistant processing",
    userSpeaking: "SafeSpeak voice assistant hearing your voice",
    aiSpeaking: "SafeSpeak voice assistant speaking"
};
function VoiceAvatarAnimation(param) {
    let { state, size = "large", alt = "SafeSpeak assistant voice avatar", className = "", showAmbientEffects = false } = param;
    const wrapperClassName = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][state],
        className
    ].filter(Boolean).join(" ");
    const ariaLabel = alt && !/sphere/i.test(alt) ? "".concat(alt, ": ").concat(stateLabels[state]) : stateLabels[state];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "img",
        "aria-label": ariaLabel,
        "data-testid": "voice-avatar-animation",
        "data-voice-state": state,
        "data-voice-size": size,
        className: wrapperClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aura,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ringTwo,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveform,
                "aria-hidden": "true",
                children: Array.from({
                    length: 10
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar
                    }, index, false, {
                        fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].micShell,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].micPlate,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].micIcon,
                        stroke: 2.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            showAmbientEffects ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambientGlow,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/voice-avatar-animation.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = VoiceAvatarAnimation;
const __TURBOPACK__default__export__ = VoiceAvatarAnimation;
var _c;
__turbopack_context__.k.register(_c, "VoiceAvatarAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/frontend-session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAFE_SPEAK_SESSION_HEADER",
    ()=>SAFE_SPEAK_SESSION_HEADER,
    "clearAnonymousSession",
    ()=>clearAnonymousSession,
    "getAnonymousSessionToken",
    ()=>getAnonymousSessionToken,
    "getSessionAwareAuthHeaders",
    ()=>getSessionAwareAuthHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
"use client";
;
;
const ANONYMOUS_SESSION_KEY = "safespeak_anonymous_session";
const SAFE_SPEAK_SESSION_HEADER = "X-SafeSpeak-Session";
function getStoredAnonymousSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(ANONYMOUS_SESSION_KEY);
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        window.sessionStorage.removeItem(ANONYMOUS_SESSION_KEY);
        return null;
    }
}
function saveAnonymousSession(session) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.setItem(ANONYMOUS_SESSION_KEY, JSON.stringify(session));
}
function clearAnonymousSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.removeItem(ANONYMOUS_SESSION_KEY);
}
async function getAnonymousSessionToken(options) {
    if (options === null || options === void 0 ? void 0 : options.forceNew) {
        clearAnonymousSession();
    }
    const storedSession = getStoredAnonymousSession();
    if (storedSession === null || storedSession === void 0 ? void 0 : storedSession.sessionToken) {
        return storedSession.sessionToken;
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/sessions/anonymous", {
        method: "POST",
        body: {
            language: "en",
            safetyGateAccepted: true
        }
    });
    saveAnonymousSession({
        sessionToken: response.data.sessionToken
    });
    return response.data.sessionToken;
}
async function getSessionAwareAuthHeaders(options) {
    const authSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureValidAuthSession"])().catch(()=>null);
    if (authSession === null || authSession === void 0 ? void 0 : authSession.tokens.accessToken) {
        return {
            Authorization: "Bearer ".concat(authSession.tokens.accessToken)
        };
    }
    const sessionToken = await getAnonymousSessionToken({
        forceNew: options === null || options === void 0 ? void 0 : options.forceNewAnonymous
    });
    return {
        [SAFE_SPEAK_SESSION_HEADER]: sessionToken
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/consent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentRequiredError",
    ()=>ConsentRequiredError,
    "consentRequirements",
    ()=>consentRequirements,
    "consentSources",
    ()=>consentSources,
    "ensureConsent",
    ()=>ensureConsent,
    "getConsentGrantFlags",
    ()=>getConsentGrantFlags,
    "getConsentHistory",
    ()=>getConsentHistory,
    "getCurrentConsent",
    ()=>getCurrentConsent,
    "grantConsent",
    ()=>grantConsent,
    "withdrawConsent",
    ()=>withdrawConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
class ConsentRequiredError extends Error {
    constructor(requirement, currentConsent){
        super("Consent is required before this action can continue."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "requirement", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentConsent", void 0);
        this.name = "ConsentRequiredError";
        this.requirement = requirement;
        this.currentConsent = currentConsent;
    }
}
function hasRequiredConsent(currentConsent, requirement) {
    var _requirement_mode;
    const mode = (_requirement_mode = requirement.mode) !== null && _requirement_mode !== void 0 ? _requirement_mode : "all";
    if (mode === "any") {
        return requirement.flags.some((flag)=>Boolean(currentConsent[flag]));
    }
    return requirement.flags.every((flag)=>Boolean(currentConsent[flag]));
}
async function getCurrentConsent(headers) {
    const resolvedHeaders = headers !== null && headers !== void 0 ? headers : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/current", {
        headers: resolvedHeaders
    });
    return response.data.consent;
}
async function ensureConsent(requirement, headers) {
    const resolvedHeaders = headers !== null && headers !== void 0 ? headers : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const currentConsent = await getCurrentConsent(resolvedHeaders);
    if (hasRequiredConsent(currentConsent, requirement)) {
        return currentConsent;
    }
    throw new ConsentRequiredError(requirement, currentConsent);
}
function getConsentGrantFlags(requirement) {
    if (requirement.grantFlags) {
        return requirement.grantFlags;
    }
    const flagsToGrant = requirement.mode === "any" ? requirement.flags.slice(0, 1) : requirement.flags;
    return flagsToGrant.reduce((flags, flag)=>{
        flags[flag] = true;
        return flags;
    }, {});
}
async function grantConsent(flags, source, headers) {
    const resolvedHeaders = headers !== null && headers !== void 0 ? headers : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/update", {
        method: "POST",
        headers: resolvedHeaders,
        body: {
            flags,
            source
        }
    });
    return response.data.consent;
}
async function withdrawConsent(flags, source, headers) {
    const resolvedHeaders = headers !== null && headers !== void 0 ? headers : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/withdraw", {
        method: "POST",
        headers: resolvedHeaders,
        body: {
            flags,
            source
        }
    });
    return response.data.consent;
}
async function getConsentHistory(headers) {
    const resolvedHeaders = headers !== null && headers !== void 0 ? headers : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/history", {
        headers: resolvedHeaders
    });
    return response.data.history;
}
const consentSources = {
    assistantTimelineBuilder: "assistant_timeline_builder",
    assistantRagAnswer: "assistant_rag_answer",
    assistantTriageReport: "assistant_triage_report",
    assistantVoiceRecorder: "assistant_voice_recorder",
    reportEvidenceTranscription: "report_evidence_transcription",
    scamshieldAnalysis: "scamshield_analysis",
    reportEvidenceUpload: "report_evidence_upload",
    reportDraftStorage: "report_draft_storage",
    reportDestinationSubmit: "report_destination_submit",
    supportWarmReferral: "support_warm_referral",
    advocateRequest: "advocate_request",
    safetyPlanStorage: "safety_plan_storage",
    sourceBackedQuestion: "source_backed_question",
    externalSharingAction: "external_sharing_action",
    privacySelfService: "privacy_self_service"
};
const consentRequirements = {
    aiAssistant: {
        title: "AI consent required",
        description: "SafeSpeak needs your permission to process this conversation with AI. This is information-only support and will not submit a report automatically.",
        flags: [
            "process_with_ai"
        ],
        grantFlags: {
            process_with_ai: true
        },
        source: consentSources.assistantTimelineBuilder,
        allowLabel: "Allow AI and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    ragAnswer: {
        title: "AI answer consent required",
        description: "SafeSpeak needs your permission to use approved AI and knowledge sources for this answer.",
        flags: [
            "process_with_ai"
        ],
        grantFlags: {
            process_with_ai: true
        },
        source: consentSources.assistantRagAnswer,
        allowLabel: "Allow AI and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    triage: {
        title: "Triage consent required",
        description: "SafeSpeak needs permission to analyze the incident details you shared before it can prepare triage guidance.",
        flags: [
            "process_with_ai"
        ],
        grantFlags: {
            process_with_ai: true
        },
        source: consentSources.assistantTriageReport,
        allowLabel: "Allow AI and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    audioTranscription: {
        title: "Audio transcription consent required",
        description: "SafeSpeak needs your permission before transcribing voice input. You can allow transcription only, or allow AI processing more broadly.",
        flags: [
            "transcribe_audio",
            "process_with_ai"
        ],
        grantFlags: {
            transcribe_audio: true
        },
        mode: "any",
        source: consentSources.assistantVoiceRecorder,
        allowLabel: "Allow transcription and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    evidenceTranscription: {
        title: "Evidence transcription consent required",
        description: "SafeSpeak needs your permission before transcribing audio evidence. You can allow transcription only, or allow AI processing more broadly.",
        flags: [
            "transcribe_audio",
            "process_with_ai"
        ],
        grantFlags: {
            transcribe_audio: true
        },
        mode: "any",
        source: consentSources.reportEvidenceTranscription,
        allowLabel: "Allow transcription and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    scamAnalysis: {
        title: "Scam analysis consent required",
        description: "SafeSpeak needs your permission before it can analyze suspicious text, screenshots, URLs, or emails with AI.",
        flags: [
            "process_with_ai"
        ],
        grantFlags: {
            process_with_ai: true
        },
        source: consentSources.scamshieldAnalysis,
        allowLabel: "Allow analysis and continue",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    cloudEvidence: {
        title: "Cloud evidence consent required",
        description: "Cloud evidence upload is disabled until you allow cloud sync. Without it, SafeSpeak can keep evidence metadata on this device only.",
        flags: [
            "cloud_sync"
        ],
        grantFlags: {
            cloud_sync: true
        },
        source: consentSources.reportEvidenceUpload,
        allowLabel: "Allow cloud sync and continue",
        declineLabel: "Keep local only",
        settingsHref: "/dashboard/settings"
    },
    reportStorage: {
        title: "Report storage consent required",
        description: "SafeSpeak needs cloud sync consent before report details can be stored on SafeSpeak servers. Without it, keep the draft on this device only.",
        flags: [
            "cloud_sync"
        ],
        grantFlags: {
            cloud_sync: true
        },
        source: consentSources.reportDraftStorage,
        allowLabel: "Allow cloud sync and continue",
        declineLabel: "Keep local only",
        settingsHref: "/dashboard/settings"
    },
    warmReferral: {
        title: "Warm referral consent required",
        description: "SafeSpeak needs your permission before it can share details with a support service for a warm referral.",
        flags: [
            "warm_referral"
        ],
        grantFlags: {
            warm_referral: true
        },
        source: consentSources.supportWarmReferral,
        allowLabel: "Allow warm referral",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    reportDestinationSubmit: {
        title: "Report sharing consent required",
        description: "SafeSpeak needs your permission before sharing prepared information with the selected external service. Calls and emails only happen if you choose them.",
        flags: [
            "share_with_agencies"
        ],
        grantFlags: {
            share_with_agencies: true
        },
        source: consentSources.reportDestinationSubmit,
        allowLabel: "Allow sharing and continue",
        declineLabel: "Keep prepared only",
        settingsHref: "/dashboard/settings"
    },
    sourceBackedQuestion: {
        title: "Source-backed AI consent required",
        description: "SafeSpeak needs your permission before using AI to search approved knowledge sources and answer your question.",
        flags: [
            "process_with_ai"
        ],
        grantFlags: {
            process_with_ai: true
        },
        source: consentSources.sourceBackedQuestion,
        allowLabel: "Allow source Q&A",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    advocateRequest: {
        title: "Advocate request consent required",
        description: "SafeSpeak needs your permission before creating an advocate contact request or sharing request details.",
        flags: [
            "advocate_request"
        ],
        grantFlags: {
            advocate_request: true
        },
        source: consentSources.advocateRequest,
        allowLabel: "Allow advocate request",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    },
    safetyPlanStorage: {
        title: "Safety plan storage consent required",
        description: "SafeSpeak needs cloud sync consent before storing a safety plan on SafeSpeak servers.",
        flags: [
            "cloud_sync"
        ],
        grantFlags: {
            cloud_sync: true
        },
        source: consentSources.safetyPlanStorage,
        allowLabel: "Allow safety plan storage",
        declineLabel: "Keep local only",
        settingsHref: "/dashboard/settings"
    },
    shareWithAgencies: {
        title: "Sharing consent required",
        description: "SafeSpeak needs your permission before it can prepare or submit information to an external service or agency.",
        flags: [
            "share_with_agencies"
        ],
        grantFlags: {
            share_with_agencies: true
        },
        source: consentSources.externalSharingAction,
        allowLabel: "Allow sharing",
        declineLabel: "Not now",
        settingsHref: "/dashboard/settings"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-consent-gate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConsentGate",
    ()=>useConsentGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useConsentGate() {
    _s();
    const [pendingConsentRequirement, setPendingConsentRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGrantingConsent, setIsGrantingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const clearPendingConsent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConsentGate.useCallback[clearPendingConsent]": ()=>{
            setPendingConsentRequirement(null);
        }
    }["useConsentGate.useCallback[clearPendingConsent]"], []);
    const captureConsentError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConsentGate.useCallback[captureConsentError]": (error)=>{
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingConsentRequirement(error.requirement);
                return true;
            }
            return false;
        }
    }["useConsentGate.useCallback[captureConsentError]"], []);
    const requireConsent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConsentGate.useCallback[requireConsent]": async (requirement, headers)=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(requirement, headers);
                setPendingConsentRequirement(null);
                return true;
            } catch (error) {
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                    setPendingConsentRequirement(error.requirement);
                    return false;
                }
                throw error;
            }
        }
    }["useConsentGate.useCallback[requireConsent]"], []);
    const grantPendingConsent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConsentGate.useCallback[grantPendingConsent]": async (flags)=>{
            if (!pendingConsentRequirement) {
                return null;
            }
            setIsGrantingConsent(true);
            try {
                const consent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grantConsent"])(flags !== null && flags !== void 0 ? flags : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConsentGrantFlags"])(pendingConsentRequirement), pendingConsentRequirement.source);
                setPendingConsentRequirement(null);
                return consent;
            } finally{
                setIsGrantingConsent(false);
            }
        }
    }["useConsentGate.useCallback[grantPendingConsent]"], [
        pendingConsentRequirement
    ]);
    return {
        pendingConsentRequirement,
        isGrantingConsent,
        captureConsentError,
        clearPendingConsent,
        grantPendingConsent,
        requireConsent,
        setPendingConsentRequirement
    };
}
_s(useConsentGate, "e2qp+66tNQkS1tBEIxLEakM1r4U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/report-metadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REPORT_METADATA_KEY",
    ()=>REPORT_METADATA_KEY,
    "captureReportMetadata",
    ()=>captureReportMetadata,
    "clearReportMetadata",
    ()=>clearReportMetadata,
    "saveReportMetadata",
    ()=>saveReportMetadata
]);
const REPORT_METADATA_KEY = "safespeak_report_metadata";
function captureDeviceMetadata() {
    const nav = navigator;
    var _nav_languages;
    return {
        userAgent: nav.userAgent,
        platform: nav.platform,
        language: nav.language,
        languages: Array.from((_nav_languages = nav.languages) !== null && _nav_languages !== void 0 ? _nav_languages : []),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio
        },
        screen: {
            width: window.screen.width,
            height: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelDepth: window.screen.pixelDepth
        },
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemoryGb: nav.deviceMemory,
        maxTouchPoints: nav.maxTouchPoints,
        online: nav.onLine,
        connection: nav.connection ? {
            effectiveType: nav.connection.effectiveType,
            downlinkMbps: nav.connection.downlink,
            rttMs: nav.connection.rtt,
            saveData: nav.connection.saveData
        } : undefined
    };
}
function getCurrentPosition() {
    return new Promise((resolve, reject)=>{
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported in this browser."));
            return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 10000
        });
    });
}
async function captureReportMetadata() {
    const metadata = {
        capturedAt: new Date().toISOString(),
        device: captureDeviceMetadata()
    };
    try {
        const position = await getCurrentPosition();
        metadata.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracyMeters: position.coords.accuracy,
            altitudeMeters: position.coords.altitude,
            altitudeAccuracyMeters: position.coords.altitudeAccuracy,
            headingDegrees: position.coords.heading,
            speedMetersPerSecond: position.coords.speed
        };
    } catch (error) {
        metadata.locationUnavailableReason = error instanceof Error ? error.message : "Location unavailable";
    }
    return metadata;
}
function saveReportMetadata(metadata) {
    window.sessionStorage.setItem(REPORT_METADATA_KEY, JSON.stringify(metadata));
}
function clearReportMetadata() {
    window.sessionStorage.removeItem(REPORT_METADATA_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/voice-transcription.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAssistantVoiceAudioUrl",
    ()=>createAssistantVoiceAudioUrl,
    "synthesizeAssistantVoice",
    ()=>synthesizeAssistantVoice,
    "transcribeAssistantVoice",
    ()=>transcribeAssistantVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
;
;
;
async function getTranscriptionAuthHeaders() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
}
function getAudioFileName(blob) {
    if (blob.type.includes("mp4")) {
        return "assistant-recording.m4a";
    }
    if (blob.type.includes("wav")) {
        return "assistant-recording.wav";
    }
    return "assistant-recording.webm";
}
async function transcribeAssistantVoice(audioBlob, language) {
    const headers = await getTranscriptionAuthHeaders();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].audioTranscription, headers);
    const formData = new FormData();
    formData.set("audio", audioBlob, getAudioFileName(audioBlob));
    formData.set("saveTranscript", "false");
    if (language) {
        formData.set("language", language);
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/ai/transcribe-audio", {
        method: "POST",
        baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAiAgentApiBaseUrl"])(),
        headers,
        body: formData
    });
    return response.data;
}
async function synthesizeAssistantVoice(text, language) {
    const headers = await getTranscriptionAuthHeaders();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].aiAssistant, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/ai/synthesize-speech", {
        method: "POST",
        baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAiAgentApiBaseUrl"])(),
        headers,
        body: {
            text,
            language
        }
    });
    return response.data;
}
function createAssistantVoiceAudioUrl(result) {
    const binary = window.atob(result.audioBase64);
    const bytes = new Uint8Array(binary.length);
    for(let index = 0; index < binary.length; index += 1){
        bytes[index] = binary.charCodeAt(index);
    }
    return URL.createObjectURL(new Blob([
        bytes
    ], {
        type: result.mimeType
    }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/assistant-interaction.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantInteraction",
    ()=>AssistantInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-client] (ecmascript) <export default as IconLoader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMapPin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMapPin.mjs [app-client] (ecmascript) <export default as IconMapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$voice$2d$first$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/assistant-voice-first-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/voice-avatar-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-consent-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-metadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voice-transcription.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const VOICE_RECORDING_TIMEOUT_MS = 8000;
function getRecordingErrorMessage(errorCode, t) {
    switch(errorCode){
        case "not-allowed":
        case "service-not-allowed":
            return t("dashboard.assistant.speechErrors.permissionDenied");
        case "audio-capture":
            return t("dashboard.assistant.speechErrors.noMicrophone");
        case "no-speech":
            return t("dashboard.assistant.speechErrors.noSpeech");
        case "network":
            return t("dashboard.assistant.speechErrors.network");
        default:
            return t("dashboard.assistant.speechErrors.startFailed");
    }
}
function getPreferredRecordingMimeType() {
    const supportedTypes = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4"
    ];
    return supportedTypes.find((mimeType)=>MediaRecorder.isTypeSupported(mimeType));
}
function getFirstName(fullName) {
    const trimmedName = fullName === null || fullName === void 0 ? void 0 : fullName.trim();
    if (!trimmedName) {
        return null;
    }
    var _trimmedName_split_;
    return (_trimmedName_split_ = trimmedName.split(/\s+/)[0]) !== null && _trimmedName_split_ !== void 0 ? _trimmedName_split_ : null;
}
function AssistantInteraction(param) {
    let { isRecording = false, headlineClassName, initialCategory, initialTopic } = param;
    _s();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRecordingActive, setIsRecordingActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranscribing, setIsTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speechError, setSpeechError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [liveTranscript, setLiveTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceAvatarState, setVoiceAvatarState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [activeVoiceCaptureTarget, setActiveVoiceCaptureTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingVoiceReviewBlob, setPendingVoiceReviewBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMetadataEnabled, setIsMetadataEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMetadataCapturing, setIsMetadataCapturing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assistantFirstName, setAssistantFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t("dashboard.assistant.userName"));
    const [metadataError, setMetadataError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportMetadata, setReportMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { pendingConsentRequirement, isGrantingConsent, captureConsentError, clearPendingConsent, grantPendingConsent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"])();
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const recordingStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldProcessRecordingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasHandledInitialRecordingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const autoStopRecordingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveFinalTranscriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const recordingDecisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const transcriptionLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantInteraction.useMemo[transcriptionLanguage]": ()=>{
            return i18n.resolvedLanguage === "es" || i18n.language === "es" ? "es" : "en";
        }
    }["AssistantInteraction.useMemo[transcriptionLanguage]"], [
        i18n.language,
        i18n.resolvedLanguage
    ]);
    const livePreviewLanguage = transcriptionLanguage === "es" ? "es-ES" : "en-US";
    const continueToConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[continueToConversation]": function() {
            let startVoiceMode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            const params = new URLSearchParams({
                view: "assistantconversation"
            });
            if (startVoiceMode) {
                params.set("voice", "1");
            }
            if (initialCategory) {
                params.set("category", initialCategory);
            }
            if (initialTopic) {
                params.set("topic", initialTopic);
            }
            if (reportMetadata) {
                params.set("metadataCapture", "1");
            }
            router.push("/dashboard?".concat(params.toString()));
        }
    }["AssistantInteraction.useCallback[continueToConversation]"], [
        initialCategory,
        initialTopic,
        reportMetadata,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantInteraction.useEffect": ()=>{
            var _getAuthSession;
            let isActive = true;
            const sessionFirstName = getFirstName((_getAuthSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthSession"])()) === null || _getAuthSession === void 0 ? void 0 : _getAuthSession.user.fullName);
            if (sessionFirstName) {
                setAssistantFirstName(sessionFirstName);
            }
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])().then({
                "AssistantInteraction.useEffect": (user)=>{
                    const apiFirstName = getFirstName(user.fullName);
                    if (isActive && apiFirstName) {
                        setAssistantFirstName(apiFirstName);
                    }
                }
            }["AssistantInteraction.useEffect"]).catch({
                "AssistantInteraction.useEffect": ()=>{
                    if (isActive && !sessionFirstName) {
                        setAssistantFirstName(t("dashboard.assistant.userName"));
                    }
                }
            }["AssistantInteraction.useEffect"]);
            return ({
                "AssistantInteraction.useEffect": ()=>{
                    isActive = false;
                }
            })["AssistantInteraction.useEffect"];
        }
    }["AssistantInteraction.useEffect"], [
        t
    ]);
    const clearAutoStopRecordingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[clearAutoStopRecordingTimer]": ()=>{
            if (autoStopRecordingTimerRef.current) {
                clearTimeout(autoStopRecordingTimerRef.current);
                autoStopRecordingTimerRef.current = null;
            }
        }
    }["AssistantInteraction.useCallback[clearAutoStopRecordingTimer]"], []);
    const cleanupRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[cleanupRecording]": ()=>{
            var _recordingStreamRef_current;
            clearAutoStopRecordingTimer();
            (_recordingStreamRef_current = recordingStreamRef.current) === null || _recordingStreamRef_current === void 0 ? void 0 : _recordingStreamRef_current.getTracks().forEach({
                "AssistantInteraction.useCallback[cleanupRecording]": (track)=>track.stop()
            }["AssistantInteraction.useCallback[cleanupRecording]"]);
            recordingStreamRef.current = null;
            mediaRecorderRef.current = null;
        }
    }["AssistantInteraction.useCallback[cleanupRecording]"], [
        clearAutoStopRecordingTimer
    ]);
    const stopLiveTranscriptPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[stopLiveTranscriptPreview]": ()=>{
            if (!liveRecognitionRef.current) {
                return;
            }
            liveRecognitionRef.current.onend = null;
            liveRecognitionRef.current.onresult = null;
            liveRecognitionRef.current.onerror = null;
            try {
                liveRecognitionRef.current.stop();
            } catch (e) {
                liveRecognitionRef.current.abort();
            }
            liveRecognitionRef.current = null;
        }
    }["AssistantInteraction.useCallback[stopLiveTranscriptPreview]"], []);
    const startLiveTranscriptPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[startLiveTranscriptPreview]": ()=>{
            var _SpeechRecognition;
            const recognitionCtor = (_SpeechRecognition = window.SpeechRecognition) !== null && _SpeechRecognition !== void 0 ? _SpeechRecognition : window.webkitSpeechRecognition;
            if (!recognitionCtor) {
                return false;
            }
            stopLiveTranscriptPreview();
            const recognition = new recognitionCtor();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = livePreviewLanguage;
            recognition.maxAlternatives = 1;
            liveFinalTranscriptRef.current = "";
            recognition.onresult = ({
                "AssistantInteraction.useCallback[startLiveTranscriptPreview]": (event)=>{
                    let finalChunk = "";
                    let interimChunk = "";
                    for(let index = event.resultIndex; index < event.results.length; index += 1){
                        var _result__transcript, _result_;
                        const result = event.results[index];
                        const transcript = (_result_ = result[0]) === null || _result_ === void 0 ? void 0 : (_result__transcript = _result_.transcript) === null || _result__transcript === void 0 ? void 0 : _result__transcript.trim();
                        if (!transcript) {
                            continue;
                        }
                        if (result.isFinal) {
                            finalChunk = "".concat(finalChunk, " ").concat(transcript).trim();
                        } else {
                            interimChunk = "".concat(interimChunk, " ").concat(transcript).trim();
                        }
                    }
                    if (finalChunk) {
                        liveFinalTranscriptRef.current = "".concat(liveFinalTranscriptRef.current, " ").concat(finalChunk).trim();
                    }
                    setLiveTranscript([
                        liveFinalTranscriptRef.current,
                        interimChunk
                    ].filter(Boolean).join(" "));
                    if (finalChunk || interimChunk) {
                        // Voice state: the browser recognizer has detected user speech.
                        setVoiceAvatarState("userSpeaking");
                        clearAutoStopRecordingTimer();
                        autoStopRecordingTimerRef.current = setTimeout({
                            "AssistantInteraction.useCallback[startLiveTranscriptPreview]": ()=>{
                                const mediaRecorder = mediaRecorderRef.current;
                                if ((mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.state) === "recording") {
                                    stopLiveTranscriptPreview();
                                    mediaRecorder.stop();
                                }
                            }
                        }["AssistantInteraction.useCallback[startLiveTranscriptPreview]"], finalChunk ? 900 : 1800);
                    }
                }
            })["AssistantInteraction.useCallback[startLiveTranscriptPreview]"];
            recognition.onerror = ({
                "AssistantInteraction.useCallback[startLiveTranscriptPreview]": ()=>{
                    liveRecognitionRef.current = null;
                    clearAutoStopRecordingTimer();
                    autoStopRecordingTimerRef.current = setTimeout({
                        "AssistantInteraction.useCallback[startLiveTranscriptPreview]": ()=>{
                            const mediaRecorder = mediaRecorderRef.current;
                            if ((mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.state) === "recording") {
                                mediaRecorder.stop();
                            }
                        }
                    }["AssistantInteraction.useCallback[startLiveTranscriptPreview]"], 2500);
                }
            })["AssistantInteraction.useCallback[startLiveTranscriptPreview]"];
            recognition.onend = ({
                "AssistantInteraction.useCallback[startLiveTranscriptPreview]": ()=>{
                    if (liveRecognitionRef.current === recognition) {
                        liveRecognitionRef.current = null;
                    }
                }
            })["AssistantInteraction.useCallback[startLiveTranscriptPreview]"];
            liveRecognitionRef.current = recognition;
            try {
                recognition.start();
                return true;
            } catch (e) {
                liveRecognitionRef.current = null;
                return false;
            }
        }
    }["AssistantInteraction.useCallback[startLiveTranscriptPreview]"], [
        clearAutoStopRecordingTimer,
        livePreviewLanguage,
        stopLiveTranscriptPreview
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantInteraction.useEffect": ()=>{
            return ({
                "AssistantInteraction.useEffect": ()=>{
                    var _mediaRecorderRef_current;
                    if (((_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state) === "recording") {
                        shouldProcessRecordingRef.current = false;
                        mediaRecorderRef.current.stop();
                    }
                    clearAutoStopRecordingTimer();
                    stopLiveTranscriptPreview();
                    cleanupRecording();
                }
            })["AssistantInteraction.useEffect"];
        }
    }["AssistantInteraction.useEffect"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        stopLiveTranscriptPreview
    ]);
    const handleRecordedAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[handleRecordedAudio]": async (mimeType)=>{
            const audioBlob = new Blob(audioChunksRef.current, {
                type: mimeType || "audio/webm"
            });
            shouldProcessRecordingRef.current = false;
            audioChunksRef.current = [];
            cleanupRecording();
            if (!audioBlob.size) {
                setIsTranscribing(false);
                setVoiceAvatarState("idle");
                setSpeechError(getRecordingErrorMessage("no-speech", t));
                setActiveVoiceCaptureTarget(null);
                return;
            }
            try {
                setPendingVoiceReviewBlob(audioBlob);
                setSpeechError(null);
                setVoiceAvatarState("idle");
            } catch (error) {
                setVoiceAvatarState("idle");
                setSpeechError(error instanceof Error ? error.message : getRecordingErrorMessage("network", t));
            } finally{
                setIsTranscribing(false);
                setActiveVoiceCaptureTarget(null);
            }
        }
    }["AssistantInteraction.useCallback[handleRecordedAudio]"], [
        cleanupRecording,
        t
    ]);
    const startVoiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[startVoiceRecording]": async (target)=>{
            var _navigator_mediaDevices;
            if (!((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia) || typeof MediaRecorder === "undefined") {
                setVoiceAvatarState("idle");
                setSpeechError(t("dashboard.assistant.speechErrors.unsupported"));
                return;
            }
            setActiveVoiceCaptureTarget(target);
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].audioTranscription);
            } catch (error) {
                if (captureConsentError(error)) {
                    setVoiceAvatarState("idle");
                    setActiveVoiceCaptureTarget(null);
                    return;
                }
                setSpeechError(error instanceof Error ? error.message : "Consent status could not be checked.");
                setVoiceAvatarState("idle");
                setActiveVoiceCaptureTarget(null);
                return;
            }
            setSpeechError(null);
            setLiveTranscript("");
            setIsTranscribing(false);
            audioChunksRef.current = [];
            shouldProcessRecordingRef.current = true;
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const mimeType = getPreferredRecordingMimeType();
                const mediaRecorder = new MediaRecorder(stream, mimeType ? {
                    mimeType
                } : undefined);
                recordingStreamRef.current = stream;
                mediaRecorderRef.current = mediaRecorder;
                mediaRecorder.ondataavailable = ({
                    "AssistantInteraction.useCallback[startVoiceRecording]": (event)=>{
                        if (event.data.size > 0) {
                            audioChunksRef.current.push(event.data);
                            setVoiceAvatarState("userSpeaking");
                        }
                    }
                })["AssistantInteraction.useCallback[startVoiceRecording]"];
                mediaRecorder.onerror = ({
                    "AssistantInteraction.useCallback[startVoiceRecording]": ()=>{
                        shouldProcessRecordingRef.current = false;
                        setIsRecordingActive(false);
                        setIsTranscribing(false);
                        setActiveVoiceCaptureTarget(null);
                        setVoiceAvatarState("idle");
                        cleanupRecording();
                        setSpeechError(getRecordingErrorMessage("audio-capture", t));
                    }
                })["AssistantInteraction.useCallback[startVoiceRecording]"];
                mediaRecorder.onstop = ({
                    "AssistantInteraction.useCallback[startVoiceRecording]": ()=>{
                        setIsRecordingActive(false);
                        if (!shouldProcessRecordingRef.current) {
                            audioChunksRef.current = [];
                            cleanupRecording();
                            setActiveVoiceCaptureTarget(null);
                            setVoiceAvatarState("idle");
                            return;
                        }
                        setVoiceAvatarState("listening");
                        setIsTranscribing(true);
                        void handleRecordedAudio(mediaRecorder.mimeType || mimeType || "audio/webm");
                    }
                })["AssistantInteraction.useCallback[startVoiceRecording]"];
                mediaRecorder.start();
                setVoiceAvatarState("listening");
                const hasLiveEndpointing = startLiveTranscriptPreview();
                clearAutoStopRecordingTimer();
                autoStopRecordingTimerRef.current = setTimeout({
                    "AssistantInteraction.useCallback[startVoiceRecording]": ()=>{
                        const activeRecorder = mediaRecorderRef.current;
                        if ((activeRecorder === null || activeRecorder === void 0 ? void 0 : activeRecorder.state) === "recording") {
                            if (hasLiveEndpointing) {
                                stopLiveTranscriptPreview();
                            }
                            activeRecorder.stop();
                        }
                    }
                }["AssistantInteraction.useCallback[startVoiceRecording]"], VOICE_RECORDING_TIMEOUT_MS);
                setIsRecordingActive(true);
            } catch (error) {
                stopLiveTranscriptPreview();
                cleanupRecording();
                setActiveVoiceCaptureTarget(null);
                setVoiceAvatarState("idle");
                const errorCode = error instanceof DOMException && error.name === "NotAllowedError" ? "not-allowed" : "audio-capture";
                setSpeechError(getRecordingErrorMessage(errorCode, t));
            }
        }
    }["AssistantInteraction.useCallback[startVoiceRecording]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        handleRecordedAudio,
        startLiveTranscriptPreview,
        stopLiveTranscriptPreview,
        t
    ]);
    const stopVoiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[stopVoiceRecording]": ()=>{
            clearAutoStopRecordingTimer();
            const mediaRecorder = mediaRecorderRef.current;
            stopLiveTranscriptPreview();
            if (!mediaRecorder || mediaRecorder.state === "inactive") {
                cleanupRecording();
                setIsRecordingActive(false);
                setVoiceAvatarState("idle");
                return;
            }
            mediaRecorder.stop();
        }
    }["AssistantInteraction.useCallback[stopVoiceRecording]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        stopLiveTranscriptPreview
    ]);
    const cancelVoiceCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[cancelVoiceCapture]": ()=>{
            recordingDecisionRef.current = "cancel";
            clearAutoStopRecordingTimer();
            shouldProcessRecordingRef.current = false;
            stopLiveTranscriptPreview();
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.stop();
            } else {
                cleanupRecording();
            }
            audioChunksRef.current = [];
            setLiveTranscript("");
            setIsRecordingActive(false);
            setIsTranscribing(false);
            setActiveVoiceCaptureTarget(null);
            setPendingVoiceReviewBlob(null);
            setVoiceAvatarState("idle");
        }
    }["AssistantInteraction.useCallback[cancelVoiceCapture]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        stopLiveTranscriptPreview
    ]);
    const confirmVoiceReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[confirmVoiceReview]": async ()=>{
            if (!pendingVoiceReviewBlob) {
                return;
            }
            setIsTranscribing(true);
            setSpeechError(null);
            setVoiceAvatarState("listening");
            try {
                const transcription = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transcribeAssistantVoice"])(pendingVoiceReviewBlob, transcriptionLanguage);
                const transcript = transcription.transcript.trim();
                if (!transcript) {
                    setSpeechError(getRecordingErrorMessage("no-speech", t));
                    setVoiceAvatarState("idle");
                    return;
                }
                setMessage({
                    "AssistantInteraction.useCallback[confirmVoiceReview]": (currentMessage)=>[
                            currentMessage.trim(),
                            transcript
                        ].filter(Boolean).join(" ")
                }["AssistantInteraction.useCallback[confirmVoiceReview]"]);
                setPendingVoiceReviewBlob(null);
                setVoiceAvatarState("idle");
            } catch (error) {
                setVoiceAvatarState("idle");
                setSpeechError(error instanceof Error ? error.message : getRecordingErrorMessage("network", t));
            } finally{
                setIsTranscribing(false);
            }
        }
    }["AssistantInteraction.useCallback[confirmVoiceReview]"], [
        pendingVoiceReviewBlob,
        t,
        transcriptionLanguage
    ]);
    const cancelVoiceReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[cancelVoiceReview]": ()=>{
            setPendingVoiceReviewBlob(null);
            setSpeechError(null);
            setVoiceAvatarState("idle");
        }
    }["AssistantInteraction.useCallback[cancelVoiceReview]"], []);
    const toggleTranscriptionRecording = ()=>{
        if (activeVoiceCaptureTarget === "recording" && isRecordingActive) {
            stopVoiceRecording();
            return;
        }
        if (isRecordingActive) {
            return;
        }
        void startVoiceRecording("recording");
    };
    const startAvatarVoiceMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantInteraction.useCallback[startAvatarVoiceMode]": ()=>{
            if (isRecordingActive || isTranscribing || pendingVoiceReviewBlob) {
                return;
            }
            continueToConversation(true);
        }
    }["AssistantInteraction.useCallback[startAvatarVoiceMode]"], [
        continueToConversation,
        isRecordingActive,
        isTranscribing,
        pendingVoiceReviewBlob
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantInteraction.useEffect": ()=>{
            if (!isRecording || hasHandledInitialRecordingRef.current) {
                return;
            }
            hasHandledInitialRecordingRef.current = true;
            void startVoiceRecording("recording");
        }
    }["AssistantInteraction.useEffect"], [
        isRecording,
        startVoiceRecording
    ]);
    const handleSubmit = (event)=>{
        if (isRecordingActive || isTranscribing || !message.trim()) {
            event.preventDefault();
        }
        if (activeVoiceCaptureTarget === "recording" && isRecordingActive) {
            stopVoiceRecording();
        }
    };
    const enableMetadataCapture = async ()=>{
        setIsMetadataCapturing(true);
        setMetadataError(null);
        try {
            const metadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureReportMetadata"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveReportMetadata"])(metadata);
            setReportMetadata(metadata);
            setIsMetadataEnabled(true);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearReportMetadata"])();
            setReportMetadata(null);
            setIsMetadataEnabled(false);
            setMetadataError(error instanceof Error ? error.message : t("dashboard.assistant.metadataCaptureFailed"));
        } finally{
            setIsMetadataCapturing(false);
        }
    };
    const disableMetadataCapture = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearReportMetadata"])();
        setReportMetadata(null);
        setIsMetadataEnabled(false);
        setMetadataError(null);
    };
    const toggleMetadataCapture = ()=>{
        if (isMetadataCapturing) {
            return;
        }
        if (isMetadataEnabled) {
            disableMetadataCapture();
            return;
        }
        void enableMetadataCapture();
    };
    const handleAllowPendingConsent = async ()=>{
        const requirement = pendingConsentRequirement;
        try {
            await grantPendingConsent();
            setSpeechError(null);
            if ((requirement === null || requirement === void 0 ? void 0 : requirement.source) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].audioTranscription.source) {
                void startVoiceRecording(activeVoiceCaptureTarget !== null && activeVoiceCaptureTarget !== void 0 ? activeVoiceCaptureTarget : "recording");
            }
        } catch (error) {
            setSpeechError(error instanceof Error ? error.message : "Consent could not be saved.");
        }
    };
    const recordingSpacingClass = "mt-7";
    const isTranscriptionCaptureActive = activeVoiceCaptureTarget === "recording" && isRecordingActive;
    const shouldShowSendButton = message.trim().length > 0;
    const metadataStatusText = isMetadataCapturing ? t("dashboard.assistant.metadataCapturing") : metadataError ? t("dashboard.assistant.metadataUnavailable") : reportMetadata ? reportMetadata.location ? t("dashboard.assistant.metadataReady") : t("dashboard.assistant.metadataDeviceOnly") : t("dashboard.assistant.metadataDescription");
    const resolvedVoiceAvatarState = isTranscribing ? "processing" : liveTranscript ? "userSpeaking" : isRecordingActive ? voiceAvatarState === "userSpeaking" ? "userSpeaking" : "listening" : "idle";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col items-center px-2 pb-2 pt-4 sm:px-4 sm:pb-4 sm:pt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceAvatarAnimation"], {
                state: resolvedVoiceAvatarState,
                size: "large",
                alt: t("dashboard.assistant.sphereAlt")
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: headlineClassName,
                children: [
                    t("dashboard.assistant.greetingPrefix"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#3f7de0]",
                        children: assistantFirstName
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                        lineNumber: 790,
                        columnNumber: 9
                    }, this),
                    t("dashboard.assistant.greetingSuffix")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                lineNumber: 788,
                columnNumber: 7
            }, this),
            pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 w-full max-w-[560px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                    requirement: pendingConsentRequirement,
                    isSubmitting: isGrantingConsent,
                    onAllow: ()=>{
                        void handleAllowPendingConsent();
                    },
                    onDecline: clearPendingConsent
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                    lineNumber: 796,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                lineNumber: 795,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                "aria-live": "polite",
                children: speechError ? speechError : isTranscribing ? t("dashboard.assistant.transcribing") : isRecordingActive ? t("dashboard.assistant.listening") : ""
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                lineNumber: 807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(recordingSpacingClass, " mb-[188px] w-full max-w-[1120px] sm:mb-[198px] lg:mb-[188px]"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: "/dashboard",
                        method: "get",
                        onSubmit: handleSubmit,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "view",
                                value: "assistantconversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                lineNumber: 826,
                                columnNumber: 11
                            }, this),
                            initialCategory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "category",
                                value: initialCategory
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                lineNumber: 828,
                                columnNumber: 13
                            }, this) : null,
                            initialTopic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "topic",
                                value: initialTopic
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                lineNumber: 831,
                                columnNumber: 13
                            }, this) : null,
                            reportMetadata ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "metadataCapture",
                                value: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$voice$2d$first$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantVoiceFirstInput"], {
                                value: message,
                                name: "message",
                                onChange: setMessage,
                                placeholder: t("dashboard.assistant.typeYourResponse"),
                                onDictationClick: toggleTranscriptionRecording,
                                dictationDisabled: isTranscribing,
                                dictationLabel: t("dashboard.assistant.toggleMicrophone"),
                                onVoiceFirstClick: startAvatarVoiceMode,
                                voiceFirstDisabled: isTranscribing,
                                voiceFirstLabel: "Start avatar voice mode",
                                sendLabel: t("common.send"),
                                showSendButton: shouldShowSendButton,
                                captureState: isTranscriptionCaptureActive ? "listening" : pendingVoiceReviewBlob ? "review" : "idle",
                                captureLabel: isTranscriptionCaptureActive ? "Listening..." : "Use transcribed text",
                                cancelLabel: t("common.cancel"),
                                confirmLabel: "Use voice text",
                                onCancelCapture: isTranscriptionCaptureActive ? cancelVoiceCapture : cancelVoiceReview,
                                onConfirmCapture: ()=>{
                                    if (isTranscriptionCaptureActive) {
                                        recordingDecisionRef.current = "confirm";
                                        stopVoiceRecording();
                                        return;
                                    }
                                    void confirmVoiceReview();
                                },
                                error: speechError
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                lineNumber: 836,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-col gap-2 sm:flex-row sm:items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[54px] flex-1 items-center justify-between rounded-full bg-white px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-6 w-6 items-center justify-center rounded-full ".concat(metadataError ? "bg-[#fee2e2] text-[#dc2626]" : reportMetadata ? "bg-[#dcfce7] text-[#16a34a]" : "bg-[#e9f1ff] text-[#3f7de0]"),
                                            children: isMetadataCapturing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                size: 12,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                lineNumber: 894,
                                                columnNumber: 21
                                            }, this) : metadataError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                lineNumber: 896,
                                                columnNumber: 21
                                            }, this) : reportMetadata ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                lineNumber: 898,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMapPin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMapPin$3e$__["IconMapPin"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                lineNumber: 900,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                            lineNumber: 884,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-semibold leading-none text-[#1f2a3a]",
                                                    children: t("dashboard.assistant.metadataCapture")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8b97a8]",
                                                    children: metadataStatusText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                    lineNumber: 883,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggleMetadataCapture,
                                    disabled: isMetadataCapturing,
                                    "aria-label": t("dashboard.assistant.toggleMetadataCapture"),
                                    "aria-pressed": isMetadataEnabled,
                                    className: "inline-flex h-5 w-8 items-center rounded-full p-[2px] transition ".concat(isMetadataEnabled ? "bg-[#16a34a]" : "bg-[#d4dbe4]", " ").concat(isMetadataCapturing ? "cursor-wait opacity-80" : ""),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-4 w-4 rounded-full bg-white transition ".concat(isMetadataEnabled ? "translate-x-3" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                        lineNumber: 922,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                            lineNumber: 882,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                        lineNumber: 881,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/assistant-interaction.tsx",
        lineNumber: 781,
        columnNumber: 5
    }, this);
}
_s(AssistantInteraction, "xB9UJum4qaWPkRE6MS6IBYSkYAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"]
    ];
});
_c = AssistantInteraction;
var _c;
__turbopack_context__.k.register(_c, "AssistantInteraction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/assistant-conversation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyTimelineAssistantTurnKind",
    ()=>classifyTimelineAssistantTurnKind,
    "getAssistantAuthHeaders",
    ()=>getAssistantAuthHeaders,
    "sanitizeTimelineAssistantInput",
    ()=>sanitizeTimelineAssistantInput,
    "sendTimelineAssistantMessage",
    ()=>sendTimelineAssistantMessage,
    "shouldCallTimelineAssistant",
    ()=>shouldCallTimelineAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/text-encoding.ts [app-client] (ecmascript)");
;
;
;
;
const MAX_TIMELINE_CONVERSATION_MESSAGES = 100;
function classifyTimelineAssistantTurnKind(message) {
    const normalized = message.trim().toLowerCase();
    if (!normalized) {
        return "general_conversation";
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBrokenTextEncoding"])(message)) {
        return "encoding_error";
    }
    if (/\b(are you (answering|using)|why are you using|do you always answer with|every time)\b/.test(normalized) && /\b(bullet point|bullet points|bullets)\b/.test(normalized)) {
        return "format_preference_question";
    }
    if (/\b(please answer in paragraphs|answer in paragraphs|please use paragraphs|use paragraphs|not bullet points|don't use bullets|do not use bullets|stop using bullet points|without bullet points|please use bullet points|use bullet points|answer in bullet points|give me bullet points|please use bullets|mix|mixed format)\b/.test(normalized)) {
        return "format_preference_set";
    }
    if (/\b(can you speak|speak in|translate|bangla|bengali|arabic|hindi|spanish)\b/.test(normalized)) {
        return "language_or_translation";
    }
    if (/\b(scripted|same thing every time|repeating|too generic|wrong answer)\b/.test(normalized)) {
        return "meta_feedback";
    }
    if (/\b(timeline|report|organise this|organize this|build (a )?timeline)\b/.test(normalized)) {
        return "timeline_request";
    }
    if (/\b(hit me|assaulted|attacked|threatened|harassed|abused|happened|screenshots|photos|evidence|where|when|who|facebook|boss|work|home)\b/.test(normalized)) {
        return "incident_detail";
    }
    return "general_conversation";
}
function shouldCallTimelineAssistant(input) {
    const turnKind = classifyTimelineAssistantTurnKind(input.message);
    if (turnKind === "encoding_error" || turnKind === "general_conversation" || turnKind === "meta_feedback" || turnKind === "language_or_translation" || turnKind === "format_preference_question" || turnKind === "format_preference_set") {
        return false;
    }
    const activeIncidentExists = Boolean(input.incidentCategory) || Object.values(input.timeline).some((value)=>value.trim().length > 0) || input.conversation.some((entry)=>entry.role === "user" && classifyTimelineAssistantTurnKind(entry.content) === "incident_detail");
    if (!activeIncidentExists) {
        return false;
    }
    return turnKind === "incident_detail" || turnKind === "timeline_request";
}
function sanitizeTimelineAssistantInput(input) {
    const filteredConversation = input.conversation.filter((entry)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBrokenTextEncoding"])(entry.content));
    const filteredTimeline = Object.fromEntries(Object.entries(input.timeline).filter((param)=>{
        let [, value] = param;
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBrokenTextEncoding"])(value);
    }));
    return {
        message: input.message,
        conversation: trimConversationForTimelineAssistant(filteredConversation),
        timeline: filteredTimeline,
        encodingWarning: filteredConversation.length !== input.conversation.length || Object.keys(filteredTimeline).length !== Object.keys(input.timeline).length
    };
}
function trimConversationForTimelineAssistant(conversation) {
    if (conversation.length <= MAX_TIMELINE_CONVERSATION_MESSAGES) {
        return conversation;
    }
    return conversation.slice(-MAX_TIMELINE_CONVERSATION_MESSAGES);
}
const wait = (milliseconds)=>new Promise((resolve)=>{
        window.setTimeout(resolve, milliseconds);
    });
async function getAssistantAuthHeaders() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
}
async function sendTimelineAssistantMessage(input) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBrokenTextEncoding"])(input.message)) {
        return {
            assistantMessage: "The message looks like it was received with broken text encoding. Please resend it.",
            nextQuestion: "",
            timeline: input.timeline,
            readyForSubmission: false,
            confidence: "low",
            citations: [],
            rag: {
                used: false,
                unavailable: false,
                resultCount: 0
            },
            reviewStatus: "encoding_error",
            encodingWarning: true
        };
    }
    const sanitizedInput = sanitizeTimelineAssistantInput(input);
    const normalizedInput = {
        ...input,
        conversation: sanitizedInput.conversation,
        timeline: sanitizedInput.timeline
    };
    const headers = await getAssistantAuthHeaders();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].aiAssistant, headers);
    let response;
    try {
        response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/rag/timeline-assistant", {
            method: "POST",
            baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])(),
            headers,
            body: normalizedInput
        });
    } catch (error) {
        if (!(error instanceof TypeError)) {
            throw error;
        }
        await wait(300);
        response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/rag/timeline-assistant", {
            method: "POST",
            baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])(),
            headers,
            body: normalizedInput
        });
    }
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/assistant-draft.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAllAssistantConversationDrafts",
    ()=>clearAllAssistantConversationDrafts,
    "clearAssistantConversationDraft",
    ()=>clearAssistantConversationDraft,
    "getAssistantConversationDraft",
    ()=>getAssistantConversationDraft,
    "saveAssistantConversationDraft",
    ()=>saveAssistantConversationDraft
]);
const ASSISTANT_DRAFT_STORAGE_KEY = "safespeak_assistant_conversation_drafts";
function getAssistantDraftScopeKey(input) {
    if (input === null || input === void 0 ? void 0 : input.topic) {
        return "topic:".concat(input.topic);
    }
    if (input === null || input === void 0 ? void 0 : input.incidentCategory) {
        return "category:".concat(input.incidentCategory);
    }
    return "topic:general_assistant";
}
function getStoredAssistantDraftMap() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(ASSISTANT_DRAFT_STORAGE_KEY);
    if (!raw) {
        return {};
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        window.sessionStorage.removeItem(ASSISTANT_DRAFT_STORAGE_KEY);
        return {};
    }
}
function saveStoredAssistantDraftMap(draftMap) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.setItem(ASSISTANT_DRAFT_STORAGE_KEY, JSON.stringify(draftMap));
}
function getAssistantConversationDraft(input) {
    const draftMap = getStoredAssistantDraftMap();
    const scopeKey = getAssistantDraftScopeKey(input);
    var _draftMap_scopeKey;
    return (_draftMap_scopeKey = draftMap[scopeKey]) !== null && _draftMap_scopeKey !== void 0 ? _draftMap_scopeKey : null;
}
function saveAssistantConversationDraft(draft, input) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const draftMap = getStoredAssistantDraftMap();
    var _draft_topic, _draft_incidentCategory;
    const scopeKey = getAssistantDraftScopeKey({
        topic: (_draft_topic = draft.topic) !== null && _draft_topic !== void 0 ? _draft_topic : input === null || input === void 0 ? void 0 : input.topic,
        incidentCategory: (_draft_incidentCategory = draft.incidentCategory) !== null && _draft_incidentCategory !== void 0 ? _draft_incidentCategory : input === null || input === void 0 ? void 0 : input.incidentCategory
    });
    draftMap[scopeKey] = {
        ...draft,
        updatedAt: new Date().toISOString()
    };
    saveStoredAssistantDraftMap(draftMap);
}
function clearAssistantConversationDraft(input) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const draftMap = getStoredAssistantDraftMap();
    const scopeKey = getAssistantDraftScopeKey(input);
    delete draftMap[scopeKey];
    if (Object.keys(draftMap).length === 0) {
        window.sessionStorage.removeItem(ASSISTANT_DRAFT_STORAGE_KEY);
        return;
    }
    saveStoredAssistantDraftMap(draftMap);
}
function clearAllAssistantConversationDrafts() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.removeItem(ASSISTANT_DRAFT_STORAGE_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/assistant-triage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAssistantTriageNarrative",
    ()=>buildAssistantTriageNarrative,
    "clearAssistantTriageSource",
    ()=>clearAssistantTriageSource,
    "fetchAssistantTriageReport",
    ()=>fetchAssistantTriageReport,
    "getAssistantTriageSource",
    ()=>getAssistantTriageSource,
    "saveAssistantTriageSource",
    ()=>saveAssistantTriageSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-conversation.ts [app-client] (ecmascript)");
;
;
;
const ASSISTANT_TRIAGE_CONTEXT_KEY = "safespeak_assistant_triage_context";
const MAX_TRIAGE_NARRATIVE_LENGTH = 12000;
function trimNarrative(value) {
    const trimmed = value.trim();
    if (trimmed.length <= MAX_TRIAGE_NARRATIVE_LENGTH) {
        return trimmed;
    }
    return trimmed.slice(trimmed.length - MAX_TRIAGE_NARRATIVE_LENGTH);
}
function buildAssistantTriageNarrative(conversation) {
    const transcript = conversation.map((entry)=>"".concat(entry.role === "assistant" ? "Assistant" : "User", ": ").concat(entry.content)).join("\n");
    return trimNarrative(transcript);
}
function saveAssistantTriageSource(input) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const source = {
        conversationSessionId: input.conversationSessionId,
        conversation: input.conversation,
        timeline: input.timeline,
        narrative: buildAssistantTriageNarrative(input.conversation),
        updatedAt: new Date().toISOString(),
        incidentCategory: input.incidentCategory
    };
    window.sessionStorage.setItem(ASSISTANT_TRIAGE_CONTEXT_KEY, JSON.stringify(source));
}
function getAssistantTriageSource() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(ASSISTANT_TRIAGE_CONTEXT_KEY);
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        window.sessionStorage.removeItem(ASSISTANT_TRIAGE_CONTEXT_KEY);
        return null;
    }
}
function clearAssistantTriageSource() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.removeItem(ASSISTANT_TRIAGE_CONTEXT_KEY);
}
async function fetchAssistantTriageReport(source, language) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssistantAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].triage, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/ai/triage-report", {
        method: "POST",
        baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])(),
        headers,
        body: {
            narrative: source.narrative,
            structuredFields: source.timeline,
            language,
            incidentCategory: source.incidentCategory
        }
    });
    return response.data.result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/assistant-voice-handoff.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAssistantVoiceHandoff",
    ()=>clearAssistantVoiceHandoff,
    "consumeAssistantVoiceHandoff",
    ()=>consumeAssistantVoiceHandoff,
    "saveAssistantVoiceHandoff",
    ()=>saveAssistantVoiceHandoff
]);
"use client";
const ASSISTANT_VOICE_HANDOFF_KEY = "safespeak.assistant.voice_handoff";
function readBlobAsDataUrl(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            if (typeof reader.result === "string") {
                resolve(reader.result);
                return;
            }
            reject(new Error("Voice recording could not be prepared."));
        };
        reader.onerror = ()=>{
            var _reader_error;
            reject((_reader_error = reader.error) !== null && _reader_error !== void 0 ? _reader_error : new Error("Voice recording could not be prepared."));
        };
        reader.readAsDataURL(blob);
    });
}
function dataUrlToBlob(dataUrl) {
    const [header, body] = dataUrl.split(",", 2);
    if (!header || !body) {
        throw new Error("Voice recording is invalid.");
    }
    const mimeTypeMatch = header.match(/data:(.*?);base64/);
    var _mimeTypeMatch_;
    const mimeType = (_mimeTypeMatch_ = mimeTypeMatch === null || mimeTypeMatch === void 0 ? void 0 : mimeTypeMatch[1]) !== null && _mimeTypeMatch_ !== void 0 ? _mimeTypeMatch_ : "audio/webm";
    const binary = window.atob(body);
    const bytes = new Uint8Array(binary.length);
    for(let index = 0; index < binary.length; index += 1){
        bytes[index] = binary.charCodeAt(index);
    }
    return new Blob([
        bytes
    ], {
        type: mimeType
    });
}
async function saveAssistantVoiceHandoff(blob) {
    const dataUrl = await readBlobAsDataUrl(blob);
    const payload = {
        dataUrl
    };
    window.sessionStorage.setItem(ASSISTANT_VOICE_HANDOFF_KEY, JSON.stringify(payload));
}
function consumeAssistantVoiceHandoff() {
    const raw = window.sessionStorage.getItem(ASSISTANT_VOICE_HANDOFF_KEY);
    if (!raw) {
        return null;
    }
    window.sessionStorage.removeItem(ASSISTANT_VOICE_HANDOFF_KEY);
    try {
        const parsed = JSON.parse(raw);
        return dataUrlToBlob(parsed.dataUrl);
    } catch (e) {
        return null;
    }
}
function clearAssistantVoiceHandoff() {
    window.sessionStorage.removeItem(ASSISTANT_VOICE_HANDOFF_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/conversation-flow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendConversationFlowMessage",
    ()=>appendConversationFlowMessage,
    "createConversationFlowSession",
    ()=>createConversationFlowSession,
    "fetchConversationFlowDetails",
    ()=>fetchConversationFlowDetails,
    "fetchConversationFlowRecommendations",
    ()=>fetchConversationFlowRecommendations,
    "fetchConversationFlowSupport",
    ()=>fetchConversationFlowSupport,
    "fetchConversationFlowTriage",
    ()=>fetchConversationFlowTriage,
    "getConversationFlowSession",
    ()=>getConversationFlowSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
async function getConversationHeaders() {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].aiAssistant, headers);
    return headers;
}
async function conversationApiRequest(path) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const headers = await getConversationHeaders();
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
            ...options,
            headers
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"] && error.status === 401) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAnonymousSession"])();
            const retryHeaders = await getConversationHeaders();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
                ...options,
                headers: retryHeaders
            });
        }
        throw error;
    }
}
async function createConversationFlowSession(input) {
    const response = await conversationApiRequest("/conversation-flow/sessions", {
        method: "POST",
        body: input
    });
    return response.data.session;
}
async function getConversationFlowSession(conversationSessionId) {
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(conversationSessionId), {});
    return response.data;
}
async function appendConversationFlowMessage(input) {
    var _input_language;
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(input.conversationSessionId, "/messages"), {
        method: "POST",
        body: {
            content: input.content,
            language: (_input_language = input.language) !== null && _input_language !== void 0 ? _input_language : "en"
        }
    });
    return response.data;
}
async function fetchConversationFlowTriage(conversationSessionId) {
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(conversationSessionId, "/triage"), {});
    return response.data;
}
async function fetchConversationFlowSupport(conversationSessionId) {
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(conversationSessionId, "/support"), {});
    return response.data;
}
async function fetchConversationFlowRecommendations(conversationSessionId) {
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(conversationSessionId, "/recommendations"), {});
    return response.data;
}
async function fetchConversationFlowDetails(conversationSessionId) {
    const response = await conversationApiRequest("/conversation-flow/sessions/".concat(conversationSessionId, "/details"), {});
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/dashboard-card-flows.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardActionHref",
    ()=>getDashboardActionHref,
    "getDashboardAssistantEntryHref",
    ()=>getDashboardAssistantEntryHref,
    "getDashboardAssistantTopicChips",
    ()=>getDashboardAssistantTopicChips,
    "getDashboardCardEntryHref",
    ()=>getDashboardCardEntryHref,
    "getDashboardCardFlow",
    ()=>getDashboardCardFlow,
    "isDashboardCardFlowId",
    ()=>isDashboardCardFlowId
]);
const dashboardCardFlows = {
    domestic_violence: {
        id: "domestic_violence",
        title: "Domestic Violence",
        categoryKey: "domestic_violence",
        flowType: "safety_support_report",
        targetView: "assistant",
        starterPrompt: "I may be experiencing domestic or family violence and I want to understand safe options.",
        safetyLevel: "high",
        nextActions: [
            {
                id: "start_report",
                label: "Start a safe report",
                description: "Open the report flow with domestic violence context."
            },
            {
                id: "find_support",
                label: "Find support services",
                description: "Browse support services with domestic violence context."
            },
            {
                id: "safety_plan",
                label: "Create safety plan",
                description: "Go to support guidance with safety planning focus."
            },
            {
                id: "talk_with_assistant",
                label: "Talk with SafeSpeak",
                description: "Start a guided assistant conversation with this topic."
            },
            {
                id: "quick_exit",
                label: "Use Quick Exit",
                description: "Leave the page immediately if it is not safe to continue."
            }
        ],
        disclaimers: [
            "SafeSpeak is not a crisis service.",
            "If you are in immediate danger, call 000.",
            "If it is safe, contact 1800RESPECT.",
            "This information is general information only."
        ]
    },
    racial_abuse: {
        id: "racial_abuse",
        title: "Racial Abuse",
        categoryKey: "racial_abuse",
        flowType: "report_guidance",
        targetView: "assistant",
        starterPrompt: "I experienced racial abuse and want to understand my options safely.",
        safetyLevel: "medium",
        nextActions: [
            {
                id: "start_report",
                label: "Start incident report",
                description: "Open the report flow with racial abuse context."
            },
            {
                id: "understand_reporting_options",
                label: "Understand reporting options",
                description: "Open guided reporting options with SafeSpeak."
            },
            {
                id: "find_support",
                label: "Find support",
                description: "Browse support services and community support options."
            },
            {
                id: "save_evidence",
                label: "Save evidence",
                description: "Go to the evidence step with this topic in context."
            },
            {
                id: "talk_with_assistant",
                label: "Talk with SafeSpeak",
                description: "Start a guided assistant conversation with this topic."
            }
        ],
        disclaimers: [
            "This information is general information only."
        ]
    },
    cyber_scam: {
        id: "cyber_scam",
        title: "Cyber Scam",
        categoryKey: "cyber_scam",
        flowType: "scam_analysis",
        targetView: "scamshieldintake",
        starterPrompt: "I think I may be dealing with a cyber scam and need help assessing it.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "Analysis starts only after you submit content for review."
        ]
    },
    migrant_challenges: {
        id: "migrant_challenges",
        title: "Migrant Challenges",
        categoryKey: "migrant_challenges",
        flowType: "support_guidance",
        targetView: "assistant",
        starterPrompt: "I am facing migrant-related challenges and want safe, culturally appropriate guidance.",
        safetyLevel: "medium",
        nextActions: [
            {
                id: "find_support",
                label: "Find migrant support services",
                description: "Browse support services with migrant support context."
            },
            {
                id: "understand_reporting_options",
                label: "Understand workplace/housing/school options",
                description: "Start a guided options conversation for this topic."
            },
            {
                id: "interpreter_guidance",
                label: "Ask for interpreter guidance",
                description: "Open support with interpreter and access needs in mind."
            },
            {
                id: "start_report",
                label: "Start a report",
                description: "Open the report flow with migrant challenge context."
            },
            {
                id: "talk_with_assistant",
                label: "Talk with SafeSpeak",
                description: "Start a guided assistant conversation with this topic."
            }
        ],
        disclaimers: [
            "This information is general information only."
        ]
    },
    general_assistant: {
        id: "general_assistant",
        title: "Let’s talk with SafeSpeak",
        categoryKey: "general_assistant",
        flowType: "general_assistant",
        targetView: "assistant",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "Choose a topic or start in general conversation."
        ]
    },
    scamshield: {
        id: "scamshield",
        title: "ScamShield",
        categoryKey: "cyber_scam",
        flowType: "scam_analysis",
        targetView: "scamshieldintake",
        starterPrompt: "I think I may be dealing with a cyber scam and need help assessing it.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "Analysis starts only after you submit content for review."
        ]
    },
    resources: {
        id: "resources",
        title: "Resources",
        flowType: "learning",
        targetView: "resources",
        safetyLevel: "low",
        nextActions: [],
        disclaimers: [
            "Browse learning resources without starting an AI or report flow."
        ]
    },
    local_intelligence: {
        id: "local_intelligence",
        title: "Local Intelligence",
        flowType: "learning",
        targetView: "localintelligence",
        safetyLevel: "low",
        nextActions: [],
        disclaimers: []
    },
    micro_cards: {
        id: "micro_cards",
        title: "Micro-Cards",
        flowType: "learning",
        targetView: "microcards",
        safetyLevel: "low",
        nextActions: [],
        disclaimers: []
    },
    workplace_issue: {
        id: "workplace_issue",
        title: "Workplace Issue",
        flowType: "general_assistant",
        targetView: "assistantconversation",
        starterPrompt: "I am dealing with a workplace issue and want to understand safe next steps.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "This information is general information only."
        ]
    },
    school_issue: {
        id: "school_issue",
        title: "School Issue",
        flowType: "general_assistant",
        targetView: "assistantconversation",
        starterPrompt: "I am dealing with a school-related issue and want to understand safe next steps.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "This information is general information only."
        ]
    },
    online_abuse: {
        id: "online_abuse",
        title: "Online Abuse",
        flowType: "general_assistant",
        targetView: "assistantconversation",
        starterPrompt: "I am experiencing online abuse and want to understand safe options.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "This information is general information only."
        ]
    },
    other: {
        id: "other",
        title: "Other",
        flowType: "general_assistant",
        targetView: "assistantconversation",
        starterPrompt: "Something happened and I want help understanding my options safely.",
        safetyLevel: "medium",
        nextActions: [],
        disclaimers: [
            "This information is general information only."
        ]
    }
};
const supportedFlowIds = Object.keys(dashboardCardFlows);
function isDashboardCardFlowId(value) {
    return Boolean(value && supportedFlowIds.includes(value));
}
function getDashboardCardFlow(id) {
    return dashboardCardFlows[id];
}
function getDashboardAssistantTopicChips() {
    return [
        dashboardCardFlows.domestic_violence,
        dashboardCardFlows.racial_abuse,
        dashboardCardFlows.cyber_scam,
        dashboardCardFlows.migrant_challenges,
        dashboardCardFlows.workplace_issue,
        dashboardCardFlows.school_issue,
        dashboardCardFlows.online_abuse,
        dashboardCardFlows.other
    ];
}
function getDashboardCardEntryHref(id) {
    const flow = getDashboardCardFlow(id);
    if (flow.targetView === "scamshieldintake") {
        return {
            pathname: "/dashboard",
            query: {
                view: "scamshieldintake",
                topic: flow.id,
                category: flow.categoryKey === "cyber_scam" ? "cyber_scam" : undefined
            }
        };
    }
    if (flow.targetView === "microeducation") {
        return {
            pathname: "/dashboard",
            query: {
                view: "microeducation",
                topic: flow.id
            }
        };
    }
    if (flow.targetView === "resources") {
        return {
            pathname: "/dashboard",
            query: {
                view: "resources",
                topic: flow.id
            }
        };
    }
    if (flow.targetView === "localintelligence") {
        return {
            pathname: "/dashboard",
            query: {
                view: "localintelligence",
                topic: flow.id
            }
        };
    }
    if (flow.targetView === "microcards") {
        return {
            pathname: "/dashboard",
            query: {
                view: "microcards",
                topic: flow.id
            }
        };
    }
    return {
        pathname: "/dashboard",
        query: {
            view: "assistant",
            topic: flow.id,
            category: flow.categoryKey && flow.categoryKey !== "general_assistant" ? flow.categoryKey : undefined
        }
    };
}
function getDashboardAssistantEntryHref(id) {
    return {
        pathname: "/dashboard",
        query: {
            view: "assistant",
            topic: id
        }
    };
}
function getDashboardActionHref(flowId, actionId) {
    const flow = getDashboardCardFlow(flowId);
    const category = flow.categoryKey && flow.categoryKey !== "general_assistant" ? flow.categoryKey : undefined;
    const message = flow.starterPrompt;
    switch(actionId){
        case "start_report":
            return {
                pathname: "/dashboard",
                query: {
                    view: "reportsubmissiondetails",
                    topic: flow.id,
                    category,
                    message
                }
            };
        case "find_support":
            return {
                pathname: "/dashboard/explorer",
                query: {
                    category,
                    topic: flow.id
                }
            };
        case "safety_plan":
            return {
                pathname: "/dashboard/explorer",
                query: {
                    category,
                    topic: flow.id,
                    focus: "safety_plan"
                }
            };
        case "talk_with_assistant":
            return {
                pathname: "/dashboard",
                query: {
                    view: "assistantconversation",
                    topic: flow.id,
                    category,
                    prefillMessage: message
                }
            };
        case "understand_reporting_options":
            return {
                pathname: "/dashboard",
                query: {
                    view: "assistantconversation",
                    topic: flow.id,
                    category,
                    prefillMessage: flowId === "racial_abuse" ? "I want to understand my safe reporting options after racial abuse." : flowId === "migrant_challenges" ? "I want to understand my workplace, housing, or school options safely." : message
                }
            };
        case "save_evidence":
            return {
                pathname: "/dashboard",
                query: {
                    view: "reportsubmissionevidence",
                    topic: flow.id,
                    category
                }
            };
        case "interpreter_guidance":
            return {
                pathname: "/dashboard/explorer",
                query: {
                    category,
                    topic: flow.id,
                    focus: "interpreter_guidance"
                }
            };
        case "quick_exit":
            return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/demo-assistant-conversation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Demo-only frontend conversation adapter. This module intentionally does not
// call production conversation, AI, transcription, speech, or upload services.
__turbopack_context__.s([
    "DEMO_ASSISTANT_STORAGE_KEY",
    ()=>DEMO_ASSISTANT_STORAGE_KEY,
    "DEMO_DICTATION_TRANSCRIPT",
    ()=>DEMO_DICTATION_TRANSCRIPT,
    "DEMO_VOICE_TRANSCRIPT",
    ()=>DEMO_VOICE_TRANSCRIPT,
    "createDemoMessage",
    ()=>createDemoMessage,
    "getDemoAssistantResponse",
    ()=>getDemoAssistantResponse,
    "resetDemoConversation",
    ()=>resetDemoConversation,
    "sendDemoConversationMessage",
    ()=>sendDemoConversationMessage,
    "simulateDemoAttachmentProcessing",
    ()=>simulateDemoAttachmentProcessing,
    "simulateDemoDictation",
    ()=>simulateDemoDictation,
    "simulateDemoTranscription",
    ()=>simulateDemoTranscription
]);
const DEMO_ASSISTANT_STORAGE_KEY = "safespeak_demo_assistant_conversation";
const DEMO_VOICE_TRANSCRIPT = "Someone from my building keeps following me near the train station.";
const DEMO_DICTATION_TRANSCRIPT = "It happened near Redfern Station after work.";
const demoDelays = {
    assistant: 620,
    transcription: 760,
    attachmentStep: 180
};
const openingSuggestions = [
    {
        id: "followed",
        label: "Someone is following me",
        value: "Someone from my building keeps following me near the train station."
    },
    {
        id: "harassed",
        label: "I am being harassed",
        value: "Someone has been harassing me and I am not sure what to do."
    },
    {
        id: "unsafe",
        label: "I feel unsafe",
        value: "I feel unsafe and want help understanding my options."
    }
];
const confirmationSuggestions = [
    {
        id: "correct",
        label: "That is correct",
        value: "Yes, that is correct."
    },
    {
        id: "complex",
        label: "It is more complex",
        value: "It is a bit more complex than that."
    },
    {
        id: "change",
        label: "I need to change something",
        value: "I need to change one part of that."
    }
];
const finalActions = [
    {
        id: "continue_next_steps",
        label: "Continue to next steps",
        value: "I want to continue to next steps."
    },
    {
        id: "start_over",
        label: "Start over",
        value: "I want to start over."
    }
];
const demoRecommendations = [
    {
        id: "1800respect",
        title: "1800RESPECT",
        description: "Confidential counselling and support for people affected by domestic, family, or sexual violence.",
        relevanceScore: 94,
        category: "Crisis and counselling support",
        tags: [
            "24/7",
            "Confidential",
            "Phone and web chat"
        ],
        location: "Australia-wide",
        availability: "24 hours, 7 days",
        contactLabel: "Contact",
        contactValue: "1800 737 732"
    },
    {
        id: "nsw-police",
        title: "NSW Police Assistance Line",
        description: "For non-urgent police assistance where there is no immediate danger.",
        relevanceScore: 86,
        category: "Reporting option",
        tags: [
            "Non-emergency",
            "NSW",
            "Incident report"
        ],
        location: "New South Wales",
        availability: "24 hours, 7 days",
        contactLabel: "Contact",
        contactValue: "131 444"
    },
    {
        id: "legal-aid-nsw",
        title: "Legal Aid NSW",
        description: "Free legal information and referral pathways for safety, housing, and personal protection questions.",
        relevanceScore: 78,
        category: "Legal information",
        tags: [
            "Legal help",
            "NSW",
            "Referral"
        ],
        location: "New South Wales",
        availability: "Business hours and online information",
        contactLabel: "Access",
        contactValue: "legalaid.nsw.gov.au"
    }
];
function buildFinalResult(answers) {
    var _answers_timingOrLocation;
    const location = (_answers_timingOrLocation = answers.timingOrLocation) !== null && _answers_timingOrLocation !== void 0 ? _answers_timingOrLocation : "the place you described";
    var _answers_people;
    const people = (_answers_people = answers.people) !== null && _answers_people !== void 0 ? _answers_people : "the person involved";
    return {
        summaryTitle: "Here's what I've understood",
        summaryText: "You described repeated unwanted following around ".concat(location, ", possible connection to ").concat(people, ", and concern that the situation may become unsafe. You have not submitted a formal report through this demo."),
        categories: [
            "Harassment or stalking",
            "Personal safety planning",
            "Support options"
        ],
        disclaimerTitle: "Important note",
        disclaimerText: "This is informational and hypothetical. SafeSpeak has not contacted police, a support service, or any other organisation. If you are in immediate danger, use the emergency controls already visible on this page.",
        recommendations: demoRecommendations,
        actions: finalActions
    };
}
let demoMessageSequence = 0;
function wait(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}
function createDemoMessage(role, content) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    demoMessageSequence += 1;
    return {
        id: "demo-message-".concat(demoMessageSequence),
        role,
        content,
        createdAt: new Date().toISOString(),
        ...options
    };
}
function resetDemoConversation(initialMessage) {
    const trimmed = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim();
    const messages = [];
    if (trimmed) {
        messages.push(createDemoMessage("user", trimmed));
        messages.push(createDemoMessage("assistant", "I’m listening. Could you tell me a little more about what has been happening?"));
    } else {
        messages.push(createDemoMessage("assistant", "I’m listening. You can explain what has been happening in your own words. What would you like SafeSpeak to understand first?", {
            suggestions: openingSuggestions
        }));
    }
    return {
        messages,
        attachments: [],
        stage: "opening",
        collectedAnswers: trimmed ? {
            initialConcern: trimmed
        } : {},
        progress: trimmed ? 16 : 8,
        readiness: trimmed ? 8 : 4
    };
}
function progressForStage(stage) {
    switch(stage){
        case "opening":
            return {
                progress: 16,
                readiness: 8
            };
        case "initial_clarification":
            return {
                progress: 30,
                readiness: 20
            };
        case "more_detail":
            return {
                progress: 44,
                readiness: 34
            };
        case "understanding_summary":
            return {
                progress: 58,
                readiness: 48
            };
        case "added_complexity":
            return {
                progress: 68,
                readiness: 58
            };
        case "people_involved":
            return {
                progress: 78,
                readiness: 70
            };
        case "updated_summary":
            return {
                progress: 88,
                readiness: 82
            };
        case "completion_transition":
            return {
                progress: 94,
                readiness: 88
            };
        case "final_result":
            return {
                progress: 96,
                readiness: 90
            };
    }
}
function hasAnyKeyword(content, keywords) {
    const normalized = content.toLowerCase();
    return keywords.some((keyword)=>normalized.includes(keyword));
}
function buildUnderstandingSummary(answers) {
    var _answers_initialConcern, _answers_timingOrLocation, _answers_people, _answers_details;
    return [
        "Here’s what I’ve understood so far:",
        "",
        "- What happened: ".concat((_answers_initialConcern = answers.initialConcern) !== null && _answers_initialConcern !== void 0 ? _answers_initialConcern : "You described an unwanted or concerning interaction."),
        "- Where it happened: ".concat((_answers_timingOrLocation = answers.timingOrLocation) !== null && _answers_timingOrLocation !== void 0 ? _answers_timingOrLocation : "You have not said where it happened yet."),
        "- Who was involved: ".concat((_answers_people = answers.people) !== null && _answers_people !== void 0 ? _answers_people : "The person or role involved is not clear yet."),
        "- What you are concerned or unsure about: ".concat((_answers_details = answers.details) !== null && _answers_details !== void 0 ? _answers_details : "You are unsure what this means and what options may be available."),
        "",
        "Is anything missing, or should I change any part of that?"
    ].join("\n");
}
function buildUpdatedSummary(answers) {
    var _answers_initialConcern, _answers_timingOrLocation, _answers_people, _answers_complexity, _answers_details;
    return [
        "Here’s what I’ve understood so far:",
        "",
        "- What happened: ".concat((_answers_initialConcern = answers.initialConcern) !== null && _answers_initialConcern !== void 0 ? _answers_initialConcern : "You described an unwanted or concerning interaction."),
        "- Where it happened: ".concat((_answers_timingOrLocation = answers.timingOrLocation) !== null && _answers_timingOrLocation !== void 0 ? _answers_timingOrLocation : "You have not said where it happened yet."),
        "- Who was involved: ".concat((_answers_people = answers.people) !== null && _answers_people !== void 0 ? _answers_people : "The person or role involved is not clear yet."),
        "- Added complexity: ".concat((_answers_complexity = answers.complexity) !== null && _answers_complexity !== void 0 ? _answers_complexity : "There may be extra context that affects what happened."),
        "- What you are concerned or unsure about: ".concat((_answers_details = answers.details) !== null && _answers_details !== void 0 ? _answers_details : "You want to understand what to do next without formally reporting anything yet."),
        "",
        "Does this summary look accurate?"
    ].join("\n");
}
function renderFinalResult(result) {
    return [
        "## ".concat(result.summaryTitle),
        "",
        result.summaryText,
        "",
        "**Relevant topics**",
        "",
        ...result.categories.map((category)=>"- ".concat(category)),
        "",
        "**".concat(result.disclaimerTitle, "**"),
        "",
        result.disclaimerText,
        "",
        "**Recommended options and resources**",
        "",
        ...result.recommendations.flatMap((recommendation)=>[
                "### ".concat(recommendation.title, " (").concat(recommendation.relevanceScore, "% match)"),
                recommendation.description,
                "- Category: ".concat(recommendation.category),
                "- Tags: ".concat(recommendation.tags.join(", ")),
                "- Location: ".concat(recommendation.location),
                "- Availability: ".concat(recommendation.availability),
                "- ".concat(recommendation.contactLabel, ": ").concat(recommendation.contactValue),
                ""
            ]),
        "**Actions**",
        "",
        ...result.actions.map((action)=>"- ".concat(action.label))
    ].join("\n");
}
function getScenarioResponse(input) {
    const content = input.content.trim();
    const answers = {
        ...input.collectedAnswers
    };
    if (input.stage !== "final_result" && hasAnyKeyword(content, [
        "start over",
        "restart",
        "begin again"
    ])) {
        return {
            stage: "opening",
            collectedAnswers: {},
            message: createDemoMessage("assistant", "I’m listening. You can explain what has been happening in your own words. What would you like SafeSpeak to understand first?", {
                suggestions: openingSuggestions
            })
        };
    }
    if (input.stage === "opening") {
        if (!content) {
            return {
                stage: "opening",
                collectedAnswers: answers,
                message: createDemoMessage("assistant", "Take your time. What has been happening?")
            };
        }
        answers.initialConcern = content;
        return {
            stage: "initial_clarification",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", "Thank you for telling me. When or where did this happen?")
        };
    }
    if (input.stage === "initial_clarification") {
        if (!hasAnyKeyword(content, [
            "station",
            "work",
            "home",
            "building",
            "street",
            "today",
            "yesterday",
            "night",
            "morning",
            "redfern"
        ])) {
            return {
                stage: "initial_clarification",
                collectedAnswers: answers,
                message: createDemoMessage("assistant", "Could you tell me when or where this happened? A rough place or time is enough.")
            };
        }
        answers.timingOrLocation = content;
        return {
            stage: "more_detail",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", "Could you share a little more about what happened?")
        };
    }
    if (input.stage === "more_detail") {
        answers.details = content;
        return {
            stage: "understanding_summary",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", buildUnderstandingSummary(answers), {
                suggestions: confirmationSuggestions
            })
        };
    }
    if (input.stage === "understanding_summary") {
        answers.confirmation = content;
        if (hasAnyKeyword(content, [
            "correct",
            "yes",
            "right",
            "accurate"
        ])) {
            return {
                stage: "people_involved",
                collectedAnswers: answers,
                message: createDemoMessage("assistant", "Who was involved, or what role did they have? You can use a description instead of a name.")
            };
        }
        return {
            stage: "added_complexity",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", "Thank you. What part is more complex, or what should I change in the summary?")
        };
    }
    if (input.stage === "added_complexity") {
        answers.complexity = content;
        return {
            stage: "people_involved",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", "That helps. Who was involved, or what role did they have? You can use a description instead of a name.")
        };
    }
    if (input.stage === "people_involved") {
        answers.people = content;
        return {
            stage: "updated_summary",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", buildUpdatedSummary(answers), {
                suggestions: confirmationSuggestions
            })
        };
    }
    if (input.stage === "updated_summary") {
        answers.confirmation = content;
        if (!hasAnyKeyword(content, [
            "yes",
            "correct",
            "accurate",
            "right",
            "that is it"
        ])) {
            return {
                stage: "added_complexity",
                collectedAnswers: answers,
                message: createDemoMessage("assistant", "I can update that. What should be changed or added?")
            };
        }
        return {
            stage: "completion_transition",
            collectedAnswers: answers,
            message: createDemoMessage("assistant", "I have enough information to show some options. This is informational and hypothetical only, and nothing has been formally submitted or reported.")
        };
    }
    if (input.stage === "completion_transition") {
        const finalResult = buildFinalResult(answers);
        return {
            stage: "final_result",
            collectedAnswers: answers,
            finalResult,
            message: createDemoMessage("assistant", renderFinalResult(finalResult), {
                suggestions: finalResult.actions
            })
        };
    }
    return {
        stage: "final_result",
        collectedAnswers: answers,
        message: createDemoMessage("assistant", "The demo result is already available above. You can continue to next steps or start over.", {
            suggestions: finalActions
        })
    };
}
async function sendDemoConversationMessage(input) {
    await wait(demoDelays.assistant);
    var _input_collectedAnswers;
    const response = getScenarioResponse({
        content: input.content,
        stage: input.stage,
        collectedAnswers: (_input_collectedAnswers = input.collectedAnswers) !== null && _input_collectedAnswers !== void 0 ? _input_collectedAnswers : {}
    });
    const progress = progressForStage(response.stage);
    return {
        ...response,
        ...progress
    };
}
async function getDemoAssistantResponse(input) {
    return sendDemoConversationMessage(input);
}
async function simulateDemoTranscription() {
    await wait(demoDelays.transcription);
    return DEMO_VOICE_TRANSCRIPT;
}
async function simulateDemoDictation() {
    await wait(demoDelays.transcription);
    return DEMO_DICTATION_TRANSCRIPT;
}
async function simulateDemoAttachmentProcessing(file, onProgress) {
    for (const progress of [
        18,
        42,
        67,
        86,
        100
    ]){
        await wait(demoDelays.attachmentStep);
        onProgress === null || onProgress === void 0 ? void 0 : onProgress(progress);
    }
    if (file.size > 12 * 1024 * 1024) {
        return {
            status: "error",
            progress: 100,
            message: "This demo accepts files up to 12 MB."
        };
    }
    return {
        status: "ready",
        progress: 100,
        message: "Attached locally and available in this demo session."
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/inter_93cd5328.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_93cd5328-module__uX6hTq__className",
});
}),
"[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/components/dashboard/dashboard-shared.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findIncidentReport",
    ()=>findIncidentReport,
    "incidentReports",
    ()=>incidentReports,
    "localIntelligenceMapSrc",
    ()=>localIntelligenceMapSrc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript)");
;
// eslint-disable-next-line n/no-process-env
const googleMapsApiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const localIntelligenceMapSrc = googleMapsApiKey ? "https://www.google.com/maps/embed/v1/view?key=".concat(googleMapsApiKey, "&center=-33.8688,151.2093&zoom=13&maptype=roadmap") : null;
const incidentReports = [
    {
        id: "SS-2026-0421",
        title: "Harassment Incident - Wing A",
        status: "in-review",
        createdAt: "22 Feb, 2026 - 10:31 PM",
        location: "Terminal C, Gate 14",
        narrative: "I was walking through the gate area around 8:30 PM when I noticed two individuals following me closely. They were making comments in a low voice and later approached near Exit C.",
        supportKey: "KEY-8745",
        impactLevel: "High Priority"
    },
    {
        id: "SS-2026-0379",
        title: "Wellbeing Support Request",
        status: "draft",
        createdAt: "20 Feb, 2026 - 05:12 PM",
        location: "Online submission",
        narrative: "I am submitting an early support request related to repeated verbal pressure from a supervisor. This report is currently saved as a draft.",
        supportKey: "KEY-8624",
        impactLevel: "Moderate"
    },
    {
        id: "SS-2026-0316",
        title: "Safety Concern - Main Entry",
        status: "submitted",
        createdAt: "16 Feb, 2026 - 09:44 AM",
        location: "Main Entry Hall",
        narrative: "Suspicious loitering behavior was observed near the main entry. I submitted this report with timestamps and a brief witness summary.",
        supportKey: "KEY-8311",
        impactLevel: "Low"
    }
];
function findIncidentReport(reportId) {
    if (!reportId) {
        return incidentReports[0];
    }
    var _incidentReports_find;
    return (_incidentReports_find = incidentReports.find((report)=>report.id === reportId)) !== null && _incidentReports_find !== void 0 ? _incidentReports_find : incidentReports[0];
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript) <export default as interFont>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interFont",
    ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript)");
}),
"[project]/src/components/dashboard/dashboard-assistant-pages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeSpeakAssistantConversationPage",
    ()=>SafeSpeakAssistantConversationPage,
    "SafeSpeakAssistantPage",
    ()=>SafeSpeakAssistantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-client] (ecmascript) <export default as IconLoader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophone.mjs [app-client] (ecmascript) <export default as IconMicrophone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophoneOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophoneOff.mjs [app-client] (ecmascript) <export default as IconMicrophoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPaperclip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPaperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPaperclip.mjs [app-client] (ecmascript) <export default as IconPaperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconRefresh.mjs [app-client] (ecmascript) <export default as IconRefresh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/sendIcon.svg.mjs { IMAGE => "[project]/src/assets/sendIcon.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$assistant$2d$message$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/assistant-message-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$interaction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/assistant-interaction.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$voice$2d$first$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/assistant-voice-first-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/voice-avatar-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-consent-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-conversation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-draft.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$triage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-triage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$voice$2d$handoff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-voice-handoff.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/conversation-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard-card-flows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard-navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo-assistant-conversation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safety$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/safety.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/text-encoding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voice-transcription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-shared.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript) <export default as interFont>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const emptyTimeline = {};
function normalizeAssistantSpeechLanguage(language) {
    const normalized = language === null || language === void 0 ? void 0 : language.trim().toLowerCase();
    if (!normalized) {
        return undefined;
    }
    const aliases = {
        "ar-sa": "ar",
        "bn-bd": "bn",
        "el-gr": "el",
        "en-au": "en",
        "en-us": "en",
        "es-419": "es",
        "es-es": "es",
        "es-mx": "es",
        "hi-in": "hi",
        "ne-np": "ne",
        "pa-in": "pa",
        "vi-vn": "vi",
        yue: "zh-Hant",
        "yue-hk": "zh-Hant",
        zh: "zh-Hans",
        "zh-cn": "zh-Hans",
        "zh-hans": "zh-Hans",
        "zh-hant": "zh-Hant",
        "zh-hk": "zh-Hant",
        "zh-sg": "zh-Hans",
        "zh-tw": "zh-Hant"
    };
    var _aliases_normalized;
    return (_aliases_normalized = aliases[normalized]) !== null && _aliases_normalized !== void 0 ? _aliases_normalized : language === null || language === void 0 ? void 0 : language.trim();
}
function detectAssistantSpeechLanguage(text) {
    if (/[\u0600-\u06ff]/u.test(text)) return "ar";
    if (/[\u0980-\u09ff]/u.test(text)) return "bn";
    if (/[\u0370-\u03ff]/u.test(text)) return "el";
    if (/[\u0a00-\u0a7f]/u.test(text)) return "pa";
    if (/[\u0900-\u097f]/u.test(text)) return "hi";
    if (RegExp("\\p{Script=Han}", "u").test(text)) return "zh-Hans";
    if (/[ăâđêôơưáàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/iu.test(text)) {
        return "vi";
    }
    if (/[¿¡ñáéíóúü]/iu.test(text)) return "es";
    return "en";
}
const harmfulActivityPatterns = [
    /\b(violence|violent|abuse|assault|attacked|attack|hit|slap|punched|kick|kicked|choke|threat|threatened)\b/i,
    /\b(harass|harassment|bullied|bullying|stalk|stalking|unsafe|scared|fear)\b/i,
    /\b(racist|racism|discrimination|hate|hate crime|racial)\b/i,
    /\b(scam|fraud|phishing|blackmail|extortion|stole|stolen|robbed|theft)\b/i,
    /\b(grabbed|grab|pulled|pull)\b.{0,24}\b(hijab|hijub|headscarf)\b/i,
    /\b(hijab|hijub|headscarf)\b.{0,24}\b(grabbed|grab|pulled|pull)\b/i
];
function AvatarVoiceControlGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-[2px]",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[4px] w-[4px] rounded-full bg-current opacity-95"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[10px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[14px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[10px] w-[2.5px] rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-[4px] w-[4px] rounded-full bg-current opacity-95"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c = AvatarVoiceControlGlyph;
function buildAssistantBubbleContent(assistantMessage, nextQuestion) {
    const trimmedAssistantMessage = assistantMessage.trim();
    const trimmedNextQuestion = nextQuestion.trim();
    if (!trimmedAssistantMessage) {
        return trimmedNextQuestion;
    }
    if (!trimmedNextQuestion) {
        return trimmedAssistantMessage;
    }
    if (trimmedAssistantMessage.toLowerCase() === trimmedNextQuestion.toLowerCase()) {
        return trimmedAssistantMessage;
    }
    return "".concat(trimmedAssistantMessage, " ").concat(trimmedNextQuestion);
}
function detectHarmfulActivity(input) {
    if (input.incidentCategory === "domestic_violence" || input.incidentCategory === "racial_abuse" || input.incidentCategory === "cyber_scam") {
        return true;
    }
    const combinedText = [
        ...input.conversation.map((message)=>message.content),
        ...Object.values(input.timeline)
    ].join(" ").trim();
    if (!combinedText) {
        return false;
    }
    return harmfulActivityPatterns.some((pattern)=>pattern.test(combinedText));
}
function isActionableConversationTriage(response) {
    var _response_responseMeta, _response_responseMeta1;
    if (((_response_responseMeta = response.responseMeta) === null || _response_responseMeta === void 0 ? void 0 : _response_responseMeta.triageReady) || ((_response_responseMeta1 = response.responseMeta) === null || _response_responseMeta1 === void 0 ? void 0 : _response_responseMeta1.nextAction) === "show_triage_button") {
        return true;
    }
    const triage = response.triage;
    return Boolean(response.transition.offerTriage && triage && triage.likelyCategory !== "general_support" && triage.confidenceScore >= 0.45 && triage.canProceedToRecommendations);
}
function getAssistantDisplayContent(message) {
    if (message.role !== "assistant") {
        return message.content;
    }
    const cleanedContent = [
        /\s*This information is for general awareness(?: only)? and does not constitute legal advice\.?/gi,
        /\s*This information is for general awareness only\.?/gi,
        /\s*This is information only,?\s*not legal advice\.?/gi,
        /\s*This is informational,?\s*not legal advice\.?/gi,
        /\s*It does not constitute legal advice\.?/gi
    ].reduce((content, pattern)=>content.replace(pattern, ""), message.content).replace(/\r\n/g, "\n").split(/\n{2,}/).map((paragraph)=>paragraph.replace(/\s+([?.!,])/g, "$1").replace(/[ \t]{2,}/g, " ").trim()).filter(Boolean).join("\n\n");
    return cleanedContent || "I'm here with you.";
}
function formatConversationSectionRef(sectionRef) {
    if (!sectionRef) {
        return "";
    }
    return sectionRef.replace(/^Section\s+/i, "section ");
}
function buildConversationCitationSummary(citation) {
    const sectionRef = formatConversationSectionRef(citation.sectionRef);
    var _citation_pageStart;
    const page = (_citation_pageStart = citation.pageStart) !== null && _citation_pageStart !== void 0 ? _citation_pageStart : citation.page;
    const pageLabel = page ? "p. ".concat(citation.pageEnd && citation.pageEnd !== page ? "".concat(page, "-").concat(citation.pageEnd) : page) : "";
    const versionLabel = citation.versionDate ? "version ".concat(formatConversationCitationDate(citation.versionDate)) : citation.lastUpdated ? "updated ".concat(formatConversationCitationDate(citation.lastUpdated)) : "";
    const sectionTitle = citation.sectionTitle ? "- ".concat(citation.sectionTitle) : "";
    const amendmentLabel = citation.amendmentStatus && citation.amendmentStatus !== "in_force" ? citation.amendmentStatus.replace("_", " ") : "";
    return [
        citation.title,
        citation.publisher,
        sectionRef,
        sectionTitle,
        pageLabel,
        versionLabel,
        amendmentLabel
    ].filter(Boolean).join(", ");
}
function formatConversationCitationDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }
    return parsed.toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function buildConversationCitationIdentity(citation) {
    return buildConversationCitationSummary(citation);
}
function dedupeConversationCitations(citations) {
    const seen = new Set();
    return citations.filter((citation)=>{
        const key = buildConversationCitationIdentity(citation);
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}
function buildLegalCitationSummary(citation) {
    const sectionValue = formatConversationSectionRef(citation.sectionRef);
    const pageValue = citation.pageStart ? citation.pageEnd && citation.pageEnd !== citation.pageStart ? "".concat(citation.pageStart, "-").concat(citation.pageEnd) : "".concat(citation.pageStart) : citation.page ? "".concat(citation.page) : "";
    const versionValue = citation.versionDate ? formatConversationCitationDate(citation.versionDate) : citation.commencementDate ? formatConversationCitationDate(citation.commencementDate) : "";
    return [
        {
            label: "Law",
            value: citation.legislationName || citation.title
        },
        {
            label: "Section / number",
            value: sectionValue || "Not specified"
        },
        {
            label: "Section title",
            value: citation.sectionTitle || "Not specified"
        },
        {
            label: "Page",
            value: pageValue ? "p. ".concat(pageValue) : "Not specified"
        },
        {
            label: "Version",
            value: versionValue || "Not specified"
        },
        {
            label: "Status",
            value: citation.amendmentStatus && citation.amendmentStatus !== "in_force" ? citation.amendmentStatus.replace("_", " ") : "in force"
        }
    ];
}
function AssistantLegalCitationDetails(param) {
    let { citations, groundedLegalSource, showDetails } = param;
    if (!showDetails) {
        return null;
    }
    const legalCitations = dedupeConversationCitations(citations).filter((citation)=>{
        var _citation_sourceType;
        return citation.sourceCategory === "official_legal_source" || /^(act|regulation|decision)$/i.test((_citation_sourceType = citation.sourceType) !== null && _citation_sourceType !== void 0 ? _citation_sourceType : "");
    });
    if (!legalCitations.length) {
        const fallbackLaw = (groundedLegalSource === null || groundedLegalSource === void 0 ? void 0 : groundedLegalSource.legislationName) || (groundedLegalSource === null || groundedLegalSource === void 0 ? void 0 : groundedLegalSource.title) || "AIHW";
        const fallbackUrl = (groundedLegalSource === null || groundedLegalSource === void 0 ? void 0 : groundedLegalSource.citationUrl) || "https://www.aihw.gov.au/family-domestic-and-sexual-violence/responses-and-outcomes/legal-systems";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 rounded-[14px] border border-[#dce6f2] bg-[#f7fbff] px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#72839b]",
                    children: "Law details"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 rounded-[12px] border border-[#e3edf7] bg-white px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold text-[#1f2a3a]",
                            children: fallbackLaw
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 space-y-0.5 text-[11px] leading-[1.45] text-[#4b5d73]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Law:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        fallbackLaw
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Section / number:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "Not specified in RAG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Section title:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "Not specified in RAG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Page:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this),
                                        " Not specified in RAG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Version:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this),
                                        " Not specified in RAG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#334255]",
                                            children: "Law URL:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: fallbackUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-[#2f6fca] underline-offset-2 hover:underline",
                                            children: "Open source"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 448,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 rounded-[14px] border border-[#dce6f2] bg-[#f7fbff] px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#72839b]",
                children: "Law details"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-2",
                children: legalCitations.map((citation)=>{
                    const summaryRows = buildLegalCitationSummary(citation);
                    var _citation_url, _citation_sectionRef, _citation_pageStart, _ref, _citation_sourceId;
                    const citationKey = (_citation_sourceId = citation.sourceId) !== null && _citation_sourceId !== void 0 ? _citation_sourceId : "".concat(citation.title, "-").concat((_citation_url = citation.url) !== null && _citation_url !== void 0 ? _citation_url : "", "-").concat((_citation_sectionRef = citation.sectionRef) !== null && _citation_sectionRef !== void 0 ? _citation_sectionRef : "", "-").concat((_ref = (_citation_pageStart = citation.pageStart) !== null && _citation_pageStart !== void 0 ? _citation_pageStart : citation.page) !== null && _ref !== void 0 ? _ref : "");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[12px] border border-[#e3edf7] bg-white px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold text-[#1f2a3a]",
                                children: citation.legislationName || citation.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 515,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 space-y-0.5 text-[11px] leading-[1.45] text-[#4b5d73]",
                                children: [
                                    summaryRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-[#334255]",
                                                    children: [
                                                        row.label,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                row.value
                                            ]
                                        }, row.label, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 520,
                                            columnNumber: 19
                                        }, this)),
                                    citation.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-[#334255]",
                                                children: "Law URL:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 529,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: citation.url,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-[#2f6fca] underline-offset-2 hover:underline",
                                                children: "Open source"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 532,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 528,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this)
                        ]
                    }, citationKey, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 511,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 499,
        columnNumber: 5
    }, this);
}
_c1 = AssistantLegalCitationDetails;
function buildAssistantLawPrefix(message) {
    var _message_responseMeta, _message_responseMeta1;
    const groundedSource = (_message_responseMeta = message.responseMeta) === null || _message_responseMeta === void 0 ? void 0 : _message_responseMeta.groundedLegalSource;
    var _message_responseMeta_citations;
    const legalCitation = ((_message_responseMeta_citations = (_message_responseMeta1 = message.responseMeta) === null || _message_responseMeta1 === void 0 ? void 0 : _message_responseMeta1.citations) !== null && _message_responseMeta_citations !== void 0 ? _message_responseMeta_citations : []).find((citation)=>{
        var _citation_sourceType;
        return citation.sourceCategory === "official_legal_source" || /^(act|regulation|decision)$/i.test((_citation_sourceType = citation.sourceType) !== null && _citation_sourceType !== void 0 ? _citation_sourceType : "");
    });
    const lawName = (legalCitation === null || legalCitation === void 0 ? void 0 : legalCitation.legislationName) || (legalCitation === null || legalCitation === void 0 ? void 0 : legalCitation.title) || (groundedSource === null || groundedSource === void 0 ? void 0 : groundedSource.legislationName) || (groundedSource === null || groundedSource === void 0 ? void 0 : groundedSource.title);
    if (!lawName) {
        return "";
    }
    const section = (legalCitation === null || legalCitation === void 0 ? void 0 : legalCitation.sectionRef) ? ", ".concat(formatConversationSectionRef(legalCitation.sectionRef)) : "";
    return "Law: ".concat(lawName).concat(section);
}
function AssistantResponseCitations(param) {
    let { citations, showSources, answerText } = param;
    if (!showSources || !citations.length) {
        return null;
    }
    const dedupedCitations = dedupeConversationCitations(citations);
    const normalizedAnswer = answerText.toLowerCase();
    const directReferenceCount = dedupedCitations.filter((citation)=>{
        const sectionRef = formatConversationSectionRef(citation.sectionRef).trim().toLowerCase();
        if (sectionRef) {
            return normalizedAnswer.includes(sectionRef);
        }
        return citation.title.trim().length ? normalizedAnswer.includes(citation.title.trim().toLowerCase()) : false;
    }).length;
    const compactCitations = dedupedCitations.slice(0, directReferenceCount > 1 ? 2 : 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] leading-[1.55] text-[#7d8ea5]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-[#6a7a92]",
                    children: compactCitations.length > 1 ? "Sources:" : "Source:"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 623,
                    columnNumber: 9
                }, this),
                " ",
                compactCitations.map((citation, index)=>{
                    const citationKey = buildConversationCitationIdentity(citation);
                    const summary = buildConversationCitationSummary(citation);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index > 0 ? "; " : null,
                            citation.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: citation.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline decoration-[#c6d4e6] underline-offset-2 hover:text-[#52657d]",
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 634,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 643,
                                columnNumber: 17
                            }, this)
                        ]
                    }, citationKey, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 631,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 622,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 621,
        columnNumber: 5
    }, this);
}
_c2 = AssistantResponseCitations;
const VOICE_RECORDING_TIMEOUT_MS = 8000;
function getRecordingErrorMessage(errorCode, t) {
    switch(errorCode){
        case "not-allowed":
        case "service-not-allowed":
            return t("dashboard.assistant.speechErrors.permissionDenied");
        case "audio-capture":
            return t("dashboard.assistant.speechErrors.noMicrophone");
        case "no-speech":
            return t("dashboard.assistant.speechErrors.noSpeech");
        case "network":
            return t("dashboard.assistant.speechErrors.network");
        default:
            return t("dashboard.assistant.speechErrors.startFailed");
    }
}
function getPreferredRecordingMimeType() {
    const supportedTypes = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4"
    ];
    if (typeof MediaRecorder.isTypeSupported !== "function") {
        return undefined;
    }
    return supportedTypes.find((mimeType)=>MediaRecorder.isTypeSupported(mimeType));
}
function isNoSpeechTranscriptionError(error) {
    if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"])) {
        return false;
    }
    const message = error.message.toLowerCase();
    return error.status === 422 || message.includes("no speech") || message.includes("empty") || message.includes("too short");
}
function getContinueReportSubmissionHref(incidentCategory, conversationSessionId) {
    return {
        pathname: "/dashboard",
        query: {
            view: "reportsubmissionsupport",
            category: incidentCategory,
            conversationSessionId
        }
    };
}
function getContinueReportSubmissionPath(incidentCategory, conversationSessionId) {
    return getDashboardHrefString(getContinueReportSubmissionHref(incidentCategory, conversationSessionId));
}
function getAssistantEntryHref(initialTopic, initialCategory) {
    return {
        pathname: "/dashboard",
        query: {
            view: "assistant",
            topic: initialTopic,
            category: initialCategory
        }
    };
}
function getDashboardHrefString(input) {
    const searchParams = new URLSearchParams();
    var _input_query;
    Object.entries((_input_query = input.query) !== null && _input_query !== void 0 ? _input_query : {}).forEach((param)=>{
        let [key, value] = param;
        if (typeof value === "string" && value.length > 0) {
            searchParams.set(key, value);
        }
    });
    const queryString = searchParams.toString();
    return queryString ? "".concat(input.pathname, "?").concat(queryString) : input.pathname;
}
function shouldUseNswLegalAwareness(topic, category) {
    return topic === "racial_abuse" || topic === "migrant_challenges" || category === "racial_abuse" || category === "migrant_challenges";
}
const staticNswLegalAwareness = {
    jurisdiction: "NSW",
    topic: "racial_abuse",
    informationOnly: true,
    sourceStatus: "insufficient_approved_sources",
    keyPoints: [
        "Keep a dated record of what happened if it is safe.",
        "NSW and Commonwealth pathways can both be relevant for racial abuse or discrimination concerns.",
        "Online abuse may also involve platform reporting, eSafety information, and immediate safety planning."
    ],
    pathwayCards: [
        {
            title: "NSW discrimination pathway",
            body: "SafeSpeak can help organize details for Anti-Discrimination NSW style complaint information once approved sources are available.",
            sourceRequirement: "Detailed legal explanations require approved NSW sources."
        },
        {
            title: "Commonwealth pathway",
            body: "Some racial discrimination concerns may involve Australian Human Rights Commission information.",
            sourceRequirement: "Citations appear only from approved Commonwealth sources."
        },
        {
            title: "Online abuse pathway",
            body: "For online incidents, evidence collection, platform reports, and eSafety information may be relevant.",
            sourceRequirement: "Use approved eSafety sources before public citation."
        }
    ],
    citationPolicy: "No citations are shown until approved, current, legally reviewed sources are available."
};
function NswLegalAwarenessPanel(param) {
    let { legalAwareness, compact = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[20px] border border-[#d6e2f0] bg-[#fbfdff] ".concat(compact ? "p-3" : "p-4"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f7de0]",
                                children: "NSW legal awareness"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 861,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[12px] leading-[1.55] text-[#5f6f86]",
                                children: "Information only, not legal advice. SafeSpeak will cite only approved, current, legally reviewed sources."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 864,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 860,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-[#d6e2f0] bg-white px-3 py-1 text-[10px] font-semibold text-[#51657f]",
                        children: legalAwareness.sourceStatus === "approved_sources_used" ? "Approved sources available" : "Sources pending approval"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 869,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 859,
                columnNumber: 7
            }, this),
            legalAwareness.keyPoints.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-1.5 text-[10px] leading-[1.55] text-[#617289]",
                children: legalAwareness.keyPoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#82aee8]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 880,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: point
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 881,
                                columnNumber: 15
                            }, this)
                        ]
                    }, point, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 879,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 877,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid gap-2 md:grid-cols-3",
                children: legalAwareness.pathwayCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-[16px] border border-[#e2e9f3] bg-white p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[12px] font-bold text-[#1f2a3a]",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 893,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[10px] leading-[1.55] text-[#697b92]",
                                children: card.body
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 896,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#9aa8ba]",
                                children: card.sourceRequirement
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 899,
                                columnNumber: 13
                            }, this)
                        ]
                    }, card.title, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 889,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 887,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 854,
        columnNumber: 5
    }, this);
}
_c3 = NswLegalAwarenessPanel;
function hasActiveAssistantDraftForScope(input) {
    const draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssistantConversationDraft"])({
        topic: input.topic,
        incidentCategory: input.incidentCategory
    });
    if (!draft) {
        return false;
    }
    const hasUserMessage = draft.messages.some((message)=>message.role === "user");
    const hasTimelineContent = Object.values(draft.timeline).some((value)=>value.trim().length > 0);
    return hasUserMessage || hasTimelineContent;
}
function SafeSpeakAssistantPage(param) {
    let { startFresh = false, isRecording = false, initialCategory, initialTopic } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isCheckingDraft, setIsCheckingDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SafeSpeakAssistantPage.useEffect": ()=>{
            if (startFresh) {
                setIsCheckingDraft(false);
                return;
            }
            if (initialTopic || initialCategory) {
                if (hasActiveAssistantDraftForScope({
                    topic: initialTopic,
                    incidentCategory: initialCategory
                })) {
                    const query = new URLSearchParams({
                        view: "assistantconversation"
                    });
                    if (initialTopic) {
                        query.set("topic", initialTopic);
                    }
                    if (initialCategory) {
                        query.set("category", initialCategory);
                    }
                    router.replace("/dashboard?".concat(query.toString()));
                    return;
                }
                setIsCheckingDraft(false);
                return;
            }
            if (!hasActiveAssistantDraftForScope({})) {
                setIsCheckingDraft(false);
                return;
            }
            router.replace("/dashboard?view=assistantconversation");
        }
    }["SafeSpeakAssistantPage.useEffect"], [
        initialCategory,
        initialTopic,
        router,
        startFresh
    ]);
    if (isCheckingDraft) {
        return null;
    }
    const assistantFlow = initialTopic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardCardFlow"])(initialTopic) : null;
    const assistantTopicChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardAssistantTopicChips"])();
    const startWithTopicHref = (assistantFlow === null || assistantFlow === void 0 ? void 0 : assistantFlow.starterPrompt) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardActionHref"])(assistantFlow.id, "talk_with_assistant") : null;
    var _assistantFlow_starterPrompt;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-28 pt-2 sm:px-4 sm:pb-32 sm:pt-4 lg:pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-[1184px] flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$interaction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantInteraction"], {
                    isRecording: isRecording,
                    initialCategory: initialCategory,
                    initialTopic: initialTopic,
                    headlineClassName: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className, " mt-6 max-w-[460px] text-center text-[28px] font-semibold leading-[32px] tracking-[0] text-[#24364f] sm:text-[30px] sm:leading-[34px] xl:text-[32px] xl:leading-[36px]")
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this),
                assistantFlow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "bg-white/96 mx-auto -mt-[158px] w-full max-w-[1120px] rounded-[24px] border border-[#dce6f2] p-4 shadow-[0_16px_34px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[760px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f7de0]",
                                            children: assistantFlow.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-[1.65] text-[#5f6f86]",
                                            children: (_assistantFlow_starterPrompt = assistantFlow.starterPrompt) !== null && _assistantFlow_starterPrompt !== void 0 ? _assistantFlow_starterPrompt : "Choose how you want to begin. Nothing is submitted until you decide to continue."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap gap-2",
                                            children: assistantFlow.disclaimers.map((disclaimer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-[#d6e2f0] bg-[#f8fbff] px-3 py-1.5 text-[10px] font-semibold text-[#51657f]",
                                                    children: disclaimer
                                                }, disclaimer, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 15
                                }, this),
                                startWithTopicHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: startWithTopicHref,
                                    className: "inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.25)] transition hover:bg-[#0b528d]",
                                    children: [
                                        "Start with this topic",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                            size: 14,
                                            className: "ml-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 1010,
                            columnNumber: 13
                        }, this),
                        assistantFlow.nextActions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3",
                            children: assistantFlow.nextActions.map((action)=>{
                                if (action.id === "quick_exit") {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$safety$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerQuickExit"])(),
                                        className: "rounded-[18px] border border-[#f1d6d6] bg-[#fff7f7] p-3 text-left transition hover:border-[#eabcbc] hover:bg-[#fff2f2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] font-bold text-[#1f2a3a]",
                                                children: action.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[10px] leading-[1.55] text-[#7688a0]",
                                                children: action.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, action.id, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 23
                                    }, this);
                                }
                                const actionHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardActionHref"])(assistantFlow.id, action.id);
                                if (!actionHref) {
                                    return null;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: actionHref,
                                    className: "rounded-[18px] border border-[#dce6f2] bg-[#fbfdff] p-3 text-left transition hover:border-[#c5d8ec] hover:bg-[#f7fbff]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] font-bold text-[#1f2a3a]",
                                            children: action.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1078,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[10px] leading-[1.55] text-[#7688a0]",
                                            children: action.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, action.id, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 1043,
                            columnNumber: 15
                        }, this) : null,
                        assistantFlow.id === "general_assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7d8ea5]",
                                    children: "Choose a topic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 1092,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: assistantTopicChips.map((topicChip)=>{
                                        const resolvedChipHref = topicChip.starterPrompt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardActionHref"])(topicChip.id, "talk_with_assistant") : null;
                                        if (!resolvedChipHref) {
                                            return null;
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: resolvedChipHref,
                                            className: "rounded-full border border-[#d6e2f0] bg-white px-3 py-2 text-[11px] font-semibold text-[#42566f] transition hover:border-[#bfd1e6] hover:bg-[#f8fbff]",
                                            children: topicChip.title
                                        }, topicChip.id, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 1109,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 1095,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 1091,
                            columnNumber: 15
                        }, this) : null,
                        shouldUseNswLegalAwareness(initialTopic, initialCategory) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NswLegalAwarenessPanel, {
                                legalAwareness: {
                                    ...staticNswLegalAwareness,
                                    topic: initialTopic === "migrant_challenges" || initialCategory === "migrant_challenges" ? "migrant_challenges" : "racial_abuse"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 1124,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 1123,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 1009,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 1000,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 999,
        columnNumber: 5
    }, this);
}
_s(SafeSpeakAssistantPage, "8cNX03EJY08hVrkXpXf+MEAzAbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = SafeSpeakAssistantPage;
function formatLocalFileSize(size) {
    if (size < 1024) return "".concat(size, " B");
    if (size < 1024 * 1024) return "".concat(Math.max(1, Math.round(size / 1024)), " KB");
    return "".concat((size / (1024 * 1024)).toFixed(1), " MB");
}
function formatDemoTimer(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return "".concat(minutes, ":").concat(seconds);
}
function getVoiceStatusLabel(status) {
    switch(status){
        case "starting":
            return "Starting voice conversation";
        case "listening":
            return "Listening";
        case "processing-user":
            return "SafeSpeak is processing";
        case "assistant-speaking":
            return "SafeSpeak is speaking";
        case "finishing":
            return "Finishing voice conversation";
        case "paused":
            return "Voice conversation paused";
        case "error":
            return "Voice demo unavailable";
        default:
            return "Voice conversation ready";
    }
}
function getVoiceStatusDescription(status, recordingSeconds) {
    switch(status){
        case "idle":
            return "Tap the circular mic to begin a demo voice turn.";
        case "starting":
            return "Preparing a local microphone session.";
        case "listening":
            return "Session duration ".concat(formatDemoTimer(recordingSeconds));
        case "processing-user":
            return "Creating a local demo transcript and response.";
        case "assistant-speaking":
            return "Playing a browser-only demo response.";
        case "finishing":
            return "Adding the voice turns to the conversation.";
        case "paused":
            return "Voice conversation is paused.";
        case "error":
            return "Voice demo could not continue. Try the circular mic again.";
    }
}
function getPrimaryVoiceActionLabel(status) {
    if (status === "error") {
        return "Restart voice conversation";
    }
    if (status !== "idle") {
        return "Voice conversation active";
    }
    return "Start voice conversation";
}
function getDictationActionLabel(status) {
    if (status === "listening") {
        return "Stop message dictation";
    }
    if (status === "transcribing") {
        return "Message is being transcribed";
    }
    if (status === "error") {
        return "Restart message dictation";
    }
    return "Start message dictation";
}
function getDictationStatusText(status) {
    switch(status){
        case "listening":
            return "Listening for message dictation";
        case "transcribing":
            return "Transcribing message dictation";
        case "error":
            return "Dictation could not continue. Try again.";
        default:
            return "";
    }
}
function getDemoPhaseLabel(stage) {
    switch(stage){
        case "opening":
            return "Listening";
        case "initial_clarification":
            return "Clarifying";
        case "more_detail":
            return "More detail";
        case "understanding_summary":
            return "Checking understanding";
        case "added_complexity":
            return "Added context";
        case "people_involved":
            return "People involved";
        case "updated_summary":
            return "Confirming summary";
        case "completion_transition":
            return "Options ready";
        case "final_result":
            return "Summary ready";
    }
}
function loadDemoConversation(initialMessage) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_ASSISTANT_STORAGE_KEY"]);
    if (!raw) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDemoConversation"])(initialMessage);
    }
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.messages) || !parsed.stage) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDemoConversation"])(initialMessage);
        }
        var _parsed_collectedAnswers;
        return {
            ...parsed,
            collectedAnswers: (_parsed_collectedAnswers = parsed.collectedAnswers) !== null && _parsed_collectedAnswers !== void 0 ? _parsed_collectedAnswers : {},
            attachments: Array.isArray(parsed.attachments) ? parsed.attachments.map((attachment)=>({
                    ...attachment,
                    previewUrl: undefined
                })) : []
        };
    } catch (e) {
        window.sessionStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_ASSISTANT_STORAGE_KEY"]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDemoConversation"])(initialMessage);
    }
}
function persistDemoConversation(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_ASSISTANT_STORAGE_KEY"], JSON.stringify({
        ...state,
        attachments: state.attachments.map((attachment)=>({
                ...attachment,
                previewUrl: undefined
            }))
    }));
}
function DemoVoiceSessionWaveform(param) {
    let { isActive, level } = param;
    const normalizedLevel = Math.max(0.16, Math.min(1, level));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-12 w-full max-w-[240px] items-center justify-center gap-1 overflow-hidden rounded-full bg-[#eef6ff] px-4",
        "aria-hidden": "true",
        "data-testid": "ai-conversation-voice-waveform",
        children: Array.from({
            length: 24
        }).map((_, index)=>{
            const baseHeight = 8 + index * 7 % 22;
            const height = Math.round(baseHeight * (0.78 + normalizedLevel));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1 rounded-full bg-[#7aa4d8] ".concat(isActive ? "motion-safe:animate-pulse" : ""),
                style: {
                    height: "".concat(height, "px"),
                    animationDelay: "".concat(index * 42, "ms"),
                    opacity: 0.38 + index % 6 * 0.08
                }
            }, index, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1357,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 1347,
        columnNumber: 5
    }, this);
}
_c5 = DemoVoiceSessionWaveform;
function getVoiceSessionAvatarState(status) {
    if (status === "listening") return "userSpeaking";
    if (status === "assistant-speaking") return "aiSpeaking";
    if (status === "starting" || status === "processing-user" || status === "finishing") {
        return "processing";
    }
    return "idle";
}
function DemoVoiceSessionStage(param) {
    let { status, durationSeconds, turns, audioLevel, onFinishTurn, onFinishSession, onCancelSession, stageRef } = param;
    const isListening = status === "listening";
    const isMoving = status === "starting" || status === "listening" || status === "processing-user" || status === "assistant-speaking";
    const latestTurns = turns.slice(-2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stageRef,
        tabIndex: -1,
        className: "flex min-h-[340px] flex-1 flex-col items-center justify-center rounded-[16px] bg-[#f8fbff] px-4 py-6 text-center outline-none focus-visible:ring-2 focus-visible:ring-[#0f5d9f] sm:min-h-[420px] sm:px-6",
        role: "status",
        "aria-live": "polite",
        "data-testid": "ai-conversation-voice-session-stage",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "ai-conversation-voice-session-mic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceAvatarAnimation"], {
                            state: getVoiceSessionAvatarState(status),
                            size: "session",
                            alt: "SafeSpeak voice conversation",
                            showAmbientEffects: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 1426,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]",
                                children: "Voice conversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 1434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 text-2xl font-extrabold tracking-[0] text-[#1f2a3a] sm:text-[30px]",
                                children: getVoiceStatusLabel(status)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 1437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-[#60718a]",
                                children: getVoiceStatusDescription(status, durationSeconds)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 1440,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex w-full justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoVoiceSessionWaveform, {
                    isActive: isMoving,
                    level: status === "assistant-speaking" ? 0.78 : audioLevel
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 1447,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-[520px] text-xs leading-6 text-[#51657f]",
                children: isListening ? "Speak naturally. Finish the current turn when you are ready for SafeSpeak to respond." : "This demo keeps audio local and uses deterministic mock responses."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1453,
                columnNumber: 7
            }, this),
            latestTurns.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid w-full max-w-[620px] gap-2 text-left",
                "data-testid": "ai-conversation-voice-session-preview",
                children: latestTurns.map((turn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[14px] border px-3 py-2 text-xs leading-5 ".concat(turn.role === "user" ? "ml-auto max-w-[86%] border-[#bfd8f1] bg-[#eef6ff] text-[#1f2a3a]" : "mr-auto max-w-[86%] border-[#dbe6f2] bg-white text-[#41566f]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    turn.role === "user" ? "You" : "SafeSpeak",
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 1473,
                                columnNumber: 15
                            }, this),
                            " ",
                            turn.content
                        ]
                    }, turn.id, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1465,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1460,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-wrap items-center justify-center gap-2",
                children: [
                    isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onFinishTurn,
                        className: "inline-flex min-h-11 items-center justify-center rounded-full bg-[#0f5d9f] px-4 text-sm font-bold text-white transition hover:bg-[#0c518a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5d9f] focus-visible:ring-offset-2",
                        "data-testid": "ai-conversation-voice-finish-turn",
                        children: "Finish turn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1484,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onFinishSession,
                        disabled: status === "processing-user" || status === "finishing",
                        className: "inline-flex min-h-11 items-center justify-center rounded-full border border-[#bfd8f1] bg-white px-4 text-sm font-bold text-[#0f5d9f] transition hover:bg-[#eef6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5d9f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        "data-testid": "ai-conversation-voice-finish-session",
                        children: "Finish"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancelSession,
                        disabled: status === "processing-user" || status === "finishing",
                        className: "inline-flex min-h-11 items-center justify-center rounded-full border border-[#dbe6f2] bg-white px-4 text-sm font-bold text-[#60718a] transition hover:bg-[#f4f7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5d9f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        "data-testid": "ai-conversation-voice-cancel-session",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 1502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 1482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 1416,
        columnNumber: 5
    }, this);
}
_c6 = DemoVoiceSessionStage;
function LocalAssistantConversationPage(param) {
    let { initialMessage } = param;
    _s1();
    var _initialMessage_trim;
    const initialMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((_initialMessage_trim = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim()) !== null && _initialMessage_trim !== void 0 ? _initialMessage_trim : "");
    const [demoState, setDemoState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LocalAssistantConversationPage.useState": ()=>loadDemoConversation(initialMessageRef.current)
    }["LocalAssistantConversationPage.useState"]);
    const [composerValue, setComposerValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAssistantTyping, setIsAssistantTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceStatus, setVoiceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [voiceSessionTurns, setVoiceSessionTurns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voiceAudioLevel, setVoiceAudioLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.28);
    const [dictationStatus, setDictationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ready");
    const [recordingSeconds, setRecordingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [demoError, setDemoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isResetDialogOpen, setIsResetDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composerInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const voiceStageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestSequenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const voiceTurnSequenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dictationSequenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const intervalRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const voiceLevelIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechUtteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const voiceDraftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        stage: demoState.stage,
        collectedAnswers: demoState.collectedAnswers,
        finalResult: demoState.finalResult,
        progress: demoState.progress,
        readiness: demoState.readiness
    });
    const previewUrlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const shouldRestoreComposerFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const shouldRestoreInputFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            document.body.classList.add("assistant-conversation-lock");
            document.documentElement.classList.add("assistant-conversation-lock");
            return ({
                "LocalAssistantConversationPage.useEffect": ()=>{
                    document.body.classList.remove("assistant-conversation-lock");
                    document.documentElement.classList.remove("assistant-conversation-lock");
                }
            })["LocalAssistantConversationPage.useEffect"];
        }
    }["LocalAssistantConversationPage.useEffect"], []);
    const isComposerBusy = isAssistantTyping || voiceStatus !== "idle";
    const isDictationBusy = dictationStatus === "listening" || dictationStatus === "transcribing";
    const hasProcessingAttachment = demoState.attachments.some((attachment)=>attachment.status === "processing");
    const hasTypedMessage = Boolean(composerValue.trim());
    const canSend = hasTypedMessage && !isComposerBusy;
    const isPrimaryVoiceDisabled = isAssistantTyping || voiceStatus !== "idle" || isDictationBusy;
    const isDictationDisabled = isAssistantTyping || voiceStatus !== "idle";
    const isVoiceSessionActive = voiceStatus !== "idle";
    const scheduleDemoTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[scheduleDemoTimeout]": (callback, delay)=>{
            const timer = setTimeout({
                "LocalAssistantConversationPage.useCallback[scheduleDemoTimeout].timer": ()=>{
                    timerRefs.current = timerRefs.current.filter({
                        "LocalAssistantConversationPage.useCallback[scheduleDemoTimeout].timer": (item)=>item !== timer
                    }["LocalAssistantConversationPage.useCallback[scheduleDemoTimeout].timer"]);
                    callback();
                }
            }["LocalAssistantConversationPage.useCallback[scheduleDemoTimeout].timer"], delay);
            timerRefs.current.push(timer);
            return timer;
        }
    }["LocalAssistantConversationPage.useCallback[scheduleDemoTimeout]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            var _messagesEndRef_current;
            (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
                block: "end",
                behavior: "smooth"
            });
        }
    }["LocalAssistantConversationPage.useEffect"], [
        demoState.messages,
        demoState.attachments,
        isAssistantTyping,
        voiceStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            if (shouldRestoreComposerFocusRef.current && voiceStatus === "idle") {
                var _composerInputRef_current;
                shouldRestoreComposerFocusRef.current = false;
                (_composerInputRef_current = composerInputRef.current) === null || _composerInputRef_current === void 0 ? void 0 : _composerInputRef_current.focus();
            }
        }
    }["LocalAssistantConversationPage.useEffect"], [
        voiceStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            voiceDraftRef.current = {
                stage: demoState.stage,
                collectedAnswers: demoState.collectedAnswers,
                finalResult: demoState.finalResult,
                progress: demoState.progress,
                readiness: demoState.readiness
            };
        }
    }["LocalAssistantConversationPage.useEffect"], [
        demoState.stage,
        demoState.collectedAnswers,
        demoState.finalResult,
        demoState.progress,
        demoState.readiness
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            if (voiceStatus !== "idle") {
                var _voiceStageRef_current;
                (_voiceStageRef_current = voiceStageRef.current) === null || _voiceStageRef_current === void 0 ? void 0 : _voiceStageRef_current.focus();
            }
        }
    }["LocalAssistantConversationPage.useEffect"], [
        voiceStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            if (shouldRestoreInputFocusRef.current && dictationStatus === "ready") {
                var _composerInputRef_current;
                shouldRestoreInputFocusRef.current = false;
                (_composerInputRef_current = composerInputRef.current) === null || _composerInputRef_current === void 0 ? void 0 : _composerInputRef_current.focus();
            }
        }
    }["LocalAssistantConversationPage.useEffect"], [
        dictationStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            persistDemoConversation(demoState);
        }
    }["LocalAssistantConversationPage.useEffect"], [
        demoState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalAssistantConversationPage.useEffect": ()=>{
            return ({
                "LocalAssistantConversationPage.useEffect": ()=>{
                    var _mediaStreamRef_current, _audioContextRef_current;
                    timerRefs.current.forEach(clearTimeout);
                    intervalRefs.current.forEach(clearInterval);
                    if (animationFrameRef.current !== null) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (voiceLevelIntervalRef.current) {
                        clearInterval(voiceLevelIntervalRef.current);
                    }
                    (_mediaStreamRef_current = mediaStreamRef.current) === null || _mediaStreamRef_current === void 0 ? void 0 : _mediaStreamRef_current.getTracks().forEach({
                        "LocalAssistantConversationPage.useEffect": (track)=>track.stop()
                    }["LocalAssistantConversationPage.useEffect"]);
                    void ((_audioContextRef_current = audioContextRef.current) === null || _audioContextRef_current === void 0 ? void 0 : _audioContextRef_current.close());
                    if ("object" !== "undefined" && "speechSynthesis" in window) {
                        window.speechSynthesis.cancel();
                    }
                    previewUrlRefs.current.forEach({
                        "LocalAssistantConversationPage.useEffect": (url)=>URL.revokeObjectURL(url)
                    }["LocalAssistantConversationPage.useEffect"]);
                }
            })["LocalAssistantConversationPage.useEffect"];
        }
    }["LocalAssistantConversationPage.useEffect"], []);
    const clearDemoTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[clearDemoTimers]": ()=>{
            timerRefs.current.forEach(clearTimeout);
            intervalRefs.current.forEach(clearInterval);
            timerRefs.current = [];
            intervalRefs.current = [];
        }
    }["LocalAssistantConversationPage.useCallback[clearDemoTimers]"], []);
    const stopLocalVoiceActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[stopLocalVoiceActivity]": ()=>{
            var _mediaStreamRef_current;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            if (voiceLevelIntervalRef.current) {
                clearInterval(voiceLevelIntervalRef.current);
                voiceLevelIntervalRef.current = null;
            }
            (_mediaStreamRef_current = mediaStreamRef.current) === null || _mediaStreamRef_current === void 0 ? void 0 : _mediaStreamRef_current.getTracks().forEach({
                "LocalAssistantConversationPage.useCallback[stopLocalVoiceActivity]": (track)=>track.stop()
            }["LocalAssistantConversationPage.useCallback[stopLocalVoiceActivity]"]);
            mediaStreamRef.current = null;
            if (audioContextRef.current) {
                void audioContextRef.current.close();
                audioContextRef.current = null;
            }
            setVoiceAudioLevel(0.28);
        }
    }["LocalAssistantConversationPage.useCallback[stopLocalVoiceActivity]"], []);
    const stopDemoSpeech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[stopDemoSpeech]": ()=>{
            speechUtteranceRef.current = null;
            if ("object" !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        }
    }["LocalAssistantConversationPage.useCallback[stopDemoSpeech]"], []);
    const startSimulatedVoiceLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[startSimulatedVoiceLevel]": ()=>{
            if (voiceLevelIntervalRef.current) {
                clearInterval(voiceLevelIntervalRef.current);
            }
            const interval = setInterval({
                "LocalAssistantConversationPage.useCallback[startSimulatedVoiceLevel].interval": ()=>{
                    setVoiceAudioLevel(0.24 + Math.random() * 0.58);
                }
            }["LocalAssistantConversationPage.useCallback[startSimulatedVoiceLevel].interval"], 180);
            voiceLevelIntervalRef.current = interval;
        }
    }["LocalAssistantConversationPage.useCallback[startSimulatedVoiceLevel]"], []);
    const startLocalVoiceActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[startLocalVoiceActivity]": async ()=>{
            var _navigator_mediaDevices;
            stopLocalVoiceActivity();
            if (typeof navigator === "undefined" || !((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia) || "object" === "undefined" || !window.AudioContext) {
                startSimulatedVoiceLevel();
                return;
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const audioContext = new window.AudioContext();
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 128;
                const source = audioContext.createMediaStreamSource(stream);
                source.connect(analyser);
                mediaStreamRef.current = stream;
                audioContextRef.current = audioContext;
                const data = new Uint8Array(analyser.frequencyBinCount);
                const updateLevel = {
                    "LocalAssistantConversationPage.useCallback[startLocalVoiceActivity].updateLevel": ()=>{
                        analyser.getByteFrequencyData(data);
                        const average = data.reduce({
                            "LocalAssistantConversationPage.useCallback[startLocalVoiceActivity].updateLevel": (total, value)=>total + value
                        }["LocalAssistantConversationPage.useCallback[startLocalVoiceActivity].updateLevel"], 0) / data.length;
                        setVoiceAudioLevel(Math.max(0.18, Math.min(1, average / 96)));
                        animationFrameRef.current = requestAnimationFrame(updateLevel);
                    }
                }["LocalAssistantConversationPage.useCallback[startLocalVoiceActivity].updateLevel"];
                updateLevel();
            } catch (e) {
                startSimulatedVoiceLevel();
            }
        }
    }["LocalAssistantConversationPage.useCallback[startLocalVoiceActivity]"], [
        startSimulatedVoiceLevel,
        stopLocalVoiceActivity
    ]);
    const playDemoAssistantSpeech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]": (content)=>new Promise({
                "LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]": (resolve)=>{
                    const fallbackDelay = Math.min(2800, Math.max(900, content.length * 22));
                    let settled = false;
                    const finish = {
                        "LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech].finish": ()=>{
                            if (settled) {
                                return;
                            }
                            settled = true;
                            speechUtteranceRef.current = null;
                            resolve();
                        }
                    }["LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech].finish"];
                    const fallbackTimer = scheduleDemoTimeout(finish, fallbackDelay);
                    if ("object" === "undefined" || !("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance === "undefined") {
                        return;
                    }
                    try {
                        window.speechSynthesis.cancel();
                        const utterance = new window.SpeechSynthesisUtterance(content);
                        speechUtteranceRef.current = utterance;
                        utterance.rate = 0.95;
                        utterance.pitch = 1;
                        utterance.onend = ({
                            "LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]": ()=>{
                                clearTimeout(fallbackTimer);
                                finish();
                            }
                        })["LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]"];
                        utterance.onerror = ({
                            "LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]": ()=>{
                                clearTimeout(fallbackTimer);
                                finish();
                            }
                        })["LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]"];
                        window.speechSynthesis.speak(utterance);
                    } catch (e) {
                        clearTimeout(fallbackTimer);
                        scheduleDemoTimeout(finish, fallbackDelay);
                    }
                }
            }["LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]"])
    }["LocalAssistantConversationPage.useCallback[playDemoAssistantSpeech]"], [
        scheduleDemoTimeout
    ]);
    const submitDemoMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalAssistantConversationPage.useCallback[submitDemoMessage]": async function(content) {
            let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const trimmed = content.trim();
            if (!trimmed || isComposerBusy && !options.allowWhileBusy) {
                return;
            }
            const requestId = requestSequenceRef.current + 1;
            requestSequenceRef.current = requestId;
            const userMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDemoMessage"])("user", trimmed);
            const stageAtSend = demoState.stage;
            setDemoError(null);
            setComposerValue("");
            setIsAssistantTyping(true);
            setDemoState({
                "LocalAssistantConversationPage.useCallback[submitDemoMessage]": (current)=>({
                        ...current,
                        messages: [
                            ...current.messages.map({
                                "LocalAssistantConversationPage.useCallback[submitDemoMessage]": (message)=>message.id === options.suggestionMessageId ? {
                                        ...message,
                                        suggestions: undefined
                                    } : message
                            }["LocalAssistantConversationPage.useCallback[submitDemoMessage]"]),
                            userMessage
                        ]
                    })
            }["LocalAssistantConversationPage.useCallback[submitDemoMessage]"]);
            try {
                const turn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDemoAssistantResponse"])({
                    content: trimmed,
                    stage: stageAtSend,
                    collectedAnswers: demoState.collectedAnswers
                });
                if (requestId !== requestSequenceRef.current) {
                    return;
                }
                setDemoState({
                    "LocalAssistantConversationPage.useCallback[submitDemoMessage]": (current)=>{
                        var _turn_finalResult;
                        return {
                            ...current,
                            messages: [
                                ...current.messages,
                                turn.message
                            ],
                            stage: turn.stage,
                            collectedAnswers: turn.collectedAnswers,
                            finalResult: (_turn_finalResult = turn.finalResult) !== null && _turn_finalResult !== void 0 ? _turn_finalResult : current.finalResult,
                            progress: turn.progress,
                            readiness: turn.readiness
                        };
                    }
                }["LocalAssistantConversationPage.useCallback[submitDemoMessage]"]);
            } catch (e) {
                setDemoError("SafeSpeak could not create a demo response. Try again.");
            } finally{
                if (requestId === requestSequenceRef.current) {
                    setIsAssistantTyping(false);
                }
            }
        }
    }["LocalAssistantConversationPage.useCallback[submitDemoMessage]"], [
        demoState.stage,
        demoState.collectedAnswers,
        isComposerBusy
    ]);
    const handleSuggestionClick = (suggestion, messageId)=>{
        void submitDemoMessage(suggestion.value, {
            suggestionMessageId: messageId
        });
    };
    const handleSendTypedResponse = ()=>{
        void submitDemoMessage(composerValue);
    };
    const startVoiceDemo = ()=>{
        if (isAssistantTyping || voiceStatus !== "idle" || isDictationBusy) {
            return;
        }
        voiceTurnSequenceRef.current += 1;
        voiceDraftRef.current = {
            stage: demoState.stage,
            collectedAnswers: demoState.collectedAnswers,
            finalResult: demoState.finalResult,
            progress: demoState.progress,
            readiness: demoState.readiness
        };
        setDemoError(null);
        setVoiceSessionTurns([]);
        setVoiceAudioLevel(0.28);
        setRecordingSeconds(0);
        setVoiceStatus("starting");
        intervalRefs.current.forEach(clearInterval);
        intervalRefs.current = [];
        const interval = setInterval(()=>{
            setRecordingSeconds((current)=>current + 1);
        }, 1000);
        intervalRefs.current.push(interval);
        void startLocalVoiceActivity();
        scheduleDemoTimeout(()=>{
            setVoiceStatus((current)=>current === "starting" ? "listening" : current);
        }, 360);
    };
    const handlePrimaryVoiceAction = ()=>{
        startVoiceDemo();
    };
    const finishVoiceTurn = async ()=>{
        if (voiceStatus !== "listening") {
            return;
        }
        const voiceRequestId = voiceTurnSequenceRef.current;
        stopLocalVoiceActivity();
        setVoiceStatus("processing-user");
        try {
            const transcript = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateDemoTranscription"])();
            if (voiceRequestId !== voiceTurnSequenceRef.current) {
                return;
            }
            const userTurn = {
                id: "demo-voice-turn-user-".concat(Date.now()),
                role: "user",
                content: transcript,
                createdAt: new Date().toISOString()
            };
            setVoiceSessionTurns((current)=>[
                    ...current,
                    userTurn
                ]);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDemoAssistantResponse"])({
                content: transcript,
                stage: voiceDraftRef.current.stage,
                collectedAnswers: voiceDraftRef.current.collectedAnswers
            });
            if (voiceRequestId !== voiceTurnSequenceRef.current) {
                return;
            }
            const assistantTurn = {
                id: "demo-voice-turn-assistant-".concat(Date.now()),
                role: "assistant",
                content: response.message.content,
                createdAt: response.message.createdAt
            };
            voiceDraftRef.current = {
                stage: response.stage,
                collectedAnswers: response.collectedAnswers,
                finalResult: response.finalResult,
                progress: response.progress,
                readiness: response.readiness
            };
            setVoiceSessionTurns((current)=>[
                    ...current,
                    assistantTurn
                ]);
            setVoiceStatus("assistant-speaking");
            await playDemoAssistantSpeech(response.message.content);
            if (voiceRequestId !== voiceTurnSequenceRef.current) {
                return;
            }
            setVoiceStatus("listening");
            void startLocalVoiceActivity();
        } catch (e) {
            stopLocalVoiceActivity();
            stopDemoSpeech();
            setDemoError("Demo voice conversation could not continue.");
            setVoiceStatus("error");
        }
    };
    const finishVoiceSession = ()=>{
        if (voiceStatus === "processing-user" || voiceStatus === "finishing") {
            return;
        }
        voiceTurnSequenceRef.current += 1;
        stopLocalVoiceActivity();
        stopDemoSpeech();
        intervalRefs.current.forEach(clearInterval);
        intervalRefs.current = [];
        setVoiceStatus("finishing");
        const completedTurns = voiceSessionTurns;
        if (completedTurns.length) {
            setDemoState((current)=>({
                    ...current,
                    messages: [
                        ...current.messages,
                        ...completedTurns.map((turn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDemoMessage"])(turn.role, turn.content))
                    ],
                    stage: voiceDraftRef.current.stage,
                    collectedAnswers: voiceDraftRef.current.collectedAnswers,
                    finalResult: voiceDraftRef.current.finalResult,
                    progress: voiceDraftRef.current.progress,
                    readiness: voiceDraftRef.current.readiness
                }));
        }
        scheduleDemoTimeout(()=>{
            setVoiceSessionTurns([]);
            setRecordingSeconds(0);
            setVoiceStatus("idle");
            shouldRestoreComposerFocusRef.current = true;
        }, 260);
    };
    const cancelVoiceSession = ()=>{
        voiceTurnSequenceRef.current += 1;
        stopLocalVoiceActivity();
        stopDemoSpeech();
        intervalRefs.current.forEach(clearInterval);
        intervalRefs.current = [];
        setVoiceSessionTurns([]);
        setRecordingSeconds(0);
        setVoiceStatus("idle");
        shouldRestoreComposerFocusRef.current = true;
    };
    const startMessageDictation = ()=>{
        if (isDictationDisabled || dictationStatus === "transcribing") {
            return;
        }
        dictationSequenceRef.current += 1;
        setDemoError(null);
        setDictationStatus("listening");
    };
    const stopMessageDictation = async ()=>{
        if (dictationStatus !== "listening") {
            return;
        }
        const dictationRequestId = dictationSequenceRef.current;
        setDictationStatus("transcribing");
        try {
            const transcript = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateDemoDictation"])();
            if (dictationRequestId !== dictationSequenceRef.current) {
                return;
            }
            setComposerValue((current)=>{
                const trimmed = current.trim();
                return trimmed ? "".concat(current.trimEnd(), " ").concat(transcript) : transcript;
            });
            shouldRestoreInputFocusRef.current = true;
            setDictationStatus("ready");
        } catch (e) {
            setDictationStatus("error");
        }
    };
    const cancelMessageDictation = ()=>{
        dictationSequenceRef.current += 1;
        setDictationStatus("ready");
    };
    const handleMessageDictationAction = ()=>{
        if (dictationStatus === "listening") {
            void stopMessageDictation();
            return;
        }
        startMessageDictation();
    };
    const handleAttachmentSelected = async (file)=>{
        if (!file || isVoiceSessionActive) {
            return;
        }
        const attachmentId = "demo-attachment-".concat(Date.now());
        const canPreview = file.type.startsWith("image/");
        const previewUrl = canPreview ? URL.createObjectURL(file) : undefined;
        if (previewUrl) {
            previewUrlRefs.current.push(previewUrl);
        }
        const attachment = {
            id: attachmentId,
            name: file.name,
            type: file.type || "Unknown type",
            size: file.size,
            status: "processing",
            progress: 4,
            previewUrl,
            message: "Processing preview"
        };
        const attachmentMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDemoMessage"])("user", "Attached locally: ".concat(file.name), {
            attachmentId
        });
        setDemoError(null);
        setDemoState((current)=>({
                ...current,
                attachments: [
                    ...current.attachments,
                    attachment
                ],
                messages: [
                    ...current.messages,
                    attachmentMessage
                ]
            }));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateDemoAttachmentProcessing"])(file, (progress)=>{
            setDemoState((current)=>({
                    ...current,
                    attachments: current.attachments.map((item)=>item.id === attachmentId ? {
                            ...item,
                            progress
                        } : item)
                }));
        });
        setDemoState((current)=>({
                ...current,
                attachments: current.attachments.map((item)=>item.id === attachmentId ? {
                        ...item,
                        ...result
                    } : item)
            }));
        if (result.status === "ready") {
            void submitDemoMessage("I attached ".concat(file.name, " for the demo conversation."), {
                allowWhileBusy: true
            });
        } else {
            var _result_message;
            setDemoError((_result_message = result.message) !== null && _result_message !== void 0 ? _result_message : "This file could not be used in the demo.");
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const removeAttachment = (attachmentId)=>{
        const attachment = demoState.attachments.find((item)=>item.id === attachmentId);
        if (attachment === null || attachment === void 0 ? void 0 : attachment.previewUrl) {
            URL.revokeObjectURL(attachment.previewUrl);
            previewUrlRefs.current = previewUrlRefs.current.filter((url)=>url !== attachment.previewUrl);
        }
        setDemoState((current)=>({
                ...current,
                attachments: current.attachments.filter((item)=>item.id !== attachmentId),
                messages: [
                    ...current.messages,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDemoMessage"])("system", "Attachment removed from this demo session.")
                ]
            }));
    };
    const handleResetConversation = ()=>{
        clearDemoTimers();
        stopLocalVoiceActivity();
        stopDemoSpeech();
        previewUrlRefs.current.forEach((url)=>URL.revokeObjectURL(url));
        previewUrlRefs.current = [];
        requestSequenceRef.current += 1;
        voiceTurnSequenceRef.current += 1;
        dictationSequenceRef.current += 1;
        setDemoState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDemoConversation"])(initialMessageRef.current));
        setComposerValue("");
        setIsAssistantTyping(false);
        setVoiceStatus("idle");
        setVoiceSessionTurns([]);
        setVoiceAudioLevel(0.28);
        setDictationStatus("ready");
        setRecordingSeconds(0);
        setDemoError(null);
        setIsResetDialogOpen(false);
        if ("TURBOPACK compile-time truthy", 1) {
            window.sessionStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_ASSISTANT_STORAGE_KEY"]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-testid": "ai-conversation-page",
        className: "assistant-demo-conversation-page flex min-h-0 flex-1 flex-col px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-0 w-full max-w-[1320px] flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]",
                                children: "Demo conversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsResetDialogOpen(true),
                                className: "inline-flex min-h-9 items-center gap-2 rounded-full border border-[#d7e1ee] bg-white px-3 text-xs font-semibold text-[#334155] transition hover:bg-[#f8fbff]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__["IconRefresh"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 2237,
                                        columnNumber: 13
                                    }, this),
                                    "Reset Conversation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid min-h-0 flex-1 gap-4 py-4 xl:grid-cols-[minmax(0,1fr)_300px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                "aria-labelledby": "local-conversation-title",
                                className: "flex min-h-0 flex-col overflow-y-auto overflow-x-hidden rounded-[18px] border border-[#dbe5f1] bg-[#f8fbff] shadow-[0_10px_24px_rgba(15,23,42,0.04)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "bg-white/82 border-b border-[#dbe6f2] px-4 py-4 sm:px-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-4xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    id: "local-conversation-title",
                                                    className: "text-2xl font-extrabold leading-tight text-[#1f2a3a] sm:text-[28px]",
                                                    children: "Tell your story"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 max-w-2xl text-sm leading-6 text-[#60718a]",
                                                    children: "Speak, type, or attach something locally. SafeSpeak will simulate a calm multi-turn conversation for this frontend demo."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2255,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2248,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 2247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "conversation-scrollbar min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-5",
                                        children: isVoiceSessionActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoVoiceSessionStage, {
                                            status: voiceStatus,
                                            durationSeconds: recordingSeconds,
                                            turns: voiceSessionTurns,
                                            audioLevel: voiceAudioLevel,
                                            onFinishTurn: ()=>{
                                                void finishVoiceTurn();
                                            },
                                            onFinishSession: finishVoiceSession,
                                            onCancelSession: cancelVoiceSession,
                                            stageRef: voiceStageRef
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2265,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex w-full max-w-[920px] flex-col gap-4",
                                            children: [
                                                demoState.messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoMessageItem, {
                                                        message: message,
                                                        attachment: demoState.attachments.find((item)=>item.id === message.attachmentId),
                                                        onRemoveAttachment: removeAttachment,
                                                        onSuggestionClick: handleSuggestionClick
                                                    }, message.id, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 2280,
                                                        columnNumber: 21
                                                    }, this)),
                                                isAssistantTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoTypingIndicator, {}, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2291,
                                                    columnNumber: 40
                                                }, this) : null,
                                                hasProcessingAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoStatusBubble, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                        size: 13,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 2295,
                                                        columnNumber: 29
                                                    }, void 0),
                                                    label: "Processing local attachment preview..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2294,
                                                    columnNumber: 21
                                                }, this) : null,
                                                demoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex w-fit max-w-[540px] items-center gap-2 rounded-[14px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-2.5 text-xs font-semibold text-[#b45353]",
                                                    role: "status",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 2305,
                                                            columnNumber: 23
                                                        }, this),
                                                        demoError
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2301,
                                                    columnNumber: 21
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: messagesEndRef,
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2310,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2278,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 2263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (event)=>{
                                            event.preventDefault();
                                            handleSendTypedResponse();
                                        },
                                        className: "border-t border-[#dbe6f2] bg-white/90 px-3 py-3 sm:px-5",
                                        children: [
                                            demoState.attachments.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3 flex gap-2 overflow-x-auto pb-1",
                                                children: demoState.attachments.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoAttachmentChip, {
                                                        attachment: attachment,
                                                        onRemove: ()=>removeAttachment(attachment.id)
                                                    }, attachment.id, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 2325,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 2323,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$voice$2d$first$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantVoiceFirstInput"], {
                                                value: composerValue,
                                                onChange: setComposerValue,
                                                inputRef: composerInputRef,
                                                inputTestId: "ai-conversation-input",
                                                placeholder: "Type your response...",
                                                inputLabel: "Message SafeSpeak",
                                                disabled: isComposerBusy,
                                                onKeyDown: (event)=>{
                                                    if (event.key === "Enter" && !event.shiftKey) {
                                                        event.preventDefault();
                                                        handleSendTypedResponse();
                                                    }
                                                },
                                                onDictationClick: handleMessageDictationAction,
                                                dictationDisabled: isDictationDisabled || dictationStatus === "transcribing",
                                                dictationLabel: getDictationActionLabel(dictationStatus),
                                                dictationTestId: "ai-conversation-dictation",
                                                onVoiceFirstClick: handlePrimaryVoiceAction,
                                                voiceFirstDisabled: isPrimaryVoiceDisabled,
                                                voiceFirstLabel: getPrimaryVoiceActionLabel(voiceStatus),
                                                voiceTestId: "ai-conversation-composer-voice",
                                                sendLabel: "Send demo message",
                                                sendTestId: "ai-conversation-send",
                                                showSendButton: hasTypedMessage,
                                                sendDisabled: !canSend,
                                                isProcessing: isAssistantTyping,
                                                captureState: dictationStatus === "listening" ? "listening" : dictationStatus === "transcribing" ? "review" : "idle",
                                                captureLabel: dictationStatus === "listening" ? "Listening..." : "Transcribing...",
                                                captureConfirmDisabled: dictationStatus !== "listening",
                                                cancelLabel: "Cancel dictation",
                                                confirmLabel: "Stop message dictation",
                                                onCancelCapture: cancelMessageDictation,
                                                onConfirmCapture: ()=>{
                                                    void stopMessageDictation();
                                                },
                                                leadingAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        var _fileInputRef_current;
                                                        return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                                    },
                                                    disabled: isVoiceSessionActive,
                                                    className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f4f7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5d9f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",
                                                    "aria-label": "Attach a local file for this demo",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPaperclip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPaperclip$3e$__["IconPaperclip"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 2390,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2383,
                                                    columnNumber: 21
                                                }, void 0),
                                                error: dictationStatus === "error" ? getDictationStatusText(dictationStatus) : null
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 2334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-center text-[11px] leading-5 text-[#60718a]",
                                                children: "Demo only. Nothing is uploaded, transcribed, spoken, submitted, or shared with a production service."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 2399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                className: "hidden",
                                                accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt",
                                                onChange: (event)=>{
                                                    var _event_target_files;
                                                    void handleAttachmentSelected((_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0]);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 2403,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 2315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-[18px] border border-[#dce4ef] bg-white/90 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-base font-extrabold text-[#1f2a3a]",
                                                            children: "What SafeSpeak has understood"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 2419,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs leading-5 text-[#60718a]",
                                                            children: "Local demo summary. Nothing has been sent."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 2422,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-[#e7f1fb] px-3 py-1.5 text-xs font-bold text-[#0f5d9f]",
                                                    children: getDemoPhaseLabel(demoState.stage)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2426,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2417,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoProgressMetric, {
                                                    label: "Conversation",
                                                    value: demoState.progress
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2432,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoProgressMetric, {
                                                    label: "Report readiness",
                                                    value: demoState.readiness
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2436,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[14px] border border-[#dbe5f0] bg-[#f8fbff] p-3 text-xs leading-5 text-[#60718a]",
                                                    children: [
                                                        "Messages: ",
                                                        demoState.messages.length,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block",
                                                            children: [
                                                                "Attachments: ",
                                                                demoState.attachments.length,
                                                                " local item",
                                                                demoState.attachments.length === 1 ? "" : "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 2442,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block",
                                                            children: [
                                                                "Status: ",
                                                                isAssistantTyping ? "SafeSpeak typing" : "Ready"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 2446,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 2440,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2431,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-[14px] border border-[#f2d8b0] bg-[#fffaf2] px-3 py-3 text-xs leading-5 text-[#9a5b12]",
                                            children: "This panel is informational for the demo. It does not classify, report, or contact a service."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 2452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 2416,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2227,
                columnNumber: 7
            }, this),
            isResetDialogOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[140] grid place-items-center bg-[#0b1725]/50 p-4",
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "reset-conversation-title",
                    className: "w-full max-w-md rounded-[20px] border border-[#dbe6f2] bg-white p-5 text-[#1f2a3a] shadow-[0_20px_48px_rgba(15,23,42,0.24)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "reset-conversation-title",
                            className: "text-lg font-extrabold",
                            children: "Reset Conversation?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2472,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm leading-6 text-[#60718a]",
                            children: "This clears the demo messages, local attachments, voice state, progress, and session storage for this conversation only."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2478,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsResetDialogOpen(false),
                                    className: "inline-flex min-h-11 items-center justify-center rounded-full border border-[#dbe5f0] bg-white px-4 text-sm font-bold text-[#334155]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 2483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleResetConversation,
                                    className: "inline-flex min-h-11 items-center justify-center rounded-full bg-[#0f5d9f] px-4 text-sm font-bold text-white",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 2490,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2482,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2466,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2462,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2223,
        columnNumber: 5
    }, this);
}
_s1(LocalAssistantConversationPage, "/6unC7PFJ5332ZXf5HmYrxB1ufg=");
_c7 = LocalAssistantConversationPage;
function DemoProgressMetric(param) {
    let { label, value } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[#60718a]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-[#0f5d9f]",
                        children: [
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2514,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 h-2 rounded-full bg-[#dbe6f2]",
                role: "progressbar",
                "aria-label": "".concat(label, " progress"),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": value,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-[#0f5d9f] transition-all duration-200",
                    style: {
                        width: "".concat(value, "%")
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2518,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2513,
        columnNumber: 5
    }, this);
}
_c8 = DemoProgressMetric;
function DemoMessageItem(param) {
    let { message, attachment, onRemoveAttachment, onSuggestionClick } = param;
    var _message_suggestions;
    if (message.role === "system") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-testid": "ai-conversation-message-system",
            className: "mx-auto inline-flex max-w-[680px] items-center rounded-full border border-[#dbe5f0] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#60718a]",
            children: message.content
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 2548,
            columnNumber: 7
        }, this);
    }
    const isUser = message.role === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "ai-conversation-message-".concat(message.role),
        className: "motion-safe:duration-200 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 ".concat(isUser ? "flex justify-end" : "flex justify-start"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-w-[min(92%,680px)] gap-3 ".concat(isUser ? "flex-row-reverse" : ""),
            children: [
                !isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[#e7f1fb] text-xs font-extrabold text-[#0f5d9f]",
                    children: "SS"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2570,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: isUser ? "items-end" : "items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[18px] px-4 py-3 text-sm leading-6 shadow-[0_8px_22px_rgba(148,163,184,0.12)] ".concat(isUser ? "rounded-tr-[8px] bg-[#0f5d9f] text-white" : "rounded-tl-[8px] bg-white text-[#41566f]"),
                            children: isUser ? message.content : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$assistant$2d$message$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantMessageRenderer"], {
                                content: message.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2585,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2575,
                            columnNumber: 11
                        }, this),
                        attachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoAttachmentCard, {
                                attachment: attachment,
                                onRemove: ()=>onRemoveAttachment(attachment.id)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2590,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2589,
                            columnNumber: 13
                        }, this) : null,
                        !isUser && ((_message_suggestions = message.suggestions) === null || _message_suggestions === void 0 ? void 0 : _message_suggestions.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex flex-wrap gap-2",
                            "aria-label": "Suggested responses",
                            children: message.suggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSuggestionClick(suggestion, message.id),
                                    className: "inline-flex min-h-9 items-center rounded-full border border-[#d7e1ee] bg-white px-3 text-xs font-bold text-[#334155] transition hover:border-[#bfd1e6] hover:bg-[#f8fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f5d9f]",
                                    children: suggestion.label
                                }, suggestion.id, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 2602,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2597,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2574,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 2566,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2560,
        columnNumber: 5
    }, this);
}
_c9 = DemoMessageItem;
function DemoAttachmentCard(param) {
    let { attachment, onRemove } = param;
    var _attachment_message;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "w-full max-w-[360px] rounded-[14px] border border-[#dbe5f0] bg-white p-3 text-[#1f2a3a] shadow-[0_6px_18px_rgba(148,163,184,0.12)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid size-14 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-[#f8fbff] text-[#0f5d9f] ring-1 ring-[#dbe5f0]",
                    children: attachment.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: attachment.previewUrl,
                        alt: "",
                        width: 56,
                        height: 56,
                        unoptimized: true,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2631,
                        columnNumber: 13
                    }, this) : attachment.type.startsWith("image/") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2640,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2642,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2629,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate text-xs font-extrabold text-[#1f2a3a]",
                            children: attachment.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2646,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[11px] text-[#60718a]",
                            children: [
                                attachment.type || "Unknown type",
                                " -",
                                " ",
                                formatLocalFileSize(attachment.size)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 h-1.5 rounded-full bg-[#e5edf6]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-full ".concat(attachment.status === "error" ? "bg-[#de3838]" : "bg-[#0f5d9f]", " transition-all duration-200"),
                                style: {
                                    width: "".concat(attachment.progress, "%")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 2654,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[11px] font-semibold text-[#60718a]",
                            children: (_attachment_message = attachment.message) !== null && _attachment_message !== void 0 ? _attachment_message : attachment.status === "processing" ? "Processing preview" : "Available in this demo session"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 2661,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2645,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onRemove,
                    className: "grid size-7 shrink-0 place-items-center rounded-full text-[#94a3b8] transition hover:bg-[#f1f5f9] hover:text-[#475569]",
                    "aria-label": "Remove ".concat(attachment.name),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2674,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2668,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 2628,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2627,
        columnNumber: 5
    }, this);
}
_c10 = DemoAttachmentCard;
function DemoAttachmentChip(param) {
    let { attachment, onRemove } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-w-[220px] max-w-[300px] items-center gap-2 rounded-[12px] border border-[#dbe5f0] bg-[#f8fbff] px-3 py-2 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#0f5d9f]",
                children: attachment.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2692,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2694,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2690,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block truncate font-bold text-[#1f2a3a]",
                        children: attachment.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[10px] text-[#60718a]",
                        children: attachment.status === "processing" ? "".concat(attachment.progress, "% processing") : attachment.status === "ready" ? "Ready for this demo" : "Needs attention"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2701,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2697,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRemove,
                className: "grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#60718a] hover:text-[#1f2a3a]",
                "aria-label": "Remove ".concat(attachment.name),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                    size: 13
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 2715,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2709,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2689,
        columnNumber: 5
    }, this);
}
_c11 = DemoAttachmentChip;
function DemoTypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex w-fit items-center gap-2 rounded-[18px] rounded-tl-[8px] bg-white px-3 py-2 text-xs font-semibold text-[#60718a] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
        role: "status",
        "aria-live": "polite",
        children: [
            "SafeSpeak is typing",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center gap-1",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-1.5 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:0ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-1.5 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:150ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-1.5 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:300ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 2732,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                lineNumber: 2729,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2723,
        columnNumber: 5
    }, this);
}
_c12 = DemoTypingIndicator;
function DemoStatusBubble(param) {
    let { icon, label } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex w-fit max-w-[540px] items-center gap-2 rounded-[16px] bg-white px-4 py-2.5 text-xs font-semibold text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
        role: "status",
        "aria-live": "polite",
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 2740,
        columnNumber: 5
    }, this);
}
_c13 = DemoStatusBubble;
// Retained for reference while Step 3 uses the frontend-only conversation.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LegacySafeSpeakAssistantConversationPage(param) {
    let { initialMessage, initialPrefillMessage, initialCategory, initialTopic, startVoiceMode = false } = param;
    _s2();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const seededMessage = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim();
    const seededPrefillMessage = initialPrefillMessage === null || initialPrefillMessage === void 0 ? void 0 : initialPrefillMessage.trim();
    const starterAssistantPrompts = [
        t("dashboard.assistant.conversation.botPromptWho"),
        "I'm helping you structure your report.",
        "Te ayudo a estructurar tu reporte."
    ];
    const storedDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssistantConversationDraft"])({
        topic: initialTopic,
        incidentCategory: initialCategory
    });
    const shouldIgnoreStoredDraft = Boolean(seededMessage);
    const existingDraft = shouldIgnoreStoredDraft ? null : storedDraft;
    const shouldRestoreVoiceMode = Boolean(startVoiceMode && (existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.voiceSessionActive));
    const shouldAutoStartVoiceMode = shouldRestoreVoiceMode || !existingDraft && startVoiceMode;
    var _existingDraft_messages_filter;
    const initialDraftMessages = (_existingDraft_messages_filter = existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.messages.filter((message, index)=>!(index === 0 && message.role === "assistant" && starterAssistantPrompts.includes(message.content.trim())))) !== null && _existingDraft_messages_filter !== void 0 ? _existingDraft_messages_filter : [];
    const initialConversationMessages = initialDraftMessages && initialDraftMessages.length > 0 ? initialDraftMessages : [
        seededMessage ? {
            role: "user",
            content: seededMessage
        } : null
    ].filter(Boolean);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seededPrefillMessage !== null && seededPrefillMessage !== void 0 ? seededPrefillMessage : "");
    var _existingDraft_conversationSessionId;
    const [conversationSessionId, setConversationSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_existingDraft_conversationSessionId = existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.conversationSessionId) !== null && _existingDraft_conversationSessionId !== void 0 ? _existingDraft_conversationSessionId : null);
    var _existingDraft_timeline;
    const [timeline, setTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_existingDraft_timeline = existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.timeline) !== null && _existingDraft_timeline !== void 0 ? _existingDraft_timeline : emptyTimeline);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LegacySafeSpeakAssistantConversationPage.useState": ()=>initialConversationMessages
    }["LegacySafeSpeakAssistantConversationPage.useState"]);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(seededMessage) && !existingDraft);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [speechError, setSpeechError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVoiceSessionActive, setIsVoiceSessionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(shouldRestoreVoiceMode);
    const [isVoiceSessionMuted, setIsVoiceSessionMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecordingActive, setIsRecordingActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranscribing, setIsTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingSpeech, setIsGeneratingSpeech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speechPlaybackError, setSpeechPlaybackError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replayVoiceText, setReplayVoiceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replayVoiceLanguage, setReplayVoiceLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [liveTranscript, setLiveTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceAvatarState, setVoiceAvatarState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [activeVoiceCaptureTarget, setActiveVoiceCaptureTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingVoiceReviewBlob, setPendingVoiceReviewBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { pendingConsentRequirement, isGrantingConsent, captureConsentError, clearPendingConsent, grantPendingConsent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"])();
    const hasSentInitialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasStartedInitialVoiceModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const latestMessagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messages);
    const latestRequestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const latestAssistantTurnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.max(0, ...messages.filter({
        "LegacySafeSpeakAssistantConversationPage.useRef[latestAssistantTurnRef]": (message)=>message.role === "assistant"
    }["LegacySafeSpeakAssistantConversationPage.useRef[latestAssistantTurnRef]"]).map({
        "LegacySafeSpeakAssistantConversationPage.useRef[latestAssistantTurnRef]": (message)=>{
            var _message_turnNumber;
            return (_message_turnNumber = message.turnNumber) !== null && _message_turnNumber !== void 0 ? _message_turnNumber : 0;
        }
    }["LegacySafeSpeakAssistantConversationPage.useRef[latestAssistantTurnRef]"])));
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingAssistantRequestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const recordingStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldProcessRecordingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const voiceSessionActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const shouldContinueAfterPlaybackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const autoStopRecordingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const restartListeningTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechErrorTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechPlaybackWatchdogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startVoiceRecordingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "LegacySafeSpeakAssistantConversationPage.useRef[startVoiceRecordingRef]": async ()=>false
    }["LegacySafeSpeakAssistantConversationPage.useRef[startVoiceRecordingRef]"]);
    const hasHandledPendingVoiceHandoffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const liveRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liveFinalTranscriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const speechAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechAudioUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechPlaybackActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pendingSpeechRevealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingDecisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _existingDraft_timelineFieldOrder;
    const [timelineFieldOrder, setTimelineFieldOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_existingDraft_timelineFieldOrder = existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.timelineFieldOrder) !== null && _existingDraft_timelineFieldOrder !== void 0 ? _existingDraft_timelineFieldOrder : []);
    const [showTriageCta, setShowTriageCta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(existingDraft === null || existingDraft === void 0 ? void 0 : existingDraft.triageCtaVisible));
    const continueReportSubmissionPath = getContinueReportSubmissionPath(initialCategory, conversationSessionId !== null && conversationSessionId !== void 0 ? conversationSessionId : undefined);
    const assistantEntryHref = getAssistantEntryHref(initialTopic, initialCategory);
    const assistantEntryHrefString = getDashboardHrefString(assistantEntryHref);
    const useNswLegalAwareness = shouldUseNswLegalAwareness(initialTopic, initialCategory);
    const transcriptionLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LegacySafeSpeakAssistantConversationPage.useMemo[transcriptionLanguage]": ()=>{
            return i18n.resolvedLanguage === "es" || i18n.language === "es" ? "es" : "en";
        }
    }["LegacySafeSpeakAssistantConversationPage.useMemo[transcriptionLanguage]"], [
        i18n.language,
        i18n.resolvedLanguage
    ]);
    const transcriptionLanguageHint = transcriptionLanguage === "en" ? undefined : transcriptionLanguage;
    const livePreviewLanguage = transcriptionLanguage === "es" ? "es-ES" : "en-US";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (!storedDraft) {
                return;
            }
            console.info(shouldIgnoreStoredDraft ? "[SafeSpeak][frontend-draft-ignored]" : "[SafeSpeak][frontend-draft-restored]", JSON.stringify({
                seededMessage,
                storedConversationSessionId: storedDraft.conversationSessionId,
                storedMessageCount: storedDraft.messages.length
            }));
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        seededMessage,
        shouldIgnoreStoredDraft,
        storedDraft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (!shouldIgnoreStoredDraft) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAssistantConversationDraft"])({
                topic: initialTopic,
                incidentCategory: initialCategory
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        initialCategory,
        initialTopic,
        shouldIgnoreStoredDraft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            latestMessagesRef.current = messages;
            latestAssistantTurnRef.current = Math.max(latestAssistantTurnRef.current, ...messages.filter({
                "LegacySafeSpeakAssistantConversationPage.useEffect": (message)=>message.role === "assistant"
            }["LegacySafeSpeakAssistantConversationPage.useEffect"]).map({
                "LegacySafeSpeakAssistantConversationPage.useEffect": (message)=>{
                    var _message_turnNumber;
                    return (_message_turnNumber = message.turnNumber) !== null && _message_turnNumber !== void 0 ? _message_turnNumber : 0;
                }
            }["LegacySafeSpeakAssistantConversationPage.useEffect"]));
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (storedDraft) {
                var _storedDraft_messages_at_content, _storedDraft_messages_at;
                var _storedDraft_conversationSessionId, _storedDraft_messages_at_content_slice;
                console.info("[SafeSpeak][frontend-draft-restore]", JSON.stringify({
                    usedDraft: !shouldIgnoreStoredDraft,
                    conversationSessionId: (_storedDraft_conversationSessionId = storedDraft.conversationSessionId) !== null && _storedDraft_conversationSessionId !== void 0 ? _storedDraft_conversationSessionId : null,
                    messageCount: storedDraft.messages.length,
                    lastMessagePreview: (_storedDraft_messages_at_content_slice = (_storedDraft_messages_at = storedDraft.messages.at(-1)) === null || _storedDraft_messages_at === void 0 ? void 0 : (_storedDraft_messages_at_content = _storedDraft_messages_at.content) === null || _storedDraft_messages_at_content === void 0 ? void 0 : _storedDraft_messages_at_content.slice(0, 120)) !== null && _storedDraft_messages_at_content_slice !== void 0 ? _storedDraft_messages_at_content_slice : ""
                }));
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        shouldIgnoreStoredDraft,
        storedDraft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            voiceSessionActiveRef.current = isVoiceSessionActive;
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        isVoiceSessionActive
    ]);
    const clearAutoStopRecordingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[clearAutoStopRecordingTimer]": ()=>{
            if (autoStopRecordingTimerRef.current) {
                clearTimeout(autoStopRecordingTimerRef.current);
                autoStopRecordingTimerRef.current = null;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[clearAutoStopRecordingTimer]"], []);
    const clearRestartListeningTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[clearRestartListeningTimer]": ()=>{
            if (restartListeningTimerRef.current) {
                clearTimeout(restartListeningTimerRef.current);
                restartListeningTimerRef.current = null;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[clearRestartListeningTimer]"], []);
    const clearSpeechErrorTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[clearSpeechErrorTimer]": ()=>{
            if (speechErrorTimerRef.current) {
                clearTimeout(speechErrorTimerRef.current);
                speechErrorTimerRef.current = null;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[clearSpeechErrorTimer]"], []);
    const clearSpeechPlaybackWatchdog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[clearSpeechPlaybackWatchdog]": ()=>{
            if (speechPlaybackWatchdogRef.current) {
                clearTimeout(speechPlaybackWatchdogRef.current);
                speechPlaybackWatchdogRef.current = null;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[clearSpeechPlaybackWatchdog]"], []);
    const dismissSpeechError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[dismissSpeechError]": ()=>{
            clearSpeechErrorTimer();
            setSpeechError(null);
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[dismissSpeechError]"], [
        clearSpeechErrorTimer
    ]);
    const showTransientSpeechError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[showTransientSpeechError]": function(message) {
            let durationMs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3500;
            clearSpeechErrorTimer();
            setSpeechError(message);
            speechErrorTimerRef.current = setTimeout({
                "LegacySafeSpeakAssistantConversationPage.useCallback[showTransientSpeechError]": ()=>{
                    setSpeechError(null);
                    speechErrorTimerRef.current = null;
                }
            }["LegacySafeSpeakAssistantConversationPage.useCallback[showTransientSpeechError]"], durationMs);
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[showTransientSpeechError]"], [
        clearSpeechErrorTimer
    ]);
    const cleanupRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[cleanupRecording]": ()=>{
            var _recordingStreamRef_current;
            clearAutoStopRecordingTimer();
            (_recordingStreamRef_current = recordingStreamRef.current) === null || _recordingStreamRef_current === void 0 ? void 0 : _recordingStreamRef_current.getTracks().forEach({
                "LegacySafeSpeakAssistantConversationPage.useCallback[cleanupRecording]": (track)=>track.stop()
            }["LegacySafeSpeakAssistantConversationPage.useCallback[cleanupRecording]"]);
            recordingStreamRef.current = null;
            mediaRecorderRef.current = null;
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[cleanupRecording]"], [
        clearAutoStopRecordingTimer
    ]);
    const cleanupSpeechAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[cleanupSpeechAudio]": ()=>{
            var _speechAudioRef_current;
            clearSpeechPlaybackWatchdog();
            if ("object" !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
            (_speechAudioRef_current = speechAudioRef.current) === null || _speechAudioRef_current === void 0 ? void 0 : _speechAudioRef_current.pause();
            speechAudioRef.current = null;
            if (speechAudioUrlRef.current) {
                URL.revokeObjectURL(speechAudioUrlRef.current);
                speechAudioUrlRef.current = null;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[cleanupSpeechAudio]"], [
        clearSpeechPlaybackWatchdog
    ]);
    const revealPendingSpeechResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[revealPendingSpeechResponse]": ()=>{
            const reveal = pendingSpeechRevealRef.current;
            pendingSpeechRevealRef.current = null;
            reveal === null || reveal === void 0 ? void 0 : reveal();
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[revealPendingSpeechResponse]"], []);
    const stopAssistantSpeech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[stopAssistantSpeech]": ()=>{
            speechPlaybackActiveRef.current = false;
            cleanupSpeechAudio();
            revealPendingSpeechResponse();
            setIsSpeaking(false);
            setIsGeneratingSpeech(false);
            setVoiceAvatarState("idle");
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[stopAssistantSpeech]"], [
        cleanupSpeechAudio,
        revealPendingSpeechResponse
    ]);
    const scheduleNextVoiceTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]": function() {
            let attempt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            clearRestartListeningTimer();
            if (!voiceSessionActiveRef.current) {
                return;
            }
            if (isVoiceSessionMuted) {
                setVoiceAvatarState("idle");
                return;
            }
            // Voice state: assistant finished and is preparing to listen again.
            setVoiceAvatarState("listening");
            restartListeningTimerRef.current = setTimeout({
                "LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]": ()=>{
                    if (!voiceSessionActiveRef.current) {
                        return;
                    }
                    void startVoiceRecordingRef.current().then({
                        "LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]": (started)=>{
                            if (started || !voiceSessionActiveRef.current) {
                                return;
                            }
                            // Keep recovering while the voice session is active. The End
                            // button, consent decline, navigation, or component cleanup are
                            // the only normal ways to terminate the loop.
                            scheduleNextVoiceTurn(attempt + 1);
                        }
                    }["LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]"]);
                }
            }["LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]"], attempt === 0 ? 350 : Math.min(500 + attempt * 250, 3000));
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[scheduleNextVoiceTurn]"], [
        clearRestartListeningTimer,
        isVoiceSessionMuted
    ]);
    const playAssistantSpeech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]": async function(text) {
            let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const speechText = text.trim();
            if (!speechText) {
                var _options_revealAfterPlayback;
                (_options_revealAfterPlayback = options.revealAfterPlayback) === null || _options_revealAfterPlayback === void 0 ? void 0 : _options_revealAfterPlayback.call(options);
                return;
            }
            cleanupSpeechAudio();
            if (options.revealAfterPlayback) {
                pendingSpeechRevealRef.current = options.revealAfterPlayback;
            }
            shouldContinueAfterPlaybackRef.current = Boolean(options.continueVoiceSession);
            var _normalizeAssistantSpeechLanguage;
            const speechLanguage = (_normalizeAssistantSpeechLanguage = normalizeAssistantSpeechLanguage(options.language)) !== null && _normalizeAssistantSpeechLanguage !== void 0 ? _normalizeAssistantSpeechLanguage : detectAssistantSpeechLanguage(speechText);
            setReplayVoiceText(speechText);
            setReplayVoiceLanguage(speechLanguage);
            setSpeechPlaybackError(null);
            setIsGeneratingSpeech(true);
            setIsSpeaking(false);
            speechPlaybackActiveRef.current = true;
            // Voice state: assistant response audio is being prepared or played.
            setVoiceAvatarState("aiSpeaking");
            try {
                const voice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["synthesizeAssistantVoice"])(speechText, speechLanguage);
                const audioUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssistantVoiceAudioUrl"])(voice);
                const audio = new Audio(audioUrl);
                speechAudioUrlRef.current = audioUrl;
                speechAudioRef.current = audio;
                let playbackFinished = false;
                const finishPlayback = {
                    "LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech].finishPlayback": function() {
                        let failed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                        if (playbackFinished) {
                            return;
                        }
                        playbackFinished = true;
                        clearSpeechPlaybackWatchdog();
                        const shouldContinue = shouldContinueAfterPlaybackRef.current;
                        speechPlaybackActiveRef.current = false;
                        shouldContinueAfterPlaybackRef.current = false;
                        setIsSpeaking(false);
                        setIsGeneratingSpeech(false);
                        if (failed) {
                            setSpeechPlaybackError(t("dashboard.assistant.voicePlaybackFailed"));
                        }
                        revealPendingSpeechResponse();
                        setVoiceAvatarState(shouldContinue ? "listening" : "idle");
                        if (shouldContinue) {
                            scheduleNextVoiceTurn();
                        }
                    }
                }["LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech].finishPlayback"];
                audio.onended = ({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]": ()=>finishPlayback()
                })["LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]"];
                audio.onerror = ({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]": ()=>finishPlayback(true)
                })["LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]"];
                setIsGeneratingSpeech(false);
                setIsSpeaking(true);
                const watchdogDelay = Math.min(90_000, Math.max(15_000, speechText.length * 120 + 8_000));
                speechPlaybackWatchdogRef.current = setTimeout({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]": ()=>finishPlayback(true)
                }["LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]"], watchdogDelay);
                await audio.play();
            } catch (playbackError) {
                clearSpeechPlaybackWatchdog();
                speechPlaybackActiveRef.current = false;
                shouldContinueAfterPlaybackRef.current = false;
                setIsSpeaking(false);
                if (captureConsentError(playbackError)) {
                    revealPendingSpeechResponse();
                    setVoiceAvatarState("idle");
                    setSpeechPlaybackError(null);
                    return;
                }
                const playbackErrorName = playbackError instanceof DOMException ? playbackError.name : playbackError && typeof playbackError === "object" && "name" in playbackError && typeof playbackError.name === "string" ? playbackError.name : null;
                const autoplayBlocked = playbackErrorName === "NotAllowedError";
                revealPendingSpeechResponse();
                if (!autoplayBlocked) {
                    if (voiceSessionActiveRef.current) {
                        scheduleNextVoiceTurn();
                    } else {
                        setVoiceAvatarState("idle");
                    }
                } else {
                    setVoiceAvatarState("idle");
                }
                setSpeechPlaybackError(autoplayBlocked ? t("dashboard.assistant.tapToPlayResponse") : playbackError instanceof Error ? playbackError.message : t("dashboard.assistant.voicePlaybackFailed"));
            } finally{
                setIsGeneratingSpeech(false);
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[playAssistantSpeech]"], [
        captureConsentError,
        clearSpeechPlaybackWatchdog,
        cleanupSpeechAudio,
        revealPendingSpeechResponse,
        scheduleNextVoiceTurn,
        t
    ]);
    const stopLiveTranscriptPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[stopLiveTranscriptPreview]": ()=>{
            if (!liveRecognitionRef.current) {
                return;
            }
            liveRecognitionRef.current.onend = null;
            liveRecognitionRef.current.onresult = null;
            liveRecognitionRef.current.onerror = null;
            try {
                liveRecognitionRef.current.stop();
            } catch (e) {
                liveRecognitionRef.current.abort();
            }
            liveRecognitionRef.current = null;
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[stopLiveTranscriptPreview]"], []);
    const startLiveTranscriptPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": ()=>{
            var _SpeechRecognition;
            const recognitionCtor = (_SpeechRecognition = window.SpeechRecognition) !== null && _SpeechRecognition !== void 0 ? _SpeechRecognition : window.webkitSpeechRecognition;
            if (!recognitionCtor) {
                return false;
            }
            stopLiveTranscriptPreview();
            const recognition = new recognitionCtor();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = livePreviewLanguage;
            recognition.maxAlternatives = 1;
            liveFinalTranscriptRef.current = "";
            recognition.onresult = ({
                "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": (event)=>{
                    let finalChunk = "";
                    let interimChunk = "";
                    for(let index = event.resultIndex; index < event.results.length; index += 1){
                        var _result__transcript, _result_;
                        const result = event.results[index];
                        const transcript = (_result_ = result[0]) === null || _result_ === void 0 ? void 0 : (_result__transcript = _result_.transcript) === null || _result__transcript === void 0 ? void 0 : _result__transcript.trim();
                        if (!transcript) {
                            continue;
                        }
                        if (result.isFinal) {
                            finalChunk = "".concat(finalChunk, " ").concat(transcript).trim();
                        } else {
                            interimChunk = "".concat(interimChunk, " ").concat(transcript).trim();
                        }
                    }
                    if (finalChunk) {
                        liveFinalTranscriptRef.current = "".concat(liveFinalTranscriptRef.current, " ").concat(finalChunk).trim();
                    }
                    setLiveTranscript([
                        liveFinalTranscriptRef.current,
                        interimChunk
                    ].filter(Boolean).join(" "));
                    if (voiceSessionActiveRef.current && (finalChunk || interimChunk)) {
                        // Voice state: the live recognizer has detected user speech.
                        setVoiceAvatarState("userSpeaking");
                        clearAutoStopRecordingTimer();
                        autoStopRecordingTimerRef.current = setTimeout({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": ()=>{
                                const mediaRecorder = mediaRecorderRef.current;
                                if (voiceSessionActiveRef.current && (mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.state) === "recording") {
                                    stopLiveTranscriptPreview();
                                    mediaRecorder.stop();
                                }
                            }
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"], finalChunk ? 900 : 1800);
                    }
                }
            })["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"];
            recognition.onerror = ({
                "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": ()=>{
                    liveRecognitionRef.current = null;
                    if (voiceSessionActiveRef.current) {
                        clearAutoStopRecordingTimer();
                        autoStopRecordingTimerRef.current = setTimeout({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": ()=>{
                                const mediaRecorder = mediaRecorderRef.current;
                                if (voiceSessionActiveRef.current && (mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.state) === "recording") {
                                    mediaRecorder.stop();
                                }
                            }
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"], 2500);
                    }
                }
            })["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"];
            recognition.onend = ({
                "LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]": ()=>{
                    if (liveRecognitionRef.current === recognition) {
                        liveRecognitionRef.current = null;
                    }
                }
            })["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"];
            liveRecognitionRef.current = recognition;
            try {
                recognition.start();
                return true;
            } catch (e) {
                liveRecognitionRef.current = null;
                return false;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[startLiveTranscriptPreview]"], [
        clearAutoStopRecordingTimer,
        livePreviewLanguage,
        stopLiveTranscriptPreview
    ]);
    const conversationMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LegacySafeSpeakAssistantConversationPage.useMemo[conversationMessages]": ()=>messages.map({
                "LegacySafeSpeakAssistantConversationPage.useMemo[conversationMessages]": (param)=>{
                    let { role, content } = param;
                    return {
                        role,
                        content
                    };
                }
            }["LegacySafeSpeakAssistantConversationPage.useMemo[conversationMessages]"])
    }["LegacySafeSpeakAssistantConversationPage.useMemo[conversationMessages]"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$triage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAssistantTriageSource"])({
                conversationSessionId: conversationSessionId !== null && conversationSessionId !== void 0 ? conversationSessionId : undefined,
                conversation: conversationMessages,
                timeline,
                incidentCategory: initialCategory
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAssistantConversationDraft"])({
                conversationSessionId: conversationSessionId !== null && conversationSessionId !== void 0 ? conversationSessionId : undefined,
                messages: conversationMessages,
                timeline,
                timelineFieldOrder,
                triageCtaVisible: showTriageCta,
                voiceSessionActive: isVoiceSessionActive,
                incidentCategory: initialCategory,
                topic: initialTopic
            }, {
                topic: initialTopic,
                incidentCategory: initialCategory
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        conversationMessages,
        initialCategory,
        initialTopic,
        conversationSessionId,
        isVoiceSessionActive,
        timeline,
        timelineFieldOrder,
        showTriageCta
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            var _messagesEndRef_current;
            (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        messages,
        showTriageCta,
        isSending,
        error
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (typeof document === "undefined") {
                return;
            }
            document.body.classList.add("assistant-conversation-lock");
            document.documentElement.classList.add("assistant-conversation-lock");
            return ({
                "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
                    document.body.classList.remove("assistant-conversation-lock");
                    document.documentElement.classList.remove("assistant-conversation-lock");
                }
            })["LegacySafeSpeakAssistantConversationPage.useEffect"];
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            return ({
                "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
                    var _mediaRecorderRef_current;
                    if (((_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state) === "recording") {
                        shouldProcessRecordingRef.current = false;
                        mediaRecorderRef.current.stop();
                    }
                    voiceSessionActiveRef.current = false;
                    clearAutoStopRecordingTimer();
                    clearRestartListeningTimer();
                    stopLiveTranscriptPreview();
                    cleanupRecording();
                    cleanupSpeechAudio();
                }
            })["LegacySafeSpeakAssistantConversationPage.useEffect"];
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        cleanupRecording,
        cleanupSpeechAudio,
        clearAutoStopRecordingTimer,
        clearRestartListeningTimer,
        stopLiveTranscriptPreview
    ]);
    const requestAssistantTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": async function(message, conversation) {
            let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            const requestId = latestRequestIdRef.current + 1;
            latestRequestIdRef.current = requestId;
            setIsSending(true);
            setError(null);
            let resolvedSessionId = conversationSessionId;
            const processConversationFlowResponse = {
                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": async (response, fallbackSessionId)=>{
                    var _response_factExtraction, _response_responseMeta, _response_assistantMessage_metadata, _this, _response_assistantMessage_metadata1, _response_responseMeta1, _response_responseMeta2, _response_responseMeta3, _response_responseMeta4, _response_responseMeta5, _response_responseMeta6, _response_responseMeta7, _response_responseMeta8, _response_responseMeta9, _response_responseMeta10, _response_responseMeta11, _response_responseMeta12, _response_responseMeta13, _response_responseMeta_rag, _response_responseMeta14, _response_responseMeta15, _response_triage;
                    var _response_factExtraction_timeline;
                    const nextTimeline = (_response_factExtraction_timeline = (_response_factExtraction = response.factExtraction) === null || _response_factExtraction === void 0 ? void 0 : _response_factExtraction.timeline) !== null && _response_factExtraction_timeline !== void 0 ? _response_factExtraction_timeline : {};
                    var _response_responseMeta_conversationSessionId;
                    const responseSessionId = (_response_responseMeta_conversationSessionId = (_response_responseMeta = response.responseMeta) === null || _response_responseMeta === void 0 ? void 0 : _response_responseMeta.conversationSessionId) !== null && _response_responseMeta_conversationSessionId !== void 0 ? _response_responseMeta_conversationSessionId : fallbackSessionId;
                    var _ref, _ref1, _ref2, _ref3;
                    console.info("[SafeSpeak][frontend-response]", JSON.stringify({
                        requestId,
                        responseSessionId,
                        userMessageId: response.userMessage.id,
                        userTurnNumber: response.userMessage.turnNumber,
                        assistantMessageId: response.assistantMessage.id,
                        assistantTurnNumber: response.assistantMessage.turnNumber,
                        selectedResponseSource: (_ref1 = (_ref = (_response_assistantMessage_metadata = response.assistantMessage.metadata) === null || _response_assistantMessage_metadata === void 0 ? void 0 : _response_assistantMessage_metadata.selectedResponseSource) !== null && _ref !== void 0 ? _ref : (_this = response.responseMeta) === null || _this === void 0 ? void 0 : _this.selectedResponseSource) !== null && _ref1 !== void 0 ? _ref1 : "unknown",
                        intent: (_ref3 = (_ref2 = (_response_assistantMessage_metadata1 = response.assistantMessage.metadata) === null || _response_assistantMessage_metadata1 === void 0 ? void 0 : _response_assistantMessage_metadata1.intent) !== null && _ref2 !== void 0 ? _ref2 : (_response_responseMeta1 = response.responseMeta) === null || _response_responseMeta1 === void 0 ? void 0 : _response_responseMeta1.intent) !== null && _ref3 !== void 0 ? _ref3 : "unknown",
                        assistantPreview: response.assistantMessage.content.slice(0, 120)
                    }));
                    if (requestId !== latestRequestIdRef.current) {
                        console.info("[SafeSpeak][frontend-response-ignored]", JSON.stringify({
                            requestId,
                            latestRequestId: latestRequestIdRef.current,
                            assistantMessageId: response.assistantMessage.id
                        }));
                        return false;
                    }
                    if (response.assistantMessage.turnNumber <= latestAssistantTurnRef.current) {
                        console.info("[SafeSpeak][frontend-stale-assistant-ignored]", JSON.stringify({
                            requestId,
                            assistantMessageId: response.assistantMessage.id,
                            assistantTurnNumber: response.assistantMessage.turnNumber,
                            latestAssistantTurnNumber: latestAssistantTurnRef.current
                        }));
                        return false;
                    }
                    if (responseSessionId && responseSessionId !== conversationSessionId) {
                        setConversationSessionId(responseSessionId);
                        resolvedSessionId = responseSessionId;
                    }
                    setTimeline({
                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (currentTimeline)=>{
                            const nextKeys = Object.entries(nextTimeline).filter({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse.nextKeys": (param)=>{
                                    let [, value] = param;
                                    return value.trim().length > 0;
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse.nextKeys"]).map({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse.nextKeys": (param)=>{
                                    let [key] = param;
                                    return key;
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse.nextKeys"]);
                            setTimelineFieldOrder({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (currentOrder)=>{
                                    const mergedOrder = [
                                        ...currentOrder
                                    ];
                                    nextKeys.forEach({
                                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (key)=>{
                                            const hadValue = typeof currentTimeline[key] === "string" && currentTimeline[key].trim().length > 0;
                                            if (!hadValue && !mergedOrder.includes(key)) {
                                                mergedOrder.push(key);
                                            }
                                        }
                                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                                    return mergedOrder.filter({
                                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (key)=>nextKeys.includes(key)
                                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                            return nextTimeline;
                        }
                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                    const assistantMessage = {
                        role: "assistant",
                        content: response.assistantMessage.content,
                        messageId: response.assistantMessage.id,
                        turnNumber: response.assistantMessage.turnNumber,
                        responseMeta: {
                            citations: (_response_responseMeta2 = response.responseMeta) === null || _response_responseMeta2 === void 0 ? void 0 : _response_responseMeta2.citations,
                            confidence: (_response_responseMeta3 = response.responseMeta) === null || _response_responseMeta3 === void 0 ? void 0 : _response_responseMeta3.confidence,
                            intent: (_response_responseMeta4 = response.responseMeta) === null || _response_responseMeta4 === void 0 ? void 0 : _response_responseMeta4.intent,
                            triageReady: (_response_responseMeta5 = response.responseMeta) === null || _response_responseMeta5 === void 0 ? void 0 : _response_responseMeta5.triageReady,
                            nextAction: (_response_responseMeta6 = response.responseMeta) === null || _response_responseMeta6 === void 0 ? void 0 : _response_responseMeta6.nextAction,
                            conversationSessionId: responseSessionId,
                            selectedResponseSource: (_response_responseMeta7 = response.responseMeta) === null || _response_responseMeta7 === void 0 ? void 0 : _response_responseMeta7.selectedResponseSource,
                            responseSource: (_response_responseMeta8 = response.responseMeta) === null || _response_responseMeta8 === void 0 ? void 0 : _response_responseMeta8.responseSource,
                            model: (_response_responseMeta9 = response.responseMeta) === null || _response_responseMeta9 === void 0 ? void 0 : _response_responseMeta9.model,
                            ragStatus: (_response_responseMeta10 = response.responseMeta) === null || _response_responseMeta10 === void 0 ? void 0 : _response_responseMeta10.ragStatus,
                            showSources: (_response_responseMeta11 = response.responseMeta) === null || _response_responseMeta11 === void 0 ? void 0 : _response_responseMeta11.showSources,
                            sourceDisplayReason: (_response_responseMeta12 = response.responseMeta) === null || _response_responseMeta12 === void 0 ? void 0 : _response_responseMeta12.sourceDisplayReason,
                            reviewStatus: (_response_responseMeta13 = response.responseMeta) === null || _response_responseMeta13 === void 0 ? void 0 : _response_responseMeta13.reviewStatus,
                            ragUnavailable: (_response_responseMeta14 = response.responseMeta) === null || _response_responseMeta14 === void 0 ? void 0 : (_response_responseMeta_rag = _response_responseMeta14.rag) === null || _response_responseMeta_rag === void 0 ? void 0 : _response_responseMeta_rag.unavailable,
                            assistantLanguage: (_response_responseMeta15 = response.responseMeta) === null || _response_responseMeta15 === void 0 ? void 0 : _response_responseMeta15.assistantLanguage,
                            pendingHumanReview: Boolean((_response_triage = response.triage) === null || _response_triage === void 0 ? void 0 : _response_triage.humanReviewRecommended)
                        }
                    };
                    latestAssistantTurnRef.current = response.assistantMessage.turnNumber;
                    if (options.speakResponse) {
                        var _response_responseMeta16;
                        setMessages({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (currentMessages)=>[
                                    ...currentMessages,
                                    assistantMessage
                                ]
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                        void playAssistantSpeech(response.assistantMessage.content, {
                            continueVoiceSession: options.continueVoiceSession,
                            language: (_response_responseMeta16 = response.responseMeta) === null || _response_responseMeta16 === void 0 ? void 0 : _response_responseMeta16.assistantLanguage
                        });
                    } else {
                        setMessages({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse": (currentMessages)=>[
                                    ...currentMessages,
                                    assistantMessage
                                ]
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"]);
                    }
                    if (isActionableConversationTriage(response)) {
                        setShowTriageCta(true);
                    }
                    return true;
                }
            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].processConversationFlowResponse"];
            console.info("[SafeSpeak][frontend-request]", JSON.stringify({
                requestId,
                conversationSessionId: resolvedSessionId,
                latestUserMessage: message,
                latestUserMessagePayload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConversationRequestBody"])({
                    content: message,
                    language: transcriptionLanguage
                }),
                conversationLength: conversation.length
            }));
            try {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$text$2d$encoding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBrokenTextEncoding"])(message)) {
                    setMessages([
                        ...conversation,
                        {
                            role: "assistant",
                            content: "The message looks like it was received with broken text encoding. Please resend it.",
                            responseMeta: {
                                intent: "encoding_error",
                                selectedResponseSource: "frontend_encoding_guard"
                            }
                        }
                    ]);
                    setIsSending(false);
                    return;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].aiAssistant);
                if (!resolvedSessionId) {
                    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversationFlowSession"])({
                        selectedTopic: initialTopic !== null && initialTopic !== void 0 ? initialTopic : initialCategory,
                        jurisdiction: useNswLegalAwareness ? "NSW" : undefined
                    });
                    resolvedSessionId = session.id;
                    setConversationSessionId(session.id);
                }
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendConversationFlowMessage"])({
                    conversationSessionId: resolvedSessionId,
                    content: message,
                    language: transcriptionLanguage
                });
                const handled = await processConversationFlowResponse(response, resolvedSessionId);
                if (!handled) {
                    return;
                }
            } catch (conversationFlowError) {
                if (captureConsentError(conversationFlowError)) {
                    pendingAssistantRequestRef.current = {
                        message,
                        conversation,
                        speakResponse: options.speakResponse,
                        continueVoiceSession: options.continueVoiceSession
                    };
                    setVoiceAvatarState("idle");
                    return;
                }
                if (conversationFlowError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"] && conversationFlowError.status >= 500 && resolvedSessionId) {
                    try {
                        const freshSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversationFlowSession"])({
                            selectedTopic: initialTopic !== null && initialTopic !== void 0 ? initialTopic : initialCategory,
                            jurisdiction: useNswLegalAwareness ? "NSW" : undefined
                        });
                        setConversationSessionId(freshSession.id);
                        resolvedSessionId = freshSession.id;
                        const retryResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendConversationFlowMessage"])({
                            conversationSessionId: freshSession.id,
                            content: message,
                            language: transcriptionLanguage
                        });
                        const handledRetry = await processConversationFlowResponse(retryResponse, freshSession.id);
                        if (handledRetry) {
                            return;
                        }
                    } catch (retryError) {
                        console.warn("[SafeSpeak][frontend-conversation-retry-failed]", JSON.stringify({
                            requestId,
                            originalStatus: conversationFlowError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"] ? conversationFlowError.status : undefined,
                            retryStatus: retryError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"] ? retryError.status : undefined
                        }));
                    }
                }
                try {
                    var _response_rag;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldCallTimelineAssistant"])({
                        message,
                        conversation,
                        timeline,
                        incidentCategory: initialCategory
                    })) {
                        throw conversationFlowError;
                    }
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$conversation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTimelineAssistantMessage"])({
                        message,
                        conversation,
                        timeline,
                        incidentCategory: initialCategory,
                        jurisdiction: useNswLegalAwareness ? "NSW" : undefined
                    });
                    var _response_assistantMessage, _response_nextQuestion;
                    const assistantContent = buildAssistantBubbleContent((_response_assistantMessage = response.assistantMessage) !== null && _response_assistantMessage !== void 0 ? _response_assistantMessage : "", (_response_nextQuestion = response.nextQuestion) !== null && _response_nextQuestion !== void 0 ? _response_nextQuestion : "");
                    setTimeline({
                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (currentTimeline)=>{
                            const nextTimeline = response.timeline;
                            const nextKeys = Object.entries(nextTimeline).filter({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].nextKeys": (param)=>{
                                    let [, value] = param;
                                    return value.trim().length > 0;
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].nextKeys"]).map({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].nextKeys": (param)=>{
                                    let [key] = param;
                                    return key;
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn].nextKeys"]);
                            setTimelineFieldOrder({
                                "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (currentOrder)=>{
                                    const mergedOrder = [
                                        ...currentOrder
                                    ];
                                    nextKeys.forEach({
                                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (key)=>{
                                            const hadValue = typeof currentTimeline[key] === "string" && currentTimeline[key].trim().length > 0;
                                            if (!hadValue && !mergedOrder.includes(key)) {
                                                mergedOrder.push(key);
                                            }
                                        }
                                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                                    return mergedOrder.filter({
                                        "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (key)=>nextKeys.includes(key)
                                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                                }
                            }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                            return nextTimeline;
                        }
                    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                    const assistantMessage = {
                        role: "assistant",
                        content: assistantContent,
                        responseMeta: {
                            citations: response.citations,
                            confidence: response.confidence,
                            triageReady: response.triageReady,
                            nextAction: response.nextAction,
                            conversationSessionId: resolvedSessionId !== null && resolvedSessionId !== void 0 ? resolvedSessionId : undefined,
                            showSources: response.showSources,
                            sourceDisplayReason: response.sourceDisplayReason,
                            reviewStatus: response.reviewStatus,
                            ragUnavailable: (_response_rag = response.rag) === null || _response_rag === void 0 ? void 0 : _response_rag.unavailable,
                            pendingHumanReview: response.reviewStatus === "pending_human_review",
                            legalAwareness: response.legalAwareness,
                            encodingWarning: response.encodingWarning
                        }
                    };
                    if (options.speakResponse) {
                        setMessages({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (currentMessages)=>[
                                    ...currentMessages,
                                    assistantMessage
                                ]
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                        void playAssistantSpeech(assistantContent, {
                            continueVoiceSession: options.continueVoiceSession
                        });
                    } else {
                        setMessages({
                            "LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]": (currentMessages)=>[
                                    ...currentMessages,
                                    assistantMessage
                                ]
                        }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"]);
                    }
                    if (response.triageReady || response.nextAction === "show_triage_button" || response.readyForSubmission && detectHarmfulActivity({
                        incidentCategory: initialCategory,
                        timeline: response.timeline,
                        conversation: [
                            ...conversation,
                            {
                                role: "user",
                                content: message
                            }
                        ]
                    })) {
                        setShowTriageCta(true);
                    }
                } catch (requestError) {
                    if (captureConsentError(requestError)) {
                        pendingAssistantRequestRef.current = {
                            message,
                            conversation,
                            speakResponse: options.speakResponse,
                            continueVoiceSession: options.continueVoiceSession
                        };
                        setVoiceAvatarState("idle");
                        return;
                    }
                    setVoiceAvatarState("idle");
                    setError(requestError instanceof Error ? requestError.message : "Assistant response failed");
                    if (voiceSessionActiveRef.current && options.continueVoiceSession) {
                        scheduleNextVoiceTurn();
                    }
                }
            } finally{
                setIsSending(false);
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[requestAssistantTurn]"], [
        clearPendingConsent,
        captureConsentError,
        conversationSessionId,
        initialCategory,
        initialTopic,
        playAssistantSpeech,
        scheduleNextVoiceTurn,
        timeline,
        transcriptionLanguage,
        useNswLegalAwareness
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (!seededMessage || hasSentInitialRef.current || existingDraft) {
                return;
            }
            hasSentInitialRef.current = true;
            if (startVoiceMode) {
                voiceSessionActiveRef.current = true;
                setIsVoiceSessionActive(true);
            }
            void requestAssistantTurn(seededMessage, latestMessagesRef.current, {
                speakResponse: startVoiceMode,
                continueVoiceSession: startVoiceMode
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        existingDraft,
        requestAssistantTurn,
        seededMessage,
        startVoiceMode
    ]);
    const transcribeVoiceBlobToInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[transcribeVoiceBlobToInput]": async (audioBlob)=>{
            const fastTranscript = liveFinalTranscriptRef.current.trim() || liveTranscript.trim();
            const transcript = fastTranscript ? fastTranscript : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transcribeAssistantVoice"])(audioBlob, transcriptionLanguageHint)).transcript.trim();
            if (!transcript) {
                throw new Error(getRecordingErrorMessage("no-speech", t));
            }
            setInput({
                "LegacySafeSpeakAssistantConversationPage.useCallback[transcribeVoiceBlobToInput]": (currentInput)=>[
                        currentInput.trim(),
                        transcript
                    ].filter(Boolean).join(" ")
            }["LegacySafeSpeakAssistantConversationPage.useCallback[transcribeVoiceBlobToInput]"]);
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[transcribeVoiceBlobToInput]"], [
        liveTranscript,
        t,
        transcriptionLanguageHint
    ]);
    const processVoiceAudioBlob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[processVoiceAudioBlob]": async (audioBlob, options)=>{
            if (!audioBlob.size) {
                setIsTranscribing(false);
                showTransientSpeechError(getRecordingErrorMessage("no-speech", t));
                if (voiceSessionActiveRef.current) {
                    scheduleNextVoiceTurn();
                } else {
                    setVoiceAvatarState("idle");
                }
                return;
            }
            try {
                // Browser speech recognition is only a live preview. It is tied to a
                // configured locale and can turn multilingual speech into incorrect
                // English text, so voice-first turns always use server transcription
                // with language auto-detection.
                const transcript = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voice$2d$transcription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transcribeAssistantVoice"])(audioBlob, transcriptionLanguageHint)).transcript.trim();
                if (!transcript) {
                    showTransientSpeechError(getRecordingErrorMessage("no-speech", t));
                    if (voiceSessionActiveRef.current) {
                        scheduleNextVoiceTurn();
                    } else {
                        setVoiceAvatarState("idle");
                    }
                    return;
                }
                const voiceMessage = [
                    input.trim(),
                    transcript
                ].filter(Boolean).join(" ");
                const nextMessages = [
                    ...latestMessagesRef.current,
                    {
                        role: "user",
                        content: voiceMessage
                    }
                ];
                setSpeechError(null);
                setInput("");
                setMessages(nextMessages);
                // Voice state: speech was captured and the assistant response is starting.
                setVoiceAvatarState("aiSpeaking");
                void requestAssistantTurn(voiceMessage, nextMessages, options);
            } catch (recordingError) {
                if (captureConsentError(recordingError)) {
                    setVoiceAvatarState("idle");
                    setSpeechError(null);
                    return;
                }
                if (isNoSpeechTranscriptionError(recordingError)) {
                    showTransientSpeechError(getRecordingErrorMessage("no-speech", t));
                    if (voiceSessionActiveRef.current) {
                        scheduleNextVoiceTurn();
                    } else {
                        setVoiceAvatarState("idle");
                    }
                    return;
                }
                showTransientSpeechError(recordingError instanceof Error ? recordingError.message : getRecordingErrorMessage("network", t), 4500);
                if (voiceSessionActiveRef.current) {
                    scheduleNextVoiceTurn();
                } else {
                    setVoiceAvatarState("idle");
                }
            } finally{
                setIsTranscribing(false);
                liveFinalTranscriptRef.current = "";
                setLiveTranscript("");
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[processVoiceAudioBlob]"], [
        captureConsentError,
        input,
        liveTranscript,
        requestAssistantTurn,
        scheduleNextVoiceTurn,
        t,
        transcriptionLanguageHint
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (existingDraft || seededMessage || hasHandledPendingVoiceHandoffRef.current) {
                return;
            }
            const pendingAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$voice$2d$handoff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consumeAssistantVoiceHandoff"])();
            if (!pendingAudio) {
                return;
            }
            hasHandledPendingVoiceHandoffRef.current = true;
            if (startVoiceMode) {
                voiceSessionActiveRef.current = true;
                setIsVoiceSessionActive(true);
            }
            setIsTranscribing(true);
            setVoiceAvatarState("listening");
            void processVoiceAudioBlob(pendingAudio, {
                speakResponse: startVoiceMode,
                continueVoiceSession: startVoiceMode
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        existingDraft,
        processVoiceAudioBlob,
        seededMessage,
        startVoiceMode
    ]);
    const handleRecordedAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[handleRecordedAudio]": async (mimeType, target)=>{
            const audioBlob = new Blob(audioChunksRef.current, {
                type: mimeType || "audio/webm"
            });
            shouldProcessRecordingRef.current = false;
            audioChunksRef.current = [];
            cleanupRecording();
            if (target === "transcription") {
                try {
                    if (!audioBlob.size) {
                        showTransientSpeechError(getRecordingErrorMessage("no-speech", t));
                        setVoiceAvatarState("idle");
                        return;
                    }
                    if (recordingDecisionRef.current === "confirm") {
                        setIsTranscribing(true);
                        setVoiceAvatarState("listening");
                        await transcribeVoiceBlobToInput(audioBlob);
                    } else if (recordingDecisionRef.current !== "cancel") {
                        setPendingVoiceReviewBlob(audioBlob);
                        setSpeechError(null);
                        setVoiceAvatarState("idle");
                    }
                } catch (recordingError) {
                    setVoiceAvatarState("idle");
                    showTransientSpeechError(recordingError instanceof Error ? recordingError.message : getRecordingErrorMessage("network", t), 4500);
                } finally{
                    setIsTranscribing(false);
                    setLiveTranscript("");
                    setActiveVoiceCaptureTarget(null);
                    recordingDecisionRef.current = null;
                }
                return;
            }
            await processVoiceAudioBlob(audioBlob, {
                speakResponse: true,
                continueVoiceSession: voiceSessionActiveRef.current
            });
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[handleRecordedAudio]"], [
        cleanupRecording,
        processVoiceAudioBlob,
        t,
        transcribeVoiceBlobToInput
    ]);
    const startVoiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]": async function() {
            let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "conversation";
            var _navigator_mediaDevices;
            if (target === "conversation" && isSending || isTranscribing || (isGeneratingSpeech || isSpeaking) && speechPlaybackActiveRef.current) {
                return false;
            }
            if (!((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia) || typeof MediaRecorder === "undefined") {
                setVoiceAvatarState("idle");
                showTransientSpeechError(t("dashboard.assistant.speechErrors.unsupported"), 4500);
                return false;
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].audioTranscription);
            } catch (consentCheckError) {
                if (captureConsentError(consentCheckError)) {
                    setVoiceAvatarState("idle");
                    return false;
                }
                showTransientSpeechError(consentCheckError instanceof Error ? consentCheckError.message : "Consent status could not be checked.", 4500);
                setVoiceAvatarState("idle");
                return false;
            }
            setSpeechError(null);
            setLiveTranscript("");
            setIsTranscribing(false);
            setPendingVoiceReviewBlob(null);
            setActiveVoiceCaptureTarget(target);
            audioChunksRef.current = [];
            shouldProcessRecordingRef.current = true;
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const mimeType = getPreferredRecordingMimeType();
                const mediaRecorder = new MediaRecorder(stream, mimeType ? {
                    mimeType
                } : undefined);
                recordingStreamRef.current = stream;
                mediaRecorderRef.current = mediaRecorder;
                mediaRecorder.ondataavailable = ({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]": (event)=>{
                        if (event.data.size > 0) {
                            audioChunksRef.current.push(event.data);
                            // Voice state: audio data arrived even if live recognition is unavailable.
                            setVoiceAvatarState("userSpeaking");
                        }
                    }
                })["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]"];
                mediaRecorder.onerror = ({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]": ()=>{
                        shouldProcessRecordingRef.current = false;
                        setIsRecordingActive(false);
                        setIsTranscribing(false);
                        setActiveVoiceCaptureTarget(null);
                        setVoiceAvatarState("idle");
                        cleanupRecording();
                        showTransientSpeechError(getRecordingErrorMessage("audio-capture", t), 4500);
                    }
                })["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]"];
                mediaRecorder.onstop = ({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]": ()=>{
                        setIsRecordingActive(false);
                        if (!shouldProcessRecordingRef.current) {
                            audioChunksRef.current = [];
                            cleanupRecording();
                            setActiveVoiceCaptureTarget(null);
                            setVoiceAvatarState("idle");
                            return;
                        }
                        // Voice state: user speech ended, keep the avatar active while transcribing.
                        setVoiceAvatarState("listening");
                        if (target === "conversation" || recordingDecisionRef.current === "confirm") {
                            setIsTranscribing(true);
                        }
                        void handleRecordedAudio(mediaRecorder.mimeType || mimeType || "audio/webm", target);
                    }
                })["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]"];
                mediaRecorder.start();
                // Voice state: microphone is open and waiting for the user to speak.
                setVoiceAvatarState("listening");
                const hasLiveEndpointing = startLiveTranscriptPreview();
                clearAutoStopRecordingTimer();
                autoStopRecordingTimerRef.current = setTimeout({
                    "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]": ()=>{
                        const activeRecorder = mediaRecorderRef.current;
                        if ((activeRecorder === null || activeRecorder === void 0 ? void 0 : activeRecorder.state) === "recording") {
                            if (hasLiveEndpointing) {
                                stopLiveTranscriptPreview();
                            }
                            activeRecorder.stop();
                        }
                    }
                }["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]"], VOICE_RECORDING_TIMEOUT_MS);
                setIsRecordingActive(true);
                return true;
            } catch (recordingError) {
                stopLiveTranscriptPreview();
                cleanupRecording();
                setActiveVoiceCaptureTarget(null);
                setVoiceAvatarState("idle");
                const errorCode = recordingError instanceof DOMException && recordingError.name === "NotAllowedError" ? "not-allowed" : "audio-capture";
                showTransientSpeechError(getRecordingErrorMessage(errorCode, t), 4500);
                return false;
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceRecording]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        handleRecordedAudio,
        isGeneratingSpeech,
        isSending,
        isSpeaking,
        isTranscribing,
        startLiveTranscriptPreview,
        stopLiveTranscriptPreview,
        showTransientSpeechError,
        t
    ]);
    startVoiceRecordingRef.current = startVoiceRecording;
    const startVoiceSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceSession]": async ()=>{
            if (voiceSessionActiveRef.current) {
                return;
            }
            voiceSessionActiveRef.current = true;
            setIsVoiceSessionActive(true);
            setIsVoiceSessionMuted(false);
            shouldContinueAfterPlaybackRef.current = false;
            setSpeechError(null);
            setSpeechPlaybackError(null);
            const started = await startVoiceRecording("conversation");
            if (!started) {
                scheduleNextVoiceTurn(1);
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[startVoiceSession]"], [
        scheduleNextVoiceTurn,
        startVoiceRecording
    ]);
    const stopVoiceSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[stopVoiceSession]": ()=>{
            voiceSessionActiveRef.current = false;
            setIsVoiceSessionActive(false);
            setIsVoiceSessionMuted(false);
            shouldContinueAfterPlaybackRef.current = false;
            shouldProcessRecordingRef.current = false;
            clearAutoStopRecordingTimer();
            clearRestartListeningTimer();
            stopLiveTranscriptPreview();
            stopAssistantSpeech();
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.stop();
            } else {
                cleanupRecording();
            }
            audioChunksRef.current = [];
            setIsRecordingActive(false);
            setIsTranscribing(false);
            setActiveVoiceCaptureTarget(null);
            setPendingVoiceReviewBlob(null);
            setLiveTranscript("");
            setVoiceAvatarState("idle");
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[stopVoiceSession]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        clearRestartListeningTimer,
        stopAssistantSpeech,
        stopLiveTranscriptPreview
    ]);
    const handleCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[handleCancel]": ()=>{
            stopVoiceSession();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$draft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAssistantConversationDraft"])({
                topic: initialTopic,
                incidentCategory: initialCategory
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$triage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAssistantTriageSource"])();
            if ("TURBOPACK compile-time truthy", 1) {
                const fallbackDashboardUrl = window.sessionStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAST_NON_CONVERSATION_DASHBOARD_URL_STORAGE_KEY"]);
                const currentUrl = "".concat(window.location.pathname).concat(window.location.search);
                if (fallbackDashboardUrl && fallbackDashboardUrl !== currentUrl && !fallbackDashboardUrl.includes("view=assistantconversation")) {
                    window.location.assign(fallbackDashboardUrl);
                    return;
                }
                if (window.history.length > 1) {
                    window.history.back();
                    window.setTimeout({
                        "LegacySafeSpeakAssistantConversationPage.useCallback[handleCancel]": ()=>{
                            const nextUrl = "".concat(window.location.pathname).concat(window.location.search);
                            if (nextUrl === currentUrl) {
                                window.location.assign(assistantEntryHrefString);
                            }
                        }
                    }["LegacySafeSpeakAssistantConversationPage.useCallback[handleCancel]"], 150);
                    return;
                }
                window.location.assign(assistantEntryHrefString);
                return;
            }
            //TURBOPACK unreachable
            ;
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[handleCancel]"], [
        assistantEntryHrefString,
        initialCategory,
        initialTopic,
        router,
        stopVoiceSession
    ]);
    const toggleVoiceSessionMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[toggleVoiceSessionMute]": ()=>{
            if (!voiceSessionActiveRef.current) {
                return;
            }
            if (isVoiceSessionMuted) {
                setIsVoiceSessionMuted(false);
                setSpeechError(null);
                if (!isRecordingActive && !isTranscribing && !isGeneratingSpeech && !isSpeaking) {
                    void startVoiceRecording("conversation");
                } else if (isGeneratingSpeech || isSpeaking) {
                    setVoiceAvatarState("aiSpeaking");
                } else {
                    setVoiceAvatarState("listening");
                }
                return;
            }
            setIsVoiceSessionMuted(true);
            shouldProcessRecordingRef.current = false;
            shouldContinueAfterPlaybackRef.current = false;
            clearAutoStopRecordingTimer();
            clearRestartListeningTimer();
            stopLiveTranscriptPreview();
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.stop();
            } else {
                cleanupRecording();
            }
            audioChunksRef.current = [];
            setIsRecordingActive(false);
            setIsTranscribing(false);
            setActiveVoiceCaptureTarget(null);
            setPendingVoiceReviewBlob(null);
            setLiveTranscript("");
            setVoiceAvatarState(isGeneratingSpeech || isSpeaking ? "aiSpeaking" : "idle");
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[toggleVoiceSessionMute]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        clearRestartListeningTimer,
        isGeneratingSpeech,
        isRecordingActive,
        isSpeaking,
        isTranscribing,
        isVoiceSessionMuted,
        startVoiceRecording,
        stopLiveTranscriptPreview
    ]);
    const cancelTranscriptionCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[cancelTranscriptionCapture]": ()=>{
            recordingDecisionRef.current = "cancel";
            shouldProcessRecordingRef.current = false;
            clearAutoStopRecordingTimer();
            stopLiveTranscriptPreview();
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.stop();
            } else {
                cleanupRecording();
            }
            audioChunksRef.current = [];
            setPendingVoiceReviewBlob(null);
            setActiveVoiceCaptureTarget(null);
            setIsRecordingActive(false);
            setIsTranscribing(false);
            setLiveTranscript("");
            setVoiceAvatarState("idle");
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[cancelTranscriptionCapture]"], [
        cleanupRecording,
        clearAutoStopRecordingTimer,
        stopLiveTranscriptPreview
    ]);
    const confirmTranscriptionCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[confirmTranscriptionCapture]": async ()=>{
            if (activeVoiceCaptureTarget === "transcription" && isRecordingActive) {
                var _mediaRecorderRef_current;
                recordingDecisionRef.current = "confirm";
                stopLiveTranscriptPreview();
                (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.stop();
                return;
            }
            if (!pendingVoiceReviewBlob) {
                return;
            }
            setIsTranscribing(true);
            setSpeechError(null);
            setVoiceAvatarState("listening");
            try {
                await transcribeVoiceBlobToInput(pendingVoiceReviewBlob);
                setPendingVoiceReviewBlob(null);
                setVoiceAvatarState("idle");
            } catch (error) {
                setVoiceAvatarState("idle");
                showTransientSpeechError(error instanceof Error ? error.message : getRecordingErrorMessage("network", t), 4500);
            } finally{
                setIsTranscribing(false);
            }
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[confirmTranscriptionCapture]"], [
        activeVoiceCaptureTarget,
        isRecordingActive,
        pendingVoiceReviewBlob,
        stopLiveTranscriptPreview,
        t,
        transcribeVoiceBlobToInput
    ]);
    const toggleTranscriptionCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacySafeSpeakAssistantConversationPage.useCallback[toggleTranscriptionCapture]": ()=>{
            if (isVoiceSessionActive || isGeneratingSpeech || isSpeaking) {
                return;
            }
            if (activeVoiceCaptureTarget === "transcription" && isRecordingActive) {
                var _mediaRecorderRef_current;
                recordingDecisionRef.current = null;
                stopLiveTranscriptPreview();
                (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.stop();
                return;
            }
            if (isRecordingActive) {
                return;
            }
            void startVoiceRecording("transcription");
        }
    }["LegacySafeSpeakAssistantConversationPage.useCallback[toggleTranscriptionCapture]"], [
        activeVoiceCaptureTarget,
        isGeneratingSpeech,
        isRecordingActive,
        isSpeaking,
        isVoiceSessionActive,
        startVoiceRecording,
        stopLiveTranscriptPreview
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacySafeSpeakAssistantConversationPage.useEffect": ()=>{
            if (!shouldAutoStartVoiceMode || seededMessage || hasStartedInitialVoiceModeRef.current) {
                return;
            }
            hasStartedInitialVoiceModeRef.current = true;
            voiceSessionActiveRef.current = false;
            void startVoiceSession();
        }
    }["LegacySafeSpeakAssistantConversationPage.useEffect"], [
        seededMessage,
        shouldAutoStartVoiceMode,
        startVoiceSession
    ]);
    const handleAllowPendingConsent = async ()=>{
        const requirement = pendingConsentRequirement;
        try {
            await grantPendingConsent();
            setError(null);
            setSpeechError(null);
            if ((requirement === null || requirement === void 0 ? void 0 : requirement.source) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].audioTranscription.source) {
                if (activeVoiceCaptureTarget === "transcription") {
                    void startVoiceRecording("transcription");
                } else {
                    void startVoiceSession();
                }
                return;
            }
            const pendingRequest = pendingAssistantRequestRef.current;
            pendingAssistantRequestRef.current = null;
            if (pendingRequest) {
                void requestAssistantTurn(pendingRequest.message, pendingRequest.conversation, {
                    speakResponse: pendingRequest.speakResponse,
                    continueVoiceSession: pendingRequest.continueVoiceSession
                });
                return;
            }
            if (isVoiceSessionActive && replayVoiceText) {
                void playAssistantSpeech(replayVoiceText, {
                    continueVoiceSession: true,
                    language: replayVoiceLanguage
                });
            }
        } catch (consentError) {
            setVoiceAvatarState("idle");
            setError(consentError instanceof Error ? consentError.message : "Consent could not be saved.");
        }
    };
    const handleDeclinePendingConsent = ()=>{
        pendingAssistantRequestRef.current = null;
        revealPendingSpeechResponse();
        voiceSessionActiveRef.current = false;
        setIsVoiceSessionActive(false);
        setIsVoiceSessionMuted(false);
        shouldContinueAfterPlaybackRef.current = false;
        clearAutoStopRecordingTimer();
        clearRestartListeningTimer();
        setVoiceAvatarState("idle");
        clearPendingConsent();
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        const message = input.trim();
        dismissSpeechError();
        setSpeechPlaybackError(null);
        setLiveTranscript("");
        liveFinalTranscriptRef.current = "";
        if (!message || isSending || isVoiceSessionActive || isRecordingActive || isTranscribing || isGeneratingSpeech || isSpeaking) {
            return;
        }
        const nextMessages = [
            ...latestMessagesRef.current,
            {
                role: "user",
                content: message
            }
        ];
        setInput("");
        setMessages(nextMessages);
        void requestAssistantTurn(message, nextMessages);
    };
    const handleInputChange = (event)=>{
        if (speechError) {
            dismissSpeechError();
        }
        setInput(event.target.value);
    };
    const conversationVoiceAvatarState = isSpeaking ? "aiSpeaking" : isGeneratingSpeech || isSending || isTranscribing ? "processing" : liveTranscript ? "userSpeaking" : isRecordingActive ? voiceAvatarState === "userSpeaking" ? "userSpeaking" : "listening" : "idle";
    const isTranscriptionCaptureActive = activeVoiceCaptureTarget === "transcription" && isRecordingActive;
    const shouldShowSendButton = input.trim().length > 0;
    const shouldShowVoiceAvatar = isVoiceSessionActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "ai-conversation-page",
        className: "flex flex-1 flex-col overflow-hidden px-2 pb-0 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-full min-h-0 w-full max-w-[1320px] flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 4679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                            lineNumber: 4680,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 4678,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex min-h-0 flex-1 flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-full min-h-0 flex-1 flex-col bg-transparent px-2 pb-2 pt-2 sm:px-3 xl:min-h-[520px]",
                        children: [
                            pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-30 mb-3 max-w-[560px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                                    requirement: pendingConsentRequirement,
                                    isSubmitting: isGrantingConsent,
                                    onAllow: ()=>{
                                        void handleAllowPendingConsent();
                                    },
                                    onDecline: handleDeclinePendingConsent
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 4693,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 4692,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-h-0 flex-1 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-testid": "ai-conversation-chat",
                                    className: "conversation-scrollbar h-full overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-2 pb-4",
                                        children: [
                                            messages.map((message, index)=>{
                                                var _message_responseMeta, _message_responseMeta1, _message_responseMeta2, _message_responseMeta3, _message_responseMeta4, _message_responseMeta5, _message_responseMeta6;
                                                const displayContent = getAssistantDisplayContent(message);
                                                const lawPrefix = message.role === "assistant" ? buildAssistantLawPrefix(message) : "";
                                                const displayText = lawPrefix ? "".concat(lawPrefix, "\n\n").concat(displayContent) : displayContent;
                                                var _message_responseMeta_citations, _message_responseMeta_citations1, _message_turnNumber, _message_messageId;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-testid": "ai-conversation-message-".concat(message.role),
                                                    className: message.role === "user" ? "flex justify-end" : "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-[min(88%,540px)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex max-w-full rounded-[20px] bg-white px-4 py-3 shadow-[0_8px_22px_rgba(148,163,184,0.12)] ".concat(message.role === "user" ? "whitespace-pre-wrap rounded-tr-[8px] text-[14px] leading-[1.6] text-[#314256]" : "rounded-tl-[8px] text-[#41566f]"),
                                                                children: message.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$assistant$2d$message$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantMessageRenderer"], {
                                                                    content: displayText
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                    lineNumber: 4739,
                                                                    columnNumber: 31
                                                                }, this) : displayText
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 4731,
                                                                columnNumber: 27
                                                            }, this),
                                                            message.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantLegalCitationDetails, {
                                                                        citations: (_message_responseMeta_citations = (_message_responseMeta = message.responseMeta) === null || _message_responseMeta === void 0 ? void 0 : _message_responseMeta.citations) !== null && _message_responseMeta_citations !== void 0 ? _message_responseMeta_citations : [],
                                                                        groundedLegalSource: (_message_responseMeta1 = message.responseMeta) === null || _message_responseMeta1 === void 0 ? void 0 : _message_responseMeta1.groundedLegalSource,
                                                                        showDetails: Boolean(((_message_responseMeta2 = message.responseMeta) === null || _message_responseMeta2 === void 0 ? void 0 : _message_responseMeta2.showSources) && (((_message_responseMeta3 = message.responseMeta) === null || _message_responseMeta3 === void 0 ? void 0 : _message_responseMeta3.sourceDisplayReason) === "legal_lookup" || ((_message_responseMeta4 = message.responseMeta) === null || _message_responseMeta4 === void 0 ? void 0 : _message_responseMeta4.sourceDisplayReason) === "explicit_citation_request"))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                        lineNumber: 4746,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantResponseCitations, {
                                                                        citations: (_message_responseMeta_citations1 = (_message_responseMeta5 = message.responseMeta) === null || _message_responseMeta5 === void 0 ? void 0 : _message_responseMeta5.citations) !== null && _message_responseMeta_citations1 !== void 0 ? _message_responseMeta_citations1 : [],
                                                                        showSources: Boolean((_message_responseMeta6 = message.responseMeta) === null || _message_responseMeta6 === void 0 ? void 0 : _message_responseMeta6.showSources),
                                                                        answerText: displayContent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                        lineNumber: 4762,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4730,
                                                        columnNumber: 25
                                                    }, this)
                                                }, (_message_messageId = message.messageId) !== null && _message_messageId !== void 0 ? _message_messageId : "".concat(message.role, "-").concat((_message_turnNumber = message.turnNumber) !== null && _message_turnNumber !== void 0 ? _message_turnNumber : index, "-").concat(message.content.slice(0, 16)), false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4720,
                                                    columnNumber: 23
                                                }, this);
                                            }),
                                            showTriageCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        router.push(continueReportSubmissionPath);
                                                    },
                                                    "data-testid": "ai-conversation-triage-button",
                                                    className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0f5d9f] px-6 text-[12px] font-bold text-white shadow-[0_12px_28px_rgba(15,93,159,0.26)] transition hover:bg-[#0b528d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f5d9f]",
                                                    children: [
                                                        "Continue to Triage",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 4789,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4780,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4779,
                                                columnNumber: 21
                                            }, this) : null,
                                            isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex w-fit items-center rounded-[18px] rounded-tl-[8px] bg-white px-3 py-2 shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: "Assistant is typing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4796,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:0ms]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 4801,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:150ms]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 4802,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-[#9fb3cb] [animation-delay:300ms]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 4803,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4797,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4795,
                                                columnNumber: 21
                                            }, this) : null,
                                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4810,
                                                        columnNumber: 23
                                                    }, this),
                                                    error
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4809,
                                                columnNumber: 21
                                            }, this) : null,
                                            speechError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4817,
                                                        columnNumber: 23
                                                    }, this),
                                                    speechError
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4816,
                                                columnNumber: 21
                                            }, this) : null,
                                            isGeneratingSpeech || isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                "aria-live": "polite",
                                                children: [
                                                    isGeneratingSpeech ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                        size: 12,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4828,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4830,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isGeneratingSpeech ? t("dashboard.assistant.generatingVoice") : t("dashboard.assistant.speaking")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4832,
                                                        columnNumber: 23
                                                    }, this),
                                                    isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: stopAssistantSpeech,
                                                        className: "ml-1 rounded-full border border-[#d6e7f6] px-2 py-1 text-[10px] font-bold text-[#0f5d9f]",
                                                        "aria-label": t("dashboard.assistant.stopVoicePlayback"),
                                                        children: t("dashboard.assistant.stopVoicePlayback")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4838,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4823,
                                                columnNumber: 21
                                            }, this) : null,
                                            speechPlaybackError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#c24141] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                "aria-live": "polite",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4857,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: speechPlaybackError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4858,
                                                        columnNumber: 23
                                                    }, this),
                                                    replayVoiceText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            void playAssistantSpeech(replayVoiceText !== null && replayVoiceText !== void 0 ? replayVoiceText : "", {
                                                                continueVoiceSession: voiceSessionActiveRef.current,
                                                                language: replayVoiceLanguage
                                                            });
                                                        },
                                                        className: "ml-1 rounded-full border border-[#d6e7f6] px-2 py-1 text-[10px] font-bold text-[#0f5d9f]",
                                                        "aria-label": t("dashboard.assistant.replayVoiceResponse"),
                                                        children: t("dashboard.assistant.replayVoiceResponse")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4860,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4853,
                                                columnNumber: 21
                                            }, this) : null,
                                            isRecordingActive || isTranscribing || liveTranscript ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex max-w-[540px] items-center gap-2 rounded-[18px] bg-white px-4 py-2.5 text-[11px] text-[#5f6f86] shadow-[0_8px_22px_rgba(148,163,184,0.12)]",
                                                children: [
                                                    isTranscribing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                        size: 12,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4883,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4885,
                                                        columnNumber: 25
                                                    }, this),
                                                    isTranscribing ? t("dashboard.assistant.transcribing") : liveTranscript || t("dashboard.assistant.listening")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4881,
                                                columnNumber: 21
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: messagesEndRef,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                lineNumber: 4892,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                        lineNumber: 4708,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 4704,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 4703,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "z-20 w-full shrink-0 bg-transparent px-2 pb-2 pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-[1120px] px-2",
                                    children: [
                                        shouldShowVoiceAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$voice$2d$avatar$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceAvatarAnimation"], {
                                            state: conversationVoiceAvatarState,
                                            size: "small",
                                            alt: t("dashboard.assistant.sphereAlt"),
                                            className: "mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 4903,
                                            columnNumber: 19
                                        }, this) : null,
                                        isTranscriptionCaptureActive || pendingVoiceReviewBlob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f8fbff]/96 flex items-center gap-2 rounded-[28px] border border-[#dbe6f2] px-4 py-2 shadow-[0_10px_30px_rgba(148,163,184,0.18)] backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-1 items-center gap-3 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-medium text-[#64748b]",
                                                            children: isTranscriptionCaptureActive ? "Listening..." : "Use transcribed text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 4913,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-8 flex-1 items-center gap-1 overflow-hidden",
                                                            children: Array.from({
                                                                length: 32
                                                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1 rounded-full bg-[#7aa4d8] ".concat(isTranscriptionCaptureActive ? "animate-pulse" : ""),
                                                                    style: {
                                                                        height: "".concat(10 + index * 7 % 18, "px"),
                                                                        animationDelay: "".concat(index * 45, "ms"),
                                                                        opacity: 0.38 + index % 6 * 0.1
                                                                    }
                                                                }, index, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                    lineNumber: 4920,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 4918,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4912,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: cancelTranscriptionCapture,
                                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe6f2] bg-white text-[#64748b] transition hover:bg-[#f4f7fb]",
                                                    "aria-label": t("common.cancel"),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4942,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4936,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        void confirmTranscriptionCapture();
                                                    },
                                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5d9f] text-white transition hover:bg-[#0c518a]",
                                                    "aria-label": "Use voice text",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4952,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4944,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 4911,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f4f9ff]/96 flex items-center gap-2 rounded-[28px] border border-[#cfe0f1] px-3 py-2 shadow-[0_10px_30px_rgba(148,163,184,0.14)] backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: input,
                                                    onChange: handleInputChange,
                                                    "data-testid": "ai-conversation-input",
                                                    placeholder: t("dashboard.assistant.typeYourResponse"),
                                                    className: "h-10 flex-1 rounded-full border border-transparent bg-transparent px-3 text-sm text-[#1f2937] outline-none transition-[background-color,box-shadow,border-color] duration-150 placeholder:text-[#95a3b8] focus-visible:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4957,
                                                    columnNumber: 21
                                                }, this),
                                                !isVoiceSessionActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: toggleTranscriptionCapture,
                                                    disabled: isGeneratingSpeech || isSpeaking || isSending || isTranscribing,
                                                    "aria-label": t("dashboard.assistant.toggleMicrophone"),
                                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f4f7fb] ".concat(isGeneratingSpeech || isSpeaking || isSending || isTranscribing ? "cursor-not-allowed opacity-40" : ""),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4985,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4966,
                                                    columnNumber: 23
                                                }, this) : null,
                                                shouldShowSendButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex shrink-0 items-center rounded-full border border-[#d7e5f3] bg-[#fbfdff] p-1 shadow-[0_6px_18px_rgba(148,163,184,0.12)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        "data-testid": "ai-conversation-send",
                                                        disabled: isSending || isVoiceSessionActive || isRecordingActive || isTranscribing || isGeneratingSpeech || isSpeaking || !input.trim(),
                                                        "aria-label": t("common.send"),
                                                        className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f5d9f] text-white shadow-[0_10px_24px_rgba(15,93,159,0.22)] transition hover:bg-[#0c518a] disabled:cursor-not-allowed disabled:opacity-45",
                                                        children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                            size: 15,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 5006,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$sendIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            alt: t("common.send"),
                                                            width: 11,
                                                            height: 15,
                                                            className: "h-[15px] w-[11px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 5008,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 4990,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 4989,
                                                    columnNumber: 23
                                                }, this) : isVoiceSessionActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 rounded-full border border-[#d7e5f3] bg-[#fbfdff] px-1.5 py-1 shadow-[0_6px_18px_rgba(148,163,184,0.12)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: toggleVoiceSessionMute,
                                                            className: "inline-flex h-9 w-9 items-center justify-center rounded-full transition ".concat(isVoiceSessionMuted ? "bg-[#eef2f7] text-[#94a3b8]" : "bg-[#196bb1] text-white"),
                                                            "aria-label": isVoiceSessionMuted ? "Unmute voice mode" : "Mute voice mode",
                                                            children: isVoiceSessionMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophoneOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophoneOff$3e$__["IconMicrophoneOff"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 5035,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                lineNumber: 5037,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 5020,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: stopVoiceSession,
                                                            className: "inline-flex h-8 shrink-0 items-center rounded-full bg-[#1f8cff] px-4 text-[11px] font-bold text-white transition hover:bg-[#137cf0]",
                                                            "aria-label": t("dashboard.assistant.stopRecording"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mr-2 inline-flex items-center gap-[2px]",
                                                                    "aria-hidden": "true",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-[4px] w-[4px] rounded-full bg-white/90"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                            lineNumber: 5050,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-[4px] w-[4px] rounded-full bg-white/90"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                            lineNumber: 5051,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-[4px] w-[4px] rounded-full bg-white/90"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                            lineNumber: 5052,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                                    lineNumber: 5046,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "End"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 5040,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 5019,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full border border-[#d7e5f3] bg-[#fbfdff] p-1 shadow-[0_6px_18px_rgba(148,163,184,0.12)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: startVoiceSession,
                                                        disabled: isSending || isTranscribing,
                                                        className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#196bb1] text-white transition hover:bg-[#196bb1] ".concat(isSending || isTranscribing ? "cursor-not-allowed opacity-40" : ""),
                                                        "aria-label": "Start avatar voice mode",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarVoiceControlGlyph, {}, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                            lineNumber: 5070,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                        lineNumber: 5059,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                                    lineNumber: 5058,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                            lineNumber: 4956,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                    lineNumber: 4901,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                                lineNumber: 4897,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                        lineNumber: 4690,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
                    lineNumber: 4689,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
            lineNumber: 4677,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 4673,
        columnNumber: 5
    }, this);
}
_s2(LegacySafeSpeakAssistantConversationPage, "thN0eEV55fJkF/Il8sAh0VrZyW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"]
    ];
});
_c14 = LegacySafeSpeakAssistantConversationPage;
function SafeSpeakAssistantConversationPage(param) {
    let { initialMessage } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocalAssistantConversationPage, {
        initialMessage: initialMessage
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-assistant-pages.tsx",
        lineNumber: 5094,
        columnNumber: 10
    }, this);
}
_c15 = SafeSpeakAssistantConversationPage;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "AvatarVoiceControlGlyph");
__turbopack_context__.k.register(_c1, "AssistantLegalCitationDetails");
__turbopack_context__.k.register(_c2, "AssistantResponseCitations");
__turbopack_context__.k.register(_c3, "NswLegalAwarenessPanel");
__turbopack_context__.k.register(_c4, "SafeSpeakAssistantPage");
__turbopack_context__.k.register(_c5, "DemoVoiceSessionWaveform");
__turbopack_context__.k.register(_c6, "DemoVoiceSessionStage");
__turbopack_context__.k.register(_c7, "LocalAssistantConversationPage");
__turbopack_context__.k.register(_c8, "DemoProgressMetric");
__turbopack_context__.k.register(_c9, "DemoMessageItem");
__turbopack_context__.k.register(_c10, "DemoAttachmentCard");
__turbopack_context__.k.register(_c11, "DemoAttachmentChip");
__turbopack_context__.k.register(_c12, "DemoTypingIndicator");
__turbopack_context__.k.register(_c13, "DemoStatusBubble");
__turbopack_context__.k.register(_c14, "LegacySafeSpeakAssistantConversationPage");
__turbopack_context__.k.register(_c15, "SafeSpeakAssistantConversationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/dashboard-assistant-pages.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-assistant-pages.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__586be863._.js.map