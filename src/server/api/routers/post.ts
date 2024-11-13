import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { tasks } from "@/server/db/schema";

export const taskRouter = createTRPCRouter({
  ping: publicProcedure.query(({ }) => {
    return {
      greeting: `PONG`,
    };
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(tasks).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx: { db, session } }) => {
    const task = await db.query.tasks.findFirst({
      orderBy: (tasks, { desc }) => [desc(tasks.createdAt)],
    });

    return task ?? null;
  }),
});
