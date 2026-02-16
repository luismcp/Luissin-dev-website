<div class="main-info">
    <h1>Deducción de las propiedades de los exponentes y radicales</h1>
    <div class="categories">
        <span class="category">Maths 🟰</span>
        <!-- <span class="category"></span> -->
    </div>
    <p>
        El siguiente artículo fue desarrollado en base y como producto del estudio del libro "Matemáticas Cuarto" de "Santalo - Carbonell" (Marcelo Santalo y Vicente Carbonell), en su septima edición del libro, emitida en 1987 por la editorial Joaquín Porrúa, México.
    </p>
</div>
<div class="banner-article">
    <img src="/images/pexels-12.jpg" alt="sreet from a random world site">
</div>

## No, las matemáticas no son tan estrictas

Una de las mayores mentiras autoimpuestas de las matemáticas es considerarlas como una serie de estricas reglas sin personalidad o disposición a cambios. Para sorpresa de muchos, las matemáticas son todo lo contrario.

Del mismo modo que como se especifica la extensión de un tipo de archivo en nuestras computadoras, así mismo es neceario especificar el contexto de partida de una operación matemática y algebraica, así como la asunción de los axiomas matemáticos, de este modo, se evitan incongruencias que de otra forma rosarían la inconsistenicia (cosa a evitar en las ciencias exactas).

Dependiendo del tipo de operación a realizar, se nos ha facilitado dotar de "cualidades" al algebra con la finalidad de establecer igualdades que nos permitan facilitarnos la manipuación de una u otra expresión. Así pues, las propiedades matemáticas no son más que una serie de igualdades que se rigen bajo las reglas de un contexto en específico; por esta razón, no se deben aplicar como verdades absolutas, sino entender en qué momento se nos permite utilizarlas. 

En este artículo, se tiene por objetivo mostrar deducciones (no demostraciones) algebraicas de las propiedades de los exponentes y radicales, para así, en determinado momento, ser capaces de responder a la pregunta: ¿Puedo aplicar aquí esta propiedad?.

## Lista y deducción

Propiedades a deducir:

1. Producto de potencias de la misma base

$$
a^m \cdot a^n = a^{m+n}
$$

2. Cociente de potencias de la misma base

$$
\frac{a^m}{a^n} = a^{m-n}
$$

3. Potencia de un producto

$$
(abc)^n = a^n \cdot b^n \cdot c^n
$$

4. Potencia de un cociente o fracción

$$
\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
$$

5. Raíz de un producto

$$
\sqrt[n]{abc} = \sqrt[n]{a} \cdot \sqrt[n]{b} \cdot \sqrt[n]{c}
$$

6. Raíz de un cociente

$$
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}
$$

7. Raíz de una potencia

$$
\sqrt[m]{a^n} = (\sqrt[m]{a})^n
$$

8. Raíz de una raíz

$$
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}
$$

### 1. Producto de potencias de la misma base

Si:

$$
n,m \quad\in\quad \mathbb{N}
$$

Entonces:

$$
a^m \cdot a^n = a^{m+n}
$$

Deducción:

Entendemos $a^n$ y $a^m$ como un valor "$a$", "$n$" o "$m$" veces multiplicado por si mismo. Expresado algebraicamente: $a \cdot a \cdot a...\text{(n veces)} = a^n$; o bien $a \cdot a \cdot a... \text{(m veces)} = a^m$. Nótese que el uso de la literal del exponente (en este caso "$n$" y "$m$") se encuentra dispuesta a cambios para un mismo valor base.

Por lo tanto:

$$
\begin{split}
& (a^n) \cdot (a^m) = ? \\\\
& (a \cdot a \cdot a...\text{(n veces)}) \cdot (a \cdot a \cdot a...\text{(m veces)}) = ? \\\\
& a \cdot a \cdot a \text{... (n veces)} \cdot a \cdot a \cdot a \text{... (m veces)} = ?
\end{split}
$$

