import vincent from "../assets/vincent.svg";

function ContentArea() {
    return (
        <div className="content-wrapper">
            <div className="content-area-sec-one">
                <div className="content-info">
                    <SubTitle/>
                    <MainTitle/>
                    <div style={{height: '100px', width: '100px'}}> </div>
                </div>
                <div className="content-image">
                    <img src={vincent} alt="Vincent Michuki Software Developer"/>
                </div>
            </div>
        </div>
    );
}


function SubTitle() {
    return (
        <div className="sub-title">
            <span>
            </span>
            <strong>Vincent Michuki</strong>
        </div>
    );
}

function MainTitle() {
    return (
        <h1 className="main-title">
            Hello, My name's <span>Vincent</span>. <br/>
            Am a <span>Visual Designer</span> and a <br/>
            <span>Frontend</span> Engineer
        </h1>
    );
}

export default ContentArea;
