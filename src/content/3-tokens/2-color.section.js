import React from 'react';



const primaryColors = {
  primary_normal: "#03A9F4",
  primary_low: "#B3E5FC",
}
const backgroundColors = {
  background_valid: "#E8F5E9",
  background_info: "#E1F5FE",
  background_danger: "#FEEBEE",
  background_warning: "#FFFDE7",
  background_b_1: "#263238",
  background_b_2: "#37474F",
  background_c_1: "#01579B",
  background_c_2: "#0277BD",
  background_a_1: "#FFFFFF",
  background_a_2: "#F2F5F8",
}
const typoColors = {
  typo_on_dark_high: "rgba(255, 255, 255, 1)",
  typo_on_dark_medium: "rgba(255, 255, 255, 0.8)",
  typo_on_dark_low: "rgba(255, 255, 255, 0.6)",
  typo_on_light_high: "#000000",
  typo_on_light_medium: "#607D8B",
  typo_on_light_low: "#90A4AE",
}
const polyvalentColors = {
  poly_valid: "#4CAF50",
  poly_info: "#03A9F4",
  poly_danger: "#E53935",
  poly_warning: "#F57F17",
}
const specialColors = {
  effect_dark_fade: "rgba(0, 0, 0, 0.8)",
  elementary_yellow: "#FDD835",
}
const outlineColors = {
  outline_normal: "#CFD8DC",
  outline_focus: "#B0BEC5",
  outline_active: "#03A9F4",
}
const shadowColors = {
  shadow_high_elevation_down: "0px 11px 22px rgba(0, 0, 0, 0.1)",
  shadow_normal_elevation_down: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  shadow_low_elevation_down: "0px 2px 6px rgba(0, 0, 0, 0.25)",
  shadow_normal_elevation_high: "0px -4px 10px rgba(0, 0, 0, 0.15)",
}

const convertToDash = (word) => {
  return word.replace(/_/g,"-")
}


const ColorTile = ({ color, name, value }) => {
  return (
    <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden', boxShadow: '0px 11px 22px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ height: 80, backgroundColor: color }} />
      <div style={{ padding: 8 }}>
        <div className="is-size-7">{convertToDash(name)}</div>
        <div className="is-size-7">{value}</div>
      </div>
    </div>
  )
}

const isColorDark = (color) => {
  return /dark/.test(color)
}

const TypoTile = ({ color, name, value }) => {
  return (
    <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden', boxShadow: '0px 11px 22px rgba(0, 0, 0, 0.1)' }}>
      <div className="title is-size-1" style={{display: 'flex',justifyContent:'center', alignItems: 'center', height: 80, backgroundColor: isColorDark(name) ? "black" : "white", color: color }} >
        Ab
      </div>
      <div style={{ padding: 8 }}>
        <div className="is-size-7">{convertToDash(name)}</div>
        <div className="is-size-7">{value}</div>
      </div>
    </div>
  )
}

const OutlineTile = ({ color, name, value }) => {
  return (
    <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden', borderColor: color, borderStyle: 'solid', borderWidth: 2  }}>
      <div style={{ padding: '24px 8px 8px 8px' }}>
        <div className="is-size-7">{convertToDash(name)}</div>
        <div className="is-size-7">{value}</div>
      </div>
    </div>
  )
}

const ShadowTile = ({ color, name, value }) => {
  return (
    <div style={{ width: '100%', borderRadius: 8, overflow: 'hidden', boxShadow: color, paddingTop: 32 }}>
      <div style={{ padding: 8 }}>
        <div className="is-size-7">{convertToDash(name)}</div>
        <div className="is-size-7">{value}</div>
      </div>
    </div>
  )
}


export const documentation =
  <>
    <h1 className="title is_3 is_spaced">Primary Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(primaryColors).map((key) => <ColorTile color={primaryColors[key]} name={key} value={`${primaryColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Background Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(backgroundColors).map((key) => <ColorTile color={backgroundColors[key]} name={key} value={`${backgroundColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Typo Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(typoColors).map((key) => <TypoTile color={typoColors[key]} name={key} value={`${typoColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Polyvalent Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(polyvalentColors).map((key) => <ColorTile color={polyvalentColors[key]} name={key} value={`${polyvalentColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Special Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(specialColors).map((key) => <ColorTile color={specialColors[key]} name={key} value={`${specialColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Outline Colors</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
      {Object.keys(outlineColors).map((key) => <OutlineTile color={outlineColors[key]} name={key} value={`${outlineColors[key]}`}/>)}
    </div><br/><br/><br/>
    <h1 className="title is_3 is_spaced">Shadow styles</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
      {Object.keys(shadowColors).map((key) => <ShadowTile color={shadowColors[key]} name={key} value={`${shadowColors[key]}`}/>)}
    </div><br/><br/><br/>
  </>

export const anchorId = "colors"
