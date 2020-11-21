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
        avatar: "img/avatar_1.jpg",
      },
      {
        name: "Giorgia",
        avatar: "img/avatar_2.jpg",
      },
      {
        name: "Leonardo",
        avatar: "img/avatar_3.jpg",
      },
      {
        name: "Matteo",
        avatar: "img/avatar_4.jpg",
      },
      {
        name: "Tommaso",
        avatar: "img/avatar_5.jpg",
      },
      {
        name: "Margherita",
        avatar: "img/avatar_6.jpg",
      },
      {
        name: "Alessandro",
        avatar: "img/avatar_7.jpg",
      },
      {
        name: "Alessio",
        avatar: "img/avatar_8.jpg",
      }
    ]
  }
});
