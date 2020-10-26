# React-podcast:
Criar e acessar n pasta backend.
instalar pacote json-server no backend:<br>
`-yarn add json-server`<br>
`-npm init -y`<br>
`-yarn server(após incluir o script)`

obs1: :: <br>
json-server é um pacote do node que monta para teste e desenvolvimento
em cima de um arquivo json, inclusive permite fazer as requisições HTTP:
GET, POST, PUT, DELETE e outros.

Incluir no package.json uma sessão de script: <br>
 "scripts" :{
    "server": "json-server --watch db.json --port 3001  "
  }