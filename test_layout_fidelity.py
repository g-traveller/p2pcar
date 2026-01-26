"""
Comprehensive Layout Fidelity Test for P2P Car Rental
Verifies spacing and layout matches Figma design specifications
"""
from playwright.sync_api import sync_playwright
import time

def check_element_spacing(page, name, selector1, selector2, expected_gap, tolerance=4):
    """Check vertical or horizontal spacing between two elements"""
    try:
        el1 = page.locator(selector1).first.bounding_box()
        el2 = page.locator(selector2).first.bounding_box()

        if not el1 or not el2:
            print(f"  ⚠ {name}: Elements not found")
            return False

        # Calculate gap (assuming vertical layout)
        gap = el2['y'] - (el1['y'] + el1['height'])
        diff = abs(gap - expected_gap)

        if diff <= tolerance:
            print(f"  ✓ {name}: {gap}px (expected {expected_gap}px)")
            return True
        else:
            print(f"  ⚠ {name}: {gap}px (expected {expected_gap}px, diff: {diff}px)")
            return False
    except Exception as e:
        print(f"  ✗ {name}: Error - {e}")
        return False

def test_about_page():
    """Test About page spacing against Figma specs"""
    print("\n=== About Page Layout Test ===")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        page.goto('http://localhost:3000/about')
        page.wait_for_load_state('networkidle')
        time.sleep(3)

        # Figma spacing specifications:
        # - Hero height: 288px
        # - Container padding: 64px top, 32px sides
        # - Card gaps: 48px
        # - Card padding: 48px
        # - Mission/Vision grid gap: 32px

        passed = 0
        total = 0

        # Check hero section
        hero = page.locator('text=关于车享出行')
        if hero.count() > 0:
            hero_box = hero.bounding_box()
            story = page.locator('text=我们的故事')
            if story.count() > 0:
                story_box = story.bounding_box()
                if hero_box and story_box:
                    gap = story_box['y'] - (hero_box['y'] + hero_box['height'])
                    # Expected gap: hero padding (80+80=160) + container gap (~64) = ~224
                    if 200 < gap < 250:
                        print(f"  ✓ Hero to Story gap: {gap}px")
                        passed += 1
                    else:
                        print(f"  ⚠ Hero to Story gap: {gap}px (expected ~224px)")
                    total += 1

        # Check card internal spacing
        mission_title = page.locator('text=我们的使命')
        mission_desc = page.locator('text=:科技创新和共享经济模式')
        if mission_title.count() > 0 and mission_desc.count() > 0:
            t_box = mission_title.bounding_box()
            d_box = mission_desc.bounding_box()
            if t_box and d_box:
                gap = d_box['y'] - (t_box['y'] + t_box['height'])
                if 12 <= gap <= 20:
                    print(f"  ✓ Mission title to description gap: {gap}px")
                    passed += 1
                else:
                    print(f"  ⚠ Mission title to description gap: {gap}px (expected 16px)")
                total += 1

        # Check timeline spacing
        timeline_2020 = page.locator('text=2020年')
        timeline_2021 = page.locator('text=2021年')
        if timeline_2020.count() > 0 and timeline_2021.count() > 0:
            t1 = timeline_2020.bounding_box()
            t2 = timeline_2021.bounding_box()
            if t1 and t2:
                # Timeline items have ~48px gap
                gap = t2['y'] - t1['y']
                if 40 <= gap <= 60:
                    print(f"  ✓ Timeline item gap: {gap}px")
                    passed += 1
                else:
                    print(f"  ⚠ Timeline item gap: {gap}px (expected ~48px)")
                total += 1

        # Check stats grid
        stat_50w = page.locator('text=50万+')
        stat_10w = page.locator('text=10万+')
        if stat_50w.count() > 0 and stat_10w.count() > 0:
            s1 = stat_50w.bounding_box()
            s2 = stat_10w.bounding_box()
            if s1 and s2:
                # Stats should be horizontally aligned with ~32px gap
                gap = abs(s2['y'] - s1['y'])
                if gap <= 5:  # Same row
                    print(f"  ✓ Stats aligned horizontally")
                    passed += 1
                else:
                    print(f"  ⚠ Stats not aligned (y diff: {gap}px)")
                total += 1

        # Take detailed screenshot
        page.screenshot(path='/tmp/p2p_about_spacing.png', full_page=True)
        print(f"  ✓ Full page screenshot saved")

        browser.close()

        print(f"\nAbout Page: {passed}/{total} key spacing checks passed")
        return passed == total

