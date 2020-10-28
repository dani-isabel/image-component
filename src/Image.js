import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {
        className,
        source
    }= props
    return (
        <img className={className} src={source} alt='profilePhoto'/>
    )
}

const StyledImage = styled(Image)`
    &.img {
        max-height: 40%;
        broder-radius: 10px;
    }
`

export {StyledImage}