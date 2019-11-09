import React from "react";
import styled from "styled-components";

const StyledIndiehackersCard = styled.div`
  background-color: #0e2439;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  border-radius: 10px;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  max-width: 145px;
  max-height: 145px;
  margin-bottom: -30px;
  border: 10px solid #1f364d;

  @media (max-width: 768px) {
    margin-bottom: -50px;
  }
`;

const ProfileContent = styled.div`
  background-color: #1f364d;
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 40px;
`;

const OtherInformation = styled.span`
  color: #9cb3c9;
`;

const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-right: 20px;
    padding-bottom: 14px;
    padding-top: 5px;
  }
`;

const FollowButton = styled.button`
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(to right, #e052a0, #f15c41) !important;
  border-radius: 3px;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  width: 100%;
  height: 44px;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  outline: 0;
  padding: 10px 30px;
  resize: none;
  text-align: center;
`;

const NotAvatarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
`;

const StyledIndiehackersLink = styled.a`
  text-decoration: none;
`;

export const IndiehackersCard = () => {
  return (
    <StyledIndiehackersCard>
      <ProfileContent>
        <AvatarImage src="/profile.png"></AvatarImage>
        <NotAvatarContent>
          <ProfileInformationContainer>
            <Name>Kevin Peters</Name>
            <OtherInformation>
              23 · Berlin, Germany · joined 2 months ago
            </OtherInformation>
          </ProfileInformationContainer>
          <FollowContainer>
            <StyledIndiehackersLink href="https://www.indiehackers.com/kevinpeters_">
              <FollowButton>Follow me</FollowButton>
            </StyledIndiehackersLink>
          </FollowContainer>
        </NotAvatarContent>
      </ProfileContent>
    </StyledIndiehackersCard>
  );
};

export default IndiehackersCard;
