import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  ChakraProvider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiPenTool,
  FiChevronDown,
  FiArchive,
  FiCheckCircle,
  FiDisc,
  FiPocket,
  FiX,
  FiBox,
  FiDatabase,
} from "react-icons/fi";
import { IconType } from "react-icons";
import DoctorView from "../components/admin/DoctorView";
import { useState } from "react";
import HospitalView from "../components/admin/HospitalView";
import ExploreView from "../components/admin/AppointmentView";
import FavouritesView from "../components/admin/FavouritesView";
import SettingsView from "../components/admin/SettingsView";
import BlogView from "../components/admin/BlogView";
import BannerView from "../components/admin/BannerView";
import AdminVisitedView from "../components/admin/AdminVisitedView";
import AdminApprovedView from "../components/admin/AdminApprovedView";
import AdminPendingView from "../components/admin/AdminPendingView";
import AdminCanclledView from "../components/admin/AdminCanclledView";
import AdminDoctorOverView from "../components/admin/doctor/AdminDoctorOverView";
import dq from "../assets/Logo Dq.png";
import AdminAddDoctor from "../components/admin/AdminAddDoctor";

const LinkItems = [
  { name: "Doctor Overview", icon: FiHome, viewName: "DoctorView", p: false },
  { name: "Hospital", icon: FiTrendingUp, viewName: "TrendingView", p: false },
  { name: "Appointment", icon: FiCompass, viewName: "ExploreView", p: false },
  {
    name: "Pending Approval",
    icon: FiStar,
    viewName: "FavouritesView",
    p: false,
  },
  { name: "Blogs", icon: FiPenTool, viewName: "BlogView", p: false },
  { name: "Banners", icon: FiArchive, viewName: "BannerView", p: false },
  {
    name: "Add Doctor",
    icon: FiDatabase,
    viewName: "AdminAddDoctor",
    p: false,
  },
  // { name: "Settings", icon: FiSettings, viewName: "SettingsView" },
];

const AppointmenItems = [
  {
    name: "Visited",
    icon: FiCheckCircle,
    viewName: "AdminVisitedView",
    p: true,
  },
  { name: "Approved", icon: FiDisc, viewName: "AdminApprovedView", p: true },
  { name: "Pending", icon: FiPocket, viewName: "AdminPendingView", p: true },
  { name: "Cancelled", icon: FiX, viewName: "AdminCanclledView", p: true },
];

const DoctorItems = [
  {
    name: "Approved Doctor",
    icon: FiBox,
    viewName: "AdminApprovedDoctorView",
    p: true,
  },
];

const SidebarContent = ({ setActiveView, activeView, onClose, ...rest }) => {
  console.log(activeView);
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    // localStorage.setItem("dqDoctorAu", false);
    sessionStorage.setItem("dqAdminToken", "");
    navigate("/");
    toast({
      title: "Logout successfully.",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box
        transition="3s ease"
        bg={useColorModeValue("red.50", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box p={"10px"} m={"12px"}>
            <Link to={"/"}>
              <img width={"80px"} src={dq} />
            </Link>
          </Box>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <>
            <NavItem
              activeView={activeView}
              p={link.p}
              key={link.name}
              icon={link.icon}
              viewName={link.viewName}
              setActiveView={setActiveView}
              onClick={() => onClose()}
            >
              {link.name}
            </NavItem>
            {link.name === "Appointment" &&
            (activeView === "ExploreView" ||
              activeView === "AdminVisitedView" ||
              activeView === "AdminApprovedView" ||
              activeView === "AdminPendingView" ||
              activeView === "AdminCanclledView")
              ? AppointmenItems.map((link) => (
                  <NavItem
                    onClick={() => onClose()}
                    activeView={activeView}
                    p={link.p}
                    key={link.name}
                    icon={link.icon}
                    viewName={link.viewName}
                    setActiveView={setActiveView}
                  >
                    {link.name}
                  </NavItem>
                ))
              : ""}

            {link.name === "Doctor Overview" &&
            (activeView === "DoctorView" ||
              activeView === "AdminApprovedDoctorView")
              ? DoctorItems.map((link) => (
                  <NavItem
                    onClick={() => onClose()}
                    activeView={activeView}
                    p={link.p}
                    key={link.name}
                    icon={link.icon}
                    viewName={link.viewName}
                    setActiveView={setActiveView}
                  >
                    {link.name}
                  </NavItem>
                ))
              : ""}
          </>
        ))}

        {/* {activeView === "ExploreView"
          ? AppointmenItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                viewName={link.viewName}
                setActiveView={setActiveView}
              >
                {link.name}
              </NavItem>
            ))
          : ""} */}

        {/* <Button
          onClick={handleLogout}
          mt={"10px"}
          marginLeft={"20px"}
          paddingLeft={"15px"}
          colorScheme="red"
        >
          Logout Admin
        </Button> */}
      </Box>
    </ChakraProvider>
  );
};

