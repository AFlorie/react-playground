// const NameForm = () => {
//   const [value, setValue] = React.useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert("Le nom a été soumis : " + value);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nom :
//         <input type="text" value={value} onChange={handleChange} />
//       </label>
//       <input type="submit" value="Envoyer" />
//     </form>
//   );
// };

// const NameForm = () => {
//   const [value, setValue] = React.useState(
//     "Écrivez un essai à propos de votre élément du DOM préféré"
//   );

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert("Un essai a été envoyé : " + value);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Essay:
//         <textarea value={value} onChange={handleChange} />
//       </label>
//       <input type="submit" value="Envoyer" />
//     </form>
//   );
// };
const Form = () => {
  const [value, setValue] = React.useState({
    name: "",
    essay: "Écrivez un essai à propos de votre élément du DOM préféré",
    perfume: "coconut",
  });

  const handleChangeName = (event) => {
    setValue({ ...value, name: event.target.value });
  };

  const handleChangeEssay = (event) => {
    setValue({ ...value, essay: event.target.value });
  };

  const handleChangePerfume = (event) => {
    setValue({ ...value, perfume: event.target.value });
  };

  const handleSubmit = (event) => {
    alert(
      `Votre nom est ${value.name}, essai : ${value.essay} et parfum favori : ${value.perfume}`
    );
    event.preventDefault();
  };
  console.log("value", value);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={value.name} onChange={handleChangeName} />
      </label>
      <label>
        Essay:
        <textarea value={value.essay} onChange={handleChangeEssay} />
      </label>
      <label>
        Choisissez votre parfum favori :
        <select value={value.perfume} onChange={handleChangePerfume}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input className="submit" type="submit" value="Envoyer" />
    </form>
  );
};

ReactDOM.render(<Form />, document.querySelector("#app"));
