import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AVAhgIwDYwDoDsACQyLAVwFt8BnAXmAG0DjjhmXiAXAS053kK4QAOTQU8IADTsOAJxj5YsgWWoxZ1QrQB8hJACFoAT2ERZFNFm3BV66gDoAZtw2dR4gL5IA9IagmzCytpIg5CCm58AHVuKE4ACwEARgAOAAYZQg8QjjZQjh4+GAEhAGF5NB4IIgARSokcsPlFdRU1DS1dA2NTc0trWw17MAqq-DrOGC9fHsD+xo4I6NiE5IAmDPyshcI8sMJC-kEQAGVOStUhHeJmpTa7TsIACkyOJABZSO50AHMSCCwZloQk4RgADhAALTVSFQNCyADWkPi3B+8SEhAwaDACJ+sggZEUpQBQKEEKwRkhADdLLEhNpXmEbO0HNRzpxVB5GcQfJ98N80D8GVtiABKa7hSIxOKJQjpTJc0IAXUVxDh53oTC2ezCzlc7mKxxqkT+NWqPyujJGMEq3GqE0NQiSaW8zu8Gw2lpFhDZF2oJRANKwsXqUC9+zIsiw8G5x3inE4YP93m8YCg+Hs1HiEDB3EcRmGEAo3mo3mcOFLSVdADYAJwpGsAdgArN4wfioGQwJxSygi5UIAB9FDxGDUaiWarcBHcewAKzBPwA-FTaElmwBmRtpbdJJJrIQKnY6jh6tkGgMAcXUligkRghAAoj8sGh8Dx8A0raM7eN6gG3TdD0MikRlfQ5f1jiDENJjDUDvUjaNYyEeNE2TVN00zbNc3zQti1Lcsx1dGt6ybVt22gLse28PsLE4IcRzHCdAX5Gd50XFc103bdd33Q8tmyTITxYM83DER0QAABW4ChCEksQ5IgItwzCa1bXtf9jkAl1gJUjhwNUANoPVGA4IlRCY29YgUITJN4BTNMMyzHM8wLSB8LLbgK2IpI6wbXyWzbDsqN7ft6OHUdx0nVjZwXZdV3XLcdzSPcDxABV2BVdhEPoME7GqR48o0ap7EQxVvGFEAPCAA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Table</h1>
    <p>The <code>Table</code> component displays datasets by rendering components in a table.</p>
    <article className="message is-medium is-warning">
      <div className="message-body">
        This is one of the more complex components. Easiest way to understand it is to use the snippet, and fiddle with it.
      </div>
    </article>
    <p>The <code>columns</code> property defines how the data will be rendered in the table.</p>
    <p>The <code>data</code> property defines the dataset.</p>
    <p>The <code>url</code> property is a function that defines the url each row redirects to.</p>
    <p>The <code>onClick</code> property is a function that defines the onClick action of each row.</p>
    <article className="message is-medium is-info">
      <div className="message-body">
        The hover behaviour is set by the presence of either the <code>url</code> prop, or the <code>onClick</code> prop.
      </div>
    </article>
    <br />
    <h1 className="subtitle is-3 is-spaced">The columns prop</h1>
    <p>The <code>columns</code> prop is an array of objects that define the columns. Each of these objects has three keys:</p>
    <p>1) <code>title</code>: string defines the title of the column</p>
    <p>2) <code>render</code>: function that defines how the data is rendered in the column.</p>
    <p>3) <code>minWidth</code>: number that sets the minimal width of the column. Its very important to consider this on mobile view, as your columns could get squished.</p>
    <br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<Table
  columns
  data
  url
  onClick
/>
`
  },
  {
    code: `columns: [
  { title: String,
    render: (dataObject) => Component,
    minWidth: Number,
  },
  ...
]`
  },
  {
    code: `data: Object[]`
  },
  {
    code: `url, onClick: (dataObject) => String`
  },
]

export const anchorId = "table"
