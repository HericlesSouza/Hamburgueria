import { StyledSection } from "./style"

interface iModalWrapper{
    children: React.ReactNode
}

export const ModalWrapper = ({children}:iModalWrapper) => {
  return (
    <StyledSection>
        {children}
    </StyledSection>
  )
}
