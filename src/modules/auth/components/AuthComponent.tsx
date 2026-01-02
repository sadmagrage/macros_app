import { AuthContainer, AuthFieldContainer, AuthForm, AuthInputButton, AuthInputPassword, AuthInputPasswordDiv, AuthInputText, AuthLabel, AuthTitle } from '../../../pages/Auth/styles';
import AuthPasswordVisibilityComponent from './AuthPasswordVisibility';

type AuthContainerProps = {
     username: string;
     password: string;
     onUsernameChange: (value: string) => void;
     onPasswordChange: (value: string) => void;
     passwordVisibility: boolean;
     onTogglePasswordVisibility: () => void;
     onSubmit: () => void;
}

export default function AuthComponent({
     username,
     password,
     onUsernameChange,
     onPasswordChange,
     passwordVisibility,
     onTogglePasswordVisibility,
     onSubmit
}: AuthContainerProps ) {

     return (
          <AuthContainer>
               <AuthForm>
                    <AuthTitle>Sign In</AuthTitle>
                    <AuthFieldContainer>
                         <AuthLabel>Username</AuthLabel>
                         <AuthInputText type='text' value={ username } onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onUsernameChange(e.target.value) } />
                    </AuthFieldContainer>
                    <AuthFieldContainer>
                         <AuthLabel>Password</AuthLabel>
                         <AuthInputPasswordDiv>
                              <AuthInputPassword type={ passwordVisibility ? "text" : "password" } value={ password } onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onPasswordChange(e.target.value) } />
                              <AuthPasswordVisibilityComponent passwordVisibility={ passwordVisibility } onEyeClick={ onTogglePasswordVisibility } />
                         </AuthInputPasswordDiv>
                    </AuthFieldContainer>
                    <AuthInputButton onClick={ onSubmit } >Send</AuthInputButton>
               </AuthForm>
          </AuthContainer>
     )
}