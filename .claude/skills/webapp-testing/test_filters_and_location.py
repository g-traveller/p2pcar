from playwright.sync_api import sync_playwright
import time

def test_location_selector_and_filters():
    """Test the location selector and filter functionality on the P2P car rental platform."""

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        try:
            # Navigate to the home page
            print("Navigating to http://localhost:3000")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')

            # Take initial screenshot
            page.screenshot(path='/tmp/01_initial_page.png', full_page=True)
            print("✓ Initial page loaded - screenshot saved")

            # Test Location Selector
            print("\n--- Testing Location Selector ---")

            # Find the location selector button (custom component, not a native select)
            location_button = page.locator('button:has-text("请选择取车地点"), [class*="location"]').first
            if location_button.count() > 0:
                print("✓ Found location selector button")

                # Click to open dropdown
                location_button.click()
                print("  ✓ Clicked to open location dropdown")
                time.sleep(1)

                # Take screenshot of open dropdown
                page.screenshot(path='/tmp/02_location_dropdown.png')
                print("  ✓ Screenshot of location dropdown saved")

                # Check if city groups are displayed
                city_names = page.locator('.cityName, [class*="city"]').all()
                if len(city_names) > 0:
                    print(f"  ✓ Found {len(city_names)} cities in dropdown")

                    # Select first location (click first location item)
                    first_location = page.locator('.locationItem, [class*="locationItem"]').first
                    if first_location.count() > 0:
                        first_location.click()
                        print("  ✓ Selected first location")
                        time.sleep(1)

                        # Verify dropdown closed and value updated
                        if not page.locator('.dropdown, [class*="dropdown"]').count() > 0:
                            print("  ✓ Dropdown closed after selection")
                else:
                    print("  ⚠ No location items found")

                # Close dropdown if still open
                overlay = page.locator('.overlay, [class*="overlay"]')
                if overlay.count() > 0:
                    overlay.click()
                    time.sleep(0.5)
            else:
                print("✗ Location selector button not found")

            # Test Date Inputs
            print("\n--- Testing Date Inputs ---")

            # Check start date
            start_date = page.locator('input[type="date"]').nth(0)
            if start_date.count() > 0:
                start_value = start_date.input_value()
                print(f"✓ Start date has default value: {start_value}")
            else:
                print("✗ Start date input not found")

            # Check end date
            end_date = page.locator('input[type="date"]').nth(1)
            if end_date.count() > 0:
                end_value = end_date.input_value()
                print(f"✓ End date has default value: {end_value}")
            else:
                print("✗ End date input not found")

            # Test Filter Section
            print("\n--- Testing Filter Section ---")

            # Find filter buttons (vehicle type)
            vehicle_type_buttons = page.locator('button:has-text("全部车型"), button:has-text("轿车"), button:has-text("SUV")')
            button_count = vehicle_type_buttons.count()
            print(f"✓ Found {button_count} vehicle type filter buttons")

            # Click "更多筛选" (More Filters) toggle button
            toggle_button = page.locator('button:has-text("更多筛选")')
            if toggle_button.count() > 0:
                print("✓ Found '更多筛选' button")
                toggle_button.click()
                print("  ✓ Clicked to expand filters")
                time.sleep(1)

                # Take screenshot of expanded filters
                page.screenshot(path='/tmp/02_filters_expanded.png', full_page=True)
                print("  ✓ Screenshot of expanded filters saved")

                # Test seats filter
                seats_buttons = page.locator('button:has-text("4座"), button:has-text("5座"), button:has-text("6座"), button:has-text("7座")')
                seats_count = seats_buttons.count()
                print(f"  ✓ Found {seats_count} seats filter buttons")

                # Test fuel type filter
                fuel_buttons = page.locator('button:has-text("汽油"), button:has-text("电动"), button:has-text("混动")')
                fuel_count = fuel_buttons.count()
                print(f"  ✓ Found {fuel_count} fuel type filter buttons")

                # Click on a filter to test interaction
                if seats_count > 0:
                    seats_button = seats_buttons.nth(0)
                    seats_button.click()
                    print("    ✓ Clicked '4座' filter button")
                    time.sleep(0.5)

                    # Verify button becomes active by checking class
                    button_class = seats_button.get_attribute('class') or ''
                    if 'active' in button_class:
                        print("    ✓ Filter button is now active")

                    time.sleep(1)

                # Click "收起" (Collapse) button
                collapse_button = page.locator('button:has-text("收起")')
                if collapse_button.count() > 0:
                    collapse_button.click()
                    print("  ✓ Clicked to collapse filters")
                    time.sleep(1)
            else:
                print("✗ '更多筛选' button not found")

            # Test price dropdown
            print("\n--- Testing Price Dropdown ---")
            price_select = page.locator('select').filter(has_text="全部价格")
            if price_select.count() > 0:
                print("✓ Found price dropdown")
                price_select.select_option('¥200-500')
                print("  ✓ Selected price range: ¥200-500")
                time.sleep(1)
            else:
                print("✗ Price dropdown not found")

            # Test Search Button
            print("\n--- Testing Search Button ---")
            search_button = page.locator('button:has-text("搜索")')
            if search_button.count() > 0:
                print("✓ Found search button")

                # Click search button
                search_button.click()
                print("  ✓ Clicked search button")
                time.sleep(3)

                # Take screenshot after search
                page.screenshot(path='/tmp/03_after_search.png', full_page=True)
                print("  ✓ Screenshot after search saved")

                # Check if vehicles are displayed
                vehicle_cards = page.locator('[data-testid*="vehicle"], .vehicleCard, [class*="vehicle"]').first
                if vehicle_cards.count() > 0:
                    print(f"  ✓ Vehicles are displayed on the page")
                else:
                    print("  ⚠ No vehicle cards found (might need different selector)")
            else:
                print("✗ Search button not found")

            print("\n=== All Tests Completed ===")

        except Exception as e:
            print(f"\n✗ Test failed with error: {e}")
            # Take screenshot on error
            try:
                page.screenshot(path='/tmp/error_screenshot.png', full_page=True)
                print("Error screenshot saved to /tmp/error_screenshot.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == '__main__':
    test_location_selector_and_filters()
