module.exports = [
"[project]/src/assets/mental_health.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mental_health.f898fd27.svg");}),
"[project]/src/assets/mental_health.svg.mjs { IMAGE => \"[project]/src/assets/mental_health.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/mental_health.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 64,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/assets/mental_health_2.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mental_health_2.f898fd27.svg");}),
"[project]/src/assets/mental_health_2.svg.mjs { IMAGE => \"[project]/src/assets/mental_health_2.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/mental_health_2.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 64,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/assets/mental_health_love.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mental_health_love.8ca00b6a.svg");}),
"[project]/src/assets/mental_health_love.svg.mjs { IMAGE => \"[project]/src/assets/mental_health_love.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/mental_health_love.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/lib/content-resources.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContentResourceDownloadUrl",
    ()=>getContentResourceDownloadUrl,
    "getContentResourceImageUrl",
    ()=>getContentResourceImageUrl,
    "listPublishedContentResources",
    ()=>listPublishedContentResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
;
async function listPublishedContentResources() {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/content-resources");
    return response.data.resources;
}
function getContentResourceDownloadUrl(resource) {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}${resource.downloadPath}`;
}
function getContentResourceImageUrl(resource) {
    return resource.imagePath ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}${resource.imagePath}` : undefined;
}
}),
"[project]/src/lib/microeducation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMicroEducationImageUrl",
    ()=>getMicroEducationImageUrl,
    "listPublishedMicroEducation",
    ()=>listPublishedMicroEducation,
    "listPublishedMicroEducationByCategory",
    ()=>listPublishedMicroEducationByCategory,
    "listPublishedMicroEducationCategories",
    ()=>listPublishedMicroEducationCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
;
async function listPublishedMicroEducation() {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/microeducation");
    return response.data.items;
}
async function listPublishedMicroEducationCategories() {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/microeducation/categories");
    return response.data.categories;
}
async function listPublishedMicroEducationByCategory(categoryId) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/microeducation/categories/${categoryId}/cards`);
    return response.data.items;
}
function getMicroEducationImageUrl(item) {
    if (!item.imagePath) {
        return undefined;
    }
    return /^https?:\/\//i.test(item.imagePath) ? item.imagePath : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}${item.imagePath}`;
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
"[next]/internal/font/google/inter_93cd5328.js [app-ssr] (ecmascript) <export default as interFont>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interFont",
    ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-ssr] (ecmascript)");
}),
"[project]/src/components/dashboard/dashboard-microeducation-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicroEducationPage",
    ()=>MicroEducationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBook$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBook$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconBook.mjs [app-ssr] (ecmascript) <export default as IconBook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-ssr] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-ssr] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconDownload.mjs [app-ssr] (ecmascript) <export default as IconDownload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFilter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.mjs [app-ssr] (ecmascript) <export default as IconFilter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-ssr] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderFilled.mjs [app-ssr] (ecmascript) <export default as IconFolderFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeadphones$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeadphones$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconHeadphones.mjs [app-ssr] (ecmascript) <export default as IconHeadphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoodSmile$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoodSmile$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMoodSmile.mjs [app-ssr] (ecmascript) <export default as IconMoodSmile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMovie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMovie$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconMovie.mjs [app-ssr] (ecmascript) <export default as IconMovie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconShieldFilled.mjs [app-ssr] (ecmascript) <export default as IconShieldFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.1/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-ssr] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.25_reac_2161b4e0288c8d777341e038bbc06455/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.25_reac_2161b4e0288c8d777341e038bbc06455/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.25_reac_2161b4e0288c8d777341e038bbc06455/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.25_reac_2161b4e0288c8d777341e038bbc06455/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@16.5.4_i18nex_936be75fe3aa37844a44fd17df2e74c7/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/mental_health.svg.mjs { IMAGE => "[project]/src/assets/mental_health.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/mental_health_2.svg.mjs { IMAGE => "[project]/src/assets/mental_health_2.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/mental_health_love.svg.mjs { IMAGE => "[project]/src/assets/mental_health_love.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$resources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content-resources.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$microeducation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/microeducation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-shared.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__ = __turbopack_context__.i("[next]/internal/font/google/inter_93cd5328.js [app-ssr] (ecmascript) <export default as interFont>");
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
function createDefaultLessonFilters() {
    return {
        lessons: [],
        duration: "all",
        formats: []
    };
}
function topicToneStyles(tone) {
    const styles = {
        blue: {
            card: "bg-[#006699]",
            title: "text-white",
            tag: "text-white/80"
        },
        orange: {
            card: "bg-[#F48C06]",
            title: "text-white",
            tag: "text-white/85"
        },
        green: {
            card: "bg-[#10B981]",
            title: "text-white",
            tag: "text-white/80"
        },
        amber: {
            card: "bg-[#f7bd23]",
            title: "text-[#111827]",
            tag: "text-[#6f5300]"
        },
        violet: {
            card: "bg-[#8157e8]",
            title: "text-white",
            tag: "text-white/80"
        },
        teal: {
            card: "bg-[#1c9d8f]",
            title: "text-white",
            tag: "text-white/80"
        }
    };
    return styles[tone];
}
function topicIcon(topic) {
    const topicKey = `${topic.id} ${topic.title}`.toLowerCase();
    if (topicKey.includes("online safety") || topicKey.includes("bullying")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShieldFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShieldFilled$3e$__["IconShieldFilled"], {
            size: 30
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
            lineNumber: 131,
            columnNumber: 12
        }, this);
    }
    if (topicKey.includes("rights") || topicKey.includes("legal aid")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderFilled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderFilled$3e$__["IconFolderFilled"], {
            size: 30
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
            lineNumber: 135,
            columnNumber: 12
        }, this);
    }
    if (topicKey.includes("mental health")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoodSmile$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoodSmile$3e$__["IconMoodSmile"], {
            size: 30
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
            lineNumber: 139,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBook$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBook$3e$__["IconBook"], {
        size: 30
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
        lineNumber: 142,
        columnNumber: 10
    }, this);
}
function topicNarrative(topic) {
    return [
        `This topic focuses on practical awareness and low-friction safety habits. ${topic.summary}`,
        "Start by identifying early signs, document what matters, and choose one immediate protective step you can take today.",
        "Support options work best when used consistently. Build a small routine, keep records, and ask for trusted professional help when needed."
    ];
}
function contentResourceIcon(mimeType) {
    if (mimeType.startsWith("video/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMovie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMovie$3e$__["IconMovie"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
            lineNumber: 155,
            columnNumber: 12
        }, this);
    }
    if (mimeType.startsWith("audio/")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeadphones$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeadphones$3e$__["IconHeadphones"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
            lineNumber: 159,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
        size: 18
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
        lineNumber: 162,
        columnNumber: 10
    }, this);
}
function formatContentResourceSize(bytes) {
    if (bytes < 1024) {
        return `${bytes}B`;
    }
    if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(1)}KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}
