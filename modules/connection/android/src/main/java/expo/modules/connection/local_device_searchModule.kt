package expo.modules.connection

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL


import expo.modules.kotlin.Promise //mportar a classe Promise do Expo Modules:


class local_device_searchModule : Module() {
  // Cada classe de módulo deve implementar a função de definição. A definição consiste em componentes
  // que descrevem a funcionalidade e o comportamento do módulo.
  // Consulte https://docs.expo.dev/modules/module-api para obter mais detalhes sobre os componentes disponíveis.


  override fun definition() = ModuleDefinition {
    Name("local_device_search") // Define o nome do módulo que o código Js usará para se referir ao módulo. Recebe uma string como argumento.


    // Define uma função chamada "GetDevices" que pode ser chamada do código JavaScript.
    Function("GetDevices") { ipPrefix: String, promise: Promise ->//ipPrefix:IP da rede em formato de string que é um argumento recebido do código Js.


    // Lista que vai armazenar os dispositivos encontrados na redeCada dispositivo será armazenado como um mapa com "ip" e "hostname"
    val activeHosts = mutableListOf<Map<String, String>>()

    // Criamos um "executor" com 20 threads. 
    // Executor é um gerenciador que permite rodar várias tarefas ao mesmo tempo
    // Aqui usamos 20 threads para acelerar a varredura da rede
    val executor = java.util.concurrent.Executors.newFixedThreadPool(20)

    // Lista para armazenar os "futures" de cada tarefa
    // Future é como uma promessa de resultado que ainda não terminou
    val futures = mutableListOf<java.util.concurrent.Future<*>>()

    // Loop que percorre todos os possíveis IPs do subnet
    // Por exemplo, se o prefixo é 192.168.0, vai testar de 192.168.0.1 até 192.168.0.254
    for (i in 1..254) {
        val host = "$ipPrefix.$i" // Monta o IP completo

        // Cada IP será testado dentro de uma tarefa enviada ao executor
        val future = executor.submit {
            try {
                // Tenta obter informações do IP
                val inet = java.net.InetAddress.getByName(host)

                // Verifica se o dispositivo responde dentro de 500ms
                // Se responder, significa que o host está ativo
                if (inet.isReachable(500)) { 
                    // Cria um mapa com as informações do dispositivo
                    val hostInfo = mapOf(
                        "ip" to host,               // O endereço IP
                        "hostname" to inet.hostName // O nome do dispositivo, se disponível
                    )

                    // Como várias threads podem acessar a lista ao mesmo tempo,
                    // usamos synchronized para garantir que não haja conflito
                    synchronized(activeHosts) {
                        activeHosts.add(hostInfo)
                    }
                }
            } catch (_: Exception) {
                // Se houver algum erro (IP não acessível, host inexistente), ignoramos
            }
        }

        // Adiciona o "future" à lista para depois aguardar a conclusão de todas as tarefas
        futures.add(future)
    }

    // Indica que não serão enviadas mais tarefas para o executor
    executor.shutdown()

    // Criamos uma thread separada para aguardar todas as tarefas terminarem
    // e depois resolver a promise, enviando os dados de volta para o JavaScript
    Thread {
        try {
            // Aguarda cada tarefa terminar
            for (f in futures) f.get() 

            // Quando todas as tarefas terminarem, envia a lista de dispositivos encontrados
            promise.resolve(activeHosts)
        } catch (e: Exception) {
            // Se ocorrer algum erro durante a espera das tarefas, retorna um erro para o JS
            promise.reject("ERR_SCAN_FAILED", "Falha ao escanear rede", e)
        }
    }.start()
}


  }
}