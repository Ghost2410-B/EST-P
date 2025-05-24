const nav=document.getElementById("scroll-to");
const scroll_button=document.getElementById("scroll-button")



const title1=document.getElementById("title1");
const title2=document.getElementById("title2");
const title3=document.getElementById("title3");

const content1=document.getElementById("content1");
const content2=document.getElementById("content2");
const content3=document.getElementById("content3");


content1.classList.remove("container-non-active");
content2.classList.add("container-non-active");
content3.classList.add("container-non-active");
title1.style.backgroundColor="rgb(184, 184, 184)";
title1.onclick=()=>{
    title2.style.backgroundColor="white";
    title1.style.backgroundColor="rgb(184, 184, 184)";
    title3.style.backgroundColor="white";
    content1.classList.remove("container-non-active");
    content2.classList.add("container-non-active");
    content3.classList.add("container-non-active");
}

title2.onclick=()=>{
        title1.style.backgroundColor="white";
        title2.style.backgroundColor="rgb(184, 184, 184)";
        title3.style.backgroundColor="white";
    content2.classList.remove("container-non-active");
    content1.classList.add("container-non-active");
    content3.classList.add("container-non-active");
}
title3.onclick=()=>{
    title1.style.backgroundColor="white";
    title3.style.backgroundColor="rgb(184, 184, 184)";
    title2.style.backgroundColor="white";
    content3.classList.remove("container-non-active");
    content1.classList.add("container-non-active");
    content2.classList.add("container-non-active");
}



scroll_button.onclick=()=>{
    nav.scrollIntoView({
        behavior: "smooth",
        block: "start" // You can also use "center", "end" depending on your preference
      });
}




//search-bar animation


const search_area=document.getElementById("search-area");
const search_button=document.getElementById("search-submit");
let search=false;
search_button.addEventListener('click',()=>{
    if(search===false){
        search_area.style="border: 1px  solid lightblue;width: 8em;background-color: lightblue;";
        search=true
    }
    else{
        search_area.style="border: none;width: 0em;background-color: transparent;";
        search=false;

    }
})





//social media show
const social_container=document.getElementById("social-media");


let social=false;
social_container.addEventListener('click',()=>{
    if(social===false){
    social_container.style.transform="translateX(3.3em)";
        social=true;
    }
    else{
    social_container.style.transform="translateX(0em)";
        social=false;
    }
})




//languge selector


const lang_button=document.getElementById("lang-changer");
const lang_list=document.getElementById("lang-list");
let lang_show=false;
lang_button.addEventListener('click',()=>{
    if(lang_show===false){
        lang_list.style.display="flex";
        lang_show=true;
    }
    else{
        lang_list.style.display="none";
        lang_show=false;
    }
})