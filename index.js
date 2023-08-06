
const inputValue=document.querySelector("#inputBar");
const inputContainer=document.querySelector(".inpuContainer");
const qrImage=document.querySelector("#qrCode");
const qrImageContainer=document.querySelector("#QRCodeContainer");
const mainCardContainer=document.querySelector(".cardContainer");

const button =document.querySelector("#QrGenerator");


let inputVal;

inputContainer.addEventListener('submit',(event)=>{
  event.preventDefault();

  const formData=new FormData(inputContainer);

   inputVal = formData.get("input");

   const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`

   randarQrCode(url);
})

const randarQrCode = (url)=>{

  if(!url){
    return;
  }
  else{
    button.innerText="Generating Qr Code...";
    qrImage.addEventListener("load",()=>{
      button.innerText="Generate Qr Code";
    })
    qrImage.setAttribute("src",url);
    mainCardContainer.style.height = "360px";
    qrImageContainer.classList.add("show");
    





  }
  

} 


inputValue.addEventListener("keyup",()=>{
  if(!inputValue.value.trim()){
    qrImageContainer.classList.remove("show");
    mainCardContainer.style.height = "250px";
  }

});





