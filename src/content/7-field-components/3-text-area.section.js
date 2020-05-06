import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVGAPALgQwE42wB0A7AAlIAcAbbMGACwitlwF5CQBJAcgFtTslGnUbMYuAIQcS5GgCMYVdiAAy2BVWllSAZwCuctFmWdSYbGQDmASwBuMUrwj5S14gDMIW8sT28FuADy7ipuMDrKABxaAPQAfCQgAL5AA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">TextArea</h1>
    <p>The TextArea componenent lets the user input a long string.</p>
    <p>The <code>label</code> property sets the label of the input.</p>
    <p>The <code>subText</code> property displays a secondary text under the input.</p>
    <p>The <code>placeholder</code> property sets the placeholder.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays an warning.</p>
    <p>The <code>numberOfLines</code> property sets the default height of the component to the number of lines specified.</p>
    <p>The <code>disabled</code> property disables the input.</p><br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<TextArea
  label
  subText
  placeholder
  error
  warning
  numberOfLines
  disabled
/>
`
  },
  {
    code: `label, subText, placeholder, error,
warning: String`
  },
  {
    code: `numberOfLines: Number`
  },
  {
    code: `disabled: Boolean`
  },
]

export const anchorId = "text-area"
