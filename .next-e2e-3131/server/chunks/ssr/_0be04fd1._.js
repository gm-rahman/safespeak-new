module.exports = [
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
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSubmissionHistoryPage",
    ()=>ReportSubmissionHistoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-ssr] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleCheckFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleCheckFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheckFilled.mjs [app-ssr] (ecmascript) <export default as IconCircleCheckFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleDotFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleDotFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleDotFilled.mjs [app-ssr] (ecmascript) <export default as IconCircleDotFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconHeartFilled.mjs [app-ssr] (ecmascript) <export default as IconHeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-ssr] (ecmascript) <export default as IconLoader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLockFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLockFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLockFilled.mjs [app-ssr] (ecmascript) <export default as IconLockFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldFilled.mjs [app-ssr] (ecmascript) <export default as IconShieldFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-ssr] (ecmascript) <export default as IconTrash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reports-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/report-lifecycle.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function isSubmissionSent(submission) {
    if (!submission) {
        return false;
    }
    return submission.actuallySent === true || submission.status === "submitted" || submission.status === "acknowledged";
}
function getSubmissionStatusLabel(submission) {
    if (!submission) {
        return null;
    }
    if (isSubmissionSent(submission)) {
        return "Shared through SafeSpeak";
    }
    if (submission.status === "requires_manual_action") {
        return "Recorded for manual follow-up";
    }
    if (submission.status === "config_missing") {
        return "Recorded - setup needed";
    }
    if (submission.status === "failed") {
        return "Delivery failed";
    }
    return "Submission recorded";
}
function normalizeHistoryStatus(status, submission) {
    if (submission) {
        if (isSubmissionSent(submission)) {
            return "SUBMITTED";
        }
        if (submission.status === "requires_manual_action" || submission.status === "config_missing" || submission.status === "failed") {
            return "ACTION REQUIRED";
        }
    }
    if (status === "submitted" || status === "received") {
        return "SUBMITTED";
    }
    if (status === "in_review" || status === "in-review" || status === "pending_submission" || status === "ready_for_review" || status === "triaged") {
        return "ACTION REQUIRED";
    }
    if (status === "closed" || status === "deleted" || status === "withdrawn" || status === "info_only") {
        return "CLOSED";
    }
    return "DRAFT";
}
function getHistoryMeta(status, submission) {
    if (status === "ACTION REQUIRED") {
        return {
            team: "SafeSpeak review queue",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            iconWrapClassName: "bg-[#ece7ff] text-[#5d61f6]"
        };
    }
    if (status === "SUBMITTED") {
        return {
            team: submission ? submission.destinationName : "Shared through SafeSpeak",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeartFilled$3e$__["IconHeartFilled"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this),
            iconWrapClassName: "bg-[#ffe9ea] text-[#f26161]"
        };
    }
    if (status === "CLOSED") {
        return {
            team: "Lifecycle action recorded",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            iconWrapClassName: "bg-[#eef1f5] text-[#64748b]"
        };
    }
    return {
        team: "Draft saved safely",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLockFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLockFilled$3e$__["IconLockFilled"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this),
        iconWrapClassName: "bg-[#d4f4ed] text-[#0a9d8d]"
    };
}
function formatHistoryDate(value) {
    if (!value) {
        return "DATE UNAVAILABLE";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value.toUpperCase();
    }
    return date.toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).toUpperCase();
}
function toHistoryReport(report, resolvedStatus, submission) {
    const statusAwareReport = {
        ...report,
        status: resolvedStatus ?? report.status
    };
    const historyStatus = normalizeHistoryStatus(statusAwareReport.status, submission);
    const meta = getHistoryMeta(historyStatus, submission);
    const submissionStatusLabel = getSubmissionStatusLabel(submission);
    return {
        id: report._id,
        status: historyStatus,
        rawStatus: submission?.status ?? statusAwareReport.status,
        statusLabel: submissionStatusLabel ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportStatusLabel"])(statusAwareReport),
        title: report.context || report.incidentType || "SafeSpeak report",
        team: meta.team,
        date: formatHistoryDate(report.updatedAt ?? report.createdAt),
        report: statusAwareReport,
        submission,
        icon: meta.icon,
        iconWrapClassName: meta.iconWrapClassName
    };
}
const statusClassNames = {
    "ACTION REQUIRED": "bg-[#fff1de] text-[#9a6a2e]",
    SUBMITTED: "bg-[#ebf0ff] text-[#526cc6]",
    DRAFT: "bg-[#eef1f5] text-[#5f6f83]",
    CLOSED: "bg-[#fff1f2] text-[#be123c]"
};
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
function ReportSubmissionHistoryPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeActionKey, setActiveActionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadReportHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        try {
            const reportRecords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listReports"])();
            const reportsWithStatuses = await Promise.all(reportRecords.map(async (report)=>{
                try {
                    const [status, submissions] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportStatus"])(report._id),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reports$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listReportSubmissions"])(report._id)
                    ]);
                    const latestSubmission = submissions[0] ?? null;
                    return toHistoryReport({
                        ...report,
                        deletionRequestedAt: status.deletionRequestedAt ?? report.deletionRequestedAt,
                        withdrawnAt: status.withdrawnAt ?? report.withdrawnAt
                    }, status.current, latestSubmission);
                } catch  {
                    return toHistoryReport(report);
                }
            }));
            setReports(reportsWithStatuses);
            setLoadError(null);
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Report history could not be loaded.");
            setReports([]);
        } finally{
            setIsLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadReportHistory();
    }, [
        loadReportHistory
    ]);
    const filteredReports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedSearch = searchTerm.trim().toLowerCase();
        return reports.filter((report)=>{
            if (activeFilter === "draft" && report.status !== "DRAFT") {
                return false;
            }
            if (activeFilter === "action_required" && report.status !== "ACTION REQUIRED") {
                return false;
            }
            if (activeFilter === "closed" && report.status !== "CLOSED") {
                return false;
            }
            if (!normalizedSearch) {
                return true;
            }
            return report.title.toLowerCase().includes(normalizedSearch) || report.team.toLowerCase().includes(normalizedSearch) || report.statusLabel.toLowerCase().includes(normalizedSearch) || report.id.toLowerCase().includes(normalizedSearch);
        });
    }, [
        activeFilter,
        reports,
        searchTerm
    ]);
    const submittedCount = reports.filter((report)=>report.status === "SUBMITTED").length;
    const actionRequiredCount = reports.filter((report)=>report.status === "ACTION REQUIRED").length;
    const handleLifecycleAction = async (report, action)=>{
        if ("undefined" !== "undefined" && !window.confirm(action.confirmMessage)) //TURBOPACK unreachable
        ;
        const actionKey = `${report.id}:${action.action}`;
        setActiveActionKey(actionKey);
        setLoadError(null);
        setStatusMessage(null);
        try {
            const updatedReport = await runReportLifecycleAction(report.id, action.action);
            if (updatedReport) {
                setReports((currentReports)=>currentReports.map((currentReport)=>currentReport.id === updatedReport._id ? toHistoryReport(updatedReport, undefined, currentReport.submission ?? null) : currentReport));
                setStatusMessage(`${action.label} completed for ${updatedReport.refNo ?? updatedReport._id}.`);
            } else {
                setReports((currentReports)=>currentReports.filter((currentReport)=>currentReport.id !== report.id));
                setStatusMessage("Report deleted from active history.");
            }
        } catch (error) {
            setLoadError(error instanceof Error ? error.message : "Report action could not be completed.");
        } finally{
            setActiveActionKey(null);
        }
    };
    const handleReturnToPreviousPage = ()=>{
        if ("undefined" !== "undefined" && window.history.length > 1) //TURBOPACK unreachable
        ;
        router.push("/dashboard?view=reportsubmissionrecommendations");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 pb-3 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1184px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#d9e2ee] px-1 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleReturnToPreviousPage,
                            className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                "Your Reports"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleReturnToPreviousPage,
                            className: "text-xs font-medium text-[#7b8798]",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "mt-3 rounded-[20px] border border-[#dce5f1] bg-[#f7fafe] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#d9e7ff]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-8 w-8 rounded-full bg-[#2f87ff] shadow-[0_0_0_6px_rgba(47,135,255,0.25)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-5 text-[30px] font-extrabold leading-[1.05] text-[#1f2a3a] sm:text-[36px]",
                                    children: "Your Incident History"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-[#7b8ca2]",
                                    children: "Live SafeSpeak report records and lifecycle actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto mt-4 max-w-[1136px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                    size: 14,
                                    className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9babc0]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchTerm,
                                    onChange: (event)=>setSearchTerm(event.target.value),
                                    placeholder: "Search reports...",
                                    className: "h-10 w-full rounded-[12px] border border-[#dce6f2] bg-white px-9 text-xs text-[#1f2a3a] outline-none placeholder:text-[#96a7bc]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap items-center gap-2",
                            children: [
                                {
                                    id: "all",
                                    label: "All Reports"
                                },
                                {
                                    id: "draft",
                                    label: "Drafts"
                                },
                                {
                                    id: "action_required",
                                    label: "Needs Review"
                                },
                                {
                                    id: "closed",
                                    label: "Closed"
                                }
                            ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveFilter(filter.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 items-center rounded-full px-3 text-[10px] font-bold", activeFilter === filter.id ? "bg-[#2f87ff] text-white" : "bg-white text-[#60728a]"),
                                    children: filter.label
                                }, filter.id, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-3",
                            children: [
                                loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-[#F4C7C3] bg-[#FFF7F6] px-3 py-2 text-xs text-[#B42318]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 484,
                                                columnNumber: 19
                                            }, this),
                                            loadError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this) : null,
                                statusMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-[#d8e4f2] bg-white px-3 py-2 text-xs font-medium text-[#0f5d9f]",
                                    children: statusMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this) : null,
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md bg-white px-3 py-8 text-center text-sm text-[#607B90]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                size: 14,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 499,
                                                columnNumber: 19
                                            }, this),
                                            "Loading reports..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this) : null,
                                !isLoading && filteredReports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md bg-white px-3 py-8 text-center text-sm text-[#607B90]",
                                    children: "No reports matched this view."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this) : null,
                                filteredReports.map((report, index)=>{
                                    const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$report$2d$lifecycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportLifecycleActions"])(report.report);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "rounded-[16px] border border-[#e3ebf5] bg-white p-3.5 transition hover:border-[#cfdaea] hover:shadow-[0_10px_20px_rgba(15,23,42,0.05)] sm:p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-0 items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${report.iconWrapClassName}`,
                                                                children: report.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex rounded-[6px] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] ${statusClassNames[report.status]}`,
                                                                        children: report.statusLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 truncate text-[14px] font-bold text-[#1f2a3a] sm:text-[15px]",
                                                                        children: report.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 inline-flex items-center gap-1 text-[9px] text-[#7f8fa4]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleDotFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleDotFilled$3e$__["IconCircleDotFilled"], {
                                                                                size: 8
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                                lineNumber: 536,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            report.team
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-0.5 text-[8px] font-medium uppercase tracking-[0.08em] text-[#97a6ba]",
                                                                        children: report.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                        lineNumber: 539,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/dashboard/reports/${report.id}`,
                                                        className: index === 0 ? "inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[14px] bg-[#0f5d9f] text-white shadow-[0_10px_20px_rgba(15,93,159,0.35)] transition hover:bg-[#0d4f88]" : "inline-flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] border border-[#e4ebf5] bg-[#f9fbff] text-[#7f91a8] transition hover:border-[#ccd8e8] hover:bg-[#f2f7fd]",
                                                        "aria-label": `Open ${report.title}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2 border-t border-[#edf2f7] pt-3",
                                                children: actions.length ? actions.map((action)=>{
                                                    const actionKey = `${report.id}:${action.action}`;
                                                    const isActive = activeActionKey === actionKey;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            void handleLifecycleAction(report, action);
                                                        },
                                                        disabled: Boolean(activeActionKey),
                                                        title: action.description,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 items-center gap-1 rounded-full border px-3 text-[10px] font-bold disabled:cursor-wait disabled:opacity-60", action.destructive ? "border-[#f4c7c3] bg-[#fff7f6] text-[#b42318]" : "border-[#d8e4f2] bg-white text-[#40566f]"),
                                                        children: [
                                                            isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLoader2$3e$__["IconLoader2"], {
                                                                size: 11,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 31
                                                            }, this) : action.destructive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 31
                                                            }, this),
                                                            action.label
                                                        ]
                                                    }, action.action, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 27
                                                    }, this);
                                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[#8a9ab0]",
                                                    children: "No lifecycle actions are available for this status."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, report.id, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "flex items-center gap-3 rounded-[16px] border border-[#e3ebf5] bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5d9f] text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleDotFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleDotFilled$3e$__["IconCircleDotFilled"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[28px] font-extrabold leading-none text-[#1f2a3a]",
                                                    children: reports.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] font-bold uppercase tracking-[0.1em] text-[#7f8fa4]",
                                                    children: "Total Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "flex items-center gap-3 rounded-[16px] border border-[#e3ebf5] bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#18b06c] text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleCheckFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCircleCheckFilled$3e$__["IconCircleCheckFilled"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[28px] font-extrabold leading-none text-[#1f2a3a]",
                                                    children: submittedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] font-bold uppercase tracking-[0.1em] text-[#7f8fa4]",
                                                    children: "Submitted"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[10px] text-[#7f8fa4]",
                            children: [
                                actionRequiredCount,
                                " report",
                                actionRequiredCount === 1 ? "" : "s",
                                " currently need review or follow-up."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                            lineNumber: 632,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
            lineNumber: 409,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx",
        lineNumber: 408,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-report-submission-pages/report-submission-history-page.tsx [app-ssr] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconAlertCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 8v4",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 16h.01",
            "key": "svg-2"
        }
    ]
];
const IconAlertCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "alert-circle", "AlertCircle", __iconNode);
;
 //# sourceMappingURL=IconAlertCircle.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-ssr] (ecmascript) <export default as IconAlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M15 6l-6 6l6 6",
            "key": "svg-0"
        }
    ]
];
const IconChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "chevron-left", "ChevronLeft", __iconNode);
;
 //# sourceMappingURL=IconChevronLeft.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript) <export default as IconChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M9 6l6 6l-6 6",
            "key": "svg-0"
        }
    ]
];
const IconChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "chevron-right", "ChevronRight", __iconNode);
;
 //# sourceMappingURL=IconChevronRight.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript) <export default as IconChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheckFilled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconCircleCheckFilled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",
            "key": "svg-0"
        }
    ]
];
const IconCircleCheckFilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("filled", "circle-check-filled", "CircleCheckFilled", __iconNode);
;
 //# sourceMappingURL=IconCircleCheckFilled.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheckFilled.mjs [app-ssr] (ecmascript) <export default as IconCircleCheckFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCircleCheckFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleCheckFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleCheckFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheckFilled.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleDotFilled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconCircleDotFilled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 6.66a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z",
            "key": "svg-0"
        }
    ]
];
const IconCircleDotFilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("filled", "circle-dot-filled", "CircleDotFilled", __iconNode);
;
 //# sourceMappingURL=IconCircleDotFilled.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleDotFilled.mjs [app-ssr] (ecmascript) <export default as IconCircleDotFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCircleDotFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleDotFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCircleDotFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCircleDotFilled.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconFileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M14 3v4a1 1 0 0 0 1 1h4",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M9 9l1 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M9 13l6 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M9 17l6 0",
            "key": "svg-4"
        }
    ]
];
const IconFileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "file-text", "FileText", __iconNode);
;
 //# sourceMappingURL=IconFileText.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript) <export default as IconFileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconHeartFilled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconHeartFilled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",
            "key": "svg-0"
        }
    ]
];
const IconHeartFilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("filled", "heart-filled", "HeartFilled", __iconNode);
;
 //# sourceMappingURL=IconHeartFilled.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconHeartFilled.mjs [app-ssr] (ecmascript) <export default as IconHeartFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconHeartFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconHeartFilled.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconLoader2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M12 3a9 9 0 1 0 9 9",
            "key": "svg-0"
        }
    ]
];
const IconLoader2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "loader-2", "Loader2", __iconNode);
;
 //# sourceMappingURL=IconLoader2.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-ssr] (ecmascript) <export default as IconLoader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLoader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLoader2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLockFilled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconLockFilled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3",
            "key": "svg-0"
        }
    ]
];
const IconLockFilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("filled", "lock-filled", "LockFilled", __iconNode);
;
 //# sourceMappingURL=IconLockFilled.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLockFilled.mjs [app-ssr] (ecmascript) <export default as IconLockFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLockFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLockFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLockFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconLockFilled.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M21 21l-6 -6",
            "key": "svg-1"
        }
    ]
];
const IconSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "search", "Search", __iconNode);
;
 //# sourceMappingURL=IconSearch.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSearch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconTrash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M4 7l16 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M10 11l0 6",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M14 11l0 6",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",
            "key": "svg-4"
        }
    ]
];
const IconTrash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "trash", "Trash", __iconNode);
;
 //# sourceMappingURL=IconTrash.mjs.map
}),
"[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-ssr] (ecmascript) <export default as IconTrash>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconTrash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_0be04fd1._.js.map