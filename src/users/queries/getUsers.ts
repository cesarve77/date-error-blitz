import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetUsers = z.object({
  createdAt: z.date(),
})

export default resolver.pipe(resolver.zod(GetUsers), async ({ createdAt }) => {
  return await db.user.findMany({ where: { createdAt: { gte: createdAt } } })
})
