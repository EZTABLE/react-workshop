import React from "react";
import restaurantStore from "../store/restaurantStore";
import restaurantAction from "../action/restaurantAction";

export default class History extends React.Component{
    constructor(props, ...args){
        super(props, ...args);
        this.state = {
            total_income: 10000,
            summary: [{
                quantity: 4,
                consumption: 330,
                receivable: 122
            }]
        };
    }

    componentDidMount(){
        restaurantAction.showAllProducts(this.props);
    }

    render(){
        let {restaurantId, startDate, endDate} = this.props,
            {total_income, summary} = this.state;

        let children = summary.map(s => <Table {...s} />);

        return (
            <div>
                <h1 className="restaurant-name">{restaurantId}</h1>
                <p className="time-period">{startDate} ~ {endDate}</p>
                <div className="section section0">
                    <table className="giftcard-table">
                        <tbody>
                            <tr>
                                <td className="tar-name">Total Account Receivable</td>
                                <td className="tar-value">${total_income} TWD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section section1">
                    <h2 className="type">Total</h2>
                    {children}
                </div>
            </div>
        );
    }
}


class Table extends React.Component{
    render(){
        let {quantity, consumption, receivable} = this.props;

        return (<table className="giftcard-table">
            <thead>
                <tr>
                    <th className="subject" colSpan={2}>台北【隨意鳥地方高空景觀餐廳】觀景浪漫宵夜雙人套餐 </th>
                </tr>
            </thead>
            <tbody>
                <tr className="item-row">
                    <td className="item-name">Quantity</td>
                    <td className="item-value">{quantity}</td>
                </tr>
                <tr className="item-row">
                    <td className="item-name">Total Actual Consumption</td>
                    <td className="item-value">{consumption}</td>
                </tr>
                <tr className="item-row">
                    <td className="item-name">Total Actual Receivable</td>
                    <td className="item-value">{receivable}</td>
                </tr>
            </tbody>
        </table>)
    }
}
