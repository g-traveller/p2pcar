# Login Page - Visual Preview Guide

## Desktop View (1440px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────┐  ┌─────────────────────────────────────┐ │
│  │ ← 返回首页                     │  │                                     │ │
│  │                               │  │     开启您的租车之旅                   │ │
│  │  🚗 车享出行                   │  │     加入我们，体验便捷、安全、实惠      │ │
│  │                               │  │     的P2P租车服务                     │ │
│  │  欢迎回来                      │  │                                     │ │
│  │  登录您的账户以继续租车之旅      │  │  ┌─────────────────────────────┐    │ │
│  │                               │  │  │ 🚗  海量优质车源              │    │ │
│  │  邮箱地址                      │  │  │    超过10,000辆优质车辆...    │    │ │
│  │  [📧 请输入邮箱地址]            │  │  └─────────────────────────────┘    │ │
│  │                               │  │                                     │ │
│  │  密码                          │  │  ┌─────────────────────────────┐    │ │
│  │  [🔒 ••••••   👁]              │  │  │ 🛡️  安全保障                  │    │ │
│  │                               │  │  │    全面的保险覆盖和24小时...    │    │ │
│  │  ☐ 记住我    忘记密码？        │  │  └─────────────────────────────┘    │ │
│  │                               │  │                                     │ │
│  │  [登录]                        │  │  ┌─────────────────────────────┐    │ │
│  │                               │  │  │ 💰  灵活实惠                  │    │ │
│  │  ──── 或者 ────                │  │  │    比传统租车优惠30%...        │    │ │
│  │                               │  │  └─────────────────────────────┘    │ │
│  │  [G] 使用 Google 登录          │  │                                     │ │
│  │  [f] 使用 Facebook 登录         │  │  50K+      10K+      4.8          │ │
│  │                               │  │  活跃用户   优质车辆   用户评分     │ │
│  │  还没有账户？立即注册           │  │                                     │ │
│  └───────────────────────────────┘  └─────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile View (375px)

```
┌─────────────────────────┐
│                         │
│  ← 返回首页              │
│                         │
│  🚗 车享出行             │
│                         │
│  欢迎回来               │
│  登录您的账户以继续      │
│  租车之旅               │
│                         │
│  邮箱地址               │
│  [📧 请输入邮箱地址]     │
│                         │
│  密码                   │
│  [🔒 ••••••   👁]       │
│                         │
│  ☐ 记住我  忘记密码？    │
│                         │
│  [登录]                 │
│                         │
│  ── 或者 ──             │
│                         │
│  [G] Google             │
│  [f] Facebook           │
│                         │
│  还没有账户？            │
│  立即注册               │
│                         │
└─────────────────────────┘
```

## Component Structure

```
LoginForm
├── Left Panel (50% width)
│   ├── Back Button
│   ├── Logo
│   ├── Title Section
│   │   ├── Title ("欢迎回来")
│   │   └── Subtitle
│   ├── Form
│   │   ├── Email Input
│   │   │   ├── Label
│   │   │   ├── Wrapper (icon + input)
│   │   │   └── Validation
│   │   ├── Password Input
│   │   │   ├── Label
│   │   │   ├── Wrapper (icon + input + toggle)
│   │   │   └── Validation
│   │   ├── Form Actions
│   │   │   ├── Remember Me (checkbox)
│   │   │   └── Forgot Password (link)
│   │   ├── Error Message
│   │   └── Submit Button
│   ├── Divider ("或者")
│   ├── Social Buttons
│   │   ├── Google Login
│   │   └── Facebook Login
│   └── Register Link
│
└── Right Panel (50% width)
    ├── Decorative Circles (3)
    └── Hero Content
        ├── Title
        ├── Subtitle
        ├── Features (3 items)
        │   ├── Icon
        │   ├── Title
        │   └── Description
        └── Stats (3 items)
            ├── Value
            └── Label
```

## Color Palette

```
Primary Blue:    #155dfc
Secondary Blue:  #1447e6
Gradient End:    #193cb8
Background:      #ffffff
Text Heading:    #101828
Text Body:       #4a5565
Text Secondary:  #6a7282
Border:          #d1d5dc
Error:           #dc2626
White (overlay): rgba(255,255,255,0.05-0.2)
```

## Typography Scale

```
Hero Title:      36px / 700 weight
Page Title:      30px / 700 weight
Subtitle:        18px / 400 weight
Body Large:      16px / 400 weight
Input Label:     14px / 500 weight
Input Text:      14px / 400 weight
Button Text:     16px / 600 weight
Helper Text:     14px / 400 weight
```

## Spacing System

```
Container Padding:     64px (desktop), 24px (mobile)
Input Height:          48px
Button Height:         48px
Border Radius:         10px
Input Gap:             24px
Section Gap:           32px - 48px
Icon Size:             20px (inputs), 24px (features)
Feature Gap:           16px (internal), 32px (external)
```

## States & Interactions

### Input States
- **Default**: Border #d1d5dc, white background
- **Hover**: Border #155dfc
- **Focus**: Border #155dfc, shadow 0 0 0 3px rgba(21,93,252,0.1)
- **Error**: Border #fecaca, bg #fee2e2
- **Disabled**: Opacity 0.6

### Button States
- **Default**: Background #155dfc
- **Hover**: Background #1447e6
- **Active**: Background #1447e6
- **Disabled**: Opacity 0.6
- **Loading**: "登录中..." text

### Password Toggle
- **Hidden**: Eye with slash icon
- **Visible**: Eye icon
- **Hover**: Color #155dfc

## Responsive Breakpoints

```
Desktop:  > 1024px  (Two columns, full hero)
Tablet:   768-1024px (Two columns, adjusted padding)
Mobile:   < 768px   (Single column, hero hidden)
Small:    < 480px   (Single column, reduced padding)
```

## Key Features Implemented

✅ Two-panel layout (desktop)
✅ Responsive design (mobile/tablet)
✅ Email validation (regex)
✅ Password validation (min 6 chars)
✅ Show/hide password toggle
✅ Remember me checkbox
✅ Forgot password link
✅ Form error handling
✅ Loading state
✅ API integration ready
✅ Token storage (localStorage/sessionStorage)
✅ Social login buttons (placeholder)
✅ Register link
✅ Accessibility features
✅ CSS Modules styling
✅ TypeScript support

## File Locations

```
p2p-web/
├── src/
│   ├── app/
│   │   └── login/
│   │       └── page.tsx              # Login page route
│   ├── components/
│   │   ├── LoginForm.tsx             # Main component
│   │   └── LoginForm.module.css      # Component styles
│   ├── contexts/
│   │   └── AuthContext.tsx           # Auth context
│   ├── hooks/
│   │   └── useAuth.ts                # Auth hook
│   ├── services/
│   │   └── authApi.ts                # API service
│   ├── types/
│   │   └── api.ts                    # Type definitions
│   └── __tests__/
│       └── components/
│           └── LoginForm.test.tsx    # Component tests
└── docs/
    └── LOGIN_IMPLEMENTATION.md       # Full documentation
```

## Usage

To view the login page:
```bash
cd p2p-web
npm run dev
```

Navigate to: `http://localhost:3000/login`

## Testing Credentials (when backend is ready)

```
Email: user@example.com
Password: password123
```

Note: These credentials need to be set up in the backend database.
