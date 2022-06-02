# Recipe 🥘

## RUTES


## User

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


## Recipe

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


## Ingredient

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/ingredient/create` | Create ingredient |
| `POST`| `/ingredient/create` | Create ingredient |
| `GET` | `/ingredient/list` | All ingredient |
| `GET` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST`| `/ingredient/:id/delte` | Delete ingredient |

## Comment

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/comment/:id/edit` | Edit comment |
| `POST`| `/comment/:id/edit` | Edit comment |
| `POST` | `/comment/:id/delete` | Delete comment |
| `GET` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST` |	`/ingredient/:id/edit` | Edit ingredient |
| `POST`| `/ingredient/:id/delete` | Delete ingredient |




