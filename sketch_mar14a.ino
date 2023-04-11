//Sensor de temperatura usando o LM35
 
const int LM35 = A0; // Define o pino que lera a saída do LM35
const int led = 4;
float temperatura; // Variável que armazenará a temperatura medida
 
//Função que será executada uma vez quando ligar ou resetar o Arduino
void setup() {
Serial.begin(9600); // inicializa a comunicação serial
  pinMode(led,OUTPUT);
}
 
//Função que será executada continuamente
void loop() {
temperatura = (float(analogRead(LM35))*5/(1023))/0.01;
Serial.print("Temperatura: ");
Serial.println(temperatura);
delay(2000);
  if (temperatura > 26){
  digitalWrite(4, HIGH);
    delay (10000);
  }
  else {
  digitalWrite (4, LOW);
  }
}
