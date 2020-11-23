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
        active: true
      },
      {
        name: "Giorgia",
        avatar: "img/avatar_2.jpg",
        active: false
      },
      {
        name: "Leonardo",
        avatar: "img/avatar_3.jpg",
        active: false
      },
      {
        name: "Matteo",
        avatar: "img/avatar_4.jpg",
        active: false
      },
      {
        name: "Tommaso",
        avatar: "img/avatar_5.jpg",
        active: false
      },
      {
        name: "Giulia",
        avatar: "img/avatar_6.jpg",
        active: false
      },
      {
        name: "Alessandro",
        avatar: "img/avatar_7.jpg",
        active: false
      },
      {
        name: "Alessio",
        avatar: "img/avatar_8.jpg",
        active: false
      }
    ],
    // numero che rappresenta l'indice del contatto corrente
    currentContactIndex: 0,
  },
  methods: {
    // funzione che fa cambiare valore a currentContactIndex in relazione all'indice della list item che sarà cliccata
    currentContactIndexChanging: function(index) {
      this.contacts[this.currentContactIndex].active = false;
      this.currentContactIndex = index;
      this.contacts[index].active = true;
    }
  }
});
