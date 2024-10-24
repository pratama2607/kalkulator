// Fungsi untuk memasukkan nilai ke layar
function inputValue(val) {
    document.getElementById("result").value += val;
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

// Fungsi untuk menghapus layar
function clearScreen() {
    document.getElementById("result").value = "";
}

// Fungsi untuk menghapus karakter terakhir
function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}
