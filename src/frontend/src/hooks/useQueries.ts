import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      service: string;
      preferredDate: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Backend not available");
      await actor.submitBooking(
        data.name,
        data.email,
        data.phone,
        data.service,
        data.preferredDate,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
