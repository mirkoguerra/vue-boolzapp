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
        visibility: "visible",
        avatar: "img/avatar_1.jpg",
        lastAccess: "21/11/2020",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/11/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/11/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Giorgia",
        visibility: "visible",
        avatar: "img/avatar_2.jpg",
        lastAccess: "23/11/2020",
        oldMessages: [
          {
            text: "Hai comprato la cioccolata?",
            data: "05/11/2020 16:48:00",
            writedByMe: false
          },
          {
            text: "No, fa male",
            data: "05/11/2020 16:50:00",
            writedByMe: true
          },
          {
            text: "Hai ragione, sei molto saggio",
            data: "05/11/2020 16:52:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Leonardo",
        visibility: "visible",
        avatar: "img/avatar_3.jpg",
        lastAccess: "22/11/2020",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "02/11/2020 17:48:00",
            writedByMe: false
          },
          {
            text: "Ho avuto giornate migliori...",
            data: "02/11/2020 17:50:00",
            writedByMe: true
          },
          {
            text: "Ma il dottore mi ha detto di non lamentarmi, quindi non lo farò",
            data: "02/11/2020 17:51:00",
            writedByMe: true
          },
          {
            text: "Sei molto stoico, sono certo che la tua anima sia splendida",
            data: "02/11/2020 17:55:00",
            writedByMe: false
          },
          {
            text: "Lo penso anch'io, ma grazie di averlo sottolineato",
            data: "02/11/2020 15:58:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Matteo",
        visibility: "visible",
        avatar: "img/avatar_4.jpg",
        lastAccess: "23/11/2020",
        oldMessages: [
          {
            text: "Usciamo stasera?",
            data: "27/10/2020 12:48:00",
            writedByMe: true
          },
          {
            text: "Volentieri, verso che ora?",
            data: "27/10/2020 12:50:00",
            writedByMe: false
          },
          {
            text: "Ci muoviamo con la mia macchina?",
            data: "27/10/2020 12:51:00",
            writedByMe: false
          },
          {
            text: "No,andiamo con la mia. Passo a prenderti verso le 20.00",
            data: "27/10/2020 12:53:00",
            writedByMe: true
          },
          {
            text: "Grazie, a dopo!",
            data: "27/10/2020 12:55:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Tommaso",
        visibility: "visible",
        avatar: "img/avatar_5.jpg",
        lastAccess: "20/11/2020",
        oldMessages: [
          {
            text: "Vorrei diventare un pasticcere",
            data: "25/10/2020 15:48:00",
            writedByMe: false
          },
          {
            text: "Non sapevo avessi la passione per i dolci",
            data: "25/10/2020 15:50:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Giulia",
        visibility: "visible",
        avatar: "img/avatar_6.jpg",
        lastAccess: "23/11/2020",
        oldMessages: [
          {
            text: "Ciao Giulia, come stai?",
            data: "20/10/2020 11:20:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "20/10/2020 11:25:00",
            writedByMe: false
          },
          {
            text: "Vuoi un caffè?",
            data: "20/10/2020 11:26:00",
            writedByMe: false
          },
          {
            text: "Perché mi chiedi sempre se voglio un caffe? Comunque ne ho già bevuti a sufficienza, grazie lo stesso",
            data: "20/10/2020 11:30:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Alessandro",
        visibility: "visible",
        avatar: "img/avatar_7.jpg",
        lastAccess: "18/11/2020",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/09/2020 17:28:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/09/2020 17:38:00",
            writedByMe: false
          },
          {
            text: "Non mi chiedi come sto io?",
            data: "10/09/2020 17:40:00",
            writedByMe: true
          },
          {
            text: "Maleducato!",
            data: "10/09/2020 17:41:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Alessio",
        visibility: "visible",
        avatar: "img/avatar_8.jpg",
        lastAccess: "19/11/2020",
        oldMessages: [
          {
            text: "Andiamo a fare due tiri al campetto?",
            data: "15/07/2020 09:30:00",
            writedByMe: false
          },
          {
            text: "Mi sono slogato una caviglia, temo che non sarei molto competitivo",
            data: "15/07/2020 09:33:00",
            writedByMe: true
          }
        ]
      }
    ],
    // numero che rappresenta l'indice del contatto corrente
    currentContactIndex: 0,
    // contenuto dell'input text relativo al messaggio che sto scrivendo nella chat corrente
    textInput: "",
    // contenuto dell'input text relativo alla ricerca del contatto
    textSearch: ""
  },
  methods: {
    // funzione che fa cambiare valore a currentContactIndex in relazione all'indice della list item che sarà cliccata
    currentContactIndexChanging: function(index) {
      this.currentContactIndex = index;
    },
    // funzione relativa all'aggiunta del messaggio che sto scrivendo nell'input text della section writing; alla pressione dell'enter,il messaggio verrà aggiunto all'array oldMessages del contatto corrente
    myMessageAdd: function(e) {
      if (e.keyCode == 13) {
        let date = new Date();
        let myNewMessageDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.contacts[this.currentContactIndex]["oldMessages"].push(
          {
            text: this.textInput,
            data: myNewMessageDate,
            writedByMe: true
          }
        );
        this.textInput = "";
        this.automaticMessage();
      }
    },
    // funzione che genera la risposta automatica
    automaticMessage: function() {
      setTimeout(() => {
        let date = new Date();
        let contactNewMessageDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.contacts[this.currentContactIndex]["oldMessages"].push(
          {
            text: "Questa risposta è stata generata automaticamente, e apparirà 3 secondi dopo che scrivi un messaggio",
            data: contactNewMessageDate,
            writedByMe: false
          }
        )
      }, 3000)
    },
    // funzione che mi permette di filtrare i contatti
    filter: function() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i]['name'].toUpperCase().includes(this.textSearch.toUpperCase())) {
          this.contacts[i]['visibility'] = 'visible';
        } else if (!this.contacts[i]['name'].toUpperCase().includes(this.textSearch.toUpperCase())) {
          this.contacts[i]['visibility'] = 'invisible';
        }
      }
    }
  }
});

// filter: function() {
//   const that = this;
//   this.contacts.forEach(function(contact) {
//     if (contact.name.toUpperCase().includes(that.textSearch.toUpperCase())) {
//       contact.visibility = 'visible';
//     } else if (!contact.name.toUpperCase().includes(that.textSearch.toUpperCase())) {
//       contact.visibility = 'invisible';
//     }
//   })
// },
