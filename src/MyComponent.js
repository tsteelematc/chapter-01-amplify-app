import React from 'react'

const MyComponent = (props) => {
    return (
        <div
            style={styles.outsideDiv}
        >
            <h1 
                style={styles.heading}
            >
                My Component ! ! !
            </h1>
            <ul
                style={styles.list}
            >
                <li>Tom</li>
                <li>Taylor</li>
                <li>{props.foo}</li>
                {/* {props.people.map(x => `<li>${x}</li>`)} */}
                {props.people.map(x => <li>{x}</li>)}
            </ul>
        </div>
    )
}

const styles = {
    heading: {
        color: 'red'
    }
    , outsideDiv: {
        padding: 10
    }
    , list: {
        marginLeft: -20
        , backgroundColor: 'LightGray'
    }
};

export default MyComponent;