import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Tests', () => {
  test('Add Product to Cart', async ({ page }) => {
    // Navigate to homepage
    await page.goto('https://automationexercise.com');

    // Add first product (Blue Top) to cart
    await page.getByText('Add to cart').first().click();

    // Click Continue Shopping button
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    // Add second product (Men Tshirt) to cart 
    await page.getByText('Add to cart').nth(2).click();

    // View cart
    await page.getByRole('link', { name: 'View Cart' }).click();

    // Verify both products are in cart
    await expect(page.getByRole('row').filter({ hasText: 'Blue Top' })).toBeVisible();
    await expect(page.getByRole('row').filter({ hasText: 'Men Tshirt' })).toBeVisible();

    // Verify prices
    await expect(page.getByText('Rs. 500').first()).toBeVisible();
    await expect(page.getByText('Rs. 400').first()).toBeVisible();
  });
});