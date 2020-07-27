 //
 const geonamesUrl =  "http://api.geonames.org/postalCodesearchJSON";
 const username = "Abiodun";
 
const locationInput = document.querySelector("#form");

locationInput.addEventListener("submit", function(event){
    event.preventDefault()
    const location = document.getElementById("location")
    console.log(location.value)
})
// adding country auto complete functionality
const searchInput = document.querySelector(".destination");
const matchList = document.querySelector("#match-list");

//search json and filter
const getCountry =  searchText =>{
    
const countries = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British lndian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]
console.log(countries)
const matchCountries = (countries).filter(country =>{
   if (countries === searchText)
   return(country.match)
})
if(searchText.length === 0){
    matchCountries = []
}
outp
console.log(matchCountries)
//show output in Html
    outputText(matchCountries)
    
}

searchInput.addEventListener("input",() => getCountry (searchInput.value))

const weatherbitUrl = "https://api.weatherbit.io/v2.0/forecast/daily";
const weatherbitApi = "eaa4d31785484cfcb5f86bb63a289a2b";
const city = location.value

window.addEventListener("load",()=>{
    var longitute;
    var latitude

   const weatherUpdate= function weatherUpdate(params) {
       
   
   if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location => {
            longitute = location.coords.longitude
            latitude = location.coords.latitude 

            const URL = weatherbitUrl + "?lat=" + latitude + "&lon" + longitude + "&key" + weatherbitApi;

            fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data =>{
                console.log(data)
            })
        })
    }
}})

const pixabayApi = "17647674-8fa5d6211319851cf1875b696"
const pixabayUrl = "https://pixabay.com/api/"

const pictureUpdate = async (pixabayUrl, pixabayApi, city) => {
  const res = await fetch(pixabayUrl + "?key=" + pixabayApi + "&q=" + city + "&image_type=photo")
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

const postData = () => {
    console.log(details);
     
    fetch('http://localhost8082:/addData',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    })
    .then(Response => Response.send)
    .then( () => {
        console.log(res);
    })
    .catch((error) => console.log(error));
  }