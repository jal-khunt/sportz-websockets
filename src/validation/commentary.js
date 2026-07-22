import { z } from 'zod';

export const listCommentaryQuerySchema = z.object({
    limit: z.coerce.number().int().positive().max(100).optional(),
});

export const createCommentarySchema = z.object({
    minute: z.number().int().nonnegative().max(2_147_483_647),
    eventType: z.string().max(50).optional(),
    sequence: z.number().int().min(-2_147_483_648).max(2_147_483_647).optional(),
    period: z.string().max(50).optional(),
    actor: z.string().max(100).optional(),
    team: z.string().max(100).optional(),
    message: z.string().min(1).max(500),
    metadata: z.record(z.string(), z.any()).optional(),
    tags: z.array(z.string()).optional(),
});