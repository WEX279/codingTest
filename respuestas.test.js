/**
 * ============================================================
 *  CORRECTOR AUTOMÁTICO — 50 PREGUNTAS TÉCNICAS
 *  Ejecuta: npx vitest --run
 * ============================================================
 */

import { describe, it, expect } from "vitest"
import { respuestas } from "./respuestas.js"

// ── Clave de respuestas correctas (no hacer trampa 😉) ───────
const CLAVE = {
  Q01: "b", Q02: "c", Q03: "b", Q04: "3",  Q05: "b",
  Q06: "falso", Q07: "c", Q08: ["A","C","B"], Q09: "b", Q10: "b",
  Q11: "c", Q12: "falso",
  Q13: "b", Q14: "b", Q15: "b", Q16: "b", Q17: "c",
  Q18: "c", Q19: "falso", Q20: "b", Q21: "c", Q22: "b",
  Q23: "b", Q24: "c", Q25: "c", Q26: "falso", Q27: "b",
  Q28: "b", Q29: "b", Q30: "b",
  Q31: "b", Q32: "b", Q33: "falso", Q34: "b", Q35: "25",
  Q36: "c", Q37: "b", Q38: "b", Q39: "c", Q40: "b",
  Q41: "falso", Q42: "b", Q43: "b", Q44: "b",
  Q45: "b", Q46: "b", Q47: "b", Q48: "falso", Q49: "b", Q50: "c",
}

