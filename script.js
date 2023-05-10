// let sortBtn = document.querySelector('.sort');
// let userInput = document.querySelector('.do-input');
// let deleteBtn = document.querySelectorAll('.delete-icon');
// let addBtn = document.querySelector('.add-btn');
// let inputList = document.querySelector('.list');
// let inputLine = document.querySelector('.input');

// function getFromLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('todoListData'));
//     if (data) {
//         inputList.innerHTML = data;
//     }
// }

// function saveToLocalStorage() {
//     localStorage.setItem('todoListData', JSON.stringify(inputList.innerHTML));
// }

// getFromLocalStorage();

// userInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         addBtn.click();
//     }
// });

// sortBtn.addEventListener('mouseover', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-blind-down.png')) {
//         sortBtn.src = './img/sort-hover-down.png';
//     } else if (src.includes('sort-blind-up.png')) {
//         sortBtn.src = './img/sort-hover-up.png';
//     }
// });

// sortBtn.addEventListener('mouseout', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-hover-down.png')) {
//         sortBtn.src = './img/sort-blind-down.png';
//     } else if (src.includes('sort-hover-up.png')) {
//         sortBtn.src = './img/sort-blind-up.png';
//     }
// });

// sortBtn.addEventListener('click', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-hover-down.png')) {
//         sortBtn.src = './img/sort-hover-up.png';
//         sortInputsUp();
//     } else if (src.includes('sort-hover-up.png')) {
//         sortBtn.src = './img/sort-hover-down.png';
//         sortInputsDown();
//     }

//     saveToLocalStorage();
// });

// function getDelete() {
//     deleteBtn.forEach((el) => {
//         el.addEventListener('mouseover', function () {
//             el.src = './img/delete-hover.svg';
//         });
//         el.addEventListener('mouseout', function () {
//             el.src = './img/delete-blind.svg';
//         });
//         el.addEventListener('click', function () {
//             userInput.value = '';
//         });
//     });
// }
// getDelete();

// addBtn.addEventListener('click', function () {
//     userInput.focus();

//     const newInput = inputLine.cloneNode(true);
//     newInput.classList.remove('input');
//     newInput.classList.add('new-input');
//     const inputChange = newInput.querySelector('.do-input');
//     inputChange.classList.remove('do-input');
//     inputChange.classList.add('new-do');
//     const resetBtnChange = newInput.querySelector('.delete-icon');
//     resetBtnChange.classList.remove('delete-icon');
//     resetBtnChange.classList.add('new-delete');

//     userInput.value = '';
//     inputList.append(newInput);

//     const newDeleteBtn = newInput.querySelectorAll('.new-delete');
//     const newUserInput = newInput.querySelectorAll('.new-input');
//     const newDoInput = newInput.querySelectorAll('.new-do');

//     newDeleteBtn.forEach((el, i) => {
//         el.addEventListener('mouseover', function () {
//             el.src = './img/delete-hover.svg';
//         });

//         el.addEventListener('mouseout', function () {
//             el.src = './img/delete-blind.svg';
//         });

//         el.addEventListener('click', function () {
//             newUserInput[i].remove();
//             userInput.focus();
//             saveInputsToLocalStorage();
//         });
//     });

//     newDoInput.forEach((el, i) => {
//         el.addEventListener('input', () => {
//             saveInputsToLocalStorage();
//         });
//     });

//     saveInputsToLocalStorage();
// });

// function saveInputsToLocalStorage() {
//     const newDoInputs = document.querySelectorAll('.new-do');
//     const inputs = [];

//     newDoInputs.forEach((input) => {
//         inputs.push(input.value);
//     });

//     localStorage.setItem('inputs', JSON.stringify(inputs));
// }

// function getInputsFromLocalStorage() {
//     const inputs = JSON.parse(localStorage.getItem('inputs'));
//     if (inputs) {
//         inputs.forEach((input) => {
//             const newInput = inputLine.cloneNode(true);
//             newInput.classList.remove('input');
//             newInput.classList.add('new-input');
//             const inputChange = newInput.querySelector('.do-input');
//             inputChange.classList.remove('do-input');
//             inputChange.classList.add('new-do');
//             inputChange.value = input;
//             const resetBtnChange = newInput.querySelector('.delete-icon');
//             resetBtnChange.classList.remove('delete-icon');
//             resetBtnChange.classList.add('new-delete');

