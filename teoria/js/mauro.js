console.log("hola mundo");

const roman = [
    {value: 1000, numeral: "M"},
    {
      value: 900, numeral: "CM"
    },
    {
      value: 500, numeral: "D"
    },
    {
      value: 400, numeral: "CD"
    },
    {
      value: 100, numeral: "C"
    },
    {
      value: 90, numeral: "XC"
    },
    {
      value: 50, numeral: "L"
    },
    {
      value: 40, numeral: "XL"
    },
    {
      value: 10, numeral: "X"
    },
    {
      value: 9, numeral: "IX"
    },
    {
      value: 5, numeral: "V"
    },
    {
      value: 4, numeral: "IV"
    },
    {
      value: 1, numeral: "I"
    }
  ];
  
  
  const convertInit = (input) => {
    var index = 0;
    if(input === "")
    {
      output.innerText = "Please enter a valid number"; 
    }else if(input < 1)
    {
      output.innerText = "Please enter a number greater than or equal to 1";
    }else if(input > 3999)
    {
      output.innerText = "Please enter a number less than or equal to 3999"
    } else 
  {
    console.log("hola");
    console.log(roman[0].value);
    console.log("hola2");
    console.log(convert(input, index));
  }
  }
  
  function convert(num, index)
  {
   console.log(index);
    if(num === 0)
    {
      return '';
    }
    if(num >= roman[index].value)
    {
      return roman[index].numeral + convert(num-roman[index].value, index);
    }else
    {
      return convert(num, index+1);
    }
    
  }

  convertInit(3000);
