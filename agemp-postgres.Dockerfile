FROM postgres:16
COPY ./autres/DB /docker-entrypoint-initdb.d/