import React from 'react'
import Container from "../../../../ui/Container"
import CTAContent from './CTAContent'
import CTAButtons from './CTAButtons'
const CTA = () => {
  return (
    <section className='py-20 lg:py-28'>
      <Container>
        <div className='rounded-3xl border border-border bg-primary/5 px-8 py-20 lg:px-24 '>
            <CTAContent />
        </div>
      </Container>
    </section>
  )
}

export default CTA
