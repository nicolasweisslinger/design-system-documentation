import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BRANmglgBwM6dwD4AdAOwAJykAVTAFzRgDkIAnAWwEM1zI02AvMRB0AntggBaCKUlYA5gAs6kxZiXCSFSuU6ZoARxgAvUgDMIAK2MHzEW8ahmHUSw8idHnqN7KUkAPS0DMxsXGhagehYeARaIAC+QA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Ellipsis</h1>
    <p>By default, a text component wraps its text over multiple lines. The <code>Ellipsis</code> component adds a "..." at the end of a text line if it is clipped by its parent container.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Ellipsis>
  {/* Text component goes here */}
</Ellipsis>`
},
]
