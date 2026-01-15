-- P2P Car Rental - Test Data
-- This script inserts sample users, vehicles, and vehicle images for testing

-- Clear existing data (in development mode)
-- TRUNCATE TABLE vehicle_images CASCADE;
-- TRUNCATE TABLE vehicles CASCADE;
-- TRUNCATE TABLE users CASCADE;

-- ============================================
-- 1. INSERT TEST USERS (HOSTS/OWNERS)
-- ============================================
INSERT INTO users (phone, email, password_hash, name, avatar, role, status, id_card_verified, driver_license_verified, created_at, updated_at)
VALUES
    ('13800138001', 'zhang.wei@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '张伟', 'https://i.pravatar.cc/150?u=zhang', 'OWNER', 'ACTIVE', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('13800138002', 'li.ming@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '李明', 'https://i.pravatar.cc/150?u=li', 'OWNER', 'ACTIVE', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('13800138003', 'wang.fang@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '王芳', 'https://i.pravatar.cc/150?u=wang', 'OWNER', 'ACTIVE', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('13800138004', 'liu.qiang@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '刘强', 'https://i.pravatar.cc/150?u=liu', 'OWNER', 'ACTIVE', false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('13800138005', 'chen.ying@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '陈颖', 'https://i.pravatar.cc/150?u=chen', 'OWNER', 'ACTIVE', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('13800138006', 'zhao.lei@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIk5ZxZxZxZxZxZxZxZxZxZxZxZxZxZ', '赵雷', 'https://i.pravatar.cc/150?u=zhao', 'RENTER', 'ACTIVE', true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (phone) DO NOTHING;

-- ============================================
-- 2. INSERT TEST VEHICLES
-- ============================================
INSERT INTO vehicles (
    owner_id, brand, model, year, color, license_plate,
    seats, transmission, fuel_type, price_per_day,
    location, latitude, longitude, description,
    is_super_host, instant_book, total_trips, rating, review_count,
    status, created_at, updated_at
)
VALUES
    -- Vehicle 1: Tesla Model 3 (Electric Sedan)
    (
        1, 'Tesla', 'Model 3', 2023, '珍珠白', '京A·88888',
        5, 'AUTOMATIC', 'ELECTRIC', 398.00,
        '北京市朝阳区望京SOHO', 39.9945, 116.4808,
        '特斯拉Model 3，纯电动轿车，零百加速3.3秒，续航里程超600公里。配备自动驾驶辅助系统，内饰简洁豪华，适合城市通勤和长途旅行。',
        true, true, 156, 4.92, 156,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 2: BMW X5 (Luxury SUV)
    (
        1, 'BMW', 'X5', 2022, '矿石白', '京A·66666',
        5, 'AUTOMATIC', 'PETROL', 688.00,
        '北京市朝阳区国贸CBD', 39.9088, 116.4564,
        '宝马X5，中大型豪华SUV，搭载3.0T直列六缸发动机，xDrive智能四驱系统。空间宽敞，操控精准，商务出行和家庭出游的绝佳选择。',
        true, true, 128, 4.88, 128,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 3: Mercedes-Benz S-Class (Luxury Sedan)
    (
        2, 'Mercedes-Benz', 'S400L', 2023, '曜岩黑', '沪A·99999',
        5, 'AUTOMATIC', 'PETROL', 1288.00,
        '上海市浦东新区陆家嘴', 31.2397, 121.4991,
        '奔驰S级，行政级豪华轿车，代表汽车工业的巅峰水准。搭载直列六缸发动机，空气悬挂，柏林之声音响，后排独立座椅，宾至如归的尊贵体验。',
        true, false, 89, 4.95, 89,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 4: Toyota Alphard (Luxury MPV)
    (
        2, 'Toyota', 'Alphard', 2021, '白色', '沪A·12345',
        7, 'AUTOMATIC', 'HYBRID', 1088.00,
        '上海市黄浦区新天地', 31.2234, 121.4755,
        '丰田埃尔法，豪华MPV标杆，专为商务接待和家庭出行打造。双侧电动侧滑门，后排航空座椅，四区独立空调，舒适度满分。',
        true, false, 67, 4.98, 67,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 5: Porsche 911 (Sports Car)
    (
        3, 'Porsche', '911 Carrera S', 2023, '竞速黄', '粤A·88888',
        4, 'AUTOMATIC', 'PETROL', 1688.00,
        '广州市天河区珠江新城', 23.1279, 113.3289,
        '保时捷911，传奇跑车的代名词。3.0T水平对置六缸发动机，后轮驱动，纯粹驾驶乐趣。适合浪漫约会、特殊纪念日或拍摄使用。',
        true, true, 45, 4.96, 45,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 6: Honda Accord (Economy Sedan)
    (
        3, 'Honda', 'Accord', 2023, '星月蓝', '粤A·56789',
        5, 'AUTOMATIC', 'PETROL', 288.00,
        '广州市天河区体育西路', 23.1364, 113.3216,
        '本田雅阁，中级轿车标杆，1.5T地球梦发动机，CVT无级变速箱。空间宽敞，油耗经济，保值率高，日常代步首选。',
        false, true, 234, 4.75, 234,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 7: Audi Q7 (Large SUV)
    (
        4, 'Audi', 'Q7', 2022, '纳诺灰', '浙A·34567',
        7, 'AUTOMATIC', 'PETROL', 888.00,
        '杭州市西湖区文一西路', 30.2794, 120.1319,
        '奥迪Q7，豪华大型SUV，3.0T V6发动机，quattro四驱系统。三排七座布局，MMI触控响应系统，适合全家出游长途旅行。',
        false, true, 78, 4.82, 78,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 8: BYD Han EV (Electric Sedan)
    (
        4, 'BYD', '汉EV 创世版', 2023, '赤帝红', '浙A·78901',
        5, 'AUTOMATIC', 'ELECTRIC', 368.00,
        '杭州市滨江区阿里巴巴', 30.2091, 120.1870,
        '比亚迪汉EV，国产旗舰电动车，刀片电池安全技术，CLTC续航715km。3.9秒破百，DiLink 4.0智能网联系统，智能驾驶辅助功能齐全。',
        false, true, 189, 4.78, 189,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 9: Volkswagen Lavida (Compact Sedan)
    (
        5, 'Volkswagen', 'Lavida', 2022, '优雅白', '苏A·23456',
        5, 'AUTOMATIC', 'PETROL', 198.00,
        '苏州市工业园区金鸡湖', 31.3110, 120.6238,
        '大众朗逸，德系品质家用轿车，1.5L自然吸气发动机，成熟可靠。空间适中，保养便宜，二手车市场认可度高。',
        false, true, 312, 4.68, 312,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 10: Lexus LM (Ultra Luxury MPV)
    (
        5, 'Lexus', 'LM 300h', 2023, '墨玉黑', '京A·10001',
        4, 'AUTOMATIC', 'HYBRID', 1888.00,
        '北京市朝阳区三里屯', 39.9365, 116.4559,
        '雷克萨斯LM，顶级豪华MPV，被誉为"移动的头等舱"。后排独立隔断，26英寸显示屏，Ottoman座椅，Mark Levinson音响，极致奢华体验。',
        true, false, 23, 5.00, 23,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 11: Ford Mustang (Muscle Car)
    (
        1, 'Ford', 'Mustang GT', 2022, '暴烈橙', '京A·20202',
        4, 'MANUAL', 'PETROL', 688.00,
        '北京市海淀区五道口', 39.9926, 116.3466,
        '福特野马GT，美式肌肉跑车，5.0L V8发动机，6速手动变速箱。声浪浑厚，动力充沛，适合驾驶爱好者体验美式风情。',
        false, true, 56, 4.85, 56,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),

    -- Vehicle 12: Nissan Serena (Family MPV)
    (
        3, 'Nissan', 'Serena', 2021, '极光紫', '粤A·43210',
        7, 'AUTOMATIC', 'HYBRID', 328.00,
        '深圳市南山区科技园', 22.5431, 113.9484,
        '日产Serena，家用MPV诚意之作，e-POWER混动系统，油耗低至4.9L/100km。双侧电动滑门，后排可完全放平，亲子出行神器。',
        false, true, 145, 4.72, 145,
        'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    )
ON CONFLICT (license_plate) DO NOTHING;

-- ============================================
-- 3. INSERT VEHICLE IMAGES
-- ============================================
INSERT INTO vehicle_images (vehicle_id, url, is_primary, display_order, created_at)
VALUES
    -- Tesla Model 3 Images
    (1, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (1, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (1, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- BMW X5 Images
    (2, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (2, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (2, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Mercedes S-Class Images
    (3, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (3, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (3, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Toyota Alphard Images
    (4, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (4, 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (4, 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Porsche 911 Images
    (5, 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (5, 'https://images.unsplash.com/photo-1614162692422-38f7d9c24ce6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (5, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Honda Accord Images
    (6, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (6, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Audi Q7 Images
    (7, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (7, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (7, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- BYD Han EV Images
    (8, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (8, 'https://images.unsplash.com/photo-1566023888417-374cdbb7f4ef?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Volkswagen Lavida Images
    (9, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (9, 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Lexus LM Images
    (10, 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (10, 'https://images.unsplash.com/photo-1557041299-301321640c6a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (10, 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Ford Mustang Images
    (11, 'https://images.unsplash.com/photo-1584345604475-8a5f75d5ad36?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (11, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (11, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', false, 2, CURRENT_TIMESTAMP),

    -- Nissan Serena Images
    (12, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (12, 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', false, 1, CURRENT_TIMESTAMP),
    (12, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

-- ============================================
-- 4. VERIFICATION QUERIES (COMMENTED OUT)
-- ============================================
-- Uncomment to verify data insertion

-- SELECT 'Users:' as table_name, COUNT(*) as count FROM users
-- UNION ALL
-- SELECT 'Vehicles:', COUNT(*) FROM vehicles
-- UNION ALL
-- SELECT 'Vehicle Images:', COUNT(*) FROM vehicle_images;

-- SELECT v.id, v.brand, v.model, v.location, v.price_per_day, v.rating, v.review_count, u.name as host_name
-- FROM vehicles v
-- JOIN users u ON v.owner_id = u.id
-- ORDER BY v.id;
