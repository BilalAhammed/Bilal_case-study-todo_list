// document.title = newTitle("ToDos Webpage");
// document.title = "Some new title text";

function check_log()
{
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

    if(user.value=="" || pass.value=="")
    {
        window.alert("Please enter the login credentials!");
        // if(user.value=="")
        // {
        //     window.alert("Please enter the username!");
        // }
        // else(pass.value=="")
        // {
        //     window.alert("Please enter the password!");
        // }
    }
    else if(user.value=="admin" && pass.value=="12345")
        {
            document.getElementById("demo").innerHTML = window.location.assign("login.html")
            
            console.log("valid")
        }
        else
        {
            window.alert("Invalid login credentials!");
        }
    //     // document.getElementById("demo").innerHTML = "Page location is " + window.location.href;
    //     console.log("Valid")
    
}

// function selectlist()
// {
//     console.log( jsongetval += jsonval[i].completed); 
    
//     }