//             inputList.append(newInput);

//             const newDeleteBtn = newInput.querySelector('.new-delete');
//             const newUserInput = newInput.querySelector('.new-input');
//             const newDoInput = newInput.querySelector('.new-do');

//             newDeleteBtn.addEventListener('mouseover', function () {
//                 newDeleteBtn.src = './img/delete-hover.svg';
//             });

//             newDeleteBtn.addEventListener('mouseout', function () {
//                 newDeleteBtn.src = './img/delete-blind.svg';
//             });

//             newDeleteBtn.addEventListener('click', function () {
//                 newInput.remove();
//                 userInput.focus();
//                 saveInputsToLocalStorage();
//             });

//             newDoInput.addEventListener('input', () => {
//                 saveInputsToLocalStorage();
//             });
//         });
//     }
// }

// getInputsFromLocalStorage();

// function sortInputsUp() {
//     const inputs = document.querySelectorAll('.new-input');
//     const sortedInputs = Array.from(inputs).sort((a, b) => {
//         const Con1 = a.querySelector('.new-do').value;
//         const Con2 = b.querySelector('.new-do').value;
//         if (!Con1 && !Con2) {
//             return 0;
//         } else if (!Con1) {
//             return 1;
//         } else if (!Con2) {
//             return -1;
//         } else if (Con1 < Con2) {
//             return -1;
//         } else if (Con1 > Con2) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });

//     sortedInputs.forEach((input) => {
//         inputList.appendChild(input);
//     });

//     saveToLocalStorage();
// }

// function sortInputsDown() {
//     const inputs = document.querySelectorAll('.new-input');
//     const sortedInputs = Array.from(inputs).sort((a, b) => {
//         const Con1 = a.querySelector('.new-do').value;
//         const Con2 = b.querySelector('.new-do').value;
//         if (!Con1 && !Con2) {
//             return 0;
//         } else if (!Con1) {
//             return -1;
//         } else if (!Con2) {
//             return 1;
//         } else if (Con1 < Con2) {
//             return 1;
//         } else if (Con1 > Con2) {
//             return -1;
//         } else {
//             return 0;
//         }
//     });

//     sortedInputs.forEach((input) => {
//         inputList.appendChild(input);
//     });

//     saveToLocalStorage();
// }

// function saveToLocalStorage() {
//     const inputs = document.querySelectorAll('.new-do');
//     const inputValues = Array.from(inputs).map((input) => input.value);

//     localStorage.setItem('inputs', JSON.stringify(inputValues));
// }

// window.addEventListener('beforeunload', saveToLocalStorage);

////////////////////////////////////////////////////////////////////////////











// let sortBtn = document.querySelector('.sort');
// let userInput = document.querySelector('.do-input');
// let deleteBtn = document.querySelectorAll('.delete-icon');
// let addBtn = document.querySelector('.add-btn');
// let inputList = document.querySelector('.list');
// let inputLine = document.querySelector('.input');

// function getFromLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('todoListData'));
//     if (data) {
//         inputList.innerHTML = data;
//     }
// }

// function saveToLocalStorage() {
//     localStorage.setItem('todoListData', JSON.stringify(inputList.innerHTML));
// }

// getFromLocalStorage();

// userInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         addBtn.click();
//     }
// });

// sortBtn.addEventListener('mouseover', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-blind-down.png')) {
//         sortBtn.src = './img/sort-hover-down.png';
//     } else if (src.includes('sort-blind-up.png')) {
//         sortBtn.src = './img/sort-hover-up.png';
//     }
// });

// sortBtn.addEventListener('mouseout', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-hover-down.png')) {
//         sortBtn.src = './img/sort-blind-down.png';
//     } else if (src.includes('sort-hover-up.png')) {
//         sortBtn.src = './img/sort-blind-up.png';
//     }
// });

