from pymongo import MongoClient
import hashlib
import random

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  

user_database = db.get_collection("users")
cards_database = db.get_collection("cards")



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