const imagesData = [
  {
    photo: 'images/xjqhyg9ftr.1400.jpg',
    title: 'Scania',
    description: 'Cisterna Scania CAS 30/8500/510 - S2R, JSDH Bohuslavice',
  },

  {
    photo: 'images/dfx9pihfnx.1400.jpg',
    title: 'Scania',
    description:
      'Vozidlo je vybaveno navijákem s tažnou silou 2.5t. Nad předním nárazníkem je na levé straně umístěna hasící lafeta. Tato je ovládána joystickem ze sedadla spolujezdce.',
  },
  {
    photo: 'images/7wr4i0i8om.1400.jpg',
    title: 'Scania - pravy bok',
    description: 'Vozidlo aktuálně vozí 9000 litrů vody. Délka vozidla je 10m.',
  },
  {
    photo: 'images/hotst0avm4.1400.jpg',
    title: 'Scania - ze zadu',
    description:
      'Za výklopnými dveřmi je ukryto ovládání čerpadla. Dveře obsahují i roletu - není tedy nutno otvírat směrem nahoru celé dveře.',
  },
  {
    photo: 'images/j8m12ne2zt.1400.jpg',
    title: 'Scania - levý bok',
    description:
      'Cisterna obsahuje z boku 2x výsuvnou roletu. Zde je uloženo požární příslušenství. Na boku cisterny je i ledkový vodoměr signalizující množství vody v nádrži.',
  },
];

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
