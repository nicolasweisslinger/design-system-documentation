import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BJSA7ABJANhATgLwA6IADvgJYC2AhvgJ4C06BdOpmAzpQF4wkQAJgAsndLWoDSvWmU4B6AHwgAvkA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Icon</h1>
    <p>The <code>Icon</code> component displays an icon. You must make sure the <code>name</code> matches an icon of the <code>size</code> you have specified.</p>
    <p>The <code>color</code> property sets the color of the text.</p>
    <p>The <code>size</code> property specifies the size of the icon.</p>
    <p>The <code>name</code> property specifies the icon us wish to display.</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<Icon
  color
  size
  name
/>
`
  },
  {
    code: `color: ColorToken`
  },
  {
    code: `size: "16" | "24" | "32" | "56"`
  },
  {
    code: `name: IconToken`
  },
]

export const anchorId = "tag"
