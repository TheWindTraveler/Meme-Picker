import { catsData } from "./data/catsData.js";
import { closeModal } from "./components/closeModal.js";
import { renderCat } from "./components/renderCat.js";
import { highlightCheckedOption } from "./components/highlightCheckOption.js";
import { getEmotionsArray } from "./components/getEmotionsArray.js";
import { renderEmotionsRadios } from "./components/renderEmotionsRadios.js";

const getImageBtn = document.getElementById("get-image-btn");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");
const memeModal = document.getElementById("meme-modal");

memeModalCloseBtn.addEventListener('click', () => closeModal(memeModal));
getImageBtn.addEventListener('click', () => renderCat(memeModalInner, memeModal));

renderEmotionsRadios(catsData);