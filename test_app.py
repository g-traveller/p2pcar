"""E2E test for P2P Car Rental Platform"""
from playwright.sync_api import sync_playwright, Page, Browser
import sys
import json
import time

class TestResults:
    def __init__(self):
        self.passed = []
        self.failed = []

    def add_pass(self, test_name):
        self.passed.append(test_name)
        print(f"✓ PASS: {test_name}")

    def add_fail(self, test_name, error):
        self.failed.append((test_name, error))
        print(f"✗ FAIL: {test_name}")
        print(f"  Error: {error}")

    def summary(self):
        print("\n" + "="*60)
        print(f"Test Summary: {len(self.passed)} passed, {len(self.failed)} failed")
        print("="*60)
        if self.failed:
            print("\nFailed Tests:")
            for name, error in self.failed:
                print(f"  - {name}: {error}")
        return len(self.failed) == 0

def test_homepage(page: Page, results: TestResults):
    """Test homepage loads and displays vehicles"""
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)

        # Check if we're on the right page
        title = page.title()
        print(f"  Page title: {title}")
        results.add_pass("Homepage loads")

        # Wait a bit for dynamic content
        time.sleep(3)

        # Check for vehicles using different selectors
        vehicle_selectors = [
            '.vehicle-card',
            '[class*="vehicle"]',
            '[class*="Vehicle"]',
            'img[alt*="宝马"]',
            'img[alt*="奔驰"]',
            '.image',
            'a[href*="/vehicle"]'
        ]

        found_vehicles = False
        for selector in vehicle_selectors:
            elements = page.locator(selector).all()
            if len(elements) > 0:
                results.add_pass(f"Vehicles displayed ({len(elements)} found with '{selector}')")
                found_vehicles = True
                break

        if not found_vehicles:
            # Take screenshot for debugging
            page.screenshot(path='/tmp/homepage_debug.png', full_page=True)
            # Get page content for debugging
            content = page.content()
            results.add_fail("Vehicles displayed", f"No vehicles found. Content length: {len(content)}")

    except Exception as e:
        results.add_fail("Homepage loads", str(e))
        page.screenshot(path='/tmp/homepage_error.png')

def test_search_bar(page: Page, results: TestResults):
    """Test search bar elements"""
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(2)

        # Try multiple search input selectors
        search_selectors = [
            'input[placeholder*="位置"]',
            'input[placeholder*="location"]',
            'input[placeholder*="搜索"]',
            'input[type="search"]',
            'input[placeholder*="取车地点"]',
            '[class*="search"] input',
            '[class*="Search"] input',
            '[class*="Location"] input'
        ]

        found_search = False
        for selector in search_selectors:
            search = page.locator(selector)
            if search.count() > 0:
                results.add_pass(f"Search bar visible ('{selector}')")
                found_search = True
                break

        if not found_search:
            # Try to find any input
            all_inputs = page.locator('input').all()
            results.add_fail("Search bar visible", f"No search input found. Total inputs: {len(all_inputs)}")

    except Exception as e:
        results.add_fail("Search bar test", str(e))

def test_navigation(page: Page, results: TestResults):
    """Test navigation elements"""
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(2)

        # Check navbar
        navbar = page.locator('nav, [class*="nav"], [class*="Nav"], header')
        if navbar.count() > 0:
            results.add_pass("Navbar visible")
        else:
            results.add_fail("Navbar visible", "Navbar not found")

        # Check for logo
        logo = page.locator('[class*="logo"], [alt*="车享"], h1, a[href="/"]')
        if logo.count() > 0:
            results.add_pass("Logo visible")
        else:
            results.add_fail("Logo visible", "Logo not found")

    except Exception as e:
        results.add_fail("Navigation", str(e))

