package expo.modules.connection

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class local_device_searchModule : Module() {
  // Cada classe de módulo deve implementar a função de definição. A definição consiste em componentes
  // que descrevem a funcionalidade e o comportamento do módulo.
  // Consulte https://docs.expo.dev/modules/module-api para obter mais detalhes sobre os componentes disponíveis.


  override fun definition() = ModuleDefinition {
    Name("local_device_search") // Define o nome do módulo que o código JavaScript usará para se referir ao módulo. Recebe uma string como argumento.

    Function("hello") {
      // Define uma função chamada "hello" que pode ser chamada do código JavaScript.
      "Hello from local_device_searchModule"
    }
  }
}
