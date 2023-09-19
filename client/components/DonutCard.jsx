import { delDonut } from "../api/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";

function DonutCard({ donut }) {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const delMutation = useMutation({
    mutationFn: async ({ id, token }) => delDonut(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["donutList"]);
    },
  });

  // delete
  async function handleDelete(event, id) {
    const token = await getAccessTokenSilently();
    event.preventDefault();
    console.log(donut.id);
    console.log(token);
    delMutation.mutate({ id, token });
  }

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/images/donut3.png"
        alt={`Donut base ${donut.glazeName}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {donut.baseName} base with {donut.glazeName} topping
        </h5>
        <p className="mb-3 font-normal text-gray-700">Price: ${donut.price}</p>

        <button
          onClick={(event) => handleDelete(event, donut.id)}
          className="mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full"
        >
          Delete Donut
        </button>
      </div>
    </div>
  );
}

export default DonutCard;