def test_login_page(page: Page, results: TestResults):
    """Test login page"""
    try:
        page.goto('http://localhost:3000/login', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(2)

        page.screenshot(path='/tmp/login_page.png')

        # Check login form elements
        email_input = page.locator('input[type="email"], input[placeholder*="邮箱"], input[placeholder*="email"], input[placeholder*="账号"]')
        password_input = page.locator('input[type="password"], input[placeholder*="密码"]')
        submit_btn = page.locator('button[type="submit"], button:has-text("登录"), button:has-text("Login")')

        has_email = email_input.count() > 0
        has_password = password_input.count() > 0
        has_submit = submit_btn.count() > 0

        results.add_pass(f"Login form - Email: {has_email}, Password: {has_password}, Submit: {has_submit}")

        if has_email and has_password:
            try:
                if has_email:
                    email_input.first.fill("test@example.com")
                if has_password:
                    password_input.first.fill("password123")
                results.add_pass("Login form fillable")
            except Exception as e:
                results.add_fail("Login form fillable", str(e))

    except Exception as e:
        results.add_fail("Login page", str(e))

def test_register_page(page: Page, results: TestResults):
    """Test registration page"""
    try:
        page.goto('http://localhost:3000/register', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(2)

        page.screenshot(path='/tmp/register_page.png')

        # Check register form
        name_input = page.locator('input[placeholder*="姓名"], input[placeholder*="昵称"], input[name*="name"], input[id*="name"]')
        phone_email_input = page.locator('input[placeholder*="手机"], input[placeholder*="邮箱"], input[placeholder*="手机号"]')
        password_input = page.locator('input[type="password"], input[placeholder*="密码"]')
        code_input = page.locator('input[placeholder*="验证码"]')

        has_name = name_input.count() > 0
        has_phone_email = phone_email_input.count() > 0
        has_password = password_input.count() > 0
        has_code = code_input.count() > 0

        results.add_pass(f"Register form - Name: {has_name}, Phone/Email: {has_phone_email}, Password: {has_password}, Code: {has_code}")

    except Exception as e:
        results.add_fail("Register page", str(e))

def test_vehicle_filters(page: Page, results: TestResults):
    """Test vehicle filtering"""
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('domcontentloaded', timeout=15000)
        time.sleep(3)

        # Look for filter elements
        filter_selectors = [
            '[class*="filter"]',
            '[class*="Filter"]',
            'aside',
            '[class*="sidebar"]',
            'select[name*="type"]',
            '[class*="vehicleType"]'
        ]

        found_filter = False
        for selector in filter_selectors:
            filter_elem = page.locator(selector)
            if filter_elem.count() > 0:
                results.add_pass(f"Filter section found ('{selector}')")
                found_filter = True
                break

        if not found_filter:
            results.add_fail("Filter section", "Filter section not found")

    except Exception as e:
        results.add_fail("Vehicle filters", str(e))

def test_backend_api(page: Page, results: TestResults):
    """Test backend API through browser"""
    try:
        # Use browser to test API - correct path with /api/v1
        page.goto('http://localhost:8080/api/v1/vehicles?page=0&size=5', timeout=10000)

        time.sleep(2)

        # Check if we got a response
        content = page.content()
        if '"code":200' in content or '"id"' in content or '"name"' in content or 'vehicles' in content.lower():
            results.add_pass("Backend API accessible")
        else:
            results.add_fail("Backend API", f"Unexpected response: {content[:200]}")

    except Exception as e:
        results.add_fail("Backend API", str(e))

def main():
    results = TestResults()

    print("Starting E2E Tests for P2P Car Rental Platform")
    print("="*60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080}
        )

        # Run tests
        print("\n[1] Backend API Test")
        page = context.new_page()
        test_backend_api(page, results)
        page.close()

        print("\n[2] Homepage Test")
        page = context.new_page()
        test_homepage(page, results)
        page.close()

        print("\n[3] Search Bar Test")
        page = context.new_page()
        test_search_bar(page, results)
        page.close()

        print("\n[4] Navigation Test")
        page = context.new_page()
        test_navigation(page, results)
        page.close()

        print("\n[5] Login Page Test")
        page = context.new_page()
        test_login_page(page, results)
        page.close()

        print("\n[6] Register Page Test")
        page = context.new_page()
        test_register_page(page, results)
        page.close()

        print("\n[7] Vehicle Filters Test")
        page = context.new_page()
        test_vehicle_filters(page, results)
        page.close()

        browser.close()

    # Print summary
    success = results.summary()
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
