import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import bg from './bg.png';
import { useHistory } from 'react-router-dom';

const screenSize = {
    smallPC: 1200,
}

const heightDevice = {
    smallPhone: 700,
}

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formStyle = createUseStyles({
    registForm: {
        'padding-left': 20,
        'padding-right': 20,
        width: 267,
        height: 61,

        border: 'none',
        'border-radius': 10,

        'font': 'inherit',
        'font-size': 14,

        'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.08)',

        '&::placeholder': {
            'color': '#999999',
        }
    },
    registHeader: {
        display: 'block',
        margin: {
            bottom: 25,
        },

        'font-size': 21,
    },
    registContainer: {
        margin: {
            bottom: 34,
        }
    },
})

const RegForm = (props) => {
    const styles = formStyle();

    return (
        <div className={styles.registContainer}>
            <label htmlFor={props.enter} className={styles.registHeader}>{capitalizeFirst(props.enter)}</label>
            <input id={props.enter} placeholder={'Enter ' + props.enter + '...'} className={styles.registForm} required/>
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
    [`@media (max-width: ${screenSize.smallPC}px)`]: {
        btn: {
            position: 'absolute',
            width: 306,

            left: '50%',
            bottom: 56,

            transform: 'translateX(-50%)',
        }
    }
})

const Button = (props) => {
    const style = ButtonStyle();

    return (
        <button type={props.type} className={style.btn}>{props.text}</button>
    )
}

const regStyle = createUseStyles({
    regContainer: {
        width: 307,

        margin: {
            left: '35%',
            top: 138
        },
    }, 
    inputContainer: {
        'margin-bottom': 80,
        'margin-top': 80,
    },
    regHeader: {
        'font-size': 48,
    },
    [`@media (max-width: ${screenSize.smallPC}px)`]: {
        regContainer: {
            height: '100%',

            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-around',

            margin: {
                top: 0,
                left: 'auto',
                right: 'auto',
            }
        },
        inputContainer: {
            margin: 0,
        }
    }
})

const RegBlock = () => {
    const styles = regStyle();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/tasks');
    }

    return (
        <div className={styles.regContainer}>
            <h1 className={styles.regHeader}>Welcome to a todo app</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <RegForm enter='email'/>
                    <RegForm enter='password'/>
                </div>
                <Button text='Login' type='submit'/>
            </form>
        </div>
    )
}

const BackStyle = createUseStyles({
    backBlock: {
        flex: 1,
        float: 'right',
        height: '100vh',

        'background-image': `url(${bg})`,
        'background-size': 'cover',
    },
    [`@media (max-width: ${screenSize.smallPC}px)`]: {
        backBlock: {
            display: 'none',
        }
    }
})

const RegBack = () => {
    const style = BackStyle();

    return (
        <div className={style.backBlock}></div>
    )
}

const PageCont = createUseStyles({
    flexCont: {
        display: 'flex',
    },
    content: {
        width: 939,
        
        'box-sizing': 'border-box',
    },
    [`@media (max-width: ${screenSize.smallPC}px)`]:
    {
        content: {
            width: '100%',
            height: '100%',

            padding: {
                top: 65,
                bottom: 120,
            }
        },
        flexCont: {
            display: 'block',

            height: '100vh',
        }
    },
    [`@media (max-height: ${heightDevice.smallPhone}px)`]: {
        content: {
            padding: {
                top: 35,
                bottom: 120,
            }
        }
    },
})

const RegPage = () => {
    const style = PageCont();
    
    return (
        <div className={style.flexCont}>
            <div className={style.content}>
                <RegBlock />
            </div>
            <RegBack />
        </div>
    )
}

export default RegPage;