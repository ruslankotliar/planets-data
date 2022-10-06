const planetsList = document.querySelectorAll('.planet');

let planetsData = [];

const earthStyles = `
    display: flex;
        justify-self: center;
        align-self: center;
        width: 400px;
        height: 400px;
        background: url(https://web.archive.org/web/20150807125159if_/http://www.noirextreme.com/digital/Earth-Color4096.jpg);
        border-radius: 50%;
        background-size: 810px;
        box-shadow: inset 8px 36px 80px 36px rgb(0, 0, 0), inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
        animation-name: rotate;
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-name: rotate;
           -webkit-animation-duration: 12s;
           -webkit-animation-iteration-count: infinite;
           -webkit-animation-timing-function: linear;
      }
`;

window.onload = () => {
  fetch('./planetsData.json')
    .then((res) => (data = res.json()))
    .then((data) => {
      data.forEach((element) => {
        planetsData.push(element);
      });
    });
  let earth;
  setTimeout(() => {
    const earthNav = Array.from(planetsList).find(
      (elem) => elem.innerHTML === 'Earth'
    );
    earthNav.style.color = 'rgb(250, 101, 250)';
    console.log(earthNav);
    earth = planetsData.find((elem) => elem.name === 'Earth');
    document.querySelector('.hero').innerHTML = `
            <div style='
                ${earthStyles}
            ' class="hero-img">
                
            </div>
            <div class="hero-info">
                <h1>${earth.name}</h1>
                <p>${earth.description}</p>
                <div class="hero-info-data">
                    <div>
                        <h3>${earth.yearLength}</h3>
                        <h5>length of the year</h5>
                    </div>
                    <div>
                        <h3>${earth.fromSun}</h3>
                        <h5>from the sun</h5>
                    </div>
                    <div>
                        <h3>${earth.moons}</h3>
                        <h5>moons</h5>
                    </div>
                </div>
                <div>
                    <div class="hero-info-namesake">
                        <h3>${earth.nameSake}</h3>
                        <h5>Namesake</h5>
                    </div>
                </div>
            </div>
    `;
    console.log(earth);
  }, 1000);
};

// console.log(document.querySelectorAll('.planet'));

planetsList.forEach((planet) => {
  console.log(planet);
  planet.addEventListener('click', () => {
    planetsList.forEach(planet => planet.style.color = 'rgb(234, 234, 234)')
    planet.style.color = 'rgb(250, 101, 250)';
    console.log(planet.innerHTML);

    if (planet.innerHTML === 'Earth') {
      earth = planetsData.find((elem) => elem.name === 'Earth');
      document.querySelector('.hero').innerHTML = `
                <div style='
                    ${earthStyles}
                ' class="hero-img">
                    
                </div>
                <div class="hero-info">
                    <h1>${earth.name}</h1>
                    <p>${earth.description}</p>
                    <div class="hero-info-data">
                        <div>
                            <h3>${earth.yearLength}</h3>
                            <h5>length of the year</h5>
                        </div>
                        <div>
                            <h3>${earth.fromSun}</h3>
                            <h5>from the sun</h5>
                        </div>
                        <div>
                            <h3>${earth.moons}</h3>
                            <h5>moons</h5>
                        </div>
                    </div>
                    <div>
                        <div class="hero-info-namesake">
                            <h3>${earth.nameSake}</h3>
                            <h5>Namesake</h5>
                        </div>
                    </div>
                </div>
        `;
    } else {
      const planetToSet = planetsData.find(
        (elem) => elem.name === planet.innerText
      );
      setNewPlanet(planetToSet);
    }
  });
});

const setNewPlanet = (planetToSet) => {
  document.querySelector('.hero').innerHTML = `
            <div class="hero-img">
                <img src=${planetToSet.img} alt=${planetToSet.name}>
            </div>
            <div class="hero-info">
                <h1>${planetToSet.name}</h1>
                <p>${planetToSet.description}</p>
                <div class="hero-info-data">
                    <div>
                        <h3>${planetToSet.yearLength}</h3>
                        <h5>length of the year</h5>
                    </div>
                    <div>
                        <h3>${planetToSet.fromSun}</h3>
                        <h5>from the sun</h5>
                    </div>
                    <div>
                        <h3>${planetToSet.moons}</h3>
                        <h5>moons</h5>
                    </div>
                </div>
                <div>
                    <div class="hero-info-namesake">
                        <h3>${planetToSet.nameSake}</h3>
                        <h5>Namesake</h5>
                    </div>
                </div>
            </div>
    `;
};

console.log(planetsData);
