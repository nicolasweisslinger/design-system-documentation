import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPABABwIZSgEsA7AcwF4AdEAG1wCdSZqA+S4zTJAZQBdcwAa0wBnPGBhUQAWxhEArtOqYAFhHqEAXhGL8aAQRqFSxKSN70YvMCtbtOnVBnsPOeAiQrU6jZiBeuAEbqsPQASviE8iJSPkzUAQ4iKvgQAO5mKVDpALQqxio5MDQwAG64vIQ6OdlpxAkcDmyNrjz8QqLiktSyCkogqupaOnqGxqbeMABmvHYtrlx8AsJiAt0gxDp+gxraurgGRiax07MgzQsLSADypTD0RsQwmJA06lK8AJ7YEDnVRypeDk3mlWNxpAcaJgSEQwBUqsQkAB6W73R4wC6XBxIAAqhF4JQAEgUWDj8iJoRTCNIfvR+LpkXiCTBiaQVJjLsilkIOVc0FBPgA5dQQqGvd7UL4-P7EYEFIG9KL9XmXACSvAA5BSDmlcJ9tZhSBBoNDYLhMLwIJhos9zQDePcXhA3vRMAAKRWKACUmB0mDeZAtMHQs3ml0CbyEIgAdJh1ZgpjBihTAlYHfQADSYXDEKDQ3hO3T0XDmClpYpQtL4lTZi34krRxKtJH8oUig4q7EAYVw2EqOmF9FFTpdH2+v3+8uB6TmWIc1w4vBUzwgS8dKVzWdVGukmEskM+mE2BaXFWhNPU9N4jbD2KRPb7CMHos7XPagl5yLQ6E-36bOHwIgyFiBh4n8W9gnoUIIgUGJvFAvx-2SVIMmoZDajyAoihKcp+1lWp6nA8NllIegIHkXMu2dCUQECEiyIoqAcl1ehiE8BpXFfB88NZGtxXoKQfhoT5mIYNiyFnLFVUwbJiA1E9cEEZ55GwTBpHkGxOjWLNAnkAtt13bBLF4L5z1pK8LWNf9kW4hFeM-FsMExN9lmaL8nPYEAAF8gA"

export const documentation =
  <>
    <h1 className="title is-1 is-spaced">Text Components</h1>
    <p>Every piece of text is rendered by a text component. Some text components have two weight variations : "Normal" and "High".</p>
    <p>Try using a combination of these components and colors that maximizes the hierarchical contrast of your interface.</p>
    <br />
    <p>The <code>color</code> prop sets the color of the text.</p>
    <p>The <code>textAlign</code> prop sets the horizontal alignement of the text.</p>
    <p>The <code>ellipsis</code> prop adds a "..." at the end of the first line of text if it ever it gets cropped.</p>
    <p>The <code>hyphenate</code> prop enables word breaks if words are too long.</p><br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play text combination</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<TextComponent
  color
  textAlign
  ellipsis
  hyphenate
>
  {/* Text goes here */}
</TextComponent>`
  },
  {
    code: `color: ColorToken
// defaults to typo-on-light-high`
  },
  {
    code: `textAlign: "left" | "center" | "right"
// defaults to left`
  },
  {
    code: `ellipsis, hyphenate: Boolean
// defaults to false`
  },
]
