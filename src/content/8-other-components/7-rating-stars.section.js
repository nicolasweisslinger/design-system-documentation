import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AlAhgFwJYDsDmAyhmgE4DOABAG5oA2ArjALzAAsAdAOwC+FA9AD4AOjhDcgA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">RatingStars</h1>
    <p>The <code>value</code> property sets the score.</p>
    <p>The <code>readOnly</code> property disables interaction</p>
    <p>The <code>error</code> property displays an error</p>
    <p>The <code>warning</code> property displays a warning</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<RatingStars
  value
  readOnly
  error
  warning
/>
`
  },
  {
    code: `value: 0..5`
  },
  {
    code: `error, warning: String`
  },
  {
    code: `readOnly: Boolean`
  },
]

export const anchorId = "rating-stars"
