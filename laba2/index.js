document.addEventListener('DOMContentLoaded', function() {
const personalMovieDB = {
    privat: false, 
    movies: {
        'Титаник': 10, 
        'Хатико': 10, 
        'Человек-паук': 10
    }
}
output(personalMovieDB)})



function output(obj){
  if(obj.privat === true){
    console.log('Нельзя вывести')
  } else if(obj.privat === false){
    const table = document.createElement('table')
    const headerRow = document.createElement('tr');
    const headerCell1 = document.createElement('th')
    const headerCell2 = document.createElement('th')
    headerCell1.textContent = 'Название фильма'
    headerCell2.textContent = 'Оценка фильму'
    headerRow.appendChild(headerCell1)
    headerRow.appendChild(headerCell2)
    table.appendChild(headerRow)
    let movies = obj.movies
    let keys = Object.keys(movies)
    keys.forEach(key =>{
        const row = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        td1.textContent = key
        td2.textContent = movies[key]
        row.appendChild(td1)
        row.appendChild(td2)
        table.appendChild(row)
    })
    const body = document.body
    body.appendChild(table)
  }
}
