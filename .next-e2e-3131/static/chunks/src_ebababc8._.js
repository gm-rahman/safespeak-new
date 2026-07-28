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
"[project]/src/lib/evidence-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completeEvidenceUpload",
    ()=>completeEvidenceUpload,
    "deleteEvidence",
    ()=>deleteEvidence,
    "getEvidence",
    ()=>getEvidence,
    "getEvidenceAuditChain",
    ()=>getEvidenceAuditChain,
    "getEvidenceMetadata",
    ()=>getEvidenceMetadata,
    "getEvidenceTranscription",
    ()=>getEvidenceTranscription,
    "listReportEvidence",
    ()=>listReportEvidence,
    "requestEvidenceUploadUrl",
    ()=>requestEvidenceUploadUrl,
    "resolveEvidenceId",
    ()=>resolveEvidenceId,
    "transcribeEvidence",
    ()=>transcribeEvidence,
    "verifyEvidenceHash",
    ()=>verifyEvidenceHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
function resolveEvidenceId(evidence) {
    var _evidence_id, _ref;
    return (_ref = (_evidence_id = evidence.id) !== null && _evidence_id !== void 0 ? _evidence_id : evidence._id) !== null && _ref !== void 0 ? _ref : "";
}
async function requestEvidenceUploadUrl(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].cloudEvidence, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/upload-url", {
        method: "POST",
        headers,
        body: input
    });
    return response.data;
}
async function completeEvidenceUpload(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const formData = new FormData();
    formData.set("evidenceId", input.evidenceId);
    formData.set("sha256Hash", input.sha256Hash);
    formData.set("file", input.file, input.file.name);
    if (input.metadata) {
        formData.set("metadata", JSON.stringify(input.metadata));
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/complete-upload", {
        method: "POST",
        headers,
        body: formData
    });
    return response.data.evidence;
}
async function transcribeEvidence(evidenceId, input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].evidenceTranscription, headers);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId, "/transcribe"), {
        method: "POST",
        headers,
        body: input
    });
    return response.data;
}
async function getEvidence(evidenceId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId), {
        headers
    });
    return response.data.evidence;
}
async function listReportEvidence(reportId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/reports/".concat(reportId, "/evidence"), {
        headers
    });
    return response.data.evidence;
}
async function getEvidenceMetadata(evidenceId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId, "/metadata"), {
        headers
    });
    return response.data.metadata;
}
async function verifyEvidenceHash(evidenceId, sha256Hash) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId, "/verify-hash"), {
        method: "POST",
        headers,
        body: {
            sha256Hash
        }
    });
    return response.data.verification;
}
async function getEvidenceAuditChain(evidenceId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId, "/audit-chain"), {
        headers
    });
    return response.data.auditChain;
}
async function deleteEvidence(evidenceId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId), {
        method: "DELETE",
        headers
    });
}
async function getEvidenceTranscription(evidenceId) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/evidence/".concat(evidenceId, "/transcription"), {
        headers
    });
    return response.data;
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
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSubmissionEvidencePage",
    ()=>ReportSubmissionEvidencePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileTypePdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileTypePdf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileTypePdf.mjs [app-client] (ecmascript) <export default as IconFileTypePdf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderFilled.mjs [app-client] (ecmascript) <export default as IconFolderFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMapPin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMapPin.mjs [app-client] (ecmascript) <export default as IconMapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophone.mjs [app-client] (ecmascript) <export default as IconMicrophone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPlayFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPlayFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs [app-client] (ecmascript) <export default as IconPlayerPlayFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent/consent-required-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$triage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-triage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/conversation-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboard-card-flows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/evidence-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-submission-mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reports-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$report$2d$submission$2d$pages$2f$report$2d$submission$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-frame.tsx [app-client] (ecmascript)");
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
;
;
const DRAFT_STORAGE_KEY = "safespeak_report_evidence_draft";
function formatFileSize(bytes) {
    if (bytes < 1024 * 1024) {
        return "".concat(Math.max(1, Math.round(bytes / 1024)), " KB");
    }
    return "".concat((bytes / (1024 * 1024)).toFixed(1), " MB");
}
function formatOptionalFileSize(bytes) {
    return bytes ? formatFileSize(bytes) : "Unknown size";
}
function inferEvidenceKind(file) {
    if (file.type.startsWith("image/")) {
        return "image";
    }
    if (file.type.startsWith("video/")) {
        return "video";
    }
    if (file.type.startsWith("audio/")) {
        return "audio";
    }
    return "document";
}
function inferIncidentTypeFromNarrative(narrative) {
    const normalizedNarrative = narrative.toLowerCase();
    const domesticViolenceTerms = [
        "wife",
        "husband",
        "partner",
        "spouse",
        "girlfriend",
        "boyfriend",
        "domestic",
        "family violence",
        "hit me",
        "slapped me",
        "pushed me",
        "unsafe at home"
    ];
    return domesticViolenceTerms.some((term)=>normalizedNarrative.includes(term)) ? "domestic_violence" : undefined;
}
function firstNonEmptyString() {
    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
        values[_key] = arguments[_key];
    }
    for (const value of values){
        if (typeof value === "string" && value.trim()) {
            return value.trim();
        }
    }
    return undefined;
}
function inferRepeatedIncidents(factExtraction, fallbackNarrative) {
    var _factExtraction_timeline, _factExtraction_extractedEvents;
    const timelineValue = factExtraction === null || factExtraction === void 0 ? void 0 : (_factExtraction_timeline = factExtraction.timeline) === null || _factExtraction_timeline === void 0 ? void 0 : _factExtraction_timeline.repeatedIncidents;
    if (typeof timelineValue === "boolean") {
        return timelineValue;
    }
    if (typeof timelineValue === "string") {
        const normalized = timelineValue.trim().toLowerCase();
        if ([
            "yes",
            "true",
            "ongoing",
            "repeated"
        ].includes(normalized)) {
            return true;
        }
        if ([
            "no",
            "false",
            "once",
            "single"
        ].includes(normalized)) {
            return false;
        }
    }
    var _factExtraction_extractedEvents_length;
    if (((_factExtraction_extractedEvents_length = factExtraction === null || factExtraction === void 0 ? void 0 : (_factExtraction_extractedEvents = factExtraction.extractedEvents) === null || _factExtraction_extractedEvents === void 0 ? void 0 : _factExtraction_extractedEvents.length) !== null && _factExtraction_extractedEvents_length !== void 0 ? _factExtraction_extractedEvents_length : 0) > 1) {
        return true;
    }
    const combinedText = [
        fallbackNarrative,
        factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.whatHappened
    ].filter((value)=>typeof value === "string" && value.trim().length > 0).join(" ").toLowerCase();
    if (!combinedText) {
        return undefined;
    }
    if (/\b(again|ongoing|repeated|multiple times|keeps happening|every day|every night)\b/.test(combinedText)) {
        return true;
    }
    return undefined;
}
function buildNarrativeFromConversationMessages(messages) {
    const userNarrative = messages.filter((message)=>message.role === "user").map((message)=>message.content.trim()).filter(Boolean).join("\n\n");
    return userNarrative || undefined;
}
function extractConversationReportFields(input) {
    const factExtraction = input.factExtraction;
    var _factExtraction_timeline;
    const timeline = (_factExtraction_timeline = factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.timeline) !== null && _factExtraction_timeline !== void 0 ? _factExtraction_timeline : {};
    const narrative = firstNonEmptyString(timeline.what, factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.whatHappened, buildNarrativeFromConversationMessages(input.messages));
    return {
        narrative,
        fields: {
            who: firstNonEmptyString(timeline.who, factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.peopleInvolved),
            what: narrative,
            when: firstNonEmptyString(timeline.when, factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.whenHappened),
            where: firstNonEmptyString(timeline.where, factExtraction === null || factExtraction === void 0 ? void 0 : factExtraction.whereHappened),
            how: firstNonEmptyString(timeline.how),
            witnesses: firstNonEmptyString(timeline.witnesses),
            injuries: firstNonEmptyString(timeline.injuries),
            repeatedIncidents: inferRepeatedIncidents(factExtraction, narrative)
        }
    };
}
async function computeSha256Hash(file) {
    if (typeof crypto === "undefined" || !crypto.subtle) {
        return "hash-unavailable";
    }
    const buffer = await file.arrayBuffer();
    const digest = await crypto.subtle.digest("SHA-256", buffer);
    return Array.from(new Uint8Array(digest)).map((value)=>value.toString(16).padStart(2, "0")).join("");
}
function formatEvidenceTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}
function formatMetadataDate(timestamp) {
    return timestamp ? formatEvidenceTimestamp(timestamp) : "Not recorded";
}
function formatStatusLabel(value) {
    if (!value) {
        return "Not available";
    }
    return value.replace(/[_-]+/g, " ");
}
function isAudioOrVideoEvidence(item) {
    return item.kind === "audio" || item.kind === "video";
}
function getTranscriptText(result) {
    var _result_transcription;
    var _result_transcription_text;
    return (_result_transcription_text = result === null || result === void 0 ? void 0 : (_result_transcription = result.transcription) === null || _result_transcription === void 0 ? void 0 : _result_transcription.text) !== null && _result_transcription_text !== void 0 ? _result_transcription_text : result === null || result === void 0 ? void 0 : result.transcript;
}
function inferEvidenceKindFromRecord(evidence) {
    var _evidence_mimeType;
    const mimeType = (_evidence_mimeType = evidence.mimeType) !== null && _evidence_mimeType !== void 0 ? _evidence_mimeType : "";
    var _evidence_type;
    const type = (_evidence_type = evidence.type) !== null && _evidence_type !== void 0 ? _evidence_type : "";
    if (mimeType.startsWith("image/") || type === "image") {
        return "image";
    }
    if (mimeType.startsWith("video/") || type === "video") {
        return "video";
    }
    if (mimeType.startsWith("audio/") || type === "audio") {
        return "audio";
    }
    return "document";
}
function evidenceRecordToItem(evidence) {
    const evidenceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEvidenceId"])(evidence);
    var _evidence_createdAt, _ref;
    const uploadedAt = (_ref = (_evidence_createdAt = evidence.createdAt) !== null && _evidence_createdAt !== void 0 ? _evidence_createdAt : evidence.updatedAt) !== null && _ref !== void 0 ? _ref : new Date().toISOString();
    var _evidence_fileName, _evidence_fileName1, _evidence_sha256Hash;
    return {
        id: evidenceId || "".concat((_evidence_fileName = evidence.fileName) !== null && _evidence_fileName !== void 0 ? _evidence_fileName : "evidence", "-").concat(uploadedAt),
        backendEvidenceId: evidenceId,
        name: (_evidence_fileName1 = evidence.fileName) !== null && _evidence_fileName1 !== void 0 ? _evidence_fileName1 : "Evidence file",
        sizeLabel: formatOptionalFileSize(evidence.size),
        kind: inferEvidenceKindFromRecord(evidence),
        sha256Hash: (_evidence_sha256Hash = evidence.sha256Hash) !== null && _evidence_sha256Hash !== void 0 ? _evidence_sha256Hash : "hash-unavailable",
        uploadedAt,
        backendStatus: evidence.status,
        storageProvider: evidence.storageProvider,
        mimeType: evidence.mimeType,
        sizeBytes: evidence.size,
        deletionRequestedAt: evidence.deletionRequestedAt,
        deletedAt: evidence.deletedAt,
        transcript: getTranscriptText(evidence.transcription ? {
            transcription: evidence.transcription
        } : null),
        transcriptionStatus: evidence.transcription ? "available" : undefined,
        status: evidence.deletedAt ? "deleted" : evidence.status === "synced" || evidence.status === "local_only" ? "synced" : "attached"
    };
}
function createAuditEntry(action, detail) {
    let timestamp = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Date().toISOString();
    return {
        id: "".concat(action, "-").concat(timestamp, "-").concat(Math.random().toString(36).slice(2, 8)),
        action,
        detail,
        timestamp
    };
}
async function loadEvidenceDetailPatch(evidenceId, item) {
    const [evidence, metadata, auditChain] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidence"])(evidenceId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceMetadata"])(evidenceId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceAuditChain"])(evidenceId)
    ]);
    let transcriptionResult = null;
    let transcriptionStatus = item.kind === "audio" || item.kind === "video" ? "not_requested" : undefined;
    if (item.kind === "audio" || item.kind === "video") {
        try {
            transcriptionResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceTranscription"])(evidenceId);
            transcriptionStatus = "available";
        } catch (e) {
            transcriptionStatus = "not_found";
        }
    }
    var _evidence_status, _evidence_storageProvider, _evidence_mimeType, _evidence_size, _evidence_deletionRequestedAt, _evidence_deletedAt;
    return {
        backendEvidenceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEvidenceId"])(evidence) || evidenceId,
        metadata,
        auditChain,
        transcript: getTranscriptText(transcriptionResult),
        transcriptionStatus,
        backendStatus: (_evidence_status = evidence.status) !== null && _evidence_status !== void 0 ? _evidence_status : metadata.status,
        storageProvider: (_evidence_storageProvider = evidence.storageProvider) !== null && _evidence_storageProvider !== void 0 ? _evidence_storageProvider : metadata.storageProvider,
        mimeType: (_evidence_mimeType = evidence.mimeType) !== null && _evidence_mimeType !== void 0 ? _evidence_mimeType : metadata.mimeType,
        sizeBytes: (_evidence_size = evidence.size) !== null && _evidence_size !== void 0 ? _evidence_size : metadata.size,
        deletionRequestedAt: (_evidence_deletionRequestedAt = evidence.deletionRequestedAt) !== null && _evidence_deletionRequestedAt !== void 0 ? _evidence_deletionRequestedAt : metadata.deletionRequestedAt,
        deletedAt: (_evidence_deletedAt = evidence.deletedAt) !== null && _evidence_deletedAt !== void 0 ? _evidence_deletedAt : metadata.deletedAt,
        detailError: undefined
    };
}
function EvidenceVaultCard(param) {
    let { item, onRemove, onRefresh, onVerify, onTranscribe, isBusy } = param;
    const isDeleted = item.status === "deleted" || Boolean(item.deletedAt);
    const statusText = isDeleted ? "Deleted" : item.status === "synced" ? "Uploaded" : item.status === "restored" ? "Re-upload needed" : "Attached";
    const canUseBackendActions = Boolean(item.backendEvidenceId) && !isDeleted;
    if (item.kind === "image") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "group relative min-h-[148px] overflow-hidden rounded-[20px] bg-[#0f172a] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
            children: [
                item.previewUrl ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.previewUrl,
                    alt: item.name,
                    className: "absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 444,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-90 [background:linear-gradient(180deg,#7fb5dd_0%,#d8edf8_37%,#263d26_38%,#0e1724_45%,#30343b_100%)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-[43%] bottom-0 top-[46%] bg-[#2b3036]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-[49.5%] top-[48%] w-1 bg-[#f7d552]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0)_100%)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onRemove(item),
                    disabled: isBusy,
                    className: "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60",
                    "aria-label": "Remove ".concat(item.name),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex min-w-0 items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                                    size: 12,
                                    className: "opacity-80"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate text-[11px] font-medium opacity-90",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 text-[10px] opacity-70",
                            children: item.sizeLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, this);
    }
    if (item.kind === "video") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative min-h-[148px] overflow-hidden rounded-[20px] bg-[#111827] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
            children: [
                item.previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: item.previewUrl,
                    className: "absolute inset-0 h-full w-full object-cover opacity-80",
                    muted: true
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 483,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-80 blur-[1px] [background:linear-gradient(90deg,#17261b_0%,#3f5935_26%,#0f2416_50%,#65755c_72%,#1a2b1d_100%)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 grid place-items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>canUseBackendActions ? onTranscribe(item) : undefined,
                        disabled: !canUseBackendActions || isBusy,
                        className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/30",
                        "aria-label": "Process ".concat(item.name),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPlayFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPlayFilled$3e$__["IconPlayerPlayFilled"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onRemove(item),
                    disabled: isBusy,
                    className: "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60",
                    "aria-label": "Remove ".concat(item.name),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-2.5 left-2.5 max-w-[65%] truncate text-[11px] font-medium text-white",
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 513,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute bottom-2.5 right-2.5 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white",
                    children: statusText
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
            lineNumber: 481,
            columnNumber: 7
        }, this);
    }
    if (item.kind === "audio") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative flex min-h-[148px] flex-col justify-center rounded-[20px] border-2 border-dashed border-[#FDBA74] bg-white px-3 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onRemove(item),
                    disabled: isBusy,
                    className: "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center text-[#94A3B8] transition hover:text-[#475569]",
                    "aria-label": "Remove ".concat(item.name),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-[220px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFEDD5] text-[#EA580C]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block truncate text-xs font-semibold text-[#1E293B]",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[10px] font-medium text-[#F97316]",
                                            children: isBusy ? "Processing..." : statusText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2.5 h-1.5 rounded-full bg-[#F1F5F9]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 rounded-full bg-[#FF8F00]", isBusy ? "w-1/2" : "w-full")
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center justify-between gap-2 text-[10px] text-[#64748B]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.sizeLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onTranscribe(item),
                                    disabled: !canUseBackendActions || isBusy,
                                    className: "font-bold text-[#0F5D9F] hover:underline disabled:text-[#94A3B8] disabled:no-underline",
                                    children: "Transcribe"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 557,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 535,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
            lineNumber: 525,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative grid min-h-[148px] place-items-center rounded-[20px] border border-[#E2E8F0] bg-white p-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onRemove(item),
                disabled: isBusy,
                className: "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center text-[#94A3B8] transition hover:text-[#475569]",
                "aria-label": "Remove ".concat(item.name),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 582,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF7ED] text-[#F97316]",
                        children: item.name.toLowerCase().endsWith(".pdf") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileTypePdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileTypePdf$3e$__["IconFileTypePdf"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 587,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 max-w-[150px] truncate text-xs font-semibold text-[#1E293B]",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-[10px] text-[#94A3B8]",
                        children: item.sizeLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 flex justify-center gap-2.5 text-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRefresh(item),
                                disabled: !canUseBackendActions || isBusy,
                                className: "font-bold text-[#0F5D9F] hover:underline disabled:text-[#94A3B8] disabled:no-underline",
                                children: "Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onVerify(item),
                                disabled: !canUseBackendActions || isBusy,
                                className: "font-bold text-[#0F5D9F] hover:underline disabled:text-[#94A3B8] disabled:no-underline",
                                children: "Verify"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
        lineNumber: 574,
        columnNumber: 5
    }, this);
}
_c = EvidenceVaultCard;
function ReportSubmissionEvidencePage(param) {
    let { initialCategory, initialTopic, initialMessage } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldContinueToReviewAfterConsentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hydratedConversationSessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [reportDraft, setReportDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ReportSubmissionEvidencePage.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportFlowDraft"])()
    }["ReportSubmissionEvidencePage.useState"]);
    const fromTriage = searchParams.get("fromTriage") === "1";
    const conversationSessionId = searchParams.get("conversationSessionId");
    const contextFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportSubmissionEvidencePage.useMemo[contextFlow]": ()=>initialTopic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboard$2d$card$2d$flows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardCardFlow"])(initialTopic) : null
    }["ReportSubmissionEvidencePage.useMemo[contextFlow]"], [
        initialTopic
    ]);
    const assistantSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportSubmissionEvidencePage.useMemo[assistantSource]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$triage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssistantTriageSource"])()
    }["ReportSubmissionEvidencePage.useMemo[assistantSource]"], []);
    const backHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportSubmissionEvidencePage.useMemo[backHref]": ()=>{
            if (!fromTriage) {
                return undefined;
            }
            return conversationSessionId ? "/dashboard?view=reportsubmissionsupport&conversationSessionId=".concat(conversationSessionId) : "/dashboard?view=reportsubmissionsupport";
        }
    }["ReportSubmissionEvidencePage.useMemo[backHref]"], [
        conversationSessionId,
        fromTriage
    ]);
    const defaultIncidentTitle = (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.title) || (initialCategory && contextFlow ? "".concat(contextFlow.title, " incident report") : "Incident report");
    const defaultIncidentDate = (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.date) || new Date().toISOString().slice(0, 10);
    const defaultIncidentLocation = (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.location) || (assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.where) || "";
    const defaultNarrative = (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.summary) || (initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim()) || (assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.what) || "";
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultIncidentTitle);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultIncidentDate);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultIncidentLocation);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [supportMessage, setSupportMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [attachedFiles, setAttachedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [auditTrail, setAuditTrail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draftSavedAt, setDraftSavedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [restoredDraftNotice, setRestoredDraftNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHashingEvidence, setIsHashingEvidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploadingEvidence, setIsUploadingEvidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPersistingReport, setIsPersistingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [evidenceError, setEvidenceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingConsentRequirement, setPendingConsentRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingFiles, setPendingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingTranscriptionItem, setPendingTranscriptionItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGrantingConsent, setIsGrantingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranscribingEvidenceId, setIsTranscribingEvidenceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingEvidenceDetailId, setLoadingEvidenceDetailId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verifyingEvidenceId, setVerifyingEvidenceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingEvidenceId, setDeletingEvidenceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mergeDraft = (partialDraft)=>{
        const nextDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])(partialDraft);
        setReportDraft(nextDraft);
        return nextDraft;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionEvidencePage.useEffect": ()=>{
            setDescription({
                "ReportSubmissionEvidencePage.useEffect": (currentDescription)=>currentDescription || defaultNarrative
            }["ReportSubmissionEvidencePage.useEffect"]);
        }
    }["ReportSubmissionEvidencePage.useEffect"], [
        defaultNarrative
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionEvidencePage.useEffect": ()=>{
            if (!fromTriage || !conversationSessionId) {
                return;
            }
            if (hydratedConversationSessionIdRef.current === conversationSessionId) {
                return;
            }
            let isActive = true;
            void ({
                "ReportSubmissionEvidencePage.useEffect": async ()=>{
                    try {
                        const sessionEnvelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$conversation$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversationFlowSession"])(conversationSessionId);
                        if (!isActive) {
                            return;
                        }
                        const captured = extractConversationReportFields({
                            factExtraction: sessionEnvelope.factExtraction,
                            messages: sessionEnvelope.messages
                        });
                        var _reportDraft_structuredFields;
                        const mergedStructuredFields = {
                            ...(_reportDraft_structuredFields = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.structuredFields) !== null && _reportDraft_structuredFields !== void 0 ? _reportDraft_structuredFields : {},
                            ...captured.fields.who ? {
                                who: captured.fields.who
                            } : {},
                            ...captured.fields.what ? {
                                what: captured.fields.what
                            } : {},
                            ...captured.fields.when ? {
                                when: captured.fields.when
                            } : {},
                            ...captured.fields.where ? {
                                where: captured.fields.where
                            } : {},
                            ...captured.fields.how ? {
                                how: captured.fields.how
                            } : {},
                            ...captured.fields.witnesses ? {
                                witnesses: captured.fields.witnesses
                            } : {},
                            ...captured.fields.injuries ? {
                                injuries: captured.fields.injuries
                            } : {},
                            ...typeof captured.fields.repeatedIncidents === "boolean" ? {
                                repeatedIncidents: captured.fields.repeatedIncidents
                            } : {}
                        };
                        setLocation({
                            "ReportSubmissionEvidencePage.useEffect": (currentLocation)=>currentLocation || captured.fields.where || ""
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setDescription({
                            "ReportSubmissionEvidencePage.useEffect": (currentDescription)=>currentDescription || captured.narrative || ""
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setDate({
                            "ReportSubmissionEvidencePage.useEffect": (currentDate)=>{
                                if (!captured.fields.when) {
                                    return currentDate;
                                }
                                const isDefaultToday = currentDate === new Date().toISOString().slice(0, 10) && !(reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.date);
                                return !currentDate || isDefaultToday ? captured.fields.when : currentDate;
                            }
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        var _reportDraft_incidentType, _initialMessage_trim, _reportDraft_evidenceIds;
                        setReportDraft((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                            reportId: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId,
                            title: (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.title) || (initialCategory && contextFlow ? "".concat(contextFlow.title, " incident report") : "Incident report"),
                            date: (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.date) || captured.fields.when || new Date().toISOString().slice(0, 10),
                            location: (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.location) || captured.fields.where || "",
                            summary: (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.summary) || captured.narrative || (initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim()) || "",
                            structuredFields: mergedStructuredFields,
                            incidentCategory: initialCategory !== null && initialCategory !== void 0 ? initialCategory : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentCategory,
                            incidentType: (_reportDraft_incidentType = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentType) !== null && _reportDraft_incidentType !== void 0 ? _reportDraft_incidentType : initialCategory,
                            topic: initialTopic !== null && initialTopic !== void 0 ? initialTopic : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.topic,
                            starterPrompt: (_initialMessage_trim = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim()) !== null && _initialMessage_trim !== void 0 ? _initialMessage_trim : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.starterPrompt,
                            evidenceIds: (_reportDraft_evidenceIds = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.evidenceIds) !== null && _reportDraft_evidenceIds !== void 0 ? _reportDraft_evidenceIds : []
                        }));
                        hydratedConversationSessionIdRef.current = conversationSessionId;
                    } catch (e) {
                    // Keep the existing assistant snapshot fallback when the live session cannot be loaded.
                    }
                }
            })["ReportSubmissionEvidencePage.useEffect"]();
            return ({
                "ReportSubmissionEvidencePage.useEffect": ()=>{
                    isActive = false;
                }
            })["ReportSubmissionEvidencePage.useEffect"];
        }
    }["ReportSubmissionEvidencePage.useEffect"], [
        contextFlow,
        conversationSessionId,
        fromTriage,
        initialCategory,
        initialMessage,
        initialTopic,
        reportDraft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionEvidencePage.useEffect": ()=>{
            var _latestDraft_structuredFields, _latestDraft_structuredFields1, _latestDraft_structuredFields2, _latestDraft_structuredFields3;
            const latestDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReportFlowDraft"])();
            var _latestDraft_structuredFields4, _ref, _ref1, _ref2, _ref3, _latestDraft_incidentType, _initialMessage_trim, _latestDraft_evidenceIds;
            setReportDraft((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeReportFlowDraft"])({
                reportId: latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.reportId,
                title,
                date,
                location,
                summary: description,
                structuredFields: {
                    ...(_latestDraft_structuredFields4 = latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.structuredFields) !== null && _latestDraft_structuredFields4 !== void 0 ? _latestDraft_structuredFields4 : {},
                    who: (_ref = latestDraft === null || latestDraft === void 0 ? void 0 : (_latestDraft_structuredFields = latestDraft.structuredFields) === null || _latestDraft_structuredFields === void 0 ? void 0 : _latestDraft_structuredFields.who) !== null && _ref !== void 0 ? _ref : assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.who,
                    how: (_ref1 = latestDraft === null || latestDraft === void 0 ? void 0 : (_latestDraft_structuredFields1 = latestDraft.structuredFields) === null || _latestDraft_structuredFields1 === void 0 ? void 0 : _latestDraft_structuredFields1.how) !== null && _ref1 !== void 0 ? _ref1 : assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.how,
                    witnesses: (_ref2 = latestDraft === null || latestDraft === void 0 ? void 0 : (_latestDraft_structuredFields2 = latestDraft.structuredFields) === null || _latestDraft_structuredFields2 === void 0 ? void 0 : _latestDraft_structuredFields2.witnesses) !== null && _ref2 !== void 0 ? _ref2 : assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.witnesses,
                    injuries: (_ref3 = latestDraft === null || latestDraft === void 0 ? void 0 : (_latestDraft_structuredFields3 = latestDraft.structuredFields) === null || _latestDraft_structuredFields3 === void 0 ? void 0 : _latestDraft_structuredFields3.injuries) !== null && _ref3 !== void 0 ? _ref3 : assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.injuries,
                    what: description,
                    when: date,
                    where: location
                },
                incidentCategory: initialCategory !== null && initialCategory !== void 0 ? initialCategory : latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.incidentCategory,
                incidentType: (_latestDraft_incidentType = latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.incidentType) !== null && _latestDraft_incidentType !== void 0 ? _latestDraft_incidentType : initialCategory,
                topic: initialTopic !== null && initialTopic !== void 0 ? initialTopic : latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.topic,
                starterPrompt: (_initialMessage_trim = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.trim()) !== null && _initialMessage_trim !== void 0 ? _initialMessage_trim : latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.starterPrompt,
                evidenceIds: (_latestDraft_evidenceIds = latestDraft === null || latestDraft === void 0 ? void 0 : latestDraft.evidenceIds) !== null && _latestDraft_evidenceIds !== void 0 ? _latestDraft_evidenceIds : []
            }));
        }
    }["ReportSubmissionEvidencePage.useEffect"], [
        assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.how,
        assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.injuries,
        assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.witnesses,
        assistantSource === null || assistantSource === void 0 ? void 0 : assistantSource.timeline.who,
        date,
        description,
        initialCategory,
        initialMessage,
        initialTopic,
        location,
        title
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionEvidencePage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedDraft = window.localStorage.getItem(DRAFT_STORAGE_KEY);
            if (!savedDraft) {
                return;
            }
            try {
                var _parsed_attachments;
                const parsed = JSON.parse(savedDraft);
                setTitle({
                    "ReportSubmissionEvidencePage.useEffect": (currentTitle)=>currentTitle || defaultIncidentTitle
                }["ReportSubmissionEvidencePage.useEffect"]);
                setDate({
                    "ReportSubmissionEvidencePage.useEffect": (currentDate)=>currentDate || defaultIncidentDate
                }["ReportSubmissionEvidencePage.useEffect"]);
                setLocation({
                    "ReportSubmissionEvidencePage.useEffect": (currentLocation)=>currentLocation || defaultIncidentLocation
                }["ReportSubmissionEvidencePage.useEffect"]);
                var _parsed_description;
                setDescription((_parsed_description = parsed.description) !== null && _parsed_description !== void 0 ? _parsed_description : defaultNarrative);
                var _parsed_supportMessage;
                setSupportMessage((_parsed_supportMessage = parsed.supportMessage) !== null && _parsed_supportMessage !== void 0 ? _parsed_supportMessage : "");
                setDraftSavedAt(parsed.savedAt ? new Date(parsed.savedAt).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                }) : null);
                if ((_parsed_attachments = parsed.attachments) === null || _parsed_attachments === void 0 ? void 0 : _parsed_attachments.length) {
                    var _parsed_auditTrail;
                    setAttachedFiles([]);
                    setAuditTrail(((_parsed_auditTrail = parsed.auditTrail) === null || _parsed_auditTrail === void 0 ? void 0 : _parsed_auditTrail.length) ? parsed.auditTrail : [
                        createAuditEntry("restored", "Draft text was restored. Evidence files must be uploaded again before review.")
                    ]);
                    setRestoredDraftNotice("Draft text was restored from this browser. Re-upload any evidence files before continuing.");
                }
            } catch (e) {
                window.localStorage.removeItem(DRAFT_STORAGE_KEY);
            }
        }
    }["ReportSubmissionEvidencePage.useEffect"], [
        defaultIncidentDate,
        defaultIncidentLocation,
        defaultIncidentTitle,
        defaultNarrative
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportSubmissionEvidencePage.useEffect": ()=>{
            const reportId = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId;
            if (!reportId || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
                return;
            }
            let isActive = true;
            void ({
                "ReportSubmissionEvidencePage.useEffect": async ()=>{
                    try {
                        const [report, evidenceRecords] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReport"])(reportId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listReportEvidence"])(reportId)
                        ]);
                        if (!isActive) {
                            return;
                        }
                        var _report_structuredFields;
                        const structuredFields = (_report_structuredFields = report.structuredFields) !== null && _report_structuredFields !== void 0 ? _report_structuredFields : {};
                        const nextDescription = report.originalNarrative || (typeof structuredFields.what === "string" ? structuredFields.what : "") || reportDraft.summary || "";
                        const nextSupportMessage = typeof structuredFields.supportMessage === "string" ? structuredFields.supportMessage : "";
                        setDescription({
                            "ReportSubmissionEvidencePage.useEffect": (currentDescription)=>currentDescription || nextDescription
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setTitle({
                            "ReportSubmissionEvidencePage.useEffect": (currentTitle)=>currentTitle || (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.title) || defaultIncidentTitle
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setDate({
                            "ReportSubmissionEvidencePage.useEffect": (currentDate)=>currentDate || (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.date) || defaultIncidentDate
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setLocation({
                            "ReportSubmissionEvidencePage.useEffect": (currentLocation)=>currentLocation || (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.location) || (typeof structuredFields.where === "string" ? structuredFields.where : "") || defaultIncidentLocation
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        setSupportMessage({
                            "ReportSubmissionEvidencePage.useEffect": (currentSupportMessage)=>currentSupportMessage || nextSupportMessage
                        }["ReportSubmissionEvidencePage.useEffect"]);
                        if (evidenceRecords.length) {
                            setAttachedFiles({
                                "ReportSubmissionEvidencePage.useEffect": (currentItems)=>{
                                    const backendItems = evidenceRecords.map(evidenceRecordToItem);
                                    const backendById = new Map(backendItems.filter({
                                        "ReportSubmissionEvidencePage.useEffect": (item)=>Boolean(item.backendEvidenceId)
                                    }["ReportSubmissionEvidencePage.useEffect"]).map({
                                        "ReportSubmissionEvidencePage.useEffect": (item)=>[
                                                item.backendEvidenceId,
                                                item
                                            ]
                                    }["ReportSubmissionEvidencePage.useEffect"]));
                                    const refreshedCurrentItems = currentItems.map({
                                        "ReportSubmissionEvidencePage.useEffect.refreshedCurrentItems": (item)=>{
                                            const backendItem = item.backendEvidenceId ? backendById.get(item.backendEvidenceId) : undefined;
                                            if (!backendItem) {
                                                return item;
                                            }
                                            return {
                                                ...backendItem,
                                                id: item.id,
                                                previewUrl: item.previewUrl
                                            };
                                        }
                                    }["ReportSubmissionEvidencePage.useEffect.refreshedCurrentItems"]);
                                    const currentIds = new Set(refreshedCurrentItems.map({
                                        "ReportSubmissionEvidencePage.useEffect": (item)=>item.backendEvidenceId
                                    }["ReportSubmissionEvidencePage.useEffect"]).filter({
                                        "ReportSubmissionEvidencePage.useEffect": (item)=>Boolean(item)
                                    }["ReportSubmissionEvidencePage.useEffect"]));
                                    const newBackendItems = backendItems.filter({
                                        "ReportSubmissionEvidencePage.useEffect.newBackendItems": (item)=>{
                                            var _item_backendEvidenceId;
                                            return !currentIds.has((_item_backendEvidenceId = item.backendEvidenceId) !== null && _item_backendEvidenceId !== void 0 ? _item_backendEvidenceId : "");
                                        }
                                    }["ReportSubmissionEvidencePage.useEffect.newBackendItems"]);
                                    return [
                                        ...refreshedCurrentItems,
                                        ...newBackendItems
                                    ];
                                }
                            }["ReportSubmissionEvidencePage.useEffect"]);
                            var _reportDraft_evidenceIds;
                            mergeDraft({
                                evidenceIds: [
                                    ...new Set([
                                        ...(_reportDraft_evidenceIds = reportDraft.evidenceIds) !== null && _reportDraft_evidenceIds !== void 0 ? _reportDraft_evidenceIds : [],
                                        ...evidenceRecords.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEvidenceId"]).filter({
                                            "ReportSubmissionEvidencePage.useEffect": (item)=>Boolean(item)
                                        }["ReportSubmissionEvidencePage.useEffect"])
                                    ])
                                ]
                            });
                        }
                    } catch (error) {
                        if (isActive) {
                            setEvidenceError(error instanceof Error ? error.message : "Saved evidence could not be loaded.");
                        }
                    }
                }
            })["ReportSubmissionEvidencePage.useEffect"]();
            return ({
                "ReportSubmissionEvidencePage.useEffect": ()=>{
                    isActive = false;
                }
            })["ReportSubmissionEvidencePage.useEffect"];
        }
    }["ReportSubmissionEvidencePage.useEffect"], [
        defaultIncidentDate,
        defaultIncidentLocation,
        defaultIncidentTitle,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.date,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.location,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.summary,
        reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.title
    ]);
    const buildReportPayload = function() {
        let nextEvidenceItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : attachedFiles;
        const activeEvidenceItems = nextEvidenceItems.filter((item)=>item.status !== "deleted" && !item.deletedAt);
        var _reportDraft_structuredFields;
        const existingStructuredFields = (_reportDraft_structuredFields = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.structuredFields) !== null && _reportDraft_structuredFields !== void 0 ? _reportDraft_structuredFields : {};
        const narrative = description.trim() || (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.summary) || "Incident report draft";
        var _reportDraft_incidentType, _ref, _ref1;
        const incidentType = (_ref1 = (_ref = (_reportDraft_incidentType = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentType) !== null && _reportDraft_incidentType !== void 0 ? _reportDraft_incidentType : initialCategory) !== null && _ref !== void 0 ? _ref : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentCategory) !== null && _ref1 !== void 0 ? _ref1 : inferIncidentTypeFromNarrative([
            title,
            narrative,
            location,
            supportMessage
        ].join(" "));
        return {
            language: "en",
            jurisdiction: "NSW",
            context: title.trim() || (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.title) || "SafeSpeak incident report",
            originalNarrative: narrative,
            incidentType,
            structuredFields: {
                ...existingStructuredFields,
                what: narrative,
                when: date || existingStructuredFields.when,
                where: location || existingStructuredFields.where,
                supportMessage: supportMessage.trim() || undefined,
                evidenceItems: activeEvidenceItems.map((item)=>{
                    var _item_backendStatus;
                    return {
                        evidenceId: item.backendEvidenceId,
                        name: item.name,
                        kind: item.kind,
                        mimeType: item.mimeType,
                        sizeBytes: item.sizeBytes,
                        sha256Hash: item.sha256Hash === "hash-unavailable" ? undefined : item.sha256Hash,
                        status: (_item_backendStatus = item.backendStatus) !== null && _item_backendStatus !== void 0 ? _item_backendStatus : item.status,
                        storageProvider: item.storageProvider,
                        uploadedAt: item.uploadedAt
                    };
                })
            },
            status: "draft"
        };
    };
    const mergeCurrentReportDraft = function() {
        let nextEvidenceItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : attachedFiles, savedReport = arguments.length > 1 ? arguments[1] : void 0;
        const payload = buildReportPayload(nextEvidenceItems);
        const activeEvidenceIds = nextEvidenceItems.map((item)=>item.backendEvidenceId).filter((item)=>Boolean(item));
        var _payload_originalNarrative, _savedReport_incidentType, _ref, _reportDraft_evidenceIds;
        const nextDraft = {
            title: title.trim() || payload.context || "",
            date,
            location,
            summary: (_payload_originalNarrative = payload.originalNarrative) !== null && _payload_originalNarrative !== void 0 ? _payload_originalNarrative : "",
            structuredFields: payload.structuredFields,
            incidentType: (_ref = (_savedReport_incidentType = savedReport === null || savedReport === void 0 ? void 0 : savedReport.incidentType) !== null && _savedReport_incidentType !== void 0 ? _savedReport_incidentType : payload.incidentType) !== null && _ref !== void 0 ? _ref : reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentType,
            incidentCategory: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentCategory,
            topic: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.topic,
            starterPrompt: reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.starterPrompt,
            evidenceIds: [
                ...new Set([
                    ...(_reportDraft_evidenceIds = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.evidenceIds) !== null && _reportDraft_evidenceIds !== void 0 ? _reportDraft_evidenceIds : [],
                    ...activeEvidenceIds
                ])
            ]
        };
        if (savedReport === null || savedReport === void 0 ? void 0 : savedReport._id) {
            nextDraft.reportId = savedReport._id;
        }
        return mergeDraft(nextDraft);
    };
    const persistReportDraftToBackend = async function() {
        let nextEvidenceItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : attachedFiles;
        setIsPersistingReport(true);
        setEvidenceError(null);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
                var _reportDraft_incidentType, _ref;
                return mergeCurrentReportDraft(nextEvidenceItems, {
                    _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportId"])(reportDraft),
                    incidentType: (_ref = (_reportDraft_incidentType = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.incidentType) !== null && _reportDraft_incidentType !== void 0 ? _reportDraft_incidentType : initialCategory) !== null && _ref !== void 0 ? _ref : undefined
                });
            }
            const payload = buildReportPayload(nextEvidenceItems);
            const savedReport = (reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateReport"])(reportDraft.reportId, payload) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createReport"])(payload);
            return mergeCurrentReportDraft(nextEvidenceItems, savedReport);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingConsentRequirement(error.requirement);
                throw error;
            }
            setEvidenceError(error instanceof Error ? error.message : "Report draft could not be saved.");
            throw error;
        } finally{
            setIsPersistingReport(false);
        }
    };
    const attachFiles = async (files, options)=>{
        const fileList = Array.isArray(files) ? files : Array.from(files);
        if (!fileList.length) {
            return;
        }
        setEvidenceError(null);
        setIsHashingEvidence(true);
        setIsUploadingEvidence(true);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
                const nextItems = await Promise.all(fileList.map(async (file)=>{
                    const uploadedAt = new Date().toISOString();
                    return {
                        id: "".concat(file.name, "-").concat(file.lastModified, "-").concat(Math.random().toString(36).slice(2, 8)),
                        backendEvidenceId: undefined,
                        name: file.name,
                        sizeLabel: formatFileSize(file.size),
                        kind: inferEvidenceKind(file),
                        sha256Hash: await computeSha256Hash(file),
                        uploadedAt,
                        mimeType: file.type || "application/octet-stream",
                        sizeBytes: file.size,
                        previewUrl: file.type.startsWith("image/") || file.type.startsWith("video/") ? URL.createObjectURL(file) : undefined,
                        status: "attached"
                    };
                }));
                setAttachedFiles((currentItems)=>[
                        ...currentItems,
                        ...nextItems
                    ]);
                setAuditTrail((currentTrail)=>[
                        ...currentTrail,
                        ...nextItems.map((item)=>createAuditEntry("attached", "".concat(item.name, " attached locally in mock mode.")))
                    ]);
                var _reportDraft_evidenceIds;
                mergeDraft({
                    reportId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReportId"])(reportDraft),
                    evidenceIds: [
                        ...new Set([
                            ...(_reportDraft_evidenceIds = reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.evidenceIds) !== null && _reportDraft_evidenceIds !== void 0 ? _reportDraft_evidenceIds : [],
                            ...nextItems.map((item)=>item.id)
                        ])
                    ]
                });
                setPendingFiles([]);
                setPendingConsentRequirement(null);
                return;
            }
            const currentConsent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentConsent"])();
            const allowCloudSync = (options === null || options === void 0 ? void 0 : options.forceCloudSync) || currentConsent.cloud_sync;
            if (!allowCloudSync && !options) {
                setPendingFiles(fileList);
                setPendingConsentRequirement(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentRequirements"].cloudEvidence);
                return;
            }
            if (!allowCloudSync) {
                setPendingFiles([]);
                setEvidenceError("Evidence must be uploaded to the SafeSpeak evidence vault before it can be attached to this report.");
                return;
            }
            const syncedReportDraft = allowCloudSync ? await persistReportDraftToBackend() : reportDraft;
            const syncedReportId = syncedReportDraft === null || syncedReportDraft === void 0 ? void 0 : syncedReportDraft.reportId;
            if (!syncedReportId) {
                throw new Error("A backend SafeSpeak report is required before evidence can be attached.");
            }
            const nextItems = await Promise.all(fileList.map(async (file)=>{
                const uploadedAt = new Date().toISOString();
                const baseItem = {
                    id: "".concat(file.name, "-").concat(file.lastModified, "-").concat(Math.random().toString(36).slice(2, 8)),
                    backendEvidenceId: undefined,
                    name: file.name,
                    sizeLabel: formatFileSize(file.size),
                    kind: inferEvidenceKind(file),
                    sha256Hash: await computeSha256Hash(file),
                    uploadedAt,
                    mimeType: file.type || "application/octet-stream",
                    sizeBytes: file.size,
                    previewUrl: file.type.startsWith("image/") || file.type.startsWith("video/") ? URL.createObjectURL(file) : undefined,
                    status: "synced"
                };
                const upload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestEvidenceUploadUrl"])({
                    reportId: syncedReportId,
                    type: inferEvidenceKind(file),
                    fileName: file.name,
                    mimeType: file.type || "application/octet-stream",
                    size: file.size
                });
                const reservedEvidenceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEvidenceId"])(upload.evidence);
                if (!reservedEvidenceId) {
                    throw new Error("Evidence reservation did not return an id.");
                }
                const completedEvidence = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["completeEvidenceUpload"])({
                    evidenceId: reservedEvidenceId,
                    file,
                    sha256Hash: baseItem.sha256Hash
                });
                const completedEvidenceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEvidenceId"])(completedEvidence) || reservedEvidenceId;
                const detailPatch = await loadEvidenceDetailPatch(completedEvidenceId, baseItem).catch((error)=>({
                        detailError: error instanceof Error ? error.message : "Evidence details could not be loaded."
                    }));
                return {
                    ...baseItem,
                    ...detailPatch,
                    backendEvidenceId: completedEvidenceId,
                    backendStatus: completedEvidence.status,
                    storageProvider: completedEvidence.storageProvider,
                    mimeType: completedEvidence.mimeType,
                    sizeBytes: completedEvidence.size,
                    deletionRequestedAt: completedEvidence.deletionRequestedAt,
                    deletedAt: completedEvidence.deletedAt,
                    status: "synced"
                };
            }));
            setAttachedFiles((currentItems)=>[
                    ...currentItems,
                    ...nextItems
                ]);
            setAuditTrail((currentTrail)=>[
                    ...currentTrail,
                    ...nextItems.map((item)=>createAuditEntry("attached", "".concat(item.name, " uploaded to the evidence vault at ").concat(formatEvidenceTimestamp(item.uploadedAt), ".")))
                ]);
            var _syncedReportDraft_evidenceIds;
            mergeDraft({
                evidenceIds: [
                    ...new Set([
                        ...(_syncedReportDraft_evidenceIds = syncedReportDraft === null || syncedReportDraft === void 0 ? void 0 : syncedReportDraft.evidenceIds) !== null && _syncedReportDraft_evidenceIds !== void 0 ? _syncedReportDraft_evidenceIds : [],
                        ...nextItems.map((item)=>item.backendEvidenceId).filter((item)=>Boolean(item))
                    ])
                ]
            });
            if (allowCloudSync) {
                await persistReportDraftToBackend([
                    ...attachedFiles,
                    ...nextItems
                ]);
            }
            setPendingFiles([]);
            setPendingConsentRequirement(null);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingTranscriptionItem(null);
                setPendingFiles(fileList);
                setPendingConsentRequirement(error.requirement);
                return;
            }
            setEvidenceError(error instanceof Error ? error.message : "Evidence could not be attached.");
        } finally{
            setIsHashingEvidence(false);
            setIsUploadingEvidence(false);
        }
    };
    const handleFilesSelected = async (files)=>{
        if (!(files === null || files === void 0 ? void 0 : files.length)) {
            return;
        }
        await attachFiles(files);
    };
    const removeAttachment = (id)=>{
        setAttachedFiles((currentItems)=>{
            const itemToRemove = currentItems.find((item)=>item.id === id);
            if (itemToRemove) {
                setAuditTrail((currentTrail)=>[
                        ...currentTrail,
                        createAuditEntry("removed", "".concat(itemToRemove.name, " removed from draft."))
                    ]);
            }
            return currentItems.filter((item)=>item.id !== id);
        });
    };
    const refreshEvidenceDetails = async (item)=>{
        if (!item.backendEvidenceId) {
            setEvidenceError("Backend metadata is not available for this evidence item.");
            return;
        }
        setLoadingEvidenceDetailId(item.id);
        setEvidenceError(null);
        try {
            const patch = await loadEvidenceDetailPatch(item.backendEvidenceId, item);
            setAttachedFiles((currentItems)=>currentItems.map((currentItem)=>currentItem.id === item.id ? {
                        ...currentItem,
                        ...patch
                    } : currentItem));
        } catch (error) {
            const message = error instanceof Error ? error.message : "Evidence metadata could not be loaded.";
            setAttachedFiles((currentItems)=>currentItems.map((currentItem)=>currentItem.id === item.id ? {
                        ...currentItem,
                        detailError: message
                    } : currentItem));
            setEvidenceError(message);
        } finally{
            setLoadingEvidenceDetailId(null);
        }
    };
    const handleVerifyEvidenceHash = async (item)=>{
        if (!item.backendEvidenceId) {
            setEvidenceError("Upload this evidence before verifying it with the backend.");
            return;
        }
        const providedHash = item.sha256Hash.trim();
        if (!/^[a-f\d]{64}$/i.test(providedHash)) {
            setEvidenceError("Enter a valid 64-character SHA-256 hash before verifying.");
            return;
        }
        setVerifyingEvidenceId(item.id);
        setEvidenceError(null);
        try {
            const verification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyEvidenceHash"])(item.backendEvidenceId, providedHash);
            const auditChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceAuditChain"])(item.backendEvidenceId);
            setAttachedFiles((currentItems)=>currentItems.map((currentItem)=>currentItem.id === item.id ? {
                        ...currentItem,
                        verification,
                        auditChain,
                        detailError: undefined
                    } : currentItem));
        } catch (error) {
            setEvidenceError(error instanceof Error ? error.message : "Evidence hash could not be verified.");
        } finally{
            setVerifyingEvidenceId(null);
        }
    };
    const handleDeleteEvidence = async (item)=>{
        if (!item.backendEvidenceId) {
            removeAttachment(item.id);
            return;
        }
        const confirmed = window.confirm("Delete ".concat(item.name, " from the evidence vault? This will keep a local deletion record in the chain view."));
        if (!confirmed) {
            return;
        }
        setDeletingEvidenceId(item.id);
        setEvidenceError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteEvidence"])(item.backendEvidenceId);
            const deletedAt = new Date().toISOString();
            const [metadata, auditChain] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceMetadata"])(item.backendEvidenceId).catch(()=>{
                    var _item_metadata;
                    return (_item_metadata = item.metadata) !== null && _item_metadata !== void 0 ? _item_metadata : null;
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceAuditChain"])(item.backendEvidenceId).catch(()=>{
                    var _item_auditChain;
                    return (_item_auditChain = item.auditChain) !== null && _item_auditChain !== void 0 ? _item_auditChain : [];
                })
            ]);
            setAttachedFiles((currentItems)=>currentItems.map((currentItem)=>{
                    var _metadata_status, _metadata_deletionRequestedAt, _ref, _metadata_deletedAt;
                    return currentItem.id === item.id ? {
                        ...currentItem,
                        metadata,
                        auditChain,
                        status: "deleted",
                        backendStatus: (_metadata_status = metadata === null || metadata === void 0 ? void 0 : metadata.status) !== null && _metadata_status !== void 0 ? _metadata_status : "deleted",
                        deletionRequestedAt: (_ref = (_metadata_deletionRequestedAt = metadata === null || metadata === void 0 ? void 0 : metadata.deletionRequestedAt) !== null && _metadata_deletionRequestedAt !== void 0 ? _metadata_deletionRequestedAt : currentItem.deletionRequestedAt) !== null && _ref !== void 0 ? _ref : deletedAt,
                        deletedAt: (_metadata_deletedAt = metadata === null || metadata === void 0 ? void 0 : metadata.deletedAt) !== null && _metadata_deletedAt !== void 0 ? _metadata_deletedAt : deletedAt,
                        detailError: undefined
                    } : currentItem;
                }));
            setAuditTrail((currentTrail)=>[
                    ...currentTrail,
                    createAuditEntry("removed", "".concat(item.name, " deleted from the evidence vault."))
                ]);
        } catch (error) {
            setEvidenceError(error instanceof Error ? error.message : "Evidence could not be deleted.");
        } finally{
            setDeletingEvidenceId(null);
        }
    };
    const saveDraft = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const savedAt = new Date();
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({
            description,
            supportMessage,
            attachments: attachedFiles.map((param)=>{
                let { backendEvidenceId, name, sizeLabel, kind, sha256Hash, uploadedAt, backendStatus, storageProvider, mimeType, sizeBytes, deletionRequestedAt, deletedAt } = param;
                return {
                    backendEvidenceId,
                    name,
                    sizeLabel,
                    kind,
                    sha256Hash,
                    uploadedAt,
                    backendStatus,
                    storageProvider,
                    mimeType,
                    sizeBytes,
                    deletionRequestedAt,
                    deletedAt
                };
            }),
            auditTrail: [
                ...auditTrail,
                createAuditEntry("draft-saved", "Draft metadata saved locally.")
            ],
            savedAt: savedAt.toISOString()
        }));
        setDraftSavedAt(savedAt.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        }));
        setAuditTrail((currentTrail)=>[
                ...currentTrail,
                createAuditEntry("draft-saved", "Draft metadata saved locally.")
            ]);
        setRestoredDraftNotice(null);
        try {
            await persistReportDraftToBackend();
        } catch (e) {
        // Local draft is already saved. Consent and API errors are surfaced by the helper.
        }
    };
    const handleContinue = async ()=>{
        if (isPersistingReport || isUploadingEvidence) {
            return;
        }
        mergeCurrentReportDraft();
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"] && attachedFiles.some((item)=>!item.backendEvidenceId)) {
            setEvidenceError("Upload all evidence to the SafeSpeak vault before continuing to review.");
            return;
        }
        if (attachedFiles.some((item)=>item.status === "restored")) {
            setEvidenceError("Re-upload restored evidence files before continuing to review.");
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$submission$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPORT_SUBMISSION_MOCK_MODE"]) {
            try {
                shouldContinueToReviewAfterConsentRef.current = true;
                await persistReportDraftToBackend();
            } catch (error) {
                if (!(error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"])) {
                    shouldContinueToReviewAfterConsentRef.current = false;
                }
                return;
            }
        } else {
            await persistReportDraftToBackend();
        }
        shouldContinueToReviewAfterConsentRef.current = false;
        router.push("/dashboard?view=reportsubmissionreview");
    };
    const handleTranscribeEvidence = async (item)=>{
        if (!item.backendEvidenceId || !(reportDraft === null || reportDraft === void 0 ? void 0 : reportDraft.reportId)) {
            setEvidenceError("Upload the audio evidence to the vault before transcribing it.");
            return;
        }
        setIsTranscribingEvidenceId(item.id);
        setEvidenceError(null);
        try {
            const transcriptResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$evidence$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transcribeEvidence"])(item.backendEvidenceId, {
                language: "en",
                reportId: reportDraft.reportId,
                saveTranscript: true,
                useAsNarrative: false
            });
            setAttachedFiles((currentItems)=>currentItems.map((currentItem)=>currentItem.id === item.id ? {
                        ...currentItem,
                        transcript: transcriptResult.transcript,
                        transcriptionStatus: "available"
                    } : currentItem));
            await refreshEvidenceDetails(item);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredError"]) {
                setPendingTranscriptionItem(item);
                setPendingConsentRequirement(error.requirement);
                return;
            }
            setEvidenceError(error instanceof Error ? error.message : "Evidence transcription could not be completed.");
        } finally{
            setIsTranscribingEvidenceId(null);
        }
    };
    const exportMetadata = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const payload = {
            exportedAt: new Date().toISOString(),
            description,
            supportMessage,
            attachments: attachedFiles.map((item)=>({
                    backendEvidenceId: item.backendEvidenceId,
                    name: item.name,
                    kind: item.kind,
                    sizeLabel: item.sizeLabel,
                    mimeType: item.mimeType,
                    sizeBytes: item.sizeBytes,
                    sha256Hash: item.sha256Hash,
                    uploadedAt: item.uploadedAt,
                    status: item.status,
                    backendStatus: item.backendStatus,
                    storageProvider: item.storageProvider,
                    deletionRequestedAt: item.deletionRequestedAt,
                    deletedAt: item.deletedAt,
                    verification: item.verification,
                    auditChain: item.auditChain
                })),
            auditTrail
        };
        const blob = new Blob([
            JSON.stringify(payload, null, 2)
        ], {
            type: "application/json"
        });
        const objectUrl = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = "safespeak-evidence-metadata.json";
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        window.URL.revokeObjectURL(objectUrl);
    };
    const activeAttachedFiles = attachedFiles.filter((item)=>item.status !== "deleted" && !item.deletedAt);
    const primaryEvidenceItems = activeAttachedFiles.slice(0, 3);
    const secondaryEvidenceItems = activeAttachedFiles.slice(3);
    const readyFileCount = activeAttachedFiles.length;
    const isEvidenceItemBusy = (item)=>loadingEvidenceDetailId === item.id || verifyingEvidenceId === item.id || deletingEvidenceId === item.id || isTranscribingEvidenceId === item.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$report$2d$submission$2d$pages$2f$report$2d$submission$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportSubmissionFrame"], {
        title: "Incident Details",
        subtitle: "Write the story once, add any supporting files, and review everything before you choose where to send it.",
        step: "details",
        skipSupportStep: !fromTriage,
        backHref: backHref,
        backLabel: fromTriage ? "Support" : "Report Submission",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[20px] border border-[#dbe5f1] bg-[#fbfdff] p-5 space-y-4",
                        children: [
                            evidenceError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 rounded-[14px] border border-[#fde2e2] bg-[#fff5f5] px-4 py-3 text-[12px] text-[#b45353]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 14,
                                                className: "shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1794,
                                                columnNumber: 17
                                            }, this),
                                            "Error"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1793,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-medium",
                                        children: evidenceError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1797,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1792,
                                columnNumber: 13
                            }, this) : null,
                            restoredDraftNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 rounded-[14px] border border-[#fed7aa] bg-[#fffaf5] px-4 py-3 text-[12px] text-[#c2410c]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 14,
                                                className: "shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1804,
                                                columnNumber: 17
                                            }, this),
                                            "Draft Restored"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-medium",
                                        children: restoredDraftNotice
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1807,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1802,
                                columnNumber: 13
                            }, this) : null,
                            contextFlow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 rounded-[16px] border border-[#dbe5f1] bg-white px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                        children: "Preselected context"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1813,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-semibold text-[#1f2a3a]",
                                        children: contextFlow.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1816,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1812,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "incident-title",
                                        className: "block space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "Incident Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1824,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "incident-title",
                                                type: "text",
                                                placeholder: "e.g. Online scam attempt",
                                                value: title,
                                                onChange: (event)=>setTitle(event.target.value),
                                                className: "h-11 w-full rounded-[12px] border border-[#dbe4ef] bg-white px-3.5 text-sm text-[#1f2a3a] shadow-sm transition outline-none focus:border-[#0f5d9f]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1827,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1823,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "incident-date",
                                                className: "block space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1839,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "incident-date",
                                                        type: "date",
                                                        value: date,
                                                        onChange: (event)=>setDate(event.target.value),
                                                        className: "h-11 w-full rounded-[12px] border border-[#dbe4ef] bg-white px-3 text-sm text-[#1f2a3a] shadow-sm transition outline-none focus:border-[#0f5d9f]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1842,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "incident-location",
                                                className: "block space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1852,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inset-y-0 left-3 grid place-items-center text-[#94a3b8]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMapPin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMapPin$3e$__["IconMapPin"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                                    lineNumber: 1857,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                                lineNumber: 1856,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "incident-location",
                                                                type: "text",
                                                                placeholder: "City or post code",
                                                                value: location,
                                                                onChange: (event)=>setLocation(event.target.value),
                                                                className: "h-11 w-full rounded-[12px] border border-[#dbe4ef] bg-white pl-8 pr-3 text-sm text-[#1f2a3a] shadow-sm transition outline-none focus:border-[#0f5d9f]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                                lineNumber: 1859,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1855,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1851,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1837,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                children: "What happened"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1872,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[14px] border border-[#dbe4ef] bg-white px-4 py-3 shadow-sm focus-within:border-[#0f5d9f] focus-within:ring-1 focus-within:ring-[#0f5d9f]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "incident-summary",
                                                    rows: 7,
                                                    placeholder: "Describe what happened in your own words. Include who was involved, where it happened, and anything you want the receiving team to understand.",
                                                    value: description,
                                                    onChange: (event)=>setDescription(event.target.value),
                                                    className: "min-h-[180px] w-full resize-none bg-transparent text-sm leading-7 text-[#1f2a3a] outline-none placeholder:text-[#94A3B8]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                    lineNumber: 1876,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1875,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                        lineNumber: 1871,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1822,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 1790,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[20px] border border-[#dbe5f1] bg-white p-5 flex flex-col justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                    children: "Evidence"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                    lineNumber: 1893,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-1 text-2xl font-bold text-[#0f172a]",
                                                    children: "Attach supporting files"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                    lineNumber: 1896,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-[#64748B]",
                                                    children: "Add screenshots, documents, audio, video, or photos if you want them included with the report."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                            lineNumber: 1892,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-8 w-fit shrink-0 whitespace-nowrap items-center rounded-full border border-[#FED7AA] bg-[#FFEDD5] px-3 text-xs font-semibold text-[#C2410C]",
                                            children: [
                                                readyFileCount,
                                                " file",
                                                readyFileCount === 1 ? "" : "s",
                                                " ready"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                            lineNumber: 1903,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 1891,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-4 sm:grid-cols-2",
                                    children: [
                                        primaryEvidenceItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvidenceVaultCard, {
                                                item: item,
                                                onRemove: handleDeleteEvidence,
                                                onRefresh: refreshEvidenceDetails,
                                                onVerify: handleVerifyEvidenceHash,
                                                onTranscribe: handleTranscribeEvidence,
                                                isBusy: isEvidenceItemBusy(item)
                                            }, item.id, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1910,
                                                columnNumber: 17
                                            }, this)),
                                        secondaryEvidenceItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvidenceVaultCard, {
                                                item: item,
                                                onRemove: handleDeleteEvidence,
                                                onRefresh: refreshEvidenceDetails,
                                                onVerify: handleVerifyEvidenceHash,
                                                onTranscribe: handleTranscribeEvidence,
                                                isBusy: isEvidenceItemBusy(item)
                                            }, item.id, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1922,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            role: "button",
                                            tabIndex: 0,
                                            onClick: ()=>{
                                                var _fileInputRef_current;
                                                return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                            },
                                            onKeyDown: (event)=>{
                                                if (event.key === "Enter" || event.key === " ") {
                                                    var _fileInputRef_current;
                                                    event.preventDefault();
                                                    (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                                }
                                            },
                                            onDragOver: (event)=>{
                                                event.preventDefault();
                                            },
                                            onDrop: (event)=>{
                                                event.preventDefault();
                                                void handleFilesSelected(event.dataTransfer.files);
                                            },
                                            className: "grid min-h-[148px] cursor-pointer place-items-center rounded-[20px] border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-4 py-6 text-center transition hover:border-[#FDBA74] hover:bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF8F00] shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                            lineNumber: 1954,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1953,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-2 text-xs font-semibold text-[#334155]",
                                                        children: "Drag, drop, or click to upload"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1956,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mx-auto mt-0.5 max-w-[180px] text-[10px] leading-4 text-[#64748B]",
                                                        children: "Images, video, audio, PDF, DOC, DOCX, and TXT are supported."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                        lineNumber: 1959,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                                lineNumber: 1952,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                    lineNumber: 1908,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                            lineNumber: 1890,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 1889,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 1789,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#e2e8f0] pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    void saveDraft();
                                },
                                disabled: isPersistingReport,
                                className: "inline-flex h-10 items-center justify-center rounded-full border border-[#d7e1ee] px-5 text-sm font-semibold text-[#475569]",
                                children: isPersistingReport ? "Saving..." : "Save draft"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1971,
                                columnNumber: 11
                            }, this),
                            draftSavedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#94A3B8]",
                                children: [
                                    "Draft saved at ",
                                    draftSavedAt
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1982,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 1970,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            void handleContinue();
                        },
                        disabled: isPersistingReport || isUploadingEvidence,
                        className: "inline-flex h-11 items-center rounded-full bg-[#0f5d9f] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(15,93,159,0.2)]",
                        children: [
                            isPersistingReport ? "Saving..." : "Continue to Review",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                size: 16,
                                className: "ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                                lineNumber: 1996,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                        lineNumber: 1987,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 1969,
                columnNumber: 7
            }, this),
            pendingConsentRequirement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2f$consent$2d$required$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentRequiredCard"], {
                    requirement: pendingConsentRequirement,
                    isSubmitting: isGrantingConsent,
                    onAllow: ()=>{
                        void (async ()=>{
                            const requirement = pendingConsentRequirement;
                            if (!requirement) {
                                return;
                            }
                            setIsGrantingConsent(true);
                            try {
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grantConsent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConsentGrantFlags"])(requirement), requirement.source);
                                const shouldContinueToReview = shouldContinueToReviewAfterConsentRef.current && !pendingFiles.length && !pendingTranscriptionItem;
                                if (pendingFiles.length) {
                                    await attachFiles(pendingFiles, {
                                        forceCloudSync: true
                                    });
                                } else if (pendingTranscriptionItem) {
                                    await handleTranscribeEvidence(pendingTranscriptionItem);
                                } else {
                                    await persistReportDraftToBackend();
                                }
                                setPendingFiles([]);
                                setPendingTranscriptionItem(null);
                                setPendingConsentRequirement(null);
                                if (shouldContinueToReview) {
                                    shouldContinueToReviewAfterConsentRef.current = false;
                                    router.push("/dashboard?view=reportsubmissionreview");
                                }
                            } catch (error) {
                                setEvidenceError(error instanceof Error ? error.message : "Consent could not be saved.");
                            } finally{
                                setPendingTranscriptionItem(null);
                                setIsGrantingConsent(false);
                            }
                        })();
                    },
                    onDecline: ()=>{
                        setPendingFiles([]);
                        setEvidenceError("Evidence was not attached. SafeSpeak needs cloud-sync consent to upload files to the evidence vault.");
                        setPendingTranscriptionItem(null);
                        setPendingConsentRequirement(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                    lineNumber: 2002,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 2001,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt",
                className: "hidden",
                onChange: (event)=>{
                    void handleFilesSelected(event.target.files);
                    event.target.value = "";
                }
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
                lineNumber: 2068,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx",
        lineNumber: 1781,
        columnNumber: 5
    }, this);
}
_s(ReportSubmissionEvidencePage, "Htzc0i8h+L3JqukFVtBwyud9xAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = ReportSubmissionEvidencePage;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "EvidenceVaultCard");
__turbopack_context__.k.register(_c1, "ReportSubmissionEvidencePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-evidence-page.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_ebababc8._.js.map