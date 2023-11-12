import React, { ReactNode } from "react";

type SectionProps = {
  title?: string,
  children: ReactNode
}

// React.FC is deprecated.
export const Section = ({children, title = 'My subheading' }: SectionProps) => {
  return (
    <section> 
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}
