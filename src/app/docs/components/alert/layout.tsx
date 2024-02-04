import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  examples: ReactNode
  liveExample: ReactNode
  additionalContent: ReactNode
  icons: ReactNode
  dismissing: ReactNode
  api: ReactNode
}
export default function Layout({
  children,
  examples,
  liveExample,
  additionalContent,
  icons,
  dismissing,
  api,
}: Props) {
  return (
    <section className="grid-areas-docPagesXS lg:grid-areas-docPagesDefault grid lg:grid-cols-[4fr_1fr]">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="grid-in-content overflow-hidden">
        {examples}
        {liveExample}
        {additionalContent}
        {icons}
        {dismissing}
        {api}
      </div>
    </section>
  )
}
