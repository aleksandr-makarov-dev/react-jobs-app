import { api } from "@/lib/api";
import { MutationConfig } from "@/lib/query";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const UserRegisterInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine(data => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Passwords do not match"
});

export type UserRegisterInput = z.infer<typeof UserRegisterInputSchema>;

export const userRegister = ({ data }: { data: UserRegisterInput }): Promise<string> => {
  return api.post("/users/register", data);
};

type UseUserRegisterOptions = {
  mutationConfig?: MutationConfig<typeof userRegister>;
};

export const useUserRegister = ({ mutationConfig }: UseUserRegisterOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    ...restConfig,
    mutationFn: userRegister,
  });
};