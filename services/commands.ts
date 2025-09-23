export default function commands(){
    const commands = {
        lg:{
            connection:(ip, porta)=>{
                setTimeout(()=>{
                    console.log(`DEVICE: LG, IP: ${ip}  PORTA: ${porta}`)
                },1000)


                const register = {  //obj JSON que sera enviado para tv, ele sera responsavel por pedir as persmissoes necessarias para app funcionar
                    type: "register", // Indica para a TV que a mensagem é um pedido de registro do app.

                    payload: { //Contém os dados necessários para registrar o app.
                        forcePairing: false, //não força pareamento se o usuario ja tiver se conectado antes
                        pairingType: "PROMPT", //pede ao usuario a autorização, (dps testa com "PIN" !!)

                        manifest: { //Descreve o app que quer se registrar.
                            manifestVersion: 1,
                            appVersion: "1.0",

                            permissions: [ //lista das permissões que o app precissa

                                "CONTROL_AUDIO",                // Volume e mute
                                "CONTROL_TV",                   // Trocar canais
                                "CONTROL_INPUT_TV",             // Selecionar entrada de TV (HDMI, AV)
                                "CONTROL_INPUT_JOYSTICK",       // Navegação com setas
                                "CONTROL_POWER",                // Ligar/desligar TV
                                "CONTROL_INPUT_MEDIA_PLAYBACK", // Play/Pause/Stop mídia
                                "LAUNCH",                       // Abrir apps
                                "CLOSE",                        // Fechar apps
                                "READ_CURRENT_CHANNEL",         // Saber canal atual
                                "CONTROL_TV_SCREEN",            // Ajustar tela e brilho    
                            ]
                        }
                    }
                }

                const ws = new WebSocket(`ws://${ip}:${porta}`); //cria uma conexao webSocket com a tv

                ws.onopen = ()=>{ //executado quando a conexao é estabelecida
                    ws.send(JSON.stringify(register)) //ws.send evia o Register em forma de JSON 
                }
            }, 
        },

        samsung: {
            connection: () => {
                setTimeout(() => {
                    console.log("connection da samsung")
                }, 1000)
            }
        },

        philips: {
            connection: () => {
                setTimeout(() => {
                    console.log("connection da philips")
                }, 1000)
            }

        },

        multlaser: {
            connection: () => {
                setTimeout(() => {
                    console.log("connection da multlaser")
                }, 1000)
            }
        },

        chromecast: {
            connection: () => {
                setTimeout(() => {
                    console.log("connection do chromecast")
                }, 1000)
            }

        },

        //outrtas Marcas
    }

    return commands
    
}