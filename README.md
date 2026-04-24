<div align="center">
  <img src="https://raw.githubusercontent.com/mikaelstl/komik-web/angular/public/favicon.svg" width="52"/>

  # Komik Web

  **Leitor de quadrinhos moderno, privado e direto no navegador.**

  [![Angular Version](https://img.shields.io/badge/Angular-21-dd0031?style=flat-square&logo=angular)](https://angular.dev/)
</div>

Este projeto foi criado como uma alternativa web para o projeto [Komik](https://github.com/mikaelstl/komik).

O intuito deste projeto é disponibilizar uma aplicação web para leitura de quadrinhos (arquivos .cbz e .cbr). Com possibilidade de escolha dos quadrinhos no dispositivo e persistencia no navegador.

### Recursos

- **Leitura Offline**: Graças ao IndexedDB com Dexie.js.
- **Suporte Multi-formato**: Extração nativa de .cbz (Zip) e .cbr (Rar) sem necessidade de servidor.
- **Persistência de Progresso**: O app lembra em qual página você parou.
- **Privacidade**: Os arquivos não são enviados para nenhum servidor; tudo acontece no lado do cliente.

## Funcionamento da aplicação

A aplicação roda completamente no navegador sem a necessidade de conexão com servidores externos.

#### Manipulação de arquivos

Para a manipulação de arquivos foi utilizada a biblioteca [libarchive.js](https://www.npmjs.com/package/libarchive.js) para lidar com a extração em memória dos arquivos. Esta biblioteca foi escolhida pela sua facilidade de uso e segurança, além da praticidade, já que é possivel manipular tanto arquivos Zip, quanto arquivos Rar.

> [!IMPORTANT]
> Esta aplicação se utiliza de WebWorkers para a extração dos arquivos de forma assíncrona, para garantir que a descompressão de arquivos pesados não trave a interface.

#### Persistência

A persistência dos dados é realizada através do IndexDB, ferramenta presente nos navegadores modernos para salvar dados no próprio navegador, foi utilizada a biblioteca [dexie.js](https://dexie.org/) por sua simplicidade de uso. Isto garante:

- Independência de sistemas externos;
- Persistência de progresso: o sistema saberá qual página você parou;
- Sistema de "biblioteca": O usuário não precisará abrir o mesmo arquivo toda vez que desejar lê-lo.

## Tecnologias utilizadas

- Node.js 20 [Site Oficial](https://nodejs.org/en/download) / [NVM](https://github.com/nvm-sh/nvm)
- Angular 21 [Installation](https://angular.dev/installation)
- Typescript

### Principais bibliotecas

- [Angular](https://angular.dev/) - framework principal para estruturação da aplicação.
- [dexie.js](https://dexie.org/) - biblioteca para manipulação do IndexedBD.
- [libarchive.js](https://www.npmjs.com/package/libarchive.js) - biblioteca para manipulação e extração de arquivos compactados.

## Executando

Para interessados em estudar e observar o funcionamento da aplicação em sua máquina. Siga os passos.

#### Clone o repositório

**HTTPS**
```bash
git clone https://github.com/mikaelstl/komik-web.git
cd komik-web
```

**SSH**
```bash
git clone git@github.com:mikaelstl/komik-web.git
cd komik-web
```

#### Instale as dependências

```bash
npm i
```

#### Inicie o projeto

```bash
npm start
```
A aplicação estará disponível em: [https://localhost:4200](https://localhost:4200)

## Compatibilidade de navegadores

A aplicação depende de APIs modernas do navegador, como **IndexedDB** e **Web Workers**.  
Por isso, é necessário utilizar navegadores atualizados.

### Navegadores suportados (versões mínimas)

- **Google Chrome** — 57+
- **Mozilla Firefox** — 55+
- **Microsoft Edge (Chromium)** — 79+
- **Safari** — 11+
- **Opera** — 44+

### Observações

- Navegadores antigos (como Internet Explorer) **não são suportados**
- Alguns navegadores móveis podem apresentar limitações de performance ao lidar com arquivos grandes
- Para melhor experiência, recomenda-se o uso das versões mais recentes do navegador

### Tecnologias utilizadas

- **IndexedDB** — armazenamento local persistente
- **Web Workers** — processamento em background (extração de arquivos)