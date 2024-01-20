CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" text,
    "is_complete" BOOLEAN DEFAULT FALSE
);