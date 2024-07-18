"use client";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading";
import { checkUserSession } from "@/redux/user/user.actions";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function WithAuth(Component, role = 'admin') {
    return function AuthComponent(props) {
        const dispatch = useDispatch();
        const { profile, profile_error } = useSelector(state => state.user);
      
        useEffect(() => {
            if (!profile_error && !profile) {
                dispatch(checkUserSession());
            }
        }, [profile, profile_error]);

        if (profile_error) {
            return (
                <Loading />
            );
        }

        
        // if (!profile || profile?.role.toLowerCase() !== role.toLowerCase()) {
        //     redirect('/login');
        //     return null;
        // }
        if (!profile ) {
            redirect('/login');
            return null;
        }

        return <Component {...props} />;
    };
}