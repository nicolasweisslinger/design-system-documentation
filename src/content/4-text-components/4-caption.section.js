import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8BhAhgBwC4EsIDsA5CAJwFs0AbAAkktIF4AdELATwwgFoCvKcA5gAssXIYKEsAfAAkYlegEIkAenTY8RUhUpSQAXyA";

export const documentation =
  <>
    <h1 className="title is_3 is_spaced">Caption</h1>
    <p>Works well with secondary info. Line height is small, so make sure you don't use it for long paragraphs.</p>
    <p>Two components : <code>{`<CaptionNormal />`}</code>, <code>{`<CaptionHigh />`}</code></p><br />
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button className="button is-info is-light">See example</button>
    </a>
  </>


