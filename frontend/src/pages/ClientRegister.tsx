import { Box, Button, Stack, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { CustomInput } from '../components/forms/CustomInput';
import useClientRegister from '../hooks/useClientRegister';
import clientTheme from '../theme';
import { CreateClientDTO } from '../types/allTypes';

type ClientFormData = Pick<CreateClientDTO, 'email' | 'telefone' | 'nome'>;

export const ClientRegister = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({ mode: 'onBlur' });

  const { createClient, loading } = useClientRegister();
  const navigate = useNavigate();
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

  const onSubmit = async (data: ClientFormData) => {
    if (Object.keys(errors).length > 0) {
      showToast('Erro', 'Corrija os erros antes de continuar.', 'error');
      return;
    }

    const result = await createClient(data);

    if (!result.success) {
      showToast(
        'Erro ao cadastrar',
        result?.data?.response?.data?.message || 'Erro desconhecido',
        'error'
      );
      return;
    }

    showToast('Sucesso', 'Cliente cadastrado com sucesso.', 'success');
    reset();
    navigate('/clientes');
  };

  const inputFields = [
    {
      id: 'nome-completo',
      name: 'nome',
      placeholder: 'Nome e último nome',
      type: 'text',
      icon: '/User.svg',
      validation: {
        required: 'Nome e último nome é obrigatório',
        pattern: {
          value: /^[A-Za-zÀ-ÖØ-öø-ÿ'\s-]+$/,
          message: 'Nome inválido',
        },
      },
    },
    {
      id: 'telefone',
      name: 'telefone',
      placeholder: 'Telefone',
      type: 'tel',
      icon: '/Smartphone.svg',
      validation: {
        required: 'Telefone é obrigatório',
        pattern: {
          value: /^\d{10,11}$/,
          message: 'Telefone deve ter 10 ou 11 dígitos',
        },
      },
    },
    {
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      icon: '/User.svg',
      validation: {
        required: 'Email é obrigatório',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Email inválido',
        },
      },
    },
  ];

  return (
    <Box
      pt="16px"
      bg={clientTheme.colors.primary.black}
      display="flex"
      height="70vh"
      justifyContent="center"
      alignItems="center"
      maxW="540px"
      mx="auto"
    >
      <Box w="100%">
        <Box display="flex" justifyContent="space-between">
          <Text color={clientTheme.colors.primary.gray03}>
            Forneça os dados abaixo
          </Text>
          <Link to="/clientes">
            <Text color={clientTheme.colors.primary.orange}>
              Consultar clientes
            </Text>
          </Link>
        </Box>
        <Text fontSize="18px" fontWeight="bold" my="16px" color="white">
          Cadastrar cliente
        </Text>

        <Stack spacing={2} as="form" onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map(
            ({ id, name, placeholder, type, icon, validation }) => (
              <CustomInput
                key={id}
                id={id}
                register={register(name as keyof ClientFormData, validation)}
                placeholder={placeholder}
                type={type}
                leftIcon={<img src={icon} alt={`${name} Icon`} />}
                isRequired
                borderColor={
                  errors[name as keyof ClientFormData]
                    ? 'red.500'
                    : clientTheme.colors.primary.gray
                }
                color={clientTheme.colors.primary.gray03}
                width="100%"
                height="44px"
              />
            )
          )}

          {Object.keys(errors).length > 0 &&
            Object.values(errors).map((error, index) => (
              <Text key={index} color="red.500" fontSize="sm">
                {error.message}
              </Text>
            ))}

          <Button
            my="16px"
            bg={clientTheme.colors.primary.orange}
            color="white"
            _hover={{ opacity: 0.8 }}
            type="submit"
            isLoading={loading}
            loadingText="Finalizando..."
            _active={{ opacity: 0.4 }}
          >
            Finalizar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ClientRegister;
