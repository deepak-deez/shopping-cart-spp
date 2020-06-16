var selem, additems;
var total = 0;


function itemadded(ident) {

    let elem = document.getElementById(ident);
    selem = elem;
    selem.classList.remove("btn-primary");
    selem.classList.add("btn-danger");
    selem.innerText = "Remove";
    switch (ident) {
        case 1:
            selem.setAttribute('onclick', 'change(1)');
            break;
        case 2:
            selem.setAttribute('onclick', 'change(2)');
            break;
        case 3:
            selem.setAttribute('onclick', 'change(3)');
            break;
    }





    let item = elem.parentNode.parentNode;
    item.remove();


    priceelem = item.querySelector('#price')
    price = parseInt(priceelem.innerText);
    total = total + price;
    // console.log(total)




    // elem = document.getElementById(ident);
    mycart = document.getElementById("mycart");
    additems = mycart.children[0].children[0];
    // console.log(additems);
    added = additems.appendChild(item);

    // function change(ident) {
    // re = document.querySelector('#ident');
    // selem.remove();
    // }

    // elem.onclick = function() { console.log("ahdfahgfahj") }
    // if (additems.childElementCount > 3) {
    //     // console.log("yes");
    //     document.getElementById("noitems").innerText = "";
    // } else {
    //     // console.log("false")
    //     document.getElementById("noitems").innerText = "your cart is empty"
    // }
    s = document.getElementById("shopcart");
    if (s.childElementCount == 0) {
        s.innerText = "";
    } else {
        document.getElementById("noitems").innerText = "";
    }




    b = document.getElementById('foo')
    b.innerText = `Total price= Rs.${total}/-`



}

// let remov = document.getElementById(ident);
// remov.onclick = function() { console.log("ahdfahgfahj") }


// let mycart2 = document.getElementById("cardy");
// console.log(selem);

function change(value) {
    elem1 = document.getElementById(value)
    console.log(elem1);
    // console.log("hero")
    // console.log(value)
    row1 = elem1.parentNode.parentNode;
    row1.remove();
    mycar = document.getElementById("shopcart");
    mycar.appendChild(row1);


    selem = elem1;
    selem.classList.remove("btn-danger");
    selem.classList.add("btn-primary");
    selem.innerText = "Add to cart";

    switch (value) {
        case 1:
            selem.setAttribute('onclick', 'itemadded(1)');
            break;
        case 2:
            selem.setAttribute('onclick', 'itemadded(2)');
            break;
        case 3:
            selem.setAttribute('onclick', 'itemadded(3)');
            break;
    }

    priceelem = row1.querySelector('#price')
    price = parseInt(priceelem.innerText);
    total = total - price;
    console.log(total);
    b = document.getElementById('foo')
    b.innerText = `Total price= Rs.${total}/-`

    s = document.getElementById("cardy");
    if (s.childElementCount > 3) {
        document.getElementById("noitems").innerText = "";

    } else {
        document.getElementById("noitems").innerText = "your Cart is empty";

    }
    // let pool = document.getElementById("shopcart");
    // if (pool.childElementCount != 0) { pool.innerText = "" }
}