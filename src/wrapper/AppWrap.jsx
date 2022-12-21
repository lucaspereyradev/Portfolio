import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames, classNamesComponent) =>
    function HOC() {
        return (
            <div id={idName} className={`relative flex min-h-screen w-full flex-row ${classNames}`}>
                <SocialMedia />

                <div
                    className={`${classNamesComponent} flex w-full flex-1 flex-col items-center justify-center`}
                >
                    <Component />
                </div>

                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;
