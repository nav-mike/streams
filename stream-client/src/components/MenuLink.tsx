import { FC } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IMenuLinkProps {
  url: string;
  icon: IconType;
}

const MenuLink: FC<IMenuLinkProps> = (props) => {
  const location = useLocation();

  const iconTag = (
    <Icon
      as={props.icon}
      w={6}
      h={6}
      m="16px"
      color={location.pathname === props.url ? "yellow.500" : undefined}
    />
  );

  return (
    <>
      {location.pathname === props.url ? (
        <>{iconTag}</>
      ) : (
        <Link
          variant={location.pathname === props.url ? undefined : "hoverable"}
          as={RouterLink}
          to={props.url}
        >
          {iconTag}
        </Link>
      )}
    </>
  );
};

export default MenuLink;
