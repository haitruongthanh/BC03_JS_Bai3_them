/* 
Cho biết tên và tọa độ nhà của 3 sinh viên, cho biết tọa độ của trường đại học.
Viết chương trình in tên sinh viên xa trường nhất.

công thức tính khoảng cách giữa 2 điểm M(a; b) và N(c,d) là
MN = Math.sqrt(Math.pow((c-a), 2) + Math.pow((d-b), 2))

tìm MN sao cho lớn nhất

*/

function timKhoangCachLonNhat() {
  //Thông tin sinh viên A
  var ten_svA = document.getElementById("bai4_ten_SV_A").value;
  var x_svA = document.getElementById("bai4_toa_do_X_SV_A").value * 1;
  var y_svA = document.getElementById("bai4_toa_do_Y_SV_A").value * 1;
  console.log({ ten_svA, x_svA, y_svA });

  //Thông tin sinh viên B
  var ten_svB = document.getElementById("bai4_ten_SV_B").value;
  var x_svB = document.getElementById("bai4_toa_do_X_SV_B").value * 1;
  var y_svB = document.getElementById("bai4_toa_do_Y_SV_B").value * 1;
  console.log({ ten_svB, x_svB, y_svB });

  //Thông tin sinh viên C
  var ten_svC = document.getElementById("bai4_ten_SV_C").value;
  var x_svC = document.getElementById("bai4_toa_do_X_SV_C").value * 1;
  var y_svC = document.getElementById("bai4_toa_do_Y_SV_C").value * 1;
  console.log({ ten_svC, x_svC, y_svC });

  //Thông tin tọa độ trường ĐH
  var x_DaiHoc = document.getElementById("bai4_toa_do_X_truong").value * 1;
  var y_DaiHoc = document.getElementById("bai4_toa_do_Y_truong").value * 1;

  console.log({ x_DaiHoc, y_DaiHoc });

  var khoangCachA = timKhoangCach(x_svA, y_svA, x_DaiHoc, y_DaiHoc);
  var khoangCachB = timKhoangCach(x_svB, y_svB, x_DaiHoc, y_DaiHoc);
  var khoangCachC = timKhoangCach(x_svC, y_svC, x_DaiHoc, y_DaiHoc);
  var aiXaNhat = "";

  if (khoangCachA > khoangCachB && khoangCachA > khoangCachC) {
    console.log("A xa trường nhất");
    aiXaNhat = `${ten_svA} xa nhất`;
  } else if (khoangCachB > khoangCachA && khoangCachB > khoangCachC) {
    console.log("B xa trường nhất");
    aiXaNhat = `${ten_svB} xa nhất`;
  } else {
    console.log("C xa trường nhất");
    aiXaNhat = `${ten_svC} xa nhất`;
  }
  document.getElementById("bai4_ket_qua").innerHTML = aiXaNhat;
}

function timKhoangCach(a, b, c, d) {
  return Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));
}
