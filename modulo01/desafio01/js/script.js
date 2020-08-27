let inputSearch = null,
  buttonSearch = null,
  panelUsers = null,
  panelStats = null,
  divInteraction = null,
  divSpinner = null,
  users = [];

const formatter = Intl.NumberFormat('pt-BR');

window.addEventListener('load', () => {
  mapElement();
  fetchUsers();

  addEvents();
});

const mapElement = () => {
  inputSearch = document.querySelector('#inputSearch');
  buttonSearch = document.querySelector('#buttonSearch');
  panelUsers = document.querySelector('#panelUsers');
  panelStats = document.querySelector('#panelStats');
  divInteraction = document.querySelector('#divInteraction');
  divSpinner = document.querySelector('#divSpinner');
};

const fetchUsers = async () => {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  //console.log(json.results);
  users = json.results
    .map(({ login, name, dob, gender, picture }) => {
      const fullName = `${name.first} ${name.last}`;
      return {
        // id: user.login.uuid,
        // name: `${user.name.first} ${user.name.last}`,
        // age: user.dob.age,
        id: login.uuid,
        name: fullName,
        lowerCase: fullName.toLowerCase(),
        age: dob.age,
        gender: gender,
        picture: picture.large,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  //console.log(users);
  showInteraction();
};

const showInteraction = () => {
  setTimeout(() => {
    divSpinner.classList.add('hidden');
    divInteraction.classList.remove('hidden');
  }, 2000);
};

const addEvents = () => {
  inputSearch.addEventListener('keyup', (event) => {
    //console.log(event.key);
    //const currentKey = event.key;
    const currentKey = event.target.value;
    //if (currentKey !== '') {
    if (currentKey === '') {
      return;
    }

    const filterText = event.target.value;
    //console.log(filterText);
    if (filterText.trim() !== '') {
      filterUsers(filterText);
    }
  });
};

const filterUsers = (filterText) => {
  //console.log(filterText);
  const filterTextLowerCase = filterText.toLowerCase();
  const filteredUsers = users.filter((user) => {
    return user.lowerCase.includes(filterTextLowerCase);
  });

  //console.log(filteredUsers);
  renderUsers(filteredUsers);
  renderStats(filteredUsers);
};

const renderUsers = (users) => {
  panelUsers.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerHTML = `${users.length} usuário(s) encontrado(s)`;

  const ul = document.createElement('ul');

  users.forEach((user) => {
    const li = document.createElement('li');
    //li.innerHTML = user.name;
    li.classList.add('flex-row');
    li.classList.add('margin-botton');

    const img = `<img class="avatar" src="${user.picture}" alt="${user.name}"/>`;
    const userData = `<span>${user.name}, ${user.age} anos</span>`;

    li.innerHTML = `${img} ${userData}`;
    ul.appendChild(li);
  });

  panelUsers.appendChild(h2);
  panelUsers.appendChild(ul);
};

const renderStats = (users) => {
  const countMale = users.filter((user) => user.gender === 'male').length;
  const countFemale = users.filter((user) => user.gender === 'female').length;
  const sumAge = users.reduce((acc, curr) => acc + curr.age, 0);
  const avgAge = sumAge / users.length || 0;

  panelStats.innerHTML = `
  
  <h2 class="">
      <ul>
        <li><strong>Sexo masculino: ${countMale}</strong></li>
        <li><strong>Sexo feminino: ${countFemale}</strong></li>
        <li><strong>Soma das idades: ${formatNumber(sumAge)}</strong></li>
        <li><strong>Média das idades: ${formatAvg(avgAge)}</strong></li>
      </ul>
    </h2>
  `;
};

const formatNumber = (number) => {
  return formatter.format(number);
};

const formatAvg = (number) => {
  return number.toFixed(2).replace('.', ',');
};
