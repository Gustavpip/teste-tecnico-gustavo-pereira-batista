import { Box, Button, Center, Spinner, Text, useToast } from '@chakra-ui/react';
import clientTheme from '../theme';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useClientList from '../hooks/useClientList';
import { Client } from '../types/allTypes';

export const ClientList = () => {
  const { getClients, loading } = useClientList();
  const [clients, setClients] = useState<Client[]>([]);
  const toast = useToast();

  const showToast = (
    title: string,
    description: string,
    status: 'success' | 'error'
  ) => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      if (!data.success) {
        showToast(
          'Erro ao consultar',
          data?.data?.response?.data?.message,
          'error'
        );
      }
      setClients(data.data.data || []);
    };
    fetchClients();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <Center height="calc(92vh - 73px)">
        <Spinner size="xl" color={clientTheme.colors.primary.orange} />
      </Center>
    );
  }

  return (
    <Box
      pt="32px"
      as="section"
      display="flex"
      flexDirection="column"
      maxW="540px"
      mx="auto"
      zIndex="0"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text
          m="16px 0"
          fontWeight="bold"
          color="white"
          fontSize="18px"
          as="h1"
        >
          Clientes
        </Text>
        <Link to="/clientes/cadastro">
          <Button
            _hover={{ opacity: 0.4 }}
            _active={{ opacity: 0.4 }}
            height="30px"
            color="white"
            bg={clientTheme.colors.primary.orange}
          >
            Cadastrar
          </Button>
        </Link>
      </Box>
      <Box overflowY="auto">
        {clients.length > 0 ? (
          clients.map(({ id, nome, email, telefone }) => (
            <Box
              key={id}
              display="flex"
              borderRadius="10px"
              p="12px"
              my="8px"
              border={`1px solid ${clientTheme.colors.primary.gray}`}
            >
              <Box ml="10px">
                <Text as="h2" fontWeight="bold" fontSize="16px" color="white">
                  {nome}
                </Text>
                <Text
                  my="4px"
                  fontSize="14px"
                  color={clientTheme.colors.primary.gray03}
                  as="h4"
                >
                  <Text as="strong">Email: </Text>
                  {email}
                </Text>
                <Text
                  my="4px"
                  fontSize="14px"
                  color={clientTheme.colors.primary.gray03}
                  as="h4"
                >
                  <Text as="strong">Telefone:</Text> {telefone}
                </Text>
              </Box>
            </Box>
          ))
        ) : (
          <Text
            my="128px"
            textAlign="center"
            alignSelf="center"
            fontSize="18px"
            color={clientTheme.colors.primary.gray}
          >
            Nenhum cliente cadastrado...
          </Text>
        )}
      </Box>
    </Box>
  );
};
