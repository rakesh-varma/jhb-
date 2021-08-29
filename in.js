fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
.then((response) => {
  return response.json();
})
.then((result) =>{
    display(result);
} )
.catch((err)=>{
    console.log(err);
});
function display(data){
  let  row = document.getElementById("row");
  data.forEach((element )=> {
    let col = createMakeupelement("div","col-sm-12 col-md-4 c0l-lg-4");
    let card = createMakeupelement("div", "card");
    let cardImg =  createMakeupelement("img","card-img-top");
    cardImg.src = element.image_link;
    let cardbody = createMakeupelement("div","card-body");
    let h2 = createMakeupelement("h2");
    h2.innerHTML = element.name;
    let ptag = createMakeupelement("p","card-text");
    ptag.innerHTML = element.description;
    let h5 = createMakeupelement("h5");
    h5.innerHTML=element.price;
    cardbody.append(h2,ptag,h5);
    card.append(cardImg,cardbody);
    col.append(card);
    row.append(col);
});   

function createMakeupelement(eleName, eleClass="" ,eleid="")
{
let ele= document.createElement(eleName)
ele.setAttribute('class',eleClass);
ele.setAttribute("id",eleid);
return ele
}
}