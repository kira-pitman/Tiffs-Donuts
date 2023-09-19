import { Canvas } from '@react-three/fiber'
import SavedDonuts from '../components/SavedDonuts'
import { OrbitControls } from '@react-three/drei'

function DonutCard({ donut }) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8">
      <div
        key={donut.id}
        className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      >
        <Canvas
          shadows
          camera={{
            fov: 3.2,
            near: 0.1,
            far: 1000,
            position: [3, 3, 5],
          }}
          style={{
            background: 'rgb(249, 249, 249)',
            borderRadius: '0px 80px 80px 0px',
            // width: '400px',
            // marginLeft: donut.id % 2 == 0 ? '40px' : '200px',
            // marginBottom: '-30px',
            // height: '230px',
          }}
        >
          <OrbitControls enableZoom={false} />
          <SavedDonuts
            glazeColorCode={donut.glazeColor}
            baseColorCode={donut.baseColor}
          />
        </Canvas>
      </div>

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {donut.baseName} base with {donut.glazeName} topping
        </h5>
        <p className="mb-3 font-normal text-gray-700">Price: ${donut.price}</p>
      </div>
    </div>
  )
}

export default DonutCard
