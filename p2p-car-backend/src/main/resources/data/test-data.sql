-- P2P Car Rental - Test Data (50 Vehicles)
-- 首先插入测试用户（车主）
INSERT INTO users (phone, password_hash, name, role, status, id_card_verified, driver_license_verified, created_at, updated_at) VALUES
('13800000001', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '张伟', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000002', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '李娜', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000003', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '王芳', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000004', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '刘洋', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000005', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '陈静', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000006', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '杨强', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000007', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '赵敏', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('13800000008', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '周杰', 'OWNER', 'ACTIVE', true, true, NOW(), NOW())
ON CONFLICT (phone) DO NOTHING;

-- 插入50辆测试车辆
INSERT INTO vehicles (owner_id, brand, model, year, color, license_plate, seats, transmission, fuel_type, price_per_day, location, latitude, longitude, description, status, is_super_host, instant_book, total_trips, rating, review_count, created_at, updated_at) VALUES
-- 用户1的车辆 (北京)
(1, '特斯拉', 'Model 3', 2023, '白色', '京A12345', 5, 'AUTOMATIC', 'ELECTRIC', 350.00, '北京市朝阳区', 39.9042, 116.4074, '全新特斯拉Model 3，自动驾驶功能，续航里程长，车内空间宽敞', 'AVAILABLE', true, true, 128, 4.85, 96, NOW(), NOW()),
(1, '宝马', '3系', 2022, '黑色', '京B23456', 5, 'AUTOMATIC', 'PETROL', 420.00, '北京市海淀区', 39.9590, 116.2986, '宝马3系，操控性强，内饰豪华，适合商务出行', 'AVAILABLE', true, true, 89, 4.78, 72, NOW(), NOW()),
(1, '奔驰', 'C级', 2023, '银色', '京C34567', 5, 'AUTOMATIC', 'PETROL', 450.00, '北京市东城区', 39.9075, 116.3972, '奔驰C级，舒适静音，配置丰富，尽显优雅', 'AVAILABLE', true, false, 65, 4.82, 54, NOW(), NOW()),
(1, '奥迪', 'A4L', 2022, '灰色', '京D45678', 5, 'AUTOMATIC', 'PETROL', 380.00, '北京市西城区', 39.9042, 116.3661, '奥迪A4L，科技感十足，quattro四驱系统', 'AVAILABLE', false, true, 76, 4.75, 61, NOW(), NOW()),
(1, '理想', 'L9', 2023, '蓝色', '京E56789', 6, 'AUTOMATIC', 'HYBRID', 520.00, '北京市丰台区', 39.8583, 116.2871, '理想L9，大型SUV，三排座椅，家庭出行首选', 'AVAILABLE', true, true, 43, 4.90, 35, NOW(), NOW()),
(1, '蔚来', 'ES6', 2022, '白色', '京F67890', 5, 'AUTOMATIC', 'ELECTRIC', 400.00, '北京市石景山区', 39.9064, 116.2230, '蔚来ES6，换电便捷，NOMI智能助手', 'AVAILABLE', true, true, 92, 4.88, 78, NOW(), NOW()),
(1, '小鹏', 'P7', 2023, '红色', '京G78901', 5, 'AUTOMATIC', 'ELECTRIC', 320.00, '北京市门头沟区', 39.9370, 116.1055, '小鹏P7，超长续航，智能语音控制', 'AVAILABLE', false, true, 54, 4.65, 42, NOW(), NOW()),

-- 用户2的车辆 (上海)
(2, '特斯拉', 'Model Y', 2023, '白色', '沪A23456', 5, 'AUTOMATIC', 'ELECTRIC', 380.00, '上海市浦东新区', 31.2304, 121.4737, '特斯拉Model Y，空间超大，露营模式', 'AVAILABLE', true, true, 156, 4.92, 128, NOW(), NOW()),
(2, '保时捷', 'Macan', 2022, '黑色', '沪B34567', 5, 'AUTOMATIC', 'PETROL', 880.00, '上海市黄浦区', 31.2304, 121.4737, '保时捷Macan，豪华SUV，运动性能出色', 'AVAILABLE', true, false, 34, 4.95, 28, NOW(), NOW()),
(2, '沃尔沃', 'XC60', 2023, '白色', '沪C45678', 5, 'AUTOMATIC', 'HYBRID', 480.00, '上海市静安区', 31.2294, 121.4454, '沃尔沃XC60，安全环保，北欧简约风格', 'AVAILABLE', true, true, 67, 4.80, 55, NOW(), NOW()),
(2, '凯迪拉克', 'XT5', 2022, '银色', '沪D56789', 7, 'AUTOMATIC', 'PETROL', 420.00, '上海市徐汇区', 31.1880, 121.4370, '凯迪拉克XT5，美式豪华，七座大空间', 'AVAILABLE', false, true, 45, 4.72, 38, NOW(), NOW()),
(2, '比亚迪', '汉', 2023, '蓝色', '沪E67890', 5, 'AUTOMATIC', 'ELECTRIC', 300.00, '上海市长宁区', 31.2200, 121.4250, '比亚迪汉，刀片电池，Dragon Face设计', 'AVAILABLE', true, true, 112, 4.68, 89, NOW(), NOW()),
(2, '大众', 'ID.4', 2022, '白色', '沪F78901', 5, 'AUTOMATIC', 'ELECTRIC', 280.00, '上海市普陀区', 31.2500, 121.3920, '大众ID.4，德系品质，MEB平台打造', 'AVAILABLE', false, true, 78, 4.60, 62, NOW(), NOW()),
(2, '极氪', '001', 2023, '灰色', '沪G89012', 5, 'AUTOMATIC', 'ELECTRIC', 450.00, '上海市虹口区', 31.2600, 121.5000, '极氪001，猎装造型，加速迅猛', 'AVAILABLE', true, true, 56, 4.85, 45, NOW(), NOW()),

-- 用户3的车辆 (广州)
(3, '丰田', '凯美瑞', 2023, '白色', '粤A12345', 5, 'AUTOMATIC', 'HYBRID', 280.00, '广州市天河区', 23.1291, 113.2644, '丰田凯美瑞，混动省油，可靠耐用', 'AVAILABLE', true, true, 145, 4.78, 118, NOW(), NOW()),
(3, '本田', '雅阁', 2022, '黑色', '粤B23456', 5, 'AUTOMATIC', 'PETROL', 260.00, '广州市越秀区', 23.1250, 113.2640, '本田雅阁，空间大，动力平顺', 'AVAILABLE', true, true, 167, 4.82, 134, NOW(), NOW()),
(3, '日产', '天籁', 2023, '银色', '粤C34567', 5, 'AUTOMATIC', 'PETROL', 250.00, '广州市海珠区', 23.0833, 113.3140, '日产天籁，移动大沙发，舒适静谧', 'AVAILABLE', false, true, 89, 4.70, 71, NOW(), NOW()),
(3, '广汽埃安', 'AION S', 2022, '白色', '粤D45678', 5, 'AUTOMATIC', 'ELECTRIC', 220.00, '广州市荔湾区', 23.1250, 113.2420, '埃安AION S，续航扎实，网约神车', 'AVAILABLE', true, true, 203, 4.65, 156, NOW(), NOW()),
(3, '小鹏', 'P5', 2023, '蓝色', '粤E56789', 5, 'AUTOMATIC', 'ELECTRIC', 240.00, '广州市白云区', 23.1570, 113.2640, '小鹏P5，睡眠模式，智能家用车', 'AVAILABLE', false, true, 67, 4.62, 54, NOW(), NOW()),
(3, '丰田', '汉兰达', 2022, '灰色', '粤F67890', 7, 'AUTOMATIC', 'HYBRID', 520.00, '广州市番禺区', 23.0300, 113.3400, '丰田汉兰达，七座SUV，家用全能', 'AVAILABLE', true, true, 98, 4.88, 82, NOW(), NOW()),
(3, '雷克萨斯', 'ES300h', 2023, '黑色', '粤G78901', 5, 'AUTOMATIC', 'HYBRID', 550.00, '广州市黄埔区', 23.1800, 113.4500, '雷克萨斯ES，豪华舒适，静谧性好', 'AVAILABLE', true, false, 43, 4.92, 36, NOW(), NOW()),

-- 用户4的车辆 (深圳)
(4, '特斯拉', 'Model S', 2023, '红色', '粤B12345', 5, 'AUTOMATIC', 'ELECTRIC', 680.00, '深圳市南山区', 22.5431, 114.0579, '特斯拉Model S，百公里加速2.1秒，极致性能', 'AVAILABLE', true, true, 28, 4.95, 24, NOW(), NOW()),
(4, '比亚迪', '唐', 2022, '白色', '粤B34567', 7, 'AUTOMATIC', 'HYBRID', 380.00, '深圳市福田区', 22.5431, 114.0579, '比亚迪唐，七座混动，Dragon Face 2.0', 'AVAILABLE', true, true, 134, 4.75, 108, NOW(), NOW()),
(4, '理想', 'ONE', 2023, '蓝色', '粤B89012', 6, 'AUTOMATIC', 'HYBRID', 450.00, '深圳市罗湖区', 22.5431, 114.0579, '理想ONE，增程式电动，无里程焦虑', 'AVAILABLE', false, true, 89, 4.80, 72, NOW(), NOW()),
(4, '蔚来', 'ET7', 2022, '灰色', '粤B45678', 5, 'AUTOMATIC', 'ELECTRIC', 580.00, '深圳市盐田区', 22.5431, 114.0579, '蔚来ET7，旗舰轿车，NT2.0平台', 'AVAILABLE', true, false, 34, 4.90, 28, NOW(), NOW()),
(4, '小鹏', 'G9', 2023, '白色', '粤B56789', 6, 'AUTOMATIC', 'ELECTRIC', 480.00, '深圳市宝安区', 22.5431, 114.0579, '小鹏G9，超快充，智能双腔空悬', 'AVAILABLE', true, true, 56, 4.85, 45, NOW(), NOW()),
(4, '问界', 'M5', 2022, '银色', '粤B67890', 5, 'AUTOMATIC', 'HYBRID', 420.00, '深圳市龙岗区', 22.5431, 114.0579, '问界M5，华为鸿蒙座舱，增程式', 'AVAILABLE', false, true, 67, 4.70, 54, NOW(), NOW()),
(4, '阿维塔', '11', 2023, '蓝色', '粤B78901', 5, 'AUTOMATIC', 'ELECTRIC', 520.00, '深圳市龙华区', 22.5431, 114.0579, '阿维塔11，长安华为宁德时代联手', 'AVAILABLE', true, true, 23, 4.88, 19, NOW(), NOW()),

-- 用户5的车辆 (杭州)
(5, '吉利', '星越L', 2023, '白色', '浙A12345', 5, 'AUTOMATIC', 'HYBRID', 260.00, '杭州市西湖区', 30.2741, 120.1551, '吉利星越L，大五座，CMA架构', 'AVAILABLE', true, true, 112, 4.72, 89, NOW(), NOW()),
(5, '比亚迪', '海豹', 2022, '蓝色', '浙A23456', 5, 'AUTOMATIC', 'ELECTRIC', 280.00, '杭州市上城区', 30.2741, 120.1551, '比亚迪海豹，CTB电池车身一体化', 'AVAILABLE', true, true, 89, 4.78, 72, NOW(), NOW()),
(5, '零跑', 'C11', 2023, '灰色', '浙A34567', 5, 'AUTOMATIC', 'ELECTRIC', 240.00, '杭州市拱墅区', 30.2741, 120.1551, '零跑C11，性价比之王，无边框车门', 'AVAILABLE', false, true, 134, 4.65, 98, NOW(), NOW()),
(5, '哪吒', 'S', 2022, '红色', '浙A45678', 5, 'AUTOMATIC', 'ELECTRIC', 260.00, '杭州市滨江区', 30.2741, 120.1551, '哪吒S，轿跑造型，增程纯电双选择', 'AVAILABLE', true, true, 78, 4.68, 62, NOW(), NOW()),
(5, '长城', '欧拉好猫', 2023, '白色', '浙A56789', 4, 'AUTOMATIC', 'ELECTRIC', 180.00, '杭州市萧山区', 30.2741, 120.1551, '欧拉好猫，复古可爱，女性友好', 'AVAILABLE', true, false, 156, 4.80, 124, NOW(), NOW()),
(5, '荣威', 'RX5', 2022, '银色', '浙A67890', 5, 'AUTOMATIC', 'PETROL', 220.00, '杭州市余杭区', 30.2741, 120.1551, '荣威RX5，互联网汽车，智能斑马系统', 'AVAILABLE', false, true, 98, 4.62, 78, NOW(), NOW()),
(5, '飞凡', 'R7', 2023, '蓝色', '浙A78901', 5, 'AUTOMATIC', 'ELECTRIC', 380.00, '杭州市临平区', 30.2741, 120.1551, '飞凡R7，三联屏，RISING PILOT智驾', 'AVAILABLE', true, true, 34, 4.85, 28, NOW(), NOW()),

-- 用户6的车辆 (成都)
(6, '长安', 'UNI-V', 2023, '灰色', '川A12345', 5, 'AUTOMATIC', 'PETROL', 200.00, '成都市武侯区', 30.5728, 104.0668, '长安UNI-V，无边界格栅，轿跑设计', 'AVAILABLE', true, true, 145, 4.70, 112, NOW(), NOW()),
(6, '比亚迪', '宋PLUS', 2022, '白色', '川A23456', 5, 'AUTOMATIC', 'HYBRID', 280.00, '成都市锦江区', 30.5728, 104.0668, '比亚迪宋PLUS，DM-i超级混动', 'AVAILABLE', true, true, 178, 4.82, 142, NOW(), NOW()),
(6, '理想', 'L8', 2023, '蓝色', '川A34567', 6, 'AUTOMATIC', 'HYBRID', 550.00, '成都市青羊区', 30.5728, 104.0668, '理想L8，家庭六座旗舰SUV', 'AVAILABLE', true, false, 45, 4.90, 38, NOW(), NOW()),
(6, '蔚来', 'ET5', 2022, '金色', '川A45678', 5, 'AUTOMATIC', 'ELECTRIC', 420.00, '成都市金牛区', 30.5728, 104.0668, '蔚来ET5，入门电动轿车，运动感强', 'AVAILABLE', false, true, 67, 4.75, 54, NOW(), NOW()),
(6, '极氪', '009', 2023, '黑色', '川A56789', 6, 'AUTOMATIC', 'ELECTRIC', 780.00, '成都市成华区', 30.5728, 104.0668, '极氪009，豪华电动MPV，商务首选', 'AVAILABLE', true, true, 18, 4.95, 15, NOW(), NOW()),
(6, '岚图', 'FREE', 2022, '白色', '川A67890', 5, 'AUTOMATIC', 'HYBRID', 480.00, '成都市龙泉驿区', 30.5728, 104.0668, '岚图FREE，增程式，游艇设计', 'AVAILABLE', true, true, 56, 4.80, 45, NOW(), NOW()),
(6, '高合', 'HiPhi X', 2023, '银色', '川A78901', 6, 'AUTOMATIC', 'ELECTRIC', 880.00, '成都市温江区', 30.5728, 104.0668, '高合HiPhi X，NT展翼门，科技旗舰', 'AVAILABLE', true, false, 12, 4.92, 10, NOW(), NOW()),

-- 用户7的车辆 (武汉)
(7, '东风', '岚图追光', 2023, '白色', '鄂A12345', 5, 'AUTOMATIC', 'HYBRID', 420.00, '武汉市江汉区', 30.5928, 114.3055, '岚图追光，中式豪华，性能轿跑', 'AVAILABLE', true, true, 34, 4.78, 28, NOW(), NOW()),
(7, '小鹏', 'G6', 2022, '蓝色', '鄂A23456', 5, 'AUTOMATIC', 'ELECTRIC', 320.00, '武汉市武昌区', 30.5928, 114.3055, '小鹏G6，超快充，800V高压平台', 'AVAILABLE', true, true, 89, 4.72, 71, NOW(), NOW()),
(7, '蔚来', 'ES8', 2023, '灰色', '鄂A34567', 6, 'AUTOMATIC', 'ELECTRIC', 620.00, '武汉市洪山区', 30.5928, 114.3055, '蔚来ES8，六座旗舰SUV', 'AVAILABLE', false, true, 23, 4.88, 19, NOW(), NOW()),
(7, '理想', 'L7', 2022, '白色', '鄂A45678', 5, 'AUTOMATIC', 'HYBRID', 480.00, '武汉市汉阳区', 30.5928, 114.3055, '理想L7，五座旗舰SUV', 'AVAILABLE', true, true, 56, 4.85, 45, NOW(), NOW()),
(7, '比亚迪', '海豚', 2023, '粉色', '鄂A56789', 4, 'AUTOMATIC', 'ELECTRIC', 160.00, '武汉市江岸区', 30.5928, 114.3055, '比亚迪海豚，城市代步可爱小车', 'AVAILABLE', true, false, 189, 4.68, 145, NOW(), NOW()),
(7, '问界', 'M7', 2023, '银色', '鄂A67890', 6, 'AUTOMATIC', 'HYBRID', 450.00, '武汉市硚口区', 30.5928, 114.3055, '问界M7，六座增程式，鸿蒙智能座舱', 'AVAILABLE', false, true, 78, 4.80, 62, NOW(), NOW()),
(7, '极狐', '阿尔法S', 2022, '红色', '鄂A78901', 5, 'AUTOMATIC', 'ELECTRIC', 350.00, '武汉市青山区', 30.5928, 114.3055, '极狐阿尔法S，华为HI版，自动驾驶', 'AVAILABLE', true, true, 45, 4.75, 36, NOW(), NOW()),

-- 用户8的车辆 (南京)
(8, '蔚来', 'ES7', 2023, '白色', '苏A12345', 6, 'AUTOMATIC', 'ELECTRIC', 580.00, '南京市鼓楼区', 32.0603, 118.7969, '蔚来ES7，六座中大型SUV', 'AVAILABLE', true, true, 28, 4.90, 23, NOW(), NOW()),
(8, '比亚迪', '腾势D9', 2022, '灰色', '苏A23456', 7, 'AUTOMATIC', 'HYBRID', 680.00, '南京市玄武区', 32.0603, 118.7969, '腾势D9，豪华MPV，DM-i混动', 'AVAILABLE', true, false, 19, 4.95, 16, NOW(), NOW()),
(8, '理想', 'L9', 2023, '蓝色', '苏A34567', 6, 'AUTOMATIC', 'HYBRID', 620.00, '南京市秦淮区', 32.0603, 118.7969, '理想L9，全尺寸六座SUV', 'AVAILABLE', false, true, 34, 4.88, 28, NOW(), NOW()),
(8, '小鹏', 'G9', 2022, '银色', '苏A45678', 6, 'AUTOMATIC', 'ELECTRIC', 500.00, '南京市建邺区', 32.0603, 118.7969, '小鹏G9，超快充，5D音乐座舱', 'AVAILABLE', true, true, 67, 4.82, 54, NOW(), NOW()),
(8, '问界', 'M9', 2023, '金色', '苏A56789', 6, 'AUTOMATIC', 'HYBRID', 720.00, '南京市雨花台区', 32.0603, 118.7969, '问界M9，旗舰SUV，华为智能驾驶', 'AVAILABLE', true, false, 15, 4.92, 12, NOW(), NOW()),
(8, '极氪', '001', 2022, '白色', '苏A67890', 5, 'AUTOMATIC', 'ELECTRIC', 480.00, '南京市浦口区', 32.0603, 118.7969, '极氪001，猎装轿跑，3.8秒加速', 'AVAILABLE', false, true, 89, 4.78, 71, NOW(), NOW()),
(8, '岚图', '梦想家', 2023, '黑色', '苏A78901', 7, 'AUTOMATIC', 'HYBRID', 750.00, '南京市栖霞区', 32.0603, 118.7969, '岚图梦想家，豪华电动MPV', 'AVAILABLE', true, true, 11, 4.95, 9, NOW(), NOW());

-- 为每辆车添加图片 (每个车辆3-5张图片)
INSERT INTO vehicle_images (vehicle_id, url, is_primary, display_order, created_at) VALUES
-- 车辆1-7的图片
(1, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', true, 0, NOW()),
(1, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),
(1, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800', false, 2, NOW()),

(2, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', true, 0, NOW()),
(2, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 1, NOW()),
(2, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', false, 2, NOW()),

(3, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', true, 0, NOW()),
(3, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', false, 1, NOW()),
(3, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', false, 2, NOW()),

(4, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', true, 0, NOW()),
(4, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', false, 1, NOW()),
(4, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', false, 2, NOW()),

(5, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', true, 0, NOW()),
(5, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),
(5, 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800', false, 2, NOW()),
(5, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', false, 3, NOW()),

(6, 'https://images.unsplash.com/photo-1571127236794-81acf0e78636?w=800', true, 0, NOW()),
(6, 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800', false, 1, NOW()),
(6, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', false, 2, NOW()),

(7, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', true, 0, NOW()),
(7, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', false, 1, NOW()),
(7, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', false, 2, NOW()),

-- 车辆8-14的图片 (上海)
(8, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', true, 0, NOW()),
(8, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),
(8, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', false, 2, NOW()),
(8, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', false, 3, NOW()),

(9, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', true, 0, NOW()),
(9, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800', false, 1, NOW()),
(9, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', false, 2, NOW()),
(9, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', false, 3, NOW()),

(10, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', true, 0, NOW()),
(10, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 1, NOW()),
(10, 'https://images.unsplash.com/photo-1607853208079-9a870d02689f?w=800', false, 2, NOW()),

(11, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', true, 0, NOW()),
(11, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),
(11, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 2, NOW()),

(12, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', true, 0, NOW()),
(12, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', false, 1, NOW()),
(12, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', false, 2, NOW()),
(12, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', false, 3, NOW()),

(13, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', true, 0, NOW()),
(13, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', false, 1, NOW()),
(13, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', false, 2, NOW()),

(14, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', true, 0, NOW()),
(14, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', false, 1, NOW()),
(14, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', false, 2, NOW()),
(14, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', false, 3, NOW()),

-- 剩余车辆的图片 (简化处理，每个车辆2-3张图片)
(15, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', true, 0, NOW()),
(15, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', false, 1, NOW()),

(16, 'https://images.unsplash.com/photo-1571127236794-81acf0e78636?w=800', true, 0, NOW()),
(16, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', false, 1, NOW()),
(16, 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800', false, 2, NOW()),

(17, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800', true, 0, NOW()),
(17, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 1, NOW()),

(18, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', true, 0, NOW()),
(18, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),
(18, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', false, 2, NOW()),

(19, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', true, 0, NOW()),
(19, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),

(20, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', true, 0, NOW()),
(20, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', false, 1, NOW()),
(20, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', false, 2, NOW()),

(21, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', true, 0, NOW()),
(21, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),

(22, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', true, 0, NOW()),
(22, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', false, 1, NOW()),
(22, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', false, 2, NOW()),

(23, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', true, 0, NOW()),
(23, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', false, 1, NOW()),

(24, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', true, 0, NOW()),
(24, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', false, 1, NOW()),
(24, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 2, NOW()),

(25, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', true, 0, NOW()),
(25, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', false, 1, NOW()),

(26, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', true, 0, NOW()),
(26, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),
(26, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800', false, 2, NOW()),

(27, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', true, 0, NOW()),
(27, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', false, 1, NOW()),

(28, 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800', true, 0, NOW()),
(28, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),
(28, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', false, 2, NOW()),

(29, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', true, 0, NOW()),
(29, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', false, 1, NOW()),

(30, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', true, 0, NOW()),
(30, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', false, 1, NOW()),
(30, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', false, 2, NOW()),

(31, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', true, 0, NOW()),
(31, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', false, 1, NOW()),

(32, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', true, 0, NOW()),
(32, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', false, 1, NOW()),
(32, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', false, 2, NOW()),

(33, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', true, 0, NOW()),
(33, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', false, 1, NOW()),

(34, 'https://images.unsplash.com/photo-1571127236794-81acf0e78636?w=800', true, 0, NOW()),
(34, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', false, 1, NOW()),
(34, 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800', false, 2, NOW()),

(35, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', true, 0, NOW()),
(35, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),

(36, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800', true, 0, NOW()),
(36, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 1, NOW()),
(36, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', false, 2, NOW()),

(37, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', true, 0, NOW()),
(37, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),

(38, 'https://images.unsplash.com/photo-1607853208079-9a870d02689f?w=800', true, 0, NOW()),
(38, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', false, 1, NOW()),
(38, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', false, 2, NOW()),

(39, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', true, 0, NOW()),
(39, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', false, 1, NOW()),

(40, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', true, 0, NOW()),
(40, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', false, 1, NOW()),
(40, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', false, 2, NOW()),

(41, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', true, 0, NOW()),
(41, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', false, 1, NOW()),

(42, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', true, 0, NOW()),
(42, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', false, 1, NOW()),
(42, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 2, NOW()),

(43, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', true, 0, NOW()),
(43, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', false, 1, NOW()),

(44, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', true, 0, NOW()),
(44, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', false, 1, NOW()),
(44, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800', false, 2, NOW()),

(45, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', true, 0, NOW()),
(45, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800', false, 1, NOW()),

(46, 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800', true, 0, NOW()),
(46, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', false, 1, NOW()),
(46, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', false, 2, NOW()),

(47, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', true, 0, NOW()),
(47, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', false, 1, NOW()),

(48, 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800', true, 0, NOW()),
(48, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800', false, 1, NOW()),
(48, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800', false, 2, NOW()),

(49, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', true, 0, NOW()),
(49, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800', false, 1, NOW()),

(50, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', true, 0, NOW()),
(50, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', false, 1, NOW()),
(50, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', false, 2, NOW()),
(50, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', false, 3, NOW());
