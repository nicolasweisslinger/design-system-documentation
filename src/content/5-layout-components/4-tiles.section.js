import React from 'react';
import imageTiles from '../../assets/page-layout-components/tiles.png'

const tilesExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVAlgGxgZwATYAcBDMGAXgB0RsBbIjDK3SDAVxoDtszgBtAJgA0AZgC6AXwB8FDrlxIAQhAAeMuXOJQoaDgHNK1Ogypr1AIwgAnWJYBKRba25Va9RiFNzsACwcQA7gY+fv4AtN5out6hMFgAbkQALmgQHKFQARwmsuYkANa6lhCsHFAAwhAYVgZm+YXFpaFmofzZctI5corQAJ4AEpHezJXVVIk9BBChqelElnnhg1SSAJIA5DS4OrhEuOhYAIRIAPRKUP2DHV2nKlfySqqduJraekFG7p64FtYwdg5oJzvNxtdTBDKBFy+CGLKIxeJJFJpCFZDxPWpgApFErlEaWGp1bGNZqtNHtL7dc4DKLDKr4sYTKYzKBzBYRKLLdabba7dBofkCwVC-mHE5nC5RO5i26mbqPdTPByvfQuD6guQ-Gz2RzOQwgslg6EBIJGsLs6KxGAJZLMzLq76Ehq4ukEzH1HFNFqgu5dcXUoYsUYgcaTabI1mw7ycjZbWS8zAwI43KmXWU3ZRSh5fF46FV64wGjVWLUAoGq-VfcHGqEhSPwq2I23+VFfDFYp0VF1UNvu4leg0++69f20oMhpnh+aR6PcuN7BNJv2pnLSjMyE77HAdEDiIA"

const tilesExampleLink2 = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVAlgGxgZwATYAcBDMGAXgB0QMiAnAcxit0gwFcBbAO2zOAG0ATABpcAZgC6AXwB8FLrlxIAsmi5oUReiwgYItSiAAuATwIQAtBC4WodANYWAFmnpPmAIxL36tCGy4oAGFdfUMvMB8-AKgLDwsARio5BUVcAEkAcg5cIwhcpxhcLAAzI3lFJAB6VXVNehTK2o0tHT0DKlNzKxs7WkcXN09vX39AkPbwkejAuMTkirSsnLyCotLy1Orm+salHdbWMM6zS2tbB2dXdxBcCKix4NCOkHvRmLmkkD3FZdz8oyFYowMqLbZqFoNMHpLgYNRFJz6NAAL2sRiIGAAgnD6FxDLRruVvosmhD6m1jsZTj0Lv0rkNbm8Zk9JlQmY9PgtUr9sv81rgCW4jLgTBAwTUyVo9tUYXCuDAUtV0FhsCkQFIgA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Tiles</h1>
    <p>The Tiles component will automatically lay out its children in a grid. Columns are equal fractions of the parent width, and row height is set by the highest child.</p>
    <a href={tilesExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-info is-light">See playroom example</button>
    </a>
    <br /><br /><br />
    <p>The <code>columns</code> property sets the number of columns.</p>
    <p>The <code>verticalAlign</code> property sets the vertical alignement of each children within its tile.</p>
    <p>The <code>space</code> property sets the spacing between each tile.</p><br/>
    <article className="message is-medium is-info">
      <div className="message-body">
        Horizontal alignement within a tile can be set by using another layout component, such as <code>Stack</code> or <code>Inline</code>. <a target="_blank" rel="noopener noreferrer" href={tilesExampleLink2}>See Playroom Example</a>
      </div>
    </article>
    <br /><br />
    <div className="level">
      <div className="level-item">
        <img width="600" alt="stack" src={imageTiles} />
      </div>
    </div><br />
  </>


export const codeSnippets = [{
  code: `<Tiles
  columns*
  verticalAlign*
  space*
>
    {/* Children go here */}
</Tiles>
`
},
{
  code: `columns {
  1,
  2,
  3,
  4,
  5,
  6,
}
//Defaults to 1`
},
{
  code: `verticalAlign {
  "top",
  "center",
  "bottom",
}
//Defaults to "top"
`
},
{
  code: `space {
    "none",
    ...
    // all space tokens
}
//Defaults to "none"
`
}
]


export const anchorId = "tiles"
