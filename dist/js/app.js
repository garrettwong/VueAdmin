import Vue from 'vue';
import VueRouter from 'vue-router';

import CardItem from './components/card-item.vue';
import ChatBox from './components/chat-box.vue';
import TodoList from './components/todo-list.vue';

Vue.use(VueRouter);

// These can be imported from other files
const Foo = { 
  template: '<div>foo</div>' 
}
const Bar = {
  components: {'todo-list': TodoList},
  props: ['todos'],
  template: '<div><todo-list v-bind:todos="todos"></todo-list></div>' 
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '*',
    component: Foo
  },
  { 
    path: '/foo', 
    component: Foo 
  },
  { 
    path: '/bar', 
    component: Bar, 
    props: {todos: [{
      id: 1,
      labelClass: 'label-danger',
      message: 'Trusted Wilson',
      created: '2:05AM'
    },{
      id: 2,
      labelClass: 'label-danger',
      message: 'Min Wilson',
      created: '2:05AM'
    }]}
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  
}).$mount('#router-app');



let vueCards = new Vue({
  el: '#vue-cards',
  components: { 
    CardItem
  },
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
  components: { 
    ChatBox
  },
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
        from: 'Timothy',
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

let todoList = new Vue({
  el: '#todo-list',
  components: { 
    TodoList
  },
  data: {
    todos: [
      {
        id: 1,
        labelClass: 'label-danger',
        message: 'Hi Vicky',
        created: '2:15AM'
      },
      {
        id: 2,
        labelClass: 'label-info',
        message: 'Hello there',
        created: '2:25AM'
      },
      {
        id: 3,
        labelClass: 'label-default',
        message: 'Do homework',
        created: '3:19PM'
      }

    ]
  }
})