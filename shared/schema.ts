import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  country: text("country"),
  segment: text("segment"),
  budget: text("budget"),
  message: text("message"),
  kvkkConsent: boolean("kvkk_consent").notNull(),
  marketingConsent: boolean("marketing_consent").default(false),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  author: json("author").$type<{ name: string; title: string; avatar?: string }>(),
  tags: text("tags").array(),
  readTime: text("read_time"),
  locale: text("locale").notNull().default('tr'),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`now()`).notNull(),
});

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  sector: text("sector"),
  companySize: text("company_size"),
  problem: text("problem").notNull(),
  approach: text("approach").notNull(),
  solution: text("solution").notNull(),
  kpis: json("kpis").$type<Array<{ name: string; value: string; delta: string }>>(),
  images: text("images").array(),
  locale: text("locale").notNull().default('tr'),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const faqs = pgTable("faqs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  locale: text("locale").notNull().default('tr'),
  order: text("order").default('0'),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  fullName: true,
  email: true,
  company: true,
  country: true,
  segment: true,
  budget: true,
  message: true,
  kvkkConsent: true,
  marketingConsent: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  coverImage: true,
  author: true,
  tags: true,
  readTime: true,
  locale: true,
  published: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).pick({
  title: true,
  slug: true,
  sector: true,
  companySize: true,
  problem: true,
  approach: true,
  solution: true,
  kpis: true,
  images: true,
  locale: true,
  published: true,
});

export const insertFAQSchema = createInsertSchema(faqs).pick({
  category: true,
  question: true,
  answer: true,
  locale: true,
  order: true,
  published: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;

export type InsertFAQ = z.infer<typeof insertFAQSchema>;
export type FAQ = typeof faqs.$inferSelect;
