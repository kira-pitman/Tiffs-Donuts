import { useSearchParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { saveDonut } from '../api/apiClient'

export default function SaveButton(props) {
  // console.log(props.selectedBase.id, props.selectedGlaze.id)
  // const [searchParams, setSearchParams] = useSearchParams()
  const { getAccessTokenSilently } = useAuth0()

  async function handleSave() {
    const donut = {
      glaze: props.selectedGlaze.id,
      base: props.selectedBase.id,
    }
    const token = await getAccessTokenSilently()
    saveDonut(token, donut)
  }
  return (
    <button
      className="mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full"
      onClick={handleSave}
    >
      Save your donut
    </button>
  )
}
