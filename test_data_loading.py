"""Test that vehicle data loads correctly from backend API"""
from playwright.sync_api import sync_playwright
import time
import json

def main():
    print("Testing vehicle data loading...")
    print("="*60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        # Track network requests
        api_calls = []
        def handle_request(request):
            if 'vehicles' in request.url:
                api_calls.append({
                    'url': request.url,
                    'method': request.method
                })
                print(f"  API Request: {request.method} {request.url}")

        def handle_response(response):
            if 'vehicles' in response.url:
                try:
                    data = response.json()
                    print(f"  API Response: {response.status} - {json.dumps(data, ensure_ascii=False)[:200]}...")
                except:
                    print(f"  API Response: {response.status}")

        page.on('request', handle_request)
        page.on('response', handle_response)

        # Navigate to homepage
        print("\n[1] Loading homepage...")
        page.goto('http://localhost:3000', timeout=30000)

        # Wait for initial render
        time.sleep(3)

        # Check for loading state
        loading_text = page.locator('text=加载中, text=Loading').all()
        if loading_text:
            print(f"  ✓ Loading state visible")

        # Wait for data to load (max 15 seconds)
        print("\n[2] Waiting for vehicle data to load...")
        try:
            page.wait_for_selector('.vehicle-card, [class*="vehicle"]', state='visible', timeout=15000)
            print("  ✓ Vehicle elements appeared")
        except:
            print("  ✗ Timeout waiting for vehicle elements")

        time.sleep(3)

        # Check for vehicle data in the page
        print("\n[3] Checking for loaded vehicle data...")

        # Look for vehicle names (Chinese brands)
        vehicle_brands = ['宝马', '奔驰', '奥迪', '大众', '丰田', '本田', '比亚迪', '特斯拉', '蔚来', '理想']
        found_brands = []
        for brand in vehicle_brands:
            if page.locator(f'text={brand}').count() > 0:
                found_brands.append(brand)

        if found_brands:
            print(f"  ✓ Found vehicles with brands: {', '.join(found_brands)}")
        else:
            print("  ! No vehicle brands found in DOM")

        # Check for prices
        price_elements = page.locator('[class*="price"]').or_(page.locator('text=¥')).all()
        if price_elements:
            print(f"  ✓ Found {len(price_elements)} price-related elements")

        # Check for ratings
        rating_elements = page.locator('[class*="rating"]').or_(page.locator('text=★')).all()
        if rating_elements:
            print(f"  ✓ Found {len(rating_elements)} rating-related elements")

        # Check API calls
        print(f"\n[4] API Calls Summary:")
        if api_calls:
            print(f"  ✓ Made {len(api_calls)} API calls to vehicles endpoint")
            for call in api_calls:
                print(f"    - {call['method']} {call['url']}")
        else:
            print("  ! No API calls detected (may be cached or failed)")

        # Take screenshot for verification
        page.screenshot(path='/tmp/vehicle_data_test.png', full_page=True)
        print(f"\n[5] Screenshot saved to /tmp/vehicle_data_test.png")

        # Get console errors
        console_errors = []
        def log_console(msg):
            if msg.type == 'error':
                console_errors.append(msg.text)
                print(f"  Console Error: {msg.text}")

        page.on('console', log_console)
        time.sleep(1)

        print(f"\n[6] Console Errors: {len(console_errors)} found")
        for error in console_errors[:5]:  # Show first 5 errors
            print(f"    - {error}")

        browser.close()

    print("\n" + "="*60)
    print("Test completed!")

if __name__ == "__main__":
    main()
