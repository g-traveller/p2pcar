-- Vehicle Images Seed Script
-- Adds images for all 50 vehicles

INSERT INTO vehicle_images (vehicle_id, url, is_primary, display_order, created_at) VALUES
-- Luxury Cars Images (1-5)
(1, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 1, NOW()),
(1, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 2, NOW()),
(1, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 3, NOW()),

(2, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(2, 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80', false, 2, NOW()),

(3, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(3, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(4, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW()),
(4, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW()),

(5, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW()),
(5, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

-- SUV Premium Images (6-10)
(6, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', true, 1, NOW()),
(6, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', false, 2, NOW()),

(7, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW()),
(7, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(8, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', true, 1, NOW()),
(8, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 2, NOW()),

(9, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(9, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW()),

(10, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 1, NOW()),
(10, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 2, NOW()),

-- Mid-range Sedans Images (11-15)
(11, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW()),
(11, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW()),

(12, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(12, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(13, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(13, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW()),

(14, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW()),
(14, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(15, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(15, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

-- Economy Cars Images (16-20)
(16, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW()),
(16, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW()),

(17, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(17, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(18, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(18, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW()),

(19, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW()),
(19, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(20, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(20, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

-- Electric Vehicles Images (21-25)
(21, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW()),
(21, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW()),
(21, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 3, NOW()),

(22, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW()),
(22, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW()),

(23, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', true, 1, NOW()),
(23, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', false, 2, NOW()),

(24, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', true, 1, NOW()),
(24, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 2, NOW()),

(25, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW()),
(25, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW()),

-- SUV Mid-range Images (26-30)
(26, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', true, 1, NOW()),
(26, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(27, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW()),
(27, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(28, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(28, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(29, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW()),
(29, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

(30, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(30, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

-- MPV Images (31-35)
(31, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(31, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW()),

(32, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(32, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(33, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', true, 1, NOW()),
(33, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW()),

(34, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(34, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

(35, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW()),
(35, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

-- Sports Cars Images (36-40)
(36, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW()),
(36, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW()),
(36, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW()),

(37, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', true, 1, NOW()),
(37, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', false, 2, NOW()),
(37, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW()),

(38, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 1, NOW()),
(38, 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', false, 2, NOW()),
(38, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 3, NOW()),

(39, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW()),
(39, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 2, NOW()),
(39, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 3, NOW()),

(40, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(40, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW()),
(40, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 3, NOW()),

-- Compact Cars Images (41-45)
(41, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 1, NOW()),
(41, 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', false, 2, NOW()),

(42, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(42, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),

(43, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 1, NOW()),
(43, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', false, 2, NOW()),

(44, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', true, 1, NOW()),
(44, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),

(45, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(45, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),

-- Luxury SUV Images (46-50)
(46, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', true, 1, NOW()),
(46, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),
(46, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', false, 3, NOW()),

(47, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 1, NOW()),
(47, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80', false, 2, NOW()),
(47, 'https://images.unsplash.com/photo-1617469767053-d3b547a8a0c6?w=800&q=80', false, 3, NOW()),

(48, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 1, NOW()),
(48, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 2, NOW()),
(48, 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', false, 3, NOW()),

(49, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', true, 1, NOW()),
(49, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', false, 2, NOW()),
(49, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', false, 3, NOW()),

(50, 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', true, 1, NOW()),
(50, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', false, 2, NOW()),
(50, 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80', false, 3, NOW());
