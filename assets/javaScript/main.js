/* Open the sidenav */

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.transition = "1.5s";
  }
  
  /* Close/hide the sidenav */
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".5s";
  }
  
  function about() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".1s";
  }
  function services() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".1s";
  }
  function testimonials() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".1s";
  }
  function portfolio() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".1s";
  }
  function team() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".1s";
  }
  function products() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = "1s";

  }
  function contact() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = "1s";

  }







      // -------  BACK-TO-TOP -------


      document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
          // Show or hide the button based on the user's scroll position
          if (window.scrollY > (window.innerHeight * 1)) {
            document.getElementById('back-to-top-btn').style.display = 'block';
          } else {
            document.getElementById('back-to-top-btn').style.display = 'none';
          }
        });
      });


      // -------  BACK-TO-TOP -------
     
     
     
     
     
     
      // -------  LOCATION -------


      document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
          // Show or hide the button based on the user's scroll position
          if (window.scrollY > (window.innerHeight * 1)) {
            document.getElementById('back-to-top-btn2').style.display = 'block';
          } else {
            document.getElementById('back-to-top-btn2').style.display = 'none';
          }
        });
      });


      // -------  LOCATION -------
  






        // ------  BANNER  -----
        
        
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            effect: "fade",
            autoplay: true,
            loop: true,
            delay: 15000,
            pagination: {
                // el: ".swiper-pagination",
                // clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });


        // ------  BANNER  -----








        //   -------  TESTIMONIALS -------


        var swiper = new Swiper(".mySwiper2", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            },
          });


        //   -------  TESTIMONIALS -------




        //   -------  TEAM -------


        var swiper = new Swiper(".mySwiper3", {
          effect: "cube",
          autoplay: true,
          loop: true,
          speed: 2000,
          autoplayHoverPause: false,
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 0,
            shadowScale: 0,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });



        //   -------  TEAM -------