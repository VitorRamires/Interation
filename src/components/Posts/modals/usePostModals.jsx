import { useRef } from "react";

export function usePostModals() {
  const dialogDeleteRef = useRef();
  const dialogEditRef = useRef();
  const dialogCommentRef = useRef()

  return {
    dialogDeleteRef,
    dialogEditRef,
    dialogCommentRef,
    openDeleteModal: () => dialogDeleteRef.current.showModal(),
    openEditModal: () => dialogEditRef.current.showModal(),
    openCommentModal: () => dialogCommentRef.current.showModal()
  };
}
