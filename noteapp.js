const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main")

addBtn.addEventListener("click", addNote)

function addNote(){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
            <div id="tool">
               <i class="save ri-save-2-fill"></i>
                <i class="delete ri-delete-bin-7-fill"></i>
            </div>
            <textarea name="" id=""></textarea>
    `

    const save = note.querySelector(".save");
    const trash = note.querySelector(".delete");
    const textarea = note.querySelector("textarea")
    save.addEventListener("click", saveNotes)
    textarea.addEventListener("input", saveNotes)
    trash.addEventListener("click", ()=>{

        note.remove()
        saveNotes();
    })

    main.appendChild(note)
}

function saveNotes(){
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data)

    if(data.length ===0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

function loadNotes(){
    const isNotes = JSON.parse(localStorage.getItem("notes"));
    if(isNotes !==null){
        isNotes.forEach(noteText => {
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length-1];
            lastNote.value = noteText
        });
    }else{
        addNote();
    }
}
loadNotes();