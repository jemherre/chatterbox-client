var MessageView = {

  render:
    _.template(`
      <div class="chat"><!--
      --><span id="<%=_.escape(username)%>" class="username" ><%=_.escape(username)%></span><!--
      --><div><%=_.escape(text)%></div><!--
      --></div>
    `)

};