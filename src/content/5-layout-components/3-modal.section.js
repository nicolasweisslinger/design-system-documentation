import React from 'react';
const modalExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DriQAFTIzIwAJXXkfAEkAckdcM3kYXGcKXGMyGGUkAHpg0JgIvT9sPLR0UpwkAFloIno5eRVS-FQMVJdsNw8RbxBW-ACAZTMiMABrOWIwGB7PftxmpjIALysx+gBBel1uulnsMxgmOkGhgIKjADkeZ3ofMMN6CABCPKuYW6Z786GkAAKzCIlCYRAIUX8FzaaCgAE9vvdcJAXkwJGY4QQIJorJpdnozJp3AszlDofg4glkkwUmYIJ0JrTkp10plsrgiLhdmZClyYKJRMj6MIeScPAA6XDRZFEeyycn4ciiAiMOG4CgAM3pAApdoypfFcLYKJRcCsCUsxQBKAA0uE4IqlMrwDVE9MgRyI6QoxzBYAsxhSojMwg1GrtepSnK1P1eZIu5WgCLuDT+bVyQLBoPBkPlAVyo3GE0Gicq1VydSgqZwIAAvkA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Modal</h1>
    <p>The modal component is a fully responsive container for displaying components over the main view.</p>
    <p>The <code>show</code> property sets the visibility of the modal (should be set to true when designing)</p>
<p>The <code>onHide</code> property is a function which, when defined, displays a cross to close the modal. You can simply set it to <code>{`() => {}`}</code></p>
    <p>The <code>header</code> property is a component you can display in the top section of the modal, over the scroll view.</p>
    <p>The <code>fullHeight</code> property makes the height maximal. Use when the content of your modal has a variable size (e.g conditional form) to keep the modal from "skipping".</p>
    <p>The <code>fullWidth</code> property makes the width maximal. Use when the content of your modal does not have a proper width.</p>
    <p>The modal component manages its size, position, and z-index relative to the viewport, not to its parent container. Where it appears in your code doesn't make much of a difference, as it will always appear the same way. However, it makes your code more readable to put it at the end, as a "side" component.</p>
    <a href={modalExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
    <br /><br /><br />
    <article className="message is-medium is-warning">
      <div className="message-body">
        The modal component should only contain one child (usually a box).
      </div>
    </article>
    <article className="message is-medium is-info">
      <div className="message-body">
        Whenever your UI becomes to complex, or cluttered, using a modal to fragment you interface is a good escape hatch.
      </div>
    </article>
  </>


export const codeSnippets = [
  {
    code: `<Modal
  show
  header
  fullHeight
  fullWidth
  onHide
>
  {/* Child goes here */}
</Modal>
`
  },
  {
    code: `show, fullHeight, fullWidth: Boolean
//All default to false`
  },
  {
    code: `header: Component
//Defaults to undefined`
  }
]

export const anchorId = "modal"
