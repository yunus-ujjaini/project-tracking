function toggleMenu(){
    let menubtn=document.getElementById("menubtn");
    let menulinks= document.getElementById("menulinks");
    if(menubtn.classList.contains("menu-btn-open")==true)
    {
        menubtn.classList.remove("menu-btn-open");
        menulinks.classList.remove("nav-links-open");
    }
    else{
        menubtn.classList.add("menu-btn-open");
        menulinks.classList.add("nav-links-open");
    }
}