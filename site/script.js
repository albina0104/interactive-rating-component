const ratingForm = document.getElementById('rating-card');

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let chosenRating = ratingForm.querySelector('input:checked').value;

  ratingForm.classList.add('centered-text', 'remove-before');

  ratingForm.innerHTML = `
    <img src='images/illustration-thank-you.svg' alt='' class='img--thankyou'>
    <p>
      <span class='you-selected-rating'>
        You selected ${chosenRating} out of 5
      </span>
    </p>
    <h1 class='rating-card__heading'>
      Thank you!
    </h1>
    <p class='rating-card__text'>
      We appreciate you taking the time to give a rating. If
      you ever need more support, don't hesitate to get in touch!
    </p>
  `;
});
