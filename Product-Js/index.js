document.getElementById('tableBody').innerHTML = localStorage.getItem('allProducts');
var productNamInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var product = {};

var form = document.querySelector('#form');

function addProduct(event) {
    event.preventDefault();

    if (productNamInput.value == '' || productPriceInput.value.length == 0 || productCategoryInput.value.length == 0 || productDescInput.value.length == 0) {
        return;
    }

    product = {
        name: productNamInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }

    // productContainr.push(product);
    clearForm();
    displayProduct();
    // console.log(productContainr);
}

function clearForm() {
    productNamInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";

}

function displayProduct() {
    console.log(product);
    var products = localStorage.getItem('allProducts') != null ? localStorage.getItem('allProducts') : '';
    products += ` <tr>
        <td > ${ product.name } </td> 
        <td > ${ product.price } </td>
        <td > ${ product.category } </td> 
        <td > ${ product.desc } </td>
        </tr > `;
    localStorage.setItem('allProducts', products);
    document.getElementById('tableBody').innerHTML = localStorage.getItem('allProducts');
}