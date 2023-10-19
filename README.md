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
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiXSquare,
} from "react-icons/fi";
import { useState } from "react";

import PendingAppointment from "../components/DoctorDashboard/pendingAppointment";
import ApprovedAppointment from "../components/DoctorDashboard/ApprovedAppointment";
import VisitedAppointment from "../components/DoctorDashboard/VisitedAppointment";
import Add_doctors from "../components/admin/doctor/AddNewDoctor";
import Overview from "../components/DoctorDashboard/Overview";
import { Link, useNavigate } from "react-router-dom";
import CancelAppointment from "../components/DoctorDashboard/CancelAppointment";

const LinkItems = [
  { name: "Overview", icon: FiHome, viewName: "overview" },
  { name: "Pending", icon: FiTrendingUp, viewName: "TrendingView" },
  { name: "Approved", icon: FiCompass, viewName: "ExploreView" },
  { name: "Visited", icon: FiStar, viewName: "FavouritesView" },
  { name: "Calcelled", icon: FiXSquare, viewName: "CancelView" },
  { name: "Profile", icon: FiSettings, viewName: "SettingsView" },
];

const SidebarContent = ({ setActiveView,activeView, onClose, ...rest }) => {
  const navigate = useNavigate()
  const toast = useToast()
  const handleLogout = () => {
    localStorage.setItem("dqDoctorAu","")
    navigate("/")
    toast({
      title: 'Logout successfully.',
      description: "",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
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
        <Link to={'/'}><img src="https://doctorsqueries.com/wp-content/uploads/2022/08/cropped-DoctorQueries-Logo-No-Bg-1-1.png" /></Link>

          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
          activeView={activeView}
            key={link.name}
            icon={link.icon}
            viewName={link.viewName}
            setActiveView={setActiveView}
          >
            {link.name}
          </NavItem>
        ))}
        <Button marginTop={"15px"} marginLeft={"25px"} colorScheme="teal">
          <Link to={"/"}>Home</Link>
        </Button>
        <Button onClick={handleLogout} mt={'10px'} marginLeft={'20px'} paddingLeft={'15px'} colorScheme="red">
          Logout Dashboard
        </Button>
      </Box>
    </ChakraProvider>
  );
};

const NavItem = ({ icon, p, viewName, activeView, setActiveView, children, ...rest }) => {
  const isActive = viewName === activeView; // Check if the NavItem is active
  const backgroundColor = isActive ? "red.500" : "transparent"; // Set background color based on active state
  const hoverColor = isActive ? "red.500" : "blue.300"; // Set hover color based on active state

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
          paddingLeft={p ? "20px" : "4px"}
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bg={backgroundColor} // Apply background color based on active state
          color={isActive ? "white" : "black"} // Text color based on active state
          _hover={
            !isActive && { // Only apply hover styles when the NavItem is not active
              bg: hoverColor, // Apply hover color dynamically based on active state
              color: "white",
            }
          }
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
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

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>

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
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              {/* <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

const DoctorDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeView, setActiveView] = useState("CancelView");

  function setView(val) {
    setActiveView(val);
  }

  let activeComponent;
  switch (activeView) {
    case "overview":
      activeComponent = <Overview />;
      break;
    case "TrendingView":
      activeComponent = <PendingAppointment />;
      break;
    case "ExploreView":
      activeComponent = <ApprovedAppointment />;
      break;
    case "FavouritesView":
      activeComponent = <VisitedAppointment />;
      break;
    case "SettingsView":
      activeComponent = <Add_doctors />;
      break;
    case "CancelView":
      activeComponent = <CancelAppointment />;
      break;
    default:
      activeComponent = null;
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
         activeView={activeView} 
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setActiveView={setActiveView}
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
            <SidebarContent activeView={activeView} setActiveView={setActiveView} onClose={onClose} />
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

export default DoctorDashboard;
