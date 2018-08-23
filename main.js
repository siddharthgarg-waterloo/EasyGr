var r_num = 1;

function insRow(id) {
  var row_num = document.getElementById('mytable').rows.length - 2;
  var x = document.getElementById(id).insertRow(row_num);
  var a = x.insertCell(0);
  var b = x.insertCell(1);
  var c = x.insertCell(2);
  x.id = "r"+r_num;
  a.innerHTML = '<form method="post" class="fields"> <input type="text" name="name" id="n' + r_num + '" placeholder=" Assignment Name"> </form>'
  b.innerHTML = '<form method="post" class="fields"> <input type="number" name="grade" id="g' + r_num + '" placeholder=" Grade Received"> </form>'
  c.innerHTML = '<form method="post" class="fields"> <input type="number" name="weight" id="w' + r_num + '" placeholder=" Weight of Assignment"> </form>'
  r_num++;
}

function compgrade(id) {
  var grade_sum = 0;
  var weight_sum = 0;
  var row_num = document.getElementById('mytable').rows.length - 4;
  var option_1 = document.getElementById("option1").value;
  var option_2 = document.getElementById("option2").value;
  for (i = 0; i < row_num; i++) {
    var g_id = "g" + i;
    var w_id = "w" + i;
    var g_rec = document.getElementById(g_id).value;
    var w_rec = document.getElementById(w_id).value;

    if (g_rec != "" && w_rec != "") {
      var g_num = parseInt(g_rec);
      var w_num = parseInt(w_rec);
      if (g_num < 0 || w_num <= 0) {
        alert("Did not meet requirements.")
        return;
      }
      weight_sum += w_num;
      grade_sum += g_num * (w_num / 100);
      if (weight_sum > 100) {
        alert("Entries weight total beyond 100%");
        return;
      }
    }
  } if (w_rec == 0) {
    alert("No Entries");
  } else {
    alert("Your current grade is " + ((grade_sum/weight_sum) * 100) + " at a total weight of " + weight_sum);
    if (option_1 != "") {
      var grade_left = parseInt(option_1) - grade_sum;
      var weight_left = 100 - weight_sum;
      var g_needed = (grade_left/weight_left) * 100;
      alert("You need " + g_needed + " average on remaining " + weight_left +
      "% assignments left to get a desired grade of " + option_1 + ".")
    }
    if (option_2 != "") {
      var weight_left = 100 - weight_sum;
      var grade_remain = (weight_left / 100) * parseInt(option_2);
      var final_grade = grade_remain + grade_sum;
      alert("If you receive a " + option_2 + " grade on remaining " + weight_left +
      " assigments you will receive a final grade of " + final_grade + ".");
    }
  }
}


function remRow(id) {
  if (r_num == 1) {
    return;
  } else {
    document.getElementById(id).deleteRow(r_num + 1);
    r_num--;
  }
}


function clear_fields(id) {
  for (i = 0; i < r_num; i++) {
    var g_id = "g" + i;
    var w_id = "w" + i;
    var n_id = "n" + i;
    var g_rec = document.getElementById(g_id);
    var w_rec = document.getElementById(w_id);
    var n_rec = document.getElementById(n_id);
    g_rec.value = "";
    w_rec.value = "";
    n_rec.value = "";
  }
}
