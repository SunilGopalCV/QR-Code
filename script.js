function generate(){
    let img = document.getElementById('qr-img');
    let URL = document.getElementById('inp').value;
    if (URL){
        img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${URL}&size=200x200&color=526ce3`;
    }
    else{
        alert('Please Enter the text');
    }
}