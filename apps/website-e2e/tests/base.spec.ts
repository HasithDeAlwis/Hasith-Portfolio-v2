import { expect, test } from '@playwright/test'

test.describe('Navbar and Footer Tests for Mobile, Tablet, and Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('should display navbar', async ({ page }) => {
    // Check if navbar is visible
    const navbar = page.locator('#navbar')
    expect(navbar).toBeVisible()
  })

  test('should display footer', async ({ page }) => {
    // Check if footer is visible
    const footer = page.locator('footer')
    expect(footer).toBeVisible()
  })

  test('should display main logo', async ({ page }) => {
    // Check if the #hero section is visible before clicking the logo
    const logo = page.locator('#main-logo')
    await expect(logo).toBeInViewport()
  })

  test('should navigate to #hero section when clicking on the logo', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 2)
    })
    await page.waitForTimeout(1000)
    // Click on the logo
    const logo = page.locator('.main-logo')
    await logo.click()
    await page.waitForTimeout(1000)

    const location = await page.evaluate(() => window.scrollY)
    expect(location).toBeLessThanOrEqual(0)
  })
})

test.describe('Navbar tests for Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('should display hamburger icon', async ({ page }) => {
    // Check if the hamburger icon is visible
    const hamburgerIcon = page.locator('#hamburger') // Adjust the selector as needed
    await expect(hamburgerIcon).toBeVisible()
  })

  test('should open drawer when clicking on hamburger icon', async ({ page }) => {
    // Click on the hamburger icon
    const hamburgerIcon = page.locator('#hamburger') // Adjust the selector as needed
    await hamburgerIcon.click()

    // Check if the drawer is open
    const drawer = page.locator('#drawer') // Adjust the selector as needed
    await expect(drawer).toBeVisible()
  })
})

test.describe('Navbar tests for Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('should display 4 links', async ({ page }) => {
    // Check if the navbar contains 4 links
    const links = page.locator('#navbar div a')
    await expect(links).toHaveCount(4)
  })
})
