# P2P 租车平台后端快速启动指南

## 前置要求

- JDK 21+
- Gradle 8.5+
- Docker & Docker Compose（可选）

## 快速启动

### 1. 启动依赖服务（使用 Docker）

```bash
cd /Users/nan.jiang/Work/p2pcar
docker-compose -f docker-compose-dev.yml up -d
```

这会启动：
- PostgreSQL (端口 5432)
- Redis (端口 6379)
- MinIO (端口 9000, 9001)

### 2. 配置环境变量（可选）

创建 `p2p-car-backend/.env` 文件：

```bash
DB_PASSWORD=postgres
REDIS_PASSWORD=
JWT_SECRET=your-256-bit-secret-key-change-in-production
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
```

### 3. 启动后端服务

```bash
cd /Users/nan.jiang/Work/p2pcar/p2p-car-backend
./gradlew bootRun
```

服务将在 `http://localhost:8080/api/v1` 启动。

### 4. 验证服务

#### 健康检查
```bash
curl http://localhost:8080/api/v1/vehicles
```

#### 用户注册
```bash
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "13800138000",
    "password": "password123",
    "code": "123456",
    "name": "测试用户",
    "role": "RENTER"
  }'
```

#### 用户登录
```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "13800138001",
    "password": "password123"
  }'
```

注意：测试数据已预置在 `data.sql` 中，密码是 `password123`（已加密）。

## 测试 API

### 搜索车辆
```bash
curl "http://localhost:8080/api/v1/vehicles?page=0&size=10"
```

### 获取车辆详情
```bash
curl http://localhost:8080/api/v1/vehicles/1
```

### 创建订单（需要 Token）
```bash
TOKEN="your-jwt-token-here"

curl -X POST http://localhost:8080/api/v1/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "vehicleId": 1,
    "startDate": "2024-02-01T10:00:00",
    "endDate": "2024-02-05T10:00:00",
    "totalPrice": 3552.00,
    "deposit": 1000.00
  }'
```

## 开发工具

### 查看 API 日志
```bash
./gradlew bootRun | grep -E "Started|ERROR|WARN"
```

### 数据库连接
```bash
psql -h localhost -U p2pcar -d p2pcar_dev
```

### Redis 连接
```bash
redis-cli
```

### MinIO 控制台
访问：http://localhost:9001
用户名：minioadmin
密码：minioadmin

## 常见问题

### 端口冲突
如果端口被占用，修改 `application.yml` 中的端口配置：

```yaml
server:
  port: 8081  # 改为其他端口
```

### 数据库连接失败
确认 PostgreSQL 已启动：
```bash
docker ps | grep postgres
```

检查连接：
```bash
pg_isready -h localhost -p 5432
```

### Redis 连接失败
确认 Redis 已启动：
```bash
docker ps | grep redis
```

检查连接：
```bash
redis-cli ping
```

## 生产部署

### 构建 JAR
```bash
./gradlew build -x test
```

### 运行
```bash
java -jar build/libs/p2p-car-backend-1.0.0.jar \
  --spring.profiles.active=prod \
  --DB_PASSWORD=your_password \
  --REDIS_PASSWORD=your_password \
  --JWT_SECRET=your_256_bit_secret
```

### 使用 Docker
```bash
docker build -t p2p-car-backend .
docker run -p 8080:8080 \
  -e DB_PASSWORD=your_password \
  -e REDIS_PASSWORD=your_password \
  -e JWT_SECRET=your_secret \
  p2p-car-backend
```

## 停止服务

```bash
# 停止 Docker 服务
cd /Users/nan.jiang/Work/p2pcar
docker-compose -f docker-compose-dev.yml down

# 停止后端服务
# Ctrl + C in terminal
```

## 下一步

1. 查看完整 API 文档：`docs/architecture.md`
2. 了解实现细节：`docs/backend-implementation.md`
3. 阅读项目 README：`p2p-car-backend/README.md`
