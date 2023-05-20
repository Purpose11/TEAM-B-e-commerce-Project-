document.addEventListener('DOMContentLoaded', function(){
        // array of product details for each product
            const details = [
        {
            'id' : 1, 
            'title' : "Brown Sneakers", 
            'message' : " These brown sneakers are made from high-quality leather material that ensures durability and comfort. They feature a lace-up closure and a round toe design. The rubber outsole provides excellent traction and stability on different surfaces. These sneakers are perfect for casual occasions and can be paired with jeans or shorts."
        },
        {
            'id' : 2, 
            'title' : "Long-sleeve Men", 
            'message' : "Introducing our classic long sleeve men's shirt, perfect for any occasion. Made with high-quality cotton material, this shirt is not only comfortable but durable enough to last wear after wear.", 
        },  
        {
            'id' : 3, 
            'title' : "Brown Leather", 
            'message' :  "These men's brown leather dress shoes from Oxford & Co. are the perfect addition to any wardrobe. Made with genuine leather and a durable rubber sole, these shoes provide both comfort and style. The leather lining ensures breathability, making them perfect for all-day wear. Featuring a classic lace-up closure and a sleek oxford style, these shoes are perfect for formal occasions or dressing up any casual outfit. Available in sizes US 7-13, these shoes are a must-have for any fashion-forward man",
        }, 
        {
            'id' : 4, 
            'title' : "Shirt 3 in 1", 
            'message' :  " Stay cool and comfortable in our Men's Short Sleeve Button-Down Shirt. Made from [Material], this shirt features a relaxed fit with short sleeves and a classic button-down front. It is available in a range of [Color] colors and a variety of sizes, so you can find the perfect fit. Whether you're dressing up for a special occasion or keeping it casual on the weekend, this shirt is sure to be a versatile addition to your wardrobe.",
        },
        {
            'id' : 5, 
            'title' : "Face cap", 
            'message' : " Stay cool and protected from the sun with this classic black face cap. Made with lightweight and breathable cotton, this cap features a curved bill and an adjustable strap for a comfortable fit. The front of the cap is embroidered with a sleek and minimalist design.", 
        },
        {
            'id' : 6, 
            'title' : 'Women Heel', 
            'message' : " Stay cool and protected from the sun with this classic black face cap. Made with lightweight and breathable cotton, this cap features a curved bill and an adjustable strap for a comfortable fit. The front of the cap is embroidered with a sleek and minimalist design.", 
        },
        {
            'id' : 7, 
            'title' : "Apple Watch", 
            'message' : "The Apple Watch Series 7 is the ultimate companion for your active lifestyle. With its always-on retina display, you can easily keep track of your workouts, messages, and notifications without having to lift your wrist. The watch comes with a range of health and fitness features, including a blood oxygen sensor, ECG app, and workout tracking for all your favorite activities."
        }, 
        {
            'id' : 8, 
            'title' : "Shirt Women", 
            'message' : "This Women's Pink Short Sleeve Polo Shirt by Polo Ralph Lauren is crafted from soft and lightweight cotton fabric that ensures comfort and breathability. It features a classic fit with short sleeves, ribbed polo collar, and two-button placket. The shirt is detailed with ribbed armbands and a tennis tail for a sporty touch. The signature embroidered pony on the left chest adds a stylish and recognizable accent to this classic shirt. Perfect for casual outings or a day on the golf course, this shirt is a must-have for any woman's wardrobe."
        },
        {
            'id' : 9, 
            'title' : "Pressing Iron", 
            'message' : "The Philips Azur Elite Steam Iron is a high-quality iron with a powerful steam output that helps remove stubborn wrinkles from clothes quickly and easily. It features a durable and scratch-resistant soleplate that glides smoothly over fabrics, an easy-fill water tank that allows for longer ironing sessions, and an automatic shut-off function for safety. The iron also has various steam and temperature settings that cater to different types of fabrics, making it suitable for a wide range of ironing tasks."
        },
        {
            'id' : 10, 
            'title' : "FIRMAN Generator", 
            'message' : "The Firman generator is a powerful and reliable portable gas-powered generator that is perfect for use at home or on the go. It features a durable and heavy-duty steel frame and is designed to deliver clean and stable power to all your electrical devices. With a peak power output of up to 4550 watts and a running power output of 3650 watts, this generator is capable of powering multiple appliances and devices simultaneously"
        },  
        {
            'id' : 11, 
            'title' : "Shirt Men", 
            'message' : "Add a classic touch to your wardrobe with our Men's Short Sleeve Black Shirt. Made from 100% cotton, this shirt features a stylish black color that's perfect for any occasion. The short sleeve design provides breathability, making it ideal for warm weather."
        }, 
        {
            'id' : 12, 
            'title' : 'Blender', 
            'message' : "The Ninja Professional Blender is a high-powered kitchen tool that can handle all of your blending needs. With a 72-ounce capacity, this blender is perfect for making large batches of smoothies, frozen drinks, and more. It features a powerful 1000-watt motor and six blades that can crush ice and blend even the toughest ingredients. The blender also has a sleek design with easy-to-use controls and a dishwasher-safe pitcher for easy cleanup."
        },
        {
            'id' : 13, 
            'title' : "Headset", 
            'message' : "The Sony WH-1000XM4 is a premium wireless noise-cancelling headset that delivers exceptional audio quality and comfort. Its adaptive noise-cancelling technology constantly analyzes the ambient sound and adjusts the level of noise-cancellation for an optimal listening experience. The headset comes with touch controls for easy operation and a long battery life of up to 30 hours on a single charge."
        }, 
        {
            'id' : 14, 
            'title' : "Home Theatre", 
            'message' : "The Sony HT-S350 Soundbar is the perfect addition to any home theater. It features a wireless subwoofer and 2.1 channel soundbar, providing you with powerful and immersive sound. The soundbar is easy to set up and can be connected to your TV via HDMI Arc or Bluetooth. It is also compatible with various audio formats, including Dolby Digital and DTS."
        },
        {
            'id' : 15, 
            'title' : "Small Oven", 
            'message' : " The Hamilton Beach Toastation is a compact and versatile toaster oven that can bake, broil, and toast. It has a 2-slice toaster on top and a small oven on the bottom, making it perfect for small kitchens or for those who don't need a full-sized oven. "
        },
        {
            'id' : 16, 
            'title' : "Smart TV", 
            'message' : "This Samsung smart TV is packed with features to enhance your viewing experience. With a 65-inch display and 4K resolution, you'll enjoy stunning picture quality. It features Samsung's Neo QLED technology, which provides precise and accurate colors, deep blacks, and bright whites. "
        },
        {
            'id' : 17, 
            'title' : "Wireless Mouse", 
            'message' : "The Logitech M185 Wireless Mouse is a compact and reliable wireless mouse that offers high performance and comfort. It features a reliable wireless connection that delivers up to 33 feet of range, making it perfect for use with a laptop or desktop computer. The mouse has a sleek and ergonomic design that fits comfortably in your hand and provides excellent control and precision."
        },
        {
            'id' : 18, 
            'title' : "Hp Laptop", 
            'message' : "The HP Pavilion x360 is a versatile 2-in-1 convertible laptop that's perfect for both work and play. With a 14-inch Full HD touchscreen display and a 360-degree hinge, you can easily switch between laptop, tablet, tent, and stand modes, depending on your needs."
        },
        {
            'id' : 19, 
            'title' : "Deskjet Printer", 
            'message' : "The HP Deskjet printer is a reliable and efficient inkjet printer that is suitable for personal or small office use. With its compact size and sleek design, it can easily fit on a desk or shelf without taking up too much space."
        },
        {
            'id' : 20, 
            'title' : "Play station 5", 
            'message' : "The PlayStation 5 (PS5) is a gaming console developed by Sony Interactive Entertainment. It features advanced hardware, including a custom AMD Zen 2 processor with 8 cores at 3.5 GHz, 16 GB of GDDR6 RAM, and a custom RDNA 2 AMD GPU that delivers up to 10.28 teraflops of processing power."
        },

        ]
        const ProductDiv = document.querySelectorAll('.product')
        const productDetails = document.getElementById('product-details')
        const overLay = document.getElementById('overlay')
        const ShowCart = document.getElementById('show-cart')
        const cart = document.getElementById('shopping-cart')
        const cartItemContainer = document.getElementById('cart-item-container')
        const numberOfItemsInCart = document.getElementById('count-item')
        const overallTotalPrice = document.getElementById('total')
       

        let title, price, image, quantityInput; 
    
      
        


        // adding a click event-listener to each product-div 
        ProductDiv.forEach( div => {
            div.addEventListener('click', showProductDetailsDiv)
        })

        //adding a click event-listener to close the product details div
        productDetails.addEventListener('click', function (event) {
            if (event.target.id === 'close') {
            productDetails.style.visibility = 'hidden';
            overLay.style.display = 'none';
            }
        });

        //adding item to cart
        productDetails.addEventListener('click', function (event) {

            const addToCartBtn = event.target.closest('#add-to-cart-btn')
            if (addToCartBtn) {
                quantityInput = addToCartBtn.parentNode.querySelector('#quantity')
                    let itemQuantity = quantityInput.value
                    if (  itemQuantity < 1) {
                        itemQuantity = 1
                    }

                const itemPrice = parseFloat(price.replace('$', '')); 
                let  totalPrice = itemQuantity * itemPrice;
                totalPrice = "$" + totalPrice

                let actualOverallPrice = overallTotalPrice.innerText
                const newOverallTotal = parseFloat(actualOverallPrice.replace('$', ''))
                const calcTotalPrice = parseFloat(totalPrice.replace('$', ''))
                updatedOveralltotal = newOverallTotal + calcTotalPrice

                overallTotalPrice.innerText = "$" + updatedOveralltotal;

                console.log(updatedOveralltotal)

                const myCart = document.createElement('div')
                myCart.classList.add('cart-item')
                    myCart.innerHTML = 
                `<div class="cart-item">
                    <img src=${image}>
                    <p class="item-title">${title}</p>
                    <p class="item-quantity">${itemQuantity}</p>
                    <p class="item-price">${totalPrice}</p>
                    <i class="fa-solid fa-trash"></i>
                </div> `
                alert('Item Added To Cart Sucessfully!')
                cartItemContainer.appendChild(myCart)
                productDetails.style.visibility = 'hidden';
                overLay.style.display = 'none';
                numberOfItemsInCart.innerText = cartItemContainer.children.length;
               
            }

        });

        // functon to show the product details div 
        function showProductDetailsDiv (event) {
            productDetails.style.visibility = 'visible'
            overLay.style.display = 'block'
            const product = event.target.closest(".product");
             title = product.querySelector('.price-container p').innerText
             price = product.querySelector('.price-container .price').innerText
            image = product.querySelector('img').src  
        
            productId = Number(product.id)

            // getting the product details for each product from the details array
            const filteredDetails = details.filter(detail => detail.id === productId);
            if (productId === 2 || productId === 4 || productId === 8 || productId == 11) {
                productDetails.innerHTML = ` 
            <div class="product-image">
            <i class="fa-solid fa-xmark" id='close'></i>
                <img src= ${image}>    
            </div>
                <div class="product-info">
                    <h2>${title}</h2> 
                    <p class="price">${price}</p>
                    <select class = 'shirtSize'>
                        <option>Select Size</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select> <br>
                    <input type="number" value="1" id='quantity'>
                    <button id='add-to-cart-btn'>ADD TO CART</button>
                        <p class="p-details">Product Details</p>
                        <p class="details">
                            ${filteredDetails[0].message}
                        </p>
                </div>`

            }
                
            else if ( productId === 1 || productId === 3 || productId === 6 ) {
                productDetails.innerHTML = ` 
                <div class="product-image">
                <i class="fa-solid fa-xmark" id='close'></i>
                    <img src= ${image}>    
                </div>
                    <div class="product-info">
                        <h2>${title}</h2>
                        <p class="price">${price}</p>
                        <select class = 'shirtSize'>
                            <option>Select Size</option>
                            <option>EU 40</option>
                            <option>EU 41</option>
                            <option>EU 42</option>
                            <option>EU 43</option>
                            <option>EU 44</option>
                        </select> <br>
                        <input type="number" value="1" id='quantity'>
                        <button id='add-to-cart-btn'>ADD TO CART</button>
                            <p class="p-details">Product Details</p>
                            <p class="details">
                                ${filteredDetails[0].message}
                            </p>
                    </div>`
            }
            else {
                productDetails.innerHTML = ` 
            <div class="product-image">
            <i class="fa-solid fa-xmark" id='close'></i>
                <img src= ${image}>    
            </div>
                <div class="product-info">
                    <h2>${title}</h2>
                    <p class="price">${price}</p>
                    <input type="number" value="1" id='quantity'>
                    <button id='add-to-cart-btn'>ADD TO CART</button>
                        <p class="p-details">Product Details</p>
                        <p class="details">
                            ${filteredDetails[0].message}
                        </p>
                </div>`

            }     

        }
        
        ShowCart.addEventListener('click', displayCart)
        
        function displayCart(){
            if (cartItemContainer.children.length === 0 ){
                alert('Cart Is Empty')
            }
            else {
                cart.classList.toggle('visible')
            }
            

        }

        const closeCart = document.getElementById('closeCart')
        closeCart.addEventListener('click', function () {
            cart.classList.remove('visible')
        })
        
         
      
})
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