const EXPLICACIONES = {
  Q01: `Un componente devuelve JSX, que React convierte en una descripción
        virtual de la UI (Virtual DOM). No genera HTML directamente.`,
  Q02: `onClick recibe una REFERENCIA a la función, sin paréntesis.
        Con paréntesis la ejecutas al renderizar, no al hacer clic.`,
  Q03: `React solo repinta cuando actualizas el estado con su setter (useState).
        Cambiar una variable local es invisible para React.`,
  Q04: `Hay tres <Saludo />, cada uno devuelve un <p>Hola</p>: aparecen 3 veces.`,
  Q05: `La key permite al Virtual DOM identificar cada ítem de la lista para
        comparar versiones y actualizar únicamente los nodos que cambien.`,
  Q06: `Las props son de solo lectura. Un componente nunca modifica sus propias props.
        Si necesita cambiar datos, usa su propio estado.`,
  Q07: `0 && <p>…</p> devuelve 0 (número), y React renderiza los números.
        Usa lista.length > 0 && … para obtener un booleano real.`,
  Q08: `useState devuelve [valorActual, funcionActualizadora]; el argumento es el valor inicial.
        Así: const [A, C] = useState(B)`,
  Q09: `Los hooks solo pueden llamarse en el nivel superior de un componente.
        Dentro de if, for o funciones anidadas está prohibido.`,
  Q10: `toBe usa === (identidad), perfecto para primitivos.
        toEqual compara el contenido en profundidad: imprescindible para objetos y arrays.`,
  Q11: `Nunca mutéis el array de estado. [...items, nuevoItem] crea un array
        NUEVO con todos los elementos más el añadido.`,
  Q12: `En JSX la palabra reservada class de JS se escribe className.`,
  Q13: `[] vacío significa "sin dependencias": el efecto corre una sola vez,
        cuando el componente se monta (aparece en pantalla).`,
  Q14: `Cada setDatos dispara un render → el fetch se relanza → setDatos otra vez → bucle infinito.
        useEffect con [] ejecuta el fetch solo una vez al montar.`,
  Q15: `useRef(null) crea la referencia. Después inputRef.current.focus() da el foco
        al nodo real del DOM, que ya existe tras el primer render.`,
  Q16: `useState repinta al cambiar → para datos visibles en la UI.
        useRef NO repinta → para datos "de fontanería" o referencias al DOM.`,
  Q17: `La firma correcta es: const [estado, dispatch] = useReducer(reducer, estadoInicial).
        El reducer va primero, el estado inicial segundo.`,
  Q18: `El default del switch siempre devuelve el estado sin cambios (return estado).
        Si lanzaras un error, cualquier acción desconocida rompería la app.`,
  Q19: `Cada componente que llama al mismo hook tiene su PROPIA copia del estado.
        Los hooks reutilizan lógica, no estado compartido (para eso es useContext/Zustand).`,
  Q20: `Recibe el valor por defecto de createContext(valorPorDefecto).
        Si ese valor es null y lo usas sin comprobar, obtienes errores de "no puedo
        leer X de null".`,
  Q21: `children es la prop especial que contiene todo lo que colocas entre
        las etiquetas de apertura y cierre de un componente.`,
  Q22: `Dos problemas: (1) falta destructuring → const [datos, setDatos] = useState(null).
        (2) el fetch está en el cuerpo del hook sin useEffect → bucle infinito.`,
  Q23: `<a href> hace una petición HTTP completa y recarga la página (rompe la SPA).
        <Link> intercepta la navegación y actualiza solo el componente, sin recargar.`,
  Q24: `useParams() lee los segmentos dinámicos (:id, :slug…) de la URL actual.`,
  Q25: `<Outlet /> marca el hueco donde React Router inserta el componente de la ruta hija.`,
  Q26: `useParams SIEMPRE devuelve strings. "1" no es 1. Conviértelo con Number() si necesitas aritmética.`,
  Q27: `Sin onChange, el valor del input está "clavado" al estado, que nunca cambia.
        El usuario escribe pero nada actualiza el estado → el campo parece congelado.`,
  Q28: `e.preventDefault() cancela el comportamiento predeterminado del formulario
        (recargar la página con los datos en la URL).`,
  Q29: `setDatos(prev => ({ ...prev, email: e.target.value })) copia todos los campos
        existentes y sobreescribe solo email. Sin el spread, perderías nombre y password.`,
  Q30: `RutaProtegida comprueba si existe sesión (token). Sin sesión redirige a /login.
        Con sesión renderiza la página solicitada.`,
  Q31: `Zustand no necesita Provider. El store vive fuera del árbol React y cualquier
        componente se suscribe directamente importando el hook del store.`,
  Q32: `Un selector extrae una porción del store. El componente solo se re-renderiza cuando
        ese fragmento concreto cambia, no cuando cambia cualquier otra parte del store.`,
  Q33: `NUNCA mutes el estado directamente. estado.items.push(nuevo) muta el array original.
        Usa set(e => ({ items: [...e.items, nuevo] })) para crear uno nuevo.`,
  Q34: `useContext encaja bien para datos ligados al árbol (tema, idioma, usuario)
        que no necesitan acciones complejas. Para estado global con muchas acciones → Zustand.`,
  Q35: `10 + 10 + 5 = 25. El reduce acumula el precio de cada item.`,
  Q36: `422 Unprocessable Entity: el servidor entendió la petición pero los datos
        no pasan las reglas de validación. 400 sería si la petición está mal formada.`,
  Q37: `Cifrar = reversible con la clave. Hashear = una sola dirección, no hay vuelta atrás.
        Las contraseñas se hashean porque nunca necesitas recuperar el original.`,
  Q38: `El salt es un valor aleatorio único por contraseña que hace que dos contraseñas
        iguales produzcan hashes distintos, inutilizando las rainbow tables.`,
  Q39: `409 Conflict: el recurso (email) ya existe. No es 422 porque los datos son
        válidos; el problema es que ese valor ya está ocupado.`,
  Q40: `Si das mensajes distintos ("email no existe" vs "contraseña incorrecta") un
        atacante puede enumerar qué emails están registrados. Mismo mensaje = misma opacidad.`,
  Q41: `El payload de un JWT está codificado en Base64, NO cifrado. Cualquiera puede
        leerlo en jwt.io. Solo la FIRMA garantiza que no fue manipulado.
        Nunca pongas datos sensibles en el payload.`,
  Q42: `verify re-calcula la firma con el secreto y la compara. Si cuadra, el token
        no fue manipulado y devuelve el payload. Si no, lanza JsonWebTokenError.`,
  Q43: `401 = no autenticado (no sabemos quién eres; falta token o es inválido).
        403 = autenticado pero sin permiso (sabemos quién eres, pero no puedes hacer esto).`,
  Q44: `El secreto va en .env (excluido de git con .gitignore). Si se filtra,
        cualquiera puede firmar tokens válidos y suplantar a cualquier usuario.`,
  Q45: `Los bugs casi nunca están en el happy path. Viven en los bordes: null, undefined,
        cadena vacía, cero, número negativo, exactamente en el límite de la regla…`,
  Q46: `Si pasaras miFuncion(arg) directa, se ejecutaría ANTES de que toThrow pueda
        interceptarla. Al envolverla en () =>, Vitest la llama él mismo dentro de un try/catch.`,
  Q47: `Una regresión es un bug introducido por un cambio que rompe algo que antes funcionaba.
        Los tests automáticos detectan regresiones al instante, sin repasarlo todo a mano.`,
  Q48: `toContain busca el MISMO objeto en memoria (referencia === referencia).
        toContainEqual busca un objeto con el MISMO CONTENIDO.
        Para arrays de objetos siempre usa toContainEqual.`,
  Q49: `AAA = Arrange (preparar datos/escenario) → Act (ejecutar la función) →
        Assert (comprobar el resultado). Estructura clara y legible para cualquier test.`,
  Q50: `toContain usa ===: busca la misma referencia de objeto en memoria, no el contenido.
        El objeto literal { titulo: "Hades", ... } en el expect es una referencia distinta
        al del array. Usa toContainEqual para comparar por contenido.`,
}


