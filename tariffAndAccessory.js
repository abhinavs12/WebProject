
function iphoneXTariff() {
  
       var xhttp = new XMLHttpRequest();
    
       var phoneName =  document.getElementById("iphone8");
       var newTariff = "";
       
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var json_obj = JSON.parse(this.responseText);
           for(var i =0; i< json_obj.length;i++ ){

                newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
           } 
   
          if (newTariff){

            document.getElementById("demo").innerHTML = newTariff;
          }
          else{
            document.getElementById("demo").innerHTML = "";
          }
         }
       };
       xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/1/tariffs", true);
       xhttp.send();
       
       
       
     
  }


function iphoneXAccessories() {
  
       var xhttp = new XMLHttpRequest();
       var phoneName =  document.getElementById("iphone8");
       var newAccessory = "";
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var json_obj = JSON.parse(this.responseText);
           for(var i =0; i< json_obj.length;i++ ){

              newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
        
          } 
   
          if (newAccessory){

            document.getElementById("demo1").innerHTML = newAccessory;
          }
          else{
            document.getElementById("demo1").innerHTML = "";
          }
   
         }
       };
       xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/1/accessories", true);
       xhttp.send();
       
     
  }

  function samsungTariff() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         
         var newTariff = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
       
              newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
            } 
     
            
            document.getElementById("demo").innerHTML = newTariff;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/2/tariffs", true);
         xhttp.send();
         
       
    }
  
  
  function samsungAccessories() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newAccessory = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
              newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
            } 
     
            
             document.getElementById("demo1").innerHTML = newAccessory;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/2/accessories", true);
         xhttp.send();
         
       
    }
  
function iphone8Tariff() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newTariff = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
        
              newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
            } 
     
            
            document.getElementById("demo").innerHTML = newTariff;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/3/tariffs", true);
         xhttp.send();
         
       
    }
  
  
  function iphone8Accessories() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newAccessory = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
  
              newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
              
            } 
     
            
             document.getElementById("demo1").innerHTML = newAccessory;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/3/accessories", true);
         xhttp.send();
         
       
    }
  
    function mi5Tariff() {
      
           var xhttp = new XMLHttpRequest();
           var phoneName =  document.getElementById("iphone8");
           var newTariff = "";
           xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
               var json_obj = JSON.parse(this.responseText);
               for(var i =0; i< json_obj.length;i++ ){
            
                newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
              } 
       
              
              document.getElementById("demo").innerHTML = newTariff;
       
             }
           };
           xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/4/tariffs", true);
           xhttp.send();
           
         
      }
    
    
    function mi5Accessories() {
      
           var xhttp = new XMLHttpRequest();
           var phoneName =  document.getElementById("iphone8");
           var newAccessory = "";
           xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
               var json_obj = JSON.parse(this.responseText);
               for(var i =0; i< json_obj.length;i++ ){
    
                newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
              } 
       
              
               document.getElementById("demo1").innerHTML = newAccessory;
       
             }
           };
           xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/4/accessories", true);
           xhttp.send();
           
         
      }
    
      
function v5sTariff() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newTariff = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
           
              newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
            } 
     
            
            document.getElementById("demo").innerHTML = newTariff;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/5/tariffs", true);
         xhttp.send();
         
       
    }
  
  
  function v5sAccessories() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newAccessory = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
  
              newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
            } 
     
            
             document.getElementById("demo1").innerHTML = newAccessory;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/5/accessories", true);
         xhttp.send();
         
       
    }

    
function pixelTariff() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newTariff = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
  
         
              newTariff = newTariff+   '<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="tariff" class="panel-footer "'+ "value="+"\""+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: "+json_obj[i].upfrontCost+" <br> "+ "Monthly: "+json_obj[i].monthly +"\""+'>'+"Name: "+ json_obj[i].name+" <br>"+"Texts: "+json_obj[i].texts+" <br>"+"Minutes: "+json_obj[i].minutes+"<br>"+"UpfrontCost: $"+json_obj[i].upfrontCost+" <br> "+ "Monthly: $"+json_obj[i].monthly+'</div></div></div>'
            } 
     
            
            document.getElementById("demo").innerHTML = newTariff;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/6/tariffs", true);
         xhttp.send();
         
       
    }
  
  
  function pixelAccessories() {
    
         var xhttp = new XMLHttpRequest();
         var phoneName =  document.getElementById("iphone8");
         var newAccessory = "";
         xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var json_obj = JSON.parse(this.responseText);
             for(var i =0; i< json_obj.length;i++ ){
  
              newAccessory =  newAccessory+'<div class="container"> <div class="col-size"><div class="panel panel-primary"><div class="panel-heading">Data Tariff</div><input type="radio" name="accessory" class="iphoneX panel-footer "'+ "value="+"\""+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: "+json_obj[i].cost +"\""+'>'+"Brand: "+json_obj[i].brand+"<br> " +"Name: "+ json_obj[i].name +"<br>"+"Cost: $"+json_obj[i].cost+'</div></div></div>'
              
            } 
     
            
             document.getElementById("demo1").innerHTML = newAccessory;
     
           }
         };
         xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/6/accessories", true);
         xhttp.send();
         
       
    }
  