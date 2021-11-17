// window.load = function calculateNum() {

    let table = document.getElementById('table').children[1]

    console.log(table)
    let calBtn = document.getElementById('calTriangle')
    let calBtnNum = document.getElementById('calTriangleNum')
    // let total = document.getElementById('total')
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
    


    // console.log(calInput)

// }