import { Eye, EyeOff  } from "lucide-react";
import { useTheme } from "styled-components";

type AuthPasswordVisibilityComponentProps = {
     passwordVisibility: boolean;
     onEyeClick: () => void;
}

export default function AuthPasswordVisibilityComponent({
     passwordVisibility,
     onEyeClick
}: AuthPasswordVisibilityComponentProps) {

     const theme = useTheme();

     return passwordVisibility ?
          <EyeOff onClick={ onEyeClick } style={ { alignSelf: 'center', color: theme.textSecondary } } /> :
          <Eye onClick={ onEyeClick } style={ { alignSelf: 'center', color: theme.textSecondary } } />
}