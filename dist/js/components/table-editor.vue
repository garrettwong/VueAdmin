<template>
<div class="box box-primary">
    <div class="box-header">
        <i class="ion ion-clipboard"></i>

        <h3 class="box-title">Table Editor</h3>

    </div>
    
    <div class="box-body">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th v-for="col in cols">
                        {{col}}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="data in rows" v-on:click="openModal(data)">
                    <td v-for="dataCell in data">
                        {{dataCell}}
                    </td>

                    <td>
                        <i class="fa fa-edit" v-on:click="openModal_editPerson(data)"></i>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

    <div class="box-footer clearfix no-border">
        <button type="button" class="btn btn-default pull-right" v-on:click="openModal_addPerson">
            <i class="fa fa-plus"></i> Add item
        </button>
    </div>

    <!-- modal: view -->
    <div class="modal fade" id="modal-view">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{viewData.name}}</h4>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">

                            {{viewData.age}} - {{viewData.location}}

                            <div class="pull-right">
                                <button class="btn btn-primary" v-on:click="toggle_showDashboard()">Show graph</button>
                            </div>
                        </div>
                    </div>

                    <!-- chart -->
                    <transition name="fade" mode="out-in">
                        <div v-show="showDashboard" class="item" style="martin-top:10px;">
                            <coolness-chart v-bind:person="viewData"></coolness-chart>
                        </div>
                    </transition>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal: view -->


    <!-- modal: add -->
    <div class="modal fade" id="modal-add-person">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Add Person</h4>
                </div>

                <div class="modal-body">
                    <div class="input-group">
                        <input type="text" ref="addPersonInput" v-model="person" class="form-control" placeholder="person...">
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="addPerson">Add Person</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal: add -->

    <!-- modal: edit -->
    <div class="modal fade" id="modal-edit-person">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Edit Person: {{originalSelectedPerson}}</h4>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <input type="text" v-model="selectedPerson.name" class="form-control" placeholder="person...">
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="editPerson(selectedPerson)">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal: edit -->
</div>
</template>

<script>
require("jquery-ui");
require("jquery-ui/ui/widgets/sortable");
require("jquery-ui/ui/disable-selection");
import "bootstrap/js/modal";

import CoolnessChart from "./coolness-chart.vue";

// add modal

export default {
  components: {
    "coolness-chart": CoolnessChart
  },
  props: ["persons"],
  data() {
    return {
      cols: [],
      rows: [],
      selectedPerson: {},
      originalSelectedPerson: "",
      viewData: {},
      showDashboard: false
    };
  },
  methods: {
    openModal: function(dataRow) {
      // TODO: remount the coolness-chart on this.viewData change

      console.log(this, "lookin for a component refresh");

      this.viewData = dataRow;

      $("#modal-view").modal();
    },
    toggle_showDashboard: function() {
      // project on this.viewData

      this.showDashboard = !this.showDashboard;
    },
    openModal_addPerson: function() {
      $("#modal-add-person").modal();

      // TODO: focus on the input box on modal load -- how do you do this in vue. v-model is selectedPerson.name
      this.$nextTick(() => {
        this.$refs.addPersonInput.focus();
      });
    },
    addPerson: function() {
      // TODO: we should add this to the database first
      let name = this.person;
      let newPerson = {
        id: this.getNextId(),
        name: name,
        age: 25,
        location: "Here"
      };

      this.rows.push(newPerson);
    },

    getNextId: function() {
      let maxId = Number.MIN_VALUE;
      this.rows.find(function(a, b) {
        if (maxId < a.id) maxId = a.id;
      });
      return maxId + 1;
    },

    openModal_editPerson: function(selectedPerson) {
      this.selectedPerson = Object.assign({}, selectedPerson);
      this.originalSelectedPerson = this.selectedPerson.message;

      $("#modal-edit-person").modal();

      // TODO: prevent event bubbling
        
      // two modals are opened on edit click
    },
    editPerson: function(editedPerson) {
      // TODO: we should edit this in the database first

      console.log(editedPerson);

      for (let i = 0; i < this.rows.length; i++) {
        let person = this.rows[i];

        if (person.id === editedPerson.id) {
          alert("derp");

          // find a better way to assign this
          this.rows[i].name = editedPerson.name;
          this.rows[i].age = editedPerson.age;
          this.rows[i].location = editedPerson.location;
          break;
        }
      }

      console.log(this.rows);

      $("#modal-edit-person").modal("toggle");
    }
  },

  mounted() {
    this.cols = ["Id", "Name", "Age", "Location"];
    this.rows = [
      { id: 1, name: "Garrett", age: 29, location: "Sunnyvale" },
      { id: 2, name: "Tyler", age: 26, location: "Walnut" },
      { id: 3, name: "Jinfull", age: 29, location: "Miami" }
    ];

    // Todo: initialize table plugin

    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        // esc - only apply to modal's that are currently on screen
        $(".modal.in").modal("toggle");
      }
    });
  }
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>