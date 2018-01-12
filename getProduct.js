function iphoneX() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("iphoneX");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var json_obj = JSON.parse(this.responseText);
        var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
       
       document.getElementById("demo").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/iPhone X", true);
    xhttp.send();

    
  }

  function s8() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("samsungs8");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
     
       var json_obj = JSON.parse(this.responseText);
       var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
       document.getElementById("demo1").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/Galaxy S8", true);
    xhttp.send();
  }

  function pixel() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("pixel");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var json_obj = JSON.parse(this.responseText);
        var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
        
        
       document.getElementById("demo2").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/Pixel 2XL", true);
    xhttp.send();
  }

  function mi() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("mi5");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var json_obj = JSON.parse(this.responseText);
        var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
        
        
       document.getElementById("demo3").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/Mi 5", true);
    xhttp.send();
  }

  function v5s() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("v5s");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var json_obj = JSON.parse(this.responseText);
        var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
        
        
       document.getElementById("demo4").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/V5s", true);
    xhttp.send();
  }

  function iphone8() {
    var xhttp = new XMLHttpRequest();
    var phoneName =  document.getElementById("iphone8");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var json_obj = JSON.parse(this.responseText);
        var data = "Name: " +json_obj[0].name + "<br>" + "Brand: "+json_obj[0].brand+ "<br>" +"Color: "+json_obj[0].color+ "<br>"  +"Memory: "+json_obj[0].memory+" <br> "+"Screen Size: "+json_obj[0].screenSize;
        
        
       document.getElementById("demo5").innerHTML = data;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products/name/iPhone 8", true);
    xhttp.send();
  }


  function allProducts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var responseProducts = this.responseText
        
       document.getElementById("allProducts").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://onlinemobilestore.herokuapp.com/products", true);
    xhttp.send();
  }
  