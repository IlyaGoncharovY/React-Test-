import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accoordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncotrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Test from "./components/test/Test";
import {Header} from "./components/testIgor/Header";
import {Body} from "./components/testIgor/Body";
import Footer from "./components/testIgor/Foter";
import {NewComponent} from "./components/testIgor/NewComponent";
import {NewButton} from "./components/testIgor/NewButton";
import {NewComponentMoney} from "./components/testIgor/NewComponentMoney";

type FilterPropsType = "all" | "dollar" | "ruble"
const App = () => {

    /*    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
        let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
        let [switchOn, setSwitchOn] = useState<boolean>(false)
        let [addText, setAddText] = useState("")*/

    /*    const students =
            [   {id: 1, name: "James", age: 8},
                {id: 2, name: "Robert", age: 18},
                {id: 3, name: "John", age: 28},
                {id: 4, name: "Michael", age: 38},
                {id: 5, name: "William", age: 48},
                {id: 6, name: "David", age: 58},
                {id: 7, name: "Richard", age: 68},
                {id: 8, name: "Joseph", age: 78},
                {id: 9, name: "Thomas", age: 88},
                {id: 10, name: "Charles", age: 98},
                {id: 10, name: "Christopher", age: 100},
            ]*/
    /*   const topCars = [
           { manufacturer:"BMW",model:'m5cs'},
           {manufacturer:"Mercedes",model:'e63s'},
           { manufacturer:"Audi",model:'rs6'}
       ]*/

    /*
        const Button1Foo = (subscriber:string, age:number, addres:string) => {
            console.log(subscriber, age, addres)
        }

        const Button2Foo = (subscriber:string) => {
            console.log(subscriber)
        }

        const Button3Foo = () => {
            console.log("im stupid Button")
        }
    */


    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }

    const DefaultValue = () => {
        setA(a = 0)
    }

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: " 100", number: " a1234567890"},
        {banknote: "dollar", nominal: " 50", number: " z1234567890"},
        {banknote: "ruble", nominal: " 100", number: " w1234567890"},
        {banknote: "dollar", nominal: " 100", number: " e1234567890"},
        {banknote: "dollar", nominal: " 50", number: " c1234567890"},
        {banknote: "ruble", nominal: " 100", number: " r1234567890"},
        {banknote: "dollar", nominal: " 50", number: " x1234567890"},
        {banknote: "ruble", nominal: " 50", number: " v1234567890"}
    ])

    const [filter, setFilter] = useState<FilterPropsType>("all")


    let currentMoney = money

    if (filter === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
    }
    if (filter === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }


    const onClickFilterHandler = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }
    return (

        <div>
            <NewComponentMoney currentMoney={money}/>


            <h1>{a}</h1>
            <button onClick={onClickHandler}> number</button>
            <button onClick={DefaultValue}> 0</button>


            {/*            <NewButton name={"MyYouTubeChanel-1"} callBack={()=>Button1Foo("vasilii", 21, "mOSCOV")}/>
            <NewButton name={"MyYouTubeChanel-2"} callBack={()=>Button2Foo("ivan")}/>
            <NewButton name={"Button"} callBack={Button3Foo}/>*/}
        </div>
    )
}
{/*            <Header title={"HEADER"}/>
            <Body title={"BODY"} />
            <Footer title={"FOOTER"}/>*/
}
{/*<NewComponent topCars={topCars}/>*/
}


{/*   <OnOff on={switchOn} onChange={setSwitchOn}/>

            <Test title={"hello"} callBack={setAddText}/>


            <UncotrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Friends"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />*/
}

/*
type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}
*/


export default App;
