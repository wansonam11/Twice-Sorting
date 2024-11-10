//isotope
window.addEventListener("load", () => {
  const pictures = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s",
  });

  //button
  const btns = document.querySelectorAll("main ul li");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      activation(e);
    });
  });

  function activation(e) {
    for (let btn of btns) btn.classList.remove("on");
    e.currentTarget.classList.add("on");

    const btn_a = e.currentTarget.querySelector("a");
    const filterValue = btn_a.getAttribute("href");

    pictures.arrange({ filter: filterValue });
  }
});
