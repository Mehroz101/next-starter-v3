import { logout, setError, setLoading, setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import authService from "@/services/authService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, user, loading, error } = useSelector((state: RootState) => state.user);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: (data) => dispatch(setUser({ token: data.token, user: data.user })),
    onError: (error: any) => dispatch(setError(error?.response?.data?.message || error.message)),
  })
  const signupMutation = useMutation({
    mutationFn: authService.signup,
    onMutate: () => dispatch(setLoading(true)),
    onSuccess: (data) => {
      dispatch(setUser({ token: data.token, user: data.user }));
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

  const logoutUser = () => {
    dispatch(logout());
    queryClient.removeQueries({ queryKey: ["me"] });
  };
  return { token, user, loading, error, loginMutation, signupMutation, meQuery: meQueryData, logoutUser };



}