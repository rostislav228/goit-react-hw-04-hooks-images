import { useState } from "react";
import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    onSubmit(name);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={submitHandler}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeHandler}
        />
      </form>
    </header>
  );
}

// class Searchbar extends Component {
//   state = {
//     name: "",
//   };

// changeHandler = (e) => {
//   this.setState(() => ({
//     name: e.target.value,
//   }));
// };

// submitHandler = (e) => {
//   e.preventDefault();

//   this.props.onSubmit(this.state.name);
// };

//   render() {
// return (
//   <header className={s.Searchbar}>
//     <form className={s.SearchForm} onSubmit={this.submitHandler}>
//       <button type="submit" className={s.SearchFormButton}>
//         <span className={s.SearchFormButtonLabel}>Search</span>
//       </button>

//       <input
//         className={s.SearchFormInput}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={this.changeHandler}
//       />
//     </form>
//   </header>
// );
//   }
// }

export default Searchbar;
