
Criar estrutura de pastas e iniciar o projeto usando `yarn init` na pasta principal.

Ajustar o `package.json` especialmente para criar os workspaces e as demais configurações, inclusive o **private** para permitir a utilização do monorepo.

Iniciando o projeto Node.js

```
yarn workspace backend add express dotenv cors sequelize pg pg-hstore bcryptjs jsonwebtoken yup

yarn workspace backend add eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier nodemon prettier sequelize-cli sucrase -D
```

Configurar formatação usando o comando `yarn eslint --init`, selecionando as opções conforme o caso.

Outras configurações:
- EditorConfig: Mudar para `true` as duas últimas opções;
- eslintrc.js
```
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: [ 'prettier' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};
```
- .prettierrc
```
{
  "singleQuote": true,
  "trailingComma": "es5",
}
```

- .sequelizerc
```
const { resolve } = require('path');

module.exports = {
  config: resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};
```

- nodemon.json
```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

- Criar scripts no `package.json`:
```
"scripts": {
  "dev": "nodemon src/server.js",
  "dev:debug": "nodemon --inspect src/server.js",
  "build": "sucrase ./src -d ./dist --transforms imports",
  "start": "node dist/server.js"
}
```





```
yarn eslint --init
```

