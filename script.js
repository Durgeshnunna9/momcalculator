let v2go = document.getElementById("value2");

v2go.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      calculate();
    }
  });

function calculate() {
    const v1Input = document.getElementById("value1");
    const v2Input = document.getElementById("value2");
  
    const v1 = parseFloat(v1Input.value);
    const v2 = parseFloat(v2Input.value);
  
    const resultEl = document.getElementById("result");
    const rankEl = document.getElementById("rank");
    const gradeEl = document.getElementById("grade");
  
    if (isNaN(v1) || isNaN(v2)) {
      resultEl.textContent = "Result: Please enter both values";
      rankEl.textContent = "";
      return;
    }
  
    const result = (v1 + v2) / 2;
    resultEl.textContent = `Result: ${result}`;
  
    if (result > 90) {rankEl.textContent = "Grade: A1"; gradeEl.textContent = "Grade Point: 10";}
    else if (result > 80)  {rankEl.textContent = "Grade: A2"; gradeEl.textContent = "Grade Point: 9";}
    else if (result > 70)  {rankEl.textContent = "Grade: B1"; gradeEl.textContent = "Grade Point: 8";}
    else if (result > 60)  {rankEl.textContent = "Grade: B2"; gradeEl.textContent = "Grade Point: 7";}
    else if (result > 50)  {rankEl.textContent = "Grade: C1"; gradeEl.textContent = "Grade Point: 6";}
    else if (result > 40)  {rankEl.textContent = "Grade: C2"; gradeEl.textContent = "Grade Point: 5";}
    else if (result > 34)  {rankEl.textContent = "Grade: D"; gradeEl.textContent = "Grade Point: 4";}
    else rankEl.textContent = "Fail";
  
    // ✅ clear inputs
    v1Input.value = "";
    v2Input.value = "";
  }
  
