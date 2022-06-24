

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var mainBtn = document.getElementById("mainBtn") ;

var productsContainer;
if (localStorage.getItem("productsList") == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem("productsList"));
    display();

}

function addproduct() {
    if (checkInputs() == true) {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            desc: productDescription.value
        } 
        productsContainer.push(product);
        localStorage.setItem("productsList", JSON.stringify(productsContainer));
        console.log(productsContainer);
        display();
        clearForm();
    } else {
        window.alert("sorry all fields required") 
    }
}

function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}



function display() { 

    var cartoona = ``;

    for (var i = 0; i < productsContainer.length; i++) {
        cartoona += `<tr scope="row">    
    <td> ${productsContainer[i].name}</td> 
  <td> ${productsContainer[i].price}</td> 
  <td> ${productsContainer[i].category}</td>
  <td>${productsContainer[i].desc}</td> 
  <td ><button onclick="update(${i})" class="btn btn-outline-warning">update</button></td>
  <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger">delete</button></td>
</tr> `
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function checkInputs() {
    if (productName.value != "" && productPrice.value != "" && productCategory.value != "" && productDescription.value != "") {
        return true;
    } else {
        return false;
    }
}

function deleteProduct(index) {
    productsContainer.splice(index, 1);
    localStorage.setItem("productsList", JSON.stringify(productsContainer));
    display()
}

function update(index) {
    productName.value = productsContainer[index].name;
    productPrice.value = productsContainer[index].price;
    productCategory.value = productsContainer[index].category;
    productDescription.value = productsContainer[index].desc; 
    mainBtn.innerHTML="update";
} 

function search(searchTerm){  
    var cartoona=``;

    for (var i =0; i< productsContainer.length; i++)
    {
     if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true) 
     {  
    cartoona += `<tr>
    <td> ${productsContainer[i].name}</td>
    <td> ${productsContainer[i].price}</td>
    <td> ${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td> 
    <td><button onclick="update(${i})" class="btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger">delete</button></td>
  </tr> `
} else
{ 
    console.log("msh mawgod") 

}
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}   


// function validateProductName() {
//     var regex = /^[A-Z][a-z] {3,8}$/;
//     if (regex.test(productName.value == true)) {
//         console.log("true")
//         return true;
//     } else {
//         console.log("false")
//         return false
//     }
// } 







// ---------------localStorage------------//
// localStorage.setItem("route", "full stack");
// alert(localStorage.getItem("route"));
// localStorage.removeItem("route");
// localStorage.clear();
// localStorage.length; 

// json java script object notatoin ==array of object 

