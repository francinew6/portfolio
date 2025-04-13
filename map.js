document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('ncmap').setView([37.0902, -85.7129], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
        {
            name: "Hometown",
            coords: [34.2104, -77.8868],
            popup: "Wilmington, NC<br><br>I was born here in February of 2004! I attended school through my Sophomore year of high school before I was accepted into NCSSM, a 2 year public residential high school. Throughout my childhood, I was heavily involved in the local swimming community, and I was a member of the Waves of Wilmington swim team. I also played golf, tennis, and participated in academic activities like the Seaperch Underwater Robotics competition, Science Olympiad, and HOSA."
        },
        {
            name: "NC School of Science and Math",
            coords: [36.0193862,-78.9206515],
            popup: "Wilmington, NC<br><br>I attended NCSSM for my Junior and Senior years of high school. I graduated in May of 2022! I was a member of the Varsity Golf Team and the Competitive Swim Team. I also participated in the HOSA and led the Chinese Culture Club as a Chinese Teaching Assistant."
        },
        {
            name: "UNC Chapel Hill",
            coords: [35.9132, -79.0558],
            popup: "Chapel Hill, NC<br><br>I am currently a student at UNC Chapel Hill, where I am pursuing a double major in Computer Science and Information Science. I am also a member of Kappa Phi Lambda."
        },
        {
            name: "Siemens Princeton",
            coords: [40.3445046, -74.5923963],
            popup: "Princeton, NJ<br><br>I will be an incoming intern at Siemens in Princeton, NJ this summer! I will join as an User Interface Intern on the Safe Track team for Siemens Foundational Technology."
        },
        {
            name: "Salt Lake City",
            coords: [40.7608, -111.8910],
            popup: "Salt Lake City, UT<br><br>I traveled to Salt Lake City for a school trip as part of NCSSM's January Term. We visited the Utah Olympic Park and participated in many different winter activities like curling, skiing, and cross-country skiing to learn more about the Winter Olympics and history of the area!"
        }
    ];

    locations.forEach(location => {
        L.marker(location.coords)
            .bindPopup(`<div class="popup-content">
                <h3>${location.name}</h3>
                <p>${location.popup}</p>
            </div>`)
            .addTo(map);
    });

    const bounds = L.latLngBounds(locations.map(location => location.coords));
    
    map.fitBounds(bounds, {
        padding: [50, 50]
    });
});