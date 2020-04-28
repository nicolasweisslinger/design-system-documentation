import React from 'react';
import functions from '../../assets/page-welcome/function-components.png'
import stack from '../../assets/page-welcome/stack.png'

export const documentation =
  <>
    <h1 className="title is-3">Components</h1>
    <p>The design system is made of components, and components only. In the design system, <span className="has-text-weight-medium has-text-dark">everything is a component.</span></p>
    <p>An easier way to see this is to consider that components are <span className="has-text-weight-medium has-text-dark">functions.</span> But unlike a mathematical function such as f(x) = x², which accepts a real number (x) and returns another real number (x²), components can <span className="has-text-weight-medium has-text-dark">accept any kind of data</span>, and <span className="has-text-weight-medium has-text-dark">return pieces of UI.</span></p>
    <div className="level" style={{ marginTop: 60 }}>
      <div className="level-item">
        <img width="600" alt="stack" src={functions} />
      </div>
    </div>
    <p>For example, we could imagine the <code>checkbox</code> component to be a function that <span className="has-text-weight-medium has-text-dark">accepts some text ("Yes"),</span> and <span className="has-text-weight-medium has-text-dark">returns the UI of a checkbox,</span> with the label "Yes".</p>
    <p>Here's a <span className="is-italic">slightly</span> more complex example:</p>
    <div className="level" style={{ marginTop: 60 }}>
      <div className="level-item">
        <img width="600" alt="stack" src={stack} />
      </div>
    </div>
    <p>In this example, the <code>Stack</code> component is a function that <span className="has-text-weight-medium has-text-dark">accepts two other components</span>, and returns a piece of UI with the two components stacked one on top of the other.</p>
    <article className="message is-large is-dark" style={{ marginTop: 60 }}>
      <div className="message-body">
      The important thing to understand is that all of our interfaces are built with a <span className="has-text-weight-medium has-text-dark">clever combination of functions</span>, which we call the <span className="has-text-weight-medium has-text-dark">design system's components.</span>
      </div>
    </article>
  </>

export const anchorId = "components"
