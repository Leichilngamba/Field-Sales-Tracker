window.onload = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          // Set values in the hidden fields
          document.getElementById('latitude').value = latitude;
          document.getElementById('longitude').value = longitude;
        },
        function (error) {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  