import React from 'react';
const boxExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DriQAFTIzIwAJXXkfAEkAckdcClwiXG50AEIkAHpg0JgIvT9sbLR0IpAAXyA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Box</h1>
    <p className="subtitle is-5">The box component is the simplest layout component. It basically sets padding, margin, border radius, and shadow around its child.</p>
    <article className="message is-medium is-warning">
      <div className="message-body">
        The box component should only contain one child. That child can very well be another layout component.
      </div>
    </article>
    <a href={boxExampleLink} target="_blank" rel="noopener noreferrer">
      <button className="button is-info is-light">See example</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Box
  backgroundColor
  borderRadius: R
  shadow: R
  margin: R
  marginVertical: R
  marginHorizontal: R
  padding: R
  paddingHorizontal: R
  paddingVertical: R
>
  {/* Child goes here */}
</Box>
`
},
{
  code: `padding, margin, borderRadius {
  "none",
  ...
  // all space tokens
}
//Defaults to "none"`

},
{
  code: `backgroundColor {
  "none",
  ...
  // all color tokens
}
//Defaults to "none"`

},
{
  code: `shadow {
  "none",
  ...
  // all shadow style tokens
}
//Defaults to none
`
}
]

export const anchorId = "box"
