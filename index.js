const filtre = document.querySelectorAll(".filter");
let produse = document.querySelectorAll(".product-card")
const menuBtn = document.getElementById("menuBtn");
const navRight = document.getElementById("navRight");

filtre.forEach(btn =>{
  btn.addEventListener("click", () => {
    
    filtre.forEach(b => b.classList.remove("activ"));
    btn.classList.add("activ");
}
  )
})


menuBtn.addEventListener("click", () => {
  navRight.classList.toggle("open");
});

// (opțional) închide meniul când apeși pe un link
navRight.addEventListener("click", () => {
  navRight.classList.remove("open");
});


filtre.forEach(btn => {
 btn.addEventListener("click", () => {
    const categorie = btn.dataset.filter;
    produse.forEach(p => {
      if (p.dataset.categorie === categorie) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
      if (categorie === "toate" || p.dataset.categorie === categorie) {
  p.style.display = "block";
} else {
  p.style.display = "none";
}})
  });
});
