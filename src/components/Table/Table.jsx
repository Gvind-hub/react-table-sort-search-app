import React from 'react';
import cn from 'classnames';


import './Table.scss'

const Table = ({data, sortData, sortType, sortedField, onSelect, selectedUser}) => {
    return (
        <table className="table">
            <thead>
            <tr className="table__header">
                <th className="table__header-raw">
                    <span className={cn(`table__header-title ${sortType}`, {"sorted": sortedField === 'id'})} onClick={() => sortData('id')}>ID</span>
                </th>
                <th className="table__header-raw">
                    <span className={cn(`table__header-title ${sortType}`, {"sorted": sortedField === 'firstName'})}
                          onClick={() => sortData('firstName')}>First Name</span>
                </th>
                <th className="table__header-raw">
                    <span className={cn(`table__header-title ${sortType}`, {"sorted": sortedField === 'lastName'})}
                          onClick={() => sortData('lastName')}>Last Name</span>
                </th>
                <th className="table__header-raw">
                    <span className={cn(`table__header-title ${sortType}`, {"sorted": sortedField === 'email'})}
                          onClick={() => sortData('email')}>Email</span>
                </th>
                <th className="table__header-raw">
                    <span className={cn(`table__header-title ${sortType}`, {"sorted": sortedField === 'phone'})}
                          onClick={() => sortData('phone')}>Phone</span>
                </th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr className={cn("table__raw", {'selected': index === selectedUser})} key={index} onClick={() => onSelect(index)}>
                    <td className="table__cell">{item.id}</td>
                    <td className="table__cell">{item.firstName}</td>
                    <td className="table__cell">{item.lastName}</td>
                    <td className="table__cell">{item.email}</td>
                    <td className="table__cell">{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};


export default Table;