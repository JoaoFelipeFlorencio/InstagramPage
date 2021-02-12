
function changeBackground() {
  const backgrounds = [
    "/public/images/insta-background.jpg",
    "/public/images/insta-background-2.jpg",
    "/public/images/insta-background-3.jpg",

  ];
  const background = $(".instagram-phone");
  let i = 0;
  setInterval(() => {
    background.css('background-image', `url(${backgrounds[i]})`);
    i++;
    i = i > 2 ? 0 : i;
  }, 5000);

}

changeBackground();