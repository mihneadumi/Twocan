import { test, expect } from '@playwright/test'

// without comments
test('update a post', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const firstPost = await page.$('#postFooter')
  await firstPost?.hover()

  const editIcon = await page.$('#editIcon')

  expect(editIcon).not.toBeNull()

  await editIcon?.click()

  const titleInput = await page.$('input')

  expect(titleInput).not.toBeNull()

  await titleInput!.fill('updated post')

  const backButton = await page.$('#backButton')

  expect(backButton).not.toBeNull()

  await backButton?.click()

  await expect(page).toHaveURL('http://localhost:5173/')
})
