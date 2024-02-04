'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { useRef } from 'react'
import { EXAMPLE_MODAL_HTML } from './constants'
import { Button, Modal, ModalElement } from '@mrcarromesa/components'

export default function VerticallyCentered() {
  const modalRef = useRef<ModalElement | null>(null)
  return (
    <section className="mt-4">
      <h2
        className="group/title inline-block text-3xl"
        id="vertically-centered"
      >
        Vertically Centered
        <a
          href="#vertically-centered"
          aria-label="Link to this section: Vertically Centered"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Open modal in vertically centered position
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Modal.Root ref={modalRef} showCloseButton dismissible verticalCentered>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => modalRef.current?.close()}
                variation="danger"
              >
                Cancel
              </Button>
              <Button onClick={() => modalRef.current?.close()}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal.Root>
        <Button onClick={() => modalRef.current?.open()}>Open Modal</Button>
      </div>
      <CodeHighlighter language="html">
        <div dangerouslySetInnerHTML={{ __html: EXAMPLE_MODAL_HTML }}></div>
      </CodeHighlighter>
    </section>
  )
}
