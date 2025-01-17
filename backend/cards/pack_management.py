from pymongo import MongoClient
import random

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  

users_database = db.get_collection("users")
cards_database = db.get_collection("cards")

def pack_opening(user_id):
    users_database.update_one({"_id":user_id},{"$push": {"cards": {"$each": pack_creation()}}})
    print("Cartas añadidas")

def pack_creation():
    pack = []
    for i in range(5):
        card_number = random.randint(1,cards_database.count_documents({}))
        card_str = cards_database.find_one({"_id":card_number}, {"_id":1})
        pack.append(str(card_str["_id"]))
    return pack
