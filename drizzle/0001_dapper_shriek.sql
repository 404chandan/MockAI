CREATE TABLE IF NOT EXISTS "mock_interview" (
	"id" serial PRIMARY KEY NOT NULL,
	"json_mock_resp" text NOT NULL,
	"job_position" varchar NOT NULL,
	"job_desc" varchar NOT NULL,
	"job_experience" varchar NOT NULL,
	"created_by" varchar NOT NULL,
	"created_at" varchar,
	"mock_id" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_answer" (
	"id" serial PRIMARY KEY NOT NULL,
	"mock_id" varchar NOT NULL,
	"question" varchar NOT NULL,
	"correct_ans" text,
	"user_ans" text,
	"feedback" text,
	"rating" varchar,
	"user_email" varchar,
	"created_at" varchar
);
--> statement-breakpoint
DROP TABLE "mockInterview";--> statement-breakpoint
DROP TABLE "userAnswer";--> statement-breakpoint
ALTER TABLE "newsletter" ADD COLUMN "new_name" varchar;--> statement-breakpoint
ALTER TABLE "newsletter" ADD COLUMN "new_email" varchar;--> statement-breakpoint
ALTER TABLE "newsletter" ADD COLUMN "new_message" text;--> statement-breakpoint
ALTER TABLE "newsletter" ADD COLUMN "created_at" varchar;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "mock_question_json_resp" text NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "job_position" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "job_desc" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "job_experience" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "type_question" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "created_by" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "created_at" varchar;--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "mock_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "newsletter" DROP COLUMN IF EXISTS "newName";--> statement-breakpoint
ALTER TABLE "newsletter" DROP COLUMN IF EXISTS "newEmail";--> statement-breakpoint
ALTER TABLE "newsletter" DROP COLUMN IF EXISTS "newMessage";--> statement-breakpoint
ALTER TABLE "newsletter" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "MockQuestionJsonResp";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "jobPosition";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "jobDesc";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "jobExperience";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "typeQuestion";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "createdBy";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "question" DROP COLUMN IF EXISTS "mockId";