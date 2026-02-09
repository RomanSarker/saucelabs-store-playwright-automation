# Sauce Demo Automation Project

This project contains automated end-to-end tests for the [Sauce Demo](https://www.saucedemo.com/) website. The tests are built using **Playwright** and **JavaScript** following the **Page Object Model (POM)** pattern.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```

## Running the Tests

The tests are configured to run sequentially (1 worker) to ensure stability during the "Reset App State" operations.

### Run All Tests
To run all test cases (Q1, Q2, and Q3):
```bash
npx playwright test
```

### Run Individual Test Cases
- **Q1 (Locked Out User)**:
  ```bash
  npx playwright test tests/Q1_locked_out_user.spec.js
  ```
- **Q2 (Standard User Journey)**:
  ```bash
  npx playwright test tests/Q2_standard_user_journey.spec.js
  ```
- **Q3 (Performance Glitch User)**:
  ```bash
  npx playwright test tests/Q3_performance_glitch_user.spec.js
  ```

## Generating Reports

The project is configured with **Allure Report** for detailed test results.

1. **Generate Report**:
   ```bash
   npm run test:allure
   
   ```


Alternatively, you can view the standard Playwright report:
```bash
npx playwright show-report
```

## Project Organization

- `pages/`and `actions/`: Contains Page Object classes for Login, Inventory, Menu, and Checkout pages.
- `tests/`: Contains the test specification files (Q1, Q2, Q3).
- `utilis/`: Contains test data and environment configurations.
- `playwright.config.js`: Configuration for cross-browser testing and Allure reporter integration.
