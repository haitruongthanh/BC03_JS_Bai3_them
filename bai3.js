/* 
Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc

349 -> ba trăm bốn mươi chín

310 -> ba trăm mười

205 -> hai trăm lẻ năm

200 -> hai trăm

111 -> một trăm mười một

hàng trăm
hàng chục   
    mười
    trên mười
    0
hàng đơn vị 
    dưới mười
    0

*/

function inCachDoc() {
  var num = document.getElementById("bai3_number").value * 1;
  var hangTram = Math.floor(num / 100);
  var hangChuc = Math.floor((num % 100) / 10);
  var hangDonVi = num % 10;

  console.log({ hangTram, hangChuc, hangDonVi });

  var chuSoHangTram =
    docTungSo(hangTram)[0].toUpperCase() + docTungSo(hangTram).substring(1);
  var chuSoHangChuc = docTungSo(hangChuc);
  var chuSoHangDonVi = docTungSo(hangDonVi);
  var ketQua = "";

  if (hangChuc == 0 && hangDonVi == 0) {
    console.log(`${chuSoHangTram} trăm`);
    ketQua = `${chuSoHangTram} trăm`;
  } else if (hangChuc == 0 && hangDonVi != 0) {
    console.log(`${chuSoHangTram} trăm lẻ ${chuSoHangDonVi}`);
    ketQua = `${chuSoHangTram} trăm lẻ ${chuSoHangDonVi}`;
  } else if (hangChuc == 1 && hangDonVi == 0) {
    console.log(`${chuSoHangTram} trăm mười`);
    ketQua = `${chuSoHangTram} trăm mười`;
  } else if (hangChuc == 1 && hangDonVi != 0) {
    console.log(`${chuSoHangTram} trăm mười ${chuSoHangDonVi}`);
    ketQua = `${chuSoHangTram} trăm mười ${chuSoHangDonVi}`;
  } else if (hangDonVi == 0) {
    console.log(`${chuSoHangTram} trăm ${chuSoHangChuc} mươi`);
    ketQua = `${chuSoHangTram} trăm ${chuSoHangChuc} mươi`;
  } else {
    console.log(
      `${chuSoHangTram} trăm ${chuSoHangChuc} mươi ${chuSoHangDonVi}`
    );
    ketQua = `${chuSoHangTram} trăm ${chuSoHangChuc} mươi ${chuSoHangDonVi}`;
  }
  document.getElementById("bai3_ket_qua").innerHTML = ketQua;
}

function docTungSo(chuSo) {
  switch (chuSo) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
  }
}

// inCachDoc();
