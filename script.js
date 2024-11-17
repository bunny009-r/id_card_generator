var btn=document.querySelector('.btn')
var card=document.querySelector('.card')
var Name=document.querySelector('#name')
var id=document.querySelector('#Id')
var Collage=document.querySelector('#Collage')
var address=document.querySelector('#Address')
btn.addEventListener('click',function(){
card.classList.remove("hide")


document.querySelector('#card_name').innerText="Name    : "+Name.value
document.querySelector('#card_Id').innerText="Id    : "+id.value
document.querySelector('#card_collage').innerText="Collage : "+Collage.value
document.querySelector('#card_location').innerText="Address : "+address.value

var img=document.querySelector('#img')
var card_img=document.querySelector('#card_img')
if(img.files[0])
{
    card_img.src=URL.createObjectURL(img.files[0])
    
}
Name.value=null
id.value=null
Collage.value=null
address.value=null
img.value=null
})