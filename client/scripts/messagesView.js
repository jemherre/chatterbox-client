var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //call messageView.render
    //MessagesView.$chat.on('click', MessagesView.renderMessage);
    $(document).ready(function() {

      $('#chats').on('click','.username', MessagesView.toggleStatus);
    });//create 
  },

  renderMessage: function(obj) {
    // var obj = obj || Messages;
    //append the dom with the messageView.render format
    //var html = '';
    //for (i in obj) {
    var html = MessageView.render(obj);
    //}
    console.log(html);
    $(document).ready(function() { 
      MessagesView.$chats.prepend(html);
    });    
    
  },

  toggleStatus: function(){
    var name = this.innerHTML;
    $('#chats').children(`#${name}`).toggleClass('friend');
    
    var allUsers = document.getElementById("chats").querySelectorAll(`#${name}`);
    for (var i = 0; i < allUsers.length; i++) {
      allUsers[i].style.color !== "red" ? allUsers[i].style.color = "red" : allUsers[i].style.color = "black";
    }
 }

  //look for chat id on click
  //change attribute to friend

};

