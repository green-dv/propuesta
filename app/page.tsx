"use client";
import { useEffect, useState } from "react";
import Sunflower from "./components/Sunflower";
import AudioPlayer from "./components/AudioPlayer";

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
    const inicio = 8 * 60; 
    const fin = 22 * 60;     

    return minutos >= inicio && minutos <= fin;
  };
  const esFechaHoraValida = (fecha: string, hora: string) => {
    // ⚪ No validar aún (faltan datos)
    if (!fecha?.trim() || !hora?.trim()) return null;

    const ahora = new Date();
    const seleccion = new Date(`${fecha}T${hora}`);

    const max = new Date();
    max.setDate(max.getDate() + 30);

    if (isNaN(seleccion.getTime())) return false;

    return seleccion >= ahora && seleccion <= max;
  };



  const incompleto = !dia || !hora
  const invalido = esFechaHoraValida(dia, hora) === false
  const mostrarError = !incompleto && invalido

  return (
    <main className="h-screen flex items-center justify-center bg-[#1e1e2e] text-[#cdd6f4]">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-md bg-[#313244] rounded-2xl shadow-xl p-6 text-center">
        
        {step === 0 && (
        <div>

          <h1 className="text-xl mb-4">
          </h1>

        </div>)}
        {step === 1 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Tal vez no pueda llevarte la otra sorpresa ;p esperaba poder dartelo en la villarroel o dejartelo en tu casa, es un poquito grande o.o
          </h1>

        </div>)}
        {step === 2 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Hice ver como que hablarte fue un error, pero no lo fue
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 3 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Esa no fue la razón por la que te escribí. Cuando me dijiste que aquella vez que creí haberte visto no eras tú en verdad me derrumbé
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 4 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            En verdad quería que fueras tú....
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 5 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Por que desde cuando creí haberte visto otra vez es que todo en mi cabeza está dando vueltas
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 6 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Me dieron muchas ganas de volverte a conocer...De volverte a hablar
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 7 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Y ya sé que suena ridículo o algo apresurado, pero en verdad creo que me volví a interesar en ti
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 8 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Intenté seguir con mi vida y no destrozar mi progreso, pero desde entonces fui a esperarte cada día a la tejada sorzano para confirmar mis sospechas
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 9 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quería saber algo de ti, de la chica que lleva persiguiendome en mis pensamientos y sueños por ya un mes
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 10 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Al principio creí que tal vez solo era la culpa aprovechando un momento de vulnerabilidad para atacarme con mas fuerza
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 11 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Pero en verdad esto no se siente como culpa, y lo siento por tardarme en notarlo
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 12 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Es raro, siento que me gustas (y ya se que es una forma rara de decirlo)
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 13 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Y no pude evitarlo, pero me enamoré de tu voz....me enamoré de ti, hiciste que aquella noche fuera mágica en verdad aunque solo hablaramos por chat, y yo lo único que hice fue mantenerte despierta hasta las 2 TwT lo siento
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 14 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            No sabía lo que sentía, solo quería saber si debia irme o quedarme, por lo que te hice esa pregunta tan estúpida XD
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 15 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Quise convencerme en que ese sentimiento era remordimiento, por lo que quise que me rechazaras de una vez, pensé que si me odiabas dejaría de perseguirte y podría seguir con mi vida
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 16 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Pero no quiero eso, este sentimiento solo ha ido creciendo más y más en los últimos días que me he permitido pensar más sobre eso
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 17 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Y solo quiero verte, quiero conocerte otra vez, quiero mostrarte la nueva versión de mí y ser digno de si quiera poder estar cerca tuyo
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 18 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Cuando hablamos esa noche lo sentí tan natural, no creí que escucharía tu voz de nuevo 🥲....y me volví a ilusionar
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 19 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Siento que lo arruiné, me ganó el miedo de que me dijeras que me alejara de tu vida, que te deje en paz y asocié ese sentimiento a cómo me había sentido el primer año desde que terminamos
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 20 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            No te escribí esta semana, quería prepararme, saber realmente lo que siento. Me asusta, pero tu vales que deje todo lo malo, mis miedos, la inseguridad, la frustración, la culpa y que por fin acepte completamente la responsabilidad de una relación. Por lo que te he estado preparando otra sorpresa 0_0
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 21 && (
        <div>
          <button onClick={prev} className="back">⬅ Volver</button>

          <h1 className="text-xl mb-4">
            Tengo tanto que decirte, tanto que mostrarte. Pero hay algunas cosas que solo deben ser dichas en persona 0-0
          </h1>

          <button onClick={() => next(1)} className="btn">
              Siguiente
            </button>
        </div>)}
        {step === 22 && (
          <div>
            <button onClick={prev} className="back">⬅ Volver</button>
            <h1 className="text-xl mb-4">
              Qué me dices Abi ¿Quisieras salir conmigo una última vez? pd. Luego podré ver tus respuestas, así que si no te sientes segura para hablar y dices que no lo entenderé y no hará falta que me vuelvas a hablar, tampoco te volveré a buscar, pero si sientes al menos la mitad de lo mucho que yo siento por ti, ¿Por qué no intentarlo? (y si, estoy citando a invincible XD)
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
                onClick={async () => {
                  setRespuesta("no");
                  next(4);
                  await enviarDatos();
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
            {mostrarError  && (
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

        {step === 24 && (
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
                next(4);
                await enviarDatos();
              }} className="btn">
              Confirmar
            </button>
          </div>
        )}

        {step === 26 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-[#a6e3a1]">
              Está bien Abi lo entiendo, espero que te esté yendo bien, gracias por leer esto ;)
            </h1>
          </div>
        )}
        {step === 28 && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-[#a6e3a1]">
              Gracias, tu respuesta me llegará pronto 👌
            </h1>
          </div>
        )}

      </div>
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