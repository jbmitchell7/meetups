import puppeteer from 'puppeteer';
import { mockData } from '../mock-data';

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

describe('filter events by city', () => {
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
        await page.waitForSelector('.CitySearch');
        await page.waitForSelector('.event-list');
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
        // const eventList = await page.$('.event-list');
        // expect(eventList).toHaveLength(mockData.length);
    });

    test('User should see a list of suggestions when they search for a city', async () => {
        // let selector = '#toggle-details';
        // await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        // const eventDetails = await page.$('.event .event-details');
        // expect(eventDetails).toBeDefined();
    });

    test('User can select a city from the suggested list', async () => {
        // let selector = '#toggle-details';
        // await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        // const eventDetails = await page.$('.event .event-details');
        // expect(eventDetails).toBeNull();
    });
})