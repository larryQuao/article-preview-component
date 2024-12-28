const shareButton = document.querySelector('.share-button');
const shareButtonDark = document.querySelector('.share-button__dark'); // Select the dark share button
const shareContent = document.querySelector('.share-content');
const authorDetails = document.querySelector('.author-details');
const body = document.body;

shareButton.addEventListener('click', () => {
  shareContent.classList.toggle('is-open');
  authorDetails.classList.toggle('hidden');
  body.classList.toggle('is-open');
});

// Add a separate event listener for the dark share button
shareButtonDark.addEventListener('click', () => {
  shareContent.classList.remove('is-open'); // Hide share content
  authorDetails.classList.remove('hidden'); // Show author details
  body.classList.remove('is-open');     // Remove body class (if used)
});

