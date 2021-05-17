//let hidden = (document.getElementsByClassName('grid').style.visiblity ='hidden');

getFilmSearchValue();
function getFilmSearchValue() {
  const searchInput = document.querySelector('.search__input');

  searchInput.addEventListener('keyup', function (e) {
    let searchFor = document.querySelector('.search__input').value;
    console.log(searchFor);
    if (searchFor.length > 2) {
      runFilmSearch(searchFor);
    }
  });
}

async function runFilmSearch(filmSearchStr) {
  try {
    //fetch films
    let filmFetch = await fetch(
      `https://www.omdbapi.com/?s=${filmSearchStr}&apikey=8865cca5`
    );
    filmData = await filmFetch.json();
    console.log(filmData);

    //throw errors
    //if (filmData.response === false) {
    //throw Error;
    //}

    //render films
    for (let i = 0; i < 5; i++) {
      document.getElementById(`film poster${i}`).src =
        filmData.Search[i].Poster;
      document.getElementById(`film title${i}`).innerHTML =
        filmData.Search[i].Title;
      document.getElementById(`film year${i}`).innerHTML =
        filmData.Search[i].Year;
    }

    document.getElementById('films').style.visibility = 'visible';
  } catch {
    console.log('a');
    return;
  }
}
