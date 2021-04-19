import './styles.css';
import countryCardTpl from '.././src/country-card.hbs'
import countryListTpl from '.././src/country-list.hbs';
import fetchCountries from './api-sevice';
import getRefs from './get-refs';
import { debounce } from 'lodash';
import makeError from './mareError'

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 1500));
 
function onSearch(element) {
    const name = element.target.value;
    // console.log(name);
           
    if (element.target.value === '') {
        makeCountryCard('')
    }
    else {
        fetchCountries(name)
            .then(country => {
                if (country.length === 1) {
                    makeCountryCard(countryCardTpl(country[0]))
                }
                else if (country.length > 20) {
                    makeError()
                }
                else {
                    makeCountryCard(countryListTpl(country))
                }
            })
        .catch(error => makeCountryCard('<h1>"I do not know this country!!!"</h1>'))
    }

     function makeCountryCard(markup) {
        refs.cardContainer.innerHTML = markup;
    }

    // function onFetchError() {
    //     alert('I need more letters!!!')
    // }   
}    
    
   
