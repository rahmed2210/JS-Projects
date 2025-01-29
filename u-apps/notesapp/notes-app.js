document.querySelector('p')
/*
// Query and remove
const p = document.querySelector('p')
p.remove()
*/


// Query all and remove
const ps = document.querySelectorAll('p')

/*
// forEach --> allows us to iterate over each thing we pass in our callback. used forEach to do something for each paragraph
ps.forEach(function(p) {
    p.remove()
})
*/

/*
// Read text value
ps.forEach(function(p) {
    console.log(p.textContent)
})
*/

// Write text value
ps.forEach(function(p) {
    p.textContent = ' ****** '
})




//
