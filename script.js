function calculate() {
    const v1 = parseFloat(document.getElementById("value1").value);
    const v2 = parseFloat(document.getElementById("value2").value);
    const resultEl = document.getElementById("result");
    const rankEl = document.getElementById("rank");
  
    if (isNaN(v1) || isNaN(v2)) {
      resultEl.textContent = "Result: Please enter both values";
      return;
    }
  
    const result = (v1 + v2) / 2;
    resultEl.textContent = `Result: ${result}`;

    if(result >90){
        rankEl.textContent = "A1"
    }
    else if(result >80){
        rankEl.textContent = "A2"
    }
    else if(result >70){
        rankEl.textContent = "B1"
    }
    else if(result >60){
        rankEl.textContent = "B2"
    }
    else if(result >50){
        rankEl.textContent = "C1"
    }
    else if(result >40){
        rankEl.textContent = "C2"
    }
    else if(result >34){
        rankEl.textContent = "D"
    }
  }
  