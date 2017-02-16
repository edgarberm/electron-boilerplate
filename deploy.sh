#!/bin/bash

#!/ TODO: insertar de alguna manera la versión en el 'commit'
#!/ Test: git commit -m 'Despliegue para producción v1.2.3@beta.2'
#!/ Producción: git commit -m 'Despliegue para producción v1.2.3'

# Colors
red=`tput setaf 1`
green=`tput setaf 2`
yellow='\033[1;33m'
reset='\033[0m'

# Commands
if [ $# -eq 1 ]
then
  case "$1" in
    test)
      echo "Ejecutando compilación pata test..."
      echo ""
      echo -e "Copiando ficheros: ${yellow}api-ilusia${reset}."
      cp -R api-ilusia/dev/* public/api-ilusia/
      echo -e "${green}Ficheros copiados con exito.${reset}"
      echo ""
      echo "Limpiando y compilando para test..."
      npm run build
      echo -e "${green}Compilación para test ok!${reset}"
      echo ""
      echo "Ejecutando comandos de Git..."
      # git add .
      # git commit -m 'Despliegue para testeo'
      # # TODO: hay que cambiar la rama para testeo
      # git push -u origin master
      echo -e "${green}Commit ok!${reset}"
      echo -e "${green}Compilación para testeo ejecutada con exito!${reset}"
      ;;
    prod)
      echo "Ejecutando compilación pata producción..."
      echo ""
      echo -e "Copiando ficheros: ${yellow}api-ilusia${reset}."
      cp -R api-ilusia/prod/* public/api-ilusia/
      echo -e "${green}Ficheros de copiados con exito.${reset}"
      echo ""
      echo "Limpiando y compilando para producción..."
      npm run build:prod
      echo -e "${green}Compilación para producción ok!${reset}"
      echo ""
      echo "Ejecutando comandos de Git..."
      # git add .
      # git commit -m 'Despliegue para producción'
      # git push -u origin master
      echo -e "${green}Commit ok!${reset}"
      echo -e "${green}Compilación para producción ejecutada con exito!${reset}"
      ;;
    *)
      echo -e "${yellow}Warning:${reset} El parámetro no es correcto."
      exit 1
  esac
else
  echo -e "${red}Error:${reset} Número de parámetros incorrecto."
fi
