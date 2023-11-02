let products = {
    data: [
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "549",
        image: "comfy-gray-pants.webp",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "2,099",
        image: "smart-watch.jpg",
      },
      {
        productName: "Regular Fit",
        category: "Bottomwear",
        price: "799",
        image: "Regular Fit.webp",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "999",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "529",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "529",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Bluetooth Watch",
        category: "Watch",
        price: "1,099",
        image: "Bluetooth Watch.webp",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "639",
        image: "pink-trousers.webp",
      },
      {
        productName: "Casual Top",
        category: "Topwear",
        price: "400",
        image: "Regular Top.webp",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "589",
        image: "brown-jacket.webp",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "330",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "649",
        image: "short-skirt.webp",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };