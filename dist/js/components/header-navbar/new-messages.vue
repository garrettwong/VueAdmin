<template>

<li class="dropdown messages-menu">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    <i class="fa fa-envelope-o"></i>
    <span class="label label-success">{{messages.length}}</span>
  </a>
  
  <ul class="dropdown-menu">
    <li class="header">You have {{messages.length}} messages</li>

    <li>
      <!-- inner menu: contains the actual data -->
      <ul class="menu">
        <li v-for="message in messages" v-bind:card="message" v-bind:key="message.id">
          <!-- start message -->
          <a href="#">
            <div class="pull-left">
              <img v-bind:src="message.imageUrl" class="img-circle" alt="User Image">
            </div>

            <h4>
              {{message.from}}
              <small>
                <i class="fa fa-clock-o"></i> {{message.received}}</small>
            </h4>

            <p>{{message.text}}</p>
          </a>
        </li>
        <!-- end message -->
        
      </ul>
    </li>

    <li class="footer">
      <router-link to="/messages">See all Messages</router-link>
    </li>
  </ul>
</li>
</template>

<script>

export default {
  props: {
    'messages': Array,
  },
  mounted: function() {
    // consider loading messages via user id?

  }
};
</script>