<template>

<li class="dropdown notifications-menu">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    <i class="fa fa-bell-o"></i>
    <span class="label label-warning">{{notifications.length}}</span>
  </a>

  <ul class="dropdown-menu">
    <li class="header">You have {{notifications.length}} notifications</li>
    <li>
      <!-- inner menu: contains the actual data -->
      <ul class="menu">
        <li v-for="notification in notifications"  v-bind:notification="notification" v-bind:key="notification.id">
          <a href="#">
            <i class="fa" v-bind:class="[notification.faIcon, notification.color]"></i> {{notification.text}}
          </a>
        </li>
      </ul>
    </li>

    <li class="footer">
        <router-link to="/notifications">Notifications</router-link>
    </li>
  </ul>

</li>

</template>

<script>

export default {
  props: {
    'notifications': Array,
  },
  mounted: function() {
    // consider loading messages via user id?

  }
};
</script>