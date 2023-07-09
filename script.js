const paymentStart=()=>{
    console.log("Its started");
    var input = document.getElementById('payment_field').value;
    if(input==''|| input==null)
    {
        alert("Enter some amount!");
        return;
    }
    console.log(input);
};