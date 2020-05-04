import React from 'react';

const exampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BhCAbdBDADgZxgAI8ALCAdwD4AdAO0MKQCEIAPOhhnLKKAS1oBzALzUQ2AE6CYYjpwBGECbAkAlHnwCueUeKxSZIOQ1I8Ku01AoBaEn0ElrMdDABuWAC58Ita1fK0svScALb6ggK6ITD8miFBDDTBDMzQAJ4Ackph6ISQ6Eq6Hmk4ENY+1uj2JB621WJJnJwAkgBmhGkQmoQSMCEQrkQeJERipBRihDgSEDgwEsWEEO3DRGiYuAR5ECGltDC0HgA0hM2E5HyYxpz8eLhz+gB010gA9CxQmdlY6I2M72wkm91th8DAkiAAL5AA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Collapse</h1>
    <p>The Collapse component can reveal and hide a component, using a vertical animation.</p>
    <a href={exampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [{
  code: `<Collapse
  show
>
    {/* Child goes here */}
</Collapse>`
},
{
  code: `show: Boolean
// Defaults to false`
}
]


export const anchorId = "collapse"
