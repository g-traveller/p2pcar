module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Work/p2pcar/p2p-web/src/components/LoginForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "LoginForm-module__1certW__backButton",
  "checkbox": "LoginForm-module__1certW__checkbox",
  "checkboxLabel": "LoginForm-module__1certW__checkboxLabel",
  "container": "LoginForm-module__1certW__container",
  "decorativeCircle1": "LoginForm-module__1certW__decorativeCircle1",
  "decorativeCircle2": "LoginForm-module__1certW__decorativeCircle2",
  "decorativeCircle3": "LoginForm-module__1certW__decorativeCircle3",
  "divider": "LoginForm-module__1certW__divider",
  "error": "LoginForm-module__1certW__error",
  "feature": "LoginForm-module__1certW__feature",
  "featureDescription": "LoginForm-module__1certW__featureDescription",
  "featureIcon": "LoginForm-module__1certW__featureIcon",
  "featureText": "LoginForm-module__1certW__featureText",
  "featureTitle": "LoginForm-module__1certW__featureTitle",
  "features": "LoginForm-module__1certW__features",
  "forgotLink": "LoginForm-module__1certW__forgotLink",
  "form": "LoginForm-module__1certW__form",
  "formActions": "LoginForm-module__1certW__formActions",
  "heroContent": "LoginForm-module__1certW__heroContent",
  "heroSubtitle": "LoginForm-module__1certW__heroSubtitle",
  "heroTitle": "LoginForm-module__1certW__heroTitle",
  "input": "LoginForm-module__1certW__input",
  "inputGroup": "LoginForm-module__1certW__inputGroup",
  "inputIcon": "LoginForm-module__1certW__inputIcon",
  "inputWrapper": "LoginForm-module__1certW__inputWrapper",
  "label": "LoginForm-module__1certW__label",
  "leftPanel": "LoginForm-module__1certW__leftPanel",
  "logo": "LoginForm-module__1certW__logo",
  "logoText": "LoginForm-module__1certW__logoText",
  "registerLink": "LoginForm-module__1certW__registerLink",
  "rightPanel": "LoginForm-module__1certW__rightPanel",
  "socialButton": "LoginForm-module__1certW__socialButton",
  "socialButtons": "LoginForm-module__1certW__socialButtons",
  "stat": "LoginForm-module__1certW__stat",
  "statLabel": "LoginForm-module__1certW__statLabel",
  "statValue": "LoginForm-module__1certW__statValue",
  "stats": "LoginForm-module__1certW__stats",
  "submitButton": "LoginForm-module__1certW__submitButton",
  "subtitle": "LoginForm-module__1certW__subtitle",
  "title": "LoginForm-module__1certW__title",
  "titleSection": "LoginForm-module__1certW__titleSection",
  "togglePassword": "LoginForm-module__1certW__togglePassword",
});
}),
"[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/LoginForm.module.css [app-ssr] (css module)");
'use client';
;
;
;
function LoginForm({ onLogin }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password)=>{
        return password.length >= 6;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        // Validation
        if (!email) {
            setError('请输入邮箱地址');
            return;
        }
        if (!validateEmail(email)) {
            setError('请输入有效的邮箱地址');
            return;
        }
        if (!password) {
            setError('请输入密码');
            return;
        }
        if (!validatePassword(password)) {
            setError('密码长度至少为6位');
            return;
        }
        setIsLoading(true);
        try {
            if (onLogin) {
                await onLogin({
                    email,
                    password,
                    rememberMe
                });
            } else {
                // Default API call
                const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
                const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const data = await response.json();
                if (data.code === 200) {
                    // Store token and user data
                    const storage = rememberMe ? localStorage : sessionStorage;
                    storage.setItem('auth_token', data.data.token);
                    storage.setItem('auth_user', JSON.stringify(data.data.user));
                    // Redirect to home page
                    window.location.href = '/';
                } else {
                    setError(data.message || '登录失败，请重试');
                }
            }
        } catch (err) {
            setError('登录失败，请检查网络连接');
            console.error('Login error:', err);
        } finally{
            setIsLoading(false);
        }
    };
    const handleSocialLogin = (provider)=>{
        // TODO: Implement social login
        console.log(`Social login with ${provider}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10 4L4 10M4 10L10 16M4 10H16",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "返回首页"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "16",
                                        cy: "16",
                                        r: "14",
                                        fill: "#155dfc"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 16h12M16 10v12",
                                        stroke: "white",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                                children: "车享出行"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "欢迎回来"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "登录您的账户以继续租车之旅"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                        children: "邮箱地址"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputIcon,
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4z",
                                                        stroke: "#6a7282",
                                                        strokeWidth: "1.5",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 4l8 6 8-6",
                                                        stroke: "#6a7282",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请输入邮箱地址",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                        children: "密码"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputIcon,
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 10V7a5 5 0 0110 0v3M5 10h10a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z",
                                                        stroke: "#6a7282",
                                                        strokeWidth: "1.5",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "10",
                                                        cy: "14",
                                                        r: "1",
                                                        fill: "#6a7282"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: showPassword ? 'text' : 'password',
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "请输入密码",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].togglePassword,
                                                onClick: ()=>setShowPassword(!showPassword),
                                                tabIndex: -1,
                                                children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10 4C6 4 2.5 6 1 9c1.5 3 5 5 9 5s7.5-2 9-5c-1.5-3-5-5-9-5z",
                                                            stroke: "#6a7282",
                                                            strokeWidth: "1.5",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "10",
                                                            cy: "9",
                                                            r: "2.5",
                                                            stroke: "#6a7282",
                                                            strokeWidth: "1.5",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10 4C6 4 2.5 6 1 9c1.5 3 5 5 9 5s7.5-2 9-5c-1.5-3-5-5-9-5z",
                                                            stroke: "#6a7282",
                                                            strokeWidth: "1.5",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "10",
                                                            cy: "9",
                                                            r: "2.5",
                                                            stroke: "#6a7282",
                                                            strokeWidth: "1.5",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2 18L18 2",
                                                            stroke: "#6a7282",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox,
                                                checked: rememberMe,
                                                onChange: (e)=>setRememberMe(e.target.checked),
                                                disabled: isLoading
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "记住我"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/forgot-password",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forgotLink,
                                        children: "忘记密码？"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 243,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                disabled: isLoading,
                                children: isLoading ? '登录中...' : '登录'
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "或者"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialButton,
                                onClick: ()=>handleSocialLogin('google'),
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.64 9.2c0-.637-.057-1.252-.164-1.84H10v3.481h4.192a3.582 3.582 0 011.56 2.352h-2.483v2.156h4.056c-.392 1.277-1.548 2.696-3.815 2.696-2.769 0-5.023-2.244-5.023-5.014 0-2.77 2.254-5.014 5.023-5.014 1.586 0 2.664.626 3.284 1.236l2.348-2.348C17.468 2.742 14.986 2 12.21 2c-4.425 0-8 3.576-8 8s3.575 8 8 8c4.615 0 7.667-3.247 7.667-7.822 0-.664-.072-1.31-.189-1.942l-1.048-.036z",
                                            fill: "#4285F4"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "使用 Google 登录"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialButton,
                                onClick: ()=>handleSocialLogin('facebook'),
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.896 10H16.5V18h-3.5v-8H10.5V7h2.5V5.062C13 2.742 14.188 2 16.375 2H18.5v3h-1.375c-.956 0-1.125.375-1.125 1.125V7h2.5l-.5 3h-.104z",
                                            fill: "#1877F2"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "使用 Facebook 登录"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].registerLink,
                        children: [
                            "还没有账户？",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/register",
                                children: "立即注册"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 290,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decorativeCircle1
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decorativeCircle2
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decorativeCircle3
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroTitle,
                                children: "开启您的租车之旅"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroSubtitle,
                                children: "加入我们，体验便捷、安全、实惠的P2P租车服务"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].features,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feature,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "海量优质车源"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureDescription,
                                                        children: "超过10,000辆优质车辆，满足各种出行需求"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feature,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "安全保障"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureDescription,
                                                        children: "全面的保险覆盖和24小时道路救援服务"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feature,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureTitle,
                                                        children: "灵活实惠"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureDescription,
                                                        children: "比传统租车优惠30%，灵活租期无压力"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "50K+"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "活跃用户"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "10K+"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "优质车辆"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "4.8"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "用户评分"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                                lineNumber: 370,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/LoginForm.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__edf5c3fa._.js.map