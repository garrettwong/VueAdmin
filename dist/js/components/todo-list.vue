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
                    <i class="fa fa-edit" v-on:click="openModal_editTodo(todo)"></i>
                    <i class="fa fa-trash-o" v-on:click="deleteTodo(todo)"></i>
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
                <h4 class="modal-title">Add todo</h4>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <input type="text" ref="addTodoInput" v-model="todo" class="form-control" placeholder="Todo...">
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="addTodo">Add Todo</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal: add -->

    <!-- modal: edit -->
    <div class="modal fade" id="modal-edit-todo">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Edit todo: {{originalSelectedTodoText}}</h4>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <input type="text" v-model="selectedTodo.message" class="form-control" placeholder="Todo...">
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="editTodo">Save</button>
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

// add modal

export default {
  props: ["todos"],
  data() {
    return {
      selectedTodo: {}
    };
  },
  methods: {
    openModal_addTodo: function() {
      $("#modal-add-todo").modal();

      // TODO: focus on the input box on modal load -- how do you do this in vue. v-model is selectedTodo.message
      this.$nextTick(() => {
        this.$refs.addTodoInput.focus();
      });
    },
    addTodo: function() {
      // TODO: we should add this to the database first

      this.$emit("addTodo", this.todo);
    },

    openModal_editTodo: function(selectedTodo) {
      this.selectedTodo = Object.assign({}, selectedTodo);
      this.originalSelectedTodoText = this.selectedTodo.message;

      $("#modal-edit-todo").modal();
    },
    editTodo: function() {
      // TODO: we should edit this in the database first

      this.$emit("editTodo", this.selectedTodo);

      $("#modal-edit-todo").modal("toggle");
    },

    deleteTodo: function(todo) {
      // TODO: we should delete this in the database first

      this.$emit("deleteTodo", todo);
    }
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
      if (e.keyCode == 27) {
        // esc - only apply to modal's that are currently on screen
        $(".modal.in").modal("toggle");
      }
    });
  }
};
</script>

<style>
</style>