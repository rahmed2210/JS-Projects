// NOTE APP   <------->   DOM --> Document Object Model

let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
// 2. ^^ setup the assign call to include hash with id
//    location.assign('./edit.html')
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// JavaScript Dates
// Unix Epoch
const now = new Date('January 29 2021 6:25:01')
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

/*
console.log(now.toString())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of Month: ${now.getDay()}`)

console.log(`Hours: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Second: ${now.getSeconds()}`)

console.log(now.getTime())
*/


// 1. Create two dates in the past (use String for date)
// 2. Get timestamp for both
// 3. Figure out which is first and print its time (use toString)

const dateOne = new Date('March 06 2021 12:00:00')

const dateTwo = new Date()

const DateOneTimestamp = dateOne.getTime()
const DateTwoTimestamp = dateTwo.getTime()

if (DateOneTimestamp < DateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (DateTwoTimestamp < DateOneTimestamp) {
    console.log(dateTwo.toString())
}







//
