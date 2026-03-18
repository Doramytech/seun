const inpt = document.getElementById("inpt");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const anchor = document.getElementById("anchor");
const myp = document.getElementById("myp")


function generateQR() {
    let url = inpt.value

    if (!url.startsWith("https://doramytech.github.io/portfolio.github.io/") && !url.startsWith("https://")) {
        url = "https://doramytech.github.io/portfolio.github.io/" + url + encodeURIComponent(url);
        
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x200&data=" + encodeURIComponent(url);
    imgBox.classList.add("show-img");
    localStorage.setItem("Userage", url);
    // window.location.href = "appre.html";
    
}

function downloadQR(){
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qrcode.jpeg";
    document.body.appendChild(link);
    link.click();
   document.body.removeChild(link);

    
}