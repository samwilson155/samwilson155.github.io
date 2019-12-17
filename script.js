$(document).ready(function(){
    
    $(document).ready(function() {
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

            var languageList = [];
            var actionList = [];
            
            for (index = 0; index < length; ++index) {
              var code = document.createElement("CODE");
              var div1 = document.createElement("DIV");
              var div2 = document.createElement("DIV");
              var language = document.createElement("H2");
              var action = document.createElement("H2");
              var pre = document.createElement("PRE");
              var btn = document.createElement("BUTTON");
              btn.setAttribute("type", "button");
              btn.setAttribute("id", "button_" + index);
              btn.setAttribute("class", "expand");
              pre.setAttribute("id", "pre_" + index);
              code.setAttribute("id", "code_" + index);
              div1.setAttribute("class", "grid");
              div1.setAttribute("id", "grid_" + index);
              div2.setAttribute("class", "grid__col--12");
              div2.setAttribute("id", "grid__col--12_" + index);
              language.setAttribute("id", "language_" + index);
              action.setAttribute("id", "action_" + index);
              language.setAttribute("style", "font-weight: bold;");
              code.setAttribute("style", "display: none;");
              
              document.getElementById("landing").appendChild(div1);
              document.getElementById("grid_" + index).appendChild(div2);
              document.getElementById("grid__col--12_" + index).appendChild(pre);
              document.getElementById("pre_" + index).appendChild(language);
              document.getElementById("pre_" + index).appendChild(action);
              document.getElementById("pre_" + index).appendChild(code);
              document.getElementById("pre_" + index).appendChild(btn);
              
              retrieval2 = data.body[index].action.replace(/\"/g, "");
              retrieval1 = data.body[index].language.replace(/\"/g, "");
              retrieval = data.body[index].code.replace(/\"/g, "");
              
              document.getElementById("button_" + index).innerHTML = "expand";
              document.getElementById("code_" + index).innerHTML = retrieval;
              document.getElementById("language_" + index).innerHTML = retrieval1;
              document.getElementById("action_" + index).innerHTML = retrieval2;
              
              action = data.body[index].action.replace(/\"/g, "");
              language = data.body[index].language.replace(/\"/g, "");
              
              if (languageList.includes(language)) {
                // Do nothing;
              }
              else {
                languageList.push(language);
              }
              
              if (actionList.includes(action)) {
                // Do nothing;
              }
              else {
                actionList.push(action);
              }
              
              
            }
          
            
            var spanny = document.createElement("SPAN");
            spanny.setAttribute("id", "spanny");
            document.getElementById("divvy").appendChild(spanny);
            var filterBy = document.createElement("P");
            filterBy.setAttribute("id", "filter");
            document.getElementById("spanny").appendChild(filterBy);
            document.getElementById("filter").innerHTML = "Filter By: &#9;";
            var languageSelect = document.createElement("SELECT");
            languageSelect.setAttribute("id", "lang_selection");
            document.getElementById("spanny").appendChild(languageSelect);
            var langOption = document.createElement("OPTION");
            langOption.setAttribute("id", "langy");
            document.getElementById("lang_selection").appendChild(langOption);
            document.getElementById("langy").innerHTML = "Language";
            var actionSelect = document.createElement("SELECT");
            actionSelect.setAttribute("id", "act_selection");
            document.getElementById("spanny").appendChild(actionSelect);
            var actOption = document.createElement("OPTION");
            actOption.setAttribute("id", "acty");
            document.getElementById("act_selection").appendChild(actOption);
            document.getElementById("acty").innerHTML = "Action";
            
            
            var languageLength = languageList.length;
            var actionLength = actionList.length;
            
            for (index = 0; index < languageLength; ++index) {
              var option = document.createElement("OPTION");
              option.setAttribute("id", "option1_" + index);
              document.getElementById("lang_selection").appendChild(option);
              document.getElementById("option1_" + index).value = languageList[index];
              document.getElementById("option1_" + index).innerHTML = languageList[index];
            }
            
            for (index = 0; index < actionLength; ++index) {
              var option = document.createElement("OPTION");
              option.setAttribute("id", "option2_" + index);
              document.getElementById("act_selection").appendChild(option);
              document.getElementById("option2_" + index).value = actionList[index];
              document.getElementById("option2_" + index).innerHTML = actionList[index];
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
    
    $(document).on('click','.expand', function(){

      var id = this.id;
      
      var index = id.substr(id.length - 1);
      
      if (document.getElementById(id).innerHTML == "expand") {
      
        document.getElementById("code_" + index).style.display = "inherit";
        document.getElementById(id).innerHTML = "collapse";
        
      }
      else {
        document.getElementById("code_" + index).style.display = "none";
        document.getElementById(id).innerHTML = "expand";
      }
    });
    
    // $(document).on('change', '#lang_selection', function() {
      
    //   var e = document.getElementById("lang_selection");
    //   var value = e.options[e.selectedIndex].value;
      
    //   var sendData = {};
    //   $.ajax({
    //       type: 'POST',
    //       url: 'https://zej8gx9g3j.execute-api.us-east-1.amazonaws.com/test1',
    //       data: JSON.stringify(sendData),
    //       crossDomain: true,
    //       contentType: "application/json",
    //       dataType: "json",
    //       success: function (data, status){
          
    //         length = data.body.length
          
    //         var languageList = [];
    //         var actionList = [];
            
    //         for (index = 0; index < length; ++index) {
    //           if (data.body[index].language.replace(/\"/g, "") == value) {
    //             var code = document.createElement("CODE");
    //             var div1 = document.createElement("DIV");
    //             var div2 = document.createElement("DIV");
    //             var language = document.createElement("H2");
    //             var action = document.createElement("H2");
    //             var pre = document.createElement("PRE");
    //             var btn = document.createElement("BUTTON");
    //             btn.setAttribute("type", "button");
    //             btn.setAttribute("id", "button_" + index);
    //             btn.setAttribute("class", "expand");
    //             pre.setAttribute("id", "pre_" + index);
    //             code.setAttribute("id", "code_" + index);
    //             div1.setAttribute("class", "grid");
    //             div1.setAttribute("id", "grid_" + index);
    //             div2.setAttribute("class", "grid__col--12");
    //             div2.setAttribute("id", "grid__col--12_" + index);
    //             language.setAttribute("id", "language_" + index);
    //             action.setAttribute("id", "action_" + index);
    //             language.setAttribute("style", "font-weight: bold;");
    //             code.setAttribute("style", "display: none;");
              
    //             document.getElementById("landing").appendChild(div1);
    //             document.getElementById("grid_" + index).appendChild(div2);
    //             document.getElementById("grid__col--12_" + index).appendChild(pre);
    //             document.getElementById("pre_" + index).appendChild(language);
    //             document.getElementById("pre_" + index).appendChild(action);
    //             document.getElementById("pre_" + index).appendChild(code);
    //             document.getElementById("pre_" + index).appendChild(btn);
              
    //             retrieval2 = data.body[index].action.replace(/\"/g, "");
    //             retrieval1 = data.body[index].language.replace(/\"/g, "");
    //             retrieval = data.body[index].code.replace(/\\"/g, "");
              
    //             document.getElementById("button_" + index).innerHTML = "expand";
    //             document.getElementById("code_" + index).innerHTML = retrieval;
    //             document.getElementById("language_" + index).innerHTML = retrieval1;
    //             document.getElementById("action_" + index).innerHTML = retrieval2;
              
    //             action = data.body[index].action.replace(/\"/g, "");
    //             language = data.body[index].language.replace(/\"/g, "");
              
    //             if (languageList.includes(language)) {
    //               // Do nothing;
    //             }
    //             else {
    //               languageList.push(language);
    //             }
              
    //             if (actionList.includes(action)) {
    //               // Do nothing;
    //             }
    //             else {
    //               actionList.push(action);
    //             }
    //           }
    //         }
    //     }
    //   });
    // });

});