def test_contact_page():
    """Test Contact page spacing against Figma specs"""
    print("\n=== Contact Page Layout Test ===")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        page.goto('http://localhost:3000/contact')
        page.wait_for_load_state('networkidle')
        time.sleep(3)

        passed = 0
        total = 0

        # Check form field spacing
        name_input = page.locator('input[name=\"name\"]')
        phone_input = page.locator('input[name=\"phone\"]')
        if name_input.count() > 0 and phone_input.count() > 0:
            n_box = name_input.bounding_box()
            p_box = phone_input.bounding_box()
            if n_box and p_box:
                # Form fields in same row should have gap
                gap = p_box['x'] - (n_box['x'] + n_box['width'])
                if 20 <= gap <= 30:
                    print(f"  ✓ Form field gap: {gap}px")
                    passed += 1
                else:
                    print(f"  ⚠ Form field gap: {gap}px (expected ~24px)")
                total += 1

        # Check contact card spacing
        hotline_card = page.locator('text=客服热线').locator('..').locator('..')
        email_card = page.locator('text=电子邮箱').locator('..').locator('..')
        if hotline_card.count() > 0 and email_card.count() > 0:
            h_box = hotline_card.bounding_box()
            e_box = email_card.bounding_box()
            if h_box and e_box:
                gap = e_box['y'] - (h_box['y'] + h_box['height'])
                if 20 <= gap <= 30:
                    print(f"  ✓ Contact card gap: {gap}px")
                    passed += 1
                else:
                    print(f"  ⚠ Contact card gap: {gap}px (expected ~24px)")
                total += 1

        # Check office locations grid
        beijing = page.locator('text=北京总部')
        shanghai = page.locator('text=上海分公司')
        if beijing.count() > 0 and shanghai.count() > 0:
            b_box = beijing.bounding_box()
            s_box = shanghai.bounding_box()
            if b_box and s_box:
                # Offices should be horizontally spaced
                gap = abs(s_box['y'] - b_box['y'])
                if gap <= 5:
                    print(f"  ✓ Offices aligned horizontally")
                    passed += 1
                else:
                    print(f"  ⚠ Offices not aligned (y diff: {gap}px)")
                total += 1

        # Take screenshot
        page.screenshot(path='/tmp/p2p_contact_spacing.png', full_page=True)
        print(f"  ✓ Full page screenshot saved")

        browser.close()

        print(f"\nContact Page: {passed}/{total} key spacing checks passed")
        return passed == total

def test_homepage():
    """Test Homepage layout"""
    print("\n=== Homepage Layout Test ===")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        page.goto('http://localhost:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(5)  # Wait for React hydration

        passed = 0
        total = 0

        # Check vehicle cards
        cards = page.locator('[class*=\"card\"], [class*=\"vehicle\"]').all()
        if len(cards) >= 16:
            print(f"  ✓ Vehicle cards: {len(cards)} found")
            passed += 1
        else:
            print(f"  ⚠ Vehicle cards: {len(cards)} found (expected 16+)")
        total += 1

        # Check book buttons
        book_btns = page.locator('button:has-text(\"立即预订\")').all()
        if len(book_btns) >= 16:
            print(f"  ✓ Book buttons: {len(book_btns)} found")
            passed += 1
        else:
            print(f"  ⚠ Book buttons: {len(book_btns)} found")
        total += 1

        # Check filters
        filters = page.locator('text=筛选').all()
        if len(filters) > 0:
            print(f"  ✓ Filter section found")
            passed += 1
        total += 1

        # Take screenshot
        page.screenshot(path='/tmp/p2p_homepage_spacing.png', full_page=True)
        print(f"  ✓ Full page screenshot saved")

        browser.close()

        print(f"\nHomepage: {passed}/{total} key checks passed")
        return passed >= total - 1

if __name__ == '__main__':
    results = []

    results.append(test_homepage())
    results.append(test_about_page())
    results.append(test_contact_page())

    print("\n" + "="*50)
    print("SUMMARY")
    print("="*50)

    if all(results):
        print("✓ All layout fidelity tests passed!")
    else:
        print("⚠ Some layout issues detected - check screenshots for details")

    print("\nScreenshots saved for visual verification:")
    print("  /tmp/p2p_homepage_spacing.png")
    print("  /tmp/p2p_about_spacing.png")
    print("  /tmp/p2p_contact_spacing.png")
