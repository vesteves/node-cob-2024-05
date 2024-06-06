import ButtonVitor from '@/components/atomo/Button';
import { Button } from '@radix-ui/themes';

import { FormLine } from '@/components/molecula/FormLine';

export const Form = () => {
  return (
    <div>
      <FormLine title="Nome" />

      <FormLine title="Idade" type="number" />

      <FormLine title="Endereço" />

      <Button color="blue" size="2">
        Enviar
      </Button>
      <Button color="blue" size="3">
        Enviar
      </Button>
      <Button color="blue" size="4">
        Enviar
      </Button>
      <ButtonVitor title="Enviar Vitor" />
    </div>
  );
};

export default Form;
