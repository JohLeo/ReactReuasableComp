import { Card } from 'lib/Card'
import React from 'react'
import styled from 'styled-components/macro'

const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://placekeanu.com/500/300/y"
        title="This is the title"
        secondaryText="Secondary title"
        thumbnailUrl="https://placekeanu.com/90/100/y" />

      <Card title="Only a title" secondaryText="And a second text" />
    </div>
  )
}