Tras analizar las igualdades y con la explicación dada previamente, logramos captar que $(a^n) \cdot (a^m)$ no es más que la repetición de $"a"$ por $"x"$ cantidad de veces, donde $"x"$ es la suma de las $"n"$ cantidad de veces que $"a"$ se repite más $"m"$ cantidad de veces que $"a"$ se repite.

Si:

$$
a^n \cdot a^m = a \cdot a \cdot a \text{... (n veces)} \cdot a \cdot a \cdot a \text{... (m veces)} = a^x
$$

Y:

$$
x = n+m \quad\text{es decir, n + m repeticiones de "a"}
$$

Entonces:

$$
a^n \cdot a^m = a^x = a^{n + m}
$$

### 2. Coiente de potencias de la misma base

Considerando que:

$$
n,m \quad\in\quad\mathbb{N} \\\\
m \geq n \\\\
a \neq 0
$$

Entonces:

$$
\frac{a^m}{a^n} = a^{m-n}
$$

Deducción:

Del mismo modo que el explicado anteriormente, decir "$a^m$" o "$a^n$" se traduce como "la multilpicacion por sí mismo de $"a"$, ya sea $"m"$ o $"n"$ cantidad de veces".

Por lo tanto:

$$
\frac{a^m}{a^n} = \frac{a\cdot a\cdot a... \text{(m cantidad de veces)}}{a\cdot a\cdot a... \text{(n cantidad de veces)}}
$$

Y si $m > n$, entonces:

$$
\begin{split}
\frac{a\cdot a\cdot a... \text{(m cantidad de veces)}}{a\cdot a\cdot a... \text{(n cantidad de veces)}} &= \frac{a}{a} \cdot \frac{a}{a} \cdot \frac{a}{a} \cdot ... \frac{a}{1} \cdot \frac{a}{1} \cdot  \frac{a}{1}... \\\\
&= 1 \cdot  1 \cdot  1 \cdot... a \cdot a \cdot a \cdot... \text{(m - n cantidad de veces)} \\\\
&= a \cdot a \cdot a \cdot... \text{(m - n cantidad de veces)} \\\\
&= a^{m-n}
\end{split}
$$

Y en el caso de que $m = n$:

$$
\frac{a\cdot a\cdot a... \text{(m cantidad de veces)}}{a\cdot a\cdot a... \text{(n cantidad de veces)}} = \frac{a}{a} \cdot \frac{a}{a} \cdot \frac{a}{a} \cdot... = 1 \cdot 1 \cdot 1 \cdot... = 1
$$

Es decir, finalmente la repetición de la multiplicación por sí mismo de valor $"a"$ termina siendo $"m - n"$, demostrando que:

$$
\frac{a^m}{a^n} = a^{m-n}
$$

Nótese que en caso de que $"m"$ y $"n"$ sean iguales, el expontente resultante será un $"0"$, por lo que se acepta la convención de que $a^0 = 1$.

### 3. Potencia de un producto

Considerando que:

$$
n \quad\in\quad \mathbb{N}
$$

$$
(a \cdot b \cdot c)^n = a^n \cdot b^n \cdot c^n 
$$

Objetivo: probar que las potencias (naturales) son distributivas con respecto al producto.

Deducción:

$$
\begin{split}
(a \cdot b \cdot c)^n &= (a \cdot b \cdot c)\cdot (a \cdot b \cdot c)\cdot(a \cdot b \cdot c)... \quad\text{(n veces)} \\\\
&= (a \cdot a \cdot a...\text{(n veces)}) \cdot (b \cdot b \cdot b...\text{(n veces)}) \cdot (c \cdot c \cdot c...\text{(n veces)}) \\\\
&= a^n \cdot b^n \cdot c^n
\end{split}
$$

### 4. Potencia de un cociente o fracción

Considerando que:

$$
b \neq 0 \\\\
n \quad\in\quad \mathbb{N}
$$

Se dice que:

$$
\left[ \frac{a}{b} \right]^n = \frac{a^n}{b^n}
$$

Deducción:

