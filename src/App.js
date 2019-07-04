import React, {Component} from 'react';
import CustomizedSlider from './Slider';
import axios from 'axios';
import DisplayGrid from './DisplayGrid';

import './Slider.css';

class App extends Component {
    constructor (props){
        super(props);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.getDataToDisplay = this.getDataToDisplay.bind(this);
        this.state = {
            data : null,
            amount: 500,
            months: 6
        }
    }

    getDataToDisplay = () =>{
        let url = 'https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amount+'&numMonths='+this.state.months;
        axios.get(url)
        .then(res => {
        //const persons = res.data;
        this.setState({ 
            data :res.data,
        });
      })
    }

    onAmountChange = (event, value) => {
        this.setState({
            amount : value,
        })
        this.getDataToDisplay();   
    }
    onMonthChange = (event, value) => {
        this.setState({
            months : value,
        })
        this.getDataToDisplay();
    }
    render() {
        const marksAmount = [
            {
              value: 500,
              label: '500$',
            },
            {
              value: 5000,
              label: '5000$',
            },
          ];
          const marksMonth = [
            {
              value: 6,
              label: '6M',
            },
            {
              value: 24,
              label: '24M',
            },
          ];
        return (
            <div className="container">
                <div className="childCss sliders">
                    <CustomizedSlider label='Loan Amount' min={500} max={5000} ref='amount'  marks={marksAmount} onChange={this.onAmountChange} />
                    <CustomizedSlider label='Tenure (months)' min={6} max={24} ref='months' marks={marksMonth} onChange={this.onMonthChange} />
                </div>
                <div className="childCss">
                    <DisplayGrid data={this.state.data} />
                </div>
            </div>

        );
    }
}

export default App;