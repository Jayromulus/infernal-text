const input = document.getElementById('input')
const output = document.getElementById('output')

input.addEventListener('input', (e) => {
  const original = e.target.value;

  const library = [
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '],
    ['m','f','s','d','l','z','v','r','n','t','c','b','a','j','e','w','t','g','i','h','p','w', '','q','o','x',' ']
  ]
  // console.log(library[0].length)
  let translated = '';
  for(letter of e.target.value){
    // console.log(library[0].indexOf(letter))
    translated += library[1][library[0].indexOf(letter)]
  }
  output.innerText = translated
})