const product= fetch('https://dummyjson.com/products')
       .then(res => res.json()) 
       .then(product=>{
        console.log(product); 
        
      

       const display = product.products.map(item=>{
        
        return`
        <div class="card" ${key=item.id}>
        <img class="img" src=${item?.images} alt=${item?.title}>
        <h3 class="card-title">${item?.title}</h3>
        </div>

        `;}).join("");
        document.getElementById("display").innerHTML=display;
       })