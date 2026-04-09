"use client";
import { useState } from "react";
import Sunflower from "./components/Sunflower";

export default function Home() {
  const [step, setStep] = useState(0);
  const [intereses, setIntereses] = useState("-");
  const [respuesta, setRespuesta] = useState("-");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const prev = () => setStep(step - 1);

  const next = (a:number) => setStep(step + a);
  const enviarDatos = async () => {
    try {
      const res = await fetch("/api/date", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          respuesta,
          intereses,
          dia,
          hora,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      console.log(data.message);

    } catch (error) {
      console.error("Error:", error);
    }
  };
  const esHoraValida = (hora: string) => {
    if (!hora) return false;

    const [h, m] = hora.split(":").map(Number);

    const minutos = h * 60 + m;
    const inicio = 8 * 60;   // 08:00
    const fin = 22 * 60;     // 22:00

    return minutos >= inicio && minutos <= fin;
  };
  const esFechaHoraValida = (fecha: string, hora: string) => {
    if (!fecha || !hora) return false;

    const ahora = new Date();

    const seleccion = new Date(`${fecha}T${hora}`);

    // límite máximo (30 días desde ahora)
    const max = new Date();
    max.setDate(max.getDate() + 30);

    return seleccion >= ahora && seleccion <= max;
  };

  return (
    <main className="h-screen flex items-center justify-center bg-[#1e1e2e] text-[#cdd6f4]">
      <div className="w-full max-w-md bg-[#313244] rounded-2xl shadow-xl p-6 text-center">
        
        {step === 0 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Hola, ha pasado muy poco tiempo de la última vez que te escribí, pero hay tantas cosas que no te he dicho
          </h1>

          <button onClick={() => next(25)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 1 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Tal vez te hice sentir que solo te estaba usando, que solo te buscaba cuando me sentía solo
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 2 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Pero no fue así, esa no era la razón por la que te escribí
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 3 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Hice ver como que hablarte fue un error, pero para nada lo fue
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 4 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            cuando me dijiste que aquella vez que creí haberte visto no eras tu, estaba destruido
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 5 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            En verdad creía que eras tu, queria que fueras tu...
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 6 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quise decirte eso, y demasiadas otras cosas
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 7 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quise decirte que desde entonces no puedo parar de pensar en ti
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 8 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Traté de no hacerlo, traté de intentar superarlo y enfocarme en otras cosas porque creía que era la culpa volviendo a destrozar todo mi avance
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 9 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Pero no era eso
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 10 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            La verdad es que en serio me volví a enamorar
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 11 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Desde entonces tengo tantas ganas de volverte a concer
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 12 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            a la nueva versión de ti
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 13 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Cuando te escribí no esperaba que me fueras a mandar audios, o que quiseras verme
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 14 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            No acepté porque en aquel momento no había asimilado lo que pasó, sentía que mis sentimientos de las últimas semanas habían sido en vano
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 15 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            pero en verdad no, no fue en vano y ahora me doy cuenta
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 16 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            No me había sentido así de vivo hace tanto tiempo, sentí como las mariposas volvían
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 17 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            y ya se que vas a decir que soy un migajero, ya lo se. ¿Pero en verdad como no sentirme así cuando tan bella dama me manda un audio?
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 18 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quise preguntarte tantas cosas
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 19 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quiero saber si ya encontraste a otra persona que se haya enamorado perdidamente de ti, o si quisieras escuchar a todo lo que tengo que decirte en persona
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 20 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            En verdad necesito una respuesta para poder seguir, para poder saber que hacer con este sentimiento que me ha quitado el sueño por tanto tiempo
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 21 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Te lo diría todo por aqui, pero hay cosas que solo deben ser dichas en persona
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 22 && (
          <div>
            <button onClick={prev} className="back">⬅ Volver</button>
            <h1 className="text-xl mb-4">
              Asi que Abi, ¿Tienes intereses en alguien más? pd en cuanto acabes de leer todo podré leer tus respuestas
            </h1>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setIntereses("sí");
                  next(4);
                }}
                className="btn bg-[#a6e3a1] text-black"
              >
                Sí
              </button>

              <button
                onClick={() => {
                  setIntereses("no");
                  next(1);
                }}
                className="btn bg-[#f38ba8] text-black"
              >
                No
              </button>
            </div>
          </div>
        )}
        {step === 23 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Entonces, ¿Escucharías lo que tengo que decirte en persona?
          </h1>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setRespuesta("sí");
                next(1);
              }}
              className="btn bg-[#a6e3a1] text-black"
            >
              Sí
            </button>

            <button
              onClick={() => {
                setRespuesta("no");
                next(4);
              }}
              className="btn bg-[#f38ba8] text-black"
            >
              No
            </button>
          </div>
        </div>)}   

        {step === 24 && (
          <div>
            <button onClick={prev} className="back">⬅ Volver</button>
            <h1 className="text-xl mb-4">
              Yei :D Cuentame que día tienes libre
            </h1>

            <div className="flex flex-col gap-3">
              <input
                type="date"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                className="input"
              />

              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="input"
              />
            </div>
            {dia && !esFechaHoraValida(dia, hora) && (
              <p className="text-sm mt-2 text-[#f38ba8]">
                No crees que hay algo mal con la fecha?
              </p>
              
            )}
            {hora && !esHoraValida(hora) && (
              <p className="text-sm mt-2 text-[#f38ba8]">
                No Abi, a esa hora sale el ayuwoki, pero si es de verdad será mejor que me lo digas por otro medio
              </p>
            )}

            <button
              onClick={() => next(1)}
              disabled={!dia || !hora || !esHoraValida(hora) || !esFechaHoraValida(dia, hora)}
              className="btn mt-4"
            >
              Confirmar
            </button>
            
          </div>
        )}

        {step === 25 && (
          <div>
            <button onClick={prev} className="back">⬅ Volver</button>
            <h1 className="text-2xl font-bold mb-4 text-[#a6e3a1]">
              Perfecto 🌻
            </h1>
            <p>
              Entonces quedamos el <b>{dia}</b> a las <b>{hora}</b>
            </p>

            <p className="mt-4 text-sm text-[#bac2de]">
              <Sunflower />
            </p>
            <button onClick={async () => {
            await enviarDatos()}} className="btn">
              Confirmar
            </button>
          </div>
        )}
        {step === 26 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-[#a6e3a1]">
              Lo entiendo, te felicito, y te deseo todo lo mejor
            </h1>
          </div>
        )}
        {step === 27 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-[#a6e3a1]">
              Lo entiendo, gracias por tomarte el tiempo de leer esto
            </h1>
          </div>
        )}

      </div>

      <style jsx>{`
        .btn {
          background: #f5c2e7;
          color: #1e1e2e;
          padding: 10px 16px;
          border-radius: 10px;
          margin-top: 10px;
          cursor: pointer;
          transition: 0.2s;
          font-weight: bold;
        }

        .btn:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .btn:disabled {
          background: #6c7086;
          color: #1e1e2e;
          cursor: not-allowed;
        }

        .input {
          background: #1e1e2e;
          border: 1px solid #6c7086;
          color: #cdd6f4;
          padding: 10px;
          border-radius: 8px;
        }

        .input:focus {
          outline: none;
          border-color: #f5c2e7;
        }
        .back {
        background: transparent;
        border: none;
        color: #bac2de;
        margin-bottom: 10px;
        cursor: pointer;
        font-size: 14px;
      }

      .back:hover {
        color: #f5c2e7;
      }
      `}</style>
    </main>
  );
}