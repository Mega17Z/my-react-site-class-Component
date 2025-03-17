const affichage = document.getElementById('afficheur')

class Navbar extends React.Component {
    render(){
        return <div className="navbar">
        <h1>My <span className="partLogo">Site</span></h1>
        <ul>
            <li>Acceuil</li>
            <li>Services</li>
            <li>A Propos</li>
        </ul>
    </div>
    }
}

class Card extends React.Component {
    render(){
        return <div className="card">
                    <div className="card-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h3>{this.props.titre}</h3>
                    <p>{this.props.texte}</p>
                </div>
    }
}

class FirstSection extends React.Component{
    render(){
        return <div className="section">
                    <h1>{this.props.title}</h1>
                    <div className="cards">
                        <Card image="image/1.png" titre="Black Clover" texte="Du texte à mettre dans cette partie" />
                        <Card image="image/2.jpg" titre="Dorohedo" texte="Du texte à mettre dans cette partie" />
                        <Card image="image/3.jpg" titre="Tokyo Ghoul" texte="Du texte à mettre dans cette partie" />
                    </div>
                </div>
    }
}

class Pays extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, flags} = this.props.chaquePays

        return <div className="pays">
                    <div className="pays-image">
                        <img src={flags.png} alt="" />
                    </div>
                    <h4>{name.common}</h4>
                </div>
    }
}

class SecondSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pays: []
        }
    }

    componentDidMount(){
        fetch('https://restcountries.com/v3.1/all')
        .then(doner => doner.json())
        .then(recup => {
            this.setState({pays: recup})
            console.log(this.state.pays)
        })
        .catch(erreur => console.log(erreur))
    }

    render(){
        return <div className="section">
                    <h1>{this.props.title}</h1>
                    <div className="cards">
                        {this.state.pays.map((chakPays) => {
                            return <Pays chaquePays={chakPays} key={chakPays.name.common} />
                        })}
                    </div>
                </div>
    }
    

}

class Site extends React.Component {
    render(){
        return <div>
            <Navbar />
            <FirstSection title="Premiere Section" />
            <SecondSection title="Deuxieme Section" />
        </div>
    }
}

ReactDOM.render(<Site />, affichage);
