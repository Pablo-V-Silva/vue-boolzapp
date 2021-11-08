const app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    messageCounter: 0,
    text: '',
    searchBar: '',
    counterDropdown: '',
    contacts: [
      {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luis*',
        avatar: './assets/img/avatar_5.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  methods: {
    contactSelect(n) {
      this.counter = n
    },

    pushMessage() {
      this.contacts[this.counter].messages.push({
        date: dayjs().format('DD/MM/YYYY, hh:mm:ss'),
        text: this.text,
        status: 'sent'
      })
      this.text = ''

      setTimeout(this.answer, 1000)
    },

    answer() {
      this.contacts[this.counter].messages.push({
        date: dayjs().format('DD/MM/YYYY, hh:mm:ss'),
        text: 'Tranqui',
        status: 'received'
      })
    },

    searchName() {
      this.contacts.forEach(objectContact => {
        if (objectContact.name.toLowerCase().includes(this.searchBar.toLowerCase())) {
          objectContact.visible = true
        } else {
          objectContact.visible = false
        }
      });
    },


    dropdown(i) {
      if (this.counterDropdown === '') {
        this.counterDropdown = i
      } else {
        this.counterDropdown = ''
      }
    },

    deleteMessage(i) {
      this.contacts[this.counter].messages.splice(i, 1)
      console.log(this.counter);
    },
  }
})