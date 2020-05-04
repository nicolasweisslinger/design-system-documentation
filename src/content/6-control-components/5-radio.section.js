import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AlAhlAlhABAGzQCMY8BeAHRAEkByAWxzRwCcNsdCBXAF24gDtKOAM6dCAFRgAPbhRAAhHjio4oAmtxx00AaxgiY-YfoFaAnjggB3fgDohAegB8IAL5A";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Radio</h1>
    <p>The classic radio button.</p>
    <p>The <code>label</code> property sets the label of the checkbox.</p>
    <p>The <code>subText</code> property sets the secondary text under the label of the checkbox.</p>
    <p>The <code>error</code> property displays an error state.</p>
    <p>The <code>warning</code> property displays a warning state.</p>
    <p>The <code>disabled</code> property disables the checkbox.</p>
    <article className="message is-medium is-warning">
      <div className="message-body">
        <code>Radio</code> components should always be used inside a <code>RadioGroup</code> component.
      </div>
    </article>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Radio
  label
  subText
  error
  warning
  disabled
/>
`
},
{
  code: `label, subText: String`
},
{
  code: `error, warning, disabled: Boolean`
},
]

export const anchorId = "radio"
