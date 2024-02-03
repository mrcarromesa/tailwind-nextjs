'use client'
import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  examples: ReactNode
  staticBackdrop: ReactNode
  scrollingLongContent: ReactNode
  verticallyCentered: ReactNode
  sizes: ReactNode
}
export default function Layout({
  children,
  examples,
  staticBackdrop,
  scrollingLongContent,
  verticallyCentered,
  sizes,
}: Props) {
  return (
    <section className="grid grid-areas-docPagesXS lg:grid-cols-[4fr_1fr] lg:grid-areas-docPagesDefault">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="overflow-hidden grid-in-content">
        {examples}
        {staticBackdrop}
        {scrollingLongContent}
        {verticallyCentered}
        {sizes}
      </div>
    </section>
  )
}
