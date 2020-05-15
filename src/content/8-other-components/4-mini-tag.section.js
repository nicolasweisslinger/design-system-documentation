import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BZAlgOzQFQIYHMAdDAAhMgBsIAnAXkJABcBPABwgFoIMOpdqA1hwAWafMIbEyAI1xgB+ahACuGKAGEIVOg1nzFKtR2kcAjJNIk0kDPRAB3flgxEQxAHxSSASQDkAWxJcEnQsPHwAQmIkAHpQnAJPDBAAXyA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">MiniTag</h1>
    <p>The <code>MiniTag</code> component is a smaller version of the Tag component, with an extra icon.</p>
    <p>The <code>color</code> property sets the color of the text.</p>
    <p>The <code>backgroundColor</code> property sets the color of the background.</p>
    <p>The <code>icon</code> property sets the icon</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<MiniTag
  color
  backgroundColor
  icon
>
  {/* Text goes here */}
</MiniTag>
`
},
{
  code: `color, backgroundColor: ColorToken`
},
{
  code: `icon: IconToken16Px`
},
]

export const anchorId = "mini-tag"
