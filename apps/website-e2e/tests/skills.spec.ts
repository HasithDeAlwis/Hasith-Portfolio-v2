import { expect, test } from '@playwright/test'

// ----- MOBILE, TABLET, AND DESKTOP-----------
test.describe('Common Mobile, Tablet, and Desktop For Skills', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('orb should be hidden until before scrolling', async ({ page }) => {
    const orb = page.locator('#crystal-ball')
    await expect(orb).toHaveCSS('opacity', '0')
  })

  test('it should have a magic orb', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 2)
    })
    await page.waitForTimeout(1000)
    const orb = page.locator('#crystal-ball')
    await expect(orb).toHaveCSS('opacity', '1')
  })

  test('it should have 12 skills icons', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 2)
    })
    const pictures = page.locator('#logos div')
    await expect(pictures).toHaveCount(12)
  })

  test('the 12 learned icons should have moved to the currenlt learning section', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 3)
    })
    await page.waitForTimeout(3000)

    for (let i = 0; i < 12; i++) {
      const picture = page.locator(`.current-logo-${i} .moving-logo-container-${i}`)
      await expect(picture).toBeVisible()
    }
  })
})
