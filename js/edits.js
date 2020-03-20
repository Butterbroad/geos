$('.clients__row').slick({
  centerMode: true,
  centerPadding: '5px',
  wariableWidth: true,
  slidesToShow: 5,
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        wariableWidth: true,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        wariableWidth: true,
        slidesToShow: 2,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M8.78077 8.03531L2.03534 14.7785C1.73936 15.0737 1.25981 15.0737 0.96308 14.7785C0.667094 14.4833 0.667094 14.0037 0.963079 13.7085L7.17347 7.50034L0.963824 1.29219C0.667838 0.996956 0.667838 0.517414 0.963823 0.221429C1.25981 -0.0738087 1.7401 -0.0738087 2.03608 0.221429L8.78152 6.96455C9.07295 7.25674 9.07295 7.74381 8.78077 8.03531Z"fill="#1A3152"/> </svg></button>',
      }
    },
    {
      breakpoint: 426,
      settings: {
        centerMode: true,
        centerPadding: '50px',
        wariableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M8.78077 8.03531L2.03534 14.7785C1.73936 15.0737 1.25981 15.0737 0.96308 14.7785C0.667094 14.4833 0.667094 14.0037 0.963079 13.7085L7.17347 7.50034L0.963824 1.29219C0.667838 0.996956 0.667838 0.517414 0.963823 0.221429C1.25981 -0.0738087 1.7401 -0.0738087 2.03608 0.221429L8.78152 6.96455C9.07295 7.25674 9.07295 7.74381 8.78077 8.03531Z"fill="#1A3152"/> </svg></button>',
      }
    }
  ]
});


const fileInput = document.querySelectorAll('.file-input');
const clearFileInput = document.querySelectorAll('.input-file-del');
let fileInputText = document.querySelectorAll('.file-input-text');


for (i = 0; i < clearFileInput.length; i++) {

  clearFileInput[i].addEventListener('click', () => {

    for (k = 0; k < fileInput.length; k++) {
      fileInput[k].value = "";
    }

    for (j = 0; j < fileInputText.length; j++) {
      fileInputText[j].innerHTML = "Прикрепить файл";
    }


  });

}


