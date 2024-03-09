
function getInputValueById(inputElementId){
    const userInputElement = document.getElementById(inputElementId);
    const userInputString = userInputElement.value;
    const userInput = parseFloat(userInputString);
    
    return userInput
}


function getTextElementById(getTextId){
    const getTextElement = document.getElementById(getTextId)
    return getTextElement.innerText;
}

function setTextElementById(setElementId, value){
    const setTextElement = document.getElementById(setElementId)
    setTextElement.innerText = value;
}



function calculateAriaTotal(){
    const userInput1 = getInputValueById('user-input-1')
    const userInput2 = getInputValueById('user-input-2')

    if(isNaN(userInput1)){
        alert('Please provide Base')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide height')
             return;
    }
    else{
        
        const titleElement = getTextElementById('card-title')
        setTextElementById('title', titleElement);
        
        const calculateAria = (0.5 * userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }
}



function calculateRectangleTotal(){
    const userInput1 = getInputValueById('rectangle-input1')
    const userInput2 = getInputValueById('rectangle-input2')
    


    if(isNaN(userInput1)){
        alert('Please provide W')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide L')
             return;
    }
    else{

        const titleElement = getTextElementById('rectangle-title')
        setTextElementById('title', titleElement);
        
        
        
        const calculateAria = (userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }


    // console.log(calculateAria)
}


function calculateParallalogramTotal(){
    const userInput1 = getInputValueById('parallelogram-input1')
    const userInput2 = getInputValueById('parallelogram-input2')
    


    if(isNaN(userInput1)){
        alert('Please provide Base')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide height')
             return;
    }
    else{
        const titleElement = getTextElementById('title-parallelogram')
        setTextElementById('title', titleElement);
        
        const calculateAria = (userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }

    // console.log(calculateAria)
}


function calculateRhombusTotal(){
    const userInput1 = getInputValueById('rhombus-input1')
    const userInput2 = getInputValueById('rhombus-input2')
    

    if(isNaN(userInput1)){
        alert('Please provide d1')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide d2')
             return;
    }
    else{
        const titleElement = getTextElementById('title-rhombus')
        setTextElementById('title', titleElement);
        
        const calculateAria = (userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }

    // console.log(calculateAria)
}


function calculatePentagonTotal(){
    const userInput1 = getInputValueById('pentagon-input1')
    const userInput2 = getInputValueById('pentagon-input2')
    

    if(isNaN(userInput1)){
        alert('Please provide p')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide b')
             return;
    }
    else{
        const titleElement = getTextElementById('title-pentagon')
        setTextElementById('title', titleElement);
        
        const calculateAria = (0.5 * userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }

}



function calculateEllipseTotal(){
    const userInput1 = getInputValueById('ellipse-input1')
    const userInput2 = getInputValueById('ellipse-input2')
    
    if(isNaN(userInput1)){
        alert('Please provide a')
        return;
    }
    else if(isNaN(userInput2)){
        alert('Please provide b')
             return;
    }
    else{
        const titleElement = getTextElementById('title-ellipse')
        setTextElementById('title', titleElement);
    
        const calculateAria = (3.14 * userInput1 * userInput2).toFixed(2);
        console.log(calculateAria)
        setTextElementById('result', calculateAria);
    }

    // console.log(calculateAria)
}
