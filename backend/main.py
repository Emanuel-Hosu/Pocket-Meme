from fastapi import FastAPI
from pymongo import MongoClient
from backend.cards import card_management as cm

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  
#users_database = db.get_collection("users")
#cards_database = db.get_collection("cards")

test_database = db.get_collection("hola")

app = FastAPI() #Sin hacer -belz


@app.post("/")
async def read_root():
    result = cm.card_creation()
    print("CREADO")
    # Probar la llamada a la api ejecutando: `curl -X POST http://127.0.0.1:8000` en la terminal
    return result

# cm.card_creation() #Una vez exista la API, cambiar esto por su respectiva llamada de API. Por ahora solo llama al metodo de card_management

