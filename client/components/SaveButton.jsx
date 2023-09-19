import { useAuth0 } from "@auth0/auth0-react";
import { saveDonut } from "../api/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function SaveButton(props) {
  const { getAccessTokenSilently } = useAuth0();
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const queryClient = useQueryClient();
  const saveDonutMutation = useMutation(saveDonut, {
    onSuccess: async () => {
      queryClient.invalidateQueries(["donutList"]);
    },
  });

  async function handleSave() {
    const donut = {
      glaze: props.selectedGlaze.id,
      base: props.selectedBase.id,
      token: await getAccessTokenSilently(),
    };
    // const token = await getAccessTokenSilently()
    saveDonutMutation.mutate(donut);
    setIsSuccessVisible(true);
    setTimeout(() => {
      setIsSuccessVisible(false);
    }, 3000);
  }

  if (saveDonutMutation.isError) {
    return (
      <div className="mt-3">
        Whoops! Your donut can&apos;t be saved, try refreshing the page!
      </div>
    );
  }

  if (saveDonutMutation.isLoading) {
    return (
      <button className="mt-3 ml-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full">
        Saving...
      </button>
    );
  }

  return (
    <>
      {isSuccessVisible ? (
        <button className="mt-3 ml-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full">
          Success!
        </button>
      ) : (
        <button
          className="mt-3 ml-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full"
          onClick={handleSave}
        >
          Save donut
        </button>
      )}
    </>
  );
}
