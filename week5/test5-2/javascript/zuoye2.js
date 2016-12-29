  function cal() {
      x = document.getElementById('x').value;
      op = document.getElementById('op').value;
      y = document.getElementById('y').value;
      show = document.getElementById('show');
      if (x == "" || y == "") {
          z = "请输入数字"
          show.value = z;
      }
       else if (op == "+") {
          z = parseFloat((parseFloat(x) + parseFloat(y)).toFixed(8));
          show.value = z;
      } else if (op == "/" && y == "0") {
          z = "NAN";
          show.value = z;
      } else if (op == "-") {
          z = parseFloat((parseFloat(x) - parseFloat(y)).toFixed(8));
          show.value = z;
      } else if (op == "*") {
          z = parseFloat((parseFloat(x) * parseFloat(y)).toFixed(8));
          show.value = z;
      } else if (op == "/") {
          z = parseFloat((parseFloat(x) / parseFloat(y)).toFixed(8));
          show.value = z;
      } else {
          show.value = "你输入的运算符出错了";
      }

  }
