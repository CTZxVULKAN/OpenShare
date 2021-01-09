const dropZone = document.querySelector(".upload-section")

dropZone.addEventListener("dragover", (e) => {
  console.log("file dragged");
  e.preventDefault()
  if (!dropZone.classList.contains("dragged")) {
    dropZone.classList.add("dragged")
  }
});

dropZone.addEventListener("dragleave", () => {
  console.log("file undragged")
  dropZone.classList.remove("dragged")
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault()
  console.log("file dropped")
  dropZone.classList.remove("dragged")
});


