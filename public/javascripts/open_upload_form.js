// JavaScript to toggle the visibility of the file upload form
const uploadButton = document.getElementById('uploadButton');
const uploadForm = document.querySelector('.upload-form');
const closeButton = document.getElementById('closeButton');

uploadButton.addEventListener('click', () => {
  uploadForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  uploadForm.style.display = 'none';
});