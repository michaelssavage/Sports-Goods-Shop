# Sports Goods Shop

Project is live at: https://max-sports-goods-shop.netlify.app/

## Local Set Up

Create an `.env` file in the base of the project and fill the following fields to access Firebase db:

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGE_SENDER_ID=
VITE_APP_ID=
```

Then simply run `npm i` and `npm run dev` on your machine.

## Description

You want to run ads on Facebook to get people's awareness for your online store for sports equipment. Create an internal tool that helps you create and manage your sport good ads for Facebook. You should be able to create multiple posts for a specific product.

This CRUD tool should enable you to:

1. list all your Facebook ads
2. create new ones
3. edit ads
4. delete existing ones

Structure of Ad:

- Product Id: `string`
- Array of Pictures: `Array<string>`
- Description: `string`
- Headline: `string`
- CTA: `string`

## Requirements

**Index View**: List products and include all information. Product is clickable and opens **Read** view of ads.

**Read View**: Show ads for the selected product and make it look like a Facebook ad. Multiple images can be viewed by clicking the arrows on the iamge. You have the option to create a new ad or edit an existing one.

**Create View**: Create a new ad for a given product. Adding a description, CTA, headline, and multiple image URLs.

**Update View**: Edit the existing ads. Pre-fill fields with the current ad information.

**Delete View**: Modal prompt that asks for confirmation before deleting an ad. Shows notifications on success.

**Navigation View**: Navbar with react-router-dom
