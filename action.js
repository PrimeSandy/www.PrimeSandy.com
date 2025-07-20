// document.getElementById('joinbtn').addEventListener('click',function(){
//     document.getElementById('result1').innerHTML= document.getElementById('firstname').value 
//     document.getElementById('result2').innerHTML= document.getElementById('lastname').value
// })

document.getElementById('subb').addEventListener('click',function(){
    document.getElementById('typebx').innerHTML=document.getElementById('type').value
    document.getElementById('namebx').innerHTML=document.getElementById('name').value
    document.getElementById('datebx').innerHTML=document.getElementById('date').value
    document.getElementById('amountbx').innerHTML=document.getElementById('amount').value
    document.getElementById('descriptionbx').innerHTML=document.getElementById('description').value
})
function exitPage() {
  window.location.href = "https://www.google.com"; // or your desired exit page
}
//   window.location.href = "table.html";