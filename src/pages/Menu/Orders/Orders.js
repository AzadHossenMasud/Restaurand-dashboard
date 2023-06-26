import React from 'react';

const Orders = ({ orderList }) => {
    console.log(orderList);
    return (
        <div className=' sticky top-4 overflow-x-auto'>
            {
                orderList.length <= 0 && <h1 className=' justify-center items-center'>Not Order yet</h1>
            }
            {
                orderList.length > 0 && <>
                    <h1 className=' text-center font-bold text-lg mb-2'>Order List</h1>
                    <table className='table'>
                        <tbody>
                            {
                            orderList.map((order, index) => <tr key={index}>
                            <th>{index+1}</th>
                            <td>{order?.name} x {order?.orders} </td>
                            <td> = {order?.orders*order?.price}</td>
                            
                          </tr>)
                        }
                        <tr>
                            <th></th>
                            <th>Total(+vat)</th>
                            <th>= {parseInt(orderList.reduce((accumulator, obj) => accumulator + obj.price*obj.orders, 0))
                                }</th>
                        </tr>
                        </tbody>


                    </table>

                </>
            }
        </div>
    );
};

export default Orders;