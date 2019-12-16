$(document).ready(function(){
    
    $("#templateButton").click(function() {
      var sendData = {};
      $.ajax({
          type: 'POST',
          url: 'https://zej8gx9g3j.execute-api.us-east-1.amazonaws.com/test1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            retrieval = data.body[0].code.replace("\"", "");
            document.getElementById('testCode').innerHTML = retrieval;
            alert('Template Retrieved Successfully!');
            // console.log(data.body[0].action);
            // console.log(data.body[0].code);
            // console.log(data.body[0].key);
            // console.log(data.body[0].language);
          }
      });

    });
    
});