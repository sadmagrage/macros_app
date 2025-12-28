import { useTheme } from 'styled-components';
import { AuthContainer, AuthFieldContainer, AuthForm, AuthInputButton, AuthInputPassword, AuthInputPasswordDiv, AuthInputText, AuthLabel, AuthTitle } from './styles';
import { useAuth } from './useAuth';
import { Eye, EyeOff  } from "lucide-react";

export default function Auth() {

     const theme = useTheme();

     const { username, setUsername,
          password, setPassword,
          inputPasswordType, changeInputPasswordType,
          onSend } = useAuth();
     
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
                         <AuthInputPasswordDiv>
                             <AuthInputPassword type={ inputPasswordType } value={ password } onChange={ e => setPassword(e.target.value) } />
                              { inputPasswordType == "password" ?
                                   <Eye onClick={ changeInputPasswordType } style={ { alignSelf: 'center', color: theme.textSecondary } } /> :
                                   <EyeOff onClick={ changeInputPasswordType } style={ { alignSelf: 'center', color: theme.textSecondary } } />
                              }
                         </AuthInputPasswordDiv>
                    </AuthFieldContainer>
                    <AuthInputButton onClick={ async () => await onSend() } >Send</AuthInputButton>
               </AuthForm>
          </AuthContainer>
     )
}