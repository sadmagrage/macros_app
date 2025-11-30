import { AuthContainer, AuthFieldContainer, AuthForm, AuthInputButton, AuthInputText, AuthLabel, AuthTitle } from './styles';

export default function Auth() {
     return (
          <AuthContainer>
               <AuthForm>
                    <AuthTitle>Sign In</AuthTitle>
                    <AuthFieldContainer>
                         <AuthLabel>Username</AuthLabel>
                         <AuthInputText type='text' />
                    </AuthFieldContainer>
                    <AuthFieldContainer>
                         <AuthLabel>Password</AuthLabel>
                         <AuthInputText type='password' />
                    </AuthFieldContainer>
                    <AuthInputButton>Send</AuthInputButton>
               </AuthForm>
          </AuthContainer>
     )
}