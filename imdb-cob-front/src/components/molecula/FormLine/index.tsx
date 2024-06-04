import { Input } from '@/components/atomo/Input';
import { Label } from '@/components/atomo/Label';
import { FormLineParams } from './type';

export const FormLine = ({ title, type = 'text' }: FormLineParams) => {
  return (
    <div>
      <Label title={title} />
      <Input type={type} />
    </div>
  );
};
