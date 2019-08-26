window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
      long=position.coords.longitude;
      lat=position.coords.latitude;
      const proxy =`http://cors-anywhere.herokuapp.com/`
      const api=`${proxy}https://api.darksky.net/forecast/b9dd7cda13788fa81e8c8062c4aedc28/${lat},${long}`

      fetch(api)
        .then(data =>{
          return data.json();
        })
        .then(data=>{
            const {temperature,summary,icon} = data.currently;
            // Set DOM Elements from the API
            temperatureDegree.textContent=temperature;
            temperatureDescription.textContent=summary;
            locationTimezone.textContent=data.timezone;
            setIcons(icon,document.querySelector('.icon'))

        });


    });

  }else {
    h1.textContent="hey this doesn't work"
  }
  function setIcons(icon,iconID) {
    const skycons = new Skycons({color:'white'});
    const currentIcon = icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);

  }
} )
