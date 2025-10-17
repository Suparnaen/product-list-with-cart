# Frontend Mentor - Product list with cart

![Design preview for the Product list with cart coding challenge](./myImages/CartDesktopView.png)

[challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The challenge is to build out this product list project that includes a functional cart and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./myImages/CartDesktopView.png)

![](./myImages/CartMobileView.png)

### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/product-list-with-cart-using-reactjs-redux-toolkit-and-tailwindcss-8x-cEb9YyO)
- Live Site URL: [live site URL](https://ffproductlistwithcart.netlify.app/)

## My process

- I started with the utils >> constants.js file.
- Next created cartSlice.js file and imported it into the store.
- Then I structured the App.jsx with initial setup.
- Then focussed on designing the ProductGrid.jsx and ProductCard.jsx.
- Then focussed on designing the CartSidebar.jsx.
- Then focussed on designing the OrderConfirmationModal.jsx.
- Finally did the state management for cart using redux toolkit.
- All styling done using tailwind css so no separate styling files required.

### Built with

- React,Vite, React-Redux
- Tailwind CSS
- headlessUI
- reduxjs/toolkit

### What I learned

- Tailwind CSS usage and how to use it.
- Redux Toolkit usage and how to use it.
- Rendering image from assets folder dynamically.
- Conditionally rendering different elements style.
- Conditional rendering different components.

```

### Continued development

More practice with tailwind css and multiple reducers.

### Useful resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - This helped me to quickly understand different aspects of css.

## Author

- Website - [Suparnaen](https://www.your-site.com)
- Frontend Mentor - [@Suparnaen](https://www.frontendmentor.io/profile/yourusername)
```
