


export default function commands(){
    const commands = {
        lg:{
            connection:()=>{
                setTimeout(()=>{
                    console.log("connection da lg")
                },1000)
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
        }

        //outrtas Marcas
    }

    return commands
    
}