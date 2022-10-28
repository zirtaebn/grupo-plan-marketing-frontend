import React from 'react'

// styles
import { SectionTitleContainer } from './styles'

const SectionTitle = ({children}: {children: React.ReactNode}) => {

    return (

        <SectionTitleContainer>

            {children}
            
        </SectionTitleContainer>
    )
}

export default SectionTitle