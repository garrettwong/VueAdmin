<template>
  <section class="sidebar">
    <div class="user-panel">
      <div class="pull-left image">
        <img v-bind:src="user.imageUrl" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p>{{user.fullName}}</p>
        <a href="#">
          <i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>

    <!-- search form -->
    <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">

        <span class="input-group-btn">
          <button type="submit" name="search" id="search-btn" class="btn btn-flat">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
    <!-- /.search form -->
      
    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu" data-widget="tree">
    <!-- <ul class="sidebar-menu"> -->
      <li class="header">MAIN NAVIGATION</li>
      
      <li class="treeview">
        <a href="#">
          <i class="fa fa-dashboard"></i>
          <span>Dashboard</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>

        <ul class="treeview-menu">
          <li>
            <router-link to="/dashboarda" active-class="emphasize">
              <i class="fa fa-circle-o"></i> Dashboard A
            </router-link>
          </li>

          <li>
            <router-link to="/dashboardb" active-class="emphasize">
              <i class="fa fa-circle-o"></i> Dashboard B
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <!-- /.sidebar -->

</template>

<script>
export default {
  props: {
    'title': String,
    'user': Object,
  },
  mounted: function() {
    console.log('mounted', this);
  }
};
</script>

<style>

.emphasize {
  color: #fff !important;
}
</style>