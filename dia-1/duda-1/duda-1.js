const modoBtn = document.getElementById("modo");

modoBtn.addEventListener("click", () => {
    const body = document.querySelector("body");

    // OPCION A - toggle
    body.classList.toggle("light-theme");

    // OPCION B - add / remove

    /*
    if(body.classList.contains("light-theme"))
    {
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
    }
    */

    // OPCION C - ternario
    /*
    body.classList.contains("light-theme")
        ? body.classList.remove("light-theme")
        : body.classList.add("light-theme");
    */
});
