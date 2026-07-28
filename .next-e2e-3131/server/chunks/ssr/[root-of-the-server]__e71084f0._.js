module.exports = [
"[project]/src/lib/report-lifecycle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReportLifecycleActions",
    ()=>getReportLifecycleActions,
    "getReportStatusLabel",
    ()=>getReportStatusLabel
]);
const withdrawnBlockedStatuses = new Set([
    "submitted",
    "received",
    "closed",
    "deleted",
    "withdrawn",
    "info_only"
]);
function getReportStatusLabel(report) {
    const status = report?.status ?? "draft";
    if (status === "deleted" && report?.deletionRequestedAt) {
        return "Deletion requested";
    }
    switch(status){
        case "local_only":
            return "Local only";
        case "ready_for_review":
            return "Ready for review";
        case "info_only":
            return "Information only";
        case "pending_submission":
            return "Pending submission";
        case "submitted":
            return "Submitted";
        case "received":
            return "Received";
        case "withdrawn":
            return "Withdrawn";
        case "closed":
            return "Closed";
        case "deleted":
            return "Deleted";
        case "triaged":
            return "Triaged";
        case "draft":
        default:
            return "Draft";
    }
}
function getReportLifecycleActions(report) {
    const status = report.status ?? "draft";
    const actions = [];
    if (!withdrawnBlockedStatuses.has(status)) {
        actions.push({
            action: "withdraw",
            label: "Withdraw",
            description: "Move this report out of the active submission path.",
            confirmMessage: "Withdraw this report? It will stay in your history as withdrawn."
        });
    }
    if (![
        "closed",
        "deleted",
        "info_only",
        "withdrawn"
    ].includes(status)) {
        actions.push({
            action: "mark-info-only",
            label: "Mark info-only",
            description: "Keep this as an information-only record, not a submission.",
            confirmMessage: "Mark this report as information-only? It will not be treated as an active submission."
        });
    }
    if (![
        "closed",
        "deleted"
    ].includes(status)) {
        actions.push({
            action: "request-delete",
            label: "Request deletion",
            description: "Record a deletion request for audit and privacy follow-up.",
            confirmMessage: "Request deletion for this report? The request will be audit logged.",
            destructive: true
        });
    }
    if (status !== "deleted") {
        actions.push({
            action: "delete",
            label: "Delete",
            description: "Soft-delete this report from active report history.",
            confirmMessage: "Delete this report now? It will be removed from active report history.",
            destructive: true
        });
    }
    return actions;
}
}),
"[project]/src/lib/frontend-session.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-ssr] (ecmascript)");
"use client";
;
;
const ANONYMOUS_SESSION_KEY = "safespeak_anonymous_session";
const SAFE_SPEAK_SESSION_HEADER = "X-SafeSpeak-Session";
function getStoredAnonymousSession() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function saveAnonymousSession(session) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function clearAnonymousSession() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function getAnonymousSessionToken(options) {
    if (options?.forceNew) {
        clearAnonymousSession();
    }
    const storedSession = getStoredAnonymousSession();
    if (storedSession?.sessionToken) {
        return storedSession.sessionToken;
    }
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/sessions/anonymous", {
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
    const authSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureValidAuthSession"])().catch(()=>null);
    if (authSession?.tokens.accessToken) {
        return {
            Authorization: `Bearer ${authSession.tokens.accessToken}`
        };
    }
    const sessionToken = await getAnonymousSessionToken({
        forceNew: options?.forceNewAnonymous
    });
    return {
        [SAFE_SPEAK_SESSION_HEADER]: sessionToken
    };
}
}),
"[project]/src/lib/consent.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-ssr] (ecmascript)");
"use client";
;
;
class ConsentRequiredError extends Error {
    requirement;
    currentConsent;
    constructor(requirement, currentConsent){
        super("Consent is required before this action can continue.");
        this.name = "ConsentRequiredError";
        this.requirement = requirement;
        this.currentConsent = currentConsent;
    }
}
function hasRequiredConsent(currentConsent, requirement) {
    const mode = requirement.mode ?? "all";
    if (mode === "any") {
        return requirement.flags.some((flag)=>Boolean(currentConsent[flag]));
    }
    return requirement.flags.every((flag)=>Boolean(currentConsent[flag]));
}
async function getCurrentConsent(headers) {
    const resolvedHeaders = headers ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/current", {
        headers: resolvedHeaders
    });
    return response.data.consent;
}
async function ensureConsent(requirement, headers) {
    const resolvedHeaders = headers ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
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
    const resolvedHeaders = headers ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/update", {
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
    const resolvedHeaders = headers ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/withdraw", {
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
    const resolvedHeaders = headers ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/consents/history", {
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
}),
"[project]/src/lib/reports-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/frontend-session.ts [app-ssr] (ecmascript)");
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
    return Object.fromEntries(Object.entries(structuredFields).filter(([key])=>allowedStructuredFieldKeys.has(key)));
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
async function reportApiRequest(path, options = {}) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
            ...options,
            headers
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRequestError"] && error.status === 401) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAnonymousSession"])();
            const retryHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])({
                forceNewAnonymous: true
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
                ...options,
                headers: retryHeaders
            });
        }
        throw error;
    }
}
async function createReport(input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consentRequirements"].reportStorage, headers);
    const response = await reportApiRequest("/reports", {
        method: "POST",
        body: sanitizeReportInput(input)
    });
    return response.data.report;
}
async function updateReport(reportId, input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consentRequirements"].reportStorage, headers);
    const response = await reportApiRequest(`/reports/${reportId}`, {
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
    const response = await reportApiRequest(`/reports/${reportId}`);
    return response.data.report;
}
async function getReportStatus(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/status`);
    return response.data.status;
}
async function getReportTimeline(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/timeline`);
    return response.data.timeline;
}
async function withdrawReport(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/withdraw`, {
        method: "POST"
    });
    return response.data.report;
}
async function deleteReport(reportId) {
    await reportApiRequest(`/reports/${reportId}`, {
        method: "DELETE"
    });
}
async function requestReportDelete(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/request-delete`, {
        method: "POST"
    });
    return response.data.report;
}
async function markReportInfoOnly(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/mark-info-only`, {
        method: "POST"
    });
    return response.data.report;
}
async function getReportDestinations(reportId, query = {}) {
    const params = new URLSearchParams();
    if (query.destinationType) {
        params.set("destinationType", query.destinationType);
    }
    if (query.jurisdiction) {
        params.set("jurisdiction", query.jurisdiction);
    }
    const suffix = params.toString() ? `?${params.toString()}` : "";
    const response = await reportApiRequest(`/reports/${reportId}/destinations${suffix}`);
    return response.data.destinations;
}
async function listReportSubmissions(reportId) {
    const response = await reportApiRequest(`/reports/${reportId}/submissions`);
    return response.data.submissions;
}
async function previewReportSubmissions(reportId, input) {
    const response = await reportApiRequest(`/reports/${reportId}/submission-previews`, {
        method: "POST",
        body: {
            destinationIds: input.destinationIds,
            anonymityMode: input.anonymityMode ?? "identified",
            notes: input.notes
        }
    });
    return response.data.previews;
}
async function submitReportToDestination(reportId, input) {
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$frontend$2d$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionAwareAuthHeaders"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureConsent"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consentRequirements"].reportDestinationSubmit, headers);
    const response = await reportApiRequest(`/reports/${reportId}/submissions`, {
        method: "POST",
        body: {
            destinationId: input.destinationId,
            anonymityMode: input.anonymityMode ?? "identified",
            notes: input.notes,
            confirmConsent: input.confirmConsent ?? true
        }
    });
    return response.data.submission;
}
}),
"[next]/internal/font/google/inter_93cd5328.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_93cd5328-module__uX6hTq__className",
});
}),
"[next]/internal/font/google/inter_93cd5328.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/components/dashboard/dashboard-shared.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findIncidentReport",
    ()=>findIncidentReport,
    "incidentReports",
    ()=>incidentReports,
    "localIntelligenceMapSrc",
    ()=>localIntelligenceMapSrc
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-ssr] (ecmascript)");
;
// eslint-disable-next-line n/no-process-env
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const localIntelligenceMapSrc = googleMapsApiKey ? `https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=-33.8688,151.2093&zoom=13&maptype=roadmap` : null;
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
    return incidentReports.find((report)=>report.id === reportId) ?? incidentReports[0];
}
;
}),
"[project]/src/components/dashboard/dashboard-reports-pages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportOverviewPage",
    ()=>ReportOverviewPage,
    "ReportsHistoryPage",
    ()=>ReportsHistoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-ssr] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-ssr] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderFilled.mjs [app-ssr] (ecmascript) <export default as IconFolderFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-ssr] (ecmascript) <export default as IconLoader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-ssr] (ecmascript) <export default as IconTrash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-lifecycle.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reports-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-shared.ts [app-ssr] (ecmascript) <locals>");
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
function formatReportDate(value) {
    if (!value) {
        return "Date unavailable";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }
    return date.toLocaleString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}
function getReportTitle(report) {
    return report?.context || report?.incidentType || "SafeSpeak report";
}
function getReportNarrative(report) {
    if (!report) {
        return "Loading report details...";
    }
    return report.originalNarrative || String(report.structuredFields?.what ?? "No narrative captured yet.");
}
function getReportLocation(report) {
    return String(report?.structuredFields?.where ?? "Location not captured yet.");
}
function getReportReference(report) {
    return report?.refNo ?? report?._id ?? "Pending";
}
function getReportStatusTone(report) {
    const status = report?.status ?? "draft";
    if (status === "deleted" || report?.deletionRequestedAt) {
        return {
            className: "bg-[#fff1f2] text-[#be123c]",
            dotClassName: "bg-[#fb7185]"
        };
    }
    if (status === "submitted" || status === "received" || status === "closed") {
        return {
            className: "bg-[#e8f8ef] text-[#1b8f4b]",
            dotClassName: "bg-[#34d399]"
        };
    }
    if (status === "ready_for_review" || status === "pending_submission" || status === "triaged") {
        return {
            className: "bg-[#e8f1ff] text-[#1d72d8]",
            dotClassName: "bg-[#60a5fa]"
        };
    }
    if (status === "withdrawn" || status === "info_only") {
        return {
            className: "bg-[#eef1f5] text-[#5f6f83]",
            dotClassName: "bg-[#94a3b8]"
        };
    }
    return {
        className: "bg-[#fff3e2] text-[#c97b00]",
        dotClassName: "bg-[#f59e0b]"
    };
}
function ReportStatusChip({ report }) {
    const styles = getReportStatusTone(report);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold", styles.className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-1.5 w-1.5 rounded-full", styles.dotClassName)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportStatusLabel"])(report ?? undefined)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
async function runReportLifecycleAction(reportId, action) {
    if (action === "withdraw") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withdrawReport"])(reportId);
    }
    if (action === "mark-info-only") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markReportInfoOnly"])(reportId);
    }
    if (action === "request-delete") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestReportDelete"])(reportId);
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteReport"])(reportId);
    return null;
}
function LifecycleActionButtons({ report, activeActionKey, onAction }) {
    const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportLifecycleActions"])(report);
    if (!actions.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-medium text-[#8a9ab0]",
            children: "No lifecycle actions are available for this status."
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: actions.map((action)=>{
            const actionKey = `${report._id}:${action.action}`;
            const isActive = activeActionKey === actionKey;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onAction(report, action),
                disabled: Boolean(activeActionKey),
                title: action.description,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 items-center gap-1 rounded-full border px-3 text-[10px] font-bold transition disabled:cursor-wait disabled:opacity-60", action.destructive ? "border-[#f4c7c3] bg-[#fff7f6] text-[#b42318] hover:bg-[#fff1ef]" : "border-[#d8e4f2] bg-white text-[#40566f] hover:bg-[#f7fbff]"),
                children: [
                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                        size: 11,
                        className: "animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                        lineNumber: 214,
                        columnNumber: 15
                    }, this) : action.destructive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                        size: 11
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                        lineNumber: 216,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                        size: 11
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                        lineNumber: 218,
                        columnNumber: 15
                    }, this),
                    action.label
                ]
            }, action.action, true, {
                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                lineNumber: 200,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
function ReportsHistoryPage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeActionKey, setActiveActionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadReports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listReports"])();
            setReports(result);
            setLoadError(null);
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Reports could not be loaded.");
            setReports([]);
        } finally{
            setIsLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadReports();
    }, [
        loadReports
    ]);
    const filteredReports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedSearch = searchTerm.trim().toLowerCase();
        return reports.filter((report)=>{
            const status = report.status ?? "draft";
            if (activeFilter === "draft" && status !== "draft" && status !== "local_only") {
                return false;
            }
            if (activeFilter === "action" && ![
                "ready_for_review",
                "pending_submission",
                "triaged"
            ].includes(status)) {
                return false;
            }
            if (!normalizedSearch) {
                return true;
            }
            return [
                report._id,
                report.refNo,
                report.context,
                report.incidentType,
                report.status
            ].filter(Boolean).some((value)=>String(value).toLowerCase().includes(normalizedSearch));
        });
    }, [
        activeFilter,
        reports,
        searchTerm
    ]);
    const handleLifecycleAction = async (report, action)=>{
        if ("undefined" !== "undefined" && !window.confirm(action.confirmMessage)) //TURBOPACK unreachable
        ;
        const actionKey = `${report._id}:${action.action}`;
        setActiveActionKey(actionKey);
        setLoadError(null);
        setStatusMessage(null);
        try {
            const updatedReport = await runReportLifecycleAction(report._id, action.action);
            if (updatedReport) {
                setReports((currentReports)=>currentReports.map((currentReport)=>currentReport._id === updatedReport._id ? updatedReport : currentReport));
                setStatusMessage(`${action.label} completed for ${getReportReference(updatedReport)}.`);
            } else {
                setReports((currentReports)=>currentReports.filter((currentReport)=>currentReport._id !== report._id));
                setStatusMessage("Report deleted from active history.");
            }
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Report action could not be completed.");
        } finally{
            setActiveActionKey(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.reports.yourReports")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[16px] border border-[#dce5f1] bg-[#f8fbff] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#deecff] text-[#1d72d8]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-2 text-[30px] font-extrabold leading-[1.03] text-[#1f2a3a] sm:text-[36px]",
                                    children: t("dashboard.reports.yourIncidentHistory")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-[#7b8ca2]",
                                    children: "Live report records, lifecycle state, and audit-safe actions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl border border-[#e2eaf4] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: t("dashboard.reports.totalReports")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-2xl font-extrabold text-[#0f5d9f]",
                                            children: reports.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl border border-[#e2eaf4] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Submitted or received"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-2xl font-extrabold text-[#1b8f4b]",
                                            children: reports.filter((report)=>[
                                                    "submitted",
                                                    "received",
                                                    "closed"
                                                ].includes(report.status ?? "")).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl border border-[#e2eaf4] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Lifecycle actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-2xl font-extrabold text-[#c97b00]",
                                            children: reports.filter((report)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportLifecycleActions"])(report).length > 0).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto mt-4 max-w-[760px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                    size: 14,
                                    className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9babc0]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchTerm,
                                    onChange: (event)=>setSearchTerm(event.target.value),
                                    placeholder: t("dashboard.reports.searchPlaceholder"),
                                    className: "h-10 w-full rounded-full border border-[#dce6f2] bg-white px-9 text-xs text-[#1f2a3a] outline-none placeholder:text-[#96a7bc] focus:border-[#cbd9ea]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap items-center gap-2",
                            children: [
                                {
                                    id: "all",
                                    label: t("dashboard.reports.allReports")
                                },
                                {
                                    id: "draft",
                                    label: t("dashboard.reports.drafts")
                                },
                                {
                                    id: "action",
                                    label: t("dashboard.reports.inReview")
                                }
                            ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveFilter(filter.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-3 py-1 text-[10px] font-bold", activeFilter === filter.id ? "bg-[#0f5d9f] text-white" : "bg-white text-[#60728a]"),
                                    children: filter.label
                                }, filter.id, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-2",
                            children: [
                                loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-3 text-[11px] text-[#b45353]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this),
                                            loadError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                        lineNumber: 462,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this) : null,
                                statusMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[12px] border border-[#d8e4f2] bg-white px-3 py-3 text-[11px] font-medium text-[#0f5d9f]",
                                    children: statusMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 469,
                                    columnNumber: 15
                                }, this) : null,
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-[12px] border border-[#dce5f1] bg-white px-4 py-3 text-[11px] text-[#60728a]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                            size: 14,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this),
                                        "Loading reports..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this) : null,
                                !isLoading && filteredReports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[12px] border border-[#dce5f1] bg-white px-4 py-8 text-center text-[12px] text-[#60728a]",
                                    children: "No reports matched this view."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this) : null,
                                filteredReports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "rounded-[14px] border border-[#e3ebf5] bg-white p-3 transition hover:border-[#cfddee] hover:shadow-[0_10px_20px_rgba(15,23,42,0.06)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportStatusChip, {
                                                                        report: report
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-[#8a9ab0]",
                                                                        children: [
                                                                            "SafeSpeak ref ",
                                                                            getReportReference(report)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 truncate text-sm font-bold text-[#1f2a3a]",
                                                                children: getReportTitle(report)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-[10px] font-medium text-[#74869d]",
                                                                children: [
                                                                    "Updated",
                                                                    " ",
                                                                    formatReportDate(report.updatedAt ?? report.createdAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/reports/${report._id}`,
                                                                className: "inline-flex h-9 items-center justify-center rounded-full bg-[#0f5d9f] px-4 text-[11px] font-bold text-white transition hover:bg-[#0b4f89]",
                                                                children: [
                                                                    "Open detail",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                                        size: 13,
                                                                        className: "ml-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/dashboard?view=reportsubmissionreview",
                                                                className: "inline-flex h-9 items-center justify-center rounded-full border border-[#d8e4f2] bg-white px-4 text-[11px] font-bold text-[#40566f]",
                                                                children: "Review submission"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 border-t border-[#edf2f7] pt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LifecycleActionButtons, {
                                                    report: report,
                                                    activeActionKey: activeActionKey,
                                                    onAction: handleLifecycleAction
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, report._id, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
function ReportOverviewPage({ reportId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeline, setTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [submissions, setSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(reportId));
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeActionKey, setActiveActionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadReportDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!reportId) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const [nextReport, status, nextTimeline, nextSubmissions] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReport"])(reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportStatus"])(reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportTimeline"])(reportId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listReportSubmissions"])(reportId)
            ]);
            setReport({
                ...nextReport,
                status: status.current ?? status.status ?? nextReport.status,
                deletionRequestedAt: status.deletionRequestedAt ?? nextReport.deletionRequestedAt,
                withdrawnAt: status.withdrawnAt ?? nextReport.withdrawnAt
            });
            setTimeline(nextTimeline);
            setSubmissions(nextSubmissions);
            setLoadError(null);
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Report could not be loaded.");
        } finally{
            setIsLoading(false);
        }
    }, [
        reportId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadReportDetail();
    }, [
        loadReportDetail
    ]);
    const handleLifecycleAction = async (currentReport, action)=>{
        if ("undefined" !== "undefined" && !window.confirm(action.confirmMessage)) //TURBOPACK unreachable
        ;
        const actionKey = `${currentReport._id}:${action.action}`;
        setActiveActionKey(actionKey);
        setLoadError(null);
        setStatusMessage(null);
        try {
            const updatedReport = await runReportLifecycleAction(currentReport._id, action.action);
            if (!updatedReport) {
                router.push("/dashboard/reports");
                return;
            }
            setReport(updatedReport);
            setStatusMessage(`${action.label} completed for ${getReportReference(updatedReport)}.`);
            void loadReportDetail();
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Report action could not be completed.");
        } finally{
            setActiveActionKey(null);
        }
    };
    const reportTitle = getReportTitle(report);
    const reportNarrative = getReportNarrative(report);
    const reportLocation = getReportLocation(report);
    const reportCreatedAt = formatReportDate(report?.createdAt);
    const reportUpdatedAt = formatReportDate(report?.updatedAt ?? report?.createdAt);
    const reportSupportKey = report?._id?.slice(-6) ?? "N/A";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard/reports",
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this),
                                t("dashboard.reports.reportOverview")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-xs font-medium text-[#7b8798]",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                    lineNumber: 643,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.55fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-[16px] border border-[#dce5f1] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5",
                            children: [
                                loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 rounded-[12px] border border-[#fde2e2] bg-[#fff5f5] px-3 py-2 text-[11px] text-[#b45353]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 664,
                                                columnNumber: 19
                                            }, this),
                                            loadError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                        lineNumber: 663,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this) : null,
                                statusMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 rounded-[12px] border border-[#d8e4f2] bg-[#f8fbff] px-3 py-2 text-[11px] font-medium text-[#0f5d9f]",
                                    children: statusMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 670,
                                    columnNumber: 15
                                }, this) : null,
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 inline-flex items-center gap-2 rounded-[12px] border border-[#dce5f1] bg-[#f8fbff] px-4 py-3 text-[11px] text-[#60728a]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                            size: 14,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        "Loading report detail..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f5d9f]",
                                                    children: t("dashboard.reports.incidentNarrative")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-1 text-2xl font-extrabold leading-[1.05] text-[#1f2a3a] sm:text-[30px]",
                                                    children: reportTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 682,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportStatusChip, {
                                            report: report
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold leading-[1.6] text-[#405368]",
                                        children: [
                                            "“",
                                            reportNarrative,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 693,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                    children: t("dashboard.reports.reportId")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 break-all text-xs font-extrabold text-[#1f2a3a]",
                                                    children: getReportReference(report)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 700,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                    children: t("dashboard.reports.created")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs font-extrabold text-[#1f2a3a]",
                                                    children: reportCreatedAt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 708,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                    children: t("dashboard.reports.status")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportStatusChip, {
                                                        report: report
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 716,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this),
                                report ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                                        children: "Lifecycle controls"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[11px] text-[#60728a]",
                                                        children: "Actions are audit logged and refresh this report after completion."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 729,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LifecycleActionButtons, {
                                                report: report,
                                                activeActionKey: activeActionKey,
                                                onAction: handleLifecycleAction
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 740,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 727,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Status timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-2",
                                            children: timeline.length ? timeline.map((entry, index)=>{
                                                const status = typeof entry.status === "string" ? entry.status : "status";
                                                const changedAt = typeof entry.changedAt === "string" ? entry.changedAt : undefined;
                                                const reason = typeof entry.reason === "string" ? entry.reason : undefined;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rounded-[10px] border border-[#e1e9f3] bg-white px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-bold text-[#1f2a3a]",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportStatusLabel"])({
                                                                status
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[10px] text-[#74869d]",
                                                            children: [
                                                                formatReportDate(changedAt),
                                                                reason ? ` | ${reason.replace(/_/g, " ")}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, `${status}-${changedAt ?? index}`, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 23
                                                }, this);
                                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] leading-5 text-[#8ea0b8]",
                                                children: "No timeline entries are available yet."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 753,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 749,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-[12px] border border-[#e2eaf4] bg-[#f8fbff] p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.08em] text-[#7c8da3]",
                                            children: "Submission records"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 793,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-2",
                                            children: submissions.length ? submissions.map((submission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rounded-[10px] border border-[#e1e9f3] bg-white px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] font-bold text-[#1f2a3a]",
                                                                    children: submission.destinationName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-[#eef6ff] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#2f6fca]",
                                                                    children: submission.status.replace(/_/g, " ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                                    lineNumber: 807,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[10px] text-[#74869d]",
                                                            children: [
                                                                submission.channel.replace(/_/g, " "),
                                                                " |",
                                                                " ",
                                                                formatReportDate(submission.submittedAt ?? submission.createdAt)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, submission._id, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] leading-5 text-[#8ea0b8]",
                                                children: "No destination submissions have been created for this report."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                lineNumber: 820,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 796,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-[16px] border border-[#dce5f1] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f5d9f]",
                                    children: t("dashboard.reports.reportMetadata")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 830,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-[#f8fbff] p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]",
                                                    children: t("dashboard.reports.lastUpdate")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                    children: reportUpdatedAt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 835,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-[#f8fbff] p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]",
                                                    children: t("dashboard.reports.supportKey")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                    children: reportSupportKey
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 843,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 rounded-lg bg-[#f8fbff] p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold uppercase tracking-[0.08em] text-[#8ca0b6]",
                                                    children: t("dashboard.reports.location")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 852,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] font-semibold text-[#1f2a3a]",
                                                    children: reportLocation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 851,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 834,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-3 h-[170px] overflow-hidden rounded-[12px] border border-[#d7e1ee] bg-[#d9e6d2]",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localIntelligenceMapSrc"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            title: "Report incident map",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localIntelligenceMapSrc"],
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            className: "h-full w-full border-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 863,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[linear-gradient(130deg,#cfdebf_0%,#e3edd8_45%,#cedebf_100%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 871,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-2 left-2 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold text-[#334155]",
                                            children: reportLocation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 873,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 861,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard?view=reportsubmissiondetails",
                                            className: "inline-flex h-10 items-center justify-center rounded-full bg-[#0f5d9f] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(15,93,159,0.25)]",
                                            children: t("dashboard.reports.editReport")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 879,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard?view=reportsubmissionreview",
                                            className: "inline-flex h-10 items-center justify-center rounded-full bg-[#f59e0b] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(245,158,11,0.3)]",
                                            children: t("dashboard.reports.proceedToSubmission")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard?view=reportsubmissionhistory",
                                            className: "inline-flex h-10 items-center justify-center rounded-full border border-[#d8e4f2] px-5 text-xs font-bold text-[#40566f]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                    size: 13,
                                                    className: "mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 17
                                                }, this),
                                                "Submission history"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                            lineNumber: 891,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                                    lineNumber: 878,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                            lineNumber: 829,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
            lineNumber: 642,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-reports-pages.tsx",
        lineNumber: 641,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/dashboard-reports-pages.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-reports-pages.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e71084f0._.js.map