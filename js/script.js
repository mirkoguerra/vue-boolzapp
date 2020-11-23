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
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Giorgia",
        avatar: "img/avatar_2.jpg",
        oldMessages: [
          {
            text: "Hai comprato la cioccolata",
            data: "10/02/2020 16:48:00",
            writedByMe: false
          },
          {
            text: "No, fa male",
            data: "10/02/2020 16:50:00",
            writedByMe: true
          },
          {
            text: "Hai ragione, sei molto saggio",
            data: "10/02/2020 16:02:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Leonardo",
        avatar: "img/avatar_3.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Matteo",
        avatar: "img/avatar_4.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Tommaso",
        avatar: "img/avatar_5.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Giulia",
        avatar: "img/avatar_6.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Alessandro",
        avatar: "img/avatar_7.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Alessio",
        avatar: "img/avatar_8.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/01/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/01/2020 15:50:00",
            writedByMe: false
          }
        ]
      }
    ],
    // numero che rappresenta l'indice del contatto corrente
    currentContactIndex: 0,
  },
  methods: {
    // funzione che fa cambiare valore a currentContactIndex in relazione all'indice della list item che sarà cliccata
    currentContactIndexChanging: function(index) {
      this.currentContactIndex = index;
    }
  }
});

// this.contacts[this.currentContactIndex].active = false;

// this.contacts[index].active = true;
