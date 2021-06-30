
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${datas.id}.png

async  function getPokemon(){

    const getName = () => {
      const pokemon = document.querySelector('.search-input').value
      let newPokemon = pokemon.toLowerCase()
      return newPokemon
    }


    await fetch(`https://pokeapi.co/api/v2/pokemon/${getName()}`)
    .then(response => response.json())
    .then(data =>  {
         datas = data
    } )
    .catch(err => console.log(err));


    const layout = `
    <div id="imgbox">
                 <img id="pokeimg"src="https://pokeres.bastionbot.org/images/pokemon/${datas.id}.png" alt="">
                 <h1 class="name">Nome: ${datas.name}</h1>
                 <h2 id="id">Nr: ${datas.id}</h2>
                 <h2 id="type">Tipo: ${datas.types[0].type.name}</h2>
            </div>
            <div id="skills">
                <h1 id="peso" class="name">Peso: ${datas.weight / 10} KG</h1>
                <h1 class="name">Altura: ${datas.height / 10} M</h1>
                <div id="skil">
                    <h2 class="name">Habilidades: <h2>${datas.moves.map(skill => skill.move.name)} </h2>
                    </h2>
                </div>
           </div>`

    const section = document.getElementById('section-poke')
    section.innerHTML = layout
    
    return section;
   
    
    
  }

  const search = document.querySelector('.search-button')

  search.addEventListener('click', function(e){
      e.preventDefault()

      setTimeout(() => {
        getPokemon()
      }, 0.7);
        
    
  })
