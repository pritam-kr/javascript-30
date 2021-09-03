const filterIp = document.querySelector('#filter-input');
const filterOp = document.querySelector('.filter-outupt');

const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

suggestionLis = ["Filter For A City", "Or A State"];

fetch(url)
.then(res => res.json())
.then(res => {
    cities = res;
});

filterIp.addEventListener('input', filterCities);

function filterCities(e) {
    const value = this.value;
    
    if(value === "") {
        let html = suggestionLis.map(sug => {
            return `
                <li>
                    <span class="name">Filter For A City </span>
                    <span class="population"></span>
                </li>
                `;
        }).join('');

        filterOp.innerHTML = html;
    }
    else {
        const matchedCities = findMatches(value);

        let html = matchedCities.map(city => {
            const regExp = new RegExp(value, 'gi');

            const cityName = city.city.replace(regExp, (match) => `<span class="highlighted">${match}</span>`);

            const stateName = city.state.replace(regExp, (match) => `<span class="highlighted">${match}</span>`);    
            
            return `
                <li>
                    <span class="name"">${cityName}, ${stateName}</span>
                    <span class="population">${city.population}</span>
                </li>
            `;
        }).join('');
        filterOp.innerHTML = html;
    }
} 

function findMatches(value) {
    const regExp = new RegExp(value, 'gi');

    const matchedCities = cities.filter(city => {
        return city.city.match(regExp) || city.state.match(regExp);
    });

    return matchedCities;
}