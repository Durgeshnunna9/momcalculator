function calculate() {
    const v1Input = document.getElementById("value1");
    const v2Input = document.getElementById("value2");
  
    const v1 = parseFloat(v1Input.value);
    const v2 = parseFloat(v2Input.value);
  
    const resultEl = document.getElementById("result");
    const rankEl = document.getElementById("rank");
  
    if (isNaN(v1) || isNaN(v2)) {
      resultEl.textContent = "Result: Please enter both values";
      rankEl.textContent = "";
      return;
    }
  
    const result = (v1 + v2) / 2;
    resultEl.textContent = `Result: ${result}`;
  
    if (result > 90) rankEl.textContent = "A1";
    else if (result > 80) rankEl.textContent = "A2";
    else if (result > 70) rankEl.textContent = "B1";
    else if (result > 60) rankEl.textContent = "B2";
    else if (result > 50) rankEl.textContent = "C1";
    else if (result > 40) rankEl.textContent = "C2";
    else if (result > 34) rankEl.textContent = "D";
    else rankEl.textContent = "Fail";
  
    // ✅ clear inputs
    v1Input.value = "";
    v2Input.value = "";
  }
  
