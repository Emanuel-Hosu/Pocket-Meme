from pymongo import MongoClient
import hashlib
import random

import os
import yagmail
from dotenv import load_dotenv

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  

user_database = db.get_collection("users")
cards_database = db.get_collection("cards")

load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD") #CREAR UN .env en /backend/users/.env con EMAIL=email\nPASSWORD=contraseña


def user_creation(name , password, mail):
    '''
    encrypts the password
    '''
    hash_object = hashlib.sha256()
    hash_object.update(password.encode())
    hash_password = hash_object.hexdigest()
    
    '''
    generate a user_id
    '''
    
    user_id = ""
    
    arrayLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    arrayNumbers = ['0','1','2','3','4','5','6','7','8','9']
    
    for letter in range(4):
        if (random.randint(0,1) == 0):
            user_id += arrayNumbers[random.randint(0,9)] + arrayLetters[random.randint(0,25)]
        else:
            user_id += arrayLetters[random.randint(0,25)] + arrayNumbers[random.randint(0,9)]
    
    '''
    if the user_id already exists, generate a new one until it is unique
    '''
    if user_database.find_one({"_id": user_id}):
        while user_database.find_one({"_id": user_id}): 
            for letter in range(4):
                if (random.randint(0,1) == 0):
                    user_id += arrayNumbers[random.randint(0,9)] + arrayLetters[random.randint(0,25)]
                else:
                    user_id += arrayLetters[random.randint(0,25)] + arrayNumbers[random.randint(0,9)]
    '''
    create the new user
    '''
    user = {
        "_id": user_id,
        "name": name,
        "password": hash_password,
        "mail": mail,
        "cards": [],
        "starred_cards": [],
        "exp": 0,
        "MaxExp": 100,
        "level": 1,
        "pfp" : "",
        "money" : 0
    } 
    
    if(not user_database.find_one({"mail": mail})):
        user_database.insert_one(user)
        yag = yagmail.SMTP(EMAIL, PASSWORD)
        yag.send(to=mail, subject="Confirmación de cuenta", contents="Su cuenta se ha creado correctamente :D !\n\n-ZMiK0_ del equipo de Pocket Meme")
    else:
        return "Mail already used"
    

def addExp (expNum , user_id):
    
    user = user_database.find_one({"_id": user_id})
    exp = user["exp"] + expNum
    
    if(exp>= user["MaxExp"]):
        exp = exp - user["MaxExp"]
        level = user["level"] + 1
        MaxExp = user["MaxExp"] + (user["MaxExp"] * 0.3)
        user_database.update_one({"_id": user_id}, {"$set": {"level": level} , "$set": {"MaxExp": MaxExp} , "$set": {"exp": exp}})
        
        return True
    
    user_database.update_one({"_id": user_id}, {"$set": {"exp": exp}})
    
    return False

    
def addMoney (moneyNum , user_id):
    user = user_database.find_one({"_id": user_id})
    money = user["money"] + moneyNum
    user_database.update_one({"_id": user_id}, {"$set": {"money": money}})

def change_pfp (pfp , user_id):
    user_database.update_one({"_id": user_id}, {"$set": {"pfp": pfp}})

def add_to_starred(user_id,card_id):
    user_database.update_one({"_id":user_id},{"$push": {"starred_cards": card_id}})

def remove_from_starred(user_id,card_id):
    user_database.update_one({"_id":user_id},{"$pull": {"starred_cards": card_id}})

def get_inventory(user_id:str,isStarred:bool):

    if isStarred:
        result = user_database.find_one({"_id": user_id}, {"_id": 0, "starred_cards": 1})
    else:
        result = user_database.find_one({"_id": user_id}, {"_id": 0, "cards": 1})
    
    if not result:
        return None 

    if "cards" in result and isinstance(result["cards"], list):
        try:
            cards_as_int = [int(card) for card in result["cards"]]
            return cards_as_int
        except ValueError as e:
            print(f"Error al convertir las cartas a enteros: {e}")
            return None
 
    return []

def check_auth(mail:str, password:str):
    hash_object = hashlib.sha256()
    hash_object.update(password.encode())
    hash_password = hash_object.hexdigest()

    user = user_database.find_one({"mail":mail})
    if user is None:
        return False
    
    if hash_password == user["password"]:
        return True
    else:
        return False
    
    
def get_id(mail:str):
    user = user_database.find_one({"mail": mail})
    user_id = str(user["_id"]) 

    return user_id