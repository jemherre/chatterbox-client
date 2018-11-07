var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  selectedRoom : "0",  //room counter

  initialize: function() {
    RoomsView.$button.on('click',RoomsView.getRoomName); //create event handler for adding room
    RoomsView.renderRoom(RoomsView.selectedRoom); //create main(intial) room
    // console.log(RoomsView.selectRoom);
    // $('#currentRoom').attr('onchange', 'RoomsView.selectRoom');
    $("#currentRoom").on('change',RoomsView.selectRoom);
  },

  //create template for select - options
  render: _.template(`
  <option value="<%=roomName%>"><!--
    --><%=roomName%><!--
  --></option>`
  ),

  //generates/displays rooms when clicked
  renderRoom: function(name) {
    var html = RoomsView.render({'roomName': name});
    $(document).ready(function() { 
      RoomsView.$select.append(html);
      // Create the event handler for highlighted option
      //  $('#currentRoom').change(RoomsView.selectRoom);

    });  
  },

  //create pop-up form
  getRoomName: function(){
    var popUpForm = `
    <form action="#" id="getName" method="post">
      <input type="text" name="roomName"/>
      <button type="button"> Enter Room Name</button>
    </form>`;
    //maybe hide other form and make it re-appear after getting name
    $(document).ready(function(){
      //hide message form
     FormView.$form.css('display','none');
      $('#rooms').append(popUpForm);
      //create handler for when submiting new room name
      $('#getName button').on('click',RoomsView.enterRoomName);
      //create handler upon selecting room
    })
    console.log("END");
  },

  enterRoomName: function(event){
    event.preventDefault();// do we need this??
    //access and save name into render room
   var newRoom = $('#getName').find('input[type=text]').val();
   console.log("CHECK HERE>>>",newRoom);
   RoomsView.renderRoom(newRoom);
    //remove form room tag and display message form
    $(document).ready(function(){
      $("#getName").remove();
      FormView.$form.css('display','block');
    });
   
  },

  selectRoom: function() {
    console.log('selected room');
    //capture selected tag value
    var selectTag = document.getElementById("currentRoom");
    //option tag keeps track of highlight(selected) option 
    RoomsView.selectedRoom = (selectTag.options[selectTag.selectedIndex].value).toString();

    //pull all messages from parse server with roomName
    RoomsView.pullRooms((data) => {
      // examine the response from the server request:
      console.log(data);
    });

    //append the DOM with those messages


  },

  pullRooms: function(successCB, errorCB = null) { // data
    $.ajax({
      // url: `${Parse.server} 'where={"roomname":"${RoomsView.selectedRoom}"}'`,
    url: Parse.server,
      type: 'GET',
      data: { order: 'createdAt'},
      data: `where={"roomname":"${RoomsView.selectedRoom}"}`,
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
