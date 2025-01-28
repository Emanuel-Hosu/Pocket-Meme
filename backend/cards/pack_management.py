from pymongo import MongoClient
import random
import backend.users.user_management as um

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  

users_database = db.get_collection("users")
cards_database = db.get_collection("cards")

def pack_opening(user_id):
    users_database.update_one({"_id":user_id},{"$push": {"cards": {"$each": pack_creation(user_id)}}})
    print("Cartas añadidas")

def pack_creation(user_id):
    pack = []
    for i in range(3):
        n = random.randint(1,100)
        if n > 70:
            if n > 85:
                if n > 89:
                    card_number = random.choice(list(cards_database.find({"rarity":"legendary"}, {"_id":1}))) #De tipo legendario
                    um.addExp(60,user_id)
                    um.addMoney(60,user_id)
                else:
                    card_number = random.choice(list(cards_database.find({"rarity":"epic"}, {"_id":1}))) #De tipo épico
                    um.addExp(30,user_id)
                    um.addMoney(30,user_id)
            else:
                card_number = random.choice(list(cards_database.find({"rarity":"rare"}, {"_id":1}))) #De tipo raro
                um.addExp(10,user_id)
                um.addMoney(10,user_id)
        else: 
            card_number = random.choice(list(cards_database.find({"rarity":"common"}, {"_id":1}))) #De tipo normal
            um.addExp(1,user_id)
            um.addMoney(1,user_id)
        print(card_number["_id"]+1)
        pack.append(str(card_number["_id"]))
    return pack
