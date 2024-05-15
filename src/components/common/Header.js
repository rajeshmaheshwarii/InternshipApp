// Header.js
import { Box } from "@mui/material";
import { React, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import Style from "../../styles/header.module.css";
import { Typography } from "@mui/material";

const Header = () => {
  const headermenu = ["Home", "Internships", "Login", "Register"];
  const headermenuIcons = [
    <HomeOutlinedIcon />,
    <SchoolOutlinedIcon />,
    <LoginOutlinedIcon />,
    <AppRegistrationOutlinedIcon />,
  ];
  const Navigationpage = ["/", "/Internships", "/Login", "/Register"];
  const router = useRouter();
  const handleMenuClick = (path) => {
    console.log("Clicked on menu item with path:", path);
    router.push(path);
    setOpen(false);
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box>
        <Box className={Style.headerContainer}>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "monospace", fontWeight: "700", color: "#fff" }}
            >
              Logo Here
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            {isMobile && (
              <MenuIcon onClick={toggleDrawer(true)} fontSize="large" />
            )}
            {!isMobile &&
              headermenu.map((menu, index) => (
                <Typography
                  variant="body1"
                  key={menu}
                  className={Style.menu}
                  onClick={() => handleMenuClick(Navigationpage[index])}
                >
                  {headermenuIcons[index]}
                  {menu}
                </Typography>
              ))}
          </Box>
        </Box>
      </Box>

      {/* Mobile Menu */}

      <Box>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              backgroundColor: "#690684",
              height: "60px",
              color: "white",
              padding: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon
              fontSize="large"
              onClick={toggleDrawer(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
              backgroundColor: "#690684",
              height: "100vh",
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box sx={{ paddingLeft: "10px" }}>
              {headermenu.map((menu, index) => (
                <Typography
                  variant="body1"
                  key={menu}
                  className={`${Style.mobileMenu} ${Style.menu}`}
                  onClick={() => handleMenuClick(Navigationpage[index])}
                >
                  {headermenuIcons[index]}
                  {menu}
                </Typography>
              ))}
            </Box>
            <Box className={Style.MobileHeaderSocialContainer}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Follow us on
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Link href="#" target="_blank">
                  <XIcon sx={{ fontSize: "26px",color:'black' }} />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FacebookIcon sx={{ fontSize: "30px" }} color="info" />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <LinkedInIcon sx={{ fontSize: "30px" }} color="primary" />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <InstagramIcon sx={{ fontSize: "30px" }} color="error" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
