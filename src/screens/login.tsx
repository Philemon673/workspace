import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../components/ui/Checkbox";
import { InputField } from "../components/ui/InputField";
import type { LoginFormValues, LoginPageProps } from "./types";
import { Logo } from "../assets/illustrations/Logo";
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  InfoIcon,
} from "../assets/icons";

const linkButton =
  "cursor-pointer border-0 bg-transparent p-0 text-brand font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded transition";

export const LoginPage = ({
  onSubmit,
  onForgotPassword,
  onContactAdmin,
}: LoginPageProps) => {
  const [form, setForm] = useState<LoginFormValues>({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onSubmit?.(form);
    } catch {
      setError(
        "We couldn't sign you in. Check your email and password and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative grid min-h-screen grid-cols-1 items-center gap-10 overflow-hidden bg-gradient-to-br from-page-from to-page-to p-6 font-sans text-ink lg:px-[4vw] lg:py-0">
      {/* decorative background shapes */}
      <span className="pointer-events-none absolute -left-[120px] -top-[240px] h-[420px] w-[420px] rounded-full bg-blob opacity-60" />
      <span className="pointer-events-none absolute -bottom-[380px] left-[28%] h-[700px] w-[700px] rounded-full bg-blob opacity-45" />
      <span className="pointer-events-none absolute -bottom-[200px] -right-[140px] h-[380px] w-[380px] rounded-full bg-blob-strong" />

      <main className="relative z-20 w-full max-w-[612px] justify-self-center rounded-[22px] bg-white px-6 pb-8 pt-10 shadow-card lg:px-12 lg:pb-10 lg:pt-14">
        <div className="mb-9 flex items-center justify-center gap-3 text-[32px] font-semibold tracking-tight text-navy lg:mb-14 lg:text-[40px]">
          <Logo className="h-[50px] w-20" />
          <span>WorkTrack</span>
        </div>

        <form onSubmit={handleSubmit} noValidate>
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
            required
          />

          <InputField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            icon={<LockIcon />}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            trailing={
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="grid cursor-pointer place-items-center border-0 bg-transparent p-1 text-navy"
              >
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            }
          />

          <div className="mb-8 mt-1 flex items-center justify-between text-base sm:text-lg">
            <Checkbox
              label="Remember me"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={onForgotPassword}
              className={linkButton}
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <p role="alert" className="-mt-2 mb-5 text-base text-danger">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex h-[60px] w-full cursor-pointer items-center justify-center gap-3.5 rounded-[10px] border-0 bg-brand text-xl font-medium text-white shadow-button transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brand/45 disabled:cursor-progress disabled:opacity-70"
          >
            {loading ? "Signing in…" : "Sign in"}
            <ArrowRightIcon />
          </button>
        </form>

        <div className="my-8 flex items-center gap-[18px] text-lg text-muted before:h-px before:flex-1 before:bg-line before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']">
          or
        </div>

        <p className="m-0 flex items-center justify-center gap-3 text-base text-ink sm:text-[18px]">
          <InfoIcon />
          <span>
            first time?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup" ) } 
              className={linkButton}
            >
              Sign up
            </button>
          </span>
        </p>
      </main>
    </div>
  );
};

export default LoginPage;