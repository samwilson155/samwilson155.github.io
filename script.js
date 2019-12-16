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
            
            length = data.body.length
            
            for (index = 0; index < length; ++index) {
              var code = document.createElement("CODE");
              var div1 = document.createElement("DIV");
              var div2 = document.createElement("DIV");
              var language = document.createElement("H2");
              var action = document.createElement("H2");
              var pre = document.createElement("PRE")
              pre.setAttribute("id", "pre_" + index);
              code.setAttribute("id", "code_" + index);
              div1.setAttribute("class", "grid");
              div1.setAttribute("id", "grid_" + index);
              div2.setAttribute("class", "grid__col--12");
              div2.setAttribute("id", "grid__col--12_" + index);
              language.setAttribute("id", "language_" + index);
              action.setAttribute("id", "action_" + index);
              language.setAttribute("style", "font-weight: bold;");
              code.setAttribute("style", "height: 100px;");
              
              document.getElementById("landing").appendChild(div1);
              document.getElementById("grid_" + index).appendChild(div2);
              document.getElementById("grid__col--12_" + index).appendChild(pre);
              document.getElementById("pre_" + index).appendChild(language);
              document.getElementById("pre_" + index).appendChild(action);
              document.getElementById("pre_" + index).appendChild(code);
              
              retrieval2 = data.body[index].action.replace(/\"/g, "");
              retrieval1 = data.body[index].language.replace(/\"/g, "");
              retrieval = data.body[index].code.replace(/\\"/g, "");
              
              document.getElementById("code_" + index).innerHTML = retrieval;
              document.getElementById("language_" + index).innerHTML = retrieval1;
              document.getElementById("action_" + index).innerHTML = retrieval2;
            }
            
            // retrieval = data.body[2].code.replace("\"", "");
            // retrieval2 = data.body[2].language.replace("\"","");
            // document.getElementById('testCode').innerHTML = retrieval;
            // document.getElementById('testHeader').innerHTML = retrieval2;
            // console.log(data.body.length)
            // // console.log(data.body[0].action);
            // // console.log(data.body[0].code);
            // // console.log(data.body[0].key);
            // // console.log(data.body[0].language);
          }
      });

    });
    
});