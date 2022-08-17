import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';



// Change code below this line


const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createImagesCards(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createImagesCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>`
    }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "alt",
  captionDelay: 250,
    
});