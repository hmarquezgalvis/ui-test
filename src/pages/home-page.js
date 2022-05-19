import React from 'react'

import { RoulingContainer } from '../components/containers/rouling-container'
import { DefaultLayout } from '../layouts/default-layout'

export const HomePage = () => {
  return (
    <DefaultLayout>
      <RoulingContainer />
    </DefaultLayout>
  )
}
