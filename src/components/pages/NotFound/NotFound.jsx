import React from 'react'
import Container from "../../ui/Container"
import NotFoundContent from './NotFoundContent'
import NotFoundIllustration from './NotFoundIllustration'

const NotFound = () => {
  return (
    <section className='min-h-screen flex items-center bg-background py-20'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <NotFoundIllustration />
            <NotFoundContent />
        </div>
      </Container>
    </section>
  )
}

export default NotFound
