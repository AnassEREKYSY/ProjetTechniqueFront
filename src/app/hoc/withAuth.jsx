"use client";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading";
import { checkUserSession } from "@/redux/user/user.actions";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function WithAuth(Component, role = 'admin') {
    return function AuthComponent(props) {
        const dispatch = useDispatch();
        const { profile, loading_profile_error } = useSelector(state => state.user);
      
        useEffect(() => {
            if (!loading_profile_error && !profile) {
                dispatch(checkUserSession());
            }
        }, [profile, loading_profile_error]);

        if (loading_profile_error) {
            return (
                <Loading />
            );
        }

        // if (!profile || profile?.user?.role !== role) {
        //     redirect('/login');
        //     return null;
        // }

        return <Component {...props} />;
    };
}