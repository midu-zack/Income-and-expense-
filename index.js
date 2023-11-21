  const inputvalue = document.getElementById("expense");
  const btn = document.getElementById("click");
  const section = document.getElementById("category");
  let totalincome=0;



  const inputvalue2 = document.getElementById("expense2");
  const section2 = document.getElementById("category2");
  const btn2 = document.getElementById("click2");
  let totalexpense=0;

  

  btn.addEventListener('click', function () {

    
    
    const inputValue = inputvalue.value;
    const Sett = section.value;

    

    if (inputValue ==' ' || Sett ==' '){
      inputvalue.value = '';
      section.value = '';
      
    alert("Income field is required");

    return;   //stop this condition. so stop in my code  

    }else if(Sett.length<4) {

       inputvalue.value = '';
       section.value = '';

       alert("catagory be at least 4 characters");

      return;
    }
  
    document.getElementById("block").style.display="block";

    const tbsle = document.createElement("tr");


    const tab = document.createElement("td");
    tab.textContent = Sett;

    const tb = document.createElement("td");
    tb.textContent = inputValue;

  


    document.getElementById("tbles").appendChild(tbsle)
    
  
    tbsle.appendChild(tab)
    tbsle.appendChild(tb)
    

    inputvalue.value = '';
    section.value = '';
    
     

    const inc = parseFloat(inputValue)
    totalincome += inc ;

    document.getElementById("intotalamound").textContent = totalincome;

    
    chartadding();
  

  });



  btn2.addEventListener('click', function () {

    document.getElementById("block1").style.display="block";

    const inputValue2 = inputvalue2.value;
    const Sett2 = section2.value;
  

    if (inputValue2  == '' || Sett2  == '' ){

      inputvalue2.value = '';
      section2.value = '';

      alert("expense field is required");

      return;

    }else if(inputValue2.length<3) {
      // document.getElementById("error").textContent = 'catagory be at least 4 characters.'
      alert("catagory be at least 3 characters");
      return;
    }
    
    const exptabl = document.createElement("tr");

    const tab = document.createElement("td");
    tab.textContent = Sett2;

    const tb = document.createElement("td");
    tb.textContent = inputValue2;

  
    document.getElementById("expenstable").appendChild(exptabl)
    
  
    exptabl.appendChild(tab)
    exptabl.appendChild(tb)
  

    inputvalue2.value = '';
    section2.value = '';

    
    const exp = parseFloat(inputValue2)
    totalexpense += exp ;
    document.getElementById("totalexpnse").textContent= totalexpense;
    chartadding();
    
  });

 
  function chartadding(){


  var xValues = ["income","expense" ];
  var yValues = [totalincome,totalexpense];
  var barColors = [
    "blue",
    "red",

     
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "income vs expense"
      }
    }
   
  })
  // document.write(balance)
  let balance = totalincome - totalexpense
   document.getElementById("balnce").textContent = balance;
};



