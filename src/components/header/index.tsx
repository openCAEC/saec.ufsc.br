import { Link } from "gatsby";
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";

import * as styles from "./header.module.scss";

import { links } from "./links";

import { styled } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";

const HeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const SignupButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    textDecoration: "none",
    margin: "0 1.4rem",
    background:
      "radial-gradient(187.5% 187.5% at 50.29% -54.17%, #ED3148 0%, #FBF600 100%)",
    "&:hover": {
      background:
        "radial-gradient(187.5% 187.5% at 50.29% -54.17%, #ED3148 10%, #FBF600 100%)",
    },
  }));

  return (
    <header className={styles.header}>
      <div className={styles.mobileButton}>
        <IconButton
          onClick={() => toggleDrawer()}
          aria-label="menu"
          sx={{ color: "white" }}
        >
          <Icon>menu</Icon>
        </IconButton>
      </div>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        <nav className={styles.mobile}>
          <div className={styles.logoContainer}>
            <img src="/logo_default.svg" alt="Logo SAEC" />
          </div>

          <List>
            {links.map((link) => {
              if (!link.disableCase || !link.disableCase.includes("mobile")) {
                return (
                  <ListItem
                    button
                    key={link.id}
                    component={Link}
                    to={link.path}
                  >
                    <ListItemIcon>{<Icon>{link.icon}</Icon>}</ListItemIcon>
                    <ListItemText
                      className={styles.textDrawerLink}
                      primary={link.name}
                    />
                  </ListItem>
                );
              }
            })}
          </List>
        </nav>
      </Drawer>

      <nav className={styles.desktop}>
        {links.map((link) => {
          if (!link.disableCase || !link.disableCase.includes("desktop")) {
            return (
              <Link
                key={link.id}
                to={link.path}
                className={
                  link.className
                    ? `${styles.link} ${styles[link.className]}`
                    : styles.link
                }
              >
                {link.name}
              </Link>
            );
          }
        })}

        <SignupButton component={Link} to="/inscricao">
          Inscreva-se
        </SignupButton>
      </nav>
    </header>
  );
};

export default HeaderComponent;