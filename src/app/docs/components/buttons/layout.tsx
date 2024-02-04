import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variants: ReactNode
  outline: ReactNode
  sizes: ReactNode
  disabled: ReactNode
  tagbutton: ReactNode
}
export default function Layout({
  children,
  variants,
  outline,
  sizes,
  disabled,
  tagbutton,
}: Props) {
  return (
    <section className="grid-areas-docPagesXS lg:grid-areas-docPagesDefault grid lg:grid-cols-[4fr_1fr]">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="grid-in-content overflow-hidden">
        {variants}
        {outline}
        {sizes}
        {disabled}
        {tagbutton}
      </div>
    </section>
  )
}
