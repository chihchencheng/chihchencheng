// 行星資訊字典
const planetDetails = {
    Mercury: "Mercury is the closest planet to the Sun and has a very thin atmosphere.",
    Venus: "Venus has a thick atmosphere and is the hottest planet in our solar system.",
    Earth: "Earth is our home planet and the only known planet with life.",
    Mars: "Mars is known as the Red Planet and has the largest volcano in the solar system.",
    Jupiter: "Jupiter is the largest planet in our solar system and has a giant red spot.",
    Saturn: "Saturn is known for its beautiful ring system made of ice and rock particles.",
    Uranus: "Uranus has a unique tilt, causing extreme seasonal variations.",
    Neptune: "Neptune is the furthest planet from the Sun and has strong winds and storms."
};

// 顯示行星資訊
function showPlanetInfo(planet) {
    const infoBox = document.getElementById('planet-info');
    const title = document.getElementById('planet-title');
    const description = document.getElementById('planet-description');

    title.innerText = planet;
    description.innerText = planetDetails[planet];
    infoBox.classList.add('visible');
}

// 當滑鼠進入行星元素時顯示名稱
const planets = document.querySelectorAll('.planet');
planets.forEach(planet => {
    planet.addEventListener('mouseover', function() {
        const name = this.getAttribute('data-name');
        const infoBox = document.getElementById('planet-info');
        infoBox.classList.add('visible');
        document.getElementById('planet-title').innerText = name;
        document.getElementById('planet-description').innerText = planetDetails[name];
    });

    // 滑鼠離開時隱藏資訊
    planet.addEventListener('mouseout', function() {
        const infoBox = document.getElementById('planet-info');
        infoBox.classList.remove('visible');
    });
});
