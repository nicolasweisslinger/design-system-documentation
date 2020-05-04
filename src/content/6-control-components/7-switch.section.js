import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BlA7gSwC5gBYAIB6APhAF8g";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Switch</h1>
    <p>The classic switch button</p>
    <p>The <code>disabled</code> property disables the switch</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Switch
  disabled
/>
`
},
{
  code: `disabled: Boolean`
},
]

export const anchorId = "switch"
