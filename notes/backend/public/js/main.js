const deleteBtn = document.querySelectorAll('.del')
const contactItem = document.querySelectorAll('span.not')
const contactComplete = document.querySelectorAll('span.completed')


//  HAMBURGER FUNCTIONALITY
const burger = document.getElementById("burger")

const clickedMenu = document.getElementById('menu')

let hidden = false;

burger.addEventListener('click', toggleClass)

function toggleClass(){
    console.log("A burger was just clicked! Order Up!")
    if(!hidden) {
        clickedMenu.classList.add('hidden');
        hidden = true;
    }else {
        clickedMenu.classList.remove('hidden');
        hidden =false;
    }
}



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteContact)
})

Array.from(contactItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(contactComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteContact(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/deleteContact', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



// REDIRECT TO CONTACT INFORMATION PAGE

const clickedContact = document.querySelectorAll('.contactItem')


clickedContact.forEach(contactItem => {
    contactItem.addEventListener('click', function handleClick(event){
        console.log('name was clicked!', event);
        contactItem.setAttribute('style', 'background-color: yellow;');
    })
})