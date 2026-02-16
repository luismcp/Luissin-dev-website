<div class="main-info">
    <h1>Dedución de las leyes de los logaritmos</h1>
    <div class="categories">
        <span class="category">Maths 🟰</span>
        <!-- <span class="category"></span> -->
    </div>
    <p>
        El siguiente artículo fue desarrollado en base y como producto del estudio del libro "Matemáticas Cuarto" de "Santalo - Carbonell" (Marcelo Santalo y Vicente Carbonell), en su septima edición del libro, emitida en 1987 por la editorial Joaquín Porrúa, México.
    </p>
</div>
<div class="banner-article">
    <img src="/images/naruto.png" alt="sreet from a random world site">
</div>

Las matemáticas, más que una ciencia reservada para unos pocos, adquieren presencia dentro de toda pauta social pasada y contemporanea. La política, la economía, el mercado, la seguridad social, entre muchos otros, son brillantes ejmplos orgullosmente representativos de una buena implementacion de las matemáticas en la vida induvidual y colectiva. Materias ampliamente reconocidas como la propabilidad y estadística, las formulas del comportamiento de oferta demanda, el comportaminto de elementos electricos y electrónicos, etc., establecen una imágen perfecta de infinidad de temas en exceso influyentes pero poco difundidos por los sistemas educativos básicos actuales. Dentro de todos estos, no considero sólo útil, sino necesario, enfocar nuestra vista, por lo menos un momento, al inverso de la exponenciación: los logaritmos. Multiplicaciones, divisiones, exponenciación, gráficas exponenciales, escalas exponenciales, simplificación de ecuaciones, etc., son solo algunos de los elementos de la infinita lista de aplicación logarítmica. 

"Las matemáticas nos ayudan a ser más felices..." son palabras del gran Eduardo Sáens de Cabezón. Fantaseo imaginando un mundo donde todos comprendan el peligro que representa cada número de la escala de Richter, donde el comportamiento de la economía no se lea en lenguaje de pocos, donde la lectura de gráficas de comportamientos eléctricos no se limite solo a tecnicos e ingenieros, donde a todos se nos permita aprender, pues el conocimiento debe ser público, mas no privado. 

No solo la música, la pintura, el diálogo, las tradiciones culturales, etc., forma parte del conocimiento colectivo. Las matemáticas también se encuentran en nuestra sociedad. Si bien el objetivo no es convertir a todo mundo en una calculadora humana, regalar mi estudio de conceptos matemáticos básicos al mundo, en algún momento de la vida, ayudará a más de uno a ser más feliz. 

## El concepto de logaritmo

El logaritmo de un número $"a"$ en una base $"b"$ es el expoente $"c"$ al que hay que elevar la base par obtener el número.

Ejemplo 1: De la igualdad $2^3 = 8$, se deduce que 3 es el logaritmo de 8 en la base 2.

Ejemplo 2: Como: $10^{0.5} = 10^{\frac{1}{2}} = \sqrt{10} = 3.162$, resulta que 0.5 es el logaritmo de 3.162 en la base 10.

La base de un sistema de logaritmos puede ser un número positivo cualquiera, exepto la unidad. 

Corrientemente se utilizan dos bases: el número 10, y entonces se llaman logaritmos decimales, vugares o de Briggs, y los que tienen com base el número "e", cuyo valor con 6 cifras es 2.718281. Los logaritmos base "e" se llaman también naturales, neperianos o hiperbólicos. 

***Si no se especifica la base, se sobrentiende que se trata de la base 10.***

## Leyes de los logaritmos

1. El logaritmo de un producto es igual a la suma de los logaritmos de sus factores:

$$
\log{(ab)} = \log{a} + \log{b}
$$

2. El logaritmo de un cociente es igual al logaritmo del dividendo menos el logaritmo del divisor:

$$
\log{\left(\frac{a}{b}\right)} = \log{a} - \log{b}
$$

3. El logaritmo de una potencia es igual al exponente multiplicado por el logaritmo de la base:

$$
\log{a^b} = b\cdot\log{a}
$$

4. El logaritmo de una raiz es igual al logaritmo del radicando dividido por el índice de la raíz:

$$
\log{\sqrt[n]{a}} = \frac{\log{a}}{n}
$$

### Primera deducción

Tomando en cuenta que:

$$
a,b \neq 0
$$

Comprobar que:

$$
\log{(ab)} = \log{a} + \log{b}
$$

El logaritmo de un término $"a"$ es igual a un término $"c"$ tal que $"10^c"$ sea igual a $"a"$. Del mismo modo, jugando con las literales, el logaritmo de un término $"b"$ es igual a un término $"d"$ tal que $"10^d"$ sea igual a $"b"$. Algebraiamente:

$$
\log{a} = c \quad\text{si y solo si}\quad 10^c = a \\\\
\log{b} = d \quad\text{si y solo si}\quad 10^d = b 
$$

Y ya que se está utilizando base "10", también sbaemos que:

$$
\log{10^n} = n
$$

Es decir, bajo la base 10, el logaritmo de 10 elevado a un valor n, es siempre igual al valor n.

Para corroborar la fórmula escribimos el logaritmo del producto de $"a"$ y $"b"$, para después sustituirlo por su svalores correspondientes aplicando las igualdades anteriores:

$$
\begin{split}
\log{(ab)} &= \log{(10^{c} \cdot 10^{d})} \\\\
&= \log{10^{c+d}} \\\\
&= c + d \\\\
&= \log{a} + \log{b} \\\\
\end{split}
$$

### Segunda deducción

Justificar:

$$
\log{\left(\frac{a}{b}\right)} = \log{a} - \log{b}
$$

Bajo los mismos criterios podemos decir:

$$
\log{a} = c \quad\text{si y solo si}\quad 10^c = a \\\\
\log{b} = d \quad\text{si y solo si}\quad 10^d = b 
$$

Por lo tanto, reescribiendo y aplicando igualdades:

$$
\begin{split}
\log{\left(\frac{a}{b}\right)} &= \log{\frac{10^c}{10^d}} \\\\
&= \log{10^{c-d}} \\\\
&= c-d \\\\
&= \log{a} - \log{b} \\\\
\end{split}
$$

### Tercer deducción

Comprobar que:

$$
\log{a^b} = b \cdot\log{a}
$$

Es necesario recordar la definición de logaritmo: el logaritmo de un término es igual a otro tal que 10 elevado a ese otro término sea igual al primero. Algebraicamente:

$$
\log{a} = x \quad\text{tal que}\quad 10^x = a
$$

Así, obtenemos dosigualdades que podemos aprovechar para sustituir términos:

$$
10^{\log{a}} = a \quad\text{ya que}\quad x = \log{a}
$$

Y ahora, si lo elevamos a una potencia b, y obtenemos el logaritmo de ese valor, sucede:

$$
\begin{split}
(10^{\log{a}})^b &= a^b \\\\
10^{b\cdot \log{a}} &= a^b \\\\
\log{10^{b\cdot \log{a}}} &= \log{a^b} \\\\
b\cdot \log{a} &= \log{a^b} \\\\
\end{split}
$$

### Cuarta ley

Determinar que:

$$
\log{\sqrt[n]{a}} = \frac{\log{a}}{n}
$$

De un modo muy similar al anterior y trabajando las raices como potencias:

$$
\begin{split}
\log{\sqrt[n]{a}} &= \log{a^{\frac{1}{n}}} \\\\
&= \log{a^{\frac{1}{n}}} \\\\
&= \frac{1}{n}\cdot\log{a} \\\\
&= \frac{\log{a}}{n} \\\\
\end{split}
$$

