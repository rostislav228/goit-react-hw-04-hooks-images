import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImadeGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import s from "./App.module.css";

function App() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (page === 1) {
      return;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [query, page]);

  const incrementPage = () => {
    setPage(page + 1);
  };
  const nameChange = (newName) => {
    console.log(newName);
    // newName есть, и будет равнятся введенной строке
    setName(newName);
    console.log(name);
    // name не обновился, даже через 10 сек, но если нажать на form Searchbar, то name обновится на старое занчение
    setTimeout(() => {
      console.log(name);
    }, 10000);
    setQuery([]);
    setStatus("pending");
    setPage(1);

    searchName().then(() => {
      if (message) {
        setStatus("rejected");
        return;
      }
      setStatus("resolved");
    });
  };

  const addRequest = () => {
    setStatus("pending");
    incrementPage();

    searchName().then(() => {
      setStatus("resolved");
    });
  };

  const searchName = () => {
    console.log(name);
    console.log(page);
    setMessage("");
    return fetch(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=19045968-692e1124089d7d7c1e82b7642&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.hits.length === 0 && page === 1) {
          setMessage("Упс... Такого у нас нет");
          return;
        }

        if (data.hits.length >= 0 && data.hits.length < 12 && page > 1) {
          setMessage("Вы посмотрели слишком много, всё закончилось");
        }

        setQuery([...query, ...data.hits]);
      });
  };

  // проверки для return

  if (status === "idle") {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={nameChange}></Searchbar>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={nameChange}></Searchbar>
        <ImadeGallery query={query}></ImadeGallery>
        <Loader></Loader>
      </div>
    );
  }

  if (status === "resolved") {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={nameChange}></Searchbar>
        <ImadeGallery query={query}></ImadeGallery>
        {message ? message : <Button increment={addRequest}></Button>}
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={nameChange}></Searchbar>
        <div>{message}</div>
      </div>
    );
  }

  return (
    <div className={s.App}>
      <Searchbar onSubmit={nameChange}></Searchbar>
      Упс... Что-то пошло не по плану
    </div>
  );
}

// class App extends Component {
//   state = {
//     name: "",
//     query: [],
//     page: 1,
//     message: "",
//     status: "idle",
//   };

// incrementPage() {
//   setState(() => ({ page: page + 1 }));
// }

// resetPage() {
//   setState({ page: 1 });
// }

// componentDidUpdate(prevProps, prevState) {
//   if (query !== prevquery && page !== 1) {
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });
//   }
// }

// nameChange = async (name) => {
//   await setState({ name, query: [], status: "pending" });
//   resetPage();

//   searchName().then(() => {
//     if (message) {
//       setState({ status: "rejected" });
//       return;
//     }
//     setState({ status: "resolved" });
//   });
// };

// addRequest = async () => {
//   await setState({ status: "pending" });
//   await incrementPage();

//   searchName().then(() => {
//     setState({ status: "resolved" });
//   });
// };

// searchName() {
//   setState({ message: "" });
//   return fetch(
//     `https://pixabay.com/api/?q=${name}&page=${page}&key=19045968-692e1124089d7d7c1e82b7642&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then((r) => r.json())
//     .then((data) => {
//       if (data.hits.length === 0 && page === 1) {
//         setState({ message: "Упс... Такого у нас нет" });
//         return;
//       }

//       if (
//         data.hits.length >= 0 &&
//         data.hits.length < 12 &&
//         page > 1
//       ) {
//         setState({
//           message: "Вы посмотрели слишком много, всё закончилось",
//         });
//       }

//       setState(() => ({
//         query: [...query, ...data.hits],
//       }));
//     });
// }

//   render() {
//     const { status, message } = state;

// if (status === "idle") {
//   return (
//     <div className={s.App}>
//       <Searchbar onSubmit={nameChange}></Searchbar>
//     </div>
//   );
// }

// if (status === "pending") {
//   return (
//     <div className={s.App}>
//       <Searchbar onSubmit={nameChange}></Searchbar>
//       <ImadeGallery query={query}></ImadeGallery>
//       <Loader></Loader>
//     </div>
//   );
// }

// if (status === "resolved") {
//   return (
//     <div className={s.App}>
//       <Searchbar onSubmit={nameChange}></Searchbar>
//       <ImadeGallery query={query}></ImadeGallery>
//       {message ? message : <Button increment={addRequest}></Button>}
//     </div>
//   );
// }

// if (status === "rejected") {
//   return (
//     <div className={s.App}>
//       <Searchbar onSubmit={nameChange}></Searchbar>
//       <div>{message}</div>
//     </div>
//   );
// }

// return (
//   <div className={s.App}>
//     <Searchbar onSubmit={nameChange}></Searchbar>
//     Упс... Что-то пошло не по плану
//   </div>
// );
//   }
// }

export default App;
