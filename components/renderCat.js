import { getSingleCatObject } from "./getSingleCatObject.js";

export function renderCat(memeModalInner, memeModal) {
    const catObject = getSingleCatObject();

    memeModalInner.innerHTML = `
        <img 
        class="cat-img" 
        src="./assets/images/${catObject.image}"
        alt="${catObject.alt}"
        >
    `;
    memeModal.style.display = "flex";
}
