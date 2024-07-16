"use client";
import Btn from "@/components/Button/Btn";
import FormInput from "@/components/FormInput/FormInput";
import { forgot_password } from "@/redux/user/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const { loading_forgot_password, forgot_password_success} = useSelector((state) => state.user);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgot_password(email));
  };

  useEffect(() => {
    if (forgot_password_success) {
      router.push("/resetpassword?email=" + email);
    }
  }, [forgot_password_success]);

  useEffect(() => {
    dispatch({ type: "RESET_ERROR" });
    dispatch({ type: "RESET_SUCCESS" });
  }
  , []);


  return (
    <>
      <div>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-2 md:mb-3">
          Mot de passe oublié ?
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Saisissez votre identifiant ou adresse email pour réinitialiser votre mot de passe.
        </p>
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="Identifiant ou email"
            id="email"
            type="text"
            required
            name="username"
            placeholder="Saisissez votre identifiant"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Btn type="submit" variation="primary" loading={loading_forgot_password}>
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
