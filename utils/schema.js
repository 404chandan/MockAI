import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

// Mock Interview Table
export const MockInterview = pgTable("mock_interview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("json_mock_resp").notNull(),
  jobPosition: varchar("job_position").notNull(),
  jobDesc: varchar("job_desc").notNull(),
  jobExperience: varchar("job_experience").notNull(),
  createdBy: varchar("created_by").notNull(),
  createdAt: varchar("created_at"),
  mockId: varchar("mock_id").notNull(),
});

// Question Table
export const Question = pgTable("question", {
  id: serial("id").primaryKey(),
  mockQuestionJsonResp: text("mock_question_json_resp").notNull(),
  jobPosition: varchar("job_position").notNull(),
  jobDesc: varchar("job_desc").notNull(),
  jobExperience: varchar("job_experience").notNull(),
  typeQuestion: varchar("type_question").notNull(),
  company: varchar("company").notNull(),
  createdBy: varchar("created_by").notNull(),
  createdAt: varchar("created_at"),
  mockId: varchar("mock_id").notNull(),
});

// User Answer Table
export const UserAnswer = pgTable("user_answer", {
  id: serial("id").primaryKey(),
  mockIdRef: varchar("mock_id").notNull(),
  question: varchar("question").notNull(),
  correctAns: text("correct_ans"),
  userAns: text("user_ans"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("user_email"),
  createdAt: varchar("created_at"),
});

// Newsletter Table
export const Newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  newName: varchar("new_name"),
  newEmail: varchar("new_email"),
  newMessage: text("new_message"),
  createdAt: varchar("created_at"),
});
