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
    <button type="button" class="btn btn-default pull-right">
        <i class="fa fa-plus"></i> Add item</button>
    </div>
</div>
</template>

<script>
export default {
  props: ["todos"]
}
</script>

<style>

</style>