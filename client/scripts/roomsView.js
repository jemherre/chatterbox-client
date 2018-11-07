var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  count: 0,  //room counter

  initialize: function() {
    RoomsView.$button.on('click',RoomsView.getRoomName); //create event handler for adding room
    RoomsView.renderRoom(RoomsView.count); //create main(intial) room
    $('#currentRoom').on('click',RoomsView.selectRoom);//create event handler that will 
  },

  //create template for select - options
  render: _.template(`
  <option value="<%=roomName%>"><!--
    --><%=roomName%><!--
  --></option>`
  ),

  //generates/displays rooms when clicked
  renderRoom: function(name) {
    console.log("Render: ",name);
    var html = RoomsView.render({'roomName': name});
    console.log(html);
    $(document).ready(function() { 
      RoomsView.$select.append(html);
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
    // var ddl = document.getElementById("currentRoom");
    // var selectedValue = ddl.options[ddl.selectedIndex].value;
    //    if (selectedValue == "0")
    //   {
    //    alert("Please select a card type");
    //   }
  }

};
