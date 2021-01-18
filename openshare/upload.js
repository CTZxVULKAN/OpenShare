// This file handles file input and upload.
const fileInput = document.querySelector(".file_input");
const fileUpload = document.querySelector(".uploadBtn");
const bgProgress = document.querySelector(".bg-progress");
const host = "https://innshare.herokuapp.com";
const uploadURL = `${host}/api/files`;

fileUpload.addEventListener("click", () => {
  fileInput.click();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  //console.log(files);
  if (files.length) {
    fileInput.files = files;
    uploadFile();
  }
});

fileInput.addEventListener("change", () => {
  uploadFile();
});

const uploadFile = () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("myfile", file);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
    }
  };

  xhr.upload.onprogress = updateProgressbar;
  xhr.open("POST", uploadURL);
  xhr.send(formData);
};

const updateProgressbar = (e) => {
  const progress = Math.round((e.loaded / e.total) * 100);
  bgProgress.style.width = `${progress}%`
};
