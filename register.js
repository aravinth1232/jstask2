const c = document.formfill;

const r = document.getElementById("result")
  


function validation(){

    if(c.username.value==""){
      
    r.classList.remove("result")   
        r.classList.add("yot")
    //    r.classList.toggle("yot")
       r.innerHTML ="Enter your name";
       console.log(r)         
        return false;
    }
    else if(c.username.value.length < 8){
      
        r.classList.remove("result")   
            r.classList.add("yot")
           r.innerHTML ="Username should be atlest 8 characters";
           console.log(r)         
            return false;
        }

    else if(c.email.value==""){
      
            r.classList.remove("result")   
                r.classList.add("yot")
            //    r.classList.toggle("yot")
               r.innerHTML ="Enter your email";
               console.log(r)         
                return false;
            }
    
    else if(c.password.value==""){
      
                r.classList.remove("result")   
                    r.classList.add("yot")
                //    r.classList.toggle("yot")
                   r.innerHTML ="Enter your password";
                   console.log(r)         
                    return false;
                }
    
    else if(c.password.value.length < 3){
      
                    r.classList.remove("result")   
                        r.classList.add("yot")
                       r.innerHTML ="Password sholud be atleaset 8 characters";
                       console.log(r)         
                        return false;
                    }
    else if(c.cpassword.value==""){
      
                    r.classList.remove("result")   
                        r.classList.add("yot")
                    //    r.classList.toggle("yot")
                       r.innerHTML ="Enter your Confirm password";
                       console.log(r)         
                        return false;
                    }
    else if(c.password.value !== c.cpassword.value){
      
                     r.classList.remove("result")   
                      r.classList.add("yot")
                    //    r.classList.toggle("yot")
                            r.innerHTML ="Password doesn't match";
                            console.log(r)         
                                return false;
       }
    
       else if(c.password.value === c.cpassword.value){


        r.classList.add("result")  
        r.innerHTML ="Password doesn't match";
        // popup.classList.remove("popup")
        popup.classList.toggle("open-slide")

                   return false;
           }
}

let popup = document.getElementById("popup")