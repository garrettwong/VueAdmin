
Vue.component('chat-box', {
    props: ['chats'],
    template: `
    <div class="box box-success">
    <div class="box-header">
        <i class="fa fa-comments-o"></i>

        <h3 class="box-title">Chatter</h3>

        <div class="box-tools pull-right" data-toggle="tooltip" title="Status">
        <div class="btn-group" data-toggle="btn-toggle">
            <button type="button" class="btn btn-default btn-sm active">
            <i class="fa fa-square text-green"></i>
            </button>
            <button type="button" class="btn btn-default btn-sm">
            <i class="fa fa-square text-red"></i>
            </button>
        </div>
        </div>
    </div>

    <div class="box-body chat">

        <div class="item" v-for="chat in chats" v-bind:chat="chat" v-bind:key="chat.id">
            <img :src="chat.userIconUrl" alt="user image" class="online">

            <p class="message">
                <a href="#" class="name">

                <small class="text-muted pull-right">
                    <i class="fa fa-clock-o"></i> {{chat.time}}</small>
                {{chat.from}}
                </a>
                {{chat.message}}
            </p>

            <div class="attachment" v-if="chat.attachment !== undefined">
                <h4>Attachments:</h4>

                <p class="filename">
                {{chat.attachment.thumbnail}}
                </p>

                <div class="pull-right">
                <a :href="chat.attachment.url" target="_blank" 
                    class="btn btn-primary btn-sm btn-flat">Open</button>
                </div>
            </div>

        </div>
        
    </div>
    <!-- /.chat -->

    <div class="box-footer">
        <div class="input-group">
        <input class="form-control" placeholder="Type message...">

        <div class="input-group-btn">
            <button type="button" class="btn btn-success">
            <i class="fa fa-plus"></i>
            </button>
        </div>
        </div>
    </div>
    </div>`
})