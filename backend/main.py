from datetime import timedelta
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from pymongo import MongoClient
from backend.cards import card_management as cm
from backend.cards import pack_management as pm
from backend.users import user_management as um
from jose import JWTError, jwt

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  
#users_database = db.get_collection("users")
#cards_database = db.get_collection("cards")

test_database = db.get_collection("hola")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Permite solicitudes desde este origen (React)
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos los headers
)

# Para probar usar `curl -X POST "http://127.0.0.1:8000/?name=belz&password=12345&mail=belz@example.com"`, cambiando los parametros
@app.post("/api/user_creation/")
async def user_add(name:str, password:str, mail:str):
    result = um.user_creation(name, password, mail)
    print("USUARIO CREADO----_AAAAA_")
    return result

@app.post("/api/login/")
async def login(mail:str, password:str):
    if um.check_auth(mail, password):
        id = um.get_id(mail)
        return {"message": "Login correcto", "user_id": id}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Mail o contraseña incorrectos"
        )
    

# Probar usando `curl -X POST "http://127.0.0.1:8000/pack_opening/?user_id=VERELIDDELUSUARIOCREADOANTES"`
@app.post("/api/pack_opening/") 
async def pack_opening(user_id:str):
    result = pm.pack_opening(user_id)
    print("Sobre abierto")
    return result

@app.post("/api/starring_card/")
async def starred_card(user_id:str,card_id:str):
    card = um.add_to_starred(user_id,card_id)
    print("Añadido a favoritos")
    return card

@app.post("/api/removing_starred_card/")
async def remove_starred_card(user_id:str,card_id:str):
    card = um.remove_from_starred(user_id,card_id)
    print("Eliminado de favoritos")
    return card

@app.get("/api/get_inventory/") #curl -X GET "http://127.0.0.1:8000/api/get_inventory/?user_id=w08u6z7l&isStarred=false"
async def get_inventory(user_id:str,isStarred:bool):
    index_inventory = um.get_inventory(user_id,isStarred)
    inventory = []
    for i in index_inventory:
        inventory.append(cm.get_card(i))
    print(inventory)
    return inventory