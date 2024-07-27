let header = document.createElement("h1");
header.innerText="Assignment";
header.style.cssText=`
    color: #ff000091;
    margin-left: 25px;
    font-size: 50px;` ;
document.body.append(header);


let products =[
    {
        id: 1,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Bread",
        desc: "freshbakedfruit",
        price: "$5.50",
    }
    
]

let parent = document.createElement("div");
parent.style.cssText =`  
    display: flex;
    justify-content: space-around;
     margin-top: 20px;` ;

function creatcard(src,title,decs,price){
    let container = document.createElement("div");
    let image = document.createElement("img");
    image.src=src;
    let cardtitle = document.createElement("h3");
    cardtitle.innerText=title;
    let carddecs = document.createElement("h5");
    carddecs.innerText=decs;
    let cardprice = document.createElement("p");
    cardprice.innerText=price;
    let cardbutton = document.createElement("button");
    cardbutton.innerText="BUY";

    container.style.cssText = `
    width: 200px;
    height: 350px;
    border: 1px solid black;
    border-radius: 5px;
    text-align:center; ` ;
    image.style.cssText =` 
    width: 70%;
    height: 50%;
    border-radius: 50%;
    margin-top: 20px;` ;
    cardtitle.style.cssText =`
    font-size: 25px;
    margin-block: 10px; `;
    carddecs.style.cssText =`
    font-size: 25px;
    margin-bottom: 5px; ` ;
    cardprice.style.cssText =`
    font-size: 20px;
    margin: 6px;` ;
    cardbutton.style.cssText =`
    font-size: 15px;
    width: 80px;
    padding: 5px;` ;
container.append(image,cardtitle,carddecs,cardprice,cardbutton);
parent.appendChild(container);
}


products.forEach((product)=>{
    creatcard(product.img,product.desc,product.title,product.price);
})

document.body.append(parent);
