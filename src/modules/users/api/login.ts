import { api } from "@/lib/api";
import { MutationConfig } from "@/lib/query";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const UserLoginInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserLoginInput = z.infer<typeof UserLoginInputSchema>;

export const userLogin = ({ data }: { data: UserLoginInput }): Promise<string> => {
  return api.post("/users/login", data);
};

type UseUserLoginOptions = {
  mutationConfig?: MutationConfig<typeof userLogin>;
};

export const useUserLogin = ({ mutationConfig }: UseUserLoginOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    ...restConfig,
    mutationFn: userLogin,
  });
};