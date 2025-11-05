import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewRestaurant } from '../api';
import toast from 'react-hot-toast';

export const useAddNewRestaurant = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addNewRestaurant,
    onMutate: async (newRestaurant) => {
      await queryClient.cancelQueries({ queryKey: ['restaurants'] });
      const previousRestaurants = queryClient.getQueryData(['restaurants']);
      queryClient.setQueryData(['restaurants'], (old) => [
        ...old,
        newRestaurant,
      ]);

      return { previousRestaurants };
    },
    onError: (err, newRestaurant, onMutateResult) => {
      queryClient.setQueryData(
        ['restaurants'],
        onMutateResult.previousRestaurants
      );

      toast(
        (t) => (
          <span>
            {err.message}
            <button
              onClick={() => {
                toast.dismiss(t.id);
                mutation.mutate(newRestaurant);
              }}
            >
              재시도
            </button>
            <button onClick={() => toast.dismiss(t.id)}>닫기</button>
          </span>
        ),
        { id: '등록-실패', duration: Infinity }
      );
    },
    onSuccess: () => {
      toast.success('식당 추가 완료!');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });
  return mutation;
};