Previamente debemos introducir una ampliación al concepto de exponente, donde se acepta que si, a partir de la forma $\frac{a^m}{a^n}$, $n>m$, el exponente negativo representa al reciproco de la base. De forma algebraica esta ampliación luce asi:

Si:

$$
n > m
$$

Ocurre:

$$
\begin{split}
\frac{a^m}{a^n} &= \frac{a \cdot a \cdot a... \text{(m veces)}}{a \cdot a \cdot a... \text{(n veces)}}\\\\
&= \frac{a}{a} \cdot \frac{a}{a} \cdot \frac{a}{a} \cdot...\text{(m veces)} \cdot \frac{1}{a} \cdot \frac{1}{a} \cdot \frac{1}{a} \cdot... \text{(n-m veces)} \\\\ 
&= 1 \cdot 1 \cdot 1 \cdot ...\text{(m veces)} \cdot \frac{1}{a} \cdot \frac{1}{a} \cdot \frac{1}{a} \cdot ...\text{(n-m veces)} \\\\
&= \frac{1}{a} \cdot \frac{1}{a} \cdot \frac{1}{a} \cdot ...\text{(n-m veces)} \\\\
&= \frac{1}{a \cdot a \cdot a \cdot... \text{(n-m veces)}} \\\\
&= \frac{1}{a^{n-m}} \\\\
&= a^{-(n-m)}
\end{split}
$$

Por lo tanto:

$$
\frac{1}{a^{n-m}} = a^{-(n-m)} = a^{m-n}
$$

Con esto especificado, haciendo uso de esta misma propiedad se vuelve muy sencillo corroborar que en efecto una potencia es distributiva en una fracción bajo la forma $[\frac{a}{b}]^n$.

$$
\begin{split}
\left[ \frac{a}{b} \right]^n &= \left[ \frac{a}{1} \cdot \frac{1}{b}  \right]^n \\\\
&= a^n \cdot \left(\frac{1}{b}\right)^n \\\\
&= a^n \cdot (b^{-1})^n \\\\
&= a^n \cdot b^{-n} \\\\
&= \frac{a^n}{1} \cdot \frac{1}{b^n} \\\\
&= \frac{a^n}{b^n}
\end{split}
$$

### 5. Raíz de un producto

$$
\sqrt[n]{abc} = \sqrt[n]{a} \cdot \sqrt[n]{b} \cdot \sqrt[n]{c}
$$

Considerando que:
$$
n \quad\in\quad \mathbb{N}
$$

Definimos a la raiz de radical "n" como un valor $"a"$ que es igual a "x" multiplicado por sí mismo $"n"$ cantidad de veces. Es decir: $\sqrt[n]{a} = x$ si y solo si $x^n = a$. Como el objetivo es "convertir" la raíz a potencia, dos formas intuitivas de lograrlo son:

Forma 1:

Ya que:

$$
x^n = a
$$

Entonces:

$$
\begin{split}
\sqrt[n]{a} &= x = \sqrt[n]{x^n} \\\\
&= x^{\frac{n}{n}} \\\\
&= (x^n)^{\frac{1}{n}} \\\\
&= a^{\frac{1}{n}}
\end{split}
$$

Forma 2:

Recordando propiedades de los exponentes, cuando valores con la misma parte literal se multiplican, el resultado será la misma parte literal elevados a la suma de sus exponentes. Algebraicamente: $a^n \cdot a^m = a^{n+m}$. De esta forma:

$$
a = \sqrt[n]{a} \cdot \sqrt[n]{a} \cdot \sqrt[n]{a}...\text{(n cantidad de veces)} 
$$

Encontramos que: el radicando (el valor dentro de la raíz) es el mismo; el radical permanece constante. Dicho esto, si convertimos las raíces a exponentes fraccionarios:

$$
\begin{split}
a &= a^{\frac{1}{n}} \cdot a^{\frac{1}{n}} \cdot a^{\frac{1}{n}} \cdot ... \text{(n cantidad de veces)} \\\\
&= \left[a^{\frac{1}{n}}\right]^n \\\\
&= a^{\frac{n}{n}}
\end{split}
$$

