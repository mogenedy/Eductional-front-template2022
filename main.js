let body= document.body;

let profile=document.querySelector(".header .flex .profile");
document.getElementById("user-btn").onclick=()=>{
  profile.classList.toggle("active");
  searchForm.classList.remove("active");
}
let searchForm=document.querySelector(".header .flex .search-form");
document.getElementById("search-btn").onclick=()=>{
  searchForm.classList.toggle("active");
  profile.classList.remove("active");
}
let sideBar=document.querySelector(".side-bar");
document.getElementById("menu-btn").onclick=()=>{
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
}
document.querySelector(".side-bar .close-side-bar").onclick=()=>{
  sideBar.classList.remove("active");
  body.classList.remove("active");
}




window.scroll=()=>{
  profile.classList.remove("active");
  searchForm.classList.remove("active");
  if(window.innerWidth<1200){
    sideBar.classList.remove("active");
  body.classList.remove("active");
  }
}








let toggleBtn=document.querySelector("#toggle-btn");
let darkMood=localStorage.getItem("dark-mood");

const enableDarkMood=()=>{
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mood","enabled");
}
const disableDarkMood=()=>{
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mood","disabled");
}

if(darkMood==="enabled"){
  enableDarkMood();

}
toggleBtn.onclick=()=>{
  let darkMood=localStorage.getItem("dark-mood");
  if(darkMood==="disabled"){
    enableDarkMood();
  }else{
    disableDarkMood();
  }
}







// // Set values in local storage
// window.localStorage.setItem("color", "red");

// // Get values from local storage
// window.localStorage.getItem("color"); // Returns: "red"

// window.localStorage.removeItem("color"); //remove one
// window.localStorage.clear(); //remove all



// // Set color to page background
// document.body.style.backgroundColor = window.localStorage.getItem("color");

