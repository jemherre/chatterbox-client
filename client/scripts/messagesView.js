var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //call messageView.render
    //MessagesView.$chat.on('click', MessagesView.renderMessage);
  },

  renderMessage: function() {
    //remove sub div elements and then reappend them
    $(document).ready(function() { 
      MessagesView.$chats.empty();
    }); 
    //append the dom with the messageView.render format
    var i; var html = '';
    for (i in Messages) {
      html += MessageView.render(Messages[i]);
    }
    console.log(html);
    $(document).ready(function() { 
      MessagesView.$chats.append(html);
    });    
    
  }

};