// This file handles file input and upload.
const fileInput = document.querySelector(".file_input");
const fileUpload = document.querySelector(".uploadBtn");

fileUpload.addEventListener("click", () => {
  fileInput.click()
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault()
  const files = e.dataTransfer.files;
  console.log(files)
  if (files.length) {
    fileInput.files;
  }
});


