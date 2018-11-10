var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //call messageView.render
    //MessagesView.$chat.on('click', MessagesView.renderMessage);
    $(document).ready(function() {

    
      $('#chats').on('click','.username', function(event){
        var name = this.innerHTML;
        console.log(event.currentTarget);
        $('#chats').children(`#${name}`).toggleClass('friend');
        // $(event.currentTarget).toggleClass('friend');
    });

    // $('#chats').on('click', function() {

    //     $('username').toggleClass('friend'); 
    //   });
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
    
  }

  //look for chat id on click
  //change attribute to friend

};

