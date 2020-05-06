import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AxAlgGxgBTWA1jAE4A6AdgAQUCGYYMADgC4xQCiAHi2QM5oS8AvMADaJEAzIBzcQBoK4gFYMYMkAF0AvuSoZqAIxgYAQkQgB3HjEHjTFq+J0U9hjABEi1KQEEyUDxAMNiABDBQAnhAArkQUAGaYMBQAFsQwjpTOBkYeXlJofgDyAG7EwSgY4SloUskUTAVVCVgAhBlUxdQYUdbAwGTUALYw8AogALLhAMoQgcTYyRBMEAB0yqrimtpkAPQAfOQgmkA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">BirthDatePicker</h1>
    <p>The FilePicker lets the user upload files.</p>
    <p>The <code>acceptedExtensions</code> property sets the accepted file types</p>
    <p>The <code>labelBrowse</code> property sets the label in the button that triggers system file browsing.</p>
    <p>The <code>labelDragAndDrop</code> property sets the label over the browse button.</p>
    <p>The <code>labelDraggingOver</code> property sets the label displayed as the user is dragging a document inside the FilePicker.</p>
    <p>The <code>value</code> property is the file selected by the FilePicker. You can set this property directly to simulate the uploaded document.</p>
    <p>The <code>error</code> property displays an error.</p>
    <p>The <code>warning</code> property displays an warning.</p><br />
    <article className="message is-medium is-info">
      <div className="message-body">
        Use the <code>value</code> property to see the "loaded" state, and remove it to see the "unloaded" state.
      </div>
    </article>
    <a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
  {
    code: `<FilePicker
  acceptedExtensions
  labelbrowse
  labelDragAndDrop
  labelDraggingOver
  value
  error
  warning
/>
`
  },
  {
    code: `labelBrowse, labelDragAndDrop, labelDraggingOver, error,
warning: String`
  },
  {
    code: `acceptedExtensions: String[]`
  },
  {
    code: `value: {name: String}
// This simulates an uploaded file.`
  },
]

export const anchorId = "file-picker"
