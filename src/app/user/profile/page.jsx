"use client";
import WithAuth from "@/app/hoc/withAuth";
import Btn from "@/components/Button/Btn";
import Card from "@/components/Card/Card";
import Dialog from "@/components/Dialog/Dialog";
import FormInput from "@/components/FormInput/FormInput";
import { updateProfileAction } from "@/redux/user/user.actions";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { profile,loading, profile_update_success} = useSelector((state) => state.user);
  let [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState(profile?.firstName);
  const [lastName, setLastName] = useState(profile?.lastName);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch({type:"RESET_SUCCESS_ERRORS"});
    },[]);

  const dispatch = useDispatch();

  const handleUpdateProfile = () => {
    dispatch(updateProfileAction({ firstName, lastName }));
  };

  return (
    <div className="m-4 space-y-4">
      <Card>
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={
                profile?.image ??
                "https://t3.ftcdn.net/jpg/08/05/28/22/240_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"
              }
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="mr-4">
            <h1 className="text-2xl font-semibold">
              {profile?.firstName} {profile?.lastName}
            </h1>
            <p className="text-stone-500">@{profile?.userName}</p>
          </div>
          <div></div>
          <div className="ml-auto">
            <div className="flex items-center space-x-4">
              <Link href={`/user/${profile?.id}`}>
                <div className="w-40">
                  <Btn variation={"secondary"}>Voire le profile</Btn>
                </div>
              </Link>
              <button
                className="text-white p-2 border rounded-lg hover:bg-primary-100 focus:outline-none"
                onClick={open}
              >
                <PencilIcon className="w-6 h-6 text-stone-500" />
              </button>
            </div>
            <Dialog
              open={open}
              isOpen={isOpen}
              close={close}
              title="Modifier votre profile"
            >
              <div className="space-y-4 mt-4">
                {
                    profile_update_success && <div className="bg-green-100 text-green-700 p-2 rounded-lg">Profile mis à jour avec succès</div>
                }
                <FormInput label="Nom" type="text" placeholder="John" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <FormInput label="Prénom" type="text" placeholder="Doe" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <FormInput
                  label="Email"
                  type="email"
                  disabled
                  value={profile?.email}
                />
                <FormInput label="Photo de profile" type="file" />
              </div>
              <div className="mt-4">
                <Btn onClick={handleUpdateProfile} variation={"primary"} loading={loading}>
                  Enregistrer
                </Btn>
              </div>
            </Dialog>
          </div>
        </div>
      </Card>

      <Card>
        <div>
          <h1 className="text-lg font-semibold">Bio</h1>
          <p className="text-stone-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lorem ut libero malesuada feugiat. Nulla porttitor accumsan
            tincidunt. Donec sol licitudin molestie malesuada.
          </p>
        </div>
      </Card>
      <Card>
        <div>
          <h1 className="text-lg font-semibold">Modifier le mot de passe</h1>
          <div className="space-y-4 mt-4 w-1/2">
            <FormInput label="Ancien mot de passe" type="password" />
            <FormInput label="Nouveau mot de passe" type="password" />
            <FormInput label="Confirmer le mot de passe" type="password" />
          </div>
          <div className="mt-4 w-1/2">
            <Btn variation={"primary"}>Enregistrer</Btn>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default WithAuth(Profile, "USER");
