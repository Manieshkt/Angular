import React from "react";

export const Items = ({items}) => {
    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                {items.map((data, index) => <tr>
                    <td>{index + 1}</td>
                    <td>{data.product}</td>
                    <td>{data.price}</td>
                </tr>)}
            </table>
        </>
    )
}