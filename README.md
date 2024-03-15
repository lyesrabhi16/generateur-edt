# Initialization

## download

install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you don't have it, and configure the [login with ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```bash
git clone git@github.com:lyesrabhi16/Projet_AIE.git
```

## install the dependencies

execute these from the root folder, meaning:

```bash
cd Projet_AIE
```

install [Nodejs and npm](https://kinsta.com/blog/how-to-install-node-js/) if you don't have them

```bash
npm install --prefix backend
npm install --prefix frontend

```

## start the backend server

```bash
npm run backend
```

## start the frontend website

in a different terminal/shell window, start the frontend development server with:

```bash
npm run frontend
```

## DB configuration

### locally

download and install [PostgreSQL](https://www.postgresql.org/) if you don't have it

download and install [PgAdmin](https://www.pgadmin.org/) if you want

configure your local Postgresql db with:

1. [create a user](https://phoenixnap.com/kb/postgres-create-user) named: **admin** with the password: **admin**
2. [create a database](https://phoenixnap.com/kb/postgres-create-database) with the name **agemp_db_local**
3. run the scripts in the [DB Folder](autres/DB/)

you will find the DB environment variables in the [env file](backend/.env)

### remote

URL:

```txt
    postgres://admin:EuununkXWDDJZ33W7cQLLBi8pagZ4qzH@dpg-cnir53ed3nmc73fm5eqg-a.frankfurt-postgres.render.com/agemp_db
```

PSQL Command:

```txt
    PGPASSWORD=EuununkXWDDJZ33W7cQLLBi8pagZ4qzH psql -h dpg-cnir53ed3nmc73fm5eqg-a.frankfurt-postgres.render.com -U admin agemp_db
```
