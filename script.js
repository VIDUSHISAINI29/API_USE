

const api = 'https://fakestoreapi.com/products';


// fetch(api,{
//     method:"POST",
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic',
//         }

//     ),
// })

// .then(resp => resp.json())
// .then(json => console.log(json));


const main_elem = document.querySelector('.items_container');
const women_btn = document.querySelector('.women');
const men_btn = document.querySelector('.men');
const jewel_btn = document.querySelector('.jewel');
const electronics_btn = document.querySelector('.electronics');

const men_img_scr_array = [];
const men_title_array = [];
const men_price_array = [];
const women_img_scr_array = [];
const women_title_array = [];
const women_price_array = [];
const jewelery_img_scr_array = [];
const jewelery_title_array = [];
const jewelery_price_array = [];
const electronics_img_scr_array = [];
const electronics_title_array = [];
const electronics_price_array = [];


function clearItems() {
    main_elem.innerHTML = '';
}

// fetch(api, {
//     method:"POST",
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: `men's clothing`,
//         })
// })
//     .then((res) => res.json())
//     .then(data => {
//         data.forEach(element => {
//             men_img_scr_array.length = 0;
//             men_title_array.length = 0;
//             men_price_array.length = 0;

//             if (element.category === `men's clothing`) {
//                 men_img_scr_array.push(element.image);
//                 men_title_array.push(element.title);
//                 men_price_array.push(element.price)
//             }
//         });
//         menItems()
//     });

men_btn.addEventListener('click', () => {
    fetch(api)
        .then((res) => res.json())
        .then(data => {
            men_img_scr_array.length = 0;
            men_title_array.length = 0;
            men_price_array.length = 0;
            data.forEach(element => {

                if (element.category === `men's clothing`) {
                    men_img_scr_array.push(element.image);
                    men_title_array.push(element.title);
                    men_price_array.push(element.price)
                }
            });
            menItems()
        });
})

women_btn.addEventListener('click', () => {
    fetch(api)
        .then((res) => res.json())
        .then(data => {
            women_img_scr_array.length = 0;
            women_title_array.length = 0;
            women_price_array.length = 0;
            data.forEach(element => {
                if (element.category === `women's clothing`) {
                    women_img_scr_array.push(element.image);
                    women_title_array.push(element.title);
                    women_price_array.push(element.price)
                }
            })
            womenItems();
        });
})


jewel_btn.addEventListener('click', () => {
    fetch(api)
        .then((res) => res.json())
        .then(data => {

            jewelery_img_scr_array.length = 0;
            jewelery_title_array.length = 0;
            jewelery_price_array.length = 0;
            data.forEach(element => {
                if (element.category === `jewelery`) {
                    jewelery_img_scr_array.push(element.image);
                    jewelery_title_array.push(element.title);
                    jewelery_price_array.push(element.price)
                }
            })
            jeweleryItems();
        });
})

electronics_btn.addEventListener('click', () => {
    fetch(api)
        .then((res) => res.json())
        .then(data => {
            electronics_img_scr_array.length = 0;
            electronics_title_array.length = 0;
            electronics_price_array.length = 0;

            data.forEach(element => {
                if (element.category === `electronics`) {
                    electronics_img_scr_array.push(element.image);
                    electronics_title_array.push(element.title);
                    electronics_price_array.push(element.price)
                }
            })
            electronicsItems();
        });
})


function menItems() {
    clearItems()

    for (i = 0; i < men_img_scr_array.length; i++) {
        let product_div = document.createElement('div')
        product_div.classList.add('product_container')
        main_elem.appendChild(product_div);

        let product_img = document.createElement('img');
        product_div.appendChild(product_img);
        product_img.src = men_img_scr_array[i];
        product_img.classList.add('image')

        let image_content_div = document.createElement('div');
        product_div.appendChild(image_content_div);
        image_content_div.classList.add('image_content')

        let image_title = document.createElement('span');
        image_content_div.appendChild(image_title);
        image_title.classList.add('image_name')
        image_title.innerText = men_title_array[i]

        let image_price = document.createElement('span');
        image_content_div.appendChild(image_price);
        image_price.classList.add('image_rate');
        let price = men_price_array[i];
        image_price.innerText = `$${price}`;

        let cart_btn = document.createElement('button');
        product_div.appendChild(cart_btn);
        cart_btn.classList.add('cart_button');
        cart_btn.innerText = 'Add to Cart';
        cart_btn.id = `men${i}`;



    }

    const add_cart_elem = document.querySelectorAll('.cart_button');

    add_cart_elem.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('hello vids');

            cartItemSelected(btn)
        })
    })
}


