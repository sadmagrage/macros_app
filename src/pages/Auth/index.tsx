import { useAuth } from '../../modules/auth/hooks/useAuth';
import AuthComponent from '../../modules/auth/components/AuthComponent';

export default function Auth() {

     const { username, setUsername,
          password, setPassword,
          passwordVisibility, setPasswordVisibility,
          signIn } = useAuth();
     
     return <AuthComponent
          username={username}
          password={password}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          passwordVisibility={passwordVisibility}
          onTogglePasswordVisibility={() => setPasswordVisibility(!passwordVisibility)}
          onSubmit={signIn}
     />
}