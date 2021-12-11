
alert("hello");

document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Add new person :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("update name persom:", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("person").appendChild(dessertElt);
});