function womenItems() {
    clearItems()

    for (i = 0; i < women_img_scr_array.length; i++) {
        let product_div = document.createElement('div')
        product_div.classList.add('product_container')
        main_elem.appendChild(product_div);

        let product_img = document.createElement('img');
        product_div.appendChild(product_img);
        product_img.src = women_img_scr_array[i];
        product_img.classList.add('image')

        let image_content_div = document.createElement('div');
        product_div.appendChild(image_content_div);
        image_content_div.classList.add('image_content')

        let image_title = document.createElement('span');
        image_content_div.appendChild(image_title);
        image_title.classList.add('image_name')
        image_title.innerText = women_title_array[i]

        let image_price = document.createElement('span');
        image_content_div.appendChild(image_price);
        image_price.classList.add('image_rate')
        let price = women_price_array[i]
        image_price.innerText = `$${price}`

        let cart_btn = document.createElement('button');
        product_div.appendChild(cart_btn);
        cart_btn.classList.add('cart_button');
        cart_btn.innerText = 'Add to Cart';
        cart_btn.id = `women${i}`;

    }

    const add_cart_elem = document.querySelectorAll('.cart_button');

    add_cart_elem.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('hello vids');

            WomenCartItemSelected(btn)
        })
    })
}


function jeweleryItems() {
    clearItems()

    for (i = 0; i < jewelery_img_scr_array.length; i++) {
        let product_div = document.createElement('div')
        product_div.classList.add('product_container')
        main_elem.appendChild(product_div);

        let product_img = document.createElement('img');
        product_div.appendChild(product_img);
        product_img.src = jewelery_img_scr_array[i];
        product_img.classList.add('image')

        let image_content_div = document.createElement('div');
        product_div.appendChild(image_content_div);
        image_content_div.classList.add('image_content')

        let image_title = document.createElement('span');
        image_content_div.appendChild(image_title);
        image_title.classList.add('image_name')
        image_title.innerText = jewelery_title_array[i]

        let image_price = document.createElement('span');
        image_content_div.appendChild(image_price);
        image_price.classList.add('image_rate')
        let price = jewelery_price_array[i]
        image_price.innerText = `$${price}`

        let cart_btn = document.createElement('button');
        product_div.appendChild(cart_btn);
        cart_btn.classList.add('cart_button');
        cart_btn.innerText = 'Add to Cart'
        cart_btn.id = `jewel${i}`;

    }

    const add_cart_elem = document.querySelectorAll('.cart_button');

    add_cart_elem.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('hello vids');

            jewelCartItemSelected(btn)
        })
    })
}


function electronicsItems() {
    clearItems()



    for (i = 0; i < electronics_img_scr_array.length; i++) {
        let product_div = document.createElement('div')
        product_div.classList.add('product_container')
        main_elem.appendChild(product_div);

        let product_img = document.createElement('img');
        product_div.appendChild(product_img);
        product_img.src = electronics_img_scr_array[i];
        product_img.classList.add('image')

        let image_content_div = document.createElement('div');
        product_div.appendChild(image_content_div);
        image_content_div.classList.add('image_content')

        let image_title = document.createElement('span');
        image_content_div.appendChild(image_title);
        image_title.classList.add('image_name')
        image_title.innerText = electronics_title_array[i]

        let image_price = document.createElement('span');
        image_content_div.appendChild(image_price);
        image_price.classList.add('image_rate')
        let price = electronics_price_array[i]
        image_price.innerText = `$${price}`

        let cart_btn = document.createElement('button');
        product_div.appendChild(cart_btn);
        cart_btn.classList.add('cart_button');
        cart_btn.id = `electronics${i}`;
        cart_btn.innerText = 'Add to Cart'

    }

    const add_cart_elem = document.querySelectorAll('.cart_button');

    add_cart_elem.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('hello vids');

            electronicsCartItemSelected(btn)
        })
    })
}


const cart_icon = document.querySelector('.cart');
const cart_page_elem = document.querySelector('.cart_page')
const cart_container_elem = document.querySelector('.cart_container');

let table_elem = document.createElement('table');
cart_container_elem.appendChild(table_elem);
table_elem.classList.add('cart_table');
let tr1 = document.createElement('tr')
tr1.classList.add('head_row')
table_elem.appendChild(tr1)
let th1 = document.createElement('th');
tr1.appendChild(th1);
th1.innerText = 'Product'
let th2 = document.createElement('th');
tr1.appendChild(th2);
th2.innerText = 'Product Name'
let th3 = document.createElement('th');
tr1.appendChild(th3);
th3.innerText = 'Price'
let th4 = document.createElement('th');
tr1.appendChild(th4);
th4.innerText = 'Cancel'

let main_html_restore = main_elem.innerHTML

cart_icon.addEventListener('click', () => {
    main_elem.innerHTML = cart_page_elem.innerHTML;
})
main_elem.innerHTML = main_html_restore;
const add_cart_elem = document.querySelectorAll('.cart_button');




