"""Test Booking Page"""
from playwright.sync_api import sync_playwright
import time

def main():
    print("Testing Booking Page...")
    print("="*60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        # Navigate to booking page (using vehicle ID 5 which exists in database)
        print("\n[1] Loading booking page...")
        page.goto('http://localhost:3000/book/5', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(2)

        # Take screenshot
        page.screenshot(path='/tmp/booking_page.png', full_page=True)
        print("  ✓ Screenshot saved to /tmp/booking_page.png")

        # Check if page loaded
        title = page.title()
        print(f"  Page title: {title}")

        # Check for main elements
        checks = {
            "Page container": '.container',
            "Title": 'text=预订车辆',
            "Vehicle info": '.vehicleInfo',
            "Vehicle image": '.vehicleImage',
            "Vehicle name": '.vehicleName',
            "Price display": '.vehiclePrice',
            "Date inputs": '.dateInput',
            "Insurance options": '.insuranceOption',
            "Price details": '.priceDetails',
            "Total price": '.totalValue',
            "Confirm button": '.confirmButton',
            "Back button": '.backButton'
        }

        results = {'passed': [], 'failed': []}

        for name, selector in checks.items():
            try:
                element = page.locator(selector).first()
                if element.count() > 0:
                    results['passed'].append(name)
                    print(f"  ✓ PASS: {name} found")
                else:
                    results['failed'].append(name)
                    print(f"  ✗ FAIL: {name} not found")
            except Exception as e:
                results['failed'].append(name)
                print(f"  ✗ FAIL: {name} - {str(e)}")

        # Test date inputs
        print("\n[2] Testing date inputs...")
        try:
            dateInputs = page.locator('.dateInput').all()
            if len(dateInputs) >= 2:
                # Try to set dates
                dateInputs[0].fill('2026-02-01')
                dateInputs[1].fill('2026-02-07')
                print("  ✓ PASS: Date inputs can be filled")
            else:
                print("  ✗ FAIL: Not enough date inputs found")
        except Exception as e:
            print(f"  ✗ FAIL: Date inputs - {str(e)}")

        # Test insurance selection
        print("\n[3] Testing insurance selection...")
        try:
            insuranceOptions = page.locator('.insuranceOption').all()
            if len(insuranceOptions) >= 3:
                # Click on first option
                insuranceOptions[0].click()
                time.sleep(0.5)
                print(f"  ✓ PASS: Insurance can be selected ({len(insuranceOptions)} options)")
            else:
                print("  ✗ FAIL: Insurance options not found")
        except Exception as e:
            print(f"  ✗ FAIL: Insurance selection - {str(e)}")

        # Test confirm button
        print("\n[4] Testing confirm button...")
        try:
            confirmBtn = page.locator('.confirmButton')
            if confirmBtn.count() > 0:
                print("  ✓ PASS: Confirm button found")
                # Check button text
                btnText = confirmBtn.inner_text()
                print(f"    Button text: {btnText}")
            else:
                print("  ✗ FAIL: Confirm button not found")
        except Exception as e:
            print(f"  ✗ FAIL: Confirm button - {str(e)}")

        # Check price calculation
        print("\n[5] Checking price display...")
        try:
            totalElement = page.locator('.totalValue')
            if totalElement.count() > 0:
                totalText = totalElement.inner_text()
                print(f"  ✓ PASS: Total price displayed: {totalText}")
            else:
                print("  ✗ FAIL: Total price not found")
        except Exception as e:
            print(f"  ✗ FAIL: Price display - {str(e)}")

        # Check for console errors
        console_errors = []
        def log_console(msg):
            if msg.type == 'error':
                console_errors.append(msg.text)

        page.on('console', log_console)
        time.sleep(1)

        if console_errors:
            print(f"\n  ⚠ Console errors ({len(console_errors)}):")
            for error in console_errors[:5]:
                print(f"    - {error}")
        else:
            print("\n  ✓ No console errors")

        # Summary
        print("\n" + "="*60)
        print(f"Test Summary: {len(results['passed'])} passed, {len(results['failed'])} failed")
        print("="*60)

        if results['failed']:
            print("\nFailed elements:")
            for name in results['failed']:
                print(f"  - {name}")

        browser.close()

if __name__ == "__main__":
    main()
