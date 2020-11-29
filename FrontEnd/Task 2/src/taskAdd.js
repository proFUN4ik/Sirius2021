import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

const deviceWidth = {
    tablet: 1140,
    phone: 750,
}


const TaskInputStyle = createUseStyles({
    txarea: {
        'box-sizing': 'border-box',

        width: '100%',
        height: 117,

        padding: {
            left: 30,
            right: 30,
            top: 20,
            bottom: 20,
        },

        resize: 'none',

        font: 'inherit',
        '&::placeholder': {
            color: '#999999',
        },

        border: 'none',
        'border-radius': 10,

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',
    },
    taskLabel: {
        display: 'block',

        margin: {
            bottom: 30,
        },

        'font-size': 21,
        'text-align': 'center',
    },
    container: {
        margin: {
            bottom: 100,
        }
    },

    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        taskLabel: {
            'text-align': 'left',
        }
    }
})

const TaskInput = (props) => {
    const style = TaskInputStyle();
    
    return(
        <div className={style.container}>
            <label htmlFor={'taskInp'} className={style.taskLabel}>Task name</label>
            <textarea required placeholder='Enter task name...' className={style.txarea} maxLength={128} id={'taskInp'} onChange={(e) => props.onChange(e)}></textarea>
        </div>
    )
}

const ButtonStyle = createUseStyles({
    btn: {
        width: '100%',
        padding: 17,

        font: 'inherit',
        'font-size': 18,
        'text-align': 'center',

        'background-color': '#ffe3d3',
        border: 'none',
        'border-radius': 10,

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',
    },
    taskHeader: {
        'font-size': 48,
        'text-align': 'center',

        margin: {
            bottom: 80,
        },
    },

    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        taskHeader: {
            'text-align': 'left',
            margin: {
                bottom: 150,
            }
        },
        btn: {
            position: 'absolute',

            bottom: '-34px',
        }
    }
})

const Form = (props) => {
    const style = ButtonStyle();

    return ( 
        <form onSubmit={(e) => props.onSubmit(e)}>
            <h1 className={style.taskHeader}>New task</h1>
            <TaskInput onChange={props.onChange}/>
            <button type='submit' className={style.btn}>Create</button>
        </form>
    )
}

const CloseButtonStyle = createUseStyles({
    btn: {
        height: 70,
        width: 70,

        position: 'absolute',
        top: '-1.5%',
        right: '-30%',

        'border': 1,
        'border-radius': '50%',
        'border-style': 'solid',
        'border-color': '#999999',
    
        background: '#ffffff',
        '&:before, &:after': {
            content: '" "',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 24,
            height: 1,
            background: '#999999',
        },
        '&:before': {
            transform: 'translate(-50%, -50%) rotate(45deg)',
        },
        '&:after': {
            transform: 'translate(-50%, -50%) rotate(-45deg)',
        }
    },

    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        btn: {
            display: 'none',
        }
    }
})

const CloseButton = (props) => {
    const style = CloseButtonStyle();
    const history = useHistory();

    const handleClick = () => {
        history.push('/tasks');
    }

    return (
        <button className={style.btn} onClick={() => handleClick()}></button>
    )
}

const FormPageStyle = createUseStyles({
    container: {
        width: 325,
        position: 'relative',

        margin: {
            top: 185,
            left: 'auto',
            right: 'auto',
        }
    },
    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        container: {
            width: 'calc(100% - 68px)',
            height: 'calc(100vh - 134px)',

            margin: {
                top: 67,
                bottom: 67,
                left: 34,
                right: 34,
            },
        }
    },
})

const FormPage = (props) => {
    const style = FormPageStyle();
    const history = useHistory();

    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setTaskName(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(taskName);
        history.push('/tasks');
    }

    return (
        <div className={style.container}>
            <Form onChange={handleChange} onSubmit={handleSubmit}/>
            <CloseButton />
        </div>
    )
}

export default FormPage;