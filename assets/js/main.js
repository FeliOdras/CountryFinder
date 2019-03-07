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

            let headline = `${countryCode}`;
            document.querySelector(".countryTitle").innerHTML = headline;
            let subTitle = `
      The country with the calling code ${countryCode} is ${
        countries[0].name
      }.`;
            document.querySelector(".countrySubTitle").innerHTML = subTitle;

            let countryData = `${countries[0].name}'s capital is <strong>${
        countries[0].capital
      }</strong>.<br>
        About ${countries[0].population} people are currently living in ${
        countries[0].name
      }.`;
            document.querySelector(".countryData").innerHTML = countryData;
            console.log(countries);
        })
        .catch(error => {
            document.querySelector('.countryTitle').innerHTML = '<span class="error">Something went wrong!</span>';
            document.querySelector('.countrySubTitle').innerHTML = 'The calling code you have entered does not seem to exist. <br>Try another one.'
        });
}
findCountry();