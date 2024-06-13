'use client';

import { Button, Flex, TextField } from '@radix-ui/themes';
import { ChangeEvent, useState } from 'react';

interface LoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [form, setForm] = useState<LoginParams>({
    email: '',
    password: '',
  });

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const validate = Object.keys(form).includes(event.target.name);
    if (!validate) {
      return;
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    console.log(form);
    console.log('submeteu');
    alert('Olá mundo!');
  };

  return (
    <Flex direction="column" gap="3" minWidth="300px">
      <TextField.Root
        radius="full"
        placeholder="E-mail"
        name="email"
        value={form.email}
        onChange={(e) => onChangeValue(e)}
        type="text"
      />
      <TextField.Root
        radius="full"
        placeholder="Senha"
        name="password"
        value={form.password}
        onChange={(e) => onChangeValue(e)}
        type="password"
      />
      <Button color="blue" size="4" onClick={() => onSubmit()}>
        Enviar
      </Button>

      {form.email && form.password && (
        <div id="result">
          O username é {form.email} e a senha é {form.password}
        </div>
      )}
    </Flex>
  );
};

export default LoginForm;
