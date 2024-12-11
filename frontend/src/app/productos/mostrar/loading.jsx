"use client"; // Esto indica que el componente debe renderizarse en el lado del cliente

export default function Cargando() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#1a1a1a", // Fondo oscuro, pero no completamente negro
            color: "#ffffff"
        }}>
            <div style={{
                width: "80px",
                height: "80px",
                border: "5px solid transparent", // Borde transparente
                borderTop: "5px solid #6a0dad", // Morado para el borde superior
                borderRadius: "50%",
                animation: "spin 1s linear infinite, gradient 3s ease-in-out infinite"
            }}></div>
            <h1 style={{
                marginTop: "20px",
                fontSize: "1.8em",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                animation: "fade 2s ease-in-out infinite"
            }}>
                Cargando...
            </h1>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes fade {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes gradient {
                    0% { border-top-color: #6a0dad; }
                    50% { border-top-color: #ff4500; } /* Naranja */
                    100% { border-top-color: #6a0dad; }
                }
            `}</style>
        </div>
    );
}
