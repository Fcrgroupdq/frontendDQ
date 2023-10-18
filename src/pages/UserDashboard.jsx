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
  ChakraProvider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiStar, FiMenu, FiBell } from "react-icons/fi";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import UserAppointmenntView from "../components/UserDashboard/UserAppointmenntView";
import UserApprovedView from "../components/UserDashboard/UserApprovedView";
import UserHistoryView from "../components/UserDashboard/UserHistoryView.";
import axios from "axios";
import dq from "../assets/Logo Dq.png";

const LinkItems = [
  {
    name: "Pending Appointment",
    icon: FiHome,
    viewName: "UserAppointmenntView",
  },
  { name: "Approved appointment", icon: FiStar, viewName: "UserApprovedView" },
  { name: "History", icon: FiTrendingUp, viewName: "UserHistoryView" },
  //   { name: "Profile", icon: FiStar, viewName: "UserProfileView" },
];

const SidebarContent = ({ setActiveView, activeView, onClose, ...rest }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    localStorage.removeItem("dqAuthTo");
    // localStorage.setItem("dqAuthTo", "");
    // alert("hi")
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
          <NavItem
            onClick={() => onClose()}
            activeView={activeView}
            key={link.name}
            icon={link.icon}
            viewName={link.viewName}
            setActiveView={setActiveView}
          >
            {link.name}
          </NavItem>
        ))}

        <Button
          onClick={handleLogout}
          mt={"10px"}
          marginLeft={"20px"}
          paddingLeft={"15px"}
          colorScheme="red"
        >
          Logout Dashboard
        </Button>
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
          paddingLeft={p ? "20px" : "4px"}
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
  const [name, setName] = useState("User");
  useEffect(() => {
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/user?token=${localStorage.getItem(
          "dqAuthTo"
        )}`
      )
      .then((res) => setName(res.data));
  }, []);
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

        <Box p={"10px"} m={"12px"}>
          <Link to={"/"}>
            <img width={"80px"} src={dq} />
          </Link>
        </Box>

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
                    <Text fontSize="md" color="gray.600">
                      Welcome
                    </Text>
                    <Text color={"red"} fontSize="xl">
                      {name}
                    </Text>
                  </VStack>
                  {/* <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box> */}
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

const UserDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeView, setActiveView] = useState("UserAppointmenntView");

  function setView(val) {
    setActiveView(val);
  }

  let activeComponent;
  switch (activeView) {
    case "UserAppointmenntView":
      activeComponent = <UserAppointmenntView />;
      break;

    case "UserApprovedView":
      activeComponent = <UserApprovedView />;
      break;

    case "UserHistoryView":
      activeComponent = <UserHistoryView />;
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

export default UserDashboard;

// about us / info
// area of experties
// exp and edg