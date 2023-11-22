import React, { Children, FC } from 'react';
import SideBarWrapper from './SideBar';
import NavBar from './Nav';

interface BaseProps {
    children?: React.ReactNode
}

const DashboardWrapper: FC<BaseProps> = ({children}) => {
  return <div className='overflow-hidden'>
    <NavBar/>
    <SideBarWrapper>
        {children}
    </SideBarWrapper>
</div>
};

export default DashboardWrapper;
