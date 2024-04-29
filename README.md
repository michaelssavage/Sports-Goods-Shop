# Sports Goods Shop

## Description

You want to run ads on Facebook to get people's awareness for your online store for sports equipment. Create an internal tool that helps you create and manage your sport good ads for Facebook.

You should be able to create multiple posts for a specific product.

This CRUD tool enables you to:

1. list all your Facebook ads
2. create new ones
3. edit ads
4. delete existing ones

Structure of Ad:

- Array of Pictures: `Array<string>`
- Description: `string`
- Headline: `string`
- CTA: `string`

## Requirements

**Index View**: List products and include all information. Product is clickable and opens **Read**.

**Read View**: Show ads for selected product and make it look like provided mock. You can create a new ad or editing existing one.

**Create View**: Create a new ad for a given product. Enable uploading images, adding a description, and change main headline.

**Update View**: Edit the existing ads.

**Delete View**: Modal prompt that asks for confirmation before deleting an ad. Show notifications on success.

**Navigation View**: Navbar with react-router

## Thoughts

1. Multiple ads can exist for 1 product. Just not complete duplicates I assume.
2. There are a lot to take note of so I created a Trello board to keep track of work.
3. The products are outlined in the json. Every product gets displayed from this 1 JSON file.
4. React Context is needed for going between create, read, and update views.
5. I could create an ad and store it in a database. Do I have time to setup postgresql and a backend?
6. If no ads exist for a product on the Read page, then show a notification.

## Changes

1. I added a productId to the shop_data array items.
2. I used Vite instead of Create React App as it's deprecated / not encouraged by React.
