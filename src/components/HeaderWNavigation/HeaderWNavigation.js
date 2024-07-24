import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import { Switcher, Notification, UserAvatar } from "@carbon/icons-react";
import { Link } from "carbon-components-react";

const HeaderWNavigation = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName href="/" prefix="CHINKA">
            Carbon Test App
          </HeaderName>
        </Link>
        <Link href="/About" passHref legacyBehavior>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/HomePage">About</HeaderMenuItem>
          </HeaderNavigation>
        </Link>
        <Link href="/Contact" passHref legacyBehavior>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/Contact">Contact</HeaderMenuItem>
          </HeaderNavigation>
        </Link>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/About">About</HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/Contact">Contact</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>{" "}
      </Header>
    )}
  />
);

export default HeaderWNavigation;
