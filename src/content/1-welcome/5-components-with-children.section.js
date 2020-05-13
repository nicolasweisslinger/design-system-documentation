import React from 'react';
import imageStack from '../../assets/page-welcome/syntax-stack.png'
const exampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BlALgQzAawAQGcAHLGAXgB0QBbGKASwFcrKA+cgO11yQEl3CGaXABsMAIxjCKIAHIYalXAHo2nbgGEAFjBxiIADxHjJ0gPLZFKjlyQAhQWgidIwiACdphN3SoY3ATwBadndfYVYACUlXAEIkJXs0R3ZVePQsbFUQAF8gA"

export const documentation =
  <>
    <h1 className="title is-3">Components with children</h1>
    <p>The checkbox component above is a self-sufficient, it "works" on its own.</p>
    <p>Some components, on the other hand, can have other components <span className="is-italic">inside them,</span> components we call <strong>children</strong>, in which case, the syntax is a tiny bit different.</p>
    <p>The <code>Stack</code> component, for example, stacks its children.</p>
    <div className="level">
      <div className="level-item">
        <img width="400" alt="stack" src={imageStack} />
      </div>
    </div>
    <br/>
    <p>Notice anything strange from the example on the right? The <code>Button</code> component also has a child, but its not a component, its just a string. So there you have it: sometimes components can have other components inside them, and sometimes they can have a string.</p>
    <br />
    <a href={exampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>

export const anchorId = "components-with-children"

export const codeSnippets = [{
  code: `<Component property="value" />`,
title: "A component without children"
},
{
  code: `<Component property="value">
  //Other components can go here
</Component>`,
title: "A component with children"
},
{
  code: `<Stack space="medium">
  <Input label="Name" />
  <Checkbox label="Ok" />
  <Button color="primary-normal">
    Hello!
  </Button>
</Stack>
`,
title: "The Stack component and its 3 children"
},
]