// sortBtn.addEventListener('click', function () {
//     const src = sortBtn.src;
//     if (src.includes('sort-hover-down.png')) {
//         sortBtn.src = './img/sort-hover-up.png';
//         sortInputsUp();
//     } else if (src.includes('sort-hover-up.png')) {
//         sortBtn.src = './img/sort-hover-down.png';
//         sortInputsDown();
//     }

//     saveToLocalStorage();
// });

// function getDelete() {
//     deleteBtn.forEach((el) => {
//         el.addEventListener('mouseover', function () {
//             el.src = './img/delete-hover.svg';
//         });
//         el.addEventListener('mouseout', function () {
//             el.src = './img/delete-blind.svg';
//         });
//         el.addEventListener('click', function () {
//             userInput.value = '';
//         });
//     });
// }
// getDelete();

// addBtn.addEventListener('click', function () {
//     userInput.focus();

//     const newInput = inputLine.cloneNode(true);
//     newInput.classList.remove('input');
//     newInput.classList.add('new-input');
//     const inputChange = newInput.querySelector('.do-input');
//     inputChange.classList.remove('do-input');
//     inputChange.classList.add('new-do');
//     const resetBtnChange = newInput.querySelector('.delete-icon');
//     resetBtnChange.classList.remove('delete-icon');
//     resetBtnChange.classList.add('new-delete');

//     userInput.value = '';
//     inputList.append(newInput);

//     const newDeleteBtn = newInput.querySelectorAll('.new-delete');
//     const newUserInput = newInput.querySelectorAll('.new-input');
//     const newDoInput = newInput.querySelectorAll('.new-do');

//     newDeleteBtn.forEach((el, i) => {
//         el.addEventListener('mouseover', function () {
//             el.src = './img/delete-hover.svg';
//         });

//         el.addEventListener('mouseout', function () {
//             el.src = './img/delete-blind.svg';
//         });

//         el.addEventListener('click', function () {
//             newUserInput[i].remove();
//             userInput.focus();
//             saveInputsToLocalStorage();
//         });
//     });

//     newDoInput.forEach((el, i) => {
//         el.addEventListener('input', () => {
//             saveInputsToLocalStorage();
//         });
//     });

//     saveInputsToLocalStorage();
// });

// function saveInputsToLocalStorage() {
//     const newDoInputs = document.querySelectorAll('.new-do');
//     const inputs = [];

//     newDoInputs.forEach((input) => {
//         inputs.push(input.value);
//     });

//     localStorage.setItem('inputs', JSON.stringify(inputs));
// }

// function getInputsFromLocalStorage() {
//     const inputs = JSON.parse(localStorage.getItem('inputs'));
//     if (inputs) {
//         inputs.forEach((input) => {
//             const newInput = inputLine.cloneNode(true);
//             newInput.classList.remove('input');
//             newInput.classList.add('new-input');
//             const inputChange = newInput.querySelector('.do-input');
//             inputChange.classList.remove('do-input');
//             inputChange.classList.add('new-do');
//             inputChange.value = input;
//             const resetBtnChange = newInput.querySelector('.delete-icon');
//             resetBtnChange.classList.remove('delete-icon');
//             resetBtnChange.classList.add('new-delete');

//             inputList.append(newInput);

//             const newDeleteBtn = newInput.querySelector('.new-delete');
//             const newUserInput = newInput.querySelector('.new-input');
//             const newDoInput = newInput.querySelector('.new-do');

//             newDeleteBtn.addEventListener('mouseover', function () {
//                 newDeleteBtn.src = './img/delete-hover.svg';
//             });

//             newDeleteBtn.addEventListener('mouseout', function () {
//                 newDeleteBtn.src = './img/delete-blind.svg';
//             });

//             newDeleteBtn.addEventListener('click', function () {
//                 newInput.remove();
//                 userInput.focus();
//                 saveInputsToLocalStorage();
//             });

//             newDoInput.addEventListener('input', () => {
//                 saveInputsToLocalStorage();
//             });
//         });
//     }
// }

// getInputsFromLocalStorage();

