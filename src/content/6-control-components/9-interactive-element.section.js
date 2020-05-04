import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BJAdgFxgJwIZgwEsA3GAUQBsYBbGTAAgjQGELCwBrAXmAAoBKelwB89SGgDOEKgDoKEAOa8AOiBT0A7rgli2nGFACEq-gF9hytPXpIACtICeAWRgSJuBTHoYHABxhcqoRoAGYQqhZW1vTqWjrUuLC67By4AEZU9GkO3gAWXuhYeAQk5FS0DJDUvkx0GJbWSAD09hTOru6ekc2FOPhEpJQ0dZEgpkA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">InteractiveElement</h1>
    <p>The <code>InteractiveElement</code> component is similar to the <code>Link</code> component, but instead of handling links, it handles "actions" within the page, such as setting a state.</p>
    <p>The <code>colored</code> property enables text color styling.</p>
    <p>The <code>bold</code> property enables text weight styling.</p>
    <p>The <code>onClick</code> property specifies the click function.</p>
    <p>The <code>disabled</code> property disables the link.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Link
  colored
  bold
  onClick
  disabled
/>
`
},
{
  code: `colored, bold, disabled: Boolean
// colored defaults to false
// bold defaults to false
// disabled defaults to false`
},
{
  code: `onClick: Function
// Defaults to undefined`
},
]

export const anchorId = "interactive-element"
