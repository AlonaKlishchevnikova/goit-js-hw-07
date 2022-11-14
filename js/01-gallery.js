import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createImgCardMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);
galleryEl.addEventListener('click', onGalleryElClick)
function createImgCardMarkup( galleryItems ) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;

    }).join('');

}
function onGalleryElClick(e) {
       e.preventDefault();
 
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
 const instance = basicLightbox.create(`
		 <img src="${e.target.dataset.source}" width="1280">
`)
	instance.show();


};

