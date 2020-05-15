import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhArgFwxAdgAkgBsIAnAXgB0QAHEgSwFsBDEgTwFodTnCqA+ABIxCxJAHp0WXHxABfIA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Button</h1>
    <p>The classic button component</p>
    <p>The <code>color</code> property sets the color of the button.</p>
    <p>The <code>reversed</code> property reverses fill and outline on the button.</p>
    <p>The <code>block</code> property will make the button take up 100% of the available width.</p>
    <p>The <code>loading</code> property will make the button have a "loading" aspect.</p>
    <p>The <code>disabled</code> property disables the button.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Button
  color
  reversed
  block
  loading
  disabled
>
  {/* Text goes here */}
</Button>
`
},
{
  code: `color: ColorToken`
},
{
  code: `reversed, block, loading, disabled: Boolean`
},
]

export const anchorId = "button"
