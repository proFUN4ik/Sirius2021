import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import plus from './+.png';
import FormPage from './taskAdd.js';

// начало блока заданий


const deviceWidth = {
    tablet: 1140,
    phone: 750,
}

const getCurDate = () => {
    const date = new Date();

    let str = date.getDate() + ' ';
    switch (date.getMonth()) {
    case 0:
        str += 'january';
        break;
    case 1:
        str += 'february';
        break;
    case 2:
        str += 'march';
        break;
    case 3:
        str += 'april';
        break;
    case 4:
        str += 'may';
        break;
    case 5:
        str += 'june';
        break;
    case 6:
        str += 'july';
        break;
    case 7:
        str += 'august';
        break;
    case 8:
        str += 'september';
        break;
    case 9:
        str += 'october';
        break;
    case 10:
        str += 'november';
        break;
    case 11:
        str += 'december';
        break;
    default:
        break;
    }
    str += ' ' + date.getFullYear();
    return str;
}

const DoneButtonStyle = createUseStyles({
    doneBtn: {
        width: '100%',
        height: 52,

        font: 'inherit',
        color: '#c3feda',
        'text-align': 'center',

        border: 'none',

        background: '#ffffff',

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',
        'border-radius': 3,
    },
})

const DoneButton = (props) => {
    const style = DoneButtonStyle();

    return (
        <button className={style.doneBtn} onClick={() => props.onClick(props.curKey)}>Done</button>
    )
}

const TaskBlockStyles = createUseStyles({
    taskContainer: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',

        margin: {
            bottom: 30,
        },

        width: 285,

        padding: 10,

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',
        'border-radius': 9,
    },
    taskName: {
        padding: {
            top: 6,
            bottom: 6,
        },

        color: "#323232",
        font: '21px',
    },
    taskDate: {
        color: '#C4C4C4',
    },
    taskInfo: {
        margin: {
            bottom: 25,
        }
    },

    [`@media (max-width: ${deviceWidth.tablet}px)`]: {
        taskContainer: {
            width: 180,
        }
    },

    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        taskContainer: {
            width: 160,

            'margin-right': 0,

            '&:nth-child(2n)':{
                margin:{
                    left: 'auto',
                    bottom: 30,
                }
            }
        }
    }
})

const TaskBlock = (props) => {
    const style = TaskBlockStyles();

    return (
        <div className={style.taskContainer}>
            <div className={style.taskInfo}>
                <h2 className={style.taskName}>{props.task}</h2>
                <div className={style.taskDate}>{getCurDate()}</div>
            </div>
            <DoneButton curKey={props.curKey} onClick={props.onClick} />
        </div>
    )
}

const AddTaskStyles = createUseStyles({
    btn: {
        width: 305,
        'min-height': 150,

       font: 'inherit',
        'text-align': 'center',

        border: 'none',
        'border-radius': 9,

        margin: {
            bottom: 30,
        },

        background: '#F7F7F7',
    },
    btnText: {
        'font-size': 18,
    },
    btnImg: {
        margin: {
            bottom: 25,
        }
    },
    [`@media (max-width: ${deviceWidth.tablet}px)`]: {
        btn: {
            width: 200,
        },
        btnText: {
            'font-size': 16,
        }
    },
    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        btn: {
            'min-height': 51,
            height: 51,
            width: 51,

            padding: 0,
            margin: 0,

            position: 'fixed',
            bottom: 10,
            right: 10,

            'border-radius': '50%',

            background: '#ffe3d3',
            '&:before': {
                content: '"+"',
                display: 'block',
                font: 'inherit',
                'font-size': 18,
            }
        },
        btnText: {
            display: 'none',
        },
        btnImg: {
            display: 'none',
        }
    }
})

const AddTaskBlock = () => {
    const style = AddTaskStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/add-task');
    }

    return (
        <button className={style.btn} onClick={handleClick}>
            <img src={plus} className={style.btnImg}/>
            <p className={style.btnText}>Create new task</p>
        </button>
    )
}

const TaskStyles = createUseStyles({
    container: {
        display: 'flex',
        'justify-content': 'space-evenly',
        'flex-wrap': 'wrap',

        'max-width': 1065,

        margin: {
            right: 0,
            bottom: 50,
        },
    },
    taskHeader: {
        margin: {
            bottom: 80,
        },

        'font-size': '48px',
        'text-align': 'center',
    },
    mainCont: {
        width: '100%',
    },

    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        container: {
            display: 'block',
            width: '100%',
        },
        taskHeader: {
            'text-align': 'left',
        }
    }
})

const Tasks = (props) => {
    const style = TaskStyles();

    return (
        <div className={style.mainCont}>
            <h1 className={style.taskHeader}>Tasks</h1>
            <div className={style.container}>
                {props.renderTask}
                <AddTaskBlock />
            </div>
        </div>
    )
}

const CounterStyle = createUseStyles({
    counterBlock: {
        display: 'inline-block',
        padding: {
            left: 24,
            right: 21,
            top: 14,
            bottom: 14,
        },
        
        position: 'fixed',
        top: 142,
        right: 0,

        background: '#FFE3D3',

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',
        'border-radius': '13px 0px 0px 13px',
    },
    counterNumber: {
        'font-size': 14,
        display: 'inline-block',
    },
    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        counterBlock: {
            'font-size': 0,
            top: 110,
        }
    }
})

const TaskCounter = (props) => {
    const style = CounterStyle();

    return (
        <div className={style.counterBlock}>
            Completed tasks: <p className={style.counterNumber}>{props.counter}</p>
        </div>
    )
}

const TaskPageStyle = createUseStyles({
    container: {
        width: '60%',

        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        padding: {
            left: '20%',
            right: '20%',
        },
        margin: {
            top: 140,
        },
    },
    [`@media (max-width: ${deviceWidth.phone}px)`]: {
        container: {
            margin: {
                top: 60,
            },
            width: '80%',
            padding: {
                left: '10%',
                right: '10%',
            }
        }
    },
})



const TaskPage = () => {
    const style = TaskPageStyle();
    const [taskCounter, setTaskCounter] = useState(0);
    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>
    {
        let arr = [];
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((data) => {
            for (let i = 0; i < 20; i++)
            {
                arr.push(data[i].title);
            }
        })
        .then(() => {setTasks(arr)});
    }, [])

    const incrementCounter = () => {
        setTaskCounter(taskCounter + 1);
    }

    const delTask = (index) => {
        setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    }

    const handleClick = (index) => {
        delTask(index);
        incrementCounter();
    }

    const addTask = (newTask) => {
        setTasks(tasks.concat(newTask));
    }

    const renderTask = tasks.map((curTask, index) => {
        return (
            <TaskBlock key={index} curKey={index} task={curTask} onClick={handleClick}/>
        )
    })

    return (
        <Router>
            <Switch>
            <Route exact path='/tasks'>
                <div className={style.container}>
                    <Tasks renderTask={renderTask}/>
                </div>
                <TaskCounter counter={taskCounter}/>
            </Route>
            <Route path='/add-task'>
                <FormPage addTask={addTask}/>
            </Route>
            </Switch>
        </Router>
    )
}


//конец блока заданий

export default TaskPage;