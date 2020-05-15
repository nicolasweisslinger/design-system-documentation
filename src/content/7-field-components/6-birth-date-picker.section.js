import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhAlgJwC4AsAiAhljAAppgDWMGAOgHYAEDEdAwjgXQOYwC8wACgCUDXgD4GwAL5T6TALYEAHoWL86MAO4NVMATRAAmAAzGAjAFpzVswaGzGDKAQCeJADYEwMHBHewMXgNCFwM5BnkWXA8vHz8AoJAAWSicMMcXGAIMGO9ff2pEgE0s2hB6AHoxehApIA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">BirthDatePicker</h1>
    <p>The BirthDatePicker lets the user enter a date (usually a birth date).</p>
    <p>The <code>label</code> property sets the label.</p>
    <p>The <code>subText</code> property sets the subText.</p>
    <p>The <code>maxDate</code> property sets the maximum date the user can select.</p>
    <p>The <code>dayPlaceholder</code> property sets the day placeholder.</p>
    <p>The <code>monthPlaceholder</code> property sets the month placeholder.</p>
    <p>The <code>yearPlaceholder</code> property sets the year placeholder.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays an warning.</p>
    <p>The <code>disabled</code> property disables the birthDatePicker.</p>
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<BirthDatePicker
    label
    subText
    maxDate
    dayPlaceholder
    monthPlaceholder
    yearPlaceholder
    error
    warning
    disabled
/>
`
  },
  {
    code: `label, subText, dayPlaceholder,
monthPlaceholder, yearPlaceholder,
error, warning: String`
  },
  {
    code: `maxDate: Date`
  },
  {
    code: `disabled: Boolean`
  },
]

export const anchorId = "birth-date-picker"
