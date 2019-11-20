// Style Imports
import { fadeInLeft, bounce, fadeInUp, bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Style Init for Animations
export const FadeInLeft = styled.div`animation: 1.5s ${keyframes`${fadeInLeft}`}`;
export const FadeInUp = styled.div`animation: 1.1s ${keyframes`${fadeInUp}`}`;
export const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;
export const BounceInUp = styled.div`animation: 1.4s ${keyframes`${bounceInUp}`}`;