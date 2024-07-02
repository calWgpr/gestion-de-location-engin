 import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const providerLat = -18.8186405 // Use user location if available, otherwise use your predefined location
    const providerLng = 47.4395021
const reverseGeocodingUrl = 'https://api.openstreetmap.org/reverse?format=json&lat={latitude}&lon={longitude}';



async function getlocationName(lat, lng) {
  try {
    const response = await axios.get(reverseGeocodingUrl.replace('{latitude}', lat).replace('{longitude}', lng));
    const address = response.data.display_name; // Assuming address is in display_name property, adjust based on your API
    return address;
  } catch (error) {
    console.error('Error fetching location name (get):', error);
    return null; // Handle errors or return a default value
  }
}

// Assuming you have a function to calculate distance using Haversine formula or a library
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers

  const dLat = radians(lat2 - lat1);
  const dLon = radians(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(radians(lat1)) * Math.cos(radians(lat2)) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.asin(Math.sqrt(a));

  return R * c;
}

function radians(degrees) {
  return degrees * Math.PI / 180;
}


function  MyLocationComponent ({setLocationx, getCoo})  {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]); // Stores address suggestions
  const [userLocation, setUserLocation] = useState(null); // Stores user's location (optional)
  const [selectedLocation, setSelectedLocation] = useState(null); // Stores selected location
  const [distance, setDistance] = useState(null); // Stores calculated distance

useEffect(() => {
    setLocationx(distance)
},[distance])

  // Predefined location (replace with your coordinates)
  const yourLocation = { lat: 51.505, lng: -0.09 }; // Example: London coordinates

  // API endpoint for Nominatim search
  const nominatimUrl = 'https://nominatim.openstreetmap.org/search';

  // Function to handle user input changes and suggestions
  const handleUserInput = async (event) => {
    setUserInput(event.target.value);
    if (userInput.length > 3) {
      try {
        console.log("trying to fetch the location...");
        const response = await axios.get(nominatimUrl, {
          params: {
            q: userInput,
            format: 'json',
          },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]); // Clear suggestions on error
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is less than 3 characters
    }
  };

  // Function to handle button click to get user's location (if permission granted)
  const  handleGetUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
    
        // const address =   getlocationName(position.coords.latitude, position.coords.longitude);
    //   if (address) {alert(address)
    //     setUserInput(address); // Update input field with address
    //   } else {
    //     console.error('Error fetching location name');
    //   }
      },
      (error) => console.error('Error getting user location (handle):', error)
    );
  };

  // Function to handle selecting a suggestion from the list (clickable)
  const handleSelectSuggestion = (suggestion) => {
    console.log(suggestion.lat, suggestion.lon)
    setSelectedLocation({ lat: suggestion.lat, lng: suggestion.lon });
    setUserInput(suggestion.display_name); 
    getCoo(suggestion.display_name)// Update input field with selected address
    setSuggestions([]); // Clear suggestions after selection
  };

  // Function to calculate distance when user selects a location
  const handleCalculateDistance = () => {
   
    const { lat, lng } = selectedLocation || userLocation;
    const distanceInKm = calculateDistance(providerLat, providerLng, lat, lng);
    setDistance(distanceInKm);
  
  };

  return (
    <div>

      <input type="text" value={userInput} onChange={handleUserInput} placeholder="Enter your address" />
      {suggestions.length > 0 && (
        <ul id='ulLocation'>
          {suggestions.map((suggestion) => (
            <li id='liLocation' key={suggestion.place_id} onClick={() => handleSelectSuggestion(suggestion)}>
            <img id='enter' src="location.png" alt="" /> {suggestion.display_name}
            
            </li>
          ))}
          
        </ul>
      )}
     <button disabled type='button' onClick={handleGetUserLocation}>Use My Location</button> 
      <button type='button' onClick={handleCalculateDistance} disabled={!selectedLocation }>
        Display distance
      </button>
      
     
 {distance && <h5>Distance between you and us </h5>}
	{distance && <pre><code> {distance.toFixed(2)} km</code></pre>}
      
     
				
    </div>
  );
}

export default MyLocationComponent;
