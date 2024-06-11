import LoginForm from '@/components/organismo/LoginForm';
import { Heading } from '@radix-ui/themes';

export const LoginPage = () => {
  return (
    <>
      <div>
        <Heading as="h1">Login</Heading>
      </div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
