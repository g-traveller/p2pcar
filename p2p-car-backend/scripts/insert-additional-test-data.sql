-- ============================================
-- P2P Car Rental - Additional Test Data
-- ============================================
--
-- This script adds 48 more vehicles to the existing 12 vehicles
-- Total vehicles after insertion: 60
-- Enables pagination testing (20 vehicles per page = 3 pages)
--
-- Usage:
--   docker exec -i p2pcar-postgres psql -U p2pcar -d p2pcar < insert-additional-test-data.sql
--
-- ============================================

BEGIN;

-- ============================================
-- ADDITIONAL VEHICLES (48 vehicles)
-- ============================================
-- Diverse brands: Audi, BMW, Mercedes, Toyota, Honda, Nissan, VW, Tesla, etc.
-- Different types: Sedan, SUV, MPV, Sports Car, Electric
-- Price range: ¥128 - ¥1588 per day
-- Cities: Beijing, Shanghai, Guangzhou, Shenzhen, Hangzhou, Suzhou, Chengdu, Chongqing, Wuhan, Xi'an

INSERT INTO vehicles (
    owner_id, brand, model, year, color, license_plate,
    seats, transmission, fuel_type, price_per_day,
    location, latitude, longitude, description,
    is_super_host, instant_book, total_trips, rating, review_count,
    status, created_at, updated_at
)
VALUES
    -- Vehicle 13: Audi A4L (Sedan) - ¥368/day
    (1, 'Audi', 'A4L 40TFSI', 2023, '天云灰', '沪B·12345', 5, 'AUTOMATIC', 'PETROL', 368.00,
     '上海市静安区南京西路', 31.2268, 121.4589,
     '奥迪A4L，中型豪华轿车，2.0T发动机，7速双离合。Quattro四驱可选，内饰精致，驾驶质感优秀。',
     false, true, 98, 4.79, 98, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 14: BMW 3 Series (Sedan) - ¥428/day
    (2, 'BMW', '325Li', 2023, '矿石白', '京C·23456', 5, 'AUTOMATIC', 'PETROL', 428.00,
     '北京市海淀区中关村', 39.9825, 116.3179,
     '宝马3系，运动型豪华轿车，2.0T直列四缸，后轮驱动。操控精准，驾驶乐趣十足。',
     true, true, 145, 4.86, 145, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 15: Mercedes C-Class (Sedan) - ¥458/day
    (3, 'Mercedes-Benz', 'C260L', 2022, '曜岩黑', '粤B·34567', 5, 'AUTOMATIC', 'PETROL', 458.00,
     '深圳市福田区CBD', 22.5431, 114.0554,
     '奔驰C级，中型豪华轿车，1.5T+48V轻混，9AT变速箱。内饰豪华，舒适性出色。',
     false, true, 112, 4.81, 112, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 16: Toyota Camry (Sedan) - ¥298/day
    (4, 'Toyota', '凯美瑞 双擎', 2023, '铂金珍珠白', '川A·45678', 5, 'AUTOMATIC', 'HYBRID', 298.00,
     '成都市高新区天府大道', 30.5728, 104.0668,
     '丰田凯美瑞混动，中级轿车标杆，2.5L混动系统，油耗低至4.5L/100km。可靠耐用，保值率高。',
     false, true, 267, 4.76, 267, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 17: Honda CR-V (SUV) - ¥328/day
    (5, 'Honda', 'CR-V 混动', 2022, '晶耀白', '渝A·56789', 5, 'AUTOMATIC', 'HYBRID', 328.00,
     '重庆市江北区北城天街', 29.5702, 106.5756,
     '本田CR-V混动，紧凑型SUV，2.0L i-MMD混动系统。空间实用，油耗经济，家用首选。',
     false, true, 189, 4.73, 189, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 18: Volkswagen Tiguan (SUV) - ¥308/day
    (1, 'Volkswagen', '途观L', 2023, '冰莓蓝', '苏E·67890', 5, 'AUTOMATIC', 'PETROL', 308.00,
     '苏州市姑苏区观前街', 31.3093, 120.6195,
     '大众途观L，中型SUV，2.0T发动机，7速双离合。空间宽敞，底盘扎实，适合家庭出游。',
     false, true, 156, 4.71, 156, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 19: Nissan X-Trail (SUV) - ¥298/day
    (2, 'Nissan', '奇骏', 2022, '极光蓝', '鄂A·78901', 5, 'AUTOMATIC', 'PETROL', 298.00,
     '武汉市江汉区武商MALL', 30.5928, 114.3055,
     '日产奇骏，紧凑型SUV，2.5L自然吸气，CVT变速箱。舒适性好，空间灵活，性价比高。',
     false, true, 198, 4.68, 198, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 20: Tesla Model Y (Electric SUV) - ¥488/day
    (3, 'Tesla', 'Model Y 长续航版', 2023, '纯黑', '陕A·89012', 5, 'AUTOMATIC', 'ELECTRIC', 488.00,
     '西安市雁塔区小寨', 34.2240, 108.9484,
     '特斯拉Model Y，纯电动中型SUV，CLTC续航660km。自动驾驶辅助，空间实用，科技感强。',
     true, true, 134, 4.88, 134, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 21: BMW X3 (SUV) - ¥568/day
    (4, 'BMW', 'X3 30i', 2022, '矿石白', '京D·90123', 5, 'AUTOMATIC', 'PETROL', 568.00,
     '北京市朝阳区亚运村', 39.9889, 116.3972,
     '宝马X3，中型豪华SUV，2.0T直列四缸，xDrive四驱。操控优秀，品牌认可度高。',
     true, true, 89, 4.84, 89, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 22: Mercedes GLC (SUV) - ¥598/day
    (5, 'Mercedes-Benz', 'GLC 300L', 2023, '锆石英红', '沪C·01234', 5, 'AUTOMATIC', 'PETROL', 598.00,
     '上海市徐汇区徐家汇', 31.1959, 121.4372,
     '奔驰GLC，中型豪华SUV，2.0T发动机，9AT变速箱。内饰豪华，配置丰富。',
     true, false, 76, 4.87, 76, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 23: Audi Q5L (SUV) - ¥528/day
    (1, 'Audi', 'Q5L 40TFSI', 2022, '天云灰', '粤D·12345', 5, 'AUTOMATIC', 'PETROL', 528.00,
     '广州市海珠区琶洲', 23.0837, 113.3628,
     '奥迪Q5L，中型豪华SUV，2.0T发动机，7速双离合。Quattro四驱，科技配置丰富。',
     false, true, 95, 4.82, 95, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 24: Toyota Corolla (Sedan) - ¥188/day
    (2, 'Toyota', '卡罗拉 双擎', 2023, '银金属色', '浙B·23456', 5, 'AUTOMATIC', 'HYBRID', 188.00,
     '杭州市西湖区湖滨', 30.2592, 120.1693,
     '丰田卡罗拉混动，紧凑型轿车，1.8L混动系统。油耗经济，质量可靠，新手友好。',
     false, true, 345, 4.65, 345, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 25: Honda Civic (Sedan) - ¥218/day
    (3, 'Honda', '思域', 2022, '闪烈黄', '苏F·34567', 5, 'AUTOMATIC', 'PETROL', 218.00,
     '南京市鼓楼区新街口', 32.0603, 118.7969,
     '本田思域，紧凑型运动轿车，1.5T涡轮增压。动力充沛，造型运动，年轻人喜爱。',
     false, true, 278, 4.72, 278, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 26: Volkswagen Passat (Sedan) - ¥268/day
    (4, 'Volkswagen', '帕萨特', 2023, '雅致白', '豫A·45678', 5, 'AUTOMATIC', 'PETROL', 268.00,
     '郑州市金水区CBD', 34.7685, 113.7913,
     '大众帕萨特，中型轿车，2.0T发动机。空间宽敞，底盘扎实，商务家用两相宜。',
     false, true, 167, 4.69, 167, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 27: BMW 5 Series (Sedan) - ¥688/day
    (5, 'BMW', '530Li', 2022, '炭黑', '京E·56789', 5, 'AUTOMATIC', 'PETROL', 688.00,
     '北京市西城区金融街', 39.9139, 116.3654,
     '宝马5系，中大型豪华轿车，2.0T直列六缸。操控舒适兼顾，商务首选。',
     true, false, 54, 4.91, 54, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 28: Mercedes E-Class (Sedan) - ¥728/day
    (1, 'Mercedes-Benz', 'E300L', 2023, '曜岩黑', '沪D·67890', 5, 'AUTOMATIC', 'PETROL', 728.00,
     '上海市长宁区中山公园', 31.2200, 121.4216,
     '奔驰E级，中大型豪华轿车，2.0T发动机。内饰豪华，舒适性一流，商务接待首选。',
     true, false, 48, 4.93, 48, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 29: Audi A6L (Sedan) - ¥658/day
    (2, 'Audi', 'A6L 45TFSI', 2022, '天云灰', '粤E·78901', 5, 'AUTOMATIC', 'PETROL', 658.00,
     '深圳市罗湖区万象城', 22.5483, 114.1299,
     '奥迪A6L，中大型豪华轿车，2.0T发动机。科技感强，Quattro四驱可选，官车形象。',
     false, true, 67, 4.85, 67, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 30: Tesla Model S (Electric Sedan) - ¥888/day
    (3, 'Tesla', 'Model S Plaid', 2023, '珍珠白', '浙C·89012', 5, 'AUTOMATIC', 'ELECTRIC', 888.00,
     '杭州市滨江区星光大道', 30.2084, 120.2132,
     '特斯拉Model S Plaid，三电机高性能版，零百加速2.1秒。续航672km，科技旗舰。',
     true, true, 34, 4.96, 34, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 31: Porsche Macan (SUV) - ¥788/day
    (4, 'Porsche', 'Macan S', 2022, '熔岩橙', '京F·90123', 5, 'AUTOMATIC', 'PETROL', 788.00,
     '北京市东城区王府井', 39.9146, 116.4174,
     '保时捷Macan，中型豪华SUV，2.0T四缸发动机。保时捷操控，品牌价值高。',
     true, false, 29, 4.94, 29, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 32: Lexus ES (Sedan) - ¥398/day
    (5, 'Lexus', 'ES 300h', 2023, '墨玉黑', '沪E·01234', 5, 'AUTOMATIC', 'HYBRID', 398.00,
     '上海市闵行区虹桥天地', 31.1964, 121.3149,
     '雷克萨斯ES，中大型豪华轿车，2.5L混动系统。舒适安静，可靠性高，保值率优秀。',
     true, true, 123, 4.89, 123, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 33: Volvo XC60 (SUV) - ¥548/day
    (1, 'Volvo', 'XC60 B5', 2022, '蝶贝灰', '粤F·12345', 5, 'AUTOMATIC', 'PETROL', 548.00,
     '广州市天河区天河城', 23.1344, 113.3226,
     '沃尔沃XC60，中型豪华SUV，2.0T发动机。安全配置丰富，环保材料，家庭首选。',
     false, true, 81, 4.83, 81, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 34: Cadillac XT5 (SUV) - ¥468/day
    (2, 'Cadillac', 'XT5', 2023, '钻白', '川B·23456', 5, 'AUTOMATIC', 'PETROL', 468.00,
     '成都市锦江区太古里', 30.6590, 104.0816,
     '凯迪拉克XT5，中型豪华SUV，2.0T可变缸发动机。美式豪华，配置丰富，性价比高。',
     false, true, 72, 4.78, 72, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 35: Buick GL8 (MPV) - ¥488/day
    (3, 'Buick', 'GL8 ES', 2022, '皇室蓝', '渝B·34567', 7, 'AUTOMATIC', 'PETROL', 488.00,
     '重庆市渝中区解放碑', 29.5581, 106.5779,
     '别克GL8，商务MPV标杆，2.0T发动机。空间宽敞，座椅舒适，商务接待必备。',
     false, true, 156, 4.75, 156, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 36: Toyota Highlander (SUV) - ¥528/day
    (4, 'Toyota', '汉兰达 双擎', 2023, '星耀红', '鄂B·45678', 7, 'AUTOMATIC', 'HYBRID', 528.00,
     '武汉市武昌区中南路', 30.5538, 114.3516,
     '丰田汉兰达混动，中型SUV，2.5L混动系统。三排七座，空间灵活，家用首选。',
     false, true, 134, 4.80, 134, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 37: Honda Odyssey (MPV) - ¥428/day
    (5, 'Honda', '奥德赛', 2022, '太空银', '陕B·56789', 7, 'AUTOMATIC', 'HYBRID', 428.00,
     '西安市雁塔区大雁塔', 34.2205, 108.9647,
     '本田奥德赛混动，家用MPV，2.0L i-MMD混动。双侧电动滑门，后排可变空间，亲子神器。',
     false, true, 189, 4.77, 189, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 38: Volkswagen Sharan (MPV) - ¥458/day
    (1, 'Volkswagen', '夏朗', 2021, '糖果白', '湘A·67890', 7, 'AUTOMATIC', 'PETROL', 458.00,
     '长沙市雨花区五一广场', 28.2282, 112.9388,
     '大众夏朗，进口MPV，2.0T发动机。三排七座，空间灵活，德系品质。',
     false, true, 67, 4.74, 67, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 39: BYD Tang EV (Electric SUV) - ¥428/day
    (2, 'BYD', '唐EV', 2023, '赤帝红', '皖A·78901', 7, 'AUTOMATIC', 'ELECTRIC', 428.00,
     '合肥市蜀山区万达广场', 31.8659, 117.2272,
     '比亚迪唐EV，纯电动中型SUV，CLTC续航635km。刀片电池，六座布局，智能驾驶。',
     false, true, 98, 4.76, 98, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 40: NIO ES6 (Electric SUV) - ¥498/day
    (3, 'NIO', 'ES6 75kWh', 2023, '星灰', '苏G·89012', 5, 'AUTOMATIC', 'ELECTRIC', 498.00,
     '苏州市吴中区太湖', 31.2643, 120.6291,
     '蔚来ES6，纯电动中型SUV，换电便捷。NOMI智能助手，空气悬挂，服务优质。',
     true, true, 87, 4.86, 87, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 41: Xpeng P7 (Electric Sedan) - ¥388/day
    (4, 'Xpeng', 'P7 706km', 2022, '天辰灰', '粤G·90123', 5, 'AUTOMATIC', 'ELECTRIC', 388.00,
     '广州市番禺区万博', 23.0351, 113.3656,
     '小鹏P7，纯电动中型轿车，续航706km。智能驾驶NGP，无框车门，颜值在线。',
     false, true, 112, 4.81, 112, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 42: Li Auto L9 (Electric SUV) - ¥588/day
    (5, 'Li Auto', 'L9 Pro', 2023, '金色', '京G·01234', 6, 'AUTOMATIC', 'ELECTRIC', 588.00,
     '北京市朝阳区大望路', 39.9092, 116.4823,
     '理想L9，增程式大型SUV，六座布局。冰箱彩电大沙发，家庭移动娱乐空间。',
     true, true, 56, 4.90, 56, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 43: BMW X7 (Large SUV) - ¥1288/day
    (1, 'BMW', 'X7 xDrive40i', 2022, '矿物白', '沪F·12345', 7, 'AUTOMATIC', 'PETROL', 1288.00,
     '上海市浦东新区世纪大道', 31.2304, 121.5067,
     '宝马X7，全尺寸豪华SUV，3.0T直列六缸。三排七座，空气悬挂，顶级配置。',
     true, false, 23, 4.95, 23, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 44: Mercedes GLS (Large SUV) - ¥1388/day
    (2, 'Mercedes-Benz', 'GLS 450', 2023, '曜岩黑', '粤H·23456', 7, 'AUTOMATIC', 'PETROL', 1388.00,
     '深圳市南山区深圳湾', 22.4950, 113.9454,
     '奔驰GLS，全尺寸豪华SUV，3.0T V6发动机。迈巴赫级舒适，三排七座，旗舰SUV。',
     true, false, 18, 4.97, 18, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 45: Audi A8L (Luxury Sedan) - ¥1088/day
    (3, 'Audi', 'A8L 55TFSI', 2022, '曼哈顿灰', '京H·34567', 5, 'AUTOMATIC', 'PETROL', 1088.00,
     '北京市东城区金宝街', 39.9229, 116.4351,
     '奥迪A8L，旗舰豪华轿车，3.0T V6发动机。 MMI触控，Bang & Olufsen音响，行政座驾。',
     true, false, 15, 4.94, 15, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 46: Porsche Panamera (Luxury Sedan) - ¥1288/day
    (4, 'Porsche', 'Panamera 4S', 2023, '樱桃红', '沪G·45678', 4, 'AUTOMATIC', 'PETROL', 1288.00,
     '上海市静安区南京西路', 31.2268, 121.4589,
     '保时捷Panamera，豪华四门轿跑，2.9T V6发动机。911级操控，行政舒适两相宜。',
     true, false, 12, 4.96, 12, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 47: Land Rover Range Rover (SUV) - ¥1488/day
    (5, 'Land Rover', '揽胜 3.0T', 2022, '圣托里尼黑', '粤I·56789', 5, 'AUTOMATIC', 'PETROL', 1488.00,
     '广州市天河区珠江新城', 23.1279, 113.3289,
     '路虎揽胜，旗舰豪华SUV，3.0T直列六缸。全地形反馈系统，越野能力强，尊贵体验。',
     true, false, 21, 4.93, 21, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 48: Toyota RAV4 (SUV) - ¥288/day
    (1, 'Toyota', 'RAV4 双擎', 2023, '铂金珍珠白', '浙D·67890', 5, 'AUTOMATIC', 'HYBRID', 288.00,
     '杭州市余杭区未来科技城', 30.2741, 120.0280,
     '丰田RAV4混动，紧凑型SUV，2.5L混动系统。TNGA架构，安全配置高，保值率好。',
     false, true, 234, 4.72, 234, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 49: Honda Fit (Hatchback) - ¥168/day
    (2, 'Honda', '飞度', 2022, '海洋蓝', '苏H·78901', 5, 'AUTOMATIC', 'PETROL', 168.00,
     '南京市建邺区河西', 32.0125, 118.7584,
     '本田飞度，小型车标杆，1.5L地球梦发动机。空间魔术师，油耗经济，新手练车首选。',
     false, true, 389, 4.66, 389, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 50: Volkswagen Golf (Hatchback) - ¥198/day
    (3, 'Volkswagen', '高尔夫', 2023, '达喀尔蓝', '赣A·89012', 5, 'AUTOMATIC', 'PETROL', 198.00,
     '南昌市红谷滩区万达', 28.6820, 115.8579,
     '大众高尔夫，两厢车鼻祖，1.4T发动机。德系品质，操控精准，改装潜力大。',
     false, true, 267, 4.69, 267, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 51: Mazda CX-5 (SUV) - ¥278/day
    (4, 'Mazda', 'CX-5 2.5L', 2022, '魂动红', '桂A·90123', 5, 'AUTOMATIC', 'PETROL', 278.00,
     '南宁市青秀区东盟商务', 22.8194, 108.4150,
     '马自达CX-5，紧凑型SUV，2.5L自然吸气。创驰蓝天技术，操控优秀，魂动设计。',
     false, true, 178, 4.74, 178, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 52: Subaru Outback (Wagon) - ¥358/day
    (5, 'Subaru', '傲虎', 2023, '水晶珠光白', '云A·01234', 5, 'AUTOMATIC', 'PETROL', 358.00,
     '昆明市西山区南亚风情', 25.0406, 102.7128,
     '斯巴鲁傲虎，跨界旅行车，2.5L水平对置发动机。左右对称全时四驱，EyeSight安全系统。',
     false, true, 89, 4.79, 89, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 53: Jaguar F-PACE (SUV) - ¥728/day
    (1, 'Jaguar', 'F-PACE 2.0T', 2022, '英国绿', '京I·12345', 5, 'AUTOMATIC', 'PETROL', 728.00,
     '北京市朝阳区三里屯', 39.9365, 116.4559,
     '捷豹F-PACE，中型豪华SUV，2.0T发动机。英伦设计，驾驶乐趣，个性鲜明。',
     false, true, 45, 4.82, 45, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 54: Infiniti Q50 (Sedan) - ¥388/day
    (2, 'Infiniti', 'Q50 3.0T', 2021, '玛瑙红', '沪H·23456', 5, 'AUTOMATIC', 'PETROL', 388.00,
     '上海市黄浦区淮海路', 31.2304, 121.4737,
     '英菲尼迪Q50，中型豪华轿车，3.0T V6发动机。后驱布局，线控转向，驾驶质感独特。',
     false, true, 56, 4.76, 56, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 55: Acura MDX (SUV) - ¥628/day
    (3, 'Acura', 'MDX', 2022, '星际黑', '粤J·34567', 7, 'AUTOMATIC', 'PETROL', 628.00,
     '广州市天河区太古汇', 23.1318, 113.3247,
     '讴歌MDX，中型豪华SUV，3.0T V6发动机。SH-AWD四驱，操控精准，性价比高。',
     false, true, 67, 4.80, 67, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 56: Genesis G90 (Luxury Sedan) - ¥888/day
    (4, 'Genesis', 'G90 3.5T', 2023, '里约黄', '京J·45678', 5, 'AUTOMATIC', 'PETROL', 888.00,
     '北京市东城区王府井', 39.9146, 116.4174,
     '捷尼赛思G90，旗舰豪华轿车，3.5T V6发动机。韩式豪华，配置丰富，性价比高。',
     true, false, 19, 4.88, 19, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 57: Lincoln Navigator (Large SUV) - ¥1188/day
    (5, 'Lincoln', 'Navigator 长轴版', 2022, '玄金黑', '沪I·56789', 7, 'AUTOMATIC', 'PETROL', 1188.00,
     '上海市浦东新区陆家嘴', 31.2397, 121.4991,
     '林肯领航员，全尺寸豪华SUV，3.5T V6双涡轮增压。三排七座，美式豪华，气场强大。',
     true, false, 14, 4.92, 14, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 58: Maserati Levante (SUV) - ¥1188/day
    (1, 'Maserati', 'Levante 3.0T', 2023, '岩浆红', '粤K·67890', 5, 'AUTOMATIC', 'PETROL', 1188.00,
     '深圳市南山区华侨城', 22.5405, 113.9736,
     '玛莎拉蒂Levante，中型豪华SUV，3.0T V6发动机。意大利设计，声浪迷人，品牌价值高。',
     true, false, 17, 4.90, 17, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 59: Bentley Bentayga (Luxury SUV) - ¥1888/day
    (2, 'Bentley', '添越 4.0T', 2022, '鲸鱼黑', '京K·78901', 5, 'AUTOMATIC', 'PETROL', 1888.00,
     '北京市朝阳区国贸', 39.9088, 116.4564,
     '宾利添越，超豪华SUV，4.0T V8发动机。手工打造，极致奢华，顶级体验。',
     true, false, 8, 5.00, 8, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    -- Vehicle 60: Ferrari Roma (Sports Car) - ¥2888/day
    (3, 'Ferrari', 'Roma', 2023, '法拉利红', '沪J·89012', 4, 'AUTOMATIC', 'PETROL', 2888.00,
     '上海市黄浦区外滩', 31.2384, 121.4910,
     '法拉利Roma，豪华GT跑车，3.9T V8发动机。优雅设计，强劲动力，浪漫之选。',
     true, false, 5, 5.00, 5, 'AVAILABLE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (license_plate) DO UPDATE SET
    brand = EXCLUDED.brand,
    model = EXCLUDED.model,
    price_per_day = EXCLUDED.price_per_day,
    updated_at = CURRENT_TIMESTAMP;

-- ============================================
-- INSERT VEHICLE IMAGES (96 images for 48 vehicles)
-- ============================================
-- Each vehicle gets 2 images

INSERT INTO vehicle_images (vehicle_id, url, is_primary, display_order, created_at)
VALUES
    -- Vehicle 13: Audi A4L
    (13, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (13, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 14: BMW 3 Series
    (14, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (14, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 15: Mercedes C-Class
    (15, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (15, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 16: Toyota Camry
    (16, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (16, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 17: Honda CR-V
    (17, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (17, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 18: Volkswagen Tiguan
    (18, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (18, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 19: Nissan X-Trail
    (19, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (19, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 20: Tesla Model Y
    (20, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (20, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 21: BMW X3
    (21, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (21, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 22: Mercedes GLC
    (22, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (22, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 23: Audi Q5L
    (23, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (23, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 24: Toyota Corolla
    (24, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (24, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 25: Honda Civic
    (25, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (25, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 26: Volkswagen Passat
    (26, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (26, 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 27: BMW 5 Series
    (27, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (27, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 28: Mercedes E-Class
    (28, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (28, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 29: Audi A6L
    (29, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (29, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 30: Tesla Model S
    (30, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (30, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 31: Porsche Macan
    (31, 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (31, 'https://images.unsplash.com/photo-1614162692422-38f7d9c24ce6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 32: Lexus ES
    (32, 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (32, 'https://images.unsplash.com/photo-1557041299-301321640c6a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 33: Volvo XC60
    (33, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (33, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 34: Cadillac XT5
    (34, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (34, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 35: Buick GL8
    (35, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (35, 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 36: Toyota Highlander
    (36, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (36, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 37: Honda Odyssey
    (37, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (37, 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 38: Volkswagen Sharan
    (38, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (38, 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 39: BYD Tang EV
    (39, 'https://images.unsplash.com/photo-1566023888417-374cdbb7f4ef?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (39, 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 40: NIO ES6
    (40, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (40, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 41: Xpeng P7
    (41, 'https://images.unsplash.com/photo-1566023888417-374cdbb7f4ef?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (41, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 42: Li Auto L9
    (42, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (42, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 43: BMW X7
    (43, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (43, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 44: Mercedes GLS
    (44, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (44, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 45: Audi A8L
    (45, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (45, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 46: Porsche Panamera
    (46, 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (46, 'https://images.unsplash.com/photo-1614162692422-38f7d9c24ce6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 47: Land Rover Range Rover
    (47, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (47, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 48: Toyota RAV4
    (48, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (48, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 49: Honda Fit
    (49, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (49, 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 50: Volkswagen Golf
    (50, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (50, 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 51: Mazda CX-5
    (51, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (51, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 52: Subaru Outback
    (52, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (52, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 53: Jaguar F-PACE
    (53, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (53, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 54: Infiniti Q50
    (54, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (54, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 55: Acura MDX
    (55, 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a9?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (55, 'https://images.unsplash.com/photo-1568844293986-8c1a5e39db4e?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 56: Genesis G90
    (56, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (56, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 57: Lincoln Navigator
    (57, 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (57, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 58: Maserati Levante
    (58, 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (58, 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 59: Bentley Bentayga
    (59, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (59, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 1, CURRENT_TIMESTAMP),

    -- Vehicle 60: Ferrari Roma
    (60, 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80', true, 0, CURRENT_TIMESTAMP),
    (60, 'https://images.unsplash.com/photo-1614162692422-38f7d9c24ce6?w=800&q=80', false, 1, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

COMMIT;

-- ============================================
-- VERIFICATION
-- ============================================
SELECT '=====================================' as '';
SELECT 'Additional Data Insertion Summary' as '';
SELECT '=====================================' as '';

SELECT
    'Total Vehicles' as table_name,
    COUNT(*) as count
FROM vehicles
UNION ALL
SELECT 'Total Vehicle Images', COUNT(*) FROM vehicle_images;

SELECT '=====================================' as '';
SELECT 'Total vehicles should be 60 (12 original + 48 new)' as '';
SELECT '=====================================' as '';

SELECT
    COUNT(*) as total_vehicles,
    MIN(price_per_day) as min_price,
    MAX(price_per_day) as max_price,
    AVG(rating) as avg_rating
FROM vehicles;
