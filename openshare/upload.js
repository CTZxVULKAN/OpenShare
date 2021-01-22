// This file handles file input and upload.
const fileInput = document.querySelector(".file_input");
const fileUpload = document.querySelector(".uploadBtn");
const Progressbar = document.querySelector(".progressbar");
const bgProgress = document.querySelector(".bg-progress");
const fgProgress = document.querySelector(".fg-progress");
const progressValue = document.querySelector(".progress-status");
const outputContainer = document.querySelector(".output");
const fileURL = document.querySelector("#fileURL");
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
  Progressbar.style.display = "block";
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("myfile", file);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      displayLink(JSON.parse(xhr.response));
    }
  };

  xhr.upload.onprogress = updateProgressbar;
  xhr.open("POST", uploadURL);
  xhr.send(formData);
};

const updateProgressbar = (e) => {
  const progress = Math.round((e.loaded / e.total) * 100);
  bgProgress.style.width = `${progress}%`
  fgProgress.style.transform = `scaleX(${progress / 100})`
  progressValue.innerText = progress;
};

const displayLink = ({file: url}) => {
  console.log(url);
  Progressbar.style.display = "none";
  outputContainer.style.display = "block";
  fileURL.value = url;
};
