import React from 'react';
const boxExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DriQAFTIzIwAJXXkfAEkAckdcClwiXG50AEIkAHpg0JgIvT9sbLR0IpAAXyA"

const negativeMarginExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DrlQMf3xiUgoaOkYWNhBg3GcWCgAJHjIALyszInoJbBhKczJjGE0o6VjZLiIwAGtKJghhbCgAYQh6HglOarqGpqgbIioYJgdcP0qAtCgATwA5Hmd6XEgOpgkCdpnB4dGQCfxD3ABJAHJi3BhzGDxhAniZwmYbs1PRXHlUjOws5YTKCgAOjiSAA9NN5otsgcAuCMBMwWh0BMQABfIA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Box</h1>
    <p>The box component is the simplest layout component. It can set padding, margin, border radius, and shadow around its child.</p>
    <a href={boxExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
    <br /><br /><br />
    <article className="message is-medium is-warning">
      <div className="message-body">
        The box component should only contain one child. That child can very well be another layout component.
      </div>
    </article>
    <article className="message is-medium is-info">
      <div className="message-body">
        The <code>marginHorizontal</code> property can have a negative value, by appending the <code>negative-</code> prefix to the token. This is pretty convenient when you need to <a href={negativeMarginExampleLink} target="_blank" rel="noopener noreferrer"> eat up the padding of the box's parent.</a>
      </div>
    </article>
  </>


export const codeSnippets = [
{
  code: `<Box
  backgroundColor
  borderRadius: R
  shadow: R
  margin: R
  marginVertical: R
  marginHorizontal: R-Negative
  padding: R
  paddingHorizontal: R
  paddingVertical: R
>
  {/* Child goes here */}
</Box>
`
},
{
  code: `padding, margin, borderRadius: SpaceToken | "none"
//Defaults to "none"`
},
{
  code: `backgroundColor: ColorToken | "none"
//Defaults to "none"`
},
{
  code: `shadow: ShadowToken | "none"
//Defaults to none`
}
]

export const anchorId = "box"
