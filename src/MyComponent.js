import React, {useState, useEffect} from 'react'

const MyComponent = (props) => {

    const [people, setPeople] = useState([
        'Tom'
        , 'Taylor'
        , props.foo
        , ...props.people
    ]);

    useEffect(
        () => {
            document.title = people.length
        }
        //, [] // Empty array means call it once ! ! !
        , [people] // With our state property, it will get called each time the state property changes ! ! !
    );

    const handleHeadingClick = (e) => {
        //props.people.push('What ? ? ?');
        //props.people = [...props.people, 'What ? ? ?'];
        //console.log(props.people);
        
        setPeople([...people, 'What ? ? ?']);
        console.log(people);
    };

    return (
        <div
            style={styles.outsideDiv}
        >
            <h1 
                style={styles.heading}
                onClick={handleHeadingClick}
            >
                My Component ! ! !
            </h1>
            <ul
                style={styles.list}
            >
                {/* <li>Tom</li>
                <li>Taylor</li>
                <li>{props.foo}</li> */}
                {/* {props.people.map(x => `<li>${x}</li>`)} */}
                {/* {props.people.map(x => <li>{x}</li>)} */}
                {people.map(x => <li>{x}</li>)}
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