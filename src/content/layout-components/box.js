import React from 'react';
const boxExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DriQAFTIzIwAJXXkfAEkAckdcClwiXG50AEIkAHpg0JgIvT9sbLR0IpAAXyA"

export const Documentation =
  <>
    <h1 className="title is-3 is-spaced">Box</h1>
    <p className="subtitle is-5">The box component is the simplest layout component. It basically sets padding, margin, border radius, and shadow around its child.</p>
    <article className="message">
      <div className="message-body">
        The box component should only contain one child. That child can very well be another layout component.
      </div>
    </article>
    <a href={boxExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-primary is-light">See playroom example</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Box
  backgroundColor
  borderRadius
  shadow
  margin
  marginVertical
  marginHorizontal
  padding
  paddingHorizontal
  paddingVertical

>
  {/* Child goes here */}
</Box>
`,
  marginTop: 16
},
{
  code: `padding, margin, borderRadius {
  "none"
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large"
}
//Defaults to "none"`
,
  marginTop: 24
},
{
  code: `backgroundColor {
  "none",
  "background-a-1",
  "background-a-2",
  "background-b-1",
  "background-b-2",
  ...
  // + all other background colors from the design system
}
//Defaults to "none"`
,
  marginTop: 24
},
{
  code: `shadow {
  "none"
  "shadow-high-elevation-down",
  "shadow-normal-elevation-down",
  "shadow-low-elevation-down"
}
//Defaults to none
`,
  marginTop: 24
}
]


