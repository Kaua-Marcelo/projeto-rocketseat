function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
  
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', 'https://media.licdn.com/dms/image/v2/D4D03AQF9EJLqIHKenQ/profile-displayphoto-scale_400_400/B4DZ3VVYipG4Ag-/0/1777400647211?e=1779321600&v=beta&t=W8HfdNy1rAEVXsU2-Wms6KofG3KlLvIJt6-ywwCQC9s') 
  } else {
    img.setAttribute('src', 'https://avatars.githubusercontent.com/u/225488896?v=4')
  }

}
