/* 
Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày (bao gồm tháng của năm nhuần)
*/

function timNgay() {
  var thang = document.getElementById("bai2_thang").value * 1;
  var nam = document.getElementById("bai2_nam").value * 1;
  var ketQua = "";
  if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    console.log("31 ngay");
    ketQua = `Tháng ${thang} năm ${nam} có 31 ngày`;
  } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    console.log("30 ngay");
    ketQua = `Tháng ${thang} năm ${nam} có 30 ngày`;
  } else if (thang == 2 && nam % 4 != 0) {
    console.log("28 ngay");
    ketQua = `Tháng ${thang} năm ${nam} có 28 ngày`;
  } else if (thang == 2 && nam % 4 == 0) {
    console.log("29 ngay");
    ketQua = `Tháng ${thang} năm ${nam} có 29 ngày`;
  }
  document.getElementById("bai2_ket_qua").innerHTML = ketQua;
}
