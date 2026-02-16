<div class="main-info">
    <h1>Análisis del desarrollo de productos notables y factorizacion</h1>
    <div class="categories">
        <span class="category">Maths 🟰</span>
        <!-- <span class="category"></span> -->
    </div>
    <p>
        El siguiente artículo fue desarrollado en base y como producto del estudio del libro "Matemáticas Cuarto" de "Santalo - Carbonell" (Marcelo Santalo y Vicente Carbonell), en su septima edición del libro, emitida en 1987 por la editorial Joaquín Porrúa, México.
    </p>
</div>
<div class="banner-article">
    <img src="../public/images/pexels-8.jpg" alt="sreet from a random world site">
</div>

## Las fórmulas no funcionan si no las entiendes

Sin las correctas bases matemáticas, incluso la ecuación más sencilla puede resultar producto de terror, o peor aún, una simple plantilla rellenada únicamente por mero mecanismo, generando tanto malos hábitos como resultados vacíos de comprensión. 

Tanto la factorización como los productos notables son solo algunos de los cimientos determinantes de la futura habilidad matemática de una persona. Verlos únicamente como aparentes fórmulas solo hará que nos separemos de su verdadero objetivo: **volver más y más eficiente el desarollo algebraico.**

Dicho esto, a través de las siguientes palabras, planeo establecer un correcto análisis y desarrollo de productos y factorizaciónes matemáticas a modo de guía y tomando cada ejemplo como punto de apoyo, más no como subtema, pues desde mi perspectiva, **tratarlos como temas independientes nos alejaría de la intuición humana y nos acercaría a la memorizaión.**

## Desglosando para agilizar y aprender

*"El cuadrado de un polinomio es igual a la suma de los cuadrados de cada uno de sus terminos, más los dobles productos algebraios de cada uno de ellos por todos los demás".*

A modo de ejemplo:

$$
\begin{split}
(a + b - c -d)^2 &= a^a + b^2 + c^2 + d^2 \\\\
&+ 2ab - 2ac -2ad - 2bc -2bd + 2cd
\end{split}
$$

Una fórmula simple y bella, que al analizar con mayor profundidad, explica muchas otras de los productos notables. 

Cuando se tiene el cuadrado de un polinomio, significa que cada termino será multipicado por todos los terminos del polinomio. De esto deducimos que:

1. Todo término será multiplicado por sí mismo
2. Ya que todos los términos multiplican a los demás en algún momento, habrán expresiones que se repitan

Para resolver este tipo de problemas sin necesidad de la fórmula, hay que priorizar observar aquellos términos resultantes de multiplicarse por sí mismos ($a^2, b^2, c^2, etc.$), para después, analizar que pasaría con aquellos que resultan de varios semejantes. 

Basemonos en la siguiente ecuación para realizar lo dicho:

$$
(a + b + c)(a + b + c) = (a + b + c)^2
$$

Aplicando propiedad distributiva:

$$
\begin{split}
(a + b + c)(a + b + c) &= (a + b + c) \cdot a \\\\
& + (a + b + c) \cdot b \\\\
& + (a + b + c) \cdot c
\end{split}
$$

Ignorando el término $"c"$ de momento: 

- Al empezar el procedimiento, el término $"a"$ se multiplica por sí mismo, para después multiplicar a $"b"$
- Cuando es el turno de $"b"$, primero multiplica a $"a"$, y a continuación a sí mismo. 

Todo esto resultando en $[a^2 + ab + ba + b^2]$, donde $"ab"$ y $"ba"$ son términos semejantes, y puede expresarse como $"2ab"$, apareciendo como $[a^2 + 2ab + b^2]$. Un binomio al cuadrado: $(a + b)^2$.

Finalmente, tomando en cuenta el término $"c"$:

- Al empezar el procedimiento, $"a"$ multiplica a $"c"$
- A contiuación, $"b"$ multiplica a $"c"$
- Finalizando con $"c"$ multiplicando a todos los términos del polinomio

