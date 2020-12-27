import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modal = document.querySelector("#modal-root");

export default function Modal({ src, alt, toggle }) {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const closeModal = (e) => {
    if (e.target.nodeName !== "DIV" && e.code !== "Escape") {
      return;
    }
    toggle();
  };

  return createPortal(
    <div className={s.Overlay} onClick={closeModal}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modal
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener("keydown", this.closeModal);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.closeModal);
//   }

// closeModal = (e) => {
//   if (e.target.nodeName !== "DIV" && e.code !== "Escape") {
//     return;
//   }
//   this.props.toggle();
// };

//   render() {
//     const { alt, src } = this.props;
// return createPortal(
//   <div className={s.Overlay} onClick={this.closeModal}>
//     <div className={s.Modal}>
//       <img src={src} alt={alt} />
//     </div>
//   </div>,
//   modal
// );
//   }
// }
