import { Component } from "react";
import styled from "styled-components";
import imdBack from '../img/imdBack.gif'
import { IoCloseCircleOutline } from "react-icons/io5";


const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.36);

opacity: ${props => props.$open ? 1 : 0};
pointer-events: ${props => props.$open ? 'all' : 'none'};
transition: opacity .3s;
`

const DivMain = styled.div`
background-image: url(${imdBack});
background-size: cover;
background-repeat: no-repeat;
width: 550px;
height: 400px;
opacity: 1;
pointer-events: none;
margin: 0 auto;
border-radius: 15px;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);

opacity: ${props => props.$open ? 1 : 0};
pointer-events: ${props => props.$open ? 'all' : 'none'};
transform: translateY(${p => p.$open ? "0" : "40px"});
transition: opacity .3s, transform .3s;
`
const SubTitle = styled.h2`
background-color: white;
border-radius: 10px;
`

const DivWrapp = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 40px;
margin-bottom: 105px;
`

const IconD = styled.span`
background-color: white;
height: 29px;
width: 31px;
padding-top: 3px;
border-radius: 50%;
`

const CountSpan = styled.span`
background-color: white;
border-radius: 10px;
padding: 15px;
font-size: 40px;
`
const MainBtn = styled.button`
background-color: white;
border-radius: 15px;
padding: 40px 50px;
font-size: 30px;
display: flex;
justify-content: center; 
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`



export class Modal extends Component {
    state = {
        isOpen: false,
        seconds: 0,
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState(pr => ({
                seconds: pr.seconds + 1
            }), () => {
                console.log(this.state);
            })
        }, 1000)
    }

    stopTimer = () => {
        clearInterval(this.timer)
    }
    modalOpen = () => {
        this.setState({
            isOpen: true,
        })
    }
    modalClose = () => {
        this.setState({
            isOpen: false,
        })
    }

    componentDidMount() {
        console.log('Modal will mount');
        document.addEventListener('keydown', this.keyDown)
    }
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.isOpen && this.state.isOpen) {
            // this.setState({ seconds: 1 })
            this.startTimer()
            console.log('Start count');

        }

        if (prevState.isOpen && !this.state.isOpen) {
            this.stopTimer()
            console.log('Finish count');

        }
    }
    componentWillUnmount() {
        console.log('Modal will unmount');
        document.removeEventListener('keydown', this.keyDown)
        this.stopTimer()
    }

    keyDown = (e) => {
        if (e.key === 'Escape') {
            this.modalClose()
        }
    }

    formatTime = () => {
        const m = Math.floor(this.state.seconds / 60)
        const s = this.state.seconds % 60

        return `${m < 10 ? '0' +  m : m} : ${s < 10 ? '0' + s : s}`
    }

    render() {
        return (
            <>
                <Backdrop $open={this.state.isOpen} onClick={this.modalClose} />
                <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <DivMain id="div" $open={this.state.isOpen}>
                        <DivWrapp>
                            <SubTitle>🎄 “Your holiday deal starts now!”</SubTitle>
                            <IconD onClick={this.modalClose}><IoCloseCircleOutline size='25' /></IconD>
                        </DivWrapp>
                        <CountSpan>{this.formatTime()}</CountSpan>
                    </DivMain>
                </div>
                <div>
                    {!this.state.isOpen && (
                        <MainBtn onClick={this.modalOpen}>CHRISTMAS SALES</MainBtn>
                    )}
                </div></>
        )
    }
}