import {
  MdHome,
  MdCable,
  MdDevices,
  MdMemory,
  MdFormatListBulleted,
  MdSettingsInputAntenna,
  MdSettingsInputHdmi,
  MdKeyboard,
  MdDesktopWindows,
  MdDeveloperBoard,
  MdComputer,
  MdPrint,
  MdSmartphone,
  MdStorage,
  MdTv,
  MdMic,
  MdInventory2
} from 'react-icons/md'

export const TOPICS = {
  inicio: <MdHome className="icon" />,
  electrónica: <MdCable className="icon" />,
  informática: <MdDevices className="icon" />,
  hardware: <MdMemory className="icon" />,
  'todos los productos': <MdFormatListBulleted className="icon" />
}

export const CATEGORIES = {
  redes: <MdSettingsInputAntenna className="icon" />,
  audio: <MdMic className="icon" />,
  'tarjetas gráficas': <MdSettingsInputHdmi className="icon" />,
  teclados: <MdKeyboard className="icon" />,
  monitores: <MdDesktopWindows className="icon" />,
  'placas madre': <MdDeveloperBoard className="icon" />,
  notebooks: <MdComputer className="icon" />,
  impresoras: <MdPrint className="icon" />,
  procesadores: <MdMemory className="icon" />,
  'memorias RAM': <MdInventory2 className="icon" />,
  smartphones: <MdSmartphone className="icon" />,
  almacenamiento: <MdStorage className="icon" />,
  televisiones: <MdTv className="icon" />
}
