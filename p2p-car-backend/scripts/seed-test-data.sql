-- P2P Car Rental Platform - Test Data Seed Script
-- This script creates test users and 50 diverse vehicle records

-- ============================================
-- STEP 1: CREATE TEST USERS (OWNERS)
-- ============================================
-- First, we need to create some users as vehicle owners
-- These users will be referenced as foreign keys in the vehicles table

INSERT INTO users (name, email, phone, password_hash, role, status, driver_license_verified, id_card_verified, created_at, updated_at) VALUES
('张伟', 'zhangwei@example.com', '13800001001', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('李娜', 'lina@example.com', '13800001002', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('王强', 'wangqiang@example.com', '13800001003', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('刘芳', 'liufang@example.com', '13800001004', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('陈明', 'chenming@example.com', '13800001005', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('杨洋', 'yangyang@example.com', '13800001006', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('赵静', 'zhaojing@example.com', '13800001007', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('孙磊', 'sunlei@example.com', '13800001008', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('周婷', 'zhouting@example.com', '13800001009', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('吴军', 'wujun@example.com', '13800001010', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('郑华', 'zhenghua@example.com', '13800001011', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('王丽', 'wangli@example.com', '13800001012', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('李涛', 'litao@example.com', '13800001013', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('张敏', 'zhangmin@example.com', '13800001014', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW()),
('刘刚', 'liugang@example.com', '13800001015', '$2b$10$abcdefghijklmnopqrstuvwxyz123456', 'OWNER', 'ACTIVE', true, true, NOW(), NOW())
ON CONFLICT (email) DO NOTHING;

-- ============================================
-- STEP 2: CREATE 50 VEHICLE RECORDS
-- ============================================
-- Diverse vehicles with different brands, types, prices, cities, and ratings

INSERT INTO vehicles (brand, model, year, color, license_plate, location, latitude, longitude, price_per_day, seats, transmission, fuel_type, status, description, rating, review_count, total_trips, instant_book, is_super_host, owner_id, created_at, updated_at) VALUES
-- Luxury Cars (1-5)
('奔驰', 'S-Class S450L', 2023, '黑色', '京A·88888', '北京市朝阳区', 39.904200, 116.407400, 1200.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰S级豪华轿车，商务出行首选，配备顶级内饰和驾驶辅助系统', 4.98, 156, 89, true, true, 1, NOW(), NOW()),
('宝马', '7 Series 740Li', 2023, '白色', '沪A·66666', '上海市浦东新区', 31.230400, 121.473700, 1100.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '宝马7系，完美融合豪华与科技，商务接待之选', 4.95, 142, 78, true, true, 2, NOW(), NOW()),
('奥迪', 'A8L 60TFSI', 2023, '黑色', '粤A·55555', '广州市天河区', 23.129100, 113.264400, 1000.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奥迪A8L，科技豪华旗舰，Quattro四驱系统', 4.92, 128, 65, true, false, 3, NOW(), NOW()),
('保时捷', 'Panamera Turbo', 2022, '白色', '深B·77777', '深圳市福田区', 22.543100, 114.057900, 1500.00, 4, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '保时捷Panamera，豪华轿跑，极致驾驶体验', 4.99, 98, 42, false, true, 4, NOW(), NOW()),
('奔驰', 'AMG GT 50', 2022, '灰色', '浙A·99999', '杭州市西湖区', 30.274100, 120.155100, 1300.00, 4, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰AMG GT 50，四门轿跑，运动与豪华的完美结合', 4.96, 87, 35, true, true, 5, NOW(), NOW()),

-- SUV Premium (6-10)
('理想', 'L9 Pro', 2023, '黑色', '京C·11111', '北京市海淀区', 39.928900, 116.388300, 750.00, 6, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '理想L9，六座智能电动SUV，家庭出行之选', 4.94, 234, 156, true, true, 1, NOW(), NOW()),
('蔚来', 'ES8', 2023, '白色', '沪B·22222', '上海市黄浦区', 31.236400, 121.480300, 680.00, 6, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '蔚来ES8，纯电旗舰SUV，换电服务便捷', 4.91, 198, 134, true, true, 2, NOW(), NOW()),
('特斯拉', 'Model X Plaid', 2023, '红色', '粤B·33333', '广州市越秀区', 23.125600, 113.259200, 900.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '特斯拉Model X，鹰翼门，高性能纯电SUV', 4.97, 312, 201, true, true, 3, NOW(), NOW()),
('宝马', 'X5 xDrive40i', 2022, '蓝色', '川A·44444', '成都市武侯区', 30.572800, 104.066800, 650.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '宝马X5，豪华中型SUV，越野性能出色', 4.93, 178, 112, false, false, 6, NOW(), NOW()),
('奥迪', 'Q7 55TFSI', 2022, '灰色', '渝A·55555', '重庆市渝中区', 29.562700, 106.552800, 700.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奥迪Q7，七座豪华SUV，空间宽敞舒适', 4.89, 156, 98, true, false, 7, NOW(), NOW()),

-- Mid-range Sedans (11-15)
('丰田', '凯美瑞', 2023, '白色', '鄂A·66666', '武汉市江汉区', 30.592800, 114.263600, 280.00, 5, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '丰田凯美瑞混动，省油舒适，家用商务两相宜', 4.88, 267, 189, true, true, 8, NOW(), NOW()),
('本田', '雅阁', 2023, '黑色', '陕A·77777', '西安市雁塔区', 34.216800, 108.921800, 260.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '本田雅阁，可靠耐用，驾驶体验优秀', 4.86, 298, 203, true, false, 9, NOW(), NOW()),
('大众', '帕萨特', 2022, '灰色', '苏E·88888', '苏州市姑苏区', 31.298900, 120.585300, 250.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '大众帕萨特，德系品质，商务经典', 4.84, 312, 224, true, false, 10, NOW(), NOW()),
('日产', '天籁', 2023, '白色', '津A·99999', '天津市和平区', 39.125600, 117.205700, 240.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '日产天籁，移动大沙发，舒适座椅设计', 4.85, 289, 178, false, false, 11, NOW(), NOW()),
('马自达', '阿特兹', 2022, '红色', '宁A·10101', '南京市鼓楼区', 32.060300, 118.796900, 270.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '马自达阿特兹，创驰蓝天技术，操控出色', 4.87, 198, 134, true, false, 12, NOW(), NOW()),

-- Economy Cars (16-20)
('大众', '朗逸', 2023, '白色', '湘A·20202', '长沙市天心区', 28.228200, 112.938800, 150.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '大众朗逸，经济实用，日常代步首选', 4.82, 445, 312, true, false, 13, NOW(), NOW()),
('丰田', '卡罗拉', 2023, '银色', '豫A·30303', '郑州市金水区', 34.746600, 113.625300, 160.00, 5, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '丰田卡罗拉双擎，省油王者，口碑车型', 4.83, 567, 423, true, true, 14, NOW(), NOW()),
('本田', '思域', 2022, '蓝色', '皖A·40404', '合肥市蜀山区', 31.820600, 117.227200, 170.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '本田思域，运动家轿，年轻时尚', 4.81, 398, 267, false, false, 15, NOW(), NOW()),
('日产', '轩逸', 2023, '白色', '赣A·50505', '南昌市东湖区', 28.682000, 115.857900, 140.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '日产轩逸，舒适家用，销量冠军', 4.80, 623, 456, true, false, 1, NOW(), NOW()),
('雪佛兰', '科鲁兹', 2022, '黑色', '桂A·60606', '南宁市青秀区', 22.817000, 108.366500, 130.00, 5, 'MANUAL', 'PETROL', 'AVAILABLE', '雪佛兰科鲁兹，美系肌肉感，性价比高', 4.78, 234, 167, false, false, 2, NOW(), NOW()),

-- Electric Vehicles (21-25)
('特斯拉', 'Model 3 Performance', 2023, '白色', '京D·70707', '北京市东城区', 39.904200, 116.407400, 550.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '特斯拉Model 3高性能版，3.3秒破百', 4.96, 456, 312, true, true, 3, NOW(), NOW()),
('比亚迪', '汉EV', 2023, '红色', '沪C·80808', '上海市徐汇区', 31.188400, 121.436500, 420.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '比亚迪汉EV，刀片电池，续航605km', 4.92, 389, 278, true, true, 4, NOW(), NOW()),
('小鹏', 'P7i', 2023, '蓝色', '粤C·90909', '广州市海珠区', 23.106400, 113.324500, 450.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '小鹏P7i，智能轿跑，NGP导航辅助', 4.90, 312, 201, true, false, 5, NOW(), NOW()),
('蔚来', 'ET5', 2023, '灰色', '浙B·10101', '杭州市滨江区', 30.208400, 120.209900, 480.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '蔚来ET5，运动轿跑，第二代数字座舱', 4.88, 234, 145, true, true, 6, NOW(), NOW()),
('极氪', '001', 2022, '白色', '深C·11111', '深圳市南山区', 22.546700, 114.058000, 520.00, 5, 'AUTOMATIC', 'ELECTRIC', 'AVAILABLE', '极氪001，猎装轿跑，高性能纯电', 4.94, 267, 178, false, true, 7, NOW(), NOW()),

-- SUV Mid-range (26-30)
('丰田', '汉兰达', 2023, '白色', '川B·21212', '成都市锦江区', 30.658600, 104.081600, 450.00, 7, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '丰田汉兰达，七座家用SUV，空间魔术师', 4.91, 423, 298, true, true, 8, NOW(), NOW()),
('大众', '途观L', 2022, '黑色', '渝B·31313', '重庆市江北区', 29.567800, 106.554900, 380.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '大众途观L，德系中型SUV，稳重可靠', 4.87, 378, 256, true, false, 9, NOW(), NOW()),
('本田', 'CR-V', 2023, '蓝色', '鄂B·41414', '武汉市武昌区', 30.556800, 114.301200, 350.00, 5, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '本田CR-V混动，城市SUV标杆', 4.89, 445, 312, true, true, 10, NOW(), NOW()),
('奥迪', 'Q5L', 2022, '灰色', '陕B·51515', '西安市碑林区', 34.256300, 108.936600, 520.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奥迪Q5L，豪华中型SUV，科技感十足', 4.93, 234, 156, true, false, 11, NOW(), NOW()),
('奔驰', 'GLC 300L', 2023, '白色', '苏B·61616', '苏州市工业园区', 31.317900, 120.619700, 600.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰GLC长轴距，豪华舒适SUV', 4.95, 189, 123, true, true, 12, NOW(), NOW()),

-- MPV (31-35)
('别克', 'GL8', 2023, '黑色', '津B·71717', '天津市河西区', 39.109200, 117.198300, 450.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '别克GL8，商务MPV首选，舒适座椅', 4.86, 345, 234, true, false, 13, NOW(), NOW()),
('丰田', '赛那', 2023, '白色', '宁B·81818', '南京市江宁区', 31.953800, 118.839600, 550.00, 7, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '丰田赛那，家用MPV，省油空间大', 4.92, 267, 178, true, true, 14, NOW(), NOW()),
('本田', '奥德赛', 2022, '蓝色', '湘B·91919', '长沙市雨花区', 28.225400, 113.035500, 400.00, 7, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '本田奥德赛混动，家用MPV神器', 4.88, 298, 201, true, false, 15, NOW(), NOW()),
('奔驰', 'V260L', 2023, '黑色', '豫B·12012', '郑州市郑东新区', 34.766600, 113.739500, 850.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰V级，豪华商务MPV，高端接待', 4.97, 123, 67, true, true, 1, NOW(), NOW()),
('大众', '威然', 2022, '灰色', '皖B·22122', '合肥市包河区', 31.820600, 117.296200, 480.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '大众威然，德系MPV，空间宽敞', 4.84, 167, 112, false, false, 2, NOW(), NOW()),

-- Sports Cars (36-40)
('保时捷', '911 Carrera S', 2022, '红色', '京E·32323', '北京市西城区', 39.907500, 116.397200, 2000.00, 2, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '保时捷911，传奇跑车，极致驾驶乐趣', 5.00, 45, 23, false, true, 3, NOW(), NOW()),
('法拉利', 'F8 Tributo', 2021, '黄色', '沪D·42424', '上海市静安区', 31.229400, 121.458000, 2500.00, 2, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '法拉利F8，V8涡轮中置引擎，超跑体验', 5.00, 23, 12, false, true, 4, NOW(), NOW()),
('兰博基尼', 'Huracán Evo', 2021, '绿色', '粤D·52525', '广州市白云区', 23.167300, 113.264600, 2200.00, 2, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '兰博基尼小牛，V10自然吸气，声浪迷人', 5.00, 34, 18, false, true, 5, NOW(), NOW()),
('宝马', 'M4 Competition', 2022, '蓝色', '深D·62626', '深圳市罗湖区', 22.548500, 114.061000, 1200.00, 4, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '宝马M4竞技版，3.9秒破百，赛道利器', 4.98, 67, 38, false, false, 6, NOW(), NOW()),
('奔驰', 'AMG C63 S', 2022, '灰色', '浙C·72727', '杭州市拱墅区', 30.319900, 120.184400, 1100.00, 4, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰AMG C63 S，V8双涡轮，性能怪兽', 4.96, 89, 52, false, false, 7, NOW(), NOW()),

-- Compact Cars (41-45)
('大众', '高尔夫', 2023, '白色', '川C·82828', '成都市成华区', 30.658600, 104.081900, 180.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '大众高尔夫，德系两厢，操控精准', 4.82, 456, 312, true, false, 8, NOW(), NOW()),
('本田', '飞度', 2023, '红色', '渝C·92929', '重庆市沙坪坝区', 29.556300, 106.456700, 120.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '本田飞度，小型车神，改装潜力大', 4.79, 678, 489, true, false, 9, NOW(), NOW()),
('丰田', '致炫', 2022, '银色', '鄂C·13131', '武汉市洪山区', 30.501800, 114.410600, 110.00, 5, 'MANUAL', 'PETROL', 'AVAILABLE', '丰田致炫，经济省油，代步首选', 4.77, 534, 378, false, false, 10, NOW(), NOW()),
('长安', '逸动', 2023, '白色', '陕C·24142', '西安市莲湖区', 34.267900, 108.939900, 100.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '长安逸动，国产精品，性价比高', 4.75, 423, 298, true, false, 11, NOW(), NOW()),
('吉利', '帝豪', 2022, '蓝色', '苏C·35153', '苏州市虎丘区', 31.298900, 120.575800, 90.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '吉利帝豪，国民家轿，销量领先', 4.76, 567, 412, true, false, 12, NOW(), NOW()),

-- Luxury SUV (46-50)
('路虎', '揽胜', 2023, '黑色', '津C·46164', '天津市南开区', 39.135700, 117.181500, 1400.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '路虎揽胜，豪华SUV标杆，全地形能力', 4.97, 145, 89, true, true, 13, NOW(), NOW()),
('奔驰', 'GLS 450', 2022, '白色', '宁C·57175', '南京市建邺区', 32.058400, 118.796900, 1200.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奔驰GLS，全尺寸SUV，豪华七座', 4.95, 123, 76, true, true, 14, NOW(), NOW()),
('宝马', 'X7 xDrive40i', 2023, '灰色', '湘C·68186', '长沙市岳麓区', 28.228200, 112.938800, 1100.00, 7, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '宝马X7，旗舰SUV，第三排座椅宽敞', 4.93, 98, 56, true, false, 15, NOW(), NOW()),
('奥迪', 'Q8', 2022, '蓝色', '豫C·79197', '郑州市中原区', 34.748500, 113.629500, 1000.00, 5, 'AUTOMATIC', 'PETROL', 'AVAILABLE', '奥迪Q8，轿跑SUV设计，科技豪华', 4.91, 87, 48, false, false, 1, NOW(), NOW()),
('沃尔沃', 'XC90', 2023, '白色', '皖C·80208', '合肥市庐阳区', 31.868600, 117.282700, 850.00, 7, 'AUTOMATIC', 'HYBRID', 'AVAILABLE', '沃尔沃XC90，北欧豪华，安全旗舰', 4.94, 134, 78, true, true, 2, NOW(), NOW());

-- ============================================
-- STEP 3: ADD VEHICLE IMAGES
-- ============================================
-- Add images for all vehicles using Unsplash URLs

INSERT INTO vehicle_images (vehicle_id, image_url, is_primary, display_order, created_at, updated_at) VALUES
-- Luxury Cars Images (1-5)
(1, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 1, NOW(), NOW()),
(1, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 2, NOW(), NOW()),
(1, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 3, NOW(), NOW()),

(2, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(2, 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80', false, 2, NOW(), NOW()),

(3, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(3, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(4, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW(), NOW()),
(4, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW(), NOW()),

(5, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW(), NOW()),
(5, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

-- SUV Premium Images (6-10)
(6, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', true, 1, NOW(), NOW()),
(6, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', false, 2, NOW(), NOW()),

(7, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW(), NOW()),
(7, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(8, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', true, 1, NOW(), NOW()),
(8, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 2, NOW(), NOW()),

(9, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(9, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW(), NOW()),

(10, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 1, NOW(), NOW()),
(10, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 2, NOW(), NOW()),

-- Mid-range Sedans Images (11-15)
(11, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW(), NOW()),
(11, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW(), NOW()),

(12, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(12, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(13, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(13, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW(), NOW()),

(14, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW(), NOW()),
(14, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(15, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(15, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

-- Economy Cars Images (16-20)
(16, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW(), NOW()),
(16, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW(), NOW()),

(17, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(17, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(18, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(18, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW(), NOW()),

(19, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW(), NOW()),
(19, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(20, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(20, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

-- Electric Vehicles Images (21-25)
(21, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW(), NOW()),
(21, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW(), NOW()),
(21, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 3, NOW(), NOW()),

(22, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW(), NOW()),
(22, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW(), NOW()),

(23, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', true, 1, NOW(), NOW()),
(23, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', false, 2, NOW(), NOW()),

(24, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', true, 1, NOW(), NOW()),
(24, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 2, NOW(), NOW()),

(25, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW(), NOW()),
(25, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW(), NOW()),

-- SUV Mid-range Images (26-30)
(26, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', true, 1, NOW(), NOW()),
(26, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(27, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW(), NOW()),
(27, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(28, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(28, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(29, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW(), NOW()),
(29, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

(30, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(30, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

-- MPV Images (31-35)
(31, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(31, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW(), NOW()),

(32, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(32, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(33, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW(), NOW()),
(33, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW(), NOW()),

(34, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(34, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

(35, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW(), NOW()),
(35, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

-- Sports Cars Images (36-40)
(36, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW(), NOW()),
(36, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW(), NOW()),
(36, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW(), NOW()),

(37, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', true, 1, NOW(), NOW()),
(37, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', false, 2, NOW(), NOW()),
(37, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW(), NOW()),

(38, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW(), NOW()),
(38, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW(), NOW()),
(38, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW(), NOW()),

(39, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW(), NOW()),
(39, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW(), NOW()),
(39, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 3, NOW(), NOW()),

(40, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(40, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW(), NOW()),
(40, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 3, NOW(), NOW()),

-- Compact Cars Images (41-45)
(41, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW(), NOW()),
(41, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW(), NOW()),

(42, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(42, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),

(43, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW(), NOW()),
(43, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW(), NOW()),

(44, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW(), NOW()),
(44, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),

(45, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(45, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),

-- Luxury SUV Images (46-50)
(46, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', true, 1, NOW(), NOW()),
(46, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),
(46, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', false, 3, NOW(), NOW()),

(47, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW(), NOW()),
(47, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW(), NOW()),
(47, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 3, NOW(), NOW()),

(48, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW(), NOW()),
(48, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW(), NOW()),
(48, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 3, NOW(), NOW()),

(49, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW(), NOW()),
(49, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW(), NOW()),
(49, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 3, NOW(), NOW()),

(50, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW(), NOW()),
(50, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW(), NOW()),
(50, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', false, 3, NOW(), NOW());

-- ============================================
-- VERIFICATION QUERY
-- ============================================
-- Run this after execution to verify the data
-- SELECT COUNT(*) as total_vehicles FROM vehicles;
-- SELECT COUNT(*) as total_images FROM vehicle_images;
-- SELECT brand, model, price_per_day, location FROM vehicles ORDER BY id;
