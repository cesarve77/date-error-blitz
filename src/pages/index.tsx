import { Suspense, useRef, useState } from "react"
import Layout from "src/core/layouts/Layout"
import { useQuery } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/next"
import getUsers from "../users/queries/getUsers"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */
const input = { createdAt: new Date() }
const Users = () => {
  const input = useRef({ createdAt: new Date() }).current
  const [users, { refetch }] = useQuery(getUsers, input)
  return (
    <>
      <button onClick={() => refetch()}>Refetch</button>
      {users?.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </>
  )
}

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Suspense fallback="Loading...">
        <Users />
      </Suspense>
    </Layout>
  )
}

export default Home