Resumiendose en $[ac + bc + ca + cb + c^2]$, donde $"ac"$ y $"ca"$, $"bc"$ y $"cb"$, siendo términos semejantes, se reduce todo a $[2ac + 2bc + c^2]$

Por lo tanto, toda la ecuación podemos expresala como:

$$
\begin{split}
(a + b + c)(a + b + c) &= (a + b)^2 + [2ac + 2bc + c^2] \\\\
&= a^2 + 2ab + b^2 + [2ac + 2bc + c^2] \\\\
&= a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
\end{split}
$$

Hasta este momento, todo el procedimiento puede parecer algo innecesario, pero ¿qué suede cuando no todos los términos son semejantes sino que existen simétricos?

Dada la siguiente expresión:

$$
(a + b + c)(a + b -c) = \quad?
$$

Deducimos que:

1. Cada término del primer plinomio multiplica a cada término del segundo polinomio (propiedad distributiva)
2. Al aún haber términos iguales, del mismo modo, seguirán apareciendo términos al cuadrado
3. Aquellos términos que no sean iguales pero sí simétrios serán cuadrados de signo negativo (a diferencia de cuando son iguales, pues independientemente del signo, son cuadrados positivos)
4. Aquellos términos que resulten de multiplicar el término simétrico, se cancelarán entre sí (en este caso, todos aquellos de multiplicar a $"c"$)

Por lo tanto:

$$
\begin{split}
(a + b + c)(a + b -c) &= (a + b + c) \cdot a \\\\
&+ (a + b + c) \cdot b \\\\
&+ (a + b + c) \cdot -c
\end{split}
$$

Resolvemos cuadrados:

$$
(a + b + c)(a + b -c) = a^2 + b^2 - c^2 + ...
$$

Identificamos qué terminos multiplican a los simétrios:

$$
(a + b + c)(a + b -c) = ac + bc - ac - bc + ...
$$

Identificamos términos semejantes: 

$$
(a + b + c)(a + b -c) = ab + ba + ...
$$

Y ya que, como dedujimos anteriormente, aquellos que resulten de multiplicar a los simétricos suman $0$, y $"ab"$ y $"ba"$ son iguales, entonces:

$$
\begin{split}
(a + b + c)(a + b -c) &= a^2 + b^2 - c^2 \\\\
& + [ac + bc - ac - bc] \\\\
& + [ab + ba] \\\\
(a + b + c)(a + b -c) &= a^2 + b^2 - c^2 \\\\
& + [0] \\\\
& + [2ab] \\\\
(a + b + c)(a + b -c) &= a^2 + b^2 - c^2 + 2ab
\end{split}
$$

## Aplicando y deduciento

### Primera deducción

Con lo explicado, deducir a vista un binomio conjugado parece juego de niños. 

Dada la expresión:

$$
(a + b)(a - b) = \quad ?
$$

Resolvemos cuadrados:

$$
(a + b)(a - b) = a^2 - b^2 + ...
$$

Añadimos los productos de los simétricos:

$$
(a + b)(a - b) = -ab + ba + ... 
$$

Resultado:

$$
(a + b)(a - b) = a^2 - b^2 \quad \text{Diferencia de cuadrados}
$$

>No hay necesidad de memorizar la fórmula. Una vez entendiendo el proceso matemático, podemos jugar con cualquier expresión 😉.

### Segunda deducción

*"Para factorizar trinomios de segundo grado de la forma $ax^2 + bx + c$, se buscan dos numeros que tengan como producto $"ac"$ y como suma $"b"$. Se descompone el término $"bx"$ en la suma de dos, cuyos coeficientes sean los numeros encontrados y después de factoriza la expresión por agrupamiento"*

Ejemplo: 

$$
6x + 5x - 6 \\\\
producto =  ac = 6 \cdot -6 = -36 \\\\
suma = b = 5 \\\\
\text{los numeros son 9 y -4}
$$

$$
\begin{split}
6x^2 + 5x - 6 &= 6x^2 + [9x -4x] - 6 \\\\
&= 3x(2x + 3) - 2(2x + 3) \\\\
&= (3x - 2)(2x + 3)
\end{split}
$$

