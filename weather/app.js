window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
      long=position.coords.longitude;
      lat=position.coords.latitude;
      const proxy =`http://cors-anywhere.herokuapp.com/`
      const api=`${proxy}https://api.darksky.net/forecast/b9dd7cda13788fa81e8c8062c4aedc28/${lat},${long}`

      fetch(api)
        .then(data =>{
          return data.json();
        })
        .then(data=>{
            console.log(data);
            const {temperature,summary} = data.currently;
        })


    });

  }else {
    h1.textContent="hey this doesn't work"
  }
} )
