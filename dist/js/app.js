import Vue from 'vue';
import VueRouter from 'vue-router';

import HeaderNavbar from './components/header-navbar/header-navbar.vue';
import MainSidebar from './components/main-sidebar/main-sidebar.vue';

import CardItem from './components/card-item.vue';
import ChatBox from './components/chat-box.vue';
import TodoList from './components/todo-list.vue';

Vue.use(VueRouter);

// These can be imported from other files
const Parent = {
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  template: `
    <div class="parent">
      <h2>Parent</h2>

      <transition :name="transiti=onName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  `,
}

const Dashboard1 = {
  components: {
    'chat-box': ChatBox,
    'card-item': CardItem
  },
  props: [
    'cards'
  ],
  data() {
    return {
      chats: [{
        id: 1,
        from: 'John',
        userIconUrl: 'dist/img/user2-160x160.jpg',
        message: 'Hi Rich',
        time: '2:15AM'
      },
      {
        id: 2,
        from: 'Rich',
        userIconUrl: 'dist/img/user3-128x128.jpg',
        message: 'Hello there',
        time: '2:17AM'
      }]
    }
  },
  template: `
  <div>
    <router-link to="/dashboarda" active-class="text-danger">Go to Foo</router-link>
    <router-link to="/dashboardb" active-class="text-danger">Go to Bar</router-link>

    <div class="row">
      <card-item v-for="card in cards" v-bind:card="card" v-bind:key="card.id">
      </card-item>
    </div>

    <div>
      <chat-box v-bind:chats="chats" v-on:chat-added="onChatAdded"></chat-box>
    </div>
  </div>`,

  methods: {
    onChatAdded: function (newChat) {
      // use vuex
      console.log('new chat', newChat);
      console.log('this', this);
      console.log('this chats', this.chats);

      this.chats.push(newChat);
      console.log(this.chats);
    }
  },
  mounted: function(){
    console.log('mnt', this)


    console.log(this.$route);
    
  }
}

const Dashboard2 = {
  components: { 'todo-list': TodoList },
  props: ['todos'],
  template: `
    <div>
      <todo-list v-bind:todos="todos"></todo-list>
    </div>`,
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '*',
    component: Dashboard1
  },
  {
    path: '/dashboarda',
    component: Dashboard1,
    props: {
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
    }
  }, {
    path: '/dashboardb',
    component: Dashboard2,
    props: {
      todos: [
        {
          id: 1,
          labelClass: 'label-danger',
          message: 'Trusted Wilson',
          created: '2:05AM'
        }, {
          id: 2,
          labelClass: 'label-danger',
          message: 'Min Wilson',
          created: '2:05AM'
        }
      ]
    }
  },
  {
    path: '/parent',
    component: Parent,
    children: [
      {
        path: '',
        component: Dashboard1
      },
      {
        path: '/Dashboard1',
        component: Dashboard1
      },
      {
        path: '/Dashboard2',
        component: Dashboard2,
        props: {
          todos: [
            {
              id: 1,
              labelClass: 'label-danger',
              message: 'Trusted Wilson',
              created: '2:05AM'
            }, {
              id: 2,
              labelClass: 'label-danger',
              message: 'Min Wilson',
              created: '2:05AM'
            }
          ]
        }
      },
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  // mode: 'history',
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  components: {
    HeaderNavbar,
    MainSidebar
  },
  data: {
    title: 'GVue',

    user: {
      id: 1,
      fullName: 'Garrett Wong',
      profession: 'Consultant',
      signupDate: 'June 10',
      imageUrl: 'dist/img/g.jpg',

      // <new-messages /> component: (refactor to VueX)
      messages: [{
        imageUrl: 'dist/img/g.jpg',
        from: 'Garrett Wong',
        received: '4 days ago',
        text: 'hi'
      },
      {
        imageUrl: 'dist/img/user3-128x128.jpg',
        from: 'Jared Wong',
        received: '2 days ago',
        text: 'hello'
      }],


      // <notifications /> component: (refactor to VueX)
      notifications: [{
        received: '4 days ago',
        text: 'Test',
        faIcon: 'fa-users',
        color: 'text-info'
      },
      {
        received: '2 days ago',
        text: 'Added as a friend',
        faIcon: 'fa-rocket',
        color: 'text-purple'
      }],

      // <tasks /> component: (refactor to VueX)
      tasks: [{
        text: 'Take out the trash',
        completionPercentage: '50%',
        progressBarColor: 'progress-bar-aqua',
      },
      {
        text: 'Laundry',
        completionPercentage: '80%',
        progressBarColor: 'progress-bar-success',
      },
      {
        text: 'Garden',
        completionPercentage: '10%',
        progressBarColor: 'progress-bar-danger',
      },
      {
        text: 'Water Heater, Shower Head',
        completionPercentage: '10%',
        progressBarColor: 'progress-bar-warning',
      },
      ]
    },
  }
}).$mount('#router-app');


let navbarsVue = new Vue({
  el: '#navbars',
  components: {
    HeaderNavbar,
    MainSidebar
  },
  data: {
    title: 'GVue',

    user: {
      fullName: 'Garrett Wong',
      profession: 'Consultant',
      signupDate: 'June 10',
      imageUrl: 'dist/img/g.jpg'
    },
  }
});


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