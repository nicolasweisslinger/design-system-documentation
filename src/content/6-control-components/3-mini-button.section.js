import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BZAlgOzQIQK4Bd8IMACSAGwgCcBeAHRAAcq0BbAQyoE8BaDajuQYk0kDPRAAvdowYA+OqRIBJAOSsS7Eq0xoARgSIZFSAPToseQsQUYQAXyA";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">MiniButton</h1>
    <p>A smaller version of the button component, with an icon.</p>
    <p>The <code>color</code> property sets the color of the button.</p>
    <p>The <code>icon</code> property sets the icon. Must be a 24px icon.</p>
    <p>The <code>disabled</code> property disables the MiniButton</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<MiniButton
  color
  icon
  disabled
>
  {/* Text goes here */}
</MiniButton>
`
},
{
  code: `icon {
  // Any 24px icon token
}`
},
{
  code: `color {
  // Any color token
}`
},
{
  code: `disabled: Boolean`
},
]

export const anchorId = "mini-button"
