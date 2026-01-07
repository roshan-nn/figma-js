

var user = JSON.parse( localStorage.getItem('userData') );

const username = user.name;
const userimage= user.image;
console.log(username,userimage,"user");
document.getElementById("userimage").src=userimage;




const token=localStorage.getItem('token')
if(!token)
       {
          window.location.href="login.html"
       }


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

       function logoutHandler(){
              localStorage.removeItem("token");
              window.location.href= "login.html"
       }

