<template>
    <div class="box box-success">
        <div class="box-header">
            <i class="fa fa-comments-o"></i>

            <h3 class="box-title">Chatter</h3>

            <div class="box-tools pull-right" data-toggle="tooltip" title="Show my chats/all">
                <div class="btn-group" data-toggle="btn-toggle">
                    <button type="button" class="btn btn-default btn-sm active" v-on:click="setUser(true)">
                        <i class="fa fa-square text-green"></i>
                    </button>

                    <button type="button" class="btn btn-default btn-sm" v-on:click="setUser(false)">
                    <i class="fa fa-square text-red"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="box-body chat">
            
            <transition-group name="list" tag="div">
                <div class="item" v-for="chat in filteredChats" v-bind:chat="chat" v-bind:key="chat.id">
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
                            <a :href="chat.attachment.url" target="_blank" class="btn btn-primary btn-sm btn-flat">Open</a>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>

        <div class="box-footer">
            <div class="input-group">
            <input class="form-control" placeholder="Type message..." v-model="chatMessage">

            <div class="input-group-btn">
                <button type="button" class="btn btn-success" v-on:click="addChat">
                <i class="fa fa-plus"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as moment from "moment";

export default {
  props: ["chats"],

  data() {
      return {
          chats: [],
          showUser: ''
      }
  },

  methods: {
    addChat: function() {
      // console.log(moment.default(date).format());
      let curTime = moment().format("LT");

      let newChat = {
        id: 3,
        from: "John",
        userIconUrl: "dist/img/user2-160x160.jpg",
        message: this.chatMessage,
        time: curTime
      };

      console.log("addChat");

      this.$emit("chat-added", newChat);
    },

    setUser: function (isMe) {
        if (isMe) {
            this.showUser = 'John';
        } else {
            this.showUser = '';
        }
        
    }
  },

  computed: {
      filteredChats() {
          return this.chats.filter(chat => {
              if (this.showUser !== '') {
                return chat.from.toLowerCase() === this.showUser.toLowerCase();
              }

              return true;
              
          })
      }
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