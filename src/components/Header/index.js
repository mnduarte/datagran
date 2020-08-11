import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import { StHeader, SectorLogo, ContentImg, LogoImg, TaskDescription, SectorNavigation, StBottomNavigation } from './styles'
import { BottomNavigationAction } from '@material-ui/core';
import {BsGraphUp, BsFilePost} from 'react-icons/bs';

export const Header = () => {
  const formatLocation = location.pathname.length > 1 ? location.pathname.substring(1, location.pathname.length) : 'linegraph';
  const [value, setValue] = useState(formatLocation);
  const {default : urlImgLogo } = require('../../assets/img/logo-nbar.png');

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <StHeader>       
      <SectorLogo>   
          <ContentImg>
            <Link to='/'>
              <LogoImg 
                  src={urlImgLogo}
              />
            </Link>
          </ContentImg>
          <TaskDescription>
             Technical Review
          </TaskDescription>
      </SectorLogo>
      <SectorNavigation>
        <StBottomNavigation value={value} onChange={handleChange}> 
          <BottomNavigationAction 
            label="Line Graps" 
            value="linegraph" 
            icon={<BsGraphUp size='1.3rem'/>} 
          />
          <BottomNavigationAction 
            label="Post" 
            value="post" 
            icon={<BsFilePost size='1.3rem'/>} 
          />
        </StBottomNavigation>
      </SectorNavigation>
    </StHeader>
  );
}