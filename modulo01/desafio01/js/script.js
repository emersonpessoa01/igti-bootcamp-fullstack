let inputSearch = null,
  buttonSearch = null,
  panelUsers = null,
  panelStats = null,
  divInteraction = null,
  divSpinner = null,
  users = [];
  filteredUsers = [];

const formatter = Intl.NumberFormat("pt-BR");

window.addEventListener("load", () => {
  mapElement();
  fetchUsers();
  addEvents();
});


const mapElement = () => {
  inputSearch = document.querySelector("#inputSearch");
  inputSearch.value = "";
  inputSearch.focus();
  buttonSearch = document.querySelector("#buttonSearch");
  panelUsers = document.querySelector("#panelUsers");
  panelStats = document.querySelector("#panelStats");
  divInteraction = document.querySelector("#divInteraction");
  divSpinner = document.querySelector("#divSpinner");
};

const fetchUsers = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  //console.log(json.results);
  users = json.results.map(({ name, dob, gender, picture }) => {
    const fullName = `${name.first} ${name.last}`;
    return {
      name: fullName,
      age: dob.age,
      gender: gender,
      picture: picture.large,
    };
  });

  //console.log(users);
  showInteraction();
};

const showInteraction = () => {
  setTimeout(() => {
    divSpinner.classList.add("hidden");
    divInteraction.classList.remove("hidden");
    inputSearch.focus();
  }, 1000);
};

const addEvents = () => {
  inputSearch.addEventListener("input", (evt) => {
    const name = evt.target.value.trim();
    if (name === "") {
      renderEmptyUsers([]);
    } else {
      filteredUsers = users
        .filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));
      renderUsers(filteredUsers);
      renderStats(filteredUsers);
    }
  });
};

const renderEmptyUsers = () => {
  if (!filteredUsers) {
    return;
  }
  let userlistHTML = "<div>";
  userlistHTML += `
    <h2>
    <strong>Nenhum usuário filtrado</strong>
    </strong>
    </h2>
  `;
  userlistHTML += "</div>";
  panelUsers.innerHTML = userlistHTML;
  // userlistHTML.appendChild(div);
  // panelUsers.appendChild(userlistHTML);

  if (!filteredUsers) {
    return;
  }
  let userStatsHTML = "<div>";
  userStatsHTML += `
    <h2>
    <strong>Estatísticas</strong>
    </strong>
    </h2>
  `;
  userStatsHTML += "</div>";
  panelStats.innerHTML = userStatsHTML;
  // userStatsHTML.appendChild(div);
  // panelStats.appendChild(userStatsHTML);
};

const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};


const renderUsers = (users) => {
  panelUsers.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerHTML = `(${users.length < 1 ? 0 : leftPad(users.length)}) ${
    users.length > 1
      ? "usuários encontrados"
      : users.length < 1
      ? "de usuário"
      : "usuário encontrado"
  }`;

  const ul = document.createElement("ul");

  users.forEach(({ name, picture, age }) => {
    const li = document.createElement("li");
    li.classList.add("flex-row");
    li.classList.add("margin-botton");

    const img = `<img class="avatar" src="${picture}" alt="${name}"/>`;
    const userData = `<span>${name} | ${age} ${age > 1 ? "anos" : "ano"}
    </span>`;

    li.innerHTML = `${img} ${userData}`;
    ul.appendChild(li);
  });

  panelUsers.appendChild(h2);
  panelUsers.appendChild(ul);
};

const renderStats = () => {
  const countMale = filteredUsers.filter((user) => user.gender === "male")
    .length;
  const countFemale = filteredUsers.filter((user) => user.gender === "female")
    .length;
  const sumAge = filteredUsers.reduce((acc, curr) => acc + curr.age, 0);
  const avgAge = sumAge / filteredUsers.length || 0;

  panelStats.innerHTML = `
  <h2>
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
  return number.toFixed(2).replace(".", ",");
};
