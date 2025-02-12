# About

This is a simple website that uses the parent component ('App.jsx') to send a list of objects containing product information to be processed and rendered through two different child components ('ProductList.jsx' and 'ProductItem.jsx'). Basic styling is done with CSS.

## ProductList
The main function of this component is to map through the list provided to it from 'App.jsx'. It sends each individual product (in the form of an object) as a prop to 'ProductItem.jsx' to then be rendered onto the website.

## ProductItem
This component represents an individual product by outlining its structure using the product's attributes. 



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
