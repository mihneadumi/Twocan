import { test, expect } from '@playwright/test'

// without comments
test('delete a post', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  let posts = await page.$$('#postFooter')
  const initialPostCount = posts.length

  const firstPost = await page.$('#postFooter')
  await firstPost?.hover()

  const deleteIcon = await page.$('#deleteIcon')

  expect(deleteIcon).not.toBeNull()

  await deleteIcon?.click()

  const deleteButton = await page.$('.delete')

  expect(deleteButton).not.toBeNull()

  await deleteButton?.click()

  await expect(page).toHaveURL('http://localhost:5173/posts')

  posts = await page.$$('#postFooter')
  const newPostCount = posts.length

  expect(newPostCount).toBe(initialPostCount - 1)
})
