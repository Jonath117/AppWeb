export function initBlogEvents(){
    document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", () =>{
            const contadorSpan = button.querySelector(".like-count");
            let actual = parseInt(contadorSpan.textContent, 10);
            contadorSpan.textContent = actual + 1;
            console.log("$ Me gusta " + actual);
       });
    });

    document.querySelectorAll(".save-button").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("saved");
            button.innerHTML = `<img src="./assets/images/save.png" alt="Guardar" /> ${
            button.classList.contains("saved") ? "Guardado" : "Guardar"
            }`;
        });
    });
}