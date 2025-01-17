from fastapi import FastAPI
from pymongo import MongoClient
from backend.cards import card_management as cm
from backend.cards import pack_management as pm
from backend.users import user_management as um

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  
#users_database = db.get_collection("users")
#cards_database = db.get_collection("cards")

test_database = db.get_collection("hola")

app = FastAPI()

# Para probar usar `curl -X POST "http://127.0.0.1:8000/?name=belz&password=12345&mail=belz@example.com"`, cambiando los parametros
@app.post("/hola/")
async def user_add(name:str, password:str, mail:str):
    result = um.user_creation(name, password, mail)
    print("USUARIO CREADO----_AAAAA_")
    return result

# Probar usando `curl -X POST "http://127.0.0.1:8000/pack_opening/?user_id=VERELIDDELUSUARIOCREADOANTES"`
@app.post("/pack_opening/")
async def pack_opening(user_id:str):
    result = pm.pack_opening(user_id)
    print("Sobre abierto")
    return result

# Para crear cartas usar el cm.cardmanagement()