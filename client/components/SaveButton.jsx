import { useAuth0 } from '@auth0/auth0-react'
import { saveDonut } from '../api/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// set up a mutation for saving
// kinda have a little a loading thing being like "ur donut is saving..."
// on success have a "donut is saved"???

export default function SaveButton(props) {
  const { getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const saveDonutMutation = useMutation(saveDonut, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['donutList'])
    },
  })

  async function handleSave() {
    const donut = {
      glaze: props.selectedGlaze.id,
      base: props.selectedBase.id,
    }
    const token = await getAccessTokenSilently()
    saveDonutMutation.mutate({ token, donut })
  }

  if (saveDonutMutation.isLoading) {
    return (
      <button className="mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full">
        Saving...
      </button>
    )
  }

  return (
    <>
      <button
        className="mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full"
        onClick={handleSave}
      >
        Save your donut
      </button>
    </>
  )
}
