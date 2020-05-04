import React from 'react';

import { index } from '../../utils/icon-indexer/index'

const convertToDash = (word) => {
  return word.replace(/_/g, "-")
}

const IconTile = ({ iconName, iconLink, iconSize }) => {
  return (
    <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden', boxShadow: '0px 11px 22px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ height: iconSize, width: iconSize, backgroundImage: `url("${iconLink}"`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      </div>
      <div style={{ padding: 8 }}>
        <div className="is-size-7">{convertToDash(iconName)}</div>
      </div>
    </div>
  )
}

console.log(index)

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Icons</h1><br />
    {Object.keys(index).map(key =>
      <>
        <h1 className="title is-4 is-spaced">{`${key} px`}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 16 }}>
          {index[key].map(el => <IconTile iconName={el.iconName} iconLink={el.iconLink} iconSize={parseInt(key)} />)}
        </div><br /><br />
      </>
    )}


  </>

export const anchorId = "icons"
