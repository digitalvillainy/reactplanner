import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import Modal from './modal.js';

function newModal() {
    const modalCtrl = document.querySelector('.modalCtrl');
    modalCtrl.style.display = 'block';
    const dashboard = document.querySelector('.dashboard');
    dashboard.style.overflow = 'hidden';

}

function PillarCards(props) {
    return (
        <button className={"card bg-gray-200 w-5/6 m-1 text-center text-black shadow-md rounded z-0"}
                onClick={newModal}>
            <div className={"justify-start self-center"}>
                <span><strong>{props.title}</strong></span><br/>
                <span>{props.details}</span>
            </div>
        </button>
    )
}

function PillarCardsList(props) {
    if(props.length > 0){
        const produceCards =
            props.map((prop, index) =>
                <PillarCards key={index} title={prop.title} details={prop.details}/>
            );
        return(
          <div className={"pillar rounded flex-no-wrap bg-gray-800 h-full w-56 overflow-y-auto justify-center"}>
              {produceCards.length ? produceCards : <div> </div>}
          </div>
        );
    }
    return (
        <div> </div>
    );
}

class Pillar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.index,
            cardInfo: {
                pillarId: this.props.index,
                cardTitle: '',
                cardDescription: ''
            }
        }
    }
    render() {
        return (
            <div className="bg-gray-800 rounded w-36 mx-2 mt-25 h-auto text-center text-white z-0 content-around">
                <div className={"text-center text-indigo-800 bg-white rounded"}>
                    <p className={"font-semibold"}>
                        {this.props.title}
                    </p>
                </div>
                <div className="pillar rounded flex-no-wrap bg-gray-800 h-full w-56 overflow-y-auto justify-center"
                     onDoubleClick={newModal}>
                    <PillarCardsList cardInfo={this.state.cardInfo}/>
                </div>
                <div className={"container flex self-end"}>
                    <button className={"bg-blue-500 hover:bg-blue-700 w-full h-6 text-white px-4"}
                            onClick={newModal}>
                        ADD CARD
                    </button>
                </div>
            </div>
        )
    };

}

function PillarList(props) {
    const allTitles = props.title;
    const allPillars =
        allTitles.map((element, index) =>
            <Pillar key={index} title={element}/>
        );
    return (
        <div className={"dashboard flex flex-no-wrap pt-16 justify-start bg-gray-700 min-h-full"}>
            {allPillars}
        </div>
    );
}

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            title: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange (e){
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit (e){
        this.setState({
            title: [...this.state.title, this.state.value]
        });
        this.setState({
            value: ''
        });
    }
    handleKeyPress (event) {
        if (event.key === 'Enter' && event.target.value !== '') {
            this.handleSubmit(event);
        }
    }
    render() {
        return (
            <section>
                <div className="NavBar bg-blue-700 uppercase fixed w-screen z-30 flex justify-between px-5 h-12">
                    <h2 className="text-gray-300 py-2 my-2 font-extrabold text-xl self-center">React Planner</h2>
                    <input
                        className={"appearance-none block w-2/5 bg-yellow-200 text-gray-700 border border-gray-500 rounded py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-yellow-100"}
                        type="text"
                        placeholder={"Enter Text To Create A New Pillar"}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button
                        className={"bg-green-700 text-white font-bold hover:bg-green-300 hover:text-black rounded px-4 py-1 my-2"}
                        onClick={this.handleSubmit}>
                        CREATE PILLAR
                    </button>
                </div>
                <div className={"dashboard"}>
                    <PillarList title={this.state.title}/>
                </div>
            </section>
        )
    }
}

class Workstation extends React.Component {
    render() {
        return (
            <section>
                <Dashboard/>
                <Modal/>
            </section>
        );
    }
}

ReactDOM.render(
    <Workstation/>,
    document.getElementById('root')
);
