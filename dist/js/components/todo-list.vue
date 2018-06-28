<template>
<div class="box box-primary">
    <div class="box-header">
        <i class="ion ion-clipboard"></i>

        <h3 class="box-title">To Do List</h3>

        <div class="box-tools pull-right">
            <ul class="pagination pagination-sm inline">
            <li>
                <a href="#">&laquo;</a>
            </li>
            <li>
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
            <li>
                <a href="#">&raquo;</a>
            </li>
            </ul>
        </div>
    </div>
    
    <div class="box-body">
    
        <ul class="todo-list">
            <li v-for="todo in todos">
                <span class="handle">
                    <i class="fa fa-ellipsis-v"></i>
                    <i class="fa fa-ellipsis-v"></i>
                </span>
                
                <input type="checkbox" value="">
            
                <span class="text">{{todo.message}}</span>

                <small class="label" v-bind:class="todo.labelClass">
                    <i class="fa fa-clock-o"></i> {{todo.created}}
                </small>
                
                <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                </div>
            </li>

        </ul>
    </div>

    <div class="box-footer clearfix no-border">
        <button type="button" class="btn btn-default pull-right" v-on:click="openModal_addTodo">
            <i class="fa fa-plus"></i> Add item
        </button>
    </div>



    <!-- modal: add -->
    <div class="modal fade" id="modal-add-todo">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Default Modal</h4>
            </div>
            <div class="modal-body">
                <input type="text" v-model="todo">
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="addTodo">Save changes</button>
            </div>
        </div>
        <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>
</template>

<script>

require("jquery-ui");
require("jquery-ui/ui/widgets/sortable");
require("jquery-ui/ui/disable-selection");
import 'bootstrap';

// add modal

export default {
  props: ["todos"],

  methods: {
    openModal_addTodo: function() {
        console.log("modal", this);

        $("#modal-add-todo").modal();
    },
    addTodo: function() {
        console.log('addTodo', this.todo);

        this.$emit('addTodo', this.todo);
    },

    
    openModal_editTodo: function() {
        console.log("modal", this);

        $(".modal").modal();
    },
    editTodo: function() {
        console.log('addTodo', this.todo);

        this.$emit('addTodo', this.todo);
    },

    
    openModal_deleteTodo: function() {
        console.log("modal", this);

        $(".modal").modal();
    },
    deleteTodo: function() {
        console.log('addTodo', this.todo);

        this.$emit('addTodo', this.todo);
    },

    
  },

  mounted() {
    console.log($(".todo-list"));

    // jQuery UI sortable for the todo list
    $(".todo-list").sortable({
      placeholder: "sort-highlight",
      handle: ".handle",
      forcePlaceholderSize: true,
      zIndex: 999999
    });

    $(document).keyup(function(e) { 
        if (e.keyCode == 27) { // esc
            $(".modal").modal('toggle');
        } 
    });
  }
};
</script>

<style>
</style>