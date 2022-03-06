import React from 'react'
import { Head } from '@inertiajs/inertia-react'

function MetaHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default MetaHead
