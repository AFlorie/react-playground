## Énoncé

Modifions le code suivant (issu de la documentation) en utilisant les `composants fonctionnels`

### Input

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Le nom a été soumis : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
```

---

### [Textarea](https://fr.reactjs.org/docs/forms.html#the-textarea-tag)

```javascript
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Écrivez un essai à propos de votre élément du DOM préféré",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Un essai a été envoyé : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
```

---

### [Select](https://fr.reactjs.org/docs/forms.html#the-select-tag)

```javascript
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Votre parfum favori est : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choisissez votre parfum favori :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
```

### Bonus

Regroupez les 3 exemples en un seul formulaire

> Voir du côté de la gestion des [saisies multiples](https://fr.reactjs.org/docs/forms.html#handling-multiple-inputs)
>
> <cite>Un professeur bienveillant</cite>

---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo10
