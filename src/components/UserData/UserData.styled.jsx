import styled from 'styled-components';
import { device } from 'Device';

export const WrapperUserData = styled.div`
  @media ${device.tablet} {
    width: 704px;
    position: relative;
  }
`;
export const Photo = styled.div`
  position: relative;
`;

export const CardProfile = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.br20};
  @media ${device.tablet} {
    /* width: 704px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 24px ${props => props.theme.space[5]}px 24px 0;
    border-radius: ${props => props.theme.radii.br40};
  }
  @media ${device.desktop} {
    width: 395px;
    flex-direction: column;
    gap: 0;
    padding: ${props => props.theme.space[3]}px
      ${props => props.theme.space[2]}px 18px 0;
    margin-left: 0;
    margin-right: auto;
  }
`;
export const Avatar = styled.img`
  margin: 0 auto;
  height: auto;
  max-width: 233px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  border-radius: ${props => props.theme.radii.round};
  @media ${device.tablet} {
    margin-bottom: ${props => props.theme.space[4]}px; //30 было
  }
  @media ${device.desktop} {
    margin-bottom: 36px;
  }
`;
export const LabelEditPhoto = styled.label`
  position: absolute;
  right: 24px;
  bottom: -12px;
  display: flex;
  align-items: normal;
  gap: ${props => props.theme.space[0]}px;
  padding: 2px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.83;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: ${props => props.theme.radii.br40};
  }
  @media ${device.tablet} {
    right: 0;
    bottom: 0;
  }
  @media ${device.desktop} {
    right: -74px;
    bottom: 32px;
  }
`;
export const FormEdit = styled.form`
  position: relative;
  margin-bottom: 45px;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const InfoWrapper = styled.div`
  position: relative;
`;
export const ListUserInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 12px 0 16px;
  margin-bottom: 66px;
  @media ${device.tablet} {
    width: 380px;
    margin-bottom: 55px;
    gap: ${props => props.theme.space[1]}px;
    padding-right: 0;
  }
  @media ${device.desktop} {
    gap: ${props => props.theme.space[2]}px;
    margin-bottom: 46px;
  }
`;
export const ItemUserInfo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LoaderPhoto = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 230px;
    right: 60px;
  }
  position: absolute;
  bottom: 50px;
  right: 60px;
  --d: 24.6px;
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  color: ${props => props.theme.colors.accent};
  animation: spinner-a90wxe 1s infinite steps(8);
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1.1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2.2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3.4px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4.5px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5.6px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6.7px;

  @keyframes spinner-a90wxe {
    100% {
      transform: rotate(1turn);
    }
  }
`;
