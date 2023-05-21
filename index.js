
    //swiper js for products div 
    const swiper2  = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        keyboard: {
            enabled: true,
          },
        
      });

      const mediaQuery = window.matchMedia("(max-width: 767px)");

      function handleMobileView(event) {
        if (event.matches) {
          // Adjust slidesPerView for mobile phones
          swiper2.params.slidesPerView = 1;
          swiper2.update();
        } else {
          // Revert back to default slidesPerView for larger screens
          swiper2.params.slidesPerView = 3;
          swiper2.update();
        }
      }

      // Initial check for mobile view on page load
      handleMobileView(mediaQuery);

      // Register the event listener for screen size changes
      mediaQuery.addListener(handleMobileView);

      //newsletter subscription 
      const newsLetterForm = document.getElementById('newsletter-form')
      const newsLetterContainer = document.querySelector('.newsletter')
      const emailForm = document.getElementById('email-form')
      const submitButton = document.querySelector('.btn[type="submit"]');
     

      newsLetterForm.addEventListener('submit', validateSubscription)

      function validateSubscription(e) {
            e.preventDefault()
           const messageDiv = document.createElement('div')
           messageDiv.classList.add('subscription')
           emailForm.value = ''
           newsLetterContainer.appendChild(messageDiv)
           messageDiv.innerHTML = `<p>Subscription Successful</p> <i class="fa-sharp fa-solid fa-xmark" id='close'></i>`
           submitButton.disabled = true;

           const closeIcon = document.getElementById('close')
           closeIcon.addEventListener('click', ()=> {
            messageDiv.remove()
            submitButton.disabled = false;
        })
      }

     
     const dropDown =  document.getElementById("shop-dropdown")
     const subMenu = document.querySelector('.categories-sub-menu')
      
      dropDown.addEventListener('click', function () {
        subMenu.classList.toggle('active')
      })

      const showMenu = document.getElementById('bar')
      const menu = document.getElementById('main-menu')
      const closeMenu = document.getElementById('close-menu')

      showMenu.addEventListener('click', function (){
          menu.style.left = '-5px'
      })

      closeMenu.addEventListener('click', function (){
        menu.style.left = '-105%'
    })