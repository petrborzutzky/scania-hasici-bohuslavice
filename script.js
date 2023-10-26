import { imagesData } from './imagesData.js';

function changePhoto(photoNumber) {
  document.getElementById('photo').src = imagesData[photoNumber].photo;
  document.getElementById('photo-title').innerHTML =
    imagesData[photoNumber].title;
  document.getElementById('photo-description').innerHTML =
    imagesData[photoNumber].description;
  setActiveThumbnail(photoNumber);
}

function setActiveThumbnail(photoNumber) {
  const activeThumbnail = document.querySelector(
    '.thumbnail-element.active-thumbnail'
  );
  if (activeThumbnail) {
    activeThumbnail.classList.remove('active-thumbnail');
  }
  thumbnailContainer.children[photoNumber].classList.add('active-thumbnail');
}

console.log(imagesData);

document.getElementById('right-arrow').addEventListener('click', () => {
  if (currentPhoto < imagesData.length - 1) {
    currentPhoto++;
  } else {
    currentPhoto = 0;
  }
  changePhoto(currentPhoto);
});

document.getElementById('left-arrow').addEventListener('click', () => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } else {
    currentPhoto = imagesData.length - 1;
  }
  changePhoto(currentPhoto);
});

const thumbnailContainer = document.getElementById('thumbnail-container');

imagesData.forEach((image, index) => {
  const thumbnailElement = document.createElement('div');
  thumbnailElement.classList.add('thumbnail-element');
  thumbnailContainer.appendChild(thumbnailElement);

  const thumbnailLabel = document.createElement('div');
  thumbnailLabel.classList.add('thumbnail-label');
  thumbnailLabel.innerHTML = image.title;
  thumbnailElement.appendChild(thumbnailLabel);

  const thumbnailImage = document.createElement('img');
  thumbnailImage.classList.add('thumbnail-image');
  thumbnailImage.src = image.photo;
  thumbnailElement.appendChild(thumbnailImage);

  thumbnailElement.addEventListener('click', () => {
    changePhoto(index);
  });
});

thumbnailContainer.children[0].classList.add('active-thumbnail');

let currentPhoto = 0;

changePhoto(currentPhoto);
