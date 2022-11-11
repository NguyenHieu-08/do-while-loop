let value;
do {
    value = +(prompt('Nhập số từ 1 đến 10:'))
} while(value < 1 || value > 10)

alert("Số bạn vừa nhập là " + value);