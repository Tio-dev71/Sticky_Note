const addNote = document.querySelector('#addnote');
const addNoteForm = document.querySelector('.container3');
const xmark = document.querySelector('#xmark');
const noteText = document.querySelector('#note-text');
const noteTitle = document.querySelector('#note-title')
const discard = document.querySelector('#discardcard');
const addcard = document.querySelector('#addcard');

let index = 0;
let randomcolor = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328","#ff3d3d","#ff8c3d","#ff3d8c","#3dff8c"];

addNote.addEventListener('click', () => {
    addNoteForm.style.display = 'block';
});

discard.addEventListener('click', () => {
    addNoteForm.style.display = 'none';
})

xmark.addEventListener('click', () => {
    addNoteForm.style.display = 'none';
});

noteText.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
    const title = noteTitle.value;
    const description = noteText.value;
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    createStickyNote(description, title, day, month, year);
    }
})

addcard.addEventListener('click', () => {
    const title = noteTitle.value;
    const description = noteText.value;
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    createStickyNote(description, title, day, month, year);
})



createStickyNote = (text, title, day, month, year) => {
    const main = document.querySelector('.container2');
    const root = document.createElement("div");
    root.innerHTML = `
        <div class="container2_heading">
                <div class="container2_line"></div>
                <div class="container2_introduce">
                    <h1>${title}</h1>
                    <h2>${day}/${month}/${year}</h2>
                </div>
            </div>

            <div class="container2_body">
                <h2 class="container2_body-description">${text}</h2>
            </div>

            <div class="container2_footer">
                <i id = "remove" class="fa-solid fa-trash"></i>
        </div>
    `


    const container2Line = root.querySelector('.container2_line');
    container2Line.setAttribute("style", `background-color: ${randomcolor[Math.floor(Math.random() * randomcolor.length)]}`);

    const remove = root.querySelector("#remove");
    remove.addEventListener("click", () => {
        main.removeChild(root);
    });

    main.appendChild(root);
}