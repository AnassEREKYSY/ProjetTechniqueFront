"use client";
import Btn from "@/components/Button/Btn";
import FormInput from "@/components/FormInput/FormInput";
import { resetPasswordAction } from "@/redux/user/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");

  const { loading_reset_password, reset_password_success, reset_password_error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = new URLSearchParams(window.location.search).get("email");
    dispatch(resetPasswordAction({email, resetToken:pin, newPassword:password}));
  };
  const router = useRouter();
  useEffect(() => {
    if(reset_password_success){
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  } , [reset_password_success]);

  useEffect(() => {
    dispatch({ type: "RESET_ERROR" });
    dispatch({ type: "RESET_SUCCESS" });
  } , []);

  return (
    <>
      <div>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-2 md:mb-3">
          Réinitialisation
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Saisissez votre code reçu par email pour réinitialiser votre mot
          de passe.
        </p>
      </div>

      {reset_password_success && (
        <div className="text-green-600 dark:text-green-400 text-sm">
          Votre mot de passe a été réinitialisé avec succès. Vous allez être redirigé vers la page de connexion.
        </div>
      )}

      {reset_password_error && (
        <div className="text-red-600 dark:text-red-400 text-sm">{reset_password_error}</div>
      )}

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="Code verification"
            id="pin"
            type="text"
            required
            name="pin"
            placeholder="Saisissez votre code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            label="Nouveau mot de passe"
            id="password"
            type="password"
            required
            name="password"
            autoComplete="new-password"
            placeholder="Saisissez votre nouveau mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Btn type="submit" variation="primary" loading={loading_reset_password}>
          Réinitialiser
        </Btn>

        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Retour à la page de connexion{" "}
          <Link
            href="/login"
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            Connexion
          </Link>
        </p>
      </form>
    </>
  );
}
