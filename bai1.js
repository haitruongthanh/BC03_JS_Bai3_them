/* 

Viết chương trình nhập vào ngày, tháng, năm. Tìm ngày tháng năm của ngày tiếp theo.
Tương tự, tìm ngày tháng năm của ngày trước đó
_______________________________________________________

trường hợp ngày trong tháng: 2/3/2022
ngày tiếp theo: 3/3/2022
--> ngày thêm 1 đơn vị : ngày >=1 && ngày < 30/31 --> tháng không đổi

tháng 30 ngày: 4, 6, 9, 11
tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
tháng 28 ngày: 2


trường hợp ngày cuối tháng: ngày = 30/31, kiểm tra thêm điều kiện tháng: --> ngày về 1, tháng thêm 1 đơn vị

*/

function timNgayKeTiep() {
  var ngay = document.getElementById("bai1_ngay").value * 1;
  var thang = document.getElementById("bai1_thang").value * 1;
  var nam = document.getElementById("bai1_nam").value * 1;
  var ngayTiepTheo = "";

  if (
    (ngay >= 1 && ngay <= 29 && thang != 2) ||
    (ngay == 28 && thang == 2 && nam % 4 == 0) ||
    (ngay >= 1 && ngay <= 27 && thang == 2)
  ) {
    console.log(
      `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: ${
        ngay + 1
      }/${thang}/${nam}`
    );
    ngayTiepTheo = `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: ${
      ngay + 1
    }/${thang}/${nam}`;
  } else if (
    (ngay == 29 && thang == 2 && nam % 4 == 0) ||
    (ngay == 28 && thang == 2 && nam % 4 != 0) ||
    (ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)) ||
    (ngay == 31 &&
      (thang == 1 ||
        thang == 3 ||
        thang == 5 ||
        thang == 7 ||
        thang == 8 ||
        thang == 10))
  ) {
    console.log(
      `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: 1/${thang + 1}/${nam}`
    );
    ngayTiepTheo = `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: 1/${
      thang + 1
    }/${nam}`;
  } else if (ngay == 31 && thang == 12) {
    console.log(
      `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: 1/1/${nam + 1}`
    );
    ngayTiepTheo = `Ngày tiếp theo ngày ${ngay}/${thang}/${nam} là: 1/1/${
      nam + 1
    }`;
  }
  document.getElementById("bai1_ngay_tiep_theo").innerHTML = ngayTiepTheo;
}

//Tìm ngày trước ngày người dùng nhập vào

function timNgayTruocDo() {
  var ngay = document.getElementById("bai1_ngay").value * 1;
  var thang = document.getElementById("bai1_thang").value * 1;
  var nam = document.getElementById("bai1_nam").value * 1;
  var ngayTruocDo = "";

  if (
    /* Ngay trong thang */
    (ngay >= 2 && ngay <= 29 && thang != 2) ||
    (ngay >= 2 && ngay <= 28 && thang == 2) ||
    (ngay == 29 && thang == 2 && nam % 4 == 0)
  ) {
    console.log(
      `Ngày trước ngày ${ngay}/${thang}/${nam} là: ${ngay - 1}/${thang}/${nam}`
    );
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: ${
      ngay - 1
    }/${thang}/${nam}`;
  } else if (
    /* Ngay 30 cuoi thang */
    ngay == 1 &&
    (thang == 5 || thang == 7 || thang == 10 || thang == 12)
  ) {
    console.log(
      `Ngày trước ngày ${ngay}/${thang}/${nam} là: 30/${thang - 1}/${nam}`
    );
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: 30/${
      thang - 1
    }/${nam}`;
  } else if (
    /* Ngay 31 cuoi thang */
    ngay == 1 &&
    (thang == 2 ||
      thang == 4 ||
      thang == 6 ||
      thang == 8 ||
      thang == 9 ||
      thang == 11)
  ) {
    console.log(
      `Ngày trước ngày ${ngay}/${thang}/${nam} là: 31/${thang - 1}/${nam}`
    );
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: 31/${
      thang - 1
    }/${nam}`;
  } else if (
    /* Ngay 29 thang 2 nam Nhuan */
    ngay == 1 &&
    thang == 3 &&
    nam % 4 == 0
  ) {
    console.log(
      `Ngày trước ngày ${ngay}/${thang}/${nam} là: 29/${thang - 1}/${nam}`
    );
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: 29/${
      thang - 1
    }/${nam}`;
  } else if (
    /* Ngay 28 thang 2 nam thuong */
    ngay == 1 &&
    thang == 3 &&
    nam % 4 != 0
  ) {
    console.log(
      `Ngày trước ngày ${ngay}/${thang}/${nam} là: 28/${thang - 1}/${nam}`
    );
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: 28/${
      thang - 1
    }/${nam}`;
  } else if (/* Ngay tet Tay */ ngay == 1 && thang == 1) {
    console.log(`Ngày trước ngày ${ngay}/${thang}/${nam} là: 31/12/${nam - 1}`);
    ngayTruocDo = `Ngày trước ngày ${ngay}/${thang}/${nam} là: 31/12/${
      nam - 1
    }`;
  }
  document.getElementById("bai1_ngay_truoc_do").innerHTML = ngayTruocDo;
}
