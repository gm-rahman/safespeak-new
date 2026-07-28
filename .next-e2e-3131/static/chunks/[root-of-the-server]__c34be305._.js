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
"[project]/src/lib/media-assets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaAssetImageUrl",
    ()=>getMediaAssetImageUrl,
    "listPublishedMediaAssets",
    ()=>listPublishedMediaAssets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
async function listPublishedMediaAssets(category) {
    const params = new URLSearchParams();
    if (category) {
        params.set("category", category);
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/media-assets".concat(params.size ? "?".concat(params.toString()) : ""));
    return response.data.assets;
}
function getMediaAssetImageUrl(asset) {
    return "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()).concat(asset.imagePath);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/scamshield-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeScamEmail",
    ()=>analyzeScamEmail,
    "analyzeScamScreenshot",
    ()=>analyzeScamScreenshot,
    "analyzeScamText",
    ()=>analyzeScamText,
    "checkScamUrl",
    ()=>checkScamUrl,
    "generateScamReportDraft",
    ()=>generateScamReportDraft,
    "generateScamReportDraftLegacy",
    ()=>generateScamReportDraftLegacy,
    "getScamAnalysis",
    ()=>getScamAnalysis,
    "redactScamContent",
    ()=>redactScamContent,
    "submitScamReport",
    ()=>submitScamReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
async function analyzeScamText(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].scamAnalysis, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/analyze-text", {
        method: "POST",
        headers,
        body: input
    });
    return response.data.analysis;
}
async function analyzeScamEmail(input) {
    const requestHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].scamAnalysis, requestHeaders);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/analyze-email", {
        method: "POST",
        headers: requestHeaders,
        body: input
    });
    return response.data.analysis;
}
async function analyzeScamScreenshot(input) {
    var _input_evidenceFiles;
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].scamAnalysis, headers);
    const files = ((_input_evidenceFiles = input.evidenceFiles) === null || _input_evidenceFiles === void 0 ? void 0 : _input_evidenceFiles.length) ? input.evidenceFiles : input.imageFile ? [
        input.imageFile
    ] : [];
    const body = typeof File !== "undefined" && files.length > 0 ? (()=>{
        const formData = new FormData();
        files.forEach((file)=>{
            formData.append("files", file, file.name);
        });
        if (input.imageText) {
            formData.set("imageText", input.imageText);
        }
        if (input.evidenceId) {
            formData.set("evidenceId", input.evidenceId);
        }
        if (input.reportId) {
            formData.set("reportId", input.reportId);
        }
        formData.set("metadata", JSON.stringify({
            ...input.metadata,
            files: files.map((file)=>({
                    fileName: file.name,
                    mimeType: file.type,
                    size: file.size
                }))
        }));
        return formData;
    })() : {
        imageText: input.imageText,
        evidenceId: input.evidenceId,
        reportId: input.reportId,
        metadata: input.metadata
    };
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/analyze-screenshot", {
        method: "POST",
        headers,
        body
    });
    return response.data.analysis;
}
async function checkScamUrl(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].scamAnalysis, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/check-url", {
        method: "POST",
        headers,
        body: input
    });
    return response.data.analysis;
}
async function generateScamReportDraft(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = input.analysisId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/".concat(input.analysisId, "/generate-report-draft"), {
        method: "POST",
        headers,
        body: {
            notes: input.notes,
            autoRedactPII: input.autoRedactPII,
            redactionMode: input.redactionMode
        }
    }) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/generate-report-draft", {
        method: "POST",
        headers,
        body: {
            analysisSnapshot: input.analysisSnapshot,
            notes: input.notes,
            autoRedactPII: input.autoRedactPII,
            redactionMode: input.redactionMode
        }
    });
    return response.data.analysis;
}
async function generateScamReportDraftLegacy(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/generate-report-draft", {
        method: "POST",
        headers,
        body: input
    });
    return response.data.analysis;
}
async function redactScamContent(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].scamAnalysis, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/redact", {
        method: "POST",
        headers,
        body: {
            text: input.text,
            replacement: input.replacement
        }
    });
    return response.data.result;
}
async function submitScamReport(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].shareWithAgencies, headers);
    const response = input.analysisId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/".concat(input.analysisId, "/submit"), {
        method: "POST",
        headers,
        body: {
            destination: input.destination,
            consentToShare: input.consentToShare
        }
    }) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/submit", {
        method: "POST",
        headers,
        body: {
            analysisSnapshot: input.analysisSnapshot,
            destination: input.destination,
            consentToShare: input.consentToShare
        }
    });
    return response.data.analysis;
}
async function getScamAnalysis(analysisId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/scamshield/".concat(analysisId), {
        headers
    });
    return response.data.analysis;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/scamshield-flow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearScamShieldFlowState",
    ()=>clearScamShieldFlowState,
    "getScamShieldFlowState",
    ()=>getScamShieldFlowState,
    "mergeScamShieldFlowState",
    ()=>mergeScamShieldFlowState,
    "saveScamShieldFlowState",
    ()=>saveScamShieldFlowState,
    "useScamShieldFlowState",
    ()=>useScamShieldFlowState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const SCAMSHIELD_FLOW_KEY = "safespeak_scamshield_flow";
const SCAMSHIELD_FLOW_EVENT = "safespeak:scamshield-flow-updated";
function getScamShieldFlowState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.sessionStorage.getItem(SCAMSHIELD_FLOW_KEY);
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        window.sessionStorage.removeItem(SCAMSHIELD_FLOW_KEY);
        return null;
    }
}
function saveScamShieldFlowState(state) {
    const nextState = {
        ...state,
        updatedAt: new Date().toISOString()
    };
    if ("TURBOPACK compile-time truthy", 1) {
        window.sessionStorage.setItem(SCAMSHIELD_FLOW_KEY, JSON.stringify(nextState));
        window.dispatchEvent(new CustomEvent(SCAMSHIELD_FLOW_EVENT));
    }
    return nextState;
}
function mergeScamShieldFlowState(state) {
    const currentState = getScamShieldFlowState();
    var _state_inputText, _ref, _state_inputMode, _ref1, _state_analysis, _state_reportDraft, _state_submitted, _state_selectedAgency;
    return saveScamShieldFlowState({
        inputText: (_ref = (_state_inputText = state.inputText) !== null && _state_inputText !== void 0 ? _state_inputText : currentState === null || currentState === void 0 ? void 0 : currentState.inputText) !== null && _ref !== void 0 ? _ref : "",
        inputMode: (_ref1 = (_state_inputMode = state.inputMode) !== null && _state_inputMode !== void 0 ? _state_inputMode : currentState === null || currentState === void 0 ? void 0 : currentState.inputMode) !== null && _ref1 !== void 0 ? _ref1 : "text",
        analysis: (_state_analysis = state.analysis) !== null && _state_analysis !== void 0 ? _state_analysis : currentState === null || currentState === void 0 ? void 0 : currentState.analysis,
        reportDraft: (_state_reportDraft = state.reportDraft) !== null && _state_reportDraft !== void 0 ? _state_reportDraft : currentState === null || currentState === void 0 ? void 0 : currentState.reportDraft,
        submitted: (_state_submitted = state.submitted) !== null && _state_submitted !== void 0 ? _state_submitted : currentState === null || currentState === void 0 ? void 0 : currentState.submitted,
        selectedAgency: (_state_selectedAgency = state.selectedAgency) !== null && _state_selectedAgency !== void 0 ? _state_selectedAgency : currentState === null || currentState === void 0 ? void 0 : currentState.selectedAgency
    });
}
function clearScamShieldFlowState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.sessionStorage.removeItem(SCAMSHIELD_FLOW_KEY);
    window.dispatchEvent(new CustomEvent(SCAMSHIELD_FLOW_EVENT));
}
function useScamShieldFlowState() {
    _s();
    const [flowState, setFlowState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScamShieldFlowState.useEffect": ()=>{
            const syncState = {
                "useScamShieldFlowState.useEffect.syncState": ()=>{
                    setFlowState(getScamShieldFlowState());
                }
            }["useScamShieldFlowState.useEffect.syncState"];
            syncState();
            window.addEventListener("storage", syncState);
            window.addEventListener(SCAMSHIELD_FLOW_EVENT, syncState);
            return ({
                "useScamShieldFlowState.useEffect": ()=>{
                    window.removeEventListener("storage", syncState);
                    window.removeEventListener(SCAMSHIELD_FLOW_EVENT, syncState);
                }
            })["useScamShieldFlowState.useEffect"];
        }
    }["useScamShieldFlowState.useEffect"], []);
    return flowState;
}
_s(useScamShieldFlowState, "dgcxcddvd6v8joDynC7PisMkB4E=");
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
"[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScamShieldAgencyPage",
    ()=>ScamShieldAgencyPage,
    "ScamShieldAssetsPage",
    ()=>ScamShieldAssetsPage,
    "ScamShieldIntakePage",
    ()=>ScamShieldIntakePage,
    "ScamShieldRiskPage",
    ()=>ScamShieldRiskPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertTriangle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs [app-client] (ecmascript) <export default as IconAlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconBuildingBank.mjs [app-client] (ecmascript) <export default as IconBuildingBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconDownload.mjs [app-client] (ecmascript) <export default as IconDownload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript) <export default as IconExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderFilled.mjs [app-client] (ecmascript) <export default as IconFolderFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGavel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGavel$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconGavel.mjs [app-client] (ecmascript) <export default as IconGavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldFilled.mjs [app-client] (ecmascript) <export default as IconShieldFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media-assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scamshield-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scamshield-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-shared.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-client] (ecmascript) <export default as interFont>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
