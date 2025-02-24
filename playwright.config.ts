import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000, // Set global timeout
    workers:1,
    use: {
        browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
        headless: false, // Set to true for headless execution
        screenshot: 'on', // Capture screenshots on failure
        video: 'retain-on-failure', // Capture video on failure
        trace: 'on-first-retry', // Capture tracing data
    },
    reporter: [['list'], ['html', { open: 'never' }]], // Set reporters
});