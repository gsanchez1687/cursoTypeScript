//Tipos en TypeScript
//String    (cadenas de texto)
//Number    (enteros, flotantes, hexadecimales, binarios, octales)
//Boolean   (true/false)

//Void      es un tipo de dato que se utiliza en funciones y no retorna nada
//Undefined es un tipo de dato que se utiliza para variables que no han sido inicializadas
//Null      es un tipo de dato que se utiliza para variables que han sido inicializadas pero no tienen valor
//Object    es un tipo de dato que representa un objeto
//function  es un tipo de dato que representa una función

//Tipos de TypeScript
//Any       (cualquier tipo de dato)
//unknown   (cualquier tipo de dato pero más seguro que any)
//never    (nunca retorna un valor)
//arrays    (arreglos)
//tuple     (tuplas)
//enum      (enumeraciones)

let extincionDinosaurios = 76_000_000;
let dinosauriofavorito = "Tyrannosaurus Rex";
let extindos = true;


//Si no le asignamos un valor a una variable, TypeScript la toma como tipo any
let otravariable;

function saludar(config: any){

}



let animales:string[] = ["Perro", "Gato", "Pez", "Pájaro"];
let numeros:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let checks:boolean[] = [];

//metodo alternativo que tiene TypeScript para declarar arreglos
let frutas:Array<string> = ["Manzana", "Pera", "Uva", "Fresa"];
let edades:Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//mas ejemplos
let nombres:Array<string> = ["Juan", "Pedro", "Luis", "Carlos"];
let ciudades:Array<string> = ["CDMX", "Guadalajara", "Monterrey", "Puebla"];
let colores:Array<string> = ["Rojo", "Azul", "Verde", "Amarillo"];
let dias:Array<string> = ["Lunes", "Martes", "Miercoles", "Jueves"];
let meses:Array<string> = ["Enero", "Febrero", "Marzo", "Abril"];

//meses.map(x => x.charAt) //el autocompletado sigiere metodos del tipo de dato