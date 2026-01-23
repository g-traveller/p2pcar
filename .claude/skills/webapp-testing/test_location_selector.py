from playwright.sync_api import sync_playwright
import time

def test_location_selector():
    """测试取车地点选择器功能"""

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        try:
            # 导航到首页
            print("导航到首页...")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')

            # 截图看看页面当前状态
            print("截图: 首页状态")
            page.screenshot(path='/tmp/01-homepage.png', full_page=True)

            # 查找取车地点选择器
            print("查找取车地点输入框...")

            # 尝试点击取车地点选择器
            location_selectors = [
                'text="请选择取车地点"',
                'input[placeholder*="取车地点"]',
                '.locationSelector',
            ]

            clicked = False
            for selector in location_selectors:
                try:
                    if page.locator(selector).count() > 0:
                        print(f"找到取车地点选择器，使用选择器: {selector}")
                        page.click(selector)
                        clicked = True
                        break
                except:
                    continue

            if not clicked:
                print("错误: 未找到取车地点选择器")
                page.screenshot(path='/tmp/error-no-selector.png')
                return

            # 等待下拉框展开
            time.sleep(1)

            # 截图下拉状态
            print("截图: 下拉框展开状态")
            page.screenshot(path='/tmp/02-dropdown-open.png')

            # 检查是否有取车地点列表
            print("检查取车地点列表...")

            # 检查城市分组
            city_selectors = [
                '.cityGroup',
                '[class*="city"]',
            ]

            cities_found = False
            for selector in city_selectors:
                try:
                    cities = page.locator(selector)
                    if cities.count() > 0:
                        print(f"找到 {cities.count()} 个城市分组")
                        cities_found = True

                        # 打印前几个城市名称
                        for i in range(min(3, cities.count())):
                            city = cities.nth(i).locator('.className').all_text_contents()
                            print(f"  城市 {i+1}: {city}")
                        break
                except:
                    continue

            if not cities_found:
                print("警告: 未找到城市分组，可能数据未加载")

            # 尝试点击一个地点
            try:
                # 查找可点击的地点项
                location_items = page.locator('.locationItem, [class*="location"]')
                if location_items.count() > 0:
                    print(f"找到 {location_items.count()} 个取车地点")

                    # 点击第一个地点
                    first_location = location_items.first
                    first_location.click()
                    print(f"点击了第一个地点")

                    time.sleep(1)

                    # 截图选择后的状态
                    print("截图: 选择地点后的状态")
                    page.screenshot(path='/tmp/03-location-selected.png')

                    # 检查输入框是否有值
                    input_value = page.locator('input[placeholder*="取车地点"], .locationSelector input').input_value()
                    print(f"输入框的值: {input_value}")

                else:
                    print("错误: 没有找到取车地点列表")

            except Exception as e:
                print(f"点击地点时出错: {e}")
                page.screenshot(path='/tmp/error-click.png')

            print("\n测试完成!")

        except Exception as e:
            print(f"测试过程中出错: {e}")
            page.screenshot(path='/tmp/error.png')

        finally:
            browser.close()
            print("浏览器已关闭")

if __name__ == '__main__':
    test_location_selector()
