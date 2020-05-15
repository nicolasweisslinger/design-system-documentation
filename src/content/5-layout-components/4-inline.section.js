import React from 'react';
import imageInline from '../../assets/page-layout-components/inline.png'

const tilesExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BJAdgGwJZpgAgAsIAnLALwjQBcBDDAQWwHM0BeAHRAxgDMrO8AZwAONMDA4hBAWzoZOAPnZo8eJABUaTPJAwlJVAJ7CIAWkqmoNYgGtTBLEwICARmJtNiEAK5ooAYQg9Ykk3MA8vXyhTF1MARkVlVVUUAHJpPBo8TSYAQiS1AHocpRU1HJ0g-U4jE3M0S2s7BydXd08fP0Dg0PbIvxj4xLKU9Mzsmkmp6Zm8gqRirVLVDS1KnprjMwsrW3tHZxA8MIjOgKqQzhOOqMGEkGXktIysnMNaObKFkvmAWRwsBVdNUQLVtg1ds0Dm1wjcuhdJCYMIZTAB3axoHBMYbJPDPcb-TE5fJfQqEwFLZTzIEIzZ1HZNfatI7XfrnDYgVlnO44p5jV5aEkrRZMUoLdDYXClEAAXyAA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Inline</h1>
    <p>The Inline component aligns its children on the horizontal plane, and wraps them if needed.</p>
    <a href={tilesExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
    <br /><br /><br />
    <p>The <code>horizontalAlign</code> property sets the horizontal alignement of children on one line.</p>
    <p>The <code>verticalAlign</code> property sets the vertical alignement of children on one line.</p>
    <p>The <code>space</code> property sets the minimal spacing between each children, and each line.</p><br/>
    <br /><br />
    <div className="level">
      <div className="level-item">
        <img width="600" alt="stack" src={imageInline} />
      </div>
    </div><br />
  </>


export const codeSnippets = [{
  code: `<Inline
  verticalAlign: R
  horizontalAlign: R
  space: R
>
    {/* Children go here */}
</Inline>`
},
{
  code: `verticalAlign: "top" | "center" | "bottom"
//Defaults to "center"`
},
{
  code: `horizontalAlign: "left" | "center" | "right" |
"space-between" | "space-around"
//Defaults to "left"`
},
{
  code: `space: SpaceToken | "none"
//Defaults to "none"`
}
]


export const anchorId = "inline"
