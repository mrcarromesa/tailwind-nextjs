import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  example: ReactNode
  checkbox: ReactNode
  size: ReactNode
  vertical: ReactNode
}
export default function Layout({
  children,
  example,
  checkbox,
  size,
  vertical,
}: Props) {
  return (
    <section className="grid-areas-docPagesXS lg:grid-areas-docPagesDefault grid lg:grid-cols-[4fr_1fr]">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="grid-in-content overflow-hidden">
        {example}
        {checkbox}
        {size}
        {vertical}
      </div>
    </section>
  )
}
