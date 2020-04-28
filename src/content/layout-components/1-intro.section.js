import React from 'react';

export const documentation =
  <>
    <h1 className="title is-1 is-spaced">Layout components</h1>
    <h2 className="subtitle is-4">Layout components are (almost) invisible components that allow you to assemble atomic components, such as buttons and inputs.</h2>
  </>


export const codeSnippets = [{
  code: `<LayoutComponent>
  <ChildComponent1 />
  <ChildComponent2 />
  <ChildComponent3 />
</LayoutComponent>
// Here, the child components are being
// laid out by the layout component
// wrapped around them.
`
}]


