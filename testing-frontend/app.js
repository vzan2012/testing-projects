import { extractPostData, savePost } from "./posts/posts.js";

import { showError } from "./util/dom";

const formElement = document.querySelector("form");

export async function submitFormHandler(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  try {
    const postData = extractPostData(formData);
    await savePost(postData);
  } catch (error) {
    showError(error.message);
  }
}

formElement.addEventListener("submit", submitFormHandler);
