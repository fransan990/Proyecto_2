# Recipe 🥘

## LANGUAJES AND TOOLS

<p align="left">
<a href="https://angular.io" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg" alt="angularjs" width="65" height="65"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" width="65" height="65"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg" alt="css3" width="65" height="65"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg" alt="html5" width="65" height="65"/> </a> <a href="https://pugjs.org" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/pug.svg" alt="pug" width="65" height="65"/> </a>
</p>

## RUTES


### User

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/user/registro` | Signup |
| `POST`| `/user/registro` | Signup |
| `GET` | `/user/inicio-sesion` | Login |
| `POST`| `/user/inicio-sesion` | Login |
| `GET` | `/user/about` | About |
| `GET` | `/user/listaReceta` | All recipe own |
| `POST` | `/user/:id/recipeFav` | Save recipe |
| `POST` | `/user/:id/recipeFav/delete` | Save recipe |


### Recipe

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/recipe/VerRecetas` | All Recipe |
| `GET` | `/recipe/VerRecetas/details` | See recipe deatails |
| `GET` |	`/recipe/edit` | Edit recipe | 
| `POST`| `/recipe/edit` | Edit recipe |
| `GET` | `/recipe/create`| Create recipe |
| `POST`| `/recipe/create`| Create recipe |
| `POST`| `/recipe/delete`| Delete recipe | 
| `GET`| `/recipe/listRecipeShe`| Search recipe | 
| `GET`| `/recipe/:id/like`| Like recipe | 


### Ingredient

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/ingredient/create` | Create ingredient |
| `POST`| `/ingredient/create` | Create ingredient |
| `GET` | `/ingredient/list` | All ingredient |
| `GET` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST`| `/ingredient/:id/delete` | Delete ingredient |

## Comment

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/comment/:id/edit` | Edit comment |
| `POST`| `/comment/:id/edit` | Edit comment |
| `POST` | `/comment/:id/delete` | Delete comment |
| `GET` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST`| `/ingredient/:id/delete` | Delete ingredient |




