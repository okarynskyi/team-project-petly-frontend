import styled from 'styled-components';
import { device } from 'Device';

export const CardProfile = styled.div`
  padding: ${props => props.theme.space[3]}px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.br20};
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 52px;
    padding: 24px ${props => props.theme.space[5]}px 24px 0;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
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
  margin: 0 auto ;
  width: 233px;
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
`;
export const InputSend = styled.input`
  position: absolute;
  right: 24px;
  bottom: -12px;
  display: flex;
  align-items: normal;
  gap: ${props => props.theme.space[0]}px;
  padding: 4px 10px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.83;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent} ;
  border-color: transparent;
    border-radius: ${props => props.theme.radii.br40};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hoverAccent};
    transform: scale(1.2);
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
export const Loader = styled(InputSend)`
`;
export const HiddenInput = styled.input`
 opacity: 0;
 width: 0;
 height: 0;
 line-height: 0;
 overflow: hidden;
 padding: 0;
 margin:0;
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
