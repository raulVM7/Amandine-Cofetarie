const filtre = document.querySelectorAll(".filter");
let produse = document.querySelectorAll(".product-card")


filtre.forEach(btn =>{
  btn.addEventListener("click", () => {
    
    filtre.forEach(b => b.classList.remove("activ"));
    btn.classList.add("activ");
}
  )
})



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
