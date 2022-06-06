
let arr=JSON.parse(localStorage.getItem("user"))||[]



function Detail(n,e,a,am){
    this.name=n;
    this.email=e; 
    this.address=a; 
    this.amount=am;
}
 

function getData(el){
    el.preventDefault()

    let form = document.getElementById("detail")

    let name=form.name.value;

    let email=form.email.value;

    let address=form.address.value;

    let amount=form.amount.value;

    let detail= new Detail(name,email,address,amount);
    
    arr.push(detail)

    localStorage.setItem("user",JSON.stringify(arr))

    window.location.reload()

}
