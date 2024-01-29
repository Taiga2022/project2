// ここから書いてください。
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;


const step1=document.getElementById('step1')
const step2=document.getElementById('step2')
const step3=document.getElementById('step3')
const step4=document.getElementById('step4')

function calcPower(step2Value,step3Value) {
    consumedPower=0
    for (const key in camera) {
        if (camera[key]["model"]===step2Value) {
            consumedPower=camera[key]["powerConsumptionWh"]+Number(step3Value)
        }
    }
    return consumedPower
}

function removeElement(list) {
    list.forEach(element => {
        element.remove()
    });
}

function showModel(e,step2) {
    for (const key in camera) {
        option=document.createElement("option")
        if (e.target.value===camera[key]["brand"]) {
            option.innerHTML=camera[key]["model"]
            step2.append(option)
        }
    }
}

function createList(consumedPower) {
    battery.sort((a,b)=>{
        let aCode=a["batteryName"].codePointAt(0)
        let bCode=b["batteryName"].codePointAt(0)
        return aCode-bCode
    })
    for (const key in battery) {
        lowestPower=battery[key]["maxDraw"]*battery[key]["endVoltage"]
        if (lowestPower>=consumedPower) {
            powerCapacity=(Math.floor(((battery[key]["capacityAh"]*battery[key]["voltage"])/consumedPower)*10))/10
            list=document.createElement("li")
            h3=document.createElement("h3")
            h3.innerHTML=battery[key]["batteryName"]
            p=document.createElement("p")
            p.innerHTML=`Estimated ${powerCapacity} hours on selected setup`
            list.append(h3)
            list.append(p)
            step4.appendChild(list)
        }
    }
}

step1.addEventListener('change',(e)=>{
    step2Value=step2.value
    step3Value=step3.value
    let stepOption=document.querySelectorAll(".step2 select option")
    let step4list=document.querySelectorAll(".step4 ul li")
    removeElement(stepOption)
    removeElement(step4list)
    showModel(e,step2)
    consumedPower=calcPower(step2Value,step3Value)
    createList(consumedPower)
})

step2.addEventListener('change',(e)=>{
    step3Value=step3.value
    let step4list=document.querySelectorAll(".step4 ul li")
    removeElement(step4list)
    consumedPower=calcPower(e.target.value,step3Value)
    createList(consumedPower)
})

step3.addEventListener("change",(e)=>{
    let step4list=document.querySelectorAll(".step4 ul li")
    removeElement(step4list)
    step2Value=step2.value
    consumedPower=calcPower(step2Value,e.target.value)
    createList(consumedPower)
})

