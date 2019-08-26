window.addEventListener('load',()=>{
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
      log=position.coords.longitude;
      lat=position.coords.latitude;

    })
  }else {
    h1.textContent="hey this doesn't work"
  }
} )
