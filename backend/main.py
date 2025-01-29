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
@app.post("/pack_opening/") #cambiar esto a futuro por la url correspondiente
async def pack_opening(user_id:str):
    result = pm.pack_opening(user_id)
    print("Sobre abierto")
    return result

@app.post("/starring_card/")
async def starred_card(user_id:str,card_id:str):
    card = um.add_to_starred(user_id,card_id)
    print("Añadido a favoritos")
    return card

@app.post("/removing_starred_card/")
async def remove_starred_card(user_id:str,card_id:str):
    card = um.remove_from_starred(user_id,card_id)
    print("Eliminado de favoritos")
    return card