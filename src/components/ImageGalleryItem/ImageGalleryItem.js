import { useState } from "react";
import Modal from "../Modal/Modal";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [isModal, setIsModal] = useState(false);

  const modalToggle = () => {
    setIsModal(!isModal);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={modalToggle}
      />
      {isModal && (
        <Modal src={largeImageURL} alt={tags} toggle={modalToggle}></Modal>
      )}
    </li>
  );
}

// export default class ImageGalleryItem extends Component {
//   state = {
//     isModal: false,
//   };

// modalToggle = () => {
//   const { isModal } = this.state;
//   this.setState({ isModal: !isModal });
// };
//   render() {
//     const { isModal } = this.state;
//     const { webformatURL, tags, largeImageURL } = this.props;
// return (
//   <li className={s.ImageGalleryItem}>
//     <img
//       src={webformatURL}
//       alt={tags}
//       className={s.ImageGalleryItemImage}
//       onClick={this.modalToggle}
//     />
//     {isModal && (
//       <Modal
//         src={largeImageURL}
//         alt={tags}
//         toggle={this.modalToggle}
//       ></Modal>
//     )}
//   </li>
// );
//   }
// }
