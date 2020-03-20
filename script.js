
// on click event for save button
$(".saveBtn").on("click", function(event) {
     event.preventDefault();
    // storing value for text box
     var userInput1 = $("#timeNine").val();
     var userInput2 = $("#timeTen").val();
     var userInput3 = $("#timeEleven").val();
     var userInput4 = $("#timeTwelve").val();
     var userInput5 = $("#timeOne").val();
     var userInput6 = $("#timeTwo").val();
     var userInput7 = $("#timeThree").val();
     var userInput8 = $("#timeFour").val();
     var userInput9 = $("#timeFive").val();

    // storing value of text box to local storage
     localStorage.setItem("data1", userInput1);
     localStorage.setItem("data2", userInput2);
     localStorage.setItem("data3", userInput3);
     localStorage.setItem("data4", userInput4);
     localStorage.setItem("data5", userInput5);
     localStorage.setItem("data6", userInput6);
     localStorage.setItem("data7", userInput7);
     localStorage.setItem("data8", userInput8);
     localStorage.setItem("data9", userInput9);


 });

 // pulling value from local storage
 var data1 = localStorage.getItem("data1");
 var data2 = localStorage.getItem("data2");
 var data3 = localStorage.getItem("data3");
 var data4 = localStorage.getItem("data4");
 var data5 = localStorage.getItem("data5");
 var data6 = localStorage.getItem("data6");
 var data7 = localStorage.getItem("data7");
 var data8 = localStorage.getItem("data8");
 var data9 =  localStorage.getItem("data9");

 // setting value as placeholder 
    $("#timeNine").attr("placeholder", data1); 
    $("#timeTen").attr("placeholder", data2);
    $("#timeEleven").attr("placeholder", data3);
    $("#timeTwelve").attr("placeholder", data4);
    $("#timeOne").attr("placeholder", data5);
    $("#timeTwo").attr("placeholder", data6);
    $("#timeThree").attr("placeholder", data7);
    $("#timeFour").attr("placeholder", data8); 
    $("#timeFive").attr("placeholder", data9); 
