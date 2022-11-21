# Sherman Backend


1. Design DB on dbdiagram.io and generate SQL code.

![alt image](https://github.com/vaishvikmaisuria/Sherman/blob/main/backend/db/Database.png)

2. Configure Postgres on Docker
    1. > docker pull postgres:15-alpine -> get docker image
    2. > docker images
    3. > docker run --name postgres15 -p 5032:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine
    4. > docker ps && docker images
    5. > docker exec -it postgres15 psql -U root
    6. > docker logs

3. TablePlus install
    - https://tableplus.com/

4. Golang migration
   1. https://github.com/golang-migrate/migrate
   2. brew install golang-migrate
   3. migrate --version
   4. migrate create -ext sql -dir db/migration -seq init_schema
   5. docker ps -a
   6. docker exec -it postgres15 /bin/sh
   7. createdb --username=root --owner=root simple_bank
   8. psql simple_bank && dropdb simple_bank && exit
   9. migrate -path simplebank/db/migration -database "postgresql://root:secret@localhost:5032/simple_bank?sslmode=disable" -verbose up


Mobile App that helps roommates distribute expanses in a common living space.
