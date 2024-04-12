document.addEventListener("DOMContentLoaded", function() {

  // lista de produtos

  const products = [
      { id: 1, name: "Smartphone", category: "eletronics", price: 2500 },
      { id: 2, name: "Laptop", category: "eletronics", price: 4700 },
      { id: 3, name: "book of javascript", category: "books", price: 100 },
      { id: 4, name: "T-shirt", category: "clothing", price: 250 },
  ];

  console.log("before: ", products.map ((produto) => console.log(produto.price))
);

  const productResultToMap = products.map((product) => {
      if (product.category === "clothing") {
      return product;
    };
})


  console.log("after: ", productResultToMap);

  let cart = [];

 const filterCategory = document.getElementById("filterCategory");
 const listProducts = document.getElementById("listProducts");
 const totalCart = document.querySelector("#totalCart");

 function list(categoryParam) {
     const productsToCategory = products.filter((product) => {
         if (category === "all") {
             return product;
         }
    
         if (product.category === "categoryParam") {
             return product;
         }
     });
    
        productsToCategory.forEach((product) => {
            console.log("product: ", product);
        });
    
     };

  

});