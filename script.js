$(document).ready(function(){
 $("#logbtn").click(function() {
    if($("#uname").val()=="" && $("#pwd").val()==""){
        alert("Please enter uname and password")
    }
    else if($("#pwd").val()=="" || $("#uname").val()==""){
        if($("#uname").val()==""){
            alert("Please enter your username");
        }
        else{
            alert("Please enter your password ");
        }     
       
    }
    else{
        alert("Welcome  "+$("#uname").val());
    }
    $("#uname").val("");
    $("#pwd").val("");
 })
//  var text=document.querySelectorAll("input")
//  text.addEventListener("keypress",(event)=>{
//     if(event.key=="Enter"){
//       event.preventDefault();
//       if ($("#uname").val() == "" && $("#pwd").val() == "") {
//         alert("Please enter uname and password")
//     }
//     else if ($("#pwd").val() == "" || $("#uname").val() == "") {
//         if ($("#uname").val() == "") {
//             alert("Please enter your username");
//         }
//         else {
//             alert("Please enter your password ");
//         }

//     }
//     else {
//         alert("Welcome  " + $("#uname").val());
//     }
//     $("#uname").val("");
//     $("#pwd").val("");
//     }
//  })
})
