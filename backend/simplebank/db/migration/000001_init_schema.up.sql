CREATE TYPE "currency" AS ENUM (
  'USD',
  'CAD',
  'EUR'
);

CREATE TYPE "transaction_status" AS ENUM (
  'pending',
  'paid',
  'deferred',
  'not_paying',
  'error'
);

CREATE TABLE "account" (
  "id" bigserial PRIMARY KEY,
  "owner_name" varchar NOT NULL,
  "balance" decimal NOT NULL,
  "currency" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "entries" (
  "id" bigserial PRIMARY KEY,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "amount" bigint NOT NULL,
  "account_id" bigint NOT NULL
);

CREATE TABLE "transfers" (
  "id" bigserial PRIMARY KEY,
  "from_account_id" bigint NOT NULL,
  "to_account_id" bigint NOT NULL,
  "amount" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "required_transaction" (
  "id" bigserial PRIMARY KEY,
  "from_account_id" bigint NOT NULL,
  "to_account_id" bigint NOT NULL,
  "amount" bigint NOT NULL,
  "status" transaction_status NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "account" ("owner_name");

CREATE INDEX ON "entries" ("account_id");

CREATE INDEX ON "transfers" ("from_account_id");

CREATE INDEX ON "transfers" ("to_account_id");

CREATE INDEX ON "transfers" ("from_account_id", "to_account_id");

COMMENT ON COLUMN "entries"."amount" IS 'amount can be negative or positive';

COMMENT ON COLUMN "transfers"."amount" IS 'amount must be positive';

ALTER TABLE "entries" ADD FOREIGN KEY ("account_id") REFERENCES "account" ("id");

ALTER TABLE "transfers" ADD FOREIGN KEY ("from_account_id") REFERENCES "account" ("id");

ALTER TABLE "transfers" ADD FOREIGN KEY ("to_account_id") REFERENCES "account" ("id");

ALTER TABLE "required_transaction" ADD FOREIGN KEY ("from_account_id") REFERENCES "account" ("id");

ALTER TABLE "required_transaction" ADD FOREIGN KEY ("to_account_id") REFERENCES "account" ("id");
