import { useState } from "react";
import { useMutation } from "convex/react";

export const useMutationState = (mutationToRun: any) => {
  const [pending, setPending] = useState(false);
  const mutationFn = useMutation(mutationToRun);

  const mutate = async (payload: any) => {
    setPending(true);
    return await mutationFn(payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
};

// if any error occurs, remove async & await.