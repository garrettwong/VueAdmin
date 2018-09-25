<template>
    
    <div class="box box-default">
      <div class="box-header with-border">
          <i class="fa fa-warning"></i>

          <h3 class="box-title">Combo Bar-Line Chart</h3>
      </div>
      
      <div class="box-body">
        <canvas id="combo-bar-line"></canvas>

        <button id="randomizeData">Randomize Data</button>
      </div>
    </div>

</template>

<script>
// import Chart from 'chart.js'
import Chart from "chart.js";
import ChartJsUtils from "./chartjs-utils.js";

export default {
  props: {},

  data() {
    return {};
  },

  methods: {
    setupChart: () => {
      console.log("Combo Bar Line Chart: ", this);

      console.log('Utils', ChartJsUtils);

      let _self = this;

      var chartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],

        datasets: [
          {
            type: "line",
            label: "Dataset 1",
            borderColor: ChartJsUtils.chartColors.blue,
            borderWidth: 2,
            fill: false,
            data: [
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor()
            ]
          },
          {
            type: "bar",
            label: "Dataset 2",
            backgroundColor: ChartJsUtils.chartColors.red,
            data: [
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor()
            ],
            borderColor: "white",
            borderWidth: 2
          },
          {
            type: "bar",
            label: "Dataset 3",
            backgroundColor: ChartJsUtils.chartColors.green,
            data: [
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor(),
              ChartJsUtils.randomScalingFactor()
            ]
          }
        ]
      };

      var ctx = document.getElementById("combo-bar-line").getContext("2d");

      console.log("CBL: Context: ", ctx);
      console.log("CBL: ChartData: ", chartData);

      let myMixedChart = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Chart.js Combo Bar Line Chart"
          },
          tooltips: {
            mode: "index",
            intersect: true
          }
        }
      });    

      document
        .getElementById("randomizeData")
        .addEventListener("click", function() {
          
          chartData.datasets.forEach(function(dataset) {
            dataset.data = dataset.data.map(function() {
              return ChartJsUtils.randomScalingFactor();
            });
          });
          console.log(chartData);

          myMixedChart.update();
        });
    }
  },

  mounted: function() {
    console.log(this);

    setTimeout(() => {
      this.setupChart();
    }, 0);
  },

  computed: {}
};
</script>


<style>
canvas {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>