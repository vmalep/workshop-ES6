/* Import the 2 other js files */
import houseToRent from "./houseToRent";
import { createCard } from "./createCard";

/* Initialize the variable used to filter */
let searchInputArray = [];
let homeType = "All";
let onlyAvailable = false;

/* Apply the filters and call for the createCard function */
function submitSearch() {
    document.querySelector(".cards").innerHTML = "";

    /* FixMe: filter houseToRent.desc based on an array of keywords */
    let filteredHouses;
    if(searchInputArray.length != 0) {
        filteredHouses = houseToRent.filter(house => {
            house.descArray = house.desc.split(" ");

            if (house.descArray.some(v => searchInputArray.includes(v))) {
                return true;
            }
        });
    } else {
        filteredHouses = houseToRent;
        console.log("fitlered house: " + filteredHouses);
    }

    /*const selectedHouses = filteredHouses.filter( house  => ( */
        
    /* Create a selectedHouses from filtered houseToRent */
    const selectedHouses = filteredHouses.filter(house => (
        !(!house.available && onlyAvailable) &&
        (homeType === "All" || house.type === homeType)
        ));
        
        /* console.log(selectedHouses); */
        
        /* call the createCard function for the selectedHouses */
        for (let i = 0; i < selectedHouses.length; i++) {
            createCard(selectedHouses[i]);
    }
}
            

/* Populate the searchInputArray from the words entered in the search-imput field */
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const searchInputText = searchInput.value;
        searchInputArray = searchInputText.toLowerCase().split(" ");
        searchInputArray.forEach(element => {
            console.log(element);
        });
    }
})

/* Assign homeType criteria */
const houseTypeSelect = document.querySelector(".select");
houseTypeSelect.value = "All";
houseTypeSelect.addEventListener("click", function () {
    homeType = houseTypeSelect.value;
})

/* Toggle the available checkbox */
const availableCheckBox = document.querySelector(".available-checkbox");
availableCheckBox.addEventListener("click", function () {
    onlyAvailable = availableCheckBox.checked;
})

/* Submit button to apply the filters */
document.getElementById("submitBtn").addEventListener("click", function () {
    submitSearch();
})

/* Apply the submitSearch (fitler + createCard) when launching the page */
submitSearch();