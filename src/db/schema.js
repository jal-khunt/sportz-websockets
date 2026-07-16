import { pgTable, serial, varchar, timestamp, integer, pgEnum, json } from 'drizzle-orm/pg-core';

export const matchStatusEnum = pgEnum('match_status', ['scheduled', 'live', 'finished']);

export const matches = pgTable('matches', {
    id: serial('id').primaryKey(),
    sport: varchar('sport', { length: 50 }).notNull(),
    homeTeam: varchar('home_team', { length: 100 }).notNull(),
    awayTeam: varchar('away_team', { length: 100 }).notNull(),
    status: matchStatusEnum('status').default('scheduled'),
    homeScore: integer('home_score').default(0),
    awayScore: integer('away_score').default(0),
    startTime: timestamp('start_time'),
    endTime: timestamp('end_time'),
    createdAt: timestamp('created_at').defaultNow()
});

export const commentary = pgTable('commentary', {
    id: serial('id').primaryKey(),
    matchId: integer('match_id').references(() => matches.id).notNull(),
    minute: integer('minute'),
    sequence: integer('sequence'),
    period: varchar('period', { length: 50 }),
    eventType: varchar('event_type', { length: 50 }),
    actor: varchar('actor', { length: 100 }),
    team: varchar('team', { length: 100 }),
    message: varchar('message', { length: 500 }).notNull(),
    metadata: json('metadata'),
    tags: varchar('tags').array(),
    createdAt: timestamp('created_at').defaultNow()
});