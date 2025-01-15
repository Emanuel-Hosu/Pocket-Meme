from fastapi import FastAPI
from pymongo import MongoClient
import cards.card_management as cm

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  
#users_database = db.get_collection("users")
#cards_database = db.get_collection("cards")

test_database = db.get_collection("hola")

app = FastAPI() #Sin hacer -belz

app.include_router() #Haciendose xddd -belz

cm.card_creation() #Una vez exista la API, cambiar esto por su respectiva llamada de API. Por ahora solo llama al metodo de card_management

