import { expect, test } from '@playwright/test'

// ---------------MOBILE, TABLET, AND DESKTOP-----------
test.describe('Common Mobile, Tablet, and Desktop Elements', {
  tag: '@smoke',
}, () => {
  // Go to page before all tests
  test.beforeEach(async ({ page }) => {
    // Navigate to the page containing the component
    await page.goto('/')
  })
  test('it should not display "About Me" on page load', ({ page }) => {
    const aboutMe = page.locator('text=About Me')
    expect(aboutMe).not.toBeVisible()
  })
  test('it should not display the "About Me" text area on page load', async ({ page }) => {
    const aboutMeDescription = page.locator('class=about-me-description')
    await expect(aboutMeDescription).not.toBeVisible()
  })
  test('it should not display the "About Me" svgs on page load', async ({ page }) => {
    const aboutMeSVGs = page.locator('class=about-me-svgs')
    await expect(aboutMeSVGs).not.toBeVisible()
  })
  test('it should be display "About Me" after scrolling past the hero section', async ({ page }) => {
    // Scroll down by 130vh
    await page.mouse.wheel(0, window.innerHeight * 1.3)
    await page.waitForTimeout(1000)
    const aboutMe = page.locator('text=About Me')
    await expect(aboutMe).toBeVisible()
  })
  test('it should be display "About Me" description after scrolling past the hero section', async ({ page }) => {
    // Scroll down by 140vh
    await page.mouse.wheel(0, window.innerHeight * 1.4)
    await page.waitForTimeout(1000)
    const aboutMeDescription = page.locator('class=about-me-description')
    await expect(aboutMeDescription).toBeVisible()
  })
  test('it should be display "About Me" SVGs after scrolling past the hero section', async ({ page }) => {
    // Scroll down by 150vh
    await page.mouse.wheel(0, window.innerHeight * 1.5)
    await page.waitForTimeout(1000)
    const aboutMeSVGs = page.locator('class=about-me-svgs')
    await expect(aboutMeSVGs).toBeVisible()
  })
})
