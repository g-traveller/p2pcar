module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Work/p2pcar/p2p-web/src/components/Navbar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Navbar-module__PUpGsG__container",
  "dropdownDivider": "Navbar-module__PUpGsG__dropdownDivider",
  "dropdownIcon": "Navbar-module__PUpGsG__dropdownIcon",
  "dropdownItem": "Navbar-module__PUpGsG__dropdownItem",
  "dropdownMenu": "Navbar-module__PUpGsG__dropdownMenu",
  "greetingText": "Navbar-module__PUpGsG__greetingText",
  "loginButton": "Navbar-module__PUpGsG__loginButton",
  "logo": "Navbar-module__PUpGsG__logo",
  "logoIcon": "Navbar-module__PUpGsG__logoIcon",
  "logoText": "Navbar-module__PUpGsG__logoText",
  "menuButton": "Navbar-module__PUpGsG__menuButton",
  "mobileMenuButton": "Navbar-module__PUpGsG__mobileMenuButton",
  "navLink": "Navbar-module__PUpGsG__navLink",
  "navLinks": "Navbar-module__PUpGsG__navLinks",
  "navbar": "Navbar-module__PUpGsG__navbar",
  "registerButton": "Navbar-module__PUpGsG__registerButton",
  "userActions": "Navbar-module__PUpGsG__userActions",
  "userGreeting": "Navbar-module__PUpGsG__userGreeting",
  "userMenu": "Navbar-module__PUpGsG__userMenu",
});
}),
"[project]/Work/p2pcar/p2p-web/src/services/authApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthApiService",
    ()=>AuthApiService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "forgotPassword",
    ()=>forgotPassword,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register,
    "resetPassword",
    ()=>resetPassword,
    "sendVerificationCode",
    ()=>sendVerificationCode,
    "verifyEmail",
    ()=>verifyEmail
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
class AuthApiService {
    static baseUrl = `${API_BASE_URL}/api/v1/auth`;
    /**
   * Login with email and password
   */ static async login(data) {
        const response = await fetch(`${this.baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Register a new user
   */ static async register(data) {
        const response = await fetch(`${this.baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Logout user
   */ static async logout(token) {
        const response = await fetch(`${this.baseUrl}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Request password reset
   */ static async forgotPassword(email) {
        const response = await fetch(`${this.baseUrl}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Reset password with token
   */ static async resetPassword(token, password) {
        const response = await fetch(`${this.baseUrl}/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                password
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Verify email with token
   */ static async verifyEmail(token) {
        const response = await fetch(`${this.baseUrl}/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
    }
    /**
   * Send verification code
   */ static async sendVerificationCode(data) {
        const response = await fetch(`${this.baseUrl}/send-verification-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await this.extractErrorData(response);
            throw errorData;
        }
        return response.json();
    }
    /**
   * Extract error data from failed response
   */ static async extractErrorData(response) {
        let errorData = {
            code: response.status,
            message: `HTTP error! status: ${response.status}`,
            response: {
                status: response.status,
                data: null
            }
        };
        try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const json = await response.json();
                errorData = {
                    ...errorData,
                    ...json,
                    response: {
                        ...errorData.response,
                        data: json
                    }
                };
            } else {
                const text = await response.text();
                errorData.message = text || errorData.message;
            }
        } catch (e) {
        // If parsing fails, use default error data
        }
        const error = new Error(errorData.message || 'Request failed');
        error.response = errorData.response;
        error.code = errorData.code;
        throw error;
    }
}
const login = (data)=>AuthApiService.login(data);
const register = (data)=>AuthApiService.register(data);
const logout = (token)=>AuthApiService.logout(token);
const forgotPassword = (email)=>AuthApiService.forgotPassword(email);
const resetPassword = (token, password)=>AuthApiService.resetPassword(token, password);
const verifyEmail = (token)=>AuthApiService.verifyEmail(token);
const sendVerificationCode = (data)=>AuthApiService.sendVerificationCode(data);
const __TURBOPACK__default__export__ = AuthApiService;
}),
"[project]/Work/p2pcar/p2p-web/src/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/services/authApi.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useAuth() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if user is already logged in on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = ()=>{
            const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
            const userData = localStorage.getItem('auth_user') || sessionStorage.getItem('auth_user');
            if (token && userData) {
                try {
                    setUser(JSON.parse(userData));
                } catch (err) {
                    console.error('Failed to parse user data:', err);
                }
            }
        };
        checkAuth();
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].login(data);
            if (response.code === 200 && response.data) {
                const { token, user } = response.data;
                // Store token and user data
                if (data.rememberMe) {
                    localStorage.setItem('auth_token', token);
                    localStorage.setItem('auth_user', JSON.stringify(user));
                } else {
                    sessionStorage.setItem('auth_token', token);
                    sessionStorage.setItem('auth_user', JSON.stringify(user));
                }
                setUser(user);
            } else {
                setError(response.message || '登录失败');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '登录失败，请重试');
            throw err;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].register(data);
            if (response.code === 200 && response.data) {
                const { token, user } = response.data;
                // Store token and user data
                localStorage.setItem('auth_token', token);
                localStorage.setItem('auth_user', JSON.stringify(user));
                setUser(user);
            } else {
                setError(response.message || '注册失败');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '注册失败，请重试');
            throw err;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
        try {
            if (token) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].logout(token);
            }
        } catch (err) {
            console.error('Logout error:', err);
        } finally{
            // Clear storage regardless of API call success
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            sessionStorage.removeItem('auth_token');
            sessionStorage.removeItem('auth_user');
            setUser(null);
        }
    }, []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setError(null);
    }, []);
    return {
        user,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError
    };
}
const __TURBOPACK__default__export__ = useAuth;
}),
"[project]/Work/p2pcar/p2p-web/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useAuthContext",
    ()=>useAuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: auth,
        children: children
    }, void 0, false, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/contexts/AuthContext.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function useAuthContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
}
const __TURBOPACK__default__export__ = AuthContext;
}),
"[project]/Work/p2pcar/p2p-web/src/utils/greeting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get time-based greeting in Chinese
 */ __turbopack_context__.s([
    "getGreeting",
    ()=>getGreeting
]);
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return '上午好';
    } else if (hour >= 12 && hour < 14) {
        return '中午好';
    } else if (hour >= 14 && hour < 18) {
        return '下午好';
    } else if (hour >= 18 && hour < 22) {
        return '晚上好';
    } else {
        return '夜深了';
    }
}
}),
"[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/Navbar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$utils$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/utils/greeting.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Navbar() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "24",
                                    height: "24",
                                    rx: "4",
                                    fill: "#1a73e8"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 15L9 9H12L15 15H13L12.5 13.5H9.5L9 15H6ZM9.5 12H12L10.75 9.5L9.5 12Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "17",
                                    cy: "15",
                                    r: "1.5",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                            children: "车享出行"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinks,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/vehicles",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                            children: "浏览车辆"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/how-it-works",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                            children: "如何运作"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/become-host",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                            children: "成为主"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userActions,
                    children: user ? /* Logged in state - show greeting and nickname */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userGreeting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].greetingText,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$utils$2f$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGreeting"])(),
                                    "，",
                                    user.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userMenu,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuButton,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 14C6.68629 14 4 16.6863 4 20V21H16V20C16 17.2386 13.3137 14 10 14Z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownIcon,
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 12 12",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 4L6 8L10 4",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownMenu,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/profile",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                children: "个人中心"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/my-trips",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                children: "我的行程"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/my-vehicles",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                children: "我的车辆"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownDivider
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{},
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                children: "退出登录"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this) : /* Not logged in state - show login/register buttons */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginButton,
                                children: "登录"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].registerButton,
                                children: "注册"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileMenuButton,
                    "aria-label": "Toggle menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 12h18M3 6h18M3 18h18",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "VehicleCard-module__zCVgeW__badge",
  "badges": "VehicleCard-module__zCVgeW__badges",
  "bookButton": "VehicleCard-module__zCVgeW__bookButton",
  "card": "VehicleCard-module__zCVgeW__card",
  "content": "VehicleCard-module__zCVgeW__content",
  "favoriteButton": "VehicleCard-module__zCVgeW__favoriteButton",
  "footer": "VehicleCard-module__zCVgeW__footer",
  "header": "VehicleCard-module__zCVgeW__header",
  "host": "VehicleCard-module__zCVgeW__host",
  "hostAvatar": "VehicleCard-module__zCVgeW__hostAvatar",
  "hostInfo": "VehicleCard-module__zCVgeW__hostInfo",
  "hostName": "VehicleCard-module__zCVgeW__hostName",
  "hostTrips": "VehicleCard-module__zCVgeW__hostTrips",
  "image": "VehicleCard-module__zCVgeW__image",
  "imageContainer": "VehicleCard-module__zCVgeW__imageContainer",
  "location": "VehicleCard-module__zCVgeW__location",
  "name": "VehicleCard-module__zCVgeW__name",
  "price": "VehicleCard-module__zCVgeW__price",
  "priceUnit": "VehicleCard-module__zCVgeW__priceUnit",
  "priceValue": "VehicleCard-module__zCVgeW__priceValue",
  "rating": "VehicleCard-module__zCVgeW__rating",
  "ratingValue": "VehicleCard-module__zCVgeW__ratingValue",
  "reviewCount": "VehicleCard-module__zCVgeW__reviewCount",
  "spec": "VehicleCard-module__zCVgeW__spec",
  "specs": "VehicleCard-module__zCVgeW__specs",
});
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehicleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.module.css [app-ssr] (css module)");
;
;
function VehicleCard({ vehicle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: vehicle.image,
                        alt: vehicle.name,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].favoriteButton,
                        "aria-label": "收藏",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 3.5c-2.5-3-7-2.5-7 2 0 3.5 7 9.5 7 9.5s7-6 7-9.5c0-4.5-4.5-5-7-2z",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badges,
                        children: vehicle.badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: badge
                            }, badge, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                children: vehicle.name
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rating,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 2l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 2z",
                                            fill: "#F59E0B"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ratingValue,
                                        children: vehicle.rating
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reviewCount,
                                        children: [
                                            "(",
                                            vehicle.reviewCount,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].location,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 2C5.24 2 3 4.24 3 7c0 2.4 5 9 5 9s5-6.6 5-9c0-2.76-2.24-5-5-5zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                                    fill: "#6B7280"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: vehicle.location
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].specs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spec,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2 6h12v8H2zM3 3h2v3H3zm8 0h2v3h-2zM4 9h1v2H4zm3 0h1v2H7zm3 0h1v2h-1z",
                                            fill: "#6B7280"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            vehicle.seats,
                                            "座"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spec,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "5",
                                                cy: "10",
                                                r: "2",
                                                fill: "#6B7280"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "11",
                                                cy: "10",
                                                r: "2",
                                                fill: "#6B7280"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 6h12v4H2z",
                                                fill: "#6B7280"
                                            }, void 0, false, {
                                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: vehicle.transmission
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spec,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 2l1 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z",
                                            fill: "#6B7280"
                                        }, void 0, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: vehicle.fuel
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].host,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hostAvatar,
                                children: vehicle.hostInitial
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hostInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hostName,
                                        children: vehicle.hostName
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hostTrips,
                                        children: [
                                            vehicle.trips,
                                            "次行程"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceValue,
                                        children: [
                                            "¥",
                                            vehicle.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceUnit,
                                        children: "每天"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bookButton,
                                children: "立即预订"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "VehicleFilters-module__SNhiCG__active",
  "activeCount": "VehicleFilters-module__SNhiCG__activeCount",
  "chipButton": "VehicleFilters-module__SNhiCG__chipButton",
  "chipGroup": "VehicleFilters-module__SNhiCG__chipGroup",
  "expanded": "VehicleFilters-module__SNhiCG__expanded",
  "filterActions": "VehicleFilters-module__SNhiCG__filterActions",
  "filterIcon": "VehicleFilters-module__SNhiCG__filterIcon",
  "filterInfo": "VehicleFilters-module__SNhiCG__filterInfo",
  "filterLabel": "VehicleFilters-module__SNhiCG__filterLabel",
  "filterSection": "VehicleFilters-module__SNhiCG__filterSection",
  "filterTitle": "VehicleFilters-module__SNhiCG__filterTitle",
  "filtersContainer": "VehicleFilters-module__SNhiCG__filtersContainer",
  "filtersContent": "VehicleFilters-module__SNhiCG__filtersContent",
  "filtersHeader": "VehicleFilters-module__SNhiCG__filtersHeader",
  "loading": "VehicleFilters-module__SNhiCG__loading",
  "pulse": "VehicleFilters-module__SNhiCG__pulse",
  "resetButton": "VehicleFilters-module__SNhiCG__resetButton",
  "select": "VehicleFilters-module__SNhiCG__select",
  "selectFilterIcon": "VehicleFilters-module__SNhiCG__selectFilterIcon",
  "selectIcon": "VehicleFilters-module__SNhiCG__selectIcon",
  "selectWrapper": "VehicleFilters-module__SNhiCG__selectWrapper",
  "tagButton": "VehicleFilters-module__SNhiCG__tagButton",
  "tagGroup": "VehicleFilters-module__SNhiCG__tagGroup",
  "toggleButton": "VehicleFilters-module__SNhiCG__toggleButton",
  "toggleIcon": "VehicleFilters-module__SNhiCG__toggleIcon",
  "updating": "VehicleFilters-module__SNhiCG__updating",
});
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehicleFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.module.css [app-ssr] (css module)");
'use client';
;
;
;
const VEHICLE_TYPES = [
    {
        value: 'all',
        label: '全部车型'
    },
    {
        value: 'sedan',
        label: '轿车'
    },
    {
        value: 'suv',
        label: 'SUV'
    },
    {
        value: 'sports',
        label: '跑车'
    },
    {
        value: 'electric',
        label: '电动车'
    }
];
const PRICE_RANGES = [
    {
        value: 'all',
        label: '全部价格'
    },
    {
        value: '0-200',
        label: '¥200以下'
    },
    {
        value: '200-500',
        label: '¥200-500'
    },
    {
        value: '500+',
        label: '¥500以上'
    }
];
const SEATS_OPTIONS = [
    4,
    5,
    6,
    7
];
const FUEL_TYPES = [
    '汽油',
    '电动',
    '混动'
];
function VehicleFilters({ onFiltersChange, loading = false }) {
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vehicleType: 'all',
        priceRange: 'all',
        seats: [],
        fuelTypes: []
    });
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleVehicleTypeChange = (type)=>{
        const newFilters = {
            ...filters,
            vehicleType: type
        };
        setFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handlePriceRangeChange = (range)=>{
        const newFilters = {
            ...filters,
            priceRange: range
        };
        setFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleSeatToggle = (seat)=>{
        const newSeats = filters.seats.includes(seat) ? filters.seats.filter((s)=>s !== seat) : [
            ...filters.seats,
            seat
        ];
        const newFilters = {
            ...filters,
            seats: newSeats
        };
        setFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleFuelTypeToggle = (fuelType)=>{
        const newFuelTypes = filters.fuelTypes.includes(fuelType) ? filters.fuelTypes.filter((f)=>f !== fuelType) : [
            ...filters.fuelTypes,
            fuelType
        ];
        const newFilters = {
            ...filters,
            fuelTypes: newFuelTypes
        };
        setFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleReset = ()=>{
        const resetFilters = {
            vehicleType: 'all',
            priceRange: 'all',
            seats: [],
            fuelTypes: []
        };
        setFilters(resetFilters);
        onFiltersChange(resetFilters);
    };
    const hasActiveFilters = filters.vehicleType !== 'all' || filters.priceRange !== 'all' || filters.seats.length > 0 || filters.fuelTypes.length > 0;
    const getActiveFilterCount = ()=>{
        let count = 0;
        if (filters.vehicleType !== 'all') count++;
        if (filters.priceRange !== 'all') count++;
        if (filters.seats.length > 0) count++;
        if (filters.fuelTypes.length > 0) count++;
        return count;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filtersContainer} ${loading ? __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filtersHeader,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 4h10M3 8h14M4 12h12M6 16h8",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterTitle,
                            children: "筛选条件"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeCount,
                            children: [
                                "(",
                                getActiveFilterCount(),
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagGroup,
                    children: VEHICLE_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagButton} ${filters.vehicleType === type.value ? __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            onClick: ()=>handleVehicleTypeChange(type.value),
                            disabled: loading,
                            children: type.label
                        }, type.value, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterActions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectFilterIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 4h10M3 8h14M4 12h12M6 16h8",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                    value: filters.priceRange,
                                    onChange: (e)=>handlePriceRangeChange(e.target.value),
                                    disabled: loading,
                                    children: PRICE_RANGES.map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: range.value,
                                            children: range.label
                                        }, range.value, false, {
                                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 6l4 4 4-4",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resetButton,
                            onClick: handleReset,
                            disabled: loading,
                            children: "清除筛选"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/Work/p2pcar/p2p-web/src/services/vehicleApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocations",
    ()=>getLocations,
    "getVehicleById",
    ()=>getVehicleById,
    "searchVehicles",
    ()=>searchVehicles
]);
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1") || 'http://localhost:8080/api/v1';
/**
 * Transform backend VehicleResponse to frontend Vehicle interface
 */ function transformVehicleResponse(response) {
    // Get host initial from host name (first character)
    const hostName = response.host?.name || '车主';
    const hostInitial = hostName.charAt(0);
    // Build badges list from backend data
    const badges = [];
    if (response.host?.isSuperHost) {
        badges.push('超级车主');
    }
    if (response.instantBook) {
        badges.push('即时预订');
    }
    // Use first image from images array or fallback to image field
    const imageUrl = response.images && response.images.length > 0 ? response.images[0] : response.image || 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop';
    return {
        id: response.id,
        name: response.name,
        image: imageUrl,
        rating: Number(response.rating) || 0,
        reviewCount: response.reviewCount || 0,
        location: response.location,
        seats: response.seats,
        transmission: response.transmission === 'AUTOMATIC' ? '自动' : '手动',
        fuel: getFuelTypeLabel(response.fuel),
        hostName,
        hostInitial,
        trips: response.host?.trips || 0,
        price: Number(response.price) || 0,
        badges
    };
}
/**
 * Map backend fuel type to Chinese label
 */ function getFuelTypeLabel(fuelType) {
    const fuelMap = {
        'PETROL': '汽油',
        'ELECTRIC': '电动',
        'HYBRID': '混合',
        'DIESEL': '柴油'
    };
    return fuelMap[fuelType] || fuelType;
}
async function searchVehicles(params) {
    try {
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (params?.location) queryParams.append('location', params.location);
        if (params?.startDate) queryParams.append('startDate', params.startDate);
        if (params?.endDate) queryParams.append('endDate', params.endDate);
        if (params?.vehicleType) queryParams.append('vehicleType', params.vehicleType);
        if (params?.minPrice !== undefined) queryParams.append('minPrice', params.minPrice.toString());
        if (params?.maxPrice !== undefined) queryParams.append('maxPrice', params.maxPrice.toString());
        // Handle array parameters for seats
        if (params?.seats !== undefined) {
            if (Array.isArray(params.seats)) {
                params.seats.forEach((seat)=>queryParams.append('seats', seat.toString()));
            } else {
                queryParams.append('seats', params.seats.toString());
            }
        }
        if (params?.transmission) queryParams.append('transmission', params.transmission);
        // Handle array parameters for fuelType
        if (params?.fuelType !== undefined) {
            if (Array.isArray(params.fuelType)) {
                params.fuelType.forEach((fuel)=>{
                    // Map Chinese fuel types to backend enum values
                    const fuelTypeMap = {
                        '汽油': 'PETROL',
                        '电动': 'ELECTRIC',
                        '混动': 'HYBRID'
                    };
                    const backendFuelType = fuelTypeMap[fuel] || fuel;
                    queryParams.append('fuelType', backendFuelType);
                });
            } else {
                queryParams.append('fuelType', params.fuelType);
            }
        }
        if (params?.brand) queryParams.append('brand', params.brand);
        if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
        queryParams.append('page', (params?.page || 0).toString());
        queryParams.append('size', (params?.size || 20).toString());
        const url = `${API_BASE_URL}/vehicles${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const apiResponse = await response.json();
        if (apiResponse.code !== 200 || !apiResponse.data) {
            throw new Error(apiResponse.message || 'Failed to fetch vehicles');
        }
        const { items, total, totalPages } = apiResponse.data;
        const vehicles = items.map(transformVehicleResponse);
        return {
            vehicles,
            total,
            totalPages
        };
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
}
async function getVehicleById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/vehicles/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const apiResponse = await response.json();
        if (apiResponse.code !== 200 || !apiResponse.data) {
            throw new Error(apiResponse.message || 'Failed to fetch vehicle');
        }
        return transformVehicleResponse(apiResponse.data);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        throw error;
    }
}
async function getLocations() {
    try {
        const response = await fetch(`${API_BASE_URL}/vehicles/search/locations`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const apiResponse = await response.json();
        if (apiResponse.code !== 200 || !apiResponse.data) {
            throw new Error(apiResponse.message || 'Failed to fetch locations');
        }
        return apiResponse.data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "VehicleGrid-module__7DL0oW__active",
  "count": "VehicleGrid-module__7DL0oW__count",
  "ellipsis": "VehicleGrid-module__7DL0oW__ellipsis",
  "emptyContainer": "VehicleGrid-module__7DL0oW__emptyContainer",
  "emptySubtext": "VehicleGrid-module__7DL0oW__emptySubtext",
  "emptyText": "VehicleGrid-module__7DL0oW__emptyText",
  "errorContainer": "VehicleGrid-module__7DL0oW__errorContainer",
  "errorText": "VehicleGrid-module__7DL0oW__errorText",
  "grid": "VehicleGrid-module__7DL0oW__grid",
  "gridContainer": "VehicleGrid-module__7DL0oW__gridContainer",
  "header": "VehicleGrid-module__7DL0oW__header",
  "loadingContainer": "VehicleGrid-module__7DL0oW__loadingContainer",
  "loadingText": "VehicleGrid-module__7DL0oW__loadingText",
  "pageButton": "VehicleGrid-module__7DL0oW__pageButton",
  "pagination": "VehicleGrid-module__7DL0oW__pagination",
  "retryButton": "VehicleGrid-module__7DL0oW__retryButton",
  "sortSelect": "VehicleGrid-module__7DL0oW__sortSelect",
  "spin": "VehicleGrid-module__7DL0oW__spin",
  "spinner": "VehicleGrid-module__7DL0oW__spinner",
  "title": "VehicleGrid-module__7DL0oW__title",
});
}),
"[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehicleGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/VehicleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/VehicleFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$vehicleApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/services/vehicleApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function VehicleGrid() {
    const [vehicles, setVehicles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('recommended');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vehicleType: 'all',
        priceRange: 'all',
        seats: [],
        fuelTypes: []
    });
    const [activeFilters, setActiveFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vehicleType: 'all',
        priceRange: 'all',
        seats: [],
        fuelTypes: []
    });
    const pageSize = 16;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVehicles();
    }, [
        sortBy,
        currentPage,
        activeFilters
    ]);
    const fetchVehicles = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Map sort option to backend sortBy parameter
            const sortByMap = {
                'recommended': 'rating_desc',
                'price-low': 'price_asc',
                'price-high': 'price_desc',
                'rating': 'rating_desc'
            };
            // Map price range to min/max price
            let minPrice;
            let maxPrice;
            if (activeFilters.priceRange !== 'all') {
                const range = activeFilters.priceRange;
                if (range === '500+') {
                    minPrice = 500;
                // maxPrice remains undefined (no upper limit)
                } else if (range === '0-200') {
                    minPrice = 0;
                    maxPrice = 200;
                } else {
                    const [min, max] = range.split('-').map((p)=>parseInt(p));
                    minPrice = min;
                    maxPrice = max;
                }
            }
            // Map vehicle type to backend enum
            const vehicleType = activeFilters.vehicleType === 'all' ? undefined : activeFilters.vehicleType.toUpperCase();
            const { vehicles: fetchedVehicles, total: totalCount } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$services$2f$vehicleApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchVehicles"])({
                vehicleType,
                minPrice,
                maxPrice,
                seats: activeFilters.seats.length > 0 ? activeFilters.seats : undefined,
                fuelType: activeFilters.fuelTypes.length > 0 ? activeFilters.fuelTypes : undefined,
                sortBy: sortByMap[sortBy],
                page: currentPage,
                size: pageSize
            });
            setVehicles(fetchedVehicles);
            setTotal(totalCount);
        } catch (err) {
            console.error('Failed to fetch vehicles:', err);
            setError(err instanceof Error ? err.message : '加载车辆数据失败，请稍后重试');
        } finally{
            setLoading(false);
        }
    };
    const totalPages = Math.ceil(total / pageSize);
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleSortChange = (e)=>{
        setSortBy(e.target.value);
        setCurrentPage(0);
    };
    const handleFiltersChange = (newFilters)=>{
        setFilters(newFilters);
        setActiveFilters(newFilters);
        setCurrentPage(0); // Reset to first page when filters change
    };
    const renderPagination = ()=>{
        if (totalPages <= 1) return null;
        const pages = [];
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            for(let i = 0; i < totalPages; i++){
                pages.push(i);
            }
        } else {
            pages.push(0);
            if (currentPage > 2) pages.push('...');
            const start = Math.max(1, currentPage - 1);
            const end = Math.min(totalPages - 2, currentPage + 1);
            for(let i = start; i <= end; i++){
                pages.push(i);
            }
            if (currentPage < totalPages - 3) pages.push('...');
            pages.push(totalPages - 1);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pagination,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton,
                    onClick: ()=>handlePageChange(currentPage - 1),
                    disabled: currentPage === 0,
                    children: "上一页"
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                pages.map((page, index)=>{
                    if (page === '...') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ellipsis,
                            children: "..."
                        }, `ellipsis-${index}`, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 143,
                            columnNumber: 20
                        }, this);
                    }
                    const pageNumber = page;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton} ${currentPage === pageNumber ? __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                        onClick: ()=>handlePageChange(pageNumber),
                        children: pageNumber + 1
                    }, pageNumber, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton,
                    onClick: ()=>handlePageChange(currentPage + 1),
                    disabled: currentPage === totalPages - 1,
                    children: "下一页"
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "可租车辆",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
                                children: "(加载中...)"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onFiltersChange: handleFiltersChange,
                    loading: true
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingText,
                            children: "正在加载车辆数据..."
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "可租车辆",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
                                children: "(0)"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onFiltersChange: handleFiltersChange,
                    loading: false
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: fetchVehicles,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retryButton,
                            children: "重新加载"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
    if (vehicles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "可租车辆",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
                                    children: "(0)"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sortSelect,
                            value: sortBy,
                            onChange: handleSortChange,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "recommended",
                                    children: "推荐排序"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "price-low",
                                    children: "价格从低到高"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "price-high",
                                    children: "价格从高到低"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "rating",
                                    children: "评分最高"
                                }, void 0, false, {
                                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onFiltersChange: handleFiltersChange,
                    loading: false
                }, void 0, false, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyText,
                            children: "暂无可用车辆"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptySubtext,
                            children: "请尝试调整筛选条件"
                        }, void 0, false, {
                            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "可租车辆",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].count,
                                children: [
                                    "(",
                                    total,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sortSelect,
                        value: sortBy,
                        onChange: handleSortChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "recommended",
                                children: "推荐排序"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-low",
                                children: "价格从低到高"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-high",
                                children: "价格从高到低"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rating",
                                children: "评分最高"
                            }, void 0, false, {
                                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onFiltersChange: handleFiltersChange,
                loading: false
            }, void 0, false, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleGrid$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: vehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Work$2f$p2pcar$2f$p2p$2d$web$2f$src$2f$components$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        vehicle: vehicle
                    }, vehicle.id, false, {
                        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            renderPagination()
        ]
    }, void 0, true, {
        fileName: "[project]/Work/p2pcar/p2p-web/src/components/VehicleGrid.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e526fa3f._.js.map