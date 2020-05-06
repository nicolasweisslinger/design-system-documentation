import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVAhgcwASQDYQCcBeAHRABcBPABwgFoIA7OqNAgazoAsBLDLslgBGaMOwwEIAV0ZQAwhHzEyIsROmy6QugEYyAPhKMsWAJIByALZY0WdBgCERpAHp7hxiAC+QA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Tag</h1>
    <p>The <code>Tag</code> component highlights short pieces of important information. The info should not exceed 2 words.</p>
    <p>The <code>color</code> property sets the color of the text.</p>
    <p>The <code>backgroundColor</code> property sets the color of the background.</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<Tag
  color
  backgroundColor
>
  {/* Text goes here */}
</Tag>
`
  },
  {
    code: `color, backgroundColor {
  // All color tokens
}`
  },
]

export const anchorId = "tag"
