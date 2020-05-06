import React from 'react';

const example = "https://service-playroom-staging.brigad.tools/#?code=N4Igxg9gJgpiBcIA8AhaBPAchATgWwEMAbAAkiNwF4AdEAF3QAcIBaCAOxaIEsBzACzpcIAd1oA+auxIkAEjCIUAhCQCSAcjwkCJRjhh0GJCu167uMMDBIQAZiTowAHnQA0akvwIA3axToAzjb2AXQArrb2dBAkAQToAHRSMrKiML447qpkBNIA1jAwjCS8ENym2uxQJWUVudWl5Wb1NU2VDbXNVa113Y2mWST6xEToJFAc6nTGEBB5Dl7TpdA20kQEOLzWAWD6MOxBABQ7OBCKQ3yCAJRJ7EgA9GhQWLiERJJ3AAobBLw4BIx+B8ZKgMNh8MQyGcqLQGMw2JweAIhPxLhJkjI5AplGpNNpdPpDGMTGZGBYrMEHM43B4vL4ZoFKaEIlEYnFEhiZAAZMJgPLcUbuOj8azff5-AH8KF4ZjsfbTLxBET-RiMGDVPDbGIaLR4XDWYZQAgAIyIMFuIMeYNexA+DzFvxVQKkIAAvkA"

export const documentation =
  <>
    <h1 className="title is-3 is-spaced">Paragraph</h1>
    <p>Anything you put inside the <code>Paragraph</code> container will have a maximal width that is optimal for paragraphs.</p>
    <br /><a href={example} target="_blank" rel="noopener noreferrer">
      <button class="button is-dark">Play</button>
    </a>
  </>


export const codeSnippets = [
{
  code: `<Paragraph>
  {/* Text component goes here */}
</Paragraph>`
},
]
