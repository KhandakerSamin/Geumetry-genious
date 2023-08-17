// Triangle :

function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    baseField.value = '';

    // get triangle hight value
    const hightField = document.getElementById('triangle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    hightField.value = '';

    // calculate triangle area
    const area = 0.5 * base * hight;

    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    // add to calcultion entry : 
    addToCalculationEntry('Triangle', area)
}


// Rectangle : 

function calculateRectangleArea() {
    // get rectanguler width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value = '';

    // get rectanguler legnth value
    const legnthField = document.getElementById('rectangle-legnth');
    const legnthValueText = legnthField.value;
    const legnth = parseFloat(legnthValueText);
    legnthField.value = '';

    // validate input 
    if (isNaN(width) || isNaN(legnth)) {
        alert('Please Insert a Number');
        return;
    }

    // calculate rectangle value
    const area = width * legnth;

    // show rectangle value 
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    // add to calcultion entry : 
    addToCalculationEntry('Rectangle', area)
}


// Parallelogram : 

function calculateParallelogramArea() {
    const base = getInputValue("parallelogram-base");
    const hight = getInputValue('parallelogram-hight');
    if (isNaN(base) || isNaN(hight)) {
        alert('Please Insert a Number');
        return;
    }
    const area = base * hight;
    setElementInnerText('parallelogram-area', area);

    // add to calcultion entry : 
    addToCalculationEntry('Parallelogram', area)
}


// Rhombus:

function calculateRhombusArea() {
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if (isNaN(d1) || isNaN(d2)) {
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);

    // add to calcultion entry : 
    addToCalculationEntry('Rhombus', area)
}

// Pentagon : 

function calculatePentagonArea() {
    const hight = getInputValue('pentagon-hight');
    const base = getInputValue('pentagon-base');
    if (isNaN(hight) || isNaN(base)) {
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * hight * base;
    setElementInnerText('pentagon-area', area);

    // add to calcultion entry : 
    addToCalculationEntry('Pentagon', area)
}

// Ellipse : 

function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radious');
    const minor = getInputValue('ellipse-minor-redious');
    if (isNaN(major) || isNaN(minor)) {
        alert('Please Insert a Number');
        return;
    }
    const area = 3.1416 * major * minor;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDecimal);

    // add to calcultion entry : 
    addToCalculationEntry('Ellipse', areaToDecimal)
}

// Reusable function --> reduce duplicate code

// reuseable get input value field in number

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

// reusable set span , p , div etc text 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// add to calcutation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add 
 * 3.If needed add some class 
 * 4. set inner HTML . If could be dynamic Template String
 * 5. append the created element as a child of the parent
 * */
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML =areaType + ' ' + area;
    p.innerHTML = `${count + 1} . ${areaType} ${area}  cm<sup>2</sup> <button class="btn btn-primary btn-sm ml-3 mt-2" > Convert </button>`

    calculationEntry.appendChild(p);
}



/**
 * 1. set the proper type of the input field . (number, data, email)
 * 2. Check Type using typeof
 * 3. NaN (Not a Number) : isNaN is checking whether the input is not a number or not . 
 * */ 