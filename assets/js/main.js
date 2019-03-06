function findCountry() {
    let countryCode = document.querySelector('.countryCodeInput').value;

    fetch(`https://restcountries.eu/rest/v2/callingcode/${countryCode}`)
        .then(response => response.json())
        .then(countries => {
            let infoEle = document.querySelector('.countryInfo');
            let flagImgLink = `<img src="${countries[0].flag}"
            alt = "Flag of ${countries[0]['name']}" width="200" >`
            document.querySelector('.countryFlag').innerHTML = flagImgLink;
            infoEle.append(`The country is ${countries[0]['name']}.`)

            infoEle.append(`The country is ${countries[0]['name']}.`)
            console.log(countries)
        })

}
findCountry()