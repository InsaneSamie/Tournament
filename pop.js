function myFunction() {
    let text;
    let person = prompt("Please enter your Email id:", "useremail@gmail.com");
    if (person == null || person == "") 
       text = "User cancelled the prompt.";
    else 
      text = "Hello " + person + "! How are you today?";

    document.getElementById("demo").innerHTML = text;
}