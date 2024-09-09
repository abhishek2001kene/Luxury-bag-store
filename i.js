var burger = document.querySelector(".bigoverlay")

let flag = 0

function menu(){
  if(flag === 0){
    burger.style.display = "block"
flag = 1
  }else{
    burger.style.display = "none"
    flag =0
  }
}






{
  var posters1 = document.querySelectorAll(".p1");

  posters1.forEach((poster, index) => {
    poster.style.left = `${index * 100}%`;
  });

  var counter1 = 0;
  var direction1 = 1;

  let next1 = () => {
    counter1 += direction1;

    if (counter1 >= posters1.length) {
      direction1 = -1;
      counter1 = posters1.length - 1;
    } else if (counter1 < 0) {
      direction1 = 1;
      counter1 = 0;
    }

    slidePoster1();
  };

  function slidePoster1() {
    posters1.forEach((poster) => {
      poster.style.transform = `translateX(-${counter1 * 100}%)`;
    });
  }

  function start() {
    next1();
    clearInterval(slidinginterval);

    setTimeout(() => {
      slidinginterval = setInterval(start, 3000);
    }, 3000);
  }

  let slidinginterval = setInterval(start, 1000);
}






var items = document.querySelector(".items");

let bags = [
  {
    name: "Being Casual Bag",
    price: "₹ 5,699",
    bagImage:
      "https://images.stockcake.com/public/7/0/a/70a09b93-9ab4-4b13-a5e6-78c1fe772bf8_large/elegant-orange-handbag-stockcake.jpg",
  },
  {
    name: "luxary Casual Bag",
    price: "₹ 4,399",
    bagImage:
      "https://images.stockcake.com/public/1/f/2/1f2f3209-4284-4b01-8130-5a510138fc2e_large/elegant-designer-handbag-stockcake.jpg",
  },
  {
    name: "Designer Casual Bag",
    price: "₹ 8,299",
    bagImage:
      "https://images.stockcake.com/public/8/a/1/8a17b433-ddef-497b-8c96-903885085623_large/elegant-red-handbag-stockcake.jpg",
  },
  
  {
    name: "",
    price: "₹ 8,299",
    bagImage:"https://images.stockcake.com/public/d/d/7/dd703bc4-a70f-4863-ab47-5977159723e1_large/elegant-red-handbag-stockcake.jpg"  },
  {
    name: "Blue luxury bag",
    price: "₹ 7,499",
    bagImage:"https://images.stockcake.com/public/3/4/8/34877ff5-eb5c-48cc-b122-e28cfc53dd8a_large/elegant-handbag-display-stockcake.jpg"
  },
  {
    name: "Designer Casual Bag",
    price: "₹ 6.899",
    bagImage:"https://images.stockcake.com/public/f/c/a/fca41164-94fd-4c83-b7a5-f48920d42440_large/chic-yellow-handbag-stockcake.jpg"
  },
  {
    name: "Elegant Beige Handbag",
    price: "₹ 5,299",
    bagImage:"https://images.stockcake.com/public/f/6/8/f687ece2-b8ae-4dad-b21d-6124f2eaec70_large/elegant-beige-handbag-stockcake.jpg"  },
  {
    name: "Pink Designer Bag",
    price: "₹ 10,299",
    bagImage:
"https://images.stockcake.com/public/2/9/9/2996bd42-7d45-4fe2-aa09-056adff6ad15_large/chic-pink-handbag-stockcake.jpg"  },
 
  {
    name: "Pink Designer Bag",
    price: "₹ 10,299",
    bagImage:
"https://images.stockcake.com/public/9/4/5/945bc7d6-0b99-4df8-8788-7453bb14edb4_large/elegant-designer-handbag-stockcake.jpg"  },
 
];

function addbag(bagsToShow) {
  let item = "";

  bagsToShow.forEach(function (bag) {
    item += `
      <div class="card">
                        <div class="cardimg">
                            <img src="${bag.bagImage}" alt="">
                        </div>
                        <div class="name">
                            <h3>${bag.name}</h3>
                        <div class="price">
                            <h1>${bag.price}</h1>
                            <div class="add">
                                <i class="ri-shopping-cart-fill"></i>
                                <h5>add</h5>
                            </div>
                        </div>
                        </div>
                    </div>`;
  });

  document.querySelector(".cards").innerHTML = item;

  var add = document.querySelectorAll(".add");

  add.forEach(function (e) {
    e.addEventListener("click", function () {
      items.style.display = "flex";
      let item = parseInt(items.innerHTML);
      items.innerHTML = item + 1;
    });
  });
}

addbag(bags);


let searchbar = document.querySelector(".searchbar")


function search(){
  const inputvalue = searchbar.value.toLowerCase()

  const filterBags = bags.filter(bag =>
    bag.name.toLowerCase().includes(inputvalue)
  )

  addbag(filterBags)

}

searchbar.addEventListener("input" , search)








 
   
