// React Template

// ================================================ JSX ==========================================================



function ButtonBasic(props) {
    let text;
    switch (props.val) {
        case "plus": text = "+"; break;
        case "minus": text = "-"; break;
        case "multiply": text = <span>&#x1f7a8;</span>; break;
        case "divide": text = <span>&#247;</span>; break;

        default:
            break;
    }

    return <div className="col"><button className="btn btn--basic" id={props.val}>{text}</button></div>;
}

function ButtonAdv(props) {
    let text;
    switch (props.val) {
        case "root": text = "sq root"; break;
        case "sq": text = <i>x<sup>2</sup></i>; break;
        case "reverse": text = "1/x"; break;
        case "percent": text = "%"; break;
        case "inv": text = <span>&#177;</span>; break;

        default:
            break;
    }

    return <div className="col"><button className="btn btn--basic" id={props.val}>{text}</button></div>
}
function Button(props) {
    switch (props.type) {
        case "basic":
            return ButtonBasic(props);
        case "adv":
            return ButtonAdv(props);
        case "action":
            return <div className="col"><button className="btn btn--action">{props.val}</button></div>;
        case "num":
            return <div className="col"><button className="btn btn--num">{props.val}</button></div>
        default:
            break;
    }
}

function ButtonRow(props) {
    return <div className="row">
        <Button type={props.btn1_type} val={props.btn1_val} />
        <Button type={props.btn2_type} val={props.btn2_val} />
        <Button type={props.btn3_type} val={props.btn3_val} />
        <Button type={props.btn4_type} val={props.btn4_val} />
    </div>
}

function Numpad(props) {
    return <div className="calc-numpad">
        <ButtonRow btn1_type="adv" btn1_val="percent" btn2_type="action" btn2_val="CE" btn3_type="action" btn3_val="C" btn4_type="action" btn4_val="DEL" />
        <ButtonRow btn1_type="adv" btn1_val="reverse" btn2_type="adv" btn2_val="sq" btn3_type="adv" btn3_val="root" btn4_type="basic" btn4_val="divide" />
        <ButtonRow btn1_type="num" btn1_val="7" btn2_type="num" btn2_val="8" btn3_type="num" btn3_val="9" btn4_type="basic" btn4_val="multiply" />
        <ButtonRow btn1_type="num" btn1_val="4" btn2_type="num" btn2_val="5" btn3_type="num" btn3_val="6" btn4_type="basic" btn4_val="minus" />
        <ButtonRow btn1_type="num" btn1_val="1" btn2_type="num" btn2_val="2" btn3_type="num" btn3_val="3" btn4_type="basic" btn4_val="plus" />
        <ButtonRow btn1_type="adv" btn1_val="inv" btn2_type="num" btn2_val="0" btn3_type="num" btn3_val="." btn4_type="action" btn4_val="=" />

    </div>
}


function Display(props) {
    return <div className="calc-display">
        <div id="display__history"></div>
        <div id="display__input">0</div>
    </div>
}

function CalculatorTop(props) {
    return <div className="calc-head">
        <h1 className="head__title">
            Calculator
            </h1>
        <div className="head-buttons">
            <div className="head__btn" id="min">&#x2500;</div>
            <div className="head__btn" id="full">&#9723;</div>
            <div className="head__btn head__btn--close" id="close">&#128936;</div>
        </div>
    </div>
}








let Calculator = <div className="calc">
    <CalculatorTop />
    <Display />
    <Numpad />


</div>;


// ================================================ Render ==========================================================

ReactDOM.render(Calculator, document.getElementById("root"));