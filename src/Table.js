import React, { Component } from 'react';
import './Table.css'

class Table extends Component {
    removeCharacter() {

    }

    render(){
        const {characterData, removeCharacter} = this.props;
        return (
            <div class="Table">
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </div>
        );
    }
}

const TableHeader = () => {
    return (
    <thead>
        <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
        </tr>
        
    </thead>);
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.rpgClass}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        );
    })
    return <tbody>{rows}</tbody>
}

export default Table;