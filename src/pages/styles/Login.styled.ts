import styled from 'styled-components';

import circleDetails from '../../assets/imgs/Circles-details.svg'

export const CirclesDetailsBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-image: url(${circleDetails});
    background-size: cover;
    background-repeat: no-repeat;
`