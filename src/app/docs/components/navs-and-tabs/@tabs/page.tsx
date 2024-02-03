'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { TabNav } from '@mrcarromesa/components'

export default function Tab() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="tabs">
        Tabs
        <a
          href="#tabs"
          aria-label="Link to this section: Tabs"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">Create tabs nav</p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <TabNav.Root>
          <TabNav.GroupTab>
            <TabNav.Item route="item1">Item1</TabNav.Item>
            <TabNav.Item route="item2">Item2</TabNav.Item>
            <TabNav.Item route="item3">Item3</TabNav.Item>
          </TabNav.GroupTab>
        </TabNav.Root>
      </div>
      <CodeHighlighter language="html">
        <TabNav.Root>
          <TabNav.GroupTab>
            <TabNav.Item route="item1">Item1</TabNav.Item>
            <TabNav.Item route="item2">Item2</TabNav.Item>
            <TabNav.Item route="item3">Item3</TabNav.Item>
          </TabNav.GroupTab>
        </TabNav.Root>
      </CodeHighlighter>
    </section>
  )
}
