<template>
<div class="box box-success">
    <div class="box-header with-border">
        <h3 class="box-title">Price Predictor</h3>

        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse">
                <i class="fa fa-minus"></i>
            </button>
            
            <button type="button" class="btn btn-box-tool" data-widget="remove">
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>
    
    <div class="box-body no-padding">
        <div class="row">
        
            <div class="col-md-12 col-sm-12">

                <karate-chop chart-title="Price Predictor"></karate-chop>
            </div><!-- /.col -->
        <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.box-body -->
    </div>
</div>

</template>

<script>
import KarateChop from "./charts/line-styles-chart.vue";

// add modal
export default {
  components: { "karate-chop": KarateChop },
  props: [],
  data() {
    return {};
  },
  methods: {},

  mounted() {}
};
</script>

<style>
</style>