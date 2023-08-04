import { Ring } from '@uiball/loaders'

export default function Loader({ trigger }) {
  return (
    <div className="loader" style={{ display: trigger ? 'flex' : 'none' }}>
      <Ring size={70} lineWeight={3} speed={2} color="#7c828d2a" />
    </div>
  )
}
