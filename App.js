import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Youssoupha Seye",
        bio: "Développeur web passionné par les nouvelles technologies.",
        imgSrc: "me.jpg",
        profession: "Développeur Web"
      },
      show: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className="App container text-center mt-5">
        <button className="btn btn-primary mb-3" onClick={this.toggleShow}>
          {show ? "Cacher Profil" : "Afficher Profil"}
        </button>
        {show && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} className="img-thumbnail" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <div>Temps écoulé depuis le montage : {mountedTime} secondes</div>
      </div>
    );
  }
}

export default App;