function formatContentResourceDate(value) {
    if (!value) {
        return "Review date open";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return "Review date open";
    }
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(date);
}
function MicroEducationPage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$16$2e$5$2e$4_i18nex_936be75fe3aa37844a44fd17df2e74c7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [activeTopicId, setActiveTopicId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeChipId, setActiveChipId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adminTopics, setAdminTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingMicroEducation, setIsLoadingMicroEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [contentResources, setContentResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [appliedFilters, setAppliedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(createDefaultLessonFilters);
    const [draftFilters, setDraftFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(createDefaultLessonFilters);
    const pushedHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loadMicroEducation = async ()=>{
            try {
                const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$microeducation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listPublishedMicroEducation"])();
                if (!isMounted) {
                    return;
                }
                setAdminTopics(items.map((item)=>({
                        id: item.id,
                        tone: item.tone,
                        tag: item.tag,
                        title: item.title,
                        summary: item.summary,
                        cta: item.cta,
                        chips: item.chips,
                        duration: item.duration,
                        format: item.format,
                        imagePath: item.imagePath
                    })));
            } catch  {
                if (isMounted) {
                    setAdminTopics([]);
                }
            } finally{
                if (isMounted) {
                    setIsLoadingMicroEducation(false);
                }
            }
        };
        void loadMicroEducation();
        return ()=>{
            isMounted = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loadContentResources = async ()=>{
            try {
                const resources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$resources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listPublishedContentResources"])();
                if (isMounted) {
                    setContentResources(resources);
                }
            } catch  {
                if (isMounted) {
                    setContentResources([]);
                }
            }
        };
        void loadContentResources();
        return ()=>{
            isMounted = false;
        };
    }, []);
    const topics = adminTopics;
    const activeTopic = topics.find((topic)=>topic.id === activeTopicId) ?? null;
    const closeActiveTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!activeTopicId) {
            return;
        }
        setActiveTopicId(null);
        if (pushedHistoryRef.current) {
            pushedHistoryRef.current = false;
            window.history.back();
        }
    }, [
        activeTopicId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeTopicId) {
            return;
        }
        pushedHistoryRef.current = true;
        window.history.pushState({
            microeducationTopic: activeTopicId
        }, "");
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                closeActiveTopic();
            }
        };
        const handlePopState = ()=>{
            if (pushedHistoryRef.current) {
                pushedHistoryRef.current = false;
            }
            setActiveTopicId(null);
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("popstate", handlePopState);
        return ()=>{
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("popstate", handlePopState);
        };
    }, [
        activeTopicId,
        closeActiveTopic
    ]);
    const chips = [
        {
            id: "all",
            label: t("dashboard.microeducation.allLessons")
        },
        {
            id: "harassment",
            label: t("dashboard.microeducation.harassment")
        },
        {
            id: "rights",
            label: t("dashboard.microeducation.rights")
        },
        {
            id: "safety",
            label: t("dashboard.microeducation.safety")
        },
        {
            id: "mentalHealth",
            label: t("dashboard.microeducation.mentalHealth")
        }
    ];
    const filterDurationOptions = [
        {
            id: "quick",
            label: "Quick",
            subtitle: "5 min"
        },
        {
            id: "deep",
            label: "Deep Dive",
            subtitle: "15 min"
        }
    ];
    const filterFormatOptions = [
        {
            id: "video",
            label: "Video"
        },
        {
            id: "interactive",
            label: "Interactive"
        },
        {
            id: "guide",
            label: "Guide"
        }
    ];
    const filteredTopics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedQuery = searchQuery.trim().toLowerCase();
        return topics.filter((topic)=>{
            if (activeChipId !== "all" && !topic.chips.includes(activeChipId)) {
                return false;
            }
            if (appliedFilters.lessons.length > 0 && !appliedFilters.lessons.includes(topic.id)) {
                return false;
            }
            if (appliedFilters.duration !== "all" && topic.duration !== appliedFilters.duration) {
                return false;
            }
            if (appliedFilters.formats.length > 0 && !appliedFilters.formats.includes(topic.format)) {
                return false;
            }
            if (!normalizedQuery) {
                return true;
            }
            const searchBlob = `${topic.tag} ${topic.title} ${topic.summary}`.toLowerCase();
            return searchBlob.includes(normalizedQuery);
        });
    }, [
        activeChipId,
        appliedFilters,
        searchQuery,
        topics
    ]);
    const appliedFilterCount = appliedFilters.lessons.length + (appliedFilters.duration === "all" ? 0 : 1) + appliedFilters.formats.length;
    const openFilterPanel = ()=>{
        setDraftFilters({
            lessons: [
                ...appliedFilters.lessons
            ],
            duration: appliedFilters.duration,
            formats: [
                ...appliedFilters.formats
            ]
        });
        setIsFilterOpen(true);
    };
    const closeFilterPanel = ()=>{
        setIsFilterOpen(false);
    };
    const resetDraftFilters = ()=>{
        setDraftFilters(createDefaultLessonFilters());
    };
    const toggleDraftLesson = (topicId)=>{
        setDraftFilters((currentFilters)=>({
                ...currentFilters,
                lessons: currentFilters.lessons.includes(topicId) ? currentFilters.lessons.filter((item)=>item !== topicId) : [
                    ...currentFilters.lessons,
                    topicId
                ]
            }));
    };
    const toggleDraftFormat = (formatId)=>{
        setDraftFilters((currentFilters)=>({
                ...currentFilters,
                formats: currentFilters.formats.includes(formatId) ? currentFilters.formats.filter((item)=>item !== formatId) : [
                    ...currentFilters.formats,
                    formatId
                ]
            }));
    };
    const applyDraftFilters = ()=>{
        setAppliedFilters({
            lessons: [
                ...draftFilters.lessons
            ],
            duration: draftFilters.duration,
            formats: [
                ...draftFilters.formats
            ]
        });
        setIsFilterOpen(false);
    };
    const sharedTransition = prefersReducedMotion ? {
        duration: 0
    } : {
        type: "spring",
        stiffness: 230,
        damping: 32,
        mass: 0.9
    };
    const fadeTransition = prefersReducedMotion ? {
        duration: 0
    } : {
        duration: 0.28,
        ease: "easeOut"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        id: "microeducation-morph",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 pb-4 pt-2 sm:px-4 sm:pb-5 sm:pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full xl:max-w-[1120px] 2xl:max-w-[1184px]",
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
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        t("dashboard.microeducation.title")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-xs font-medium text-[#7b8798]",
                                    children: t("common.cancel")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-extrabold leading-[0.9] text-[#0f4f96] sm:text-5xl xl:text-[56px]",
                                    children: t("dashboard.microeducation.headline")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-[700px] text-sm leading-[1.45] text-[#5f6f86]",
                                    children: [
                                        t("dashboard.microeducation.subtitleLine1"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this),
                                        t("dashboard.microeducation.subtitleLine2")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-4 max-w-[540px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                            size: 14,
                                            className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98a6b9]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchQuery,
                                            onChange: (event)=>setSearchQuery(event.target.value),
                                            placeholder: t("dashboard.microcards.searchPlaceholder"),
                                            className: "h-10 w-full rounded-full border border-[#dbe5f0] bg-white px-10 pr-14 text-xs text-[#1f2937] outline-none focus:border-[#3b82f6]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openFilterPanel,
                                            className: "absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f1f6fd] text-[#4f647f] transition hover:bg-[#e6f0fc]",
                                            "aria-label": "Filter lessons",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFilter$3e$__["IconFilter"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        appliedFilterCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute right-[2px] top-[2px] inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#0f5fa7] px-1 text-[9px] font-bold text-white",
                                            children: appliedFilterCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-wrap gap-2",
                                    children: chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveChipId(chip.id),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-3.5 py-1.5 text-[11px] font-semibold", activeChipId === chip.id ? "bg-[#3b82f6] text-white" : "bg-white text-[#5f6f86]"),
                                            children: chip.label
                                        }, chip.id, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid grid-cols-1 gap-2 lg:grid-cols-2",
                                    children: [
                                        filteredTopics.map((topic)=>{
                                            const tone = topicToneStyles(topic.tone);
                                            const isActive = activeTopicId === topic.id;
                                            const topicImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$microeducation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMicroEducationImageUrl"])(topic);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "button",
                                                layout: true,
                                                layoutId: `microeducation-topic-${topic.id}`,
                                                transition: sharedTransition,
                                                onClick: ()=>{
                                                    pushedHistoryRef.current = false;
                                                    setActiveTopicId(topic.id);
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative min-h-[220px] w-full overflow-hidden rounded-[24px] p-5 text-left will-change-transform sm:min-h-[250px] sm:p-6 xl:h-[304px] xl:rounded-[32px] xl:p-8", tone.card, isActive && "pointer-events-none opacity-0"),
                                                style: topicImageUrl ? {
                                                    backgroundImage: `linear-gradient(90deg, rgba(8, 29, 48, 0.78), rgba(8, 29, 48, 0.36)), url(${topicImageUrl})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center"
                                                } : undefined,
                                                "aria-label": topic.title,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-semibold uppercase tracking-[0.12em]", topicImageUrl ? "text-white/85" : tone.tag),
                                                        children: topic.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(`${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className} mt-2 max-w-[480px] text-[30px] font-black leading-[0.95] sm:text-[36px]`, topicImageUrl ? "text-white" : tone.title),
                                                        children: topic.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 max-w-[420px] text-xs", topicImageUrl ? "text-white/85" : tone.tag),
                                                        children: topic.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold", topic.tone === "amber" ? "text-[#6f5300]" : "text-[#1f2937]"),
                                                        children: topic.cta
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 21
                                                    }, this),
                                                    topicImageUrl ? null : topic.id === "mentalHealth" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pointer-events-none absolute bottom-8 left-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                                        alt: "Mental health circle",
                                                                        width: 48,
                                                                        height: 48,
                                                                        className: "h-12 w-12 opacity-45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 579,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health_2$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                                        alt: "Mental health circle overlap",
                                                                        width: 48,
                                                                        height: 48,
                                                                        className: "absolute left-8 top-0 h-12 w-12 opacity-45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$mental_health_love$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                                alt: "Mental health love icon",
                                                                width: 28,
                                                                height: 28,
                                                                className: "absolute bottom-8 right-8 h-7 w-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-7 right-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl", topic.tone === "amber" ? "bg-black/10 text-[#6f5300]" : "bg-white/20 text-white/90"),
                                                        children: topicIcon(topic)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, topic.id, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this);
                                        }),
                                        filteredTopics.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-span-full rounded-[20px] border border-[#dce5f1] bg-white p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-[#22344a]",
                                                    children: isLoadingMicroEducation ? "Loading lessons..." : "No lessons match your filters."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-[#6f8197]",
                                                    children: isLoadingMicroEducation ? "Please wait while lessons load." : "Try changing the selected topic, duration, format, or search terms."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 619,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                contentResources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-5 rounded-[22px] border border-[#dce5f1] bg-white p-4 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7e90a8]",
                                                            children: "Resource Library"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className} mt-1 text-2xl font-extrabold text-[#12243c]`,
                                                            children: "Downloadable safety resources"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-[#6f8197]",
                                                    children: [
                                                        contentResources.length,
                                                        " published"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 636,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid grid-cols-1 gap-2 lg:grid-cols-2",
                                            children: contentResources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "flex min-h-[104px] items-center gap-3 rounded-[14px] border border-[#e1eaf4] bg-[#f8fbff] p-3",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$resources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContentResourceImageUrl"])(resource) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            style: {
                                                                backgroundImage: `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$resources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContentResourceImageUrl"])(resource)})`
                                                            },
                                                            className: "h-11 w-11 shrink-0 rounded-[12px] border border-[#dce5f1] bg-cover bg-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#eaf2ff] text-[#0f5fa7]",
                                                            children: contentResourceIcon(resource.mimeType)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate text-sm font-bold text-[#1f2a3a]",
                                                                    children: resource.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-[11px] font-semibold text-[#64748b]",
                                                                    children: [
                                                                        resource.category,
                                                                        " | ",
                                                                        resource.language,
                                                                        " | ",
                                                                        resource.jurisdiction
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-[10px] text-[#8a9ab0]",
                                                                    children: [
                                                                        formatContentResourceSize(resource.fileSizeBytes),
                                                                        " | ",
                                                                        formatContentResourceDate(resource.reviewDate)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$resources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContentResourceDownloadUrl"])(resource),
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0f5fa7] text-white transition hover:bg-[#0b578f]",
                                                            "aria-label": `Download ${resource.name}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDownload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDownload$3e$__["IconDownload"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 693,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, resource.id, true, {
                                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isFilterOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            className: "fixed inset-0 z-40 bg-[#0b1728]/30",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: fadeTransition,
                            onClick: closeFilterPanel,
                            "aria-label": "Close filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                            lineNumber: 707,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
                            initial: {
                                opacity: 0,
                                x: 28
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: 28
                            },
                            transition: fadeTransition,
                            className: "fixed left-3 right-3 top-3 z-50 sm:left-auto sm:right-4 sm:top-4 sm:w-[332px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-[12px] border border-[#dce5f1] bg-white shadow-[0_22px_40px_rgba(9,22,40,0.22)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#e7edf6] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "inline-flex items-center gap-2 text-[12px] font-semibold text-[#1f2a3a]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFilter$3e$__["IconFilter"], {
                                                        size: 12,
                                                        className: "text-[#0f5fa7]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Filter Lessons"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: resetDraftFilters,
                                                className: "text-[10px] font-semibold text-[#7f90a6] hover:text-[#0f5fa7]",
                                                children: "Reset All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 731,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                        lineNumber: 726,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[calc(100vh-160px)] space-y-4 overflow-y-auto p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8092aa]",
                                                        children: "Lessons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 grid grid-cols-2 gap-2",
                                                        children: topics.map((topic)=>{
                                                            const isSelected = draftFilters.lessons.includes(topic.id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>toggleDraftLesson(topic.id),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-[44px] items-center justify-between rounded-[8px] border px-2.5 text-left text-[10px] font-semibold", isSelected ? "border-[#0f5fa7] bg-[#eaf2ff] text-[#0f5fa7]" : "border-[#dce5f1] bg-white text-[#556a82]"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate pr-2",
                                                                        children: topic.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border", isSelected ? "border-[#0f5fa7] bg-[#0f5fa7] text-white" : "border-[#ccd8e8] text-transparent"),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                                            size: 10,
                                                                            stroke: 2.4
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                            lineNumber: 772,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, topic.id, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8092aa]",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 grid grid-cols-2 gap-2",
                                                        children: filterDurationOptions.map((option)=>{
                                                            const isSelected = draftFilters.duration === option.id;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setDraftFilters((currentFilters)=>({
                                                                            ...currentFilters,
                                                                            duration: option.id
                                                                        })),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[8px] border px-3 py-2 text-left", isSelected ? "border-[#0f5fa7] bg-[#eaf2ff]" : "border-[#dce5f1] bg-white"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[11px] font-semibold", isSelected ? "text-[#0f5fa7]" : "text-[#33485f]"),
                                                                        children: option.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 805,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9px] text-[#7e90a8]",
                                                                        children: option.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 813,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, option.id, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 789,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDraftFilters((currentFilters)=>({
                                                                    ...currentFilters,
                                                                    duration: "all"
                                                                })),
                                                        className: "mt-2 text-[10px] font-semibold text-[#7f90a6] hover:text-[#0f5fa7]",
                                                        children: "Any duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 820,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 780,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8092aa]",
                                                        children: "Format"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap gap-2",
                                                        children: filterFormatOptions.map((option)=>{
                                                            const isSelected = draftFilters.formats.includes(option.id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>toggleDraftFormat(option.id),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-3 py-1.5 text-[10px] font-semibold", isSelected ? "bg-[#0f5fa7] text-white" : "bg-[#eef3fa] text-[#5f738b]"),
                                                                children: option.label
                                                            }, option.id, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-[#e7edf6] p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: applyDraftFilters,
                                            className: "inline-flex h-9 w-full items-center justify-center rounded-[8px] bg-[#0f5fa7] text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(15,95,167,0.3)]",
                                            children: "Apply Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                            lineNumber: 865,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                lineNumber: 725,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                            lineNumber: 718,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : null
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                lineNumber: 704,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-50",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: fadeTransition,
                    children: (()=>{
                        const activeTopicImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$microeducation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMicroEducationImageUrl"])(activeTopic);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    className: "absolute inset-0 bg-[#0b1728]/35 backdrop-blur-[1px]",
                                    onClick: closeActiveTopic,
                                    "aria-label": t("common.cancel")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 893,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full w-full p-3 sm:p-4 lg:p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$25_reac_2161b4e0288c8d777341e038bbc06455$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
                                        layoutId: `microeducation-topic-${activeTopic.id}`,
                                        transition: sharedTransition,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex h-full w-full max-w-[1184px] flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_24px_70px_rgba(15,33,59,0.25)] sm:rounded-[32px]"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                className: "flex items-center justify-between border-b border-[#e3eaf4] px-4 py-3 sm:px-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: closeActiveTopic,
                                                        className: "inline-flex items-center gap-2 text-xs font-semibold text-[#1f2937]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 21
                                                            }, this),
                                                            t("dashboard.microeducation.title")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: closeActiveTopic,
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e2ee] text-[#50627a]",
                                                        "aria-label": t("common.cancel"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$1$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                            lineNumber: 923,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-4 lg:grid-cols-[1.12fr_0.88fr]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                className: "rounded-2xl bg-[#f6f9fd] p-4 sm:p-5",
                                                                children: [
                                                                    activeTopicImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        style: {
                                                                            backgroundImage: `url(${activeTopicImageUrl})`
                                                                        },
                                                                        className: "mb-4 block h-44 rounded-[18px] bg-cover bg-center sm:h-56"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 931,
                                                                        columnNumber: 25
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4f647f]",
                                                                        children: activeTopic.tag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 937,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className} mt-2 text-[34px] font-black leading-[0.95] text-[#12243c] sm:text-[44px]`,
                                                                        children: activeTopic.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 940,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-3 text-sm leading-[1.6] text-[#4f647f]",
                                                                        children: activeTopic.summary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 945,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 929,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                className: "rounded-2xl border border-[#e1eaf4] p-4 sm:p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5b6f88]",
                                                                        children: t("dashboard.microcardDetail.keyTakeaway")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 951,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-sm leading-[1.6] text-[#3c4e66]",
                                                                        children: t("dashboard.microcardDetail.keyTakeawayBody")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 954,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "mt-4 inline-flex rounded-full bg-[#0f5fa7] px-4 py-2 text-xs font-semibold text-white",
                                                                        children: activeTopic.cta
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 957,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 950,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                        className: "mt-4 rounded-2xl border border-[#e1eaf4] bg-white p-4 sm:p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_93cd5328$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interFont$3e$__["interFont"].className} text-xl font-extrabold text-[#12243c]`,
                                                                children: t("dashboard.microcardDetail.digitalHarassmentOverview")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 964,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-3",
                                                                children: topicNarrative(activeTopic).map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm leading-[1.7] text-[#4f6178]",
                                                                        children: paragraph
                                                                    }, paragraph, false, {
                                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                        lineNumber: 971,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                                lineNumber: 969,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                                lineNumber: 927,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true);
                    })()
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                    lineNumber: 881,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/dashboard-microeducation-page.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/dashboard-microeducation-page.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/dashboard-microeducation-page.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5b4af95a._.js.map