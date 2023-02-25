export const notificationIcons = {
  done: DoneIcon,
  deleted: CloseIcon
}

export function DoneIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      height="28"
      viewBox="0 96 960 960"
      width="28"
    >
      <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      height="28"
      viewBox="0 96 960 960"
      width="28"
    >
      <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  )
}
