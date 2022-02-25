
let hero = document.getElementById("heroid")
hero.addEventListener("click",function () {
    let hover = document.getElementById("hovercontainer")
    hover.style.display = "block"
})


let Remove = document.getElementById("closesvg")
Remove.addEventListener("click",function () {
    let remove = document.getElementById("hovercontainer")
    remove.style.display = "none"
})


// slides 

let Flag = 0

function controller(x) {
    Flag = Flag + x
    SlideShow(Flag)
}


function SlideShow(num) {
    let slides = document.getElementsByClassName("slide")

    if (num === slides.length) {
        Flag = 0
        num = 0
    }
    if (num < 0) {
        Flag = slides.length -1
        num = slides.length -1
    }


    for (let y of slides) {
        y.style.display = "none"
    }

    slides[num].style.display = "block"
        
}

SlideShow(Flag)


// Close hover 

let closesvg2 = document.getElementById("closesvg2")

closesvg2.addEventListener("click",function () {
    let remove = document.getElementById("hovercontainer")
    remove.style.display = "none"
})

let closesvg3 = document.getElementById("closesvg3")

closesvg3.addEventListener("click",function () {
    let remove = document.getElementById("hovercontainer")
    remove.style.display = "none"
})

let closesvg4 = document.getElementById("closesvg4")

closesvg4.addEventListener("click",function () {
    let remove = document.getElementById("hovercontainer")
    remove.style.display = "none"
})

// ---------------------------------------------------// Hover cart --------------------------------------------------------->>>>>>

let cart = document.getElementById("id_cart" )

cart.addEventListener("click",function () {
    let hoverCart = document.getElementById("hovercart_id")
    hoverCart.style.display = "block"
    
})

let cart_close_id = document.getElementById("cart_close_id")

cart_close_id.addEventListener("click",function () {
    let hoverCart = document.getElementById("hovercart_id")
    hoverCart.style.display = "none"
})

let delete_id  = document.getElementById("delete_id")

delete_id.addEventListener("click",function () {
     let hoverCart = document.getElementById("hovercart_id")
    hoverCart.style.display = "none"
})

let hover_btn_id =document.getElementById("hover_btn_id")

hover_btn_id.addEventListener("click", function () {
     let hoverCart = document.getElementById("hovercart_id")
    hoverCart.style.display = "none"
})

// -----------------------------------------------------------------------------End  of open and closing hoverCart --------------- >>>>



// Adding cart 

let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let input_id = document.getElementById("input_id")
let Add_to_Cart = document.getElementById("addcart_id") 
let price_cart = document.getElementById ("price_cart")



minus.addEventListener("click",function () {
   if(input_id.value > 0)  input_id.value--
})

plus.addEventListener("click",function () {
   input_id.value++
})

Add_to_Cart.addEventListener("click",function () {
    if(input_id.value != "0"){
          total = input_id.value *125;
          price_cart.textContent = `${input_id.value} = $${total}`
    }
})







