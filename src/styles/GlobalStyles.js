import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --max-width-desktop: 115rem;
  --max-width-tablet: 90rem;
  --max-width-mobile: 50rem;

  /* colors set */
  /* custom indigo similar to blue 700*/
  --color-primary: #4d60a5;
  --color-indigo-900: #312E81;
  --color-indigo-800: #3730a3;
  --color-indigo-700: #4338ca;
  --color-indigo-600: #4f46e5;
  --color-indigo-500: #6366f1;
  --color-indigo-400: #818cf8;
  --color-indigo-300: #a5b4fc;
  --color-indigo-200: #c7d2fe;
  --color-indigo-100: #e0e7ff;
  --color-indigo-50: #eef2ff;

  --color-neutral-900: #171717;
  --color-neutral-800: #262626;
  --color-neutral-700: #404040;
  --color-neutral-600: #525252;
  --color-neutral-500: #737373;
  --color-neutral-400: #a3a3a3;
  --color-neutral-300: #d4d4d4;
  --color-neutral-200: #e5e5e5;
  --color-neutral-100: #f5f5f5;
  --color-neutral-50: #fafafa;

  --color-green-500: #22c55e;

  --color-red-500: #ef4444;

  --transition: all 0.3s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  /* browser's default 16px = 1 rem = 100% */
  /* after override, 10px = 0.625 rem = 62.5% */
  font-size: 62.5%;
}

body {
  background-color: var(--color-neutral-500);
  color: var(--color-neutral-800);
  width: 100%;
  margin-inline: auto;
  font-family: "Times New Roman", sans-serif, Helvetica;
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.3;
}

main {
  background-color: var(--color-neutral-50);
  margin-inline: auto;
}

.container {
  max-width: var(--max-width-desktop);
  margin-inline: auto;
  padding: 5rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
}

h3 {
  font-size: 2.5rem;
  font-weight: bold;
}

h4 {
  font-size: 2rem;
  font-weight: bold;
}

p {
  font-size: 1.8rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.btn {
  background-color: var(--color-indigo-100);
  color: var(--color-primary);
  margin-inline: auto;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  transition: var(--transition);
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-primary);
  color: var(--color-indigo-100);
}

img {
  width: 100%;
  display: block;
  object-fit: fill;
}
`;

export default GlobalStyles;
