import tf from "@tensorflow/tfjs";
import PromptSync from "prompt-sync";


const prompt = PromptSync();

const filas = parseInt(prompt("Ingrese la cantidad de filas: "));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas: "));

const dimensiones = [filas, columnas];

const x = tf.randomUniformInt(dimensiones, 1, 21);
const y = tf.randomUniformInt(dimensiones, 1, 21);


console.log("Matriz X:");
x.print();

console.log("Matriz Y:");
y.print();

console.log("Suma:");
tf.add(x, y).print();

console.log("Multiplicación elemento a elemento:");
tf.mul(x, y).print();
