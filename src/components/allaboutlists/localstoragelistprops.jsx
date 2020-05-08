export default function Properties(props){
    return (
    <div>
        <table>
        <tr>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.expdate}</td>
        <td>{props.location}</td>
        </tr>
        </table>
    </div>
    )}