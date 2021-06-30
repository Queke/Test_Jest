

describe('Prueba', () => {          // Describe es la prueba que se ejecutará que es este caso el nombre es "Prueba
    describe('Suma', () => {        // Aquí esta el nombre de la prueba que se está realizando, que es "Suma"
        it('Suma 2 Números', () => { // y aquí se realiza el test, que en este casi es la suma
            const suma = (a, b)=> {
                return a + b
            }

            expect(suma(1,2)).toEqual(3) // => lo que se espera que suceda #1
        })
    })
})




/* #1
    Lo que se espera que suceda es que se sume (1 y 2) y tenga que dar como resultado 3
    para eso se utiliza 'toEqual' => se espera que 1+2 sea igual a 3
*/

// este comando es para tener las pruebas corriendo "--watchAll"