A continuacion un ejemplo para mayor comprensión:

$$
\begin{split}
a &= \sqrt[3]{a} \cdot \sqrt[3]{a} \cdot \sqrt[3]{a} \\\\
&= a^{\frac{1}{3}} \cdot a^{\frac{1}{3}} \cdot a^{\frac{1}{3}} \\\\
&= a^{\frac{1}{3} + \frac{1}{3} + \frac{1}{3}} \\\\ 
&= a^{\frac{3}{3}}
\end{split}
$$

Pues la única suma de 3 fracciones iguales cuyo resultado sea un entero, es la suma de $\frac{1}{3} + \frac{1}{3} + \frac{1}{3}$. Así pues, las unica operacion de fracciones $\frac{1}{n}$ cuya suma sea igual a 1, es la suma de $"n"$ cantidad de fracciones.

Por lo ende:

$$
\sqrt[n]{a} = a^{\frac{1}{n}}
$$

Una vez establecido que las raices tienen un comportamiento muy similar al de las potencias, solo es cuestión de aplicar propiedad distributiva con respecto de la multiplicación a las raíces "transformadas" a potencias fraccionarias:

$$
\begin{split}
\sqrt[n]{abc} &= (abc)^{\frac{1}{n}} \\\\
&= a^{\frac{1}{n}} \cdot b^{\frac{1}{n}} \cdot c^{\frac{1}{n}} \\\\
&= \sqrt[n]{a} \cdot \sqrt[n]{b} \cdot \sqrt[n]{c} 
\end{split}
$$

### 6. Raíz de un cociente

$$
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}
$$

De forma muy similar:

$$
\begin{split}
\sqrt[n]{\frac{a}{b}} &= \left[\frac{a}{b}\right]^{\frac{1}{n}} \\\\
&= \left[\frac{a}{1} \cdot \frac{1}{b} \right]^{\frac{1}{n}} \\\\
&= \left(\frac{a}{1}\right)^{\frac{1}{n}} \cdot \left(\frac{1}{b}\right)^{\frac{1}{n}} \\\\
&= a^{\frac{1}{n}} \cdot \left[b^{-1}\right]^{\frac{1}{n}} \\\\
&= a^{\frac{1}{n}} \cdot b^{-\frac{1}{n}} \\\\
&= a^{\frac{1}{n}} \cdot \frac{1}{b^{\frac{1}{n}}} \\\\
&= \sqrt[n]{a} \cdot \frac{1}{\sqrt[n]{b}} \\\\
&= \frac{\sqrt[n]{a}}{\sqrt[n]{b}}
\end{split}
$$

### 7. Raiz de una potencia

Considerando que:

$$
n,m \quad\in\quad \mathbb{N} \\\\
\text{si "m" es par, "a" debe ser} \geq 0
$$

Deducción analizando como potencias:

$$
\begin{split}
\sqrt[m]{a^n} &= (a^n)^{\frac{1}{m}} \\\\
&= (a \cdot a \cdot a \cdot... \text{(n veces)})^{\frac{1}{m}} \\\\
&= a^{\frac{1}{m}} \cdot a^{\frac{1}{m}} \cdot a^{\frac{1}{m}} \cdot ... \text{(n veces)} \\\\
&= \sqrt[m]{a} \cdot  \sqrt[m]{a} \cdot \sqrt[m]{a} \cdot ...\text{(n veces)} \\\\
&= \left[\sqrt[m]{a}\right]^{n} 
\end{split}
$$

### 8. Raíz de una raíz

$$
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}
$$

Deducción analizando como potencias:

$$
\begin{split}
\sqrt[m]{\sqrt[n]{a}} &= [(a)^{\frac{1}{n}}]^{\frac{1}{m}} \\\\
&= a^{\frac{1}{n} \cdot \frac{1}{m}} \\\\
&= a^{\frac{1}{mn}} \\\\
&= \sqrt[mn]{a}
\end{split}
$$
