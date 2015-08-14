import React from "react";
import restaurantStore from "../store/restaurantStore";
import restaurantAction from "../action/restaurantAction";

export default class History extends React.Component{
    render(){
        return (
            <div>
                <h1 className="restaurant-name">323 Restaurant</h1>
                <p className="time-period">2015.08.01 ~ 2015.08.31</p>
                <div className="section section0">
                    <table className="giftcard-table">
                        <tbody>
                            <tr>
                                <td className="tar-name">Total Account Receivable</td>
                                <td className="tar-value">$68,512 TWD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section section1">
                    <h2 className="type">Total</h2>
                    <table className="giftcard-table">
                        <thead>
                            <tr>
                                <th className="subject" colSpan={2}>台北【隨意鳥地方高空景觀餐廳】觀景浪漫宵夜雙人套餐 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="item-row">
                                <td className="item-name">Quantity</td>
                                <td className="item-value">1</td>
                            </tr>
                            <tr className="item-row">
                                <td className="item-name">Total Actual Consumption</td>
                                <td className="item-value">3288</td>
                            </tr>
                            <tr className="item-row">
                                <td className="item-name">Total Actual Receivable</td>
                                <td className="item-value">2992</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="giftcard-table">
                        <thead>
                            <tr>
                                <th className="subject" colSpan={2}>台北【隨意鳥地方高空景觀餐廳】VIP 滿額贈 ( $2000 抵 $2200 )</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="item-row">
                                <td className="item-name">Quantity</td>
                                <td className="item-value">35</td>
                            </tr>
                            <tr className="item-row">
                                <td className="item-name">Total Actual Consumption</td>
                                <td className="item-value">70000</td>
                            </tr>
                            <tr className="item-row">
                                <td className="item-name">Total Actual Receivable</td>
                                <td className="item-value">63700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
