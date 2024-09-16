let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
}
let lastFilm = ''
let  markForFilm = ''
let condition = false
while(condition===false){
    lastFilm = prompt('Один из последних просмотренных фильмов?')
    markForFilm = prompt('На сколько оцените его?')
    if(lastFilm!='' && markForFilm != '' 
        && lastFilm.length<50 && markForFilm<50){
      condition = true
    } else{
        condition = false
    }
}
personalMovieDB.movies.name = lastFilm
personalMovieDB.movies.mark = markForFilm
console.log(personalMovieDB)

