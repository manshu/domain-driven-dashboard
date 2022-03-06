import React from 'react'
import Layout from '../../Layout/Index'
import MetaHead from '../../Components/MetaHead'

function Home() {
  return (
    <Layout>
      <MetaHead title="Guru Labs" description="Gurulabs Official Website" />
      <h1 className="text-5xl text-green-500">Hello World</h1>
    </Layout>
  )
}

export default Home
