const url = "https://briobarbtech.github.io/viper/db.json/";

export function getElements () {
    return fetch(url).then( respuesta => {
      return respuesta.json();
    })
}

