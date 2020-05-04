import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BhAFjMBrARhAHgAQA2AhjjMQLwA6IKxAltoQLYyEAOxMpAzjACEdQnwCuOACox8AF1ogAqgDsefPoQCeEMYSgRlAclmEA7qWXLSIgPQA+GspABfIA";

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Checkbox</h1>
    <p>The classic checkbox</p>
    <p>The <code>label</code> property sets the label of the checkbox.</p>
    <p>The <code>subText</code> property sets the secondary text under the label of the checkbox.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays a warning.</p>
    <p>The <code>disabled</code> property disables the checkbox.</p>
    <article className="message is-medium is-warning">
      <div className="message-body">
        <code>error</code> and <code>warning</code> override <code>subText</code>.
      </div>
    </article>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Checkbox
  label
  subText
  error
  warning
  disabled
/>
`
},
{
  code: `label, subText, error, warning: String`
},
{
  code: `disabled: Boolean`
},
]

export const anchorId = "checkbox"
