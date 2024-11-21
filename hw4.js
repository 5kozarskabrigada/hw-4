// // Задание 1
// // Создать массив «Список покупок». Каждый элемент массива
// // является объектом, который содержит название продукта, необходимое количество и куплен или нет.Написать несколько функций для работы с таким массивом.
// // 1. Вывод всего списка на экран таким образом, чтобы сначала
// // шли некупленные продукты, а потом – купленные.
// // 2. Добавление покупки в список.Учтите, что при добавлении
// // покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// //     а не добавлять новую.
// // 3. Покупка продукта.Функция принимает название продукта
// // и отмечает его как купленный.

// let productList = [
//     {
//         name: "apple",
//         quantity: 1,
//         isBought: false,

//     },
//     {
//         name: "orange",
//         quantity: 1,
//         isBought: false,

//     },
//     {
//         name: "pear",
//         quantity: 1,
//         isBought: false,
//     },
//     {
//         name: "lemon",
//         quantity: 1,
//         isBought: false,

//     },
//     {
//         name: "mango",
//         quantity: 1,
//         isBought: false,

//     },
// ]

// function showAllProducts(arr)
// {
//     const notBought = [];
//     const bought = [];


//     arr.forEach(product => 
//     {
//         if (product.isBought === false) 
//         {
//             notBought.push(product);
//         } 
        
//         else {
//             bought.push(product);
//         }
//     });


//     const sortedProducts = [...notBought, ...bought];

//     sortedProducts.forEach(product => 
//     {
//         console.log("Name: " + product.name + " - " + product.quantity + "\nBought: " + product.isBought);
//         console.log("---------------");
//     });
// }

// function addProduct(arr, prodName) {
    

//     for (let product of arr) 
//     {
//         if (product.name === prodName) 
//         {
//             product.quantity += 1;
//             return;
//         }
//     }


//    const newObj = 
//    {
//     name: prodName,
//     quantity: 1,
//     isBought: false,
//    }


//    arr.push(newObj);

// }

// function buyProduct(array, prodName) 
// {
//     array.forEach(product => 
//     {
//         if (product.name === prodName) 
//         {
//             product.isBought = true; 
//         }
//     });
// }



// showAllProducts(productList);
// console.log("||||||||||||||||||||");
// addProduct(productList, "apple");
// addProduct(productList, "kiwi");
// console.log("||||||||||||||||||||");
// showAllProducts(productList);
// buyProduct(productList, "pear");
// console.log("||||||||||||||||||||");
// showAllProducts(productList);
// console.log("||||||||||||||||||||");

// Задание 2
// Создать массив, описывающий чек в магазине.Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара.Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 


// const bill = [
//     {
//         name: "Apple            ",
//         quantity: 9,
//         unitPrice: 0.55,
//         amount: 4.60,

//     },
//     {
//         name: "Cutting Board    ",
//         quantity: 2,
//         unitPrice: 16.75,
//         amount: 33.50,

//     },
//     {
//         name: "Knife            ",
//         quantity: 3,
//         unitPrice: 7.25,
//         amount: 21.75,

//     },
//     {
//         name: "Paper Towel      ",
//         quantity: 1,
//         unitPrice: 1.25,
//         amount: 1.25,

//     },
//     {
//         name: "Plate Set (for 4)",
//         quantity: 1,
//         unitPrice: 53.50,
//         amount: 53.50,

//     },

// ]

// function showBill(array)
// {
//     let totalAmount  = 0;

//     console.log("QTY\tProduct\t\t\t\tUnit Price\t\tAmount");

//     array.forEach(product => 
//     {
//         console.log(product.quantity + "X  " + product.name + "\t\t" + product.unitPrice + "\t\t" + product.amount);
//         totalAmount += product.amount;

//     });
//     console.log("---------------------------------------------");
//     console.log("Total Amount\t\t\t\t\t\t\t" + totalAmount);

// }



// function mostExpensiveItem(array)
// {

//     let max = 0;
//     let mostEx ;

//     array.forEach(product => {
//         if(max < product.amount)
//         {
//             max = product.amount
//             mostEx = product.name;
//         }
//     });

//     console.log("Most expensive item is " + mostEx);

// }

// function averageCost(array)
// {
//     let average = 0;
//     array.forEach(product => 
//     {
//         average += product.amount / product.quantity;
//     });

//     average /= array.length;
//     console.log("average: " + average);

// }

// showBill(bill);
// mostExpensiveItem(bill);
// averageCost(bill);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Задание 3
// Создать массив css - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
//     <p p ></ >, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. 


// let styles = [
//     { 
//         name: "color", 
//         value: "maroon" 
//     },
//     { 
//         name: "font-size", 
//         value: "30px"
//     },
//     {
//         name: "font-family",
//         value: "Times New Roman"
//     },
//     { 
//         name: "text-align", 
//         value: "center" 
//     },
//     {
//         name: "font-weight",
//         value: "bold"
//     },
// ];


// function apply(stylesArr, text) {
    
//     let styleStr = "";

//     stylesArr.forEach(style => 
//     {
//         styleStr += `${style.name}: ${style.value}; `;
//     });

    
//     document.write(`<p style="${styleStr}">${text}</p>`);
// }


// apply(styles, "Aa aaa AaIA oa");


// Создать массив аудиторий академии.Объект - аудитория состоит из названия, количества посадочных мест(от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы.Объект - группа состоит из названия,
//     количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию(по алфавиту).


const auditoriumsArr =
[
    {
        name: "Auditorium #1",
        seats: 15,
        facultyName: "Architecture",
    },

    {
        name: "Auditorium #2",
        seats: 12,
        facultyName: "Mathematics",
    },

    {
        name: "Auditorium #3",
        seats: 17,
        facultyName: "Engineering",
    },

    {
        name: "Auditorium #4",
        seats: 10,
        facultyName: "Physics",
    },

    {
        name: "Auditorium #5",
        seats: 15,
        facultyName: "Computer Science",
    },
    {
        name: "Auditorium #6",
        seats: 15,
        facultyName: "Engineering",
    },

]

function showAllAuditoriums(array)
{
    array.forEach(auditorium => 
    {
        console.log(`${auditorium.name} - ${auditorium.seats} - ${auditorium.facultyName}`);    
    });

}


function showChosenFaculty(array, fName)
{
    console.log("Chosen Faculty");
    array.forEach(auditorium => 
    {
        if(auditorium.facultyName == fName)
        {
            console.log(`${auditorium.name} - ${auditorium.seats} - ${auditorium.facultyName}`);
        }
        
    });

}

function showSuitableAuditorium(array, group)
{
    console.log(`Suitable auditorium for ${group.facultyName} and ${group.seats} students`);
    array.forEach(auditorium => 
    {
        if (auditorium.facultyName == group.facultyName && auditorium.seats >= group.seats) 
        {
            console.log(`${auditorium.name} - ${auditorium.seats} - ${auditorium.facultyName}`);
        }

    });


}

function sortBySeats(array) 
{
    console.log("Auditoriums sorted by Seats number");
    const sortedBySeats = [...array].sort((a, b) => a.seats - b.seats);
    showAllAuditoriums(sortedBySeats);
}


function sortByName(arr) 
{
    console.log("Auditoriums sorted by Name");
    const sortedByName = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    showAllAuditoriums(sortedByName);
}


showAllAuditoriums(auditoriumsArr);
showChosenFaculty(auditoriumsArr, "Engineering");
let group = {seats: 10, facultyName: "Mathematics" };
showSuitableAuditorium(auditoriumsArr, group);
sortBySeats(auditoriumsArr);
sortByName(auditoriumsArr);