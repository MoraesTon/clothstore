let thumbs = document.querySelectorAll('.ico');
const mainImg = document.querySelector('.main-img');

for(let t = 0; t <= thumbs.length; t++) {
  thumbs[t].addEventListener('mouseover', () => {
    function setImg() {
      mainImg.setAttribute('src', `./assets/img${t}.jpg`);
    }
    switch (t) {
      case 0:
        setTimeout(setImg, 500);
        break;
      case 1:
        setTimeout(setImg, 500);
        break;
      case 2:
        setTimeout(setImg, 500);
        break;
      case 3:
        setTimeout(setImg, 500);
        break
      case 4:
        setTimeout(setImg, 500);
        break
    }
  });
}
