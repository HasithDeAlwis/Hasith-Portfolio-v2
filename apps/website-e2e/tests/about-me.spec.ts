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

  // Test for "About Me" becoming visible after scrolling
  test('it should display "About Me" after scrolling past the hero section', async ({ page }) => {
    // Scroll down by 130vh
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 1.3)
    })
    await page.waitForTimeout(1000) // Allow time for any animations
    const aboutMe = page.locator('text=About Me')
    await expect(aboutMe).toHaveCSS('opacity', '1')
  })

  // Test for "About Me" description becoming visible after scrolling
  test('it should display "About Me" description after scrolling past the hero section', async ({ page }) => {
    // Scroll down by 140vh
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 1.4)
    })
    await page.waitForTimeout(2000) // Allow time for any animations
    const aboutMeDescription = page.locator('#about-me-description')
    await expect(aboutMeDescription).toHaveCSS('opacity', '1')
  })

  // Test for the correct number of images rendered
  test('should render exactly 4 images', async ({ page }) => {
    const aboutMeImagesContainer = page.locator('#about-me-images')

    // Ensure the images container is present
    const images = aboutMeImagesContainer.locator('div')
    await expect(images).toHaveCount(4) // Change this to the expected count of images
  })

  // Test for the opacity of images before scrolling
  test('should have opacity of 0 for images before scrolling', async ({ page }) => {
    const aboutMeImagesContainer = page.locator('#about-me-images')
    const images = aboutMeImagesContainer.locator('div')

    // Ensure that each image has opacity of 0 before scrolling
    for (let i = 0; i < 4; i++) {
      await expect(images.nth(i)).toHaveCSS('opacity', '0')
    }
  })

  // Test for images animating on scroll
  test('should animate images on scroll', async ({ page }) => {
    // Scroll down to trigger the GSAP animation
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 1.4) // Scroll down to trigger animations
    })

    // Wait for a moment to allow the animations to complete
    await page.waitForTimeout(1000)

    // Check the first image for visibility and CSS properties after animation
    const images = page.locator('#about-me-images div')
    await expect(images.first()).toHaveCSS('opacity', '1') // Ensure the first image is fully visible
  })
})
