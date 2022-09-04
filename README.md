# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Full page](./Screenshot%202022-09-04%20at%2013-37-24%20Frontend%20Mentor%20Intro%20component%20with%20sign%20up%20form.png)

### Links

- Solution URL: [(https://github.com/Ross-Berry/intro-component-with-sign-up-form-angular/tree/main)]
- Live Site URL: [(https://ross-berry.github.io/intro-component-with-sign-up-form-angular/)]
- Live API URL: [https://registry-api.herokuapp.com/users]

## My process

### Built with

- HTML
- CSS
- TypeScript
- [Angular](https://angular.io/) - JavaScript framework
- [SASS](https://sass-lang.com/) - CSS Extension 
- Flexbox
- Mobile responsive
- Reactive forms

### What I learned

I have learnt how to use Angular's own built-in reactive forms module. For example, how to quickly build reactive forms using the reactive forms builder service, bind individual controls to template elements using directives, listen in to any changes as observable streams and provide quick validation using reactive Validators where needed.

```ts
this.registerForm = this.fb.group({
  firstName: ["", Validators.required],
  lastName: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
  password: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8,}$/)]] // Minimum 8 characters or numbers
})
```

### Continued development

I would like to continue using Angular and TypeScript together with the reactive forms module and maybe try out creating some dynamic forms using the FormArray class and formArray directive.

### Useful resources

- [Angular Crash](https://www.youtube.com/watch?v=3dHNOWTI7H8) - This crash course by Traversy Media was a great help in getting me started using Angular and TypeScript. I especially liked how he broke down the course into different sections.
- [Reactive forms](https://angular.io/guide/reactive-forms#reactive-forms) - This is an amazing guide which helped me finally understand reactive forms. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Ross-Berry](https://www.frontendmentor.io/profile/Ross-Berry)

## Acknowledgments

I would like to give credit, as previously noted, to Traversy Media for providing a brilliant introduction on YouTube with their Angular crash course. I would also like to thank all those who have contributed to Stack Overflow, as without them, I would be stuck a lot more than I am.