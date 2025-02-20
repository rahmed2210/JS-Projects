// NOTE APP   <------->   DOM --> Document Object Model

let notes = []


// filter Objects
const filters = {
    searchText: ''
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}


// render
const renderNotes = function (notes, filter) {
    const filteredNote = notes.filter(function (notes) {
        return notes.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    
// Duplicate Notes
    document.querySelector('#notes').innerHTML = ''  
    
    filteredNote.forEach(function (note) {
        const noteEl = document.createElement('p')
        
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

















//
