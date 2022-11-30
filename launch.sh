echo "\n              0000_____________0000________0000000000000000__000000000000000000+\n            00000000_________00000000______000000000000000__0000000000000000000+\n           000____000_______000____000_____000_______0000__00______0+\n          000______000_____000______000_____________0000___00______0+\n         0000______0000___0000______0000___________0000_____0_____0+\n         0000______0000___0000______0000__________0000___________0+\n         0000______0000___0000______0000_________000___0000000000+\n         0000______0000___0000______0000________0000+\n          000______000_____000______000________0000+\n           000____000_______000____000_______00000+\n            00000000_________00000000_______0000000+\n              0000_____________0000________000000007;"

tput setaf 1
echo "\nBienvenue sur le gestionnaire de production de l'API netWish\n\n"
tput sgr0

function all {
        echo "Copie du fichier .env.production vers .env"
        cp .env.production .env
        echo "Lancement de la production"
        docker-compose up -d
        echo "Lancement de la production terminé"
        exit 0
}

function tests_laucher {
        echo "\nLancement des tests en cours\n"
        docker exec -e CI=true api-container npm run test
        echo "\nLancement des tests terminé\n"
        exit 0
}

function nettoyage {
        echo "\nFermeture et nettoyage de docker en cours\n"
        docker compose down
        sleep 1
        docker image rm phpmyadmin
        sleep 1
        docker image rm mysql
        sleep 1
        docker image rm redis
        sleep 1
        docker image rm node
        sleep 1
        echo "\nFermeture et nettoyage terminé\n"
        exit 0
}

PS3="Que voulez vous lancer : "

select item in "- Tout -" "- Tests -" "- Fermeture & Nettoyage -" "- Quit -"
do
    for var in $REPLY; do
        echo "\nVous avez choisi l'item $var : $item \n"
        case $var in
                1)
                        all
                        ;;

                2)
                        tests_laucher
                        ;;

                3)
                        nettoyage
                        ;;

                4)
                        echo "Fin du script"
                        exit 0
                        ;;
                *)
                        echo "Choix incorrect"
                        ;;
        esac
    done
done