import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'

function Interfaces(props) {
  const { updateGlaze, updateBase } = props
  return (
    <>
      <section id="hero-section">
        <h1 className="text-3xl font-bold underline">Tiff Donuts</h1>
        <DonutForm updateGlaze={updateGlaze} updateBase={updateBase} />
      </section>

      <section id="detail-section">
        <h1 className="text-3xl font-extrabold">Detail</h1>
        <DonutDetails />
      </section>
    </>
  )
}

export default Interfaces
