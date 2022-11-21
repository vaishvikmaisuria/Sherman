stop:
	docker stop postgres15

drop:
	docker rm postgres15

postgres:
	docker run --name postgres15 -p 5032:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres15 dropdb --username=root --owner=root simple_bank

migrateup:
	migrate -path simplebank/db/migration -database "postgresql://root:secret@localhost:5032/simple_bank?sslmode=disable" -verbose up

migratedown:
	migrate -path simplebank/db/migration -database "postgresql://root:secret@localhost:5032/simple_bank?sslmode=disable" -verbose down

.PHONY: postgres createdb dropdb