A pesar de que este procedimiento es muy sencillo de comprender, con efecto de aprender a identificar términos desde una perspectiva algebraica, comencemos a desglosar a través de literales partiendo del producto resultado de la factorización:

$$
\text{La expresión}\quad (3x - 2)(2x + 3) \\\\
\text{se puede expresar como} \\\\
(ax + m)(bx + n)
$$

Resolvamos:

$$
\begin{split}
(ax + m)(bx + n) &= (bx + n) \cdot ax \\\\
& + (bx + n) \cdot m \\\\
(ax + m)(bx + n) &= (ax)(bx) + (ax)(n) \\\\
& + (m)(bx) + (m)(n) \\\\
(ax + m)(bx + n) &= (ab)x^2 + (an)x + (bm)x + (mn) \\\\
&= (ab)x^2 + (an+bm)x + (mn) 
\end{split}
$$

Por ende, el producto de $"an"$ y $"bm"$ son iguales al producto de $"ab"$ y $"mn"$, cumpliendo con la condición planteada con anterioridad: "... se buscan dos numeros que tengan como producto $"ac"$ y como suma $"b"$".

### Tercer deducción

"La suma de los cubos de dos expresiones es igual al producto de dos factores: uno de ellos es la suma de estas expresiones, y el otro, es igual al cuadrado de la primera, menos el producto de las dos, más el cuadrado de la segunda"

Fórmula:

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
$$

Deducción:

1. Forzamos la aparición de los términos al cubo
2. Restamos el resto de términos que no son necesarios

Se lleva a cabo el siguiente desarrollo:

$$
(a + b)(a^2 + b^2) = a^3 + [ab^2 + a^2b] + b^3
$$

Observamos que lo necesario para obtener solo $"a^3 + b^3"$ (que son los cubos de las bases $"a"$ y $"b"$) necesitamos restar de la expresion tanto $"ab^2"$ como $"a^2b"$. En tal caso:

$$
a^3 + b^3 = a^3 + [ab^2 + a^2b] + b^3 - [ab^2 + a^2b]
$$

que es igual a:

$$
\begin{split}
a^3 + b^3 &= (a + b)(a^2 + b^2) + - [ab^2 + a^2b] \\\\
&= (a + b) (a^2 + b^2) + (a + b)(-ab)
\end{split}
$$

y por agrupación:

$$
a^3 + b^3 = (a + b)(a^2 -ab + b^2) \\\\ \text{Factorizacion de una suma de cubos}
$$

## Ejemplo final

Es muy sencillo reducir la suiguiente expresión a partir de los conocimientos adquiridos:

$$
\frac{ax^2 - 9a}{3x - 3y - x^2 + xy}
$$

Del lado del numerador (que es: $ax^2 - 9a$) a modo de reflejo observamos un binomio conjugado, con la única peuliaridad que fue multipicado por el término $"a"$:

$$
\frac{ax^2 - 9a}{3x - 3y - x^2 + xy} = \frac{a(x + 3)(x - 3)}{3x - 3y - x^2 + xy}
$$

A partir de este punto, debido a que no es posible "cancelar" terminos cuando el denominador es una suma (al menos no de la forma corriente), procedemos a factorizar todo el polinomio del denominador, forzando la aparición de alguno de los términos del numerador:

$$
\frac{a(x + 3)(x - 3)}{3x - 3y - x^2 + xy} = \frac{a(x + 3)(x - 3)}{-3(-x + y) + x(-x + y)}
$$

y por agrupación:

$$
\frac{a(x + 3)(x - 3)}{-3(-x + y) + x(-x + y)} = \frac{a(x + 3)(x - 3)}{(y-x)(x - 3)}
$$

y "cancelando":

$$
\frac{a(x + 3)(x - 3)}{(y-x)(x - 3)} = \frac{a(x + 3)}{(y-x)} 
$$

>No hace falta una mente prodigiosa para resolver ecuaciones casi de forma instantanea. Las bases matemáticas están ahí para comprenderse, no para confundir. Como dijo alguna vez Richard Feyman "... there is no miracle people".
