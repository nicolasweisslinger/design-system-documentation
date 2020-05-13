import React from 'react';
import checkbox from '../../assets/page-welcome/checkbox.png'

const exampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BhAFjMBrARhAHgDoB2ABKQDYCGOMFAvISAIJgAuAlgG5VsylUArmwgBaMFWJg6TEuQDOgnABUY+NoxABZKln6KATvwCeEQaTRUu-KqRxVsggA4BCWcQD0APhIgAvkA"


export const documentation =
  <>
    <h1 className="title is-3">Anatomy of a component</h1>
    <p>Components are pieces of UI that have <strong>properties</strong>.</p>
    <p>Take this example of a checkbox component:</p>
    <div className="level" style={{ marginTop: 60 }}>
      <div className="level-item">
        <img width="400" alt="stack" src={checkbox} />
      </div>
    </div>
    <p>The checkbox component has two properties of type String: <code>label</code> and <code>subText</code>.</p>
    <br/>
    <a href={exampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>

export const anchorId = "anatomy-of-a-component"

export const codeSnippets = [
  {
    code: `<Checkbox
  label="Activate auto-cancel"
  subText="Make sure you have a backup!"
/>`,
    title: "Syntax of the checkbox component",
    marginTop: 200
  },
]
