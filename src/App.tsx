import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accoordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncotrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*  <OnOff on={switchOn} onChange={setSwitchOn}/>*/}


            <UncotrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Friends"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />

        </div>
    );
}
type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
