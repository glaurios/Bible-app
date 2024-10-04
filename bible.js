const input = document.querySelector('#typespace')
const button1 = document.querySelector('#button1')
const preview1 = document.querySelector('#preview')
const reference1 = document.querySelector('#reference')
const baseap1 = 'https://bible-api.com/'


button1.addEventListener('click', getverse)
function getverse(){
    let verse = input.value.trim();
    if (verse === ""){
        alert('Please enter a verse.');
        return;
    }
     preloader.style.display = 'block';

    fetch(`${baseap1}${verse}`).then(function(res){
        return res.json()
    }).then(function(data){
       preloader.style.display = 'none';
       
        reference1.innerHTML = data.reference
        preview1.innerHTML = data.text

        preloader.style.display = 'none';
    })
}