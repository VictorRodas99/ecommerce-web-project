/**
 * @param {Event} event
 * @returns {{
 *  containers: {
 *    currentImage: HTMLDivElement,
 *    mainImageContainer: HTMLDivElement,
 *    gallery: HTMLDivElement
 *  },
 *  images: {
 *    gallery: {
 *      first: HTMLImageElement,
 *      current: HTMLImageElement,
 *      lastImage: HTMLImageElement
 *    },
 *  mainImage: HTMLImageElement
 *  }
 * }}
 */
export const getGalleryElements = (event) => {
    const currentImageContainer = event.currentTarget
    const gallery = currentImageContainer.parentElement
    const firstImageInGallery = gallery.firstChild.firstChild
    const lastImageInGallery = gallery.lastChild.firstChild
    const mainImageContainer = gallery.nextElementSibling

    const currentImage = event.target
    const [mainImage] = mainImageContainer.children

    return {
        containers: {
            currentImage: currentImageContainer,
            mainImageContainer,
            gallery
        },
        images: {
            gallery: {
                first: firstImageInGallery,
                current: currentImage,
                lastImage: lastImageInGallery
            },
            mainImage
        }
    }
}

export const getImageNumber = (gallery, imageContainer) => {
    return Array.from(gallery.children).indexOf(imageContainer) + 1
}