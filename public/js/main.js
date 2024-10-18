const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')
const overlay = document.getElementById('menu-overlay');
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');
// event menu
document.addEventListener('click', (e)=>{
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('top-menu-expanded')
        topMenu.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
        document.body.classList.toggle('menu-expanded')
    }
    else{
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
            overlay.classList.add('hidden')
            document.body.classList.remove('menu-expanded')
        }
    }
})
