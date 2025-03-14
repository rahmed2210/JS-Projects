// NOTE APP   <------->   DOM --> Document Object Model

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf() // Add createdAt and updateAt to the new notes (store timestamp)
    
    notes.push({
        id: id,
        title: '',
        body: '',
// Add createdAt and updateAt to the new notes (store timestamp)
        createdAt: timestamp,
        updatedAt: timestamp 
    })
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
// 2. ^^ setup the assign call to include hash with id
//    location.assign('./edit.html')
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})













//
