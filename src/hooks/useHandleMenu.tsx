import { useEffect } from "react"
import { menuStore } from "../store/menuStore"

export const useHandleMenu = () => {
  const {isOpen, setOpen} = menuStore(set=>(set))

  const handleOpenMenu = () => {
    if (isOpen!==true) { setOpen(true)}
  }
  const handleCloseMenu = () => {
    if (isOpen===true) { setOpen(false)}
  }
  return {isOpen, handleOpenMenu, handleCloseMenu}
}