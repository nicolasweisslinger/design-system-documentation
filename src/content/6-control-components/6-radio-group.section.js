import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AlAhlAlhA4gJwgFcAHAPgB0A7AAmtQ22oBs0AjGJgXnJAHliALthoBGHtQDOhVgBUYADwHcQATSKSAFkSZRqAWzQBPdtTBaIEmNQEbME6hEHDxAego066LBGZsOy-iEIGgAmcSlZBSUeACFCAWpDdTA0GjQmCR8zCAsrGzsHShhXd1p6b192Lh5A4WoAZnDpOUVlABEYADNMSkwBDkNqSggE-Ptg4pBqNyokFy9sfCIyKhAAXyA";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Radio Group</h1>
    <p>A <code>Radio</code> container that handles errors and warnings</p>
    <p>The <code>error</code> property displays an error state</p>
    <p>The <code>warning</code> property displays a warning state</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<RadioGroup
  error
  warning
>
  {/*Radio components go here */}
</RadioGroup>
`
},
{
  code: `error, warning: Boolean`
},
]

export const anchorId = "radio-group"
