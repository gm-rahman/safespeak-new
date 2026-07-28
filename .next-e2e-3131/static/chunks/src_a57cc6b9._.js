(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSubmissionFrame",
    ()=>ReportSubmissionFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoneFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoneFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoneFilled.mjs [app-client] (ecmascript) <export default as IconPhoneFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldFilled.mjs [app-client] (ecmascript) <export default as IconShieldFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const reportSubmissionSteps = [
    {
        key: "support",
        label: "Support"
    },
    {
        key: "details",
        label: "Details"
    },
    {
        key: "review",
        label: "Review"
    },
    {
        key: "share",
        label: "Share"
    },
    {
        key: "done",
        label: "Done"
    }
];
function ReportSubmissionFrame(param) {
    let { title, subtitle, step, skipSupportStep = false, backHref, backLabel, children } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const visibleSteps = skipSupportStep ? reportSubmissionSteps.filter((item)=>item.key !== "support") : reportSubmissionSteps;
    const resolvedStep = step === "evidence" ? "details" : step === "support" && skipSupportStep ? "details" : step;
    const activeStepIndex = visibleSteps.findIndex((item)=>item.key === resolvedStep);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-36 pt-2 sm:px-4 sm:pb-44 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-[996px] w-full max-w-[1184px] flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        backHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: backHref,
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                backLabel || t("dashboard.reportSubmission.reportSubmission")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard?view=reportsubmissionhistory",
                                    className: "inline-flex h-8 items-center gap-1.5 rounded-full border border-[#d7e1ee] bg-white px-3 text-[11px] font-semibold text-[#526982] transition hover:bg-[#f8fbff]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        "View history"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "text-xs font-medium text-[#7b8798]",
                                    children: t("common.cancel")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[16px] border border-[#dce4ef] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f5d9f]",
                                            children: t("dashboard.reportSubmission.incidentBuilder")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-1 text-[28px] font-extrabold leading-[1.02] text-[#1f2a3a] sm:text-[34px]",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-[#6a7d94]",
                                            children: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 sm:items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: visibleSteps.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 w-10 rounded-full", index <= activeStepIndex ? "bg-[#0f5d9f]" : "bg-[#dbe4ef]")
                                                }, item.key, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8fa0b6]",
                                            children: t("dashboard.reportSubmission.stepOf", {
                                                current: activeStepIndex + 1,
                                                total: visibleSteps.length
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 rounded-[14px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Safety-first report flow"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[11px] leading-[1.55] text-[#60728a]",
                                                children: "Nothing is auto-submitted on entry. Reports are created, updated, or prepared only when you explicitly continue or save."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard?view=smartdialler",
                                        className: "inline-flex h-9 items-center gap-1 rounded-full border border-[#d7e1ee] px-4 text-[11px] font-semibold text-[#334155]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoneFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoneFilled$3e$__["IconPhoneFilled"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            "Smart Dialler"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ReportSubmissionFrame, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ReportSubmissionFrame;
;
var _c;
__turbopack_context__.k.register(_c, "ReportSubmissionFrame");
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
"[project]/src/lib/report-authority-routing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatChannel",
    ()=>formatChannel,
    "formatDestinationType",
    ()=>formatDestinationType,
    "rankAuthorityMatches",
    ()=>rankAuthorityMatches,
    "resolvePreferredDestinationId",
    ()=>resolvePreferredDestinationId,
    "toAuthorityMatch",
    ()=>toAuthorityMatch
]);
const destinationTypeLabels = {
    police: "Police",
    anti_discrimination_agency: "Anti-discrimination",
    esafety: "eSafety",
    legal_aid: "Legal aid",
    community_legal_centre: "Community legal",
    education_provider: "Education provider",
    workplace_channel: "Workplace",
    scamwatch: "Scamwatch",
    reportcyber: "ReportCyber",
    community_support_org: "Community support",
    domestic_violence_agency: "Domestic violence"
};
const formatDestinationType = (value)=>{
    var _destinationTypeLabels_value;
    return (_destinationTypeLabels_value = destinationTypeLabels[value]) !== null && _destinationTypeLabels_value !== void 0 ? _destinationTypeLabels_value : value.split("_").filter(Boolean).map((part)=>"".concat(part.charAt(0).toUpperCase()).concat(part.slice(1))).join(" ");
};
const formatChannel = (value)=>value.split("_").filter(Boolean).map((part)=>"".concat(part.charAt(0).toUpperCase()).concat(part.slice(1))).join(" ");
const uniqueValues = (values)=>Array.from(new Set(values.map((value)=>value === null || value === void 0 ? void 0 : value.trim()).filter((value)=>Boolean(value))));
const legacyDestinationAliases = {
    "mock-police": {
        destinationKeys: [
            "nsw-police"
        ],
        destinationTypes: [
            "police"
        ],
        namePatterns: [
            /\bpolice\b/i
        ]
    },
    "mock-esafety": {
        destinationKeys: [
            "esafety-commissioner"
        ],
        destinationTypes: [
            "esafety"
        ],
        namePatterns: [
            /\besafety\b/i
        ]
    },
    "mock-anti-discrimination": {
        destinationKeys: [
            "anti-discrimination-nsw"
        ],
        destinationTypes: [
            "anti_discrimination_agency"
        ],
        namePatterns: [
            /\banti-discrimination\b/i,
            /\bdiscrimination\b/i
        ]
    }
};
const resolvePreferredDestinationId = (destinations, preferredDestinationId)=>{
    var _this;
    if (!preferredDestinationId) {
        return undefined;
    }
    const exactMatch = destinations.find((destination)=>destination.destinationId === preferredDestinationId || destination.destinationKey === preferredDestinationId);
    if (exactMatch) {
        return exactMatch.destinationId;
    }
    const alias = legacyDestinationAliases[preferredDestinationId];
    if (!alias) {
        return preferredDestinationId;
    }
    var _destinations_find, _ref;
    return (_this = (_ref = (_destinations_find = destinations.find((destination)=>{
        var _alias_destinationKeys;
        return (_alias_destinationKeys = alias.destinationKeys) === null || _alias_destinationKeys === void 0 ? void 0 : _alias_destinationKeys.includes(destination.destinationKey);
    })) !== null && _destinations_find !== void 0 ? _destinations_find : destinations.find((destination)=>{
        var _alias_destinationTypes;
        return (_alias_destinationTypes = alias.destinationTypes) === null || _alias_destinationTypes === void 0 ? void 0 : _alias_destinationTypes.includes(destination.destinationType);
    })) !== null && _ref !== void 0 ? _ref : destinations.find((destination)=>{
        var _alias_namePatterns;
        return (_alias_namePatterns = alias.namePatterns) === null || _alias_namePatterns === void 0 ? void 0 : _alias_namePatterns.some((pattern)=>pattern.test(destination.destinationName));
    })) === null || _this === void 0 ? void 0 : _this.destinationId;
};
const stringifyStructuredFields = (fields)=>Object.values(fields !== null && fields !== void 0 ? fields : {}).map((value)=>{
        if (typeof value === "string") {
            return value;
        }
        if (typeof value === "number" || typeof value === "boolean") {
            return String(value);
        }
        if (Array.isArray(value)) {
            return value.join(" ");
        }
        if (value && typeof value === "object") {
            return Object.values(value).map((nestedValue)=>typeof nestedValue === "string" ? nestedValue : "").join(" ");
        }
        return "";
    }).join(" ");
const getIncidentSignalText = (draft)=>[
        draft === null || draft === void 0 ? void 0 : draft.title,
        draft === null || draft === void 0 ? void 0 : draft.summary,
        draft === null || draft === void 0 ? void 0 : draft.incidentType,
        draft === null || draft === void 0 ? void 0 : draft.incidentCategory,
        draft === null || draft === void 0 ? void 0 : draft.topic,
        stringifyStructuredFields(draft === null || draft === void 0 ? void 0 : draft.structuredFields)
    ].filter(Boolean).join(" ").toLowerCase();
const hasAnySignal = (text, patterns)=>patterns.some((pattern)=>pattern.test(text));
const scoreDestination = (destination, draft, preferredDestinationId)=>{
    const signalText = getIncidentSignalText(draft);
    const destinationType = destination.destinationType;
    const destinationName = destination.destinationName.toLowerCase();
    let score = 66;
    if (destination.destinationId === preferredDestinationId) {
        score += 8;
    }
    if (!destination.missingRequiredInfo.length) {
        score += 6;
    } else {
        score -= Math.min(destination.missingRequiredInfo.length * 4, 14);
    }
    if (destination.supportsAcknowledgement) {
        score += 3;
    }
    if (destination.channel.startsWith("api_")) {
        score += 3;
    }
    const incidentKeys = uniqueValues([
        draft === null || draft === void 0 ? void 0 : draft.incidentType,
        draft === null || draft === void 0 ? void 0 : draft.incidentCategory,
        draft === null || draft === void 0 ? void 0 : draft.topic
    ]).map((value)=>value.toLowerCase());
    if (incidentKeys.some((key)=>destination.matchedIncidentTypes.some((incidentType)=>incidentType.toLowerCase() === key))) {
        score += 14;
    }
    if (hasAnySignal(signalText, [
        /\bdomestic\b/,
        /\bfamily violence\b/,
        /\bpartner\b/,
        /\bhusband\b/,
        /\bwife\b/,
        /\bthreat/i,
        /\bunsafe\b/
    ])) {
        if (destinationType === "police") score += 16;
        if (destinationType === "domestic_violence_agency") score += 15;
        if (destinationType === "legal_aid") score += 8;
        if (destinationType === "community_support_org") score += 7;
    }
    if (hasAnySignal(signalText, [
        /\bcyber\b/,
        /\bscam\b/,
        /\bfraud\b/,
        /\bonline\b/,
        /\bsocial media\b/,
        /\bimage\b/,
        /\bemail\b/,
        /\baccount\b/
    ])) {
        if (destinationType === "reportcyber") score += 18;
        if (destinationType === "scamwatch") score += 17;
        if (destinationType === "esafety") score += 15;
        if (destinationType === "police") score += 6;
    }
    if (hasAnySignal(signalText, [
        /\bracist\b/,
        /\bracism\b/,
        /\bdiscrimination\b/,
        /\bhate\b/,
        /\bworkplace\b/,
        /\bschool\b/
    ])) {
        if (destinationType === "anti_discrimination_agency") score += 18;
        if (destinationType === "legal_aid") score += 9;
        if (destinationType === "community_legal_centre") score += 8;
        if (destinationType === "police") score += 7;
    }
    if (hasAnySignal(signalText, [
        /\blegal\b/,
        /\bright\b/,
        /\bcourt\b/,
        /\border\b/,
        /\bvisa\b/,
        /\bmigrant\b/
    ])) {
        if (destinationType === "legal_aid") score += 16;
        if (destinationType === "community_legal_centre") score += 12;
    }
    if (destinationName.includes("police")) score += 3;
    if (destinationName.includes("esafety")) score += 3;
    if (destinationName.includes("legal aid")) score += 3;
    return Math.max(52, Math.min(97, score));
};
const buildDestinationTags = (destination, draft)=>{
    var _draft_incidentCategory, _destination_deliveryReadiness, _destination_deliveryReadiness1;
    return uniqueValues([
        formatDestinationType(destination.destinationType),
        destination.jurisdiction,
        draft === null || draft === void 0 ? void 0 : (_draft_incidentCategory = draft.incidentCategory) === null || _draft_incidentCategory === void 0 ? void 0 : _draft_incidentCategory.replace(/_/g, " "),
        destination.missingRequiredInfo.length ? "Needs review" : "Ready to share",
        ((_destination_deliveryReadiness = destination.deliveryReadiness) === null || _destination_deliveryReadiness === void 0 ? void 0 : _destination_deliveryReadiness.status) === "config_missing" ? "Needs setup" : ((_destination_deliveryReadiness1 = destination.deliveryReadiness) === null || _destination_deliveryReadiness1 === void 0 ? void 0 : _destination_deliveryReadiness1.status) === "manual_action" ? "Manual follow-up" : undefined
    ]).slice(0, 4);
};
const toAuthorityMatch = (destination, draft, preferredDestinationId)=>({
        destinationId: destination.destinationId,
        destinationName: destination.destinationName,
        destinationType: destination.destinationType,
        channel: destination.channel,
        jurisdiction: destination.jurisdiction,
        reason: destination.reason || "Suggested because this admin-managed destination matches the incident context and jurisdiction.",
        confidence: scoreDestination(destination, draft, preferredDestinationId),
        tags: buildDestinationTags(destination, draft),
        contactEmail: destination.contactEmail,
        contactPhone: destination.contactPhone,
        consentRequired: destination.consentRequired,
        supportsAcknowledgement: destination.supportsAcknowledgement,
        deliveryReadiness: destination.deliveryReadiness,
        missingRequiredInfo: destination.missingRequiredInfo,
        expectedNextSteps: destination.expectedNextSteps
    });
function rankAuthorityMatches(input) {
    const preferredDestinationId = resolvePreferredDestinationId(input.destinations, input.preferredDestinationId);
    return input.destinations.map((destination)=>toAuthorityMatch(destination, input.draft, preferredDestinationId)).sort((a, b)=>b.confidence - a.confidence);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/report-flow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReportFlowHref",
    ()=>buildReportFlowHref,
    "clearReportFlowDraft",
    ()=>clearReportFlowDraft,
    "defaultReportFlowDraft",
    ()=>defaultReportFlowDraft,
    "getReportFlowDraft",
    ()=>getReportFlowDraft,
    "getReportFlowQueryState",
    ()=>getReportFlowQueryState,
    "getResolvedReportFlowDraft",
    ()=>getResolvedReportFlowDraft,
    "mergeReportFlowDraft",
    ()=>mergeReportFlowDraft,
    "saveReportFlowDraft",
    ()=>saveReportFlowDraft
]);
"use client";
const REPORT_FLOW_DRAFT_KEY = "safespeak_report_flow_draft";
const REPORT_FLOW_CURRENT_REPORT_ID_KEY = "safespeak_current_report_id";
const REPORT_FLOW_VIEW_QUERY_KEY = "view";
const REPORT_FLOW_REPORT_ID_QUERY_KEY = "reportId";
const REPORT_FLOW_DESTINATION_ID_QUERY_KEY = "destinationId";
const REPORT_FLOW_SUBMISSION_ID_QUERY_KEY = "submissionId";
const defaultReportFlowDraft = {
    title: "",
    date: "",
    location: "",
    summary: "",
    evidenceIds: []
};
function getReportFlowDraft() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(REPORT_FLOW_DRAFT_KEY);
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        window.sessionStorage.removeItem(REPORT_FLOW_DRAFT_KEY);
        return null;
    }
}
function getReportFlowStoredReportId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var _window_sessionStorage_getItem;
    return (_window_sessionStorage_getItem = window.sessionStorage.getItem(REPORT_FLOW_CURRENT_REPORT_ID_KEY)) !== null && _window_sessionStorage_getItem !== void 0 ? _window_sessionStorage_getItem : undefined;
}
function getReportFlowQueryState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const params = new URLSearchParams(window.location.search);
    var _params_get;
    const reportId = (_params_get = params.get(REPORT_FLOW_REPORT_ID_QUERY_KEY)) !== null && _params_get !== void 0 ? _params_get : undefined;
    var _params_get1;
    const selectedDestinationId = (_params_get1 = params.get(REPORT_FLOW_DESTINATION_ID_QUERY_KEY)) !== null && _params_get1 !== void 0 ? _params_get1 : undefined;
    var _params_get2;
    const latestSubmissionId = (_params_get2 = params.get(REPORT_FLOW_SUBMISSION_ID_QUERY_KEY)) !== null && _params_get2 !== void 0 ? _params_get2 : undefined;
    const queryState = {};
    if (reportId) {
        queryState.reportId = reportId;
    }
    if (selectedDestinationId) {
        queryState.selectedDestinationId = selectedDestinationId;
    }
    if (latestSubmissionId) {
        queryState.latestSubmissionId = latestSubmissionId;
    }
    return queryState;
}
function getResolvedReportFlowDraft() {
    const draft = getReportFlowDraft();
    const queryState = getReportFlowQueryState();
    const storedReportId = getReportFlowStoredReportId();
    if (!draft && !queryState.reportId && !storedReportId && !queryState.selectedDestinationId) {
        return null;
    }
    var _draft_evidenceIds, _draft_updatedAt;
    return {
        ...defaultReportFlowDraft,
        ...storedReportId ? {
            reportId: storedReportId
        } : {},
        ...draft,
        ...queryState,
        evidenceIds: (_draft_evidenceIds = draft === null || draft === void 0 ? void 0 : draft.evidenceIds) !== null && _draft_evidenceIds !== void 0 ? _draft_evidenceIds : [],
        updatedAt: (_draft_updatedAt = draft === null || draft === void 0 ? void 0 : draft.updatedAt) !== null && _draft_updatedAt !== void 0 ? _draft_updatedAt : new Date(0).toISOString()
    };
}
function buildReportFlowHref(view) {
    let state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const params = new URLSearchParams();
    params.set(REPORT_FLOW_VIEW_QUERY_KEY, view);
    if (state.reportId) {
        params.set(REPORT_FLOW_REPORT_ID_QUERY_KEY, state.reportId);
    }
    if (state.selectedDestinationId) {
        params.set(REPORT_FLOW_DESTINATION_ID_QUERY_KEY, state.selectedDestinationId);
    }
    if (state.latestSubmissionId) {
        params.set(REPORT_FLOW_SUBMISSION_ID_QUERY_KEY, state.latestSubmissionId);
    }
    return "/dashboard?".concat(params.toString());
}
function saveReportFlowDraft(draft) {
    const nextDraft = {
        ...draft,
        updatedAt: new Date().toISOString()
    };
    if ("TURBOPACK compile-time truthy", 1) {
        window.sessionStorage.setItem(REPORT_FLOW_DRAFT_KEY, JSON.stringify(nextDraft));
        if (nextDraft.reportId) {
            window.sessionStorage.setItem(REPORT_FLOW_CURRENT_REPORT_ID_KEY, nextDraft.reportId);
        }
    }
    return nextDraft;
}
function mergeReportFlowDraft(partialDraft) {
    const currentDraft = getResolvedReportFlowDraft();
    var _partialDraft_evidenceIds, _ref;
    return saveReportFlowDraft({
        ...defaultReportFlowDraft,
        ...currentDraft,
        ...partialDraft,
        evidenceIds: (_ref = (_partialDraft_evidenceIds = partialDraft.evidenceIds) !== null && _partialDraft_evidenceIds !== void 0 ? _partialDraft_evidenceIds : currentDraft === null || currentDraft === void 0 ? void 0 : currentDraft.evidenceIds) !== null && _ref !== void 0 ? _ref : []
    });
}
function clearReportFlowDraft() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.removeItem(REPORT_FLOW_DRAFT_KEY);
    window.sessionStorage.removeItem(REPORT_FLOW_CURRENT_REPORT_ID_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/report-submission-mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REPORT_SUBMISSION_MOCK_MODE",
    ()=>REPORT_SUBMISSION_MOCK_MODE,
    "createMockSubmission",
    ()=>createMockSubmission,
    "getMockDestinations",
    ()=>getMockDestinations,
    "getMockReportId",
    ()=>getMockReportId,
    "getMockReportRef",
    ()=>getMockReportRef,
    "getMockReportStatus",
    ()=>getMockReportStatus,
    "getMockSubmissionPreviews",
    ()=>getMockSubmissionPreviews
]);
"use client";
const REPORT_SUBMISSION_MOCK_MODE = false;
const MOCK_REPORT_ID = "mock-report-local";
const MOCK_REPORT_REF = "SS-MOCK-0001";
function getMockReportId(draft) {
    var _draft_reportId;
    return (_draft_reportId = draft === null || draft === void 0 ? void 0 : draft.reportId) !== null && _draft_reportId !== void 0 ? _draft_reportId : MOCK_REPORT_ID;
}
function getMockReportRef() {
    return MOCK_REPORT_REF;
}
function getMockReportStatus(draft) {
    if (draft === null || draft === void 0 ? void 0 : draft.latestSubmissionId) {
        return "submitted";
    }
    if (draft === null || draft === void 0 ? void 0 : draft.preparedSubmission) {
        return "prepared";
    }
    return "draft";
}
function getMockDestinations(draft) {
    var _draft_summary, _draft_title, _draft_structuredFields, _draft_structuredFields1, _draft_structuredFields2;
    const summary = (draft === null || draft === void 0 ? void 0 : (_draft_summary = draft.summary) === null || _draft_summary === void 0 ? void 0 : _draft_summary.trim()) || "Mock SafeSpeak report summary";
    const title = (draft === null || draft === void 0 ? void 0 : (_draft_title = draft.title) === null || _draft_title === void 0 ? void 0 : _draft_title.trim()) || "Incident report";
    const jurisdiction = draft === null || draft === void 0 ? void 0 : (_draft_structuredFields = draft.structuredFields) === null || _draft_structuredFields === void 0 ? void 0 : _draft_structuredFields.jurisdiction;
    const resolvedJurisdiction = (draft === null || draft === void 0 ? void 0 : (_draft_structuredFields1 = draft.structuredFields) === null || _draft_structuredFields1 === void 0 ? void 0 : _draft_structuredFields1.where) ? "AU" : (draft === null || draft === void 0 ? void 0 : (_draft_structuredFields2 = draft.structuredFields) === null || _draft_structuredFields2 === void 0 ? void 0 : _draft_structuredFields2.jurisdiction) ? String(jurisdiction) : "AU";
    var _draft_structuredFields3;
    const structuredFields = (_draft_structuredFields3 = draft === null || draft === void 0 ? void 0 : draft.structuredFields) !== null && _draft_structuredFields3 !== void 0 ? _draft_structuredFields3 : {};
    var _draft_evidenceIds;
    const evidence = ((_draft_evidenceIds = draft === null || draft === void 0 ? void 0 : draft.evidenceIds) !== null && _draft_evidenceIds !== void 0 ? _draft_evidenceIds : []).map((evidenceId)=>({
            evidenceId,
            status: "attached"
        }));
    return [
        {
            destinationId: "mock-police",
            destinationKey: "mock-police",
            destinationType: "police",
            destinationName: "Local Police Assistance Desk",
            reason: "Recommended because your draft describes a direct incident with identifiable time and location details.",
            channel: "secure_api",
            jurisdiction: resolvedJurisdiction,
            languages: [
                "en"
            ],
            contactEmail: "mock-police@safespeak.test",
            contactPhone: "+61 2 9000 0001",
            minimumRequiredInfo: [
                "summary",
                "date",
                "location"
            ],
            missingRequiredInfo: [],
            anonymityOptions: [
                "identified",
                "anonymous",
                "pseudonymous"
            ],
            expectedNextSteps: [
                "A receiving officer reviews the summary.",
                "They may contact you for follow-up if you choose identified sharing."
            ],
            consentRequired: false,
            supportsAcknowledgement: true,
            requiredConsentFlags: [],
            matchedIncidentTypes: [
                "harassment",
                "threat",
                "assault"
            ],
            deliveryReadiness: {
                status: "ready",
                mode: "automated",
                canAutoSend: true,
                actuallySends: false,
                credentialConfigured: true,
                credentialReference: "mock-credential-police",
                configurationIssues: []
            },
            payloadPreview: {
                refNo: getMockReportRef(),
                title,
                summary,
                language: "en",
                jurisdiction: resolvedJurisdiction,
                incidentType: draft === null || draft === void 0 ? void 0 : draft.incidentType,
                structuredFields,
                evidence
            }
        },
        {
            destinationId: "mock-esafety",
            destinationKey: "mock-esafety",
            destinationType: "esafety",
            destinationName: "eSafety Mock Intake",
            reason: "Recommended when the report includes online abuse, images, messages, or digital evidence.",
            channel: "structured_email",
            jurisdiction: resolvedJurisdiction,
            languages: [
                "en"
            ],
            contactEmail: "mock-esafety@safespeak.test",
            minimumRequiredInfo: [
                "summary"
            ],
            missingRequiredInfo: [],
            anonymityOptions: [
                "identified",
                "pseudonymous"
            ],
            expectedNextSteps: [
                "The report package is reviewed for platform-specific evidence.",
                "You may be asked for account or message references."
            ],
            consentRequired: false,
            supportsAcknowledgement: true,
            requiredConsentFlags: [],
            matchedIncidentTypes: [
                "cyber_abuse",
                "online_harassment"
            ],
            deliveryReadiness: {
                status: "manual_action",
                mode: "manual",
                canAutoSend: false,
                actuallySends: false,
                credentialConfigured: true,
                configurationIssues: []
            },
            payloadPreview: {
                refNo: getMockReportRef(),
                title,
                summary,
                language: "en",
                jurisdiction: resolvedJurisdiction,
                incidentType: draft === null || draft === void 0 ? void 0 : draft.incidentType,
                structuredFields,
                evidence
            }
        },
        {
            destinationId: "mock-anti-discrimination",
            destinationKey: "mock-anti-discrimination",
            destinationType: "anti_discrimination_agency",
            destinationName: "Anti-Discrimination Mock Pathway",
            reason: "Recommended for reports that mention bias, workplace treatment, or protected-attribute harm.",
            channel: "pdf_email",
            jurisdiction: resolvedJurisdiction,
            languages: [
                "en"
            ],
            contactEmail: "mock-anti-discrimination@safespeak.test",
            minimumRequiredInfo: [
                "summary",
                "location"
            ],
            missingRequiredInfo: [],
            anonymityOptions: [
                "identified",
                "anonymous"
            ],
            expectedNextSteps: [
                "A case intake team reviews the summary.",
                "They may request employer or institution context next."
            ],
            consentRequired: false,
            supportsAcknowledgement: false,
            requiredConsentFlags: [],
            matchedIncidentTypes: [
                "discrimination",
                "harassment"
            ],
            deliveryReadiness: {
                status: "config_missing",
                mode: "config_missing",
                canAutoSend: false,
                actuallySends: false,
                credentialConfigured: false,
                configurationIssues: [
                    "Mock mode keeps delivery local only."
                ]
            },
            payloadPreview: {
                refNo: getMockReportRef(),
                title,
                summary,
                language: "en",
                jurisdiction: resolvedJurisdiction,
                incidentType: draft === null || draft === void 0 ? void 0 : draft.incidentType,
                structuredFields,
                evidence
            }
        }
    ];
}
function getMockSubmissionPreviews(draft, destinationIds) {
    const destinations = getMockDestinations(draft).filter((destination)=>destinationIds.includes(destination.destinationId));
    return destinations.map((destination)=>{
        var _draft_structuredFields;
        return {
            destination: {
                destinationId: destination.destinationId,
                destinationKey: destination.destinationKey,
                destinationType: destination.destinationType,
                destinationName: destination.destinationName,
                reason: destination.reason,
                channel: destination.channel,
                jurisdiction: destination.jurisdiction,
                languages: destination.languages,
                endpoint: destination.endpoint,
                contactEmail: destination.contactEmail,
                contactPhone: destination.contactPhone,
                minimumRequiredInfo: destination.minimumRequiredInfo,
                missingRequiredInfo: destination.missingRequiredInfo,
                anonymityOptions: destination.anonymityOptions,
                expectedNextSteps: destination.expectedNextSteps,
                consentRequired: destination.consentRequired,
                supportsAcknowledgement: destination.supportsAcknowledgement,
                requiredConsentFlags: destination.requiredConsentFlags,
                matchedIncidentTypes: destination.matchedIncidentTypes,
                deliveryReadiness: destination.deliveryReadiness
            },
            template: {
                templateId: "mock-template-".concat(destination.destinationId),
                templateKey: "mock-safe-speak-template",
                templateName: "Mock SafeSpeak Payload",
                fieldMappings: [
                    {
                        source: "summary",
                        target: "summary",
                        required: true
                    },
                    {
                        source: "when",
                        target: "incident_date",
                        required: false
                    },
                    {
                        source: "where",
                        target: "incident_location",
                        required: false
                    }
                ]
            },
            missingRequiredInfo: destination.missingRequiredInfo,
            missingMappedFields: [],
            requiredConsentFlags: destination.requiredConsentFlags,
            missingConsentFlags: [],
            payload: {
                refNo: getMockReportRef(),
                title: (draft === null || draft === void 0 ? void 0 : draft.title) || destination.payloadPreview.title,
                summary: (draft === null || draft === void 0 ? void 0 : draft.summary) || destination.payloadPreview.summary,
                structuredFields: (_draft_structuredFields = draft === null || draft === void 0 ? void 0 : draft.structuredFields) !== null && _draft_structuredFields !== void 0 ? _draft_structuredFields : {},
                destination: destination.destinationName
            },
            evidence: destination.payloadPreview.evidence
        };
    });
}
function createMockSubmission(params) {
    var _destination_deliveryReadiness, _destination_deliveryReadiness1, _destination_deliveryReadiness2;
    const { draft, destination, anonymityMode, notes } = params;
    const now = new Date().toISOString();
    var _draft_structuredFields, _destination_deliveryReadiness_mode, _destination_deliveryReadiness_status, _destination_deliveryReadiness_configurationIssues;
    return {
        _id: "mock-submission-".concat(destination.destinationId),
        reportId: getMockReportId(draft),
        destinationId: destination.destinationId,
        destinationKey: destination.destinationKey,
        destinationType: destination.destinationType,
        destinationName: destination.destinationName,
        channel: destination.channel,
        jurisdiction: destination.jurisdiction,
        languages: destination.languages,
        status: "submitted",
        anonymityMode,
        minimumRequiredInfo: destination.minimumRequiredInfo,
        missingRequiredInfo: destination.missingRequiredInfo,
        requiredConsentFlags: destination.requiredConsentFlags,
        expectedNextSteps: destination.expectedNextSteps,
        notes,
        endpoint: destination.endpoint,
        contactEmail: destination.contactEmail,
        contactPhone: destination.contactPhone,
        payloadSnapshot: {
            refNo: getMockReportRef(),
            title: (draft === null || draft === void 0 ? void 0 : draft.title) || destination.payloadPreview.title,
            summary: (draft === null || draft === void 0 ? void 0 : draft.summary) || destination.payloadPreview.summary,
            structuredFields: (_draft_structuredFields = draft === null || draft === void 0 ? void 0 : draft.structuredFields) !== null && _draft_structuredFields !== void 0 ? _draft_structuredFields : {}
        },
        evidenceSnapshot: destination.payloadPreview.evidence,
        consentSnapshot: {
            mockMode: true,
            anonymityMode
        },
        deliveryArtifacts: [
            {
                type: "mock_delivery_record",
                createdAt: now
            }
        ],
        deliveryMessage: "Mock delivery recorded locally. No external destination was contacted.",
        deliveryMode: (_destination_deliveryReadiness_mode = (_destination_deliveryReadiness = destination.deliveryReadiness) === null || _destination_deliveryReadiness === void 0 ? void 0 : _destination_deliveryReadiness.mode) !== null && _destination_deliveryReadiness_mode !== void 0 ? _destination_deliveryReadiness_mode : "manual",
        deliveryConfigurationStatus: (_destination_deliveryReadiness_status = (_destination_deliveryReadiness1 = destination.deliveryReadiness) === null || _destination_deliveryReadiness1 === void 0 ? void 0 : _destination_deliveryReadiness1.status) !== null && _destination_deliveryReadiness_status !== void 0 ? _destination_deliveryReadiness_status : "manual_action",
        deliveryConfigurationIssues: (_destination_deliveryReadiness_configurationIssues = (_destination_deliveryReadiness2 = destination.deliveryReadiness) === null || _destination_deliveryReadiness2 === void 0 ? void 0 : _destination_deliveryReadiness2.configurationIssues) !== null && _destination_deliveryReadiness_configurationIssues !== void 0 ? _destination_deliveryReadiness_configurationIssues : [],
        actuallySent: false,
        externalReference: "MOCK-".concat(destination.destinationId.toUpperCase()),
        previewGeneratedAt: now,
        submittedAt: now,
        lastAttemptAt: now,
        createdAt: now,
        updatedAt: now
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/reports-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createReport",
    ()=>createReport,
    "deleteReport",
    ()=>deleteReport,
    "getReport",
    ()=>getReport,
    "getReportDestinations",
    ()=>getReportDestinations,
    "getReportStatus",
    ()=>getReportStatus,
    "getReportTimeline",
    ()=>getReportTimeline,
    "listReportSubmissions",
    ()=>listReportSubmissions,
    "listReports",
    ()=>listReports,
    "markReportInfoOnly",
    ()=>markReportInfoOnly,
    "previewReportSubmissions",
    ()=>previewReportSubmissions,
    "requestReportDelete",
    ()=>requestReportDelete,
    "submitReportToDestination",
    ()=>submitReportToDestination,
    "updateReport",
    ()=>updateReport,
    "withdrawReport",
    ()=>withdrawReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const allowedStructuredFieldKeys = new Set([
    "who",
    "what",
    "when",
    "where",
    "how",
    "witnesses",
    "repeatedIncidents",
    "injuries",
    "supportMessage",
    "evidenceItems"
]);
function sanitizeStructuredFields(structuredFields) {
    if (!structuredFields) {
        return structuredFields;
    }
    return Object.fromEntries(Object.entries(structuredFields).filter((param)=>{
        let [key] = param;
        return allowedStructuredFieldKeys.has(key);
    }));
}
function sanitizeReportInput(input) {
    if (!input.structuredFields) {
        return input;
    }
    return {
        ...input,
        structuredFields: sanitizeStructuredFields(input.structuredFields)
    };
}
async function reportApiRequest(path) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
            ...options,
            headers
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRequestError"] && error.status === 401) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAnonymousSession"])();
            const retryHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])({
                forceNewAnonymous: true
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
                ...options,
                headers: retryHeaders
            });
        }
        throw error;
    }
}
async function createReport(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].reportStorage, headers);
    const response = await reportApiRequest("/reports", {
        method: "POST",
        body: sanitizeReportInput(input)
    });
    return response.data.report;
}
async function updateReport(reportId, input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].reportStorage, headers);
    const response = await reportApiRequest("/reports/".concat(reportId), {
        method: "PATCH",
        body: sanitizeReportInput(input)
    });
    return response.data.report;
}
async function listReports() {
    const response = await reportApiRequest("/reports");
    return response.data.reports;
}
async function getReport(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId));
    return response.data.report;
}
async function getReportStatus(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/status"));
    return response.data.status;
}
async function getReportTimeline(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/timeline"));
    return response.data.timeline;
}
async function withdrawReport(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/withdraw"), {
        method: "POST"
    });
    return response.data.report;
}
async function deleteReport(reportId) {
    await reportApiRequest("/reports/".concat(reportId), {
        method: "DELETE"
    });
}
async function requestReportDelete(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/request-delete"), {
        method: "POST"
    });
    return response.data.report;
}
async function markReportInfoOnly(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/mark-info-only"), {
        method: "POST"
    });
    return response.data.report;
}
async function getReportDestinations(reportId) {
    let query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const params = new URLSearchParams();
    if (query.destinationType) {
        params.set("destinationType", query.destinationType);
    }
    if (query.jurisdiction) {
        params.set("jurisdiction", query.jurisdiction);
    }
    const suffix = params.toString() ? "?".concat(params.toString()) : "";
    const response = await reportApiRequest("/reports/".concat(reportId, "/destinations").concat(suffix));
    return response.data.destinations;
}
async function listReportSubmissions(reportId) {
    const response = await reportApiRequest("/reports/".concat(reportId, "/submissions"));
    return response.data.submissions;
}
async function previewReportSubmissions(reportId, input) {
    var _input_anonymityMode;
    const response = await reportApiRequest("/reports/".concat(reportId, "/submission-previews"), {
        method: "POST",
        body: {
            destinationIds: input.destinationIds,
            anonymityMode: (_input_anonymityMode = input.anonymityMode) !== null && _input_anonymityMode !== void 0 ? _input_anonymityMode : "identified",
            notes: input.notes
        }
    });
    return response.data.previews;
}
async function submitReportToDestination(reportId, input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].reportDestinationSubmit, headers);
    var _input_anonymityMode, _input_confirmConsent;
    const response = await reportApiRequest("/reports/".concat(reportId, "/submissions"), {
        method: "POST",
        body: {
            destinationId: input.destinationId,
            anonymityMode: (_input_anonymityMode = input.anonymityMode) !== null && _input_anonymityMode !== void 0 ? _input_anonymityMode : "identified",
            notes: input.notes,
            confirmConsent: (_input_confirmConsent = input.confirmConsent) !== null && _input_confirmConsent !== void 0 ? _input_confirmConsent : true
        }
    });
    return response.data.submission;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSubmissionSharePage",
    ()=>ReportSubmissionSharePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBoltFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBoltFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconBoltFilled.mjs [app-client] (ecmascript) <export default as IconBoltFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderFilled.mjs [app-client] (ecmascript) <export default as IconFolderFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-client] (ecmascript) <export default as IconLoader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPhone.mjs [app-client] (ecmascript) <export default as IconPhone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShare$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShare.mjs [app-client] (ecmascript) <export default as IconShare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldCheck.mjs [app-client] (ecmascript) <export default as IconShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$report$2d$submission$2d$pages$2f$report$2d$submission$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-consent-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-authority-routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-submission-mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reports-client.ts [app-client] (ecmascript)");
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
function getRequiredInfoLabel(match) {
    if (!match) {
        return "No recipient selected";
    }
    return match.missingRequiredInfo.length ? match.missingRequiredInfo.join(", ") : "Complete";
}
function isActualDeliveryStatus(status) {
    return status === "submitted" || status === "acknowledged";
}
function toPreparedSubmissionStatus(status) {
    if (isActualDeliveryStatus(status)) {
        return status;
    }
    if (status === "requires_manual_action" || status === "config_missing" || status === "failed") {
        return status;
    }
    return "ready_to_share";
}
function getDeliveryReadinessCopy(match) {
    if (!(match === null || match === void 0 ? void 0 : match.deliveryReadiness)) {
        return null;
    }
    if (match.deliveryReadiness.status === "config_missing") {
        const issues = match.deliveryReadiness.configurationIssues.join(" ");
        return "This destination is not fully configured for outbound delivery yet. ".concat(issues, " SafeSpeak can record the attempt, but no external report will be sent.");
    }
    if (match.deliveryReadiness.status === "manual_action") {
        return "This destination requires manual follow-up. SafeSpeak will prepare an auditable handoff record, but it will not send the report externally.";
    }
    return "This destination has an automated delivery channel configured. SafeSpeak will only send after your consent and final confirmation.";
}
function getPreparedStatusLabel(status) {
    if (status === "ready_to_share") {
        return "Ready for secure sharing";
    }
    if (status === "config_missing") {
        return "Not sent - partner setup needed";
    }
    if (status === "requires_manual_action") {
        return "Prepared for manual follow-up";
    }
    if (status === "failed") {
        return "Delivery failed";
    }
    if (status === "submitted" || status === "acknowledged") {
        return "Shared through SafeSpeak";
    }
    return "Prepared";
}
function getShareNotice(submission) {
    const reference = "SafeSpeak submission reference ".concat(submission._id, ".");
    if (submission.actuallySent || isActualDeliveryStatus(submission.status)) {
        return submission.externalReference ? "Report sent and recorded with external reference ".concat(submission.externalReference, ". ").concat(reference) : "Report sent through the configured SafeSpeak delivery channel. ".concat(reference);
    }
    if (submission.status === "config_missing") {
        return "Sharing was recorded, but no external report was sent because partner delivery is not fully configured. ".concat(reference);
    }
    if (submission.status === "requires_manual_action") {
        return "Sharing was recorded for manual follow-up. No external report was sent by SafeSpeak. ".concat(reference);
    }
    return "Sharing outcome has been recorded in SafeSpeak. ".concat(reference);
}
const withTriageParam = (href, fromTriage)=>fromTriage ? "".concat(href, "&fromTriage=1") : href;
function ReportSubmissionSharePage() {
    var _reportDraft_evidenceIds, _selectedDestination_payloadPreview_evidence, _selectedDestination_payloadPreview, _reportDraft_preparedSubmission, _reportDraft_preparedSubmission1, _selectedMatch_deliveryReadiness, _selectedMatch_deliveryReadiness1;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const fromTriage = searchParams.get("fromTriage") === "1";
    const reportDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportSubmissionSharePage.useMemo[reportDraft]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedReportFlowDraft"])()
    }["ReportSubmissionSharePage.useMemo[reportDraft]"], []);
    const { pendingConsentRequirement, isGrantingConsent, captureConsentError, clearPendingConsent, grantPendingConsent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"])();
    const [reportStatus, setReportStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("prepared");
    var _reportDraft_reportId;
    const [reportRef, setReportRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_reportDraft_reportId = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId) !== null && _reportDraft_reportId !== void 0 ? _reportDraft_reportId : null);
    var _reportDraft_reportId1;
    const [backendReportId, setBackendReportId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_reportDraft_reportId1 = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId) !== null && _reportDraft_reportId1 !== void 0 ? _reportDraft_reportId1 : null);
    const [latestSubmission, setLatestSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportSubmissions, setReportSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [destinationOptions, setDestinationOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDestinations, setIsLoadingDestinations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId));
    var _reportDraft_selectedDestinationId;
    const [selectedDestinationId, setSelectedDestinationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_reportDraft_selectedDestinationId = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId) !== null && _reportDraft_selectedDestinationId !== void 0 ? _reportDraft_selectedDestinationId : null);
    const [pendingShareDestinationId, setPendingShareDestinationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareError, setShareError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareNotice, setShareNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSharePreviewVisible, setIsSharePreviewVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var _reportDraft_shareAnonymityMode;
    const [anonymityMode, setAnonymityMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_reportDraft_shareAnonymityMode = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.shareAnonymityMode) !== null && _reportDraft_shareAnonymityMode !== void 0 ? _reportDraft_shareAnonymityMode : "identified");
    var _reportDraft_shareNotes;
    const [shareNotes, setShareNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_reportDraft_shareNotes = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.shareNotes) !== null && _reportDraft_shareNotes !== void 0 ? _reportDraft_shareNotes : "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionSharePage.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
                const mockDestinations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockDestinations"])(reportDraft);
                var _mockDestinations_find, _ref;
                const selectedMockDestination = (_ref = (_mockDestinations_find = mockDestinations.find({
                    "ReportSubmissionSharePage.useEffect": (destination)=>destination.destinationId === (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId)
                }["ReportSubmissionSharePage.useEffect"])) !== null && _mockDestinations_find !== void 0 ? _mockDestinations_find : mockDestinations[0]) !== null && _ref !== void 0 ? _ref : null;
                var _reportDraft_shareAnonymityMode;
                const mockSubmission = selectedMockDestination && (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.latestSubmissionId) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMockSubmission"])({
                    draft: reportDraft,
                    destination: selectedMockDestination,
                    anonymityMode: (_reportDraft_shareAnonymityMode = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.shareAnonymityMode) !== null && _reportDraft_shareAnonymityMode !== void 0 ? _reportDraft_shareAnonymityMode : "identified",
                    notes: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.shareNotes
                }) : null;
                setReportRef((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportRef"])());
                setReportStatus((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportStatus"])(reportDraft));
                setDestinationOptions(mockDestinations);
                setLatestSubmission(mockSubmission);
                var _reportDraft_selectedDestinationId, _ref1;
                setSelectedDestinationId((_ref1 = (_reportDraft_selectedDestinationId = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId) !== null && _reportDraft_selectedDestinationId !== void 0 ? _reportDraft_selectedDestinationId : selectedMockDestination === null || selectedMockDestination === void 0 ? void 0 : selectedMockDestination.destinationId) !== null && _ref1 !== void 0 ? _ref1 : null);
                setShareError(null);
                setIsLoadingDestinations(false);
                var _reportDraft_selectedDestinationId1;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                    reportId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportId"])(reportDraft),
                    selectedDestinationId: (_reportDraft_selectedDestinationId1 = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId) !== null && _reportDraft_selectedDestinationId1 !== void 0 ? _reportDraft_selectedDestinationId1 : selectedMockDestination === null || selectedMockDestination === void 0 ? void 0 : selectedMockDestination.destinationId
                });
                return;
            }
            if (!(reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId)) {
                let isActive = true;
                setIsLoadingDestinations(true);
                void ({
                    "ReportSubmissionSharePage.useEffect": async ()=>{
                        try {
                            var _destinations_, _destinations_1;
                            const reports = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listReports"])();
                            const candidateReport = reports.find({
                                "ReportSubmissionSharePage.useEffect.candidateReport": (report)=>{
                                    var _report_status;
                                    return ![
                                        "closed",
                                        "deleted",
                                        "withdrawn"
                                    ].includes((_report_status = report.status) !== null && _report_status !== void 0 ? _report_status : "");
                                }
                            }["ReportSubmissionSharePage.useEffect.candidateReport"]);
                            if (!(candidateReport === null || candidateReport === void 0 ? void 0 : candidateReport._id)) {
                                throw new Error("This report needs to be saved from the details or review step before it can be shared securely.");
                            }
                            const [report, status, submissions, destinations] = await Promise.all([
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReport"])(candidateReport._id),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportStatus"])(candidateReport._id),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listReportSubmissions"])(candidateReport._id),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportDestinations"])(candidateReport._id)
                            ]);
                            if (!isActive) {
                                return;
                            }
                            const resolvedSelectedDestinationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinations, reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId);
                            var _submissions_find;
                            const destinationSubmission = (_submissions_find = submissions.find({
                                "ReportSubmissionSharePage.useEffect": (submission)=>submission.destinationId === resolvedSelectedDestinationId
                            }["ReportSubmissionSharePage.useEffect"])) !== null && _submissions_find !== void 0 ? _submissions_find : null;
                            var _report_refNo;
                            setReportRef((_report_refNo = report.refNo) !== null && _report_refNo !== void 0 ? _report_refNo : report._id);
                            setBackendReportId(report._id);
                            setReportStatus(status.current);
                            setDestinationOptions(destinations);
                            setReportSubmissions(submissions);
                            setLatestSubmission(destinationSubmission);
                            var _destinationSubmission_destinationId, _ref, _ref1;
                            setSelectedDestinationId((_ref1 = (_ref = (_destinationSubmission_destinationId = destinationSubmission === null || destinationSubmission === void 0 ? void 0 : destinationSubmission.destinationId) !== null && _destinationSubmission_destinationId !== void 0 ? _destinationSubmission_destinationId : resolvedSelectedDestinationId) !== null && _ref !== void 0 ? _ref : (_destinations_ = destinations[0]) === null || _destinations_ === void 0 ? void 0 : _destinations_.destinationId) !== null && _ref1 !== void 0 ? _ref1 : null);
                            setShareError(null);
                            var _destinationSubmission_destinationId1, _ref2;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                                reportId: report._id,
                                selectedDestinationId: (_ref2 = (_destinationSubmission_destinationId1 = destinationSubmission === null || destinationSubmission === void 0 ? void 0 : destinationSubmission.destinationId) !== null && _destinationSubmission_destinationId1 !== void 0 ? _destinationSubmission_destinationId1 : resolvedSelectedDestinationId) !== null && _ref2 !== void 0 ? _ref2 : (_destinations_1 = destinations[0]) === null || _destinations_1 === void 0 ? void 0 : _destinations_1.destinationId,
                                latestSubmissionId: destinationSubmission === null || destinationSubmission === void 0 ? void 0 : destinationSubmission._id,
                                structuredFields: report.structuredFields,
                                incidentType: report.incidentType
                            });
                        } catch (error) {
                            if (!isActive) {
                                return;
                            }
                            setReportSubmissions([]);
                            setLatestSubmission(null);
                            setDestinationOptions([]);
                            var _reportDraft_selectedDestinationId;
                            setSelectedDestinationId((_reportDraft_selectedDestinationId = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId) !== null && _reportDraft_selectedDestinationId !== void 0 ? _reportDraft_selectedDestinationId : null);
                            setShareError(error instanceof Error ? error.message : "This report needs to be saved from the details or review step before it can be shared securely.");
                        } finally{
                            if (isActive) {
                                setIsLoadingDestinations(false);
                            }
                        }
                    }
                })["ReportSubmissionSharePage.useEffect"]();
                return ({
                    "ReportSubmissionSharePage.useEffect": ()=>{
                        isActive = false;
                    }
                })["ReportSubmissionSharePage.useEffect"];
            }
            let isActive = true;
            setIsLoadingDestinations(true);
            void Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReport"])(reportDraft.reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportStatus"])(reportDraft.reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listReportSubmissions"])(reportDraft.reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportDestinations"])(reportDraft.reportId)
            ]).then({
                "ReportSubmissionSharePage.useEffect": (param)=>{
                    let [report, status, submissions, destinations] = param;
                    var _destinations_, _destinations_1, _reportDraft_preparedSubmission;
                    if (!isActive) {
                        return;
                    }
                    setReportSubmissions(submissions);
                    const resolvedSelectedDestinationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinations, reportDraft.selectedDestinationId);
                    var _submissions_find;
                    const matchedSubmission = reportDraft.latestSubmissionId ? (_submissions_find = submissions.find({
                        "ReportSubmissionSharePage.useEffect": (submission)=>submission._id === reportDraft.latestSubmissionId && submission.destinationId === resolvedSelectedDestinationId
                    }["ReportSubmissionSharePage.useEffect"])) !== null && _submissions_find !== void 0 ? _submissions_find : null : null;
                    var _submissions_find1;
                    const destinationSubmission = (_submissions_find1 = submissions.find({
                        "ReportSubmissionSharePage.useEffect": (submission)=>submission.destinationId === resolvedSelectedDestinationId
                    }["ReportSubmissionSharePage.useEffect"])) !== null && _submissions_find1 !== void 0 ? _submissions_find1 : null;
                    var _report_refNo;
                    setReportRef((_report_refNo = report.refNo) !== null && _report_refNo !== void 0 ? _report_refNo : report._id);
                    setBackendReportId(report._id);
                    setReportStatus(status.current);
                    setDestinationOptions(destinations);
                    var _ref;
                    const resolvedLatestSubmission = (_ref = matchedSubmission !== null && matchedSubmission !== void 0 ? matchedSubmission : destinationSubmission) !== null && _ref !== void 0 ? _ref : null;
                    setLatestSubmission(resolvedLatestSubmission);
                    var _resolvedLatestSubmission_destinationId, _ref1, _ref2;
                    setSelectedDestinationId((_ref2 = (_ref1 = (_resolvedLatestSubmission_destinationId = resolvedLatestSubmission === null || resolvedLatestSubmission === void 0 ? void 0 : resolvedLatestSubmission.destinationId) !== null && _resolvedLatestSubmission_destinationId !== void 0 ? _resolvedLatestSubmission_destinationId : resolvedSelectedDestinationId) !== null && _ref1 !== void 0 ? _ref1 : (_destinations_ = destinations[0]) === null || _destinations_ === void 0 ? void 0 : _destinations_.destinationId) !== null && _ref2 !== void 0 ? _ref2 : null);
                    var _resolvedLatestSubmission_destinationId1, _ref3, _resolvedLatestSubmission_actuallySent;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                        reportId: report._id,
                        selectedDestinationId: (_ref3 = (_resolvedLatestSubmission_destinationId1 = resolvedLatestSubmission === null || resolvedLatestSubmission === void 0 ? void 0 : resolvedLatestSubmission.destinationId) !== null && _resolvedLatestSubmission_destinationId1 !== void 0 ? _resolvedLatestSubmission_destinationId1 : resolvedSelectedDestinationId) !== null && _ref3 !== void 0 ? _ref3 : (_destinations_1 = destinations[0]) === null || _destinations_1 === void 0 ? void 0 : _destinations_1.destinationId,
                        latestSubmissionId: resolvedLatestSubmission === null || resolvedLatestSubmission === void 0 ? void 0 : resolvedLatestSubmission._id,
                        preparedSubmission: resolvedLatestSubmission ? {
                            destinationId: resolvedLatestSubmission.destinationId,
                            destinationName: resolvedLatestSubmission.destinationName,
                            destinationType: resolvedLatestSubmission.destinationType,
                            channel: resolvedLatestSubmission.channel,
                            status: toPreparedSubmissionStatus(resolvedLatestSubmission.status),
                            missingRequiredInfo: resolvedLatestSubmission.missingRequiredInfo,
                            message: resolvedLatestSubmission.deliveryMessage,
                            actuallySent: (_resolvedLatestSubmission_actuallySent = resolvedLatestSubmission.actuallySent) !== null && _resolvedLatestSubmission_actuallySent !== void 0 ? _resolvedLatestSubmission_actuallySent : isActualDeliveryStatus(resolvedLatestSubmission.status),
                            updatedAt: new Date().toISOString()
                        } : ((_reportDraft_preparedSubmission = reportDraft.preparedSubmission) === null || _reportDraft_preparedSubmission === void 0 ? void 0 : _reportDraft_preparedSubmission.status) === "ready_to_share" ? reportDraft.preparedSubmission : undefined
                    });
                }
            }["ReportSubmissionSharePage.useEffect"]).catch({
                "ReportSubmissionSharePage.useEffect": (error)=>{
                    if (!isActive) {
                        return;
                    }
                    setShareError(error instanceof Error ? error.message : "Admin-managed destinations could not be loaded.");
                    setReportSubmissions([]);
                }
            }["ReportSubmissionSharePage.useEffect"]).finally({
                "ReportSubmissionSharePage.useEffect": ()=>{
                    if (isActive) {
                        setIsLoadingDestinations(false);
                    }
                }
            }["ReportSubmissionSharePage.useEffect"]);
            return ({
                "ReportSubmissionSharePage.useEffect": ()=>{
                    isActive = false;
                }
            })["ReportSubmissionSharePage.useEffect"];
        }
    }["ReportSubmissionSharePage.useEffect"], [
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.latestSubmissionId,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.preparedSubmission,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionSharePage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                selectedDestinationId: selectedDestinationId !== null && selectedDestinationId !== void 0 ? selectedDestinationId : undefined,
                shareAnonymityMode: anonymityMode,
                shareNotes
            });
        }
    }["ReportSubmissionSharePage.useEffect"], [
        anonymityMode,
        selectedDestinationId,
        shareNotes
    ]);
    var _ref, _resolvePreferredDestinationId, _ref1, _ref2;
    const preferredDestinationId = (_ref2 = (_ref1 = (_resolvePreferredDestinationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinationOptions, (_ref = selectedDestinationId !== null && selectedDestinationId !== void 0 ? selectedDestinationId : latestSubmission === null || latestSubmission === void 0 ? void 0 : latestSubmission.destinationId) !== null && _ref !== void 0 ? _ref : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId)) !== null && _resolvePreferredDestinationId !== void 0 ? _resolvePreferredDestinationId : selectedDestinationId) !== null && _ref1 !== void 0 ? _ref1 : latestSubmission === null || latestSubmission === void 0 ? void 0 : latestSubmission.destinationId) !== null && _ref2 !== void 0 ? _ref2 : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId;
    const authorityMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportSubmissionSharePage.useMemo[authorityMatches]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankAuthorityMatches"])({
                destinations: destinationOptions,
                draft: reportDraft,
                preferredDestinationId
            })
    }["ReportSubmissionSharePage.useMemo[authorityMatches]"], [
        destinationOptions,
        preferredDestinationId,
        reportDraft
    ]);
    var _authorityMatches_;
    const primaryMatch = (_authorityMatches_ = authorityMatches[0]) !== null && _authorityMatches_ !== void 0 ? _authorityMatches_ : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionSharePage.useEffect": ()=>{
            if (!authorityMatches.length) {
                return;
            }
            const hasSelectedMatch = authorityMatches.some({
                "ReportSubmissionSharePage.useEffect.hasSelectedMatch": (match)=>match.destinationId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinationOptions, selectedDestinationId !== null && selectedDestinationId !== void 0 ? selectedDestinationId : undefined)
            }["ReportSubmissionSharePage.useEffect.hasSelectedMatch"]);
            if (!selectedDestinationId || !hasSelectedMatch) {
                setSelectedDestinationId(authorityMatches[0].destinationId);
            }
        }
    }["ReportSubmissionSharePage.useEffect"], [
        authorityMatches,
        destinationOptions,
        selectedDestinationId
    ]);
    var _authorityMatches_find, _ref3;
    const selectedMatch = (_ref3 = (_authorityMatches_find = authorityMatches.find((match)=>match.destinationId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinationOptions, selectedDestinationId !== null && selectedDestinationId !== void 0 ? selectedDestinationId : undefined))) !== null && _authorityMatches_find !== void 0 ? _authorityMatches_find : primaryMatch) !== null && _ref3 !== void 0 ? _ref3 : null;
    var _destinationOptions_find;
    const selectedDestination = selectedMatch ? (_destinationOptions_find = destinationOptions.find((destination)=>destination.destinationId === selectedMatch.destinationId)) !== null && _destinationOptions_find !== void 0 ? _destinationOptions_find : null : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionSharePage.useEffect": ()=>{
            if (!selectedDestinationId || !reportSubmissions.length) {
                return;
            }
            var _resolvePreferredDestinationId;
            const resolvedDestinationId = (_resolvePreferredDestinationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePreferredDestinationId"])(destinationOptions, selectedDestinationId)) !== null && _resolvePreferredDestinationId !== void 0 ? _resolvePreferredDestinationId : selectedDestinationId;
            var _reportSubmissions_find;
            const existingSubmission = (_reportSubmissions_find = reportSubmissions.find({
                "ReportSubmissionSharePage.useEffect": (submission)=>submission.destinationId === resolvedDestinationId
            }["ReportSubmissionSharePage.useEffect"])) !== null && _reportSubmissions_find !== void 0 ? _reportSubmissions_find : null;
            setLatestSubmission(existingSubmission);
        }
    }["ReportSubmissionSharePage.useEffect"], [
        destinationOptions,
        reportSubmissions,
        selectedDestinationId
    ]);
    var _selectedDestination_missingRequiredInfo, _ref4;
    const missingRequiredInfo = (_ref4 = (_selectedDestination_missingRequiredInfo = selectedDestination === null || selectedDestination === void 0 ? void 0 : selectedDestination.missingRequiredInfo) !== null && _selectedDestination_missingRequiredInfo !== void 0 ? _selectedDestination_missingRequiredInfo : selectedMatch === null || selectedMatch === void 0 ? void 0 : selectedMatch.missingRequiredInfo) !== null && _ref4 !== void 0 ? _ref4 : [];
    var _reportDraft_evidenceIds_length, _ref5;
    const evidenceCount = (_ref5 = (_reportDraft_evidenceIds_length = reportDraft === null || reportDraft === void 0 ? void 0 : (_reportDraft_evidenceIds = reportDraft.evidenceIds) === null || _reportDraft_evidenceIds === void 0 ? void 0 : _reportDraft_evidenceIds.length) !== null && _reportDraft_evidenceIds_length !== void 0 ? _reportDraft_evidenceIds_length : selectedDestination === null || selectedDestination === void 0 ? void 0 : (_selectedDestination_payloadPreview = selectedDestination.payloadPreview) === null || _selectedDestination_payloadPreview === void 0 ? void 0 : (_selectedDestination_payloadPreview_evidence = _selectedDestination_payloadPreview.evidence) === null || _selectedDestination_payloadPreview_evidence === void 0 ? void 0 : _selectedDestination_payloadPreview_evidence.length) !== null && _ref5 !== void 0 ? _ref5 : 0;
    const alternativeMatches = authorityMatches.filter((match)=>match.destinationId !== (selectedMatch === null || selectedMatch === void 0 ? void 0 : selectedMatch.destinationId)).slice(0, 4);
    const canSubmit = Boolean(backendReportId || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) && Boolean(selectedDestination) && !isLoadingDestinations && !latestSubmission && !missingRequiredInfo.length && !isSubmitting;
    const submitToDestination = async (destinationId)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
            const destination = destinationOptions.find((option)=>option.destinationId === destinationId);
            if (!destination) {
                setShareError("This mock recipient is not available anymore.");
                return;
            }
            const submission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMockSubmission"])({
                draft: reportDraft,
                destination,
                anonymityMode,
                notes: shareNotes.trim() || "Mock shared from SafeSpeak: ".concat(destination.destinationName)
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                reportId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportId"])(reportDraft),
                selectedDestinationId: destination.destinationId,
                latestSubmissionId: submission._id,
                preparedSubmission: {
                    destinationId: destination.destinationId,
                    destinationName: destination.destinationName,
                    destinationType: destination.destinationType,
                    channel: destination.channel,
                    status: toPreparedSubmissionStatus(submission.status),
                    missingRequiredInfo: destination.missingRequiredInfo,
                    reason: destination.reason,
                    message: submission.deliveryMessage,
                    actuallySent: submission.actuallySent,
                    updatedAt: new Date().toISOString()
                }
            });
            setLatestSubmission(submission);
            setReportStatus(submission.status);
            setShareError(null);
            setShareNotice(getShareNotice(submission));
            setPendingShareDestinationId(null);
            return;
        }
        if (!backendReportId) {
            setShareError("This draft needs a backend SafeSpeak report before it can be shared through the platform.");
            return;
        }
        const destination = destinationOptions.find((option)=>option.destinationId === destinationId);
        if (!destination) {
            setShareError("This recipient is not available from the admin-managed destination list anymore.");
            return;
        }
        if (destination.missingRequiredInfo.length) {
            setShareError("Review recipients first. This destination still needs: ".concat(destination.missingRequiredInfo.join(", "), "."));
            return;
        }
        setIsSubmitting(true);
        setShareError(null);
        setShareNotice(null);
        try {
            const submission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitReportToDestination"])(backendReportId, {
                destinationId,
                anonymityMode,
                notes: shareNotes.trim() || "Shared from SafeSpeak secure report sharing: ".concat(destination.destinationName),
                confirmConsent: true
            });
            setReportSubmissions((currentSubmissions)=>[
                    submission,
                    ...currentSubmissions.filter((item)=>item._id !== submission._id)
                ]);
            var _submission_actuallySent;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                selectedDestinationId: destination.destinationId,
                latestSubmissionId: submission._id,
                preparedSubmission: {
                    destinationId: destination.destinationId,
                    destinationName: destination.destinationName,
                    destinationType: destination.destinationType,
                    channel: destination.channel,
                    status: toPreparedSubmissionStatus(submission.status),
                    missingRequiredInfo: destination.missingRequiredInfo,
                    reason: destination.reason,
                    message: submission.deliveryMessage,
                    actuallySent: (_submission_actuallySent = submission.actuallySent) !== null && _submission_actuallySent !== void 0 ? _submission_actuallySent : isActualDeliveryStatus(submission.status),
                    updatedAt: new Date().toISOString()
                }
            });
            setLatestSubmission(submission);
            setReportStatus(submission.status);
            setShareNotice(getShareNotice(submission));
            setPendingShareDestinationId(null);
        } catch (error) {
            if (captureConsentError(error)) {
                setPendingShareDestinationId(destinationId);
                return;
            }
            setShareError(error instanceof Error ? error.message : "Sharing could not be completed.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleShareSelected = ()=>{
        if (!selectedDestination) {
            return;
        }
        if (isSubmitting) {
            return;
        }
        void submitToDestination(selectedDestination.destinationId);
    };
    const handleAllowSharingConsent = async ()=>{
        try {
            const consent = await grantPendingConsent();
            if (!consent || !pendingShareDestinationId) {
                return;
            }
            await submitToDestination(pendingShareDestinationId);
        } catch (error) {
            if (captureConsentError(error)) {
                return;
            }
            setShareError(error instanceof Error ? error.message : "Sharing consent could not be saved.");
        }
    };
    const handleDeclineSharingConsent = ()=>{
        setPendingShareDestinationId(null);
        clearPendingConsent();
        setShareError("No report was sent. The report remains ready for secure sharing.");
    };
    const deliveryReadinessCopy = getDeliveryReadinessCopy(selectedMatch);
    var _reportDraft_preparedSubmission_status;
    const preparedStatusLabel = getPreparedStatusLabel(latestSubmission ? toPreparedSubmissionStatus(latestSubmission.status) : (_reportDraft_preparedSubmission_status = reportDraft === null || reportDraft === void 0 ? void 0 : (_reportDraft_preparedSubmission = reportDraft.preparedSubmission) === null || _reportDraft_preparedSubmission === void 0 ? void 0 : _reportDraft_preparedSubmission.status) !== null && _reportDraft_preparedSubmission_status !== void 0 ? _reportDraft_preparedSubmission_status : "ready_to_share");
    var _latestSubmission_destinationName, _ref6, _ref7;
    const selectedRecipientName = (_ref7 = (_ref6 = (_latestSubmission_destinationName = latestSubmission === null || latestSubmission === void 0 ? void 0 : latestSubmission.destinationName) !== null && _latestSubmission_destinationName !== void 0 ? _latestSubmission_destinationName : selectedDestination === null || selectedDestination === void 0 ? void 0 : selectedDestination.destinationName) !== null && _ref6 !== void 0 ? _ref6 : selectedMatch === null || selectedMatch === void 0 ? void 0 : selectedMatch.destinationName) !== null && _ref7 !== void 0 ? _ref7 : "No recipient selected";
    var _reportDraft_preparedSubmission_message;
    const selectedRecipientMessage = latestSubmission ? getShareNotice(latestSubmission) : missingRequiredInfo.length ? "Review recipients first. This authority still needs: ".concat(missingRequiredInfo.join(", "), ".") : (_reportDraft_preparedSubmission_message = reportDraft === null || reportDraft === void 0 ? void 0 : (_reportDraft_preparedSubmission1 = reportDraft.preparedSubmission) === null || _reportDraft_preparedSubmission1 === void 0 ? void 0 : _reportDraft_preparedSubmission1.message) !== null && _reportDraft_preparedSubmission_message !== void 0 ? _reportDraft_preparedSubmission_message : "Recipient reviewed. Continue to secure sharing to confirm and send.";
    const readinessBadgeLabel = latestSubmission ? "Shared through SafeSpeak" : selectedDestination ? "Ready for secure sharing" : "Awaiting recipient selection";
    var _selectedDestination_destinationId, _ref8, _latestSubmission__id;
    const reviewHref = withTriageParam((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildReportFlowHref"])("reportsubmissionreview", {
        reportId: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId,
        selectedDestinationId: (_ref8 = (_selectedDestination_destinationId = selectedDestination === null || selectedDestination === void 0 ? void 0 : selectedDestination.destinationId) !== null && _selectedDestination_destinationId !== void 0 ? _selectedDestination_destinationId : selectedDestinationId) !== null && _ref8 !== void 0 ? _ref8 : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.selectedDestinationId,
        latestSubmissionId: (_latestSubmission__id = latestSubmission === null || latestSubmission === void 0 ? void 0 : latestSubmission._id) !== null && _latestSubmission__id !== void 0 ? _latestSubmission__id : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.latestSubmissionId
    }), fromTriage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$report$2d$submission$2d$pages$2f$report$2d$submission$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportSubmissionFrame"], {
        title: "Share report securely",
        subtitle: "Confirm the recommended authority, consent, and report package before SafeSpeak sends anything to an external department.",
        step: latestSubmission ? "done" : "share",
        skipSupportStep: !fromTriage,
        backHref: reviewHref,
        backLabel: "Review",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                    children: "SafeSpeak reference"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] font-bold text-[#1f2a3a]",
                                    children: reportRef !== null && reportRef !== void 0 ? reportRef : "No backend report yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                            lineNumber: 744,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                    children: "Current status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 753,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] font-bold text-[#1f2a3a]",
                                    children: reportStatus
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                            lineNumber: 752,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                    children: "Evidence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[13px] font-bold text-[#1f2a3a]",
                                    children: [
                                        evidenceCount,
                                        " item",
                                        evidenceCount === 1 ? "" : "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 764,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 743,
                    columnNumber: 11
                }, this),
                pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                        requirement: pendingConsentRequirement,
                        isSubmitting: isGrantingConsent || isSubmitting,
                        onAllow: ()=>{
                            void handleAllowSharingConsent();
                        },
                        onDecline: handleDeclineSharingConsent
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                        lineNumber: 772,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 771,
                    columnNumber: 13
                }, this) : null,
                shareError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-[12px] border border-[#fde2e2] bg-[#fff7f7] px-4 py-3 text-[11px] leading-[16px] text-[#b45353]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                size: 14,
                                className: "mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 786,
                                columnNumber: 17
                            }, this),
                            shareError
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                        lineNumber: 785,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 784,
                    columnNumber: 13
                }, this) : null,
                shareNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-[12px] border border-[#d7f3e4] bg-[#f3fbf7] px-4 py-3 text-[11px] leading-[16px] text-[#0b8b54]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldCheck$3e$__["IconShieldCheck"], {
                                size: 14,
                                className: "mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 795,
                                columnNumber: 17
                            }, this),
                            shareNotice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                        lineNumber: 794,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 793,
                    columnNumber: 13
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]",
                                    children: selectedMatch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap items-center justify-between gap-3 rounded-[14px] border border-[#cfe0f3] bg-[#f8fbff] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]",
                                                                children: "Primary recommendation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "mt-1 text-[20px] font-bold text-[#10243d]",
                                                                children: selectedMatch.destinationName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex h-8 items-center rounded-full bg-[#0f5d9f] px-3 text-[10px] font-bold text-white",
                                                        children: [
                                                            "Best match: ",
                                                            selectedMatch.confidence,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 806,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: selectedMatch.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex rounded-full border border-[#d6e4f4] bg-[#f8fbff] px-2.5 py-1 text-[10px] font-semibold text-[#526982]",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[12px] leading-[18px] text-[#60728a]",
                                                children: selectedMatch.reason
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 grid gap-3 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                                children: "Department type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDestinationType"])(selectedMatch.destinationType)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                                children: "Secure channel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatChannel"])(selectedMatch.channel)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                                children: "Jurisdiction"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                                children: selectedMatch.jurisdiction
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 856,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                                children: "Required info"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                                children: getRequiredInfoLabel(selectedMatch)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[12px] border border-[#e4edf7] bg-[#f8fbff] px-3 py-2 sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                                children: "Delivery readiness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                                children: ((_selectedMatch_deliveryReadiness = selectedMatch.deliveryReadiness) === null || _selectedMatch_deliveryReadiness === void 0 ? void 0 : _selectedMatch_deliveryReadiness.status) === "config_missing" ? "Needs partner setup" : ((_selectedMatch_deliveryReadiness1 = selectedMatch.deliveryReadiness) === null || _selectedMatch_deliveryReadiness1 === void 0 ? void 0 : _selectedMatch_deliveryReadiness1.status) === "manual_action" ? "Manual follow-up required" : "Automated channel ready"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 835,
                                                columnNumber: 21
                                            }, this),
                                            selectedMatch.contactPhone || selectedMatch.contactEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: [
                                                    selectedMatch.contactPhone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:".concat(selectedMatch.contactPhone.replace(/[^\d+]/g, "")),
                                                        className: "inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhone$3e$__["IconPhone"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 891,
                                                                columnNumber: 29
                                                            }, this),
                                                            "Call contact"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 27
                                                    }, this) : null,
                                                    selectedMatch.contactEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:".concat(selectedMatch.contactEmail),
                                                        className: "inline-flex h-9 items-center gap-1.5 rounded-full border border-[#dbe7f4] bg-white px-3 text-[10px] font-semibold text-[#526982]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 29
                                                            }, this),
                                                            "Email contact"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 23
                                            }, this) : null
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[12px] leading-[18px] text-[#60728a]",
                                        children: "No active admin-managed destination is available for this report yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 908,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 803,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[16px] border border-[#dbe7f4] bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                    children: "Other available matches"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard?view=reportsubmissionreview",
                                                    className: "text-[10px] font-semibold text-[#0f5d9f]",
                                                    children: "Review recipients"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 grid gap-2 md:grid-cols-2",
                                            children: alternativeMatches.length ? alternativeMatches.map((match)=>{
                                                const isSelected = match.destinationId === (selectedMatch === null || selectedMatch === void 0 ? void 0 : selectedMatch.destinationId);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setSelectedDestinationId(match.destinationId);
                                                        setShareError(null);
                                                    },
                                                    className: "rounded-[12px] border p-3 text-left transition ".concat(isSelected ? "border-[#0f5d9f] bg-[#eef6ff]" : "border-[#e2ebf5] bg-white hover:bg-[#f8fbff]"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-start justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-bold leading-[15px] text-[#1f2a3a]",
                                                                    children: match.destinationName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 29
                                                                }, this),
                                                                isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0f5d9f] text-white",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                        lineNumber: 953,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 31
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 block text-[9px] font-semibold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$authority$2d$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDestinationType"])(match.destinationType),
                                                                " -",
                                                                " ",
                                                                match.confidence,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 957,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, match.destinationId, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 934,
                                                    columnNumber: 25
                                                }, this);
                                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[12px] border border-[#e2ebf5] bg-white p-3 text-[10px] leading-[16px] text-[#60728a] md:col-span-2",
                                                children: "Admin-managed police, legal, eSafety, and support destinations will appear here when available."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 927,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 915,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                            lineNumber: 802,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[16px] border border-[#dbe7f4] bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Selected recipient"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 976,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "mt-2 text-lg font-bold text-[#1f2a3a]",
                                            children: selectedRecipientName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-xs text-[#60728a]",
                                            children: [
                                                "Status: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-[#0f5d9f]",
                                                    children: preparedStatusLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 983,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 982,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs leading-[1.6] text-[#60728a]",
                                            children: selectedRecipientMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 985,
                                            columnNumber: 17
                                        }, this),
                                        !latestSubmission && deliveryReadinessCopy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 rounded-[10px] border border-[#dbe7f4] bg-[#f8fbff] px-3 py-2 text-xs leading-[1.5] text-[#526982]",
                                            children: deliveryReadinessCopy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 989,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 975,
                                    columnNumber: 15
                                }, this),
                                !latestSubmission ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[16px] border border-[#dbe7f4] bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3] mb-3",
                                            children: "Sharing options"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 997,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-[#526982]",
                                                            children: "Identity mode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: anonymityMode,
                                                            onChange: (event)=>setAnonymityMode(event.target.value),
                                                            className: "h-10 w-full rounded-[10px] border border-[#dce5f1] bg-white px-3 text-xs font-medium text-[#1f2a3a] outline-none transition focus:border-[#0f5d9f] focus:ring-1 focus:ring-[#0f5d9f]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "identified",
                                                                    children: "Identified (Name & contact info shared)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                    lineNumber: 1017,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "anonymous",
                                                                    children: "Anonymous (No identity details shared)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                    lineNumber: 1018,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pseudonymous",
                                                                    children: "Pseudonymous (Use SafeSpeak alias)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                    lineNumber: 1019,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-[#526982]",
                                                            children: "Submission notes (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 1024,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: shareNotes,
                                                            onChange: (event)=>setShareNotes(event.target.value),
                                                            placeholder: "Add a routing note or specific request...",
                                                            rows: 3,
                                                            className: "w-full resize-none rounded-[10px] border border-[#dce5f1] bg-white px-3 py-2 text-xs text-[#1f2a3a] outline-none transition focus:border-[#0f5d9f] focus:ring-1 focus:ring-[#0f5d9f] placeholder:text-[#9eb0c7]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 996,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "overflow-hidden rounded-[16px] border border-[#dbe7f4] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col divide-y divide-[#edf2f8]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleShareSelected,
                                                        disabled: !canSubmit,
                                                        className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#ff8f00] px-5 text-xs font-bold text-white shadow-[0_10px_22px_rgba(255,143,0,0.28)] transition hover:bg-[#ec8200] disabled:cursor-not-allowed disabled:bg-[#ffd39b] disabled:text-white/80",
                                                        children: [
                                                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                                size: 14,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShare$3e$__["IconShare"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Share report securely"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: reviewHref,
                                                        className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[#dbe7f4] bg-white px-5 text-xs font-bold text-[#526982] transition hover:bg-[#f8fbff]",
                                                        children: [
                                                            "Review recipients",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 1061,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1041,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between bg-[#f8fbff] px-5 py-3 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard?view=reportsubmissionhistory",
                                                        className: "inline-flex items-center gap-1.5 font-semibold text-[#ff8f00] hover:underline",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 1070,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Save to History"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 font-semibold text-[#9a5b12]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBoltFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBoltFilled$3e$__["IconBoltFilled"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 23
                                                            }, this),
                                                            readinessBadgeLabel
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 1040,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                            lineNumber: 974,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 801,
                    columnNumber: 11
                }, this),
                isSharePreviewVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[120] flex items-center justify-center bg-[#0f172a]/30 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[640px] rounded-[20px] border border-[#dbe7f4] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.24)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f5d9f]",
                                children: "Share preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 1087,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mt-2 text-[24px] font-bold text-[#1f2a3a]",
                                children: "Nothing will be sent yet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 1090,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[12px] leading-[1.6] text-[#60728a]",
                                children: "This popup only previews what would be shared. No external service has been contacted and no submission has been recorded."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 1093,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid gap-3 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "Recipient"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[12px] font-semibold text-[#1f2a3a]",
                                                children: selectedRecipientName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 1100,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "Evidence included"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[12px] font-semibold text-[#1f2a3a]",
                                                children: [
                                                    evidenceCount,
                                                    " item",
                                                    evidenceCount === 1 ? "" : "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "Identity mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1117,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[12px] font-semibold text-[#1f2a3a]",
                                                children: anonymityMode.charAt(0).toUpperCase() + anonymityMode.slice(1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1120,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 1116,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "Submission notes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[12px] text-[#526982]",
                                                children: shareNotes.trim() || "No submission notes added."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                                lineNumber: 1129,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 1099,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSharePreviewVisible(false),
                                    className: "inline-flex h-11 items-center justify-center rounded-full border border-[#dbe7f4] bg-white px-5 text-[12px] font-bold text-[#526982] transition hover:bg-[#f8fbff]",
                                    children: "Close preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                    lineNumber: 1136,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                                lineNumber: 1135,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                        lineNumber: 1086,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
                    lineNumber: 1085,
                    columnNumber: 13
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
            lineNumber: 741,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx",
        lineNumber: 733,
        columnNumber: 5
    }, this);
}
_s(ReportSubmissionSharePage, "cCJQqujeoaHZJsVM058+s78gAOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$consent$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsentGate"]
    ];
});
_c = ReportSubmissionSharePage;
;
var _c;
__turbopack_context__.k.register(_c, "ReportSubmissionSharePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-share-page.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_a57cc6b9._.js.map