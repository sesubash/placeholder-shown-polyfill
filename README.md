# placeholder-shown-pollyfill
Polyfill for pseudo selector :placeholder-shown

SPEC: https://drafts.csswg.org/selectors-4/#placeholder

Reference:  https://codepen.io/wesbos/pen/KggoOo

Usage:

intallation:
npm install placeholder-shown-polyfill

HTML:
<input type="text" placeholder="First Name">

CSS:

input {
  border: 5px solid red;
  outline: 0;
  font-size: 20px;
  padding: 20px;
  margin: 50px;
}

input:placeholder-shown, input.placeholder-shown {
  border-color: green;
}
