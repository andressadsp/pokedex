// esconder o cartão e mostrar a opção correspondente

const listSelectedPokemons = document.querySelectorAll('.pokemon')

listSelectedPokemons.forEach(p => {
    p.addEventListener('click', () => {
      const pokemonId = p.attributes.id.value

      //remove class open
       const pokemonCardOpened = document.querySelector('.open')
       pokemonCardOpened.classList.remove('open')

       const pokemonCardOpen = document.getElementById(`card-${pokemonId}`)
       pokemonCardOpen.classList.add('open')

      //remove class active
       const getActiveClassList = document.querySelector('.active')
       getActiveClassList.classList.remove('active')

       const pokemonSelectedList = document.getElementById(pokemonId)
       pokemonSelectedList.classList.add('active')
    })
})