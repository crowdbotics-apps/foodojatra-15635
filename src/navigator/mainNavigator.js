import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps27278Navigator from '../features/Maps27278/navigator';
import Tutorial27277Navigator from '../features/Tutorial27277/navigator';
import Messaging27276Navigator from '../features/Messaging27276/navigator';
import ArticleList27275Navigator from '../features/ArticleList27275/navigator';
import Achievements27274Navigator from '../features/Achievements27274/navigator';
import Add-Item27271Navigator from '../features/Add-Item27271/navigator';
import BlankScreen27265Navigator from '../features/BlankScreen27265/navigator';
import Contacts27248Navigator from '../features/Contacts27248/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps27278: { screen: Maps27278Navigator },
Tutorial27277: { screen: Tutorial27277Navigator },
Messaging27276: { screen: Messaging27276Navigator },
ArticleList27275: { screen: ArticleList27275Navigator },
Achievements27274: { screen: Achievements27274Navigator },
Add-Item27271: { screen: Add-Item27271Navigator },
BlankScreen27265: { screen: BlankScreen27265Navigator },
Contacts27248: { screen: Contacts27248Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
