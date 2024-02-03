'use client'
import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  example: ReactNode
  labels: ReactNode
  backgrounds: ReactNode
  striped: ReactNode
  stripedAnimated: ReactNode
}
export default function Layout({
  children,
  example,
  labels,
  backgrounds,
  striped,
  stripedAnimated,
}: Props) {
  return (
    <section className="grid grid-areas-docPagesXS lg:grid-cols-[4fr_1fr] lg:grid-areas-docPagesDefault">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="overflow-hidden grid-in-content">
        {example}
        {labels}
        {backgrounds}
        {striped}
        {stripedAnimated}
      </div>
    </section>
  )
}