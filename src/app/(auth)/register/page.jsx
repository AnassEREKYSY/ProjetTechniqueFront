"use client";
import Btn from "@/components/Button/Btn";
import FormInput from "@/components/FormInput/FormInput";
import { loginAction } from "@/redux/user/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, profile, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
  };
  // useEffect(() => {
  //   if (profile) {
  //     router.push("/admin/overview");
  //   }
  // }, [profile]);

  useEffect(() => {
    dispatch({ type: "RESET_ERROR" });
    dispatch({ type: "RESET_SUCCESS" });
  }, []);

  return (
    <>
      <div>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-2 md:mb-3">
          Créer un compte
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Vueillez vous inscrire pour accéder à votre compte.
        </p>
      </div>

      {success && (
        <div className="text-green-600 dark:text-green-400 text-sm">
          Vous êtes connecté avec succès.
        </div>
      )}

      {error && (
        <div className="text-red-600 dark:text-red-400 text-sm">{error}</div>
      )}

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="Identifiant"
            id="email"
            type="text"
            required
            name="username"
            placeholder="Saisissez votre identifiant"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <FormInput
            label="Email"
            id="email"
            type="email"
            required
            name="email"
            placeholder="Saisissez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <FormInput
            label="Mot de passe"
            id="password"
            type="password"
            placeholder="••••••••"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Btn
          type="submit"
          variation="primary"
          disabled={loading}
          tooltip="Connexion"
          loading={loading}
        >
          Créer un compte
        </Btn>

        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Déjà inscrit ?{" "}
          <Link
            href="/login"
            className="text-primary-800 font-semibold hover:underline dark:text-primary-400"
          >
            Connectez-vous
          </Link>
        </p>
      </form>
    </>
  );
}
