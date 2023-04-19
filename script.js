let parentOfExpense = document.querySelector('.ExpenseData')


let submit = document.querySelector('#btn');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    // initilizing variables

    let amount = document.querySelector('#inputAmount').value;
    let description = document.querySelector('#inputDescription').value;


    let category = document.querySelector('#inputCategory').value






    // preparing expense node;
    let parentOfExpense = document.querySelector('.ExpenseData')

    let expenseNode = document.createElement('li')

    expenseNode.classList = " rounded list-unstyled col-12 bg-success text-light text-center  fs-5 mt-3 ";
    expenseNode.style.height = '3rem';
    expenseNode.style.marginLeft = '1rem';
    expenseNode.style.paddingTop = '0.5rem';


    // creating delete button
    let removeLi = document.createElement('button')
    removeLi.appendChild(document.createTextNode('Remove'))
    removeLi.classList = " btn remove float-end rounded bg-danger ";

    // appeding delete button in the li

    expenseNode.appendChild(removeLi)

    // creating edit button
    let editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode('Edit'))
    editBtn.classList = " btn edit float-end rounded bg-warning ";

    // appeding edit button in li

    expenseNode.appendChild(editBtn)




    let expenseText = document.createTextNode(`${amount},${category} ${description}`)



    expenseNode.appendChild(expenseText)
    parentOfExpense.appendChild(expenseNode)



    // adding values in local storage

    let obj = {
        amount,
        description,
        category
    }

    let localData = JSON.stringify(obj);

    localStorage.setItem(description, localData)


    //working on remove

    parentOfExpense.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            let li = e.target.parentElement;
            if (parentOfExpense.contains(li)) {
                localStorage.removeItem(description)
                parentOfExpense.removeChild(li);
            }




        }
    })




    // working on edit

    let parsedData = JSON.parse(localData)

    editBtn.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit')) {


            localStorage.removeItem(parsedData.description)
            let li = e.target.parentElement;

            parentOfExpense.removeChild(li);
            localStorage.removeItem(description)


            document.querySelector('#inputAmount').value = parsedData.amount;

            document.querySelector('#inputDescription').value = parsedData.description;

            document.querySelector('#inputCategory').value = parsedData.category

        }
    })

    //doing input tags empty after work done
    document.querySelector('#inputAmount').value = '';

    document.querySelector('#inputDescription').value = '';

    document.querySelector('#inputCategory').value = ''

})
