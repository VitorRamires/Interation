import { useRef } from "react";

export function usePostModals() {
  const dialogDeleteRef = useRef();
  const dialogEditRef = useRef();

  return {
    dialogDeleteRef,
    dialogEditRef,
    openDeleteModal: () => dialogDeleteRef.current.showModal(),
    openEditModal: () => dialogEditRef.current.showModal(),
  };
}
