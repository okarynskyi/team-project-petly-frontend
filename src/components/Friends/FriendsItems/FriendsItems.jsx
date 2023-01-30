import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import noLogo from '../../../staticImages/noLogo.png';
import { StyledItem, StyledTitle, StyledWrapper, ImgWrapper, StyledImg, StyledList, StyledListItem, StyledItemTitle } from './FriendsItems.styled';


const noItem = '-----------------------';

function FriendsItems({
  address,
  imageUrl,
  phone,
  title,
  email,
  url,
  workDays,
  addressUrl,
  _id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollY = useRef(0);

  // const handleClick = () => {
  //   if (workDays === null || workDays.length === 0) return;
  //   setIsOpen(prevState => !prevState);
  // };

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && isOpen) {
        setIsOpen(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <StyledItem ref={prevScrollY}>
      <StyledTitle href={url} target="_blank" rel="noreferrer">
        {title}
      </StyledTitle>
      <StyledWrapper>
        <ImgWrapper>
          <StyledImg src={imageUrl || noLogo} alt={title} />
        </ImgWrapper>
        <StyledList>
          {/* time component */}
          <StyledListItem>
            <StyledItemTitle>Address:</StyledItemTitle>
            {addressUrl ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address || noItem}
              </a>
            ) : (
              <p>{address || noItem}</p>
            )}
          </StyledListItem>
          <StyledListItem>
            <StyledItemTitle>Email:</StyledItemTitle>
            {email ? (
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noreferrer"
              >
                {email}
              </a>
            ) : (
              <p>{noItem}</p>
            )}
          </StyledListItem>
          <StyledListItem>
            <StyledItemTitle>Phone:</StyledItemTitle>
            {phone ? (
              <a
                isPhone={true}
                href={`tel:${phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {phone}
              </a>
            ) : (
              <p>{noItem}</p>
            )}
          </StyledListItem>
        </StyledList>
      </StyledWrapper>
      </StyledItem>
  );
}

FriendsItems.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  addressUrl: PropTypes.string,
};

export default FriendsItems;