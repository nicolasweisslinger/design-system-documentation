import React from 'react';

export const documentation =
  <>
    <h1 className="title is-3">Under the hood</h1>
    <p>This part isn't really essential, but if you want to take a little look under the hood of one of the design system's compinents, then follow along!</p>
    <p>Before we dive in, make sure you understand what the <a href="https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know" target="_blank" rel="noopener noreferrer">JavaScript <code>.map()</code> function does.</a></p><br/>
    <h1 className="title is-4">React definition of the Stack function</h1>
    <article className="message is-warning">
      <div className="message-body">
        For simplification purposes, this part isn't 100% accurate.
      </div>
    </article>
    <p>The <code>Stack</code> function takes in two arguments, <code>children</code> and <code>space</code>.</p>
    <p><code>children</code> is the array of components to stack, and <code>space</code> is the value of space we want between them.</p>
    <p>The <code>Stack</code> function wraps a <code>div</code> with a <code>marginBottom</code> of <code>space</code> around each element of the <code>children</code> array, and then wraps the whole thing inside another <code>div</code>, which is the actual stack (the one with <code>id = "the-actual-stack"</code>)</p>
    <p>The end result is a display of equally spaced, stacked components.</p><br/>
    <h1 className="title is-4">The "children" argument</h1>
    <p>.</p>
  </>

export const anchorId = "under-the-hood"

export const codeSnippets = [
  {
    code: `function Stack({ children, space }) = {
    return (
      <div id="the-actual-stack">
        {children.map((child) => (
          <div style={{ marginBottom: space }}>
            {child}
          </div>
        ))}
      </div>
    );
  };
`,
    title: "Fig. 1 : Definition of the Stack function",
    marginTop: 350,
  },
  {
    code: `<Stack space="medium">
  <Component1 />
  <Component2 />
</Stack>
`,
    title: "Fig. 2 : Example of the Stack component being used"
  },
  {
    code: `<div>
  <div style={{ marginBottom: "medium" }}>
    <Component1 />
  </div>
  <div style={{ marginBottom: "medium" }}>
    <Component2 />
  </div>
</div>
`,
    title: "Fig. 3 : The HTML the Stack function returns"
  },
]
