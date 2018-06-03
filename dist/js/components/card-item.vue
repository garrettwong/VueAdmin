<template>
  <div class="col-lg-3 col-xs-6">

  <div class="small-box" v-bind:class="card.backgroundCss">
  <div class="inner">
    <h3>{{card.value}}</h3>

    <p>{{card.title}}</p>
  </div>
  <div class="icon">
    <i class="ion" v-bind:class="card.ionIcon"></i>
  </div>
  <a :href="card.moreInfoUrl" class="small-box-footer">More info
    <i class="fa fa-arrow-circle-right"></i>
  </a>
  </div>
  </div>
</template>

<script>
export default {
  props: ["card"]
}
</script>