"use strict";

const passwordForms = document.querySelectorAll(".input_password");

const findError = (enter, approve) => {
  const error = approve.value === enter.value ? true : false;
  return error;
};

const successHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid green";
  });
};

const errorHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid red";
  });
};

passwordForms[1].addEventListener("input", () => {
  if (findError(passwordForms[0], passwordForms[1])) {
    successHighlight(passwordForms);
  } else {
    errorHighlight(passwordForms);
  }
});
