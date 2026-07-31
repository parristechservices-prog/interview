const { test, expect } = require('@playwright/test');

test('interview dashboard loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Interview Mission Control').first()).toBeVisible();
});
