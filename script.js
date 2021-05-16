let allnavs = document.querySelectorAll(".nav-div");
for (let i = 0; i < allnavs.length; i++) {
    allnavs[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("active-class")) {
            if(e.target.classList)
            e.target.classList.remove("active-class")
            return;
        }
        if (document.querySelector(".active-class")) {
            document.querySelector(".active-class").classList.remove("active-class");
        }
        e.target.classList.add("active-class");
    })
}

let btn = document.querySelector(".drpdown");
btn.addEventListener("click", function (e) {
    if(document.querySelector(".dropdown-list")){
        document.querySelector(".dropdown-list").remove();
        return;
    }
    let div = document.createElement("div");
    div.classList.add("dropdown-list");
    div.innerHTML = `<a href="">Josh 1</a>
         <a href="">Josh 2</a>
         <a href="">Josh 3</a>
         <a href="">Josh 4</a>`;
    let hero = document.querySelector(".hero");
    hero.append(div);
})



