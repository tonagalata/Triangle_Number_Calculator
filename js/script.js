    let table = document.getElementById('table').children[1]
    let end = document.getElementById('end')
    let dayCount = document.getElementById('dayCount')
    let start = document.getElementById('start')
    let getDays = document.getElementById('savingDays')

    let calBtn = document.getElementById('calTriangle')
    let calBtnNum = document.getElementById('calTriangleNum')
    let savingBtn = document.getElementById('savingNum')
    let day = document.getElementById('total-text')

    calBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let calInput = document.getElementById('inputCalTriangle').value;
        calInput = parseInt(calInput)


        day.innerHTML = (`Total Saved: $${((calInput * (calInput + 1)) / 2)}`)
        let single = 0 
        let double = 0
        let triple = 0
        table.innerHTML = ('<tbody></tbody>')
        for (let i = 1; i < calInput+1; i++) {
            single = ((i * (i + 1)) / 2)
            double = ((i * (i + 1)) / 2)*2
            triple = ((i * (i + 1)) / 2)*3

            let newRow = table.insertRow()

            newRow.innerHTML = (`<tr>
            <th scope="row">${i}</th>
            <td>$${single}</td>
            <td>$${double}</td>
            <td>$${triple}</td></tr>
            `)
        }

        
        // Math.floor(Math.sqrt(total * 2));
       
    })

    calBtnNum.addEventListener('click', (e) => {
        e.preventDefault()
        let calInputNum = document.getElementById('inputCalTriangleNum').value;
        calInputNum = parseInt(calInputNum)


        day.innerHTML = (`Day of Saving: ${Math.floor(Math.sqrt(calInputNum * 2))}`);
        
        let single = 0 
        let double = 0
        let triple = 0
        let dayTotal = Math.floor(Math.sqrt(calInputNum * 2))

        table.innerHTML = ('<tbody></tbody>')
        for (let i = 1; i < dayTotal+1; i++) {
            single = ((i * (i + 1)) / 2)
            double = ((i * (i + 1)) / 2)*2
            triple = ((i * (i + 1)) / 2)*3

            let newRow = table.insertRow()

            newRow.innerHTML = (`<tr>
            <th scope="row">${i}</th>
            <td>$${single}</td>
            <td>$${double}</td>
            <td>$${triple}</td></tr>
            `)
        }

       
    })
    



// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }


savingBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    let getDay = parseInt(getDays.value)
    dayCount.innerHTML = `Day Count: ${getDay}`
    var todayMonth = new Date().getMonth() + 1;
    let today = `${new Date().getFullYear()}-${todayMonth.toString().padStart(2, "0")}-${new Date().getDate()}`
    
    
    // console.log(date.setDate(date.getDate() + getDay))
    if(!start.value){
        start.value = today
        var date = new Date(today)
    } 
    else {
        var date = new Date(start.value)
        // console.log(start.value)
    }

    if (end.value) {
        if(start.value){
            var date1 = new Date(start.value);
        } else {
            var date1 = new Date(today);
        }
        
        const date2 = new Date(end.value);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        // console.log(diffTime + " milliseconds");
        // console.log(diffDays + " days");
        dayCount.innerHTML = `Day Count: ${diffDays}`
        getDay = diffDays
    }
    
    var months = new Date(date).getMonth() + 1;
    var newDate = `${new Date(date).getFullYear()}-${months.toString().padStart(2, "0")}-${new Date(date).getDate()+1}`
    var mon = new Date(new Date(newDate).setDate(new Date(newDate).getDate() + 1 + getDay)).getMonth() + 1
    var dy = new Date(new Date(newDate).setDate(new Date(newDate).getDate() + 1 + getDay)).getDate()
    end.value = `${new Date(new Date(newDate).setDate(new Date(newDate).getDate() + 1 + getDay)).getFullYear()}-${mon.toString().padStart(2, "0")}-${dy.toString().padStart(2, "0")}`
    
    day.innerHTML = (`Total Saved: $${((getDay * (getDay + 1)) / 2)}`)
    
    let single = 0 
    let double = 0
    let triple = 0
    

    table.innerHTML = ('<tbody></tbody>')
    for (let i = 1; i < getDay + 1; i++) {
        single = ((i * (i + 1)) / 2)
        double = ((i * (i + 1)) / 2)*2
        triple = ((i * (i + 1)) / 2)*3

        let newRow = table.insertRow()

        newRow.innerHTML = (`<tr>
        <th scope="row">${i}</th>
        <td>$${single}</td>
        <td>$${double}</td>
        <td>$${triple}</td></tr>
        `)
    }

    getDays.value = ""
})