const SCAM_SHIELD_MEDIA_ASSET_CATEGORY = "Cybersecurity";
const SCAM_SHIELD_EVIDENCE_ACCEPT = "image/*,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const SCAM_SHIELD_ALLOWED_EVIDENCE_EXTENSIONS = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".pdf",
    ".doc",
    ".docx"
]);
const SCAM_SHIELD_ALLOWED_EVIDENCE_MIME_TYPES = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
]);
function getEvidenceFileKey(file) {
    return "".concat(file.name, "-").concat(file.size, "-").concat(file.lastModified);
}
function getEvidenceFileExtension(fileName) {
    var _fileName_toLowerCase_match;
    var _fileName_toLowerCase_match_;
    return (_fileName_toLowerCase_match_ = (_fileName_toLowerCase_match = fileName.toLowerCase().match(/\.[^.]+$/)) === null || _fileName_toLowerCase_match === void 0 ? void 0 : _fileName_toLowerCase_match[0]) !== null && _fileName_toLowerCase_match_ !== void 0 ? _fileName_toLowerCase_match_ : "";
}
function isSupportedScamShieldEvidenceFile(file) {
    return file.type.startsWith("image/") || SCAM_SHIELD_ALLOWED_EVIDENCE_MIME_TYPES.has(file.type) || SCAM_SHIELD_ALLOWED_EVIDENCE_EXTENSIONS.has(getEvidenceFileExtension(file.name));
}
function formatEvidenceFileSize(size) {
    if (size < 1024) {
        return "".concat(size, " B");
    }
    if (size < 1024 * 1024) {
        return "".concat(Math.round(size / 102.4) / 10, " KB");
    }
    return "".concat(Math.round(size / 1024 / 1024 * 10) / 10, " MB");
}
function normalizeScamShieldUrlInput(value) {
    const trimmedValue = value.trim();
    if (/^https?:\/\//i.test(trimmedValue)) {
        return trimmedValue;
    }
    return "https://".concat(trimmedValue);
}
function isValidScamShieldUrl(value) {
    try {
        const url = new URL(normalizeScamShieldUrlInput(value));
        return Boolean(url.hostname.includes("."));
    } catch (e) {
        return false;
    }
}
function getDraftReportValue(draftReport, key, fallback) {
    const value = draftReport === null || draftReport === void 0 ? void 0 : draftReport[key];
    return typeof value === "string" && value.trim() ? value : fallback;
}
function getRecord(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : undefined;
}
function getStringArray(value) {
    return Array.isArray(value) ? value.filter((item)=>typeof item === "string") : [];
}
function includesAnyText(value, patterns) {
    const normalizedValue = value.toLowerCase();
    return patterns.some((pattern)=>normalizedValue.includes(pattern));
}
function downloadTextFile(fileName, content) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const blob = new Blob([
        content
    ], {
        type: "text/plain;charset=utf-8"
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    window.URL.revokeObjectURL(url);
}
function parseEmailHeadersInput(raw) {
    const lines = raw.split(/\r?\n/).map((line)=>line.trim()).filter(Boolean);
    if (!lines.length) {
        return undefined;
    }
    const headers = {};
    lines.forEach((line)=>{
        const separatorIndex = line.indexOf(":");
        if (separatorIndex <= 0) {
            headers["Authentication-Results"] = [
                headers["Authentication-Results"],
                line
            ].filter(Boolean).join("; ");
            return;
        }
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        if (!key || !value) {
            return;
        }
        headers[key] = headers[key] ? "".concat(headers[key], "; ").concat(value) : value;
    });
    return Object.keys(headers).length ? headers : undefined;
}
function ScamShieldIntakePage(param) {
    let { initialTopic } = param;
    _s();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const existingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScamShieldFlowState"])();
    const evidenceFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _existingState_inputText;
    const [messageContent, setMessageContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_existingState_inputText = existingState === null || existingState === void 0 ? void 0 : existingState.inputText) !== null && _existingState_inputText !== void 0 ? _existingState_inputText : "");
    var _existingState_inputMode;
    const [inputMode, setInputMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_existingState_inputMode = existingState === null || existingState === void 0 ? void 0 : existingState.inputMode) !== null && _existingState_inputMode !== void 0 ? _existingState_inputMode : "text");
    const [intakeError, setIntakeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailSubject, setEmailSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailFrom, setEmailFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailHeaders, setEmailHeaders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedEvidenceFiles, setSelectedEvidenceFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [evidencePreviewUrls, setEvidencePreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [pendingConsentRequirement, setPendingConsentRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGrantingConsent, setIsGrantingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const readyItemCount = selectedEvidenceFiles.length + (messageContent.trim() ? 1 : 0);
    const hasAnalyzableInput = inputMode === "screenshot" ? selectedEvidenceFiles.length > 0 || Boolean(messageContent.trim()) : Boolean(messageContent.trim());
    const isAnalyzeDisabled = isAnalyzing || isGrantingConsent || !hasAnalyzableInput;
    const attachEvidenceFiles = (files)=>{
        const incomingFiles = Array.from(files);
        if (!incomingFiles.length) {
            return;
        }
        const supportedFiles = incomingFiles.filter(isSupportedScamShieldEvidenceFile);
        const unsupportedFiles = incomingFiles.filter((file)=>!isSupportedScamShieldEvidenceFile(file));
        if (unsupportedFiles.length) {
            setIntakeError("Unsupported file type: ".concat(unsupportedFiles.map((file)=>file.name).join(", "), ". Upload images, screenshots, PDFs, or Word documents."));
        } else {
            setIntakeError(null);
        }
        if (!supportedFiles.length) {
            return;
        }
        setSelectedEvidenceFiles((currentFiles)=>{
            const existingKeys = new Set(currentFiles.map(getEvidenceFileKey));
            const nextFiles = supportedFiles.filter((file)=>!existingKeys.has(getEvidenceFileKey(file)));
            return [
                ...currentFiles,
                ...nextFiles
            ];
        });
        setInputMode("screenshot");
    };
    const removeEvidenceFile = (fileKey)=>{
        setSelectedEvidenceFiles((currentFiles)=>currentFiles.filter((file)=>getEvidenceFileKey(file) !== fileKey));
    };
    const runAnalysis = async ()=>{
        const trimmedInput = messageContent.trim();
        const normalizedUrl = inputMode === "url" ? normalizeScamShieldUrlInput(trimmedInput) : trimmedInput;
        if (inputMode === "screenshot" && !selectedEvidenceFiles.length && !trimmedInput) {
            setIntakeError("Select evidence files or paste the visible message text before analysis.");
            return;
        }
        if (inputMode !== "screenshot" && !trimmedInput) {
            setIntakeError("Add suspicious text, a URL, or an email body before analysis.");
            return;
        }
        if (inputMode === "url" && !isValidScamShieldUrl(trimmedInput)) {
            setIntakeError("Enter a complete URL or domain, such as https://example.com.");
            return;
        }
        setIsAnalyzing(true);
        setIntakeError(null);
        try {
            const analysis = inputMode === "url" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkScamUrl"])({
                url: normalizedUrl
            }) : inputMode === "email" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeScamEmail"])({
                body: trimmedInput,
                subject: emailSubject.trim() || undefined,
                from: emailFrom.trim() || undefined,
                headers: parseEmailHeadersInput(emailHeaders),
                forwardedWithPermission: Boolean(emailHeaders.trim()),
                metadata: {
                    language: i18n.language
                }
            }) : inputMode === "screenshot" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeScamScreenshot"])({
                imageText: trimmedInput || undefined,
                evidenceFiles: selectedEvidenceFiles,
                metadata: {
                    language: i18n.language
                }
            }) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeScamText"])({
                text: trimmedInput,
                language: i18n.language || "en"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScamShieldFlowState"])({
                inputText: inputMode === "url" ? normalizedUrl : trimmedInput,
                inputMode,
                analysis
            });
            router.push("/dashboard?view=scamshieldrisk");
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingConsentRequirement(error.requirement);
                return;
            }
            setIntakeError(error instanceof Error ? error.message : "Scam analysis could not be completed.");
        } finally{
            setIsAnalyzing(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScamShieldIntakePage.useEffect": ()=>{
            const previewEntries = selectedEvidenceFiles.filter({
                "ScamShieldIntakePage.useEffect.previewEntries": (file)=>file.type.startsWith("image/")
            }["ScamShieldIntakePage.useEffect.previewEntries"]).map({
                "ScamShieldIntakePage.useEffect.previewEntries": (file)=>[
                        getEvidenceFileKey(file),
                        URL.createObjectURL(file)
                    ]
            }["ScamShieldIntakePage.useEffect.previewEntries"]);
            const nextPreviewUrls = Object.fromEntries(previewEntries);
            setEvidencePreviewUrls(nextPreviewUrls);
            return ({
                "ScamShieldIntakePage.useEffect": ()=>{
                    previewEntries.forEach({
                        "ScamShieldIntakePage.useEffect": (param)=>{
                            let [, previewUrl] = param;
                            URL.revokeObjectURL(previewUrl);
                        }
                    }["ScamShieldIntakePage.useEffect"]);
                }
            })["ScamShieldIntakePage.useEffect"];
        }
    }["ScamShieldIntakePage.useEffect"], [
        selectedEvidenceFiles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard?view=reportsubmissiondetails",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.scamShield.analyzeMessage")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 overflow-hidden rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] shadow-[0_10px_24px_rgba(15,23,42,0.04)]",
                    children: [
                        initialTopic === "cyber_scam" || initialTopic === "scamshield" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[#e2eaf5] bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#3f7de0]",
                                    children: "Cyber scam context"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] leading-[1.55] text-[#60728a]",
                                    children: "Paste suspicious text, upload a screenshot, or continue to the next step to review scam risk indicators."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-3 p-3 sm:p-4 lg:grid-cols-[1fr_1fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[14px] border border-[#e2eaf4] bg-white p-3 sm:p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex flex-wrap gap-2",
                                            children: [
                                                [
                                                    "text",
                                                    "Paste text"
                                                ],
                                                [
                                                    "url",
                                                    "Check URL"
                                                ],
                                                [
                                                    "email",
                                                    "Analyze email"
                                                ],
                                                [
                                                    "screenshot",
                                                    "File upload"
                                                ]
                                            ].map((param)=>{
                                                let [mode, label] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setInputMode(mode),
                                                    className: "inline-flex h-8 items-center rounded-full px-3 text-[10px] font-bold ".concat(inputMode === mode ? "bg-[#0f5d9f] text-white" : "bg-[#f4f7fb] text-[#60728a]"),
                                                    children: label
                                                }, mode, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "scam-message-content",
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#6f88a8]",
                                            children: inputMode === "screenshot" ? "Visible text or file text correction" : t("dashboard.scamShield.messageContent")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        inputMode === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: emailFrom,
                                                    onChange: (event)=>setEmailFrom(event.target.value),
                                                    placeholder: "Visible sender, for example alerts@bank.example",
                                                    className: "h-10 rounded-[11px] border border-[#dbe4ef] bg-[#f8fbff] px-3 text-[11px] text-[#1f2a3a] outline-none placeholder:text-[#9aabc0]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: emailSubject,
                                                    onChange: (event)=>setEmailSubject(event.target.value),
                                                    placeholder: "Email subject",
                                                    className: "h-10 rounded-[11px] border border-[#dbe4ef] bg-[#f8fbff] px-3 text-[11px] text-[#1f2a3a] outline-none placeholder:text-[#9aabc0]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: emailHeaders,
                                                    onChange: (event)=>setEmailHeaders(event.target.value),
                                                    rows: 3,
                                                    placeholder: "Optional: paste Authentication-Results, Reply-To, Return-Path, or forwarded header lines you have permission to share.",
                                                    className: "sm:col-span-2 rounded-[11px] border border-[#dbe4ef] bg-[#f8fbff] px-3 py-2 text-[11px] leading-[1.5] text-[#1f2a3a] outline-none placeholder:text-[#9aabc0]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 472,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "scam-message-content",
                                                    rows: 15,
                                                    value: messageContent,
                                                    onChange: (event)=>setMessageContent(event.target.value),
                                                    placeholder: inputMode === "url" ? "https://example.com/suspicious-link" : inputMode === "email" ? "Paste the email body and any sender details you want checked." : inputMode === "screenshot" ? "Optional: paste visible text if OCR or document extraction misses anything." : t("dashboard.scamShield.messageContentPlaceholder"),
                                                    className: "min-h-[340px] w-full resize-none rounded-[11px] border border-[#dbe4ef] bg-[#f8fbff] px-3 py-3 text-xs leading-[1.6] text-[#1f2a3a] outline-none placeholder:text-[#9aabc0]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 right-2 flex items-center gap-1 text-[#9db0c8]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#d8e2ee] bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#d8e2ee] bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "space-y-3",
                                    children: [
                                        intakeError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]",
                                            children: intakeError
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-[14px] border border-[#e2eaf4] bg-white p-4 text-center",
                                            onDragOver: (event)=>{
                                                event.preventDefault();
                                            },
                                            onDrop: (event)=>{
                                                event.preventDefault();
                                                attachEvidenceFiles(event.dataTransfer.files);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ecf4ff] text-[#0f5d9f]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 text-xl font-bold leading-[1.1] text-[#1f2a3a]",
                                                    children: t("dashboard.scamShield.uploadScreenshotTitle")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mx-auto mt-1 max-w-[250px] text-xs leading-[1.5] text-[#7f90a6]",
                                                    children: t("dashboard.scamShield.uploadScreenshotDescription")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-3 inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 19
                                                        }, this),
                                                        t("dashboard.scamShield.selectFiles"),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: evidenceFileInputRef,
                                                            type: "file",
                                                            multiple: true,
                                                            accept: SCAM_SHIELD_EVIDENCE_ACCEPT,
                                                            className: "sr-only",
                                                            onChange: (event)=>{
                                                                if (event.target.files) {
                                                                    attachEvidenceFiles(event.target.files);
                                                                }
                                                                event.target.value = "";
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, this),
                                                selectedEvidenceFiles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-[10px] border border-[#dce5f1] bg-[#f8fbff] px-3 py-2 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-[11px] font-bold text-[#1f2a3a]",
                                                            children: [
                                                                selectedEvidenceFiles.length,
                                                                " evidence file",
                                                                selectedEvidenceFiles.length === 1 ? "" : "s",
                                                                " attached"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-[9px] text-[#7f90a6]",
                                                            children: "Images use OCR. PDFs and Word documents are parsed for scam text."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-[14px] border border-[#e2eaf4] bg-white p-3 sm:p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7f90a6]",
                                                    children: t("dashboard.scamShield.attachedEvidence")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                                                    children: [
                                                        selectedEvidenceFiles.map((file)=>{
                                                            const fileKey = getEvidenceFileKey(file);
                                                            const previewUrl = evidencePreviewUrls[fileKey];
                                                            const extension = getEvidenceFileExtension(file.name).replace(".", "").toUpperCase();
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                                className: "relative min-h-[100px] rounded-[10px] border border-[#e2eaf4] bg-[#f2f5f9] p-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeEvidenceFile(fileKey),
                                                                        className: "absolute -right-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f05151] text-white",
                                                                        "aria-label": "Remove ".concat(file.name),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                                                            size: 9
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 602,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: previewUrl,
                                                                        alt: "",
                                                                        className: "mx-auto h-[58px] w-full rounded-[7px] object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 605,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid h-[58px] place-items-center rounded-[7px] bg-white text-[#0f5d9f]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 truncate text-[9px] font-bold text-[#1f2a3a]",
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 615,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-semibold text-[#8ea2bf]",
                                                                        children: [
                                                                            extension || "FILE",
                                                                            " -",
                                                                            " ",
                                                                            formatEvidenceFileSize(file.size)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 618,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, fileKey, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, this);
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                var _evidenceFileInputRef_current;
                                                                return (_evidenceFileInputRef_current = evidenceFileInputRef.current) === null || _evidenceFileInputRef_current === void 0 ? void 0 : _evidenceFileInputRef_current.click();
                                                            },
                                                            className: "grid min-h-[100px] place-items-center rounded-[10px] border border-dashed border-[#c4d2e6] bg-[#f8fbff] text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mx-auto inline-flex h-5 w-5 items-center justify-center text-[#8ea2bf]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[9px] font-semibold text-[#8ea2bf]",
                                                                        children: t("dashboard.scamShield.addMore")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 579,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pb-3 sm:px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                                requirement: pendingConsentRequirement,
                                isSubmitting: isGrantingConsent,
                                onAllow: ()=>{
                                    void (async ()=>{
                                        setIsGrantingConsent(true);
                                        try {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grantConsent"])({
                                                process_with_ai: true
                                            }, pendingConsentRequirement.source);
                                            setPendingConsentRequirement(null);
                                            await runAnalysis();
                                        } catch (error) {
                                            setIntakeError(error instanceof Error ? error.message : "Consent could not be saved.");
                                        } finally{
                                            setIsGrantingConsent(false);
                                        }
                                    })();
                                },
                                onDecline: ()=>{
                                    setPendingConsentRequirement(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 647,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 border-t border-[#e2eaf5] bg-white px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-medium text-[#6c7f96]",
                                    children: readyItemCount ? "".concat(readyItemCount, " item").concat(readyItemCount === 1 ? "" : "s", " ready for analysis") : "Add text or evidence files to start analysis"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 680,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isAnalyzeDisabled,
                                    onClick: ()=>{
                                        void runAnalysis();
                                    },
                                    className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-7 text-[11px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_8px_18px_rgba(255,153,0,0.33)] ".concat(isAnalyzeDisabled ? "cursor-not-allowed bg-[#f5c779] opacity-70" : "bg-[#ff9900]"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 697,
                                            columnNumber: 15
                                        }, this),
                                        isAnalyzing ? "Analyzing..." : t("dashboard.scamShield.analyzeNow")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
            lineNumber: 406,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
_s(ScamShieldIntakePage, "nwHM04N8Anqi8PItUYdLrqT+EiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ScamShieldIntakePage;
function ScamShieldRiskPage() {
    var _analysis_redFlags, _analysis_indicators, _analysis_recommendations, _analysis_metadata, _analysis_metadata1, _analysis_metadata2, _analysis_metadata3, _analysis_metadata4;
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const flowState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"])();
    const analysis = flowState === null || flowState === void 0 ? void 0 : flowState.analysis;
    if (!analysis) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-[1184px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard?view=scamshieldintake",
                                className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 723,
                                        columnNumber: 15
                                    }, this),
                                    t("dashboard.scamShield.scamRiskResults")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 719,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: "text-xs font-medium text-[#7b8798]",
                                children: t("common.cancel")
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 726,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                        lineNumber: 718,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "mt-3 rounded-[16px] border border-[#dce5f1] bg-white px-4 py-8 text-center shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ecf4ff] text-[#0f5d9f]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 735,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-xl font-bold text-[#1f2a3a]",
                                children: "Run a ScamShield analysis first"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-2 max-w-[520px] text-xs leading-[1.55] text-[#61748f]",
                                children: "Paste a message, check a URL, analyze an email, or upload evidence so ScamShield can produce real risk results for this session."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 741,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard?view=scamshieldintake",
                                className: "mt-4 inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#0f5d9f] px-6 text-[11px] font-semibold text-white",
                                children: [
                                    "Start analysis",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                        lineNumber: 734,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                lineNumber: 717,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
            lineNumber: 716,
            columnNumber: 7
        }, this);
    }
    var _analysis_riskScore;
    const riskScore = Math.round(Math.max(0, Math.min(100, (_analysis_riskScore = analysis.riskScore) !== null && _analysis_riskScore !== void 0 ? _analysis_riskScore : 0)) * 100) / 100;
    var _analysis_riskLevel;
    const riskLevel = (_analysis_riskLevel = analysis.riskLevel) !== null && _analysis_riskLevel !== void 0 ? _analysis_riskLevel : "low";
    var _analysis_confidence;
    const confidence = (_analysis_confidence = analysis.confidence) !== null && _analysis_confidence !== void 0 ? _analysis_confidence : "rule-based";
    const redFlags = ((_analysis_redFlags = analysis.redFlags) === null || _analysis_redFlags === void 0 ? void 0 : _analysis_redFlags.length) ? analysis.redFlags : ((_analysis_indicators = analysis.indicators) === null || _analysis_indicators === void 0 ? void 0 : _analysis_indicators.length) ? analysis.indicators : [];
    const recommendations = ((_analysis_recommendations = analysis.recommendations) === null || _analysis_recommendations === void 0 ? void 0 : _analysis_recommendations.length) ? analysis.recommendations : redFlags.map(()=>"Pause, do not click links or send money, and verify through an official channel.");
    const extractedTextLength = typeof ((_analysis_metadata = analysis.metadata) === null || _analysis_metadata === void 0 ? void 0 : _analysis_metadata.extractedTextLength) === "number" ? analysis.metadata.extractedTextLength : null;
    var _analysis_extractedEntities;
    const extractedEntities = (_analysis_extractedEntities = analysis.extractedEntities) !== null && _analysis_extractedEntities !== void 0 ? _analysis_extractedEntities : (_analysis_metadata1 = analysis.metadata) === null || _analysis_metadata1 === void 0 ? void 0 : _analysis_metadata1.extractedEntities;
    const storageMode = typeof ((_analysis_metadata2 = analysis.metadata) === null || _analysis_metadata2 === void 0 ? void 0 : _analysis_metadata2.storageMode) === "string" ? analysis.metadata.storageMode : "server";
    const urlReputation = getRecord((_analysis_metadata3 = analysis.metadata) === null || _analysis_metadata3 === void 0 ? void 0 : _analysis_metadata3.urlReputation);
    const senderAnalysis = getRecord((_analysis_metadata4 = analysis.metadata) === null || _analysis_metadata4 === void 0 ? void 0 : _analysis_metadata4.senderAnalysis);
    const urlReputationSignals = getStringArray(urlReputation === null || urlReputation === void 0 ? void 0 : urlReputation.signals);
    const senderSignals = getStringArray(senderAnalysis === null || senderAnalysis === void 0 ? void 0 : senderAnalysis.signals);
    var _analysis_summary, _analysis_summary1, _urlReputation_domain, _urlReputation_tlsValid, _urlReputation_ipGeolocation, _senderAnalysis_spf, _senderAnalysis_dkim, _senderAnalysis_dmarc, _senderAnalysis_replyTo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard?view=scamshieldintake",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.scamShield.scamRiskResults")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 792,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 799,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 791,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-5 text-center sm:px-6 sm:py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[58px] font-black leading-none text-[#cf2f34]",
                                    children: [
                                        riskScore,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 809,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#ba9ea3]",
                                    children: [
                                        riskLevel,
                                        " risk | ",
                                        confidence,
                                        " confidence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 812,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[26px] font-extrabold leading-none text-[#cf2f34]",
                                    children: (_analysis_summary = analysis.summary) !== null && _analysis_summary !== void 0 ? _analysis_summary : "ScamShield analysis completed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 815,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-2 max-w-[540px] text-xs leading-[1.5] text-[#61748f]",
                                    children: (_analysis_summary1 = analysis.summary) !== null && _analysis_summary1 !== void 0 ? _analysis_summary1 : "ScamShield returned ".concat(riskLevel, " risk with ").concat(redFlags.length, " indicator").concat(redFlags.length === 1 ? "" : "s", ".")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 818,
                                    columnNumber: 13
                                }, this),
                                extractedTextLength ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] font-semibold text-[#60728a]",
                                    children: [
                                        "OCR text extracted: ",
                                        extractedTextLength,
                                        " characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 823,
                                    columnNumber: 15
                                }, this) : null,
                                storageMode === "local_only" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] font-semibold text-[#60728a]",
                                    children: "Saved locally in this browser session until you choose to share or sync it."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 828,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 808,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-[#1f2a3a]",
                                    children: t("dashboard.scamShield.detectedRedFlags")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 836,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-5 items-center rounded-full bg-[#ffe9e9] px-2 text-[9px] font-bold uppercase tracking-[0.07em] text-[#df4a4a]",
                                    children: [
                                        redFlags.length,
                                        " found"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 839,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 835,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-2",
                            children: [
                                redFlags.map((flag, index)=>{
                                    var _recommendations_index;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "flex items-start gap-3 rounded-xl border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fff6e5] text-[#f59e0b]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertTriangle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertTriangle$3e$__["IconAlertTriangle"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 851,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 850,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-[#1f2a3a]",
                                                        children: flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                        lineNumber: 854,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[11px] leading-[1.45] text-[#64748b]",
                                                        children: (_recommendations_index = recommendations[index]) !== null && _recommendations_index !== void 0 ? _recommendations_index : t("dashboard.scamShield.highRiskDetectedBody")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-[#2c66b0]",
                                                        children: [
                                                            t("dashboard.scamShield.howToStaySafe"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 853,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, "".concat(flag, "-").concat(index), true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 846,
                                        columnNumber: 15
                                    }, this);
                                }),
                                !redFlags.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl border border-[#e2eaf4] bg-white px-3 py-3 text-[11px] leading-[1.55] text-[#64748b] sm:px-4",
                                    children: "No clear scam red flags were detected from the supplied content. Keep verifying through official channels if the request feels unusual or involves money, passwords, identity documents, or account access."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 867,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 844,
                            columnNumber: 11
                        }, this),
                        extractedEntities && typeof extractedEntities === "object" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-4 rounded-xl border border-[#dfe8f4] bg-white p-3 sm:p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-[#1f2a3a]",
                                    children: "Extracted entities"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded-[8px] bg-[#f8fbff] p-3 text-[10px] leading-[1.5] text-[#60728a]",
                                    children: JSON.stringify(extractedEntities, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 881,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 877,
                            columnNumber: 13
                        }, this) : null,
                        urlReputation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-4 rounded-xl border border-[#dfe8f4] bg-white p-3 sm:p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-[#1f2a3a]",
                                    children: "Link reputation checks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 889,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid grid-cols-1 gap-2 text-[11px] text-[#50627a] sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Domain: ",
                                                String((_urlReputation_domain = urlReputation.domain) !== null && _urlReputation_domain !== void 0 ? _urlReputation_domain : "Not available")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 893,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Domain age:",
                                                " ",
                                                typeof urlReputation.domainAgeDays === "number" ? "".concat(String(urlReputation.domainAgeDays), " days") : "Not available"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 896,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "TLS valid: ",
                                                String((_urlReputation_tlsValid = urlReputation.tlsValid) !== null && _urlReputation_tlsValid !== void 0 ? _urlReputation_tlsValid : "Unknown")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 902,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "IP location: ",
                                                String((_urlReputation_ipGeolocation = urlReputation.ipGeolocation) !== null && _urlReputation_ipGeolocation !== void 0 ? _urlReputation_ipGeolocation : "Not available")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 905,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this),
                                urlReputationSignals.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[11px] leading-[1.55] text-[#b45353]",
                                    children: [
                                        "Reputation flags: ",
                                        urlReputationSignals.join(", ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 910,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 888,
                            columnNumber: 13
                        }, this) : null,
                        senderAnalysis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-4 rounded-xl border border-[#dfe8f4] bg-white p-3 sm:p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-[#1f2a3a]",
                                    children: "Sender checks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 919,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid grid-cols-1 gap-2 text-[11px] text-[#50627a] sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "SPF: ",
                                                String((_senderAnalysis_spf = senderAnalysis.spf) !== null && _senderAnalysis_spf !== void 0 ? _senderAnalysis_spf : "none")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 923,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "DKIM: ",
                                                String((_senderAnalysis_dkim = senderAnalysis.dkim) !== null && _senderAnalysis_dkim !== void 0 ? _senderAnalysis_dkim : "none")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 924,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "DMARC: ",
                                                String((_senderAnalysis_dmarc = senderAnalysis.dmarc) !== null && _senderAnalysis_dmarc !== void 0 ? _senderAnalysis_dmarc : "none")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Reply-To: ",
                                                String((_senderAnalysis_replyTo = senderAnalysis.replyTo) !== null && _senderAnalysis_replyTo !== void 0 ? _senderAnalysis_replyTo : "Not provided")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 922,
                                    columnNumber: 15
                                }, this),
                                senderSignals.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[11px] leading-[1.55] text-[#b45353]",
                                    children: [
                                        "Sender flags: ",
                                        senderSignals.join(", ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 931,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 918,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard?view=scamshieldassets",
                                className: "inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#df3c3c] px-8 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(223,60,60,0.26)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertTriangle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertTriangle$3e$__["IconAlertTriangle"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 943,
                                        columnNumber: 15
                                    }, this),
                                    t("dashboard.scamShield.reportThisIncident")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-4 rounded-xl border border-[#dfe8f4] bg-[#edf4ff] p-3 sm:p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "inline-flex items-center gap-1.5 text-sm font-bold text-[#1f4f93]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 950,
                                            columnNumber: 15
                                        }, this),
                                        t("dashboard.scamShield.stayProtected")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 949,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[10px] leading-[1.5] text-[#4b607d]",
                                    children: t("dashboard.scamShield.stayProtectedBody")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 953,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 rounded-[4px] border border-[#f0dc9f] bg-[#fff5dd] px-2 py-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "inline-flex items-center gap-1 text-[9px] text-[#8c6d1f]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertTriangle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertTriangle$3e$__["IconAlertTriangle"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 958,
                                                columnNumber: 17
                                            }, this),
                                            t("dashboard.scamShield.infoDisclaimer")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 956,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 948,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 807,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
            lineNumber: 790,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
        lineNumber: 789,
        columnNumber: 5
    }, this);
}
_s1(ScamShieldRiskPage, "/H6seDDZwqcUav4b2NUOy+nrjFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"]
    ];
});
_c1 = ScamShieldRiskPage;
function ScamShieldAssetsPage() {
    var _analysis_summary;
    _s2();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const flowState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"])();
    const [mediaAssets, setMediaAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const analysis = flowState === null || flowState === void 0 ? void 0 : flowState.analysis;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScamShieldAssetsPage.useEffect": ()=>{
            let isMounted = true;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPublishedMediaAssets"])(SCAM_SHIELD_MEDIA_ASSET_CATEGORY).then({
                "ScamShieldAssetsPage.useEffect": (assets)=>{
                    if (isMounted) {
                        setMediaAssets(assets);
                    }
                }
            }["ScamShieldAssetsPage.useEffect"]).catch({
                "ScamShieldAssetsPage.useEffect": ()=>{
                    if (isMounted) {
                        setMediaAssets([]);
                    }
                }
            }["ScamShieldAssetsPage.useEffect"]);
            return ({
                "ScamShieldAssetsPage.useEffect": ()=>{
                    isMounted = false;
                }
            })["ScamShieldAssetsPage.useEffect"];
        }
    }["ScamShieldAssetsPage.useEffect"], []);
    const extractedEntities = getRecord(analysis === null || analysis === void 0 ? void 0 : analysis.extractedEntities);
    const entityUrls = getStringArray(extractedEntities === null || extractedEntities === void 0 ? void 0 : extractedEntities.urls);
    const entityOrganizations = getStringArray(extractedEntities === null || extractedEntities === void 0 ? void 0 : extractedEntities.organizations);
    const entityPaymentMethods = getStringArray(extractedEntities === null || extractedEntities === void 0 ? void 0 : extractedEntities.paymentMethods);
    const entityAccountTerms = getStringArray(extractedEntities === null || extractedEntities === void 0 ? void 0 : extractedEntities.accountTerms);
    var _analysis_recommendations;
    const recommendations = (_analysis_recommendations = analysis === null || analysis === void 0 ? void 0 : analysis.recommendations) !== null && _analysis_recommendations !== void 0 ? _analysis_recommendations : [];
    const recommendationText = recommendations.join(" ").toLowerCase();
    var _analysis_summary_toLowerCase;
    const summaryText = (_analysis_summary_toLowerCase = analysis === null || analysis === void 0 ? void 0 : (_analysis_summary = analysis.summary) === null || _analysis_summary === void 0 ? void 0 : _analysis_summary.toLowerCase()) !== null && _analysis_summary_toLowerCase !== void 0 ? _analysis_summary_toLowerCase : "";
    var _analysis_redFlags;
    const redFlagText = ((_analysis_redFlags = analysis === null || analysis === void 0 ? void 0 : analysis.redFlags) !== null && _analysis_redFlags !== void 0 ? _analysis_redFlags : []).join(" ").toLowerCase();
    const combinedAnalysisText = [
        recommendationText,
        summaryText,
        redFlagText,
        entityOrganizations.join(" ").toLowerCase(),
        entityPaymentMethods.join(" ").toLowerCase(),
        entityAccountTerms.join(" ").toLowerCase()
    ].join(" ");
    var _analysis_riskScore;
    const shouldShowBankAction = ((_analysis_riskScore = analysis === null || analysis === void 0 ? void 0 : analysis.riskScore) !== null && _analysis_riskScore !== void 0 ? _analysis_riskScore : 0) >= 25 && (includesAnyText(combinedAnalysisText, [
        "bank",
        "account",
        "transaction",
        "transfer",
        "payment",
        "card",
        "fraud department",
        "freeze",
        "compromise",
        "unauthorized login"
    ]) || entityPaymentMethods.length > 0 || entityAccountTerms.length > 0);
    var _analysis_riskScore1;
    const shouldShowScamwatchAction = ((_analysis_riskScore1 = analysis === null || analysis === void 0 ? void 0 : analysis.riskScore) !== null && _analysis_riskScore1 !== void 0 ? _analysis_riskScore1 : 0) >= 15;
    var _analysis_riskScore2;
    const shouldShowReportCyberAction = ((_analysis_riskScore2 = analysis === null || analysis === void 0 ? void 0 : analysis.riskScore) !== null && _analysis_riskScore2 !== void 0 ? _analysis_riskScore2 : 0) >= 25 && (entityUrls.length > 0 || includesAnyText(combinedAnalysisText, [
        "link",
        "url",
        "identity",
        "credential",
        "password",
        "otp",
        "device",
        "cyber",
        "account access"
    ]));
    const actionCards = [];
    if (shouldShowBankAction) {
        var _analysis_summary1;
        actionCards.push({
            id: "bank",
            title: t("dashboard.scamShield.contactYourBank"),
            body: t("dashboard.scamShield.contactYourBankDetailed"),
            secondary: (_analysis_summary1 = analysis === null || analysis === void 0 ? void 0 : analysis.summary) !== null && _analysis_summary1 !== void 0 ? _analysis_summary1 : t("dashboard.scamShield.assetActionIntro"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                lineNumber: 1051,
                columnNumber: 13
            }, this),
            iconClassName: "bg-[#fff3df] text-[#ef7d00]",
            href: "/dashboard?view=scamshieldagency",
            cta: t("dashboard.scamShield.callFraudDepartment"),
            agency: "bank"
        });
    }
    if (shouldShowScamwatchAction) {
        var _recommendations_;
        actionCards.push({
            id: "accc",
            title: t("dashboard.scamShield.reportToAcccScamwatch"),
            body: t("dashboard.scamShield.reportToAcccDetailed"),
            secondary: (_recommendations_ = recommendations[0]) !== null && _recommendations_ !== void 0 ? _recommendations_ : t("dashboard.scamShield.communityPreventionBody"),
            badge: t("dashboard.scamShield.communityPrevention"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGavel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGavel$3e$__["IconGavel"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                lineNumber: 1067,
                columnNumber: 13
            }, this),
            iconClassName: "bg-[#fff3df] text-[#ef7d00]",
            href: "/dashboard?view=scamshieldagency",
            cta: t("dashboard.scamShield.launchReportTool"),
            agency: "accc"
        });
    }
    if (shouldShowReportCyberAction) {
        var _recommendations_1, _ref, _ref1;
        actionCards.push({
            id: "reportCyber",
            title: t("dashboard.scamShield.reportToReportCyber"),
            body: t("dashboard.scamShield.reportToReportCyberBody"),
            secondary: (_ref1 = (_ref = (_recommendations_1 = recommendations[1]) !== null && _recommendations_1 !== void 0 ? _recommendations_1 : recommendations[0]) !== null && _ref !== void 0 ? _ref : analysis === null || analysis === void 0 ? void 0 : analysis.summary) !== null && _ref1 !== void 0 ? _ref1 : "",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                lineNumber: 1082,
                columnNumber: 13
            }, this),
            iconClassName: "bg-[#fff3df] text-[#ef7d00]",
            href: "/dashboard?view=scamshieldagency",
            cta: t("dashboard.scamShield.launchReportTool"),
            agency: "reportCyber"
        });
    }
    var _analysis_summary2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard?view=scamshieldrisk",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1098,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.scamShield.nextSteps")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1094,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 1093,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-6 text-center sm:px-6 sm:py-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[32px] font-black leading-[1.08] text-[#1f2a3a] sm:text-[42px]",
                                    children: t("dashboard.scamShield.secureAssetsTitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-2 max-w-[560px] text-xs leading-[1.55] text-[#6a7e96] sm:text-sm",
                                    children: (_analysis_summary2 = analysis === null || analysis === void 0 ? void 0 : analysis.summary) !== null && _analysis_summary2 !== void 0 ? _analysis_summary2 : t("dashboard.scamShield.assetActionIntro")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this),
                                recommendations.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto mt-4 max-w-[760px] rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] px-4 py-3 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Recommended next steps"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-1.5",
                                            children: recommendations.slice(0, 3).map((recommendation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] leading-[1.5] text-[#50627a]",
                                                    children: recommendation
                                                }, "".concat(recommendation, "-").concat(index), false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1118,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: [
                                actionCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ".concat(card.iconClassName),
                                                            children: card.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[25px] font-extrabold leading-none text-[#1f2a3a]",
                                                                            children: card.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1151,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        card.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex h-5 items-center rounded-full bg-[#ecf3ff] px-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#2c66b0]",
                                                                            children: card.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1155,
                                                                            columnNumber: 27
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1150,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-[11px] leading-[1.5] text-[#6a7e96]",
                                                                    children: card.body
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 23
                                                                }, this),
                                                                card.secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-[10px] font-semibold text-[#374b64]",
                                                                    children: card.secondary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1164,
                                                                    columnNumber: 25
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1149,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: card.href,
                                                    onClick: ()=>{
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScamShieldFlowState"])({
                                                            selectedAgency: card.agency
                                                        });
                                                    },
                                                    className: "inline-flex h-10 items-center gap-1.5 rounded-[8px] bg-[#ff9800] px-5 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(255,152,0,0.26)]",
                                                    children: [
                                                        card.cta,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1142,
                                            columnNumber: 17
                                        }, this)
                                    }, card.id, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 15
                                    }, this)),
                                !actionCards.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 text-[11px] leading-[1.55] text-[#64748b] sm:px-4",
                                    children: "Run a ScamShield analysis to generate case-specific next steps and reporting options for this session."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1186,
                                    columnNumber: 15
                                }, this) : null,
                                mediaAssets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-40 bg-[#edf3fb] sm:h-auto sm:w-[168px] sm:shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaAssetImageUrl"])(asset),
                                                        alt: asset.title,
                                                        className: "h-full w-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                        lineNumber: 1199,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 px-3 py-3 sm:px-4 sm:py-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[25px] font-extrabold leading-none text-[#1f2a3a]",
                                                                    children: asset.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1207,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex h-5 items-center rounded-full bg-[#ecf3ff] px-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#2c66b0]",
                                                                    children: asset.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1210,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[11px] font-semibold leading-[1.5] text-[#374b64]",
                                                            children: asset.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1214,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[11px] leading-[1.5] text-[#6a7e96]",
                                                            children: asset.bodyText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1217,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 17
                                        }, this)
                                    }, asset.id, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 1193,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 1109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
            lineNumber: 1092,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
        lineNumber: 1091,
        columnNumber: 5
    }, this);
}
_s2(ScamShieldAssetsPage, "VxRy0aYYiS77JwCbFx74+DpAW8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"]
    ];
});
_c2 = ScamShieldAssetsPage;
function ScamShieldAgencyPage() {
    var _flowState_analysis, _flowState_analysis1, _flowState_analysis2, _flowState_reportDraft, _flowState_analysis3, _getRecord, _getRecord1, _getRecord2, _getRecord3, _getRecord4, _getRecord5, _getRecord6, _getRecord7, _getRecord8, _getRecord9, _getRecord10, _getRecord11, _getRecord12;
    _s3();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const flowState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"])();
    const [expandedSection, setExpandedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("accc");
    const [privacyConsentEnabled, setPrivacyConsentEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoRedactPII, setAutoRedactPII] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [redactionMode, setRedactionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("labels");
    const [draftSummary, setDraftSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [agencyError, setAgencyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingConsentRequirement, setPendingConsentRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGrantingConsent, setIsGrantingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmittingReport, setIsSubmittingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var _flowState_analysis_summary;
    const analysisSummary = (_flowState_analysis_summary = flowState === null || flowState === void 0 ? void 0 : (_flowState_analysis = flowState.analysis) === null || _flowState_analysis === void 0 ? void 0 : _flowState_analysis.summary) !== null && _flowState_analysis_summary !== void 0 ? _flowState_analysis_summary : "";
    var _flowState_analysis_indicators, _ref;
    const analysisIndicators = (_ref = (_flowState_analysis_indicators = flowState === null || flowState === void 0 ? void 0 : (_flowState_analysis1 = flowState.analysis) === null || _flowState_analysis1 === void 0 ? void 0 : _flowState_analysis1.indicators) !== null && _flowState_analysis_indicators !== void 0 ? _flowState_analysis_indicators : flowState === null || flowState === void 0 ? void 0 : (_flowState_analysis2 = flowState.analysis) === null || _flowState_analysis2 === void 0 ? void 0 : _flowState_analysis2.redFlags) !== null && _ref !== void 0 ? _ref : [];
    const draftReport = flowState === null || flowState === void 0 ? void 0 : (_flowState_reportDraft = flowState.reportDraft) === null || _flowState_reportDraft === void 0 ? void 0 : _flowState_reportDraft.draftReport;
    const destinationDrafts = getRecord(draftReport === null || draftReport === void 0 ? void 0 : draftReport.destinations);
    const draftSenderName = getDraftReportValue(draftReport, "senderName", (flowState === null || flowState === void 0 ? void 0 : flowState.analysis) ? "Unknown sender" : "Run analysis first");
    const draftScamCategory = getDraftReportValue(draftReport, "scamCategory", analysisIndicators.length ? analysisIndicators.slice(0, 2).join(", ") : "Pending analysis details");
    const draftPlatform = getDraftReportValue(draftReport, "platform", (flowState === null || flowState === void 0 ? void 0 : (_flowState_analysis3 = flowState.analysis) === null || _flowState_analysis3 === void 0 ? void 0 : _flowState_analysis3.type) ? "".concat(flowState.analysis.type, " input") : "Pending analysis details");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScamShieldAgencyPage.useEffect": ()=>{
            var _flowState_selectedAgency;
            setExpandedSection((_flowState_selectedAgency = flowState === null || flowState === void 0 ? void 0 : flowState.selectedAgency) !== null && _flowState_selectedAgency !== void 0 ? _flowState_selectedAgency : "accc");
        }
    }["ScamShieldAgencyPage.useEffect"], [
        flowState === null || flowState === void 0 ? void 0 : flowState.selectedAgency
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScamShieldAgencyPage.useEffect": ()=>{
            var _flowState_reportDraft_draftReport, _flowState_reportDraft, _flowState_reportDraft_draftReport1, _flowState_reportDraft1;
            var _flowState_reportDraft_draftReport_draft, _ref;
            setDraftSummary((_ref = (_flowState_reportDraft_draftReport_draft = flowState === null || flowState === void 0 ? void 0 : (_flowState_reportDraft = flowState.reportDraft) === null || _flowState_reportDraft === void 0 ? void 0 : (_flowState_reportDraft_draftReport = _flowState_reportDraft.draftReport) === null || _flowState_reportDraft_draftReport === void 0 ? void 0 : _flowState_reportDraft_draftReport.draft) !== null && _flowState_reportDraft_draftReport_draft !== void 0 ? _flowState_reportDraft_draftReport_draft : flowState === null || flowState === void 0 ? void 0 : (_flowState_reportDraft1 = flowState.reportDraft) === null || _flowState_reportDraft1 === void 0 ? void 0 : (_flowState_reportDraft_draftReport1 = _flowState_reportDraft1.draftReport) === null || _flowState_reportDraft_draftReport1 === void 0 ? void 0 : _flowState_reportDraft_draftReport1.summary) !== null && _ref !== void 0 ? _ref : "");
        }
    }["ScamShieldAgencyPage.useEffect"], [
        flowState === null || flowState === void 0 ? void 0 : flowState.reportDraft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScamShieldAgencyPage.useEffect": ()=>{
            if (!(flowState === null || flowState === void 0 ? void 0 : flowState.analysis)) {
                return;
            }
            let isActive = true;
            var _flowState_analysis__id;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateScamReportDraft"])({
                analysisId: (_flowState_analysis__id = flowState.analysis._id) !== null && _flowState_analysis__id !== void 0 ? _flowState_analysis__id : "",
                analysisSnapshot: flowState.analysis,
                autoRedactPII,
                redactionMode
            }).then({
                "ScamShieldAgencyPage.useEffect": (draft)=>{
                    var _draft_draftReport, _draft_draftReport1, _draft_draftReport_indicators, _draft_draftReport2;
                    if (!isActive) {
                        return;
                    }
                    var _draft_draftReport_draft, _ref;
                    setDraftSummary((_ref = (_draft_draftReport_draft = (_draft_draftReport = draft.draftReport) === null || _draft_draftReport === void 0 ? void 0 : _draft_draftReport.draft) !== null && _draft_draftReport_draft !== void 0 ? _draft_draftReport_draft : (_draft_draftReport1 = draft.draftReport) === null || _draft_draftReport1 === void 0 ? void 0 : _draft_draftReport1.summary) !== null && _ref !== void 0 ? _ref : ((_draft_draftReport2 = draft.draftReport) === null || _draft_draftReport2 === void 0 ? void 0 : (_draft_draftReport_indicators = _draft_draftReport2.indicators) === null || _draft_draftReport_indicators === void 0 ? void 0 : _draft_draftReport_indicators.length) ? "Prepared from ScamShield indicators: ".concat(draft.draftReport.indicators.join(", "), ".") : analysisSummary);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScamShieldFlowState"])({
                        reportDraft: draft
                    });
                }
            }["ScamShieldAgencyPage.useEffect"]).catch({
                "ScamShieldAgencyPage.useEffect": ()=>{
                    if (isActive) {
                        setDraftSummary(analysisSummary);
                    }
                }
            }["ScamShieldAgencyPage.useEffect"]);
            return ({
                "ScamShieldAgencyPage.useEffect": ()=>{
                    isActive = false;
                }
            })["ScamShieldAgencyPage.useEffect"];
        }
    }["ScamShieldAgencyPage.useEffect"], [
        analysisSummary,
        autoRedactPII,
        flowState === null || flowState === void 0 ? void 0 : flowState.analysis,
        redactionMode
    ]);
    const handleSubmitToAgency = async ()=>{
        if (!(flowState === null || flowState === void 0 ? void 0 : flowState.analysis)) {
            setAgencyError("Run a ScamShield analysis before preparing agency submission.");
            return;
        }
        if (!privacyConsentEnabled) {
            setAgencyError("Report draft is prepared locally. Turn on sharing consent before sending details to an external service or agency.");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScamShieldFlowState"])({
                submitted: false
            });
            return;
        }
        setIsSubmittingReport(true);
        setAgencyError(null);
        try {
            const destination = expandedSection === "bank" ? "bank" : expandedSection === "reportCyber" ? "reportCyber" : "scamwatch";
            const submittedAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitScamReport"])({
                analysisId: flowState.analysis._id,
                analysisSnapshot: flowState.analysis,
                destination,
                consentToShare: privacyConsentEnabled
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeScamShieldFlowState"])({
                analysis: submittedAnalysis,
                submitted: true
            });
            router.push("/dashboard?view=reportsubmissionreview");
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingConsentRequirement(error.requirement);
                return;
            }
            setAgencyError(error instanceof Error ? error.message : "Agency submission could not be prepared.");
        } finally{
            setIsSubmittingReport(false);
        }
    };
    var _getRecord_body, _getRecord_guidanceUrl, _getRecord_body1, _getRecord_guidanceUrl1, _getRecord_body2, _getRecord_bankName, _getRecord_guidanceUrl2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pt-2 sm:px-4 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-[1196px] w-full max-w-[1184px] flex-col pb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-[61px] w-full max-w-[1184px] items-center justify-between border-b border-[#E2E8F0] bg-[#FFFFFFCC] px-4 sm:px-8 lg:px-[80px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard?view=scamshieldassets",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1391,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.scamShield.safeSpeakAnalyzer")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1394,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 1386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f4f7fc] p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mx-auto w-full max-w-[1136px] rounded-[14px] border border-[#e3eaf5] bg-white px-4 py-5 text-center sm:px-6 sm:py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className, " mx-auto h-[36px] w-full max-w-[369px] text-[30px] font-extrabold leading-[36px] tracking-[0] text-[#1f2a3a]"),
                                    children: t("dashboard.scamShield.prefilledAgencyReports")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className, " mx-auto mt-3 w-full max-w-[780px] text-center text-[18px] font-normal leading-[29.25px] tracking-[0] text-[#6b7280]"),
                                    children: t("dashboard.scamShield.prefilledAgencyReportsAnalyzerBody")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1409,
                                    columnNumber: 13
                                }, this),
                                draftSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-[12px] border border-[#e2eaf5] bg-[#f8fbff] px-4 py-3 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Generated draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>downloadTextFile("scamshield-report-draft.txt", draftSummary),
                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__["IconDownload"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1430,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Download draft"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1420,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redactScamContent"])({
                                                            text: draftSummary,
                                                            replacement: redactionMode
                                                        }).then((result)=>{
                                                            setDraftSummary(result.redactedText);
                                                        });
                                                    },
                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Redact preview now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1433,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[11px] leading-[1.6] text-[#50627a]",
                                            children: draftSummary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1449,
                                            columnNumber: 17
                                        }, this),
                                        analysisIndicators.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[10px] font-semibold text-[#60728a]",
                                            children: [
                                                "Backend indicators: ",
                                                analysisIndicators.join(", ")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1403,
                            columnNumber: 11
                        }, this),
                        !(flowState === null || flowState === void 0 ? void 0 : flowState.analysis) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-[12px] border border-[#dbeafe] bg-[#eff6ff] px-3 py-3 text-[11px] leading-[1.55] text-[#1d4f8f]",
                            children: "Run a ScamShield analysis before preparing agency fields. This page will use the real analysis summary, indicators, and extracted details once available."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1462,
                            columnNumber: 13
                        }, this) : null,
                        agencyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]",
                            children: agencyError
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1470,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setExpandedSection((currentSection)=>currentSection === "accc" ? null : "accc"),
                                            className: "flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ecf3ff] text-[#2d66b0]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGavel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGavel$3e$__["IconGavel"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 1488,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1487,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]",
                                                            children: t("dashboard.scamShield.reportToAcccScamwatch")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1490,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1486,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                    size: 14,
                                                    className: "text-[#8fa0b6] transition-transform ".concat(expandedSection === "accc" ? "rotate-90" : "rotate-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1494,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1477,
                                            columnNumber: 15
                                        }, this),
                                        expandedSection === "accc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-[#e8eff8] px-3 pb-3 pt-2.5 sm:px-4 sm:pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b8]",
                                                    children: t("dashboard.scamShield.prefilledDetails")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-[#60728a]",
                                                            children: t("dashboard.scamShield.senderName")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1509,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    readOnly: true,
                                                                    value: draftSenderName,
                                                                    className: "h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-10 text-[12px] text-[#253447] outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1513,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#16a56a]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                        lineNumber: 1519,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1518,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1512,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1508,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-semibold text-[#60728a]",
                                                                    children: t("dashboard.scamShield.scamCategory")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1526,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            readOnly: true,
                                                                            value: draftScamCategory,
                                                                            className: "h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-9 text-[12px] text-[#253447] outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1530,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                                            size: 12,
                                                                            className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#8fa0b6]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1535,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1529,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1525,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-semibold text-[#60728a]",
                                                                    children: t("dashboard.scamShield.platform")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1543,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            readOnly: true,
                                                                            value: draftPlatform,
                                                                            className: "h-10 w-full rounded-[8px] border border-[#dce5f1] bg-[#f8fbff] px-3 pr-9 text-[12px] text-[#253447] outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1547,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                                            size: 12,
                                                                            className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#8fa0b6]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1552,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1546,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1542,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1524,
                                                    columnNumber: 19
                                                }, this),
                                                getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-[10px] border border-[#dce5f1] bg-[#f8fbff] px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold text-[#51657f]",
                                                            children: String((_getRecord_body = (_getRecord = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch)) === null || _getRecord === void 0 ? void 0 : _getRecord.body) !== null && _getRecord_body !== void 0 ? _getRecord_body : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1561,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap gap-2",
                                                            children: [
                                                                ((_getRecord1 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch)) === null || _getRecord1 === void 0 ? void 0 : _getRecord1.contactPhone) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tel:".concat(String((_getRecord2 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch)) === null || _getRecord2 === void 0 ? void 0 : _getRecord2.contactPhone).replace(/[^\d+]/g, "")),
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1574,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Call contact"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1568,
                                                                    columnNumber: 27
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _getRecord;
                                                                        var _getRecord_downloadFileName;
                                                                        return downloadTextFile(String((_getRecord_downloadFileName = (_getRecord = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch)) === null || _getRecord === void 0 ? void 0 : _getRecord.downloadFileName) !== null && _getRecord_downloadFileName !== void 0 ? _getRecord_downloadFileName : "scamwatch-report-draft.txt"), draftSummary);
                                                                    },
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__["IconDownload"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1592,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Download Scamwatch draft"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1578,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: String((_getRecord_guidanceUrl = (_getRecord3 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.scamwatch)) === null || _getRecord3 === void 0 ? void 0 : _getRecord3.guidanceUrl) !== null && _getRecord_guidanceUrl !== void 0 ? _getRecord_guidanceUrl : "#"),
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1604,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Open Scamwatch"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1595,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1566,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1560,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setExpandedSection((currentSection)=>currentSection === "reportCyber" ? null : "reportCyber"),
                                            className: "flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf1ff] text-[#5f6be0]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 1626,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1625,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]",
                                                            children: t("dashboard.scamShield.reportCyberAcsc")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1628,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                    size: 14,
                                                    className: "text-[#8fa0b6] transition-transform ".concat(expandedSection === "reportCyber" ? "rotate-90" : "rotate-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1632,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1615,
                                            columnNumber: 15
                                        }, this),
                                        expandedSection === "reportCyber" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-[#e8eff8] px-3 py-3 text-[12px] leading-[1.55] text-[#60728a] sm:px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t("dashboard.scamShield.reportCyberPanelBody")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1642,
                                                    columnNumber: 19
                                                }, this),
                                                getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-[10px] border border-[#dce5f1] bg-[#f8fbff] px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold text-[#51657f]",
                                                            children: String((_getRecord_body1 = (_getRecord4 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber)) === null || _getRecord4 === void 0 ? void 0 : _getRecord4.body) !== null && _getRecord_body1 !== void 0 ? _getRecord_body1 : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1645,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap gap-2",
                                                            children: [
                                                                ((_getRecord5 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber)) === null || _getRecord5 === void 0 ? void 0 : _getRecord5.contactPhone) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tel:".concat(String((_getRecord6 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber)) === null || _getRecord6 === void 0 ? void 0 : _getRecord6.contactPhone).replace(/[^\d+]/g, "")),
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1658,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Call contact"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1652,
                                                                    columnNumber: 27
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _getRecord;
                                                                        var _getRecord_downloadFileName;
                                                                        return downloadTextFile(String((_getRecord_downloadFileName = (_getRecord = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber)) === null || _getRecord === void 0 ? void 0 : _getRecord.downloadFileName) !== null && _getRecord_downloadFileName !== void 0 ? _getRecord_downloadFileName : "reportcyber-guidance.txt"), draftSummary);
                                                                    },
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__["IconDownload"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1676,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Download ReportCyber guide"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1662,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: String((_getRecord_guidanceUrl1 = (_getRecord7 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.reportCyber)) === null || _getRecord7 === void 0 ? void 0 : _getRecord7.guidanceUrl) !== null && _getRecord_guidanceUrl1 !== void 0 ? _getRecord_guidanceUrl1 : "#"),
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1688,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Open ACSC guidance"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1644,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1614,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "overflow-hidden rounded-[12px] border border-[#e2eaf4] bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setExpandedSection((currentSection)=>currentSection === "bank" ? null : "bank"),
                                            className: "flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7fbf6] text-[#0f9c7c]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                lineNumber: 1710,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1709,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]",
                                                            children: t("dashboard.scamShield.bankSecurityDept")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1712,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1708,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                    size: 14,
                                                    className: "text-[#8fa0b6] transition-transform ".concat(expandedSection === "bank" ? "rotate-90" : "rotate-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1716,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1699,
                                            columnNumber: 15
                                        }, this),
                                        expandedSection === "bank" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-[#e8eff8] px-3 py-3 text-[12px] leading-[1.55] text-[#60728a] sm:px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t("dashboard.scamShield.bankSecurityPanelBody")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1726,
                                                    columnNumber: 19
                                                }, this),
                                                getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 rounded-[10px] border border-[#dce5f1] bg-[#f8fbff] px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold text-[#51657f]",
                                                            children: String((_getRecord_body2 = (_getRecord8 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord8 === void 0 ? void 0 : _getRecord8.body) !== null && _getRecord_body2 !== void 0 ? _getRecord_body2 : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1729,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap gap-2",
                                                            children: [
                                                                ((_getRecord9 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord9 === void 0 ? void 0 : _getRecord9.contactPhone) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "tel:".concat(String((_getRecord10 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord10 === void 0 ? void 0 : _getRecord10.contactPhone).replace(/[^\d+]/g, "")),
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1740,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Call ".concat(String((_getRecord_bankName = (_getRecord11 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord11 === void 0 ? void 0 : _getRecord11.bankName) !== null && _getRecord_bankName !== void 0 ? _getRecord_bankName : "bank fraud line"))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1734,
                                                                    columnNumber: 27
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _getRecord;
                                                                        var _getRecord_downloadFileName;
                                                                        return downloadTextFile(String((_getRecord_downloadFileName = (_getRecord = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord === void 0 ? void 0 : _getRecord.downloadFileName) !== null && _getRecord_downloadFileName !== void 0 ? _getRecord_downloadFileName : "bank-fraud-contact-template.txt"), draftSummary);
                                                                    },
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__["IconDownload"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1761,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Download bank template"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1747,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: String((_getRecord_guidanceUrl2 = (_getRecord12 = getRecord(destinationDrafts === null || destinationDrafts === void 0 ? void 0 : destinationDrafts.bank)) === null || _getRecord12 === void 0 ? void 0 : _getRecord12.guidanceUrl) !== null && _getRecord_guidanceUrl2 !== void 0 ? _getRecord_guidanceUrl2 : "#"),
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    className: "inline-flex h-8 items-center gap-1 rounded-full border border-[#d6e2f0] bg-white px-3 text-[10px] font-semibold text-[#37506d]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                            lineNumber: 1773,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Open bank guidance"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                                    lineNumber: 1764,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                            lineNumber: 1732,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1728,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1725,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1475,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-3 rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] font-bold text-[#1f2a3a]",
                                                    children: "Auto-redact personal details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1787,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[10px] leading-[1.45] text-[#6a7e96] sm:text-[11px]",
                                                    children: "Remove emails, phone numbers, amounts, URLs, and transaction identifiers from generated report drafts before download or sharing."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                    lineNumber: 1790,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1786,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "switch",
                                            "aria-checked": autoRedactPII,
                                            onClick: ()=>setAutoRedactPII((value)=>!value),
                                            className: "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ".concat(autoRedactPII ? "bg-[#ff9800]" : "bg-[#d5dde8]"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-5 w-5 rounded-full bg-white shadow-[0_1px_2px_rgba(15,23,42,0.35)] transition-transform ".concat(autoRedactPII ? "translate-x-5" : "translate-x-0.5")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 1805,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1796,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1785,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: [
                                        "labels",
                                        "mask"
                                    ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setRedactionMode(mode),
                                            className: "inline-flex h-8 items-center rounded-full px-3 text-[10px] font-bold ".concat(redactionMode === mode ? "bg-[#0f5d9f] text-white" : "bg-[#f4f7fb] text-[#60728a]"),
                                            children: mode === "labels" ? "Use labels" : "Mask values"
                                        }, mode, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1814,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1812,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1784,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "mt-3 rounded-[12px] border border-[#e2eaf4] bg-white px-3 py-3 sm:px-4 sm:py-3.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] font-bold text-[#1f2a3a]",
                                                children: t("dashboard.scamShield.privacyConsent")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 1833,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[10px] leading-[1.45] text-[#6a7e96] sm:text-[11px]",
                                                children: t("dashboard.scamShield.privacyConsentBody")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 1832,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": privacyConsentEnabled,
                                        onClick: ()=>setPrivacyConsentEnabled((isEnabled)=>!isEnabled),
                                        className: "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ".concat(privacyConsentEnabled ? "bg-[#ff9800]" : "bg-[#d5dde8]"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-5 w-5 rounded-full bg-white shadow-[0_1px_2px_rgba(15,23,42,0.35)] transition-transform ".concat(privacyConsentEnabled ? "translate-x-5" : "translate-x-0.5")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                            lineNumber: 1852,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                        lineNumber: 1841,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 1831,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1830,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            onClick: (event)=>{
                                event.preventDefault();
                                void handleSubmitToAgency();
                            },
                            className: "mt-3 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-[#ff9800] px-6 text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(255,152,0,0.34)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                    lineNumber: 1869,
                                    columnNumber: 13
                                }, this),
                                isSubmittingReport ? "Submitting..." : privacyConsentEnabled ? t("dashboard.scamShield.submitAllReports") : "Keep draft prepared"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1861,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-center text-[8px] font-semibold uppercase tracking-[0.08em] text-[#9aabc0]",
                            children: t("dashboard.scamShield.encryptedSubmissionNotice")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1876,
                            columnNumber: 11
                        }, this),
                        pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                                requirement: pendingConsentRequirement,
                                isSubmitting: isGrantingConsent,
                                onAllow: ()=>{
                                    void (async ()=>{
                                        setIsGrantingConsent(true);
                                        try {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grantConsent"])({
                                                share_with_agencies: true
                                            }, pendingConsentRequirement.source);
                                            setPendingConsentRequirement(null);
                                            await handleSubmitToAgency();
                                        } catch (error) {
                                            setAgencyError(error instanceof Error ? error.message : "Consent could not be saved.");
                                        } finally{
                                            setIsGrantingConsent(false);
                                        }
                                    })();
                                },
                                onDecline: ()=>{
                                    setPendingConsentRequirement(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                                lineNumber: 1882,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                            lineNumber: 1881,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
                    lineNumber: 1402,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
            lineNumber: 1385,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx",
        lineNumber: 1384,
        columnNumber: 5
    }, this);
}
_s3(ScamShieldAgencyPage, "dghgtU3DcF/yLvJB6ZXzGiLtkxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scamshield$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScamShieldFlowState"]
    ];
});
_c3 = ScamShieldAgencyPage;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ScamShieldIntakePage");
__turbopack_context__.k.register(_c1, "ScamShieldRiskPage");
__turbopack_context__.k.register(_c2, "ScamShieldAssetsPage");
__turbopack_context__.k.register(_c3, "ScamShieldAgencyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-scam-shield-pages.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c34be305._.js.map