import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'

function Interfaces(props) {
  const { updateGlaze } = props
  return (
    <>
      <section id="hero-section">
        <h1 className="text-3xl font-bold underline">Tiff Donuts</h1>
        <DonutForm updateGlaze={updateGlaze} />
      </section>

      <section id="detail-section">
        <h1 className="text-3xl font-extrabold">Detail</h1>
        <DonutDetails />
      </section>
    </>
  )
}

export default Interfaces
