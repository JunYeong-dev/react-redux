import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props){
    console.log(props);
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        setText("");
    }
    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul></ul>
    </>
    );
}

// redux state로 부터 component에 prop를 전달하는 function
function mapStateToProps(state, ownProps){
    // return 해주는 object는 connect로 연결해 준 곳으로 감
    return { toDos: state }
}

// connect : components와 store를 연결시켜줌
export default connect(mapStateToProps)(Home);