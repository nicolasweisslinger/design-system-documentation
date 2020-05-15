import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AFCAbAngWRgZzwEMBzGAAgBdMAHGAXgB0QA3Q9ASyiYD4GA7MmQCSAcgC2ZQmTRZcBEjAB0ZAJoQArmTCEBYABY7SZMZko0l-JAHoZOfEVK8+IAL5A"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">PolyMessage</h1>
    <p>The <code>PolyMessage</code> highlights medium to long pieces of important information.</p>
    <p>The <code>type</code> property sets the type of message you are conveying.</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<PolyMessage
  type
>
  {/* Text goes here */}
</PolyMessage>
`
},
{
  code: `type: "info" | "valid" | "danger" | "warning"`
},
]

export const anchorId = "poly-message"
