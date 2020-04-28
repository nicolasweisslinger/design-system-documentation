import React from 'react';
import principles from '../../assets/page-welcome/principles.png'

export const documentation =
  <>
    <h1 className="title is-3">Core principle</h1>
    <p>This design system is a superset of a front-end framework called React, which itself is superset of HTML + JavaScript + CSS.</p>
    <p>In other words, all of our interfaces are plain HTML + JavaScript + CSS code, bundled up in other pieces of code (React), which are themselves bundled up in other pieces of code, which we call the <span className="has-text-weight-medium has-text-dark">Brigad Design System components.</span></p>
    <div className="level" style={{ marginTop: 60 }}>
      <div className="level-item">
        <img width="600" alt="stack" src={principles} />
      </div>
    </div>
    <p className="is-size-5" style={{ marginTop: 60 }}>Anytime we have a recurring pattern in our product's interfaces, we make a component out of it. Each component is tested, easy to update, <span className="has-text-weight-medium has-text-dark">and easy to use.</span></p>
  </>

export const anchorId = "core-principle"
