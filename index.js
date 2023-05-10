    //swiper js  for image-slider
    const swiper = new Swiper('.slider-container', {
        effect: "fade",
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
          },

        pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        },

        keyboard: {
            enabled: true,
          },
        
    });

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

    