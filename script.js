$(document).ready(function(){
  const abc=()=>
        {
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
                    $("#uname").val("");
                 $("#pwd").val("");
            }
          
         }
    
 $("#logbtn").click(abc);
 $(document).keypress((e)=>{
    console.log(e)
    if(e.keyCode==13){
        abc();
    }
 });
})
