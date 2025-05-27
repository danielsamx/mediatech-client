import Swal from "sweetalert2";

type SwalIcon = "success" | "error" | "warning" | "info" | "question";

export function infoModal(icon: SwalIcon, title: string) {
  Swal.fire({
    icon,
    title,
    showConfirmButton: false,
    timer: 1500,
  });
}
