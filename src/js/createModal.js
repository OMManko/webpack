export default function createModal(error) {
    const div = document.createElement("div");
    const divInner = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.className = "modal";
    divInner.className = "modal-wrapper";
    h2.className = "modal-title";
    p.className = "modal-text";
    button.className = "modal-button";

    divInner.appendChild(h2);
    divInner.appendChild(p);
    divInner.appendChild(p);
    divInner.appendChild(button);
    div.appendChild(divInner);

    h2.innerText = "Error";
    p.innerText = error;
    button.innerText = "OK";
    document.body.appendChild(div);

    document.querySelector(".modal-button").addEventListener("click", () => document.body.removeChild(div));
}