# placeholder-shown-pollyfill
Pollyfill for pseudo class :placeholder-shown

Reference:  https://codepen.io/wesbos/pen/KggoOo

Usage:

intallation:
npm install placeholder-shown-pollyfill

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
