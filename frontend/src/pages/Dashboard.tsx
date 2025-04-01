import { Box, Image, IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ReactNode, useState } from 'react';
import clientTheme from '../theme';
import { Link } from 'react-router-dom';

export const DashboardClient = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box w="100%" minH="100vh" display="flex" flexDirection="column">
      <Box
        as="header"
        w="100%"
        p="16px"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={999}
        bg="rgba(255, 255, 255, 0.1)"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to="/clientes">
            <Box
              h="46px"
              w="46px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="12%"
              bg={clientTheme.colors.primary.black}
            >
              <Image
                h="38px"
                w="38px"
                src="/logo.jpeg"
                borderRadius="12%"
                alt="Logo"
                objectFit="cover"
              />
            </Box>
          </Link>
          <IconButton
            icon={isOpen ? <CloseIcon color="white" boxSize="12px" /> : <HamburgerIcon />}
            bg="transparent"
            color="white"
            aria-label="Menu"
            onClick={() => setIsOpen(prev => !prev)}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            zIndex={3}
          />
        </Box>
      </Box>

      <Box flex="1" bg={clientTheme.colors.primary.black} overflow="hidden">
        <Box as="main" pt="74px" px="16px" overflow="hidden">
          {children}
        </Box>
      </Box>
    </Box>
  );
};