var messageCounter = 0;

var FormView = {
  
  $form: $('form'),
  

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    messageCounter = 1;
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var data = {};
    data.username = App.username;
    data.text = FormView.$form.find('input[type=text]').val();
    data.roomname = null;
    
    // create the message
    Parse.create(data);
    //store in messages.js
    //index- , message - messobj 
    if (Messages[0] === undefined) {
      Messages[0] = data;
    } else {
      Messages[messageCounter++] = data;
    }
    console.log(Messages);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};