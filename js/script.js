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
        name: "Giulia",
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
    ],
    // numero che rappresenta l'indice del contatto corrente
    currentContactIndex: 0,
    // inizializzo come vuota la stringa corrispondente all'input inserito dall'utente per filtrare i contatti
    textSearch: "",
    // array vuoto che sarà riempito con i contatti filtrati in base a quanto viene inserito nel textSearch, ovvero nell'input text di ricerca contatti
    filteredContacts: []
  },
  methods: {
    // funzione che fa cambiare valore a currentContactIndex in relazione all'indice della list item che sarà cliccata
    currentContactIndexChanging: function(index) { this.currentContactIndex = index;
    },
    // funzione che fa entrare nell'array filteredContacts i contatti filtrati dell'array contacts
    filterContactsFunction: function() {
      this.filteredContacts = this.contacts.filter(
        contact => contact.name.toUpperCase().includes(this.textSearch.toUpperCase())
        );
    }
  }
});
