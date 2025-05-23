

const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')
const overlay = document.getElementById('menu-overlay');
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');
// event menu
document.addEventListener('click', (e)=>{
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('top-menu-expanded')
        
        overlay.classList.toggle('hidden')
        document.body.classList.toggle('menu-expanded')
    }
    else{
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
           
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
    slidesPerView: 3,
  loop:true,
      grid: {
        rows: 3,
        
      },
      freeMode: true,
      grabCursor: true,
      navigation: {
        nextEl: ".cus_img_next",
        prevEl: ".cus_img_prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
    
        350: {
            slidesPerView: 1, 
        },
        
        640: {
            slidesPerView: 2, 
        },
       1024:{
        slidesPerView: 3, 
       },
       1280:{
        slidesPerView: 4, 
       },
       
       1536:{
        slidesPerView: 3, 
       }
    },
    
   
  });

 /// toggle


 //
// const toggleIcons = document.querySelectorAll('.toggle-icon');
// const toggleContents = document.querySelectorAll('.toggle-content');

// toggleIcons.forEach((icon, index) => {
//   icon.addEventListener('click', () => {
//       const content = toggleContents[index];
//       const svgPath = icon.querySelector('path');
      
//       if (content.style.height === '0') {
//         content.style.height = 'fit-content';  
//         content.style.opacity = 1;
//         svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z');  
//         // content.style.maxHeight= '0';

        

//           // content.style.display = 'block';  
         
          
//       } else {
//         content.style.height= '0';
//         content.style.opacity= '0';
//         svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z'); 

       
//       }
//   });
// });


const toggleIcons = document.querySelectorAll('.toggle-icon');
const toggleContents = document.querySelectorAll('.toggle-content');

toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const content = toggleContents[index]; // Lấy nội dung tương ứng với biểu tượng
        const svgPath = icon.querySelector('path');

        if (content.classList.contains('hidden')) {
            content.style.height = 'fit-content'; 
            content.classList.remove('hidden');
            content.classList.add('visible'); // Thêm lớp visible khi hiển thị
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z');
        } else {
            content.style.height = '0'; 
            content.classList.remove('visible'); // Xóa lớp visible khi ẩn
            content.classList.add('hidden'); // Thêm lớp hidden khi ẩn
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z');
        }
    });
});

///swiper table_price

var swiper_table_service = new Swiper(".swiper_table_service_container", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".cus_table_price_next",
      prevEl: ".cus_table_price_prev",
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
        nextEl: ".swiper-offers-cus-next",
        prevEl: ".swiper-offers-cus-prev",
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



var Anima = {
  initAnimation: function() {
      var width_ = window.innerWidth;
      if (width_ > 1023) {
          var wow = new WOW();
          wow.init();
      }
  },
init: function() {
  Anima.initAnimation();
}
}
document.addEventListener('DOMContentLoaded', function() {
Anima.init();
});
