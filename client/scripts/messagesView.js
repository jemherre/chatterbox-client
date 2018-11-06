var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //call messageView.render
    //MessagesView.$chat.on('click', MessagesView.renderMessage);

  },

  renderMessage: function(obj) {
    // var obj = obj || Messages;
    // //remove sub div elements and then reappend them
    $(document).ready(function() { 
      MessagesView.$chats.empty();
    }); 
    //append the dom with the messageView.render format
    //var html = '';
    //for (i in obj) {
    var html = MessageView.render(obj);
    //}
    console.log(html);
    $(document).ready(function() { 
      MessagesView.$chats.append(html);
    });    
    
  }

};