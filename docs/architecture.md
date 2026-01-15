# P2P 租车平台架构设计文档

## 1. 系统概述

### 1.1 项目简介
P2P 租车平台是一个连接车主和租客的汽车租赁服务，允许车主发布闲置车辆，租客搜索并预订车辆。

### 1.2 技术栈

| 层级 | 技术选择 |
|------|---------|
| 前端 | Next.js 16 (App Router) + React 19 + TypeScript + CSS Modules |
| 后端 | Kotlin 2.0 + Spring Boot 3.2 |
| 数据库 | PostgreSQL 16 |
| 缓存 | Redis 7 |
| 消息队列 | RabbitMQ |
| 文件存储 | MinIO / 阿里云 OSS |
| 搜索引擎 | Elasticsearch (可选) |

---

## 2. 系统架构

### 2.1 整体架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                           客户端层                               │
├─────────────────────────────────────────────────────────────────┤
│  Web 前端 (Next.js)   │   移动端 (未来)   │   管理后台 (未来)    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API 网关层                                │
├─────────────────────────────────────────────────────────────────┤
│              Spring Cloud Gateway (未来)                        │
│         负载均衡、限流、鉴权、日志、熔断                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        应用服务层                                │
├─────────────────────────────────────────────────────────────────┤
│  用户服务  │  车辆服务  │  订单服务  │  支付服务  │  评价服务  │
│  消息服务  │  搜索服务  │  文件服务  │  通知服务                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        数据存储层                                │
├─────────────────────────────────────────────────────────────────┤
│  PostgreSQL (主数据库)  │  Redis (缓存)  │  MinIO (文件存储)    │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 分层说明

#### 2.2.1 客户端层
- **Web 前端**: Next.js 服务端渲染，提供 SEO 友好的用户界面
- **移动端**: Flutter/React Native（预留）
- **管理后台**: Vue.js/React（预留）

#### 2.2.2 API 网关层（单机阶段暂时不需要）
- 统一入口、路由转发
- JWT 鉴权、限流、日志
- 未来微服务化时添加

#### 2.2.3 应用服务层
| 服务 | 职责 | 端口 |
|------|------|------|
| user-service | 用户注册、登录、资料管理 | 8081 |
| vehicle-service | 车辆 CRUD、搜索、状态管理 | 8082 |
| order-service | 订单创建、状态流转、取消 | 8083 |
| payment-service | 支付对接、退款、结算 | 8084 |
| review-service | 评价 CRUD、评分计算 | 8085 |
| message-service | 站内信、推送通知 | 8086 |
| file-service | 文件上传、图片处理 | 8087 |

---

## 3. 数据库设计

### 3.1 ER 图概览

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    User      │───┐   │   Vehicle    │───┐   │    Order     │
│  (用户表)    │   │   │  (车辆表)    │   │   │  (订单表)    │
├──────────────┤   │   ├──────────────┤   │   ├──────────────┤
│ id           │   │   │ id           │   │   │ id           │
│ phone        │   │   │ owner_id     │◄──┘   │ renter_id    │───┐
│ password     │   │   │ brand        │       │ vehicle_id   │◄──┘
│ name         │   │   │ model        │       │ status       │
│ avatar       │   │   │ price        │       │ start_date   │
│ role         │   │   │ location     │       │ end_date     │
│ status       │   │   │ status       │       │ total_price  │
└──────────────┘   │   └──────────────┘       └──────────────┘
                   │
                   │   ┌──────────────┐       ┌──────────────┐
                   └──►│   Review     │◄──────│    Order     │
                       │  (评价表)    │       └──────────────┘
                       ├──────────────┤
                       │ id           │
                       │ order_id     │
                       │ reviewer_id  │
                       │ rating       │
                       │ comment      │
                       └──────────────┘
