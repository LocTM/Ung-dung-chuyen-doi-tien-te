function changeMoney(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;

    if (from == "USD" && to == "VND"){
        result = amount * 23000;
    }
    else if (from == "VND" && to == "USD"){
        result = amount / 23000;
    }
    else if (from == "USD" && to == "USD"){
        result = amount;
    }
    else if (from == "VND" && to == "VND"){
        result = amount;
    }
    document.getElementById("result").innerText = result;


}