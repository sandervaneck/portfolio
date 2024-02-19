This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Portfolio Template.

This is a full-stack TypeScript portfolio template using:

Frontend:
Next.js
[react-stripe-js](https://github.com/stripe/react-stripe-js) for [Checkout](https://stripe.com/checkout)
Backend
Next.js [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)
[stripe-node with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)

## Demo

* [Live Demo](https://portfolio-teal-eight-63.vercel.app/)

## Manual

1. Fork the project or open with your Github Desktop

2. Install the dependencies

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

3. Adjust it to your personal portfolio

## Adjust it to your Personal CV

3.1 Edit your name, position, purposes, contact info and projects in [app/components/constants/Products.tsx](path/to/Products.tsx) to your ones
5.2 Update the images in [app/public](path/to/public) to your images and update the [app/favoicon.icon](path/to/favoicon.ico) to your website logo
5.3 Update the company info in [app/store/components/constants/DescribeContent.tsx](path/to/DescribeContent.tsx) to your project descriptions
