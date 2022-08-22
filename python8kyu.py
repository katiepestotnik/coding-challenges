#Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. If one is even on the other is not true else false
def lovefunc( flower1, flower2 ):
    if(flower1%2 == 0 and flower2%2==0):
        return False
    elif(flower1%2 == 1 and flower2%2 == 1):
        return False
    else:
        return True
print(lovefunc(503, 115))