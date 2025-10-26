# Automation Exercise E-commerce Website - Test Plan

## Application Overview

Automation Exercise is an e-commerce platform that provides functionality for:
- User Authentication (Registration/Login)
- Product Browsing and Shopping
- Cart Management
- Checkout Process
- User Account Management

## Test Scenarios

### 1. User Registration & Authentication

#### 1.1 New User Registration
**Steps:**
1. Navigate to homepage
2. Click on 'Signup / Login' link
3. Fill in registration form with:
   - Name
   - Email address (unique)
   - Password
4. Click 'Signup' button

**Expected Results:**
- Account is created successfully
- User is redirected to dashboard
- Success message is displayed

#### 1.2 User Login
**Steps:**
1. Navigate to homepage
2. Click on 'Signup / Login' link
3. Enter registered email and password
4. Click 'Login' button

**Expected Results:**
- User is successfully logged in
- Redirected to dashboard
- User name is visible in top navigation

### 2. Product Browsing

#### 2.1 Category Navigation
**Steps:**
1. Navigate to homepage
2. Click on category links (Women, Men, Kids)
3. Verify product listing for each category

**Expected Results:**
- Products are filtered by selected category
- Correct products are displayed for each category
- Category selection is highlighted

#### 2.2 Brand Filtering
**Steps:**
1. Navigate to 'Products' page
2. Click on different brand names
3. Verify product listing updates

**Expected Results:**
- Products are filtered by selected brand
- Correct count of products shown
- Brand selection is highlighted

### 3. Shopping Cart

#### 3.1 Add Product to Cart
**Steps:**
1. Navigate to product listing
2. Click 'Add to cart' on a product
3. Verify cart popup
4. Click 'View Cart'

**Expected Results:**
- Product added to cart successfully
- Cart count updates in navigation
- Correct product details shown in cart

#### 3.2 Cart Management
**Steps:**
1. Add multiple products to cart
2. Update quantities
3. Remove items
4. Verify cart total

**Expected Results:**
- Quantities update correctly
- Removed items disappear from cart
- Total price updates accurately

### 4. Checkout Process

#### 4.1 Guest Checkout
**Steps:**
1. Add items to cart
2. Proceed to checkout
3. Fill in delivery details
4. Select payment method
5. Complete order

**Expected Results:**
- Order processes successfully
- Order confirmation displayed
- Email confirmation received

#### 4.2 Registered User Checkout
**Steps:**
1. Login to account
2. Add items to cart
3. Proceed to checkout
4. Verify pre-filled details
5. Complete order

**Expected Results:**
- Saved address details appear
- Order processes successfully
- Order visible in account history

### 5. User Account Management

#### 5.1 Update Profile
**Steps:**
1. Login to account
2. Navigate to profile settings
3. Update personal information
4. Save changes

**Expected Results:**
- Information updates successfully
- Changes persist after logout/login
- Success message displayed

#### 5.2 View Order History
**Steps:**
1. Login to account
2. Navigate to order history
3. View past orders

**Expected Results:**
- All past orders listed
- Correct order details displayed
- Order status shown accurately

## Test Environment Requirements

1. **Browsers to test:**
   - Chrome
   - Firefox
   - Safari

2. **Devices to test:**
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Test Data Requirements:**
   - Multiple test user accounts
   - Various product categories
   - Different payment methods

## Test Execution Notes

1. Each test should be performed with clean browser data
2. Tests should be run on all specified browsers
3. All form validations should be verified
4. Error handling should be tested for each scenario
5. Performance should be monitored during testing

## Risk Analysis

1. **High Risk Areas:**
   - Payment processing
   - User data security
   - Order fulfillment
   - Session management

2. **Medium Risk Areas:**
   - Product catalog updates
   - Cart calculations
   - User authentication

3. **Low Risk Areas:**
   - Static content
   - Product images
   - Footer links