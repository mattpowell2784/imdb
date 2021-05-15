//let hidden = (document.getElementsByClassName('grid').style.visiblity ='hidden');

getFilmSearchValue();
function getFilmSearchValue() {
  const searchButton = document.querySelector('.search__button');

  searchButton.addEventListener('click', function () {
    event.preventDefault();
    let searchFor = document.querySelector('.search__input').value;
    console.log(searchFor);
    runFilmSearch(searchFor);
  });
}

function runFilmSearch(filmSearchStr) {
  let film;
  let test = fetch(`http://www.omdbapi.com/?s=${filmSearchStr}&apikey=8865cca5`)
    .then(response => response.json())
    .then(data => {
      film = data;
      console.log(film);

      for (let i = 0; i < 5; i++) {
        document.getElementById(`film poster${i}`).src = film.Search[i].Poster;
        document.getElementById(`film title${i}`).innerHTML =
          film.Search[i].Title;
        document.getElementById(`film year${i}`).innerHTML =
          film.Search[i].Year;
      }
      document.getElementById('films').style.visibility = 'visible';
    });

  //fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8865cca5")
}
