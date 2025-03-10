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

const now = moment()
//now.add(1, 'year').subtract(20, 'days')

console.log(now.toString())
now.minute(1)
console.log(now.minute())
console.log(now.toString())

// November 3rd, 2003
console.log(now.format('MMMM Do, YYYY'))

// Time from now
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.fromNow())

const nowTimestamp = now.valueOf()

console.log(moment(nowTimestamp).toString())

//-------------------------------------------

// 1. Create a new moment
// 2. set the month, day, and year to your birthday
// 3. Use format to print it in the following way: jan 6, 1991

const birthday = moment()
birthday.year(1981).month(7).date(23)
console.log(birthday.format('MMM D, YYYY'))















//
