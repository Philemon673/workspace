import { useState, type ChangeEvent, type FormEvent } from "react";
import { Checkbox } from "../components/ui/Checkbox";
import { useNavigate } from "react-router-dom";
import { InputField } from "../components/ui/InputField";
import { Logo } from "../assets/illustrations/Logo";
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
} from "../assets/icons";
import type { SignUpFormValues, SignUpPageProps } from "./types";

type FormErrors = Partial<Record<keyof SignUpFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (v: SignUpFormValues): FormErrors => {
  const err: FormErrors = {};

  if (!v.fullName.trim()) {
    err.fullName = "Name is required";
  }

  if (!v.email.trim()) {
    err.email = "Email is required";
  } else if (!EMAIL_RE.test(v.email)) {
    err.email = "Email is invalid";
  }

  if (!v.password.trim()) {
    err.password = "Password is required";
  } else if (v.password.length < 6) {
    err.password = "Password must be at least 6 characters";
  }

  if (!v.confirmPassword.trim()) {
    err.confirmPassword = "Please confirm your password";
  } else if (v.confirmPassword !== v.password) {
    err.confirmPassword = "Passwords do not match";
  }

  if (!v.acceptTerms) {
    err.acceptTerms = "You must accept the Terms & Privacy Policy";
  }

  return err;
};

const linkButton =
  "cursor-pointer border-0 bg-transparent p-0 text-brand font-medium hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brand/45";

export const SignUpPage = ({ onSubmit, onSignInClick }: SignUpPageProps) => {
  const [form, setForm] = useState<SignUpFormValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    try {
      await onSubmit?.(form);
    } catch {
      setSubmitError("We couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const passwordToggle = (
    <button
      type="button"
      aria-label={showPassword ? "Hide password" : "Show password"}
      onClick={() => setShowPassword((v) => !v)}
      className="grid cursor-pointer place-items-center border-0 bg-transparent p-1 text-navy"
    >
      {showPassword ? <EyeIcon /> : <EyeOffIcon />}
    </button>
  );

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-page-from to-page-to p-6 font-sans text-ink lg:px-[4vw] lg:py-0">
      {/* Decorative background shapes */}
      <span className="pointer-events-none absolute -left-[120px] -top-[240px] h-[420px] w-[420px] rounded-full bg-blob opacity-60" />
      <span className="pointer-events-none absolute -bottom-[380px] left-[28%] h-[700px] w-[700px] rounded-full bg-blob opacity-45" />
      <span className="pointer-events-none absolute -bottom-[200px] -right-[140px] h-[380px] w-[380px] rounded-full bg-blob-strong" />

      <main className="relative z-20 w-full max-w-[612px] rounded-[22px] bg-white px-6 pb-8 pt-10 shadow-card lg:px-12 lg:pb-10 lg:pt-12">
        <div className="mb-8 flex items-center justify-center gap-3 text-[32px] font-semibold tracking-tight text-navy lg:text-[40px]">
          <Logo className="h-[50px] w-20" />
          <span>WorkTrack</span>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            id="fullName"
            name="fullName"
            label="Full name"
            boldLabel
            icon={<UserIcon />}
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email address"
            boldLabel
            icon={<MailIcon />}
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            icon={<LockIcon />}
            autoComplete="new-password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            trailing={passwordToggle}
          />

          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            label="Confirm password"
            icon={<LockIcon />}
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <div className="mb-8">
            <Checkbox
              label="I agree to the Terms & Privacy Policy"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
            />
            {errors.acceptTerms && (
              <p role="alert" className="mt-2 text-sm text-danger">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          {submitError && (
            <p role="alert" className="-mt-2 mb-5 text-base text-danger">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex h-[60px] w-full cursor-pointer items-center justify-center gap-3.5 rounded-[10px] border-0 bg-brand text-xl font-medium text-white shadow-button transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brand/45 disabled:cursor-progress disabled:opacity-70"
          >
            {loading ? "Creating account…" : "Create account"}
            <ArrowRightIcon />
          </button>
        </form>

        <div className="my-7 flex items-center gap-[18px] text-lg text-muted before:h-px before:flex-1 before:bg-line before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']">
          or
        </div>

        <p className="m-0 text-center text-[18px] text-ink">
          Already have an account?{" "}
           <span>
            <button
              type="button"
              onClick={() => navigate("/login" ) } 
              className={linkButton}
            >
              Sign in
            </button>
          </span>
        </p>
      </main>
    </div>
  );
};

export default SignUpPage;