```

### 3.2 核心表结构

#### 3.2.1 用户表 (users)

```sql
CREATE TABLE users (
    id              BIGSERIAL PRIMARY KEY,
    phone           VARCHAR(20) NOT NULL UNIQUE,
    email           VARCHAR(100) UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    name            VARCHAR(50) NOT NULL,
    avatar          VARCHAR(500),
    id_card_verified BOOLEAN DEFAULT FALSE,
    driver_license_verified BOOLEAN DEFAULT FALSE,
    role            VARCHAR(20) NOT NULL, -- 'OWNER', 'RENTER', 'ADMIN'
    status          VARCHAR(20) DEFAULT 'ACTIVE', -- 'ACTIVE', 'SUSPENDED', 'DELETED'
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_status ON users(status);
```

#### 3.2.2 车辆表 (vehicles)

```sql
CREATE TABLE vehicles (
    id              BIGSERIAL PRIMARY KEY,
    owner_id        BIGINT NOT NULL REFERENCES users(id),
    brand           VARCHAR(50) NOT NULL,  -- 品牌：奔驰、宝马
    model           VARCHAR(100) NOT NULL, -- 型号：S级、X5
    year            INTEGER,
    color           VARCHAR(30),
    license_plate   VARCHAR(20) UNIQUE,
    seats           INTEGER NOT NULL,
    transmission    VARCHAR(20) NOT NULL,  -- '自动', '手动'
    fuel_type       VARCHAR(20) NOT NULL,  -- '汽油', '电动', '混动'
    price_per_day   DECIMAL(10,2) NOT NULL,
    location        VARCHAR(200) NOT NULL, -- 取车地点
    latitude        DECIMAL(10, 8),
    longitude       DECIMAL(11, 8),
    description     TEXT,
    status          VARCHAR(20) DEFAULT 'AVAILABLE', -- 'AVAILABLE', 'RENTED', 'MAINTENANCE', 'DELETED'
    is_super_host   BOOLEAN DEFAULT FALSE,
    instant_book    BOOLEAN DEFAULT FALSE,
    total_trips     INTEGER DEFAULT 0,
    rating          DECIMAL(3,2) DEFAULT 0,
    review_count    INTEGER DEFAULT 0,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_vehicles_owner ON vehicles(owner_id);
CREATE INDEX idx_vehicles_status ON vehicles(status);
CREATE INDEX idx_vehicles_location ON vehicles(location);
CREATE INDEX idx_vehicles_price ON vehicles(price_per_day);
CREATE INDEX idx_vehicles_rating ON vehicles(rating DESC);
```

#### 3.2.3 车辆图片表 (vehicle_images)

```sql
CREATE TABLE vehicle_images (
    id              BIGSERIAL PRIMARY KEY,
    vehicle_id      BIGINT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    url             VARCHAR(500) NOT NULL,
    is_primary      BOOLEAN DEFAULT FALSE,
    display_order   INTEGER DEFAULT 0,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_vehicle_images_vehicle ON vehicle_images(vehicle_id);
```

#### 3.2.4 订单表 (orders)

```sql
CREATE TABLE orders (
    id              BIGSERIAL PRIMARY KEY,
    order_no        VARCHAR(32) UNIQUE NOT NULL,
    renter_id       BIGINT NOT NULL REFERENCES users(id),
    vehicle_id      BIGINT NOT NULL REFERENCES vehicles(id),
    owner_id        BIGINT NOT NULL REFERENCES users(id),
    start_date      TIMESTAMP NOT NULL,
    end_date        TIMESTAMP NOT NULL,
    days            INTEGER NOT NULL,
    total_price     DECIMAL(10,2) NOT NULL,
    deposit         DECIMAL(10,2) DEFAULT 0,
    status          VARCHAR(20) DEFAULT 'PENDING', -- 'PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'REFUNDED'
    cancel_reason   VARCHAR(500),
    checked_in_at   TIMESTAMP,
    checked_out_at  TIMESTAMP,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_renter ON orders(renter_id);
CREATE INDEX idx_orders_owner ON orders(owner_id);
CREATE INDEX idx_orders_vehicle ON orders(vehicle_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_dates ON orders(start_date, end_date);
```

#### 3.2.5 支付记录表 (payments)

```sql
CREATE TABLE payments (
    id              BIGSERIAL PRIMARY KEY,
    order_id        BIGINT NOT NULL REFERENCES orders(id),
    payment_no      VARCHAR(32) UNIQUE NOT NULL,
    amount          DECIMAL(10,2) NOT NULL,
    type            VARCHAR(20) NOT NULL, -- 'RENT', 'DEPOSIT', 'REFUND'
    method          VARCHAR(20), -- 'ALIPAY', 'WECHAT', 'CARD'
    status          VARCHAR(20) DEFAULT 'PENDING', -- 'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED'
    transaction_id  VARCHAR(100),
    paid_at         TIMESTAMP,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_status ON payments(status);
```

#### 3.2.6 评价表 (reviews)

```sql
CREATE TABLE reviews (
    id              BIGSERIAL PRIMARY KEY,
    order_id        BIGINT NOT NULL UNIQUE REFERENCES orders(id),
    reviewer_id     BIGINT NOT NULL REFERENCES users(id),
    target_id       BIGINT NOT NULL REFERENCES users(id),
    rating          INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment         TEXT,
    vehicle_rating  INTEGER,
    owner_rating    INTEGER,
    renter_rating   INTEGER,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_order ON reviews(order_id);
CREATE INDEX idx_reviews_target ON reviews(target_id);
```

#### 3.2.7 消息表 (messages)

```sql
CREATE TABLE messages (
    id              BIGSERIAL PRIMARY KEY,
    sender_id       BIGINT NOT NULL REFERENCES users(id),
    receiver_id     BIGINT NOT NULL REFERENCES users(id),
    order_id        BIGINT REFERENCES orders(id),
    type            VARCHAR(20) DEFAULT 'CHAT', -- 'CHAT', 'SYSTEM', 'NOTIFICATION'
    content         TEXT NOT NULL,
    is_read         BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_messages_receiver ON messages(receiver_id, is_read);
CREATE INDEX idx_messages_order ON messages(order_id);
```

---

## 4. API 设计

### 4.1 API 规范

- **协议**: HTTPS
- **格式**: JSON
- **认证**: JWT Bearer Token
- **基础路径**: `/api/v1`

### 4.2 通用响应格式

```json
{
  "code": 200,
  "message": "success",
  "data": {},
  "timestamp": 1704067200000
}
```

### 4.3 API 端点列表

#### 4.3.1 用户服务 (User Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| POST | /auth/register | 用户注册 | 否 |
| POST | /auth/login | 用户登录 | 否 |
| POST | /auth/send-code | 发送验证码 | 否 |
| GET | /users/profile | 获取个人信息 | 是 |
| PUT | /users/profile | 更新个人信息 | 是 |
| POST | /users/avatar | 上传头像 | 是 |
| GET | /users/{id} | 获取用户公开信息 | 是 |

**请求示例 - 注册**
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "phone": "13800138000",
  "password": "password123",
  "code": "123456",
  "name": "张三",
  "role": "OWNER"
}
```

#### 4.3.2 车辆服务 (Vehicle Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| GET | /vehicles | 搜索车辆列表 | 否 |
| GET | /vehicles/{id} | 获取车辆详情 | 否 |
| POST | /vehicles | 发布车辆 | 是 |
| PUT | /vehicles/{id} | 更新车辆信息 | 是 |
| DELETE | /vehicles/{id} | 删除/下架车辆 | 是 |
| POST | /vehicles/{id}/images | 上传车辆图片 | 是 |
| GET | /vehicles/my | 我的车辆列表 | 是 |
| GET | /vehicles/search/locations | 热门取车地点 | 否 |

**请求示例 - 搜索车辆**
```http
GET /api/v1/vehicles?location=北京市&startDate=2024-01-15&endDate=2024-01-20&sortBy=price_asc&page=1&size=10
```

**响应示例**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 6,
    "items": [
      {
        "id": 1,
        "name": "奔驰 S级豪华轿车",
        "brand": "奔驰",
        "model": "S级",
        "image": "https://...",
        "price": 888.00,
        "rating": 4.9,
        "reviewCount": 128,
        "location": "北京市朝阳区",
        "seats": 5,
        "transmission": "自动",
        "fuel": "汽油",
        "host": {
          "id": 10,
          "name": "李先生",
          "avatar": "https://...",
          "trips": 256
        },
        "badges": ["超级车主", "即时预订"]
      }
    ]
  }
}
```

#### 4.3.3 订单服务 (Order Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| POST | /orders | 创建预订订单 | 是 |
| GET | /orders | 我的订单列表 | 是 |
| GET | /orders/{id} | 订单详情 | 是 |
| PUT | /orders/{id}/cancel | 取消订单 | 是 |
| PUT | /orders/{id}/confirm | 车主确认订单 | 是 |
| PUT | /orders/{id}/check-in | 确认取车 | 是 |
| PUT | /orders/{id}/check-out | 确认还车 | 是 |
| GET | /orders/vehicle/{id}/availability | 检查车辆可用性 | 否 |

#### 4.3.4 支付服务 (Payment Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| POST | /payments/create | 创建支付 | 是 |
| POST | /payments/notify/{gateway} | 支付回调 | 否 |
| GET | /payments/{order_no} | 查询支付状态 | 是 |
| POST | /payments/{order_no}/refund | 申请退款 | 是 |

#### 4.3.5 评价服务 (Review Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| POST | /reviews | 提交评价 | 是 |
| GET | /reviews/user/{id} | 用户收到的评价 | 是 |
| GET | /reviews/vehicle/{id} | 车辆的评价 | 否 |

#### 4.3.6 消息服务 (Message Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| GET | /messages | 消息列表 | 是 |
| POST | /messages | 发送消息 | 是 |
| PUT | /messages/{id}/read | 标记已读 | 是 |
| GET | /messages/unread-count | 未读消息数 | 是 |

#### 4.3.7 文件服务 (File Service)

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| POST | /files/upload | 上传文件 | 是 |
| GET | /files/{id} | 获取文件 | 否 |

---

## 5. 后端模块设计

### 5.1 项目结构

```
p2p-car-backend/
├── p2p-car-api/                    # API 网关 (未来)
├── p2p-car-user/                   # 用户服务
├── p2p-car-vehicle/                # 车辆服务
├── p2p-car-order/                  # 订单服务
├── p2p-car-payment/                # 支付服务
├── p2p-car-review/                 # 评价服务
├── p2p-car-message/                # 消息服务
├── p2p-car-file/                   # 文件服务
├── p2p-car-common/                 # 公共模块
│   ├── p2p-car-common-core/        # 核心工具类
│   ├── p2p-car-common-security/    # 安全模块 (JWT)
│   ├── p2p-car-common-database/    # 数据库配置
│   ├── p2p-car-common-redis/       # Redis 配置
│   └── p2p-car-common-web/         # Web 通用配置
└── p2p-car-registry/               # 注册中心 (Nacos)
```

### 5.2 单体应用包结构（当前阶段）

```
src/main/kotlin/com/p2pcar/
├── P2pCarApplication.kt            # 启动类
├── config/                         # 配置类
│   ├── SecurityConfig.kt           # 安全配置
│   ├── RedisConfig.kt              # Redis 配置
│   ├── DatabaseConfig.kt           # 数据库配置
│   └── FileStorageConfig.kt        # 文件存储配置
├── controller/                     # 控制器层
│   ├── UserController.kt
│   ├── VehicleController.kt
│   ├── OrderController.kt
│   ├── PaymentController.kt
│   ├── ReviewController.kt
│   └── MessageController.kt
├── service/                        # 服务层
│   ├── UserService.kt
│   ├── VehicleService.kt
│   ├── OrderService.kt
│   ├── PaymentService.kt
│   ├── ReviewService.kt
│   └── MessageService.kt
├── repository/                     # 数据访问层
│   ├── UserRepository.kt
│   ├── VehicleRepository.kt
│   ├── OrderRepository.kt
│   └── ...
├── entity/                         # 实体类
│   ├── User.kt
│   ├── Vehicle.kt
│   ├── Order.kt
│   └── ...
├── dto/                            # 数据传输对象
│   ├── request/                    # 请求 DTO
│   │   ├── RegisterRequest.kt
│   │   ├── LoginRequest.kt
│   │   ├── VehicleSearchRequest.kt
│   │   └── ...
│   └── response/                   # 响应 DTO
│       ├── ApiResponse.kt
│       ├── UserResponse.kt
│       ├── VehicleResponse.kt
│       └── ...
├── security/                       # 安全相关
│   ├── JwtTokenProvider.kt
│   ├── JwtAuthenticationFilter.kt
│   └── UserDetailsServiceImpl.kt
├── exception/                      # 异常处理
│   ├── GlobalExceptionHandler.kt
│   ├── BusinessException.kt
│   └── ErrorCode.kt
├── util/                           # 工具类
│   DateUtil.kt
│   ValidationUtil.kt
│   └── FileUtil.kt
└── mapper/                         # MyBatis Mapper (可选)
    └── ...
```

### 5.3 核心配置示例

#### application.yml

```yaml
server:
  port: 8080

spring:
  application:
    name: p2p-car
  datasource:
    driver-class-name: org.postgresql.Driver
    url: jdbc:postgresql://localhost:5432/p2pcar
    username: p2pcar
    password: ${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
  data:
    redis:
      host: localhost
      port: 6379
      password: ${REDIS_PASSWORD}
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 50MB

# JWT 配置
jwt:
  secret: ${JWT_SECRET:your-secret-key-change-in-production}
  expiration: 86400000  # 24小时
  refresh-expiration: 604800000  # 7天

# 文件存储配置
file:
  storage:
    type: minio  # minio, oss, local
    endpoint: http://localhost:9000
    access-key: ${MINIO_ACCESS_KEY}
    secret-key: ${MINIO_SECRET_KEY}
    bucket: p2pcar

# 支付配置
payment:
  alipay:
    app-id: ${ALIPAY_APP_ID}
    private-key: ${ALIPAY_PRIVATE_KEY}
    public-key: ${ALIPAY_PUBLIC_KEY}
  wechat:
    app-id: ${WECHAT_APP_ID}
    mch-id: ${WECHAT_MCH_ID}
    api-key: ${WECHAT_API_KEY}
```

### 5.4 依赖配置 (build.gradle.kts)

```kotlin
plugins {
    id("org.springframework.boot") version "3.2.0"
    id("io.spring.dependency-management") version "1.1.4"
    kotlin("jvm") version "1.9.21"
    kotlin("plugin.spring") version "1.9.21"
    kotlin("plugin.jpa") version "1.9.21"
}

dependencies {
    // Spring Boot
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-data-redis")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-validation")

    // Kotlin
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")

    // Database
    runtimeOnly("org.postgresql:postgresql:42.7.1")

    // JWT
    implementation("io.jsonwebtoken:jjwt-api:0.12.3")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.12.3")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.12.3")

    // MinIO
    implementation("io.minio:minio:8.5.7")

    // 支付
    implementation("com.alipay.sdk:alipay-sdk-java:4.39.31.ALL")
    implementation("com.github.wechatpay-apiv3:wechatpay-java:0.2.12")

    // 工具类
    implementation("org.apache.commons:commons-lang3:3.14.0")
    implementation("commons-codec:commons-codec:1.16.0")

    // 开发工具
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}
```

---

## 6. 前后端交互

### 6.1 认证流程

```
┌─────────┐                  ┌─────────┐                  ┌─────────┐
│  前端   │                  │ 后端API │                  │  Redis  │
└────┬────┘                  └────┬────┘                  └────┬────┘
     │                            │                            │
     │  POST /auth/login          │                            │
     ├───────────────────────────>│                            │
     │  {phone, password}         │                            │
     │                            │                            │
     │                            │ 验证密码                    │
     │                            │ 生成JWT                     │
     │                            │                            │
     │                            │  存储Token                  │
     │                            ├──────────────────────────>│
     │                            │                            │
     │  {token, userInfo}         │                            │
     │<───────────────────────────┤                            │
     │                            │                            │
     │  存储Token到localStorage    │                            │
     │                            │                            │
     │  后续请求带 Authorization   │                            │
     │  Bearer {token}            │                            │
     │                            │                            │
```

### 6.2 预订流程

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  租客   │    │  车辆   │    │  订单   │    │  支付   │
│  前端   │    │  服务   │    │  服务   │    │  服务   │
└────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘
     │              │              │              │
     │ 1.搜索车辆   │              │              │
     ├─────────────>│              │              │
     │<─────────────┤              │              │
     │              │              │              │
     │ 2.查看详情   │              │              │
     ├─────────────>│              │              │
     │<─────────────┤              │              │
     │              │              │              │
     │ 3.检查可用性 │              │              │
     ├─────────────>│              │              │
     │<─────────────┤              │              │
     │              │              │              │
     │ 4.创建订单   │              │              │
     ├─────────────┼─────────────>│              │
     │<─────────────┼─────────────┤              │
     │              │              │              │
     │ 5.创建支付   │              │              │
     ├─────────────┼─────────────┼─────────────>│
     │<─────────────┼─────────────┼─────────────┤
     │              │              │              │
     │ 6.完成支付   │              │              │
     ├─────────────┼─────────────┼─────────────>│
     │              │              │              │
     │              │              │ 7.更新订单状态│
     │              │              │<─────────────┤
     │              │              │              │
     │              │ 8.更新车辆状态│              │
     │              │<─────────────┤              │
     │              │              │              │
     │ 9.通知车主   │              │              │
     │<─────────────┼─────────────┼─────────────┤
     │              │              │              │
```

### 6.3 前端调用示例

```typescript
// api/vehicle.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器 - 添加 JWT
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 响应拦截器 - 处理错误
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // 跳转登录
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 车辆搜索
export const searchVehicles = (params: VehicleSearchParams) => {
  return api.get('/vehicles', { params });
};

// 车辆详情
export const getVehicle = (id: number) => {
  return api.get(`/vehicles/${id}`);
};

// 创建订单
export const createOrder = (data: CreateOrderRequest) => {
  return api.post('/orders', data);
};
```

---

## 7. 安全设计

### 7.1 认证授权

| 安全措施 | 实现方式 |
|---------|---------|
| 用户认证 | JWT (JSON Web Token) |
| 密码存储 | BCrypt 哈希 (强度 10) |
| Token 过期 | Access Token 24h, Refresh Token 7天 |
| 接口鉴权 | Spring Security + JWT Filter |
| 角色权限 | @PreAuthorize 注解 |

### 7.2 数据验证

| 层级 | 验证内容 |
|------|---------|
| 前端 | 表单验证 (React Hook Form + Zod) |
| 后端 | @Valid 注解 + 自定义验证器 |
| 数据库 | 约束、触发器 |

### 7.3 数据加密

| 数据类型 | 加密方式 |
|---------|---------|
| 传输数据 | HTTPS (TLS 1.3) |
| 密码 | BCrypt |
| 敏感字段 | AES-256 (可选) |

### 7.4 防护措施

- **SQL 注入**: JPA 参数化查询
- **XSS**: 前端转义 + CSP 头
- **CSRF**: SameSite Cookie + Token
- **限流**: Redis + Bucket4j
- **文件上传**: 类型检查 + 大小限制 + 病毒扫描

---

## 8. 部署架构

### 8.1 开发环境

```
┌─────────────────────────────────────────────────┐
│                  Docker Compose                 │
├─────────────────────────────────────────────────┤
│  p2p-web (Next.js)  │  p2p-api (Spring Boot)   │
│        :3000        │           :8080           │
├─────────────────────────────────────────────────┤
│  PostgreSQL :5432  │  Redis :6379  │ MinIO :9000│
└─────────────────────────────────────────────────┘
```

### 8.2 生产环境

```
                           ┌─────────────────┐
                           │     CloudFlare  │
                           │    (DNS + CDN)  │
                           └────────┬────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
           ┌────────────────┐              ┌────────────────┐
           │   Nginx LB     │              │   Nginx LB     │
           │  (前端静态)     │              │   (API 负载)    │
           └────────┬───────┘              └────────┬───────┘
                    │                               │
        ┌───────────┼───────────┐       ┌───────────┼───────────┐
        ▼           ▼           ▼       ▼           ▼           ▼
    Next.js     Next.js    Next.js  API-8080   API-8080   API-8080
    :3000       :3001      :3002   (Primary)  (Replica)  (Replica)
                    │                           │
                    └───────────┬───────────────┘
                                ▼
        ┌──────────────────────────────────────────────┐
        │           RDS PostgreSQL (主从)               │
        ├──────────────────────────────────────────────┤
        │           Redis Cluster (哨兵)                │
        ├──────────────────────────────────────────────┤
        │           MinIO / 阿里云 OSS                   │
        └──────────────────────────────────────────────┘
```

### 8.3 docker-compose.yml

```yaml
version: '3.8'

services:
  # 前端
  p2p-web:
    build: ./p2p-web
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
    depends_on:
      - p2p-api

  # 后端
  p2p-api:
    build: ./p2p-car-backend
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - DB_PASSWORD=postgres
      - REDIS_PASSWORD=redis
      - JWT_SECRET=dev-secret-change-me
    depends_on:
      - postgres
      - redis
      - minio

  # PostgreSQL
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=p2pcar
      - POSTGRES_USER=p2pcar
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --requirepass redis
    volumes:
      - redis-data:/data

  # MinIO
  minio:
    image: minio/minio:latest
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      - MINIO_ROOT_USER=minioadmin
      - MINIO_ROOT_PASSWORD=minioadmin
    command: server /data --console-address ":9001"
    volumes:
      - minio-data:/data

volumes:
  postgres-data:
  redis-data:
  minio-data:
```

---

## 9. 开发计划

### Phase 1: MVP (最小可行产品)
- [ ] 用户注册/登录
- [ ] 车辆发布/搜索
- [ ] 订单创建/确认
- [ ] 基础支付

### Phase 2: 核心功能
- [ ] 评价系统
- [ ] 消息通知
- [ ] 订单状态流转
- [ ] 退款处理

### Phase 3: 增强功能
- [ ] 实时聊天
- [ ] 地图定位
- [ ] 智能推荐
- [ ] 优惠券系统

### Phase 4: 运营功能
- [ ] 数据分析看板
- [ ] 风控系统
- [ ] 客服系统
- [ ] 营销活动

---

## 10. 附录

### 10.1 状态码定义

| Code | Message | 说明 |
|------|---------|------|
| 200 | success | 成功 |
| 400 | bad request | 请求参数错误 |
| 401 | unauthorized | 未认证 |
| 403 | forbidden | 无权限 |
| 404 | not found | 资源不存在 |
| 409 | conflict | 资源冲突 |
| 500 | internal error | 服务器错误 |

### 10.2 订单状态流转

```
PENDING → CONFIRMED → IN_PROGRESS → COMPLETED
   ↓          ↓           ↓
CANCELLED  CANCELLED   REFUNDED
```

### 10.3 参考文档

- [Spring Boot 官方文档](https://spring.io/projects/spring-boot)
- [Kotlin 语言文档](https://kotlinlang.org/docs/)
- [Next.js 文档](https://nextjs.org/docs)
- [PostgreSQL 文档](https://www.postgresql.org/docs/)
