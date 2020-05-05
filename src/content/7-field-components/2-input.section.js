import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhArgFwxAdgAkgBsIAnAXgB0QAHEgSwFsBDEgTwFodTnCqA+ABIxCxJAHp0WXHxABfIA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Input</h1>
    <p>The input componenent lets the user enter a short string on the interface.</p>
    <p>The <code>label</code> property sets the label of the input.</p>
    <p>The <code>subText</code> property displays a secondary text under the input.</p>
    <p>The <code>placeholder</code> property sets the placeholder.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays an warning.</p>
    <p>The <code>disabled</code> property disables the input.</p>
    <br />
    <article className="message is-medium is-warning">
      <div className="message-body">
        <code>error</code> and <code>warning</code> override <code>subText</code>.
      </div>
    </article>
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Input
  label
  subText
  error
  warning
  disabled
/>
`
},
{
  code: `label, subText, placeholder, error,
warning: String`
},
{
  code: `disabled: Boolean`
},
]

export const anchorId = "button"
