import styled from "styled-components";
import { BottomNavigation } from '@material-ui/core';

export const StHeader = styled.header`
  width: 100%;
  height: 70px;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);  
  display: grid;
  grid-template-columns: 1.5fr 1fr;  
  grid-template-areas: "left-sector right-sector";
  @media (max-width: 768px) {    
    height: 120px;
    grid-template-columns: 1fr;
    grid-template-areas: "left-sector"
                         "right-sector";
  }
`;

export const SectorLogo = styled.div`
  grid-area: left-sector;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ContentImg = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

export const LogoImg = styled.img`
  height: 32px;
`;

export const TaskDescription = styled.div`
  display: inline-block;
  font-size: 22px;
`;

export const SectorNavigation = styled.div`
  grid-area: right-sector;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const StBottomNavigation = styled(BottomNavigation)`
  && {
    width:100%;
    background: #F6F7F9;
  }
`;





