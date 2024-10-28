const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')
const overlay = document.getElementById('menu-overlay');
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');
// event menu
document.addEventListener('click', (e)=>{
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('top-menu-expanded')
        topMenu.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
        document.body.classList.toggle('menu-expanded')
    }
    else{
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
            overlay.classList.add('hidden')
            document.body.classList.remove('menu-expanded')
        }
    }
})

/////
var swiper_img_customer = new Swiper(".swiper_img_customer_container", {
  
    // grabCursor: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     prev: {
    //       shadow: true,
    //       translate: ["-20%", 0, -1],
    //     },
    //     next: {
    //       translate: ["100%", 0, 0],
    //     },
    //   },
    slidesPerView: 1,
     
      freeMode: true,
      navigation: {
        nextEl: ".cus_img_next",
        prevEl: ".cus_img_prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
   
  });

 /// toggle
const toggleIcons = document.querySelectorAll('.toggle-icon');
const toggleContents = document.querySelectorAll('.toggle-content');

toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
     
        toggleContents.forEach((content, i) => {
            if (i !== index) {
                content.classList.add('hidden'); 
                content.classList.remove('flex'); 
            }
        });

        const content = toggleContents[index];
        const svgPath = icon.querySelector('path');

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden'); 
            content.classList.add('flex'); 
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z');
            
           
        } else {
            content.classList.add('hidden'); 
            content.classList.remove('flex'); 
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z');
        }
    });
});

///swiper table_price

var swiper_table_service = new Swiper(".swiper_table_service_container", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /////

  var swiper_offers_cus = new Swiper(".swiper_offers_cus_container", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
    
        350: {
            slidesPerView: 1, 
            slidesPerGroup: 1, 
        },
        
        1024: {
            slidesPerView: 2, 
            slidesPerGroup: 1, 
        },
       1920:{
        slidesPerView: 3, 
        slidesPerGroup: 1, 
       }
    },
  });