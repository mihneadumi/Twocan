import { test, expect } from '@playwright/test'

test('add a new post', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // get all posts and their number
  let posts = await page.$$('#postFooter')
  const initialPostCount = posts.length

  // look for button with id addBtn
  const button = await page.$('#addBtn')

  // expect the button to exist
  expect(button).not.toBeNull()

  // click the button
  await button!.click()

  //expect the url to be http://localhost:5173/posts/create
  await expect(page).toHaveURL('http://localhost:5173/posts/create')

  // find title input
  const titleInput = await page.$('input')

  // expect the title input to exist
  expect(titleInput).not.toBeNull()

  // fill in the title input
  await titleInput!.fill('test post')

  // find create button
  const createButton = await page.$('.create')

  // expect the create button to exist
  expect(createButton).not.toBeNull()

  // click the create button
  await createButton!.click()

  // expect the url to be /http://localhost:5173/
  await expect(page).toHaveURL('http://localhost:5173/')

  // get all posts and their number
  posts = await page.$$('#postFooter')
  const newPostCount = posts.length

  // expect the new post count to be 1 more than the initial post count
  expect(newPostCount).toBe(initialPostCount + 1)
})
