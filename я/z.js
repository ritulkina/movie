const movieTitles = [
    '500 дней лета',
    '1+1',
    'Бойцовский клуб',
];
const moviePosters = [
    'covers/space.jpg',
    'covers/train.jpg',
    'covers/house.jpg',

];
const movieList = document.getElementById('movieList');

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');
        const deleted = document.createElement('button')
        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;
        deleted.textContent = 'Удалить';
        deleted.type = 'button';

        deleted.addEventListener('click', () => {
            movieTitles.splice(index, 1)
            moviePosters.splice(index, 1)
            renderMovies();
        })

        item.append(poster, title);
        movieList.append(item);
        item.append(deleted)
    });
}
addMovie.addEventListener('click', () => {
    const name = movieName.value.trim();
    const poster = moviePoster.value.trim();


    if (!name || !poster) {
        return
    }
    movieTitles.push(name)
    moviePosters.push(poster)
    moviePoster.value = ''
    movieName.value = ''
    renderMovies();
})
renderMovies();