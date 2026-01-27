"""Debug Booking Page - Check console and network"""
from playwright.sync_api import sync_playwright
import time

def main():
    print("Debugging Booking Page...")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        # Collect console logs
        console_messages = []
        def handle_console(msg):
            console_messages.append({
                'type': msg.type,
                'text': msg.text
            })
            print(f"Console [{msg.type}]: {msg.text}")

        page.on('console', handle_console)

        # Collect network requests
        network_requests = []
        def handle_request(request):
            network_requests.append({
                'url': request.url,
                'method': request.method
            })
            print(f"Request: {request.method} {request.url}")

        def handle_response(response):
            if '/api/' in response.url:
                print(f"Response: {response.status} {response.url}")

        page.on('request', handle_request)
        page.on('response', handle_response)

        # Navigate to booking page
        print("\n[1] Navigating to booking page...")
        page.goto('http://localhost:3000/book/5', timeout=30000)

        # Wait a bit for everything to load
        print("\n[2] Waiting for page to load (10 seconds)...")
        time.sleep(10)

        # Check page content
        print("\n[3] Checking page content...")
        content = page.content()
        if '加载中' in content:
            print("  - Page shows loading state")
        if '预订车辆' in content:
            print("  - Page shows booking title")
        if '理想' in content or '车辆信息' in content:
            print("  - Page shows vehicle info")

        # Take screenshot
        page.screenshot(path='/tmp/booking_debug.png', full_page=True)
        print("\n  ✓ Screenshot saved to /tmp/booking_debug.png")

        # Summary
        print("\n" + "=" * 60)
        print("Console Messages Summary:")
        print("=" * 60)
        for msg in console_messages:
            print(f"  [{msg['type']}]: {msg['text']}")

        print("\n" + "=" * 60)
        print("Network Requests Summary:")
        print("=" * 60)
        for req in network_requests:
            if '/api/' in req['url']:
                print(f"  {req['method']}: {req['url']}")

        browser.close()

if __name__ == "__main__":
    main()
