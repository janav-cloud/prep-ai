import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const PrepAIMock = pgTable('prepMock', {
    id:serial('id').primaryKey(),
    jsonResponse:text('jsonResponse').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdByUser:varchar('createdByUser').notNull(),
    createdAtTime:varchar('createdAtTime').notNull(),
    interviewId:varchar('interviewId').notNull()
})

export const UserAnswerAIMock = pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    interviewIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAnswer:text('correctAnswer'),
    userAnswer:text('userAnswer'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAtTime:varchar('createdAtTime')
})