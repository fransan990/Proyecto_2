       
|        Method  |    -   |     URL   |  -           |           Description|
|----------------|--------|-----------|--------------|----------------------|
|
|
|Pagina de inicio| | |
| | | |
|
|        GET     |                /                  |              Home.   |
|        GET     |             /recipe               |             Recipe   |
|        GET     |             /about                |              About   |
|     -----------------------------------------------------------------
|
|                     ---Pagina de login----
|
|        GET             /user                                Registro User
|        GET             /user/login                          Formulario Login
|        GET             /user/CrearCuenta                    Registro
|        POST            /user/CrearCuenta                    Registro
|       POST            /user/CerrarSesion                   Cerrar Sesion
|
|      --------------------------------------------------------------------
|
|                      ---Pagina de recetas---
|
|        GET             /recipe/VerRecetas                     See recipe
|        GET             /recipe/VerRecetas/details             See recipe
|        GET             /recipe/edit                           Edit
|        POST            /recipe/edit                           Edit
|        GET             /recipe/create                         Create
|        POST            /recipe/create                         Creat
|        POST            /recipe/delete                         Delete
|  ------------------------------------------------------------------------
