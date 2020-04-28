import React from 'react';
const exampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BlALgQzAawAQGcAHLGAXmAG0AdEADwFp8BbDAG1ZoBpcamYoAlgFcmXHnQasMAJwDmMGgF0AvgD4qAO1y4kAIWgBPAHIRpLVrkitTpGmgOEI9CBvqsBsgBZp6nj55pVAAkYdggAQiQAen0oY1NzdS0dWPizNksIa2lbEHtHZ1d3Lx8-L0CQsMiYwxN01iTtPVqEjKsbOwcnFzd-Uv8K0Otq1LrEzSbR1ot2nM6CnuLvXwGQYKGI6Kn6pOj0LGwkkGUgA";

export const documentation =
  <>
    <h1 className="title is-4">Responsive props</h1>
    <p>Some components have super-powered props called <strong>responsive props</strong>. They allow you to set 3 different values for 3 screen sizes (mobile, tablet, and desktop) all in one go.</p>
    <p>In the documentation, responsive props are marked with a <code>*</code>.</p>
    <a href={exampleLink} target="_blank" rel="noopener noreferrer">
      <button className="button is-info is-light">See playroom example</button>
    </a>

  </>

export const anchorId = "responsive-props"

export const codeSnippets = [
  {
    code: `<Stack
  space="small"
>
    ...
</Stack>
// [0, 768[ : space="small"
// [768, 1280[ : space = "small"
// [1280, infinity[ : space = "small"
`,
    title: "Non-responsive space prop"
  },
  {
    code: `<Stack
  space={["small", "medium"]}
>
    ...
</Stack>
// [0, 768[ : space="small"
// [768, 1280[ : space = "medium"
// [1280, infinity[ : space = "medium"
`,
    title: "Semi responsive space prop"
  },
  {
    code: `<Stack
  space={["small", "medium", "large"]}
>
    ...
</Stack>
// [0, 768[ : space="small"
// [768, 1280[ : space = "medium"
// [1280, infinity[ : space = "large"
`,
    title: "Full responsive space prop"
  }
]