// function sortInputsUp() {
//     const inputs = document.querySelectorAll('.new-input');
//     const sortedInputs = Array.from(inputs).sort((a, b) => {
//         const Con1 = a.querySelector('.new-do').value;
//         const Con2 = b.querySelector('.new-do').value;
//         if (!Con1 && !Con2) {
//             return 0;
//         } else if (!Con1) {
//             return 1;
//         } else if (!Con2) {
//             return -1;
//         } else if (Con1 < Con2) {
//             return -1;
//         } else if (Con1 > Con2) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });

//     sortedInputs.forEach((input) => {
//         inputList.appendChild(input);
//     });

//     saveToLocalStorage();
// }

// function sortInputsDown() {
//     const inputs = document.querySelectorAll('.new-input');
//     const sortedInputs = Array.from(inputs).sort((a, b) => {
//         const Con1 = a.querySelector('.new-do').value;
//         const Con2 = b.querySelector('.new-do').value;
//         if (!Con1 && !Con2) {
//             return 0;
//         } else if (!Con1) {
//             return -1;
//         } else if (!Con2) {
//             return 1;
//         } else if (Con1 < Con2) {
//             return 1;
//         } else if (Con1 > Con2) {
//             return -1;
//         } else {
//             return 0;
//         }
//     });

//     sortedInputs.forEach((input) => {
//         inputList.appendChild(input);
//     });

//     saveToLocalStorage();
// }

// function saveToLocalStorage() {
//     const inputs = document.querySelectorAll('.new-do');
//     const inputValues = Array.from(inputs).map((input) => input.value);

//     localStorage.setItem('inputs', JSON.stringify(inputValues));
// }

// window.addEventListener('beforeunload', saveToLocalStorage);




let sortBtn = document.querySelector('.sort');
let userInput = document.querySelector('.do-input');
let deleteBtn = document.querySelectorAll('.delete-icon');
let addBtn = document.querySelector('.add-btn');
let inputList = document.querySelector('.list');
let inputLine = document.querySelector('.input');

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('todoListData'));
    if (data) {
        inputList.innerHTML = data;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('todoListData', JSON.stringify(inputList.innerHTML));
}

getFromLocalStorage();

userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

sortBtn.addEventListener('mouseover', function () {
    const src = sortBtn.src;
    if (src.includes('sort-blind-down.png')) {
        sortBtn.src = './img/sort-hover-down.png';
    } else if (src.includes('sort-blind-up.png')) {
        sortBtn.src = './img/sort-hover-up.png';
    }
});

sortBtn.addEventListener('mouseout', function () {
    const src = sortBtn.src;
    if (src.includes('sort-hover-down.png')) {
        sortBtn.src = './img/sort-blind-down.png';
    } else if (src.includes('sort-hover-up.png')) {
        sortBtn.src = './img/sort-blind-up.png';
    }
});

sortBtn.addEventListener('click', function () {
    const src = sortBtn.src;
    if (src.includes('sort-hover-down.png')) {
        sortBtn.src = './img/sort-hover-up.png';
        sortInputsUp();
    } else if (src.includes('sort-hover-up.png')) {
        sortBtn.src = './img/sort-hover-down.png';
        sortInputsDown();
    }

    saveToLocalStorage();
});

function getDelete() {
    deleteBtn.forEach((el) => {
        el.addEventListener('mouseover', function () {
            el.src = './img/delete-hover.svg';
        });
        el.addEventListener('mouseout', function () {
            el.src = './img/delete-blind.svg';
        });
        el.addEventListener('click', function () {
            userInput.value = '';
        });
    });
}
getDelete();

