// collego il codice di Vue all'html
const boolzappApp = new Vue ({
  el: "#root",
  data: {
    // oggetto contenente nome e avatar dell'utente
    user: {
      name: "Mirko",
      avatar: "img/avatar_0.jpg"
    },
    // array di oggetti; gli oggetti sono i contatti dell'utente, ognuno dei quali contiene nome e avatar
    contacts: [
      {
        name: "Silvio",
        avatar: "img/avatar_.1jpg",
      },
      {
        name: "Giorgia",
        avatar: "img/avatar_.2jpg",
      },
      {
        name: "Leonardo",
        avatar: "img/avatar_.3jpg",
      },
      {
        name: "Matteo",
        avatar: "img/avatar_.4jpg",
      },
      {
        name: "Tommaso",
        avatar: "img/avatar_.5jpg",
      },
      {
        name: "Margherita",
        avatar: "img/avatar_.6jpg",
      },
      {
        name: "Alessandro",
        avatar: "img/avatar_.7jpg",
      },
      {
        name: "Alessio",
        avatar: "img/avatar_.8jpg",
      }
    ]
  }
});
