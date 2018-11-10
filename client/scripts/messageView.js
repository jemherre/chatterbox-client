var MessageView = {

  render: _.template(`
      <div class="chat"><!--
      --><span id="<%=username%>" class="username" ><%=username%></span><!--
      --><div><%=text%></div><!--
      --></div>
    `)

};