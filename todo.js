function jsontodo()
{

var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    if(this.readyState == 4 && this.status == 200);
    {
        var jsonval  = JSON.parse(this.responseText);
        
        // let json_lth    = jsonval.length;
        
        var jsongetval  = "";
               
            for(var i=0; i<15; i++)
        {            
            var cnt = i +1;
            jsongetval += "<li>" + 'Task' + cnt +  `<input type="checkbox">`+ jsonval[i].completed + "</li>"; 
            // jsongetval += "<li>" + `<input type="checkbox">` + jsonval[i].id + "</li>";
            
            //'Task '+cnt + `<input type="checkbox">` + "  " +
            // console.log(jsonval[i].completed);
            // if(jsongetval[i].completed=="true");
            // {
            //     console.log("Enable");
            // };
        }

        document.getElementById("test").innerHTML = jsongetval;
      
        // console.log(jsongetval);
        // console.log(json_lth);
    }
    // console.log(jsongetval);
    
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);

    xhttp.send();
}

    // function getval(){
    //     setTimeout(function(){
    
    //     },3000)
    // }

    // function selectlist(){
        // jsongetval
//         if(jsongetval[1].status==true)
//         {
// console.log("Selected");

//         };

        // $('input[type = 'checkbox']).change()
        // {

        // };
        
    //         $(this).prop("checked")==true
    // $('input[type='checkbox']).change(  )

        // console.log("clicked")
    //    console.log( jsongetval += jsonval[i].completed); 
    
    // }




