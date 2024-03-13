const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const images = document.querySelector()


<li class="gallery-item">
  <a class="gallery-link" href="">
    <img class="gallery-image" 
        data-sourse="" 
        src="" 
        alt="" 
    />
  </a>
</li>




/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

// const products = [
//   {
//     id: 1,
//     img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
//     name: "Monitor",
//     price: 3000,
//     description: "23-inch monitor with Full HD resolution.",
//   },
//   {
//     id: 2,
//     img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
//     name: "Laptop",
//     price: 20000,
//     description:
//       "Lightweight and powerful laptop with a 15-inch display and SSD.",
//   },
//   {
//     id: 3,
//     img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
//     name: "Smartphone",
//     price: 8000,
//     description: "Equipped with a triple camera and a multi-core processor.",
//   },
//   {
//     id: 4,
//     img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
//     name: "Tablet",
//     price: 12000,
//     description: "10-inch tablet with high performance and a Retina display.",
//   },
// ];

// const container = document.querySelector(".products");
// container.innerHTML = createProductsMarkup(products)
// let currentModal;

// function createProductsMarkup(products){
//   return products.map(({id, img, name, price}) => `
//     <li data-id="${id}" class="item">
//       <img src="${img}" alt="">
//       <h2>${name}</h2>
//       <p>${price}</p>
//     </li>
//   `).join("")
// }

// // console.log(createProductsMarkup(products))

// container.addEventListener('click', (event) => {
//   if (event.target === event.currentTarget){
//     return;
//   }

//   const card = event.target.closest('.item');
//   const idClicked = card.dataset.id;
  
//   const {
//     img,
//     name, price,
//     description
//   } = products.find((product) => product.id == idClicked)
  

//   currentModal = basicLightbox.create(
//     `<div class="modal">
//       <img src="${img}" alt="">
//       <h2>${name}</h2>
//       <h3>${price}</h3>
//       <p>${description}</p>
//     </div>`
//   )

//   currentModal.show()
// })


// document.addEventListener('keyup', ({code}) => {
//   if (code !== 'Escape'){
//     return
//   }

//   currentModal.close()
// })






