import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = '<API KEY>';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
  const params = `address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`;
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?${params}`
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinates = response.data.results[0].geometry.location;
      console.log(coordinates);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);
