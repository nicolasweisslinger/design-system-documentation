import React from 'react';

export const documentation =
  <>
    <h1 className="title is-1 is-spaced">Layout Components</h1>
    <p>Layout components are made to position and assemble components. They are essentially based on the <a rel="noopener noreferrer" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"> Flexbox layout system.</a></p>
  </>


export const codeSnippets = [{
  code: `<LayoutComponent>
  <ChildComponent1 />
  <ChildComponent2 />
  <ChildComponent3 />
</LayoutComponent>
// The child components are being
// laid out by the layout component
// wrapped around them.
`
}]


