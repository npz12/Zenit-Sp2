//Sensor de temperatura usando o LM35
 
const int LM35 = A0; // Define o pino que lera a saída do LM35
float temperatura; // Variável que armazenará a temperatura medida
 
//Função que será executada uma vez quando ligar ou resetar o Arduino
void setup() {
Serial.begin(9600); // inicializa a comunicação serial

}
 
//Função que será executada continuamente
void loop() {
temperatura = (float(analogRead(LM35)* 0.00488)) * 100;
Serial.println(temperatura);
delay(4000);

}
