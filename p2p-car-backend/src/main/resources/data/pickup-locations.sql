-- Pickup Locations
-- 中国主要城市的取车地点

INSERT INTO pickup_locations (name, address, district, city, latitude, longitude, is_active, display_order, created_at, updated_at) VALUES
-- 北京
('北京首都国际机场T3航站楼', '北京市顺义区首都机场路3号', '顺义区', '北京', 40.0799, 116.6031, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('北京南站', '北京市丰台区永外大街莲花池南里', '丰台区', '北京', 39.8648, 116.3784, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('北京西站', '北京市丰台区莲花池东路', '丰台区', '北京', 39.8948, 116.3217, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('朝阳区大望路', '北京市朝阳区大望路', '朝阳区', '北京', 39.9190, 116.4807, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('海淀区中关村', '北京市海淀区中关村', '海淀区', '北京', 39.9794, 116.3028, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 上海
('上海虹桥国际机场T2航站楼', '上海市闵行区虹翔路', '闵行区', '上海', 31.1979, 121.3364, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('上海浦东国际机场T1航站楼', '上海市浦东新区机场大道', '浦东新区', '上海', 31.1443, 121.8083, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('上海虹桥火车站', '上海市闵行区申虹路', '闵行区', '上海', 31.1971, 121.3184, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('上海火车站', '上海市静安区秣陵路', '静安区', '上海', 31.2494, 121.4574, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('浦东新区陆家嘴', '上海市浦东新区陆家嘴', '浦东新区', '上海', 31.2397, 121.4998, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 广州
('广州白云国际机场', '广州市白云区机场高速', '白云区', '广州', 23.3924, 113.2988, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('广州火车站', '广州市越秀区环市西路', '越秀区', '广州', 23.1456, 113.2643, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('广州南站', '广州市番禺区石壁街道', '番禺区', '广州', 23.0023, 113.2767, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('天河区珠江新城', '广州市天河区珠江新城', '天河区', '广州', 23.1169, 113.3282, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('番禺区万达广场', '广州市番禺区万达广场', '番禺区', '广州', 23.0034, 113.3876, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 深圳
('深圳宝安国际机场T3航站楼', '深圳市宝安区机场大道', '宝安区', '深圳', 22.6393, 113.8107, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('深圳北站', '深圳市龙华区民治街道', '龙华区', '深圳', 22.6056, 114.0302, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('深圳福田站', '深圳市福田区福田街道', '福田区', '深圳', 22.6074, 114.0559, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('南山区科技园', '深圳市南山区科技园', '南山区', '深圳', 22.5428, 113.9512, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('罗湖区国贸', '深圳市罗湖区国贸', '罗湖区', '深圳', 22.5466, 114.1094, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 杭州
('杭州萧山国际机场', '杭州市萧山区机场路', '萧山区', '杭州', 30.2295, 120.4344, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('杭州东站', '杭州市江干区天城路', '江干区', '杭州', 30.2741, 120.2114, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('杭州火车站', '杭州市上城区环城东路', '上城区', '杭州', 30.2764, 120.1524, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('西湖区武林广场', '杭州市西湖区武林广场', '西湖区', '杭州', 30.2694, 120.1647, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('滨江区星光大道', '杭州市滨江区星光大道', '滨江区', '杭州', 30.2094, 120.2112, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 成都
('成都双流国际机场T1航站楼', '成都市双流区机场路', '双流区', '成都', 30.5785, 103.9471, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('成都东站', '成都市成华区邛崃山路', '成华区', '成都', 30.6189, 104.1465, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('成都火车站', '成都市金牛区北站西路', '金牛区', '成都', 30.6869, 104.0633, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('武侯区环球中心', '成都市武侯区环球中心', '武侯区', '成都', 30.5715, 104.0658, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('高新区天府软件园', '成都市高新区天府软件园', '高新区', '成都', 30.5429, 104.0668, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 南京
('南京禄口国际机场', '南京市江宁区禄口街道', '江宁区', '南京', 31.7420, 118.8620, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('南京火车站', '南京市玄武区龙蟠路', '玄武区', '南京', 32.0827, 118.7968, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('南京南站', '南京市雨花台区玉兰路', '雨花台区', '南京', 31.9704, 118.8028, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('鼓楼区新街口', '南京市鼓楼区新街口', '鼓楼区', '南京', 32.0584, 118.7876, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('建邺区河西万达', '南京市建邺区河西万达', '建邺区', '南京', 32.0176, 118.7468, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 武汉
('武汉天河国际机场T3航站楼', '武汉市黄陂区天河机场路', '黄陂区', '武汉', 30.7838, 114.2081, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('武汉火车站', '武汉市武昌区中山路', '武昌区', '武汉', 30.6044, 114.2996, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('武汉汉口火车站', '武汉市江汉区金家墩', '江汉区', '武汉', 30.6175, 114.2661, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('洪山区光谷广场', '武汉市洪山区光谷广场', '洪山区', '武汉', 30.5084, 114.3976, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('江汉区武广商圈', '武汉市江汉区武广商圈', '江汉区', '武汉', 30.5779, 114.2716, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 西安
('西安咸阳国际机场T3航站楼', '西安市西咸新区机场高速', '西咸新区', '西安', 34.4471, 108.7516, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('西安北站', '西安市未央区玄武路', '未央区', '西安', 34.3819, 108.9398, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('西安火车站', '西安市新城区环城北路', '新城区', '西安', 34.2674, 108.9486, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('雁塔区大雁塔', '西安市雁塔区大雁塔', '雁塔区', '西安', 34.2188, 108.9647, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('碑林区钟楼', '西安市碑林区钟楼', '碑林区', '西安', 34.2594, 108.9472, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 重庆
('重庆江北国际机场T3航站楼', '重庆市渝北区机场大道', '渝北区', '重庆', 29.7192, 106.6417, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('重庆北站', '重庆市渝北区泰山大道', '渝北区', '重庆', 29.6196, 106.5549, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('重庆火车站', '重庆市渝中区中山路', '渝中区', '重庆', 29.5589, 106.5769, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('渝北区照母山', '重庆市渝北区照母山', '渝北区', '重庆', 29.6479, 106.4553, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('江北区观音桥', '重庆市江北区观音桥', '江北区', '重庆', 29.5580, 106.5714, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- 天津
('天津滨海国际机场T2航站楼', '天津市东丽区机场大道', '东丽区', '天津', 39.1244, 117.3463, true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('天津火车站', '天津市河北区世纪钟广场', '河北区', '天津', 39.1325, 117.1966, true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('天津西站', '天津市红桥区西站道', '红桥区', '天津', 39.1601, 117.2012, true, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('和平区和平路', '天津市和平区和平路', '和平区', '天津', 39.1251, 117.1964, true, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('河西区大沽南路', '天津市河西区大沽南路', '河西区', '天津', 39.0850, 117.2133, true, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
