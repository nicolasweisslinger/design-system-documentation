import React from 'react';
import imageStackSpace from '../../assets/page-layout-components/stack-space.png'
import imageStackAlign from '../../assets/page-layout-components/stack-align.png'

const stackExampleLink = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BlALgQzAawAQGcAHLGAXgB0QBbGKASwFcrLcALCAJzoC8IA7TABsAgoLoBzPhRCCYAMzSUAfOT65cSACp00sgHKcqGQUoDqMJAHptumAY5GTq9Vp2yAEhNZLhHC9bcYT3FvZw0bfUNjJXQsbForCLsopz4rWJwVPhAAXyA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Stack</h1>
    <p>As the name suggests, the Stack component "stacks" children. If you need to put things one on top of the other, use this.</p>
    <a href={stackExampleLink} target="_blank" rel="noopener noreferrer">
      <button class="button is-info is-light">See playroom example</button>
    </a>
    <br/><br/><br/>
    <p>The <code>space</code> property tells the Stack component how much it should space its children.</p>
    <div className="level">
      <div className="level-item">
      <img width="400" alt="stack" src={imageStackSpace} />
      </div>
    </div><br/>
    <p>The <code>horizontalAlign</code> property tells the Stack component how it should align its children on the horizontal plane.</p>
    <div className="level">
      <div className="level-item">
      <img width="400" alt="stack" src={imageStackAlign} />
      </div>
    </div>
  </>


export const codeSnippets = [{
  code: `<Stack
  space*
  horizontalAlign*
>
    {/* Children go here */}
</Stack>
`
},
{
  code: `space {
  "none"
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large"
}
//Defaults to "none"`
},
{
  code: `horizontalAlign {
  "left",
  "center",
  "right",
  "stretch",
}
//Defaults to stretch
`
}
]


export const anchorId = "stack"
