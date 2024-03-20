import { test, expect } from '@playwright/test'

test('has correct title and header', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Twocan/)

  await expect(page.getByText('Posts for you')).toBeVisible()
})
