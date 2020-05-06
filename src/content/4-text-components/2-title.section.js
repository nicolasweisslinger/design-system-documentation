import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVAlgFwDYwHIQCcBbAQywAJItCBeAHRAwE8AHCAWggDt2s0BzABYZ2ggYIYA+ABIws1AIRIA9Omx5CpLJLpcQAXyA"

export const documentation =
  <>
    <h1 className="title is-3">Title</h1>
    <p>Essential to displaying short and important info. Usually at the top of a page.</p>
    <p>Two components : <code>{`<TitleNormal />`}</code>, <code>{`<TitleHigh />`}</code></p><br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>

export const anchorId = "text-components"
