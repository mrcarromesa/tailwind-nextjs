import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  example: ReactNode
  indicators: ReactNode
  autoPlaying: ReactNode
}
export default function Layout({
  children,
  example,
  indicators,
  autoPlaying,
}: Props) {
  return (
    <section className="grid-areas-docPagesXS lg:grid-areas-docPagesDefault grid lg:grid-cols-[4fr_1fr]">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="grid-in-content overflow-hidden">
        {example}
        {indicators}
        {autoPlaying}
      </div>
    </section>
  )
}
