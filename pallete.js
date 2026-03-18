const header = document.querySelectorAll('a')
const icon = document.getElementById("icon")
const closes = document.getElementById("closes")
const headers = document.getElementById("header")
const btn = document.getElementById("btn")
const colorPallete = document.getElementById("colorPallete")




header.forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    this.style.left = Math.random() * 30 + 'px';
    this.style.top = Math.random() * 30 + 'px';
    this.style.right = Math.random() * 30 + 'px';
  });
});
closes.addEventListener('click', function(){
  headers.style.display=headers.style.display==="block" ? "none":"block"
   headers.classList.toggle("show");
})
const canvas = document.getElementById("canvas");
const fileInput = document.getElementById("fileInput")
const img = new Image();

fileInput.addEventListener('change', function(event) {
  const file =event.target.files[0];
  if(file){
    const ctx =   canvas.getContext("2d");
    const reader = new FileReader();
    reader.onload= function(e){
      img.onload= function(){
        console.log("image loaded successfully")
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0)
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file)
  }
})
const btn_generate = document.getElementById("btn_generate")

  
const displayColor = document.getElementById("displayColor")
const hexResult = document.getElementById("hexResult")
const rgbResult = document.getElementById("rebResult")
if ('EyeDropper' in window) {
  const eyeDropper = new EyeDropper();
  document.getElementById("btn_generate").onclick = async () => {
    try {
      const result = await eyeDropper.open();
      document.getElementById("colorDisplay").textContent = result.sRGBHex;
      displayColor.style.backgroundColor = result.sRGBHex;
    } catch (err) {
      console.log("Color picking cancelled.");
    }
  };
} else {
  alert("EyeDropper API not supported in this browser.");
}