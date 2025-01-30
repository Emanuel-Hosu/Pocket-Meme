from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client.cardGame  

cards_database = db.get_collection("cards")

def card_creation():
    '''
    This method reads the cards.txt file and calls the insert method.
    '''
    with open('./backend/cards/cards.txt','r') as file:
        i=1
        for line in file:
            try:
                name, rarity = line.strip().split(',')
                print(f"Carta Insertada: {name}, {rarity}")
                card_insert(i,f"c{i}",name,rarity)
                i+=1
            except:
                print("Campo vacio, revisar")
            
            
def card_insert(id:int,photo:str,name:str,rarity:str):
    '''
    This method checks if the card already exist in the database, if not, inserts the card.
    '''
    card = {
        "_id": id,
        "photo": f"/public/cards/{photo}.png",
        "name": name,
        "rarity": rarity
    }

    if(not cards_database.find_one({"_id": id})):
        cards_database.insert_one(card)
 

def test_purge():
    '''
    Metodo para borrar toda la coleccion con el objetivo de hacer pruebas, borrar en un futuro
    '''
    cards_database.delete_many({})

def get_card(card_id:int):
    return cards_database.find_one({"_id":card_id})