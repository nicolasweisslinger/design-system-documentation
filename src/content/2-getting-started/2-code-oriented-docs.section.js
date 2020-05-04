import React from 'react';
const exampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhArgFwxAdgAkgBsIAnAXgB0QAHEgSwFsBDEgTwFodTnCqA+CvjwBJAOQM8TPCRhNCeAEaZs+AGYkIEjAAsY02fJT0A5kyh5YAZzrH8l1pYwwGgpAHp0WXAJwgAvkA"

export const documentation =
  <>
    <h1 className="title is-4">Code oriented docs.</h1>
    <p>This documentation is code-oriented. Unlike a design system artboard, you will never see a high fidelity illustration of a component on this website.</p>
    <p>The reason for this is that visual illustrations cannot keep up with the pace of development of a design system. They inevitably fall out of sync.</p>
    <p>Instead, we have plugged our design system to an amazing tool called <strong><a href={exampleLink}>Playroom</a></strong>, developed by an Australian company called Seek.</p>
    <p>As the name suggests, this tool was initially designed to play around with design system components, test them out on multiple breakpoints, and quickly build interfaces.</p>
    <p>This documentation also uses Playroom as a component illustration tool.</p>
    <a href={exampleLink} target="_blank" rel="noopener noreferrer">
      <button className="button is-info is-light">See example</button>
    </a>
    <article className="message is-medium is-info" style={{ marginTop: 60 }}>
      <div className="message-body">
        In Playroom, pressing <code>⌘ + K</code> will open up code snippets, little pieces of code you can use right away. This is very convenient to quickly mockup an interface. Once you get the hang of it, using Playroom is faster than using standard design tools 🚀.
      </div>
    </article>
  </>

export const anchorId = "code-oriented-docs"

export const codeSnippets = [
  {
    code: `// Hey there!
// I'm here to illustrate whatever is
// on the left with code, and give it
// a bit of syntaxical highlighting 💅.
// I'm horizontally scrollable. So if ever I get clipped by the box, all you need to do is scroll to the right 🙃.
`
  },
]
