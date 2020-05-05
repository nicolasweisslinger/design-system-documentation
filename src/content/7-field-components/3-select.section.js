import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhArgFwxAdgAkgBsIAnAXgB0QAHEgSwFsBDEgTwFodTnCqA+ABIxCxJAHp0WXHxABfIA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Select</h1>
    <p>The select componenent lets the user make a selection from a list of strings.</p>
    <p>The <code>label</code> property sets the label of the input.</p>
    <p>The <code>subText</code> property displays a secondary text under the input.</p>
    <p>The <code>placeholder</code> property sets the placeholder.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays an warning.</p>
    <p>The <code>multi</code> property lets the user make multiple selections.</p>
    <p>The <code>options</code> property sets the possible selection values.</p>
    <p>The <code>value</code> property sets the selection</p>
    <p>The <code>searchable</code> property lets the user search a value.</p>
    <p>The <code>searchPlaceholder</code> property displays a placeholder in the search input.</p>
    <p>The <code>searchNoResultsText</code> property displays an empty state if no results were found.</p>
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
    code: `<Select
  label
  subText
  placeholder
  error
  warning
  multi
  options
  value
  searchable
  searchPlaceholder
  searchNoResultsText
  disabled
/>
`
  },
  {
    code: `label, subText, placeholder, error,
warning, value, searchPlaceholder,
searchNoResultsText: String`
  },
  {
    code: `multi, searchable, disabled: Boolean`
  },
  {
    code: `options: {value: String, label: String}[]`
  },
]

export const anchorId = "button"
