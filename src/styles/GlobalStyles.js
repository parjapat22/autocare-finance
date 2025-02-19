import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --max-width-desktop: 115rem;
  --max-width-tablet: 90rem;
  --max-width-mobile: 50rem;

  /* background colors */
  /* neutral 500 */
  --color-body: #737373;
  /* neutral 50 */
  --color-main: #fafafa;

  /* custom indigo similar to blue 700*/
  --color-primary: #4d60a5;
  /* indigo 500 */
  --color-secondary: #6366f1;
  /* indigo 300 */
  --color-card3: #a5b4fc;
  /* indigo 200 */
  --color-card2: #c7d2fe;
  /* indigo 100 */
  --color-card1: #e0e7ff;

  /* text colors */
  /* neutral 800 */
  --color-text1: #262626;
  /* neutral 100 */
  --color-text2: #f5f5f5;
  /* green 500 */
  --color-green: #22c55e;
  /* red 500 */
  --color-red: #ef4444;

  /* icon colors */
  /* same as primary color */
  --color-icon1: #4d60a5;
  /* same as card3 color */
  --color-icon2: #a5b4fc;
  /* same as text2 color */
  --color-icon3: #f5f5f5;

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
  background-color: var(--color-body);
  color: var(--color-text1);
  width: 100%;
  margin-inline: auto;
  font-family: "Times New Roman", sans-serif, Helvetica;
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.3;
}

main {
  background-color: var(--color-main);
  margin-inline: auto;
  padding: 0rem 5rem;
}

.container {
  max-width: var(--max-width-desktop);
  margin-inline: auto;
  padding: 5rem 0rem;
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
  background-color: var(--color-card1);
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
  color: var(--color-card1);
}

img {
  width: 100%;
  display: block;
  object-fit: fill;
}
`;

export default GlobalStyles;
