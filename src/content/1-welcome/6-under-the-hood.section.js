import React from 'react';

export const documentation =
  <>
    <h1 className="title is-3">Under the hood</h1>
    <p>This part isn't really essential, but if you want to take a little look under the hood of one of the design system's components, then follow along!</p>
    <p>Before we dive in, make sure you understand what the <a href="https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know" target="_blank" rel="noopener noreferrer">JavaScript <code>.map()</code> function does.</a></p><br />
    <h1 className="title is-4">React definition of the Stack function</h1>
    <article className="message is-warning">
      <div className="message-body">
        For the purpose of this example, this definition is a simplified version of the real Stack component.
      </div>
    </article>
    <p>The <code>Stack</code> function takes in two arguments, <code>children</code> and <code>space</code>.</p>
    <p><code>children</code> is the array of components to stack, and <code>space</code> is the value of space we want between them.</p>
    <p>The <code>Stack</code> function wraps a <code>div</code> with a <code>marginBottom</code> of <code>space</code> around each element of the <code>children</code> array, and then wraps the whole thing inside another <code>div</code>, which is the actual stack (the one with <code>id = "the-actual-stack"</code>)</p>
    <p>The end result is a display of equally spaced, stacked components.</p><br />
    <h1 className="title is-4">The "children" argument</h1>
    <p>On the first line of Figure 1 (<code>{"function Stack({ children, space })"}</code>) the <code>children</code> argument refers to anything that will be in between the <code>{"<Stack>"}</code> and <code>{"</Stack>"}</code> tags when the component is being used (Figure 2).</p>
    <p>This is the particularity of React: when you use a React component, children components will be aggragated in an array, and used as the <code>children</code> argument of the <strong>actual Stack function.</strong></p>
    <p>If this still seems a little confusing, consider this:<strong> Figure 4 is entirely equivalent to Figure 2.</strong></p>
    <p>Technically, every React component could be self-closing, and have its children as a <code>children</code> property, just like in Figure 4.</p>
    <p>However, the syntax of Figure 2 is more appreciated, because its easier to read, and <strong>sticks to the original HTML syntax.</strong> The message «<code>Component1</code> and <code>Component2</code> are inside <code>Stack</code>» is clearer on Figure 2 than on Figure 4.</p>
    <p><strong>Nonetheless, both syntaxes are completely equivalent.</strong></p><br/>
    <article className="message is-large is-medium is-dark">
      <div className="message-body">
        Again, the design system's components are <strong>nothing more than functions</strong>, and the interface is <strong>a combination</strong> of those functions.
      </div>
    </article>
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
    title: "Fig. 1 : Stack function declaration",
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
  {
    code: `<Stack
  space="medium"
  children={[<Component1 />, <Component2 />]}
/>
`,
    title: "Fig. 4 : An equivalent of Fig. 2"
  },
]
