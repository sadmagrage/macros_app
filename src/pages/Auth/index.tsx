import { AuthContainer, AuthFieldContainer, AuthForm, AuthInputButton, AuthInputText, AuthLabel, AuthTitle } from './styles';
import { useAuth } from './useAuth';

export default function Auth() {

     const { username, password, setUsername, setPassword, onSend, authenticate } = useAuth();
     
     return (
          <AuthContainer>
               <AuthForm>
                    <AuthTitle>Sign In</AuthTitle>
                    <AuthFieldContainer>
                         <AuthLabel>Username</AuthLabel>
                         <AuthInputText type='text' value={ username } onChange={ e => setUsername(e.target.value) } />
                    </AuthFieldContainer>
                    <AuthFieldContainer>
                         <AuthLabel>Password</AuthLabel>
                         <AuthInputText type='password' value={ password } onChange={ e => setPassword(e.target.value) } />
                    </AuthFieldContainer>
                    <AuthInputButton onClick={ authenticate } >Send</AuthInputButton>
               </AuthForm>
          </AuthContainer>
     )
}