import React from 'react'
import "./Label.css"
interface Iprops {
    state: string;
}
const Label: React.FC<Iprops> = (props: Iprops) => {
    const { state } = props;
    var name = "Label Label--".concat(state);
    return (
        <label className={name}><p id="state" >{state}</p></label>
    );
}
export default Label;
