
<template>
<li class="dropdown tasks-menu">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    <i class="fa fa-flag-o"></i>
    <span class="label label-danger">{{tasks.length}}</span>
  </a>
  <ul class="dropdown-menu">
    <li class="header">You have {{tasks.length}} tasks</li>
    <li>
      <ul class="menu">
        <li v-for="task in tasks"  v-bind:task="task" v-bind:key="task.id">
          <a href="#">
            <h3>
              {{task.text}}
              <small class="pull-right">{{task.completionPercentage}}</small>
            </h3>
            <div class="progress xs">
              <div class="progress-bar" v-bind:class="task.progressBarColor" 
                v-bind:style="{ width: task.completionPercentage}" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">

                <span class="sr-only">{{task.completionPercentage}} Complete</span>
              </div>
            </div>
          </a>
        </li>

      </ul>
    </li>
    <li class="footer">
        <router-link to="/tasks">Tasks</router-link>
    </li>
  </ul>
</li>
</template>

<script>

/*
tasks: [
  Task = {
    text: 'Take out the trash',
    completionPercentage: '20%',
    progressBarColor: 'progress-bar-aqua',
  }
]
*/
export default {
  props: {
    'tasks': Array,
  },
  mounted: function() {
    // consider loading messages via user id?
    this.tasks.forEach((obj, index) => {
      console.log(obj, index);
      
    })
  }
};
</script>