// ── Helpers ──────────────────────────────────────────────────

function esArray(v) { return Array.isArray(v) }

function comparar(respuesta, correcta) {
  if (esArray(correcta)) {
    if (!esArray(respuesta)) return false
    if (respuesta.length !== correcta.length) return false
    return correcta.every((v, i) => v === respuesta[i])
  }
  return respuesta === correcta
}

function etiqueta(q) {
  const num = q.replace("Q", "")
  return `Pregunta ${num.padStart(2, "0")}`
}

// ── Bloques de tests ─────────────────────────────────────────

describe("BLOQUE 1 · React Fundamentos", () => {

  it("Q01 · ¿Qué devuelve un componente de React?", () => {
    const r = respuestas.Q01
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q01),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q01}"\n💡 ${EXPLICACIONES.Q01}`
    ).toBe(true)
  })

  it("Q02 · onClick: ¿cuál es la forma correcta?", () => {
    const r = respuestas.Q02
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q02),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q02}"\n💡 ${EXPLICACIONES.Q02}`
    ).toBe(true)
  })

  it("Q03 · Cambiar variable local sin setState", () => {
    const r = respuestas.Q03
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q03),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q03}"\n💡 ${EXPLICACIONES.Q03}`
    ).toBe(true)
  })

  it("Q04 · ¿Cuántas veces aparece <Saludo /> si se usa tres veces?", () => {
    const r = respuestas.Q04
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q04),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q04}"\n💡 ${EXPLICACIONES.Q04}`
    ).toBe(true)
  })

  it("Q05 · ¿Para qué sirve la prop key en una lista?", () => {
    const r = respuestas.Q05
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q05),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q05}"\n💡 ${EXPLICACIONES.Q05}`
    ).toBe(true)
  })

  it("Q06 · ¿Un componente puede modificar sus props? (V/F)", () => {
    const r = respuestas.Q06
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q06),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q06}"\n💡 ${EXPLICACIONES.Q06}`
    ).toBe(true)
  })

  it("Q07 · ¿Qué renderiza 0 && <p>?", () => {
    const r = respuestas.Q07
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q07),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q07}"\n💡 ${EXPLICACIONES.Q07}`
    ).toBe(true)
  })

  it("Q08 · Orden correcto de las piezas de useState", () => {
    const r = respuestas.Q08
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q08),
      `✗ Tu respuesta: [${r}] | Correcta: [${CLAVE.Q08}]\n💡 ${EXPLICACIONES.Q08}`
    ).toBe(true)
  })

  it("Q09 · ¿Dónde NO puedes llamar a un hook?", () => {
    const r = respuestas.Q09
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q09),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q09}"\n💡 ${EXPLICACIONES.Q09}`
    ).toBe(true)
  })

  it("Q10 · toBe vs toEqual: ¿cuál es la diferencia?", () => {
    const r = respuestas.Q10
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q10),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q10}"\n💡 ${EXPLICACIONES.Q10}`
    ).toBe(true)
  })

  it("Q11 · Actualizar array en estado sin mutarlo", () => {
    const r = respuestas.Q11
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q11),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q11}"\n💡 ${EXPLICACIONES.Q11}`
    ).toBe(true)
  })

  it("Q12 · ¿El atributo class en JSX se escribe igual que en HTML? (V/F)", () => {
    const r = respuestas.Q12
    if (r === null) return
    expect(
      comparar(r, CLAVE.Q12),
      `✗ Tu respuesta: "${r}" | Correcta: "${CLAVE.Q12}"\n💡 ${EXPLICACIONES.Q12}`
    ).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────

describe("BLOQUE 2 · Hooks Avanzados", () => {

  it("Q13 · useEffect con [] vacío: ¿cuándo se ejecuta?", () => {
    const r = respuestas.Q13
    if (r === null) return
    expect(comparar(r, CLAVE.Q13), `✗ "${r}" | ✓ "${CLAVE.Q13}"\n💡 ${EXPLICACIONES.Q13}`).toBe(true)
  })

  it("Q14 · ¿Por qué no poner fetch directo en el cuerpo del componente?", () => {
    const r = respuestas.Q14
    if (r === null) return
    expect(comparar(r, CLAVE.Q14), `✗ "${r}" | ✓ "${CLAVE.Q14}"\n💡 ${EXPLICACIONES.Q14}`).toBe(true)
  })

  it("Q15 · useRef + focus automático: ¿qué huecos van?", () => {
    const r = respuestas.Q15
    if (r === null) return
    expect(comparar(r, CLAVE.Q15), `✗ "${r}" | ✓ "${CLAVE.Q15}"\n💡 ${EXPLICACIONES.Q15}`).toBe(true)
  })

  it("Q16 · useRef vs useState: diferencia clave", () => {
    const r = respuestas.Q16
    if (r === null) return
    expect(comparar(r, CLAVE.Q16), `✗ "${r}" | ✓ "${CLAVE.Q16}"\n💡 ${EXPLICACIONES.Q16}`).toBe(true)
  })

  it("Q17 · Estructura correcta de useReducer", () => {
    const r = respuestas.Q17
    if (r === null) return
    expect(comparar(r, CLAVE.Q17), `✗ "${r}" | ✓ "${CLAVE.Q17}"\n💡 ${EXPLICACIONES.Q17}`).toBe(true)
  })

  it("Q18 · ¿Qué devuelve el default del reducer?", () => {
    const r = respuestas.Q18
    if (r === null) return
    expect(comparar(r, CLAVE.Q18), `✗ "${r}" | ✓ "${CLAVE.Q18}"\n💡 ${EXPLICACIONES.Q18}`).toBe(true)
  })

  it("Q19 · ¿Dos componentes con el mismo hook comparten estado? (V/F)", () => {
    const r = respuestas.Q19
    if (r === null) return
    expect(comparar(r, CLAVE.Q19), `✗ "${r}" | ✓ "${CLAVE.Q19}"\n💡 ${EXPLICACIONES.Q19}`).toBe(true)
  })

  it("Q20 · useContext sin Provider: ¿qué recibe?", () => {
    const r = respuestas.Q20
    if (r === null) return
    expect(comparar(r, CLAVE.Q20), `✗ "${r}" | ✓ "${CLAVE.Q20}"\n💡 ${EXPLICACIONES.Q20}`).toBe(true)
  })

  it("Q21 · ¿Cómo se llama la prop que contiene lo que metes entre etiquetas?", () => {
    const r = respuestas.Q21
    if (r === null) return
    expect(comparar(r, CLAVE.Q21), `✗ "${r}" | ✓ "${CLAVE.Q21}"\n💡 ${EXPLICACIONES.Q21}`).toBe(true)
  })

  it("Q22 · ¿Qué problema tiene el custom hook mal escrito?", () => {
    const r = respuestas.Q22
    if (r === null) return
    expect(comparar(r, CLAVE.Q22), `✗ "${r}" | ✓ "${CLAVE.Q22}"\n💡 ${EXPLICACIONES.Q22}`).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────

describe("BLOQUE 3 · React Router & Formularios", () => {

  it("Q23 · <Link> vs <a href>: ¿por qué usar Link?", () => {
    const r = respuestas.Q23
    if (r === null) return
    expect(comparar(r, CLAVE.Q23), `✗ "${r}" | ✓ "${CLAVE.Q23}"\n💡 ${EXPLICACIONES.Q23}`).toBe(true)
  })

  it("Q24 · Hook para leer :id de la URL", () => {
    const r = respuestas.Q24
    if (r === null) return
    expect(comparar(r, CLAVE.Q24), `✗ "${r}" | ✓ "${CLAVE.Q24}"\n💡 ${EXPLICACIONES.Q24}`).toBe(true)
  })

  it("Q25 · Componente que marca el hueco de la ruta hija en el Layout", () => {
    const r = respuestas.Q25
    if (r === null) return
    expect(comparar(r, CLAVE.Q25), `✗ "${r}" | ✓ "${CLAVE.Q25}"\n💡 ${EXPLICACIONES.Q25}`).toBe(true)
  })

  it("Q26 · ¿useParams devuelve números cuando la URL es numérica? (V/F)", () => {
    const r = respuestas.Q26
    if (r === null) return
    expect(comparar(r, CLAVE.Q26), `✗ "${r}" | ✓ "${CLAVE.Q26}"\n💡 ${EXPLICACIONES.Q26}`).toBe(true)
  })

  it("Q27 · Input controlado sin onChange: ¿qué ocurre?", () => {
    const r = respuestas.Q27
    if (r === null) return
    expect(comparar(r, CLAVE.Q27), `✗ "${r}" | ✓ "${CLAVE.Q27}"\n💡 ${EXPLICACIONES.Q27}`).toBe(true)
  })

  it("Q28 · Línea imprescindible en onSubmit para evitar recarga", () => {
    const r = respuestas.Q28
    if (r === null) return
    expect(comparar(r, CLAVE.Q28), `✗ "${r}" | ✓ "${CLAVE.Q28}"\n💡 ${EXPLICACIONES.Q28}`).toBe(true)
  })

  it("Q29 · Actualizar un campo de un objeto de estado sin perder los demás", () => {
    const r = respuestas.Q29
    if (r === null) return
    expect(comparar(r, CLAVE.Q29), `✗ "${r}" | ✓ "${CLAVE.Q29}"\n💡 ${EXPLICACIONES.Q29}`).toBe(true)
  })

  it("Q30 · ¿Para qué sirve <RutaProtegida>?", () => {
    const r = respuestas.Q30
    if (r === null) return
    expect(comparar(r, CLAVE.Q30), `✗ "${r}" | ✓ "${CLAVE.Q30}"\n💡 ${EXPLICACIONES.Q30}`).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────

describe("BLOQUE 4 · Estado Global: Zustand", () => {

  it("Q31 · Ventaja principal de Zustand frente a useContext", () => {
    const r = respuestas.Q31
    if (r === null) return
    expect(comparar(r, CLAVE.Q31), `✗ "${r}" | ✓ "${CLAVE.Q31}"\n💡 ${EXPLICACIONES.Q31}`).toBe(true)
  })

  it("Q32 · ¿Qué es un selector en Zustand?", () => {
    const r = respuestas.Q32
    if (r === null) return
    expect(comparar(r, CLAVE.Q32), `✗ "${r}" | ✓ "${CLAVE.Q32}"\n💡 ${EXPLICACIONES.Q32}`).toBe(true)
  })

  it("Q33 · ¿Puedes hacer estado.items.push() en una acción de Zustand? (V/F)", () => {
    const r = respuestas.Q33
    if (r === null) return
    expect(comparar(r, CLAVE.Q33), `✗ "${r}" | ✓ "${CLAVE.Q33}"\n💡 ${EXPLICACIONES.Q33}`).toBe(true)
  })

  it("Q34 · ¿Cuándo es mejor useContext que Zustand?", () => {
    const r = respuestas.Q34
    if (r === null) return
    expect(comparar(r, CLAVE.Q34), `✗ "${r}" | ✓ "${CLAVE.Q34}"\n💡 ${EXPLICACIONES.Q34}`).toBe(true)
  })

  it("Q35 · ¿Cuánto suma el reduce con items de precio 10, 10 y 5?", () => {
    const r = respuestas.Q35
    if (r === null) return
    expect(comparar(r, CLAVE.Q35), `✗ "${r}" | ✓ "${CLAVE.Q35}"\n💡 ${EXPLICACIONES.Q35}`).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────

describe("BLOQUE 5 · Backend: Express, JWT, Bcrypt", () => {

  it("Q36 · Código HTTP para errores de validación", () => {
    const r = respuestas.Q36
    if (r === null) return
    expect(comparar(r, CLAVE.Q36), `✗ "${r}" | ✓ "${CLAVE.Q36}"\n💡 ${EXPLICACIONES.Q36}`).toBe(true)
  })

  it("Q37 · Cifrar vs hashear una contraseña", () => {
    const r = respuestas.Q37
    if (r === null) return
    expect(comparar(r, CLAVE.Q37), `✗ "${r}" | ✓ "${CLAVE.Q37}"\n💡 ${EXPLICACIONES.Q37}`).toBe(true)
  })

  it("Q38 · ¿Para qué sirve el salt de bcrypt?", () => {
    const r = respuestas.Q38
    if (r === null) return
    expect(comparar(r, CLAVE.Q38), `✗ "${r}" | ✓ "${CLAVE.Q38}"\n💡 ${EXPLICACIONES.Q38}`).toBe(true)
  })

  it("Q39 · Código HTTP cuando el email ya está registrado", () => {
    const r = respuestas.Q39
    if (r === null) return
    expect(comparar(r, CLAVE.Q39), `✗ "${r}" | ✓ "${CLAVE.Q39}"\n💡 ${EXPLICACIONES.Q39}`).toBe(true)
  })

  it("Q40 · ¿Por qué devolver el mismo mensaje si email no existe o password es incorrecto?", () => {
    const r = respuestas.Q40
    if (r === null) return
    expect(comparar(r, CLAVE.Q40), `✗ "${r}" | ✓ "${CLAVE.Q40}"\n💡 ${EXPLICACIONES.Q40}`).toBe(true)
  })

  it("Q41 · ¿El payload del JWT está cifrado? (V/F)", () => {
    const r = respuestas.Q41
    if (r === null) return
    expect(comparar(r, CLAVE.Q41), `✗ "${r}" | ✓ "${CLAVE.Q41}"\n💡 ${EXPLICACIONES.Q41}`).toBe(true)
  })

  it("Q42 · ¿Qué hace jwt.verify()?", () => {
    const r = respuestas.Q42
    if (r === null) return
    expect(comparar(r, CLAVE.Q42), `✗ "${r}" | ✓ "${CLAVE.Q42}"\n💡 ${EXPLICACIONES.Q42}`).toBe(true)
  })

  it("Q43 · 401 vs 403: ¿cuál es la diferencia?", () => {
    const r = respuestas.Q43
    if (r === null) return
    expect(comparar(r, CLAVE.Q43), `✗ "${r}" | ✓ "${CLAVE.Q43}"\n💡 ${EXPLICACIONES.Q43}`).toBe(true)
  })

  it("Q44 · ¿Dónde guarda el JWT_SECRET?", () => {
    const r = respuestas.Q44
    if (r === null) return
    expect(comparar(r, CLAVE.Q44), `✗ "${r}" | ✓ "${CLAVE.Q44}"\n💡 ${EXPLICACIONES.Q44}`).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────

describe("BLOQUE 6 · Testing", () => {

  it("Q45 · ¿Qué son los casos límite y por qué importan?", () => {
    const r = respuestas.Q45
    if (r === null) return
    expect(comparar(r, CLAVE.Q45), `✗ "${r}" | ✓ "${CLAVE.Q45}"\n💡 ${EXPLICACIONES.Q45}`).toBe(true)
  })

  it("Q46 · ¿Por qué envolver en () => al usar toThrow?", () => {
    const r = respuestas.Q46
    if (r === null) return
    expect(comparar(r, CLAVE.Q46), `✗ "${r}" | ✓ "${CLAVE.Q46}"\n💡 ${EXPLICACIONES.Q46}`).toBe(true)
  })

  it("Q47 · ¿Qué es una regresión en testing?", () => {
    const r = respuestas.Q47
    if (r === null) return
    expect(comparar(r, CLAVE.Q47), `✗ "${r}" | ✓ "${CLAVE.Q47}"\n💡 ${EXPLICACIONES.Q47}`).toBe(true)
  })

  it("Q48 · ¿toContain y toContainEqual son equivalentes para arrays de objetos? (V/F)", () => {
    const r = respuestas.Q48
    if (r === null) return
    expect(comparar(r, CLAVE.Q48), `✗ "${r}" | ✓ "${CLAVE.Q48}"\n💡 ${EXPLICACIONES.Q48}`).toBe(true)
  })

  it("Q49 · ¿Qué significa el patrón AAA en testing?", () => {
    const r = respuestas.Q49
    if (r === null) return
    expect(comparar(r, CLAVE.Q49), `✗ "${r}" | ✓ "${CLAVE.Q49}"\n💡 ${EXPLICACIONES.Q49}`).toBe(true)
  })

  it("Q50 · ¿Qué está mal en el test con toContain y objetos?", () => {
    const r = respuestas.Q50
    if (r === null) return
    expect(comparar(r, CLAVE.Q50), `✗ "${r}" | ✓ "${CLAVE.Q50}"\n💡 ${EXPLICACIONES.Q50}`).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────
// RESUMEN FINAL
// ─────────────────────────────────────────────────────────────
describe("📊 Resumen", () => {

  it("muestra cuántas preguntas has respondido y cuántas siguen en null", () => {
    const total = Object.keys(CLAVE).length
    const respondidas = Object.entries(respuestas).filter(([, v]) => v !== null).length
    const correctas = Object.entries(respuestas).filter(
      ([k, v]) => v !== null && comparar(v, CLAVE[k])
    ).length
    const pendientes = total - respondidas

    console.log("\n══════════════════════════════════════════")
    console.log(`  Total preguntas:  ${total}`)
    console.log(`  Respondidas:      ${respondidas}`)
    console.log(`  Pendientes:       ${pendientes}`)
    console.log(`  ✅ Correctas:     ${correctas} / ${respondidas}`)
    if (respondidas > 0) {
      const pct = Math.round((correctas / respondidas) * 100)
      console.log(`  Puntuación:       ${pct}%`)
    }
    console.log("══════════════════════════════════════════\n")

    // El test siempre pasa; es solo informativo
    expect(true).toBe(true)
  })
})
