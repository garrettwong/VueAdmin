// on:hover
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// conditions and loops
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})




var vueCards = new Vue({
  el: '#vue-cards',
  data: {
    cards: [
      { 
        id: 0, 
        type: 'count', 
        value: 150, 
        title: 'New Orders', 
        backgroundCss: 'bg-aqua', 
        ionIcon: 'ion-bag', 
        moreInfoUrl: '#/NewOrders' 
      },
      { 
        id: 1, 
        type: 'percent', 
        value: 53, 
        title: 'Bounce Rate', 
        backgroundCss: 'bg-green', 
        ionIcon: 'ion-stats-bars', 
        moreInfoUrl: '#/BounceRate' 
      },
      { 
        id: 2, 
        type: 'count', 
        value: 44, 
        title: 'User Registrations', 
        backgroundCss: 'bg-yellow', 
        ionIcon: 'ion-person-add', 
        moreInfoUrl: '#/UserRegistrations' 
      },
      { 
        id: 3, 
        type: 'count', 
        value: 66, 
        title: 'Unique Visitors', 
        backgroundCss: 'bg-red', 
        ionIcon: 'ion-pie-graph', 
        moreInfoUrl: '#/UniqueVisitors' 
      }
    ]
  },
  types: ['count', 'percent']
})

let chatBox = new Vue({
  el: '#chat-box',
  data: {
    chats: [
      {
        id: 1,
        from: 'Bryan',
        userIconUrl: 'dist/img/user2-160x160.jpg',
        message: 'Hi Vicky',
        time: '2:15AM'
      },
      {
        id: 2,
        from: 'Victoria',
        userIconUrl: 'dist/img/user3-128x128.jpg',
        message: 'Hello there',
        time: '2:25AM'
      },
      {
        id: 3,
        from: 'Angela',
        userIconUrl: 'dist/img/user4-128x128.jpg',
        message: 'I would like to discuss in person this new project that has been on my mind.  Do you have time today to talk?',
        time: '2:28AM'
      },
      {
        id: 4,
        from: 'Bryan',
        userIconUrl: 'dist/img/user2-160x160.jpg',
        message: 'Yes I do.  I have setup a meeting at 2pm today to discuss.  Material is attached.',
        time: '2:15AM',
        attachment: {
          thumbnail: 'dist/img/user4-128x128.jpg',
          url: '#/Download.jpg'
        }
      },

    ]
  }
})