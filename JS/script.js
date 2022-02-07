function decKg(fruitName)
{
   
  
   if(fruitName=="apple"){
    var currentQuantity = parseInt(document.getElementById("qnt-apple").innerHTML);
    
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-apple').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-apple').innerHTML= price;
    }
   }else if(fruitName=="banana"){
    var currentQuantity = parseInt(document.getElementById("qnt-banana").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-banana').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-banana').innerHTML= price;
    }
   }else if(fruitName=="grapes"){
    var currentQuantity = parseInt(document.getElementById("qnt-grapes").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-grapes').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-grapes').innerHTML= price;
    }
   }else if(fruitName=='orange'){
    var currentQuantity = parseInt(document.getElementById("qnt-orange").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-orange').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-orange').innerHTML= price;
    }
   }

}

function incKg(fruitName)
{
  if(fruitName=="apple")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-apple').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-apple').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-apple').innerHTML= price;
  }
  else if(fruitName=="banana")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-banana').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-banana').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-banana').innerHTML= price;
  }
  else if(fruitName=="grapes")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-grapes').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-grapes').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-grapes').innerHTML= price;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-orange').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-orange').innerHTML = currentQuantity;
    var price =currentQuantity*10;
      document.getElementById('rup-orange').innerHTML= price;
  }
 
}

function fdecKg(vegetableName)
{
   
  
   if(vegetableName=="tomato"){
    var currentQuantity = parseInt(document.getElementById("qnt-tomato").innerHTML);
    
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-tomato').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-tomato').innerHTML= price;
    }
   }else if(vegetableName=="potato"){
    var currentQuantity = parseInt(document.getElementById("qnt-potato").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-potato').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-potato').innerHTML= price;
    }
   }else if(vegetableName=="cauliflower"){
    var currentQuantity = parseInt(document.getElementById("qnt-cauliflower").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-cauliflower').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-cauliflower').innerHTML= price;
    }
   }else if(vegetableName=='Cabbage'){
    var currentQuantity = parseInt(document.getElementById("qnt-cabbage").innerHTML);
    if(currentQuantity>0)
    {
      currentQuantity--;
      document.getElementById('qnt-cabbage').innerHTML = currentQuantity;
      var price =currentQuantity*10;
      document.getElementById('rup-cabbage').innerHTML= price;
    }
   }

}

function fincKg(vegetableName)
{
  if(vegetableName=="tomato")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-tomato').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-tomato').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-tomato').innerHTML= price;
  }
  else if(vegetableName=="potato")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-potato').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-potato').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-potato').innerHTML= price;
  }
  else if(vegetableName=="cauliflower")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-cauliflower').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-cauliflower').innerHTML = currentQuantity;
    var price =currentQuantity*10;
    document.getElementById('rup-cauliflower').innerHTML= price;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-cabbage').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-cabbage').innerHTML = currentQuantity;
    var price =currentQuantity*10;
      document.getElementById('rup-cabbage').innerHTML= price;
  }
 
}