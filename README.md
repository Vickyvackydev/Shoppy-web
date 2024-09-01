This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Clone An Existing Project

you can this project by running:

```bash
git clone 'project-respositoty'

# and doing

npm install

#to install all the depencies
```

## Project Overview

An e-commerce prototype crud App built with Nextjs, typescript and tailwind css.

`Data Fetching`: All data are being fetched from localstorage.

`Image Hosting`: Due to the asynchronous data state, images were needed to be hosted in a cloud stage, to get url of the images for it to be displayed on the browser.

`Custom Hook`: Data are being fetched from localstorage with a custom hook created to fetch data without rewriting a useEffect state.

`CRUD FUNCTIONs`: Add products, Edit product, Delete product, and product listings to display all products on the web page.

`Dynamic routes`: Product details are viewed in another page, with a dynamic route, so as searching for a product by it name.

## Design Decision

This project was built without any figma, base on my experience building web apps with ReactJs and Nextjs as it library, this site was generated.

## Optimization

Custom hook to render data faster to all pages, without needing to render data with [`useEffect`] after data component mounts

## SEO

Nextjs comes with it's own seo management, making it fast an easy to search online, seo was handled in with Nextjs meta data in the layout component.

## Bugs

Data might not reload on time due to data being fetched from localstorage.
Cloudinary tend to conflict images uploaded but doesn.t happen always. For that a button to reload products/browser was added.

## Server-Side Rendering Issue

Nextjs is a server side rendering frame-work which works most on the server, which means data are needed to be fetched from remote base, but due to the condtion of the task, localStorage was used which only works on localhost:3000 but not after the project is being hosted, so if you want to test the crud functionalities kindly do this through localhost. Ways of launching the app is detailed above.

## Stacks Used

`Typescript`: For types, params and props and easier ways to detect bugs.
`TailwindCss`: for styling faster in each components that is rendered.
`Cloudinary`: a cloud storage, for storing images or videos to be used on a web app, why this was required is because you can noy upload and display an image on a browser without a `secure_url`. So for this a cloud storage was reqired for only the image, to be displayed with a secured url

## Note

When you are updating an item, kindly change the item image for better experience, for it is made necessary than other fields on the ui and why? , because when a product is selected and wanting to update and pass to the cloudinary server, and handleChange of image is not done which cloudinary will read an empty file while doing an update.

## Logics In Projects

`Filtering Function`: a filtering function is done in the [`app/products`] page, showing filter for a product or products listed.

`Search functionality`: a search function was added to improve user experience, such that when you search for a product on the homePage [`localhost:3000`] it takes you another page [`app/search-results/[query]`] displaying the search results if there is one.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
