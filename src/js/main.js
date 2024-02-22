const tabs = window.document.querySelectorAll(".tab-btn");

tabs.forEach(tab => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {

    tabs.forEach(tab => tab.classList.remove("active"));

    const contents = window.document.querySelectorAll(".content");  
    contents.forEach(content => content.classList.remove("show"));

    const contentId = tab.getAttribute("content-id");
    const content = window.document.getElementById(contentId);
    console.log(content);

    content.classList.add("show");
    tab.classList.add("active");
}


const tabAct = window.document.querySelector(".tab-btn.active");
tabClicked(tabAct);