import React from 'react';
import imageStack from '../../assets/page-welcome/syntax-stack.png'

export const documentation =
  <>
    <h1 className="title is-3">Syntax <span className="subtitle is-3 has-text-weight-light">Part 2</span></h1>
    <p>The checkbox component we were talking about above is a bit special, because it works on its own.</p>
    <p>Some components, on the other hand, need to have other components <span className="is-italic">inside them,</span> components we call children.</p>
    <p>Let's imagine a component called <code>Stack</code>. The purpose of <code>Stack</code> is to visually stack equally spaced components one on top of the other.</p>
    <p><code>Stack</code> has a property called <code>space</code>, which lets me set the spacing between each of the components.</p>
    <div className="level">
      <div className="level-item">
        <img width="400" alt="stack" src={imageStack} />
      </div>
    </div>
    <br/>
    <p>If we write the Stack component like this: <code>{`<Stack space="medium" />`}</code>, where do we put the 3 components we want to Stack? 🤔</p>
    <p>Luckily, there's another syntax, which serves just that purpose.</p>
    <p>Instead of having one "self-closing" tag (<code>{`<Component />`}</code>), we have two: one opening tag (<code>{`<Component>`}</code>) and one closing tag (<code>{`</Component>`}</code>).</p>
    <p>All the properties stay in the opening tag, and <span className="has-text-weight-medium has-text-dark">all the children components go between the opening tag and the closing tag.</span></p>
  </>

export const anchorId = "syntax2"

export const codeSnippets = [{
  code: `<Stack space="medium">
  <Input label="Name" />
  <Checkbox label="Ok" />
  <Button label="Register" />
</Stack>
`,
marginTop: 720,
title: "The Stack component and its 3 children"
},
]
