# Recipe 🥘

## LANGUAJES AND TOOLS

<p align="left">
 
   <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
## RUTESs


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




