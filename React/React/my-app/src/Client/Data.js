import React from "react";

export const Data = ({data}) => {
    return (
        <>
            <table style={{ border: '2px solid black' }} >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
                {data.map((data, index) => <tr key={index} >
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.salary}</td>
                </tr>
                )}
            </table>
        </>
    )
}