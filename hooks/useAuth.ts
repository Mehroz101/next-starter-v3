"use client";
import { logout, setError, setLoading, setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import authService from "@/services/authService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { token, user, loading, error, success, isAuthenticated } = useSelector((state: RootState) => state.user);
  const queryClient = useQueryClient();
  let timer: ReturnType<typeof setTimeout>;

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: (data) => {
      dispatch(setUser({ token: data.accessToken, user: data.user }))
      router.push("/")
    },
    onError: (error: any) => {
      dispatch(setError(error?.response?.data?.message || error.message))
    },
  })
  const signupMutation = useMutation({
    mutationFn: authService.signup,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: (data) => {
      dispatch(setUser({ token: data.accessToken, user: data.user }));
    },
    onError: (err: any) => {
      dispatch(setError(err?.response?.data?.message || err.message));
    },
  });
  const forgotPasswordMutation = useMutation({
    mutationFn: authService.forgotPassword,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: () => {
      dispatch(setLoading(false));
      return {
        message: "Password reset link sent to your email",
        success: true
      }
    },
    onError: (err: any) => {
      dispatch(setError(err?.response?.data?.message || err.message));
    },
  });
  const resetPasswordMutation = useMutation({
    mutationFn: authService.resetPassword,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: () => {
      dispatch(setLoading(false));
    },
    onError: (err: any) => {
      dispatch(setError(err?.response?.data?.message || err.message));
    },
  });
  const { data: meQueryData, isSuccess } = useQuery({
    queryKey: ["me"],
    queryFn: () => authService.fetchMe(token!),
    enabled: !!token,
  },
  );
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ token, user: meQueryData.user }));
    }
  }, [isSuccess, meQueryData, dispatch, token]);

  useEffect(() => {
    if (error) {
      timer = setTimeout(() => {
        dispatch(setError(""));
      }, 5000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [error, dispatch]);

  const logoutUser = () => {
    dispatch(logout());
    queryClient.removeQueries({ queryKey: ["me"] });
    router.push("/");
  };
  return { token, user, loading, error, success, isAuthenticated, loginMutation, signupMutation, forgotPasswordMutation, resetPasswordMutation, meQuery: meQueryData, logoutUser };



}