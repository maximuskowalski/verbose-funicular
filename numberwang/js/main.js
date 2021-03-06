document.querySelector('button').addEventListener('click', getNumber)
document.querySelector('button').addEventListener('click', getMoreCats)



function getNumber(){
  const number = document.querySelector('input').value
  console.log(number)
  const url = `http://numbersapi.com/${number}?json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      document.querySelector('h2').innerText = data.number
      document.querySelector('h3').innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getCats(){
  const number = document.querySelector('input').value
  console.log(number)
  const url = `https://cataas.com/cat/cute/says/${number}?json=true`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        catUrl = data.url
        document.querySelector('img').src = `https://cataas.com/${data.url}`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// https://api.thecatapi.com/v1/images/search

function getMoreCats(){
  const number = document.querySelector('input').value
  console.log(number)
  const url = `https://api.thecatapi.com/v1/images/search`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        catUrl = data.url
        document.querySelector('img').src = data[0].url

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
