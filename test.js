const newButton = `
    <button id="abLogin" class="ab-login-btn axa-btn" aria-expanded="false" aria-controls="loginDropdown">
        Log In
        <span class="btn-icon">
            <span class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            </span>
        </span>
    </button>
    `;
const navMenuListItem = document.querySelector('.meta-nav__login-btn');
navMenuListItem.innerHTML = '';
navMenuListItem.innerHTML = newButton;

const assets = {
  car:
    '//cdn.optimizely.com/img/247752487/f4ab406e86df428fa63a6e8f80e5d95c.svg',
  home:
    '//cdn.optimizely.com/img/247752487/98f08841065e415fb9e25e6982ec3415.svg',
  travel:
    '//cdn.optimizely.com/img/247752487/9cf41e297877494c827c4cf2a60b00c4.svg',
  business:
    '//cdn.optimizely.com/img/247752487/e13b729fdcd44c9bbc2f40e66f875e8e.svg',
  van:
    '//cdn.optimizely.com/img/247752487/843e7d324183440dbe675e2522d75bbf.svg',
  health:
    '//cdn.optimizely.com/img/247752487/e1f00d56f9d44d11840e073ae977c04b.svg',
};

// Dropdown
const newDropdown = `
    <div class="mega-menu__wrapper">
        <div class="mega-menu__title">
            <p class="typo-28-serif">Log in to manage your policy</p>
        </div>
        <div class="mega-menu__content">
            <div class="mega-menu__content-section">
                <div class="mega-menu__product-card">
                    <div class="mega-menu__product-list">
                        <div class="mega-menu__product">
                            <img src="${assets.car}" alt="" class="mega-menu__product-icon">
                            <p class="mega-menu__product-description">Car insurance</p>
                        </div>
                        <div class="mega-menu__product">
                            <img src="${assets.home}" alt="" class="mega-menu__product-icon">
                            <p class="mega-menu__product-description">Home insurance</p>
                        </div>
                        <div class="mega-menu__product">
                            <img src="${assets.travel}" alt="" class="mega-menu__product-icon">
                            <p class="mega-menu__product-description">Travel insurance</p>
                        </div>
                        <div class="mega-menu__product">
                            <img src="${assets.business}" alt="" class="mega-menu__product-icon">
                            <p class="mega-menu__product-description">Business insurance</p>
                        </div>
                        <div class="mega-menu__product">
                            <img src="${assets.van}" alt="" class="mega-menu__product-icon">
                            <p class="mega-menu__product-description">Van insurance</p>
                        </div>
                    </div>
                    <a href="https://secure.axainsurance.com/login/my-axa-account" class="btn btn--medium btn-axa-blue" data-ab-name="Retail">Log in here <span class="visuallyhidden">for car, home, travel, business and van insurance</span></a>
                </div>
                <div class="mega-menu__product-card">
                    <div class="mega-menu__product">
                        <img src="${assets.home}" alt="" class="mega-menu__product-icon">
                        <p class="mega-menu__product-description">Landlord insurance</p>
                    </div>
                    <a href="https://www.landlordaxainsurance.com/AWE/Container.aspx?_adal_sd=www.axa.co.uk.1607955564928&_adal_ca=so%3Dapp.optimizely.com%26me%3Dreferral%26ca%3Dreferral%26co%3Dhttps%253A%252F%252Fapp.optimizely.com%252F%26ke%3D(not%2520set).1607955564928&_adal_cw=1607953938274.1607955564928&_adal_id=453c5732-a9c1-44c9-9284-f0ada4a0cc9a.1606166034.21.1607955561.1607610934.fe04fb55-2f5c-43e2-9823-e418f4eb128a.1607955564928&CurrentStep=Login&CurrentWorkflow=Direct&_gl=1*1kevg74*_ga*MTEwNzc4NTg1Mi4xNjA3NjEwOTI3*_ga_RE55ZQSXB7*MTYwNzk1MzkzNi4yLjEuMTYwNzk1NTU2MC41Ng..&_ga=2.219889049.1837522194.1607953936-1107785852.1607610927" class="btn btn--medium btn-axa-blue" data-ab-name="Landlord">Log in here <span class="visuallyhidden">for landlord insurance</span></a>
                </div>
                <div class="mega-menu__product-card">
                    <div class="mega-menu__product">
                        <img src="${assets.health}" alt="" class="mega-menu__product-icon">
                        <p class="mega-menu__product-description">Health insurance</p>
                    </div>
                    <a href="https://www.axahealth.co.uk/memberlogin/" class="btn btn--medium btn-axa-blue" data-ab-name="Health">Log in here <span class="visuallyhidden">for health insurance</span></a>
                </div>
                <div class="mega-menu__details-wrapper">
                    <p class="mega-menu__details-title">What can I do in my account?</p>
                    <ul class="mega-menu__details-list">
                        <li class="mega-menu__details-list-item">
                            Make changes to your policy 24/7
                        </li>
                        <li class="mega-menu__details-list-item">
                            Renew your policy online
                        </li>
                        <li class="mega-menu__details-list-item">
                            Avoid wait times on the phone
                        </li>
                        <li class="mega-menu__details-list-item">
                            Save on admin fees for certain policy changes
                        </li>
                    </ul>
                    <p class="mega-menu__details-subtext">Not got an account?
                        <span class="mega-menu__link"><a href="https://secure.axainsurance.com/Sales/AXADirect/AXA/Standard/Desktop/LateRegistration/Entry">Register for one today</a></span>
                    </p>
                </div>
            </div>            
        </div>
    </div>
  `;
const dropdown = document.createElement('div');
dropdown.id = 'loginDropdown';
dropdown.className = 'ab-dropdown-content dropdown-content';
dropdown.innerHTML = newDropdown;

const navBar = document.querySelector('.meta-nav__wrapper');
navBar.appendChild(dropdown);

const loginBtn = document.getElementById('abLogin');
function toggleDropdown() {
  dropdown.classList.toggle('active');
  dropdown.setAttribute(
    'aria-expanded',
    !dropdown.getAttribute('aria-expanded'),
  );
}

loginBtn.addEventListener('click', () => {
  toggleDropdown();
});

function emitEvent(e) {
  const label = e.target.dataset.abName;
  window.dataLayer.push({
    event: 'optimize-event',
    eventAction: 'Login Mega Menu Experiment',
    eventLabel: `${label} Login Clicked`,
  });
}

window.addEventListener('click', (e) => {
  const loginBtns = ['Retail', 'Landlord', 'Health'];
  if (loginBtns.indexOf(e.target.dataset.abName) !== -1) {
    emitEvent(e);
  }
});

window.addEventListener('click', (e) => {
  if (
    e.target.parents('.ab-dropdown-content').length > 0
    || e.target.parents('.ab-login-btn').length > 0
  ) { return; }
  const dropdownOpen = dropdown.classList.contains('active');
  if (dropdownOpen) {
    toggleDropdown();
  }
});
