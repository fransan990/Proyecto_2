# Re-fs (Recipe) 🥘

<img  src="https://github.com/fransan990/Proyecto_2/blob/main/public/images/portada.png" alt="Portada" style="max-width: 100%;"/>

## ABOUT

<p> Web application where users can view recipes created by themselves and search for any other recipe they are interested in and can edit and delete their own recipes while they can also save the recipes they like the most in their profiles and in the Google Places API, where they can find the name and location of the restaurants where these recipes are located.</p>

## LANGUAJES AND TOOLS

<p align="left">
 
 <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
 </a>

 <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
  <img src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40" style="max-width: 100%;">
 </a>
 
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>  </a>

<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
 </a> 
 
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
 
 <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>  </a>
 
</p>


## RUTES


### User

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/user/signup` | Signup | False | All | 
| `POST`| `/user/signup` | Signup | False | All | 
| `GET` | `/user/login` | Login | False | All | 
| `POST`| `/user/login` | Login | False | All | 
| `GET` | `/user/about` | About | False | All |
| `GET` | `/user/listRecipeOwn` | All recipe own | True | All |
| `POST` | `/user/:id/recipeFav` | Save recipe | True | All |
| `POST` | `/user/:id/recipeFav/delete` | Save recipe | False | All |


### Recipe

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------| 
| `GET` | `/recipe/:id/details` | Details Recipe | True | All / Admin |
| `POST`| `/recipe/:id/details` | Create Comment | True | All |
| `GET` | `/recipe/create` | Find ingredients | False | All |
| `POST`|	`/recipe/create` | Create recipe | False | All |
| `GET`| `/recipe/listRecipe` | All recipe |  True | All / Admin |
| `GET` | `/recipe/listRecipeShe`| Search recipe |  True | All |
| `GET`| `/recipe/:id/edit`| Edit recipe | False | All |
| `POST`| `/recipe/:id/edit`| Edit recipe | False | All |
| `POST`| `/recipe/:id/delete`| Delete recipe | False | All |
| `POST`| `/recipe/:id/delete`| Delete recipe | False | All |
| `GET`| `/recipe/:id/like`| Like recipe | False | All |


### Ingredient

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/ingredient/create` | Create ingredient | False | All |
| `POST`| `/ingredient/create` | Create ingredient | False | All |
| `GET` | `/ingredient/list` | All ingredient | False | All |
| `GET` |	`/ingredient/:id/edit` | Edit ingredient | False | All |
| `POST` |	`/ingredient/:id/edit` | Edit ingredient | False | All |
| `POST`| `/ingredient/:id/delete` | Delete ingredient | False | All |

### Comment

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/comment/:id/edit` | Edit comment | False | All |
| `POST`| `/comment/:id/edit` | Edit comment | False | All |
| `POST` | `/comment/:id/delete` | Delete comment | False | Admin | 