function cartItemSelected(clickedButton) {
    let buttonIndex = clickedButton.id.replace('men', '');


    const cart_table_elem = document.querySelector('.cart_table');
    let tr2 = document.createElement('tr');
    tr2.classList.add('row2');
    cart_table_elem.appendChild(tr2);

    let td1 = document.createElement('td');
    let td1_img = document.createElement('img');
    td1_img.classList.add('td_img')
    td1.appendChild(td1_img);
    tr2.appendChild(td1);

    td1_img.src = men_img_scr_array[buttonIndex];

    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = men_title_array[buttonIndex];

    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = `$${men_price_array[buttonIndex]}`;

    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    // td4.innerText = `$${men_price_array[buttonIndex]}`;
    let cancel_icon = document.createElement('i');
    td4.appendChild(cancel_icon);
    cancel_icon.classList.add('ri-close-line');

  
    console.log('Cancel icon added:', cancel_icon); // Confirm icon addition

    cancel_icon.addEventListener('click', () => {
        console.log('Cancel icon clicked');
        alert('Cancel icon clicked'); // Alert to confirm the event is triggered
    });
    

}

document.querySelector('.home').addEventListener('click', () => {
    main_elem.innerHTML = main_html_restore;
})

function WomenCartItemSelected(clickedButton) {
    let buttonIndex = clickedButton.id.replace('women', '');


    const cart_table_elem = document.querySelector('.cart_table');
    let tr2 = document.createElement('tr');
    tr2.classList.add('row2');
    cart_table_elem.appendChild(tr2);

    let td1 = document.createElement('td');
    let td1_img = document.createElement('img');
    td1_img.classList.add('td_img')
    td1.appendChild(td1_img);
    tr2.appendChild(td1);
    
    td1_img.src = women_img_scr_array[buttonIndex];

    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = women_title_array[buttonIndex];

    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = `$${women_price_array[buttonIndex]}`;

    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    // td4.innerText = `$${men_price_array[buttonIndex]}`;
    let cancel_icon = document.createElement('i');
    td4.appendChild(cancel_icon);
    cancel_icon.classList.add('ri-close-line');

  
    console.log('Cancel icon added:', cancel_icon); // Confirm icon addition

    cancel_icon.addEventListener('click', () => {
        console.log('Cancel icon clicked');
        alert('Cancel icon clicked'); // Alert to confirm the event is triggered
    });
    

}


function jewelCartItemSelected(clickedButton) {
    let buttonIndex = clickedButton.id.replace('jewel', '');


    const cart_table_elem = document.querySelector('.cart_table');
    let tr2 = document.createElement('tr');
    tr2.classList.add('row2');
    cart_table_elem.appendChild(tr2);

    let td1 = document.createElement('td');
    let td1_img = document.createElement('img');
    td1_img.classList.add('td_img')
    td1.appendChild(td1_img);
    tr2.appendChild(td1);
    
    td1_img.src = jewelery_img_scr_array[buttonIndex];

    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = jewelery_title_array[buttonIndex];

    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = `$${jewelery_price_array[buttonIndex]}`;

    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    // td4.innerText = `$${men_price_array[buttonIndex]}`;
    let cancel_icon = document.createElement('i');
    td4.appendChild(cancel_icon);
    cancel_icon.classList.add('ri-close-line');

  
    console.log('Cancel icon added:', cancel_icon); // Confirm icon addition

    cancel_icon.addEventListener('click', () => {
        console.log('Cancel icon clicked');
        alert('Cancel icon clicked'); // Alert to confirm the event is triggered
    });
    

}
function electronicsCartItemSelected(clickedButton) {
    let buttonIndex = clickedButton.id.replace('electronics', '');


    const cart_table_elem = document.querySelector('.cart_table');
    let tr2 = document.createElement('tr');
    tr2.classList.add('row2');
    cart_table_elem.appendChild(tr2);

    let td1 = document.createElement('td');
    let td1_img = document.createElement('img');
    td1_img.classList.add('td_img')
    td1.appendChild(td1_img);
    tr2.appendChild(td1);
    
    td1_img.src = electronics_img_scr_array[buttonIndex];

    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = electronics_title_array[buttonIndex];

    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = `$${electronics_price_array[buttonIndex]}`;

    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    // td4.innerText = `$${men_price_array[buttonIndex]}`;
    let cancel_icon = document.createElement('i');
    td4.appendChild(cancel_icon);
    cancel_icon.classList.add('ri-close-line');
    cancel_icon.id = `cross${buttonIndex}`

    let cross_icon_Call = document.querySelector(`#cross${buttonIndex}`)
    console.log('btn is', cross_icon_Call)
  
    console.log('Cancel icon added:', cancel_icon); // Confirm icon addition

    cross_icon_Call.addEventListener('click', () => {
        console.log('Cancel icon clicked');
        alert('Cancel icon clicked'); // Alert to confirm the event is triggered
    });
    

}