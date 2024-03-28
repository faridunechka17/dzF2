var programming = prompt('Введите язык программирования').toLowerCase().toUpperCase()
switch (programming){
    case 'JavaScript':
        console.log('отличный выбор для веб-разработки')
        break
    case 'PHP':
        console.log('отличный выбор для веб-разработки')
        break
    case 'Python':
        console.log('отличный выбор для веб-разработки')
        break
    case 'Ruby':
        console.log('отличный выбор для веб-разработки')
        break
    case 'Java':
        console.log('отличный выбор для разработки игр')
        break
    case 'С++':
        console.log('отличный выбор для разработки игр')
        break
    case 'Swift':
        console.log('отличный выбор для разработки игр')
        break
    default:
       alert('Повторите!')
}




 var student = {
     name: 'Farida',
     age: 18,
     major: 'Frontend',
 }
 console.log(student)
 student.grades = [5,5,5,5,5,5]
 student['age'] = 20
 console.log(student)

//
//
 var sum = 0
 for (var i = 0;i <=5; i++){
     console.log(sum)
 }


//
 for (var i = 0; i <= 10; i++){
     if (i % 2 === 0 ){
         console.log(i)
     }
 }