import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAGyICdKY6d8AjCJ2JgJRJkArgGdaDZq3Z5cogBYkIAdwkKlygLTyyleZpj0YANyIAXMhGyaoK7DPwBbKRQmOY5YY5kA+DriQAZTMiMABrOWIwGAlGFjYQP1l8JAAVMjMjADkeZ3pcSHoeCTMATwIITStNel15M206uiT8VtwASTDOGGwYMHqYHvlB+kYqUTNhMLMYMInnZggwgEvWZQgrJisoADp-FIB6dMyYHKY8ltakAAly4exzGEu2tIzs3KJ8wuK6Moqq6y1PQNHR6Zr7NodLo9PoDIYjMaUCZTGZzMwLLYrNYbbBbbC7CGHY7vc6fZ4BA63Aj3R6XJAHYKhMJJelodBJEAAXyAA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Hyphenate</h1>
    <p>Sometimes, multiline behaviour is a bit unpredictable because of long words not breaking. the <code>Hyphenate</code> component makes sure long words are broken with a hyphen "-", if needed.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Hyphenate>
  {/* Text component goes here */}
</Hyphenate>`
},
]
