import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AZAlgOwNYAICuATgDYC8AOiABYAu1ADgM7wD0zA7hwHRsCGDlmAObUIGNDwydIAW3Z0AtJAzUYy5njpEIPKA2YAmAAxHmx5mgDKIsFnkBGYwHYArI-0AWAGz75DMDyIYKHkjdwAOAA87TwBOZ04AKzpBCgA+MgwcHCQAIWgATwA5CAJpAJxILQJyEGp8ugh5UXkiNEEaeQF2tIBJHF4GHGpCDCCcTBEcHhxW7CRmPKgikrKidIx59Gx1kABfIA";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Link</h1>
    <p>The Link component turns other components into links, and can apply some fancy styling to texts. These links can either be internal or external.</p>
    <p>The <code>colored</code> property enables text color styling.</p>
    <p>The <code>bold</code> property enables text weight styling.</p>
    <p>The <code>url</code> property specifies the link.</p>
    <p>The <code>disabled</code> property disables the link.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Link
  colored
  bold
  url
  disabled
/>
`
},
{
  code: `colored, bold, disabled: Boolean
// colored defaults to true
// bold defaults to true
// disabled defaults to false`
},
{
  code: `url: String
// Defaults to ""`
},
]

export const anchorId = "link"
