import React from 'react';
import functions from '../../assets/page-welcome/function-components.png'
import stack from '../../assets/page-welcome/stack.png'

export const documentation =
  <>
    <h1 className="title is-3">Components</h1>
    <p>The design system is made of components, and components only. In the design system, <strong>everything is a component.</strong></p>
    <p>An easier way to see this is to consider that components are <strong>functions.</strong> But unlike a mathematical function such as f(x) = x², which accepts a real number (x) and returns another real number (x²), components can <strong>accept any kind of data</strong>, and <strong>return pieces of UI.</strong></p>
    <p>For example, we could imagine the <code>checkbox</code> component to be a function that <strong>accepts a string</strong> (technical word for text), and <strong>returns the UI of a checkbox,</strong></p><br/>
    <div className="level">
      <div className="level-item">
        <img width="600" alt="stack" src={functions} />
      </div>
    </div><br/><br/>
    <p>Here's a <span className="is-italic">slightly</span> more complex example:</p>
    <div className="level" style={{ marginTop: 60 }}>
      <div className="level-item">
        <img width="600" alt="stack" src={stack} />
      </div>
    </div>
    <p>In this example, the <code>Stack</code> component is a function that <strong>accepts two other components</strong>, and returns a piece of UI with the two components stacked one on top of the other.</p>
    <article className="message is-large is-dark" style={{ marginTop: 60 }}>
      <div className="message-body">
      The important thing to understand is that all of our interfaces are built with a <strong>clever combination of functions</strong>, which we call the <strong>design system's components.</strong>
      </div>
    </article>
  </>

export const anchorId = "components"
