/**
 * ============================================================
 *  BATERÍA DE PREGUNTAS — PRUEBA TÉCNICA FULLSTACK
 *  React · Express · JWT · Bcrypt · Testing · Tailwind
 * ============================================================
 *
 *  INSTRUCCIONES
 *  -------------
 *  1. Para cada pregunta, escribe tu respuesta en el campo
 *     `tuRespuesta` (reemplaza null).
 *  2. Ejecuta los tests para ver cuántas aciertas:
 *
 *       npx vitest --run
 *
 *  3. Cada test te dirá si pasaste o fallaste, y en caso de
 *     fallo te mostrará la respuesta correcta.
 *
 *  TIPOS DE RESPUESTA
 *  ------------------
 *  - Opción múltiple  → escribe la letra:  "a" | "b" | "c" | "d"
 *  - Verdadero/Falso  → "verdadero" | "falso"
 *  - Código/texto     → escribe el valor exacto indicado
 *  - Orden            → array de letras:   ["b", "a", "c"]
 * ============================================================
 */

export const respuestas = {

  // ─────────────────────────────────────────────
  //  BLOQUE 1 · REACT FUNDAMENTOS  (Q01–Q12)
  // ─────────────────────────────────────────────

  /** Q01 ─ ¿Qué devuelve un componente de React? */
  Q01: null,
  /*
    a) Un string HTML que el navegador interpreta directamente
    b) Una descripción (JSX/objetos) de cómo debería verse la UI
    c) Un nodo del DOM real
    d) Un evento del navegador
  */

  /** Q02 ─ ¿Cuál de estas formas de pasar una función a onClick es CORRECTA? */
  Q02: null,
  /*
    a) <button onClick={handleClick()}>
    b) <button onClick="handleClick">
    c) <button onClick={handleClick}>
    d) <button onClick={() => { handleClick }}>
  */

  /** Q03 ─ ¿Qué ocurre si cambias directamente una variable local dentro de
    un componente sin usar setState? */
  Q03: null,
  /*
    a) React detecta el cambio y repinta automáticamente
    b) El valor cambia pero React no repinta la pantalla
    c) Se lanza un error en tiempo de ejecución
    d) El componente se desmonta
  */

  /** Q04 ─ Dado este código, ¿cuántas veces aparecerá "Hola" en pantalla?
    ```jsx
    function App() {
      return (
        <div>
          <Saludo />
          <Saludo />
          <Saludo />
        </div>
      )
    }
    function Saludo() { return <p>Hola</p> }
    ```
  */
  Q04: null,
  // Escribe el número como string: "1" | "2" | "3" | "4"

  /** Q05 ─ ¿Qué hace la prop especial `key` en una lista? */
  Q05: null,
  /*
    a) Añade un estilo al elemento
    b) Permite a React identificar cada elemento para actualizar solo lo que cambia
    c) Es obligatoria para que .map() funcione
    d) Sirve para nombrar el componente
  */

  /** Q06 ─ ¿Verdadero o Falso?
    Un componente puede modificar directamente sus propias props
    para actualizar lo que muestra. */
  Q06: null,

  /** Q07 ─ ¿Cuál es la salida de este fragmento JSX?
    ```jsx
    const lista = []
    return <div>{lista.length && <p>Hay items</p>}</div>
    ```
  */
  Q07: null,
  /*
    a) Nada, el div está vacío
    b) Renderiza <p>Hay items</p>
    c) Renderiza el número 0 en pantalla
    d) Lanza un error
  */

  /** Q08 ─ Pon en orden las piezas de `useState`:
    A) El valor actual del estado
    B) El valor inicial pasado a useState()
    C) La función para actualizar el estado
    ```js
    const [ ___ , ___ ] = useState( ___ )
    ```
  */
  Q08: null,
  // Responde con el orden correcto: ["A","C","B"] | ["B","A","C"] | etc.

  /** Q09 ─ ¿En qué parte de un componente NO puedes llamar a un hook? */
  Q09: null,
  /*
    a) Al principio del cuerpo de la función
    b) Dentro de un bloque if o un bucle
    c) Antes del return
    d) Después de declarar otras variables
  */

  /** Q10 ─ ¿Qué diferencia hay entre `toEqual` y `toBe` en tests? */
  Q10: null,
  /*
    a) toBe es para strings, toEqual para números
    b) toBe compara identidad de referencia; toEqual compara el contenido en profundidad
    c) Son exactamente lo mismo, solo cambia el nombre
    d) toEqual lanza un error si los valores son primitivos
  */

  /** Q11 ─ ¿Cuál es la forma CORRECTA de actualizar un array en el estado
    sin mutarlo? */
  Q11: null,
  /*
    a) setItems(items.push(nuevoItem))
    b) items.push(nuevoItem); setItems(items)
    c) setItems([...items, nuevoItem])
    d) setItems(items.concat) 
  */

  /** Q12 ─ ¿Verdadero o Falso?
    En JSX, el atributo CSS `class` se escribe igual que en HTML. */
  Q12: null,


  // ─────────────────────────────────────────────
  //  BLOQUE 2 · HOOKS AVANZADOS  (Q13–Q22)
  // ─────────────────────────────────────────────

  /** Q13 ─ ¿Cuándo se ejecuta un useEffect con array de dependencias vacío []? */
  Q13: null,
  /*
    a) En cada render del componente
    b) Solo la primera vez que el componente aparece en pantalla
    c) Solo cuando se desmonta el componente
    d) Nunca
  */

  /** Q14 ─ ¿Por qué NO debes poner un fetch directamente en el cuerpo
    de un componente (sin useEffect)? */
  Q14: null,
  /*
    a) Porque fetch no está disponible en React
    b) Porque causaría un bucle infinito: fetch → setDatos → render → fetch…
    c) Porque los componentes no pueden ser async
    d) Porque el fetch solo funciona en el servidor
  */

  /** Q15 ─ Completa el código para dar foco automático a un input al montar:
    ```js
    const inputRef = use_____(null)
    useEffect(() => { inputRef.current._____ () }, [])
    return <input ref={inputRef} />
    ```
    ¿Qué dos huecos debes rellenar?
  */
  Q15: null,
  /*
    a) "State" y "value"
    b) "Ref" y "focus"
    c) "Context" y "focus"
    d) "Ref" y "click"
  */

  /** Q16 ─ ¿Qué diferencia hay entre useRef y useState? */
  Q16: null,
  /*
    a) useRef solo sirve para elementos del DOM
    b) useState guarda el valor y repinta al cambiar; useRef guarda el valor pero NO repinta
    c) useRef repinta más rápido que useState
    d) Son idénticos, useRef es un alias antiguo de useState
  */

  /** Q17 ─ ¿Cuál es la estructura correcta de useReducer? */
  Q17: null,
  /*
    a) const [estado, accion] = useReducer(estadoInicial, reducer)
    b) const {estado, dispatch} = useReducer(reducer, estadoInicial)
    c) const [estado, dispatch] = useReducer(reducer, estadoInicial)
    d) const [dispatch, estado] = useReducer(estadoInicial)
  */

  /** Q18 ─ En un reducer, ¿qué debe devolver siempre el bloque `default`? */
  Q18: null,
  /*
    a) null
    b) undefined
    c) El estado sin cambios
    d) Un error
  */

  /** Q19 ─ ¿Verdadero o Falso?
    Cuando dos componentes distintos llaman al mismo custom hook,
    comparten el mismo estado entre sí. */
  Q19: null,

  /** Q20 ─ En useContext, ¿qué pasa si un componente usa useContext
    pero NO está envuelto por el Provider correspondiente? */
  Q20: null,
  /*
    a) React lo busca en el componente padre más cercano
    b) Recibe el valor por defecto pasado a createContext()
    c) Lanza siempre un error
    d) Devuelve undefined siempre
  */

  /** Q21 ─ ¿Cuál es el nombre de la prop especial que recibe un componente
    "contenedor" para pintar lo que metes entre sus etiquetas?
    ```jsx
    <MiProvider> <App /> </MiProvider>
    ```
  */
  Q21: null,
  /*
    a) content
    b) slots
    c) children
    d) render
  */

  /** Q22 ─ Tienes este custom hook. ¿Qué problema tiene?
    ```js
    function useDatos(url) {
      const datos = useState(null)   // ← falta destructuring
      fetch(url).then(r => r.json()).then(d => datos(d))
      return datos
    }
    ```
  */
  Q22: null,
  /*
    a) No puede llamarse "useDatos", el prefijo use está reservado
    b) Le falta el destructuring de useState y el fetch está fuera de useEffect
    c) Los custom hooks no pueden recibir parámetros
    d) No puede usar fetch dentro de un hook
  */


  // ─────────────────────────────────────────────
  //  BLOQUE 3 · REACT ROUTER & FORMULARIOS  (Q23–Q30)
  // ─────────────────────────────────────────────

  /** Q23 ─ ¿Por qué debes usar <Link> en vez de <a href> en React Router? */
  Q23: null,
  /*
    a) <a> no funciona en JSX
    b) <a href> recarga la página entera; <Link> navega sin recargar
    c) <Link> es más rápido porque usa fetch internamente
    d) Solo por convención, ambos hacen lo mismo en React
  */

  /** Q24 ─ ¿Qué hook lees para obtener el valor de :id en la URL
    `/personajes/:id`? */
  Q24: null,
  /*
    a) useLocation
    b) useRoute
    c) useParams
    d) useSearchParams
  */

  /** Q25 ─ ¿Qué componente de React Router debes colocar en el Layout
    para que las rutas hijas se rendericen ahí? */
  Q25: null,
  /*
    a) <Children />
    b) <RouteView />
    c) <Outlet />
    d) <Slot />
  */

  /** Q26 ─ ¿Verdadero o Falso?
    `useParams` siempre devuelve los parámetros como números
    cuando el valor de la URL es numérico. */
  Q26: null,

  /** Q27 ─ En un formulario controlado, ¿qué pasa si pones `value={nombre}`
    en un input pero omites el `onChange`? */
  Q27: null,
  /*
    a) El input funciona con normalidad
    b) El input queda bloqueado: no puedes escribir nada en él
    c) React lanza un error en consola y el input desaparece
    d) El input se actualiza solo
  */

  /** Q28 ─ ¿Qué línea es IMPRESCINDIBLE en el onSubmit de un formulario
    React para evitar que la página se recargue? */
  Q28: null,
  /*
    a) event.stopPropagation()
    b) event.preventDefault()
    c) return false
    d) event.cancelBubble = true
  */

  /** Q29 ─ Tienes un formulario con campos `nombre`, `email` y `password`
    en un único objeto de estado. ¿Cuál es la forma CORRECTA de actualizar
    solo el campo `email` sin perder los otros? */
  Q29: null,
  /*
    a) setDatos({ email: e.target.value })
    b) setDatos(prev => ({ ...prev, email: e.target.value }))
    c) datos.email = e.target.value; setDatos(datos)
    d) setDatos(Object.assign(datos, { email: e.target.value }))
  */

  /** Q30 ─ ¿Cuál es el propósito del componente `<RutaProtegida>`
    (o PrivateRoute) en una SPA? */
  Q30: null,
  /*
    a) Añadir animaciones a las transiciones de página
    b) Redirigir a login si no hay sesión; dejar pasar si sí la hay
    c) Precargar los datos de la ruta antes de mostrarla
    d) Evitar que se renderice más de una ruta a la vez
  */


  // ─────────────────────────────────────────────
  //  BLOQUE 4 · ESTADO GLOBAL: ZUSTAND  (Q31–Q35)
  // ─────────────────────────────────────────────

  /** Q31 ─ ¿Qué ventaja tiene Zustand frente a useContext + useReducer
    para estado global? */
  Q31: null,
  /*
    a) Zustand guarda el estado en la base de datos automáticamente
    b) No necesita Provider: cualquier componente se suscribe directamente al store
    c) Zustand solo sirve para el carrito de la compra
    d) Zustand es más lento pero más seguro
  */

  /** Q32 ─ En Zustand, ¿qué es un "selector" y para qué sirve?
    ```js
    const cuenta = useStore(estado => estado.cuenta)
    ```
  */
  Q32: null,
  /*
    a) Es una función que filtra los datos de una API
    b) Permite elegir qué parte del store leer, evitando renders innecesarios
    c) Es la función que actualiza el estado
    d) Define las acciones disponibles en el store
  */

  /** Q33 ─ ¿Verdadero o Falso?
    Dentro de una acción de Zustand puedes hacer:
    `set(estado => { estado.items.push(nuevo) })` */
  Q33: null,

  /** Q34 ─ ¿Cuándo es mejor usar `useContext` que Zustand? */
  Q34: null,
  /*
    a) Siempre, useContext es más moderno
    b) Cuando el dato está muy ligado al árbol de componentes (tema, idioma)
       y no necesitas acciones complejas
    c) Nunca, Zustand lo reemplaza completamente
    d) Cuando necesitas persistir en localStorage
  */

  /** Q35 ─ Dado este store de Zustand, ¿qué devuelve `total` si tienes
    2 items de precio 10 y 1 de precio 5?
    ```js
    const total = useCarritoStore(e => e.items.reduce((acc, i) => acc + i.precio, 0))
    ```
  */
  Q35: null,
  // Escribe el número como string: "20" | "25" | "15" | "5"


  // ─────────────────────────────────────────────
  //  BLOQUE 5 · BACKEND: EXPRESS, JWT, BCRYPT  (Q36–Q44)
  // ─────────────────────────────────────────────

  /** Q36 ─ ¿Qué código de estado HTTP debes devolver cuando los datos
    de una petición no pasan la validación (express-validator)? */
  Q36: null,
  /*
    a) 400
    b) 401
    c) 422
    d) 500
  */

  /** Q37 ─ ¿Qué diferencia hay entre cifrar y hashear una contraseña? */
  Q37: null,
  /*
    a) Son lo mismo; "hashear" es el término técnico de "cifrar"
    b) Cifrar es reversible (puedes recuperar el original); hashear es de una sola dirección
    c) Hashear usa una clave pública y privada; cifrar no
    d) Cifrar es más seguro que hashear para contraseñas
  */

  /** Q38 ─ ¿Para qué sirve el "salt" que añade bcrypt a cada contraseña? */
  Q38: null,
  /*
    a) Para hacer el hash más corto y fácil de guardar
    b) Para evitar que dos contraseñas iguales produzcan el mismo hash
       y para inutilizar las rainbow tables
    c) Para cifrar la contraseña una segunda vez
    d) Para marcar la fecha de expiración de la contraseña
  */

  /** Q39 ─ ¿Qué código HTTP devuelves cuando el email ya está registrado? */
  Q39: null,
  /*
    a) 400
    b) 404
    c) 409
    d) 422
  */

  /** Q40 ─ ¿Por qué devuelves el MISMO mensaje de error tanto si el email
    no existe como si la contraseña es incorrecta en el login? */
  Q40: null,
  /*
    a) Por comodidad, para escribir menos código
    b) Para evitar la enumeración de usuarios: que un atacante no pueda
       saber qué emails están registrados
    c) Porque express-validator no distingue los dos casos
    d) Porque es el comportamiento por defecto de bcrypt.compare
  */

  /** Q41 ─ ¿Verdadero o Falso?
    El payload de un JWT está cifrado: nadie puede leer su contenido
    sin conocer el secreto. */
  Q41: null,

  /** Q42 ─ ¿Qué hace exactamente `jwt.verify(token, secret)`? */
  Q42: null,
  /*
    a) Descifra el contenido del token con el secreto
    b) Comprueba la firma con el secreto; si es válida, devuelve el payload
    c) Genera un nuevo token con el mismo payload
    d) Comprueba si el token existe en la base de datos
  */

  /** Q43 ─ En el middleware de autenticación, ¿cuál es la diferencia entre
    responder con 401 y responder con 403? */
  Q43: null,
  /*
    a) 401 = el servidor tiene un error interno; 403 = error del cliente
    b) 401 = no sé quién eres (sin autenticar); 403 = sé quién eres pero no tienes permiso
    c) 401 = token expirado; 403 = token manipulado
    d) Son equivalentes, solo cambia la convención del equipo
  */

  /** Q44 ─ ¿Dónde debes guardar el JWT_SECRET en tu proyecto Express? */
  Q44: null,
  /*
    a) En un archivo secrets.js que se importa donde se necesite
    b) En el .env, que nunca se sube a git
    c) En el package.json bajo el campo "config"
    d) En un comentario al principio de auth.controller.js
  */


  // ─────────────────────────────────────────────
  //  BLOQUE 6 · TESTING  (Q45–Q50)
  // ─────────────────────────────────────────────

  /** Q45 ─ ¿Qué son los "casos límite" (edge cases) y por qué son importantes? */
  Q45: null,
  /*
    a) Son los casos más habituales; se prueban primero
    b) Son las entradas que están en el borde de lo válido o fuera de lo esperado;
       ahí es donde se esconden la mayoría de los bugs
    c) Son los casos que solo ocurren en producción
    d) Son tests que miden el rendimiento de la función
  */

  /** Q46 ─ ¿Por qué se envuelve la llamada en una arrow en `toThrow`?
    ```js
    expect(() => miFuncion(arg)).toThrow()
    ```
  */
  Q46: null,
  /*
    a) Para que la función se ejecute en un contexto async
    b) Para que Vitest pueda capturar el error dentro de un try/catch interno,
       sin que reviente el test antes de que pueda comprobarlo
    c) Es solo una convención estética sin efecto real
    d) Porque toThrow no acepta llamadas directas a funciones
  */

  /** Q47 ─ ¿Qué es una "regresión" en el contexto del testing? */
  Q47: null,
  /*
    a) Un test que siempre falla
    b) Algo que funcionaba y, por un cambio posterior, se rompe sin que te des cuenta
    c) Un tipo de test de rendimiento
    d) El proceso de volver a una versión anterior del código
  */

  /** Q48 ─ ¿Verdadero o Falso?
    `toContain` y `toContainEqual` son equivalentes para arrays de objetos. */
  Q48: null,

  /** Q49 ─ ¿Cuál es el propósito del patrón AAA en los tests? */
  Q49: null,
  /*
    a) Nombrar los archivos de test con triple A para que aparezcan primero
    b) Estructurar el test en tres fases: Arrange (preparar),
       Act (ejecutar) y Assert (comprobar)
    c) Medir la cobertura en tres niveles: unitario, integración y e2e
    d) Indicar la prioridad del test: A = crítico, AA = importante, AAA = opcional
  */

  /** Q50 ─ Tienes este test. ¿Qué está MAL?
    ```js
    it("filtra por género", () => {
      const juegos = [
        { titulo: "Hades", genero: "roguelike" },
        { titulo: "Celeste", genero: "plataformas" },
      ]
      const resultado = filtrarPorGenero(juegos, "roguelike")
      expect(resultado).toContain({ titulo: "Hades", genero: "roguelike" })
    })
    ```
  */
  Q50: null,
  /*
    a) No se puede usar .toContain con arrays
    b) Falta el import de filtrarPorGenero
    c) Debería usarse .toContainEqual porque compara objetos por contenido, no por referencia
    d) El array de juegos debería ser un estado de React
  */

}