addBtn.addEventListener('click', function () {
    userInput.focus();

    const newInput = inputLine.cloneNode(true);
    newInput.classList.remove('input');
    newInput.classList.add('new-input');
    const inputChange = newInput.querySelector('.do-input');
    inputChange.classList.remove('do-input');
    inputChange.classList.add('new-do');
    const resetBtnChange = newInput.querySelector('.delete-icon');
    resetBtnChange.classList.remove('delete-icon');
    resetBtnChange.classList.add('new-delete');

    userInput.value = '';
    inputList.append(newInput);

    const newDeleteBtn = newInput.querySelectorAll('.new-delete');
    const newUserInput = newInput.querySelectorAll('.new-input');
    const newDoInput = newInput.querySelectorAll('.new-do');

    newDeleteBtn.forEach((el, i) => {
        el.addEventListener('mouseover', function () {
            el.src = './img/delete-hover.svg';
        });

        el.addEventListener('mouseout', function () {
            el.src = './img/delete-blind.svg';
        });

        el.addEventListener('click', function () {
            newUserInput[i].remove();
            userInput.focus();
            saveInputsToLocalStorage();
        });
    });

    newDoInput.forEach((el) => {
        el.addEventListener('input', () => {
            saveInputsToLocalStorage();
        });
    });

    saveInputsToLocalStorage();
});

function saveInputsToLocalStorage() {
    const newDoInputs = document.querySelectorAll('.new-do');
    const inputs = [];

    newDoInputs.forEach((input) => {
        inputs.push(input.value);
    });

    localStorage.setItem('inputs', JSON.stringify(inputs));
}

function getInputsFromLocalStorage() {
    const inputs = JSON.parse(localStorage.getItem('inputs'));
    if (inputs) {
        inputs.forEach((input) => {
            const newInput = inputLine.cloneNode(true);
            newInput.classList.remove('input');
            newInput.classList.add('new-input');
            const inputChange = newInput.querySelector('.do-input');
            inputChange.classList.remove('do-input');
            inputChange.classList.add('new-do');
            inputChange.value = input;
            const resetBtnChange = newInput.querySelector('.delete-icon');
            resetBtnChange.classList.remove('delete-icon');
            resetBtnChange.classList.add('new-delete');

            inputList.append(newInput);

            const newDeleteBtn = newInput.querySelector('.new-delete');
            const newDoInput = newInput.querySelector('.new-do');

            newDeleteBtn.addEventListener('mouseover', function () {
                newDeleteBtn.src = './img/delete-hover.svg';
            });

            newDeleteBtn.addEventListener('mouseout', function () {
                newDeleteBtn.src = './img/delete-blind.svg';
            });

            newDeleteBtn.addEventListener('click', function () {
                newInput.remove();
                userInput.focus();
                saveInputsToLocalStorage();
            });

            newDoInput.addEventListener('input', () => {
                saveInputsToLocalStorage();
            });
        });
    }
}

getInputsFromLocalStorage();

function sortInputsUp() {
    const inputs = document.querySelectorAll('.new-input');
    const sortedInputs = Array.from(inputs).sort((a, b) => {
        const Con1 = a.querySelector('.new-do').value;
        const Con2 = b.querySelector('.new-do').value;
        if (!Con1 && !Con2) {
            return 0;
        } else if (!Con1) {
            return 1;
        } else if (!Con2) {
            return -1;
        } else if (Con1 < Con2) {
            return -1;
        } else if (Con1 > Con2) {
            return 1;
        } else {
            return 0;
        }
    });

    sortedInputs.forEach((input) => {
        inputList.appendChild(input);
    });

    saveToLocalStorage();
}

function sortInputsDown() {
    const inputs = document.querySelectorAll('.new-input');
    const sortedInputs = Array.from(inputs).sort((a, b) => {
        const Con1 = a.querySelector('.new-do').value;
        const Con2 = b.querySelector('.new-do').value;
        if (!Con1 && !Con2) {
            return 0;
        } else if (!Con1) {
            return -1;
        } else if (!Con2) {
            return 1;
        } else if (Con1 < Con2) {
            return 1;
        } else if (Con1 > Con2) {
            return -1;
        } else {
            return 0;
        }
    });

    sortedInputs.forEach((input) => {
        inputList.appendChild(input);
    });

    saveToLocalStorage();
}

function saveToLocalStorage() {
    const inputs = document.querySelectorAll('.new-do');
    const inputValues = Array.from(inputs).map((input) => input.value);

    localStorage.setItem('inputs', JSON.stringify(inputValues));
}

window.addEventListener('beforeunload', saveToLocalStorage);
