function findCountry() {
  let countryCode = document.querySelector(".countryCodeInput").value;

  fetch(`https://restcountries.eu/rest/v2/callingcode/${countryCode}`)
    .then(response => response.json())
    .then(countries => {
      let flagImgLink = `
            ${countries[0].flag != undefined 
                ? `<img src="${countries[0].flag}" alt = "Flag of ${countries[0].name}" width="200" >` 
                : ``}`;
      document.querySelector(".countryFlag").innerHTML = flagImgLink;

      let headline = `<div class="preHeadline">You have entered the calling code ${countryCode}.</div> ${
                countries[0].name
              } (${countries[0].alpha2Code})`;
      document.querySelector(".countryTitle").innerHTML = headline;

      let countryData = `${countries[0].name}'s capital is <strong>${
        countries[0].capital
      }</strong>.<br>
        About <strong>${countries[0].population}</strong> people are currently living in ${
        countries[0].name
      }.<br>
      ${countries[0].name} is located in ${countries[0].subregion}.`;
      document.querySelector(".countryData").innerHTML = countryData;
    })
    .catch(error => {
      document.querySelector('.countryFlag').innerHTML = '<img src="./assets/images/error.png" alt = "An error accured" width="200" >'
      document.querySelector('.countryTitle').innerHTML = '<span class="error">Something went wrong!</span>';
      document.querySelector('.countryData').innerHTML = 'The calling code you have entered does not seem to exist. <br>Try another one.';
    });
}