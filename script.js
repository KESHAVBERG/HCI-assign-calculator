window.onload = function () {
  var results = document.getElementById("results");

  // Numbers -js
  var one = document.getElementById("1");
  one.onclick = function () {
    var text = one.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var two = document.getElementById("2");
  two.onclick = function () {
    var text = two.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var three = document.getElementById("3");
  three.onclick = function () {
    var text = three.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var four = document.getElementById("4");
  four.onclick = function () {
    var text = four.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var five = document.getElementById("5");
  five.onclick = function () {
    var text = five.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var six = document.getElementById("6");
  six.onclick = function () {
    var text = six.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var seven = document.getElementById("7");
  seven.onclick = function () {
    var text = seven.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var eigth = document.getElementById("8");
  eigth.onclick = function () {
    var text = eigth.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var nine = document.getElementById("9");
  nine.onclick = function () {
    var text = nine.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };

  var zero = document.getElementById("0");
  zero.onclick = function () {
    var text = zero.innerHTML;
    results.innerHTML = results.innerHTML + text;
  };
  // Numbers -js ends

  // opperators

  var add = document.getElementById("+");
  add.onclick = function () {
    var text = add.innerHTML;
    var r_text = results.innerHTML;
    var r_arry = r_text.split("");
    if (
      r_arry[r_arry.length - 1] === "-" ||
      r_arry[r_arry.length - 1] === "*" ||
      r_arry[r_arry.length - 1] === "/"
    ) {
      r_arry[r_arry.length - 1] = text;
      var edited = r_text.substring(0, r_text.length - 1) + "+";
      results.innerHTML = edited;
      console.log(edited);
    } else {
      results.innerHTML = results.innerHTML + text;
    }
  };

  var sub = document.getElementById("-");
  sub.onclick = function () {
    var text = sub.innerHTML;
    var r_text = results.innerHTML;
    var r_arry = r_text.split("");
    if (
      r_arry[r_arry.length - 1] === "+" ||
      r_arry[r_arry.length - 1] === "*" ||
      r_arry[r_arry.length - 1] === "/"
    ) {
      r_arry[r_arry.length - 1] = text;
      var edited = r_text.substring(0, r_text.length - 1) + "-";
      results.innerHTML = edited;
    } else {
      results.innerHTML = results.innerHTML + text;
    }
  };

  var mul = document.getElementById("*");
  mul.onclick = function () {
    var text = mul.innerHTML;
    var r_text = results.innerHTML;
    var r_arry = r_text.split("");
    if (
      r_arry[r_arry.length - 1] === "-" ||
      r_arry[r_arry.length - 1] === "+" ||
      r_arry[r_arry.length - 1] === "/"
    ) {
      r_arry[r_arry.length - 1] = text;
      var edited = r_text.substring(0, r_text.length - 1) + "*";
      results.innerHTML = edited;
    } else {
      results.innerHTML = results.innerHTML + text;
    }
  };

  var div = document.getElementById("/");
  div.onclick = function () {
    var text = div.innerHTML;
    var r_text = results.innerHTML;
    var r_arry = r_text.split("");
    if (
      r_arry[r_arry.length - 1] === "-" ||
      r_arry[r_arry.length - 1] === "*" ||
      r_arry[r_arry.length - 1] === "+"
    ) {
      r_arry[r_arry.length - 1] = text;
      var edited = r_text.substring(0, r_text.length - 1) + "/";
      results.innerHTML = edited;
    } else {
      results.innerHTML = results.innerHTML + text;
    }
  };
  // opperators

  // clear btns
  var cbtn = document.getElementById("c");
  cbtn.onclick = function () {
    var r_text = results.innerHTML;
    var edited = r_text.substring(0, r_text.length - 1) + "";
    results.innerHTML = edited;
  };

  // clear btns

  var equalbtn = document.getElementById("equalto");
  equalbtn.addEventListener("click", () => {
    var r_text = document.getElementById("results").innerHTML;

    results.innerHTML = eval(r_text);
  });
};
