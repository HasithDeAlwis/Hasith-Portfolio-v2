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

  test('should have title "Hasith De Alwis: Welcome to My Protfoiio"', async ({ page }) => {
    await expect(page).toHaveTitle(/Hasith De Alwis: Welcome to My Portfolio/)
  })
  test('should render first name', async ({ page }) => {
    const firstHeading = page.locator('h1:has-text("Hasith")')
    await expect(firstHeading).toBeVisible()
  })
  test('should render last name', async ({ page }) => {
    const firstHeading = page.locator('h1:has-text("De Alwis")')
    await expect(firstHeading).toBeVisible()
  })
  test('should render the top cloud', async ({ page }) => {
    const cloudTop = page.locator('img[alt="Top cloud illustration"]')
    await expect(cloudTop).toBeVisible()
  })
  test('should render the bottom cloud', async ({ page }) => {
    const cloudBottom = page.locator('img[alt="Bottom cloud illustration"]')
    await expect(cloudBottom).toBeVisible()
  })
  test('should not show top cloud after 4 seconds', async ({ page }) => {
    const cloudTop = page.locator('img[alt="Top cloud illustration"]')
    await page.waitForTimeout(4000)
    await expect(cloudTop).not.toBeVisible()
  })
  test('should not show bottom cloud after 4 seconds', async ({ page }) => {
    const cloudBottom = page.locator('img[alt="Bottom cloud illustration"]')
    await page.waitForTimeout(4000)
    await expect(cloudBottom).not.toBeVisible()
  })
})
