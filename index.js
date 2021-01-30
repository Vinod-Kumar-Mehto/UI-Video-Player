const speed = document.querySelector(".speed")
const speedBar = document.querySelector(".speed_bar");
const video = document.querySelector(".flex")

speed.addEventListener("mousemove", function(e) {
   const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    speedBar.style.height = height;
    const playBackRate = percent *(max - min) + min;
    speedBar.textContent = playBackRate.toFixed(2) + "x";
    video.playBackRate = parseFloat(playBackRate.toFixed(1));
    console.log(video.playBackRate)
}); 
video.addEventListener("mousemove", () => {
   
})