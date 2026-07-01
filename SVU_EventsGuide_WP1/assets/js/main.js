const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFrom = document.getElementById("dateFrom");
const dateTo = document.getElementById("dateTo");

const events = document.querySelectorAll(".event-item");
const resetButton = document.getElementById("resetFilters");


function filterEvents() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLocation = locationFilter.value;
    const fromDate = dateFrom.value;
    const toDate = dateTo.value;

    events.forEach(event => {
        const title = event.querySelector("h5").textContent.toLowerCase();
        const description = event.querySelector("p").textContent.toLowerCase();

        const category = event.dataset.category;
        const location = event.dataset.location;
        const eventDate = event.dataset.date;

        const matchSearch =
            title.includes(searchText) ||
            description.includes(searchText);

        const matchCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        const matchLocation =
            selectedLocation === "all" ||
            location === selectedLocation;

        const matchDateFrom =
            fromDate === "" ||
            eventDate >= fromDate;

        const matchDateTo =
            toDate === "" ||
            eventDate <= toDate;

        if (
            matchSearch &&
            matchCategory &&
            matchLocation &&
            matchDateFrom &&
            matchDateTo
        ) {
            event.style.display = "";
        } else {
            event.style.display = "none";
        }
    });
    resetButton.addEventListener("click", () => {

        searchInput.value = "";
        categoryFilter.value = "all";
        locationFilter.value = "all";
    
        if (dateFrom) {
            dateFrom.value = "";
        }
    
        if (dateTo) {
            dateTo.value = "";
        }
    
        filterEvents();
    });
}

searchInput.addEventListener("keyup", filterEvents);
categoryFilter.addEventListener("change", filterEvents);
locationFilter.addEventListener("change", filterEvents);
dateFrom.addEventListener("change", filterEvents);
dateTo.addEventListener("change", filterEvents);