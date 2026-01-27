(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "PaymentPage-module__cH_3NG__backButton",
  "bankCardPlaceholder": "PaymentPage-module__cH_3NG__bankCardPlaceholder",
  "card": "PaymentPage-module__cH_3NG__card",
  "cardTitle": "PaymentPage-module__cH_3NG__cardTitle",
  "checkbox": "PaymentPage-module__cH_3NG__checkbox",
  "container": "PaymentPage-module__cH_3NG__container",
  "depositBox": "PaymentPage-module__cH_3NG__depositBox",
  "depositLabel": "PaymentPage-module__cH_3NG__depositLabel",
  "depositRow": "PaymentPage-module__cH_3NG__depositRow",
  "depositValue": "PaymentPage-module__cH_3NG__depositValue",
  "detailLabel": "PaymentPage-module__cH_3NG__detailLabel",
  "detailRow": "PaymentPage-module__cH_3NG__detailRow",
  "detailValue": "PaymentPage-module__cH_3NG__detailValue",
  "error": "PaymentPage-module__cH_3NG__error",
  "leftColumn": "PaymentPage-module__cH_3NG__leftColumn",
  "link": "PaymentPage-module__cH_3NG__link",
  "loading": "PaymentPage-module__cH_3NG__loading",
  "navBar": "PaymentPage-module__cH_3NG__navBar",
  "orderDetails": "PaymentPage-module__cH_3NG__orderDetails",
  "orderSummary": "PaymentPage-module__cH_3NG__orderSummary",
  "page": "PaymentPage-module__cH_3NG__page",
  "pageTitle": "PaymentPage-module__cH_3NG__pageTitle",
  "payButton": "PaymentPage-module__cH_3NG__payButton",
  "payButtonActive": "PaymentPage-module__cH_3NG__payButtonActive",
  "payButtonDisabled": "PaymentPage-module__cH_3NG__payButtonDisabled",
  "paymentDesc": "PaymentPage-module__cH_3NG__paymentDesc",
  "paymentIcon": "PaymentPage-module__cH_3NG__paymentIcon",
  "paymentInfo": "PaymentPage-module__cH_3NG__paymentInfo",
  "paymentMethod": "PaymentPage-module__cH_3NG__paymentMethod",
  "paymentMethods": "PaymentPage-module__cH_3NG__paymentMethods",
  "paymentName": "PaymentPage-module__cH_3NG__paymentName",
  "priceBreakdown": "PaymentPage-module__cH_3NG__priceBreakdown",
  "priceLabel": "PaymentPage-module__cH_3NG__priceLabel",
  "priceRow": "PaymentPage-module__cH_3NG__priceRow",
  "priceValue": "PaymentPage-module__cH_3NG__priceValue",
  "qrCodeIcon": "PaymentPage-module__cH_3NG__qrCodeIcon",
  "qrCodeInstruction": "PaymentPage-module__cH_3NG__qrCodeInstruction",
  "qrCodePlaceholder": "PaymentPage-module__cH_3NG__qrCodePlaceholder",
  "qrCodeSection": "PaymentPage-module__cH_3NG__qrCodeSection",
  "qrCodeText": "PaymentPage-module__cH_3NG__qrCodeText",
  "radioDot": "PaymentPage-module__cH_3NG__radioDot",
  "radioIndicator": "PaymentPage-module__cH_3NG__radioIndicator",
  "securityContent": "PaymentPage-module__cH_3NG__securityContent",
  "securityIcon": "PaymentPage-module__cH_3NG__securityIcon",
  "securityNotice": "PaymentPage-module__cH_3NG__securityNotice",
  "securityText": "PaymentPage-module__cH_3NG__securityText",
  "securityTitle": "PaymentPage-module__cH_3NG__securityTitle",
  "selected": "PaymentPage-module__cH_3NG__selected",
  "sidebar": "PaymentPage-module__cH_3NG__sidebar",
  "termsLabel": "PaymentPage-module__cH_3NG__termsLabel",
  "termsSection": "PaymentPage-module__cH_3NG__termsSection",
  "totalLabel": "PaymentPage-module__cH_3NG__totalLabel",
  "totalRow": "PaymentPage-module__cH_3NG__totalRow",
  "totalSection": "PaymentPage-module__cH_3NG__totalSection",
  "totalValue": "PaymentPage-module__cH_3NG__totalValue",
  "vehicleImage": "PaymentPage-module__cH_3NG__vehicleImage",
  "vehicleName": "PaymentPage-module__cH_3NG__vehicleName",
  "vehicleSection": "PaymentPage-module__cH_3NG__vehicleSection",
});
}),
"[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Payment methods
const PAYMENT_METHODS = [
    {
        id: 'wechat',
        name: '微信支付',
        description: '使用微信扫码支付',
        icon: '💬'
    },
    {
        id: 'alipay',
        name: '支付宝',
        description: '使用支付宝扫码支付',
        icon: '💳'
    },
    {
        id: 'bankcard',
        name: '银行卡支付',
        description: '支持储蓄卡和信用卡',
        icon: '🏦'
    }
];
function PaymentPage({ bookingId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedPayment, setSelectedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wechat');
    const [agreedToTerms, setAgreedToTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentPage.useEffect": ()=>{
            // Fetch order data (mock for now)
            const mockOrder = {
                vehicle: {
                    id: 5,
                    name: '奔驰 S级豪华轿车',
                    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'
                },
                pickupDate: '2026/01/27',
                returnDate: '2026/01/29',
                duration: 2,
                pickupLocation: '上海市浦东新区 - 陆家嘴',
                rentalFee: 1776,
                insuranceFee: 400,
                totalAmount: 2176,
                depositAmount: 653,
                balanceAmount: 1523
            };
            setOrderData(mockOrder);
            setLoading(false);
        }
    }["PaymentPage.useEffect"], [
        bookingId
    ]);
    const handlePaymentMethodChange = (methodId)=>{
        setSelectedPayment(methodId);
    };
    const handleTermsChange = (e)=>{
        setAgreedToTerms(e.target.checked);
    };
    const handleBackToBooking = ()=>{
        router.back();
    };
    const handlePayment = ()=>{
        if (!agreedToTerms) {
            alert('请先阅读并同意服务条款、租赁协议和取消政策');
            return;
        }
        // Process payment logic here
        alert('支付功能开发中...');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: "加载中..."
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    if (!orderData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                    children: "订单信息加载失败"
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                    onClick: handleBackToBooking,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2.5 10h15M7 5l-5 5 5 5",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "返回预订"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftColumn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                                children: "确认支付"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: "选择支付方式"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentMethods,
                                        children: PAYMENT_METHODS.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentMethod} ${selectedPayment === method.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ''}`,
                                                onClick: ()=>handlePaymentMethodChange(method.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioIndicator,
                                                        children: selectedPayment === method.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDot
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentIcon,
                                                        children: method.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentName,
                                                                children: method.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentDesc,
                                                                children: method.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, method.id, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            selectedPayment === 'wechat' && '微信扫码支付',
                                            selectedPayment === 'alipay' && '支付宝扫码支付',
                                            selectedPayment === 'bankcard' && '银行卡支付'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qrCodeSection,
                                        children: selectedPayment === 'wechat' || selectedPayment === 'alipay' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qrCodePlaceholder,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qrCodeIcon,
                                                            children: "📱"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qrCodeText,
                                                            children: "二维码将在支付时显示"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qrCodeInstruction,
                                                    children: [
                                                        "请使用",
                                                        selectedPayment === 'wechat' ? '微信' : '支付宝',
                                                        "扫描二维码完成支付"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bankCardPlaceholder,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "银行卡支付功能开发中..."
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].termsSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "terms",
                                            checked: agreedToTerms,
                                            onChange: handleTermsChange,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "terms",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].termsLabel,
                                            children: [
                                                "我已阅读并同意",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                                    children: "服务条款"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                "、",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                                    children: "租赁协议"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                "和",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                                    children: "取消政策"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].securityNotice,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].securityIcon,
                                        children: "🔒"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].securityContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].securityTitle,
                                                children: "安全保障"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].securityText,
                                                children: "您的支付信息经过加密保护，我们不会存储您的完整银行卡信息。 所有交易均通过安全支付网关处理。"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderSummary,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                    children: "订单摘要"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vehicleSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vehicleImage,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: orderData.vehicle.image,
                                                alt: orderData.vehicle.name
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vehicleName,
                                            children: orderData.vehicle.name
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderDetails,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailLabel,
                                                    children: "取车日期"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailValue,
                                                    children: orderData.pickupDate
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailLabel,
                                                    children: "还车日期"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailValue,
                                                    children: orderData.returnDate
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailLabel,
                                                    children: "租期"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailValue,
                                                    children: [
                                                        orderData.duration,
                                                        "天"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailLabel,
                                                    children: "取车地点"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailValue,
                                                    children: orderData.pickupLocation
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceBreakdown,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceLabel,
                                                    children: "车辆租金"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceValue,
                                                    children: [
                                                        "¥",
                                                        orderData.rentalFee
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceLabel,
                                                    children: "保险费用"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceValue,
                                                    children: [
                                                        "¥",
                                                        orderData.insuranceFee
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalLabel,
                                                    children: "订单总额"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalValue,
                                                    children: [
                                                        "¥",
                                                        orderData.totalAmount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositLabel,
                                                            children: "预付定金 (30%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositValue,
                                                            children: [
                                                                "¥",
                                                                orderData.depositAmount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositLabel,
                                                            children: "取车时支付"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].depositValue,
                                                            children: [
                                                                "¥",
                                                                orderData.balanceAmount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].payButton} ${agreedToTerms ? __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].payButtonActive : __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$PaymentPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].payButtonDisabled}`,
                                    onClick: handlePayment,
                                    disabled: !agreedToTerms,
                                    children: [
                                        "支付定金 ¥",
                                        orderData.depositAmount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/PaymentPage.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(PaymentPage, "nQEmWAdRuhbF2Myv1pD82YTaUok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PaymentPage;
var _c;
__turbopack_context__.k.register(_c, "PaymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Work/p2pcar/p2p-web/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Work_p2pcar_p2p-web_f5d18da3._.js.map