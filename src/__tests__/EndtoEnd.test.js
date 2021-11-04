import puppeteer from 'puppeteer';



describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250,
            // ignoreDefaultArgs: ['--disable-extensions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        let selector = '#toggle-details';
        await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        let selector = '#toggle-details';
        await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });
});