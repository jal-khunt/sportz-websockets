CREATE TYPE "public"."match_status" AS ENUM('scheduled', 'live', 'finished');--> statement-breakpoint
CREATE TABLE "commentary" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"minute" integer,
	"sequence" integer,
	"period" varchar(50),
	"event_type" varchar(50),
	"actor" varchar(100),
	"team" varchar(100),
	"message" varchar(500) NOT NULL,
	"metadata" json,
	"tags" varchar[],
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "matches" (
	"id" serial PRIMARY KEY NOT NULL,
	"sport" varchar(50) NOT NULL,
	"home_team" varchar(100) NOT NULL,
	"away_team" varchar(100) NOT NULL,
	"status" "match_status" DEFAULT 'scheduled',
	"home_score" integer DEFAULT 0,
	"away_score" integer DEFAULT 0,
	"start_time" timestamp,
	"end_time" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "commentary" ADD CONSTRAINT "commentary_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE no action ON UPDATE no action;