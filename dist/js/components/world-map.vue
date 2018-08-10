<template>
<div class="box box-success">
    <div class="box-header with-border">
        <h3 class="box-title">World Map</h3>

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
        
            <div class="col-md-9 col-sm-8">
                <div class="pad">
                    <!-- Map will be created here -->
                    <div id="world-map" style="height: 325px;"></div>
                </div>
            </div><!-- /.col -->

            <div class="col-md-3 col-sm-4">
                <div class="pad box-pane-right bg-green" style="min-height: 280px">
                <div class="description-block margin-bottom">
                    <div class="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                    <h5 class="description-header">8390</h5>
                    <span class="description-text">Visits</span>
                </div>
                <!-- /.description-block -->

                <div class="description-block margin-bottom">
                    <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                    <h5 class="description-header">30%</h5>
                    <span class="description-text">Referrals</span>
                </div>
                <!-- /.description-block -->

                <div class="description-block">
                    <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                    <h5 class="description-header">70%</h5>
                    <span class="description-text">Organic</span>
                </div>
                <!-- /.description-block -->
                </div>
            </div>
        <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.box-body -->
    </div>
</div>

</template>

<script>
require("jquery-ui");
require("jquery-ui/ui/widgets/sortable");
require("jquery-ui/ui/disable-selection");
require("../../../plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
const world = require("../../../plugins/jvectormap/jquery-jvectormap-world-mill-en.js");

// add modal
export default {
  components: {
  },
  props: ["persons"],
  data() {
    return {};
  },
  methods: {},

  mounted() {
    $("#world-map").vectorMap({
      map: "world_mill_en",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "rgba(210, 214, 222, 1)",
          "fill-opacity": 1,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          "fill-opacity": 0.7,
          cursor: "pointer"
        },
        selected: {
          fill: "yellow"
        },
        selectedHover: {}
      },
      markerStyle: {
        initial: {
          fill: "#0065AF",
          stroke: "#89A"
        }
      },
      markers: [
        { latLng: [41.9, 12.45], name: "Vatican City" },
        { latLng: [43.73, 7.41], name: "Monaco" },
        { latLng: [-0.52, 166.93], name: "Nauru" },
        { latLng: [-8.51, 179.21], name: "Tuvalu" },
        { latLng: [43.93, 12.46], name: "San Marino" },
        { latLng: [47.14, 9.52], name: "Liechtenstein" },
        { latLng: [7.11, 171.06], name: "Marshall Islands" },
        { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
        { latLng: [3.2, 73.22], name: "Maldives" },
        { latLng: [35.88, 14.5], name: "Malta" },
        { latLng: [12.05, -61.75], name: "Grenada" },
        { latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines" },
        { latLng: [13.16, -59.55], name: "Barbados" },
        { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
        { latLng: [-4.61, 55.45], name: "Seychelles" },
        { latLng: [7.35, 134.46], name: "Palau" },
        { latLng: [42.5, 1.51], name: "Andorra" },
        { latLng: [14.01, -60.98], name: "Saint Lucia" },
        { latLng: [6.91, 158.18], name: "Federated States of Micronesia" },
        { latLng: [1.3, 103.8], name: "Singapore" },
        { latLng: [1.46, 173.03], name: "Kiribati" },
        { latLng: [-21.13, -175.2], name: "Tonga" },
        { latLng: [15.3, -61.38], name: "Dominica" },
        { latLng: [-20.2, 57.5], name: "Mauritius" },
        { latLng: [26.02, 50.55], name: "Bahrain" },
        { latLng: [0.33, 6.73], name: "São Tomé and Príncipe" }
      ]
    });
  }
};
</script>

<style>


</style>