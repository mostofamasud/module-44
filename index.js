const loadCountries = () =>{
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
};
const displayCountries =(countries)=>{
    const getCountries = countries.map((country) => getCountry(country) );
    const countryDiv = document.getElementById('countries');
    countryDiv.innerHTML = getCountries;
};

const getCountry = country => {

   return `
   <div class = "country">
   <img src = "${country.flags.png}">
   <h1>Name: ${country.name.common}</h1>
   </div>
   `;
}
loadCountries();

    // const countryDiv = document.getElementById('countries');
    /* for (const country of countries) {
      const {name, flags, population, cca3} = country; 
      const div = document.createElement('div');
      div.classList.add('country')
      div.innerHTML= `
      
      <img src = "${flags.png}">
      <h1>Name: ${name.common}</h1>
      <p>Population: ${population}</p>
      <p>Country Code: ${cca3}</p>
      `;
      countryDiv.appendChild(div);
    } */