import React from 'react';

export const documentation =
  <>
    <h1 className="title is-3">Property syntax</h1>
    <p>Normally, the value of a property should be written with curly braces around it <code>{`{}`}</code>. However, there are 2 exceptions:</p>
    <p>If the property is a string, then you don't need to use curly braces.</p>
    <p>If the property is a boolean, and you want to set it to <code>true</code>, then you don't need to specify it. You just need write the property name.</p>
  </>

export const anchorId = "property-syntax"

export const codeSnippets = [
  {
    title: "Strings",
    code: `// Normally, values should be between
// curly braces:
<Checkbox label={"Yes"} />

// However, because "Yes" is a string,
// you can remove the curly braces:
<Checkbox label="Yes" />`
  },
  {
    title: "Booleans",
    code: `// This syntax is correct:
<Button disabled={true} />

// But you can also write it this way:
<Button disabled />`
  },
]
