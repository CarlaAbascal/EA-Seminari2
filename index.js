// 1. Demanar dades JSON d'un usuari

const idUser = 1;

fetch('https://jsonplaceholder.typicode.com/users/'+ idUser)
  .then(response => response.json())
  .then(user => console.log("Dades del usuari", user)
  )

// 2. Demanar els posts d'un usuari

fetch('https://jsonplaceholder.typicode.com/posts?userId=' + idUser)
  .then(response => response.json())
  .then(posts => console.log("Posts de l'usuari", posts)
  )

// 3. Utilitzar 3 de les funcions d'alt nivell combinades (map, reduce, filter,...) amb les dades

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => { 
    //mostrar tots els usuaris per consola 
    console.log("Usuaris:", users)
    // map -- array amb els noms
    userNames = users.map(user => user.name)

    //sort -- ordenar alfabeticament els noms
      sortNames = userNames.sort((a,b) => a.localeCompare(b))
      console.log("Llistat de noms ordenats alfabeticament:", sortNames)

    //filter -- filtrar els noms que comencin amb C
      filterName = sortNames.filter(name => name.toLowerCase().startsWith('c'))
      console.log("Noms que comencen per la lletra 'C': ", filterName)

    //reduce -- comptar el nombre total de caracters en els noms 
    result = filterName.reduce((result, name) => result + name.length, 0)
    console.log("Total de caracters:", result)
     }
  )

