export interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginPageProps {
  onSubmit?: (values: LoginFormValues) => Promise<void> | void;
  onForgotPassword?: () => void;
  onContactAdmin?: () => void;
}

export interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface SignUpPageProps {
  onSubmit?: (values: SignUpFormValues) => Promise<void> | void;
  onSignInClick?: () => void;
}

