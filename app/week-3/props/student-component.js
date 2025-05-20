

export default function StudentComponent(props){
    return(
        <div className="bg-blue-300 text-gray-600 border-2
         border-green-700 w-40 m-3 p-2 rounded inline-block">
            <h3 className="text-indigo-700 text-2xl font-bold font-serif">{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.sCity}</p>
        </div>
    );
}