export const checkImageUrl = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      `^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$`,
      `i`
    );
    return pattern.test(url);
  }
};

//this function checks whether the image url and check if it exists
