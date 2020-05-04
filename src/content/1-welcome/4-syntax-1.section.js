import React from 'react';
const playroomExample = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BhAFjMBrARhAHgAQA2AhjjMQLwA6IAmjAM52ED0AfCAL5A"

export const documentation =
  <>
    <h1 className="title is-3">Syntax <span className="subtitle is-3 has-text-weight-light">Part 1</span></h1>
    <p>If the part about components makes sense to you, then this part will be a piece of cake.</p>
    <p>Brigad's design system uses the same syntax as React—JSX—which conveniently mixes HTML syntax to JavaScript. We will only be scratching the surface of this syntax, but if you're curious, you can check out <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/introducing-jsx.html">React's documentation.</a></p><br />
    <p>Now let's imagine I want a checkbox component, with a label that reads "Yes". One thing I know about the checkbox component, is that it <strong>accepts one property called "label",</strong> which customizes the text to the right of the checkbox.</p>
    <p>In a standard functional syntax, you could just write <code>checkbox("Yes")</code>.</p>
    <p>But in JSX, you would write <code>{`<Checkbox label="Yes" />`}</code></p>
    <article className="message is-medium is-warning">
      <div className="message-body">
        Note that in JSX, you must explicitly write which property you are setting on the component. You cannot write down <code>{`<Checkbox "Yes" />`}</code>, you must write <code>{`<Checkbox label="Yes" />`}</code>.
      </div>
    </article>
    <p>Care to see what this piece of code actually looks like? Fortunately, all our design system components are plugged to an amazing tool called <strong> Playroom</strong>, which allows us to immediately test out our code. <a rel="noopener noreferrer" target="_blank" href={playroomExample}>Check out the checkbox Playroom!</a></p><br />
    <p>So let's break this thing down.</p>
    <p>Every component starts with a <code>{"<"}</code> followed by the name of the component (in this case, <code>Checkbox</code>), followed by all the properties you wish to set for that component, using the <code>{"propertyName = {propertyValue}"}</code> syntax.</p>
    <article className="message is-medium is-info">
      <div className="message-body">
        In theory, you could write <code>{`<Checkbox label={"Yes"} />`}</code>, but if the <code>propertyValue</code> is a string, you don't need to use the <code>{"{ }"}</code>, you can just write <code>{`<Checkbox label="Yes" />`}</code>
      </div>
    </article>
    <article className="message is-medium is-info">
      <div className="message-body">
Also, if the property is a boolean (true/false), writing <code>{`<Component propertyName={true} />`}</code> is the same as writing <code>{`<Component propertyName />`}</code>
      </div>
    </article>
    <p>Finally, the component ends with a <code>{"/>"}</code>.</p>
    <p>Piece of cake right?</p>
  </>

export const anchorId = "syntax1"

export const codeSnippets = [{
  code: `// Hey there! I'm here to illustrate
// whatever is on the left with code.
// The "//" at the beginning of every
// line means that I'm not the actual code.
// I'm just a comment 😞.
//
// This, on the other hand, is a
// small piece of real code:

<Component />

// 🤯
`
},
{
  code: `<Checkbox label="Yes" />
`,
  marginTop: 130,
  title: "JSX syntax for the checkbox component"
},
{
  marginTop: 200,
  title: "Component property syntax",
  code: `// The following code is perfectly
// correct ✅ :
<Checkbox label={"Yes"} />

// However, because "Yes" is a string,
// you can simply use this syntax ✅ :
<Checkbox label="Yes" />

// Careful, this only works with strings.
// The following syntax is incorrect because
// the property's value is a number ❌:
<button class="button is-dark">

// Here is the correct syntax ✅ :
<button class="button is-dark">
`,
},
]
