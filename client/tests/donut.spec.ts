import {test, expect} from '@playwright/test';

const glazeResponse = [
    {
        id: 1,
        color: '#7b3f00',
        name: 'Chocolate',
        price: 8,
    },
    {
        id: 2,
        color: '#f57f8e',
        name: 'Strawberry',
        price: 9,
    },
    {
        id: 3,
        color: '#74a12e',
        name: 'Green Tea',
        price: 7,
    },
    {
        id: 4,
        color: '#f3f5ba',
        name: 'Lemon',
        price: 8,
    },
]

const baseResponse = [
    {
        id: 1,
        color: '#e5e0cb',
        name: 'Original',
    },
    {
        id: 2,
        color: '#9e8a5d',
        name: 'Chocolate',
    },
]

test.beforeEach(async ({page}) => {
    await page.goto('/')

    await page.route('*/**/glazes', async route => await route.fulfill({json: glazeResponse}))
    await page.route('*/**/bases', async route => await route.fulfill({json: baseResponse}))
})

test.describe('Donut', () => {
    test('Shows a page heading', async ({page}) => {
        await expect(page.getByRole('heading', {level: 1, name: /donuts/i})).toBeVisible()
    })

    test('Renders a dropdown menu for glazes', async ({page}) => {
        const glazeCombobox = await page.getByLabel(/glaze/i)
        await expect(glazeCombobox).toBeVisible()

        const options = [
            {name: /chocolate/i, value: '1'},
            {name: /strawberry/i, value: '2'},
            {name: /green tea/i, value: '3'},
            {name: /lemon/i, value: '4'},
        ]
        for (const opt of options) {
            const option = await glazeCombobox.getByText(opt.name)
            await expect(option).toBeEnabled()
            await expect(option).toHaveJSProperty('value', opt.value)
        }
    })

    test('Renders a dropdown menu for bases', async ({page}) => {
        const baseCombobox = await page.getByLabel(/base/i)
        await expect(baseCombobox).toBeVisible()

        const options = [
            {name: /original/i, value: '1'},
            {name: /chocolate/i, value: '2'},
        ]

        for (const opt of options) {
            const option = await baseCombobox.getByText(opt.name)
            await expect(option).toBeEnabled()
            await expect(option).toHaveJSProperty('value', opt.value)
        }
    })

    test('Displays a button to see details', async ({page}) => {
        await expect(page.getByRole('button', {name: /see donut detail/i})).toBeVisible()
    })
})

test.describe('Details', () => {
    test('Renders a details section', async ({page}) => {
        await expect(page.getByRole('heading', {level: 1, name: /details/i})).toBeVisible()
        await expect(page.getByRole('heading', {level: 2, name: /detail page/i})).toBeVisible()
    })

    test('Displays the correct base and glaze', async ({page}) => {
        await expect(page.getByText(/original base with strawberry topping/i)).toBeVisible()
        await expect(page.getByText(/price: 8/i)).toBeVisible()
    })

    test('Displays the correct base and glaze information based on input', async ({page}) => {
        await page.getByRole('combobox', {name: /glaze/i}).selectOption('Green Tea')
        await page.getByRole('combobox', {name: /base/i}).selectOption('Chocolate')

        await expect(page.getByText(/chocolate base with green tea topping/i)).toBeVisible()
        await expect(page.getByText(/price: 7/i)).toBeVisible()
    })
})