import Button from '@/components/atomo/Button';
import { FormLine } from '@/components/molecula/FormLine';

export const Form = () => {
  return (
    <div>
      <FormLine title="Nome" />

      <FormLine title="Idade" type="number" />

      <FormLine title="Endereço" />

      <Button title="Submit" />
    </div>
  );
};

export default Form;
