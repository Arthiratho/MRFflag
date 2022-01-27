let getCountries = () => {
    let fulldata = new XMLHttpRequest;
    fulldata.open("GET","https://restcountries.com/v3.1/all");
    fulldata.send();
    fulldata.responseType = "json";
    fulldata.onload = () => {

        let countries =  fulldata.response;
        console.log(countries);

        //   // 1. Get all the countries from Asia continent /region using Filter function

          let asia = countries.filter((asian) => asian.continents[0]=="Asia");
          let asianCuntries = asia.map((names) => names.name.common);
          console.log(asianCuntries);

        //   // 2.Get all the countries with a population of less than 2 lakhs using Filter function

          let getpopulation = asia.filter((populations) =>populations.population < 200000);
          let population = getpopulation.map((populationless) => populationless.name.common);
          console.log(population);

        //   //3. Print the total population of countries using reduce function
            
          let totalpopulation = asia.filter((populationss) =>populationss.population);
          let over = totalpopulation.map((all) => all.population)
          const subtotal = over.reduce((sum,curr) => sum + curr, 0);
          console.log(subtotal);

        //print the name,capital,flag using forEach function
        let Countries=['countryname','countrycapital','countryflag'].forEach((countries)=>{
                   //console.log(countries);
        });
        console.log(countries);
      

        // Print the country which uses US Dollars as currency.

        let dollar = asia.filter((use) =>use.currencies.USD);
          let usedollar = dollar.map((usdollar) => usdollar.name.common);
        console.log(usedollar);

    }
}
getCountries();
