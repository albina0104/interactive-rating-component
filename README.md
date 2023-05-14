# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

| Screenshot 1                       | Screenshot 2                       |
| ---------------------------------- | ---------------------------------- |
| ![](./screenshots/screenshot1.png) | ![](./screenshots/screenshot2.png) |

### Links

- Solution URL: [https://github.com/albina0104/interactive-rating-component](https://github.com/albina0104/interactive-rating-component)
- Live Site URL: [https://albina0104.github.io/interactive-rating-component/](https://albina0104.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- JavaScript
- Mobile-first workflow

### What I learned

- Learned to hide radio buttons, while keeping their functionality by using labels

```scss
input[type='radio'] {
  appearance: none;
  position: absolute;

  &:checked + label {
    background-color: $orange;
    color: $white;
    outline: none;
  }

  &:focus + label {
    outline: rem(1px) solid $white;
  }
}
```

- The `required` attribute is enough to add only to one `<input>` element with the same `name`

```html
<fieldset>
  <input id="rating-1" name="chosen-rating" type="radio" value="1" required>
  <label for="rating-1">1</label>
  <input id="rating-2" name="chosen-rating" type="radio" value="2">
  <label for="rating-2">2</label>
  <input id="rating-3" name="chosen-rating" type="radio" value="3">
  <label for="rating-3">3</label>
  <input id="rating-4" name="chosen-rating" type="radio" value="4">
  <label for="rating-4">4</label>
  <input id="rating-5" name="chosen-rating" type="radio" value="5">
  <label for="rating-5">5</label>
</fieldset>
```

- How to center text in a label

```scss
label {
  text-align: center;

  display: grid;
  place-items: center;
}
```

- To remove a pseudo element `::before` from HTML using JavaScript:

  - First we need to create a CSS rule which sets content to none (and if there's no content - pseudo elements are not rendered)

  ```scss
  .remove-before {
    &::before {
      content: none;
    }
  }
  ```

  - Then we can simply add this class to the needed element using JavaScript

  ```js
  ratingForm.classList.add('centered-text', 'remove-before');
  ```

- How to navigate through radio buttons with a keyboard:
  - The fieldset is focusable on pressing Tab
  - Arrow keys are used for going through the options
  - Space - for selecting a specific option
  - Press Tab to go to the next focusable element (in this case, from the fieldset to the submit button)

## Author

- Frontend Mentor - [@albina0104](https://www.frontendmentor.io/profile/albina0104)
- GitHub - [albina0104](https://github.com/albina0104)