const NavItem = ({
  icon,
  p,
  viewName,
  activeView,
  setActiveView,
  children,
  ...rest
}) => {
  const isActive = viewName === activeView; // Check if the NavItem is active
  const backgroundColor = isActive ? "#FA6B6C" : "transparent"; // Set background color based on active state
  const hoverColor = isActive ? "#FA6B6C" : "blue.300"; // Set hover color based on active state

  return (
    <ChakraProvider>
      <Box
        as="a"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => setActiveView(viewName)}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          paddingLeft={p ? "25px" : "13px"}
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bg={backgroundColor} // Apply background color based on active state
          color={isActive ? "white" : "black"} // Text color based on active state
          _hover={
            !isActive && {
              // Only apply hover styles when the NavItem is not active
              bg: hoverColor, // Apply hover color dynamically based on active state
              color: "white",
            }
          }
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="16" as={icon} />}
          {children}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    // localStorage.setItem("dqDoctorAu", false);
    sessionStorage.setItem("dqAdminToken", "");
    navigate("/");
    toast({
      title: "Logout successfully.",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <ChakraProvider>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Link to={"/"}>
          <img width={"80px"} src={dq} />
        </Link>

        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} src={""} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    {/* <Text fontSize="sm">Justina Clark</Text> */}
                    <Text fontSize="xl" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    {/* <FiChevronDown /> */}
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                // bg={useColorModeValue("white", "gray.900")}
                // borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                {/* <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider /> */}
                <MenuItem>
                  <Button
                    onClick={handleLogout}
                    mt={"10px"}
                    marginLeft={"20px"}
                    paddingLeft={"15px"}
                    colorScheme="red"
                  >
                    Logout Admin
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeView, setActiveView] = useState("DoctorView");

  
  function setView(val) {
    setActiveView(val);
  }

  let activeComponent;
  switch (activeView) {
    case "DoctorView":
      activeComponent = <AdminDoctorOverView />;
      break;

    case "AdminApprovedDoctorView":
      activeComponent = <DoctorView />;
      break;

    case "AdminPendingView":
      activeComponent = <AdminPendingView />;
      break;

    case "AdminCanclledView":
      activeComponent = <AdminCanclledView />;
      break;
    case "AdminVisitedView":
      activeComponent = <AdminVisitedView />;
      break;

    case "AdminApprovedView":
      activeComponent = <AdminApprovedView />;
      break;

    case "BannerView":
      activeComponent = <BannerView />;
      break;
    case "BlogView":
      activeComponent = <BlogView />;
      break;
    case "TrendingView":
      activeComponent = <HospitalView />;
      break;
    case "ExploreView":
      activeComponent = <ExploreView />;
      break;
    case "FavouritesView":
      activeComponent = <FavouritesView />;
      break;
    case "SettingsView":
      activeComponent = <SettingsView />;
      break;
    case "AdminAddDoctor":
      activeComponent = <AdminAddDoctor />;
      break;
    default:
      activeComponent = null;
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setActiveView={setActiveView}
          activeView={activeView}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent
              activeView={activeView}
              setActiveView={setActiveView}
              onClose={onClose}
            />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {activeComponent}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SidebarWithHeader;
