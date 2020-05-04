import React from 'react';



const spaces = {
  x_small: "4px",
  small: "8px",
  medium: "16px",
  large: "24px",
  x_large: "32px",
  xx_large: "56px",
}

const convertToDash = (word) => {
  return word.replace(/_/g, "-")
}

const SpaceTile = ({ space, name, value, color }) => {
  return (
    <>
      <div style={{ height: 32, width: space, backgroundColor: color, borderRadius: 4 }}></div>
      <div className="is-size-5"><code>{convertToDash(name)}</code></div>
      <div className="is-size-5">{value}</div>
    </>
  )
}

const spaceColor = (index, length) => {
  const minHue = 190;
  const maxHue = 230;
  const ratio = 1 - (length - index) / length;
  const hue = (1 - ratio) * minHue + ratio * maxHue;
  return `hsl(${hue}, 100%, 50%)`
}


export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Spaces</h1><br />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, width: 400 }}>
      {Object.keys(spaces).map((key, i) => <SpaceTile color={spaceColor(i, Object.keys(spaces).length)} space={spaces[key]} name={key} value={`${spaces[key]}`} />)}
    </div><br /><br />
    <article className="message is-medium is-info">
      <div className="message-body">
        Some components can also use negative version of these tokens, by appending the <code>negative-*</code> prefix to the token.
      </div>
    </article>
  </>

export const anchorId = "spaces"
