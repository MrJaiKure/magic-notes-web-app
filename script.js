console.log("Welcome to the Magic Notes website");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    // console.log(notesobj);
    showNotes();
});

// function to show the notes in the webpage
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` 
 <div class="noteCard my-2 mx-2 card" style="width: 18rem;"> 
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElem = document.getElementById("notes")
    if (notesobj.length != 0) {
        notesElem.innerHTML = html;

    } else {
        notesElem.innerHTML = `SORRY! Nothig is present to show in the notes area`;
    }
}

// function to delete the note
function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();

}

// now we have to create the search funtion to search the note

let searchText = document.getElementById("searchTxt");

searchText.addEventListener("input", function () {
    let inputVal = searchText.value.toLowerCase();
    // console.log("search funtion fired.........", inputVal);
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = "block";

        } else (
            element.style.display = "none"
        )
    })
})



