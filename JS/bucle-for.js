/*function myFunction() {

    var x ="", i;
    
    for (i=1; i<=6; i++) {
    
    x = x + "<h" + i + ">Titular " + i + "</h" + i + ">";
    
    }
    
    document.getElementById("demo").innerHTML = x;
    
    }*/
    
    function myFunction() {

        var x ="", i;
        
        for (i=6; i>=1; i--) {
        
        x = x + "<h" + i + ">Titular " + i + "</h" + i + ">";
        
        }
        
        document.getElementById("demo").innerHTML = x;
        
        }
        