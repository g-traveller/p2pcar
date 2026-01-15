# P2P Car Rental Backend

后端服务，基于 Kotlin + Spring Boot 3.2 构建。

## 技术栈

- Kotlin 2.0
- Spring Boot 3.2
- Spring Data JPA
- Spring Security + JWT
- PostgreSQL 16
- Redis 7
- Gradle 8.5

## 项目结构

```
src/main/kotlin/com/p2pcar/
├── config/              # 配置类
│   ├── SecurityConfig.kt
│   ├── RedisConfig.kt
│   ├── DatabaseConfig.kt
│   └── WebConfig.kt
├── controller/          # 控制器层
│   ├── AuthController.kt
│   ├── UserController.kt
│   ├── VehicleController.kt
│   ├── OrderController.kt
│   └── ReviewController.kt
├── service/            # 服务层
│   ├── UserService.kt
│   ├── VehicleService.kt
│   ├── OrderService.kt
│   └── ReviewService.kt
├── repository/         # 数据访问层
│   ├── UserRepository.kt
│   ├── VehicleRepository.kt
│   ├── OrderRepository.kt
│   └── ReviewRepository.kt
├── entity/             # 实体类
│   ├── User.kt
│   ├── Vehicle.kt
│   ├── Order.kt
│   ├── Payment.kt
│   ├── Review.kt
│   └── Message.kt
├── dto/                # 数据传输对象
│   ├── request/       # 请求 DTO
│   └── response/      # 响应 DTO
├── security/          # 安全相关
│   ├── JwtTokenProvider.kt
│   ├── JwtAuthenticationFilter.kt
│   ├── UserPrincipal.kt
│   └── CustomUserDetailsService.kt
├── exception/         # 异常处理
│   ├── BusinessException.kt
│   ├── ErrorCode.kt
│   └── GlobalExceptionHandler.kt
└── util/             # 工具类
    ├── DateUtil.kt
    ├── ValidationUtil.kt
    └── OrderNoGenerator.kt
```

## 环境要求

- JDK 21
- PostgreSQL 16
- Redis 7

## 配置说明

配置文件位于 `src/main/resources/application.yml`。

### 环境变量

```bash
# 数据库配置
DB_PASSWORD=your_password

# Redis 配置
REDIS_PASSWORD=your_password

# JWT 密钥
JWT_SECRET=your-256-bit-secret

# MinIO 配置（可选）
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
```

## 启动步骤

### 1. 安装依赖

```bash
./gradlew build
```

### 2. 启动数据库

```bash
# 使用 Docker Compose
docker-compose up -d postgres redis minio
```

### 3. 运行应用

```bash
./gradlew bootRun
```

应用将在 `http://localhost:8080/api/v1` 启动。

### 4. 使用开发配置

```bash
./gradlew bootRun --args='--spring.profiles.active=dev'
```

## API 文档

### 认证

#### 注册
```
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

#### 登录
```
POST /api/v1/auth/login
Content-Type: application/json

{
  "phone": "13800138000",
  "password": "password123"
}
```

### 车辆

#### 搜索车辆
```
GET /api/v1/vehicles?location=北京市&startDate=2024-01-15&endDate=2024-01-20&sortBy=rating_desc&page=0&size=10
```

#### 获取车辆详情
```
GET /api/v1/vehicles/{id}
```

#### 创建车辆
```
POST /api/v1/vehicles
Authorization: Bearer {token}
Content-Type: application/json

{
  "brand": "奔驰",
  "model": "S级",
  "seats": 5,
  "transmission": "AUTOMATIC",
  "fuelType": "PETROL",
  "pricePerDay": 888.00,
  "location": "北京市朝阳区",
  "instantBook": true
}
```

### 订单

#### 创建订单
```
POST /api/v1/orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "vehicleId": 1,
  "startDate": "2024-01-15T10:00:00",
  "endDate": "2024-01-20T10:00:00",
  "totalPrice": 4440.00,
  "deposit": 1000.00
}
```

#### 获取订单列表
```
GET /api/v1/orders?status=PENDING&page=0&size=20
Authorization: Bearer {token}
```

### 评价

#### 提交评价
```
POST /api/v1/reviews
Authorization: Bearer {token}
Content-Type: application/json

{
  "orderId": 1,
  "rating": 5,
  "comment": "非常满意的体验",
  "vehicleRating": 5,
  "ownerRating": 5
}
```

## 开发指南

### 数据库迁移

使用 `spring.jpa.hibernate.ddl-auto=update` 自动创建表结构。

生产环境建议使用 Flyway 或 Liquibase 进行版本管理。

### 测试

```bash
# 运行所有测试
./gradlew test

# 运行特定测试
./gradlew test --tests VehicleServiceTest
```

### 代码规范

- 遵循 Kotlin 官方编码规范
- 使用 `@Transactional` 管理事务
- 所有公开 API 需要添加 DTO 验证
- 异常处理使用 `BusinessException`
- 日志使用 SLF4J

## 部署

### 构建 JAR 包

```bash
./gradlew build -x test
```

JAR 文件位于 `build/libs/p2p-car-backend-1.0.0.jar`。

### 运行

```bash
java -jar build/libs/p2p-car-backend-1.0.0.jar \
  --spring.profiles.active=prod \
  --DB_PASSWORD=your_password
```

### Docker 部署

```bash
docker build -t p2p-car-backend .
docker run -p 8080:8080 \
  -e DB_PASSWORD=your_password \
  -e REDIS_PASSWORD=your_password \
  -e JWT_SECRET=your-secret \
  p2p-car-backend
```

## 性能优化

- Redis 缓存热点数据
- 数据库查询使用索引
- 分页查询避免大结果集
- 连接池配置优化

## 安全

- JWT Token 认证
- BCrypt 密码加密
- CORS 配置
- SQL 注入防护（JPA 参数化查询）
- XSS 防护

## 待实现功能

- [ ] 支付服务集成
- [ ] 消息服务
- [ ] 文件上传服务
- [ ] 验证码服务
- [ ] 刷新 Token
- [ ] 管理后台 API
- [ ] 数据分析统计
- [ ] Elasticsearch 搜索
- [ ] WebSocket 实时通知
- [ ] 微服务拆分

## 许可证

MIT
